import { useState, useRef } from 'react';
import { formatPrice } from '../utils';
import { IconGemini } from './Icons';

export default function DebtEmailModal({ selectedCustomers, onClose, addToast, onSuccess, customerConfigs = {} }) {
  const [step, setStep] = useState(1);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [sending, setSending] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContents, setEditedContents] = useState({});
  const [finalSelectedIds, setFinalSelectedIds] = useState(selectedCustomers.map(c => c.id));
  const [aiLoading, setAiLoading] = useState(false);
  
  const editorRef = useRef(null);
  const TARGET_EMAIL = 'leminhkhoi279@gmail.com';

  const getCustomerGroup = (c) => {
    const timeStr = c.Thoi_Gian_No || '';
    const months = parseInt(timeStr) || 0;
    const isOverdue = c.Du_No_Hien_Tai > 0;

    if (months >= 12) return 1;
    if (months >= 3 && months <= 6) return 2;
    if (c.Phan_Tuyen === 'TUYEN_TW' && months < 3 && isOverdue) return 3;
    if (!isOverdue || months === 0) return 4; // Giả định là nhóm 4 nếu không có nợ hoặc nợ mới
    return 2; // Default to reminder
  };

  const getTemplate = (c) => {
    const group = getCustomerGroup(c);
    const hospital = c.Ten_Ben_Vien || 'Quý khách hàng';
    const debt = formatPrice(c.Du_No_Hien_Tai);
    const limit = formatPrice(c.Han_Muc_No);
    const time = c.Thoi_Gian_No || 'N/A';

    if (group === 1) {
      return {
        subject: `[Thông báo khẩn] Tạm ngưng cung cấp hàng - ${hospital}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background: #e74c3c; color: #fff; padding: 20px; text-align: center;">
              <h2 style="margin: 0;">THÔNG BÁO TẠM NGƯNG CUNG CẤP HÀNG</h2>
            </div>
            <div style="padding: 30px;">
              <p>Kính gửi: <b>Ban Lãnh đạo ${hospital}</b>,</p>
              <p>Công ty Dược phẩm Hoàng Đức xin thông báo về tình trạng công nợ quá hạn của Quý đơn vị như sau:</p>
              <div style="background: #fff5f5; border: 1px solid #feb2b2; padding: 15px; border-radius: 6px; margin: 20px 0;">
                <ul style="margin: 0; padding-left: 20px;">
                  <li>Số dư nợ hiện tại: <b>${debt}</b></li>
                  <li>Thời gian nợ quá hạn: <b>${time}</b> (Vượt quá 12 tháng)</li>
                </ul>
              </div>
              <p>Theo quy định của công ty, chúng tôi rất tiếc phải thông báo sẽ <b>TẠM NGƯNG cung cấp hàng hóa</b> đối với các đơn hàng mới kể từ ngày hôm nay cho đến khi khoản nợ trên được quyết toán.</p>
              <p>Kính đề nghị Quý đơn vị khẩn trương thực hiện thanh toán để không làm gián đoạn công tác điều trị.</p>
              <p>Trân trọng cảm ơn.</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="font-size: 12px; color: #666;">Phòng Kế toán - Hoàng Đức Pharma</p>
            </div>
          </div>
        `
      };
    }

    if (group === 2) {
      return {
        subject: `[Nhắc nhở] Đối chiếu và Thanh toán công nợ - ${hospital}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background: #f39c12; color: #fff; padding: 20px; text-align: center;">
              <h2 style="margin: 0;">THƯ NHẮC THANH TOÁN</h2>
            </div>
            <div style="padding: 30px;">
              <p>Kính gửi: <b>Ban Lãnh đạo ${hospital}</b>,</p>
              <p>Lời đầu tiên, Hoàng Đức Pharma xin cảm ơn Quý đối tác đã tin tưởng sử dụng sản phẩm của chúng tôi.</p>
              <p>Qua rà soát hệ thống, chúng tôi nhận thấy Quý đơn vị đang có khoản nợ phát sinh từ <b>${time}</b> với số tiền: <b>${debt}</b>.</p>
              <p>Kính mong Quý đơn vị hỗ trợ đối chiếu và sắp xếp kế hoạch thanh toán trong thời gian sớm nhất để đảm bảo hạn mức tín dụng cho các đơn hàng tiếp theo.</p>
              <p>Mọi thắc mắc vui lòng liên hệ hotline: 028.XXXX.XXXX</p>
              <p>Trân trọng cảm ơn.</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="font-size: 12px; color: #666;">Bộ phận Công nợ - Hoàng Đức Pharma</p>
            </div>
          </div>
        `
      };
    }

    if (group === 3) {
      return {
        subject: `[Tri ân] Thư cảm ơn và Ưu đãi đặc biệt cho Khách hàng VIP - ${hospital}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background: #1abc9c; color: #fff; padding: 20px; text-align: center;">
              <h2 style="margin: 0;">THƯ CẢM ƠN & ƯU ĐÃI VIP</h2>
            </div>
            <div style="padding: 30px;">
              <p>Kính gửi: <b>Ban Lãnh đạo ${hospital}</b>,</p>
              <p>Hoàng Đức Pharma xin gửi lời tri ân sâu sắc tới Quý Bệnh viện - một trong những đối tác chiến lược hàng đầu của chúng tôi.</p>
              <p>Chúng tôi ghi nhận sự chuyên nghiệp của Quý đơn vị trong việc duy trì dòng tiền và đối chiếu công nợ đúng hạn. Để hỗ trợ Quý bệnh viện tốt hơn, chúng tôi xin gửi tặng <b>Gói ưu đãi chiết khấu 2%</b> cho các đơn hàng vật tư tiêu hao trong quý này.</p>
              <p>Chúng tôi cam kết sẽ luôn ưu tiên nguồn hàng và dịch vụ hậu mãi tốt nhất cho Quý đơn vị.</p>
              <p>Kính chúc Quý Lãnh đạo sức khỏe và thành công.</p>
              <p>Trân trọng!</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="font-size: 12px; color: #666;">Giám đốc Kinh doanh - Hoàng Đức Pharma</p>
            </div>
          </div>
        `
      };
    }

    return {
      subject: `[Giới thiệu] Cập nhật Danh mục sản phẩm mới - ${hospital}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background: #3498db; color: #fff; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">THƯ THĂM HỎI & GIỚI THIỆU SP</h2>
          </div>
          <div style="padding: 30px;">
            <p>Kính gửi: <b>Ban Lãnh đạo ${hospital}</b>,</p>
            <p>Đã một thời gian Hoàng Đức Pharma chưa có cơ hội được phục vụ các đơn hàng mới từ Quý đơn vị. Chúng tôi xin gửi lời thăm hỏi và hy vọng công tác chuyên môn tại đơn vị vẫn đang diễn ra thuận lợi.</p>
            <p>Hiện nay, chúng tôi vừa nhập kho danh mục <b>Sản phẩm nhóm chuyên khoa mới</b> với mức giá cực kỳ cạnh tranh và đầy đủ hồ sơ thầu. Kính mời Quý đơn vị tham khảo bảng giá đính kèm.</p>
            <p>Chúng tôi rất mong được sớm kết nối lại và hỗ trợ Quý đơn vị.</p>
            <p>Trân trọng cảm ơn.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #666;">Phòng Phát triển Thị trường - Hoàng Đức Pharma</p>
          </div>
        </div>
      `
    };
  };

  const saveCurrentEdit = () => {
    if (editorRef.current && isEditing) {
      setEditedContents(prev => ({
        ...prev,
        [selectedCustomers[currentIdx].id]: editorRef.current.innerHTML
      }));
    }
  };

  const handleNextStep = () => { saveCurrentEdit(); setIsEditing(false); setStep(step + 1); };
  const handlePrevStep = () => { saveCurrentEdit(); setIsEditing(false); setStep(step - 1); };

  const handleFinalSend = async () => {
    setSending(true);
    const toSend = selectedCustomers.filter(c => finalSelectedIds.includes(c.id));
    addToast(`⏳ Đang thực hiện gửi ${toSend.length} email...`, 'info');
    try {
      for (const c of toSend) {
        const template = getTemplate(c);
        const html = editedContents[c.id] || template.html;
        const config = customerConfigs[c.id];
        
        const to = config?.to || TARGET_EMAIL;
        const cc = config?.cc || '';

        await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ to, cc, subject: template.subject, html })
        });
      }
      addToast(`🚀 Đã gửi thành công ${toSend.length} email!`, 'success');
      onSuccess();
    } catch (e) {
      addToast('❌ Lỗi gửi mail hàng loạt', 'error');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal modal-resizable">
        <div className="modal-header">
          <div className="modal-title">📧 Quy trình gửi Email Chăm sóc & Nhắc nợ ({step}/3)</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          {step === 1 && (
            <>
              <div className="modal-body-content">
                <h4 style={{marginBottom:15}}>Bước 1: Phân loại tự động ({selectedCustomers.length} KH)</h4>
                <div className="card">
                  <table className="data-table">
                    <thead>
                      <tr><th>Khách hàng</th><th>Phân nhóm</th><th>Dư nợ</th><th>Thời gian nợ</th></tr>
                    </thead>
                    <tbody>
                      {selectedCustomers.map(c => {
                        const group = getCustomerGroup(c);
                        const labels = [
                          '',
                          '🛑 Nhóm 1: Quá hạn > 12 tháng',
                          '⚠️ Nhóm 2: Nợ 3-6 tháng',
                          '💎 Nhóm 3: VIP < 3 tháng',
                          '📞 Nhóm 4: Hỏi thăm (> 60 ngày)'
                        ];
                        const colors = ['', '#e74c3c', '#f39c12', '#1abc9c', '#3498db'];
                        return (
                          <tr key={c.id}>
                            <td><b>{c.Ten_Ben_Vien}</b></td>
                            <td><span style={{color: colors[group], fontWeight: 700}}>{labels[group]}</span></td>
                            <td>{formatPrice(c.Du_No_Hien_Tai)}</td>
                            <td>{c.Thoi_Gian_No || '0 ngày'}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <button className="refresh-btn primary" onClick={handleNextStep}>Tiếp tục: Review nội dung →</button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="modal-body-content" style={{display:'flex', flexDirection:'column', gap:15}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <h4 style={{margin:0}}>Bước 2: Review nội dung theo mẫu</h4>
                  <div style={{display:'flex', gap:10, alignItems:'center'}}>
                    <button className="action-btn" disabled={currentIdx === 0} onClick={() => { saveCurrentEdit(); setCurrentIdx(currentIdx - 1); setIsEditing(false); }}>← Trước</button>
                    <span style={{fontWeight:700}}>{currentIdx + 1} / {selectedCustomers.length}</span>
                    <button className="action-btn" disabled={currentIdx === selectedCustomers.length - 1} onClick={() => { saveCurrentEdit(); setCurrentIdx(currentIdx + 1); setIsEditing(false); }}>Sau →</button>
                  </div>
                </div>

                <div style={{background:'#f8fafc', padding:20, borderRadius:8, border:'1px solid #e2e8f0', flex:1, display:'flex', flexDirection:'column'}}>
                  <div style={{display:'flex', justifyContent:'space-between', marginBottom:15}}>
                    <div>
                      <div style={{fontSize:12, color:'#64748b'}}>Khách hàng:</div>
                      <div style={{fontWeight:700}}>{selectedCustomers[currentIdx].Ten_Ben_Vien}</div>
                    </div>
                    <button className="action-btn" onClick={() => { if (isEditing) saveCurrentEdit(); setIsEditing(!isEditing); }}>
                      {isEditing ? '💾 Lưu' : '✏️ Sửa'}
                    </button>
                  </div>
                  <div
                    ref={editorRef}
                    contentEditable={isEditing}
                    style={{background: '#fff', padding:20, border:'1px solid #ddd', borderRadius:4, flex:1, overflowY:'auto', outline:'none'}}
                    dangerouslySetInnerHTML={{ __html: editedContents[selectedCustomers[currentIdx].id] || getTemplate(selectedCustomers[currentIdx]).html }}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="action-btn" onClick={handlePrevStep}>← Quay lại</button>
                <button className="refresh-btn primary" onClick={handleNextStep}>Tiếp tục: Gửi mail →</button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="modal-body-content">
                <h4 style={{marginBottom:15}}>Bước 3: Xác nhận gửi ({finalSelectedIds.length} Email)</h4>
                <div className="card">
                  <table>
                    <thead><tr><th>Gửi?</th><th>Khách hàng</th><th>Tiêu đề</th><th>Email</th></tr></thead>
                    <tbody>
                      {selectedCustomers.map(c => (
                        <tr key={c.id}>
                          <td><input type="checkbox" checked={finalSelectedIds.includes(c.id)} onChange={(e) => setFinalSelectedIds(e.target.checked ? [...finalSelectedIds, c.id] : finalSelectedIds.filter(id => id !== c.id))} /></td>
                          <td>{c.Ten_Ben_Vien}</td>
                          <td style={{fontSize:11}}>{getTemplate(c).subject}</td>
                          <td style={{fontSize:11}}>{customerConfigs[c.id]?.to || TARGET_EMAIL}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <button className="action-btn" onClick={handlePrevStep}>← Quay lại</button>
                <button className="refresh-btn primary" onClick={handleFinalSend} disabled={sending || finalSelectedIds.length === 0}>
                  {sending ? '⌛ Đang gửi...' : '🚀 XÁC NHẬN GỬI'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
