import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getBids, subscribeToBids, subscribeToHistory } from './firebase';
import { MOCK_CUSTOMERS, MOCK_PRODUCTS } from './mockData';
import BidModal from './components/BidModal';
import BulkEmailModal from './components/BulkEmailModal';
import ChartsView from './components/ChartsView';
import AIAssistant from './components/AIAssistant';
import PotentialAnalysis from './components/PotentialAnalysis';
import BPSConfig from './components/BPSConfig';
import { formatPrice, formatDeadline, getDeadlineClass, getDaysLeft, parseVND } from './utils';
import {
  IconDashboard, IconCharts, IconBids, IconCustomers, IconProducts,
  IconSearch, IconRefresh, IconEmail, IconClock, IconUrgent, IconTarget, IconSettings, IconCircle
} from './components/Icons';
import './index.css';

const Toast = ({ msg, type }) => (
  <div className={`toast ${type}`}>
    <span>{type === 'success' ? '✅' : 'ℹ️'}</span>
    {msg}
  </div>
);

function App() {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [ingredientSearch, setIngredientSearch] = useState('');
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [deadlineFilter, setDeadlineFilter] = useState(0);
  const [showBulkEmail, setShowBulkEmail] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [spinning, setSpinning] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: 'revenue', direction: 'desc' });
  const [history, setHistory] = useState([]);
  const [expandedHistoryId, setExpandedHistoryId] = useState(null);
  const addToastRef = useRef(null);

  // Mock data cho Khách hàng & Sản phẩm (test)
  const customers = MOCK_CUSTOMERS;
  const products = MOCK_PRODUCTS;

  const [customerConfigs, setCustomerConfigs] = useState(() => {
    try {
      const saved = localStorage.getItem('bh_customer_configs');
      const parsed = saved ? JSON.parse(saved) : {};
      
      const initial = {};
      MOCK_CUSTOMERS.forEach(c => {
        initial[c.id] = {
          to: parsed[c.id]?.to || 'leminhkhoi279@gmail.com',
          cc: parsed[c.id]?.cc || ''
        };
      });
      return initial;
    } catch (e) { return {}; }
  });

  useEffect(() => {
    localStorage.setItem('bh_customer_configs', JSON.stringify(customerConfigs));
  }, [customerConfigs]);

  const updateCustomerConfig = (cid, field, value) => {
    setCustomerConfigs(prev => ({
      ...prev,
      [cid]: { ...prev[cid], [field]: value }
    }));
  };

  useEffect(() => {
    const unsub = subscribeToBids((allBids, { newCount, duplicateCount, isInitial }) => {
      setBids(allBids);
      setLoading(false);
      if (isInitial) return;
      if (newCount > 0 || duplicateCount > 0) {
        const parts = [];
        if (newCount > 0)       parts.push(`🆕 ${newCount} gói thầu mới`);
        if (duplicateCount > 0) parts.push(`🔁 ${duplicateCount} gói đã cập nhật`);
        addToastRef.current?.(parts.join(' · '), 'info');
      }
    });
    const unsubHistory = subscribeToHistory(setHistory);
    return () => {
      unsub();
      unsubHistory();
    };
  }, []);

  const addToast = useCallback((msg, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, msg, type }]);
    const duration = type === 'info' ? 6000 : 3000;
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), duration);
  }, []);

  useEffect(() => { addToastRef.current = addToast; }, [addToast]);
  
  // Helper tìm sản phẩm cho bid stats
  const findProduct = useCallback((item) => {
    const itemName = String(item['Hoạt chất'] || item['Tên thuốc'] || '').toLowerCase().trim();
    if (!itemName) return null;
    return products.find(p => {
      const prodName = String(p.Hoat_Chat || '').toLowerCase().trim();
      return itemName.includes(prodName) || prodName.includes(itemName);
    });
  }, [products]);

  const calculateBidStats = useCallback((bid) => {
    const items = bid.items || [];
    let matchedCount = 0;
    let revenue = 0;

    items.forEach(item => {
      const p = findProduct(item);
      if (!p) return;
      const bidQty = parseVND(item['Số lượng']);
      if (bidQty <= 0) return;
      const bidUnitPrice = parseVND(item['Giá trần (VND)']) / bidQty;
      
      if ((p.Gia_Niem_Yet || 0) < bidUnitPrice) {
        matchedCount++;
        if (p.SL_Ton > 0) {
          const effQty = Math.min(bidQty, p.SL_Ton);
          revenue += (bidUnitPrice * effQty * 0.8);
        }
      }
    });

    const winRatio = items.length > 0 ? (matchedCount / items.length) * 100 : 0;
    return { winRatio, revenue, matchedCount };
  }, [findProduct]);

  const toggleSelect = (id) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const handleSelectAll = (data) => {
    if (selectedIds.length === data.length && data.length > 0) setSelectedIds([]);
    else setSelectedIds(data.map(b => b.id));
  };

  const handleRefresh = async () => {
    setSpinning(true);
    const b = await getBids();
    setBids(b);
    setTimeout(() => {
      setSpinning(false);
      addToast('Dữ liệu đã được cập nhật!');
    }, 800);
  };

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortedData = (data, type) => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      let valA, valB;

      if (type === 'bids') {
        if (sortConfig.key === 'gia_goi_thau') {
          valA = parseVND(a.gia_goi_thau || '0');
          valB = parseVND(b.gia_goi_thau || '0');
        } else if (sortConfig.key === 'thoi_diem_dong_thau') {
          valA = new Date(a.thoi_diem_dong_thau).getTime();
          valB = new Date(b.thoi_diem_dong_thau).getTime();
        } else if (sortConfig.key === 'bps_score') {
          valA = a.bps_score ?? 0;
          valB = b.bps_score ?? 0;
        } else if (sortConfig.key === 'so_danh_muc') {
          valA = a.so_danh_muc ?? 0;
          valB = b.so_danh_muc ?? 0;
        } else if (sortConfig.key === 'revenue' || sortConfig.key === 'winRatio') {
          const statsA = calculateBidStats(a);
          const statsB = calculateBidStats(b);
          valA = statsA[sortConfig.key];
          valB = statsB[sortConfig.key];
        } else {
          valA = (a[sortConfig.key] || '').toString().toLowerCase();
          valB = (b[sortConfig.key] || '').toString().toLowerCase();
        }
      } else {
        valA = a[sortConfig.key];
        valB = b[sortConfig.key];
        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();
      }

      if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
      if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  };

  const SortHeader = ({ label, columnKey, align = 'left' }) => (
    <th 
      style={{ textAlign: align, cursor: 'pointer', userSelect: 'none' }} 
      onClick={() => requestSort(columnKey)}
    >
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: align === 'right' ? 'flex-end' : (align === 'center' ? 'center' : 'flex-start'),
        gap: 4 
      }}>
        {label}
        <span style={{ fontSize: 10, color: sortConfig.key === columnKey ? 'var(--accent)' : '#ccc' }}>
          {sortConfig.key === columnKey ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '↕'}
        </span>
      </div>
    </th>
  );

  const getFilteredBids = (dataList) => {
    return dataList.filter(b => {
      const name     = (b.ten_goi_thau || '').toLowerCase();
      const code     = (b.ma_goi_thau  || '').toLowerCase();
      const hospital = (b.chu_dau_tu   || '').toLowerCase();
      const meds     = (b.thuoc_tieu_bieu || '').toLowerCase();
      
      const search   = searchTerm.toLowerCase();
      const ingSearch = ingredientSearch.toLowerCase();

      const matchesSearch   = name.includes(search) || code.includes(search) || hospital.includes(search);
      
      const matchesIng      = !ingSearch || 
                              meds.includes(ingSearch) || 
                              (b.items || []).some(item => {
                                const hChat = String(item['Hoạt chất'] || '').toLowerCase();
                                const tThuoc = String(item['Tên thuốc'] || '').toLowerCase();
                                return hChat.includes(ingSearch) || tThuoc.includes(ingSearch);
                              });
      
      const daysLeft        = getDaysLeft(b.thoi_diem_dong_thau);
      const matchesDeadline = deadlineFilter === 0 || daysLeft > deadlineFilter;
      
      return matchesSearch && matchesIng && matchesDeadline;
    });
  };

  const allFilteredBids = getFilteredBids(bids);
  const gold   = allFilteredBids.filter(b => b.bps_score > 7).length;
  const green  = allFilteredBids.filter(b => b.bps_score > 5 && b.bps_score <= 7).length;
  const yellow = allFilteredBids.filter(b => b.bps_score >= 3 && b.bps_score <= 5).length;
  const urgent = allFilteredBids.filter(b => getDaysLeft(b.thoi_diem_dong_thau) <= 2).length;

  if (loading) return (
    <div className="loading-screen">
      <div className="loader"></div>
      <p style={{marginTop:20, color:'#666'}}>Đang kết nối Bidding Hunter v2...</p>
    </div>
  );

  return (
    <div className="app-wrapper">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo-icon"><IconTarget size={22} color="#fff" /></div>
          <div className="logo-text">Bidding Hunter<div className="logo-sub">Hoàng Đức Pharma</div></div>
        </div>
        <nav className="nav-menu">
          <div className="nav-section">GENERAL</div>
          <div className={`nav-item ${activeNav === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveNav('dashboard')}>
            <IconDashboard className="nav-icon" /> Dashboard
          </div>
          <div className={`nav-item ${activeNav === 'charts' ? 'active' : ''}`} onClick={() => setActiveNav('charts')}>
            <IconCharts className="nav-icon" /> Biểu đồ
          </div>
          <div className={`nav-item ${activeNav === 'bids' ? 'active' : ''}`} onClick={() => setActiveNav('bids')}>
            <IconBids className="nav-icon" /> Gói thầu
          </div>
          <div className={`nav-item ${activeNav === 'customers' ? 'active' : ''}`} onClick={() => setActiveNav('customers')}>
            <IconCustomers className="nav-icon" /> Khách hàng
          </div>
          <div className={`nav-item ${activeNav === 'products' ? 'active' : ''}`} onClick={() => setActiveNav('products')}>
            <IconProducts className="nav-icon" /> Sản phẩm
          </div>
          <div className={`nav-item ${activeNav === 'potential' ? 'active' : ''}`} onClick={() => setActiveNav('potential')}>
            <IconTarget className="nav-icon" /> Phân tích tiềm năng
          </div>
          <div className={`nav-item ${activeNav === 'history' ? 'active' : ''}`} onClick={() => setActiveNav('history')}>
            <IconClock className="nav-icon" /> Lịch sử
          </div>
          <div className={`nav-item ${activeNav === 'bps_config' ? 'active' : ''}`} onClick={() => setActiveNav('bps_config')}>
            <IconSettings className="nav-icon" /> Cấu hình BPS
          </div>
        </nav>
      </aside>

      <div className="main-content">
        <header className="top-bar">
          <div className="top-bar-left">
            <div className="search-group">
              <div className="search-box">
                <span className="search-icon"><IconSearch size={16} /></span>
                <input type="text" placeholder="Gói thầu, Bệnh viện..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
              <div className="search-divider"></div>
              <div className="search-box ingredient-search">
                <span className="search-icon"><IconProducts size={16} /></span>
                <input type="text" placeholder="Lọc theo Hoạt chất..." value={ingredientSearch} onChange={(e) => setIngredientSearch(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="top-bar-right">
            <button className={`refresh-btn-minimal ${spinning ? 'spinning' : ''}`} onClick={handleRefresh} title="Cập nhật dữ liệu">
              <IconRefresh size={14} className="btn-icon" />
              <span className="btn-text">Cập nhật</span>
            </button>
            <div className="divider-v"></div>
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span className="status-text">HỆ THỐNG: LIVE</span>
            </div>
          </div>
        </header>

        <main className="page-content">
          {activeNav === 'dashboard' && (
            <>
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-icon"><IconBids size={32} /></span>
                  <div className="stat-label">Tổng gói thầu</div>
                  <div className="stat-value">{allFilteredBids.length}</div>
                  <div className="stat-sub">Dữ liệu hiển thị</div>
                </div>
                <div className="stat-card">
                  <span className="stat-icon"><IconCircle size={32} color="#D4AF37" /></span>
                  <div className="stat-label">Ưu tiên thầu (VIP)</div>
                  <div className="stat-value" style={{color:'#B8860B'}}>{gold}</div>
                  <div className="stat-sub">BPS {'>'} 7.0</div>
                </div>
                <div className="stat-card">
                  <span className="stat-icon"><IconCircle size={32} color="var(--green)" /></span>
                  <div className="stat-label">Tiềm năng</div>
                  <div className="stat-value" style={{color:'var(--green)'}}>{green}</div>
                  <div className="stat-sub">BPS 5.1 – 7.0</div>
                </div>
                <div className="stat-card">
                  <span className="stat-icon"><IconCircle size={32} color="var(--yellow)" /></span>
                  <div className="stat-label">Cần xem xét</div>
                  <div className="stat-value" style={{color:'var(--yellow)'}}>{yellow}</div>
                  <div className="stat-sub">BPS 3.0 – 5.0</div>
                </div>
                <div className="stat-card">
                  <span className="stat-icon"><IconUrgent size={32} color="var(--red)" /></span>
                  <div className="stat-label">Đóng thầu gấp</div>
                  <div className="stat-value" style={{color:'var(--red)'}}>{urgent}</div>
                  <div className="stat-sub">Dưới 48 giờ</div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Top 10 Gói thầu tiềm năng nhất</h3>
                  <button className="action-btn" onClick={() => setActiveNav('bids')}>Xem tất cả →</button>
                </div>
                {(() => {
                  const activeFilteredBids = allFilteredBids.filter(b => getDaysLeft(b.thoi_diem_dong_thau) > 0);
                  const sortedBids = getSortedData(activeFilteredBids, 'bids');
                  return renderTable(
                    sortedBids.slice(0, 10), 
                    selectedIds, toggleSelect, handleSelectAll, setSelected, 
                    () => setShowBulkEmail(true), deadlineFilter, setDeadlineFilter, products,
                    sortConfig, requestSort, SortHeader, calculateBidStats
                  );
                })()}
              </div>
            </>
          )}

          {activeNav === 'charts' && <ChartsView bids={allFilteredBids} customers={customers} products={products} />}

          {activeNav === 'bids' && (
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Danh sách toàn bộ gói thầu</h3>
                <div className="section-meta">{allFilteredBids.length} bản ghi</div>
              </div>
              {renderTable(
                getSortedData(allFilteredBids, 'bids'), 
                selectedIds, toggleSelect, handleSelectAll, setSelected, 
                () => setShowBulkEmail(true), deadlineFilter, setDeadlineFilter, products,
                sortConfig, requestSort, SortHeader, calculateBidStats
              )}
            </div>
          )}

          {activeNav === 'customers' && (
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Danh mục Khách hàng</h3>
                <div className="section-meta" style={{fontSize:11, color:'#f39c12', fontWeight:600}}>⚠️ Dữ liệu demo — sẽ cập nhật thật sau</div>
              </div>
              <div className="card-body">
                <table className="data-table">
                  <thead>
                    <tr>
                      <SortHeader label="Mã KH" columnKey="Ma_KH" />
                      <SortHeader label="Tên Bệnh Viện" columnKey="Ten_Benh_Vien" />
                      <SortHeader label="Phân Tuyến" columnKey="Phan_Tuyen" />
                      <SortHeader label="Dư nợ hiện tại" columnKey="Du_No_Hien_Tai" align="right" />
                      <SortHeader label="Hạn mức" columnKey="Han_Muc_No" align="right" />
                      <th>Người nhận (To)</th>
                      <th>Đồng gửi (Cc)</th>
                      <th>Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>{getSortedData(customers, 'customers').map(c => {
                    const over = c.Du_No_Hien_Tai > c.Han_Muc_No;
                    const config = customerConfigs[c.id] || {};
                    return (
                      <tr key={c.id}>
                        <td><b>{c.Ma_KH}</b></td>
                        <td>{c.Ten_Benh_Vien}</td>
                        <td><span style={{fontSize:10, background:'#e8f4fd', color:'#2980b9', padding:'2px 6px', borderRadius:4}}>{c.Phan_Tuyen?.replace('TUYEN_','')}</span></td>
                        <td className="cell-price" style={{textAlign:'right'}}>{formatPrice(c.Du_No_Hien_Tai)}</td>
                        <td className="cell-price" style={{textAlign:'right'}}>{formatPrice(c.Han_Muc_No)}</td>
                        <td style={{width: 180}}>
                          <input 
                            className="inline-input" 
                            placeholder="To: email1, email2..." 
                            value={config.to || ''} 
                            onChange={e => updateCustomerConfig(c.id, 'to', e.target.value)} 
                          />
                        </td>
                        <td style={{width: 180}}>
                          <input 
                            className="inline-input" 
                            placeholder="Cc: email1, email2..." 
                            value={config.cc || ''} 
                            onChange={e => updateCustomerConfig(c.id, 'cc', e.target.value)} 
                          />
                        </td>
                        <td><span style={{fontSize:10, color: over ? '#e74c3c' : '#27ae60', fontWeight:700}}>{over ? '⚠️ Vượt hạn mức' : '✅ OK'}</span></td>
                      </tr>
                    );
                  })}</tbody>
                </table>
              </div>
            </div>
          )}

          {activeNav === 'products' && (
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Danh mục Sản phẩm ({products.length})</h3>
              </div>
              <div className="card-body" style={{padding: 0}}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Mã SP</th>
                      <th>Tên Biệt Dược</th>
                      <th>Hoạt chất</th>
                      <th>Dạng bào chế</th>
                      <th style={{textAlign:'right'}}>Giá niêm yết</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(p => (
                      <tr key={p.id}>
                        <td><b>{p.id}</b></td>
                        <td>{p.Ten_Biet_Duoc}</td>
                        <td>{p.Hoat_Chat}</td>
                        <td>{p.Dang_Bao_Che}</td>
                        <td style={{textAlign:'right'}}>{formatPrice(p.Gia_Niem_Yet)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeNav === 'potential' && (
            <PotentialAnalysis bids={bids} products={products} />
          )}

          {activeNav === 'history' && (
            <div className="history-container animate-fade-in">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Lịch sử chạy Crawler (Terminal)</h3>
                  <div className="section-meta">Ghi nhận các gói thầu được nạp lên Firebase</div>
                </div>
                <div className="card-body" style={{padding: 0}}>
                  <table className="data-table history-table">
                    <thead>
                      <tr>
                        <th>Thời gian</th>
                        <th>Từ khóa</th>
                        <th style={{textAlign:'center'}}>Gói mới</th>
                        <th style={{textAlign:'center'}}>Cập nhật</th>
                        <th style={{textAlign:'center'}}>Tổng cộng</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {history.length === 0 ? (
                        <tr><td colSpan="6" style={{textAlign:'center', padding:40, color:'#94a3b8'}}>Chưa có dữ liệu lịch sử.</td></tr>
                      ) : history.map(h => (
                        <React.Fragment key={h.id}>
                          <tr 
                            className={`history-row ${expandedHistoryId === h.id ? 'active' : ''}`}
                            onClick={() => setExpandedHistoryId(expandedHistoryId === h.id ? null : h.id)}
                          >
                            <td style={{fontSize: 12, fontWeight: 600}}>{h.time.toLocaleString('vi-VN')}</td>
                            <td><span className="keyword-tag">{h.keyword}</span></td>
                            <td style={{textAlign:'center'}}><span style={{color: 'var(--accent)', fontWeight: 700}}>+{h.new_count}</span></td>
                            <td style={{textAlign:'center'}}><span style={{color: 'var(--blue)', fontWeight: 700}}>{h.update_count}</span></td>
                            <td style={{textAlign:'center'}}><b>{(h.new_count || 0) + (h.update_count || 0)}</b></td>
                            <td style={{textAlign:'right'}}>{expandedHistoryId === h.id ? '🔼' : '🔽'}</td>
                          </tr>
                          {expandedHistoryId === h.id && (
                            <tr className="history-detail-row">
                              <td colSpan="6" style={{padding: '0 20px 20px 20px', background: '#f8fafc'}}>
                                <div className="history-details animate-fade-in">
                                  <h4 style={{margin: '15px 0 10px 0', fontSize: 13, color: '#64748b'}}>Chi tiết các gói thầu đã xử lý:</h4>
                                  <table className="inner-table">
                                    <thead>
                                      <tr>
                                        <th>Trạng thái & Mã số</th>
                                        <th>Tên gói thầu</th>
                                        <th>Chủ đầu tư</th>
                                        <th style={{textAlign:'right'}}>Giá dự toán</th>
                                        <th style={{textAlign:'center'}}>Danh mục</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {h.bids?.map(b => (
                                        <tr key={b.id}>
                                          <td style={{fontSize:11}}>
                                            <span style={{
                                              fontSize: 9, 
                                              padding: '1px 4px', 
                                              borderRadius: 4, 
                                              background: b.status === 'Mới' ? '#dcfce7' : '#eff6ff',
                                              color: b.status === 'Mới' ? '#166534' : '#1e40af',
                                              marginRight: 6,
                                              fontWeight: 700
                                            }}>{b.status || 'Cập nhật'}</span>
                                            <b>{b.id}</b>
                                          </td>
                                          <td style={{fontSize:11}}>{b.name}</td>
                                          <td style={{fontSize:11}}>{b.chu_dau_tu}</td>
                                          <td style={{fontSize:11, textAlign:'right'}}>{b.gia}</td>
                                          <td style={{fontSize:11, textAlign:'center'}}>{b.items_count}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeNav === 'bps_config' && (
            <BPSConfig addToast={addToast} />
          )}
        </main>
      </div>

      {selected && <BidModal bid={selected} products={products} onClose={() => setSelected(null)} addToast={addToast} ingredientSearch={ingredientSearch} customerConfigs={customerConfigs} />}
      {showBulkEmail && (
        <BulkEmailModal
          selectedBids={bids.filter(b => selectedIds.includes(b.id))}
          bids={bids}
          customers={customers}
          products={products}
          customerConfigs={customerConfigs}
          onClose={() => setShowBulkEmail(false)}
          addToast={addToast}
          onSuccess={() => { setSelectedIds([]); setShowBulkEmail(false); }}
        />
      )}
      <div className="toast-container">{toasts.map(t => <Toast key={t.id} msg={t.msg} type={t.type} />)}</div>
      <AIAssistant bids={bids} customers={customers} products={products} />
    </div>
  );
}

function renderTable(data, selectedIds, toggleSelect, handleSelectAll, setSelected, onBulkEmail, deadlineFilter, setDeadlineFilter, products = [], sortConfig, onSort, SortHeader, calculateBidStats) {
  return (
    <>
      <div className="table-controls" style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'15px 20px', borderBottom:'1px solid #eee'}}>
        <div style={{display:'flex', gap:10, alignItems:'center'}}>
          <button className="refresh-btn primary" disabled={selectedIds.length === 0} onClick={onBulkEmail}>
            <IconEmail size={14} /> Gửi Email hàng loạt ({selectedIds.length})
          </button>
          <div className="filter-wrapper" style={{position:'relative', display:'flex', alignItems:'center'}}>
            <IconClock size={14} style={{position:'absolute', left:10, color:'#888'}} />
            <select className="filter-select" style={{paddingLeft:30}} value={deadlineFilter} onChange={(e) => setDeadlineFilter(parseInt(e.target.value))}>
              <option value="0">Hạn thầu: Tất cả</option>
              <option value="1">&gt; 1 ngày</option>
              <option value="3">&gt; 3 ngày</option>
              <option value="7">&gt; 7 ngày</option>
              <option value="30">&gt; 1 tháng</option>
            </select>
          </div>
        </div>
        <span style={{fontSize:12, color:'#888'}}>
          {selectedIds.length > 0 ? `Đã chọn ${selectedIds.length} gói thầu` : 'Chọn các mục để thực hiện thao tác'}
        </span>
      </div>
      <div className="card-body" style={{padding:0}}>
        <table className="data-table">
          <thead>
            <tr>
              <th style={{width:40, textAlign:'center'}}><input type="checkbox" onChange={() => handleSelectAll(data)} checked={data.length > 0 && selectedIds.length === data.length} /></th>
              <SortHeader label="Tên gói thầu" columnKey="ten_goi_thau" />
              <SortHeader label="Chủ đầu tư" columnKey="chu_dau_tu" />
              <SortHeader label="Danh mục thuốc" columnKey="so_danh_muc" />
              <SortHeader label="Giá thầu" columnKey="gia_goi_thau" align="right" />
              <SortHeader label="Dự kiến DT" columnKey="revenue" align="right" />
              <SortHeader label="Đóng thầu" columnKey="thoi_diem_dong_thau" />
              <SortHeader label="Tỷ lệ trúng" columnKey="winRatio" align="center" />
              <SortHeader label="BPS" columnKey="bps_score" align="center" />
            </tr>
          </thead>
          <tbody>
            {data.map(bid => {
              const dlClass = getDeadlineClass(bid.thoi_diem_dong_thau);
              const days    = getDaysLeft(bid.thoi_diem_dong_thau);
              const isSel   = selectedIds.includes(bid.id);
              const bps     = bid.bps_score ?? 0;
              const flag    = bid.flag || 'GRAY';
              const items   = bid.items || [];
              
              // Lấy stats đã tính toán
              const { winRatio, revenue, matchedCount } = calculateBidStats(bid);

              return (
                <tr key={bid.id} onClick={() => setSelected(bid)} className={isSel ? 'selected-row' : ''}>
                  <td onClick={e => e.stopPropagation()} style={{textAlign:'center'}}>
                    <input type="checkbox" checked={isSel} onChange={() => toggleSelect(bid.id)} />
                  </td>
                  <td className="cell-name">
                    <div className="primary" style={{color:'var(--accent)', fontWeight:600}}>{bid.ten_goi_thau}</div>
                    <div className="secondary" style={{fontSize:10, color:'#999'}}>{bid.ma_goi_thau}</div>
                  </td>
                  <td className="cell-hospital">
                    <div className="primary">{(bid.chu_dau_tu || '').replace('Bệnh viện', 'BV')}</div>
                  </td>
                  <td>
                    <div style={{fontSize:12, fontWeight:600, color:'#2980b9'}}>{bid.so_danh_muc} danh mục</div>
                    <div style={{fontSize:10, color:'#999'}}>{(bid.thuoc_tieu_bieu || '').slice(0, 35)}{bid.thuoc_tieu_bieu?.length > 35 ? '…' : ''}</div>
                  </td>
                  <td style={{textAlign:'right', fontWeight:700, color:'#2c3e50'}}>
                    {(() => {
                      const total = items.reduce((sum, item) => sum + parseVND(item['Giá trần (VND)']), 0);
                      return total > 0 ? formatPrice(total) : (bid.gia_goi_thau !== 'NA' ? formatPrice(parseVND(bid.gia_goi_thau)) : '—');
                    })()}
                  </td>
                  <td style={{textAlign:'right', fontWeight:700, color:'#27ae60'}}>
                    {revenue > 0 ? formatPrice(revenue) : '—'}
                  </td>
                  <td className={`cell-deadline ${dlClass}`}>
                    <div style={{fontWeight:600}}>{formatDeadline(bid.thoi_diem_dong_thau)}</div>
                    <span className="days-badge" style={{marginTop:4}}>{days > 0 ? `${days}d` : 'Hết hạn'}</span>
                  </td>
                  <td style={{textAlign:'center'}}>
                    {items.length > 0 ? (
                      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <div style={{fontSize:13, fontWeight:700, color: winRatio >= 50 ? '#27ae60' : (winRatio >= 20 ? '#f39c12' : '#e74c3c')}}>
                          {winRatio.toFixed(0)}%
                        </div>
                        <div style={{fontSize:9, color:'#999'}}>{matchedCount}/{items.length} mặt hàng</div>
                      </div>
                    ) : (
                      <span style={{color:'#ccc'}}>—</span>
                    )}
                  </td>
                  <td><span className={`bps-badge ${flag}`}>{bps}</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
