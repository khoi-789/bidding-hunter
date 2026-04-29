import React, { useState, useRef } from 'react';
import * as XLSX from 'xlsx';

const ImportExportModal = ({ type, data, onImport, onClose }) => {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const schema = type === 'customers' 
    ? ['Ma_KH', 'Ten_Ben_Vien', 'Ten_Lien_He', 'SDT', 'Phan_Tuyen', 'Du_No_Hien_Tai', 'Thoi_Gian_No', 'Han_Muc_No', 'To_Emails', 'Cc_Emails']
    : ['Ma_SP', 'Ten_Biet_Duoc', 'Hoat_Chat', 'Dang_Bao_Che', 'Gia_Niem_Yet'];

  const labels = type === 'customers'
    ? ['Mã KH', 'Tên Bệnh Viện', 'Người liên hệ', 'Số điện thoại', 'Phân Tuyến', 'Dư nợ hiện tại', 'Thời gian nợ', 'Hạn mức', 'Người nhận (To)', 'Đồng gửi (Cc)']
    : ['Mã SP', 'Tên Biệt Dược', 'Hoạt chất', 'Dạng bào chế', 'Giá niêm yết'];

  const handleExport = () => {
    const exportData = data.map(item => {
      if (type === 'customers') {
        return {
          'Mã KH': item.Ma_KH,
          'Tên Bệnh Viện': item.Ten_Ben_Vien,
          'Người liên hệ': item.Ten_Lien_He || '',
          'Số điện thoại': item.SDT || '',
          'Phân Tuyến': item.Phan_Tuyen,
          'Dư nợ hiện tại': item.Du_No_Hien_Tai,
          'Thời gian nợ': item.Thoi_Gian_No || '0 ngày',
          'Hạn mức': item.Han_Muc_No,
          'Người nhận (To)': item.to || '',
          'Đồng gửi (Cc)': item.cc || ''
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
  };

  const downloadTemplate = () => {
    const templateData = [{}];
    labels.forEach(label => { templateData[0][label] = ''; });
    
    // Add some examples
    if (type === 'customers') {
      templateData[0] = {
        'Mã KH': 'KH001',
        'Tên Bệnh Viện': 'BV Bạch Mai',
        'Người liên hệ': 'Nguyễn Văn A',
        'Số điện thoại': '0901234567',
        'Phân Tuyến': 'TW',
        'Dư nợ hiện tại': 520000000,
        'Thời gian nợ': '12 tháng - 5 ngày',
        'Hạn mức': 400000000,
        'Người nhận (To)': 'admin@example.com',
        'Đồng gửi (Cc)': 'cc1@example.com, cc2@example.com'
      };
    } else {
      templateData[0] = {
        'Mã SP': 'SP001',
        'Tên Biệt Dược': 'Paracetamol 500mg',
        'Hoạt chất': 'Paracetamol',
        'Dạng bào chế': 'Viên nén',
        'Giá niêm yết': 500
      };
    }

    const ws = XLSX.utils.json_to_sheet(templateData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Template");
    XLSX.writeFile(wb, `Template_${type}.xlsx`);
  };

  const processFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const rawData = XLSX.utils.sheet_to_json(ws);

      const parseNum = (val) => {
        if (typeof val === 'number') return val;
        if (!val || val === '-') return 0;
        const clean = String(val).replace(/[^\d.-]/g, '');
        const num = parseFloat(clean);
        return isNaN(num) ? 0 : num;
      };

      const cleanName = (val) => {
        if (!val) return '';
        return String(val).trim().replace(/\s+/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
      };

      const cleanPhone = (val) => {
        if (!val) return '';
        let p = String(val).replace(/[^\d]/g, '');
        if (p.length === 9 && !p.startsWith('0')) p = '0' + p;
        return p;
      };

      const parsedData = rawData.map(row => {
        if (type === 'customers') {
          return {
            id: row['Mã KH'] || `ID_${Math.random().toString(36).substr(2, 9)}`,
            Ma_KH: row['Mã KH'],
            Ten_Ben_Vien: row['Tên Bệnh Viện'],
            Ten_Lien_He: cleanName(row['Người liên hệ']),
            SDT: cleanPhone(row['Số điện thoại']),
            Phan_Tuyen: row['Phân Tuyến'],
            Du_No_Hien_Tai: parseNum(row['Dư nợ hiện tại']),
            Thoi_Gian_No: row['Thời gian nợ'] || '0 ngày',
            Han_Muc_No: parseNum(row['Hạn mức']),
            to: row['Người nhận (To)'] || '',
            cc: row['Đồng gửi (Cc)'] || ''
          };
        } else {
          return {
            id: row['Mã SP'] || `ID_${Math.random().toString(36).substr(2, 9)}`,
            Ten_Biet_Duoc: row['Tên Biệt Dược'],
            Hoat_Chat: row['Hoạt chất'],
            Dang_Bao_Che: row['Dạng bào chế'],
            Gia_Niem_Yet: parseNum(row['Giá niêm yết'])
          };
        }
      });

      onImport(parsedData);
      onClose();
    };
    reader.readAsBinaryString(file);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  return (
    <div className="modal-overlay" style={{display:'flex', alignItems:'center', justifyContent:'center', zIndex: 10000}}>
      <div className="modal-container" style={{width: 500, padding: 30, background:'#fff', borderRadius:16, boxShadow:'0 20px 25px -5px rgba(0,0,0,0.1)'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 20}}>
          <h3 style={{margin:0, fontSize: 20, color:'var(--text-primary)'}}>
            Import Data: {type === 'customers' ? 'Khách hàng' : 'Sản phẩm'}
          </h3>
          <button onClick={onClose} style={{background:'none', border:'none', fontSize: 24, cursor:'pointer', color:'#94a3b8'}}>&times;</button>
        </div>

        <div style={{marginBottom: 20}}>
          <button 
            onClick={downloadTemplate}
            style={{
              width:'100%', padding:'12px', background:'#f1f5f9', color:'var(--accent)', border:'1px dashed var(--accent)',
              borderRadius: 8, cursor:'pointer', fontWeight: 600, display:'flex', alignItems:'center', justifyContent:'center', gap: 10
            }}
          >
            📥 Tải File Mẫu (Template)
          </button>
        </div>

        <div 
          onDragEnter={handleDrag} 
          onDragLeave={handleDrag} 
          onDragOver={handleDrag} 
          onDrop={handleDrop}
          onClick={() => fileInputRef.current.click()}
          style={{
            height: 200, border: `2px dashed ${dragActive ? 'var(--accent)' : '#e2e8f0'}`,
            borderRadius: 12, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
            background: dragActive ? '#f0f9ff' : '#f8fafc', cursor:'pointer', transition: 'all 0.2s'
          }}
        >
          <div style={{fontSize: 40, marginBottom: 10}}>📄</div>
          <p style={{margin: 0, fontWeight: 500, color: '#64748b'}}>Kéo thả file Excel/CSV vào đây</p>
          <p style={{margin: '5px 0 0', fontSize: 12, color: '#94a3b8'}}>Hoặc click để chọn file từ máy tính</p>
          <input 
            ref={fileInputRef}
            type="file" 
            accept=".xlsx, .xls, .csv" 
            onChange={handleChange}
            style={{display:'none'}}
          />
        </div>

        <div style={{marginTop: 25, display:'flex', gap: 12}}>
          <button onClick={onClose} style={{flex:1, padding: 12, borderRadius: 8, border:'1px solid #e2e8f0', background:'#fff', fontWeight: 600, cursor:'pointer'}}>Hủy</button>
        </div>
      </div>
    </div>
  );
};

export default ImportExportModal;
