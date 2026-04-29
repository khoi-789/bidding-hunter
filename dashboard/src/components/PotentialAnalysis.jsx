import React, { useState, useMemo } from 'react';
import { formatPrice, parseVND } from '../utils';
import { IconTarget, IconCharts, IconUrgent, IconClock, IconCircle } from './Icons';

export default function PotentialAnalysis({ bids, products }) {
  const [activeTab, setActiveTab] = useState('summary');
  const [selectedBidId, setSelectedBidId] = useState(null);

  // Phân tích dữ liệu theo góc nhìn "Lão làng"
  const analysisData = useMemo(() => {
    return bids.map(bid => {
      const items = bid.items || [];
      let totalRevenue = 0;
      let matchedItems = [];
      let highMarginCount = 0;
      let totalItemsCount = items.length;

      items.forEach(item => {
        // Tìm sản phẩm tương ứng trong danh mục của mình
        const itemName = String(item['Hoạt chất'] || item['Tên thuốc'] || '').toLowerCase().trim();
        const p = products.find(prod => {
          const prodName = String(prod.Hoat_Chat || '').toLowerCase().trim();
          return itemName.includes(prodName) || prodName.includes(itemName);
        });

        if (p) {
          const bidQty = parseVND(item['Số lượng']);
          const bidCeiling = parseVND(item['Giá trần (VND)']);
          const bidUnitPrice = bidQty > 0 ? bidCeiling / bidQty : 0;
          
          // Tính margin: (Giá trần - Giá niêm yết của mình)
          const margin = bidUnitPrice - (p.Gia_Niem_Yet || 0);
          const marginPercent = bidUnitPrice > 0 ? (margin / bidUnitPrice) * 100 : 0;

          matchedItems.push({
            ...item,
            ourProduct: p,
            margin,
            marginPercent,
            bidUnitPrice
          });

          if (marginPercent > 15) highMarginCount++;
          
          // Giả định doanh thu dự kiến (80% giá trần)
          totalRevenue += (bidCeiling * 0.8);
        }
      });

      const fitScore = totalItemsCount > 0 ? (matchedItems.length / totalItemsCount) * 100 : 0;
      
      // Phân loại "Góc nhìn lão làng"
      let strategy = "Theo dõi";
      let strategyColor = "#94a3b8";
      if (fitScore > 60 && totalRevenue > 1000000000) {
        strategy = "ĐÁNH MẠNH";
        strategyColor = "#ef4444";
      } else if (fitScore > 40) {
        strategy = "TIỀM NĂNG";
        strategyColor = "#f59e0b";
      } else if (highMarginCount > 5) {
        strategy = "NGÁCH TỐT";
        strategyColor = "#10b981";
      }

      return {
        ...bid,
        matchedItems,
        totalRevenue,
        fitScore,
        highMarginCount,
        strategy,
        strategyColor
      };
    }).sort((a, b) => b.totalRevenue - a.totalRevenue);
  }, [bids, products]);

  const stats = useMemo(() => {
    const totalPotential = analysisData.reduce((sum, b) => sum + b.totalRevenue, 0);
    const aggressiveCount = analysisData.filter(b => b.strategy === 'ĐÁNH MẠNH').length;
    return { totalPotential, aggressiveCount };
  }, [analysisData]);

  const selectedBid = analysisData.find(b => b.id === selectedBidId);

  return (
    <div className="potential-analysis animate-fade-in">
      <div className="analysis-header card" style={{marginBottom: 20}}>
        <div className="card-body" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>
            <h2 style={{margin: 0, fontSize: 24, fontWeight: 800, color: 'var(--text-dark)'}}>
              Góc nhìn Chiến lược <span style={{fontSize: 14, fontWeight: 400, color: '#64748b', marginLeft: 10}}>by Bidding Hunter AI</span>
            </h2>
            <p style={{margin: '5px 0 0 0', color: '#64748b', fontSize: 13, fontStyle: 'italic'}}>
              "Trong kinh doanh, không phải gói thầu nào cũng là mồi ngon. Phải biết chọn giỏ mà bỏ trứng."
            </p>
          </div>
          <div style={{display: 'flex', gap: 20}}>
            <div className="stat-mini">
              <span className="lbl">Tổng thầu tiềm năng</span>
              <span className="val" style={{color: 'var(--accent)'}}>{formatPrice(stats.totalPotential)}</span>
            </div>
            <div className="stat-mini">
              <span className="lbl">Mục tiêu ĐÁNH MẠNH</span>
              <span className="val" style={{color: '#ef4444'}}>{stats.aggressiveCount} gói</span>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs-container">
        <div className={`tab-item ${activeTab === 'focus' ? 'active' : ''}`} onClick={() => setActiveTab('focus')}>
          Báo cáo Trọng tâm (Dành cho Sếp)
        </div>
        <div className={`tab-item ${activeTab === 'summary' ? 'active' : ''}`} onClick={() => setActiveTab('summary')}>
          Tóm lược Chiến lược
        </div>
        <div className={`tab-item ${activeTab === 'matrix' ? 'active' : ''}`} onClick={() => setActiveTab('matrix')}>
          Ma trận Lợi nhuận
        </div>
      </div>

      <div className="tab-content" style={{marginTop: 20}}>
        {activeTab === 'focus' && (
          <div className="focus-report animate-fade-in">
            <div className="card" style={{borderLeft: '5px solid #ef4444', marginBottom: 25}}>
              <div className="card-body">
                <h3 style={{marginTop:0, color:'#ef4444'}}>🚩 TOP 3 GÓI THẦU CẦN TẬP TRUNG NGUỒN LỰC</h3>
                <p style={{color:'#64748b'}}>Dựa trên phân tích về biên lợi nhuận và khả năng cung ứng, đây là 3 mục tiêu chiến lược nhất trong tuần này.</p>
                
                <div className="focus-list" style={{display:'flex', flexDirection:'column', gap: 15}}>
                  {analysisData.slice(0, 3).map((bid, idx) => (
                    <div key={bid.id} className="focus-item" style={{display:'flex', gap: 20, padding: 20, background:'#f8fafc', borderRadius: 12}}>
                      <div className="rank" style={{fontSize: 32, fontWeight: 900, color: '#cbd5e1'}}>0{idx+1}</div>
                      <div style={{flex: 1}}>
                        <div style={{display:'flex', justifyContent:'space-between', marginBottom: 5}}>
                          <h4 style={{margin:0, fontSize: 16}}>{bid.ten_goi_thau}</h4>
                          <span className="badge red" style={{height: 'fit-content'}}>ƯU TIÊN SỐ {idx+1}</span>
                        </div>
                        <p style={{margin: '0 0 10px 0', fontSize: 13, color: '#475569'}}><b>Tại:</b> {bid.chu_dau_tu}</p>
                        <div style={{display:'flex', gap: 30}}>
                          <div className="focus-metric">
                            <label style={{display:'block', fontSize:11, color:'#94a3b8'}}>DOANH THU MỤC TIÊU</label>
                            <span style={{fontWeight:800, color:'var(--accent)'}}>{formatPrice(bid.totalRevenue)}</span>
                          </div>
                          <div className="focus-metric">
                            <label style={{display:'block', fontSize:11, color:'#94a3b8'}}>TỶ LỆ KHỚP THẦU</label>
                            <span style={{fontWeight:800, color:'var(--blue)'}}>{Math.round(bid.fitScore)}%</span>
                          </div>
                          <div className="focus-metric">
                            <label style={{display:'block', fontSize:11, color:'#94a3b8'}}>MÃ LỢI NHUẬN CAO</label>
                            <span style={{fontWeight:800, color:'#10b981'}}>{bid.highMarginCount} mặt hàng</span>
                          </div>
                        </div>
                      </div>
                      <div className="focus-action" style={{alignSelf: 'center'}}>
                        <button className="btn btn-primary" onClick={() => setSelectedBidId(bid.id)} style={{padding: '10px 20px', borderRadius: 8}}>
                          Xem thuyết minh chi tiết
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h4 style={{marginTop:0}}>📝 Thuyết minh tổng quát:</h4>
                <div style={{lineHeight: 1.8, color: '#334155'}}>
                  Thưa Sếp, qua rà soát hệ thống muasamcong, chúng ta đang có tổng cộng <b>{analysisData.length}</b> cơ hội. 
                  Tuy nhiên, em đề xuất chỉ tập trung 80% nguồn lực vào 3 gói thầu trọng tâm phía trên vì biên lợi nhuận gộp dự kiến đạt trên 18%. 
                  Các gói thầu còn lại đa phần là thuốc Generic phổ thông có sự cạnh tranh giá rất gắt, chúng ta chỉ nên tham gia với mục đích "lót đường" hoặc giữ quan hệ. 
                  Phòng thầu đã sẵn sàng hồ sơ kỹ thuật cho các mã hàng chủ lực như <b>Ceftriaxone, Levofloxacin</b>... 
                  Kính trình Sếp phê duyệt chủ trương để triển khai chào giá.
                </div>
              </div>
            </div>
          </div>
        )}
          <div className="strategy-grid">
            {analysisData.map(bid => (
              <div key={bid.id} className="strategy-card card animate-fade-in" onClick={() => setSelectedBidId(bid.id)}>
                <div className="card-header" style={{padding: '15px 20px', borderBottom: '1px solid #f1f5f9'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                    <span className="strategy-badge" style={{background: bid.strategyColor + '20', color: bid.strategyColor}}>
                      {bid.strategy}
                    </span>
                    <span style={{fontSize: 11, color: '#94a3b8'}}>{bid.ma_goi_thau}</span>
                  </div>
                  <h4 style={{margin: '10px 0 0 0', fontSize: 14, lineHeight: 1.4}} className="line-clamp-2">{bid.ten_goi_thau}</h4>
                </div>
                <div className="card-body" style={{padding: '15px 20px'}}>
                  <div className="metric-row">
                    <span className="lbl">Dự kiến doanh thu:</span>
                    <span className="val">{formatPrice(bid.totalRevenue)}</span>
                  </div>
                  <div className="metric-row">
                    <span className="lbl">Độ phủ danh mục:</span>
                    <div className="progress-mini">
                      <div className="progress-bar" style={{width: `${bid.fitScore}%`, background: 'var(--blue)'}}></div>
                      <span className="progress-text">{Math.round(bid.fitScore)}%</span>
                    </div>
                  </div>
                  <div className="metric-row">
                    <span className="lbl">Biên lợi nhuận tốt:</span>
                    <span className="val" style={{color: '#10b981'}}>{bid.highMarginCount} mặt hàng</span>
                  </div>
                </div>
                <div className="card-footer" style={{padding: '10px 20px', background: '#f8fafc', fontSize: 11, color: '#64748b'}}>
                  📍 {bid.chu_dau_tu}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'matrix' && (
          <div className="card">
            <div className="card-body" style={{padding: 0}}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Gói thầu</th>
                    <th style={{textAlign:'right'}}>Dự kiến DT</th>
                    <th style={{textAlign:'center'}}>Khớp thầu</th>
                    <th style={{textAlign:'center'}}>High Margin</th>
                    <th style={{textAlign:'center'}}>BPS</th>
                    <th>Lời khuyên</th>
                  </tr>
                </thead>
                <tbody>
                  {analysisData.map(bid => (
                    <tr key={bid.id} onClick={() => setSelectedBidId(bid.id)} style={{cursor: 'pointer'}}>
                      <td style={{maxWidth: 300}}>
                        <div style={{fontWeight: 700, fontSize: 13}}>{bid.ten_goi_thau}</div>
                        <div style={{fontSize: 11, color: '#64748b'}}>{bid.chu_dau_tu}</div>
                      </td>
                      <td style={{textAlign:'right', fontWeight: 700, color: 'var(--accent)'}}>{formatPrice(bid.totalRevenue)}</td>
                      <td style={{textAlign:'center'}}><span className="badge blue">{bid.matchedItems.length} SP</span></td>
                      <td style={{textAlign:'center'}}><span className="badge green">{bid.highMarginCount} SP</span></td>
                      <td style={{textAlign:'center'}}><span className={`bps-circle score-${Math.floor(bid.bps_score)}`}>{bid.bps_score}</span></td>
                      <td>
                        <div style={{fontSize: 12, fontStyle: 'italic', color: '#475569'}}>
                          {bid.strategy === 'ĐÁNH MẠNH' ? "🔥 Gói này ngon, phải tập trung nguồn lực để hốt." : 
                           bid.strategy === 'TIỀM NĂNG' ? "🤞 Có thể tham gia nếu rảnh tay, không quá ưu tiên." : 
                           "🛑 Biên lợi nhuận mỏng, cẩn thận kẻo làm không công."}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Modal chi tiết phân tích */}
      {selectedBid && (
        <div className="modal-overlay" onClick={() => setSelectedBidId(null)}>
          <div className="modal-content large animate-slide-up" onClick={e => e.stopPropagation()} style={{maxWidth: 1000, background: '#ffffff', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}>
            <div className="modal-header">
              <div style={{display:'flex', alignItems:'center', gap: 12}}>
                <div className="bps-badge">{selectedBid.bps_score}</div>
                <div>
                  <h3 style={{margin:0}}>{selectedBid.ten_goi_thau}</h3>
                  <p style={{margin:0, fontSize:12, color:'#64748b'}}>{selectedBid.chu_dau_tu} · {selectedBid.ma_goi_thau}</p>
                </div>
              </div>
              <button className="close-btn" onClick={() => setSelectedBidId(null)}>&times;</button>
            </div>
            <div className="modal-body" style={{padding: 25}}>
              <div className="analysis-summary-box" style={{
                background: selectedBid.strategyColor + '10',
                border: `1px solid ${selectedBid.strategyColor}40`,
                padding: 20,
                borderRadius: 12,
                marginBottom: 25
              }}>
                <h4 style={{margin: '0 0 10px 0', color: selectedBid.strategyColor}}>💡 Phân tích của Lão làng Chiến lược:</h4>
                <p style={{margin: 0, fontSize: 14, lineHeight: 1.6, color: '#334155'}}>
                  "Nhìn vào gói thầu này ở <b>{selectedBid.chu_dau_tu}</b>, tôi thấy có <b>{selectedBid.matchedItems.length}</b> mặt hàng nằm trong thế mạnh của mình. 
                  Đặc biệt là <b>{selectedBid.highMarginCount}</b> mã có biên lợi nhuận trên 15%, đây là 'mỏ vàng' thực sự. 
                  Dự kiến nếu trúng được 80% các danh mục mục tiêu, doanh thu sẽ rơi vào khoảng <b>{formatPrice(selectedBid.totalRevenue)}</b>. 
                  Chiến thuật: {selectedBid.strategy === 'ĐÁNH MẠNH' ? "Dồn toàn lực chào giá sát trần ở các mã margin cao, bỏ qua các mã margin thấp." : "Thăm dò là chính, đừng quá mặn mà."}"
                </p>
              </div>

              <h4 style={{marginBottom: 15}}>Danh mục sản phẩm tiềm năng trong gói:</h4>
              <table className="inner-table" style={{background: '#fff'}}>
                <thead>
                  <tr>
                    <th>Hoạt chất (Gói thầu)</th>
                    <th>Sản phẩm của mình</th>
                    <th style={{textAlign:'right'}}>Giá trần</th>
                    <th style={{textAlign:'right'}}>Giá NY</th>
                    <th style={{textAlign:'right'}}>Margin</th>
                    <th style={{textAlign:'right'}}>Biên (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedBid.matchedItems.map((item, idx) => (
                    <tr key={idx}>
                      <td style={{fontSize: 12}}>{item['Hoạt chất']}</td>
                      <td style={{fontSize: 12}}><b>{item.ourProduct.Ten_Biet_Duoc}</b></td>
                      <td style={{fontSize: 12, textAlign:'right'}}>{formatPrice(item.bidUnitPrice)}</td>
                      <td style={{fontSize: 12, textAlign:'right'}}>{formatPrice(item.ourProduct.Gia_Niem_Yet)}</td>
                      <td style={{fontSize: 12, textAlign:'right', color: '#10b981'}}>+{formatPrice(item.margin)}</td>
                      <td style={{fontSize: 12, textAlign:'right'}}>
                        <span style={{
                          fontWeight: 700, 
                          color: item.marginPercent > 15 ? '#10b981' : '#f59e0b'
                        }}>
                          {Math.round(item.marginPercent)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .potential-analysis {
          padding-bottom: 40px;
        }
        .stat-mini {
          text-align: right;
        }
        .stat-mini .lbl {
          display: block;
          font-size: 11px;
          color: #64748b;
          text-transform: uppercase;
        }
        .stat-mini .val {
          font-size: 18px;
          font-weight: 800;
        }
        .tabs-container {
          display: flex;
          gap: 30px;
          border-bottom: 1px solid #e2e8f0;
        }
        .tab-item {
          padding: 10px 5px;
          font-size: 14px;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          position: relative;
        }
        .tab-item.active {
          color: var(--accent);
        }
        .tab-item.active:after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent);
        }
        .strategy-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        .strategy-card {
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .strategy-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        .strategy-badge {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.05em;
        }
        .metric-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .metric-row:last-child { margin-bottom: 0; }
        .metric-row .lbl { font-size: 12px; color: #64748b; }
        .metric-row .val { font-size: 13px; font-weight: 700; color: var(--text-dark); }
        .progress-mini {
          width: 80px;
          height: 8px;
          background: #f1f5f9;
          border-radius: 4px;
          position: relative;
          margin-right: 35px;
        }
        .progress-bar {
          height: 100%;
          border-radius: 4px;
        }
        .progress-text {
          position: absolute;
          left: 85px;
          top: -3px;
          font-size: 10px;
          font-weight: 700;
          color: #64748b;
          white-space: nowrap;
        }
        .bps-circle {
          display: inline-block;
          width: 28px;
          height: 28px;
          line-height: 28px;
          border-radius: 50%;
          font-size: 11px;
          font-weight: 800;
          color: #fff;
        }
        .score-9, .score-8 { background: #10b981; }
        .score-7, .score-6, .score-5 { background: #f59e0b; }
        .score-4, .score-3, .score-2, .score-1, .score-0 { background: #ef4444; }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
