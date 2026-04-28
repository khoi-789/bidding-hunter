import { formatPrice, formatDeadline, getDaysLeft, parseVND } from '../utils';

export default function BidModal({ bid, products = [], onClose, addToast }) {
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



  // Tính tổng giá trị gói thầu từ danh mục (nếu có)
  const totalCalculatedPrice = items.reduce((sum, item) => sum + parseVND(item['Giá trần (VND)']), 0);

  // Helper tìm sản phẩm tương ứng trong kho dựa trên Hoạt chất
  const findProduct = (item) => {
    const itemName = String(item['Hoạt chất'] || '').toLowerCase().trim();
    if (!itemName) return null;
    return products.find(p => {
      const prodName = String(p.Hoat_Chat || '').toLowerCase().trim();
      return itemName.includes(prodName) || prodName.includes(itemName);
    });
  };

  // Tính doanh thu dự kiến (Expected Revenue)
  // Chỉ tính các thuốc có tồn kho và giá niêm yết < giá trần
  // Công thức: Giá trần đơn vị * min(SL thầu, SL tồn) * 80%
  const expectedRevenue = items.reduce((sum, item) => {
    const p = findProduct(item);
    if (!p) return sum;

    const bidQty = parseVND(item['Số lượng']);
    if (bidQty <= 0) return sum;

    const bidUnitPrice = parseVND(item['Giá trần (VND)']) / bidQty;
    const listedPrice = p.Gia_Niem_Yet || 0;
    const stock = p.SL_Ton || 0;

    if (stock > 0 && listedPrice < bidUnitPrice) {
      const effectiveQty = Math.min(bidQty, stock);
      const itemRev = bidUnitPrice * effectiveQty * 0.8;
      return sum + itemRev;
    }
    return sum;
  }, 0);

  // Định nghĩa các trường thông tin chính
  const infoFields = [
    { label: 'CHỦ ĐẦU TƯ', value: bid.chu_dau_tu, span: 2 },
    { label: 'MÃ GÓI THẦU', value: bid.ma_goi_thau },
    { label: 'GIÁ GÓI THẦU', value: totalCalculatedPrice > 0 ? formatPrice(totalCalculatedPrice) : (bid.gia_goi_thau !== 'NA' ? formatPrice(parseVND(bid.gia_goi_thau)) : 'Chưa có') },
    { label: 'DOANH THU DỰ KIẾN', value: expectedRevenue > 0 ? formatPrice(expectedRevenue) : '0 VNĐ' },
    { label: 'NGÀY ĐĂNG TẢI', value: bid.ngay_dang_tai },
    { label: 'ĐÓNG THẦU', value: bid.thoi_diem_dong_thau },
    { label: 'CHÀO GIÁ ĐẾN', value: bid.chao_gia_den },
    { label: 'HÌNH THỨC', value: bid.bidForm || 'Qua mạng' },
  ].filter(f => f.value && f.value !== 'NA' && f.value !== '');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} style={{ width: '95vw' }}>
        <div className="modal-header">
          <div className="modal-title">Chi tiết gói thầu: {bid.ma_goi_thau}</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div style={{ padding: '12px 28px', flexShrink: 0 }}>

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
              <div key={i} className="modal-field" style={f.span ? { gridColumn: `span ${f.span}` } : {}}>
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
                      <th style={{ padding: '10px', textAlign: 'center' }}>ĐVT</th>
                      <th style={{ padding: '10px', textAlign: 'center' }}>Nhóm</th>
                      <th style={{ padding: '10px', textAlign: 'right', color: '#8e44ad' }}>Giá NY HD</th>
                      <th style={{ padding: '10px', textAlign: 'right', color: '#d35400' }}>SL tồn</th>
                      <th style={{ padding: '10px', textAlign: 'right' }}>Giá trần theo ĐVT</th>
                      <th style={{ padding: '10px', textAlign: 'right' }}>Giá trần tổng</th>
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
                        <td style={{ textAlign: 'center', padding: '8px 10px' }}>{item['Đơn vị tính'] || '—'}</td>
                        <td style={{ textAlign: 'center', padding: '8px 10px' }}>
                          <span style={{ fontWeight: 700, color: '#2980b9' }}>{item['Nhóm thuốc'] || '—'}</span>
                        </td>
                        {/* Cột mới: Giá niêm yết HD (Lookup từ products) */}
                        <td style={{ textAlign: 'right', color: '#8e44ad', fontWeight: 600, padding: '8px 10px' }}>
                          {(() => {
                            const p = findProduct(item);
                            return p ? p.Gia_Niem_Yet?.toLocaleString('vi-VN') : '—';
                          })()}
                        </td>
                        {/* Cột mới: SL tồn (Lookup từ products) */}
                        <td style={{ textAlign: 'right', color: '#d35400', fontWeight: 600, padding: '8px 10px' }}>
                          {(() => {
                            const p = findProduct(item);
                            return p ? p.SL_Ton?.toLocaleString('vi-VN') : '—';
                          })()}
                        </td>
                        {/* Cột mới: Giá trần theo ĐVT */}
                        <td style={{ textAlign: 'right', color: '#e67e22', fontWeight: 600, padding: '8px 10px' }}>
                          {(() => {
                            const price = parseVND(item['Giá trần (VND)']);
                            const qty = parseVND(item['Số lượng']);
                            if (price > 0 && qty > 0) {
                              return Math.round(price / qty).toLocaleString('vi-VN');
                            }
                            return '—';
                          })()}
                        </td>
                        <td style={{ textAlign: 'right', color: '#27ae60', fontWeight: 600, padding: '8px 10px' }}>
                          {(() => {
                            const num = parseVND(item['Giá trần (VND)']);
                            return num > 0 ? num.toLocaleString('vi-VN') : '—';
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
