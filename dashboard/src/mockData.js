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
  { id: 'SP001', Ma_Hang: 'HDP-001', Ten_Biet_Duoc: 'Amoxicillin 500mg', Hoat_Chat: 'Amoxicillin', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nang', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1800 },
  { id: 'SP002', Ma_Hang: 'HDP-002', Ten_Biet_Duoc: 'Ciprofloxacin 500mg', Hoat_Chat: 'Ciprofloxacin', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 2500 },
  { id: 'SP003', Ma_Hang: 'HDP-003', Ten_Biet_Duoc: 'Ceftriaxone 1g Inject', Hoat_Chat: 'Ceftriaxone', Ham_Luong: '1g', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Thuốc tiêm', Nhom_Ky_Thuat: '4', Gia_Ke_Khai: 42000 },
  { id: 'SP004', Ma_Hang: 'HDP-004', Ten_Biet_Duoc: 'Metformin 500mg', Hoat_Chat: 'Metformin', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 900 },
  { id: 'SP005', Ma_Hang: 'HDP-005', Ten_Biet_Duoc: 'Omeprazole 20mg', Hoat_Chat: 'Omeprazole', Ham_Luong: '20mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nang', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1200 },
  { id: 'SP006', Ma_Hang: 'HDP-006', Ten_Biet_Duoc: 'Losartan 50mg', Hoat_Chat: 'Losartan', Ham_Luong: '50mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén bao phim', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 2100 },
  { id: 'SP007', Ma_Hang: 'HDP-007', Ten_Biet_Duoc: 'NaCl 0.9% 500ml', Hoat_Chat: 'Natri clorid', Ham_Luong: '0.9%', Duong_Dung: 'Tiêm truyền', Dang_Bao_Che: 'Dung dịch tiêm truyền', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 15000 },
  { id: 'SP008', Ma_Hang: 'HDP-008', Ten_Biet_Duoc: 'Paracetamol 500mg', Hoat_Chat: 'Paracetamol', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 500 },
  { id: 'SP009', Ma_Hang: 'HDP-009', Ten_Biet_Duoc: 'Dexamethasone 4mg/2ml', Hoat_Chat: 'Dexamethasone', Ham_Luong: '4mg/2ml', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Dung dịch tiêm', Nhom_Ky_Thuat: '4', Gia_Ke_Khai: 8500 },
  { id: 'SP010', Ma_Hang: 'HDP-010', Ten_Biet_Duoc: 'Atorvastatin 20mg', Hoat_Chat: 'Atorvastatin', Ham_Luong: '20mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén bao phim', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 3200 },
  { id: 'SP011', Ma_Hang: 'HDP-011', Ten_Biet_Duoc: 'Azithromycin 250mg', Hoat_Chat: 'Azithromycin', Ham_Luong: '250mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén bao phim', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 5500 },
  { id: 'SP012', Ma_Hang: 'HDP-012', Ten_Biet_Duoc: 'Diclofenac 75mg Inject', Hoat_Chat: 'Diclofenac', Ham_Luong: '75mg/3ml', Duong_Dung: 'Tiêm bắp', Dang_Bao_Che: 'Dung dịch tiêm', Nhom_Ky_Thuat: '4', Gia_Ke_Khai: 11000 },
  { id: 'SP013', Ma_Hang: 'HDP-013', Ten_Biet_Duoc: 'Insulin Glargine 100UI/ml', Hoat_Chat: 'Insulin Glargine', Ham_Luong: '100UI/ml', Duong_Dung: 'Tiêm dưới da', Dang_Bao_Che: 'Bút tiêm', Nhom_Ky_Thuat: '1', Gia_Ke_Khai: 380000 },
  { id: 'SP014', Ma_Hang: 'HDP-014', Ten_Biet_Duoc: 'Meropenem 1g Inject', Hoat_Chat: 'Meropenem', Ham_Luong: '1g', Duong_Dung: 'Tiêm truyền', Dang_Bao_Che: 'Thuốc tiêm truyền', Nhom_Ky_Thuat: '3', Gia_Ke_Khai: 280000 },
  { id: 'SP015', Ma_Hang: 'HDP-015', Ten_Biet_Duoc: 'Vancomycin 500mg', Hoat_Chat: 'Vancomycin', Ham_Luong: '500mg', Duong_Dung: 'Tiêm truyền', Dang_Bao_Che: 'Thuốc tiêm truyền', Nhom_Ky_Thuat: '3', Gia_Ke_Khai: 95000 },
];
