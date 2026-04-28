// ─── Mock data cho Menu Khách hàng & Sản phẩm ───────────────────────────────
// Dữ liệu ảo phục vụ test app. Sau này sẽ được thay bằng data thật từ Firebase

export const MOCK_CUSTOMERS = [
  // Nhóm Bệnh viện Trung ương (Đã có)
  { id: 'KH001', Ma_KH: 'KH001', Ten_Benh_Vien: 'BV Bạch Mai', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 520000000, Han_Muc_No: 400000000 },
  { id: 'KH002', Ma_KH: 'KH002', Ten_Benh_Vien: 'BV Việt Đức', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 280000000, Han_Muc_No: 500000000 },
  { id: 'KH003', Ma_KH: 'KH003', Ten_Benh_Vien: 'BV Chợ Rẫy', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 610000000, Han_Muc_No: 600000000 },
  { id: 'KH005', Ma_KH: 'KH005', Ten_Benh_Vien: 'Bệnh viện Đại học Y Hà Nội', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 90000000, Han_Muc_No: 300000000 },

  // Nhóm khớp với Crawl Data (70% gói thầu)
  { id: 'KH006', Ma_KH: 'KH006', Ten_Benh_Vien: 'Bệnh Viện Đa Khoa Khu Vực Bồng Sơn', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 120000000, Han_Muc_No: 200000000 },
  { id: 'KH007', Ma_KH: 'KH007', Ten_Benh_Vien: 'Trung tâm Y tế khu vực Lục Yên', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 45000000, Han_Muc_No: 100000000 },
  { id: 'KH008', Ma_KH: 'KH008', Ten_Benh_Vien: 'Trạm Y tế xã Bình Xuyên', Phan_Tuyen: 'TUYEN_XA', Du_No_Hien_Tai: 0, Han_Muc_No: 50000000 }, // 10% Không nợ
  { id: 'KH009', Ma_KH: 'KH009', Ten_Benh_Vien: 'BV đa khoa Thanh Liêm', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 310000000, Han_Muc_No: 300000000 }, // Vượt hạn mức
  { id: 'KH010', Ma_KH: 'KH010', Ten_Benh_Vien: 'BỆNH VIỆN ĐA KHOA VŨ THƯ', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 0, Han_Muc_No: 150000000 }, // 10% Không nợ
  { id: 'KH011', Ma_KH: 'KH011', Ten_Benh_Vien: 'TRUNG TÂM MẮT TỈNH QUẢNG NGÃI', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 180000000, Han_Muc_No: 500000000 },
  { id: 'KH012', Ma_KH: 'KH012', Ten_Benh_Vien: 'TRUNG TÂM Y TẾ AN DƯƠNG', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 25000000, Han_Muc_No: 100000000 },
  { id: 'KH013', Ma_KH: 'KH013', Ten_Benh_Vien: 'BV đa khoa Đông Anh', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 420000000, Han_Muc_No: 400000000 }, // Vượt hạn mức
  { id: 'KH014', Ma_KH: 'KH014', Ten_Benh_Vien: 'BV Đa khoa Từ Sơn', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 15000000, Han_Muc_No: 150000000 },
  { id: 'KH015', Ma_KH: 'KH015', Ten_Benh_Vien: 'BV Đa khoa Cẩm Phả', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 560000000, Han_Muc_No: 500000000 }, // Vượt hạn mức
  { id: 'KH016', Ma_KH: 'KH016', Ten_Benh_Vien: 'BV Đa khoa số 2 tỉnh Lào Cai', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 85000000, Han_Muc_No: 200000000 },
  { id: 'KH017', Ma_KH: 'KH017', Ten_Benh_Vien: 'Trung tâm Y tế Khu vực Văn Chấn', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 0, Han_Muc_No: 120000000 }, // 10% Không nợ
  { id: 'KH018', Ma_KH: 'KH018', Ten_Benh_Vien: 'BV Đa khoa tỉnh Quảng Trị', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 230000000, Han_Muc_No: 300000000 },
  { id: 'KH019', Ma_KH: 'KH019', Ten_Benh_Vien: 'BV Phục hồi chức năng Thanh Hóa', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 12000000, Han_Muc_No: 100000000 },
  { id: 'KH020', Ma_KH: 'KH020', Ten_Benh_Vien: 'Trạm Y tế xã Xuân Lăng', Phan_Tuyen: 'TUYEN_XA', Du_No_Hien_Tai: 0, Han_Muc_No: 30000000 },
];

