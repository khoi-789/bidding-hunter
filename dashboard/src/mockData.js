// ─── Mock data cho Menu Khách hàng & Sản phẩm ───────────────────────────────
// Dữ liệu ảo phục vụ test app. Sau này sẽ được thay bằng data thật từ Firebase

export const MOCK_CUSTOMERS = [
  { id: 'KH001', Ma_KH: 'KH001', Ten_Ben_Vien: 'BV Bạch Mai', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 520000000, Han_Muc_No: 400000000, Ten_Lien_He: 'Nguyễn Văn A', SDT: '0901234567', Thoi_Gian_No: '12 tháng - 5 ngày' },
  { id: 'KH002', Ma_KH: 'KH002', Ten_Ben_Vien: 'BV Việt Đức', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 280000000, Han_Muc_No: 500000000, Ten_Lien_He: 'Trần Thị B', SDT: '0912345678', Thoi_Gian_No: '3 tháng - 12 ngày' },
  { id: 'KH003', Ma_KH: 'KH003', Ten_Ben_Vien: 'BV Chợ Rẫy', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 610000000, Han_Muc_No: 600000000, Ten_Lien_He: 'Lê Văn C', SDT: '0987654321', Thoi_Gian_No: '15 tháng - 20 ngày' },
  { id: 'KH005', Ma_KH: 'KH005', Ten_Ben_Vien: 'Bệnh viện Đại học Y Hà Nội', Phan_Tuyen: 'TUYEN_TW', Du_No_Hien_Tai: 90000000, Han_Muc_No: 300000000, Ten_Lien_He: 'Phạm Minh D', SDT: '0977889900', Thoi_Gian_No: '1 tháng - 5 ngày' },
  { id: 'KH006', Ma_KH: 'KH006', Ten_Ben_Vien: 'Bệnh Viện Đa Khoa Khu Vực Bồng Sơn', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 120000000, Han_Muc_No: 200000000, Ten_Lien_He: 'Vũ Hoàng E', SDT: '0933445566', Thoi_Gian_No: '4 tháng - 10 ngày' },
  { id: 'KH007', Ma_KH: 'KH007', Ten_Ben_Vien: 'Trung tâm Y tế khu vực Lục Yên', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 45000000, Han_Muc_No: 100000000, Ten_Lien_He: 'Đặng Quốc F', SDT: '0944556677', Thoi_Gian_No: '2 tháng - 15 ngày' },
  { id: 'KH008', Ma_KH: 'KH008', Ten_Ben_Vien: 'Trạm Y tế xã Bình Xuyên', Phan_Tuyen: 'TUYEN_XA', Du_No_Hien_Tai: 0, Han_Muc_No: 50000000, Ten_Lien_He: 'Bùi Thị G', SDT: '0955667788', Thoi_Gian_No: '0 ngày' }, 
  { id: 'KH009', Ma_KH: 'KH009', Ten_Ben_Vien: 'BV đa khoa Thanh Liêm', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 310000000, Han_Muc_No: 300000000, Ten_Lien_He: 'Hồ Anh H', SDT: '0966778899', Thoi_Gian_No: '16 tháng - 2 ngày' }, 
  { id: 'KH010', Ma_KH: 'KH010', Ten_Ben_Vien: 'BỆNH VIỆN ĐA KHOA VŨ THƯ', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 0, Han_Muc_No: 150000000, Ten_Lien_He: 'Ngô Minh I', SDT: '0922334455', Thoi_Gian_No: '0 ngày' },
  { id: 'KH011', Ma_KH: 'KH011', Ten_Ben_Vien: 'TRUNG TÂM MẮT TỈNH QUẢNG NGÃI', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 180000000, Han_Muc_No: 500000000, Ten_Lien_He: 'Dương Thành K', SDT: '0911223344', Thoi_Gian_No: '6 tháng - 18 ngày' },
  { id: 'KH012', Ma_KH: 'KH012', Ten_Ben_Vien: 'TRUNG TÂM Y TẾ AN DƯƠNG', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 25000000, Han_Muc_No: 100000000, Ten_Lien_He: 'Lý Kim L', SDT: '0944112233', Thoi_Gian_No: '1 tháng - 12 ngày' },
  { id: 'KH013', Ma_KH: 'KH013', Ten_Ben_Vien: 'BV đa khoa Đông Anh', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 420000000, Han_Muc_No: 400000000, Ten_Lien_He: 'Trịnh Văn M', SDT: '0977441122', Thoi_Gian_No: '11 tháng - 5 ngày' },
  { id: 'KH014', Ma_KH: 'KH014', Ten_Ben_Vien: 'BV Đa khoa Từ Sơn', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 15000000, Han_Muc_No: 150000000, Ten_Lien_He: 'Chu Minh N', SDT: '0988552211', Thoi_Gian_No: '25 ngày' },
  { id: 'KH015', Ma_KH: 'KH015', Ten_Ben_Vien: 'BV Đa khoa Cẩm Phả', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 560000000, Han_Muc_No: 500000000, Ten_Lien_He: 'Đỗ Văn O', SDT: '0999663322', Thoi_Gian_No: '14 tháng - 10 ngày' },
  { id: 'KH016', Ma_KH: 'KH016', Ten_Ben_Vien: 'BV Đa khoa số 2 tỉnh Lào Cai', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 85000000, Han_Muc_No: 200000000, Ten_Lien_He: 'Lương Minh P', SDT: '0900774411', Thoi_Gian_No: '5 tháng - 2 ngày' },
  { id: 'KH017', Ma_KH: 'KH017', Ten_Ben_Vien: 'Trung tâm Y tế Khu vực Văn Chấn', Phan_Tuyen: 'TUYEN_HUYEN', Du_No_Hien_Tai: 0, Han_Muc_No: 120000000, Ten_Lien_He: 'Tô Văn Q', SDT: '0911885522', Thoi_Gian_No: '0 ngày' },
  { id: 'KH018', Ma_KH: 'KH018', Ten_Ben_Vien: 'BV Đa khoa tỉnh Quảng Trị', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 230000000, Han_Muc_No: 300000000, Ten_Lien_He: 'Phan Thị R', SDT: '0922996633', Thoi_Gian_No: '8 tháng - 14 ngày' },
  { id: 'KH019', Ma_KH: 'KH019', Ten_Ben_Vien: 'BV Phục hồi chức năng Thanh Hóa', Phan_Tuyen: 'TUYEN_TINH', Du_No_Hien_Tai: 12000000, Han_Muc_No: 100000000, Ten_Lien_He: 'Khương Văn S', SDT: '0933117744', Thoi_Gian_No: '1 tháng - 3 ngày' },
  { id: 'KH020', Ma_KH: 'KH020', Ten_Ben_Vien: 'Trạm Y tế xã Xuân Lăng', Phan_Tuyen: 'TUYEN_XA', Du_No_Hien_Tai: 0, Han_Muc_No: 30000000, Ten_Lien_He: 'Tạ Minh T', SDT: '0944228855', Thoi_Gian_No: '0 ngày' },
];

