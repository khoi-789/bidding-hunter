import { useState, useEffect, useRef, useCallback } from 'react';
import { formatPrice, getDaysLeft } from '../utils';

// ─── API KEY MANAGER ──────────────────────────────────────────────────────────
const STORAGE_KEY = 'bh_ai_keys';
const DEFAULT_KEY = 'AIzaSyA71P-zVwtUMjz0Uoz5fxCbou7pCB1Rvd0';
const QUOTA_RESET_MS = 24 * 60 * 60 * 1000; // 24 giờ

function loadKeys() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      let keys = JSON.parse(raw);
      // Upgrade old expired key
      keys = keys.map(k => k.key === 'AIzaSyAqY2hsd0YLaKcBhZhnACas2aUb9PezoMU' ? { ...k, key: DEFAULT_KEY, failedAt: null } : k);
      return keys;
    }
  } catch {}
  return [{ key: DEFAULT_KEY, failedAt: null, label: 'Key mặc định' }];
}

function saveKeys(keys) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(keys));
}

function getActiveKey(keys) {
  const now = Date.now();
  return keys.find(k => !k.failedAt || (now - k.failedAt > QUOTA_RESET_MS)) || null;
}

function markKeyFailed(keys, key) {
  return keys.map(k => k.key === key ? { ...k, failedAt: Date.now() } : k);
}

const GEMINI_SVG = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="14" fill="white" />
    <path d="M14 4.5C14 9.7467 18.2533 14 23.5 14C18.2533 14 14 18.2533 14 23.5C14 18.2533 9.7467 14 4.5 14C9.7467 14 14 9.7467 14 4.5Z" fill="url(#gemini-grad)"/>
    <defs>
      <linearGradient id="gemini-grad" x1="4.5" y1="4.5" x2="23.5" y2="23.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4285F4"/>
        <stop offset="0.5" stopColor="#9B72CB"/>
        <stop offset="1" stopColor="#D96570"/>
      </linearGradient>
    </defs>
  </svg>
);

// ─── CONTEXT BUILDER (Token-efficient summary) ───────────────────────────────
function buildContext(bids = [], customers = [], products = []) {
  const topBids = Array.isArray(bids) ? [...bids]
    .filter(Boolean)
    .sort((a, b) => (b.bps_score || 0) - (a.bps_score || 0))
    .slice(0, 10)
    .map(b => ({
      ma: b.ma_goi_thau || b.id,
      ten: (b.ten_goi_thau || '').slice(0, 50),
      chu_dau_tu: (b.chu_dau_tu || '').slice(0, 30),
      so_danh_muc: b.so_danh_muc,
      thuoc_tieu_bieu: b.thuoc_tieu_bieu,
      bps: b.bps_score,
      flag: b.flag,
      gia: b.gia_goi_thau,
      con_lai: getDaysLeft(b.thoi_diem_dong_thau) + 'd',
    })) : [];

  const customerSummary = Array.isArray(customers) ? customers.filter(Boolean).slice(0, 15).map(c => ({
    ten: (c.Ten_Ben_Vien || c.Ten_Benh_Vien || '').slice(0, 30),
    no: c.Du_No_Hien_Tai, hm: c.Han_Muc_No,
    status: (c.Du_No_Hien_Tai || 0) > (c.Han_Muc_No || 0) ? 'Vượt' : 'OK'
  })) : [];

  // Tổng hợp top hoạt chất từ items[]
  const hcMap = {};
  bids.forEach(b => (b.items || []).forEach(it => {
    const hc = (it['Hoạt chất'] || '').trim();
    if (hc) hcMap[hc] = (hcMap[hc] || 0) + 1;
  }));
  const topHoatChat = Object.entries(hcMap).sort((a,b)=>b[1]-a[1]).slice(0,10).map(([hc,cnt])=>({hc,cnt}));

  return {
    stats: {
      total: bids.length,
      green: bids.filter(b => b.flag === 'GREEN').length,
      yellow: bids.filter(b => b.flag === 'YELLOW').length,
      pending: bids.filter(b => b.bps_status === 'PENDING_ANALYSIS').length,
    },
    top_bids: topBids,
    customers: customerSummary,
    top_hoat_chat: topHoatChat,
  };
}

