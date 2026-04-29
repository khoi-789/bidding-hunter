import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, onSnapshot, doc, setDoc } from 'firebase/firestore';
import { MOCK_CUSTOMERS, MOCK_PRODUCTS } from './mockData';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// ─── Collection name (matches crawler output) ─────────────────────────────────
const BIDS_COLLECTION = 'Bids';
const CRAWLER_HISTORY_COLLECTION = 'CrawlerHistory';

// ─── BPS Score Calculator v2 ──────────────────────────────────────────────────
// - Doanh thu dự kiến (35%): Logarithmic (Max 3.5)
// - Thời gian còn lại (25%): Parabolic (Max 2.5, 14 ngày đạt 80%)
// - % Khớp thầu (20%): Linear (Max 2.0)
// - Công nợ (10%): Logarithmic Inverse (Max 1.0)
// - Base score (10%): 1.0 điểm mặc định
export function computeBPS(bid) {
  const items = bid.items || [];
  if (items.length === 0) return { bps_score: 0, flag: 'GRAY' };

  let score = 1.0; // 10% Base Score

  // 1. Tính toán Revenue & Match Count trước (Sử dụng logic giống UI)
  let matchedCount = 0;
  let revenue = 0;
  items.forEach(item => {
    const itemName = String(item['Hoạt chất'] || item['Tên thuốc'] || '').toLowerCase().trim();
    const p = MOCK_PRODUCTS.find(prod => {
      const prodName = String(prod.Hoat_Chat || '').toLowerCase().trim();
      return itemName.includes(prodName) || prodName.includes(itemName);
    });
    
    if (p) {
      const bidQty = parseVND(item['Số lượng']);
      const bidTotal = parseVND(item['Giá trần (VND)']);
      if (bidQty > 0) {
        const bidUnitPrice = bidTotal / bidQty;
        if ((p.Gia_Niem_Yet || 0) < bidUnitPrice) {
          matchedCount++;
          if (p.SL_Ton > 0) {
            const effQty = Math.min(bidQty, p.SL_Ton);
            revenue += (bidUnitPrice * effQty * 0.8);
          }
        }
      }
    }
  });

  // Factor 1: Revenue (35% - Max 3.5) - Logarithmic
  // Scale: 5 tỷ (5e9) đạt max. Sử dụng Math.log10(1 + x/1e8)
  const revFactor = 3.5 * Math.log10(1 + revenue / 1e8) / Math.log10(51); 
  score += Math.min(3.5, revFactor);

  // Factor 2: Time (25% - Max 2.5) - Parabolic
  // Công thức: y = 2.5 * (1 - (1 - t/25)^2). Tại t=14, y ≈ 2.0 (80%)
  const closeTime = bid['Thời điểm đóng thầu'] || bid['thoi_diem_dong_thau'];
  if (closeTime) {
    const t = parseDateTime(closeTime);
    const daysLeft = t ? (t - Date.now()) / 86400000 : 0;
    if (daysLeft > 0) {
      const cappedDays = Math.min(25, daysLeft);
      const timeFactor = 2.5 * (1 - Math.pow(1 - cappedDays / 25, 2));
      score += timeFactor;
    }
  }

  // Factor 3: Match Rate (20% - Max 2.0) - Linear
  const winRatio = items.length > 0 ? (matchedCount / items.length) : 0;
  score += (winRatio * 2.0);

  // Factor 4: Debt (10% - Max 1.0) - Logarithmic Inverse
  // Tìm khách hàng tương ứng
  const hospitalName = bid['Chủ đầu tư'] || bid['chu_dau_tu'] || '';
  const customer = MOCK_CUSTOMERS.find(c => hospitalName.includes(c.Ten_Benh_Vien) || c.Ten_Benh_Vien.includes(hospitalName));
  const debt = customer ? (customer.Du_No_Hien_Tai || 0) : 0;
  // Càng nhiều nợ càng ít điểm. Nợ 1 tỷ (1e9) thì điểm về ~0.
  const debtFactor = 1.0 * (1 - Math.log10(1 + debt / 5e7) / Math.log10(21));
  score += Math.max(0, debtFactor);

  const bps_score = Math.min(10, parseFloat(score.toFixed(1)));
  const flag = bps_score >= 8 ? 'GREEN' : bps_score >= 5 ? 'YELLOW' : 'RED';
  return { bps_score, flag };
}

// Helper local cho parse tiền (tránh circular dependency)
function parseVND(val) {
  if (!val || val === 'NA') return 0;
  const clean = String(val).replace(/[^\d]/g, '');
  const num = parseFloat(clean);
  return isNaN(num) ? 0 : num;
}

