import { useState, useRef } from 'react';
import { formatPrice } from '../utils';
import { IconGemini } from './Icons';
import { MOCK_CUSTOMERS } from '../mockData';

export default function BulkEmailModal({ selectedBids, bids, customers, products, onClose, addToast, onSuccess, customerConfigs = {} }) {
  const [step, setStep] = useState(1);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [sending, setSending] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContents, setEditedContents] = useState({});
  const [finalSelectedIds, setFinalSelectedIds] = useState(selectedBids.map(b => b.id));
  const [aiLoading, setAiLoading] = useState(false);
  const [emailStyles, setEmailStyles] = useState({});
  const [debtReminders, setDebtReminders] = useState(() => {
    const initial = {};
    selectedBids.forEach(b => {
      const hospitalName = b.chu_dau_tu || '';
      const customer = MOCK_CUSTOMERS.find(c => hospitalName.includes(c.Ten_Benh_Vien) || c.Ten_Benh_Vien.includes(hospitalName));
      const isOver = customer && customer.Du_No_Hien_Tai > customer.Han_Muc_No;
      initial[b.id] = !!isOver; // Default ON if over limit
    });
    return initial;
  });
  const editorRef = useRef(null);

  const TARGET_EMAIL = 'leminhkhoi279@gmail.com';

  const generateHTML = (bid) => {
    const style  = emailStyles[bid.id] || 'professional';
    const isProf = style === 'professional';
    const hasDebtReminder = debtReminders[bid.id];

    const hospital = bid.chu_dau_tu || 'Quý cơ quan';
    const title    = bid.ten_goi_thau || 'Gói thầu dược phẩm';
    const code     = bid.ma_goi_thau || 'N/A';
    const bps      = bid.bps_score ?? 0;
    const soDM     = bid.so_danh_muc || 0;
    const topDrug  = bid.thuoc_tieu_bieu || 'các biệt dược nhóm chuyên khoa';

    if (isProf) {
      return `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1e293b; line-height: 1.8; max-width: 600px; margin: auto;">
          <div style="background: linear-gradient(135deg, #1ABB9C, #16a085); padding: 30px; color: #fff; border-radius: 16px 16px 0 0; text-align: center;">
            <h2 style="margin: 0; font-size: 22px; letter-spacing: 0.5px;">HOÀNG ĐỨC PHARMA</h2>
            <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.9;">Bidding Hunter AI Assistant</p>
          </div>
          <div style="padding: 40px; border: 1px solid #e2e8f0; border-top: none; background: #fff; border-radius: 0 0 16px 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
            <p>Kính gửi: <b>Ban Lãnh đạo ${hospital}</b>,</p>
            <p>Lời đầu tiên, <b>Công ty TNHH Dược phẩm Hoàng Đức (Hoàng Đức Pharma)</b> xin gửi tới Quý Bệnh viện lời chào trân trọng nhất.</p>
            <p>Chúng tôi đã thực hiện phân tích chuyên sâu về gói thầu: <b>"${title}"</b> (Mã thầu: ${code}). Dựa trên dữ liệu thực tế từ hệ thống Bidding Hunter, chúng tôi nhận thấy có <b>${soDM} danh mục</b> thuốc phù hợp với yêu cầu chuyên môn của Quý đơn vị.</p>
            <p>Sản phẩm tiêu biểu chúng tôi đề xuất: <b>${topDrug}</b>.</p>
            <div style="background: #f8fafc; padding: 20px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #1ABB9C;">
              <h4 style="margin: 0 0 10px; color: #0f172a;">Lý do Hoàng Đức Pharma là lựa chọn tối ưu:</h4>
              <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                <li style="margin-bottom: 8px;"><b>Chỉ số BPS tối ưu (${bps}/10):</b> Sản phẩm đáp ứng vượt trội các tiêu chí kỹ thuật và hiệu quả kinh tế.</li>
                <li style="margin-bottom: 8px;"><b>Cam kết cung ứng:</b> Đảm bảo nguồn hàng ổn định, chính xác theo tiến độ và số lượng của gói thầu.</li>
                <li><b>Uy tín thương hiệu:</b> Hoàng Đức Pharma cam kết đồng hành cùng Quý Bệnh viện với những sản phẩm đạt chuẩn GxP.</li>
              </ul>
            </div>

            ${hasDebtReminder ? `
            <div style="background: #fff3f2; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #fecaca; color: #b91c1c; font-size: 13px;">
              ⚠️ <b>Lưu ý về đối chiếu công nợ:</b><br/>
              Theo ghi nhận của chúng tôi, hiện tại Quý đơn vị đang có khoản công nợ vượt hạn mức. Kính mong Quý Ban Lãnh đạo hỗ trợ chỉ đạo các bộ phận liên quan rà soát và thực hiện đối chiếu/thanh toán sớm để đảm bảo quá trình cung ứng thuốc cho các gói thầu mới được diễn ra thông suốt.
            </div>
            ` : ''}

            <p>Chúng tôi rất mong có cơ hội được thảo luận chi tiết hơn về phương án triển khai.</p>
            <p>Kính chúc Quý Ban Lãnh đạo sức khỏe và dồi dào năng lượng.</p>
            <p>Trân trọng cảm ơn!</p>
            <p style="margin-top: 30px; border-top: 1px solid #f1f5f9; padding-top: 20px;">
              <b>Ban Quản lý Thầu</b><br/>
              Công ty Dược phẩm Hoàng Đức
            </p>
          </div>
        </div>
      `;
    }
    return `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <div style="background: #1ABB9C; padding: 15px; color: #fff; border-radius: 4px 4px 0 0;">
          <h3 style="margin: 0;">Hoàng Đức Pharma — Bidding Hunter AI</h3>
        </div>
        <div style="padding: 20px; border: 1px solid #ddd; border-top: none; background: #fff;">
          <p>Kính gửi Ban lãnh đạo <b>${hospital}</b>,</p>
          <p>Chúng tôi đề xuất <b>${soDM} danh mục thuốc</b> cho gói thầu <b>${title}</b>.</p>
          <p>Sản phẩm tiêu biểu: <b>${topDrug}</b>. Điểm BPS hệ thống: <b>${bps}</b>.</p>
          ${hasDebtReminder ? `
          <p style="color: #b91c1c; font-size: 12px; border: 1px solid #fecaca; background: #fff3f2; padding: 10px; border-radius: 4px;">
            ⚠️ <b>Nhắc nợ:</b> Quý đơn vị đang có công nợ vượt hạn mức. Vui lòng hỗ trợ rà soát thanh toán.
          </p>
          ` : ''}
          <p>Trân trọng,<br/><b>Đội ngũ Bidding Hunter</b></p>
        </div>
      </div>
    `;
  };

  const saveCurrentEdit = () => {
    if (editorRef.current && isEditing) {
      setEditedContents(prev => ({
        ...prev,
        [selectedBids[currentIdx].id]: editorRef.current.innerHTML
      }));
    }
  };

  const handleNextStep = () => { saveCurrentEdit(); setIsEditing(false); setStep(step + 1); };
  const handlePrevStep = () => { saveCurrentEdit(); setIsEditing(false); setStep(step - 1); };

  const toggleFinalSelect = (id) => {
    setFinalSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const handleFinalSend = async () => {
    setSending(true);
    const toSend = selectedBids.filter(b => finalSelectedIds.includes(b.id));
    addToast(`⏳ Đang thực hiện gửi ${toSend.length} email...`, 'info');
    try {
      for (const bid of toSend) {
        const html = editedContents[bid.id] || generateHTML(bid);
        
        // Tìm customer để lấy mail config
        const hospitalName = bid.chu_dau_tu || '';
        const customer = MOCK_CUSTOMERS.find(c => hospitalName.includes(c.Ten_Benh_Vien) || c.Ten_Benh_Vien.includes(hospitalName));
        const config = customer ? customerConfigs[customer.id] : null;
        
        const to = config?.to || TARGET_EMAIL;
        const cc = config?.cc || '';

        await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ to, cc, subject: `🚀 Chào thầu: ${bid.ten_goi_thau}`, html })
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

  const handleAIAssist = async () => {
    const promptText = prompt('Sếp muốn Gemini sửa email này như thế nào?');
    if (!promptText) return;

    let apiKeys = [];
    try { const raw = localStorage.getItem('bh_ai_keys'); if (raw) apiKeys = JSON.parse(raw); } catch {}

    const activeKeyObj = apiKeys.find(k => !k.failedAt || (Date.now() - k.failedAt > 24 * 60 * 60 * 1000));
    if (!activeKeyObj) { addToast('❌ Vui lòng cập nhật API Key Gemini trong ô chat góc dưới bên phải!', 'error'); return; }

    setAiLoading(true);
    addToast('✨ Gemini đang phân tích và viết lại email...', 'info');

    const bid = selectedBids[currentIdx];
    const currentHtml = editedContents[bid.id] || generateHTML(bid);
    const currentStyle = emailStyles[bid.id] || 'professional';

    const aiMessage = `Bạn là trợ lý AI Gemini viết email chào thầu dược phẩm cho công ty Hoàng Đức Pharma.
Phong cách email: ${currentStyle === 'professional' ? 'CHUYÊN NGHIỆP, TRANG TRỌNG' : 'TÓM GỌN, SÚC TÍCH'}.
Email hiện tại (HTML):
\`\`\`html
${currentHtml}
\`\`\`
YÊU CẦU: ${promptText}
Hãy viết lại email theo yêu cầu. Giữ nguyên định dạng HTML. Chỉ trả về HTML, không giải thích.`;

    try {
      const res = await fetch('/api/ask-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: aiMessage, context: null, apiKey: activeKeyObj.key, history: [] })
      });
      if (!res.ok) throw new Error('API Error');
      const data = await res.json();
      let newHtml = data.text.trim();
      if (newHtml.startsWith('```html')) newHtml = newHtml.replace(/^```html/, '').replace(/```$/, '').trim();
      if (newHtml.startsWith('```'))     newHtml = newHtml.replace(/^```/, '').replace(/```$/, '').trim();
      setEditedContents(prev => ({ ...prev, [bid.id]: newHtml }));
      if (editorRef.current) editorRef.current.innerHTML = newHtml;
      setIsEditing(true);
      addToast('✅ Gemini đã cập nhật xong email!', 'success');
    } catch (e) {
      addToast('❌ Lỗi Gemini API. Sếp thử lại sau nhé.', 'error');
    } finally {
      setAiLoading(false);
    }
  };

  const handleClose = () => {
    if (Object.keys(editedContents).length > 0) {
      if (window.confirm('Các chỉnh sửa sẽ không được lưu. Vẫn thoát?')) onClose();
    } else { onClose(); }
  };

  return (
    <div className="modal-overlay">
      <div className="modal modal-resizable">
        <div className="modal-header">
          <div className="modal-title">📧 Quy trình gửi Email ({step}/3)</div>
          <div style={{display:'flex', alignItems:'center', gap:15}}>
            <div className="step-dots">
              <span className={`dot ${step >= 1 ? 'active' : ''}`} />
              <span className={`dot ${step >= 2 ? 'active' : ''}`} />
              <span className={`dot ${step >= 3 ? 'active' : ''}`} />
            </div>
            <button className="modal-close" onClick={handleClose}>✕</button>
          </div>
        </div>

        <div className="modal-body">
          {/* STEP 1 */}
          {step === 1 && (
            <>
              <div className="modal-body-content">
                <h4 style={{marginBottom:15, color:'var(--text-primary)'}}>Bước 1: Xác nhận danh sách lựa chọn</h4>
                <div className="card" style={{border:'1px solid var(--border)'}}>
                  <table>
                    <thead><tr><th>Gói thầu</th><th>Chủ đầu tư</th><th>Danh mục</th><th>Điểm BPS</th></tr></thead>
                    <tbody>
                      {selectedBids.map(b => (
                        <tr key={b.id}>
                          <td style={{fontSize:11}}>{b.ma_goi_thau}</td>
                          <td>{(b.chu_dau_tu || '').slice(0, 40)}</td>
                          <td style={{textAlign:'center'}}>{b.so_danh_muc} DM</td>
                          <td><span className={`bps-badge ${b.flag || 'GRAY'}`}>{b.bps_score ?? 0}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <div />
                <button className="refresh-btn primary" onClick={handleNextStep} style={{padding:'12px 35px'}}>
                  Tiếp tục: Review nội dung →
                </button>
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <div className="modal-body-content" style={{display:'flex', flexDirection:'column', gap:15, paddingBottom:10}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <h4 style={{margin:0, color:'var(--text-primary)'}}>Bước 2: Review & Chỉnh sửa (Tùy chọn)</h4>
                  <div style={{display:'flex', gap:20, alignItems:'center'}}>
                    <div className="style-toggle" style={{display:'flex', background:'#f1f5f9', padding:4, borderRadius:10, gap:4}}>
                      {['professional', 'concise'].map(s => (
                        <button key={s}
                          onClick={() => {
                            const bidId = selectedBids[currentIdx].id;
                            setEmailStyles(prev => ({ ...prev, [bidId]: s }));
                            setEditedContents(prev => { const n = {...prev}; delete n[bidId]; return n; });
                          }}
                          style={{
                            border:'none', padding:'6px 16px', borderRadius:7, fontSize:12, fontWeight:600, cursor:'pointer',
                            background: (emailStyles[selectedBids[currentIdx].id] || 'professional') === s ? '#fff' : 'transparent',
                            color: (emailStyles[selectedBids[currentIdx].id] || 'professional') === s ? 'var(--accent)' : '#64748b',
                            boxShadow: (emailStyles[selectedBids[currentIdx].id] || 'professional') === s ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
                          }}
                        >{s === 'professional' ? 'Chuyên nghiệp' : 'Tóm gọn'}</button>
                      ))}
                    </div>
                    <div style={{display:'flex', gap:10, alignItems:'center'}}>
                      <button className="action-btn" disabled={currentIdx === 0} onClick={() => { saveCurrentEdit(); setCurrentIdx(currentIdx - 1); setIsEditing(false); }}>← Trước</button>
                      
                      {(() => {
                        const b = selectedBids[currentIdx];
                        const hospitalName = b.chu_dau_tu || '';
                        const customer = MOCK_CUSTOMERS.find(c => hospitalName.includes(c.Ten_Benh_Vien) || c.Ten_Benh_Vien.includes(hospitalName));
                        const isOver = customer && customer.Du_No_Hien_Tai > customer.Han_Muc_No;
                        if (!isOver) return null;
                        return (
                          <label style={{display:'flex', alignItems:'center', gap:6, fontSize:12, background:'#fef2f2', padding:'5px 10px', borderRadius:20, border:'1px solid #fecaca', cursor:'pointer', color:'#b91c1c', fontWeight:700}}>
                            <input 
                              type="checkbox" 
                              checked={!!debtReminders[b.id]} 
                              onChange={(e) => {
                                const checked = e.target.checked;
                                setDebtReminders(prev => ({ ...prev, [b.id]: checked }));
                                // Refresh HTML content if not manually edited yet
                                setEditedContents(prev => { const n = {...prev}; delete n[b.id]; return n; });
                              }}
                            />
                            🔔 Nhắc nợ
                          </label>
                        );
                      })()}

                      <span style={{fontSize:13, fontWeight:700}}>{currentIdx + 1} / {selectedBids.length}</span>
                      <button className="action-btn" disabled={currentIdx === selectedBids.length - 1} onClick={() => { saveCurrentEdit(); setCurrentIdx(currentIdx + 1); setIsEditing(false); }}>Sau →</button>
                    </div>
                  </div>
                </div>

                <div style={{background:'#f4f7f6', padding:'15px 20px', borderRadius:6, border:'1px solid #e0e0e0', flex:1, display:'flex', flexDirection:'column', overflow:'hidden'}}>
                  <div style={{display:'flex', justifyContent:'space-between', marginBottom:12, flexShrink:0}}>
                    <div>
                      <div style={{fontSize:11, color:'#666'}}>Chủ đầu tư:</div>
                      <div style={{fontWeight:700, fontSize:14}}>{selectedBids[currentIdx].chu_dau_tu}</div>
                    </div>
                    <div style={{display:'flex', gap:10, alignItems:'center'}}>
                      <button
                        className={`edit-toggle-btn ${aiLoading ? 'pulsing' : ''}`}
                        title="Sửa nội dung bằng Gemini"
                        onClick={handleAIAssist}
                        disabled={aiLoading}
                        style={{border:'1px solid #ddd', background:'#fff', borderRadius:'4px', cursor: aiLoading ? 'wait' : 'pointer', display:'flex', alignItems:'center', justifyContent:'center', padding:'6px'}}
                      >
                        <IconGemini size={20} />
                      </button>
                      <button
                        className={`edit-toggle-btn ${isEditing ? 'active' : ''}`}
                        title={isEditing ? 'Lưu' : 'Chỉnh sửa'}
                        onClick={() => { if (isEditing) saveCurrentEdit(); setIsEditing(!isEditing); }}
                      >
                        {isEditing ? '💾' : '✏️'}
                      </button>
                    </div>
                  </div>
                  <div
                    ref={editorRef}
                    contentEditable={isEditing}
                    className={`editable-content ${isEditing ? 'editing-active' : 'editing-locked'}`}
                    key={selectedBids[currentIdx].id}
                    dangerouslySetInnerHTML={{ __html: editedContents[selectedBids[currentIdx].id] || generateHTML(selectedBids[currentIdx]) }}
                    style={{background: isEditing ? '#fff' : '#fcfcfc', padding:15, border: isEditing ? '2px solid var(--accent)' : '1px solid #ddd', borderRadius:4, flex:1, overflowY:'auto', outline:'none', fontSize:13, opacity: isEditing ? 1 : 0.85, cursor: isEditing ? 'text' : 'not-allowed'}}
                  />
                  {!isEditing && <div style={{fontSize:10, color:'#999', fontStyle:'italic', marginTop:5}}>* Nhấn "Chỉnh sửa" để thay đổi nội dung.</div>}
                </div>
              </div>
              <div className="modal-footer">
                <button className="action-btn" onClick={handlePrevStep}>← Quay lại</button>
                <button className="refresh-btn primary" onClick={handleNextStep} style={{padding:'10px 40px'}}>Tiếp tục: Chốt danh sách →</button>
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <div className="modal-body-content">
                <h4 style={{marginBottom:10, color:'var(--text-primary)'}}>Bước 3: Chốt danh sách gửi mail cuối cùng</h4>
                <div className="card" style={{border:'1px solid var(--border)'}}>
                  <table>
                    <thead>
                      <tr>
                        <th style={{width:40}}><input type="checkbox" checked={finalSelectedIds.length === selectedBids.length} onChange={(e) => setFinalSelectedIds(e.target.checked ? selectedBids.map(b=>b.id) : [])} /></th>
                        <th>Gói thầu</th><th>Chủ đầu tư</th><th>BPS</th><th>Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedBids.map(b => {
                        const hospitalName = b.chu_dau_tu || '';
                        const customer = MOCK_CUSTOMERS.find(c => hospitalName.includes(c.Ten_Benh_Vien) || c.Ten_Benh_Vien.includes(hospitalName));
                        const config = customer ? customerConfigs[customer.id] : null;
                        return (
                          <tr key={b.id} className={finalSelectedIds.includes(b.id) ? '' : 'row-disabled'}>
                            <td><input type="checkbox" checked={finalSelectedIds.includes(b.id)} onChange={() => toggleFinalSelect(b.id)} /></td>
                            <td style={{fontSize:11}}>{b.ma_goi_thau}</td>
                            <td>
                              <div style={{fontWeight:600}}>{(b.chu_dau_tu || '').slice(0, 30)}</div>
                              <div style={{fontSize:9, color:'var(--accent)'}}>{config?.to || TARGET_EMAIL}</div>
                            </td>
                            <td><span className={`bps-badge ${b.flag || 'GRAY'}`}>{b.bps_score ?? 0}</span></td>
                            <td><span style={{fontSize:10, color: editedContents[b.id] ? 'var(--blue)' : '#999'}}>{editedContents[b.id] ? '📝 Đã sửa' : '📄 Gốc'}</span></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <button className="action-btn" onClick={handlePrevStep}>← Quay lại sửa</button>
                <button className="refresh-btn primary" onClick={handleFinalSend} disabled={sending || finalSelectedIds.length === 0} style={{padding:'15px 50px', fontSize:15}}>
                  {sending ? '⌛ Đang gửi...' : `🚀 XÁC NHẬN GỬI (${finalSelectedIds.length} EMAIL)`}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
