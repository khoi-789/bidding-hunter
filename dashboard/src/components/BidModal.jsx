import { formatPrice, formatDeadline, getDaysLeft } from '../utils';

export default function BidModal({ bid, onClose, addToast }) {
  const TARGET_EMAIL = 'leminhkhoi279@gmail.com';

  const flag = bid.flag || 'GRAY';
  const bps  = bid.bps_score ?? 0;
  const items = bid.items || [];

  const handleSendEmail = async () => {
    addToast(`📧 Đang gửi email tới ${TARGET_EMAIL}...`, 'info');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: TARGET_EMAIL,
          subject: `🚀 Chào thầu: ${bid.ten_goi_thau}`,
          html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
              <h2 style="color: #1ABB9C;">Chào thầu từ Hoàng Đức Pharma</h2>
              <p>Kính gửi Ban lãnh đạo <b>${bid.chu_dau_tu}</b>,</p>
              <p>Chúng tôi xin đề xuất thầu cho gói: <b>${bid.ten_goi_thau}</b> (Mã: ${bid.ma_goi_thau}).</p>
              <p>Số danh mục thuốc: <b>${bid.so_danh_muc}</b> | Điểm BPS: <b>${bps}/10</b></p>
              <p>Trân trọng!</p>
            </div>
          `
        })
      });
      if (response.ok) addToast(`✅ Đã gửi thành công tới ${TARGET_EMAIL}`, 'success');
      else addToast('❌ Lỗi khi gửi mail qua API Vercel', 'error');
    } catch (err) {
      addToast('❌ Lỗi kết nối server', 'error');
    }
  };

  // Định nghĩa các trường thông tin chính
  const infoFields = [
    { label: 'CHỦ ĐẦU TƯ', value: bid.chu_dau_tu },
    { label: 'MÃ GÓI THẦU', value: bid.ma_goi_thau },
    { label: 'GIÁ GÓI THẦU', value: bid.gia_goi_thau !== 'NA' ? formatPrice(Number(String(bid.gia_goi_thau || '').replace(/,/g,''))) : 'Chưa có' },
    { label: 'NGÀY ĐĂNG TẢI', value: bid.ngay_dang_tai },
    { label: 'ĐÓNG THẦU', value: bid.thoi_diem_dong_thau },
    { label: 'MỞ THẦU', value: bid.thoi_diem_mo_thau },
    { label: 'THỜI GIAN THỰC HIỆN', value: bid.thoi_gian_thuc_hien },
    { label: 'CHÀO GIÁ TỪ', value: bid.chao_gia_tu },
    { label: 'CHÀO GIÁ ĐẾN', value: bid.chao_gia_den },
  ].filter(f => f.value && f.value !== 'NA' && f.value !== '');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} style={{ width: '95vw' }}>
        <div className="modal-header">
          <div className="modal-title">Chi tiết gói thầu: {bid.ma_goi_thau}</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div style={{ padding: '24px 28px', flexShrink: 0 }}>

          {/* BPS Meter */}
          <div className="bps-meter">
            <div className="bps-label-row">
              <span style={{fontSize:13, fontWeight:600, color:'var(--text-secondary)'}}>ĐIỂM ƯU TIÊN BPS (Auto-scored)</span>
              <span className="bps-score-big" style={{color:`var(--${flag.toLowerCase()})`}}>
                {bps}<span style={{fontSize:16, color:'var(--text-muted)'}}>/10</span>
              </span>
            </div>
            <div className="bps-track">
              <div className={`bps-fill ${flag}`} style={{ width: `${bps * 10}%` }} />
            </div>
            <div style={{fontSize:11, color:'#999', marginTop:4}}>
              {bid.bps_status === 'PENDING_ANALYSIS' ? '⚠️ Chưa có danh mục thuốc — chờ phân tích' : `📦 ${bid.so_danh_muc} danh mục thuốc`}
            </div>
          </div>

          {/* Thông tin chính */}
          <div className="modal-grid">
            {infoFields.map((f, i) => (
              <div key={i} className={`modal-field ${f.label === 'CHỦ ĐẦU TƯ' ? 'full' : ''}`}>
                <div className="field-label">{f.label}</div>
                <div className="field-value">{f.value}</div>
              </div>
            ))}
          </div>

          </div>

          {/* Bảng danh mục thuốc (Scroll độc lập) */}
          {items.length > 0 && (
            <div style={{ flex: 1, overflowY: 'hidden', display: 'flex', flexDirection: 'column', padding: '0 28px' }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--text-primary)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                📋 Danh mục thuốc <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>({items.length} mặt hàng)</span>
              </div>
              <div style={{ flex: 1, overflow: 'auto', border: '1px solid #e0e0e0', borderRadius: 8, background: '#fff' }}>
                <table className="data-table" style={{ fontSize: 11, width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
                  <thead style={{ position: 'sticky', top: 0, background: '#f8fafc', zIndex: 1, boxShadow: '0 1px 0 #e0e0e0' }}>
                    <tr>
                      <th style={{ width: 30, padding: '10px' }}>#</th>
                      <th style={{ padding: '10px' }}>Tên hàng hóa</th>
                      <th style={{ padding: '10px' }}>Hoạt chất</th>
                      <th style={{ padding: '10px' }}>Hàm lượng</th>
                      <th style={{ padding: '10px' }}>Đường dùng</th>
                      <th style={{ padding: '10px' }}>Dạng bào chế</th>
                      <th style={{ padding: '10px', textAlign: 'center' }}>Nhóm</th>
                      <th style={{ padding: '10px', textAlign: 'right' }}>Giá trần</th>
                      <th style={{ padding: '10px', textAlign: 'center' }}>S.Lượng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ textAlign: 'center', color: '#999', padding: '8px 10px' }}>{idx + 1}</td>
                        <td style={{ fontWeight: 500, padding: '8px 10px', color: 'var(--accent)' }}>{item['Tên hàng hóa'] || '—'}</td>
                        <td style={{ padding: '8px 10px' }}>{item['Hoạt chất'] || '—'}</td>
                        <td style={{ padding: '8px 10px' }}>{item['Nồng độ/Hàm lượng'] || item['Hàm lượng'] || '—'}</td>
                        <td style={{ padding: '8px 10px' }}>{item['Đường dùng'] || '—'}</td>
                        <td style={{ padding: '8px 10px' }}>{item['Dạng bào chế'] || '—'}</td>
                        <td style={{ textAlign: 'center', padding: '8px 10px' }}>
                          <span style={{ fontWeight: 700, color: '#2980b9' }}>{item['Nhóm thuốc'] || '—'}</span>
                        </td>
                        <td style={{ textAlign: 'right', color: '#27ae60', fontWeight: 600, padding: '8px 10px' }}>
                          {(() => {
                            const val = String(item['Giá trần (VND)'] || '').replace(/,/g, '');
                            const num = parseFloat(val);
                            return isNaN(num) ? '—' : num.toLocaleString('vi-VN');
                          })()}
                        </td>
                        <td style={{ textAlign: 'center', padding: '8px 10px' }}>{item['Số lượng'] || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Actions */}
          <div style={{ padding: '24px 28px', display: 'flex', gap: 12, flexShrink: 0, borderTop: '1px solid #f1f5f9', background: '#fff' }}>
            <button className="refresh-btn primary" style={{flex:1, padding:12, justifyContent:'center'}} onClick={handleSendEmail}>
              🚀 Gửi Email chào thầu
            </button>
            {bid.link && (
              <button className="refresh-btn" style={{flex:1, padding:12, justifyContent:'center'}} onClick={() => window.open(bid.link, '_blank')}>
                🔗 Mở muasamcong.mpi.gov.vn
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