export const MOCK_PRODUCTS = [
  // --- NHÓM KHỚP 100% VỚI CRAWL DATA ĐỂ ĐẠT DOANH THU 50-70% ---
  // Giá niêm yết được đặt cực thấp (100-300đ) để chắc chắn nhỏ hơn giá trần bệnh viện
  { id: 'SP201', Ma_Hang: 'HD-ATR', Ten_Biet_Duoc: 'Atropin', Hoat_Chat: 'Atropin', Ham_Luong: '0.25mg', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Tiêm', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 5000, SL_Ton: 9000000, Gia_Niem_Yet: 200 },
  { id: 'SP202', Ma_Hang: 'HD-LID-E', Ten_Biet_Duoc: 'Lidocain + epinephrine', Hoat_Chat: 'Lidocain + epinephrine', Ham_Luong: 'NA', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Tiêm', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 15000, SL_Ton: 9000000, Gia_Niem_Yet: 500 },
  { id: 'SP203', Ma_Hang: 'HD-MOR', Ten_Biet_Duoc: 'Morphin', Hoat_Chat: 'Morphin', Ham_Luong: '10mg', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Tiêm', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 45000, SL_Ton: 9000000, Gia_Niem_Yet: 800 },
  { id: 'SP204', Ma_Hang: 'HD-PRO', Ten_Biet_Duoc: 'Proparacain', Hoat_Chat: 'Proparacain', Ham_Luong: 'NA', Duong_Dung: 'Nhỏ mắt', Dang_Bao_Che: 'Nhỏ mắt', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 55000, SL_Ton: 9000000, Gia_Niem_Yet: 1200 },
  { id: 'SP205', Ma_Hang: 'HD-PET', Ten_Biet_Duoc: 'Pethidin', Hoat_Chat: 'Pethidin', Ham_Luong: '100mg', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Tiêm', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 35000, SL_Ton: 9000000, Gia_Niem_Yet: 900 },
  { id: 'SP206', Ma_Hang: 'HD-MEL', Ten_Biet_Duoc: 'Meloxicam', Hoat_Chat: 'Meloxicam', Ham_Luong: '7.5mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 2500, SL_Ton: 9000000, Gia_Niem_Yet: 300 },
  { id: 'SP207', Ma_Hang: 'HD-MIS', Ten_Biet_Duoc: 'Misoprostol', Hoat_Chat: 'Misoprostol', Ham_Luong: '200mcg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 18000, SL_Ton: 9000000, Gia_Niem_Yet: 1000 },
  { id: 'SP208', Ma_Hang: 'HD-AVE', Ten_Biet_Duoc: 'Avelumab', Hoat_Chat: 'Avelumab', Ham_Luong: 'NA', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Tiêm', Nhom_Ky_Thuat: '1', Gia_Ke_Khai: 20000000, SL_Ton: 1000000, Gia_Niem_Yet: 5000000 },
  { id: 'SP209', Ma_Hang: 'HD-AZA', Ten_Biet_Duoc: 'Azathioprin', Hoat_Chat: 'Azathioprin', Ham_Luong: 'NA', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '2', Gia_Ke_Khai: 15000, SL_Ton: 9000000, Gia_Niem_Yet: 2500 },
  { id: 'SP210', Ma_Hang: 'HD-BIS-A', Ten_Biet_Duoc: 'Bisoprolol + Amlodipine', Hoat_Chat: 'Bisoprolol fumarate + Amlodipine', Ham_Luong: 'NA', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '1', Gia_Ke_Khai: 8500, SL_Ton: 9000000, Gia_Niem_Yet: 1500 },
  { id: 'SP211', Ma_Hang: 'HD-ACI', Ten_Biet_Duoc: 'Aciclovir', Hoat_Chat: 'Aciclovir', Ham_Luong: '200mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 2000, SL_Ton: 9000000, Gia_Niem_Yet: 350 },
  { id: 'SP212', Ma_Hang: 'HD-SAL', Ten_Biet_Duoc: 'Salbutamol', Hoat_Chat: 'Salbutamol', Ham_Luong: 'NA', Duong_Dung: 'Hít', Dang_Bao_Che: 'Xịt', Nhom_Ky_Thuat: 'NA', Gia_Ke_Khai: 110000, SL_Ton: 1000000, Gia_Niem_Yet: 25000 },
  { id: 'SP213', Ma_Hang: 'HD-BRO', Ten_Biet_Duoc: 'Bromhexin', Hoat_Chat: 'Bromhexin hydroclorid', Ham_Luong: '8mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 800, SL_Ton: 9000000, Gia_Niem_Yet: 150 },
  { id: 'SP214', Ma_Hang: 'HD-PAN', Ten_Biet_Duoc: 'Pantoprazol', Hoat_Chat: 'Pantoprazol', Ham_Luong: '40mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '4', Gia_Ke_Khai: 8500, SL_Ton: 9000000, Gia_Niem_Yet: 1200 },
  { id: 'SP215', Ma_Hang: 'HD-SPI', Ten_Biet_Duoc: 'Spironolacton', Hoat_Chat: 'Spironolacton', Ham_Luong: '25mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 3500, SL_Ton: 9000000, Gia_Niem_Yet: 650 },
  { id: 'SP216', Ma_Hang: 'HD-KAL', Ten_Biet_Duoc: 'Kali clorid', Hoat_Chat: 'Kali clorid', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1500, SL_Ton: 9000000, Gia_Niem_Yet: 250 },
  
  // Nhóm khác phổ biến
  { id: 'SP001', Ma_Hang: 'HD-AMO', Ten_Biet_Duoc: 'Amoxicillin', Hoat_Chat: 'Amoxicillin', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1800, SL_Ton: 10000000, Gia_Niem_Yet: 450 },
  { id: 'SP008', Ma_Hang: 'HD-PARA', Ten_Biet_Duoc: 'Paracetamol', Hoat_Chat: 'Paracetamol', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 800, SL_Ton: 20000000, Gia_Niem_Yet: 120 },
  { id: 'SP023', Ma_Hang: 'HD-AML', Ten_Biet_Duoc: 'Amlodipine', Hoat_Chat: 'Amlodipine', Ham_Luong: '5mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1200, SL_Ton: 8000000, Gia_Niem_Yet: 250 },
];