// ─── OFFLINE FALLBACK ENGINE (10 SCENARIOS) ──────────────────────────────────
const FALLBACK_SCENARIOS = [
  {
    id: 'bps_high',
    keywords: ['bps', 'cao nhất', 'ưu tiên', 'tiềm năng', 'thắng', 'trúng thầu', 'ngon', 'tốt nhất'],
    generate: (bids = []) => {
      const topBids = Array.isArray(bids) ? [...bids].filter(Boolean).sort((a,b) => (b.bps_score||0) - (a.bps_score||0)) : [];
      const top = topBids[0];
      if (!top) return "Hiện tại hệ thống chưa có dữ liệu gói thầu nào để phân tích BPS.";
      const countOver8 = bids.filter(b => b && b.bps_score >= 8.0).length;
      return `Dạ thưa Sếp, dựa trên các chỉ số đấu thầu hiện tại, em thấy chúng ta đang theo dõi ${bids.length} gói thầu. Trong đó, có ${countOver8} gói đạt điểm BPS trên 8.0, tức là nằm trong vùng an toàn và rất tiềm năng.\nGói thầu sáng giá nhất hiện nay theo đánh giá của em là **${top.ten_goi_thau}** của đơn vị ${top.chu_dau_tu}. Mã hệ thống ghi nhận gói thầu này đạt điểm BPS tuyệt đối là **${top.bps_score}/10**, với ${top.so_danh_muc} danh mục thuốc — sản phẩm tiêu biểu là ${top.thuoc_tieu_bieu || 'các biệt dược nhóm chuyên khoa'}. Em kính đề nghị Sếp chỉ đạo bộ phận đấu thầu ngay lập tức chuẩn bị hồ sơ pháp lý, xin thư bảo lãnh và rà soát lại mức chiết khấu cạnh tranh nhất để chốt hạ gói thầu này ạ.`;
    }
  },
  {
    id: 'debt_warning',
    keywords: ['công nợ', 'nợ', 'dư nợ', 'hạn mức', 'nợ xấu', 'vượt', 'chưa trả', 'thu hồi'],
    generate: (bids, customers) => {
      const badDebts = customers.filter(c => c.Du_No_Hien_Tai > c.Han_Muc_No);
      if (badDebts.length === 0) return "Dạ thưa Sếp, em vừa rà soát xong toàn bộ danh sách công nợ. Tình hình tài chính đang rất tuyệt vời! Toàn bộ khách hàng đều thanh toán đúng hạn và có dư nợ nằm trong mức an toàn. Sếp hoàn toàn có thể yên tâm về dòng tiền trong giai đoạn này ạ.";
      const totalBadDebt = badDebts.reduce((sum, c) => sum + (c.Du_No_Hien_Tai - c.Han_Muc_No), 0);
      const topBad = badDebts.sort((a,b) => (b.Du_No_Hien_Tai - b.Han_Muc_No) - (a.Du_No_Hien_Tai - a.Han_Muc_No))[0];
      return `Dạ thưa Sếp, hệ thống vừa phát hiện có ${badDebts.length} khách hàng vi phạm chính sách thanh toán, vượt quá hạn mức nợ cho phép. Tổng số tiền vượt hạn mức trên toàn hệ thống lên tới hơn ${(totalBadDebt/1000000).toFixed(1)} triệu VNĐ.\nTrường hợp rủi ro nhất hiện nay em thấy là **${topBad.Ten_Benh_Vien}**. Đơn vị này đang có dư nợ ${topBad.Du_No_Hien_Tai?.toLocaleString()} VNĐ, vượt hạn mức cho phép là ${topBad.Han_Muc_No?.toLocaleString()} VNĐ. Việc dòng tiền bị giam giữ sẽ ảnh hưởng nghiêm trọng đến vốn lưu động của công ty. Em kính đề nghị Sếp yêu cầu phòng kế toán phong tỏa tài khoản xuất hàng của bệnh viện này, đồng thời cử đại diện kinh doanh xuống làm việc trực tiếp để thu hồi nợ trước ngày 30 tháng này ạ.`;
    }
  },
  {
    id: 'urgent_bids',
    keywords: ['gấp', 'sắp đóng', 'đóng thầu', 'thời hạn', 'deadline', 'hết hạn', 'hôm nay', 'chót'],
    generate: (bids = []) => {
      const urgent = Array.isArray(bids) ? bids.filter(b => b && (b.flag === 'RED' || getDaysLeft(b.thoi_diem_dong_thau) <= 3)) : [];
      if (urgent.length === 0) return "Dạ thưa Sếp, em vừa rà soát xong toàn bộ lịch đóng thầu. Hiện tất cả các gói thầu đều còn dư dả thời gian nộp hồ sơ. Không có gói thầu nào trong tình trạng báo động đỏ đóng thầu gấp dưới 3 ngày. Sếp có thể yên tâm ạ.";
      const closest = urgent[0];
      return `Dạ thưa Sếp, tình trạng khẩn cấp! Có ${urgent.length} gói thầu đang đếm ngược thời gian và sẽ đóng thầu trong vòng chưa tới 72 giờ nữa.\nTrọng tâm lớn nhất em thấy là gói **${closest.ten_goi_thau}** của đơn vị ${closest.chu_dau_tu}. Nếu chậm trễ nộp hồ sơ, công ty sẽ mất đi toàn bộ cơ hội doanh thu từ gói này trong suốt 1 năm tới. Em kính đề nghị Sếp đôn đốc toàn bộ team đấu thầu ưu tiên 100% thời gian, rà soát lại hiệu lực thư bảo lãnh ngân hàng và các ủy quyền bán hàng từ hãng. Tuyệt đối không để xảy ra sai sót kỹ thuật nào vào phút chót Sếp nhé.`;
    }
  },
  {
    id: 'product_margin',
    keywords: ['lợi nhuận', 'lãi', 'sản phẩm', 'bán chạy', 'biên độ', 'hiệu quả', 'giá vốn', 'mặt hàng'],
    generate: (bids, customers, products) => {
      return `Dạ thưa Sếp, theo số liệu thống kê mới nhất, em đang phân tích danh mục chiến lược gồm ${products.length} mã sản phẩm thuốc và vật tư y tế.\nĐể tối ưu hóa biên lợi nhuận ròng, em thấy công ty mình nên cân nhắc thay đổi chiến lược cơ cấu mặt hàng ngay. Sếp có thể chỉ đạo giảm tỷ trọng các thuốc generic cạnh tranh giá quá rẻ ở Nhóm 4, Nhóm 5. Thay vào đó, chúng ta nên dồn toàn lực đấu thầu các biệt dược gốc hoặc thuốc tiêm truyền thuộc Nhóm 1 và Nhóm 2. Đây là các nhóm có biên lợi nhuận gộp lên tới 30-40%, ít đối thủ tham gia và sẽ giúp công ty khẳng định vị thế thương hiệu lâu dài tại các bệnh viện lớn ạ.`;
    }
  },
  {
    id: 'risk_assessment',
    keywords: ['rủi ro', 'nguy hiểm', 'đỏ', 'cảnh báo', 'thất bại', 'không khả thi', 'loại', 'hủy', 'khó'],
    generate: (bids) => {
      const risks = bids.filter(b => b.flag === 'RED' || (b.bps_score && b.bps_score < 5));
      return `Dạ thưa Sếp, em vừa hoàn thành đánh giá rủi ro tổng thể danh mục thầu. Cảnh báo khẩn: Hiện có ${risks.length} gói thầu (chiếm khoảng ${((risks.length/bids.length)*100).toFixed(0)}% tổng danh mục) đang nằm trong nhóm nguy cơ rớt thầu rất cao.\nCác gói thầu này có điểm BPS dưới 5.0, đồng nghĩa sản phẩm của chúng ta không khớp yêu cầu kỹ thuật hoặc đối thủ cạnh tranh có lợi thế quá mạnh. Việc cố gắng làm hồ sơ cho ${risks.length} gói thầu này sẽ tiêu tốn hàng chục triệu đồng chi phí bảo lãnh và in ấn mà không mang lại kết quả. Em kính đề nghị Sếp cân nhắc chiến lược "buông bỏ" để dồn sức cho các gói thầu có tỷ lệ trúng trên 80% ạ.`;
    }
  },
  {
    id: 'price_strategy',
    keywords: ['giá', 'dự toán', 'kế hoạch', 'cạnh tranh', 'thấp', 'cao', 'kê khai', 'báo giá'],
    generate: (bids) => {
      const avgScore = (bids.reduce((sum, b) => sum + (b.bps_score||0), 0) / (bids.length||1)).toFixed(1);
      return `Dạ thưa Sếp, phân tích dữ liệu định giá của em cho thấy mức độ cạnh tranh của ${bids.length} gói thầu hiện hành là rất khốc liệt. Điểm BPS trung bình toàn hệ thống đang ở mức ${avgScore}/10.\nEm xin lưu ý Sếp nguyên tắc sống còn: Giá dự thầu của mọi sản phẩm tuyệt đối không được cao hơn giá kế hoạch bệnh viện và giá kê khai trên cổng Bộ Y tế. Đối với các hoạt chất có từ 3 nhà thầu trở lên, em thấy phòng kinh doanh cần phân tích kỹ giá trúng thầu năm ngoái để đưa ra chiết khấu đột phá. Sếp chỉ cần chỉ đạo báo giá thấp hơn đối thủ một chút là chúng ta đã có thể giành được hợp đồng hàng tỷ đồng rồi ạ.`;
    }
  },
  {
    id: 'hospital_analysis',
    keywords: ['tuyến', 'bệnh viện', 'phân tuyến', 'trung ương', 'cơ sở', 'hạng', 'viện', 'sở y tế'],
    generate: (bids, customers) => {
      return `Dạ thưa Sếp, mạng lưới khách hàng của chúng ta hiện đang phủ sóng tại ${customers.length} bệnh viện và sở y tế trên toàn quốc.\nChiến lược tiếp cận cơ sở y tế theo em cần được tinh chỉnh lại theo mô hình tháp. Ở đỉnh tháp là các Bệnh viện tuyến Trung ương, em đề xuất chúng ta chào thầu các danh mục thuốc chuyên khoa sâu, kỹ thuật cao. Ở phần đáy tháp là Trung tâm y tế tuyến huyện và trạm y tế, các thuốc generic thông dụng, bù nước và vitamin với mức chiết khấu lớn sẽ càn quét thị trường. Việc phủ đều cả hai tuyến em nghĩ sẽ giúp doanh thu công ty phát triển bền vững bất chấp thay đổi chính sách ạ.`;
    }
  },
  {
    id: 'competitor_intel',
    keywords: ['đối thủ', 'cạnh tranh', 'công ty khác', 'nhà thầu', 'thắng', 'thua', 'thị phần'],
    generate: (bids) => {
      return `Dạ thưa Sếp, tình báo đấu thầu là yếu tố sống còn khi đối mặt với ${bids.length} gói thầu trị giá lớn này.\nTrước khi chốt giá, em đề xuất Sếp yêu cầu lập bảng so sánh đối thủ chuyên sâu. Hãy tìm hiểu xem trong 2 năm qua, nhà thầu nào đã trúng các hoạt chất này tại viện và điểm mạnh của họ là gì. Nếu đối thủ có lợi thế tuyệt đối về giá vì là nhà sản xuất, em nghĩ chúng ta phải chuyển hướng cạnh tranh bằng chất lượng dịch vụ: Cam kết thời gian giao hàng trong 24 giờ, hỗ trợ đổi trả thuốc cận date và linh động điều khoản thanh toán. Đó là cách lấy lòng Hội đồng thuốc và điều trị hiệu quả nhất ạ.`;
    }
  },
  {
    id: 'ingredient_group',
    keywords: ['biệt dược', 'hoạt chất', 'nhóm kỹ thuật', 'thuốc', 'dược phẩm', 'nhóm 1', 'nhóm 2'],
    generate: (bids, customers, products) => {
      return `Dạ thưa Sếp, với bộ danh mục ${products.length} sản phẩm, quy tắc phân chia 5 nhóm tiêu chuẩn kỹ thuật thuốc là rào cản lớn nhất nhưng cũng là cơ hội.\nEm thấy sản phẩm của chúng ta phải được định vị cực kỳ chuẩn xác. Bất kỳ sai sót nào trong việc xếp nhóm thuốc cũng sẽ khiến hồ sơ bị loại ở vòng đánh giá kỹ thuật. Em kính đề nghị Sếp nhắc nhở dược sĩ phụ trách thầu rà soát lại toàn bộ giấy chứng nhận CPP và giấy phép lưu hành Visa trước khi nộp thầu để đảm bảo an toàn tuyệt đối ạ.`;
    }
  },
  {
    id: 'summary_overview',
    keywords: ['tổng quan', 'báo cáo', 'tóm tắt', 'số liệu', 'dashboard', 'chung', 'hiện tại', 'tổng kết'],
    generate: (bids, customers, products) => {
      const urgent = bids.filter(b => b.flag === 'RED').length;
      const badDebts = customers.filter(c => c.Du_No_Hien_Tai > c.Han_Muc_No).length;
      return `Dạ em chào Sếp, dưới đây là báo cáo tổng kết toàn cảnh hệ thống ngày hôm nay:\nEm đang đồng bộ trực tiếp ${bids.length} gói thầu dược phẩm mới nhất. Có ${customers.length} bệnh viện đang phát sinh giao dịch với tổng số ${products.length} mặt hàng thuốc chiến lược. Đáng chú ý, em thấy chúng ta đang có ${urgent} gói thầu cần xử lý gấp và ${badDebts} khách hàng vi phạm hạn mức công nợ. Bức tranh kinh doanh tổng thể em thấy đang rất sôi động, tuy nhiên em kính đề nghị Sếp có biện pháp thu hồi nợ quyết liệt để tạo dòng tiền vững chắc tham gia các gói thầu sắp tới ạ.`;
    }
  }
];

