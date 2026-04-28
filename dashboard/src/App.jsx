import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getBids, subscribeToBids } from './firebase';
import { MOCK_CUSTOMERS, MOCK_PRODUCTS } from './mockData';
import BidModal from './components/BidModal';
import BulkEmailModal from './components/BulkEmailModal';
import ChartsView from './components/ChartsView';
import AIAssistant from './components/AIAssistant';
import { formatPrice, formatDeadline, getDeadlineClass, getDaysLeft } from './utils';
import {
  IconDashboard, IconCharts, IconBids, IconCustomers, IconProducts,
  IconSearch, IconRefresh, IconEmail, IconClock, IconUrgent, IconTarget, IconCircle
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
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [deadlineFilter, setDeadlineFilter] = useState(0);
  const [showBulkEmail, setShowBulkEmail] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [spinning, setSpinning] = useState(false);
  const addToastRef = useRef(null);

  // Mock data cho Khách hàng & Sản phẩm (test)
  const customers = MOCK_CUSTOMERS;
  const products = MOCK_PRODUCTS;

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
    return () => unsub();
  }, []);

  const addToast = useCallback((msg, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, msg, type }]);
    const duration = type === 'info' ? 6000 : 3000;
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), duration);
  }, []);

  useEffect(() => { addToastRef.current = addToast; }, [addToast]);

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

  const getFilteredBids = (dataList) => {
    return dataList.filter(b => {
      const name     = (b.ten_goi_thau || '').toLowerCase();
      const code     = (b.ma_goi_thau  || '').toLowerCase();
      const hospital = (b.chu_dau_tu   || '').toLowerCase();
      const search   = searchTerm.toLowerCase();
      const matchesSearch   = name.includes(search) || code.includes(search) || hospital.includes(search);
      const daysLeft        = getDaysLeft(b.thoi_diem_dong_thau);
      const matchesDeadline = deadlineFilter === 0 || daysLeft > deadlineFilter;
      return matchesSearch && matchesDeadline;
    });
  };

  const allFilteredBids = getFilteredBids(bids);
  const green  = allFilteredBids.filter(b => b.bps_score >= 8).length;
  const yellow = allFilteredBids.filter(b => b.bps_score < 8 && b.bps_score >= 5).length;
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
        </nav>
      </aside>

      <div className="main-content">
        <header className="top-bar">
          <div className="top-bar-left">
            <div className="search-box">
              <span className="search-icon"><IconSearch size={16} /></span>
              <input type="text" placeholder="Tìm kiếm gói thầu, chủ đầu tư..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
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
                  <span className="stat-icon"><IconCircle size={32} color="var(--green)" /></span>
                  <div className="stat-label">Ưu tiên thầu</div>
                  <div className="stat-value" style={{color:'var(--green)'}}>{green}</div>
                  <div className="stat-sub">BPS ≥ 8.0</div>
                </div>
                <div className="stat-card">
                  <span className="stat-icon"><IconCircle size={32} color="var(--yellow)" /></span>
                  <div className="stat-label">Cần xem xét</div>
                  <div className="stat-value" style={{color:'var(--yellow)'}}>{yellow}</div>
                  <div className="stat-sub">BPS 5.0 – 7.9</div>
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
                  <h3 className="card-title">Gói thầu dược phẩm mới cập nhật</h3>
                  <button className="action-btn" onClick={() => setActiveNav('bids')}>Xem tất cả →</button>
                </div>
                {renderTable(getFilteredBids(bids.slice(0, 10)), selectedIds, toggleSelect, handleSelectAll, setSelected, () => setShowBulkEmail(true), deadlineFilter, setDeadlineFilter)}
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
              {renderTable(allFilteredBids, selectedIds, toggleSelect, handleSelectAll, setSelected, () => setShowBulkEmail(true), deadlineFilter, setDeadlineFilter)}
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
                  <thead><tr><th>Mã KH</th><th>Tên Bệnh Viện</th><th>Phân Tuyến</th><th>Dư nợ hiện tại</th><th>Hạn mức</th><th>Trạng thái</th></tr></thead>
                  <tbody>{customers.map(c => {
                    const over = c.Du_No_Hien_Tai > c.Han_Muc_No;
                    return (
                      <tr key={c.id}>
                        <td><b>{c.Ma_KH}</b></td>
                        <td>{c.Ten_Benh_Vien}</td>
                        <td><span style={{fontSize:10, background:'#e8f4fd', color:'#2980b9', padding:'2px 6px', borderRadius:4}}>{c.Phan_Tuyen?.replace('TUYEN_','')}</span></td>
                        <td className="cell-price">{formatPrice(c.Du_No_Hien_Tai)}</td>
                        <td className="cell-price">{formatPrice(c.Han_Muc_No)}</td>
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
                <h3 className="card-title">Danh mục Sản phẩm</h3>
                <div className="section-meta" style={{fontSize:11, color:'#f39c12', fontWeight:600}}>⚠️ Dữ liệu demo — sẽ cập nhật thật sau</div>
              </div>
              <div className="card-body">
                <table className="data-table">
                  <thead><tr><th>Mã hàng</th><th>Tên biệt dược</th><th>Hoạt chất</th><th>Hàm lượng</th><th>Đường dùng</th><th>Nhóm</th><th>Giá kê khai</th></tr></thead>
                  <tbody>{products.map(p => (
                    <tr key={p.id}>
                      <td><b>{p.Ma_Hang}</b></td>
                      <td>{p.Ten_Biet_Duoc}</td>
                      <td>{p.Hoat_Chat}</td>
                      <td>{p.Ham_Luong}</td>
                      <td>{p.Duong_Dung}</td>
                      <td><span style={{fontWeight:700, color:'#2980b9'}}>Nhóm {p.Nhom_Ky_Thuat}</span></td>
                      <td className="cell-price">{formatPrice(p.Gia_Ke_Khai)}</td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>

      {selected && <BidModal bid={selected} products={products} onClose={() => setSelected(null)} addToast={addToast} />}
      {showBulkEmail && (
        <BulkEmailModal
          selectedBids={bids.filter(b => selectedIds.includes(b.id))}
          bids={bids}
          customers={customers}
          products={products}
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

function renderTable(data, selectedIds, toggleSelect, handleSelectAll, setSelected, onBulkEmail, deadlineFilter, setDeadlineFilter) {
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
              <th>Tên gói thầu</th><th>Chủ đầu tư</th><th>Danh mục thuốc</th><th>Đóng thầu</th><th>BPS</th>
            </tr>
          </thead>
          <tbody>
            {data.map(bid => {
              const dlClass = getDeadlineClass(bid.thoi_diem_dong_thau);
              const days    = getDaysLeft(bid.thoi_diem_dong_thau);
              const isSel   = selectedIds.includes(bid.id);
              const bps     = bid.bps_score ?? 0;
              const flag    = bid.flag || 'GRAY';

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
                  <td className={`cell-deadline ${dlClass}`}>
                    <div style={{fontWeight:600}}>{formatDeadline(bid.thoi_diem_dong_thau)}</div>
                    <span className="days-badge" style={{marginTop:4}}>{days > 0 ? `${days}d` : 'Hết hạn'}</span>
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