export const MOCK_PRODUCTS = [
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
  { id: 'SP001', Ma_Hang: 'HD-AMO', Ten_Biet_Duoc: 'Amoxicillin', Hoat_Chat: 'Amoxicillin', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1800, SL_Ton: 10000000, Gia_Niem_Yet: 450 },
  { id: 'SP008', Ma_Hang: 'HD-PARA', Ten_Biet_Duoc: 'Paracetamol', Hoat_Chat: 'Paracetamol', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 800, SL_Ton: 20000000, Gia_Niem_Yet: 120 },
  { id: 'SP023', Ma_Hang: 'HD-AML', Ten_Biet_Duoc: 'Amlodipine', Hoat_Chat: 'Amlodipine', Ham_Luong: '5mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1200, SL_Ton: 8000000, Gia_Niem_Yet: 250 },
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

export const MOCK_ORDERS = [
  {
    "id": "DH001",
    "Ma_KH": "KH017",
    "Ten_KH": "Trung tâm Y tế Khu vực Văn Chấn",
    "So_Hoa_Don": "HD2001",
    "Ngay_Soan": "2025-01-24",
    "Ngay_Giao": "2025-01-31",
    "Tong_Tien": 27191330,
    "Items": [
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 218,
        "DVT": "Lọ",
        "Don_Gia": 1357,
        "Thanh_Tien": 295826
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 362,
        "DVT": "Chai",
        "Don_Gia": 6974,
        "Thanh_Tien": 2524588
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 42,
        "DVT": "Lọ",
        "Don_Gia": 16874,
        "Thanh_Tien": 708708
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 392,
        "DVT": "Xịt",
        "Don_Gia": 27823,
        "Thanh_Tien": 10906616
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 354,
        "DVT": "Viên",
        "Don_Gia": 527,
        "Thanh_Tien": 186558
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 235,
        "DVT": "Lọ",
        "Don_Gia": 48647,
        "Thanh_Tien": 11432045
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 60,
        "DVT": "Chai",
        "Don_Gia": 1186,
        "Thanh_Tien": 71160
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 430,
        "DVT": "Viên",
        "Don_Gia": 337,
        "Thanh_Tien": 144910
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 489,
        "DVT": "Ống",
        "Don_Gia": 1216,
        "Thanh_Tien": 594624
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 145,
        "DVT": "Ống",
        "Don_Gia": 249,
        "Thanh_Tien": 36105
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 208,
        "DVT": "Ống",
        "Don_Gia": 680,
        "Thanh_Tien": 141440
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 425,
        "DVT": "Viên",
        "Don_Gia": 350,
        "Thanh_Tien": 148750
      }
    ]
  },
  {
    "id": "DH002",
    "Ma_KH": "KH018",
    "Ten_KH": "BV Đa khoa tỉnh Quảng Trị",
    "So_Hoa_Don": "HD2002",
    "Ngay_Soan": "2025-09-23",
    "Ngay_Giao": "2025-09-30",
    "Tong_Tien": 141418850,
    "Items": [
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 447,
        "DVT": "Lọ",
        "Don_Gia": 278539,
        "Thanh_Tien": 124506933
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 186,
        "DVT": "Viên",
        "Don_Gia": 385,
        "Thanh_Tien": 71610
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 148,
        "DVT": "Ống",
        "Don_Gia": 653,
        "Thanh_Tien": 96644
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 496,
        "DVT": "Ống",
        "Don_Gia": 251,
        "Thanh_Tien": 124496
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 189,
        "DVT": "Xịt",
        "Don_Gia": 32681,
        "Thanh_Tien": 6176709
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 139,
        "DVT": "Ống",
        "Don_Gia": 1062,
        "Thanh_Tien": 147618
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 45,
        "DVT": "Ống",
        "Don_Gia": 1068,
        "Thanh_Tien": 48060
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 400,
        "DVT": "Viên",
        "Don_Gia": 1371,
        "Thanh_Tien": 548400
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 82,
        "DVT": "Viên",
        "Don_Gia": 407,
        "Thanh_Tien": 33374
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 251,
        "DVT": "Tuýp",
        "Don_Gia": 38506,
        "Thanh_Tien": 9665006
      }
    ]
  },
  {
    "id": "DH003",
    "Ma_KH": "KH020",
    "Ten_KH": "Trạm Y tế xã Xuân Lăng",
    "So_Hoa_Don": "HD2003",
    "Ngay_Soan": "2025-05-12",
    "Ngay_Giao": "2025-05-14",
    "Tong_Tien": 87219159,
    "Items": [
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 258,
        "DVT": "Lọ",
        "Don_Gia": 275659,
        "Thanh_Tien": 71120022
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 62,
        "DVT": "Chai",
        "Don_Gia": 1007,
        "Thanh_Tien": 62434
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 127,
        "DVT": "Viên",
        "Don_Gia": 12852,
        "Thanh_Tien": 1632204
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 180,
        "DVT": "Ống",
        "Don_Gia": 1009,
        "Thanh_Tien": 181620
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 225,
        "DVT": "Lọ",
        "Don_Gia": 16850,
        "Thanh_Tien": 3791250
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 252,
        "DVT": "Tuýp",
        "Don_Gia": 40626,
        "Thanh_Tien": 10237752
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 177,
        "DVT": "Viên",
        "Don_Gia": 413,
        "Thanh_Tien": 73101
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 347,
        "DVT": "Viên",
        "Don_Gia": 136,
        "Thanh_Tien": 47192
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 126,
        "DVT": "Viên",
        "Don_Gia": 584,
        "Thanh_Tien": 73584
      }
    ]
  },
  {
    "id": "DH004",
    "Ma_KH": "KH018",
    "Ten_KH": "BV Đa khoa tỉnh Quảng Trị",
    "So_Hoa_Don": "HD2004",
    "Ngay_Soan": "2025-12-10",
    "Ngay_Giao": "2025-12-13",
    "Tong_Tien": 20621232,
    "Items": [
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 415,
        "DVT": "Lọ",
        "Don_Gia": 1339,
        "Thanh_Tien": 555685
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 115,
        "DVT": "Chai",
        "Don_Gia": 6880,
        "Thanh_Tien": 791200
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 54,
        "DVT": "Viên",
        "Don_Gia": 529,
        "Thanh_Tien": 28566
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 237,
        "DVT": "Lọ",
        "Don_Gia": 18579,
        "Thanh_Tien": 4403223
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 409,
        "DVT": "Chai",
        "Don_Gia": 1125,
        "Thanh_Tien": 460125
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 340,
        "DVT": "Lọ",
        "Don_Gia": 41235,
        "Thanh_Tien": 14019900
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 245,
        "DVT": "Viên",
        "Don_Gia": 1109,
        "Thanh_Tien": 271705
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 261,
        "DVT": "Viên",
        "Don_Gia": 348,
        "Thanh_Tien": 90828
      }
    ]
  },
  {
    "id": "DH005",
    "Ma_KH": "KH015",
    "Ten_KH": "BV Đa khoa Cẩm Phả",
    "So_Hoa_Don": "HD2005",
    "Ngay_Soan": "2026-03-22",
    "Ngay_Giao": "2026-03-26",
    "Tong_Tien": 1102604905,
    "Items": [
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 274,
        "DVT": "Viên",
        "Don_Gia": 306,
        "Thanh_Tien": 83844
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 179,
        "DVT": "Lọ",
        "Don_Gia": 12292,
        "Thanh_Tien": 2200268
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 442,
        "DVT": "Ống",
        "Don_Gia": 580,
        "Thanh_Tien": 256360
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 95,
        "DVT": "Viên",
        "Don_Gia": 1371,
        "Thanh_Tien": 130245
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 194,
        "DVT": "Lọ",
        "Don_Gia": 1581,
        "Thanh_Tien": 306714
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 121,
        "DVT": "Lọ",
        "Don_Gia": 305737,
        "Thanh_Tien": 36994177
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 173,
        "DVT": "Ống",
        "Don_Gia": 6142389,
        "Thanh_Tien": 1062633297
      }
    ]
  },
  {
    "id": "DH006",
    "Ma_KH": "KH016",
    "Ten_KH": "BV Đa khoa số 2 tỉnh Lào Cai",
    "So_Hoa_Don": "HD2006",
    "Ngay_Soan": "2025-09-04",
    "Ngay_Giao": "2025-09-10",
    "Tong_Tien": 27394138,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 362,
        "DVT": "Viên",
        "Don_Gia": 1916,
        "Thanh_Tien": 693592
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 194,
        "DVT": "Lọ",
        "Don_Gia": 20381,
        "Thanh_Tien": 3953914
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 342,
        "DVT": "Xịt",
        "Don_Gia": 34018,
        "Thanh_Tien": 11634156
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 164,
        "DVT": "Chai",
        "Don_Gia": 1034,
        "Thanh_Tien": 169576
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 243,
        "DVT": "Viên",
        "Don_Gia": 608,
        "Thanh_Tien": 147744
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 492,
        "DVT": "Ống",
        "Don_Gia": 945,
        "Thanh_Tien": 464940
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 101,
        "DVT": "Viên",
        "Don_Gia": 176,
        "Thanh_Tien": 17776
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 169,
        "DVT": "Ống",
        "Don_Gia": 231,
        "Thanh_Tien": 39039
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 120,
        "DVT": "Lọ",
        "Don_Gia": 37984,
        "Thanh_Tien": 4558080
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 305,
        "DVT": "Lọ",
        "Don_Gia": 17031,
        "Thanh_Tien": 5194455
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 63,
        "DVT": "Viên",
        "Don_Gia": 1282,
        "Thanh_Tien": 80766
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 150,
        "DVT": "Viên",
        "Don_Gia": 2934,
        "Thanh_Tien": 440100
      }
    ]
  },
  {
    "id": "DH007",
    "Ma_KH": "KH017",
    "Ten_KH": "Trung tâm Y tế Khu vực Văn Chấn",
    "So_Hoa_Don": "HD2007",
    "Ngay_Soan": "2026-03-31",
    "Ngay_Giao": "2026-04-06",
    "Tong_Tien": 35095894,
    "Items": [
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 132,
        "DVT": "Lọ",
        "Don_Gia": 19057,
        "Thanh_Tien": 2515524
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 199,
        "DVT": "Viên",
        "Don_Gia": 609,
        "Thanh_Tien": 121191
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 388,
        "DVT": "Ống",
        "Don_Gia": 268,
        "Thanh_Tien": 103984
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 87,
        "DVT": "Viên",
        "Don_Gia": 5449,
        "Thanh_Tien": 474063
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 215,
        "DVT": "Viên",
        "Don_Gia": 2031,
        "Thanh_Tien": 436665
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 67,
        "DVT": "Lọ",
        "Don_Gia": 38976,
        "Thanh_Tien": 2611392
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 155,
        "DVT": "Viên",
        "Don_Gia": 199,
        "Thanh_Tien": 30845
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 428,
        "DVT": "Lọ",
        "Don_Gia": 12126,
        "Thanh_Tien": 5189928
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 384,
        "DVT": "Tuýp",
        "Don_Gia": 45552,
        "Thanh_Tien": 17491968
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 385,
        "DVT": "Viên",
        "Don_Gia": 14390,
        "Thanh_Tien": 5540150
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 71,
        "DVT": "Lọ",
        "Don_Gia": 1507,
        "Thanh_Tien": 106997
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 143,
        "DVT": "Viên",
        "Don_Gia": 3309,
        "Thanh_Tien": 473187
      }
    ]
  },
  {
    "id": "DH008",
    "Ma_KH": "KH005",
    "Ten_KH": "Bệnh viện Đại học Y Hà Nội",
    "So_Hoa_Don": "HD2008",
    "Ngay_Soan": "2025-02-12",
    "Ngay_Giao": "2025-02-19",
    "Tong_Tien": 33554451,
    "Items": [
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 115,
        "DVT": "Tuýp",
        "Don_Gia": 48991,
        "Thanh_Tien": 5633965
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 55,
        "DVT": "Viên",
        "Don_Gia": 2772,
        "Thanh_Tien": 152460
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 285,
        "DVT": "Lọ",
        "Don_Gia": 52458,
        "Thanh_Tien": 14950530
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 116,
        "DVT": "Lọ",
        "Don_Gia": 1448,
        "Thanh_Tien": 167968
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 334,
        "DVT": "Lọ",
        "Don_Gia": 17309,
        "Thanh_Tien": 5781206
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 299,
        "DVT": "Lọ",
        "Don_Gia": 20598,
        "Thanh_Tien": 6158802
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 49,
        "DVT": "Lọ",
        "Don_Gia": 14480,
        "Thanh_Tien": 709520
      }
    ]
  },
  {
    "id": "DH009",
    "Ma_KH": "KH016",
    "Ten_KH": "BV Đa khoa số 2 tỉnh Lào Cai",
    "So_Hoa_Don": "HD2009",
    "Ngay_Soan": "2025-05-14",
    "Ngay_Giao": "2025-05-17",
    "Tong_Tien": 129171532,
    "Items": [
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 419,
        "DVT": "Viên",
        "Don_Gia": 1226,
        "Thanh_Tien": 513694
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 364,
        "DVT": "Lọ",
        "Don_Gia": 303838,
        "Thanh_Tien": 110597032
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 53,
        "DVT": "Viên",
        "Don_Gia": 146,
        "Thanh_Tien": 7738
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 173,
        "DVT": "Lọ",
        "Don_Gia": 31170,
        "Thanh_Tien": 5392410
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 27,
        "DVT": "Tuýp",
        "Don_Gia": 41055,
        "Thanh_Tien": 1108485
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 80,
        "DVT": "Viên",
        "Don_Gia": 2884,
        "Thanh_Tien": 230720
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 454,
        "DVT": "Viên",
        "Don_Gia": 1653,
        "Thanh_Tien": 750462
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 405,
        "DVT": "Viên",
        "Don_Gia": 1323,
        "Thanh_Tien": 535815
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 308,
        "DVT": "Lọ",
        "Don_Gia": 12292,
        "Thanh_Tien": 3785936
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 64,
        "DVT": "Xịt",
        "Don_Gia": 34639,
        "Thanh_Tien": 2216896
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 233,
        "DVT": "Chai",
        "Don_Gia": 7174,
        "Thanh_Tien": 1671542
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 286,
        "DVT": "Viên",
        "Don_Gia": 434,
        "Thanh_Tien": 124124
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 263,
        "DVT": "Viên",
        "Don_Gia": 5638,
        "Thanh_Tien": 1482794
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 318,
        "DVT": "Viên",
        "Don_Gia": 888,
        "Thanh_Tien": 282384
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 410,
        "DVT": "Chai",
        "Don_Gia": 1150,
        "Thanh_Tien": 471500
      }
    ]
  },
  {
    "id": "DH010",
    "Ma_KH": "KH012",
    "Ten_KH": "TRUNG TÂM Y TẾ AN DƯƠNG",
    "So_Hoa_Don": "HD2010",
    "Ngay_Soan": "2026-03-13",
    "Ngay_Giao": "2026-03-19",
    "Tong_Tien": 2292093827,
    "Items": [
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 60,
        "DVT": "Tuýp",
        "Don_Gia": 45561,
        "Thanh_Tien": 2733660
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 333,
        "DVT": "Viên",
        "Don_Gia": 199,
        "Thanh_Tien": 66267
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 17,
        "DVT": "Chai",
        "Don_Gia": 1089,
        "Thanh_Tien": 18513
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 87,
        "DVT": "Ống",
        "Don_Gia": 236,
        "Thanh_Tien": 20532
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 469,
        "DVT": "Lọ",
        "Don_Gia": 15131,
        "Thanh_Tien": 7096439
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 318,
        "DVT": "Lọ",
        "Don_Gia": 329814,
        "Thanh_Tien": 104880852
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 178,
        "DVT": "Viên",
        "Don_Gia": 14008,
        "Thanh_Tien": 2493424
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 191,
        "DVT": "Lọ",
        "Don_Gia": 29713,
        "Thanh_Tien": 5675183
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 482,
        "DVT": "Lọ",
        "Don_Gia": 51597,
        "Thanh_Tien": 24869754
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 182,
        "DVT": "Viên",
        "Don_Gia": 323,
        "Thanh_Tien": 58786
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 345,
        "DVT": "Ống",
        "Don_Gia": 6203933,
        "Thanh_Tien": 2140356885
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 496,
        "DVT": "Viên",
        "Don_Gia": 1869,
        "Thanh_Tien": 927024
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 476,
        "DVT": "Viên",
        "Don_Gia": 5973,
        "Thanh_Tien": 2843148
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 92,
        "DVT": "Ống",
        "Don_Gia": 580,
        "Thanh_Tien": 53360
      }
    ]
  },
  {
    "id": "DH011",
    "Ma_KH": "KH020",
    "Ten_KH": "Trạm Y tế xã Xuân Lăng",
    "So_Hoa_Don": "HD2011",
    "Ngay_Soan": "2026-03-07",
    "Ngay_Giao": "2026-03-11",
    "Tong_Tien": 1117034921,
    "Items": [
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 335,
        "DVT": "Viên",
        "Don_Gia": 292,
        "Thanh_Tien": 97820
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 159,
        "DVT": "Ống",
        "Don_Gia": 6831493,
        "Thanh_Tien": 1086207387
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 205,
        "DVT": "Lọ",
        "Don_Gia": 49348,
        "Thanh_Tien": 10116340
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 40,
        "DVT": "Ống",
        "Don_Gia": 1054,
        "Thanh_Tien": 42160
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 105,
        "DVT": "Viên",
        "Don_Gia": 395,
        "Thanh_Tien": 41475
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 103,
        "DVT": "Xịt",
        "Don_Gia": 31655,
        "Thanh_Tien": 3260465
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 474,
        "DVT": "Ống",
        "Don_Gia": 652,
        "Thanh_Tien": 309048
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 233,
        "DVT": "Viên",
        "Don_Gia": 13493,
        "Thanh_Tien": 3143869
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 427,
        "DVT": "Viên",
        "Don_Gia": 275,
        "Thanh_Tien": 117425
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 33,
        "DVT": "Viên",
        "Don_Gia": 360,
        "Thanh_Tien": 11880
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 16,
        "DVT": "Lọ",
        "Don_Gia": 34718,
        "Thanh_Tien": 555488
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 313,
        "DVT": "Lọ",
        "Don_Gia": 41543,
        "Thanh_Tien": 13002959
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 197,
        "DVT": "Viên",
        "Don_Gia": 139,
        "Thanh_Tien": 27383
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 86,
        "DVT": "Ống",
        "Don_Gia": 1177,
        "Thanh_Tien": 101222
      }
    ]
  },
  {
    "id": "DH012",
    "Ma_KH": "KH020",
    "Ten_KH": "Trạm Y tế xã Xuân Lăng",
    "So_Hoa_Don": "HD2012",
    "Ngay_Soan": "2025-08-07",
    "Ngay_Giao": "2025-08-14",
    "Tong_Tien": 19483872,
    "Items": [
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 376,
        "DVT": "Xịt",
        "Don_Gia": 32927,
        "Thanh_Tien": 12380552
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 332,
        "DVT": "Viên",
        "Don_Gia": 15000,
        "Thanh_Tien": 4980000
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 41,
        "DVT": "Viên",
        "Don_Gia": 385,
        "Thanh_Tien": 15785
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 181,
        "DVT": "Viên",
        "Don_Gia": 860,
        "Thanh_Tien": 155660
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 235,
        "DVT": "Viên",
        "Don_Gia": 614,
        "Thanh_Tien": 144290
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 344,
        "DVT": "Viên",
        "Don_Gia": 392,
        "Thanh_Tien": 134848
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 293,
        "DVT": "Viên",
        "Don_Gia": 5709,
        "Thanh_Tien": 1672737
      }
    ]
  },
  {
    "id": "DH013",
    "Ma_KH": "KH003",
    "Ten_KH": "BV Chợ Rẫy",
    "So_Hoa_Don": "HD2013",
    "Ngay_Soan": "2025-08-16",
    "Ngay_Giao": "2025-08-18",
    "Tong_Tien": 22540751,
    "Items": [
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 136,
        "DVT": "Lọ",
        "Don_Gia": 51641,
        "Thanh_Tien": 7023176
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 92,
        "DVT": "Tuýp",
        "Don_Gia": 45582,
        "Thanh_Tien": 4193544
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 40,
        "DVT": "Lọ",
        "Don_Gia": 17964,
        "Thanh_Tien": 718560
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 415,
        "DVT": "Viên",
        "Don_Gia": 410,
        "Thanh_Tien": 170150
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 497,
        "DVT": "Ống",
        "Don_Gia": 1099,
        "Thanh_Tien": 546203
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 336,
        "DVT": "Viên",
        "Don_Gia": 138,
        "Thanh_Tien": 46368
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 250,
        "DVT": "Lọ",
        "Don_Gia": 39371,
        "Thanh_Tien": 9842750
      }
    ]
  },
  {
    "id": "DH014",
    "Ma_KH": "KH015",
    "Ten_KH": "BV Đa khoa Cẩm Phả",
    "So_Hoa_Don": "HD2014",
    "Ngay_Soan": "2026-03-07",
    "Ngay_Giao": "2026-03-11",
    "Tong_Tien": 14875724,
    "Items": [
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 201,
        "DVT": "Lọ",
        "Don_Gia": 43830,
        "Thanh_Tien": 8809830
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 374,
        "DVT": "Ống",
        "Don_Gia": 269,
        "Thanh_Tien": 100606
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 183,
        "DVT": "Lọ",
        "Don_Gia": 1587,
        "Thanh_Tien": 290421
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 76,
        "DVT": "Lọ",
        "Don_Gia": 55186,
        "Thanh_Tien": 4194136
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 307,
        "DVT": "Viên",
        "Don_Gia": 727,
        "Thanh_Tien": 223189
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 440,
        "DVT": "Viên",
        "Don_Gia": 1381,
        "Thanh_Tien": 607640
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 142,
        "DVT": "Ống",
        "Don_Gia": 647,
        "Thanh_Tien": 91874
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 379,
        "DVT": "Viên",
        "Don_Gia": 465,
        "Thanh_Tien": 176235
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 171,
        "DVT": "Viên",
        "Don_Gia": 387,
        "Thanh_Tien": 66177
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 112,
        "DVT": "Viên",
        "Don_Gia": 2818,
        "Thanh_Tien": 315616
      }
    ]
  },
  {
    "id": "DH015",
    "Ma_KH": "KH005",
    "Ten_KH": "Bệnh viện Đại học Y Hà Nội",
    "So_Hoa_Don": "HD2015",
    "Ngay_Soan": "2024-12-29",
    "Ngay_Giao": "2025-01-02",
    "Tong_Tien": 38453666,
    "Items": [
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 40,
        "DVT": "Chai",
        "Don_Gia": 1131,
        "Thanh_Tien": 45240
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 36,
        "DVT": "Ống",
        "Don_Gia": 570,
        "Thanh_Tien": 20520
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 258,
        "DVT": "Lọ",
        "Don_Gia": 17836,
        "Thanh_Tien": 4601688
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 79,
        "DVT": "Lọ",
        "Don_Gia": 12183,
        "Thanh_Tien": 962457
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 90,
        "DVT": "Lọ",
        "Don_Gia": 325890,
        "Thanh_Tien": 29330100
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 249,
        "DVT": "Lọ",
        "Don_Gia": 1320,
        "Thanh_Tien": 328680
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 138,
        "DVT": "Ống",
        "Don_Gia": 1146,
        "Thanh_Tien": 158148
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 351,
        "DVT": "Chai",
        "Don_Gia": 7434,
        "Thanh_Tien": 2609334
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 157,
        "DVT": "Viên",
        "Don_Gia": 297,
        "Thanh_Tien": 46629
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 403,
        "DVT": "Viên",
        "Don_Gia": 788,
        "Thanh_Tien": 317564
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 183,
        "DVT": "Viên",
        "Don_Gia": 182,
        "Thanh_Tien": 33306
      }
    ]
  },
  {
    "id": "DH016",
    "Ma_KH": "KH006",
    "Ten_KH": "Bệnh Viện Đa Khoa Khu Vực Bồng Sơn",
    "So_Hoa_Don": "HD2016",
    "Ngay_Soan": "2025-07-02",
    "Ngay_Giao": "2025-07-09",
    "Tong_Tien": 177675133,
    "Items": [
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 254,
        "DVT": "Tuýp",
        "Don_Gia": 45622,
        "Thanh_Tien": 11587988
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 225,
        "DVT": "Viên",
        "Don_Gia": 628,
        "Thanh_Tien": 141300
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 86,
        "DVT": "Viên",
        "Don_Gia": 453,
        "Thanh_Tien": 38958
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 280,
        "DVT": "Ống",
        "Don_Gia": 1026,
        "Thanh_Tien": 287280
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 312,
        "DVT": "Lọ",
        "Don_Gia": 51550,
        "Thanh_Tien": 16083600
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 71,
        "DVT": "Ống",
        "Don_Gia": 1020,
        "Thanh_Tien": 72420
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 193,
        "DVT": "Ống",
        "Don_Gia": 593,
        "Thanh_Tien": 114449
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 131,
        "DVT": "Viên",
        "Don_Gia": 312,
        "Thanh_Tien": 40872
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 24,
        "DVT": "Ống",
        "Don_Gia": 6171155,
        "Thanh_Tien": 148107720
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 335,
        "DVT": "Viên",
        "Don_Gia": 139,
        "Thanh_Tien": 46565
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 38,
        "DVT": "Viên",
        "Don_Gia": 1777,
        "Thanh_Tien": 67526
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 57,
        "DVT": "Viên",
        "Don_Gia": 14843,
        "Thanh_Tien": 846051
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 318,
        "DVT": "Ống",
        "Don_Gia": 274,
        "Thanh_Tien": 87132
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 136,
        "DVT": "Viên",
        "Don_Gia": 1127,
        "Thanh_Tien": 153272
      }
    ]
  },
  {
    "id": "DH017",
    "Ma_KH": "KH011",
    "Ten_KH": "TRUNG TÂM MẮT TỈNH QUẢNG NGÃI",
    "So_Hoa_Don": "HD2017",
    "Ngay_Soan": "2025-04-08",
    "Ngay_Giao": "2025-04-11",
    "Tong_Tien": 243156784,
    "Items": [
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 39,
        "DVT": "Lọ",
        "Don_Gia": 1364,
        "Thanh_Tien": 53196
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 370,
        "DVT": "Viên",
        "Don_Gia": 2043,
        "Thanh_Tien": 755910
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 31,
        "DVT": "Ống",
        "Don_Gia": 6977847,
        "Thanh_Tien": 216313257
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 488,
        "DVT": "Ống",
        "Don_Gia": 579,
        "Thanh_Tien": 282552
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 60,
        "DVT": "Lọ",
        "Don_Gia": 55077,
        "Thanh_Tien": 3304620
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 306,
        "DVT": "Lọ",
        "Don_Gia": 17962,
        "Thanh_Tien": 5496372
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 302,
        "DVT": "Viên",
        "Don_Gia": 1332,
        "Thanh_Tien": 402264
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 450,
        "DVT": "Lọ",
        "Don_Gia": 29963,
        "Thanh_Tien": 13483350
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 51,
        "DVT": "Tuýp",
        "Don_Gia": 47759,
        "Thanh_Tien": 2435709
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 73,
        "DVT": "Chai",
        "Don_Gia": 8098,
        "Thanh_Tien": 591154
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 200,
        "DVT": "Viên",
        "Don_Gia": 192,
        "Thanh_Tien": 38400
      }
    ]
  },
  {
    "id": "DH018",
    "Ma_KH": "KH001",
    "Ten_KH": "BV Bạch Mai",
    "So_Hoa_Don": "HD2018",
    "Ngay_Soan": "2026-03-30",
    "Ngay_Giao": "2026-04-03",
    "Tong_Tien": 134454884,
    "Items": [
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 230,
        "DVT": "Lọ",
        "Don_Gia": 14595,
        "Thanh_Tien": 3356850
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 451,
        "DVT": "Ống",
        "Don_Gia": 1194,
        "Thanh_Tien": 538494
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 465,
        "DVT": "Lọ",
        "Don_Gia": 278796,
        "Thanh_Tien": 129640140
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 83,
        "DVT": "Viên",
        "Don_Gia": 1140,
        "Thanh_Tien": 94620
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 380,
        "DVT": "Viên",
        "Don_Gia": 1677,
        "Thanh_Tien": 637260
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 320,
        "DVT": "Viên",
        "Don_Gia": 586,
        "Thanh_Tien": 187520
      }
    ]
  },
  {
    "id": "DH019",
    "Ma_KH": "KH008",
    "Ten_KH": "Trạm Y tế xã Bình Xuyên",
    "So_Hoa_Don": "HD2019",
    "Ngay_Soan": "2025-12-21",
    "Ngay_Giao": "2025-12-28",
    "Tong_Tien": 8424617,
    "Items": [
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 173,
        "DVT": "Ống",
        "Don_Gia": 670,
        "Thanh_Tien": 115910
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 123,
        "DVT": "Xịt",
        "Don_Gia": 34801,
        "Thanh_Tien": 4280523
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 494,
        "DVT": "Chai",
        "Don_Gia": 1178,
        "Thanh_Tien": 581932
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 206,
        "DVT": "Lọ",
        "Don_Gia": 12161,
        "Thanh_Tien": 2505166
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 16,
        "DVT": "Tuýp",
        "Don_Gia": 46908,
        "Thanh_Tien": 750528
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 158,
        "DVT": "Viên",
        "Don_Gia": 144,
        "Thanh_Tien": 22752
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 92,
        "DVT": "Viên",
        "Don_Gia": 281,
        "Thanh_Tien": 25852
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 54,
        "DVT": "Lọ",
        "Don_Gia": 1673,
        "Thanh_Tien": 90342
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 276,
        "DVT": "Viên",
        "Don_Gia": 187,
        "Thanh_Tien": 51612
      }
    ]
  },
  {
    "id": "DH020",
    "Ma_KH": "KH005",
    "Ten_KH": "Bệnh viện Đại học Y Hà Nội",
    "So_Hoa_Don": "HD2020",
    "Ngay_Soan": "2025-03-26",
    "Ngay_Giao": "2025-03-30",
    "Tong_Tien": 15107321,
    "Items": [
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 106,
        "DVT": "Ống",
        "Don_Gia": 916,
        "Thanh_Tien": 97096
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 479,
        "DVT": "Viên",
        "Don_Gia": 468,
        "Thanh_Tien": 224172
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 396,
        "DVT": "Viên",
        "Don_Gia": 1550,
        "Thanh_Tien": 613800
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 372,
        "DVT": "Xịt",
        "Don_Gia": 33079,
        "Thanh_Tien": 12305388
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 373,
        "DVT": "Viên",
        "Don_Gia": 5005,
        "Thanh_Tien": 1866865
      }
    ]
  },
  {
    "id": "DH021",
    "Ma_KH": "KH003",
    "Ten_KH": "BV Chợ Rẫy",
    "So_Hoa_Don": "HD2021",
    "Ngay_Soan": "2025-09-18",
    "Ngay_Giao": "2025-09-22",
    "Tong_Tien": 66350123,
    "Items": [
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 317,
        "DVT": "Viên",
        "Don_Gia": 411,
        "Thanh_Tien": 130287
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 83,
        "DVT": "Lọ",
        "Don_Gia": 35185,
        "Thanh_Tien": 2920355
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 472,
        "DVT": "Lọ",
        "Don_Gia": 46627,
        "Thanh_Tien": 22007944
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 484,
        "DVT": "Viên",
        "Don_Gia": 3269,
        "Thanh_Tien": 1582196
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 183,
        "DVT": "Lọ",
        "Don_Gia": 15162,
        "Thanh_Tien": 2774646
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 435,
        "DVT": "Xịt",
        "Don_Gia": 32096,
        "Thanh_Tien": 13961760
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 241,
        "DVT": "Viên",
        "Don_Gia": 336,
        "Thanh_Tien": 80976
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 166,
        "DVT": "Viên",
        "Don_Gia": 13842,
        "Thanh_Tien": 2297772
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 87,
        "DVT": "Viên",
        "Don_Gia": 895,
        "Thanh_Tien": 77865
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 389,
        "DVT": "Tuýp",
        "Don_Gia": 44837,
        "Thanh_Tien": 17441593
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 158,
        "DVT": "Ống",
        "Don_Gia": 231,
        "Thanh_Tien": 36498
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 137,
        "DVT": "Viên",
        "Don_Gia": 1669,
        "Thanh_Tien": 228653
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 58,
        "DVT": "Lọ",
        "Don_Gia": 48441,
        "Thanh_Tien": 2809578
      }
    ]
  },
  {
    "id": "DH022",
    "Ma_KH": "KH008",
    "Ten_KH": "Trạm Y tế xã Bình Xuyên",
    "So_Hoa_Don": "HD2022",
    "Ngay_Soan": "2025-04-27",
    "Ngay_Giao": "2025-04-30",
    "Tong_Tien": 28128314,
    "Items": [
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 384,
        "DVT": "Lọ",
        "Don_Gia": 28994,
        "Thanh_Tien": 11133696
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 212,
        "DVT": "Viên",
        "Don_Gia": 383,
        "Thanh_Tien": 81196
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 146,
        "DVT": "Viên",
        "Don_Gia": 284,
        "Thanh_Tien": 41464
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 206,
        "DVT": "Lọ",
        "Don_Gia": 17270,
        "Thanh_Tien": 3557620
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 355,
        "DVT": "Lọ",
        "Don_Gia": 14532,
        "Thanh_Tien": 5158860
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 344,
        "DVT": "Viên",
        "Don_Gia": 784,
        "Thanh_Tien": 269696
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 226,
        "DVT": "Xịt",
        "Don_Gia": 31682,
        "Thanh_Tien": 7160132
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 280,
        "DVT": "Viên",
        "Don_Gia": 489,
        "Thanh_Tien": 136920
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 347,
        "DVT": "Ống",
        "Don_Gia": 1257,
        "Thanh_Tien": 436179
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 259,
        "DVT": "Viên",
        "Don_Gia": 589,
        "Thanh_Tien": 152551
      }
    ]
  },
  {
    "id": "DH023",
    "Ma_KH": "KH020",
    "Ten_KH": "Trạm Y tế xã Xuân Lăng",
    "So_Hoa_Don": "HD2023",
    "Ngay_Soan": "2025-09-04",
    "Ngay_Giao": "2025-09-10",
    "Tong_Tien": 171742304,
    "Items": [
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 198,
        "DVT": "Lọ",
        "Don_Gia": 17238,
        "Thanh_Tien": 3413124
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 11,
        "DVT": "Xịt",
        "Don_Gia": 32780,
        "Thanh_Tien": 360580
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 406,
        "DVT": "Lọ",
        "Don_Gia": 334515,
        "Thanh_Tien": 135813090
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 91,
        "DVT": "Viên",
        "Don_Gia": 1800,
        "Thanh_Tien": 163800
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 309,
        "DVT": "Lọ",
        "Don_Gia": 14993,
        "Thanh_Tien": 4632837
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 264,
        "DVT": "Ống",
        "Don_Gia": 1037,
        "Thanh_Tien": 273768
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 379,
        "DVT": "Tuýp",
        "Don_Gia": 48516,
        "Thanh_Tien": 18387564
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 202,
        "DVT": "Lọ",
        "Don_Gia": 42700,
        "Thanh_Tien": 8625400
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 417,
        "DVT": "Viên",
        "Don_Gia": 173,
        "Thanh_Tien": 72141
      }
    ]
  },
  {
    "id": "DH024",
    "Ma_KH": "KH005",
    "Ten_KH": "Bệnh viện Đại học Y Hà Nội",
    "So_Hoa_Don": "HD2024",
    "Ngay_Soan": "2025-06-04",
    "Ngay_Giao": "2025-06-11",
    "Tong_Tien": 620596741,
    "Items": [
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 341,
        "DVT": "Viên",
        "Don_Gia": 1364,
        "Thanh_Tien": 465124
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 238,
        "DVT": "Lọ",
        "Don_Gia": 1410,
        "Thanh_Tien": 335580
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 84,
        "DVT": "Ống",
        "Don_Gia": 6418527,
        "Thanh_Tien": 539156268
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 263,
        "DVT": "Ống",
        "Don_Gia": 1129,
        "Thanh_Tien": 296927
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 369,
        "DVT": "Viên",
        "Don_Gia": 420,
        "Thanh_Tien": 154980
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 16,
        "DVT": "Chai",
        "Don_Gia": 6605,
        "Thanh_Tien": 105680
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 454,
        "DVT": "Ống",
        "Don_Gia": 677,
        "Thanh_Tien": 307358
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 135,
        "DVT": "Viên",
        "Don_Gia": 1853,
        "Thanh_Tien": 250155
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 319,
        "DVT": "Ống",
        "Don_Gia": 883,
        "Thanh_Tien": 281677
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 274,
        "DVT": "Lọ",
        "Don_Gia": 289208,
        "Thanh_Tien": 79242992
      }
    ]
  },
  {
    "id": "DH025",
    "Ma_KH": "KH016",
    "Ten_KH": "BV Đa khoa số 2 tỉnh Lào Cai",
    "So_Hoa_Don": "HD2025",
    "Ngay_Soan": "2025-03-29",
    "Ngay_Giao": "2025-04-05",
    "Tong_Tien": 25391287,
    "Items": [
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 174,
        "DVT": "Viên",
        "Don_Gia": 417,
        "Thanh_Tien": 72558
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 197,
        "DVT": "Lọ",
        "Don_Gia": 20923,
        "Thanh_Tien": 4121831
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 329,
        "DVT": "Lọ",
        "Don_Gia": 30283,
        "Thanh_Tien": 9963107
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 446,
        "DVT": "Viên",
        "Don_Gia": 749,
        "Thanh_Tien": 334054
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 33,
        "DVT": "Viên",
        "Don_Gia": 1387,
        "Thanh_Tien": 45771
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 420,
        "DVT": "Viên",
        "Don_Gia": 143,
        "Thanh_Tien": 60060
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 238,
        "DVT": "Ống",
        "Don_Gia": 270,
        "Thanh_Tien": 64260
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 247,
        "DVT": "Viên",
        "Don_Gia": 1569,
        "Thanh_Tien": 387543
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 241,
        "DVT": "Viên",
        "Don_Gia": 1934,
        "Thanh_Tien": 466094
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 269,
        "DVT": "Viên",
        "Don_Gia": 5067,
        "Thanh_Tien": 1363023
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 269,
        "DVT": "Viên",
        "Don_Gia": 609,
        "Thanh_Tien": 163821
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 64,
        "DVT": "Lọ",
        "Don_Gia": 55042,
        "Thanh_Tien": 3522688
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 221,
        "DVT": "Chai",
        "Don_Gia": 6862,
        "Thanh_Tien": 1516502
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 225,
        "DVT": "Lọ",
        "Don_Gia": 14711,
        "Thanh_Tien": 3309975
      }
    ]
  },
  {
    "id": "DH026",
    "Ma_KH": "KH008",
    "Ten_KH": "Trạm Y tế xã Bình Xuyên",
    "So_Hoa_Don": "HD2026",
    "Ngay_Soan": "2025-07-02",
    "Ngay_Giao": "2025-07-05",
    "Tong_Tien": 45930795,
    "Items": [
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 155,
        "DVT": "Xịt",
        "Don_Gia": 27975,
        "Thanh_Tien": 4336125
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 454,
        "DVT": "Lọ",
        "Don_Gia": 16820,
        "Thanh_Tien": 7636280
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 111,
        "DVT": "Viên",
        "Don_Gia": 865,
        "Thanh_Tien": 96015
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 479,
        "DVT": "Lọ",
        "Don_Gia": 48476,
        "Thanh_Tien": 23220004
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 368,
        "DVT": "Viên",
        "Don_Gia": 5368,
        "Thanh_Tien": 1975424
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 292,
        "DVT": "Chai",
        "Don_Gia": 1171,
        "Thanh_Tien": 341932
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 215,
        "DVT": "Lọ",
        "Don_Gia": 38721,
        "Thanh_Tien": 8325015
      }
    ]
  },
  {
    "id": "DH027",
    "Ma_KH": "KH005",
    "Ten_KH": "Bệnh viện Đại học Y Hà Nội",
    "So_Hoa_Don": "HD2027",
    "Ngay_Soan": "2026-03-01",
    "Ngay_Giao": "2026-03-04",
    "Tong_Tien": 1083632,
    "Items": [
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 17,
        "DVT": "Viên",
        "Don_Gia": 175,
        "Thanh_Tien": 2975
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 115,
        "DVT": "Ống",
        "Don_Gia": 980,
        "Thanh_Tien": 112700
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 109,
        "DVT": "Viên",
        "Don_Gia": 427,
        "Thanh_Tien": 46543
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 319,
        "DVT": "Lọ",
        "Don_Gia": 1418,
        "Thanh_Tien": 452342
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 97,
        "DVT": "Viên",
        "Don_Gia": 1879,
        "Thanh_Tien": 182263
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 129,
        "DVT": "Viên",
        "Don_Gia": 629,
        "Thanh_Tien": 81141
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 261,
        "DVT": "Viên",
        "Don_Gia": 788,
        "Thanh_Tien": 205668
      }
    ]
  },
  {
    "id": "DH028",
    "Ma_KH": "KH017",
    "Ten_KH": "Trung tâm Y tế Khu vực Văn Chấn",
    "So_Hoa_Don": "HD2028",
    "Ngay_Soan": "2025-10-08",
    "Ngay_Giao": "2025-10-15",
    "Tong_Tien": 29827135,
    "Items": [
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 405,
        "DVT": "Chai",
        "Don_Gia": 1087,
        "Thanh_Tien": 440235
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 368,
        "DVT": "Lọ",
        "Don_Gia": 12766,
        "Thanh_Tien": 4697888
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 465,
        "DVT": "Viên",
        "Don_Gia": 394,
        "Thanh_Tien": 183210
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 77,
        "DVT": "Viên",
        "Don_Gia": 5634,
        "Thanh_Tien": 433818
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 31,
        "DVT": "Viên",
        "Don_Gia": 1502,
        "Thanh_Tien": 46562
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 429,
        "DVT": "Viên",
        "Don_Gia": 575,
        "Thanh_Tien": 246675
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 267,
        "DVT": "Lọ",
        "Don_Gia": 14820,
        "Thanh_Tien": 3956940
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 443,
        "DVT": "Tuýp",
        "Don_Gia": 44669,
        "Thanh_Tien": 19788367
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 220,
        "DVT": "Viên",
        "Don_Gia": 152,
        "Thanh_Tien": 33440
      }
    ]
  },
  {
    "id": "DH029",
    "Ma_KH": "KH013",
    "Ten_KH": "BV đa khoa Đông Anh",
    "So_Hoa_Don": "HD2029",
    "Ngay_Soan": "2025-02-24",
    "Ngay_Giao": "2025-02-28",
    "Tong_Tien": 13192567,
    "Items": [
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 103,
        "DVT": "Viên",
        "Don_Gia": 337,
        "Thanh_Tien": 34711
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 87,
        "DVT": "Chai",
        "Don_Gia": 1057,
        "Thanh_Tien": 91959
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 221,
        "DVT": "Lọ",
        "Don_Gia": 16631,
        "Thanh_Tien": 3675451
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 441,
        "DVT": "Viên",
        "Don_Gia": 526,
        "Thanh_Tien": 231966
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 459,
        "DVT": "Lọ",
        "Don_Gia": 1528,
        "Thanh_Tien": 701352
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 118,
        "DVT": "Ống",
        "Don_Gia": 1112,
        "Thanh_Tien": 131216
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 428,
        "DVT": "Viên",
        "Don_Gia": 452,
        "Thanh_Tien": 193456
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 459,
        "DVT": "Lọ",
        "Don_Gia": 14225,
        "Thanh_Tien": 6529275
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 493,
        "DVT": "Viên",
        "Don_Gia": 769,
        "Thanh_Tien": 379117
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 32,
        "DVT": "Viên",
        "Don_Gia": 14330,
        "Thanh_Tien": 458560
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 432,
        "DVT": "Viên",
        "Don_Gia": 1772,
        "Thanh_Tien": 765504
      }
    ]
  },
  {
    "id": "DH030",
    "Ma_KH": "KH014",
    "Ten_KH": "BV Đa khoa Từ Sơn",
    "So_Hoa_Don": "HD2030",
    "Ngay_Soan": "2025-04-27",
    "Ngay_Giao": "2025-05-02",
    "Tong_Tien": 882773709,
    "Items": [
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 357,
        "DVT": "Lọ",
        "Don_Gia": 19224,
        "Thanh_Tien": 6862968
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 345,
        "DVT": "Lọ",
        "Don_Gia": 30716,
        "Thanh_Tien": 10597020
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 232,
        "DVT": "Tuýp",
        "Don_Gia": 43794,
        "Thanh_Tien": 10160208
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 135,
        "DVT": "Ống",
        "Don_Gia": 6273752,
        "Thanh_Tien": 846956520
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 38,
        "DVT": "Viên",
        "Don_Gia": 189,
        "Thanh_Tien": 7182
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 344,
        "DVT": "Ống",
        "Don_Gia": 554,
        "Thanh_Tien": 190576
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 291,
        "DVT": "Viên",
        "Don_Gia": 14730,
        "Thanh_Tien": 4286430
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 113,
        "DVT": "Viên",
        "Don_Gia": 1303,
        "Thanh_Tien": 147239
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 469,
        "DVT": "Chai",
        "Don_Gia": 7221,
        "Thanh_Tien": 3386649
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 355,
        "DVT": "Viên",
        "Don_Gia": 327,
        "Thanh_Tien": 116085
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 238,
        "DVT": "Ống",
        "Don_Gia": 264,
        "Thanh_Tien": 62832
      }
    ]
  },
  {
    "id": "DH031",
    "Ma_KH": "KH014",
    "Ten_KH": "BV Đa khoa Từ Sơn",
    "So_Hoa_Don": "HD2031",
    "Ngay_Soan": "2025-08-21",
    "Ngay_Giao": "2025-08-24",
    "Tong_Tien": 116287974,
    "Items": [
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 179,
        "DVT": "Lọ",
        "Don_Gia": 14197,
        "Thanh_Tien": 2541263
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 40,
        "DVT": "Lọ",
        "Don_Gia": 30036,
        "Thanh_Tien": 1201440
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 78,
        "DVT": "Ống",
        "Don_Gia": 958,
        "Thanh_Tien": 74724
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 149,
        "DVT": "Viên",
        "Don_Gia": 346,
        "Thanh_Tien": 51554
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 99,
        "DVT": "Lọ",
        "Don_Gia": 1426,
        "Thanh_Tien": 141174
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 95,
        "DVT": "Viên",
        "Don_Gia": 774,
        "Thanh_Tien": 73530
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 491,
        "DVT": "Viên",
        "Don_Gia": 3498,
        "Thanh_Tien": 1717518
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 244,
        "DVT": "Viên",
        "Don_Gia": 419,
        "Thanh_Tien": 102236
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 393,
        "DVT": "Lọ",
        "Don_Gia": 273039,
        "Thanh_Tien": 107304327
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 158,
        "DVT": "Lọ",
        "Don_Gia": 16558,
        "Thanh_Tien": 2616164
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 28,
        "DVT": "Lọ",
        "Don_Gia": 16573,
        "Thanh_Tien": 464044
      }
    ]
  },
  {
    "id": "DH032",
    "Ma_KH": "KH010",
    "Ten_KH": "BỆNH VIỆN ĐA KHOA VŨ THƯ",
    "So_Hoa_Don": "HD2032",
    "Ngay_Soan": "2026-03-21",
    "Ngay_Giao": "2026-03-23",
    "Tong_Tien": 784463955,
    "Items": [
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 25,
        "DVT": "Tuýp",
        "Don_Gia": 44097,
        "Thanh_Tien": 1102425
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 110,
        "DVT": "Lọ",
        "Don_Gia": 1579,
        "Thanh_Tien": 173690
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 187,
        "DVT": "Viên",
        "Don_Gia": 282,
        "Thanh_Tien": 52734
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 214,
        "DVT": "Viên",
        "Don_Gia": 299,
        "Thanh_Tien": 63986
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 202,
        "DVT": "Ống",
        "Don_Gia": 258,
        "Thanh_Tien": 52116
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 360,
        "DVT": "Viên",
        "Don_Gia": 1784,
        "Thanh_Tien": 642240
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 235,
        "DVT": "Chai",
        "Don_Gia": 1015,
        "Thanh_Tien": 238525
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 133,
        "DVT": "Ống",
        "Don_Gia": 5532754,
        "Thanh_Tien": 735856282
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 433,
        "DVT": "Viên",
        "Don_Gia": 575,
        "Thanh_Tien": 248975
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 89,
        "DVT": "Viên",
        "Don_Gia": 5333,
        "Thanh_Tien": 474637
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 223,
        "DVT": "Viên",
        "Don_Gia": 413,
        "Thanh_Tien": 92099
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 165,
        "DVT": "Lọ",
        "Don_Gia": 266994,
        "Thanh_Tien": 44054010
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 434,
        "DVT": "Viên",
        "Don_Gia": 3254,
        "Thanh_Tien": 1412236
      }
    ]
  },
  {
    "id": "DH033",
    "Ma_KH": "KH020",
    "Ten_KH": "Trạm Y tế xã Xuân Lăng",
    "So_Hoa_Don": "HD2033",
    "Ngay_Soan": "2026-04-17",
    "Ngay_Giao": "2026-04-24",
    "Tong_Tien": 29023339,
    "Items": [
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 378,
        "DVT": "Viên",
        "Don_Gia": 164,
        "Thanh_Tien": 61992
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 282,
        "DVT": "Viên",
        "Don_Gia": 3204,
        "Thanh_Tien": 903528
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 203,
        "DVT": "Lọ",
        "Don_Gia": 32630,
        "Thanh_Tien": 6623890
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 399,
        "DVT": "Lọ",
        "Don_Gia": 19633,
        "Thanh_Tien": 7833567
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 248,
        "DVT": "Lọ",
        "Don_Gia": 14108,
        "Thanh_Tien": 3498784
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 217,
        "DVT": "Lọ",
        "Don_Gia": 46162,
        "Thanh_Tien": 10017154
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 244,
        "DVT": "Viên",
        "Don_Gia": 346,
        "Thanh_Tien": 84424
      }
    ]
  },
  {
    "id": "DH034",
    "Ma_KH": "KH008",
    "Ten_KH": "Trạm Y tế xã Bình Xuyên",
    "So_Hoa_Don": "HD2034",
    "Ngay_Soan": "2025-09-09",
    "Ngay_Giao": "2025-09-15",
    "Tong_Tien": 178702964,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 491,
        "DVT": "Ống",
        "Don_Gia": 1056,
        "Thanh_Tien": 518496
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 40,
        "DVT": "Lọ",
        "Don_Gia": 1446,
        "Thanh_Tien": 57840
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 280,
        "DVT": "Tuýp",
        "Don_Gia": 47375,
        "Thanh_Tien": 13265000
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 223,
        "DVT": "Viên",
        "Don_Gia": 184,
        "Thanh_Tien": 41032
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 494,
        "DVT": "Viên",
        "Don_Gia": 1216,
        "Thanh_Tien": 600704
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 387,
        "DVT": "Ống",
        "Don_Gia": 685,
        "Thanh_Tien": 265095
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 471,
        "DVT": "Lọ",
        "Don_Gia": 320233,
        "Thanh_Tien": 150829743
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 64,
        "DVT": "Lọ",
        "Don_Gia": 52536,
        "Thanh_Tien": 3362304
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 206,
        "DVT": "Viên",
        "Don_Gia": 161,
        "Thanh_Tien": 33166
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 483,
        "DVT": "Lọ",
        "Don_Gia": 19137,
        "Thanh_Tien": 9243171
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 401,
        "DVT": "Chai",
        "Don_Gia": 1213,
        "Thanh_Tien": 486413
      }
    ]
  },
  {
    "id": "DH035",
    "Ma_KH": "KH010",
    "Ten_KH": "BỆNH VIỆN ĐA KHOA VŨ THƯ",
    "So_Hoa_Don": "HD2035",
    "Ngay_Soan": "2026-01-23",
    "Ngay_Giao": "2026-01-27",
    "Tong_Tien": 154648751,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 311,
        "DVT": "Ống",
        "Don_Gia": 1052,
        "Thanh_Tien": 327172
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 310,
        "DVT": "Lọ",
        "Don_Gia": 33335,
        "Thanh_Tien": 10333850
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 263,
        "DVT": "Lọ",
        "Don_Gia": 54947,
        "Thanh_Tien": 14451061
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 108,
        "DVT": "Tuýp",
        "Don_Gia": 46448,
        "Thanh_Tien": 5016384
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 381,
        "DVT": "Viên",
        "Don_Gia": 419,
        "Thanh_Tien": 159639
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 405,
        "DVT": "Chai",
        "Don_Gia": 7508,
        "Thanh_Tien": 3040740
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 405,
        "DVT": "Lọ",
        "Don_Gia": 273960,
        "Thanh_Tien": 110953800
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 416,
        "DVT": "Ống",
        "Don_Gia": 1104,
        "Thanh_Tien": 459264
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 41,
        "DVT": "Viên",
        "Don_Gia": 2831,
        "Thanh_Tien": 116071
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 133,
        "DVT": "Lọ",
        "Don_Gia": 1634,
        "Thanh_Tien": 217322
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 393,
        "DVT": "Lọ",
        "Don_Gia": 20663,
        "Thanh_Tien": 8120559
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 157,
        "DVT": "Viên",
        "Don_Gia": 5748,
        "Thanh_Tien": 902436
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 331,
        "DVT": "Viên",
        "Don_Gia": 1663,
        "Thanh_Tien": 550453
      }
    ]
  },
  {
    "id": "DH036",
    "Ma_KH": "KH005",
    "Ten_KH": "Bệnh viện Đại học Y Hà Nội",
    "So_Hoa_Don": "HD2036",
    "Ngay_Soan": "2025-07-15",
    "Ngay_Giao": "2025-07-20",
    "Tong_Tien": 21142594,
    "Items": [
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 221,
        "DVT": "Viên",
        "Don_Gia": 5014,
        "Thanh_Tien": 1108094
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 299,
        "DVT": "Tuýp",
        "Don_Gia": 43508,
        "Thanh_Tien": 13008892
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 393,
        "DVT": "Viên",
        "Don_Gia": 312,
        "Thanh_Tien": 122616
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 170,
        "DVT": "Viên",
        "Don_Gia": 189,
        "Thanh_Tien": 32130
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 55,
        "DVT": "Viên",
        "Don_Gia": 1224,
        "Thanh_Tien": 67320
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 499,
        "DVT": "Lọ",
        "Don_Gia": 13376,
        "Thanh_Tien": 6674624
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 146,
        "DVT": "Ống",
        "Don_Gia": 883,
        "Thanh_Tien": 128918
      }
    ]
  },
  {
    "id": "DH037",
    "Ma_KH": "KH018",
    "Ten_KH": "BV Đa khoa tỉnh Quảng Trị",
    "So_Hoa_Don": "HD2037",
    "Ngay_Soan": "2025-11-25",
    "Ngay_Giao": "2025-11-27",
    "Tong_Tien": 2732344973,
    "Items": [
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 437,
        "DVT": "Viên",
        "Don_Gia": 318,
        "Thanh_Tien": 138966
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 490,
        "DVT": "Viên",
        "Don_Gia": 1512,
        "Thanh_Tien": 740880
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 401,
        "DVT": "Viên",
        "Don_Gia": 13212,
        "Thanh_Tien": 5298012
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 256,
        "DVT": "Ống",
        "Don_Gia": 1065,
        "Thanh_Tien": 272640
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 40,
        "DVT": "Lọ",
        "Don_Gia": 45386,
        "Thanh_Tien": 1815440
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 246,
        "DVT": "Ống",
        "Don_Gia": 1193,
        "Thanh_Tien": 293478
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 216,
        "DVT": "Viên",
        "Don_Gia": 1834,
        "Thanh_Tien": 396144
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 70,
        "DVT": "Viên",
        "Don_Gia": 196,
        "Thanh_Tien": 13720
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 424,
        "DVT": "Ống",
        "Don_Gia": 6422948,
        "Thanh_Tien": 2723329952
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 22,
        "DVT": "Lọ",
        "Don_Gia": 1443,
        "Thanh_Tien": 31746
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 45,
        "DVT": "Viên",
        "Don_Gia": 311,
        "Thanh_Tien": 13995
      }
    ]
  },
  {
    "id": "DH038",
    "Ma_KH": "KH010",
    "Ten_KH": "BỆNH VIỆN ĐA KHOA VŨ THƯ",
    "So_Hoa_Don": "HD2038",
    "Ngay_Soan": "2025-03-21",
    "Ngay_Giao": "2025-03-23",
    "Tong_Tien": 95083212,
    "Items": [
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 453,
        "DVT": "Lọ",
        "Don_Gia": 34418,
        "Thanh_Tien": 15591354
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 199,
        "DVT": "Lọ",
        "Don_Gia": 1407,
        "Thanh_Tien": 279993
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 310,
        "DVT": "Lọ",
        "Don_Gia": 14696,
        "Thanh_Tien": 4555760
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 134,
        "DVT": "Ống",
        "Don_Gia": 611,
        "Thanh_Tien": 81874
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 110,
        "DVT": "Lọ",
        "Don_Gia": 317996,
        "Thanh_Tien": 34979560
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 64,
        "DVT": "Viên",
        "Don_Gia": 293,
        "Thanh_Tien": 18752
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 178,
        "DVT": "Ống",
        "Don_Gia": 949,
        "Thanh_Tien": 168922
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 361,
        "DVT": "Lọ",
        "Don_Gia": 1592,
        "Thanh_Tien": 574712
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 323,
        "DVT": "Viên",
        "Don_Gia": 1844,
        "Thanh_Tien": 595612
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 209,
        "DVT": "Lọ",
        "Don_Gia": 49968,
        "Thanh_Tien": 10443312
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 462,
        "DVT": "Lọ",
        "Don_Gia": 39982,
        "Thanh_Tien": 18471684
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 169,
        "DVT": "Chai",
        "Don_Gia": 7549,
        "Thanh_Tien": 1275781
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 296,
        "DVT": "Viên",
        "Don_Gia": 536,
        "Thanh_Tien": 158656
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 436,
        "DVT": "Lọ",
        "Don_Gia": 18090,
        "Thanh_Tien": 7887240
      }
    ]
  },
  {
    "id": "DH039",
    "Ma_KH": "KH014",
    "Ten_KH": "BV Đa khoa Từ Sơn",
    "So_Hoa_Don": "HD2039",
    "Ngay_Soan": "2025-01-30",
    "Ngay_Giao": "2025-02-02",
    "Tong_Tien": 1751107,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 105,
        "DVT": "Viên",
        "Don_Gia": 1774,
        "Thanh_Tien": 186270
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 239,
        "DVT": "Ống",
        "Don_Gia": 1015,
        "Thanh_Tien": 242585
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 157,
        "DVT": "Lọ",
        "Don_Gia": 1497,
        "Thanh_Tien": 235029
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 223,
        "DVT": "Viên",
        "Don_Gia": 288,
        "Thanh_Tien": 64224
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 377,
        "DVT": "Viên",
        "Don_Gia": 728,
        "Thanh_Tien": 274456
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 55,
        "DVT": "Ống",
        "Don_Gia": 1108,
        "Thanh_Tien": 60940
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 411,
        "DVT": "Viên",
        "Don_Gia": 1673,
        "Thanh_Tien": 687603
      }
    ]
  },
  {
    "id": "DH040",
    "Ma_KH": "KH006",
    "Ten_KH": "Bệnh Viện Đa Khoa Khu Vực Bồng Sơn",
    "So_Hoa_Don": "HD2040",
    "Ngay_Soan": "2025-08-30",
    "Ngay_Giao": "2025-09-03",
    "Tong_Tien": 2742359,
    "Items": [
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 223,
        "DVT": "Viên",
        "Don_Gia": 1107,
        "Thanh_Tien": 246861
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 393,
        "DVT": "Viên",
        "Don_Gia": 3418,
        "Thanh_Tien": 1343274
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 184,
        "DVT": "Viên",
        "Don_Gia": 279,
        "Thanh_Tien": 51336
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 455,
        "DVT": "Viên",
        "Don_Gia": 1432,
        "Thanh_Tien": 651560
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 368,
        "DVT": "Ống",
        "Don_Gia": 1221,
        "Thanh_Tien": 449328
      }
    ]
  },
  {
    "id": "DH041",
    "Ma_KH": "KH006",
    "Ten_KH": "Bệnh Viện Đa Khoa Khu Vực Bồng Sơn",
    "So_Hoa_Don": "HD2041",
    "Ngay_Soan": "2025-01-19",
    "Ngay_Giao": "2025-01-26",
    "Tong_Tien": 376842329,
    "Items": [
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 359,
        "DVT": "Viên",
        "Don_Gia": 5576,
        "Thanh_Tien": 2001784
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 197,
        "DVT": "Viên",
        "Don_Gia": 393,
        "Thanh_Tien": 77421
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 353,
        "DVT": "Ống",
        "Don_Gia": 630,
        "Thanh_Tien": 222390
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 151,
        "DVT": "Chai",
        "Don_Gia": 7128,
        "Thanh_Tien": 1076328
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 38,
        "DVT": "Ống",
        "Don_Gia": 6576861,
        "Thanh_Tien": 249920718
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 388,
        "DVT": "Lọ",
        "Don_Gia": 289977,
        "Thanh_Tien": 112511076
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 346,
        "DVT": "Lọ",
        "Don_Gia": 31096,
        "Thanh_Tien": 10759216
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 210,
        "DVT": "Chai",
        "Don_Gia": 1124,
        "Thanh_Tien": 236040
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 283,
        "DVT": "Viên",
        "Don_Gia": 132,
        "Thanh_Tien": 37356
      }
    ]
  },
  {
    "id": "DH042",
    "Ma_KH": "KH020",
    "Ten_KH": "Trạm Y tế xã Xuân Lăng",
    "So_Hoa_Don": "HD2042",
    "Ngay_Soan": "2025-01-12",
    "Ngay_Giao": "2025-01-19",
    "Tong_Tien": 113865688,
    "Items": [
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 264,
        "DVT": "Viên",
        "Don_Gia": 5072,
        "Thanh_Tien": 1339008
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 276,
        "DVT": "Ống",
        "Don_Gia": 680,
        "Thanh_Tien": 187680
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 186,
        "DVT": "Viên",
        "Don_Gia": 392,
        "Thanh_Tien": 72912
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 69,
        "DVT": "Lọ",
        "Don_Gia": 16491,
        "Thanh_Tien": 1137879
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 285,
        "DVT": "Lọ",
        "Don_Gia": 334468,
        "Thanh_Tien": 95323380
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 71,
        "DVT": "Viên",
        "Don_Gia": 204,
        "Thanh_Tien": 14484
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 102,
        "DVT": "Viên",
        "Don_Gia": 840,
        "Thanh_Tien": 85680
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 28,
        "DVT": "Viên",
        "Don_Gia": 1399,
        "Thanh_Tien": 39172
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 385,
        "DVT": "Tuýp",
        "Don_Gia": 38976,
        "Thanh_Tien": 15005760
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 451,
        "DVT": "Ống",
        "Don_Gia": 242,
        "Thanh_Tien": 109142
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 142,
        "DVT": "Lọ",
        "Don_Gia": 1659,
        "Thanh_Tien": 235578
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 49,
        "DVT": "Chai",
        "Don_Gia": 1085,
        "Thanh_Tien": 53165
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 157,
        "DVT": "Ống",
        "Don_Gia": 896,
        "Thanh_Tien": 140672
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 374,
        "DVT": "Viên",
        "Don_Gia": 324,
        "Thanh_Tien": 121176
      }
    ]
  },
  {
    "id": "DH043",
    "Ma_KH": "KH014",
    "Ten_KH": "BV Đa khoa Từ Sơn",
    "So_Hoa_Don": "HD2043",
    "Ngay_Soan": "2025-12-25",
    "Ngay_Giao": "2025-12-29",
    "Tong_Tien": 125736689,
    "Items": [
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 492,
        "DVT": "Ống",
        "Don_Gia": 628,
        "Thanh_Tien": 308976
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 233,
        "DVT": "Chai",
        "Don_Gia": 7713,
        "Thanh_Tien": 1797129
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 92,
        "DVT": "Tuýp",
        "Don_Gia": 45725,
        "Thanh_Tien": 4206700
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 261,
        "DVT": "Lọ",
        "Don_Gia": 308845,
        "Thanh_Tien": 80608545
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 47,
        "DVT": "Viên",
        "Don_Gia": 14088,
        "Thanh_Tien": 662136
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 157,
        "DVT": "Viên",
        "Don_Gia": 153,
        "Thanh_Tien": 24021
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 303,
        "DVT": "Viên",
        "Don_Gia": 288,
        "Thanh_Tien": 87264
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 330,
        "DVT": "Viên",
        "Don_Gia": 376,
        "Thanh_Tien": 124080
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 309,
        "DVT": "Viên",
        "Don_Gia": 784,
        "Thanh_Tien": 242256
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 355,
        "DVT": "Lọ",
        "Don_Gia": 43705,
        "Thanh_Tien": 15515275
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 411,
        "DVT": "Ống",
        "Don_Gia": 1038,
        "Thanh_Tien": 426618
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 222,
        "DVT": "Viên",
        "Don_Gia": 455,
        "Thanh_Tien": 101010
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 439,
        "DVT": "Lọ",
        "Don_Gia": 48801,
        "Thanh_Tien": 21423639
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 112,
        "DVT": "Viên",
        "Don_Gia": 1350,
        "Thanh_Tien": 151200
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 241,
        "DVT": "Ống",
        "Don_Gia": 240,
        "Thanh_Tien": 57840
      }
    ]
  },
  {
    "id": "DH044",
    "Ma_KH": "KH018",
    "Ten_KH": "BV Đa khoa tỉnh Quảng Trị",
    "So_Hoa_Don": "HD2044",
    "Ngay_Soan": "2025-04-20",
    "Ngay_Giao": "2025-04-22",
    "Tong_Tien": 1641950,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 415,
        "DVT": "Viên",
        "Don_Gia": 1834,
        "Thanh_Tien": 761110
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 168,
        "DVT": "Ống",
        "Don_Gia": 1083,
        "Thanh_Tien": 181944
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 473,
        "DVT": "Viên",
        "Don_Gia": 197,
        "Thanh_Tien": 93181
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 464,
        "DVT": "Viên",
        "Don_Gia": 405,
        "Thanh_Tien": 187920
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 483,
        "DVT": "Viên",
        "Don_Gia": 865,
        "Thanh_Tien": 417795
      }
    ]
  },
  {
    "id": "DH045",
    "Ma_KH": "KH009",
    "Ten_KH": "BV đa khoa Thanh Liêm",
    "So_Hoa_Don": "HD2045",
    "Ngay_Soan": "2025-08-09",
    "Ngay_Giao": "2025-08-13",
    "Tong_Tien": 2867275062,
    "Items": [
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 261,
        "DVT": "Lọ",
        "Don_Gia": 1643,
        "Thanh_Tien": 428823
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 14,
        "DVT": "Lọ",
        "Don_Gia": 48139,
        "Thanh_Tien": 673946
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 246,
        "DVT": "Viên",
        "Don_Gia": 132,
        "Thanh_Tien": 32472
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 176,
        "DVT": "Viên",
        "Don_Gia": 195,
        "Thanh_Tien": 34320
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 439,
        "DVT": "Lọ",
        "Don_Gia": 15289,
        "Thanh_Tien": 6711871
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 30,
        "DVT": "Lọ",
        "Don_Gia": 1430,
        "Thanh_Tien": 42900
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 177,
        "DVT": "Ống",
        "Don_Gia": 631,
        "Thanh_Tien": 111687
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 30,
        "DVT": "Chai",
        "Don_Gia": 7834,
        "Thanh_Tien": 235020
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 291,
        "DVT": "Viên",
        "Don_Gia": 352,
        "Thanh_Tien": 102432
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 425,
        "DVT": "Viên",
        "Don_Gia": 12236,
        "Thanh_Tien": 5200300
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 452,
        "DVT": "Ống",
        "Don_Gia": 6231666,
        "Thanh_Tien": 2816713032
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 314,
        "DVT": "Lọ",
        "Don_Gia": 42122,
        "Thanh_Tien": 13226308
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 298,
        "DVT": "Tuýp",
        "Don_Gia": 45648,
        "Thanh_Tien": 13603104
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 320,
        "DVT": "Xịt",
        "Don_Gia": 31671,
        "Thanh_Tien": 10134720
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 23,
        "DVT": "Chai",
        "Don_Gia": 1049,
        "Thanh_Tien": 24127
      }
    ]
  },
  {
    "id": "DH046",
    "Ma_KH": "KH014",
    "Ten_KH": "BV Đa khoa Từ Sơn",
    "So_Hoa_Don": "HD2046",
    "Ngay_Soan": "2025-01-17",
    "Ngay_Giao": "2025-01-19",
    "Tong_Tien": 11508728,
    "Items": [
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 89,
        "DVT": "Lọ",
        "Don_Gia": 51823,
        "Thanh_Tien": 4612247
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 361,
        "DVT": "Lọ",
        "Don_Gia": 18484,
        "Thanh_Tien": 6672724
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 194,
        "DVT": "Viên",
        "Don_Gia": 349,
        "Thanh_Tien": 67706
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 296,
        "DVT": "Viên",
        "Don_Gia": 465,
        "Thanh_Tien": 137640
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 17,
        "DVT": "Ống",
        "Don_Gia": 1083,
        "Thanh_Tien": 18411
      }
    ]
  },
  {
    "id": "DH047",
    "Ma_KH": "KH014",
    "Ten_KH": "BV Đa khoa Từ Sơn",
    "So_Hoa_Don": "HD2047",
    "Ngay_Soan": "2025-03-03",
    "Ngay_Giao": "2025-03-05",
    "Tong_Tien": 12889712,
    "Items": [
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 80,
        "DVT": "Ống",
        "Don_Gia": 245,
        "Thanh_Tien": 19600
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 188,
        "DVT": "Viên",
        "Don_Gia": 551,
        "Thanh_Tien": 103588
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 236,
        "DVT": "Viên",
        "Don_Gia": 413,
        "Thanh_Tien": 97468
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 84,
        "DVT": "Viên",
        "Don_Gia": 157,
        "Thanh_Tien": 13188
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 346,
        "DVT": "Viên",
        "Don_Gia": 804,
        "Thanh_Tien": 278184
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 407,
        "DVT": "Xịt",
        "Don_Gia": 30412,
        "Thanh_Tien": 12377684
      }
    ]
  },
  {
    "id": "DH048",
    "Ma_KH": "KH001",
    "Ten_KH": "BV Bạch Mai",
    "So_Hoa_Don": "HD2048",
    "Ngay_Soan": "2025-12-08",
    "Ngay_Giao": "2025-12-13",
    "Tong_Tien": 36419768,
    "Items": [
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 379,
        "DVT": "Viên",
        "Don_Gia": 1301,
        "Thanh_Tien": 493079
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 190,
        "DVT": "Lọ",
        "Don_Gia": 19484,
        "Thanh_Tien": 3701960
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 352,
        "DVT": "Viên",
        "Don_Gia": 188,
        "Thanh_Tien": 66176
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 348,
        "DVT": "Chai",
        "Don_Gia": 1177,
        "Thanh_Tien": 409596
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 428,
        "DVT": "Lọ",
        "Don_Gia": 16368,
        "Thanh_Tien": 7005504
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 28,
        "DVT": "Ống",
        "Don_Gia": 1206,
        "Thanh_Tien": 33768
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 18,
        "DVT": "Ống",
        "Don_Gia": 265,
        "Thanh_Tien": 4770
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 27,
        "DVT": "Lọ",
        "Don_Gia": 31909,
        "Thanh_Tien": 861543
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 253,
        "DVT": "Xịt",
        "Don_Gia": 33890,
        "Thanh_Tien": 8574170
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 319,
        "DVT": "Lọ",
        "Don_Gia": 47687,
        "Thanh_Tien": 15212153
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 68,
        "DVT": "Viên",
        "Don_Gia": 392,
        "Thanh_Tien": 26656
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 99,
        "DVT": "Viên",
        "Don_Gia": 307,
        "Thanh_Tien": 30393
      }
    ]
  },
  {
    "id": "DH049",
    "Ma_KH": "KH005",
    "Ten_KH": "Bệnh viện Đại học Y Hà Nội",
    "So_Hoa_Don": "HD2049",
    "Ngay_Soan": "2025-07-10",
    "Ngay_Giao": "2025-07-16",
    "Tong_Tien": 2311701204,
    "Items": [
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 424,
        "DVT": "Chai",
        "Don_Gia": 1223,
        "Thanh_Tien": 518552
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 442,
        "DVT": "Viên",
        "Don_Gia": 1958,
        "Thanh_Tien": 865436
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 353,
        "DVT": "Ống",
        "Don_Gia": 6474200,
        "Thanh_Tien": 2285392600
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 143,
        "DVT": "Lọ",
        "Don_Gia": 1560,
        "Thanh_Tien": 223080
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 500,
        "DVT": "Lọ",
        "Don_Gia": 49331,
        "Thanh_Tien": 24665500
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 143,
        "DVT": "Ống",
        "Don_Gia": 252,
        "Thanh_Tien": 36036
      }
    ]
  },
  {
    "id": "DH050",
    "Ma_KH": "KH001",
    "Ten_KH": "BV Bạch Mai",
    "So_Hoa_Don": "HD2050",
    "Ngay_Soan": "2025-07-05",
    "Ngay_Giao": "2025-07-12",
    "Tong_Tien": 44348679,
    "Items": [
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 195,
        "DVT": "Lọ",
        "Don_Gia": 45338,
        "Thanh_Tien": 8840910
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 262,
        "DVT": "Viên",
        "Don_Gia": 745,
        "Thanh_Tien": 195190
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 54,
        "DVT": "Xịt",
        "Don_Gia": 32967,
        "Thanh_Tien": 1780218
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 493,
        "DVT": "Lọ",
        "Don_Gia": 20043,
        "Thanh_Tien": 9881199
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 20,
        "DVT": "Viên",
        "Don_Gia": 146,
        "Thanh_Tien": 2920
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 210,
        "DVT": "Lọ",
        "Don_Gia": 46631,
        "Thanh_Tien": 9792510
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 102,
        "DVT": "Chai",
        "Don_Gia": 999,
        "Thanh_Tien": 101898
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 221,
        "DVT": "Lọ",
        "Don_Gia": 17944,
        "Thanh_Tien": 3965624
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 314,
        "DVT": "Lọ",
        "Don_Gia": 31033,
        "Thanh_Tien": 9744362
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 27,
        "DVT": "Lọ",
        "Don_Gia": 1624,
        "Thanh_Tien": 43848
      }
    ]
  },
  {
    "id": "DH051",
    "Ma_KH": "KH003",
    "Ten_KH": "BV Chợ Rẫy",
    "So_Hoa_Don": "HD2051",
    "Ngay_Soan": "2025-03-22",
    "Ngay_Giao": "2025-03-24",
    "Tong_Tien": 14528328,
    "Items": [
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 29,
        "DVT": "Lọ",
        "Don_Gia": 318387,
        "Thanh_Tien": 9233223
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 460,
        "DVT": "Viên",
        "Don_Gia": 354,
        "Thanh_Tien": 162840
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 246,
        "DVT": "Lọ",
        "Don_Gia": 1327,
        "Thanh_Tien": 326442
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 454,
        "DVT": "Viên",
        "Don_Gia": 137,
        "Thanh_Tien": 62198
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 313,
        "DVT": "Ống",
        "Don_Gia": 1100,
        "Thanh_Tien": 344300
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 466,
        "DVT": "Viên",
        "Don_Gia": 171,
        "Thanh_Tien": 79686
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 68,
        "DVT": "Lọ",
        "Don_Gia": 1608,
        "Thanh_Tien": 109344
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 480,
        "DVT": "Ống",
        "Don_Gia": 640,
        "Thanh_Tien": 307200
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 182,
        "DVT": "Viên",
        "Don_Gia": 12610,
        "Thanh_Tien": 2295020
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 163,
        "DVT": "Viên",
        "Don_Gia": 1556,
        "Thanh_Tien": 253628
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 346,
        "DVT": "Viên",
        "Don_Gia": 295,
        "Thanh_Tien": 102070
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 337,
        "DVT": "Viên",
        "Don_Gia": 820,
        "Thanh_Tien": 276340
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 164,
        "DVT": "Viên",
        "Don_Gia": 2992,
        "Thanh_Tien": 490688
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 318,
        "DVT": "Viên",
        "Don_Gia": 318,
        "Thanh_Tien": 101124
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 327,
        "DVT": "Viên",
        "Don_Gia": 1175,
        "Thanh_Tien": 384225
      }
    ]
  },
  {
    "id": "DH052",
    "Ma_KH": "KH011",
    "Ten_KH": "TRUNG TÂM MẮT TỈNH QUẢNG NGÃI",
    "So_Hoa_Don": "HD2052",
    "Ngay_Soan": "2025-11-01",
    "Ngay_Giao": "2025-11-03",
    "Tong_Tien": 3332918506,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 94,
        "DVT": "Viên",
        "Don_Gia": 1710,
        "Thanh_Tien": 160740
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 456,
        "DVT": "Lọ",
        "Don_Gia": 16254,
        "Thanh_Tien": 7411824
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 130,
        "DVT": "Lọ",
        "Don_Gia": 1477,
        "Thanh_Tien": 192010
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 10,
        "DVT": "Lọ",
        "Don_Gia": 287999,
        "Thanh_Tien": 2879990
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 134,
        "DVT": "Chai",
        "Don_Gia": 6774,
        "Thanh_Tien": 907716
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 368,
        "DVT": "Lọ",
        "Don_Gia": 51319,
        "Thanh_Tien": 18885392
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 153,
        "DVT": "Viên",
        "Don_Gia": 551,
        "Thanh_Tien": 84303
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 20,
        "DVT": "Ống",
        "Don_Gia": 1144,
        "Thanh_Tien": 22880
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 232,
        "DVT": "Viên",
        "Don_Gia": 387,
        "Thanh_Tien": 89784
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 496,
        "DVT": "Ống",
        "Don_Gia": 6649095,
        "Thanh_Tien": 3297951120
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 489,
        "DVT": "Lọ",
        "Don_Gia": 1328,
        "Thanh_Tien": 649392
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 91,
        "DVT": "Ống",
        "Don_Gia": 235,
        "Thanh_Tien": 21385
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 34,
        "DVT": "Ống",
        "Don_Gia": 1071,
        "Thanh_Tien": 36414
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 262,
        "DVT": "Lọ",
        "Don_Gia": 13838,
        "Thanh_Tien": 3625556
      }
    ]
  },
  {
    "id": "DH053",
    "Ma_KH": "KH010",
    "Ten_KH": "BỆNH VIỆN ĐA KHOA VŨ THƯ",
    "So_Hoa_Don": "HD2053",
    "Ngay_Soan": "2026-04-23",
    "Ngay_Giao": "2026-04-25",
    "Tong_Tien": 38080578,
    "Items": [
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 183,
        "DVT": "Viên",
        "Don_Gia": 322,
        "Thanh_Tien": 58926
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 221,
        "DVT": "Viên",
        "Don_Gia": 2757,
        "Thanh_Tien": 609297
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 193,
        "DVT": "Viên",
        "Don_Gia": 152,
        "Thanh_Tien": 29336
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 360,
        "DVT": "Tuýp",
        "Don_Gia": 40138,
        "Thanh_Tien": 14449680
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 98,
        "DVT": "Chai",
        "Don_Gia": 1030,
        "Thanh_Tien": 100940
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 376,
        "DVT": "Viên",
        "Don_Gia": 516,
        "Thanh_Tien": 194016
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 242,
        "DVT": "Ống",
        "Don_Gia": 698,
        "Thanh_Tien": 168916
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 112,
        "DVT": "Lọ",
        "Don_Gia": 34562,
        "Thanh_Tien": 3870944
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 357,
        "DVT": "Viên",
        "Don_Gia": 5227,
        "Thanh_Tien": 1866039
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 99,
        "DVT": "Viên",
        "Don_Gia": 180,
        "Thanh_Tien": 17820
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 463,
        "DVT": "Ống",
        "Don_Gia": 1040,
        "Thanh_Tien": 481520
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 362,
        "DVT": "Ống",
        "Don_Gia": 232,
        "Thanh_Tien": 83984
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 95,
        "DVT": "Lọ",
        "Don_Gia": 1511,
        "Thanh_Tien": 143545
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 365,
        "DVT": "Lọ",
        "Don_Gia": 43851,
        "Thanh_Tien": 16005615
      }
    ]
  },
  {
    "id": "DH054",
    "Ma_KH": "KH017",
    "Ten_KH": "Trung tâm Y tế Khu vực Văn Chấn",
    "So_Hoa_Don": "HD2054",
    "Ngay_Soan": "2025-02-05",
    "Ngay_Giao": "2025-02-08",
    "Tong_Tien": 609392453,
    "Items": [
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 362,
        "DVT": "Chai",
        "Don_Gia": 7578,
        "Thanh_Tien": 2743236
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 71,
        "DVT": "Xịt",
        "Don_Gia": 33517,
        "Thanh_Tien": 2379707
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 373,
        "DVT": "Viên",
        "Don_Gia": 1476,
        "Thanh_Tien": 550548
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 79,
        "DVT": "Ống",
        "Don_Gia": 6009730,
        "Thanh_Tien": 474768670
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 73,
        "DVT": "Ống",
        "Don_Gia": 1114,
        "Thanh_Tien": 81322
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 269,
        "DVT": "Chai",
        "Don_Gia": 1166,
        "Thanh_Tien": 313654
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 273,
        "DVT": "Lọ",
        "Don_Gia": 288492,
        "Thanh_Tien": 78758316
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 480,
        "DVT": "Tuýp",
        "Don_Gia": 48003,
        "Thanh_Tien": 23041440
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 93,
        "DVT": "Viên",
        "Don_Gia": 5219,
        "Thanh_Tien": 485367
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 242,
        "DVT": "Lọ",
        "Don_Gia": 14418,
        "Thanh_Tien": 3489156
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 378,
        "DVT": "Lọ",
        "Don_Gia": 43590,
        "Thanh_Tien": 16477020
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 256,
        "DVT": "Viên",
        "Don_Gia": 1120,
        "Thanh_Tien": 286720
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 319,
        "DVT": "Lọ",
        "Don_Gia": 18863,
        "Thanh_Tien": 6017297
      }
    ]
  },
  {
    "id": "DH055",
    "Ma_KH": "KH014",
    "Ten_KH": "BV Đa khoa Từ Sơn",
    "So_Hoa_Don": "HD2055",
    "Ngay_Soan": "2025-04-24",
    "Ngay_Giao": "2025-04-26",
    "Tong_Tien": 9287835,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 445,
        "DVT": "Ống",
        "Don_Gia": 1023,
        "Thanh_Tien": 455235
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 475,
        "DVT": "Lọ",
        "Don_Gia": 16155,
        "Thanh_Tien": 7673625
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 136,
        "DVT": "Viên",
        "Don_Gia": 3374,
        "Thanh_Tien": 458864
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 341,
        "DVT": "Lọ",
        "Don_Gia": 1455,
        "Thanh_Tien": 496155
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 354,
        "DVT": "Viên",
        "Don_Gia": 414,
        "Thanh_Tien": 146556
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 287,
        "DVT": "Viên",
        "Don_Gia": 200,
        "Thanh_Tien": 57400
      }
    ]
  },
  {
    "id": "DH056",
    "Ma_KH": "KH012",
    "Ten_KH": "TRUNG TÂM Y TẾ AN DƯƠNG",
    "So_Hoa_Don": "HD2056",
    "Ngay_Soan": "2025-11-12",
    "Ngay_Giao": "2025-11-16",
    "Tong_Tien": 1740814048,
    "Items": [
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 291,
        "DVT": "Viên",
        "Don_Gia": 624,
        "Thanh_Tien": 181584
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 107,
        "DVT": "Lọ",
        "Don_Gia": 1378,
        "Thanh_Tien": 147446
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 416,
        "DVT": "Lọ",
        "Don_Gia": 19263,
        "Thanh_Tien": 8013408
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 82,
        "DVT": "Viên",
        "Don_Gia": 163,
        "Thanh_Tien": 13366
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 336,
        "DVT": "Lọ",
        "Don_Gia": 16810,
        "Thanh_Tien": 5648160
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 280,
        "DVT": "Lọ",
        "Don_Gia": 34618,
        "Thanh_Tien": 9693040
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 256,
        "DVT": "Ống",
        "Don_Gia": 6088291,
        "Thanh_Tien": 1558602496
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 241,
        "DVT": "Viên",
        "Don_Gia": 1720,
        "Thanh_Tien": 414520
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 351,
        "DVT": "Viên",
        "Don_Gia": 336,
        "Thanh_Tien": 117936
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 233,
        "DVT": "Lọ",
        "Don_Gia": 1623,
        "Thanh_Tien": 378159
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 479,
        "DVT": "Lọ",
        "Don_Gia": 329027,
        "Thanh_Tien": 157603933
      }
    ]
  },
  {
    "id": "DH057",
    "Ma_KH": "KH001",
    "Ten_KH": "BV Bạch Mai",
    "So_Hoa_Don": "HD2057",
    "Ngay_Soan": "2026-03-06",
    "Ngay_Giao": "2026-03-11",
    "Tong_Tien": 29575710,
    "Items": [
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 383,
        "DVT": "Viên",
        "Don_Gia": 430,
        "Thanh_Tien": 164690
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 113,
        "DVT": "Viên",
        "Don_Gia": 1862,
        "Thanh_Tien": 210406
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 67,
        "DVT": "Viên",
        "Don_Gia": 294,
        "Thanh_Tien": 19698
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 422,
        "DVT": "Viên",
        "Don_Gia": 752,
        "Thanh_Tien": 317344
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 230,
        "DVT": "Tuýp",
        "Don_Gia": 40910,
        "Thanh_Tien": 9409300
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 471,
        "DVT": "Viên",
        "Don_Gia": 1405,
        "Thanh_Tien": 661755
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 395,
        "DVT": "Lọ",
        "Don_Gia": 47477,
        "Thanh_Tien": 18753415
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 147,
        "DVT": "Ống",
        "Don_Gia": 266,
        "Thanh_Tien": 39102
      }
    ]
  },
  {
    "id": "DH058",
    "Ma_KH": "KH012",
    "Ten_KH": "TRUNG TÂM Y TẾ AN DƯƠNG",
    "So_Hoa_Don": "HD2058",
    "Ngay_Soan": "2025-01-20",
    "Ngay_Giao": "2025-01-26",
    "Tong_Tien": 11956504,
    "Items": [
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 495,
        "DVT": "Viên",
        "Don_Gia": 155,
        "Thanh_Tien": 76725
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 42,
        "DVT": "Tuýp",
        "Don_Gia": 44736,
        "Thanh_Tien": 1878912
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 460,
        "DVT": "Lọ",
        "Don_Gia": 14292,
        "Thanh_Tien": 6574320
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 477,
        "DVT": "Viên",
        "Don_Gia": 304,
        "Thanh_Tien": 145008
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 477,
        "DVT": "Viên",
        "Don_Gia": 1169,
        "Thanh_Tien": 557613
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 437,
        "DVT": "Viên",
        "Don_Gia": 5549,
        "Thanh_Tien": 2424913
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 229,
        "DVT": "Viên",
        "Don_Gia": 437,
        "Thanh_Tien": 100073
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 68,
        "DVT": "Viên",
        "Don_Gia": 1529,
        "Thanh_Tien": 103972
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 60,
        "DVT": "Viên",
        "Don_Gia": 276,
        "Thanh_Tien": 16560
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 88,
        "DVT": "Viên",
        "Don_Gia": 891,
        "Thanh_Tien": 78408
      }
    ]
  },
  {
    "id": "DH059",
    "Ma_KH": "KH007",
    "Ten_KH": "Trung tâm Y tế khu vực Lục Yên",
    "So_Hoa_Don": "HD2059",
    "Ngay_Soan": "2025-08-08",
    "Ngay_Giao": "2025-08-13",
    "Tong_Tien": 1084075909,
    "Items": [
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 217,
        "DVT": "Xịt",
        "Don_Gia": 31014,
        "Thanh_Tien": 6730038
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 343,
        "DVT": "Chai",
        "Don_Gia": 1052,
        "Thanh_Tien": 360836
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 344,
        "DVT": "Lọ",
        "Don_Gia": 13821,
        "Thanh_Tien": 4754424
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 14,
        "DVT": "Viên",
        "Don_Gia": 1902,
        "Thanh_Tien": 26628
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 366,
        "DVT": "Ống",
        "Don_Gia": 1143,
        "Thanh_Tien": 418338
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 142,
        "DVT": "Lọ",
        "Don_Gia": 15368,
        "Thanh_Tien": 2182256
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 183,
        "DVT": "Lọ",
        "Don_Gia": 19675,
        "Thanh_Tien": 3600525
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 156,
        "DVT": "Ống",
        "Don_Gia": 6758308,
        "Thanh_Tien": 1054296048
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 44,
        "DVT": "Lọ",
        "Don_Gia": 266064,
        "Thanh_Tien": 11706816
      }
    ]
  },
  {
    "id": "DH060",
    "Ma_KH": "KH006",
    "Ten_KH": "Bệnh Viện Đa Khoa Khu Vực Bồng Sơn",
    "So_Hoa_Don": "HD2060",
    "Ngay_Soan": "2025-01-25",
    "Ngay_Giao": "2025-01-27",
    "Tong_Tien": 4205916,
    "Items": [
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 71,
        "DVT": "Viên",
        "Don_Gia": 5263,
        "Thanh_Tien": 373673
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 218,
        "DVT": "Viên",
        "Don_Gia": 12292,
        "Thanh_Tien": 2679656
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 173,
        "DVT": "Lọ",
        "Don_Gia": 1407,
        "Thanh_Tien": 243411
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 259,
        "DVT": "Viên",
        "Don_Gia": 498,
        "Thanh_Tien": 128982
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 30,
        "DVT": "Chai",
        "Don_Gia": 7647,
        "Thanh_Tien": 229410
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 413,
        "DVT": "Viên",
        "Don_Gia": 203,
        "Thanh_Tien": 83839
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 475,
        "DVT": "Viên",
        "Don_Gia": 839,
        "Thanh_Tien": 398525
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 311,
        "DVT": "Ống",
        "Don_Gia": 220,
        "Thanh_Tien": 68420
      }
    ]
  },
  {
    "id": "DH061",
    "Ma_KH": "KH001",
    "Ten_KH": "BV Bạch Mai",
    "So_Hoa_Don": "HD2061",
    "Ngay_Soan": "2025-04-27",
    "Ngay_Giao": "2025-04-30",
    "Tong_Tien": 157239802,
    "Items": [
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 343,
        "DVT": "Lọ",
        "Don_Gia": 20804,
        "Thanh_Tien": 7135772
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 23,
        "DVT": "Xịt",
        "Don_Gia": 31875,
        "Thanh_Tien": 733125
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 136,
        "DVT": "Lọ",
        "Don_Gia": 1627,
        "Thanh_Tien": 221272
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 226,
        "DVT": "Viên",
        "Don_Gia": 1490,
        "Thanh_Tien": 336740
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 341,
        "DVT": "Ống",
        "Don_Gia": 277,
        "Thanh_Tien": 94457
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 21,
        "DVT": "Ống",
        "Don_Gia": 6810414,
        "Thanh_Tien": 143018694
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 200,
        "DVT": "Viên",
        "Don_Gia": 276,
        "Thanh_Tien": 55200
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 63,
        "DVT": "Ống",
        "Don_Gia": 960,
        "Thanh_Tien": 60480
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 438,
        "DVT": "Viên",
        "Don_Gia": 12749,
        "Thanh_Tien": 5584062
      }
    ]
  },
  {
    "id": "DH062",
    "Ma_KH": "KH007",
    "Ten_KH": "Trung tâm Y tế khu vực Lục Yên",
    "So_Hoa_Don": "HD2062",
    "Ngay_Soan": "2025-11-05",
    "Ngay_Giao": "2025-11-09",
    "Tong_Tien": 3559228929,
    "Items": [
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 396,
        "DVT": "Viên",
        "Don_Gia": 285,
        "Thanh_Tien": 112860
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 328,
        "DVT": "Ống",
        "Don_Gia": 1051,
        "Thanh_Tien": 344728
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 435,
        "DVT": "Lọ",
        "Don_Gia": 308731,
        "Thanh_Tien": 134297985
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 163,
        "DVT": "Lọ",
        "Don_Gia": 35946,
        "Thanh_Tien": 5859198
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 437,
        "DVT": "Viên",
        "Don_Gia": 392,
        "Thanh_Tien": 171304
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 440,
        "DVT": "Tuýp",
        "Don_Gia": 41250,
        "Thanh_Tien": 18150000
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 30,
        "DVT": "Lọ",
        "Don_Gia": 15647,
        "Thanh_Tien": 469410
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 73,
        "DVT": "Viên",
        "Don_Gia": 1223,
        "Thanh_Tien": 89279
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 290,
        "DVT": "Viên",
        "Don_Gia": 166,
        "Thanh_Tien": 48140
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 487,
        "DVT": "Lọ",
        "Don_Gia": 17000,
        "Thanh_Tien": 8279000
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 485,
        "DVT": "Ống",
        "Don_Gia": 6990572,
        "Thanh_Tien": 3390427420
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 165,
        "DVT": "Viên",
        "Don_Gia": 5937,
        "Thanh_Tien": 979605
      }
    ]
  },
  {
    "id": "DH063",
    "Ma_KH": "KH007",
    "Ten_KH": "Trung tâm Y tế khu vực Lục Yên",
    "So_Hoa_Don": "HD2063",
    "Ngay_Soan": "2025-07-08",
    "Ngay_Giao": "2025-07-15",
    "Tong_Tien": 6978163,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 104,
        "DVT": "Viên",
        "Don_Gia": 3431,
        "Thanh_Tien": 356824
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 163,
        "DVT": "Ống",
        "Don_Gia": 236,
        "Thanh_Tien": 38468
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 230,
        "DVT": "Chai",
        "Don_Gia": 992,
        "Thanh_Tien": 228160
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 61,
        "DVT": "Xịt",
        "Don_Gia": 27683,
        "Thanh_Tien": 1688663
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 408,
        "DVT": "Ống",
        "Don_Gia": 1057,
        "Thanh_Tien": 431256
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 133,
        "DVT": "Lọ",
        "Don_Gia": 30949,
        "Thanh_Tien": 4116217
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 425,
        "DVT": "Viên",
        "Don_Gia": 279,
        "Thanh_Tien": 118575
      }
    ]
  },
  {
    "id": "DH064",
    "Ma_KH": "KH008",
    "Ten_KH": "Trạm Y tế xã Bình Xuyên",
    "So_Hoa_Don": "HD2064",
    "Ngay_Soan": "2025-01-05",
    "Ngay_Giao": "2025-01-11",
    "Tong_Tien": 45218011,
    "Items": [
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 24,
        "DVT": "Viên",
        "Don_Gia": 5661,
        "Thanh_Tien": 135864
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 358,
        "DVT": "Lọ",
        "Don_Gia": 47469,
        "Thanh_Tien": 16993902
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 178,
        "DVT": "Ống",
        "Don_Gia": 225,
        "Thanh_Tien": 40050
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 297,
        "DVT": "Lọ",
        "Don_Gia": 34246,
        "Thanh_Tien": 10171062
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 454,
        "DVT": "Ống",
        "Don_Gia": 699,
        "Thanh_Tien": 317346
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 74,
        "DVT": "Viên",
        "Don_Gia": 865,
        "Thanh_Tien": 64010
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 112,
        "DVT": "Chai",
        "Don_Gia": 1217,
        "Thanh_Tien": 136304
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 409,
        "DVT": "Lọ",
        "Don_Gia": 40484,
        "Thanh_Tien": 16557956
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 32,
        "DVT": "Chai",
        "Don_Gia": 6914,
        "Thanh_Tien": 221248
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 208,
        "DVT": "Lọ",
        "Don_Gia": 1482,
        "Thanh_Tien": 308256
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 164,
        "DVT": "Viên",
        "Don_Gia": 312,
        "Thanh_Tien": 51168
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 175,
        "DVT": "Viên",
        "Don_Gia": 580,
        "Thanh_Tien": 101500
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 313,
        "DVT": "Viên",
        "Don_Gia": 161,
        "Thanh_Tien": 50393
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 408,
        "DVT": "Viên",
        "Don_Gia": 169,
        "Thanh_Tien": 68952
      }
    ]
  },
  {
    "id": "DH065",
    "Ma_KH": "KH010",
    "Ten_KH": "BỆNH VIỆN ĐA KHOA VŨ THƯ",
    "So_Hoa_Don": "HD2065",
    "Ngay_Soan": "2025-11-16",
    "Ngay_Giao": "2025-11-23",
    "Tong_Tien": 174666595,
    "Items": [
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 122,
        "DVT": "Xịt",
        "Don_Gia": 27971,
        "Thanh_Tien": 3412462
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 402,
        "DVT": "Lọ",
        "Don_Gia": 1436,
        "Thanh_Tien": 577272
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 493,
        "DVT": "Lọ",
        "Don_Gia": 13283,
        "Thanh_Tien": 6548519
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 425,
        "DVT": "Lọ",
        "Don_Gia": 1593,
        "Thanh_Tien": 677025
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 349,
        "DVT": "Lọ",
        "Don_Gia": 17759,
        "Thanh_Tien": 6197891
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 200,
        "DVT": "Ống",
        "Don_Gia": 626,
        "Thanh_Tien": 125200
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 296,
        "DVT": "Lọ",
        "Don_Gia": 47035,
        "Thanh_Tien": 13922360
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 23,
        "DVT": "Ống",
        "Don_Gia": 6226342,
        "Thanh_Tien": 143205866
      }
    ]
  },
  {
    "id": "DH066",
    "Ma_KH": "KH012",
    "Ten_KH": "TRUNG TÂM Y TẾ AN DƯƠNG",
    "So_Hoa_Don": "HD2066",
    "Ngay_Soan": "2025-05-18",
    "Ngay_Giao": "2025-05-22",
    "Tong_Tien": 1741807,
    "Items": [
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 428,
        "DVT": "Ống",
        "Don_Gia": 582,
        "Thanh_Tien": 249096
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 257,
        "DVT": "Ống",
        "Don_Gia": 893,
        "Thanh_Tien": 229501
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 222,
        "DVT": "Viên",
        "Don_Gia": 788,
        "Thanh_Tien": 174936
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 43,
        "DVT": "Chai",
        "Don_Gia": 7668,
        "Thanh_Tien": 329724
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 258,
        "DVT": "Viên",
        "Don_Gia": 142,
        "Thanh_Tien": 36636
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 84,
        "DVT": "Viên",
        "Don_Gia": 1603,
        "Thanh_Tien": 134652
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 39,
        "DVT": "Viên",
        "Don_Gia": 15058,
        "Thanh_Tien": 587262
      }
    ]
  },
  {
    "id": "DH067",
    "Ma_KH": "KH018",
    "Ten_KH": "BV Đa khoa tỉnh Quảng Trị",
    "So_Hoa_Don": "HD2067",
    "Ngay_Soan": "2025-03-22",
    "Ngay_Giao": "2025-03-28",
    "Tong_Tien": 1872315797,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 421,
        "DVT": "Viên",
        "Don_Gia": 3258,
        "Thanh_Tien": 1371618
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 258,
        "DVT": "Viên",
        "Don_Gia": 517,
        "Thanh_Tien": 133386
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 156,
        "DVT": "Lọ",
        "Don_Gia": 30194,
        "Thanh_Tien": 4710264
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 182,
        "DVT": "Ống",
        "Don_Gia": 1096,
        "Thanh_Tien": 199472
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 219,
        "DVT": "Lọ",
        "Don_Gia": 316749,
        "Thanh_Tien": 69368031
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 272,
        "DVT": "Ống",
        "Don_Gia": 6565188,
        "Thanh_Tien": 1785731136
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 248,
        "DVT": "Viên",
        "Don_Gia": 292,
        "Thanh_Tien": 72416
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 305,
        "DVT": "Ống",
        "Don_Gia": 1117,
        "Thanh_Tien": 340685
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 337,
        "DVT": "Lọ",
        "Don_Gia": 16947,
        "Thanh_Tien": 5711139
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 484,
        "DVT": "Chai",
        "Don_Gia": 7099,
        "Thanh_Tien": 3435916
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 116,
        "DVT": "Chai",
        "Don_Gia": 1206,
        "Thanh_Tien": 139896
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 27,
        "DVT": "Lọ",
        "Don_Gia": 13351,
        "Thanh_Tien": 360477
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 298,
        "DVT": "Viên",
        "Don_Gia": 415,
        "Thanh_Tien": 123670
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 109,
        "DVT": "Viên",
        "Don_Gia": 201,
        "Thanh_Tien": 21909
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 118,
        "DVT": "Viên",
        "Don_Gia": 5049,
        "Thanh_Tien": 595782
      }
    ]
  },
  {
    "id": "DH068",
    "Ma_KH": "KH011",
    "Ten_KH": "TRUNG TÂM MẮT TỈNH QUẢNG NGÃI",
    "So_Hoa_Don": "HD2068",
    "Ngay_Soan": "2025-07-17",
    "Ngay_Giao": "2025-07-20",
    "Tong_Tien": 11484123,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 223,
        "DVT": "Viên",
        "Don_Gia": 1655,
        "Thanh_Tien": 369065
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 374,
        "DVT": "Viên",
        "Don_Gia": 155,
        "Thanh_Tien": 57970
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 392,
        "DVT": "Lọ",
        "Don_Gia": 12135,
        "Thanh_Tien": 4756920
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 135,
        "DVT": "Lọ",
        "Don_Gia": 41644,
        "Thanh_Tien": 5621940
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 205,
        "DVT": "Lọ",
        "Don_Gia": 1562,
        "Thanh_Tien": 320210
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 153,
        "DVT": "Ống",
        "Don_Gia": 1198,
        "Thanh_Tien": 183294
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 484,
        "DVT": "Viên",
        "Don_Gia": 361,
        "Thanh_Tien": 174724
      }
    ]
  },
  {
    "id": "DH069",
    "Ma_KH": "KH002",
    "Ten_KH": "BV Việt Đức",
    "So_Hoa_Don": "HD2069",
    "Ngay_Soan": "2026-03-15",
    "Ngay_Giao": "2026-03-21",
    "Tong_Tien": 10486733,
    "Items": [
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 13,
        "DVT": "Viên",
        "Don_Gia": 203,
        "Thanh_Tien": 2639
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 136,
        "DVT": "Xịt",
        "Don_Gia": 30073,
        "Thanh_Tien": 4089928
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 482,
        "DVT": "Viên",
        "Don_Gia": 2939,
        "Thanh_Tien": 1416598
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 135,
        "DVT": "Ống",
        "Don_Gia": 1116,
        "Thanh_Tien": 150660
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 436,
        "DVT": "Viên",
        "Don_Gia": 320,
        "Thanh_Tien": 139520
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 260,
        "DVT": "Lọ",
        "Don_Gia": 1419,
        "Thanh_Tien": 368940
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 62,
        "DVT": "Lọ",
        "Don_Gia": 50792,
        "Thanh_Tien": 3149104
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 176,
        "DVT": "Chai",
        "Don_Gia": 6644,
        "Thanh_Tien": 1169344
      }
    ]
  },
  {
    "id": "DH070",
    "Ma_KH": "KH020",
    "Ten_KH": "Trạm Y tế xã Xuân Lăng",
    "So_Hoa_Don": "HD2070",
    "Ngay_Soan": "2026-03-11",
    "Ngay_Giao": "2026-03-13",
    "Tong_Tien": 421481135,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 453,
        "DVT": "Viên",
        "Don_Gia": 1976,
        "Thanh_Tien": 895128
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 113,
        "DVT": "Xịt",
        "Don_Gia": 34021,
        "Thanh_Tien": 3844373
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 168,
        "DVT": "Viên",
        "Don_Gia": 283,
        "Thanh_Tien": 47544
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 402,
        "DVT": "Viên",
        "Don_Gia": 1582,
        "Thanh_Tien": 635964
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 372,
        "DVT": "Lọ",
        "Don_Gia": 54411,
        "Thanh_Tien": 20240892
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 83,
        "DVT": "Viên",
        "Don_Gia": 526,
        "Thanh_Tien": 43658
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 413,
        "DVT": "Viên",
        "Don_Gia": 455,
        "Thanh_Tien": 187915
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 110,
        "DVT": "Viên",
        "Don_Gia": 767,
        "Thanh_Tien": 84370
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 155,
        "DVT": "Viên",
        "Don_Gia": 2889,
        "Thanh_Tien": 447795
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 491,
        "DVT": "Lọ",
        "Don_Gia": 12846,
        "Thanh_Tien": 6307386
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 175,
        "DVT": "Ống",
        "Don_Gia": 1166,
        "Thanh_Tien": 204050
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 267,
        "DVT": "Viên",
        "Don_Gia": 284,
        "Thanh_Tien": 75828
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 112,
        "DVT": "Viên",
        "Don_Gia": 361,
        "Thanh_Tien": 40432
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 56,
        "DVT": "Ống",
        "Don_Gia": 6936175,
        "Thanh_Tien": 388425800
      }
    ]
  },
  {
    "id": "DH071",
    "Ma_KH": "KH017",
    "Ten_KH": "Trung tâm Y tế Khu vực Văn Chấn",
    "So_Hoa_Don": "HD2071",
    "Ngay_Soan": "2025-01-27",
    "Ngay_Giao": "2025-02-01",
    "Tong_Tien": 36423509,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 169,
        "DVT": "Viên",
        "Don_Gia": 3490,
        "Thanh_Tien": 589810
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 228,
        "DVT": "Viên",
        "Don_Gia": 1356,
        "Thanh_Tien": 309168
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 253,
        "DVT": "Viên",
        "Don_Gia": 164,
        "Thanh_Tien": 41492
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 204,
        "DVT": "Viên",
        "Don_Gia": 207,
        "Thanh_Tien": 42228
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 97,
        "DVT": "Viên",
        "Don_Gia": 1290,
        "Thanh_Tien": 125130
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 180,
        "DVT": "Viên",
        "Don_Gia": 5804,
        "Thanh_Tien": 1044720
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 110,
        "DVT": "Xịt",
        "Don_Gia": 29971,
        "Thanh_Tien": 3296810
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 19,
        "DVT": "Ống",
        "Don_Gia": 639,
        "Thanh_Tien": 12141
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 244,
        "DVT": "Lọ",
        "Don_Gia": 1350,
        "Thanh_Tien": 329400
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 465,
        "DVT": "Tuýp",
        "Don_Gia": 43072,
        "Thanh_Tien": 20028480
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 308,
        "DVT": "Viên",
        "Don_Gia": 519,
        "Thanh_Tien": 159852
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 361,
        "DVT": "Viên",
        "Don_Gia": 462,
        "Thanh_Tien": 166782
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 96,
        "DVT": "Chai",
        "Don_Gia": 1026,
        "Thanh_Tien": 98496
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 348,
        "DVT": "Lọ",
        "Don_Gia": 29250,
        "Thanh_Tien": 10179000
      }
    ]
  },
  {
    "id": "DH072",
    "Ma_KH": "KH017",
    "Ten_KH": "Trung tâm Y tế Khu vực Văn Chấn",
    "So_Hoa_Don": "HD2072",
    "Ngay_Soan": "2026-04-09",
    "Ngay_Giao": "2026-04-11",
    "Tong_Tien": 23444831,
    "Items": [
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 160,
        "DVT": "Lọ",
        "Don_Gia": 1669,
        "Thanh_Tien": 267040
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 58,
        "DVT": "Lọ",
        "Don_Gia": 1499,
        "Thanh_Tien": 86942
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 196,
        "DVT": "Viên",
        "Don_Gia": 132,
        "Thanh_Tien": 25872
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 330,
        "DVT": "Viên",
        "Don_Gia": 3143,
        "Thanh_Tien": 1037190
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 158,
        "DVT": "Viên",
        "Don_Gia": 343,
        "Thanh_Tien": 54194
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 284,
        "DVT": "Viên",
        "Don_Gia": 2021,
        "Thanh_Tien": 573964
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 326,
        "DVT": "Ống",
        "Don_Gia": 1037,
        "Thanh_Tien": 338062
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 142,
        "DVT": "Viên",
        "Don_Gia": 1490,
        "Thanh_Tien": 211580
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 481,
        "DVT": "Lọ",
        "Don_Gia": 14227,
        "Thanh_Tien": 6843187
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 300,
        "DVT": "Lọ",
        "Don_Gia": 45151,
        "Thanh_Tien": 13545300
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 288,
        "DVT": "Viên",
        "Don_Gia": 542,
        "Thanh_Tien": 156096
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 242,
        "DVT": "Viên",
        "Don_Gia": 1262,
        "Thanh_Tien": 305404
      }
    ]
  },
  {
    "id": "DH073",
    "Ma_KH": "KH019",
    "Ten_KH": "BV Phục hồi chức năng Thanh Hóa",
    "So_Hoa_Don": "HD2073",
    "Ngay_Soan": "2025-11-29",
    "Ngay_Giao": "2025-12-06",
    "Tong_Tien": 1590856933,
    "Items": [
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 236,
        "DVT": "Chai",
        "Don_Gia": 999,
        "Thanh_Tien": 235764
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 286,
        "DVT": "Viên",
        "Don_Gia": 310,
        "Thanh_Tien": 88660
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 189,
        "DVT": "Viên",
        "Don_Gia": 14887,
        "Thanh_Tien": 2813643
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 155,
        "DVT": "Lọ",
        "Don_Gia": 13953,
        "Thanh_Tien": 2162715
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 500,
        "DVT": "Lọ",
        "Don_Gia": 29925,
        "Thanh_Tien": 14962500
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 235,
        "DVT": "Ống",
        "Don_Gia": 6604635,
        "Thanh_Tien": 1552089225
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 398,
        "DVT": "Viên",
        "Don_Gia": 2817,
        "Thanh_Tien": 1121166
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 305,
        "DVT": "Ống",
        "Don_Gia": 1160,
        "Thanh_Tien": 353800
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 440,
        "DVT": "Viên",
        "Don_Gia": 1408,
        "Thanh_Tien": 619520
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 488,
        "DVT": "Xịt",
        "Don_Gia": 33537,
        "Thanh_Tien": 16366056
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 318,
        "DVT": "Viên",
        "Don_Gia": 138,
        "Thanh_Tien": 43884
      }
    ]
  },
  {
    "id": "DH074",
    "Ma_KH": "KH002",
    "Ten_KH": "BV Việt Đức",
    "So_Hoa_Don": "HD2074",
    "Ngay_Soan": "2025-04-03",
    "Ngay_Giao": "2025-04-05",
    "Tong_Tien": 47124974,
    "Items": [
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 47,
        "DVT": "Viên",
        "Don_Gia": 1143,
        "Thanh_Tien": 53721
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 20,
        "DVT": "Tuýp",
        "Don_Gia": 48238,
        "Thanh_Tien": 964760
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 407,
        "DVT": "Viên",
        "Don_Gia": 2018,
        "Thanh_Tien": 821326
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 106,
        "DVT": "Lọ",
        "Don_Gia": 308230,
        "Thanh_Tien": 32672380
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 133,
        "DVT": "Chai",
        "Don_Gia": 1029,
        "Thanh_Tien": 136857
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 195,
        "DVT": "Viên",
        "Don_Gia": 310,
        "Thanh_Tien": 60450
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 406,
        "DVT": "Lọ",
        "Don_Gia": 30580,
        "Thanh_Tien": 12415480
      }
    ]
  },
  {
    "id": "DH075",
    "Ma_KH": "KH008",
    "Ten_KH": "Trạm Y tế xã Bình Xuyên",
    "So_Hoa_Don": "HD2075",
    "Ngay_Soan": "2026-04-12",
    "Ngay_Giao": "2026-04-17",
    "Tong_Tien": 67571011,
    "Items": [
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 27,
        "DVT": "Viên",
        "Don_Gia": 13559,
        "Thanh_Tien": 366093
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 206,
        "DVT": "Lọ",
        "Don_Gia": 1441,
        "Thanh_Tien": 296846
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 201,
        "DVT": "Tuýp",
        "Don_Gia": 44823,
        "Thanh_Tien": 9009423
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 425,
        "DVT": "Chai",
        "Don_Gia": 7105,
        "Thanh_Tien": 3019625
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 162,
        "DVT": "Lọ",
        "Don_Gia": 334862,
        "Thanh_Tien": 54247644
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 416,
        "DVT": "Viên",
        "Don_Gia": 897,
        "Thanh_Tien": 373152
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 162,
        "DVT": "Lọ",
        "Don_Gia": 1594,
        "Thanh_Tien": 258228
      }
    ]
  },
  {
    "id": "DH076",
    "Ma_KH": "KH011",
    "Ten_KH": "TRUNG TÂM MẮT TỈNH QUẢNG NGÃI",
    "So_Hoa_Don": "HD2076",
    "Ngay_Soan": "2025-06-06",
    "Ngay_Giao": "2025-06-08",
    "Tong_Tien": 18954849,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 270,
        "DVT": "Viên",
        "Don_Gia": 3107,
        "Thanh_Tien": 838890
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 345,
        "DVT": "Tuýp",
        "Don_Gia": 40097,
        "Thanh_Tien": 13833465
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 299,
        "DVT": "Ống",
        "Don_Gia": 1071,
        "Thanh_Tien": 320229
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 306,
        "DVT": "Ống",
        "Don_Gia": 986,
        "Thanh_Tien": 301716
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 18,
        "DVT": "Ống",
        "Don_Gia": 253,
        "Thanh_Tien": 4554
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 300,
        "DVT": "Viên",
        "Don_Gia": 784,
        "Thanh_Tien": 235200
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 304,
        "DVT": "Viên",
        "Don_Gia": 1467,
        "Thanh_Tien": 445968
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 46,
        "DVT": "Lọ",
        "Don_Gia": 1566,
        "Thanh_Tien": 72036
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 73,
        "DVT": "Lọ",
        "Don_Gia": 38751,
        "Thanh_Tien": 2828823
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 402,
        "DVT": "Viên",
        "Don_Gia": 184,
        "Thanh_Tien": 73968
      }
    ]
  },
  {
    "id": "DH077",
    "Ma_KH": "KH003",
    "Ten_KH": "BV Chợ Rẫy",
    "So_Hoa_Don": "HD2077",
    "Ngay_Soan": "2025-11-01",
    "Ngay_Giao": "2025-11-06",
    "Tong_Tien": 8659006,
    "Items": [
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 235,
        "DVT": "Viên",
        "Don_Gia": 1370,
        "Thanh_Tien": 321950
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 368,
        "DVT": "Viên",
        "Don_Gia": 289,
        "Thanh_Tien": 106352
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 248,
        "DVT": "Viên",
        "Don_Gia": 383,
        "Thanh_Tien": 94984
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 477,
        "DVT": "Viên",
        "Don_Gia": 474,
        "Thanh_Tien": 226098
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 319,
        "DVT": "Viên",
        "Don_Gia": 1982,
        "Thanh_Tien": 632258
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 219,
        "DVT": "Xịt",
        "Don_Gia": 33021,
        "Thanh_Tien": 7231599
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 339,
        "DVT": "Viên",
        "Don_Gia": 135,
        "Thanh_Tien": 45765
      }
    ]
  },
  {
    "id": "DH078",
    "Ma_KH": "KH012",
    "Ten_KH": "TRUNG TÂM Y TẾ AN DƯƠNG",
    "So_Hoa_Don": "HD2078",
    "Ngay_Soan": "2025-03-07",
    "Ngay_Giao": "2025-03-10",
    "Tong_Tien": 119851370,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 61,
        "DVT": "Ống",
        "Don_Gia": 1084,
        "Thanh_Tien": 66124
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 394,
        "DVT": "Viên",
        "Don_Gia": 332,
        "Thanh_Tien": 130808
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 285,
        "DVT": "Viên",
        "Don_Gia": 138,
        "Thanh_Tien": 39330
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 286,
        "DVT": "Viên",
        "Don_Gia": 1479,
        "Thanh_Tien": 422994
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 100,
        "DVT": "Tuýp",
        "Don_Gia": 41465,
        "Thanh_Tien": 4146500
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 35,
        "DVT": "Chai",
        "Don_Gia": 1073,
        "Thanh_Tien": 37555
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 186,
        "DVT": "Viên",
        "Don_Gia": 499,
        "Thanh_Tien": 92814
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 14,
        "DVT": "Ống",
        "Don_Gia": 1108,
        "Thanh_Tien": 15512
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 391,
        "DVT": "Lọ",
        "Don_Gia": 270747,
        "Thanh_Tien": 105862077
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 500,
        "DVT": "Lọ",
        "Don_Gia": 17738,
        "Thanh_Tien": 8869000
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 127,
        "DVT": "Lọ",
        "Don_Gia": 1328,
        "Thanh_Tien": 168656
      }
    ]
  },
  {
    "id": "DH079",
    "Ma_KH": "KH009",
    "Ten_KH": "BV đa khoa Thanh Liêm",
    "So_Hoa_Don": "HD2079",
    "Ngay_Soan": "2025-06-23",
    "Ngay_Giao": "2025-06-26",
    "Tong_Tien": 815913820,
    "Items": [
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 409,
        "DVT": "Viên",
        "Don_Gia": 331,
        "Thanh_Tien": 135379
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 128,
        "DVT": "Ống",
        "Don_Gia": 6118810,
        "Thanh_Tien": 783207680
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 201,
        "DVT": "Ống",
        "Don_Gia": 1255,
        "Thanh_Tien": 252255
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 469,
        "DVT": "Viên",
        "Don_Gia": 294,
        "Thanh_Tien": 137886
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 56,
        "DVT": "Viên",
        "Don_Gia": 453,
        "Thanh_Tien": 25368
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 152,
        "DVT": "Viên",
        "Don_Gia": 1616,
        "Thanh_Tien": 245632
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 429,
        "DVT": "Chai",
        "Don_Gia": 7870,
        "Thanh_Tien": 3376230
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 359,
        "DVT": "Lọ",
        "Don_Gia": 46977,
        "Thanh_Tien": 16864743
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 47,
        "DVT": "Viên",
        "Don_Gia": 201,
        "Thanh_Tien": 9447
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 497,
        "DVT": "Viên",
        "Don_Gia": 15314,
        "Thanh_Tien": 7611058
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 199,
        "DVT": "Lọ",
        "Don_Gia": 16505,
        "Thanh_Tien": 3284495
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 457,
        "DVT": "Lọ",
        "Don_Gia": 1671,
        "Thanh_Tien": 763647
      }
    ]
  },
  {
    "id": "DH080",
    "Ma_KH": "KH015",
    "Ten_KH": "BV Đa khoa Cẩm Phả",
    "So_Hoa_Don": "HD2080",
    "Ngay_Soan": "2026-02-06",
    "Ngay_Giao": "2026-02-12",
    "Tong_Tien": 57454014,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 360,
        "DVT": "Ống",
        "Don_Gia": 1159,
        "Thanh_Tien": 417240
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 247,
        "DVT": "Chai",
        "Don_Gia": 7455,
        "Thanh_Tien": 1841385
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 136,
        "DVT": "Lọ",
        "Don_Gia": 328387,
        "Thanh_Tien": 44660632
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 247,
        "DVT": "Lọ",
        "Don_Gia": 20456,
        "Thanh_Tien": 5052632
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 375,
        "DVT": "Viên",
        "Don_Gia": 14619,
        "Thanh_Tien": 5482125
      }
    ]
  },
  {
    "id": "DH081",
    "Ma_KH": "KH015",
    "Ten_KH": "BV Đa khoa Cẩm Phả",
    "So_Hoa_Don": "HD2081",
    "Ngay_Soan": "2025-11-12",
    "Ngay_Giao": "2025-11-18",
    "Tong_Tien": 37477670,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 69,
        "DVT": "Viên",
        "Don_Gia": 2804,
        "Thanh_Tien": 193476
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 82,
        "DVT": "Viên",
        "Don_Gia": 1404,
        "Thanh_Tien": 115128
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 340,
        "DVT": "Lọ",
        "Don_Gia": 32054,
        "Thanh_Tien": 10898360
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 127,
        "DVT": "Xịt",
        "Don_Gia": 28429,
        "Thanh_Tien": 3610483
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 276,
        "DVT": "Viên",
        "Don_Gia": 334,
        "Thanh_Tien": 92184
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 354,
        "DVT": "Lọ",
        "Don_Gia": 18502,
        "Thanh_Tien": 6549708
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 307,
        "DVT": "Lọ",
        "Don_Gia": 51502,
        "Thanh_Tien": 15811114
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 469,
        "DVT": "Ống",
        "Don_Gia": 273,
        "Thanh_Tien": 128037
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 428,
        "DVT": "Viên",
        "Don_Gia": 185,
        "Thanh_Tien": 79180
      }
    ]
  },
  {
    "id": "DH082",
    "Ma_KH": "KH007",
    "Ten_KH": "Trung tâm Y tế khu vực Lục Yên",
    "So_Hoa_Don": "HD2082",
    "Ngay_Soan": "2025-06-11",
    "Ngay_Giao": "2025-06-17",
    "Tong_Tien": 26231154,
    "Items": [
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 238,
        "DVT": "Viên",
        "Don_Gia": 517,
        "Thanh_Tien": 123046
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 21,
        "DVT": "Viên",
        "Don_Gia": 5375,
        "Thanh_Tien": 112875
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 447,
        "DVT": "Viên",
        "Don_Gia": 373,
        "Thanh_Tien": 166731
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 237,
        "DVT": "Xịt",
        "Don_Gia": 32560,
        "Thanh_Tien": 7716720
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 234,
        "DVT": "Lọ",
        "Don_Gia": 16840,
        "Thanh_Tien": 3940560
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 481,
        "DVT": "Lọ",
        "Don_Gia": 29462,
        "Thanh_Tien": 14171222
      }
    ]
  },
  {
    "id": "DH083",
    "Ma_KH": "KH005",
    "Ten_KH": "Bệnh viện Đại học Y Hà Nội",
    "So_Hoa_Don": "HD2083",
    "Ngay_Soan": "2025-09-06",
    "Ngay_Giao": "2025-09-13",
    "Tong_Tien": 40401732,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 58,
        "DVT": "Ống",
        "Don_Gia": 1087,
        "Thanh_Tien": 63046
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 212,
        "DVT": "Viên",
        "Don_Gia": 284,
        "Thanh_Tien": 60208
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 11,
        "DVT": "Viên",
        "Don_Gia": 397,
        "Thanh_Tien": 4367
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 479,
        "DVT": "Lọ",
        "Don_Gia": 48149,
        "Thanh_Tien": 23063371
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 354,
        "DVT": "Viên",
        "Don_Gia": 5462,
        "Thanh_Tien": 1933548
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 458,
        "DVT": "Viên",
        "Don_Gia": 14536,
        "Thanh_Tien": 6657488
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 345,
        "DVT": "Lọ",
        "Don_Gia": 1330,
        "Thanh_Tien": 458850
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 428,
        "DVT": "Viên",
        "Don_Gia": 1386,
        "Thanh_Tien": 593208
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 500,
        "DVT": "Lọ",
        "Don_Gia": 14850,
        "Thanh_Tien": 7425000
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 443,
        "DVT": "Viên",
        "Don_Gia": 322,
        "Thanh_Tien": 142646
      }
    ]
  },
  {
    "id": "DH084",
    "Ma_KH": "KH016",
    "Ten_KH": "BV Đa khoa số 2 tỉnh Lào Cai",
    "So_Hoa_Don": "HD2084",
    "Ngay_Soan": "2026-02-25",
    "Ngay_Giao": "2026-03-02",
    "Tong_Tien": 48491393,
    "Items": [
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 459,
        "DVT": "Xịt",
        "Don_Gia": 31273,
        "Thanh_Tien": 14354307
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 306,
        "DVT": "Tuýp",
        "Don_Gia": 43858,
        "Thanh_Tien": 13420548
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 95,
        "DVT": "Ống",
        "Don_Gia": 909,
        "Thanh_Tien": 86355
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 38,
        "DVT": "Viên",
        "Don_Gia": 1310,
        "Thanh_Tien": 49780
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 416,
        "DVT": "Lọ",
        "Don_Gia": 30781,
        "Thanh_Tien": 12804896
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 417,
        "DVT": "Viên",
        "Don_Gia": 14578,
        "Thanh_Tien": 6079026
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 164,
        "DVT": "Chai",
        "Don_Gia": 1203,
        "Thanh_Tien": 197292
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 327,
        "DVT": "Viên",
        "Don_Gia": 3143,
        "Thanh_Tien": 1027761
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 498,
        "DVT": "Viên",
        "Don_Gia": 132,
        "Thanh_Tien": 65736
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 14,
        "DVT": "Viên",
        "Don_Gia": 543,
        "Thanh_Tien": 7602
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 242,
        "DVT": "Lọ",
        "Don_Gia": 1645,
        "Thanh_Tien": 398090
      }
    ]
  },
  {
    "id": "DH085",
    "Ma_KH": "KH005",
    "Ten_KH": "Bệnh viện Đại học Y Hà Nội",
    "So_Hoa_Don": "HD2085",
    "Ngay_Soan": "2025-06-03",
    "Ngay_Giao": "2025-06-10",
    "Tong_Tien": 24620988,
    "Items": [
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 120,
        "DVT": "Viên",
        "Don_Gia": 369,
        "Thanh_Tien": 44280
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 38,
        "DVT": "Xịt",
        "Don_Gia": 34874,
        "Thanh_Tien": 1325212
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 426,
        "DVT": "Viên",
        "Don_Gia": 205,
        "Thanh_Tien": 87330
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 389,
        "DVT": "Lọ",
        "Don_Gia": 1433,
        "Thanh_Tien": 557437
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 130,
        "DVT": "Ống",
        "Don_Gia": 640,
        "Thanh_Tien": 83200
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 234,
        "DVT": "Viên",
        "Don_Gia": 282,
        "Thanh_Tien": 65988
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 379,
        "DVT": "Viên",
        "Don_Gia": 426,
        "Thanh_Tien": 161454
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 358,
        "DVT": "Viên",
        "Don_Gia": 326,
        "Thanh_Tien": 116708
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 50,
        "DVT": "Ống",
        "Don_Gia": 993,
        "Thanh_Tien": 49650
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 95,
        "DVT": "Lọ",
        "Don_Gia": 15155,
        "Thanh_Tien": 1439725
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 438,
        "DVT": "Ống",
        "Don_Gia": 998,
        "Thanh_Tien": 437124
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 171,
        "DVT": "Lọ",
        "Don_Gia": 1438,
        "Thanh_Tien": 245898
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 498,
        "DVT": "Viên",
        "Don_Gia": 14643,
        "Thanh_Tien": 7292214
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 272,
        "DVT": "Lọ",
        "Don_Gia": 46563,
        "Thanh_Tien": 12665136
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 352,
        "DVT": "Viên",
        "Don_Gia": 141,
        "Thanh_Tien": 49632
      }
    ]
  },
  {
    "id": "DH086",
    "Ma_KH": "KH016",
    "Ten_KH": "BV Đa khoa số 2 tỉnh Lào Cai",
    "So_Hoa_Don": "HD2086",
    "Ngay_Soan": "2025-05-11",
    "Ngay_Giao": "2025-05-13",
    "Tong_Tien": 7918979,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 314,
        "DVT": "Viên",
        "Don_Gia": 2054,
        "Thanh_Tien": 644956
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 22,
        "DVT": "Lọ",
        "Don_Gia": 301603,
        "Thanh_Tien": 6635266
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 12,
        "DVT": "Lọ",
        "Don_Gia": 44255,
        "Thanh_Tien": 531060
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 212,
        "DVT": "Viên",
        "Don_Gia": 184,
        "Thanh_Tien": 39008
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 149,
        "DVT": "Viên",
        "Don_Gia": 461,
        "Thanh_Tien": 68689
      }
    ]
  },
  {
    "id": "DH087",
    "Ma_KH": "KH001",
    "Ten_KH": "BV Bạch Mai",
    "So_Hoa_Don": "HD2087",
    "Ngay_Soan": "2026-04-07",
    "Ngay_Giao": "2026-04-14",
    "Tong_Tien": 7117407,
    "Items": [
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 217,
        "DVT": "Ống",
        "Don_Gia": 590,
        "Thanh_Tien": 128030
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 120,
        "DVT": "Viên",
        "Don_Gia": 290,
        "Thanh_Tien": 34800
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 48,
        "DVT": "Tuýp",
        "Don_Gia": 39895,
        "Thanh_Tien": 1914960
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 269,
        "DVT": "Viên",
        "Don_Gia": 3163,
        "Thanh_Tien": 850847
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 450,
        "DVT": "Ống",
        "Don_Gia": 1057,
        "Thanh_Tien": 475650
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 365,
        "DVT": "Ống",
        "Don_Gia": 243,
        "Thanh_Tien": 88695
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 152,
        "DVT": "Viên",
        "Don_Gia": 14316,
        "Thanh_Tien": 2176032
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 436,
        "DVT": "Viên",
        "Don_Gia": 1606,
        "Thanh_Tien": 700216
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 257,
        "DVT": "Viên",
        "Don_Gia": 585,
        "Thanh_Tien": 150345
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 433,
        "DVT": "Ống",
        "Don_Gia": 1204,
        "Thanh_Tien": 521332
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 255,
        "DVT": "Viên",
        "Don_Gia": 300,
        "Thanh_Tien": 76500
      }
    ]
  },
  {
    "id": "DH088",
    "Ma_KH": "KH002",
    "Ten_KH": "BV Việt Đức",
    "So_Hoa_Don": "HD2088",
    "Ngay_Soan": "2025-05-21",
    "Ngay_Giao": "2025-05-23",
    "Tong_Tien": 127520400,
    "Items": [
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 244,
        "DVT": "Lọ",
        "Don_Gia": 20218,
        "Thanh_Tien": 4933192
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 367,
        "DVT": "Lọ",
        "Don_Gia": 285158,
        "Thanh_Tien": 104652986
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 410,
        "DVT": "Viên",
        "Don_Gia": 499,
        "Thanh_Tien": 204590
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 65,
        "DVT": "Tuýp",
        "Don_Gia": 39466,
        "Thanh_Tien": 2565290
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 376,
        "DVT": "Xịt",
        "Don_Gia": 34888,
        "Thanh_Tien": 13117888
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 49,
        "DVT": "Lọ",
        "Don_Gia": 1653,
        "Thanh_Tien": 80997
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 87,
        "DVT": "Ống",
        "Don_Gia": 1088,
        "Thanh_Tien": 94656
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 266,
        "DVT": "Lọ",
        "Don_Gia": 1463,
        "Thanh_Tien": 389158
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 111,
        "DVT": "Viên",
        "Don_Gia": 302,
        "Thanh_Tien": 33522
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 96,
        "DVT": "Lọ",
        "Don_Gia": 14324,
        "Thanh_Tien": 1375104
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 427,
        "DVT": "Viên",
        "Don_Gia": 171,
        "Thanh_Tien": 73017
      }
    ]
  },
  {
    "id": "DH089",
    "Ma_KH": "KH016",
    "Ten_KH": "BV Đa khoa số 2 tỉnh Lào Cai",
    "So_Hoa_Don": "HD2089",
    "Ngay_Soan": "2025-08-26",
    "Ngay_Giao": "2025-09-02",
    "Tong_Tien": 37614337,
    "Items": [
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 401,
        "DVT": "Viên",
        "Don_Gia": 363,
        "Thanh_Tien": 145563
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 11,
        "DVT": "Viên",
        "Don_Gia": 300,
        "Thanh_Tien": 3300
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 414,
        "DVT": "Viên",
        "Don_Gia": 192,
        "Thanh_Tien": 79488
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 229,
        "DVT": "Viên",
        "Don_Gia": 1270,
        "Thanh_Tien": 290830
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 443,
        "DVT": "Ống",
        "Don_Gia": 1052,
        "Thanh_Tien": 466036
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 289,
        "DVT": "Viên",
        "Don_Gia": 395,
        "Thanh_Tien": 114155
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 477,
        "DVT": "Lọ",
        "Don_Gia": 40827,
        "Thanh_Tien": 19474479
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 486,
        "DVT": "Viên",
        "Don_Gia": 3016,
        "Thanh_Tien": 1465776
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 302,
        "DVT": "Chai",
        "Don_Gia": 7559,
        "Thanh_Tien": 2282818
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 470,
        "DVT": "Ống",
        "Don_Gia": 1206,
        "Thanh_Tien": 566820
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 368,
        "DVT": "Lọ",
        "Don_Gia": 34579,
        "Thanh_Tien": 12725072
      }
    ]
  },
  {
    "id": "DH090",
    "Ma_KH": "KH006",
    "Ten_KH": "Bệnh Viện Đa Khoa Khu Vực Bồng Sơn",
    "So_Hoa_Don": "HD2090",
    "Ngay_Soan": "2025-04-14",
    "Ngay_Giao": "2025-04-16",
    "Tong_Tien": 12179325,
    "Items": [
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 387,
        "DVT": "Viên",
        "Don_Gia": 1147,
        "Thanh_Tien": 443889
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 37,
        "DVT": "Viên",
        "Don_Gia": 3119,
        "Thanh_Tien": 115403
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 317,
        "DVT": "Lọ",
        "Don_Gia": 35459,
        "Thanh_Tien": 11240503
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 50,
        "DVT": "Viên",
        "Don_Gia": 347,
        "Thanh_Tien": 17350
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 220,
        "DVT": "Viên",
        "Don_Gia": 549,
        "Thanh_Tien": 120780
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 200,
        "DVT": "Chai",
        "Don_Gia": 1207,
        "Thanh_Tien": 241400
      }
    ]
  },
  {
    "id": "DH091",
    "Ma_KH": "KH020",
    "Ten_KH": "Trạm Y tế xã Xuân Lăng",
    "So_Hoa_Don": "HD2091",
    "Ngay_Soan": "2025-11-20",
    "Ngay_Giao": "2025-11-23",
    "Tong_Tien": 120844897,
    "Items": [
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 306,
        "DVT": "Lọ",
        "Don_Gia": 264496,
        "Thanh_Tien": 80935776
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 254,
        "DVT": "Viên",
        "Don_Gia": 287,
        "Thanh_Tien": 72898
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 297,
        "DVT": "Lọ",
        "Don_Gia": 40541,
        "Thanh_Tien": 12040677
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 75,
        "DVT": "Viên",
        "Don_Gia": 152,
        "Thanh_Tien": 11400
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 166,
        "DVT": "Lọ",
        "Don_Gia": 20220,
        "Thanh_Tien": 3356520
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 238,
        "DVT": "Viên",
        "Don_Gia": 1355,
        "Thanh_Tien": 322490
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 23,
        "DVT": "Viên",
        "Don_Gia": 898,
        "Thanh_Tien": 20654
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 70,
        "DVT": "Viên",
        "Don_Gia": 5314,
        "Thanh_Tien": 371980
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 21,
        "DVT": "Chai",
        "Don_Gia": 7357,
        "Thanh_Tien": 154497
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 76,
        "DVT": "Viên",
        "Don_Gia": 3394,
        "Thanh_Tien": 257944
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 428,
        "DVT": "Lọ",
        "Don_Gia": 52923,
        "Thanh_Tien": 22651044
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 427,
        "DVT": "Ống",
        "Don_Gia": 1026,
        "Thanh_Tien": 438102
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 387,
        "DVT": "Viên",
        "Don_Gia": 545,
        "Thanh_Tien": 210915
      }
    ]
  },
  {
    "id": "DH092",
    "Ma_KH": "KH006",
    "Ten_KH": "Bệnh Viện Đa Khoa Khu Vực Bồng Sơn",
    "So_Hoa_Don": "HD2092",
    "Ngay_Soan": "2026-01-05",
    "Ngay_Giao": "2026-01-12",
    "Tong_Tien": 2961549449,
    "Items": [
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 44,
        "DVT": "Lọ",
        "Don_Gia": 12351,
        "Thanh_Tien": 543444
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 425,
        "DVT": "Xịt",
        "Don_Gia": 33232,
        "Thanh_Tien": 14123600
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 457,
        "DVT": "Ống",
        "Don_Gia": 6428233,
        "Thanh_Tien": 2937702481
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 215,
        "DVT": "Lọ",
        "Don_Gia": 15459,
        "Thanh_Tien": 3323685
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 497,
        "DVT": "Viên",
        "Don_Gia": 1320,
        "Thanh_Tien": 656040
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 50,
        "DVT": "Viên",
        "Don_Gia": 5047,
        "Thanh_Tien": 252350
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 269,
        "DVT": "Chai",
        "Don_Gia": 1156,
        "Thanh_Tien": 310964
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 219,
        "DVT": "Lọ",
        "Don_Gia": 1464,
        "Thanh_Tien": 320616
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 170,
        "DVT": "Viên",
        "Don_Gia": 384,
        "Thanh_Tien": 65280
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 101,
        "DVT": "Tuýp",
        "Don_Gia": 42089,
        "Thanh_Tien": 4250989
      }
    ]
  },
  {
    "id": "DH093",
    "Ma_KH": "KH015",
    "Ten_KH": "BV Đa khoa Cẩm Phả",
    "So_Hoa_Don": "HD2093",
    "Ngay_Soan": "2025-09-28",
    "Ngay_Giao": "2025-10-02",
    "Tong_Tien": 12413079,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 356,
        "DVT": "Ống",
        "Don_Gia": 1136,
        "Thanh_Tien": 404416
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 146,
        "DVT": "Ống",
        "Don_Gia": 931,
        "Thanh_Tien": 135926
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 181,
        "DVT": "Viên",
        "Don_Gia": 585,
        "Thanh_Tien": 105885
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 26,
        "DVT": "Xịt",
        "Don_Gia": 33523,
        "Thanh_Tien": 871598
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 299,
        "DVT": "Viên",
        "Don_Gia": 280,
        "Thanh_Tien": 83720
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 373,
        "DVT": "Viên",
        "Don_Gia": 5940,
        "Thanh_Tien": 2215620
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 477,
        "DVT": "Viên",
        "Don_Gia": 1607,
        "Thanh_Tien": 766539
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 396,
        "DVT": "Lọ",
        "Don_Gia": 1515,
        "Thanh_Tien": 599940
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 469,
        "DVT": "Ống",
        "Don_Gia": 645,
        "Thanh_Tien": 302505
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 61,
        "DVT": "Viên",
        "Don_Gia": 199,
        "Thanh_Tien": 12139
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 119,
        "DVT": "Viên",
        "Don_Gia": 2912,
        "Thanh_Tien": 346528
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 403,
        "DVT": "Lọ",
        "Don_Gia": 15309,
        "Thanh_Tien": 6169527
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 54,
        "DVT": "Chai",
        "Don_Gia": 7384,
        "Thanh_Tien": 398736
      }
    ]
  },
  {
    "id": "DH094",
    "Ma_KH": "KH010",
    "Ten_KH": "BỆNH VIỆN ĐA KHOA VŨ THƯ",
    "So_Hoa_Don": "HD2094",
    "Ngay_Soan": "2025-03-20",
    "Ngay_Giao": "2025-03-27",
    "Tong_Tien": 1984220072,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 240,
        "DVT": "Viên",
        "Don_Gia": 3483,
        "Thanh_Tien": 835920
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 361,
        "DVT": "Viên",
        "Don_Gia": 355,
        "Thanh_Tien": 128155
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 479,
        "DVT": "Lọ",
        "Don_Gia": 34869,
        "Thanh_Tien": 16702251
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 455,
        "DVT": "Viên",
        "Don_Gia": 295,
        "Thanh_Tien": 134225
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 301,
        "DVT": "Ống",
        "Don_Gia": 6416695,
        "Thanh_Tien": 1931425195
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 472,
        "DVT": "Xịt",
        "Don_Gia": 31857,
        "Thanh_Tien": 15036504
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 478,
        "DVT": "Ống",
        "Don_Gia": 1100,
        "Thanh_Tien": 525800
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 182,
        "DVT": "Viên",
        "Don_Gia": 1186,
        "Thanh_Tien": 215852
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 204,
        "DVT": "Viên",
        "Don_Gia": 14738,
        "Thanh_Tien": 3006552
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 344,
        "DVT": "Lọ",
        "Don_Gia": 1380,
        "Thanh_Tien": 474720
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 369,
        "DVT": "Tuýp",
        "Don_Gia": 42642,
        "Thanh_Tien": 15734898
      }
    ]
  },
  {
    "id": "DH095",
    "Ma_KH": "KH014",
    "Ten_KH": "BV Đa khoa Từ Sơn",
    "So_Hoa_Don": "HD2095",
    "Ngay_Soan": "2025-03-30",
    "Ngay_Giao": "2025-04-05",
    "Tong_Tien": 2946156350,
    "Items": [
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 461,
        "DVT": "Ống",
        "Don_Gia": 6330574,
        "Thanh_Tien": 2918394614
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 334,
        "DVT": "Lọ",
        "Don_Gia": 34706,
        "Thanh_Tien": 11591804
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 84,
        "DVT": "Viên",
        "Don_Gia": 302,
        "Thanh_Tien": 25368
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 460,
        "DVT": "Lọ",
        "Don_Gia": 15063,
        "Thanh_Tien": 6928980
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 303,
        "DVT": "Ống",
        "Don_Gia": 1237,
        "Thanh_Tien": 374811
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 140,
        "DVT": "Chai",
        "Don_Gia": 1029,
        "Thanh_Tien": 144060
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 119,
        "DVT": "Ống",
        "Don_Gia": 261,
        "Thanh_Tien": 31059
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 164,
        "DVT": "Lọ",
        "Don_Gia": 45584,
        "Thanh_Tien": 7475776
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 250,
        "DVT": "Viên",
        "Don_Gia": 3497,
        "Thanh_Tien": 874250
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 168,
        "DVT": "Lọ",
        "Don_Gia": 1391,
        "Thanh_Tien": 233688
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 482,
        "DVT": "Viên",
        "Don_Gia": 170,
        "Thanh_Tien": 81940
      }
    ]
  },
  {
    "id": "DH096",
    "Ma_KH": "KH007",
    "Ten_KH": "Trung tâm Y tế khu vực Lục Yên",
    "So_Hoa_Don": "HD2096",
    "Ngay_Soan": "2025-07-16",
    "Ngay_Giao": "2025-07-18",
    "Tong_Tien": 4356649,
    "Items": [
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 162,
        "DVT": "Viên",
        "Don_Gia": 342,
        "Thanh_Tien": 55404
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 401,
        "DVT": "Viên",
        "Don_Gia": 5403,
        "Thanh_Tien": 2166603
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 446,
        "DVT": "Viên",
        "Don_Gia": 389,
        "Thanh_Tien": 173494
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 436,
        "DVT": "Ống",
        "Don_Gia": 1137,
        "Thanh_Tien": 495732
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 48,
        "DVT": "Viên",
        "Don_Gia": 3184,
        "Thanh_Tien": 152832
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 84,
        "DVT": "Lọ",
        "Don_Gia": 15626,
        "Thanh_Tien": 1312584
      }
    ]
  },
  {
    "id": "DH097",
    "Ma_KH": "KH010",
    "Ten_KH": "BỆNH VIỆN ĐA KHOA VŨ THƯ",
    "So_Hoa_Don": "HD2097",
    "Ngay_Soan": "2025-12-31",
    "Ngay_Giao": "2026-01-06",
    "Tong_Tien": 119625699,
    "Items": [
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 419,
        "DVT": "Viên",
        "Don_Gia": 575,
        "Thanh_Tien": 240925
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 344,
        "DVT": "Lọ",
        "Don_Gia": 283483,
        "Thanh_Tien": 97518152
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 346,
        "DVT": "Viên",
        "Don_Gia": 300,
        "Thanh_Tien": 103800
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 479,
        "DVT": "Lọ",
        "Don_Gia": 31682,
        "Thanh_Tien": 15175678
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 167,
        "DVT": "Viên",
        "Don_Gia": 1834,
        "Thanh_Tien": 306278
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 127,
        "DVT": "Viên",
        "Don_Gia": 14056,
        "Thanh_Tien": 1785112
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 243,
        "DVT": "Lọ",
        "Don_Gia": 1394,
        "Thanh_Tien": 338742
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 262,
        "DVT": "Ống",
        "Don_Gia": 1016,
        "Thanh_Tien": 266192
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 10,
        "DVT": "Viên",
        "Don_Gia": 906,
        "Thanh_Tien": 9060
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 440,
        "DVT": "Chai",
        "Don_Gia": 8223,
        "Thanh_Tien": 3618120
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 354,
        "DVT": "Ống",
        "Don_Gia": 265,
        "Thanh_Tien": 93810
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 170,
        "DVT": "Chai",
        "Don_Gia": 999,
        "Thanh_Tien": 169830
      }
    ]
  },
  {
    "id": "DH098",
    "Ma_KH": "KH015",
    "Ten_KH": "BV Đa khoa Cẩm Phả",
    "So_Hoa_Don": "HD2098",
    "Ngay_Soan": "2026-02-14",
    "Ngay_Giao": "2026-02-18",
    "Tong_Tien": 882108024,
    "Items": [
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 133,
        "DVT": "Ống",
        "Don_Gia": 6315610,
        "Thanh_Tien": 839976130
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 229,
        "DVT": "Lọ",
        "Don_Gia": 1496,
        "Thanh_Tien": 342584
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 276,
        "DVT": "Lọ",
        "Don_Gia": 14714,
        "Thanh_Tien": 4061064
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 424,
        "DVT": "Chai",
        "Don_Gia": 8259,
        "Thanh_Tien": 3501816
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 442,
        "DVT": "Viên",
        "Don_Gia": 136,
        "Thanh_Tien": 60112
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 397,
        "DVT": "Viên",
        "Don_Gia": 1849,
        "Thanh_Tien": 734053
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 377,
        "DVT": "Viên",
        "Don_Gia": 5067,
        "Thanh_Tien": 1910259
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 499,
        "DVT": "Tuýp",
        "Don_Gia": 41337,
        "Thanh_Tien": 20627163
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 158,
        "DVT": "Lọ",
        "Don_Gia": 43002,
        "Thanh_Tien": 6794316
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 228,
        "DVT": "Viên",
        "Don_Gia": 14174,
        "Thanh_Tien": 3231672
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 368,
        "DVT": "Lọ",
        "Don_Gia": 1658,
        "Thanh_Tien": 610144
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 38,
        "DVT": "Viên",
        "Don_Gia": 172,
        "Thanh_Tien": 6536
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 275,
        "DVT": "Ống",
        "Don_Gia": 917,
        "Thanh_Tien": 252175
      }
    ]
  },
  {
    "id": "DH099",
    "Ma_KH": "KH019",
    "Ten_KH": "BV Phục hồi chức năng Thanh Hóa",
    "So_Hoa_Don": "HD2099",
    "Ngay_Soan": "2025-06-25",
    "Ngay_Giao": "2025-06-29",
    "Tong_Tien": 720966938,
    "Items": [
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 358,
        "DVT": "Viên",
        "Don_Gia": 140,
        "Thanh_Tien": 50120
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 319,
        "DVT": "Lọ",
        "Don_Gia": 1337,
        "Thanh_Tien": 426503
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 393,
        "DVT": "Lọ",
        "Don_Gia": 14978,
        "Thanh_Tien": 5886354
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 274,
        "DVT": "Viên",
        "Don_Gia": 1482,
        "Thanh_Tien": 406068
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 188,
        "DVT": "Lọ",
        "Don_Gia": 16193,
        "Thanh_Tien": 3044284
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 192,
        "DVT": "Ống",
        "Don_Gia": 1086,
        "Thanh_Tien": 208512
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 350,
        "DVT": "Ống",
        "Don_Gia": 1048,
        "Thanh_Tien": 366800
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 370,
        "DVT": "Viên",
        "Don_Gia": 3079,
        "Thanh_Tien": 1139230
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 124,
        "DVT": "Ống",
        "Don_Gia": 5644923,
        "Thanh_Tien": 699970452
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 175,
        "DVT": "Viên",
        "Don_Gia": 1834,
        "Thanh_Tien": 320950
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 124,
        "DVT": "Viên",
        "Don_Gia": 1102,
        "Thanh_Tien": 136648
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 313,
        "DVT": "Ống",
        "Don_Gia": 252,
        "Thanh_Tien": 78876
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 281,
        "DVT": "Viên",
        "Don_Gia": 291,
        "Thanh_Tien": 81771
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 428,
        "DVT": "Lọ",
        "Don_Gia": 20661,
        "Thanh_Tien": 8842908
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 14,
        "DVT": "Viên",
        "Don_Gia": 533,
        "Thanh_Tien": 7462
      }
    ]
  },
  {
    "id": "DH100",
    "Ma_KH": "KH008",
    "Ten_KH": "Trạm Y tế xã Bình Xuyên",
    "So_Hoa_Don": "HD2100",
    "Ngay_Soan": "2025-04-15",
    "Ngay_Giao": "2025-04-19",
    "Tong_Tien": 941023723,
    "Items": [
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 274,
        "DVT": "Lọ",
        "Don_Gia": 30630,
        "Thanh_Tien": 8392620
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 399,
        "DVT": "Viên",
        "Don_Gia": 450,
        "Thanh_Tien": 179550
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 154,
        "DVT": "Ống",
        "Don_Gia": 5979649,
        "Thanh_Tien": 920865946
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 357,
        "DVT": "Lọ",
        "Don_Gia": 1456,
        "Thanh_Tien": 519792
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 417,
        "DVT": "Chai",
        "Don_Gia": 1161,
        "Thanh_Tien": 484137
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 202,
        "DVT": "Viên",
        "Don_Gia": 333,
        "Thanh_Tien": 67266
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 88,
        "DVT": "Tuýp",
        "Don_Gia": 47959,
        "Thanh_Tien": 4220392
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 222,
        "DVT": "Viên",
        "Don_Gia": 500,
        "Thanh_Tien": 111000
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 341,
        "DVT": "Lọ",
        "Don_Gia": 13534,
        "Thanh_Tien": 4615094
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 468,
        "DVT": "Viên",
        "Don_Gia": 151,
        "Thanh_Tien": 70668
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 459,
        "DVT": "Viên",
        "Don_Gia": 3262,
        "Thanh_Tien": 1497258
      }
    ]
  }
];
