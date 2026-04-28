// ─── Mock data cho Menu Khách hàng & Sản phẩm ───────────────────────────────
// Dữ liệu ảo phục vụ test app. Sau này sẽ được thay bằng data thật từ Firebase

export const MOCK_CUSTOMERS = [
  { id: 'KH001', Ma_KH: 'KH001', Ten_Benh_Vien: 'BV Bạch Mai', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 520000000, Han_Muc_No: 400000000 },
  { id: 'KH002', Ma_KH: 'KH002', Ten_Benh_Vien: 'BV Việt Đức', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 280000000, Han_Muc_No: 500000000 },
  { id: 'KH003', Ma_KH: 'KH003', Ten_Benh_Vien: 'BV Chợ Rẫy', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 610000000, Han_Muc_No: 600000000 },
  { id: 'KH004', Ma_KH: 'KH004', Ten_Benh_Vien: 'BV Nhân dân Gia Định', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 150000000, Han_Muc_No: 200000000 },
  { id: 'KH005', Ma_KH: 'KH005', Ten_Benh_Vien: 'BV Đại học Y Hà Nội', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 90000000, Han_Muc_No: 300000000 },
  { id: 'KH014', Ma_KH: 'KH014', Ten_Benh_Vien: 'BV Nhi Trung ương', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 390000000, Han_Muc_No: 400000000 },
];

