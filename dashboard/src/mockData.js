// ─── Mock data cho Menu Khách hàng & Sản phẩm ───────────────────────────────
// Dữ liệu ảo phục vụ test app. Sau này sẽ được thay bằng data thật từ Firebase
// hoặc import từ file Excel của bộ phận kinh doanh.

export const MOCK_CUSTOMERS = [
  { id: 'KH001', Ma_KH: 'KH001', Ten_Benh_Vien: 'BV Bạch Mai', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 520000000, Han_Muc_No: 400000000 },
  { id: 'KH002', Ma_KH: 'KH002', Ten_Benh_Vien: 'BV Việt Đức', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 280000000, Han_Muc_No: 500000000 },
  { id: 'KH003', Ma_KH: 'KH003', Ten_Benh_Vien: 'BV Chợ Rẫy', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 610000000, Han_Muc_No: 600000000 },
  { id: 'KH004', Ma_KH: 'KH004', Ten_Benh_Vien: 'BV Nhân dân Gia Định', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 150000000, Han_Muc_No: 200000000 },
  { id: 'KH005', Ma_KH: 'KH005', Ten_Benh_Vien: 'BV Đại học Y Hà Nội', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 90000000, Han_Muc_No: 300000000 },
  { id: 'KH006', Ma_KH: 'KH006', Ten_Benh_Vien: 'BV Đa khoa Thái Nguyên', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 340000000, Han_Muc_No: 250000000 },
  { id: 'KH007', Ma_KH: 'KH007', Ten_Benh_Vien: 'BV Đa khoa Lương Tài', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 45000000, Han_Muc_No: 80000000 },
  { id: 'KH008', Ma_KH: 'KH008', Ten_Benh_Vien: 'BV Nhi Thái Bình', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 210000000, Han_Muc_No: 200000000 },
  { id: 'KH009', Ma_KH: 'KH009', Ten_Benh_Vien: 'BV Trung ương Huế', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 480000000, Han_Muc_No: 500000000 },
  { id: 'KH010', Ma_KH: 'KH010', Ten_Benh_Vien: 'BV tỉnh Lâm Đồng', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 175000000, Han_Muc_No: 150000000 },
  { id: 'KH011', Ma_KH: 'KH011', Ten_Benh_Vien: 'Trung đoàn 2', Phan_Tuyen: 'QD', Du_No_Hien_Tai: 30000000, Han_Muc_No: 60000000 },
  { id: 'KH012', Ma_KH: 'KH012', Ten_Benh_Vien: 'BV Phổi Đà Nẵng', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 130000000, Han_Muc_No: 180000000 },
  { id: 'KH013', Ma_KH: 'KH013', Ten_Benh_Vien: 'BV Đa khoa Thái Ninh', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 55000000, Han_Muc_No: 70000000 },
  { id: 'KH014', Ma_KH: 'KH014', Ten_Benh_Vien: 'BV Nhi Trung ương', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 390000000, Han_Muc_No: 400000000 },
  { id: 'KH015', Ma_KH: 'KH015', Ten_Benh_Vien: 'Sở Y tế Hải Phòng', Phan_Tuyen: 'SO_YTE', Du_No_Hien_Tai: 0, Han_Muc_No: 200000000 },
];