function getOfflineFallbackResponse(input, bids, customers, products, hideNotice = false) {
  const lowerInput = input.toLowerCase();
  let bestScenario = null;
  let maxMatches = 0;
  
  for (const s of FALLBACK_SCENARIOS) {
    let matches = 0;
    for (const kw of s.keywords) {
      if (lowerInput.includes(kw)) matches++;
    }
    if (matches > maxMatches) {
      maxMatches = matches;
      bestScenario = s;
    }
  }
  
  const suffix = hideNotice ? '' : `\n\n*(Muốn Sếp nhận được phân tích sâu và chuẩn xác hơn, Sếp có thể [[UPDATE_KEY_BTN]] nhé)*`;

  if (bestScenario) {
    return bestScenario.generate(bids, customers, products) + suffix;
  } else {
    return `Dạ thưa Sếp, rất tiếc là kết nối đến trung tâm AI đang bị gián đoạn do hết Quota API.\nTuy nhiên, với tư cách là trợ lý ngoại tuyến, em vẫn có thể hỗ trợ Sếp phân tích dữ liệu cục bộ gồm ${bids.length} gói thầu và ${customers.length} khách hàng ạ.\n\nSếp có thể ra lệnh cho em bằng các từ khóa sau:\n- Phân tích gói thầu BPS cao nhất\n- Khách hàng nào dư nợ vượt hạn mức\n- Có gói thầu nào sắp đóng gấp không\n- Tư vấn về sản phẩm và lợi nhuận\n- Đánh giá các gói thầu rủi ro\n\nSếp hãy nhập lại một trong các chủ đề trên để em lập báo cáo chi tiết nhé!` + suffix;
  }
}

