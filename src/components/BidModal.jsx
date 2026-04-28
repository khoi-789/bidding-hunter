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
      <div className="modal" onClick={e => e.stopPropagation()} style={{maxWidth: 720, width: '95vw'}}>
        <div className="modal-header">
          <div className="modal-title">Chi tiết gói thầu: {bid.ma_goi_thau}</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body" style={{maxHeight: '75vh', overflowY: 'auto'}}>

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

          {/* Bảng danh mục thuốc */}
          {items.length > 0 && (
            <div style={{marginTop: 20}}>
              <div style={{fontWeight: 700, fontSize: 13, color: 'var(--text-primary)', marginBottom: 8}}>
                📋 Danh mục thuốc ({items.length} mặt hàng)
              </div>
              <div style={{overflowX: 'auto', maxHeight: 280, overflowY: 'auto', border: '1px solid #e0e0e0', borderRadius: 6}}>
                <table className="data-table" style={{fontSize: 11}}>
                  <thead style={{position: 'sticky', top: 0, background: '#fff', zIndex: 1}}>
                    <tr>
                      <th style={{width:30}}>#</th>
                      <th>Tên hàng hóa</th>
                      <th>Hoạt chất</th>
                      <th>Hàm lượng/Nồng độ</th>
                      <th>Đường dùng</th>
                      <th>Dạng bào chế</th>
                      <th>Nhóm</th>
                      <th>Giá trần</th>
                      <th>Số lượng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, idx) => (
                      <tr key={idx}>
                        <td style={{textAlign:'center', color:'#999'}}>{idx+1}</td>
                        <td style={{fontWeight:500}}>{item['Tên hàng hóa'] || '—'}</td>
                        <td>{item['Hoạt chất'] || '—'}</td>
                        <td>{item['Nồng độ/Hàm lượng'] || item['Hàm lượng'] || '—'}</td>
                        <td>{item['Đường dùng'] || '—'}</td>
                        <td>{item['Dạng bào chế'] || '—'}</td>
                        <td style={{textAlign:'center'}}>
                          <span style={{fontWeight:700, color:'#2980b9'}}>{item['Nhóm thuốc'] || '—'}</span>
                        </td>
                        <td style={{textAlign:'right', color:'#27ae60', fontWeight:600}}>
                          {item['Giá trần (VND)'] ? Number(String(item['Giá trần (VND)']).replace(/,/g,'')).toLocaleString('vi-VN') : '—'}
                        </td>
                        <td style={{textAlign:'center'}}>{item['Số lượng'] || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Actions */}
          <div style={{marginTop: 24, display: 'flex', gap: 12}}>
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
