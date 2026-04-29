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
        subject: `[Thông báo quan trọng] V/v Tạm ngưng cung ứng hàng hóa do quá hạn hạn mức tín dụng - ${hospital}`,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.8; color: #1e293b; max-width: 650px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(135deg, #e74c3c, #c0392b); color: #fff; padding: 30px; text-align: center;">
              <h2 style="margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px;">Thông báo Điều chỉnh Công tác Cung ứng</h2>
            </div>
            <div style="padding: 40px; background: #fff;">
              <p>Kính gửi: <b>Ban Lãnh đạo ${hospital}</b>,</p>
              <p>Lời đầu tiên, <b>Công ty TNHH Dược phẩm Hoàng Đức</b> xin gửi lời chào trân trọng và lời cảm ơn chân thành vì sự tin tưởng và đồng hành của Quý đơn vị trong suốt thời gian qua.</p>
              <p>Với tinh thần hợp tác cùng phát triển, chúng tôi luôn nỗ lực tối đa để đảm bảo nguồn hàng ổn định và kịp thời cho công tác điều trị tại bệnh viện. Tuy nhiên, qua rà soát hệ thống quản lý công nợ tập trung, chúng tôi nhận thấy tình trạng dư nợ của Quý đơn vị đã vượt quá các giới hạn an toàn tài chính cho phép:</p>
              
              <div style="background: #fff5f5; border-left: 4px solid #e74c3c; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <table style="width: 100%; font-size: 14px;">
                  <tr><td style="color: #64748b; padding-bottom: 8px;">Tổng dư nợ hiện tại:</td><td style="font-weight: 700; color: #e74c3c; text-align: right;">${debt}</td></tr>
                  <tr><td style="color: #64748b;">Thời gian nợ lâu nhất:</td><td style="font-weight: 700; text-align: right;">${time}</td></tr>
                </table>
              </div>

              <p>Mặc dù hai bên đã có nhiều nỗ lực đối chiếu trong thời gian qua, nhưng do khoản nợ đã kéo dài trên 12 tháng, hệ thống quản trị rủi ro của chúng tôi buộc phải thực hiện lệnh <b>TẠM NGƯNG tiếp nhận các đơn hàng mới</b> kể từ ngày hôm nay.</p>
              <p>Chúng tôi rất lấy làm tiếc về sự gián đoạn ngoài ý muốn này. Kính đề nghị Quý Ban Lãnh đạo chỉ đạo bộ phận Tài chính - Kế toán khẩn trương rà soát và thực hiện quyết toán một phần hoặc toàn bộ số nợ trên để chúng tôi có cơ sở mở lại hạn mức cung ứng ngay lập tức.</p>
              <p>Hoàng Đức Pharma luôn mong muốn sớm tìm được tiếng nói chung để tiếp tục đồng hành cùng Quý Bệnh viện trong sứ mệnh chăm sóc sức khỏe nhân dân.</p>
              <p>Trân trọng cảm ơn.</p>
              
              <div style="margin-top: 40px; border-top: 1px solid #f1f5f9; padding-top: 20px;">
                <b style="color: #0f172a;">Bộ phận Quản lý Công nợ Chiến lược</b><br/>
                Công ty Dược phẩm Hoàng Đức
              </div>
            </div>
          </div>
        `
      };
    }

    if (group === 2) {
      return {
        subject: `[Thư nhắc] Đề nghị hỗ trợ đối chiếu và quyết toán công nợ định kỳ - ${hospital}`,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.8; color: #1e293b; max-width: 650px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #f39c12, #d35400); color: #fff; padding: 25px; text-align: center;">
              <h2 style="margin: 0; font-size: 18px; text-transform: uppercase;">Thư nhắc Thanh toán Định kỳ</h2>
            </div>
            <div style="padding: 40px; background: #fff;">
              <p>Kính gửi: <b>Ban Lãnh đạo ${hospital}</b>,</p>
              <p>Lời đầu tiên, <b>Công ty Dược phẩm Hoàng Đức</b> xin gửi lời chúc sức khỏe và thành công tới Quý đối tác.</p>
              <p>Nhằm đảm bảo tính chính xác trong công tác quản lý tài chính giữa hai bên và duy trì sự ổn định của chuỗi cung ứng, chúng tôi xin gửi thư nhắc về các khoản nợ đã đến hạn thanh toán:</p>
              
              <div style="background: #fdf6e3; border-left: 4px solid #f39c12; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <p style="margin: 0 0 10px 0; font-size: 14px; color: #7b5e10;">Thông tin chi tiết:</p>
                <table style="width: 100%; font-size: 15px;">
                  <tr><td>Số tiền cần thanh toán:</td><td style="font-weight: 700; text-align: right;">${debt}</td></tr>
                  <tr><td>Tuổi nợ bình quân:</td><td style="font-weight: 700; text-align: right;">${time}</td></tr>
                </table>
              </div>

              <p>Chúng tôi thấu hiểu những áp lực về thủ tục chứng từ tại Quý bệnh viện. Tuy nhiên, việc thanh toán đúng hạn sẽ giúp chúng tôi đảm bảo nguồn tài chính để nhập kho các lô thuốc mới phục vụ kịp thời cho nhu cầu của Quý đơn vị trong thời gian tới.</p>
              <p>Nếu Quý đơn vị gặp bất kỳ khó khăn nào về hồ sơ đối chiếu, xin vui lòng phản hồi trực tiếp cho bộ phận kế toán của chúng tôi qua hotline: <b>028.XXXX.XXXX</b> để được hỗ trợ xử lý ngay.</p>
              <p>Hoàng Đức Pharma rất trân trọng sự phối hợp từ Quý đối tác.</p>
              <p>Trân trọng!</p>
              
              <div style="margin-top: 40px; border-top: 1px solid #f1f5f9; padding-top: 20px;">
                <b style="color: #0f172a;">Phòng Kế toán Công nợ</b><br/>
                Công ty Dược phẩm Hoàng Đức
              </div>
            </div>
          </div>
        `
      };
    }

    if (group === 3) {
      return {
        subject: `[Tri ân Đối tác Chiến lược] Thư cảm ơn và Chương trình Ưu đãi VIP - ${hospital}`,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.8; color: #1e293b; max-width: 650px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; border-top: 5px solid #1abc9c;">
            <div style="padding: 40px; background: #fff;">
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; padding: 10px 20px; background: #e6fffa; color: #1abc9c; border-radius: 30px; font-weight: 700; font-size: 12px; text-transform: uppercase;">Strategic Partnership Program</div>
              </div>
              <p>Kính gửi: <b>Ban Lãnh đạo ${hospital}</b>,</p>
              <p>Thay mặt <b>Công ty TNHH Dược phẩm Hoàng Đức</b>, tôi xin gửi lời tri ân sâu sắc tới Quý Bệnh viện vì sự tin tưởng và tinh thần hợp tác chuyên nghiệp tuyệt vời trong suốt thời gian qua.</p>
              <p>Chúng tôi đặc biệt đánh giá cao sự minh bạch và hiệu quả của Quý đơn vị trong công tác đối chiếu và quyết toán các nghĩa vụ tài chính. Đây chính là nền tảng vững chắc giúp hai bên duy trì một chuỗi cung ứng y tế bền vững và chất lượng.</p>
              <p>Để thay lời cảm ơn và hỗ trợ Quý bệnh viện tối ưu hóa ngân sách hoạt động, Hoàng Đức Pharma xin thông báo áp dụng <b>Gói ưu đãi đặc biệt dành cho Đối tác VIP</b>:</p>
              
              <div style="background: #f0fff4; border: 1px dashed #48bb78; padding: 25px; border-radius: 12px; text-align: center; margin: 30px 0;">
                <h3 style="margin: 0; color: #2f855a; font-size: 24px;">CHIẾT KHẤU THÊM 2%</h3>
                <p style="margin: 5px 0 0; color: #38a169; font-size: 14px;">Áp dụng cho toàn bộ danh mục vật tư & hóa chất xét nghiệm trong Quý này</p>
              </div>

              <p>Bên cạnh đó, Quý đơn vị sẽ luôn được ưu tiên giữ hàng đối với các biệt dược khan hiếm và nhận được sự hỗ trợ kỹ thuật 24/7 từ đội ngũ chuyên gia của chúng tôi.</p>
              <p>Một lần nữa, xin kính chúc Quý Ban Lãnh đạo cùng toàn thể đội ngũ y bác sĩ dồi dào sức khỏe và công tác tốt.</p>
              <p>Trân trọng!</p>
              
              <div style="margin-top: 40px; border-top: 1px solid #f1f5f9; padding-top: 20px; display: flex; justify-content: space-between; align-items: flex-end;">
                <div>
                  <b style="color: #0f172a; font-size: 16px;">Giám đốc Kinh doanh</b><br/>
                  Công ty Dược phẩm Hoàng Đức
                </div>
                <div style="color: #94a3b8; font-size: 11px;">Hoàng Đức Pharma - Partner in Healthcare</div>
              </div>
            </div>
          </div>
        `
      };
    }

    return {
      subject: `[Thư thăm hỏi] Cập nhật Danh mục giải pháp Y tế mới nhất từ Hoàng Đức Pharma - ${hospital}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.8; color: #1e293b; max-width: 650px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="padding: 40px; background: #fff;">
            <p>Kính gửi: <b>Ban Lãnh đạo ${hospital}</b>,</p>
            <p>Đã một thời gian chúng tôi chưa có dịp được đồng hành cùng Quý đơn vị trong các dự án cung ứng thuốc và vật tư y tế. Thay mặt <b>Hoàng Đức Pharma</b>, tôi xin gửi lời thăm hỏi chân thành và hy vọng công tác chuyên môn tại đơn vị vẫn đang diễn ra thuận lợi và hiệu quả.</p>
            <p>Thị trường dược phẩm luôn biến động, và chúng tôi thấu hiểu Quý bệnh viện luôn cần những giải pháp có sự cân bằng tối ưu giữa chất lượng điều trị và hiệu quả kinh tế. Trong thời gian qua, chúng tôi đã cập nhật danh mục sản phẩm với nhiều <b>Biệt dược nhóm chuyên khoa</b> và <b>Vật tư tiêu hao công nghệ mới</b>:</p>
            
            <div style="background: #ebf8ff; border-radius: 12px; padding: 25px; margin: 30px 0;">
              <h4 style="margin: 0 0 15px 0; color: #2b6cb0;">Điểm nổi bật trong danh mục mới:</h4>
              <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #2c5282;">
                <li style="margin-bottom: 10px;"><b>Tối ưu chi phí:</b> Mức giá thầu cạnh tranh hơn nhờ tối ưu hóa chuỗi cung ứng toàn cầu.</li>
                <li style="margin-bottom: 10px;"><b>Đầy đủ pháp lý:</b> Hồ sơ thầu, giấy phép lưu hành và chứng nhận GxP luôn sẵn sàng.</li>
                <li><b>Hỗ trợ chuyên môn:</b> Sẵn sàng cung cấp mẫu thử và báo cáo đánh giá lâm sàng từ nhà sản xuất.</li>
              </ul>
            </div>

            <p>Chúng tôi đính kèm bảng chào giá chi tiết cho các sản phẩm chủ lực để Quý đơn vị tiện tham khảo cho các kế hoạch đấu thầu sắp tới.</p>
            <p>Nếu Quý bệnh viện có bất kỳ nhu cầu đặc thù nào, chúng tôi rất mong được cử đại diện chuyên môn đến trao đổi trực tiếp để đưa ra phương án hỗ trợ tốt nhất.</p>
            <p>Trân trọng cảm ơn và mong sớm nhận được phản hồi từ Quý đơn vị.</p>
            
            <div style="margin-top: 40px; border-top: 1px solid #f1f5f9; padding-top: 20px;">
              <b style="color: #0f172a;">Phòng Phát triển Thị trường & Quan hệ Đối tác</b><br/>
              Công ty Dược phẩm Hoàng Đức
            </div>
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
                          <td style={{fontSize:11}}>
                            <div style={{color:'var(--accent)', fontWeight:600}}>To: {customerConfigs[c.id]?.to || TARGET_EMAIL}</div>
                            {customerConfigs[c.id]?.cc && <div style={{color:'#64748b', marginTop:2}}>Cc: {customerConfigs[c.id]?.cc}</div>}
                          </td>
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
