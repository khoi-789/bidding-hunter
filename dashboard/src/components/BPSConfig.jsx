import React, { useState, useEffect } from 'react';
import { getBPSWeights, updateBPSWeights } from '../firebase';
import { IconTarget, IconCharts, IconUrgent, IconClock, IconCircle } from './Icons';

export default function BPSConfig({ addToast }) {
  const [weights, setWeights] = useState(getBPSWeights());
  const [password, setPassword] = useState('');
  const [isLocked, setIsLocked] = useState(true);
  const [total, setTotal] = useState(100);

  useEffect(() => {
    const sum = weights.revenue + weights.time + weights.match + weights.debt + weights.base;
    setTotal(sum);
  }, [weights]);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (password === '76422') {
      setIsLocked(false);
      addToast('Đã mở khóa cấu hình BPS');
    } else {
      addToast('Mật khẩu không chính xác!', 'error');
    }
  };

  const handleSave = () => {
    if (total !== 100) {
      addToast('Tổng tỷ trọng phải bằng 100%', 'error');
      return;
    }
    updateBPSWeights(weights);
    addToast('Đã lưu cấu hình BPS mới. Vui lòng tải lại trang để áp dụng cho toàn hệ thống.');
  };

  const updateWeight = (key, val) => {
    setWeights(prev => ({ ...prev, [key]: parseInt(val) || 0 }));
  };

  return (
    <div className="bps-config animate-fade-in">
      <div className="config-header" style={{marginBottom: 30}}>
        <h2 style={{margin: 0, fontSize: 24, fontWeight: 800, color: 'var(--text-dark)'}}>Cơ chế tính điểm BPS (Bid Potential Score)</h2>
        <p style={{color: '#64748b', marginTop: 8}}>Minh bạch hóa cách hệ thống đánh giá tiềm năng của từng gói thầu.</p>
      </div>

      <div className="config-grid" style={{display: 'grid', gridTemplateColumns: '1fr 350px', gap: 30}}>
        <div className="explanation-section">
          <div className="card" style={{padding: 25, marginBottom: 25}}>
            <h3 style={{marginTop: 0, display: 'flex', alignItems: 'center', gap: 10}}>
              <IconCharts size={20} color="var(--accent)" /> Thuyết minh thuật toán
            </h3>
            
            <div className="mechanism-item" style={{marginBottom: 20}}>
              <h4 style={{margin: '0 0 8px 0', color: 'var(--accent)'}}>1. Doanh thu dự kiến (Logarithmic Scale)</h4>
              <p style={{margin: 0, fontSize: 14, color: '#475569', lineHeight: 1.6}}>
                Hệ thống không tính điểm tuyến tính theo tiền. Chúng tôi sử dụng hàm Logarit để ưu tiên các gói thầu có quy mô "vừa đủ lớn" 
                trước khi đạt tới điểm bão hòa. Mục tiêu là tìm sự cân bằng giữa rủi ro và lợi nhuận.
              </p>
            </div>

            <div className="mechanism-item" style={{marginBottom: 20}}>
              <h4 style={{margin: '0 0 8px 0', color: 'var(--blue)'}}>2. Thời gian còn lại (Parabolic Curve)</h4>
              <p style={{margin: 0, fontSize: 14, color: '#475569', lineHeight: 1.6}}>
                Điểm số tăng mạnh theo đường Parabol. Nếu gói thầu còn trên 14 ngày, hệ thống sẽ cấp ngay 80% số điểm của mục này 
                để khuyến khích chuẩn bị sớm. Càng gần ngày đóng thầu, điểm sẽ giảm dần về 0.
              </p>
            </div>

            <div className="mechanism-item" style={{marginBottom: 20}}>
              <h4 style={{margin: '0 0 8px 0', color: '#10b981'}}>3. Tỷ lệ khớp thầu (Linear Match)</h4>
              <p style={{margin: 0, fontSize: 14, color: '#475569', lineHeight: 1.6}}>
                Dựa trên danh mục sản phẩm hiện có của công ty so với danh mục trong hồ sơ mời thầu. 
                Khớp 100% sản phẩm sẽ nhận trọn vẹn điểm số tỷ trọng này.
              </p>
            </div>

            <div className="mechanism-item" style={{marginBottom: 20}}>
              <h4 style={{margin: '0 0 8px 0', color: '#f59e0b'}}>4. Dư nợ khách hàng (Inverse Log)</h4>
              <p style={{margin: 0, fontSize: 14, color: '#475569', lineHeight: 1.6}}>
                Yếu tố an toàn tài chính. Khách hàng có dư nợ càng cao thì điểm BPS càng bị kéo thấp xuống. 
                Chúng tôi tính toán để nếu nợ vượt ngưỡng 1 tỷ VNĐ, điểm thành phần này sẽ gần như bằng 0.
              </p>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <div className="card" style={{padding: 25, position: 'sticky', top: 20}}>
            <h3 style={{marginTop: 0}}>Cấu hình tỷ trọng</h3>
            
            {isLocked ? (
              <form onSubmit={handleUnlock} style={{marginTop: 20}}>
                <p style={{fontSize: 13, color: '#64748b', marginBottom: 15}}>Vui lòng nhập mật khẩu để điều chỉnh thông số hệ thống.</p>
                <input 
                  type="password" 
                  placeholder="Mật khẩu..." 
                  className="search-box" 
                  style={{width: '100%', marginBottom: 10, padding: '10px 15px'}}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" className="refresh-btn primary" style={{width: '100%'}}>Xác thực</button>
              </form>
            ) : (
              <div className="weight-sliders" style={{marginTop: 20}}>
                <div className="slider-group" style={{marginBottom: 20}}>
                  <div style={{display:'flex', justifyContent:'space-between', marginBottom: 8}}>
                    <label style={{fontSize: 13, fontWeight: 600}}>Doanh thu (Revenue)</label>
                    <span style={{fontWeight: 700}}>{weights.revenue}%</span>
                  </div>
                  <input type="range" min="0" max="100" value={weights.revenue} onChange={e => updateWeight('revenue', e.target.value)} style={{width:'100%'}} />
                </div>

                <div className="slider-group" style={{marginBottom: 20}}>
                  <div style={{display:'flex', justifyContent:'space-between', marginBottom: 8}}>
                    <label style={{fontSize: 13, fontWeight: 600}}>Thời gian (Time)</label>
                    <span style={{fontWeight: 700}}>{weights.time}%</span>
                  </div>
                  <input type="range" min="0" max="100" value={weights.time} onChange={e => updateWeight('time', e.target.value)} style={{width:'100%'}} />
                </div>

                <div className="slider-group" style={{marginBottom: 20}}>
                  <div style={{display:'flex', justifyContent:'space-between', marginBottom: 8}}>
                    <label style={{fontSize: 13, fontWeight: 600}}>Khớp thầu (Match)</label>
                    <span style={{fontWeight: 700}}>{weights.match}%</span>
                  </div>
                  <input type="range" min="0" max="100" value={weights.match} onChange={e => updateWeight('match', e.target.value)} style={{width:'100%'}} />
                </div>

                <div className="slider-group" style={{marginBottom: 20}}>
                  <div style={{display:'flex', justifyContent:'space-between', marginBottom: 8}}>
                    <label style={{fontSize: 13, fontWeight: 600}}>Nợ (Debt)</label>
                    <span style={{fontWeight: 700}}>{weights.debt}%</span>
                  </div>
                  <input type="range" min="0" max="100" value={weights.debt} onChange={e => updateWeight('debt', e.target.value)} style={{width:'100%'}} />
                </div>

                <div className="slider-group" style={{marginBottom: 25}}>
                  <div style={{display:'flex', justifyContent:'space-between', marginBottom: 8}}>
                    <label style={{fontSize: 13, fontWeight: 600}}>Điểm nền (Base)</label>
                    <span style={{fontWeight: 700}}>{weights.base}%</span>
                  </div>
                  <input type="range" min="0" max="100" value={weights.base} onChange={e => updateWeight('base', e.target.value)} style={{width:'100%'}} />
                </div>

                <div style={{
                  padding: '15px', 
                  borderRadius: 10, 
                  background: total === 100 ? '#f0fdf4' : '#fef2f2',
                  border: `1px solid ${total === 100 ? '#bbf7d0' : '#fecaca'}`,
                  marginBottom: 20,
                  textAlign: 'center'
                }}>
                  <div style={{fontSize: 12, color: '#64748b'}}>Tổng cộng</div>
                  <div style={{fontSize: 24, fontWeight: 800, color: total === 100 ? '#16a34a' : '#dc2626'}}>{total}%</div>
                  {total !== 100 && <div style={{fontSize: 11, color: '#dc2626', marginTop: 5}}>Phải bằng 100% để lưu</div>}
                </div>

                <button 
                  className="refresh-btn primary" 
                  style={{width: '100%', opacity: total === 100 ? 1 : 0.5}}
                  disabled={total !== 100}
                  onClick={handleSave}
                >
                  Lưu cấu hình
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .bps-config {
          padding: 20px 0;
        }
        .card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }
        input[type="range"] {
          accent-color: var(--accent);
          height: 6px;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}
