import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { formatPrice } from '../utils';

const COLORS = ['#1ABB9C', '#3498DB', '#9B59B6', '#E74C3C', '#F39C12', '#34495E'];
const BPS_COLORS = { 'GREEN': '#1ABB9C', 'YELLOW': '#F39C12', 'RED': '#E74C3C', 'GRAY': '#95a5a6' };

export default function ChartsView({ bids, customers, products }) {

  // 1. Phân bố điểm BPS (Pie)
  const bpsData = [
    { name: 'Nên thầu (≥8.0)', value: bids.filter(b => b.flag === 'GREEN').length, color: BPS_COLORS.GREEN },
    { name: 'Cần xem xét (5-8)', value: bids.filter(b => b.flag === 'YELLOW').length, color: BPS_COLORS.YELLOW },
    { name: 'Rủi ro (<5)', value: bids.filter(b => b.flag === 'RED').length, color: BPS_COLORS.RED },
    { name: 'Chờ phân tích', value: bids.filter(b => b.flag === 'GRAY').length, color: BPS_COLORS.GRAY },
  ].filter(d => d.value > 0);

  // 2. Top 5 Chủ đầu tư có nhiều gói thầu nhất (Bar)
  const cduMap = bids.reduce((acc, b) => {
    const name = (b.chu_dau_tu || 'Khác').replace('Bệnh viện', 'BV');
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});
  const topCDU = Object.keys(cduMap)
    .map(k => ({ name: k.length > 20 ? k.substring(0, 20) + '...' : k, value: cduMap[k] }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 6);

  // 3. Top hoạt chất xuất hiện nhiều nhất trong toàn bộ items (Bar)
  const hoatchatMap = {};
  bids.forEach(b => {
    (b.items || []).forEach(item => {
      const hc = (item['Hoạt chất'] || '').trim();
      if (hc && hc !== 'NA') hoatchatMap[hc] = (hoatchatMap[hc] || 0) + 1;
    });
  });
  const topHC = Object.keys(hoatchatMap)
    .map(k => ({ name: k.length > 25 ? k.substring(0, 25) + '...' : k, value: hoatchatMap[k] }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 8);

  // 4. Phân bố Nhóm thuốc (Pie từ items[])
  const nhomMap = {};
  bids.forEach(b => {
    (b.items || []).forEach(item => {
      const nhom = String(item['Nhóm thuốc'] || '?').trim();
      nhomMap[nhom] = (nhomMap[nhom] || 0) + 1;
    });
  });
  const nhomData = Object.keys(nhomMap)
    .map(k => ({ name: `Nhóm ${k}`, value: nhomMap[k] }))
    .sort((a, b) => a.name.localeCompare(b.name));

  // 5. Tiến độ đóng thầu (Area)
  const timeData = bids.reduce((acc, b) => {
    if (!b.thoi_diem_dong_thau) return acc;
    // Extract date part: "HH:mm DD-MM-YYYY" → "DD-MM"
    const raw = String(b.thoi_diem_dong_thau);
    const m = raw.match(/(\d{1,2})-(\d{1,2})-(\d{4})/);
    const dateKey = m ? `${m[1].padStart(2,'0')}/${m[2].padStart(2,'0')}` : raw.slice(0, 8);
    if (!acc[dateKey]) acc[dateKey] = 0;
    acc[dateKey] += 1;
    return acc;
  }, {});
  const timeline = Object.keys(timeData).sort().map(k => ({ date: k, 'Số gói thầu': timeData[k] }));

  // 6. Tình trạng công nợ Khách hàng (mock data)
  const debtData = customers.map(c => ({
    name: (c.Ten_Ben_Vien || c.Ten_Benh_Vien || '').replace('Bệnh viện', 'BV').substring(0, 15) + '...',
    'Hạn mức': c.Han_Muc_No,
    'Dư nợ': c.Du_No_Hien_Tai
  })).slice(0, 6);

  const CustomTooltipValue = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{background:'#fff', border:'1px solid #ccc', padding:'10px', borderRadius:'4px', boxShadow:'0 2px 5px rgba(0,0,0,0.1)'}}>
          <p style={{margin:0, fontWeight:'bold', marginBottom:'5px'}}>{label}</p>
          {payload.map((p, i) => (
            <p key={i} style={{color:p.color, margin:0, fontSize:12}}>
              {p.name}: {p.name.includes('nợ') || p.name.includes('mức') ? formatPrice(p.value) : p.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>

      {/* Chart 1: Phân bố BPS */}
      <div className="card">
        <div className="card-header"><h3 className="card-title">Phân bố điểm BPS Gói thầu</h3></div>
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

      {/* Chart 2: Top Chủ đầu tư */}
      <div className="card">
        <div className="card-header"><h3 className="card-title">Top Chủ đầu tư có nhiều gói thầu</h3></div>
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

      {/* Chart 3: Top hoạt chất */}
      <div className="card">
        <div className="card-header"><h3 className="card-title">Top Hoạt chất xuất hiện nhiều nhất</h3></div>
        <div className="card-body" style={{ height: 300, padding: 20 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topHC} layout="vertical" margin={{ left: 80 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E6E9ED" />
              <XAxis type="number" allowDecimals={false} />
              <YAxis dataKey="name" type="category" width={130} tick={{fontSize:10}} />
              <RechartsTooltip />
              <Bar dataKey="value" name="Số lần xuất hiện" fill="#1ABB9C" radius={[0, 4, 4, 0]} barSize={14} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 4: Phân bố Nhóm thuốc */}
      <div className="card">
        <div className="card-header"><h3 className="card-title">Phân bố Nhóm thuốc (từ danh mục)</h3></div>
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

      {/* Chart 5: Timeline đóng thầu */}
      <div className="card">
        <div className="card-header"><h3 className="card-title">Tiến độ đóng thầu (Timeline)</h3></div>
        <div className="card-body" style={{ height: 300, padding: 20 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={timeline} margin={{ top: 20, right: 20 }}>
              <defs>
                <linearGradient id="colorBids" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9B59B6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#9B59B6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E6E9ED" />
              <XAxis dataKey="date" tick={{fontSize:10}} />
              <YAxis allowDecimals={false} />
              <RechartsTooltip />
              <Area type="monotone" dataKey="Số gói thầu" stroke="#8E44AD" fillOpacity={1} fill="url(#colorBids)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 6: Công nợ mock (Khách hàng demo) */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Công nợ vs Hạn mức (Demo)</h3>
          <div style={{fontSize:10, color:'#f39c12'}}>⚠️ Dữ liệu demo</div>
        </div>
        <div className="card-body" style={{ height: 300, padding: 20 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={debtData} margin={{ top: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E6E9ED" />
              <XAxis dataKey="name" tick={{fontSize:9}} interval={0} />
              <YAxis tickFormatter={(val) => `${(val/1e9).toFixed(1)}T`} />
              <RechartsTooltip content={<CustomTooltipValue />} />
              <Legend />
              <Bar dataKey="Hạn mức" fill="#1ABB9C" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Dư nợ" fill="#E74C3C" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