export const MOCK_PRODUCTS = [
  // Nhóm kháng sinh
  { id: 'SP001', Ma_Hang: 'HDP-001', Ten_Biet_Duoc: 'Amoxicillin 500mg', Hoat_Chat: 'Amoxicillin', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nang', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1800, SL_Ton: 50000, Gia_Niem_Yet: 1650 },
  { id: 'SP002', Ma_Hang: 'HDP-002', Ten_Biet_Duoc: 'Ciprofloxacin 500mg', Hoat_Chat: 'Ciprofloxacin', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 2500, SL_Ton: 12000, Gia_Niem_Yet: 2300 },
  { id: 'SP003', Ma_Hang: 'HDP-003', Ten_Biet_Duoc: 'Ceftriaxone 1g Inject', Hoat_Chat: 'Ceftriaxone', Ham_Luong: '1g', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Thuốc tiêm', Nhom_Ky_Thuat: '4', Gia_Ke_Khai: 42000, SL_Ton: 850, Gia_Niem_Yet: 40500 },
  { id: 'SP017', Ma_Hang: 'HDP-017', Ten_Biet_Duoc: 'Cefuroxim 500mg', Hoat_Chat: 'Cefuroxim', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '2', Gia_Ke_Khai: 15500, SL_Ton: 25000, Gia_Niem_Yet: 14200 },
  { id: 'SP018', Ma_Hang: 'HDP-018', Ten_Biet_Duoc: 'Augmentin 625mg', Hoat_Chat: 'Amoxicillin + acid clavulanic', Ham_Luong: '500mg + 125mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '1', Gia_Ke_Khai: 18500, SL_Ton: 15000, Gia_Niem_Yet: 17200 },
  { id: 'SP019', Ma_Hang: 'HDP-019', Ten_Biet_Duoc: 'Cefalexin 500mg', Hoat_Chat: 'Cefalexin', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nang', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 2200, SL_Ton: 45000, Gia_Niem_Yet: 1950 },
  
  // Nhóm giảm đau - Hạ sốt
  { id: 'SP008', Ma_Hang: 'HDP-008', Ten_Biet_Duoc: 'Paracetamol 500mg', Hoat_Chat: 'Paracetamol', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 500, SL_Ton: 250000, Gia_Niem_Yet: 450 },
  { id: 'SP020', Ma_Hang: 'HDP-020', Ten_Biet_Duoc: 'Ibuprofen 400mg', Hoat_Chat: 'Ibuprofen', Ham_Luong: '400mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1500, SL_Ton: 30000, Gia_Niem_Yet: 1350 },
  { id: 'SP012', Ma_Hang: 'HDP-012', Ten_Biet_Duoc: 'Diclofenac 75mg Inject', Hoat_Chat: 'Diclofenac', Ham_Luong: '75mg/3ml', Duong_Dung: 'Tiêm bắp', Dang_Bao_Che: 'Dung dịch tiêm', Nhom_Ky_Thuat: '4', Gia_Ke_Khai: 11000, SL_Ton: 2100, Gia_Niem_Yet: 10500 },

  // Nhóm tiêu hóa
  { id: 'SP005', Ma_Hang: 'HDP-005', Ten_Biet_Duoc: 'Omeprazole 20mg', Hoat_Chat: 'Omeprazole', Ham_Luong: '20mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nang', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1200, SL_Ton: 85000, Gia_Niem_Yet: 1100 },
  { id: 'SP021', Ma_Hang: 'HDP-021', Ten_Biet_Duoc: 'Pantoprazol 40mg', Hoat_Chat: 'Pantoprazol', Ham_Luong: '40mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén bao tan trong ruột', Nhom_Ky_Thuat: '4', Gia_Ke_Khai: 8500, SL_Ton: 12000, Gia_Niem_Yet: 7800 },
  { id: 'SP022', Ma_Hang: 'HDP-022', Ten_Biet_Duoc: 'Esomeprazol 40mg', Hoat_Chat: 'Esomeprazol', Ham_Luong: '40mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '2', Gia_Ke_Khai: 14000, SL_Ton: 9500, Gia_Niem_Yet: 12500 },

  // Nhóm tim mạch - Huyết áp
  { id: 'SP006', Ma_Hang: 'HDP-006', Ten_Biet_Duoc: 'Losartan 50mg', Hoat_Chat: 'Losartan', Ham_Luong: '50mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén bao phim', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 2100, SL_Ton: 42000, Gia_Niem_Yet: 1950 },
  { id: 'SP023', Ma_Hang: 'HDP-023', Ten_Biet_Duoc: 'Amlodipine 5mg', Hoat_Chat: 'Amlodipine', Ham_Luong: '5mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1200, SL_Ton: 60000, Gia_Niem_Yet: 1050 },
  { id: 'SP024', Ma_Hang: 'HDP-024', Ten_Biet_Duoc: 'Enap 5mg', Hoat_Chat: 'Enalapril', Ham_Luong: '5mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1800, SL_Ton: 25000, Gia_Niem_Yet: 1600 },
  { id: 'SP025', Ma_Hang: 'HDP-025', Ten_Biet_Duoc: 'Plavix 75mg', Hoat_Chat: 'Clopidogrel', Ham_Luong: '75mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén bao phim', Nhom_Ky_Thuat: '1', Gia_Ke_Khai: 22000, SL_Ton: 8000, Gia_Niem_Yet: 21000 },

  // Nhóm hô hấp
  { id: 'SP016', Ma_Hang: 'HDP-016', Ten_Biet_Duoc: 'Salbutamol HFA 100mcg', Hoat_Chat: 'Salbutamol', Ham_Luong: '100mcg', Duong_Dung: 'Hít', Dang_Bao_Che: 'Bình xịt', Nhom_Ky_Thuat: 'NA', Gia_Ke_Khai: 115000, SL_Ton: 850, Gia_Niem_Yet: 112000 },
  { id: 'SP026', Ma_Hang: 'HDP-026', Ten_Biet_Duoc: 'Bromhexin 8mg', Hoat_Chat: 'Bromhexin hydroclorid', Ham_Luong: '8mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 800, SL_Ton: 120000, Gia_Niem_Yet: 720 },
  { id: 'SP027', Ma_Hang: 'HDP-027', Ten_Biet_Duoc: 'Terpin Codein', Hoat_Chat: 'Terpin hydrat + Codein', Ham_Luong: '100mg + 10mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nang', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1200, SL_Ton: 45000, Gia_Niem_Yet: 1050 },

  // Nhóm dị ứng - Vitamin
  { id: 'SP028', Ma_Hang: 'HDP-028', Ten_Biet_Duoc: 'Loratadin 10mg', Hoat_Chat: 'Loratadin', Ham_Luong: '10mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1500, SL_Ton: 65000, Gia_Niem_Yet: 1380 },
  { id: 'SP029', Ma_Hang: 'HDP-029', Ten_Biet_Duoc: 'Vitamin E 400IU', Hoat_Chat: 'Vitamin E', Ham_Luong: '400IU', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nang mềm', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 3500, SL_Ton: 32000, Gia_Niem_Yet: 3100 },
  { id: 'SP030', Ma_Hang: 'HDP-030', Ten_Biet_Duoc: 'Cetirizin 10mg', Hoat_Chat: 'Cetirizin', Ham_Luong: '10mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1200, SL_Ton: 50000, Gia_Niem_Yet: 1050 },

  // Nhóm gây nghiện - Giảm đau mạnh
  { id: 'SP031', Ma_Hang: 'HDP-031', Ten_Biet_Duoc: 'Fentanyl 0.1mg/2ml', Hoat_Chat: 'Fentanyl', Ham_Luong: '0.1mg/2ml', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Thuốc tiêm', Nhom_Ky_Thuat: '4', Gia_Ke_Khai: 95000, SL_Ton: 300, Gia_Niem_Yet: 88000 },
  { id: 'SP032', Ma_Hang: 'HDP-032', Ten_Biet_Duoc: 'Morphin 10mg', Hoat_Chat: 'Morphin sulfat', Ham_Luong: '10mg/1ml', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Thuốc tiêm', Nhom_Ky_Thuat: '4', Gia_Ke_Khai: 45000, SL_Ton: 500, Gia_Niem_Yet: 42000 },
  { id: 'SP033', Ma_Hang: 'HDP-033', Ten_Biet_Duoc: 'Midazolam 5mg/ml', Hoat_Chat: 'Midazolam', Ham_Luong: '5mg/ml', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Thuốc tiêm', Nhom_Ky_Thuat: '4', Gia_Ke_Khai: 35000, SL_Ton: 1200, Gia_Niem_Yet: 32500 },

  // Tiểu đường - Insulin
  { id: 'SP004', Ma_Hang: 'HDP-004', Ten_Biet_Duoc: 'Metformin 500mg', Hoat_Chat: 'Metformin', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 900, SL_Ton: 150000, Gia_Niem_Yet: 820 },
  { id: 'SP034', Ma_Hang: 'HDP-034', Ten_Biet_Duoc: 'Mixtard 30 100IU', Hoat_Chat: 'Insulin người tác dụng nhanh', Ham_Luong: '100IU/ml', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Hỗn dịch tiêm', Nhom_Ky_Thuat: '1', Gia_Ke_Khai: 185000, SL_Ton: 2500, Gia_Niem_Yet: 175000 },
  { id: 'SP013', Ma_Hang: 'HDP-013', Ten_Biet_Duoc: 'Insulin Glargine 100UI/ml', Hoat_Chat: 'Insulin Glargine', Ham_Luong: '100UI/ml', Duong_Dung: 'Tiêm dưới da', Dang_Bao_Che: 'Bút tiêm', Nhom_Ky_Thuat: '1', Gia_Ke_Khai: 380000, SL_Ton: 150, Gia_Niem_Yet: 365000 },

  // Dịch truyền
  { id: 'SP007', Ma_Hang: 'HDP-007', Ten_Biet_Duoc: 'NaCl 0.9% 500ml', Hoat_Chat: 'Natri clorid', Ham_Luong: '0.9%', Duong_Dung: 'Tiêm truyền', Dang_Bao_Che: 'Dung dịch tiêm truyền', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 15000, SL_Ton: 3000, Gia_Niem_Yet: 14200 },
  { id: 'SP035', Ma_Hang: 'HDP-035', Ten_Biet_Duoc: 'Glucose 5% 500ml', Hoat_Chat: 'Glucose', Ham_Luong: '5%', Duong_Dung: 'Tiêm truyền', Dang_Bao_Che: 'Dung dịch tiêm truyền', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 16500, SL_Ton: 2800, Gia_Niem_Yet: 15800 },

  // Nhóm khác
  { id: 'SP014', Ma_Hang: 'HDP-014', Ten_Biet_Duoc: 'Meropenem 1g Inject', Hoat_Chat: 'Meropenem', Ham_Luong: '1g', Duong_Dung: 'Tiêm truyền', Dang_Bao_Che: 'Thuốc tiêm truyền', Nhom_Ky_Thuat: '3', Gia_Ke_Khai: 280000, SL_Ton: 450, Gia_Niem_Yet: 272000 },
  { id: 'SP015', Ma_Hang: 'HDP-015', Ten_Biet_Duoc: 'Vancomycin 500mg', Hoat_Chat: 'Vancomycin', Ham_Luong: '500mg', Duong_Dung: 'Tiêm truyền', Dang_Bao_Che: 'Thuốc tiêm truyền', Nhom_Ky_Thuat: '3', Gia_Ke_Khai: 95000, SL_Ton: 1100, Gia_Niem_Yet: 92000 },
  { id: 'SP036', Ma_Hang: 'HDP-036', Ten_Biet_Duoc: 'Nystatin 500.000 UI', Hoat_Chat: 'Nystatin', Ham_Luong: '500.000 UI', Duong_Dung: 'Đặt', Dang_Bao_Che: 'Viên đặt', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 2500, SL_Ton: 8000, Gia_Niem_Yet: 2100 },
  { id: 'SP037', Ma_Hang: 'HDP-037', Ten_Biet_Duoc: 'Lidocain 2% 2ml', Hoat_Chat: 'Lidocain', Ham_Luong: '2%', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Thuốc tiêm', Nhom_Ky_Thuat: '4', Gia_Ke_Khai: 5500, SL_Ton: 12000, Gia_Niem_Yet: 4800 },
  { id: 'SP038', Ma_Hang: 'HDP-038', Ten_Biet_Duoc: 'Seduxen 5mg', Hoat_Chat: 'Diazepam', Ham_Luong: '5mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1200, SL_Ton: 5000, Gia_Niem_Yet: 1100 },
  { id: 'SP039', Ma_Hang: 'HDP-039', Ten_Biet_Duoc: 'Haloperidol 1.5mg', Hoat_Chat: 'Haloperidol', Ham_Luong: '1.5mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 800, SL_Ton: 3000, Gia_Niem_Yet: 750 },
  { id: 'SP040', Ma_Hang: 'HDP-040', Ten_Biet_Duoc: 'Pulmicort 0.5mg/2ml', Hoat_Chat: 'Budesonide xịt', Ham_Luong: '0.5mg/2ml', Duong_Dung: 'Hít', Dang_Bao_Che: 'Hỗn dịch khí dung', Nhom_Ky_Thuat: '1', Gia_Ke_Khai: 24000, SL_Ton: 1500, Gia_Niem_Yet: 22500 },
];