export const MOCK_PRODUCTS = [
  // --- NHÓM KHỚP VỚI CRAWL DATA ĐỂ TĂNG TỶ LỆ DOANH THU (50-70%) ---
  { id: 'SP101', Ma_Hang: 'HD-MEL', Ten_Biet_Duoc: 'Meloxicam 7.5mg', Hoat_Chat: 'Meloxicam', Ham_Luong: '7.5mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 2500, SL_Ton: 999999, Gia_Niem_Yet: 1800 },
  { id: 'SP102', Ma_Hang: 'HD-ATR', Ten_Biet_Duoc: 'Atropin 0.25mg', Hoat_Chat: 'Atropin sulfat', Ham_Luong: '0.25mg/ml', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Thuốc tiêm', Nhom_Ky_Thuat: '4', Gia_Ke_Khai: 5000, SL_Ton: 800000, Gia_Niem_Yet: 3500 },
  { id: 'SP103', Ma_Hang: 'HD-SPI', Ten_Biet_Duoc: 'Spironolacton 25mg', Hoat_Chat: 'Spironolacton', Ham_Luong: '25mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 3200, SL_Ton: 750000, Gia_Niem_Yet: 2800 },
  { id: 'SP104', Ma_Hang: 'HD-ACI', Ten_Biet_Duoc: 'Aciclovir 200mg', Hoat_Chat: 'Aciclovir', Ham_Luong: '200mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 2100, SL_Ton: 600000, Gia_Niem_Yet: 1600 },
  { id: 'SP105', Ma_Hang: 'HD-KAL', Ten_Biet_Duoc: 'Kali Clorid 500mg', Hoat_Chat: 'Kali clorid', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1500, SL_Ton: 900000, Gia_Niem_Yet: 1100 },
  { id: 'SP106', Ma_Hang: 'HD-ALT', Ten_Biet_Duoc: 'Alteplase 50mg', Hoat_Chat: 'Alteplase', Ham_Luong: '50mg', Duong_Dung: 'Tiêm truyền', Dang_Bao_Che: 'Bột pha tiêm', Nhom_Ky_Thuat: '1', Gia_Ke_Khai: 12500000, SL_Ton: 5000, Gia_Niem_Yet: 11000000 },
  { id: 'SP107', Ma_Hang: 'HD-MIS', Ten_Biet_Duoc: 'Misoprostol 200mcg', Hoat_Chat: 'Misoprostol', Ham_Luong: '200mcg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '2', Gia_Ke_Khai: 18000, SL_Ton: 150000, Gia_Niem_Yet: 15500 },
  { id: 'SP108', Ma_Hang: 'HD-SOF', Ten_Biet_Duoc: 'Sofosbuvir + Velpatasvir', Hoat_Chat: 'Sofosbuvir + velpatasvir', Ham_Luong: '400mg + 100mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén bao phim', Nhom_Ky_Thuat: '1', Gia_Ke_Khai: 8500000, SL_Ton: 10000, Gia_Niem_Yet: 7800000 },
  { id: 'SP109', Ma_Hang: 'HD-PIR', Ten_Biet_Duoc: 'Piroxicam 20mg', Hoat_Chat: 'Piroxicam', Ham_Luong: '20mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nang', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1200, SL_Ton: 800000, Gia_Niem_Yet: 950 },
  { id: 'SP110', Ma_Hang: 'HD-DTL', Ten_Biet_Duoc: 'Dolutegravir combination', Hoat_Chat: 'Dolutegravir + Lamivudine + Tenofovir', Ham_Luong: '50mg+300mg+300mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '1', Gia_Ke_Khai: 1250000, SL_Ton: 20000, Gia_Niem_Yet: 980000 },

  // Nhóm kháng sinh (đã có)
  { id: 'SP001', Ma_Hang: 'HDP-001', Ten_Biet_Duoc: 'Amoxicillin 500mg', Hoat_Chat: 'Amoxicillin', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nang', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1800, SL_Ton: 500000, Gia_Niem_Yet: 1450 },
  { id: 'SP018', Ma_Hang: 'HDP-018', Ten_Biet_Duoc: 'Augmentin 625mg', Hoat_Chat: 'Amoxicillin + acid clavulanic', Ham_Luong: '500mg + 125mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '1', Gia_Ke_Khai: 18500, SL_Ton: 300000, Gia_Niem_Yet: 15200 },
  { id: 'SP019', Ma_Hang: 'HDP-019', Ten_Biet_Duoc: 'Cefalexin 500mg', Hoat_Chat: 'Cefalexin', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nang', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 2200, SL_Ton: 450000, Gia_Niem_Yet: 1850 },
  { id: 'SP017', Ma_Hang: 'HDP-017', Ten_Biet_Duoc: 'Cefuroxim 500mg', Hoat_Chat: 'Cefuroxim', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '2', Gia_Ke_Khai: 15500, SL_Ton: 250000, Gia_Niem_Yet: 13200 },
  
  // Nhóm hô hấp & giảm đau (đã có)
  { id: 'SP016', Ma_Hang: 'HDP-016', Ten_Biet_Duoc: 'Salbutamol HFA 100mcg', Hoat_Chat: 'Salbutamol', Ham_Luong: '100mcg', Duong_Dung: 'Hít', Dang_Bao_Che: 'Bình xịt', Nhom_Ky_Thuat: 'NA', Gia_Ke_Khai: 115000, SL_Ton: 50000, Gia_Niem_Yet: 92000 },
  { id: 'SP026', Ma_Hang: 'HDP-026', Ten_Biet_Duoc: 'Bromhexin 8mg', Hoat_Chat: 'Bromhexin hydroclorid', Ham_Luong: '8mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 800, SL_Ton: 1200000, Gia_Niem_Yet: 620 },
  { id: 'SP038', Ma_Hang: 'HDP-038', Ten_Biet_Duoc: 'Seduxen 5mg', Hoat_Chat: 'Diazepam', Ham_Luong: '5mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1200, SL_Ton: 500000, Gia_Niem_Yet: 950 },

  // Nhóm tiêu hóa & Tim mạch (đã có)
  { id: 'SP021', Ma_Hang: 'HDP-021', Ten_Biet_Duoc: 'Pantoprazol 40mg', Hoat_Chat: 'Pantoprazol', Ham_Luong: '40mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén bao tan trong ruột', Nhom_Ky_Thuat: '4', Gia_Ke_Khai: 8500, SL_Ton: 600000, Gia_Niem_Yet: 6800 },
  { id: 'SP028', Ma_Hang: 'HDP-028', Ten_Biet_Duoc: 'Loratadin 10mg', Hoat_Chat: 'Loratadin', Ham_Luong: '10mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1500, SL_Ton: 650000, Gia_Niem_Yet: 1180 },
  { id: 'SP029', Ma_Hang: 'HDP-029', Ten_Biet_Duoc: 'Vitamin E 400IU', Hoat_Chat: 'Vitamin E', Ham_Luong: '400IU', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nang mềm', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 3500, SL_Ton: 320000, Gia_Niem_Yet: 2800 },

  // Gây nghiện & Insulin (đã có)
  { id: 'SP031', Ma_Hang: 'HDP-031', Ten_Biet_Duoc: 'Fentanyl 0.1mg/2ml', Hoat_Chat: 'Fentanyl', Ham_Luong: '0.1mg/2ml', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Thuốc tiêm', Nhom_Ky_Thuat: '4', Gia_Ke_Khai: 95000, SL_Ton: 100000, Gia_Niem_Yet: 78000 },
  { id: 'SP032', Ma_Hang: 'HDP-032', Ten_Biet_Duoc: 'Morphin 10mg', Hoat_Chat: 'Morphin sulfat', Ham_Luong: '10mg/1ml', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Thuốc tiêm', Nhom_Ky_Thuat: '4', Gia_Ke_Khai: 45000, SL_Ton: 100000, Gia_Niem_Yet: 38000 },
  { id: 'SP033', Ma_Hang: 'HDP-033', Ten_Biet_Duoc: 'Midazolam 5mg/ml', Hoat_Chat: 'Midazolam', Ham_Luong: '5mg/ml', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Thuốc tiêm', Nhom_Ky_Thuat: '4', Gia_Ke_Khai: 35000, SL_Ton: 120000, Gia_Niem_Yet: 29500 },
  { id: 'SP034', Ma_Hang: 'HDP-034', Ten_Biet_Duoc: 'Mixtard 30 100IU', Hoat_Chat: 'Insulin người tác dụng nhanh', Ham_Luong: '100IU/ml', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Hỗn dịch tiêm', Nhom_Ky_Thuat: '1', Gia_Ke_Khai: 185000, SL_Ton: 250000, Gia_Niem_Yet: 165000 },
];
