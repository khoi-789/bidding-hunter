// ─── Mock data cho Menu Khách hàng & Sản phẩm ───────────────────────────────
// Dữ liệu ảo phục vụ test app. Sau này sẽ được thay bằng data thật từ Firebase

export const MOCK_CUSTOMERS = [
  // Nhóm Bệnh viện Trung ương (Đã có)
  { id: 'KH001', Ma_KH: 'KH001', Ten_Benh_Vien: 'BV Bạch Mai', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 520000000, Han_Muc_No: 400000000, Ten_Lien_He: 'Nguyễn Văn A', SDT: '0901234567' },
  { id: 'KH002', Ma_KH: 'KH002', Ten_Benh_Vien: 'BV Việt Đức', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 280000000, Han_Muc_No: 500000000, Ten_Lien_He: 'Trần Thị B', SDT: '0912345678' },
  { id: 'KH003', Ma_KH: 'KH003', Ten_Benh_Vien: 'BV Chợ Rẫy', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 610000000, Han_Muc_No: 600000000, Ten_Lien_He: 'Lê Văn C', SDT: '0987654321' },
  { id: 'KH005', Ma_KH: 'KH005', Ten_Benh_Vien: 'Bệnh viện Đại học Y Hà Nội', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 90000000, Han_Muc_No: 300000000, Ten_Lien_He: 'Phạm Minh D', SDT: '0977889900' },

  // Nhóm khớp với Crawl Data (70% gói thầu)
  { id: 'KH006', Ma_KH: 'KH006', Ten_Benh_Vien: 'Bệnh Viện Đa Khoa Khu Vực Bồng Sơn', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 120000000, Han_Muc_No: 200000000, Ten_Lien_He: 'Vũ Hoàng E', SDT: '0933445566' },
  { id: 'KH007', Ma_KH: 'KH007', Ten_Benh_Vien: 'Trung tâm Y tế khu vực Lục Yên', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 45000000, Han_Muc_No: 100000000, Ten_Lien_He: 'Đặng Quốc F', SDT: '0944556677' },
  { id: 'KH008', Ma_KH: 'KH008', Ten_Benh_Vien: 'Trạm Y tế xã Bình Xuyên', Phan_Tuyen: 'TUYEN_XA', Du_No_Hien_Tai: 0, Han_Muc_No: 50000000, Ten_Lien_He: 'Bùi Thị G', SDT: '0955667788' }, // 10% Không nợ
  { id: 'KH009', Ma_KH: 'KH009', Ten_Benh_Vien: 'BV đa khoa Thanh Liêm', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 310000000, Han_Muc_No: 300000000, Ten_Lien_He: 'Hồ Anh H', SDT: '0966778899' }, // Vượt hạn mức
  { id: 'KH010', Ma_KH: 'KH010', Ten_Benh_Vien: 'BỆNH VIỆN ĐA KHOA VŨ THƯ', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 0, Han_Muc_No: 150000000, Ten_Lien_He: 'Ngô Minh I', SDT: '0922334455' }, // 10% Không nợ
  { id: 'KH011', Ma_KH: 'KH011', Ten_Benh_Vien: 'TRUNG TÂM MẮT TỈNH QUẢNG NGÃI', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 180000000, Han_Muc_No: 500000000, Ten_Lien_He: 'Dương Thành K', SDT: '0911223344' },
  { id: 'KH012', Ma_KH: 'KH012', Ten_Benh_Vien: 'TRUNG TÂM Y TẾ AN DƯƠNG', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 25000000, Han_Muc_No: 100000000, Ten_Lien_He: 'Lý Kim L', SDT: '0944112233' },
  { id: 'KH013', Ma_KH: 'KH013', Ten_Benh_Vien: 'BV đa khoa Đông Anh', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 420000000, Han_Muc_No: 400000000, Ten_Lien_He: 'Trịnh Văn M', SDT: '0977441122' }, // Vượt hạn mức
  { id: 'KH014', Ma_KH: 'KH014', Ten_Benh_Vien: 'BV Đa khoa Từ Sơn', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 15000000, Han_Muc_No: 150000000, Ten_Lien_He: 'Chu Minh N', SDT: '0988552211' },
  { id: 'KH015', Ma_KH: 'KH015', Ten_Benh_Vien: 'BV Đa khoa Cẩm Phả', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 560000000, Han_Muc_No: 500000000, Ten_Lien_He: 'Đỗ Văn O', SDT: '0999663322' }, // Vượt hạn mức
  { id: 'KH016', Ma_KH: 'KH016', Ten_Benh_Vien: 'BV Đa khoa số 2 tỉnh Lào Cai', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 85000000, Han_Muc_No: 200000000, Ten_Lien_He: 'Lương Minh P', SDT: '0900774411' },
  { id: 'KH017', Ma_KH: 'KH017', Ten_Benh_Vien: 'Trung tâm Y tế Khu vực Văn Chấn', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 0, Han_Muc_No: 120000000, Ten_Lien_He: 'Tô Văn Q', SDT: '0911885522' }, // 10% Không nợ
  { id: 'KH018', Ma_KH: 'KH018', Ten_Benh_Vien: 'BV Đa khoa tỉnh Quảng Trị', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 230000000, Han_Muc_No: 300000000, Ten_Lien_He: 'Phan Thị R', SDT: '0922996633' },
  { id: 'KH019', Ma_KH: 'KH019', Ten_Benh_Vien: 'BV Phục hồi chức năng Thanh Hóa', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 12000000, Han_Muc_No: 100000000, Ten_Lien_He: 'Khương Văn S', SDT: '0933117744' },
  { id: 'KH020', Ma_KH: 'KH020', Ten_Benh_Vien: 'Trạm Y tế xã Xuân Lăng', Phan_Tuyen: 'TUYEN_XA', Du_No_Hien_Tai: 0, Han_Muc_No: 30000000, Ten_Lien_He: 'Tạ Minh T', SDT: '0944228855' },
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

  // --- NHÓM MOCK CHO GÓI IB2600166175 (100% KHỚP) ---
  { id: 'SP301', Ma_Hang: 'HD-HPM', Ten_Biet_Duoc: 'HPMC Eye Drop', Hoat_Chat: 'Hydroxypropylmethylcellulose', Ham_Luong: 'NA', Duong_Dung: 'Nhỏ mắt', Dang_Bao_Che: 'Thuốc nhỏ mắt', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 25000, SL_Ton: 5000000, Gia_Niem_Yet: 15000 },
  { id: 'SP302', Ma_Hang: 'HD-IND', Ten_Biet_Duoc: 'Indomethacin Eye Drop', Hoat_Chat: 'Indomethacin', Ham_Luong: 'NA', Duong_Dung: 'Nhỏ mắt', Dang_Bao_Che: 'Thuốc nhỏ mắt', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 50000, SL_Ton: 5000000, Gia_Niem_Yet: 34000 },
  { id: 'SP303', Ma_Hang: 'HD-MOX', Ten_Biet_Duoc: 'Moxifloxacin Eye Drop', Hoat_Chat: 'Moxifloxacin', Ham_Luong: 'NA', Duong_Dung: 'Nhỏ mắt', Dang_Bao_Che: 'Thuốc nhỏ mắt', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 65000, SL_Ton: 5000000, Gia_Niem_Yet: 40000 },
  { id: 'SP304', Ma_Hang: 'HD-MDX', Ten_Biet_Duoc: 'Moxifloxacin + Dexamethason', Hoat_Chat: 'Moxifloxacin + Dexamethason', Ham_Luong: 'NA', Duong_Dung: 'Nhỏ mắt', Dang_Bao_Che: 'Thuốc nhỏ mắt', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 18000, SL_Ton: 5000000, Gia_Niem_Yet: 11000 },
  { id: 'SP305', Ma_Hang: 'HD-OXY', Ten_Biet_Duoc: 'Oxy già HD', Hoat_Chat: 'Nước oxy già', Ham_Luong: 'NA', Duong_Dung: 'Dùng ngoài', Dang_Bao_Che: 'Dùng ngoài', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1500, SL_Ton: 5000000, Gia_Niem_Yet: 900 },
  { id: 'SP306', Ma_Hang: 'HD-OFL-M', Ten_Biet_Duoc: 'Ofloxacin Eye Drop', Hoat_Chat: 'Ofloxacin', Ham_Luong: 'NA', Duong_Dung: 'Nhỏ mắt', Dang_Bao_Che: 'Thuốc nhỏ mắt', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 45000, SL_Ton: 5000000, Gia_Niem_Yet: 26000 },
  { id: 'SP307', Ma_Hang: 'HD-OFL-T', Ten_Biet_Duoc: 'Ofloxacin Tra Mắt', Hoat_Chat: 'Ofloxacin', Ham_Luong: 'NA', Duong_Dung: 'Tra mắt', Dang_Bao_Che: 'Thuốc tra mắt', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 60000, SL_Ton: 5000000, Gia_Niem_Yet: 35000 },
  { id: 'SP308', Ma_Hang: 'HD-POV', Ten_Biet_Duoc: 'Povidon Iodin HD', Hoat_Chat: 'Povidon Iodin', Ham_Luong: 'NA', Duong_Dung: 'Dùng ngoài', Dang_Bao_Che: 'Dùng ngoài', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 11000, SL_Ton: 5000000, Gia_Niem_Yet: 6000 },
  { id: 'SP309', Ma_Hang: 'HD-PRO-H', Ten_Biet_Duoc: 'Proparacain hydroclorid', Hoat_Chat: 'Proparacain hydroclorid', Ham_Luong: 'NA', Duong_Dung: 'Nhỏ mắt', Dang_Bao_Che: 'Thuốc nhỏ mắt', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 35000, SL_Ton: 5000000, Gia_Niem_Yet: 1200 },
  { id: 'SP310', Ma_Hang: 'HD-TIM', Ten_Biet_Duoc: 'Timolol Eye Drop', Hoat_Chat: 'Timolol', Ham_Luong: 'NA', Duong_Dung: 'Nhỏ mắt', Dang_Bao_Che: 'Thuốc nhỏ mắt', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 22000, SL_Ton: 5000000, Gia_Niem_Yet: 13000 },
  { id: 'SP311', Ma_Hang: 'HD-TRI', Ten_Biet_Duoc: 'Triamcinolon acetonid', Hoat_Chat: 'Triamcinolon acetonid', Ham_Luong: 'NA', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Thuốc tiêm', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 22000, SL_Ton: 5000000, Gia_Niem_Yet: 13000 },
  { id: 'SP312', Ma_Hang: 'HD-TPH', Ten_Biet_Duoc: 'Tropicamide + Phenylephrine', Hoat_Chat: 'Tropicamide + Phenylephrine hydroclorid', Ham_Luong: 'NA', Duong_Dung: 'Nhỏ mắt', Dang_Bao_Che: 'Thuốc nhỏ mắt', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 55000, SL_Ton: 5000000, Gia_Niem_Yet: 33000 },
  { id: 'SP313', Ma_Hang: 'HD-VITA', Ten_Biet_Duoc: 'Vitamin A HD', Hoat_Chat: 'Vitamin A', Ham_Luong: 'NA', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 200, SL_Ton: 10000000, Gia_Niem_Yet: 100 },

  // --- NHÓM MOCK CHO GÓI IB2600167175 (85% KHỚP - 34 SP) ---
  { id: 'SP401', Ma_Hang: 'HD-API', Ten_Biet_Duoc: 'Apitor-Ez', Hoat_Chat: 'Apitor', Ham_Luong: '10/10mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 4500, SL_Ton: 1000000 },
  { id: 'SP402', Ma_Hang: 'HD-AUG1', Ten_Biet_Duoc: 'Augmentin 1g HD', Hoat_Chat: 'Augmentin 1g', Ham_Luong: '1g', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 11000, SL_Ton: 1000000 },
  { id: 'SP403', Ma_Hang: 'HD-AUG5', Ten_Biet_Duoc: 'Augmentin 500mg HD', Hoat_Chat: 'Augmentin 500mg/62,5mg', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Gói', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 8000, SL_Ton: 1000000 },
  { id: 'SP404', Ma_Hang: 'HD-BZO', Ten_Biet_Duoc: 'Betaloc Zok 50mg HD', Hoat_Chat: 'Betaloc Zok 50mg', Ham_Luong: '50mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 2700, SL_Ton: 1000000 },
  { id: 'SP405', Ma_Hang: 'HD-BS16', Ten_Biet_Duoc: 'Betaserc 16mg HD', Hoat_Chat: 'Betaserc 16mg', Ham_Luong: '16mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 1800, SL_Ton: 1000000 },
  { id: 'SP406', Ma_Hang: 'HD-BS24', Ten_Biet_Duoc: 'Betaserc 24mg HD', Hoat_Chat: 'Betaserc 24mg', Ham_Luong: '24mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 3200, SL_Ton: 1000000 },
  { id: 'SP407', Ma_Hang: 'HD-BIL', Ten_Biet_Duoc: 'Biloban HD', Hoat_Chat: 'Biloban', Ham_Luong: '80mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 3300, SL_Ton: 1000000 },
  { id: 'SP408', Ma_Hang: 'HD-BIO', Ten_Biet_Duoc: 'BIOFLORA 100MG HD', Hoat_Chat: 'BIOFLORA 100MG', Ham_Luong: '100mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Gói', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 2700, SL_Ton: 1000000 },
  { id: 'SP409', Ma_Hang: 'HD-CEF', Ten_Biet_Duoc: 'Cefurich 500 HD', Hoat_Chat: 'Cefurich 500', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 4500, SL_Ton: 1000000 },
  { id: 'SP410', Ma_Hang: 'HD-COV10', Ten_Biet_Duoc: 'Coveram 10/10mg HD', Hoat_Chat: 'Coveram 10mg/10mg', Ham_Luong: '10/10mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 5000, SL_Ton: 1000000 },
  { id: 'SP411', Ma_Hang: 'HD-COV5', Ten_Biet_Duoc: 'Coveram 5/5mg HD', Hoat_Chat: 'Coveram 5mg/5mg', Ham_Luong: '5/5mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 3200, SL_Ton: 1000000 },
  { id: 'SP412', Ma_Hang: 'HD-CYS5', Ten_Biet_Duoc: 'Coversyl 5mg HD', Hoat_Chat: 'Coversyl 5mg', Ham_Luong: '5mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 2500, SL_Ton: 1000000 },
  { id: 'SP413', Ma_Hang: 'HD-CPL', Ten_Biet_Duoc: 'Coversyl Plus HD', Hoat_Chat: 'Coversyl Plus Arginine 5mg/1.25mg', Ham_Luong: '5/1.25mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 3200, SL_Ton: 1000000 },
  { id: 'SP414', Ma_Hang: 'HD-CRE', Ten_Biet_Duoc: 'Crestor 10mg HD', Hoat_Chat: 'Crestor 10mg', Ham_Luong: '10mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 4900, SL_Ton: 1000000 },
  { id: 'SP415', Ma_Hang: 'HD-DEP', Ten_Biet_Duoc: 'Depo-Medrol HD', Hoat_Chat: 'Depo', Ham_Luong: '40mg', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Lọ', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 17000, SL_Ton: 1000000 },
  { id: 'SP416', Ma_Hang: 'HD-DIA', Ten_Biet_Duoc: 'Diamicron MR 30mg HD', Hoat_Chat: 'Diamicron MR 30mg', Ham_Luong: '30mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 1500, SL_Ton: 1000000 },
  { id: 'SP417', Ma_Hang: 'HD-DIP', Ten_Biet_Duoc: 'Diprospan HD', Hoat_Chat: 'Diprospan', Ham_Luong: '5/2mg', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Ống', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 37000, SL_Ton: 1000000 },
  { id: 'SP418', Ma_Hang: 'HD-DUP', Ten_Biet_Duoc: 'Duphaston HD', Hoat_Chat: 'Duphaston', Ham_Luong: '10mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 4400, SL_Ton: 1000000 },
  { id: 'SP419', Ma_Hang: 'HD-EMA', Ten_Biet_Duoc: 'Emanera 40mg HD', Hoat_Chat: 'Emanera 40mg gastro', Ham_Luong: '40mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 6000, SL_Ton: 1000000 },
  { id: 'SP420', Ma_Hang: 'HD-EPI', Ten_Biet_Duoc: 'Epinosine B Forte HD', Hoat_Chat: 'Epinosine B Forte', Ham_Luong: '2ml', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Ống', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 27000, SL_Ton: 1000000 },
  { id: 'SP421', Ma_Hang: 'HD-FOS', Ten_Biet_Duoc: 'Fosmicin 500mg HD', Hoat_Chat: 'Fosmicin tablets 500mg', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 11000, SL_Ton: 1000000 },
  { id: 'SP422', Ma_Hang: 'HD-GIN', Ten_Biet_Duoc: 'Ginkomifa HD', Hoat_Chat: 'Ginkomifa', Ham_Luong: '17.5mg', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Ống', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 33000, SL_Ton: 1000000 },
  { id: 'SP423', Ma_Hang: 'HD-LAN', Ten_Biet_Duoc: 'Lantus HD', Hoat_Chat: 'Lantus', Ham_Luong: '100U', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Lọ', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 240000, SL_Ton: 1000000 },
  { id: 'SP424', Ma_Hang: 'HD-LIP', Ten_Biet_Duoc: 'Lipanthyl 200M HD', Hoat_Chat: 'Lipanthyl 200M', Ham_Luong: '200mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 3500, SL_Ton: 1000000 },
  { id: 'SP425', Ma_Hang: 'HD-LIV', Ten_Biet_Duoc: 'Livosil 140mg HD', Hoat_Chat: 'Livosil 140mg', Ham_Luong: '140mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 3200, SL_Ton: 1000000 },
  { id: 'SP426', Ma_Hang: 'HD-MEI', Ten_Biet_Duoc: 'Meiact Fine HD', Hoat_Chat: 'Meiact Fine Granules', Ham_Luong: '50mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Gói', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 12000, SL_Ton: 1000000 },
  { id: 'SP427', Ma_Hang: 'HD-MIX', Ten_Biet_Duoc: 'Mixtard 30 HD', Hoat_Chat: 'Mixtard 30', Ham_Luong: '10ml', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Lọ', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 32000, SL_Ton: 1000000 },
  { id: 'SP428', Ma_Hang: 'HD-NOV', Ten_Biet_Duoc: 'Novorapid FlexPen HD', Hoat_Chat: 'Novorapid FlexPen', Ham_Luong: '3ml', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Bút tiêm', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 110000, SL_Ton: 1000000 },
  { id: 'SP429', Ma_Hang: 'HD-PUL', Ten_Biet_Duoc: 'Pulmicort Respules HD', Hoat_Chat: 'Pulmicort Respules', Ham_Luong: '1mg', Duong_Dung: 'Hít', Dang_Bao_Che: 'Ống', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 12000, SL_Ton: 1000000 },
  { id: 'SP430', Ma_Hang: 'HD-RED', Ten_Biet_Duoc: 'Reduze HD', Hoat_Chat: 'Reduze', Ham_Luong: 'NA', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 3500, SL_Ton: 1000000 },
  { id: 'SP431', Ma_Hang: 'HD-ROT', Ten_Biet_Duoc: 'Rotunda HD', Hoat_Chat: 'Rotunda', Ham_Luong: '30mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 400, SL_Ton: 1000000 },
  { id: 'SP432', Ma_Hang: 'HD-SEP', Ten_Biet_Duoc: 'Septanest HD', Hoat_Chat: 'Septanest with Adrenaline 1/100,000', Ham_Luong: '1.7ml', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Ống', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 8000, SL_Ton: 1000000 },
  { id: 'SP433', Ma_Hang: 'HD-SIN', Ten_Biet_Duoc: 'Singulair 5mg HD', Hoat_Chat: 'Singulair 5mg (đóng gói tại Merck Sharp & Dohme B.V. Địa chỉ: Waarderweg 39, 2031 BN Haarlem', Ham_Luong: '5mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 6500, SL_Ton: 1000000 },
  { id: 'SP434', Ma_Hang: 'HD-SME', Ten_Biet_Duoc: 'Solu-Medrol HD', Hoat_Chat: 'Solu', Ham_Luong: '40mg', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Lọ', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 20000, SL_Ton: 1000000 },
  
  // --- NHÓM MOCK CHO GÓI IB2600174579 (~65% KHỚP) ---
  { id: 'SP501', Ma_Hang: 'HD-DTL', Ten_Biet_Duoc: 'Dolutegravir + Lamivudin + Tenofovir HD', Hoat_Chat: 'Dolutegravir + Lamivudin + Tenofovir disoproxil fumarate', Ham_Luong: '50mg + 300mg + 300mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 1800, SL_Ton: 1000000 },
  { id: 'SP502', Ma_Hang: 'HD-CIS', Ten_Biet_Duoc: 'Cisplatin HD', Hoat_Chat: 'Cisplatin', Ham_Luong: '10mg/20ml', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Lọ', Nhom_Ky_Thuat: '4', Gia_Niem_Yet: 35000, SL_Ton: 1000000 },
  { id: 'SP504', Ma_Hang: 'HD-SOR', Ten_Biet_Duoc: 'Sorbitol HD', Hoat_Chat: 'Sorbitol', Ham_Luong: '5g', Duong_Dung: 'Uống', Dang_Bao_Che: 'Gói', Nhom_Ky_Thuat: '2', Gia_Niem_Yet: 900, SL_Ton: 1000000 },
  { id: 'SP505', Ma_Hang: 'HD-EFA', Ten_Biet_Duoc: 'Efavirenz HD', Hoat_Chat: 'Efavirenz', Ham_Luong: '600mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 1400, SL_Ton: 1000000 },
  { id: 'SP506', Ma_Hang: 'HD-CAR', Ten_Biet_Duoc: 'Carboplatin HD', Hoat_Chat: 'Carboplatin', Ham_Luong: '150mg', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Lọ', Nhom_Ky_Thuat: '4', Gia_Niem_Yet: 165000, SL_Ton: 1000000 },
  { id: 'SP507', Ma_Hang: 'HD-CYC', Ten_Biet_Duoc: 'Cyclophosphamid HD', Hoat_Chat: 'Cyclophosphamid', Ham_Luong: '500mg', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Lọ', Nhom_Ky_Thuat: '1', Gia_Niem_Yet: 65000, SL_Ton: 1000000 },
  { id: 'SP508', Ma_Hang: 'HD-TRI-H', Ten_Biet_Duoc: 'Trihexyphenidyl HD', Hoat_Chat: 'Trihexyphenidyl hydroclorid', Ham_Luong: '2mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '4', Gia_Niem_Yet: 70, SL_Ton: 1000000 },
  { id: 'SP509', Ma_Hang: 'HD-GLI', Ten_Biet_Duoc: 'Gliclazid HD', Hoat_Chat: 'Gliclazid', Ham_Luong: '60mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '2', Gia_Niem_Yet: 600, SL_Ton: 1000000 },
  { id: 'SP510', Ma_Hang: 'HD-INS-N', Ten_Biet_Duoc: 'Insulin Nhanh HD', Hoat_Chat: 'Insulin người tác dụng nhanh, ngắn', Ham_Luong: '400 IU/10ml', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Lọ', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 45000, SL_Ton: 1000000 },
  { id: 'SP511', Ma_Hang: 'HD-INS-T', Ten_Biet_Duoc: 'Insulin Trung Bình HD', Hoat_Chat: 'Insulin người tác dụng trung bình, trung gian', Ham_Luong: '400 IU/10ml', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Lọ', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 45000, SL_Ton: 1000000 },
  { id: 'SP512', Ma_Hang: 'HD-ETH', Ten_Biet_Duoc: 'Ethyl ester acid béo iod hóa HD', Hoat_Chat: 'Ethyl ester của acid béo iod hóa trong dầu hạt thuốc phiện', Ham_Luong: '4,8g Iod/ 10ml', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Lọ', Nhom_Ky_Thuat: '1', Gia_Niem_Yet: 3100000, SL_Ton: 1000000 },

  // --- NHÓM MOCK CHO GÓI IB2600175651 (~50% KHỚP - 25/50 SP) ---
  { id: 'SP601', Ma_Hang: 'HD-ACA', Ten_Biet_Duoc: 'Acalabrutinib HD', Hoat_Chat: 'Acalabrutinib', Ham_Luong: 'NA', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nang', Nhom_Ky_Thuat: '1', Gia_Niem_Yet: 1000000, SL_Ton: 1000000 },
  { id: 'SP602', Ma_Hang: 'HD-ACC', Ten_Biet_Duoc: 'Acetylcystein HD', Hoat_Chat: 'Acetylcystein', Ham_Luong: 'NA', Duong_Dung: 'Uống', Dang_Bao_Che: 'Gói', Nhom_Ky_Thuat: '1', Gia_Niem_Yet: 800, SL_Ton: 1000000 },
  { id: 'SP603', Ma_Hang: 'HD-AMI', Ten_Biet_Duoc: 'Amitriptyline HD', Hoat_Chat: 'Amitriptyline', Ham_Luong: 'NA', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '1', Gia_Niem_Yet: 2000, SL_Ton: 1000000 },
  { id: 'SP604', Ma_Hang: 'HD-JOHN', Ten_Biet_Duoc: 'Cao khô cỏ thánh John HD', Hoat_Chat: 'Cao khô cỏ thánh John (Hyperici herbae extractum siccum)', Ham_Luong: 'NA', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '1', Gia_Niem_Yet: 10000, SL_Ton: 1000000 },
  { id: 'SP605', Ma_Hang: 'HD-CLA', Ten_Biet_Duoc: 'Cladribin HD', Hoat_Chat: 'Cladribin', Ham_Luong: 'NA', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '1', Gia_Niem_Yet: 23000000, SL_Ton: 1000000 },
  { id: 'SP606', Ma_Hang: 'HD-DEN', Ten_Biet_Duoc: 'Denosumab HD', Hoat_Chat: 'Denosumab', Ham_Luong: 'NA', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Bút tiêm', Nhom_Ky_Thuat: '1', Gia_Niem_Yet: 3100000, SL_Ton: 1000000 },
  { id: 'SP607', Ma_Hang: 'HD-DIA-Z', Ten_Biet_Duoc: 'Diazepam HD', Hoat_Chat: 'Diazepam', Ham_Luong: 'NA', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '1', Gia_Niem_Yet: 950, SL_Ton: 1000000 },
  { id: 'SP608', Ma_Hang: 'HD-DOX', Ten_Biet_Duoc: 'Doxycyclin HD', Hoat_Chat: 'Doxycyclin', Ham_Luong: 'NA', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nang', Nhom_Ky_Thuat: '1', Gia_Niem_Yet: 750, SL_Ton: 1000000 },
  { id: 'SP609', Ma_Hang: 'HD-DYD', Ten_Biet_Duoc: 'Dydrogesterone HD', Hoat_Chat: 'Dydrogesterone', Ham_Luong: 'NA', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '1', Gia_Niem_Yet: 4400, SL_Ton: 1000000 },
  { id: 'SP610', Ma_Hang: 'HD-ERI', Ten_Biet_Duoc: 'Eribulin HD', Hoat_Chat: 'Eribulin mesylate', Ham_Luong: 'NA', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Lọ', Nhom_Ky_Thuat: '1', Gia_Niem_Yet: 2000000, SL_Ton: 1000000 },
  { id: 'SP611', Ma_Hang: 'HD-GLU', Ten_Biet_Duoc: 'Glucosamin + Chondroitin HD', Hoat_Chat: 'Glucosamin sulfat + Chondroitin sulfat', Ham_Luong: 'NA', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nang', Nhom_Ky_Thuat: '1', Gia_Niem_Yet: 5500, SL_Ton: 1000000 },
  { id: 'SP612', Ma_Hang: 'HD-IMI', Ten_Biet_Duoc: 'Imidafenacin HD', Hoat_Chat: 'Imidafenacin', Ham_Luong: 'NA', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 5100, SL_Ton: 1000000 },
  { id: 'SP613', Ma_Hang: 'HD-INC', Ten_Biet_Duoc: 'Inclisiran HD', Hoat_Chat: 'Inclisiran', Ham_Luong: 'NA', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Bút tiêm', Nhom_Ky_Thuat: '1', Gia_Niem_Yet: 19000000, SL_Ton: 1000000 },
  { id: 'SP614', Ma_Hang: 'HD-NIR', Ten_Biet_Duoc: 'Nirsevimab HD', Hoat_Chat: 'Kháng thể đơn dòng Nirsevimab', Ham_Luong: 'NA', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Bơm tiêm', Nhom_Ky_Thuat: '1', Gia_Niem_Yet: 5600000, SL_Ton: 1000000 },
  { id: 'SP615', Ma_Hang: 'HD-LAM', Ten_Biet_Duoc: 'Lamotrigine HD', Hoat_Chat: 'Lamotrigine', Ham_Luong: 'NA', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '1', Gia_Niem_Yet: 2450, SL_Ton: 1000000 },
  { id: 'SP616', Ma_Hang: 'HD-LYO', Ten_Biet_Duoc: 'Lyophilized E.coli HD', Hoat_Chat: 'Lyophilized eschrichia coli bacterial lysate', Ham_Luong: 'NA', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nang', Nhom_Ky_Thuat: '1', Gia_Niem_Yet: 7500, SL_Ton: 1000000 },
  { id: 'SP617', Ma_Hang: 'HD-MET', Ten_Biet_Duoc: 'Methyldopa HD', Hoat_Chat: 'Methyldopa', Ham_Luong: 'NA', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '1', Gia_Niem_Yet: 1200, SL_Ton: 1000000 },
  { id: 'SP618', Ma_Hang: 'HD-MEP', Ten_Biet_Duoc: 'Methylprednisolon HD', Hoat_Chat: 'Methylprednisolon (dưới dạng methylprednisolon natri succinat)', Ham_Luong: 'NA', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Lọ', Nhom_Ky_Thuat: '4', Gia_Niem_Yet: 8000, SL_Ton: 1000000 },
  { id: 'SP619', Ma_Hang: 'HD-PEM', Ten_Biet_Duoc: 'Pembrolizumab HD', Hoat_Chat: 'Pembrolizumab', Ham_Luong: 'NA', Duong_Dung: 'Tiêm truyền', Dang_Bao_Che: 'Lọ', Nhom_Ky_Thuat: '5', Gia_Niem_Yet: 9200000, SL_Ton: 1000000 },
  { id: 'SP620', Ma_Hang: 'HD-PER', Ten_Biet_Duoc: 'Perindopril + Bisoprolol HD', Hoat_Chat: 'Perindopril + Bisoprolol', Ham_Luong: 'NA', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '1', Gia_Niem_Yet: 3300, SL_Ton: 1000000 },
];
