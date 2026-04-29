import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getBids, subscribeToBids, subscribeToHistory, parseDateTime } from './firebase';
import { MOCK_CUSTOMERS, MOCK_PRODUCTS, MOCK_ORDERS } from './mockData';
import BidModal from './components/BidModal';
import BulkEmailModal from './components/BulkEmailModal';
import ImportExportModal from './components/ImportExportModal';
import * as XLSX from 'xlsx';
import ChartsView from './components/ChartsView';
import AIAssistant from './components/AIAssistant';
import PotentialAnalysis from './components/PotentialAnalysis';
import DebtEmailModal from './components/DebtEmailModal';
import BPSConfig from './components/BPSConfig';
import { formatPrice, formatDeadline, getDeadlineClass, getDaysLeft, parseVND, formatPhone } from './utils';

const APP_VERSION = '1.0.4'; // Increment this to force update mock data if needed
import {
  IconDashboard, IconCharts, IconBids, IconCustomers, IconProducts,
  IconSearch, IconRefresh, IconEmail, IconClock, IconUrgent, IconTarget, IconSettings, IconCircle, IconPackage,
  IconUpload, IconDownload, IconTable
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
  const [selectedBids, setSelectedBids] = useState([]);
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [deadlineFilter, setDeadlineFilter] = useState(0);
  const [showBulkEmail, setShowBulkEmail] = useState(false);
  const [showDebtEmailModal, setShowDebtEmailModal] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [spinning, setSpinning] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: 'revenue', direction: 'desc' });
  const [history, setHistory] = useState([]);
  const [expandedHistoryId, setExpandedHistoryId] = useState(null);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const addToastRef = useRef(null);

  const [customers, setCustomers] = useState(() => {
    try {
      const saved = localStorage.getItem('bh_customers');
      const version = localStorage.getItem('bh_customers_version');
      const parsed = saved ? JSON.parse(saved) : null;
      
      // Force refresh if version mismatch or invalid data
      if (version !== APP_VERSION || !Array.isArray(parsed)) {
        localStorage.setItem('bh_customers_version', APP_VERSION);
        return MOCK_CUSTOMERS || [];
      }
      
      return parsed.map(c => {
        if (!c) return null;
        const mock = (MOCK_CUSTOMERS || []).find(m => m && m.Ma_KH === c.Ma_KH);
        return {
          ...c,
          Ten_Ben_Vien: c.Ten_Ben_Vien || mock?.Ten_Ben_Vien || '',
          Ten_Lien_He: c.Ten_Lien_He || mock?.Ten_Lien_He || '',
          SDT: c.SDT || mock?.SDT || '',
          Thoi_Gian_No: c.Thoi_Gian_No || mock?.Thoi_Gian_No || '0 ngày'
        };
      }).filter(Boolean);
    } catch (e) { 
      console.error("Failed to load customers:", e);
      return (MOCK_CUSTOMERS || []); 
    }
  });
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('bh_products');
      const version = localStorage.getItem('bh_products_version');
      const parsed = saved ? JSON.parse(saved) : null;
      
      // If version mismatch or first time, merge with MOCK_PRODUCTS to get new prices
      if (version !== APP_VERSION || !Array.isArray(parsed)) {
        localStorage.setItem('bh_products_version', APP_VERSION);
        return MOCK_PRODUCTS || [];
      }
      return parsed;
    } catch (e) { return MOCK_PRODUCTS || []; }
  });

  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('bh_orders');
      const parsed = saved ? JSON.parse(saved) : null;
      if (Array.isArray(parsed) && parsed.length >= (MOCK_ORDERS?.length || 0)) {
        return parsed;
      }
      return MOCK_ORDERS || [];
    } catch (e) { return MOCK_ORDERS || []; }
  });

  const [showImportExport, setShowImportExport] = useState(null); // 'customers' | 'products' | null

  const [customerConfigs, setCustomerConfigs] = useState(() => {
    try {
      const saved = localStorage.getItem('bh_customer_configs');
      const parsed = saved ? JSON.parse(saved) : {};
      
      const initial = {};
      customers.forEach(c => {
        initial[c.id] = {
          to: parsed[c.id]?.to || 'leminhkhoi279@gmail.com',
          cc: parsed[c.id]?.cc || 'nguyenthuc12@gmail.com, hungnpv95@gmail.com'
        };
      });
      return initial;
    } catch (e) { return {}; }
  });

  useEffect(() => { localStorage.setItem('bh_customers', JSON.stringify(customers)); }, [customers]);
  useEffect(() => { localStorage.setItem('bh_products', JSON.stringify(products)); }, [products]);
  useEffect(() => { localStorage.setItem('bh_orders', JSON.stringify(orders)); }, [orders]);

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

  const minCeilingMap = React.useMemo(() => {
    const map = {};
    bids.forEach(bid => {
      (bid.items || []).forEach(item => {
        const hcRaw = item['Hoạt chất'] || item['Tên thuốc'];
        const qtyRaw = item['Số lượng'];
        const ceilingRaw = item['Giá trần (VND)'];
        
        if (!hcRaw || !qtyRaw || !ceilingRaw) return;
        
        const hc = String(hcRaw).toLowerCase().trim();
        const qty = parseVND(qtyRaw);
        const ceiling = parseVND(ceilingRaw);
        
        if (qty <= 0) return;
        const unitPrice = ceiling / qty;
        
        if (!map[hc] || unitPrice < map[hc]) {
          map[hc] = unitPrice;
        }
      });
    });
    return map;
  }, [bids]);

  const productMinCeilings = React.useMemo(() => {
    const GENERIC_TERMS = ['tiêm', 'uống', 'viên', 'dung', 'dịch', 'hỗn', 'nhỏ', 'mắt', 'chai', 'lọ', 'ống', 'gói', 'nước', 'cất', 'túi', 'hộp'];
    const results = {};
    
    products.forEach(p => {
      const prodHC = p.Hoat_Chat?.toLowerCase().trim();
      if (!prodHC) return;
      
      const prodWords = prodHC.split(/[\s,+-]+/).filter(w => w.length > 2 && !GENERIC_TERMS.includes(w));
      let min = null;
      
      Object.entries(minCeilingMap).forEach(([hcKey, price]) => {
        const keyWords = hcKey.split(/[\s,+-]+/).filter(w => w.length > 2 && !GENERIC_TERMS.includes(w));
        
        // Match if they share at least one significant word
        const isMatch = prodWords.some(pw => keyWords.includes(pw)) || 
                        keyWords.some(kw => prodWords.includes(kw));
        
        if (isMatch) {
          if (min === null || price < min) min = price;
        }
      });
      results[p.id] = min;
    });
    return results;
  }, [products, minCeilingMap]);

  // One-time randomization of prices based on min ceiling (40-120%)
  // Triggered when bids are loaded and migration flag is missing
  useEffect(() => {
    if (loading || bids.length === 0) return;
    
    const migrationKey = 'bh_price_randomized_v104';
    const hasMigrated = localStorage.getItem(migrationKey);
    
    // Check if we have enough data to perform migration
    const minCeilKeys = Object.keys(productMinCeilings);
    if (!hasMigrated && minCeilKeys.length > 0) {
      setProducts(prev => {
        const next = prev.map(p => {
          const minCeil = productMinCeilings[p.id];
          if (minCeil && minCeil > 0) {
            // Random factor: 40% - 110% (0.4 to 1.1)
            const factor = 0.4 + Math.random() * 0.7;
            return { ...p, Gia_Niem_Yet: Math.round(minCeil * factor) };
          }
          return p;
        });
        localStorage.setItem('bh_products', JSON.stringify(next));
        return next;
      });
      localStorage.setItem(migrationKey, 'true');
      // Delay toast slightly to ensure ref is ready
      setTimeout(() => {
        addToastRef.current?.('🎲 Đã cập nhật Giá niêm yết ngẫu nhiên (40-120% giá trần)', 'success');
      }, 1000);
    }
  }, [loading, bids, productMinCeilings]);

  // Migration: Triple Order Prices (User Request)
  useEffect(() => {
    if (loading || orders.length === 0) return;
    const migrationKey = 'bh_orders_tripled_v104_final';
    if (!localStorage.getItem(migrationKey)) {
      setOrders(prev => {
        const next = prev.map(order => {
          let newTotal = 0;
          const newItems = order.Items.map(item => {
            // Normalize if still in millions (legacy mock data)
            let basePrice = item.Don_Gia;
            if (basePrice > 1000000) basePrice = basePrice / 1000; 
            
            const newPrice = Math.round(basePrice * 3);
            const newSubtotal = Math.round(newPrice * item.SL);
            newTotal += newSubtotal;
            return { ...item, Don_Gia: newPrice, Thanh_Tien: newSubtotal };
          });
          return { ...order, Items: newItems, Tong_Tien: newTotal };
        });
        localStorage.setItem('bh_orders', JSON.stringify(next));
        return next;
      });
      localStorage.setItem(migrationKey, 'true');
      setTimeout(() => {
        addToastRef.current?.('📈 Đã nhân 3 đơn giá toàn bộ đơn hàng (Data Profitability Fix)', 'success');
      }, 2500);
    }
  }, [loading, orders.length]);

  // Migration: Double Order Prices again (User Request)
  useEffect(() => {
    if (loading || orders.length === 0) return;
    const migrationKey = 'bh_orders_x2_v105_final';
    if (!localStorage.getItem(migrationKey)) {
      setOrders(prev => {
        const next = prev.map(order => {
          let newTotal = 0;
          const newItems = order.Items.map(item => {
            const newPrice = Math.round(item.Don_Gia * 2);
            const newSubtotal = Math.round(newPrice * item.SL);
            newTotal += newSubtotal;
            return { ...item, Don_Gia: newPrice, Thanh_Tien: newSubtotal };
          });
          return { ...order, Items: newItems, Tong_Tien: newTotal };
        });
        localStorage.setItem('bh_orders', JSON.stringify(next));
        return next;
      });
      localStorage.setItem(migrationKey, 'true');
      setTimeout(() => {
        addToastRef.current?.('🚀 Tiếp tục x2 đơn giá (Tổng cộng x6 so với gốc)', 'success');
      }, 3000);
    }
  }, [loading, orders.length]);

  // Migration: x2 Price, x10 Quantity (User Request - Scale up)
  useEffect(() => {
    if (loading || orders.length === 0) return;
    const migrationKey = 'bh_orders_x2_sl10_v106_final_v2';
    if (!localStorage.getItem(migrationKey)) {
      setOrders(prev => {
        const next = prev.map(order => {
          let newTotal = 0;
          const newItems = order.Items.map(item => {
            const newPrice = Math.round(item.Don_Gia * 2);
            const newQty = Math.round(item.SL * 10);
            const newSubtotal = Math.round(newPrice * newQty);
            newTotal += newSubtotal;
            return { ...item, Don_Gia: newPrice, SL: newQty, Thanh_Tien: newSubtotal };
          });
          return { ...order, Items: newItems, Tong_Tien: newTotal };
        });
        localStorage.setItem('bh_orders', JSON.stringify(next));
        return next;
      });
      localStorage.setItem(migrationKey, 'true');
      setTimeout(() => {
        addToastRef.current?.('💎 Đã x2 Đơn giá & x10 Số lượng (Quy mô nghìn tỷ)', 'success');
      }, 3500);
    }
  }, [loading, orders.length]);

  // Migration: x5 Debt & Credit Limit (User Request)
  useEffect(() => {
    if (loading || customers.length === 0) return;
    const migrationKey = 'bh_customers_x5_v107_final';
    if (!localStorage.getItem(migrationKey)) {
      setCustomers(prev => {
        const next = prev.map(c => ({
          ...c,
          Du_No_Hien_Tai: Math.round((c.Du_No_Hien_Tai || 0) * 5),
          Han_Muc_No: Math.round((c.Han_Muc_No || 0) * 5)
        }));
        localStorage.setItem('bh_customers', JSON.stringify(next));
        return next;
      });
      localStorage.setItem(migrationKey, 'true');
      setTimeout(() => {
        addToastRef.current?.('💸 Đã x5 Dư nợ & Hạn mức tín dụng khách hàng', 'success');
      }, 4000);
    }
  }, [loading, customers.length]);

  // Migration: Remove specific products from orders (User Request - Cleanup)
  useEffect(() => {
    if (loading || orders.length === 0) return;
    const migrationKey = 'bh_orders_filter_cleanup_v108_final_v2';
    const codesToRemove = ['SP208', 'SP205', 'SP202', 'SP204', 'SP214'];
    
    if (!localStorage.getItem(migrationKey)) {
      setOrders(prev => {
        const next = prev.map(order => {
          const filteredItems = order.Items.filter(item => !codesToRemove.includes(item.Ma_SP));
          const newTotal = filteredItems.reduce((sum, item) => sum + (item.Thanh_Tien || 0), 0);
          return { ...order, Items: filteredItems, Tong_Tien: newTotal };
        });
        // Remove orders with no items left
        const finalOrders = next.filter(o => o.Items.length > 0);
        localStorage.setItem('bh_orders', JSON.stringify(finalOrders));
        return finalOrders;
      });
      localStorage.setItem(migrationKey, 'true');
      setTimeout(() => {
        addToastRef.current?.('🧹 Đã loại bỏ 5 mã hàng (SP208, 205, 202, 204, 214) khỏi Đơn hàng', 'success');
      }, 4500);
    }
  }, [loading, orders.length]);

  const addToast = useCallback((msg, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, msg, type }]);
    const duration = type === 'info' ? 6000 : 3000;
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), duration);
  }, []);


  const handleExport = (type) => {
    const dataToExport = type === 'customers' ? customers : products;
    const exportData = dataToExport.map(item => {
      if (type === 'customers') {
        const config = customerConfigs[item.id] || {};
        return {
          'Mã KH': item.Ma_KH,
          'Tên Bệnh Viện': item.Ten_Ben_Vien,
          'Người liên hệ': item.Ten_Lien_He || '',
          'Số điện thoại': item.SDT || '',
          'Phân Tuyến': item.Phan_Tuyen,
          'Dư nợ hiện tại': item.Du_No_Hien_Tai,
          'Thời gian nợ': item.Thoi_Gian_No || '0 ngày',
          'Hạn mức': item.Han_Muc_No,
          'Người nhận (To)': config.to || '',
          'Đồng gửi (Cc)': config.cc || ''
        };
      } else {
        return {
          'Mã SP': item.id,
          'Tên Biệt Dược': item.Ten_Biet_Duoc,
          'Hoạt chất': item.Hoat_Chat,
          'Dạng bào chế': item.Dang_Bao_Che,
          'Giá niêm yết': item.Gia_Niem_Yet
        };
      }
    });

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Data");
    XLSX.writeFile(wb, `BiddingHunter_${type}_${new Date().getTime()}.xlsx`);
    addToast(`Đã xuất ${exportData.length} bản ghi ${type}`, 'success');
  };

  const handleExportMasterData = () => {
    const fullData = [];
    orders.forEach(order => {
      const customer = customers.find(c => c.Ma_KH === order.Ma_KH);
      order.Items.forEach(item => {
        const product = products.find(p => p.id === item.Ma_SP);
        const margin = item.Don_Gia - (product?.Gia_Niem_Yet || 0);
        
        fullData.push({
          'Ngày Giao': order.Ngay_Giao,
          'Mã Đơn Hàng': order.id,
          'Số Hóa Đơn': order.So_Hoa_Don,
          'Mã Khách Hàng': order.Ma_KH,
          'Tên Bệnh Viện': customer?.Ten_Ben_Vien || order.Ten_KH,
          'Phân Tuyến': customer?.Phan_Tuyen?.replace('TUYEN_', '') || 'N/A',
          'Mã Sản Phẩm': item.Ma_SP,
          'Tên Sản Phẩm': item.Ten_SP,
          'Số Lượng': item.SL,
          'Đơn Vị Tính': item.DVT,
          'Đơn Giá (đ)': item.Don_Gia,
          'Thành Tiền (đ)': item.Thanh_Tien,
          'Giá Niêm Yết (đ)': product?.Gia_Niem_Yet || 0,
          'Lợi Nhuận/SP (đ)': margin,
          'Tổng Lợi Nhuận (đ)': margin * item.SL,
          'Nhóm Kỹ Thuật': product?.Nhom_Ky_Thuat || 'N/A'
        });
      });
    });

    if (fullData.length === 0) {
      addToast('⚠️ Không có dữ liệu đơn hàng để xuất', 'warning');
      return;
    }

    const ws = XLSX.utils.json_to_sheet(fullData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "MasterData");
    XLSX.writeFile(wb, `BiddingHunter_MasterData_${new Date().getTime()}.xlsx`);
    addToast(`Đã xuất ${fullData.length} dòng dữ liệu Master`, 'success');
  };

  const handleImport = (newData, type) => {
    if (type === 'customers') {
      const merged = [...customers];
      const newConfigs = { ...customerConfigs };
      newData.forEach(item => {
        const idx = merged.findIndex(c => c.Ma_KH === item.Ma_KH);
        if (idx >= 0) {
          merged[idx] = { ...merged[idx], ...item };
        } else {
          merged.push(item);
        }
        // Update configs if email provided
        if (item.to || item.cc) {
          newConfigs[item.id] = { 
            to: item.to || newConfigs[item.id]?.to || 'leminhkhoi279@gmail.com',
            cc: item.cc || newConfigs[item.id]?.cc || 'nguyenthuc12@gmail.com, hungnpv95@gmail.com'
          };
        }
      });
      setCustomers(merged);
      setCustomerConfigs(newConfigs);
    } else {
      const merged = [...products];
      newData.forEach(item => {
        const idx = merged.findIndex(p => p.id === item.id);
        if (idx >= 0) {
          merged[idx] = { ...merged[idx], ...item };
        } else {
          merged.push(item);
        }
      });
      setProducts(merged);
    }
    addToast(`Đã nhập ${newData.length} bản ghi ${type}`, 'success');
  };

  useEffect(() => { addToastRef.current = addToast; }, [addToast]);
  
  // Helper tìm sản phẩm cho bid stats
  const findProduct = useCallback((item) => {
    if (!item || !products) return null;
    const itemName = String(item['Hoạt chất'] || item['Tên thuốc'] || '').toLowerCase().trim();
    if (!itemName) return null;
    return products.find(p => {
      if (!p) return false;
      const prodName = String(p.Hoat_Chat || '').toLowerCase().trim();
      if (!prodName) return false;
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
    if (!Array.isArray(data)) return [];
    if (!sortConfig || !sortConfig.key) return data;

    return [...data].sort((a, b) => {
      if (!a || !b) return 0;
      let valA, valB;

      if (type === 'bids') {
        if (sortConfig.key === 'gia_goi_thau') {
          valA = parseVND(a.gia_goi_thau || '0');
          valB = parseVND(b.gia_goi_thau || '0');
        } else if (sortConfig.key === 'thoi_diem_dong_thau') {
          valA = parseDateTime(a.thoi_diem_dong_thau)?.getTime() || 0;
          valB = parseDateTime(b.thoi_diem_dong_thau)?.getTime() || 0;
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
      } else if (type === 'orders') {
        if (sortConfig.key === 'Tong_Tien') {
          valA = a.Tong_Tien || 0;
          valB = b.Tong_Tien || 0;
        } else if (sortConfig.key === 'Ngay_Giao') {
          valA = new Date(a.Ngay_Giao).getTime();
          valB = new Date(b.Ngay_Giao).getTime();
        } else {
          valA = a[sortConfig.key];
          valB = b[sortConfig.key];
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
    if (!Array.isArray(dataList)) return [];
    const searchStr = (searchTerm || '').toLowerCase();
    const ingSearchStr = (ingredientSearch || '').toLowerCase();

    return dataList.filter(b => {
      if (!b) return false;
      const name     = (b.ten_goi_thau || '').toLowerCase();
      const code     = (b.ma_goi_thau  || '').toLowerCase();
      const hospital = (b.chu_dau_tu   || '').toLowerCase();
      const meds     = (b.thuoc_tieu_bieu || '').toLowerCase();
      
      const matchesSearch   = name.includes(searchStr) || code.includes(searchStr) || hospital.includes(searchStr);
      
      const matchesIng      = !ingSearchStr || 
                              meds.includes(ingSearchStr) || 
                              (b.items || []).some(item => {
                                if (!item) return false;
                                const hChat = String(item['Hoạt chất'] || '').toLowerCase();
                                const tThuoc = String(item['Tên thuốc'] || '').toLowerCase();
                                return hChat.includes(ingSearchStr) || tThuoc.includes(ingSearchStr);
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
          <div className="nav-section">TỔNG QUAN</div>
          <div className={`nav-item ${activeNav === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveNav('dashboard')}>
            <IconDashboard className="nav-icon" /> Dashboard
          </div>
          <div className={`nav-item ${activeNav === 'charts' ? 'active' : ''}`} onClick={() => setActiveNav('charts')}>
            <IconCharts className="nav-icon" /> Biểu đồ
          </div>

          <div className="nav-section" style={{marginTop: 20}}>QUẢN LÝ</div>
          <div className={`nav-item ${activeNav === 'bids' ? 'active' : ''}`} onClick={() => setActiveNav('bids')}>
            <IconBids className="nav-icon" /> Gói thầu
          </div>
          <div className={`nav-item ${activeNav === 'customers' ? 'active' : ''}`} onClick={() => setActiveNav('customers')}>
            <IconCustomers className="nav-icon" /> Khách hàng
          </div>
          <div className={`nav-item ${activeNav === 'products' ? 'active' : ''}`} onClick={() => setActiveNav('products')}>
            <IconProducts className="nav-icon" /> Sản phẩm
          </div>
          <div className={`nav-item ${activeNav === 'orders' ? 'active' : ''}`} onClick={() => setActiveNav('orders')}>
            <IconPackage className="nav-icon" /> Đơn hàng
          </div>

          <div className="nav-section" style={{marginTop: 20}}>CHIẾN LƯỢC</div>
          <div className={`nav-item ${activeNav === 'potential' ? 'active' : ''}`} onClick={() => setActiveNav('potential')}>
            <IconTarget className="nav-icon" /> Phân tích tiềm năng
          </div>
          <div className={`nav-item ${activeNav === 'history' ? 'active' : ''}`} onClick={() => setActiveNav('history')}>
            <IconClock className="nav-icon" /> Lịch sử
          </div>

          <div className="nav-section" style={{marginTop: 20}}>CÀI ĐẶT</div>
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

          {activeNav === 'charts' && <ChartsView bids={allFilteredBids} customers={customers} products={products} orders={orders} productMinCeilings={productMinCeilings} />}

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
              <div className="card-header" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div>
                  <h3 className="card-title">Danh mục Khách hàng</h3>
                  <div className="section-meta" style={{fontSize:11, color:'#f39c12', fontWeight:600}}>Quản lý dữ liệu bệnh viện và cấu hình email</div>
                </div>
                <div style={{display:'flex', gap: 10}}>
                  <button 
                    className="action-btn" 
                    onClick={() => {
                      if (selectedCustomerIds.length === 0) {
                        addToast('⚠️ Vui lòng chọn ít nhất 1 khách hàng', 'warning');
                        return;
                      }
                      setShowDebtEmailModal(true);
                    }} 
                    style={{background:'#fff', border:'1px solid var(--accent)', color:'var(--accent)', display:'flex', alignItems:'center', gap:6}}
                  >
                    <IconEmail size={14} /> Email Nhắc nợ ({selectedCustomerIds.length})
                  </button>
                  <button className="action-btn" onClick={() => handleExport('customers')} style={{background:'#f8fafc', border:'1px solid #e2e8f0', color:'#475569', display:'flex', alignItems:'center', gap:6}}>
                    <IconUpload size={14} /> Export
                  </button>
                  <button className="action-btn" onClick={() => setShowImportExport('customers')} style={{background:'var(--accent)', color:'#fff', border:'none', display:'flex', alignItems:'center', gap:6}}>
                    <IconDownload size={14} /> Import
                  </button>
                </div>
              </div>
              <div className="card-body">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th style={{width: 40}}>
                        <input 
                          type="checkbox" 
                          checked={selectedCustomerIds.length === customers.length && customers.length > 0}
                          onChange={(e) => setSelectedCustomerIds(e.target.checked ? customers.map(c => c.id) : [])}
                        />
                      </th>
                      <SortHeader label="Mã KH" columnKey="Ma_KH" />
                      <SortHeader label="Tên Bệnh Viện" columnKey="Ten_Benh_Vien" />
                      <th>Người liên hệ</th>
                      <th>SĐT</th>
                      <SortHeader label="Phân Tuyến" columnKey="Phan_Tuyen" />
                      <SortHeader label="Dư nợ hiện tại" columnKey="Du_No_Hien_Tai" align="right" />
                      <th style={{textAlign: 'center'}}>Thời gian nợ</th>
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
                      <tr key={c.id} className={selectedCustomerIds.includes(c.id) ? 'row-selected' : ''}>
                        <td>
                          <input 
                            type="checkbox" 
                            checked={selectedCustomerIds.includes(c.id)}
                            onChange={() => setSelectedCustomerIds(prev => prev.includes(c.id) ? prev.filter(id => id !== c.id) : [...prev, c.id])}
                          />
                        </td>
                        <td><b>{c.Ma_KH}</b></td>
                        <td>{c.Ten_Ben_Vien}</td>
                        <td style={{fontSize: 12, fontWeight: 500}}>{c.Ten_Lien_He || '—'}</td>
                        <td style={{fontSize: 12, color: '#64748b'}}>{formatPhone(c.SDT)}</td>
                        <td><span style={{fontSize:10, background:'#e8f4fd', color:'#2980b9', padding:'2px 6px', borderRadius:4}}>{c.Phan_Tuyen?.replace('TUYEN_','')}</span></td>
                        <td className="cell-price" style={{textAlign:'right'}}>{formatPrice(c.Du_No_Hien_Tai)}</td>
                        <td style={{fontSize: 11, color: '#e67e22', fontWeight: 600, textAlign: 'center'}}>{c.Thoi_Gian_No || '0 ngày'}</td>
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
              <div className="card-header" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <h3 className="card-title">Danh mục Sản phẩm ({products.length})</h3>
                <div style={{display:'flex', gap: 10}}>
                  <button className="action-btn" onClick={() => handleExport('products')} style={{background:'#f8fafc', border:'1px solid #e2e8f0', color:'#475569', display:'flex', alignItems:'center', gap:6}}>
                    <IconUpload size={14} /> Export
                  </button>
                  <button className="action-btn" onClick={() => setShowImportExport('products')} style={{background:'var(--accent)', color:'#fff', border:'none', display:'flex', alignItems:'center', gap:6}}>
                    <IconDownload size={14} /> Import
                  </button>
                </div>
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
                      <th style={{textAlign:'right', color: 'var(--accent)'}}>Giá trần tối thiểu</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(p => {
                      const minCeiling = productMinCeilings[p.id];
                      const isTooLow = minCeiling && p.Gia_Niem_Yet < (minCeiling * 0.4);

                      return (
                        <tr key={p.id}>
                          <td><b>{p.id}</b></td>
                          <td>{p.Ten_Biet_Duoc}</td>
                          <td>{p.Hoat_Chat}</td>
                          <td>{p.Dang_Bao_Che}</td>
                          <td style={{textAlign:'right', color: isTooLow ? '#e74c3c' : 'inherit', fontWeight: isTooLow ? 700 : 400}}>
                            {formatPrice(p.Gia_Niem_Yet)}
                            {isTooLow && <span title="Giá thấp hơn 40% giá trần tối thiểu" style={{marginLeft:4, cursor:'help'}}>⚠️</span>}
                          </td>
                          <td style={{textAlign:'right', fontWeight: 600, color: '#475569'}}>
                            {minCeiling ? formatPrice(minCeiling) : '---'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeNav === 'orders' && (
            <div className="card">
              <div className="card-header" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div>
                  <h3 className="card-title">Quản lý Đơn hàng ({orders.length})</h3>
                  <div className="section-meta">Dữ liệu liên thông với Khách hàng & Sản phẩm</div>
                </div>
                <button 
                  className="action-btn" 
                  onClick={handleExportMasterData} 
                  style={{background:'linear-gradient(135deg, #27ae60, #2ecc71)', color:'#fff', border:'none', fontWeight:600, display:'flex', alignItems:'center', gap:8}}
                >
                  <IconTable size={16} /> Xuất Master Data
                </button>
              </div>
              <div className="card-body" style={{padding: 0}}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <SortHeader label="Mã Đơn" columnKey="id" />
                      <SortHeader label="Mã KH" columnKey="Ma_KH" />
                      <th>Khách hàng</th>
                      <SortHeader label="Số hóa đơn" columnKey="So_Hoa_Don" />
                      <SortHeader label="Ngày giao" columnKey="Ngay_Giao" />
                      <SortHeader label="Tổng tiền" columnKey="Tong_Tien" align="right" />
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {getSortedData(orders, 'orders').map(order => (
                      <React.Fragment key={order.id}>
                        <tr 
                          className={`history-row ${expandedOrderId === order.id ? 'active' : ''}`}
                          onClick={() => setExpandedOrderId(expandedOrderId === order.id ? null : order.id)}
                          style={{cursor:'pointer'}}
                        >
                          <td><b>{order.id}</b></td>
                          <td><span className="bps-badge GRAY" style={{fontSize:10}}>{order.Ma_KH}</span></td>
                          <td><div style={{fontWeight:500}}>{order.Ten_KH}</div></td>
                          <td><code style={{background:'#f1f5f9', padding:'2px 4px', borderRadius:4}}>{order.So_Hoa_Don}</code></td>
                          <td style={{fontSize:12}}>{new Date(order.Ngay_Giao).toLocaleDateString('vi-VN')}</td>
                          <td style={{textAlign:'right', fontWeight:700, color:'var(--accent)'}}>{formatPrice(order.Tong_Tien)}</td>
                          <td style={{textAlign:'right'}}>{expandedOrderId === order.id ? '🔼' : '🔽'}</td>
                        </tr>
                        {expandedOrderId === order.id && (
                          <tr className="history-detail-row">
                            <td colSpan="7" style={{padding: '10px 20px 20px 20px', background: '#f8fafc'}}>
                              <div className="animate-fade-in" style={{background:'#fff', borderRadius:8, border:'1px solid #e2e8f0', overflow:'hidden', boxShadow:'0 4px 6px -1px rgb(0 0 0 / 0.1)'}}>
                                <table className="inner-table">
                                  <thead>
                                    <tr style={{background:'#f1f5f9'}}>
                                      <th>Mã SP</th>
                                      <th>Tên Sản Phẩm</th>
                                      <th style={{textAlign:'center'}}>Số lượng</th>
                                      <th>ĐVT</th>
                                      <th style={{textAlign:'right'}}>Đơn giá</th>
                                      <th style={{textAlign:'right'}}>Thành tiền</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {order.Items.map((item, idx) => (
                                      <tr key={idx}>
                                        <td style={{fontSize:11}}><b>{item.Ma_SP}</b></td>
                                        <td style={{fontSize:11, color:'#1e293b'}}>{item.Ten_SP}</td>
                                        <td style={{fontSize:11, textAlign:'center', fontWeight:600}}>{item.SL}</td>
                                        <td style={{fontSize:11}}>{item.DVT}</td>
                                        <td style={{fontSize:11, textAlign:'right'}}>{formatPrice(item.Don_Gia)}</td>
                                        <td style={{fontSize:11, textAlign:'right', fontWeight:700, color:'var(--accent)'}}>{formatPrice(item.Thanh_Tien)}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                  <tfoot>
                                    <tr style={{background:'#f8fafc'}}>
                                      <td colSpan="5" style={{textAlign:'right', fontWeight:700, padding:'10px 15px', fontSize:12}}>TỔNG CỘNG ĐƠN HÀNG:</td>
                                      <td style={{textAlign:'right', fontWeight:800, color:'var(--accent)', padding:'10px 15px', fontSize:13}}>{formatPrice(order.Tong_Tien)}</td>
                                    </tr>
                                  </tfoot>
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
      {showDebtEmailModal && (
        <DebtEmailModal
          selectedCustomers={customers.filter(c => selectedCustomerIds.includes(c.id))}
          customerConfigs={customerConfigs}
          onClose={() => setShowDebtEmailModal(false)}
          addToast={addToast}
          onSuccess={() => { setShowDebtEmailModal(false); setSelectedCustomerIds([]); }}
        />
      )}
      <div className="toast-container">{toasts.map(t => <Toast key={t.id} msg={t.msg} type={t.type} />)}</div>
      <AIAssistant bids={bids} customers={customers} products={products} />

      {showImportExport && (
        <ImportExportModal 
          type={showImportExport}
          data={showImportExport === 'customers' ? customers : products}
          onImport={(data) => handleImport(data, showImportExport)}
          onClose={() => setShowImportExport(null)}
        />
      )}
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