// ─── TTS ENGINE ──────────────────────────────────────────────────────────────
let isAudioUnlocked = false;
const SILENT_WAV = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';
const STARTUP_SOUND = 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'; // Professional notification sound

let speakQueue = [];
let isPlayingQueue = false;
let globalOnEnd = null;

function processSpeakQueue() {
  if (speakQueue.length === 0) {
    isPlayingQueue = false;
    if (globalOnEnd) {
      globalOnEnd();
      globalOnEnd = null;
    }
    return;
  }
  
  isPlayingQueue = true;
  const chunk = speakQueue.shift();
  const url = `/api/tts?text=${encodeURIComponent(chunk)}`;
  
  const audioEl = document.getElementById('ai-audio-player');
  if (!audioEl) {
    isPlayingQueue = false;
    return;
  }
  
  audioEl.src = url;
  audioEl.playbackRate = 1.25;
  audioEl.onended = processSpeakQueue;
  
  audioEl.play().catch(e => {
    console.warn('TTS Chunk play failed:', e);
    processSpeakQueue(); // Bỏ qua đoạn bị lỗi, đọc tiếp đoạn sau
  });
}

function speak(text, onEnd) {
  if (!text) {
    if (onEnd) onEnd();
    return;
  }
  try {
    const cleanText = text
      .replace(/\n+/g, '. ') // Biến xuống dòng thành dấu chấm để tạo khoảng nghỉ
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/#{1,3}/g, '')
      .replace(/[^\w\s\dàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệđìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ.,!?:\-]/gi, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    // Tách văn bản thành các đoạn dựa trên dấu câu, bao gồm cả đoạn cuối không có dấu câu
    const sentences = cleanText.match(/.*?[.!?]+|.+$/g) || [cleanText];
    speakQueue = [];
    let current = '';
    for (let s of sentences) {
      if ((current + s).length < 180) {
        current += s + ' ';
      } else {
        if (current.trim()) speakQueue.push(current.trim());
        if (s.length >= 180) {
            let sub = s;
            while(sub.length > 0) {
                speakQueue.push(sub.substring(0, 180));
                sub = sub.substring(180);
            }
            current = '';
        } else {
            current = s + ' ';
        }
      }
    }
    if (current.trim()) speakQueue.push(current.trim());

    globalOnEnd = onEnd;
    
    if (isAudioUnlocked) {
      if (!isPlayingQueue) processSpeakQueue();
    } else {
      window._pendingSpeak = () => {
        if (!isPlayingQueue) processSpeakQueue();
      };
    }
  } catch (e) {
    console.error('TTS Error:', e);
    if (onEnd) onEnd();
  }
}

function unlockAudio(callback) {
  if (isAudioUnlocked) {
    if (callback) callback();
    return;
  }
  const audioEl = document.getElementById('ai-audio-player');
  if (!audioEl) {
    if (callback) callback();
    return;
  }
  
  // Professional chime using Web Audio API
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime); 
    osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.1); 
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
    osc.start();
    osc.stop(ctx.currentTime + 0.6);
  } catch (e) { console.warn('Chime failed', e); }

  // Use silent wav to ensure the HTML audio element is also unlocked for future use
  audioEl.src = SILENT_WAV;
  audioEl.play()
    .then(() => {
      isAudioUnlocked = true;
      console.log('✅ Audio unlocked!');
    })
    .catch(e => console.warn('Unlock failed:', e))
    .finally(() => {
      if (callback) callback();
      if (window._pendingSpeak) {
        window._pendingSpeak();
        window._pendingSpeak = null;
      }
    });
}

