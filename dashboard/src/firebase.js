import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, onSnapshot, doc, setDoc } from 'firebase/firestore';

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

// ─── BPS Score Calculator ─────────────────────────────────────────────────────
// Tạm thời dùng scoring đơn giản để test app. Sẽ tinh chỉnh sau.
export function computeBPS(bid) {
  const items = bid.items || [];
  if (items.length === 0) return { bps_score: 0, flag: 'GRAY' };

  let score = 4.0; // base score

  // Số lượng mặt hàng: nhiều danh mục = giá trị cao hơn
  if (items.length >= 5)  score += 1.0;
  if (items.length >= 15) score += 1.0;
  if (items.length >= 30) score += 0.5;

  // Nhóm thuốc: ưu tiên nhóm 1-2 (biệt dược gốc / tương đương sinh học)
  const groups = items.map(it => String(it['Nhóm thuốc'] || '').trim()).filter(Boolean);
  if (groups.some(g => g === '1' || g === '2')) score += 2.0;
  else if (groups.some(g => g === '3'))          score += 1.0;
  else if (groups.some(g => g === '4'))          score += 0.5;

  // Gói thầu còn thời gian > 7 ngày
  const closeTime = bid['Thời điểm đóng thầu'];
  if (closeTime) {
    const t = parseDateTime(closeTime);
    const daysLeft = t ? (t - Date.now()) / 86400000 : -1;
    if (daysLeft > 7) score += 0.5;
  }

  // Có giá gói thầu cụ thể (không phải NA / undefined)
  const gia = bid['Giá gói thầu'];
  if (gia && gia !== 'NA' && gia !== '' && !isNaN(Number(String(gia).replace(/,/g, '')))) {
    score += 0.5;
  }

  const bps_score = Math.min(10, parseFloat(score.toFixed(1)));
  const flag = bps_score >= 8 ? 'GREEN' : bps_score >= 5 ? 'YELLOW' : 'RED';
  return { bps_score, flag };
}

// ─── Date parser for Vietnamese datetime strings ───────────────────────────────
// Ví dụ: "10:00 15-05-2025" hoặc "2025-05-15T10:00:00"
export function parseDateTime(str) {
  if (!str || str === 'NA') return null;
  // Try ISO first
  const iso = new Date(str);
  if (!isNaN(iso.getTime())) return iso;
  // Try "HH:mm dd-MM-yyyy"
  const m = str.match(/(\d{1,2}):(\d{2})\s+(\d{1,2})-(\d{1,2})-(\d{4})/);
  if (m) {
    const [, hh, mm, dd, mo, yyyy] = m;
    return new Date(`${yyyy}-${mo.padStart(2,'0')}-${dd.padStart(2,'0')}T${hh.padStart(2,'0')}:${mm}:00`);
  }
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
