import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area, LineChart, Line, ScatterChart, Scatter, ZAxis,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  ComposedChart
} from 'recharts';
import { formatPrice } from '../utils';

const COLORS = ['#1ABB9C', '#3498DB', '#9B59B6', '#E74C3C', '#F39C12', '#34495E', '#16a085', '#2980b9', '#8e44ad', '#c0392b'];
const BPS_COLORS = { 'GREEN': '#1ABB9C', 'YELLOW': '#F39C12', 'RED': '#E74C3C', 'GRAY': '#95a5a6' };

// Utility để chuẩn hóa tên bệnh viện nhằm khớp dữ liệu chính xác hơn
const normalizeName = (name) => {
  if (!name) return '';
  return name.toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/bệnh viện/g, 'bv')
    .replace(/đa khoa/g, 'đk')
    .replace(/trung ương/g, 'tw')
    .trim();
};

// Hàm parse giá thầu từ chuỗi
const parseMoney = (val) => {
  if (typeof val === 'number') return val;
  if (!val || val === 'NA') return 0;
  // Loại bỏ tất cả ký tự không phải số (bao gồm dấu chấm và phẩy của định dạng VN)
  return parseFloat(String(val).replace(/[^\d]/g, '')) || 0;
};

export default function ChartsView({ bids, customers, products, orders }) {
  const [activeTab, setActiveTab] = useState('sales'); // 'sales', 'bids', 'strategy'

  // Helper cho Tooltip tự format tiền tệ
  const CustomTooltipValue = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      // Lấy data gốc từ payload đầu tiên
      const originalData = payload[0].payload;
      
      return (
        <div style={{background:'#fff', border:'1px solid #ccc', padding:'10px', borderRadius:'4px', boxShadow:'0 2px 5px rgba(0,0,0,0.1)'}}>
          <p style={{margin:0, fontWeight:'bold', marginBottom:'5px'}}>{label}</p>
          {payload.map((p, i) => {
            let val = p.value;
            let displayName = p.name;
            
            // Nếu là Radar chart (có Score), ta hiển thị giá trị thực từ originalData
            if (p.dataKey && p.dataKey.includes('_Score')) {
              const realKey = p.name; // "Giá Niêm Yết" hoặc "Giá Trần BQ"
              val = formatPrice(originalData[realKey]);
            } else if (p.name.includes('Doanh thu') || p.name.includes('Dư nợ') || p.name.includes('Hạn mức') || p.name.includes('Ngân sách') || p.name.includes('Giá')) {
              // Xử lý Scatter chart hoặc các chart khác
              if (typeof val === 'number') {
                 // Nếu là Scatter chart (đã chia 1e6), nhân lại để format
                 if (p.dataKey === 'revenue' || p.dataKey === 'budget') {
                   val = formatPrice(val * 1e6);
                 } else {
                   val = val > 1000 ? formatPrice(val) : val;
                 }
              }
            }
            
            return (
              <p key={i} style={{color:p.color || p.fill, margin:0, fontSize:12, fontWeight:600}}>
                {displayName.replace(' (Tr)', '')}: {val}
              </p>
            );
          })}
        </div>
      );
    }
    return null;
  };

  const renderTab1 = () => {
    // 1. Line Chart: Doanh thu theo thời gian (Tháng/Năm)
    const revenueByMonth = {};
    (orders || []).forEach(o => {
      const date = new Date(o.Ngay_Giao);
      if (isNaN(date.getTime())) return;
      const month = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      revenueByMonth[month] = (revenueByMonth[month] || 0) + o.Tong_Tien;
    });
    const lineData = Object.keys(revenueByMonth).sort().map(k => ({
      name: k,
      'Doanh thu': revenueByMonth[k]
    }));

    // 2. Stacked Bar: Top Bệnh viện mang lại Doanh thu vs Dư nợ
    const revByCustomer = {};
    (orders || []).forEach(o => {
      revByCustomer[o.Ma_KH] = (revByCustomer[o.Ma_KH] || 0) + o.Tong_Tien;
    });
    const topCustRev = Object.keys(revByCustomer)
      .map(kh => {
        const c = customers.find(x => x.Ma_KH === kh);
        return {
          id: kh,
          name: c ? (c.Ten_Ben_Vien || c.Ten_Benh_Vien || '').replace('Bệnh viện', 'BV').substring(0, 20) + '...' : kh,
          'Doanh thu': revByCustomer[kh],
          'Dư nợ': c ? (c.Du_No_Hien_Tai || 0) : 0
        };
      })
      .sort((a, b) => b['Doanh thu'] - a['Doanh thu'])
      .slice(0, 10);

    // 3. Donut: Tỷ trọng doanh thu theo phân tuyến
    const revByTuyen = {};
    (orders || []).forEach(o => {
      const c = customers.find(x => x.Ma_KH === o.Ma_KH);
      const tuyen = c ? (c.Phan_Tuyen || 'Khác').replace('TUYEN_', '') : 'Khác';
      revByTuyen[tuyen] = (revByTuyen[tuyen] || 0) + o.Tong_Tien;
    });
    const tuyenData = Object.keys(revByTuyen).map(k => ({ name: k, value: revByTuyen[k] })).sort((a, b) => b.value - a.value);

    // 4. Bar Chart: Top 10 Sản phẩm bán chạy (Theo Doanh thu)
    const revByProd = {};
    (orders || []).forEach(o => {
      (o.Items || []).forEach(i => {
        revByProd[i.Ten_SP] = (revByProd[i.Ten_SP] || 0) + i.Thanh_Tien;
      });
    });
    const topProds = Object.keys(revByProd).map(k => ({
      name: k.substring(0, 25) + (k.length > 25 ? '...' : ''),
      'Doanh thu': revByProd[k]
    })).sort((a, b) => b['Doanh thu'] - a['Doanh thu']).slice(0, 10);

    // 5. Cảnh báo nợ xấu (Table)
    const badDebts = [...customers].sort((a, b) => {
      const overA = Math.max(0, a.Du_No_Hien_Tai - a.Han_Muc_No);
      const overB = Math.max(0, b.Du_No_Hien_Tai - b.Han_Muc_No);
      return overB - overA;
    }).slice(0, 5);

    // KPI Calc
    const totalRev = lineData.reduce((sum, d) => sum + d['Doanh thu'], 0);
    const totalDebt = customers.reduce((sum, c) => sum + (c.Du_No_Hien_Tai || 0), 0);
    const totalOrders = (orders || []).length;
    
    let top1CustName = '—';
    if (topCustRev.length > 0) top1CustName = topCustRev[0].name;

    return (
      <div className="tab-pane animate-fade-in">
        <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: 20 }}>
          <div className="stat-card">
            <div className="stat-label">Tổng Doanh thu (YTD)</div>
            <div className="stat-value" style={{color:'var(--accent)'}}>{formatPrice(totalRev)}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Tổng Dư nợ</div>
            <div className="stat-value" style={{color:'var(--red)'}}>{formatPrice(totalDebt)}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Đơn hàng Đã giao</div>
            <div className="stat-value" style={{color:'var(--blue)'}}>{totalOrders}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Top 1 Khách hàng</div>
            <div className="stat-value" style={{fontSize:16, marginTop:8}}>{top1CustName}</div>
          </div>
        </div>

        <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {/* Chart 1: Doanh thu theo thời gian */}
          <div className="card">
            <div className="card-header"><h3 className="card-title">Doanh thu theo thời gian</h3></div>
            <div className="card-body" style={{ height: 320, padding: 20 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData} margin={{left: 10, right: 20}}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E6E9ED" />
                  <XAxis dataKey="name" tick={{fontSize:10}} />
                  <YAxis tickFormatter={(v) => `${(v/1e9).toFixed(1)}T`} width={40} />
                  <RechartsTooltip content={<CustomTooltipValue />} />
                  <Line type="monotone" dataKey="Doanh thu" stroke="#3498DB" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2: Top Bệnh viện: Doanh thu vs Nợ */}
          <div className="card">
            <div className="card-header"><h3 className="card-title">Top 10 Khách hàng: Doanh thu vs Dư nợ</h3></div>
            <div className="card-body" style={{ height: 320, padding: 20 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topCustRev} margin={{left: 10, bottom: 20}}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E6E9ED" />
                  <XAxis dataKey="name" tick={{fontSize:9}} interval={0} angle={-30} textAnchor="end" height={60} />
                  <YAxis tickFormatter={(v) => `${(v/1e9).toFixed(1)}T`} width={40} />
                  <RechartsTooltip content={<CustomTooltipValue />} />
                  <Legend verticalAlign="top" />
                  <Bar dataKey="Doanh thu" stackId="a" fill="#1ABB9C" />
                  <Bar dataKey="Dư nợ" stackId="a" fill="#E74C3C" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 3: Phân tuyến */}
          <div className="card">
            <div className="card-header"><h3 className="card-title">Tỷ trọng Doanh thu theo Phân Tuyến</h3></div>
            <div className="card-body" style={{ height: 300, padding: 20 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={tuyenData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" label={({name, percent}) => `${name} ${(percent*100).toFixed(0)}%`}>
                    {tuyenData.map((e, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Pie>
                  <RechartsTooltip content={<CustomTooltipValue />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 4: Top sản phẩm bán chạy */}
          <div className="card">
            <div className="card-header"><h3 className="card-title">Top 10 Sản phẩm Bán chạy</h3></div>
            <div className="card-body" style={{ height: 300, padding: 20 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topProds} layout="vertical" margin={{ left: 80 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E6E9ED" />
                  <XAxis type="number" tickFormatter={(v) => `${(v/1e6).toFixed(0)}Tr`} />
                  <YAxis dataKey="name" type="category" width={120} tick={{fontSize:10}} />
                  <RechartsTooltip content={<CustomTooltipValue />} />
                  <Bar dataKey="Doanh thu" fill="#9B59B6" radius={[0, 4, 4, 0]} barSize={16} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="card" style={{marginTop: 20}}>
          <div className="card-header"><h3 className="card-title">⚠️ Cảnh báo Nợ xấu (Top 5 Bệnh viện)</h3></div>
          <div className="card-body" style={{padding: 0}}>
            <table className="data-table">
              <thead><tr><th>Mã KH</th><th>Tên Bệnh viện</th><th style={{textAlign:'right'}}>Dư nợ</th><th style={{textAlign:'right'}}>Hạn mức</th><th style={{textAlign:'center'}}>Trạng thái</th></tr></thead>
              <tbody>
                {badDebts.map(c => {
                  const isOver = c.Du_No_Hien_Tai > c.Han_Muc_No;
                  return (
                    <tr key={c.id}>
                      <td><b>{c.Ma_KH}</b></td>
                      <td>{c.Ten_Ben_Vien || c.Ten_Benh_Vien}</td>
                      <td style={{textAlign:'right', color:'var(--red)', fontWeight:700}}>{formatPrice(c.Du_No_Hien_Tai)}</td>
                      <td style={{textAlign:'right', fontWeight:600}}>{formatPrice(c.Han_Muc_No)}</td>
                      <td style={{textAlign:'center'}}>
                        {isOver ? 
                          <span style={{fontSize:11, background:'#ffebee', color:'#c0392b', padding:'4px 8px', borderRadius:4, fontWeight:600}}>Vượt hạn mức</span> : 
                          <span style={{fontSize:11, background:'#e8f4fd', color:'#2980b9', padding:'4px 8px', borderRadius:4, fontWeight:600}}>Cảnh báo</span>}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const renderTab2 = () => {
    // Pipeline / Thầu
    const bpsData = [
      { name: 'Nên thầu (≥8.0)', value: bids.filter(b => b.flag === 'GREEN').length, color: BPS_COLORS.GREEN },
      { name: 'Cần xem xét (5-8)', value: bids.filter(b => b.flag === 'YELLOW').length, color: BPS_COLORS.YELLOW },
      { name: 'Rủi ro (<5)', value: bids.filter(b => b.flag === 'RED').length, color: BPS_COLORS.RED },
    ].filter(d => d.value > 0);

    const cduMap = bids.reduce((acc, b) => {
      const name = (b.chu_dau_tu || 'Khác').replace('Bệnh viện', 'BV');
      acc[name] = (acc[name] || 0) + 1;
      return acc;
    }, {});
    const topCDU = Object.keys(cduMap).map(k => ({ name: k.length > 20 ? k.substring(0, 20) + '...' : k, value: cduMap[k] }))
      .sort((a, b) => b.value - a.value).slice(0, 6);

    const timeData = bids.reduce((acc, b) => {
      if (!b.thoi_diem_dong_thau) return acc;
      const raw = String(b.thoi_diem_dong_thau);
      const m = raw.match(/(\d{1,2})-(\d{1,2})-(\d{4})/);
      const dateKey = m ? `${m[1].padStart(2,'0')}/${m[2].padStart(2,'0')}` : raw.slice(0, 8);
      acc[dateKey] = (acc[dateKey] || 0) + 1;
      return acc;
    }, {});
    const timeline = Object.keys(timeData).sort().map(k => ({ date: k, 'Số gói thầu': timeData[k] }));

    const hoatchatMap = {};
    bids.forEach(b => {
      (b.items || []).forEach(item => {
        const hc = (item['Hoạt chất'] || '').trim();
        if (hc && hc !== 'NA') hoatchatMap[hc] = (hoatchatMap[hc] || 0) + 1;
      });
    });
    const topHC = Object.keys(hoatchatMap).map(k => ({ name: k.length > 25 ? k.substring(0, 25) + '...' : k, value: hoatchatMap[k] }))
      .sort((a, b) => b.value - a.value).slice(0, 8);

    const nhomMap = {};
    bids.forEach(b => {
      (b.items || []).forEach(item => {
        const nhom = String(item['Nhóm thuốc'] || '?').trim();
        nhomMap[nhom] = (nhomMap[nhom] || 0) + 1;
      });
    });
    const nhomData = Object.keys(nhomMap).map(k => ({ name: `Nhóm ${k}`, value: nhomMap[k] })).sort((a, b) => a.name.localeCompare(b.name));

    const hotLeads = [...bids].sort((a, b) => (b.bps_score || 0) - (a.bps_score || 0)).slice(0, 5);

    return (
      <div className="tab-pane animate-fade-in">
        <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div className="card">
            <div className="card-header"><h3 className="card-title">Phân bố độ "Ngon" của Gói thầu (BPS)</h3></div>
            <div className="card-body" style={{ height: 300, padding: 20 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={bpsData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value" label>
                    {bpsData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                  <RechartsTooltip />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card">
            <div className="card-header"><h3 className="card-title">Top Chủ đầu tư đang gọi thầu</h3></div>
            <div className="card-body" style={{ height: 300, padding: 20 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topCDU} layout="vertical" margin={{ left: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E6E9ED" />
                  <XAxis type="number" allowDecimals={false} />
                  <YAxis dataKey="name" type="category" width={110} tick={{fontSize:10}} />
                  <RechartsTooltip />
                  <Bar dataKey="value" name="Số gói thầu" fill="#3498DB" radius={[0, 4, 4, 0]} barSize={16} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card">
            <div className="card-header"><h3 className="card-title">Mùa vụ mở/đóng thầu (Timeline)</h3></div>
            <div className="card-body" style={{ height: 300, padding: 20 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={timeline} margin={{ top: 20, right: 20 }}>
                  <defs>
                    <linearGradient id="colorBids" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8E44AD" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8E44AD" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="date" tick={{fontSize:10}} />
                  <YAxis allowDecimals={false} />
                  <RechartsTooltip />
                  <Area type="monotone" dataKey="Số gói thầu" stroke="#8E44AD" fillOpacity={1} fill="url(#colorBids)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card">
            <div className="card-header"><h3 className="card-title">Xu hướng Nhu cầu Hoạt chất</h3></div>
            <div className="card-body" style={{ height: 300, padding: 20 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topHC} layout="vertical" margin={{ left: 80 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" allowDecimals={false} />
                  <YAxis dataKey="name" type="category" width={130} tick={{fontSize:10}} />
                  <RechartsTooltip />
                  <Bar dataKey="value" name="Số lần xuất hiện" fill="#1ABB9C" radius={[0, 4, 4, 0]} barSize={14} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card" style={{gridColumn: '1 / -1'}}>
            <div className="card-header"><h3 className="card-title">Cơ cấu Nhóm thuốc</h3></div>
            <div className="card-body" style={{ height: 300, padding: 20 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={nhomData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
                    {nhomData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                  </Pie>
                  <RechartsTooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="card" style={{marginTop: 20}}>
          <div className="card-header"><h3 className="card-title">🔥 Cơ hội Vàng (Top 5 Hot Leads)</h3></div>
          <div className="card-body" style={{padding: 0}}>
            <table className="data-table">
              <thead><tr><th>Tên Gói thầu</th><th>Chủ đầu tư</th><th style={{textAlign:'center'}}>Số danh mục</th><th style={{textAlign:'center'}}>Điểm BPS</th></tr></thead>
              <tbody>
                {hotLeads.map(b => (
                  <tr key={b.id}>
                    <td><div style={{color:'var(--accent)', fontWeight:600}}>{b.ten_goi_thau}</div></td>
                    <td>{b.chu_dau_tu}</td>
                    <td style={{textAlign:'center', fontWeight:600}}>{b.so_danh_muc}</td>
                    <td style={{textAlign:'center'}}><span className={`bps-badge ${b.flag || 'GRAY'}`}>{b.bps_score}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const renderTab3 = () => {
    // Chiến lược
    const revByCustomer = {};
    (orders || []).forEach(o => {
      // Sử dụng Ma_KH làm key để đảm bảo tính duy nhất và chính xác khi khớp với MOCK_CUSTOMERS
      revByCustomer[o.Ma_KH] = (revByCustomer[o.Ma_KH] || 0) + o.Tong_Tien;
    });
    
    const budgetByCustomer = {};
    bids.forEach(b => {
      const cvName = normalizeName(b.chu_dau_tu);
      const val = parseMoney(b.gia_goi_thau);
      budgetByCustomer[cvName] = (budgetByCustomer[cvName] || 0) + val;
    });

    const scatterData = customers.map(c => {
      const normC = normalizeName(c.Ten_Ben_Vien || c.Ten_Benh_Vien);
      const rev = revByCustomer[c.Ma_KH] || 0;
      const budget = budgetByCustomer[normC] || 0;
      return {
        name: (c.Ten_Ben_Vien || c.Ten_Benh_Vien || '').replace('Bệnh viện', 'BV'),
        revenue: Math.round(rev / 1e6),
        budget: Math.round(budget / 1e6),
        z: 1
      };
    }).filter(d => d.budget > 0 || d.revenue > 0);

    const nhuCau = {};
    bids.forEach(b => {
      (b.items || []).forEach(i => {
        const hc = (i['Hoạt chất'] || '').trim().toLowerCase();
        const sl = parseFloat(String(i['Số lượng']).replace(/[^\d.]/g, '')) || 0;
        nhuCau[hc] = (nhuCau[hc] || 0) + sl;
      });
    });

    const inventoryVsDemand = products.map(p => {
      const hc = (p.Hoat_Chat || '').toLowerCase();
      return {
        name: p.Ten_Biet_Duoc,
        'Tồn kho': p.SL_Ton || 0,
        'Nhu cầu thầu': nhuCau[hc] || 0
      };
    }).sort((a,b) => b['Tồn kho'] - a['Tồn kho']).slice(0, 8);

    const priceRadar = products.slice(0, 5).map(p => {
      const hc = (p.Hoat_Chat || '').toLowerCase();
      let totalGiaTran = 0;
      let count = 0;
      bids.forEach(b => {
        (b.items || []).forEach(i => {
          if ((i['Hoạt chất'] || '').toLowerCase() === hc) {
            const qty = parseMoney(i['Số lượng']) || 1;
            const thTien = parseMoney(i['Giá trần (VND)']);
            totalGiaTran += (thTien / qty);
            count++;
          }
        });
      });
      
      const avgGiaTran = count > 0 ? totalGiaTran / count : p.Gia_Niem_Yet * 1.15;
      
      // Chuẩn hóa về thang 100 để Radar không bị lệch scale giữa các thuốc khác giá
      const maxVal = Math.max(p.Gia_Niem_Yet, avgGiaTran);
      return {
        name: p.Ten_Biet_Duoc,
        'Gia_Niem_Yet_Score': (p.Gia_Niem_Yet / maxVal) * 100,
        'Gia_Tran_Score': (avgGiaTran / maxVal) * 100,
        // Giữ giá trị thực để hiển thị tooltip
        'Giá Niêm Yết': p.Gia_Niem_Yet,
        'Giá Trần BQ': Math.round(avgGiaTran)
      };
    });

    const bvCanThuocMinh = new Set();
    bids.forEach(b => {
      let hasMyProd = false;
      (b.items || []).forEach(i => {
        const hc = (i['Hoạt chất'] || '').toLowerCase();
        if (products.some(p => (p.Hoat_Chat || '').toLowerCase() === hc)) {
          hasMyProd = true;
        }
      });
      if (hasMyProd) bvCanThuocMinh.add(normalizeName(b.chu_dau_tu));
    });
    
    const khNgungDong = customers.filter(c => {
      const normC = normalizeName(c.Ten_Ben_Vien || c.Ten_Benh_Vien);
      const rev = revByCustomer[c.Ma_KH] || 0;
      return bvCanThuocMinh.has(normC) && rev === 0;
    });

    return (
      <div className="tab-pane animate-fade-in">
        <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Ma trận Thâm nhập Bệnh viện</h3>
              <div style={{fontSize:11, color:'#888', fontWeight:500}}>Ngân sách thầu vs Doanh thu đang bán</div>
            </div>
            <div className="card-body" style={{ height: 350, padding: 20 }}>
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E6E9ED" />
                  <XAxis dataKey="budget" type="number" name="Ngân sách" tickFormatter={v => `${v}Tr`} />
                  <YAxis dataKey="revenue" type="number" name="Doanh thu" tickFormatter={v => `${v}Tr`} />
                  <ZAxis dataKey="z" range={[100, 100]} />
                  <RechartsTooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltipValue />} />
                  <Scatter name="Bệnh viện" data={scatterData} fill="#3498DB" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Tồn kho nội tại vs Nhu cầu thầu</h3>
              <div style={{fontSize:11, color:'#888', fontWeight:500}}>So sánh lượng thuốc kho và tổng gói thầu</div>
            </div>
            <div className="card-body" style={{ height: 350, padding: 20 }}>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={inventoryVsDemand} margin={{top: 20, left: 10, right: 10, bottom: 20}}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E6E9ED" />
                  <XAxis dataKey="name" tick={{fontSize:9}} interval={0} angle={-30} textAnchor="end" />
                  <YAxis yAxisId="left" tickFormatter={v => v.toLocaleString()} width={40} />
                  <YAxis yAxisId="right" orientation="right" tickFormatter={v => v.toLocaleString()} width={40} />
                  <RechartsTooltip />
                  <Legend verticalAlign="top" />
                  <Bar yAxisId="left" dataKey="Tồn kho" fill="#1ABB9C" barSize={20} radius={[4, 4, 0, 0]} />
                  <Line yAxisId="right" type="monotone" dataKey="Nhu cầu thầu" stroke="#E74C3C" strokeWidth={3} dot={{r:4}} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card" style={{gridColumn: '1 / -1'}}>
            <div className="card-header"><h3 className="card-title">Sức cạnh tranh Giá (Top 5 SP chiến lược)</h3></div>
            <div className="card-body" style={{ height: 350, padding: 20 }}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={priceRadar}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" tick={{fontSize: 11, fontWeight: 600}} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  
                  {/* Vẽ Giá Trần trước như một vùng giới hạn */}
                  <Radar name="Giá Trần BQ" dataKey="Gia_Tran_Score" stroke="#3498DB" fill="#3498DB" fillOpacity={0.3} />
                  
                  {/* Vẽ Giá Niêm Yết sau, đậm hơn để nổi bật sự so sánh */}
                  <Radar name="Giá Niêm Yết" dataKey="Gia_Niem_Yet_Score" stroke="#8E44AD" fill="#8E44AD" fillOpacity={0.6} />
                  
                  <Legend />
                  <RechartsTooltip content={<CustomTooltipValue />} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="card" style={{marginTop: 20}}>
          <div className="card-header">
            <h3 className="card-title">⚠️ Khách hàng "Ngủ đông"</h3>
            <div className="section-meta" style={{color:'#e67e22', fontWeight:600}}>Có mở thầu thuốc ta đang bán, nhưng chưa có đơn hàng</div>
          </div>
          <div className="card-body" style={{padding: 0}}>
            <table className="data-table">
              <thead><tr><th>Mã KH</th><th>Tên Bệnh viện</th><th>Phân tuyến</th><th>SĐT liên hệ</th></tr></thead>
              <tbody>
                {khNgungDong.length === 0 ? <tr><td colSpan="4" style={{textAlign:'center', padding: 20}}>Không có khách hàng ngủ đông.</td></tr> : null}
                {khNgungDong.slice(0, 10).map(c => (
                  <tr key={c.id}>
                    <td><b>{c.Ma_KH}</b></td>
                    <td style={{fontWeight:600}}>{c.Ten_Ben_Vien || c.Ten_Benh_Vien}</td>
                    <td><span style={{fontSize:10, background:'#e8f4fd', color:'#2980b9', padding:'2px 6px', borderRadius:4}}>{c.Phan_Tuyen?.replace('TUYEN_','')}</span></td>
                    <td>{c.SDT || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="charts-wrapper" style={{display:'flex', flexDirection:'column', gap: 20}}>
      {/* Tabs Menu */}
      <div className="charts-tabs" style={{display:'flex', gap: 15, borderBottom: '1px solid #e2e8f0', paddingBottom: 15, paddingTop: 10}}>
        <button 
          onClick={() => setActiveTab('sales')} 
          style={{padding:'10px 20px', borderRadius:8, border:'none', background: activeTab === 'sales' ? 'var(--accent)' : '#f8fafc', color: activeTab === 'sales' ? '#fff' : '#64748b', fontWeight:600, cursor:'pointer', transition:'all 0.3s', display:'flex', alignItems:'center', gap:8}}>
          <span style={{fontSize: 16}}>🟢</span> Doanh số & Công nợ
        </button>
        <button 
          onClick={() => setActiveTab('bids')} 
          style={{padding:'10px 20px', borderRadius:8, border:'none', background: activeTab === 'bids' ? 'var(--accent)' : '#f8fafc', color: activeTab === 'bids' ? '#fff' : '#64748b', fontWeight:600, cursor:'pointer', transition:'all 0.3s', display:'flex', alignItems:'center', gap:8}}>
          <span style={{fontSize: 16}}>🔵</span> Gói thầu & Cơ hội
        </button>
        <button 
          onClick={() => setActiveTab('strategy')} 
          style={{padding:'10px 20px', borderRadius:8, border:'none', background: activeTab === 'strategy' ? 'var(--accent)' : '#f8fafc', color: activeTab === 'strategy' ? '#fff' : '#64748b', fontWeight:600, cursor:'pointer', transition:'all 0.3s', display:'flex', alignItems:'center', gap:8}}>
          <span style={{fontSize: 16}}>🟣</span> Chiến lược Khách hàng & SP
        </button>
      </div>

      {activeTab === 'sales' && renderTab1()}
      {activeTab === 'bids' && renderTab2()}
      {activeTab === 'strategy' && renderTab3()}

    </div>
  );
}