// ─── Date parser for Vietnamese datetime strings ───────────────────────────────
// Ví dụ: "10:00 15-05-2025" hoặc "2025-05-15T10:00:00"
export function parseDateTime(str) {
  if (!str || str === 'NA') return null;
  
  // 1. Try "HH:mm DD/MM/YYYY" hoặc "HH:mm DD-MM-YYYY"
  const m1 = str.match(/(\d{1,2}):(\d{2})\s+(\d{1,2})[/-](\d{1,2})[/-](\d{4})/);
  if (m1) {
    const [, hh, mm, dd, mo, yyyy] = m1;
    return new Date(yyyy, mo - 1, dd, hh, mm);
  }

  // 2. Try "DD/MM/YYYY HH:mm" hoặc "DD-MM-YYYY HH:mm"
  const m2 = str.match(/(\d{1,2})[/-](\d{1,2})[/-](\d{4})\s+(\d{1,2}):(\d{2})/);
  if (m2) {
    const [, dd, mo, yyyy, hh, mm] = m2;
    return new Date(yyyy, mo - 1, dd, hh, mm);
  }

  // 3. Try ISO fallback
  const iso = new Date(str);
  if (!isNaN(iso.getTime())) return iso;

  return null;
}

// ─── Normalize bid from Firestore → app-compatible shape ──────────────────────
function normalizeBid(id, data) {
  const { bps_score, flag } = computeBPS(data);
  const items = data.items || [];

  // Lấy tên thuốc đại diện đầu tiên (cho cột "Thuốc tiêu biểu")
  const topItem = items[0] || {};

  return {
    id,
    // — Primary fields (keep original Vietnamese keys for display) —
    ma_goi_thau:        id,
    ten_goi_thau:       data['Tên gói thầu']           || data['ten_goi_thau'] || '',
    chu_dau_tu:         data['Chủ đầu tư']             || data['chu_dau_tu']   || '',
    gia_goi_thau:       data['Giá gói thầu']           || 'NA',
    thoi_diem_dong_thau: data['Thời điểm đóng thầu']  || data['thoi_diem_dong_thau'] || '',
    thoi_diem_mo_thau:  data['Thời điểm mở thầu']     || '',
    ngay_dang_tai:      data['Ngày đăng tải']          || '',
    thoi_gian_thuc_hien: data['Thời gian thực hiện gói thầu'] || '',
    chao_gia_tu:        data['Thời điểm bắt đầu chào giá trực tuyến'] || '',
    chao_gia_den:       data['Thời điểm kết thúc chào giá trực tuyến'] || '',
    link:               data['Link chi tiết gói thầu'] || data['link'] || '',
    bidForm:            data['bidForm']                || '',

    // — Derived fields —
    items,
    so_danh_muc:        items.length,
    thuoc_tieu_bieu:    topItem['Tên hàng hóa']        || topItem['Hoạt chất'] || '',
    hoat_chat_dau:      topItem['Hoạt chất']           || '',

    // — BPS (auto-computed) —
    bps_score,
    flag,
    bps_status:         items.length === 0 ? 'PENDING_ANALYSIS' : 'SCORED',

    // — Giữ raw data để debug —
    _raw: data,
  };
}

// ─── One-time fetch ────────────────────────────────────────────────────────────
export async function getBids() {
  const snap = await getDocs(collection(db, BIDS_COLLECTION));
  return snap.docs.map(d => normalizeBid(d.id, d.data()));
}

// ─── Real-time listener ────────────────────────────────────────────────────────
export function subscribeToBids(callback) {
  let isInitialCall = true;
  return onSnapshot(collection(db, BIDS_COLLECTION), (snapshot) => {
    const allBids = snapshot.docs.map(d => normalizeBid(d.id, d.data()));
    const changes = snapshot.docChanges();
    const newCount = changes.filter(c => c.type === 'added').length;
    const dupCount = changes.filter(c => c.type === 'modified').length;

    if (isInitialCall) {
      isInitialCall = false;
      callback(allBids, { newCount: 0, duplicateCount: 0, isInitial: true });
    } else {
      callback(allBids, { newCount, duplicateCount: dupCount, isInitial: false });
    }
  });
}

// ─── Crawler History listener ──────────────────────────────────────────────────
export function subscribeToHistory(callback) {
  return onSnapshot(collection(db, CRAWLER_HISTORY_COLLECTION), (snapshot) => {
    const history = snapshot.docs.map(d => {
      const data = d.data();
      return {
        id: d.id,
        ...data,
        // Chuyển Firebase Timestamp sang Date object
        time: data.time?.toDate?.() || new Date(data.time) || new Date()
      };
    }).sort((a, b) => b.time - a.time);
    callback(history);
  });
}