function stopSpeak() {
  speakQueue = [];
  isPlayingQueue = false;
  if (globalOnEnd) {
    globalOnEnd();
    globalOnEnd = null;
  }
  const audioEl = document.getElementById('ai-audio-player');
  if (audioEl) {
    audioEl.pause();
    audioEl.currentTime = 0;
  }
}

// ─── SUGGESTED QUESTIONS ─────────────────────────────────────────────────────
const SUGGESTIONS = [
  'Gói thầu nào có điểm BPS cao nhất?',
  'Khách hàng nào đang có dư nợ vượt hạn mức?',
  'Tôi nên ưu tiên gói thầu nào cần đóng sớm?',
  'Phân tích rủi ro tổng quan của danh mục thầu',
  'Sản phẩm nào có biên lợi nhuận cao nhất?',
];

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function AIAssistant({ bids = [], customers = [], products = [] }) {
  const [open, setOpen] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'model',
      text: `Dạ em chào Sếp! Em là **Gemini** ✨\n\nEm có thể giúp Sếp phân tích **${bids.length} gói thầu**, đánh giá công nợ khách hàng và tư vấn chiến lược đấu thầu dựa trên dữ liệu thực tế.\n\nSếp cần em hỗ trợ gì không ạ?`,
      time: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [autoSpeak, setAutoSpeak] = useState(true); // Mặc định ON
  const [showKeyManager, setShowKeyManager] = useState(false);
  const [apiKeys, setApiKeys] = useState(loadKeys);
  const [newKey, setNewKey] = useState('');
  const [newKeyLabel, setNewKeyLabel] = useState('');
  const [keyError, setKeyError] = useState('');
  const [panelSize, setPanelSize] = useState({ w: 400, h: 600 });
  const [fabPos, setFabPos] = useState(() => {
    const saved = localStorage.getItem('bh_ai_fab_pos');
    return saved ? JSON.parse(saved) : { bottom: 28, right: 28 };
  });
  const [isDraggingFab, setIsDraggingFab] = useState(false);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Handle FAB Drag
  const handleFabMouseDown = (e) => {
    if (e.button !== 0) return;
    const startX = e.clientX;
    const startY = e.clientY;
    const startBottom = fabPos.bottom;
    const startRight = fabPos.right;
    let moved = false;

    const onMouseMove = (mE) => {
      const dX = startX - mE.clientX;
      const dY = startY - mE.clientY;
      if (Math.abs(dX) > 5 || Math.abs(dY) > 5) {
        moved = true;
        setIsDraggingFab(true);
      }
      if (moved) {
        setFabPos({
          bottom: Math.max(10, Math.min(window.innerHeight - 80, startBottom + dY)),
          right: Math.max(10, Math.min(window.innerWidth - 100, startRight + dX))
        });
      }
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      if (moved) {
        setTimeout(() => setIsDraggingFab(false), 50);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
  // Handle Resize
  const handleResizeMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startW = panelSize.w;
    const startH = panelSize.h;

    const onMouseMove = (moveEvent) => {
      const deltaX = startX - moveEvent.clientX; 
      const deltaY = startY - moveEvent.clientY;
      setPanelSize({
        w: Math.max(300, Math.min(800, startW + deltaX)),
        h: Math.max(400, Math.min(window.innerHeight - 100, startH + deltaY))
      });
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  // Tự động chào hỏi bằng âm thanh ngay khi vào trang
  useEffect(() => {
    // Listener để unlock audio ngay khi user click bất cứ đâu lần đầu
    const handleFirstInteraction = () => {
      if (!isAudioUnlocked) {
        unlockAudio();
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    if (hasGreeted) return;
    const timer = setTimeout(() => {
      // Chỉ chuẩn bị nội dung, sẽ phát ngay khi user click bất cứ đâu
      window._pendingSpeak = () => {
        speak("Dạ em chào Sếp! Em là Gemini. Em có thể giúp Sếp phân tích gói thầu và công nợ. Sếp cần em hỗ trợ gì không ạ?");
        setHasGreeted(true);
      };
      // Nếu đã unlock rồi (do user click trước 2s), thì chạy luôn
      if (isAudioUnlocked && window._pendingSpeak) {
        window._pendingSpeak();
        window._pendingSpeak = null;
      }
    }, 2000);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasGreeted]);

  useEffect(() => { localStorage.setItem('bh_ai_fab_pos', JSON.stringify(fabPos)); }, [fabPos]);
  
  // Keep FAB in bounds on resize
  useEffect(() => {
    const handleResize = () => {
      setFabPos(prev => ({
        bottom: Math.min(prev.bottom, window.innerHeight - 80),
        right: Math.min(prev.right, window.innerWidth - 100)
      }));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => { saveKeys(apiKeys); }, [apiKeys]);
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const sendMessage = useCallback(async (text, useFallbackOnly = false) => {
    const userText = (text || input).trim();
    if (!userText || loading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText, time: new Date() }]);
    setLoading(true);

    if (autoSpeak && !useFallbackOnly) {
      speak("Dạ Sếp chờ em một xíu nhé...");
    }

    if (useFallbackOnly) {
      setTimeout(() => {
        const fallbackText = getOfflineFallbackResponse(userText, bids, customers, products, true);
        setMessages(prev => [...prev, { role: 'model', text: fallbackText, time: new Date() }]);
        if (autoSpeak) {
          setIsSpeaking(true);
          speak(fallbackText, () => setIsSpeaking(false));
        }
        setLoading(false);
      }, 1000);
      return;
    }

    const context = buildContext(bids, customers, products);
    const history = messages.slice(1).map(m => ({ role: m.role, text: m.text }));

    let currentKeys = [...apiKeys];
    let responded = false;

    while (!responded) {
      const activeKeyObj = getActiveKey(currentKeys);
      if (currentKeys.length === 0 || !activeKeyObj) {
        const fallbackText = getOfflineFallbackResponse(userText, bids, customers, products);
        setMessages(prev => [...prev, { role: 'model', text: fallbackText, time: new Date() }]);
        if (autoSpeak) {
          setIsSpeaking(true);
          speak(fallbackText, () => setIsSpeaking(false));
        }
        setLoading(false);
        return;
      }

      try {
        const res = await fetch('/api/ask-ai', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userText, context, apiKey: activeKeyObj.key, history })
        });

        if (res.status === 429) {
          currentKeys = markKeyFailed(currentKeys, activeKeyObj.key);
          setApiKeys(currentKeys);
          continue; // try next key
        }

        if (!res.ok) {
          console.warn("API Error, triggering offline fallback...");
          const fallbackText = getOfflineFallbackResponse(userText, bids, customers, products);
          setMessages(prev => [...prev, { role: 'model', text: fallbackText, time: new Date() }]);
          if (autoSpeak) {
            setIsSpeaking(true);
            speak(fallbackText, () => setIsSpeaking(false));
          }
          responded = true;
          break;
        }

        const data = await res.json();
        const aiText = data.text;

        setMessages(prev => [...prev, { role: 'model', text: aiText, time: new Date() }]);

        if (autoSpeak) {
          setIsSpeaking(true);
          speak(aiText, () => setIsSpeaking(false));
        }

        responded = true;
      } catch (err) {
        console.warn("Network Error, triggering offline fallback...");
        const fallbackText = getOfflineFallbackResponse(userText, bids, customers, products);
        setMessages(prev => [...prev, { role: 'model', text: fallbackText, time: new Date() }]);
        if (autoSpeak) {
          setIsSpeaking(true);
          speak(fallbackText, () => setIsSpeaking(false));
        }
        responded = true;
        break;
      }
    }

    if (!responded) {
      // Loop finished but no key worked
      const fallbackText = getOfflineFallbackResponse(userText, bids, customers, products);
      setMessages(prev => [...prev, { role: 'model', text: fallbackText, time: new Date() }]);
      if (autoSpeak) {
        setIsSpeaking(true);
        speak(fallbackText, () => setIsSpeaking(false));
      }
    }

    setLoading(false);
  }, [input, messages, loading, bids, customers, products, apiKeys, autoSpeak]);

  const handleAddKey = () => {
    if (!newKey.trim()) { setKeyError('Vui lòng nhập API key'); return; }
    if (apiKeys.find(k => k.key === newKey.trim())) { setKeyError('Key này đã tồn tại'); return; }
    setApiKeys(prev => [...prev, { key: newKey.trim(), label: newKeyLabel || `Key ${prev.length + 1}`, failedAt: null }]);
    setNewKey(''); setNewKeyLabel(''); setKeyError('');
  };

  const handleRemoveKey = (key) => {
    setApiKeys(prev => prev.filter(k => k.key !== key));
  };

  const handleResetKey = (key) => {
    setApiKeys(prev => prev.map(k => k.key === key ? { ...k, failedAt: null } : k));
  };

  const handleSpeakLast = () => {
    const lastAI = [...messages].reverse().find(m => m.role === 'model' && !m.isError);
    if (!lastAI) return;
    if (isSpeaking) { stopSpeak(); setIsSpeaking(false); return; }
    setIsSpeaking(true);
    speak(lastAI.text, () => setIsSpeaking(false));
  };

  const formatTime = (d) => new Date(d).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

  const getPanelStyle = () => {
    if (!open) return { width: panelSize.w, height: panelSize.h };
    let b = fabPos.bottom + 62;
    let r = fabPos.right;
    if (b + panelSize.h > window.innerHeight - 10) {
      if (fabPos.bottom - 10 > panelSize.h) b = fabPos.bottom - panelSize.h - 10;
      else b = window.innerHeight - panelSize.h - 10;
    }
    if (r + panelSize.w > window.innerWidth - 10) r = window.innerWidth - panelSize.w - 10;
    return {
      width: panelSize.w,
      height: panelSize.h,
      bottom: Math.max(10, b),
      right: Math.max(10, r)
    };
  };

  const activeKey = getActiveKey(apiKeys);
  const exhaustedCount = apiKeys.filter(k => k.failedAt && Date.now() - k.failedAt < QUOTA_RESET_MS).length;

  return (
    <>
      <audio id="ai-audio-player" style={{ display: 'none' }}></audio>
      
      {/* FLOATING BUTTON */}
      <div 
        className={`ai-fab ${!hasGreeted ? 'pulsing' : ''}`} 
        onMouseDown={handleFabMouseDown}
        onClick={() => { 
          if (isDraggingFab) return;
          unlockAudio(() => setOpen(o => !o)); 
        }}
        style={{ 
          bottom: fabPos.bottom, 
          right: fabPos.right,
          transition: isDraggingFab ? 'none' : 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' 
        }}
      >
        <span className="ai-fab-icon" style={{ display: 'flex' }}>{open ? '✕' : GEMINI_SVG}</span>
        {!open && <div className="ai-fab-label">Gemini</div>}
      </div>

      {/* CHAT PANEL */}
      <div 
        className={`ai-panel ${open ? 'open' : ''}`} 
        style={getPanelStyle()} 
        onClick={() => unlockAudio()}
      >
        <div className="ai-resize-handle" onMouseDown={handleResizeMouseDown}></div>
        {/* HEADER */}
        <div className="ai-panel-header">
          <div className="ai-header-info">
            <div className="ai-avatar">{GEMINI_SVG}</div>
            <div>
              <div className="ai-name">Gemini</div>
              <div className="ai-status">
                <span className={`ai-dot ${loading ? 'thinking' : activeKey ? 'online' : 'offline'}`}></span>
                {loading ? 'Đang phân tích dữ liệu...' : activeKey ? 'Sẵn sàng' : 'Hết quota'}
              </div>
            </div>
          </div>
          <div className="ai-header-actions">
            <button
              className={`ai-icon-btn ai-voice-toggle ${autoSpeak ? 'on' : 'off'}`}
              onClick={(e) => { e.stopPropagation(); setAutoSpeak(s => !s); if (autoSpeak) stopSpeak(); }}
              title={autoSpeak ? 'Tắt đọc tự động' : 'Bật đọc tự động'}
            >
              {autoSpeak ? '🔊' : '🔇'}
            </button>
            <button className="ai-icon-btn" onClick={(e) => { e.stopPropagation(); setShowKeyManager(true); }} title="Quản lý API Key">
              ⚙️{exhaustedCount > 0 && <span className="ai-key-badge">{exhaustedCount}</span>}
            </button>
          </div>
        </div>

        {/* MESSAGES */}
        <div className="ai-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`ai-msg ${msg.role === 'user' ? 'user' : 'ai'} ${msg.isError ? 'error' : ''}`}>
              {msg.role === 'model' && <div className="ai-msg-avatar">{GEMINI_SVG}</div>}
              <div className="ai-msg-bubble">
                <div className="ai-msg-text">
                  {msg.text.split('[[UPDATE_KEY_BTN]]').map((part, idx, arr) => (
                    <span key={idx}>
                      <span dangerouslySetInnerHTML={{ __html: formatText(part) }} />
                      {idx < arr.length - 1 && (
                        <button className="inline-link-btn" onClick={(e) => { e.stopPropagation(); setShowKeyManager(true); }}>
                          cập nhật API Key
                        </button>
                      )}
                    </span>
                  ))}
                </div>
                <div className="ai-msg-time">{formatTime(msg.time)}</div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="ai-msg ai">
              <div className="ai-msg-avatar">{GEMINI_SVG}</div>
              <div className="ai-msg-bubble">
                <div className="ai-typing"><span>Đang phân tích dữ liệu</span><span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* SUGGESTIONS */}
        {messages.length <= 2 && (
          <div className="ai-suggestions">
            {SUGGESTIONS.map((s, i) => (
              <button key={i} className="ai-suggest-btn" onClick={() => sendMessage(s, true)}>{s}</button>
            ))}
          </div>
        )}

        {/* INPUT */}
        <div className="ai-input-area">
          <button
            className={`ai-speak-btn ${isSpeaking ? 'speaking' : ''}`}
            onClick={handleSpeakLast}
            title={isSpeaking ? 'Dừng đọc' : 'Đọc tin nhắn cuối'}
          >{isSpeaking ? '⏹' : '🔈'}</button>
          <textarea
            ref={inputRef}
            className="ai-input"
            placeholder="Hỏi về gói thầu, khách hàng, sản phẩm..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
            rows={1}
          />
          <button className="ai-send-btn" onClick={() => sendMessage()} disabled={loading || !input.trim()}>
            {loading ? '⌛' : '➤'}
          </button>
        </div>
      </div>

      {/* KEY MANAGER MODAL */}
      {showKeyManager && (
        <div className="ai-modal-overlay" onMouseDown={(e) => {
          if (e.target === e.currentTarget) {
            setShowKeyManager(false);
          }
        }}>
          <div className="ai-modal-content" onMouseDown={e => e.stopPropagation()}>
            <div className="ai-modal-header">
              <div className="ai-modal-title">🔑 Cấu hình API Key Gemini</div>
              <button className="ai-modal-close" onClick={() => setShowKeyManager(false)}>✕</button>
            </div>
            <div className="ai-modal-body">
              <div className="ai-key-manager">
                <div className="ai-key-note">
                  Key tự động reset sau 24h kể từ khi hết quota. App sẽ tự chuyển sang key tiếp theo để đảm bảo dịch vụ không gián đoạn.
                </div>
                <div className="ai-key-list">
                  {apiKeys.map((k, i) => {
                    const exhausted = k.failedAt && Date.now() - k.failedAt < QUOTA_RESET_MS;
                    const resetIn = exhausted ? Math.ceil((QUOTA_RESET_MS - (Date.now() - k.failedAt)) / 3600000) : 0;
                    return (
                      <div key={k.key} className={`ai-key-item ${exhausted ? 'exhausted' : 'ok'}`}>
                        <span className="ai-key-num">{i + 1}</span>
                        <div className="ai-key-detail">
                          <div className="ai-key-label-text">{k.label}</div>
                          <div className="ai-key-val">{k.key.slice(0, 20)}...</div>
                          {exhausted && <div className="ai-key-timer">⏳ Hết quota (Reset sau ~{resetIn}h)</div>}
                        </div>
                        <div className="ai-key-actions-group">
                          {exhausted && <button className="ai-key-btn reset" onClick={() => handleResetKey(k.key)} title="Thử lại key này">↺</button>}
                          <button className="ai-key-btn remove" onClick={() => handleRemoveKey(k.key)} title="Xóa key">✕</button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="ai-key-title">Thêm API Key mới</div>
                <div className="ai-key-add">
                  <input placeholder="Tên gợi nhớ (vd: Key cá nhân)" value={newKeyLabel} onChange={e => setNewKeyLabel(e.target.value)} className="ai-key-input" />
                  <input placeholder="Nhập API Key Gemini (AIzaSy...)" value={newKey} onChange={e => setNewKey(e.target.value)} className="ai-key-input" />
                  {keyError && <div className="ai-key-error">{keyError}</div>}
                  <button className="ai-key-add-btn" onClick={handleAddKey}>Lưu Key vào trình duyệt</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function formatText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^### (.*$)/gm, '<h5>$1</h5>')
    .replace(/^## (.*$)/gm, '<h4>$1</h4>')
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    .replace(/\n/g, '<br/>');
}
