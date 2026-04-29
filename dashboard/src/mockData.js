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
    "Ma_KH": "KH010",
    "Ten_KH": "BỆNH VIỆN ĐA KHOA VŨ THƯ",
    "So_Hoa_Don": "HD2001",
    "Ngay_Soan": "2026-04-18",
    "Ngay_Giao": "2026-04-25",
    "Tong_Tien": 1185108021,
    "Items": [
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 154,
        "DVT": "Lọ",
        "Don_Gia": 16796,
        "Thanh_Tien": 2586584
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 216,
        "DVT": "Lọ",
        "Don_Gia": 38807,
        "Thanh_Tien": 8382312
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 124,
        "DVT": "Viên",
        "Don_Gia": 15224,
        "Thanh_Tien": 1887776
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 170,
        "DVT": "Ống",
        "Don_Gia": 6830435,
        "Thanh_Tien": 1161173950
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 37,
        "DVT": "Lọ",
        "Don_Gia": 34937,
        "Thanh_Tien": 1292669
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 212,
        "DVT": "Viên",
        "Don_Gia": 413,
        "Thanh_Tien": 87556
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 371,
        "DVT": "Viên",
        "Don_Gia": 185,
        "Thanh_Tien": 68635
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 331,
        "DVT": "Viên",
        "Don_Gia": 3287,
        "Thanh_Tien": 1087997
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 81,
        "DVT": "Lọ",
        "Don_Gia": 17910,
        "Thanh_Tien": 1450710
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 432,
        "DVT": "Viên",
        "Don_Gia": 542,
        "Thanh_Tien": 234144
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 65,
        "DVT": "Xịt",
        "Don_Gia": 34846,
        "Thanh_Tien": 2264990
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 319,
        "DVT": "Lọ",
        "Don_Gia": 13045,
        "Thanh_Tien": 4161355
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 235,
        "DVT": "Ống",
        "Don_Gia": 1251,
        "Thanh_Tien": 293985
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 27,
        "DVT": "Ống",
        "Don_Gia": 270,
        "Thanh_Tien": 7290
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 202,
        "DVT": "Ống",
        "Don_Gia": 634,
        "Thanh_Tien": 128068
      }
    ]
  },
  {
    "id": "DH002",
    "Ma_KH": "KH002",
    "Ten_KH": "BV Việt Đức",
    "So_Hoa_Don": "HD2002",
    "Ngay_Soan": "2026-01-15",
    "Ngay_Giao": "2026-01-19",
    "Tong_Tien": 67157837,
    "Items": [
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 19,
        "DVT": "Viên",
        "Don_Gia": 372,
        "Thanh_Tien": 7068
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 389,
        "DVT": "Lọ",
        "Don_Gia": 1611,
        "Thanh_Tien": 626679
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 144,
        "DVT": "Xịt",
        "Don_Gia": 33568,
        "Thanh_Tien": 4833792
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 38,
        "DVT": "Lọ",
        "Don_Gia": 17658,
        "Thanh_Tien": 671004
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 150,
        "DVT": "Lọ",
        "Don_Gia": 32717,
        "Thanh_Tien": 4907550
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 349,
        "DVT": "Ống",
        "Don_Gia": 225,
        "Thanh_Tien": 78525
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 187,
        "DVT": "Viên",
        "Don_Gia": 582,
        "Thanh_Tien": 108834
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 454,
        "DVT": "Ống",
        "Don_Gia": 1164,
        "Thanh_Tien": 528456
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 374,
        "DVT": "Lọ",
        "Don_Gia": 15262,
        "Thanh_Tien": 5707988
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 49,
        "DVT": "Viên",
        "Don_Gia": 445,
        "Thanh_Tien": 21805
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 149,
        "DVT": "Lọ",
        "Don_Gia": 324094,
        "Thanh_Tien": 48290006
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 214,
        "DVT": "Lọ",
        "Don_Gia": 1602,
        "Thanh_Tien": 342828
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 426,
        "DVT": "Ống",
        "Don_Gia": 1029,
        "Thanh_Tien": 438354
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 172,
        "DVT": "Viên",
        "Don_Gia": 3459,
        "Thanh_Tien": 594948
      }
    ]
  },
  {
    "id": "DH003",
    "Ma_KH": "KH020",
    "Ten_KH": "Trạm Y tế xã Xuân Lăng",
    "So_Hoa_Don": "HD2003",
    "Ngay_Soan": "2025-02-23",
    "Ngay_Giao": "2025-03-01",
    "Tong_Tien": 16745938,
    "Items": [
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 440,
        "DVT": "Chai",
        "Don_Gia": 7370,
        "Thanh_Tien": 3242800
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 276,
        "DVT": "Lọ",
        "Don_Gia": 20706,
        "Thanh_Tien": 5714856
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 81,
        "DVT": "Viên",
        "Don_Gia": 800,
        "Thanh_Tien": 64800
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 87,
        "DVT": "Lọ",
        "Don_Gia": 42286,
        "Thanh_Tien": 3678882
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 320,
        "DVT": "Viên",
        "Don_Gia": 12612,
        "Thanh_Tien": 4035840
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 60,
        "DVT": "Viên",
        "Don_Gia": 146,
        "Thanh_Tien": 8760
      }
    ]
  },
  {
    "id": "DH004",
    "Ma_KH": "KH016",
    "Ten_KH": "BV Đa khoa số 2 tỉnh Lào Cai",
    "So_Hoa_Don": "HD2004",
    "Ngay_Soan": "2025-10-01",
    "Ngay_Giao": "2025-10-05",
    "Tong_Tien": 24072570,
    "Items": [
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 232,
        "DVT": "Lọ",
        "Don_Gia": 12491,
        "Thanh_Tien": 2897912
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 392,
        "DVT": "Viên",
        "Don_Gia": 586,
        "Thanh_Tien": 229712
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 67,
        "DVT": "Chai",
        "Don_Gia": 6912,
        "Thanh_Tien": 463104
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 158,
        "DVT": "Lọ",
        "Don_Gia": 47418,
        "Thanh_Tien": 7492044
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 331,
        "DVT": "Lọ",
        "Don_Gia": 20242,
        "Thanh_Tien": 6700102
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 256,
        "DVT": "Viên",
        "Don_Gia": 5370,
        "Thanh_Tien": 1374720
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 132,
        "DVT": "Xịt",
        "Don_Gia": 29014,
        "Thanh_Tien": 3829848
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 42,
        "DVT": "Viên",
        "Don_Gia": 3316,
        "Thanh_Tien": 139272
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 388,
        "DVT": "Ống",
        "Don_Gia": 627,
        "Thanh_Tien": 243276
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 466,
        "DVT": "Viên",
        "Don_Gia": 338,
        "Thanh_Tien": 157508
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 377,
        "DVT": "Viên",
        "Don_Gia": 410,
        "Thanh_Tien": 154570
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 449,
        "DVT": "Viên",
        "Don_Gia": 384,
        "Thanh_Tien": 172416
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 253,
        "DVT": "Viên",
        "Don_Gia": 862,
        "Thanh_Tien": 218086
      }
    ]
  },
  {
    "id": "DH005",
    "Ma_KH": "KH010",
    "Ten_KH": "BỆNH VIỆN ĐA KHOA VŨ THƯ",
    "So_Hoa_Don": "HD2005",
    "Ngay_Soan": "2025-04-14",
    "Ngay_Giao": "2025-04-18",
    "Tong_Tien": 2267599341,
    "Items": [
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 362,
        "DVT": "Ống",
        "Don_Gia": 6225021,
        "Thanh_Tien": 2253457602
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 340,
        "DVT": "Lọ",
        "Don_Gia": 38101,
        "Thanh_Tien": 12954340
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 401,
        "DVT": "Viên",
        "Don_Gia": 382,
        "Thanh_Tien": 153182
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 216,
        "DVT": "Viên",
        "Don_Gia": 1169,
        "Thanh_Tien": 252504
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 426,
        "DVT": "Lọ",
        "Don_Gia": 1513,
        "Thanh_Tien": 644538
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 465,
        "DVT": "Viên",
        "Don_Gia": 295,
        "Thanh_Tien": 137175
      }
    ]
  },
  {
    "id": "DH006",
    "Ma_KH": "KH001",
    "Ten_KH": "BV Bạch Mai",
    "So_Hoa_Don": "HD2006",
    "Ngay_Soan": "2026-04-13",
    "Ngay_Giao": "2026-04-20",
    "Tong_Tien": 3073882815,
    "Items": [
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 484,
        "DVT": "Ống",
        "Don_Gia": 1024,
        "Thanh_Tien": 495616
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 426,
        "DVT": "Ống",
        "Don_Gia": 645,
        "Thanh_Tien": 274770
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 154,
        "DVT": "Chai",
        "Don_Gia": 1227,
        "Thanh_Tien": 188958
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 173,
        "DVT": "Ống",
        "Don_Gia": 275,
        "Thanh_Tien": 47575
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 452,
        "DVT": "Ống",
        "Don_Gia": 6798398,
        "Thanh_Tien": 3072875896
      }
    ]
  },
  {
    "id": "DH007",
    "Ma_KH": "KH013",
    "Ten_KH": "BV đa khoa Đông Anh",
    "So_Hoa_Don": "HD2007",
    "Ngay_Soan": "2026-04-06",
    "Ngay_Giao": "2026-04-08",
    "Tong_Tien": 1918568337,
    "Items": [
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 380,
        "DVT": "Chai",
        "Don_Gia": 1140,
        "Thanh_Tien": 433200
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 390,
        "DVT": "Viên",
        "Don_Gia": 1971,
        "Thanh_Tien": 768690
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 476,
        "DVT": "Ống",
        "Don_Gia": 233,
        "Thanh_Tien": 110908
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 419,
        "DVT": "Ống",
        "Don_Gia": 631,
        "Thanh_Tien": 264389
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 420,
        "DVT": "Viên",
        "Don_Gia": 13914,
        "Thanh_Tien": 5843880
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 100,
        "DVT": "Lọ",
        "Don_Gia": 14476,
        "Thanh_Tien": 1447600
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 162,
        "DVT": "Chai",
        "Don_Gia": 7695,
        "Thanh_Tien": 1246590
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 270,
        "DVT": "Viên",
        "Don_Gia": 147,
        "Thanh_Tien": 39690
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 75,
        "DVT": "Viên",
        "Don_Gia": 3400,
        "Thanh_Tien": 255000
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 398,
        "DVT": "Viên",
        "Don_Gia": 300,
        "Thanh_Tien": 119400
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 286,
        "DVT": "Ống",
        "Don_Gia": 6671465,
        "Thanh_Tien": 1908038990
      }
    ]
  },
  {
    "id": "DH008",
    "Ma_KH": "KH008",
    "Ten_KH": "Trạm Y tế xã Bình Xuyên",
    "So_Hoa_Don": "HD2008",
    "Ngay_Soan": "2025-07-12",
    "Ngay_Giao": "2025-07-14",
    "Tong_Tien": 439214439,
    "Items": [
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 146,
        "DVT": "Lọ",
        "Don_Gia": 46416,
        "Thanh_Tien": 6776736
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 181,
        "DVT": "Ống",
        "Don_Gia": 646,
        "Thanh_Tien": 116926
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 55,
        "DVT": "Viên",
        "Don_Gia": 309,
        "Thanh_Tien": 16995
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 34,
        "DVT": "Viên",
        "Don_Gia": 476,
        "Thanh_Tien": 16184
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 352,
        "DVT": "Viên",
        "Don_Gia": 185,
        "Thanh_Tien": 65120
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 59,
        "DVT": "Lọ",
        "Don_Gia": 35450,
        "Thanh_Tien": 2091550
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 362,
        "DVT": "Ống",
        "Don_Gia": 880,
        "Thanh_Tien": 318560
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 265,
        "DVT": "Viên",
        "Don_Gia": 736,
        "Thanh_Tien": 195040
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 151,
        "DVT": "Viên",
        "Don_Gia": 5416,
        "Thanh_Tien": 817816
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 110,
        "DVT": "Viên",
        "Don_Gia": 13338,
        "Thanh_Tien": 1467180
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 68,
        "DVT": "Ống",
        "Don_Gia": 6284299,
        "Thanh_Tien": 427332332
      }
    ]
  },
  {
    "id": "DH009",
    "Ma_KH": "KH006",
    "Ten_KH": "Bệnh Viện Đa Khoa Khu Vực Bồng Sơn",
    "So_Hoa_Don": "HD2009",
    "Ngay_Soan": "2025-01-15",
    "Ngay_Giao": "2025-01-22",
    "Tong_Tien": 22050949,
    "Items": [
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 137,
        "DVT": "Tuýp",
        "Don_Gia": 41824,
        "Thanh_Tien": 5729888
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 420,
        "DVT": "Viên",
        "Don_Gia": 154,
        "Thanh_Tien": 64680
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 320,
        "DVT": "Viên",
        "Don_Gia": 3000,
        "Thanh_Tien": 960000
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 55,
        "DVT": "Lọ",
        "Don_Gia": 28991,
        "Thanh_Tien": 1594505
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 50,
        "DVT": "Lọ",
        "Don_Gia": 41994,
        "Thanh_Tien": 2099700
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 157,
        "DVT": "Lọ",
        "Don_Gia": 14057,
        "Thanh_Tien": 2206949
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 442,
        "DVT": "Ống",
        "Don_Gia": 273,
        "Thanh_Tien": 120666
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 200,
        "DVT": "Ống",
        "Don_Gia": 560,
        "Thanh_Tien": 112000
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 454,
        "DVT": "Chai",
        "Don_Gia": 1045,
        "Thanh_Tien": 474430
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 465,
        "DVT": "Viên",
        "Don_Gia": 12348,
        "Thanh_Tien": 5741820
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 430,
        "DVT": "Lọ",
        "Don_Gia": 1417,
        "Thanh_Tien": 609310
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 68,
        "DVT": "Xịt",
        "Don_Gia": 30920,
        "Thanh_Tien": 2102560
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 171,
        "DVT": "Lọ",
        "Don_Gia": 1371,
        "Thanh_Tien": 234441
      }
    ]
  },
  {
    "id": "DH010",
    "Ma_KH": "KH018",
    "Ten_KH": "BV Đa khoa tỉnh Quảng Trị",
    "So_Hoa_Don": "HD2010",
    "Ngay_Soan": "2025-09-21",
    "Ngay_Giao": "2025-09-27",
    "Tong_Tien": 2725808946,
    "Items": [
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 85,
        "DVT": "Chai",
        "Don_Gia": 6601,
        "Thanh_Tien": 561085
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 150,
        "DVT": "Viên",
        "Don_Gia": 301,
        "Thanh_Tien": 45150
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 258,
        "DVT": "Viên",
        "Don_Gia": 2904,
        "Thanh_Tien": 749232
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 143,
        "DVT": "Lọ",
        "Don_Gia": 1449,
        "Thanh_Tien": 207207
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 316,
        "DVT": "Xịt",
        "Don_Gia": 34685,
        "Thanh_Tien": 10960460
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 147,
        "DVT": "Viên",
        "Don_Gia": 2011,
        "Thanh_Tien": 295617
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 11,
        "DVT": "Tuýp",
        "Don_Gia": 41341,
        "Thanh_Tien": 454751
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 80,
        "DVT": "Viên",
        "Don_Gia": 1606,
        "Thanh_Tien": 128480
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 484,
        "DVT": "Ống",
        "Don_Gia": 5595335,
        "Thanh_Tien": 2708142140
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 238,
        "DVT": "Viên",
        "Don_Gia": 143,
        "Thanh_Tien": 34034
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 205,
        "DVT": "Lọ",
        "Don_Gia": 20638,
        "Thanh_Tien": 4230790
      }
    ]
  },
  {
    "id": "DH011",
    "Ma_KH": "KH005",
    "Ten_KH": "Bệnh viện Đại học Y Hà Nội",
    "So_Hoa_Don": "HD2011",
    "Ngay_Soan": "2026-02-09",
    "Ngay_Giao": "2026-02-12",
    "Tong_Tien": 1657078756,
    "Items": [
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 10,
        "DVT": "Lọ",
        "Don_Gia": 271441,
        "Thanh_Tien": 2714410
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 224,
        "DVT": "Lọ",
        "Don_Gia": 35826,
        "Thanh_Tien": 8025024
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 110,
        "DVT": "Viên",
        "Don_Gia": 907,
        "Thanh_Tien": 99770
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 364,
        "DVT": "Ống",
        "Don_Gia": 1080,
        "Thanh_Tien": 393120
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 242,
        "DVT": "Ống",
        "Don_Gia": 6794719,
        "Thanh_Tien": 1644321998
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 444,
        "DVT": "Lọ",
        "Don_Gia": 1354,
        "Thanh_Tien": 601176
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 136,
        "DVT": "Viên",
        "Don_Gia": 374,
        "Thanh_Tien": 50864
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 129,
        "DVT": "Viên",
        "Don_Gia": 195,
        "Thanh_Tien": 25155
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 26,
        "DVT": "Ống",
        "Don_Gia": 698,
        "Thanh_Tien": 18148
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 71,
        "DVT": "Viên",
        "Don_Gia": 5870,
        "Thanh_Tien": 416770
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 347,
        "DVT": "Viên",
        "Don_Gia": 149,
        "Thanh_Tien": 51703
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 124,
        "DVT": "Viên",
        "Don_Gia": 347,
        "Thanh_Tien": 43028
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 325,
        "DVT": "Viên",
        "Don_Gia": 530,
        "Thanh_Tien": 172250
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 338,
        "DVT": "Viên",
        "Don_Gia": 430,
        "Thanh_Tien": 145340
      }
    ]
  },
  {
    "id": "DH012",
    "Ma_KH": "KH001",
    "Ten_KH": "BV Bạch Mai",
    "So_Hoa_Don": "HD2012",
    "Ngay_Soan": "2025-06-21",
    "Ngay_Giao": "2025-06-24",
    "Tong_Tien": 168731198,
    "Items": [
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 450,
        "DVT": "Lọ",
        "Don_Gia": 35974,
        "Thanh_Tien": 16188300
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 28,
        "DVT": "Viên",
        "Don_Gia": 198,
        "Thanh_Tien": 5544
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 465,
        "DVT": "Viên",
        "Don_Gia": 429,
        "Thanh_Tien": 199485
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 405,
        "DVT": "Ống",
        "Don_Gia": 990,
        "Thanh_Tien": 400950
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 129,
        "DVT": "Lọ",
        "Don_Gia": 39117,
        "Thanh_Tien": 5046093
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 402,
        "DVT": "Viên",
        "Don_Gia": 373,
        "Thanh_Tien": 149946
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 440,
        "DVT": "Lọ",
        "Don_Gia": 333502,
        "Thanh_Tien": 146740880
      }
    ]
  },
  {
    "id": "DH013",
    "Ma_KH": "KH015",
    "Ten_KH": "BV Đa khoa Cẩm Phả",
    "So_Hoa_Don": "HD2013",
    "Ngay_Soan": "2025-12-02",
    "Ngay_Giao": "2025-12-07",
    "Tong_Tien": 797154345,
    "Items": [
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 118,
        "DVT": "Ống",
        "Don_Gia": 5910234,
        "Thanh_Tien": 697407612
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 325,
        "DVT": "Viên",
        "Don_Gia": 145,
        "Thanh_Tien": 47125
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 280,
        "DVT": "Lọ",
        "Don_Gia": 1608,
        "Thanh_Tien": 450240
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 36,
        "DVT": "Lọ",
        "Don_Gia": 18413,
        "Thanh_Tien": 662868
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 425,
        "DVT": "Ống",
        "Don_Gia": 569,
        "Thanh_Tien": 241825
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 26,
        "DVT": "Lọ",
        "Don_Gia": 14080,
        "Thanh_Tien": 366080
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 187,
        "DVT": "Lọ",
        "Don_Gia": 290537,
        "Thanh_Tien": 54330419
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 138,
        "DVT": "Viên",
        "Don_Gia": 294,
        "Thanh_Tien": 40572
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 485,
        "DVT": "Viên",
        "Don_Gia": 1868,
        "Thanh_Tien": 905980
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 482,
        "DVT": "Viên",
        "Don_Gia": 178,
        "Thanh_Tien": 85796
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 431,
        "DVT": "Lọ",
        "Don_Gia": 45878,
        "Thanh_Tien": 19773418
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 374,
        "DVT": "Viên",
        "Don_Gia": 401,
        "Thanh_Tien": 149974
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 404,
        "DVT": "Xịt",
        "Don_Gia": 28981,
        "Thanh_Tien": 11708324
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 274,
        "DVT": "Lọ",
        "Don_Gia": 40088,
        "Thanh_Tien": 10984112
      }
    ]
  },
  {
    "id": "DH014",
    "Ma_KH": "KH013",
    "Ten_KH": "BV đa khoa Đông Anh",
    "So_Hoa_Don": "HD2014",
    "Ngay_Soan": "2025-05-31",
    "Ngay_Giao": "2025-06-04",
    "Tong_Tien": 13015118,
    "Items": [
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 217,
        "DVT": "Chai",
        "Don_Gia": 8189,
        "Thanh_Tien": 1777013
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 104,
        "DVT": "Viên",
        "Don_Gia": 2045,
        "Thanh_Tien": 212680
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 414,
        "DVT": "Viên",
        "Don_Gia": 291,
        "Thanh_Tien": 120474
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 478,
        "DVT": "Viên",
        "Don_Gia": 14631,
        "Thanh_Tien": 6993618
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 343,
        "DVT": "Viên",
        "Don_Gia": 370,
        "Thanh_Tien": 126910
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 30,
        "DVT": "Viên",
        "Don_Gia": 763,
        "Thanh_Tien": 22890
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 205,
        "DVT": "Lọ",
        "Don_Gia": 18304,
        "Thanh_Tien": 3752320
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 37,
        "DVT": "Ống",
        "Don_Gia": 249,
        "Thanh_Tien": 9213
      }
    ]
  },
  {
    "id": "DH015",
    "Ma_KH": "KH013",
    "Ten_KH": "BV đa khoa Đông Anh",
    "So_Hoa_Don": "HD2015",
    "Ngay_Soan": "2025-08-24",
    "Ngay_Giao": "2025-08-29",
    "Tong_Tien": 1155076964,
    "Items": [
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 462,
        "DVT": "Lọ",
        "Don_Gia": 12185,
        "Thanh_Tien": 5629470
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 284,
        "DVT": "Viên",
        "Don_Gia": 156,
        "Thanh_Tien": 44304
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 256,
        "DVT": "Viên",
        "Don_Gia": 594,
        "Thanh_Tien": 152064
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 381,
        "DVT": "Viên",
        "Don_Gia": 5788,
        "Thanh_Tien": 2205228
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 236,
        "DVT": "Lọ",
        "Don_Gia": 1526,
        "Thanh_Tien": 360136
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 195,
        "DVT": "Ống",
        "Don_Gia": 5820853,
        "Thanh_Tien": 1135066335
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 82,
        "DVT": "Viên",
        "Don_Gia": 1655,
        "Thanh_Tien": 135710
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 264,
        "DVT": "Viên",
        "Don_Gia": 2783,
        "Thanh_Tien": 734712
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 442,
        "DVT": "Ống",
        "Don_Gia": 656,
        "Thanh_Tien": 289952
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 319,
        "DVT": "Xịt",
        "Don_Gia": 32787,
        "Thanh_Tien": 10459053
      }
    ]
  },
  {
    "id": "DH016",
    "Ma_KH": "KH013",
    "Ten_KH": "BV đa khoa Đông Anh",
    "So_Hoa_Don": "HD2016",
    "Ngay_Soan": "2026-01-04",
    "Ngay_Giao": "2026-01-06",
    "Tong_Tien": 2278424553,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 483,
        "DVT": "Viên",
        "Don_Gia": 1738,
        "Thanh_Tien": 839454
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 280,
        "DVT": "Lọ",
        "Don_Gia": 34466,
        "Thanh_Tien": 9650480
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 229,
        "DVT": "Lọ",
        "Don_Gia": 54501,
        "Thanh_Tien": 12480729
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 291,
        "DVT": "Lọ",
        "Don_Gia": 12366,
        "Thanh_Tien": 3598506
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 169,
        "DVT": "Lọ",
        "Don_Gia": 1418,
        "Thanh_Tien": 239642
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 79,
        "DVT": "Viên",
        "Don_Gia": 2835,
        "Thanh_Tien": 223965
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 348,
        "DVT": "Lọ",
        "Don_Gia": 17076,
        "Thanh_Tien": 5942448
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 202,
        "DVT": "Viên",
        "Don_Gia": 897,
        "Thanh_Tien": 181194
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 45,
        "DVT": "Viên",
        "Don_Gia": 1597,
        "Thanh_Tien": 71865
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 481,
        "DVT": "Viên",
        "Don_Gia": 277,
        "Thanh_Tien": 133237
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 328,
        "DVT": "Ống",
        "Don_Gia": 6838019,
        "Thanh_Tien": 2242870232
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 20,
        "DVT": "Lọ",
        "Don_Gia": 20681,
        "Thanh_Tien": 413620
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 269,
        "DVT": "Lọ",
        "Don_Gia": 1337,
        "Thanh_Tien": 359653
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 114,
        "DVT": "Viên",
        "Don_Gia": 12452,
        "Thanh_Tien": 1419528
      }
    ]
  },
  {
    "id": "DH017",
    "Ma_KH": "KH016",
    "Ten_KH": "BV Đa khoa số 2 tỉnh Lào Cai",
    "So_Hoa_Don": "HD2017",
    "Ngay_Soan": "2025-08-27",
    "Ngay_Giao": "2025-09-03",
    "Tong_Tien": 97672894,
    "Items": [
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 452,
        "DVT": "Viên",
        "Don_Gia": 506,
        "Thanh_Tien": 228712
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 45,
        "DVT": "Viên",
        "Don_Gia": 5860,
        "Thanh_Tien": 263700
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 304,
        "DVT": "Xịt",
        "Don_Gia": 32524,
        "Thanh_Tien": 9887296
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 321,
        "DVT": "Lọ",
        "Don_Gia": 50825,
        "Thanh_Tien": 16314825
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 454,
        "DVT": "Lọ",
        "Don_Gia": 40976,
        "Thanh_Tien": 18603104
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 159,
        "DVT": "Lọ",
        "Don_Gia": 298046,
        "Thanh_Tien": 47389314
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 381,
        "DVT": "Viên",
        "Don_Gia": 209,
        "Thanh_Tien": 79629
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 75,
        "DVT": "Tuýp",
        "Don_Gia": 44626,
        "Thanh_Tien": 3346950
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 88,
        "DVT": "Ống",
        "Don_Gia": 946,
        "Thanh_Tien": 83248
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 211,
        "DVT": "Viên",
        "Don_Gia": 3346,
        "Thanh_Tien": 706006
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 457,
        "DVT": "Lọ",
        "Don_Gia": 1475,
        "Thanh_Tien": 674075
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 394,
        "DVT": "Viên",
        "Don_Gia": 155,
        "Thanh_Tien": 61070
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 35,
        "DVT": "Ống",
        "Don_Gia": 999,
        "Thanh_Tien": 34965
      }
    ]
  },
  {
    "id": "DH018",
    "Ma_KH": "KH020",
    "Ten_KH": "Trạm Y tế xã Xuân Lăng",
    "So_Hoa_Don": "HD2018",
    "Ngay_Soan": "2026-01-05",
    "Ngay_Giao": "2026-01-08",
    "Tong_Tien": 46846149,
    "Items": [
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 355,
        "DVT": "Viên",
        "Don_Gia": 1546,
        "Thanh_Tien": 548830
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 382,
        "DVT": "Viên",
        "Don_Gia": 870,
        "Thanh_Tien": 332340
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 62,
        "DVT": "Viên",
        "Don_Gia": 3050,
        "Thanh_Tien": 189100
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 149,
        "DVT": "Viên",
        "Don_Gia": 167,
        "Thanh_Tien": 24883
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 436,
        "DVT": "Tuýp",
        "Don_Gia": 42938,
        "Thanh_Tien": 18720968
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 348,
        "DVT": "Lọ",
        "Don_Gia": 40458,
        "Thanh_Tien": 14079384
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 187,
        "DVT": "Lọ",
        "Don_Gia": 17903,
        "Thanh_Tien": 3347861
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 355,
        "DVT": "Lọ",
        "Don_Gia": 1421,
        "Thanh_Tien": 504455
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 461,
        "DVT": "Viên",
        "Don_Gia": 383,
        "Thanh_Tien": 176563
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 215,
        "DVT": "Lọ",
        "Don_Gia": 30360,
        "Thanh_Tien": 6527400
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 289,
        "DVT": "Chai",
        "Don_Gia": 8285,
        "Thanh_Tien": 2394365
      }
    ]
  },
  {
    "id": "DH019",
    "Ma_KH": "KH018",
    "Ten_KH": "BV Đa khoa tỉnh Quảng Trị",
    "So_Hoa_Don": "HD2019",
    "Ngay_Soan": "2025-11-03",
    "Ngay_Giao": "2025-11-05",
    "Tong_Tien": 1334300081,
    "Items": [
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 14,
        "DVT": "Lọ",
        "Don_Gia": 1409,
        "Thanh_Tien": 19726
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 363,
        "DVT": "Lọ",
        "Don_Gia": 12354,
        "Thanh_Tien": 4484502
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 259,
        "DVT": "Viên",
        "Don_Gia": 608,
        "Thanh_Tien": 157472
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 118,
        "DVT": "Lọ",
        "Don_Gia": 1389,
        "Thanh_Tien": 163902
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 240,
        "DVT": "Lọ",
        "Don_Gia": 32164,
        "Thanh_Tien": 7719360
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 275,
        "DVT": "Viên",
        "Don_Gia": 166,
        "Thanh_Tien": 45650
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 29,
        "DVT": "Xịt",
        "Don_Gia": 34739,
        "Thanh_Tien": 1007431
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 345,
        "DVT": "Lọ",
        "Don_Gia": 323006,
        "Thanh_Tien": 111437070
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 156,
        "DVT": "Lọ",
        "Don_Gia": 14543,
        "Thanh_Tien": 2268708
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 396,
        "DVT": "Chai",
        "Don_Gia": 7509,
        "Thanh_Tien": 2973564
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 191,
        "DVT": "Ống",
        "Don_Gia": 6288946,
        "Thanh_Tien": 1201188686
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 57,
        "DVT": "Lọ",
        "Don_Gia": 40170,
        "Thanh_Tien": 2289690
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 480,
        "DVT": "Viên",
        "Don_Gia": 1134,
        "Thanh_Tien": 544320
      }
    ]
  },
  {
    "id": "DH020",
    "Ma_KH": "KH011",
    "Ten_KH": "TRUNG TÂM MẮT TỈNH QUẢNG NGÃI",
    "So_Hoa_Don": "HD2020",
    "Ngay_Soan": "2025-08-18",
    "Ngay_Giao": "2025-08-20",
    "Tong_Tien": 164083836,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 214,
        "DVT": "Viên",
        "Don_Gia": 2046,
        "Thanh_Tien": 437844
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 475,
        "DVT": "Viên",
        "Don_Gia": 320,
        "Thanh_Tien": 152000
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 241,
        "DVT": "Viên",
        "Don_Gia": 14904,
        "Thanh_Tien": 3591864
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 127,
        "DVT": "Viên",
        "Don_Gia": 197,
        "Thanh_Tien": 25019
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 245,
        "DVT": "Viên",
        "Don_Gia": 1323,
        "Thanh_Tien": 324135
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 177,
        "DVT": "Ống",
        "Don_Gia": 997,
        "Thanh_Tien": 176469
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 261,
        "DVT": "Lọ",
        "Don_Gia": 52373,
        "Thanh_Tien": 13669353
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 442,
        "DVT": "Lọ",
        "Don_Gia": 16687,
        "Thanh_Tien": 7375654
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 432,
        "DVT": "Lọ",
        "Don_Gia": 1673,
        "Thanh_Tien": 722736
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 268,
        "DVT": "Viên",
        "Don_Gia": 730,
        "Thanh_Tien": 195640
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 447,
        "DVT": "Lọ",
        "Don_Gia": 306754,
        "Thanh_Tien": 137119038
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 252,
        "DVT": "Viên",
        "Don_Gia": 1167,
        "Thanh_Tien": 294084
      }
    ]
  },
  {
    "id": "DH021",
    "Ma_KH": "KH003",
    "Ten_KH": "BV Chợ Rẫy",
    "So_Hoa_Don": "HD2021",
    "Ngay_Soan": "2025-10-28",
    "Ngay_Giao": "2025-11-02",
    "Tong_Tien": 4650311,
    "Items": [
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 489,
        "DVT": "Viên",
        "Don_Gia": 176,
        "Thanh_Tien": 86064
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 476,
        "DVT": "Ống",
        "Don_Gia": 220,
        "Thanh_Tien": 104720
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 287,
        "DVT": "Viên",
        "Don_Gia": 12728,
        "Thanh_Tien": 3652936
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 403,
        "DVT": "Viên",
        "Don_Gia": 414,
        "Thanh_Tien": 166842
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 27,
        "DVT": "Viên",
        "Don_Gia": 1775,
        "Thanh_Tien": 47925
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 278,
        "DVT": "Ống",
        "Don_Gia": 1020,
        "Thanh_Tien": 283560
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 452,
        "DVT": "Ống",
        "Don_Gia": 682,
        "Thanh_Tien": 308264
      }
    ]
  },
  {
    "id": "DH022",
    "Ma_KH": "KH010",
    "Ten_KH": "BỆNH VIỆN ĐA KHOA VŨ THƯ",
    "So_Hoa_Don": "HD2022",
    "Ngay_Soan": "2025-03-26",
    "Ngay_Giao": "2025-04-01",
    "Tong_Tien": 10876886,
    "Items": [
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 392,
        "DVT": "Lọ",
        "Don_Gia": 13096,
        "Thanh_Tien": 5133632
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 127,
        "DVT": "Viên",
        "Don_Gia": 1274,
        "Thanh_Tien": 161798
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 204,
        "DVT": "Viên",
        "Don_Gia": 348,
        "Thanh_Tien": 70992
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 228,
        "DVT": "Lọ",
        "Don_Gia": 20511,
        "Thanh_Tien": 4676508
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 174,
        "DVT": "Lọ",
        "Don_Gia": 1402,
        "Thanh_Tien": 243948
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 18,
        "DVT": "Viên",
        "Don_Gia": 2789,
        "Thanh_Tien": 50202
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 454,
        "DVT": "Ống",
        "Don_Gia": 1189,
        "Thanh_Tien": 539806
      }
    ]
  },
  {
    "id": "DH023",
    "Ma_KH": "KH012",
    "Ten_KH": "TRUNG TÂM Y TẾ AN DƯƠNG",
    "So_Hoa_Don": "HD2023",
    "Ngay_Soan": "2026-01-19",
    "Ngay_Giao": "2026-01-23",
    "Tong_Tien": 250603071,
    "Items": [
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 255,
        "DVT": "Ống",
        "Don_Gia": 1013,
        "Thanh_Tien": 258315
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 464,
        "DVT": "Viên",
        "Don_Gia": 3078,
        "Thanh_Tien": 1428192
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 113,
        "DVT": "Chai",
        "Don_Gia": 1031,
        "Thanh_Tien": 116503
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 433,
        "DVT": "Ống",
        "Don_Gia": 994,
        "Thanh_Tien": 430402
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 201,
        "DVT": "Viên",
        "Don_Gia": 1400,
        "Thanh_Tien": 281400
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 37,
        "DVT": "Ống",
        "Don_Gia": 6697650,
        "Thanh_Tien": 247813050
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 197,
        "DVT": "Lọ",
        "Don_Gia": 1397,
        "Thanh_Tien": 275209
      }
    ]
  },
  {
    "id": "DH024",
    "Ma_KH": "KH015",
    "Ten_KH": "BV Đa khoa Cẩm Phả",
    "So_Hoa_Don": "HD2024",
    "Ngay_Soan": "2025-10-20",
    "Ngay_Giao": "2025-10-26",
    "Tong_Tien": 148444386,
    "Items": [
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 11,
        "DVT": "Lọ",
        "Don_Gia": 14691,
        "Thanh_Tien": 161601
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 495,
        "DVT": "Viên",
        "Don_Gia": 329,
        "Thanh_Tien": 162855
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 274,
        "DVT": "Lọ",
        "Don_Gia": 1500,
        "Thanh_Tien": 411000
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 128,
        "DVT": "Viên",
        "Don_Gia": 178,
        "Thanh_Tien": 22784
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 286,
        "DVT": "Ống",
        "Don_Gia": 1057,
        "Thanh_Tien": 302302
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 312,
        "DVT": "Viên",
        "Don_Gia": 1523,
        "Thanh_Tien": 475176
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 389,
        "DVT": "Lọ",
        "Don_Gia": 34229,
        "Thanh_Tien": 13315081
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 234,
        "DVT": "Xịt",
        "Don_Gia": 32632,
        "Thanh_Tien": 7635888
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 150,
        "DVT": "Viên",
        "Don_Gia": 372,
        "Thanh_Tien": 55800
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 365,
        "DVT": "Viên",
        "Don_Gia": 14339,
        "Thanh_Tien": 5233735
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 443,
        "DVT": "Lọ",
        "Don_Gia": 268241,
        "Thanh_Tien": 118830763
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 93,
        "DVT": "Lọ",
        "Don_Gia": 19757,
        "Thanh_Tien": 1837401
      }
    ]
  },
  {
    "id": "DH025",
    "Ma_KH": "KH005",
    "Ten_KH": "Bệnh viện Đại học Y Hà Nội",
    "So_Hoa_Don": "HD2025",
    "Ngay_Soan": "2025-04-30",
    "Ngay_Giao": "2025-05-07",
    "Tong_Tien": 75748535,
    "Items": [
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 475,
        "DVT": "Lọ",
        "Don_Gia": 16991,
        "Thanh_Tien": 8070725
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 162,
        "DVT": "Viên",
        "Don_Gia": 319,
        "Thanh_Tien": 51678
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 74,
        "DVT": "Ống",
        "Don_Gia": 658,
        "Thanh_Tien": 48692
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 251,
        "DVT": "Viên",
        "Don_Gia": 5877,
        "Thanh_Tien": 1475127
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 440,
        "DVT": "Lọ",
        "Don_Gia": 15159,
        "Thanh_Tien": 6669960
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 36,
        "DVT": "Viên",
        "Don_Gia": 14876,
        "Thanh_Tien": 535536
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 287,
        "DVT": "Viên",
        "Don_Gia": 3129,
        "Thanh_Tien": 898023
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 195,
        "DVT": "Lọ",
        "Don_Gia": 45559,
        "Thanh_Tien": 8884005
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 126,
        "DVT": "Viên",
        "Don_Gia": 1914,
        "Thanh_Tien": 241164
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 179,
        "DVT": "Lọ",
        "Don_Gia": 272513,
        "Thanh_Tien": 48779827
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 146,
        "DVT": "Viên",
        "Don_Gia": 203,
        "Thanh_Tien": 29638
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 401,
        "DVT": "Viên",
        "Don_Gia": 160,
        "Thanh_Tien": 64160
      }
    ]
  },
  {
    "id": "DH026",
    "Ma_KH": "KH010",
    "Ten_KH": "BỆNH VIỆN ĐA KHOA VŨ THƯ",
    "So_Hoa_Don": "HD2026",
    "Ngay_Soan": "2026-03-08",
    "Ngay_Giao": "2026-03-14",
    "Tong_Tien": 31515245,
    "Items": [
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 296,
        "DVT": "Lọ",
        "Don_Gia": 46488,
        "Thanh_Tien": 13760448
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 66,
        "DVT": "Viên",
        "Don_Gia": 545,
        "Thanh_Tien": 35970
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 123,
        "DVT": "Viên",
        "Don_Gia": 291,
        "Thanh_Tien": 35793
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 297,
        "DVT": "Viên",
        "Don_Gia": 718,
        "Thanh_Tien": 213246
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 326,
        "DVT": "Xịt",
        "Don_Gia": 34753,
        "Thanh_Tien": 11329478
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 326,
        "DVT": "Lọ",
        "Don_Gia": 1428,
        "Thanh_Tien": 465528
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 197,
        "DVT": "Lọ",
        "Don_Gia": 28806,
        "Thanh_Tien": 5674782
      }
    ]
  },
  {
    "id": "DH027",
    "Ma_KH": "KH020",
    "Ten_KH": "Trạm Y tế xã Xuân Lăng",
    "So_Hoa_Don": "HD2027",
    "Ngay_Soan": "2025-03-03",
    "Ngay_Giao": "2025-03-09",
    "Tong_Tien": 107216617,
    "Items": [
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 97,
        "DVT": "Ống",
        "Don_Gia": 652,
        "Thanh_Tien": 63244
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 388,
        "DVT": "Lọ",
        "Don_Gia": 1481,
        "Thanh_Tien": 574628
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 187,
        "DVT": "Viên",
        "Don_Gia": 13066,
        "Thanh_Tien": 2443342
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 67,
        "DVT": "Ống",
        "Don_Gia": 1170,
        "Thanh_Tien": 78390
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 264,
        "DVT": "Lọ",
        "Don_Gia": 313010,
        "Thanh_Tien": 82634640
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 400,
        "DVT": "Lọ",
        "Don_Gia": 14413,
        "Thanh_Tien": 5765200
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 383,
        "DVT": "Viên",
        "Don_Gia": 2940,
        "Thanh_Tien": 1126020
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 353,
        "DVT": "Lọ",
        "Don_Gia": 18276,
        "Thanh_Tien": 6451428
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 178,
        "DVT": "Viên",
        "Don_Gia": 331,
        "Thanh_Tien": 58918
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 294,
        "DVT": "Ống",
        "Don_Gia": 1029,
        "Thanh_Tien": 302526
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 426,
        "DVT": "Lọ",
        "Don_Gia": 1508,
        "Thanh_Tien": 642408
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 486,
        "DVT": "Lọ",
        "Don_Gia": 13806,
        "Thanh_Tien": 6709716
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 420,
        "DVT": "Viên",
        "Don_Gia": 819,
        "Thanh_Tien": 343980
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 67,
        "DVT": "Viên",
        "Don_Gia": 331,
        "Thanh_Tien": 22177
      }
    ]
  },
  {
    "id": "DH028",
    "Ma_KH": "KH012",
    "Ten_KH": "TRUNG TÂM Y TẾ AN DƯƠNG",
    "So_Hoa_Don": "HD2028",
    "Ngay_Soan": "2026-03-28",
    "Ngay_Giao": "2026-04-03",
    "Tong_Tien": 23013144,
    "Items": [
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 86,
        "DVT": "Xịt",
        "Don_Gia": 33770,
        "Thanh_Tien": 2904220
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 15,
        "DVT": "Chai",
        "Don_Gia": 1007,
        "Thanh_Tien": 15105
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 234,
        "DVT": "Viên",
        "Don_Gia": 1931,
        "Thanh_Tien": 451854
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 335,
        "DVT": "Viên",
        "Don_Gia": 325,
        "Thanh_Tien": 108875
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 91,
        "DVT": "Ống",
        "Don_Gia": 587,
        "Thanh_Tien": 53417
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 306,
        "DVT": "Lọ",
        "Don_Gia": 1507,
        "Thanh_Tien": 461142
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 378,
        "DVT": "Lọ",
        "Don_Gia": 1549,
        "Thanh_Tien": 585522
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 499,
        "DVT": "Ống",
        "Don_Gia": 1195,
        "Thanh_Tien": 596305
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 377,
        "DVT": "Lọ",
        "Don_Gia": 20335,
        "Thanh_Tien": 7666295
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 67,
        "DVT": "Lọ",
        "Don_Gia": 35348,
        "Thanh_Tien": 2368316
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 318,
        "DVT": "Viên",
        "Don_Gia": 3352,
        "Thanh_Tien": 1065936
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 274,
        "DVT": "Lọ",
        "Don_Gia": 16665,
        "Thanh_Tien": 4566210
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 226,
        "DVT": "Chai",
        "Don_Gia": 7737,
        "Thanh_Tien": 1748562
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 355,
        "DVT": "Viên",
        "Don_Gia": 1187,
        "Thanh_Tien": 421385
      }
    ]
  },
  {
    "id": "DH029",
    "Ma_KH": "KH010",
    "Ten_KH": "BỆNH VIỆN ĐA KHOA VŨ THƯ",
    "So_Hoa_Don": "HD2029",
    "Ngay_Soan": "2025-03-16",
    "Ngay_Giao": "2025-03-19",
    "Tong_Tien": 2977480008,
    "Items": [
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 392,
        "DVT": "Lọ",
        "Don_Gia": 51495,
        "Thanh_Tien": 20186040
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 320,
        "DVT": "Chai",
        "Don_Gia": 6639,
        "Thanh_Tien": 2124480
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 373,
        "DVT": "Lọ",
        "Don_Gia": 40262,
        "Thanh_Tien": 15017726
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 79,
        "DVT": "Viên",
        "Don_Gia": 405,
        "Thanh_Tien": 31995
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 339,
        "DVT": "Lọ",
        "Don_Gia": 1389,
        "Thanh_Tien": 470871
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 310,
        "DVT": "Chai",
        "Don_Gia": 1160,
        "Thanh_Tien": 359600
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 102,
        "DVT": "Lọ",
        "Don_Gia": 1346,
        "Thanh_Tien": 137292
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 246,
        "DVT": "Viên",
        "Don_Gia": 326,
        "Thanh_Tien": 80196
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 290,
        "DVT": "Ống",
        "Don_Gia": 569,
        "Thanh_Tien": 165010
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 420,
        "DVT": "Ống",
        "Don_Gia": 6996498,
        "Thanh_Tien": 2938529160
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 323,
        "DVT": "Ống",
        "Don_Gia": 1006,
        "Thanh_Tien": 324938
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 34,
        "DVT": "Viên",
        "Don_Gia": 1550,
        "Thanh_Tien": 52700
      }
    ]
  },
  {
    "id": "DH030",
    "Ma_KH": "KH015",
    "Ten_KH": "BV Đa khoa Cẩm Phả",
    "So_Hoa_Don": "HD2030",
    "Ngay_Soan": "2025-12-17",
    "Ngay_Giao": "2025-12-19",
    "Tong_Tien": 53863243,
    "Items": [
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 34,
        "DVT": "Lọ",
        "Don_Gia": 1671,
        "Thanh_Tien": 56814
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 448,
        "DVT": "Viên",
        "Don_Gia": 6139,
        "Thanh_Tien": 2750272
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 420,
        "DVT": "Lọ",
        "Don_Gia": 55028,
        "Thanh_Tien": 23111760
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 498,
        "DVT": "Lọ",
        "Don_Gia": 1340,
        "Thanh_Tien": 667320
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 112,
        "DVT": "Chai",
        "Don_Gia": 7858,
        "Thanh_Tien": 880096
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 168,
        "DVT": "Lọ",
        "Don_Gia": 12518,
        "Thanh_Tien": 2103024
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 113,
        "DVT": "Viên",
        "Don_Gia": 1178,
        "Thanh_Tien": 133114
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 142,
        "DVT": "Lọ",
        "Don_Gia": 18548,
        "Thanh_Tien": 2633816
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 13,
        "DVT": "Lọ",
        "Don_Gia": 31217,
        "Thanh_Tien": 405821
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 140,
        "DVT": "Xịt",
        "Don_Gia": 28800,
        "Thanh_Tien": 4032000
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 422,
        "DVT": "Lọ",
        "Don_Gia": 39273,
        "Thanh_Tien": 16573206
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 430,
        "DVT": "Chai",
        "Don_Gia": 1200,
        "Thanh_Tien": 516000
      }
    ]
  },
  {
    "id": "DH031",
    "Ma_KH": "KH018",
    "Ten_KH": "BV Đa khoa tỉnh Quảng Trị",
    "So_Hoa_Don": "HD2031",
    "Ngay_Soan": "2025-11-02",
    "Ngay_Giao": "2025-11-09",
    "Tong_Tien": 192059606,
    "Items": [
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 68,
        "DVT": "Viên",
        "Don_Gia": 295,
        "Thanh_Tien": 20060
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 141,
        "DVT": "Viên",
        "Don_Gia": 882,
        "Thanh_Tien": 124362
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 482,
        "DVT": "Chai",
        "Don_Gia": 6988,
        "Thanh_Tien": 3368216
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 490,
        "DVT": "Lọ",
        "Don_Gia": 47445,
        "Thanh_Tien": 23248050
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 500,
        "DVT": "Ống",
        "Don_Gia": 971,
        "Thanh_Tien": 485500
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 466,
        "DVT": "Lọ",
        "Don_Gia": 331017,
        "Thanh_Tien": 154253922
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 80,
        "DVT": "Lọ",
        "Don_Gia": 33459,
        "Thanh_Tien": 2676720
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 444,
        "DVT": "Lọ",
        "Don_Gia": 17754,
        "Thanh_Tien": 7882776
      }
    ]
  },
  {
    "id": "DH032",
    "Ma_KH": "KH017",
    "Ten_KH": "Trung tâm Y tế Khu vực Văn Chấn",
    "So_Hoa_Don": "HD2032",
    "Ngay_Soan": "2026-03-26",
    "Ngay_Giao": "2026-03-30",
    "Tong_Tien": 171287541,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 299,
        "DVT": "Viên",
        "Don_Gia": 3143,
        "Thanh_Tien": 939757
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 438,
        "DVT": "Tuýp",
        "Don_Gia": 39060,
        "Thanh_Tien": 17108280
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 429,
        "DVT": "Viên",
        "Don_Gia": 283,
        "Thanh_Tien": 121407
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 356,
        "DVT": "Lọ",
        "Don_Gia": 332314,
        "Thanh_Tien": 118303784
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 45,
        "DVT": "Ống",
        "Don_Gia": 1005,
        "Thanh_Tien": 45225
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 94,
        "DVT": "Lọ",
        "Don_Gia": 14486,
        "Thanh_Tien": 1361684
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 12,
        "DVT": "Lọ",
        "Don_Gia": 1581,
        "Thanh_Tien": 18972
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 367,
        "DVT": "Lọ",
        "Don_Gia": 53675,
        "Thanh_Tien": 19698725
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 152,
        "DVT": "Viên",
        "Don_Gia": 1250,
        "Thanh_Tien": 190000
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 37,
        "DVT": "Viên",
        "Don_Gia": 144,
        "Thanh_Tien": 5328
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 202,
        "DVT": "Chai",
        "Don_Gia": 7666,
        "Thanh_Tien": 1548532
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 174,
        "DVT": "Ống",
        "Don_Gia": 976,
        "Thanh_Tien": 169824
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 387,
        "DVT": "Xịt",
        "Don_Gia": 30429,
        "Thanh_Tien": 11776023
      }
    ]
  },
  {
    "id": "DH033",
    "Ma_KH": "KH018",
    "Ten_KH": "BV Đa khoa tỉnh Quảng Trị",
    "So_Hoa_Don": "HD2033",
    "Ngay_Soan": "2025-12-06",
    "Ngay_Giao": "2025-12-11",
    "Tong_Tien": 13338795,
    "Items": [
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 223,
        "DVT": "Viên",
        "Don_Gia": 548,
        "Thanh_Tien": 122204
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 155,
        "DVT": "Viên",
        "Don_Gia": 1996,
        "Thanh_Tien": 309380
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 208,
        "DVT": "Ống",
        "Don_Gia": 672,
        "Thanh_Tien": 139776
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 165,
        "DVT": "Lọ",
        "Don_Gia": 1368,
        "Thanh_Tien": 225720
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 116,
        "DVT": "Ống",
        "Don_Gia": 226,
        "Thanh_Tien": 26216
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 461,
        "DVT": "Viên",
        "Don_Gia": 173,
        "Thanh_Tien": 79753
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 208,
        "DVT": "Lọ",
        "Don_Gia": 14268,
        "Thanh_Tien": 2967744
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 293,
        "DVT": "Xịt",
        "Don_Gia": 32314,
        "Thanh_Tien": 9468002
      }
    ]
  },
  {
    "id": "DH034",
    "Ma_KH": "KH015",
    "Ten_KH": "BV Đa khoa Cẩm Phả",
    "So_Hoa_Don": "HD2034",
    "Ngay_Soan": "2026-02-15",
    "Ngay_Giao": "2026-02-17",
    "Tong_Tien": 1252014814,
    "Items": [
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 370,
        "DVT": "Lọ",
        "Don_Gia": 1547,
        "Thanh_Tien": 572390
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 142,
        "DVT": "Lọ",
        "Don_Gia": 30363,
        "Thanh_Tien": 4311546
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 395,
        "DVT": "Viên",
        "Don_Gia": 2912,
        "Thanh_Tien": 1150240
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 326,
        "DVT": "Chai",
        "Don_Gia": 1124,
        "Thanh_Tien": 366424
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 363,
        "DVT": "Viên",
        "Don_Gia": 356,
        "Thanh_Tien": 129228
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 209,
        "DVT": "Ống",
        "Don_Gia": 5910195,
        "Thanh_Tien": 1235230755
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 466,
        "DVT": "Ống",
        "Don_Gia": 1046,
        "Thanh_Tien": 487436
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 489,
        "DVT": "Viên",
        "Don_Gia": 5811,
        "Thanh_Tien": 2841579
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 155,
        "DVT": "Chai",
        "Don_Gia": 7895,
        "Thanh_Tien": 1223725
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 416,
        "DVT": "Viên",
        "Don_Gia": 201,
        "Thanh_Tien": 83616
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 120,
        "DVT": "Lọ",
        "Don_Gia": 42054,
        "Thanh_Tien": 5046480
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 25,
        "DVT": "Lọ",
        "Don_Gia": 17922,
        "Thanh_Tien": 448050
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 351,
        "DVT": "Ống",
        "Don_Gia": 247,
        "Thanh_Tien": 86697
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 24,
        "DVT": "Lọ",
        "Don_Gia": 1527,
        "Thanh_Tien": 36648
      }
    ]
  },
  {
    "id": "DH035",
    "Ma_KH": "KH003",
    "Ten_KH": "BV Chợ Rẫy",
    "So_Hoa_Don": "HD2035",
    "Ngay_Soan": "2025-10-26",
    "Ngay_Giao": "2025-10-30",
    "Tong_Tien": 18337318,
    "Items": [
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 440,
        "DVT": "Xịt",
        "Don_Gia": 31359,
        "Thanh_Tien": 13797960
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 194,
        "DVT": "Ống",
        "Don_Gia": 232,
        "Thanh_Tien": 45008
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 251,
        "DVT": "Ống",
        "Don_Gia": 972,
        "Thanh_Tien": 243972
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 115,
        "DVT": "Viên",
        "Don_Gia": 283,
        "Thanh_Tien": 32545
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 209,
        "DVT": "Viên",
        "Don_Gia": 1468,
        "Thanh_Tien": 306812
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 55,
        "DVT": "Ống",
        "Don_Gia": 1013,
        "Thanh_Tien": 55715
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 299,
        "DVT": "Viên",
        "Don_Gia": 12894,
        "Thanh_Tien": 3855306
      }
    ]
  },
  {
    "id": "DH036",
    "Ma_KH": "KH012",
    "Ten_KH": "TRUNG TÂM Y TẾ AN DƯƠNG",
    "So_Hoa_Don": "HD2036",
    "Ngay_Soan": "2025-07-15",
    "Ngay_Giao": "2025-07-21",
    "Tong_Tien": 2497442200,
    "Items": [
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 25,
        "DVT": "Lọ",
        "Don_Gia": 39671,
        "Thanh_Tien": 991775
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 51,
        "DVT": "Viên",
        "Don_Gia": 1346,
        "Thanh_Tien": 68646
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 81,
        "DVT": "Viên",
        "Don_Gia": 3493,
        "Thanh_Tien": 282933
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 194,
        "DVT": "Viên",
        "Don_Gia": 839,
        "Thanh_Tien": 162766
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 175,
        "DVT": "Viên",
        "Don_Gia": 6115,
        "Thanh_Tien": 1070125
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 412,
        "DVT": "Ống",
        "Don_Gia": 6038802,
        "Thanh_Tien": 2487986424
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 434,
        "DVT": "Viên",
        "Don_Gia": 204,
        "Thanh_Tien": 88536
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 141,
        "DVT": "Tuýp",
        "Don_Gia": 43375,
        "Thanh_Tien": 6115875
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 358,
        "DVT": "Lọ",
        "Don_Gia": 1665,
        "Thanh_Tien": 596070
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 51,
        "DVT": "Lọ",
        "Don_Gia": 1550,
        "Thanh_Tien": 79050
      }
    ]
  },
  {
    "id": "DH037",
    "Ma_KH": "KH014",
    "Ten_KH": "BV Đa khoa Từ Sơn",
    "So_Hoa_Don": "HD2037",
    "Ngay_Soan": "2025-08-12",
    "Ngay_Giao": "2025-08-18",
    "Tong_Tien": 30347336,
    "Items": [
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 122,
        "DVT": "Viên",
        "Don_Gia": 140,
        "Thanh_Tien": 17080
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 337,
        "DVT": "Lọ",
        "Don_Gia": 1351,
        "Thanh_Tien": 455287
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 188,
        "DVT": "Viên",
        "Don_Gia": 341,
        "Thanh_Tien": 64108
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 51,
        "DVT": "Viên",
        "Don_Gia": 5226,
        "Thanh_Tien": 266526
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 408,
        "DVT": "Lọ",
        "Don_Gia": 52526,
        "Thanh_Tien": 21430608
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 53,
        "DVT": "Xịt",
        "Don_Gia": 30685,
        "Thanh_Tien": 1626305
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 39,
        "DVT": "Viên",
        "Don_Gia": 1772,
        "Thanh_Tien": 69108
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 43,
        "DVT": "Viên",
        "Don_Gia": 507,
        "Thanh_Tien": 21801
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 385,
        "DVT": "Viên",
        "Don_Gia": 13907,
        "Thanh_Tien": 5354195
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 23,
        "DVT": "Lọ",
        "Don_Gia": 40283,
        "Thanh_Tien": 926509
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 38,
        "DVT": "Ống",
        "Don_Gia": 232,
        "Thanh_Tien": 8816
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 34,
        "DVT": "Viên",
        "Don_Gia": 419,
        "Thanh_Tien": 14246
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 472,
        "DVT": "Viên",
        "Don_Gia": 184,
        "Thanh_Tien": 86848
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 17,
        "DVT": "Viên",
        "Don_Gia": 347,
        "Thanh_Tien": 5899
      }
    ]
  },
  {
    "id": "DH038",
    "Ma_KH": "KH009",
    "Ten_KH": "BV đa khoa Thanh Liêm",
    "So_Hoa_Don": "HD2038",
    "Ngay_Soan": "2025-10-10",
    "Ngay_Giao": "2025-10-17",
    "Tong_Tien": 1920340950,
    "Items": [
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 305,
        "DVT": "Ống",
        "Don_Gia": 5963920,
        "Thanh_Tien": 1818995600
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 229,
        "DVT": "Viên",
        "Don_Gia": 457,
        "Thanh_Tien": 104653
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 311,
        "DVT": "Lọ",
        "Don_Gia": 322068,
        "Thanh_Tien": 100163148
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 85,
        "DVT": "Viên",
        "Don_Gia": 1988,
        "Thanh_Tien": 168980
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 308,
        "DVT": "Viên",
        "Don_Gia": 526,
        "Thanh_Tien": 162008
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 434,
        "DVT": "Viên",
        "Don_Gia": 1433,
        "Thanh_Tien": 621922
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 113,
        "DVT": "Ống",
        "Don_Gia": 1103,
        "Thanh_Tien": 124639
      }
    ]
  },
  {
    "id": "DH039",
    "Ma_KH": "KH009",
    "Ten_KH": "BV đa khoa Thanh Liêm",
    "So_Hoa_Don": "HD2039",
    "Ngay_Soan": "2026-04-11",
    "Ngay_Giao": "2026-04-14",
    "Tong_Tien": 12335087,
    "Items": [
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 489,
        "DVT": "Ống",
        "Don_Gia": 963,
        "Thanh_Tien": 470907
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 258,
        "DVT": "Lọ",
        "Don_Gia": 1655,
        "Thanh_Tien": 426990
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 99,
        "DVT": "Viên",
        "Don_Gia": 466,
        "Thanh_Tien": 46134
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 106,
        "DVT": "Viên",
        "Don_Gia": 602,
        "Thanh_Tien": 63812
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 247,
        "DVT": "Ống",
        "Don_Gia": 1146,
        "Thanh_Tien": 283062
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 364,
        "DVT": "Chai",
        "Don_Gia": 1146,
        "Thanh_Tien": 417144
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 53,
        "DVT": "Lọ",
        "Don_Gia": 37783,
        "Thanh_Tien": 2002499
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 62,
        "DVT": "Lọ",
        "Don_Gia": 1556,
        "Thanh_Tien": 96472
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 446,
        "DVT": "Ống",
        "Don_Gia": 570,
        "Thanh_Tien": 254220
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 241,
        "DVT": "Ống",
        "Don_Gia": 235,
        "Thanh_Tien": 56635
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 367,
        "DVT": "Viên",
        "Don_Gia": 5860,
        "Thanh_Tien": 2150620
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 442,
        "DVT": "Viên",
        "Don_Gia": 292,
        "Thanh_Tien": 129064
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 450,
        "DVT": "Viên",
        "Don_Gia": 12844,
        "Thanh_Tien": 5779800
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 191,
        "DVT": "Viên",
        "Don_Gia": 768,
        "Thanh_Tien": 146688
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 32,
        "DVT": "Viên",
        "Don_Gia": 345,
        "Thanh_Tien": 11040
      }
    ]
  },
  {
    "id": "DH040",
    "Ma_KH": "KH003",
    "Ten_KH": "BV Chợ Rẫy",
    "So_Hoa_Don": "HD2040",
    "Ngay_Soan": "2025-08-10",
    "Ngay_Giao": "2025-08-14",
    "Tong_Tien": 2828857629,
    "Items": [
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 401,
        "DVT": "Viên",
        "Don_Gia": 398,
        "Thanh_Tien": 159598
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 47,
        "DVT": "Ống",
        "Don_Gia": 913,
        "Thanh_Tien": 42911
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 34,
        "DVT": "Lọ",
        "Don_Gia": 1660,
        "Thanh_Tien": 56440
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 465,
        "DVT": "Lọ",
        "Don_Gia": 315186,
        "Thanh_Tien": 146561490
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 441,
        "DVT": "Lọ",
        "Don_Gia": 29310,
        "Thanh_Tien": 12925710
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 60,
        "DVT": "Tuýp",
        "Don_Gia": 40623,
        "Thanh_Tien": 2437380
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 380,
        "DVT": "Viên",
        "Don_Gia": 5438,
        "Thanh_Tien": 2066440
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 461,
        "DVT": "Ống",
        "Don_Gia": 5780060,
        "Thanh_Tien": 2664607660
      }
    ]
  },
  {
    "id": "DH041",
    "Ma_KH": "KH008",
    "Ten_KH": "Trạm Y tế xã Bình Xuyên",
    "So_Hoa_Don": "HD2041",
    "Ngay_Soan": "2025-10-06",
    "Ngay_Giao": "2025-10-09",
    "Tong_Tien": 2372130995,
    "Items": [
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 144,
        "DVT": "Viên",
        "Don_Gia": 141,
        "Thanh_Tien": 20304
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 138,
        "DVT": "Xịt",
        "Don_Gia": 27811,
        "Thanh_Tien": 3837918
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 124,
        "DVT": "Lọ",
        "Don_Gia": 17365,
        "Thanh_Tien": 2153260
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 139,
        "DVT": "Lọ",
        "Don_Gia": 32588,
        "Thanh_Tien": 4529732
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 81,
        "DVT": "Ống",
        "Don_Gia": 1176,
        "Thanh_Tien": 95256
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 29,
        "DVT": "Viên",
        "Don_Gia": 538,
        "Thanh_Tien": 15602
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 109,
        "DVT": "Tuýp",
        "Don_Gia": 38789,
        "Thanh_Tien": 4228001
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 159,
        "DVT": "Lọ",
        "Don_Gia": 47983,
        "Thanh_Tien": 7629297
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 499,
        "DVT": "Viên",
        "Don_Gia": 6188,
        "Thanh_Tien": 3087812
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 127,
        "DVT": "Lọ",
        "Don_Gia": 293782,
        "Thanh_Tien": 37310314
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 413,
        "DVT": "Ống",
        "Don_Gia": 5588457,
        "Thanh_Tien": 2308032741
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 497,
        "DVT": "Viên",
        "Don_Gia": 1547,
        "Thanh_Tien": 768859
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 209,
        "DVT": "Viên",
        "Don_Gia": 1923,
        "Thanh_Tien": 401907
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 102,
        "DVT": "Viên",
        "Don_Gia": 196,
        "Thanh_Tien": 19992
      }
    ]
  },
  {
    "id": "DH042",
    "Ma_KH": "KH018",
    "Ten_KH": "BV Đa khoa tỉnh Quảng Trị",
    "So_Hoa_Don": "HD2042",
    "Ngay_Soan": "2025-05-29",
    "Ngay_Giao": "2025-06-05",
    "Tong_Tien": 28701283,
    "Items": [
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 290,
        "DVT": "Lọ",
        "Don_Gia": 14856,
        "Thanh_Tien": 4308240
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 241,
        "DVT": "Viên",
        "Don_Gia": 292,
        "Thanh_Tien": 70372
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 117,
        "DVT": "Ống",
        "Don_Gia": 242,
        "Thanh_Tien": 28314
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 82,
        "DVT": "Chai",
        "Don_Gia": 1025,
        "Thanh_Tien": 84050
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 374,
        "DVT": "Tuýp",
        "Don_Gia": 38731,
        "Thanh_Tien": 14485394
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 464,
        "DVT": "Ống",
        "Don_Gia": 1085,
        "Thanh_Tien": 503440
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 252,
        "DVT": "Xịt",
        "Don_Gia": 33479,
        "Thanh_Tien": 8436708
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 90,
        "DVT": "Viên",
        "Don_Gia": 311,
        "Thanh_Tien": 27990
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 189,
        "DVT": "Lọ",
        "Don_Gia": 1668,
        "Thanh_Tien": 315252
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 158,
        "DVT": "Viên",
        "Don_Gia": 521,
        "Thanh_Tien": 82318
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 311,
        "DVT": "Viên",
        "Don_Gia": 1155,
        "Thanh_Tien": 359205
      }
    ]
  },
  {
    "id": "DH043",
    "Ma_KH": "KH001",
    "Ten_KH": "BV Bạch Mai",
    "So_Hoa_Don": "HD2043",
    "Ngay_Soan": "2026-02-08",
    "Ngay_Giao": "2026-02-10",
    "Tong_Tien": 25242788,
    "Items": [
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 221,
        "DVT": "Chai",
        "Don_Gia": 6600,
        "Thanh_Tien": 1458600
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 336,
        "DVT": "Ống",
        "Don_Gia": 1053,
        "Thanh_Tien": 353808
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 499,
        "DVT": "Viên",
        "Don_Gia": 608,
        "Thanh_Tien": 303392
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 410,
        "DVT": "Viên",
        "Don_Gia": 134,
        "Thanh_Tien": 54940
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 126,
        "DVT": "Ống",
        "Don_Gia": 962,
        "Thanh_Tien": 121212
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 130,
        "DVT": "Viên",
        "Don_Gia": 349,
        "Thanh_Tien": 45370
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 311,
        "DVT": "Viên",
        "Don_Gia": 420,
        "Thanh_Tien": 130620
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 174,
        "DVT": "Ống",
        "Don_Gia": 563,
        "Thanh_Tien": 97962
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 157,
        "DVT": "Lọ",
        "Don_Gia": 29448,
        "Thanh_Tien": 4623336
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 252,
        "DVT": "Viên",
        "Don_Gia": 200,
        "Thanh_Tien": 50400
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 443,
        "DVT": "Lọ",
        "Don_Gia": 14001,
        "Thanh_Tien": 6202443
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 215,
        "DVT": "Lọ",
        "Don_Gia": 54887,
        "Thanh_Tien": 11800705
      }
    ]
  },
  {
    "id": "DH044",
    "Ma_KH": "KH008",
    "Ten_KH": "Trạm Y tế xã Bình Xuyên",
    "So_Hoa_Don": "HD2044",
    "Ngay_Soan": "2025-06-22",
    "Ngay_Giao": "2025-06-28",
    "Tong_Tien": 1577599306,
    "Items": [
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 268,
        "DVT": "Ống",
        "Don_Gia": 5716739,
        "Thanh_Tien": 1532086052
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 185,
        "DVT": "Ống",
        "Don_Gia": 587,
        "Thanh_Tien": 108595
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 87,
        "DVT": "Viên",
        "Don_Gia": 1376,
        "Thanh_Tien": 119712
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 320,
        "DVT": "Lọ",
        "Don_Gia": 13482,
        "Thanh_Tien": 4314240
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 341,
        "DVT": "Lọ",
        "Don_Gia": 33368,
        "Thanh_Tien": 11378488
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 54,
        "DVT": "Viên",
        "Don_Gia": 2025,
        "Thanh_Tien": 109350
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 290,
        "DVT": "Lọ",
        "Don_Gia": 45264,
        "Thanh_Tien": 13126560
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 237,
        "DVT": "Viên",
        "Don_Gia": 462,
        "Thanh_Tien": 109494
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 377,
        "DVT": "Tuýp",
        "Don_Gia": 43095,
        "Thanh_Tien": 16246815
      }
    ]
  },
  {
    "id": "DH045",
    "Ma_KH": "KH007",
    "Ten_KH": "Trung tâm Y tế khu vực Lục Yên",
    "So_Hoa_Don": "HD2045",
    "Ngay_Soan": "2025-02-23",
    "Ngay_Giao": "2025-02-26",
    "Tong_Tien": 18148522,
    "Items": [
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 266,
        "DVT": "Tuýp",
        "Don_Gia": 45302,
        "Thanh_Tien": 12050332
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 132,
        "DVT": "Viên",
        "Don_Gia": 1207,
        "Thanh_Tien": 159324
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 438,
        "DVT": "Viên",
        "Don_Gia": 347,
        "Thanh_Tien": 151986
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 213,
        "DVT": "Lọ",
        "Don_Gia": 1513,
        "Thanh_Tien": 322269
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 11,
        "DVT": "Viên",
        "Don_Gia": 1701,
        "Thanh_Tien": 18711
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 166,
        "DVT": "Ống",
        "Don_Gia": 1049,
        "Thanh_Tien": 174134
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 345,
        "DVT": "Viên",
        "Don_Gia": 578,
        "Thanh_Tien": 199410
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 66,
        "DVT": "Viên",
        "Don_Gia": 209,
        "Thanh_Tien": 13794
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 92,
        "DVT": "Xịt",
        "Don_Gia": 31541,
        "Thanh_Tien": 2901772
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 149,
        "DVT": "Chai",
        "Don_Gia": 6620,
        "Thanh_Tien": 986380
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 371,
        "DVT": "Viên",
        "Don_Gia": 2860,
        "Thanh_Tien": 1061060
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 486,
        "DVT": "Ống",
        "Don_Gia": 225,
        "Thanh_Tien": 109350
      }
    ]
  },
  {
    "id": "DH046",
    "Ma_KH": "KH009",
    "Ten_KH": "BV đa khoa Thanh Liêm",
    "So_Hoa_Don": "HD2046",
    "Ngay_Soan": "2026-02-01",
    "Ngay_Giao": "2026-02-04",
    "Tong_Tien": 2646069057,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 389,
        "DVT": "Ống",
        "Don_Gia": 1233,
        "Thanh_Tien": 479637
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 126,
        "DVT": "Viên",
        "Don_Gia": 476,
        "Thanh_Tien": 59976
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 310,
        "DVT": "Viên",
        "Don_Gia": 1705,
        "Thanh_Tien": 528550
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 415,
        "DVT": "Ống",
        "Don_Gia": 6329895,
        "Thanh_Tien": 2626906425
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 316,
        "DVT": "Lọ",
        "Don_Gia": 1374,
        "Thanh_Tien": 434184
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 106,
        "DVT": "Lọ",
        "Don_Gia": 1472,
        "Thanh_Tien": 156032
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 98,
        "DVT": "Viên",
        "Don_Gia": 588,
        "Thanh_Tien": 57624
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 344,
        "DVT": "Xịt",
        "Don_Gia": 27977,
        "Thanh_Tien": 9624088
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 386,
        "DVT": "Lọ",
        "Don_Gia": 17066,
        "Thanh_Tien": 6587476
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 457,
        "DVT": "Viên",
        "Don_Gia": 334,
        "Thanh_Tien": 152638
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 14,
        "DVT": "Lọ",
        "Don_Gia": 44120,
        "Thanh_Tien": 617680
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 21,
        "DVT": "Viên",
        "Don_Gia": 355,
        "Thanh_Tien": 7455
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 418,
        "DVT": "Ống",
        "Don_Gia": 1094,
        "Thanh_Tien": 457292
      }
    ]
  },
  {
    "id": "DH047",
    "Ma_KH": "KH020",
    "Ten_KH": "Trạm Y tế xã Xuân Lăng",
    "So_Hoa_Don": "HD2047",
    "Ngay_Soan": "2025-05-04",
    "Ngay_Giao": "2025-05-11",
    "Tong_Tien": 2465383708,
    "Items": [
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 109,
        "DVT": "Viên",
        "Don_Gia": 882,
        "Thanh_Tien": 96138
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 490,
        "DVT": "Lọ",
        "Don_Gia": 30374,
        "Thanh_Tien": 14883260
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 378,
        "DVT": "Ống",
        "Don_Gia": 6479520,
        "Thanh_Tien": 2449258560
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 431,
        "DVT": "Viên",
        "Don_Gia": 1868,
        "Thanh_Tien": 805108
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 362,
        "DVT": "Ống",
        "Don_Gia": 941,
        "Thanh_Tien": 340642
      }
    ]
  },
  {
    "id": "DH048",
    "Ma_KH": "KH007",
    "Ten_KH": "Trung tâm Y tế khu vực Lục Yên",
    "So_Hoa_Don": "HD2048",
    "Ngay_Soan": "2026-01-24",
    "Ngay_Giao": "2026-01-28",
    "Tong_Tien": 470164992,
    "Items": [
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 38,
        "DVT": "Lọ",
        "Don_Gia": 42806,
        "Thanh_Tien": 1626628
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 166,
        "DVT": "Ống",
        "Don_Gia": 1146,
        "Thanh_Tien": 190236
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 238,
        "DVT": "Viên",
        "Don_Gia": 276,
        "Thanh_Tien": 65688
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 206,
        "DVT": "Lọ",
        "Don_Gia": 1447,
        "Thanh_Tien": 298082
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 101,
        "DVT": "Chai",
        "Don_Gia": 8329,
        "Thanh_Tien": 841229
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 420,
        "DVT": "Ống",
        "Don_Gia": 225,
        "Thanh_Tien": 94500
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 214,
        "DVT": "Viên",
        "Don_Gia": 1954,
        "Thanh_Tien": 418156
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 426,
        "DVT": "Viên",
        "Don_Gia": 5307,
        "Thanh_Tien": 2260782
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 326,
        "DVT": "Viên",
        "Don_Gia": 772,
        "Thanh_Tien": 251672
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 149,
        "DVT": "Chai",
        "Don_Gia": 1236,
        "Thanh_Tien": 184164
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 66,
        "DVT": "Ống",
        "Don_Gia": 6865764,
        "Thanh_Tien": 453140424
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 42,
        "DVT": "Viên",
        "Don_Gia": 312,
        "Thanh_Tien": 13104
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 311,
        "DVT": "Lọ",
        "Don_Gia": 34121,
        "Thanh_Tien": 10611631
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 220,
        "DVT": "Viên",
        "Don_Gia": 148,
        "Thanh_Tien": 32560
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 286,
        "DVT": "Viên",
        "Don_Gia": 476,
        "Thanh_Tien": 136136
      }
    ]
  },
  {
    "id": "DH049",
    "Ma_KH": "KH011",
    "Ten_KH": "TRUNG TÂM MẮT TỈNH QUẢNG NGÃI",
    "So_Hoa_Don": "HD2049",
    "Ngay_Soan": "2026-02-26",
    "Ngay_Giao": "2026-03-03",
    "Tong_Tien": 42578466,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 494,
        "DVT": "Viên",
        "Don_Gia": 3095,
        "Thanh_Tien": 1528930
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 420,
        "DVT": "Viên",
        "Don_Gia": 425,
        "Thanh_Tien": 178500
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 344,
        "DVT": "Lọ",
        "Don_Gia": 13389,
        "Thanh_Tien": 4605816
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 484,
        "DVT": "Viên",
        "Don_Gia": 132,
        "Thanh_Tien": 63888
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 61,
        "DVT": "Viên",
        "Don_Gia": 5821,
        "Thanh_Tien": 355081
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 148,
        "DVT": "Viên",
        "Don_Gia": 2063,
        "Thanh_Tien": 305324
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 24,
        "DVT": "Xịt",
        "Don_Gia": 30082,
        "Thanh_Tien": 721968
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 48,
        "DVT": "Viên",
        "Don_Gia": 1469,
        "Thanh_Tien": 70512
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 156,
        "DVT": "Lọ",
        "Don_Gia": 15958,
        "Thanh_Tien": 2489448
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 142,
        "DVT": "Chai",
        "Don_Gia": 7767,
        "Thanh_Tien": 1102914
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 75,
        "DVT": "Lọ",
        "Don_Gia": 1400,
        "Thanh_Tien": 105000
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 193,
        "DVT": "Ống",
        "Don_Gia": 1007,
        "Thanh_Tien": 194351
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 102,
        "DVT": "Lọ",
        "Don_Gia": 302517,
        "Thanh_Tien": 30856734
      }
    ]
  },
  {
    "id": "DH050",
    "Ma_KH": "KH008",
    "Ten_KH": "Trạm Y tế xã Bình Xuyên",
    "So_Hoa_Don": "HD2050",
    "Ngay_Soan": "2025-01-31",
    "Ngay_Giao": "2025-02-03",
    "Tong_Tien": 186827034,
    "Items": [
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 440,
        "DVT": "Lọ",
        "Don_Gia": 20611,
        "Thanh_Tien": 9068840
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 130,
        "DVT": "Viên",
        "Don_Gia": 2075,
        "Thanh_Tien": 269750
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 31,
        "DVT": "Ống",
        "Don_Gia": 5557421,
        "Thanh_Tien": 172280051
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 478,
        "DVT": "Viên",
        "Don_Gia": 342,
        "Thanh_Tien": 163476
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 416,
        "DVT": "Viên",
        "Don_Gia": 396,
        "Thanh_Tien": 164736
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 339,
        "DVT": "Viên",
        "Don_Gia": 13751,
        "Thanh_Tien": 4661589
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 190,
        "DVT": "Viên",
        "Don_Gia": 414,
        "Thanh_Tien": 78660
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 156,
        "DVT": "Viên",
        "Don_Gia": 897,
        "Thanh_Tien": 139932
      }
    ]
  },
  {
    "id": "DH051",
    "Ma_KH": "KH019",
    "Ten_KH": "BV Phục hồi chức năng Thanh Hóa",
    "So_Hoa_Don": "HD2051",
    "Ngay_Soan": "2025-01-26",
    "Ngay_Giao": "2025-01-28",
    "Tong_Tien": 7507841,
    "Items": [
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 387,
        "DVT": "Viên",
        "Don_Gia": 1494,
        "Thanh_Tien": 578178
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 334,
        "DVT": "Viên",
        "Don_Gia": 325,
        "Thanh_Tien": 108550
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 332,
        "DVT": "Viên",
        "Don_Gia": 1318,
        "Thanh_Tien": 437576
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 189,
        "DVT": "Viên",
        "Don_Gia": 3422,
        "Thanh_Tien": 646758
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 211,
        "DVT": "Viên",
        "Don_Gia": 425,
        "Thanh_Tien": 89675
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 409,
        "DVT": "Chai",
        "Don_Gia": 7809,
        "Thanh_Tien": 3193881
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 395,
        "DVT": "Lọ",
        "Don_Gia": 1667,
        "Thanh_Tien": 658465
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 166,
        "DVT": "Viên",
        "Don_Gia": 328,
        "Thanh_Tien": 54448
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 58,
        "DVT": "Xịt",
        "Don_Gia": 28622,
        "Thanh_Tien": 1660076
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 77,
        "DVT": "Ống",
        "Don_Gia": 1042,
        "Thanh_Tien": 80234
      }
    ]
  },
  {
    "id": "DH052",
    "Ma_KH": "KH014",
    "Ten_KH": "BV Đa khoa Từ Sơn",
    "So_Hoa_Don": "HD2052",
    "Ngay_Soan": "2025-08-30",
    "Ngay_Giao": "2025-09-03",
    "Tong_Tien": 29448648,
    "Items": [
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 77,
        "DVT": "Lọ",
        "Don_Gia": 1343,
        "Thanh_Tien": 103411
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 152,
        "DVT": "Lọ",
        "Don_Gia": 14968,
        "Thanh_Tien": 2275136
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 120,
        "DVT": "Ống",
        "Don_Gia": 223,
        "Thanh_Tien": 26760
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 383,
        "DVT": "Viên",
        "Don_Gia": 182,
        "Thanh_Tien": 69706
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 25,
        "DVT": "Viên",
        "Don_Gia": 5219,
        "Thanh_Tien": 130475
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 211,
        "DVT": "Lọ",
        "Don_Gia": 47800,
        "Thanh_Tien": 10085800
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 471,
        "DVT": "Viên",
        "Don_Gia": 1146,
        "Thanh_Tien": 539766
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 20,
        "DVT": "Viên",
        "Don_Gia": 338,
        "Thanh_Tien": 6760
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 488,
        "DVT": "Lọ",
        "Don_Gia": 1442,
        "Thanh_Tien": 703696
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 230,
        "DVT": "Viên",
        "Don_Gia": 312,
        "Thanh_Tien": 71760
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 288,
        "DVT": "Viên",
        "Don_Gia": 147,
        "Thanh_Tien": 42336
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 422,
        "DVT": "Lọ",
        "Don_Gia": 18561,
        "Thanh_Tien": 7832742
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 370,
        "DVT": "Viên",
        "Don_Gia": 1348,
        "Thanh_Tien": 498760
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 324,
        "DVT": "Viên",
        "Don_Gia": 313,
        "Thanh_Tien": 101412
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 224,
        "DVT": "Xịt",
        "Don_Gia": 31072,
        "Thanh_Tien": 6960128
      }
    ]
  },
  {
    "id": "DH053",
    "Ma_KH": "KH007",
    "Ten_KH": "Trung tâm Y tế khu vực Lục Yên",
    "So_Hoa_Don": "HD2053",
    "Ngay_Soan": "2026-01-02",
    "Ngay_Giao": "2026-01-08",
    "Tong_Tien": 23674703,
    "Items": [
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 204,
        "DVT": "Viên",
        "Don_Gia": 1154,
        "Thanh_Tien": 235416
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 387,
        "DVT": "Lọ",
        "Don_Gia": 49160,
        "Thanh_Tien": 19024920
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 458,
        "DVT": "Viên",
        "Don_Gia": 334,
        "Thanh_Tien": 152972
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 245,
        "DVT": "Viên",
        "Don_Gia": 467,
        "Thanh_Tien": 114415
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 223,
        "DVT": "Viên",
        "Don_Gia": 6230,
        "Thanh_Tien": 1389290
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 18,
        "DVT": "Tuýp",
        "Don_Gia": 43256,
        "Thanh_Tien": 778608
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 278,
        "DVT": "Chai",
        "Don_Gia": 7119,
        "Thanh_Tien": 1979082
      }
    ]
  },
  {
    "id": "DH054",
    "Ma_KH": "KH013",
    "Ten_KH": "BV đa khoa Đông Anh",
    "So_Hoa_Don": "HD2054",
    "Ngay_Soan": "2025-06-15",
    "Ngay_Giao": "2025-06-21",
    "Tong_Tien": 1198094107,
    "Items": [
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 155,
        "DVT": "Lọ",
        "Don_Gia": 301759,
        "Thanh_Tien": 46772645
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 96,
        "DVT": "Viên",
        "Don_Gia": 386,
        "Thanh_Tien": 37056
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 196,
        "DVT": "Ống",
        "Don_Gia": 5808589,
        "Thanh_Tien": 1138483444
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 198,
        "DVT": "Viên",
        "Don_Gia": 184,
        "Thanh_Tien": 36432
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 187,
        "DVT": "Lọ",
        "Don_Gia": 52989,
        "Thanh_Tien": 9908943
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 298,
        "DVT": "Viên",
        "Don_Gia": 600,
        "Thanh_Tien": 178800
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 81,
        "DVT": "Viên",
        "Don_Gia": 277,
        "Thanh_Tien": 22437
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 76,
        "DVT": "Lọ",
        "Don_Gia": 13640,
        "Thanh_Tien": 1036640
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 34,
        "DVT": "Lọ",
        "Don_Gia": 44075,
        "Thanh_Tien": 1498550
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 90,
        "DVT": "Viên",
        "Don_Gia": 1324,
        "Thanh_Tien": 119160
      }
    ]
  },
  {
    "id": "DH055",
    "Ma_KH": "KH005",
    "Ten_KH": "Bệnh viện Đại học Y Hà Nội",
    "So_Hoa_Don": "HD2055",
    "Ngay_Soan": "2026-03-29",
    "Ngay_Giao": "2026-04-01",
    "Tong_Tien": 112462156,
    "Items": [
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 306,
        "DVT": "Lọ",
        "Don_Gia": 15055,
        "Thanh_Tien": 4606830
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 439,
        "DVT": "Viên",
        "Don_Gia": 288,
        "Thanh_Tien": 126432
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 427,
        "DVT": "Tuýp",
        "Don_Gia": 48693,
        "Thanh_Tien": 20791911
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 408,
        "DVT": "Viên",
        "Don_Gia": 436,
        "Thanh_Tien": 177888
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 195,
        "DVT": "Chai",
        "Don_Gia": 1248,
        "Thanh_Tien": 243360
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 214,
        "DVT": "Ống",
        "Don_Gia": 1152,
        "Thanh_Tien": 246528
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 113,
        "DVT": "Viên",
        "Don_Gia": 162,
        "Thanh_Tien": 18306
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 211,
        "DVT": "Viên",
        "Don_Gia": 189,
        "Thanh_Tien": 39879
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 389,
        "DVT": "Viên",
        "Don_Gia": 5973,
        "Thanh_Tien": 2323497
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 109,
        "DVT": "Viên",
        "Don_Gia": 1334,
        "Thanh_Tien": 145406
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 202,
        "DVT": "Ống",
        "Don_Gia": 925,
        "Thanh_Tien": 186850
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 307,
        "DVT": "Lọ",
        "Don_Gia": 272167,
        "Thanh_Tien": 83555269
      }
    ]
  },
  {
    "id": "DH056",
    "Ma_KH": "KH015",
    "Ten_KH": "BV Đa khoa Cẩm Phả",
    "So_Hoa_Don": "HD2056",
    "Ngay_Soan": "2026-03-27",
    "Ngay_Giao": "2026-04-02",
    "Tong_Tien": 1757442174,
    "Items": [
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 270,
        "DVT": "Ống",
        "Don_Gia": 6402489,
        "Thanh_Tien": 1728672030
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 374,
        "DVT": "Ống",
        "Don_Gia": 1038,
        "Thanh_Tien": 388212
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 373,
        "DVT": "Viên",
        "Don_Gia": 2775,
        "Thanh_Tien": 1035075
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 414,
        "DVT": "Tuýp",
        "Don_Gia": 39444,
        "Thanh_Tien": 16329816
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 414,
        "DVT": "Viên",
        "Don_Gia": 437,
        "Thanh_Tien": 180918
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 315,
        "DVT": "Xịt",
        "Don_Gia": 33198,
        "Thanh_Tien": 10457370
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 191,
        "DVT": "Viên",
        "Don_Gia": 1983,
        "Thanh_Tien": 378753
      }
    ]
  },
  {
    "id": "DH057",
    "Ma_KH": "KH014",
    "Ten_KH": "BV Đa khoa Từ Sơn",
    "So_Hoa_Don": "HD2057",
    "Ngay_Soan": "2025-04-04",
    "Ngay_Giao": "2025-04-06",
    "Tong_Tien": 20127490,
    "Items": [
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 380,
        "DVT": "Viên",
        "Don_Gia": 12818,
        "Thanh_Tien": 4870840
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 277,
        "DVT": "Lọ",
        "Don_Gia": 13389,
        "Thanh_Tien": 3708753
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 373,
        "DVT": "Lọ",
        "Don_Gia": 1415,
        "Thanh_Tien": 527795
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 261,
        "DVT": "Lọ",
        "Don_Gia": 19720,
        "Thanh_Tien": 5146920
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 214,
        "DVT": "Viên",
        "Don_Gia": 141,
        "Thanh_Tien": 30174
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 102,
        "DVT": "Viên",
        "Don_Gia": 3166,
        "Thanh_Tien": 322932
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 34,
        "DVT": "Lọ",
        "Don_Gia": 28900,
        "Thanh_Tien": 982600
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 420,
        "DVT": "Viên",
        "Don_Gia": 1202,
        "Thanh_Tien": 504840
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 176,
        "DVT": "Viên",
        "Don_Gia": 347,
        "Thanh_Tien": 61072
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 50,
        "DVT": "Lọ",
        "Don_Gia": 18088,
        "Thanh_Tien": 904400
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 180,
        "DVT": "Ống",
        "Don_Gia": 1119,
        "Thanh_Tien": 201420
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 414,
        "DVT": "Chai",
        "Don_Gia": 6894,
        "Thanh_Tien": 2854116
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 68,
        "DVT": "Viên",
        "Don_Gia": 171,
        "Thanh_Tien": 11628
      }
    ]
  },
  {
    "id": "DH058",
    "Ma_KH": "KH002",
    "Ten_KH": "BV Việt Đức",
    "So_Hoa_Don": "HD2058",
    "Ngay_Soan": "2026-04-15",
    "Ngay_Giao": "2026-04-19",
    "Tong_Tien": 95917364,
    "Items": [
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 227,
        "DVT": "Lọ",
        "Don_Gia": 316621,
        "Thanh_Tien": 71872967
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 498,
        "DVT": "Viên",
        "Don_Gia": 2970,
        "Thanh_Tien": 1479060
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 154,
        "DVT": "Viên",
        "Don_Gia": 155,
        "Thanh_Tien": 23870
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 137,
        "DVT": "Lọ",
        "Don_Gia": 1567,
        "Thanh_Tien": 214679
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 329,
        "DVT": "Ống",
        "Don_Gia": 1013,
        "Thanh_Tien": 333277
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 415,
        "DVT": "Viên",
        "Don_Gia": 4973,
        "Thanh_Tien": 2063795
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 472,
        "DVT": "Ống",
        "Don_Gia": 612,
        "Thanh_Tien": 288864
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 428,
        "DVT": "Lọ",
        "Don_Gia": 20938,
        "Thanh_Tien": 8961464
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 106,
        "DVT": "Tuýp",
        "Don_Gia": 41150,
        "Thanh_Tien": 4361900
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 421,
        "DVT": "Lọ",
        "Don_Gia": 12775,
        "Thanh_Tien": 5378275
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 96,
        "DVT": "Ống",
        "Don_Gia": 237,
        "Thanh_Tien": 22752
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 63,
        "DVT": "Viên",
        "Don_Gia": 14547,
        "Thanh_Tien": 916461
      }
    ]
  },
  {
    "id": "DH059",
    "Ma_KH": "KH006",
    "Ten_KH": "Bệnh Viện Đa Khoa Khu Vực Bồng Sơn",
    "So_Hoa_Don": "HD2059",
    "Ngay_Soan": "2025-04-16",
    "Ngay_Giao": "2025-04-20",
    "Tong_Tien": 764208630,
    "Items": [
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 94,
        "DVT": "Viên",
        "Don_Gia": 1376,
        "Thanh_Tien": 129344
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 462,
        "DVT": "Chai",
        "Don_Gia": 1153,
        "Thanh_Tien": 532686
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 114,
        "DVT": "Ống",
        "Don_Gia": 6620519,
        "Thanh_Tien": 754739166
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 198,
        "DVT": "Lọ",
        "Don_Gia": 32583,
        "Thanh_Tien": 6451434
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 400,
        "DVT": "Viên",
        "Don_Gia": 5890,
        "Thanh_Tien": 2356000
      }
    ]
  },
  {
    "id": "DH060",
    "Ma_KH": "KH018",
    "Ten_KH": "BV Đa khoa tỉnh Quảng Trị",
    "So_Hoa_Don": "HD2060",
    "Ngay_Soan": "2026-04-06",
    "Ngay_Giao": "2026-04-12",
    "Tong_Tien": 809416097,
    "Items": [
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 355,
        "DVT": "Chai",
        "Don_Gia": 1248,
        "Thanh_Tien": 443040
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 254,
        "DVT": "Viên",
        "Don_Gia": 386,
        "Thanh_Tien": 98044
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 128,
        "DVT": "Ống",
        "Don_Gia": 6276169,
        "Thanh_Tien": 803349632
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 147,
        "DVT": "Lọ",
        "Don_Gia": 16980,
        "Thanh_Tien": 2496060
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 488,
        "DVT": "Viên",
        "Don_Gia": 3052,
        "Thanh_Tien": 1489376
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 278,
        "DVT": "Viên",
        "Don_Gia": 5400,
        "Thanh_Tien": 1501200
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 205,
        "DVT": "Viên",
        "Don_Gia": 189,
        "Thanh_Tien": 38745
      }
    ]
  },
  {
    "id": "DH061",
    "Ma_KH": "KH001",
    "Ten_KH": "BV Bạch Mai",
    "So_Hoa_Don": "HD2061",
    "Ngay_Soan": "2025-05-31",
    "Ngay_Giao": "2025-06-04",
    "Tong_Tien": 19176103,
    "Items": [
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 80,
        "DVT": "Tuýp",
        "Don_Gia": 43035,
        "Thanh_Tien": 3442800
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 228,
        "DVT": "Ống",
        "Don_Gia": 1211,
        "Thanh_Tien": 276108
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 128,
        "DVT": "Ống",
        "Don_Gia": 902,
        "Thanh_Tien": 115456
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 190,
        "DVT": "Viên",
        "Don_Gia": 2009,
        "Thanh_Tien": 381710
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 140,
        "DVT": "Viên",
        "Don_Gia": 315,
        "Thanh_Tien": 44100
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 21,
        "DVT": "Lọ",
        "Don_Gia": 31826,
        "Thanh_Tien": 668346
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 331,
        "DVT": "Viên",
        "Don_Gia": 1362,
        "Thanh_Tien": 450822
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 105,
        "DVT": "Lọ",
        "Don_Gia": 20484,
        "Thanh_Tien": 2150820
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 259,
        "DVT": "Lọ",
        "Don_Gia": 44023,
        "Thanh_Tien": 11401957
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 391,
        "DVT": "Viên",
        "Don_Gia": 624,
        "Thanh_Tien": 243984
      }
    ]
  },
  {
    "id": "DH062",
    "Ma_KH": "KH006",
    "Ten_KH": "Bệnh Viện Đa Khoa Khu Vực Bồng Sơn",
    "So_Hoa_Don": "HD2062",
    "Ngay_Soan": "2025-11-25",
    "Ngay_Giao": "2025-12-01",
    "Tong_Tien": 68164157,
    "Items": [
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 383,
        "DVT": "Lọ",
        "Don_Gia": 15022,
        "Thanh_Tien": 5753426
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 434,
        "DVT": "Lọ",
        "Don_Gia": 1521,
        "Thanh_Tien": 660114
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 380,
        "DVT": "Viên",
        "Don_Gia": 324,
        "Thanh_Tien": 123120
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 354,
        "DVT": "Viên",
        "Don_Gia": 836,
        "Thanh_Tien": 295944
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 192,
        "DVT": "Lọ",
        "Don_Gia": 270586,
        "Thanh_Tien": 51952512
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 327,
        "DVT": "Lọ",
        "Don_Gia": 18287,
        "Thanh_Tien": 5979849
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 475,
        "DVT": "Chai",
        "Don_Gia": 7098,
        "Thanh_Tien": 3371550
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 17,
        "DVT": "Viên",
        "Don_Gia": 1626,
        "Thanh_Tien": 27642
      }
    ]
  },
  {
    "id": "DH063",
    "Ma_KH": "KH016",
    "Ten_KH": "BV Đa khoa số 2 tỉnh Lào Cai",
    "So_Hoa_Don": "HD2063",
    "Ngay_Soan": "2025-09-26",
    "Ngay_Giao": "2025-10-01",
    "Tong_Tien": 2507931443,
    "Items": [
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 347,
        "DVT": "Lọ",
        "Don_Gia": 31144,
        "Thanh_Tien": 10806968
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 69,
        "DVT": "Ống",
        "Don_Gia": 930,
        "Thanh_Tien": 64170
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 471,
        "DVT": "Ống",
        "Don_Gia": 245,
        "Thanh_Tien": 115395
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 360,
        "DVT": "Ống",
        "Don_Gia": 6929053,
        "Thanh_Tien": 2494459080
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 313,
        "DVT": "Lọ",
        "Don_Gia": 1590,
        "Thanh_Tien": 497670
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 60,
        "DVT": "Xịt",
        "Don_Gia": 33136,
        "Thanh_Tien": 1988160
      }
    ]
  },
  {
    "id": "DH064",
    "Ma_KH": "KH018",
    "Ten_KH": "BV Đa khoa tỉnh Quảng Trị",
    "So_Hoa_Don": "HD2064",
    "Ngay_Soan": "2025-12-11",
    "Ngay_Giao": "2025-12-17",
    "Tong_Tien": 1356813505,
    "Items": [
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 462,
        "DVT": "Viên",
        "Don_Gia": 1447,
        "Thanh_Tien": 668514
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 330,
        "DVT": "Tuýp",
        "Don_Gia": 46981,
        "Thanh_Tien": 15503730
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 123,
        "DVT": "Lọ",
        "Don_Gia": 20412,
        "Thanh_Tien": 2510676
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 220,
        "DVT": "Ống",
        "Don_Gia": 6024862,
        "Thanh_Tien": 1325469640
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 274,
        "DVT": "Viên",
        "Don_Gia": 1207,
        "Thanh_Tien": 330718
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 79,
        "DVT": "Lọ",
        "Don_Gia": 1581,
        "Thanh_Tien": 124899
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 426,
        "DVT": "Ống",
        "Don_Gia": 231,
        "Thanh_Tien": 98406
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 308,
        "DVT": "Viên",
        "Don_Gia": 298,
        "Thanh_Tien": 91784
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 314,
        "DVT": "Viên",
        "Don_Gia": 572,
        "Thanh_Tien": 179608
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 374,
        "DVT": "Lọ",
        "Don_Gia": 30995,
        "Thanh_Tien": 11592130
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 200,
        "DVT": "Chai",
        "Don_Gia": 1217,
        "Thanh_Tien": 243400
      }
    ]
  },
  {
    "id": "DH065",
    "Ma_KH": "KH016",
    "Ten_KH": "BV Đa khoa số 2 tỉnh Lào Cai",
    "So_Hoa_Don": "HD2065",
    "Ngay_Soan": "2025-01-11",
    "Ngay_Giao": "2025-01-14",
    "Tong_Tien": 2610343338,
    "Items": [
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 285,
        "DVT": "Lọ",
        "Don_Gia": 40871,
        "Thanh_Tien": 11648235
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 390,
        "DVT": "Ống",
        "Don_Gia": 1239,
        "Thanh_Tien": 483210
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 425,
        "DVT": "Viên",
        "Don_Gia": 162,
        "Thanh_Tien": 68850
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 150,
        "DVT": "Lọ",
        "Don_Gia": 17787,
        "Thanh_Tien": 2668050
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 356,
        "DVT": "Viên",
        "Don_Gia": 760,
        "Thanh_Tien": 270560
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 192,
        "DVT": "Viên",
        "Don_Gia": 1819,
        "Thanh_Tien": 349248
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 394,
        "DVT": "Viên",
        "Don_Gia": 358,
        "Thanh_Tien": 141052
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 421,
        "DVT": "Viên",
        "Don_Gia": 333,
        "Thanh_Tien": 140193
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 424,
        "DVT": "Ống",
        "Don_Gia": 6113127,
        "Thanh_Tien": 2591965848
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 237,
        "DVT": "Chai",
        "Don_Gia": 8189,
        "Thanh_Tien": 1940793
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 437,
        "DVT": "Lọ",
        "Don_Gia": 1527,
        "Thanh_Tien": 667299
      }
    ]
  },
  {
    "id": "DH066",
    "Ma_KH": "KH014",
    "Ten_KH": "BV Đa khoa Từ Sơn",
    "So_Hoa_Don": "HD2066",
    "Ngay_Soan": "2025-01-01",
    "Ngay_Giao": "2025-01-05",
    "Tong_Tien": 1766459812,
    "Items": [
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 71,
        "DVT": "Lọ",
        "Don_Gia": 13123,
        "Thanh_Tien": 931733
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 144,
        "DVT": "Viên",
        "Don_Gia": 160,
        "Thanh_Tien": 23040
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 113,
        "DVT": "Lọ",
        "Don_Gia": 37713,
        "Thanh_Tien": 4261569
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 24,
        "DVT": "Viên",
        "Don_Gia": 13232,
        "Thanh_Tien": 317568
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 46,
        "DVT": "Viên",
        "Don_Gia": 2977,
        "Thanh_Tien": 136942
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 133,
        "DVT": "Viên",
        "Don_Gia": 461,
        "Thanh_Tien": 61313
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 153,
        "DVT": "Viên",
        "Don_Gia": 309,
        "Thanh_Tien": 47277
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 332,
        "DVT": "Lọ",
        "Don_Gia": 19919,
        "Thanh_Tien": 6613108
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 94,
        "DVT": "Ống",
        "Don_Gia": 1060,
        "Thanh_Tien": 99640
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 159,
        "DVT": "Viên",
        "Don_Gia": 5764,
        "Thanh_Tien": 916476
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 348,
        "DVT": "Tuýp",
        "Don_Gia": 38997,
        "Thanh_Tien": 13570956
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 340,
        "DVT": "Chai",
        "Don_Gia": 7961,
        "Thanh_Tien": 2706740
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 259,
        "DVT": "Ống",
        "Don_Gia": 6538891,
        "Thanh_Tien": 1693572769
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 129,
        "DVT": "Lọ",
        "Don_Gia": 334889,
        "Thanh_Tien": 43200681
      }
    ]
  },
  {
    "id": "DH067",
    "Ma_KH": "KH011",
    "Ten_KH": "TRUNG TÂM MẮT TỈNH QUẢNG NGÃI",
    "So_Hoa_Don": "HD2067",
    "Ngay_Soan": "2026-04-14",
    "Ngay_Giao": "2026-04-18",
    "Tong_Tien": 7193335,
    "Items": [
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 108,
        "DVT": "Ống",
        "Don_Gia": 615,
        "Thanh_Tien": 66420
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 72,
        "DVT": "Lọ",
        "Don_Gia": 15048,
        "Thanh_Tien": 1083456
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 460,
        "DVT": "Ống",
        "Don_Gia": 1225,
        "Thanh_Tien": 563500
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 499,
        "DVT": "Chai",
        "Don_Gia": 1193,
        "Thanh_Tien": 595307
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 225,
        "DVT": "Viên",
        "Don_Gia": 1922,
        "Thanh_Tien": 432450
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 66,
        "DVT": "Lọ",
        "Don_Gia": 45075,
        "Thanh_Tien": 2974950
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 150,
        "DVT": "Lọ",
        "Don_Gia": 1658,
        "Thanh_Tien": 248700
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 72,
        "DVT": "Lọ",
        "Don_Gia": 14721,
        "Thanh_Tien": 1059912
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 155,
        "DVT": "Ống",
        "Don_Gia": 1088,
        "Thanh_Tien": 168640
      }
    ]
  },
  {
    "id": "DH068",
    "Ma_KH": "KH010",
    "Ten_KH": "BỆNH VIỆN ĐA KHOA VŨ THƯ",
    "So_Hoa_Don": "HD2068",
    "Ngay_Soan": "2026-02-13",
    "Ngay_Giao": "2026-02-16",
    "Tong_Tien": 49965104,
    "Items": [
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 405,
        "DVT": "Viên",
        "Don_Gia": 175,
        "Thanh_Tien": 70875
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 156,
        "DVT": "Viên",
        "Don_Gia": 1323,
        "Thanh_Tien": 206388
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 393,
        "DVT": "Lọ",
        "Don_Gia": 20687,
        "Thanh_Tien": 8129991
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 489,
        "DVT": "Viên",
        "Don_Gia": 344,
        "Thanh_Tien": 168216
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 381,
        "DVT": "Viên",
        "Don_Gia": 3403,
        "Thanh_Tien": 1296543
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 132,
        "DVT": "Ống",
        "Don_Gia": 913,
        "Thanh_Tien": 120516
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 391,
        "DVT": "Chai",
        "Don_Gia": 1201,
        "Thanh_Tien": 469591
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 445,
        "DVT": "Lọ",
        "Don_Gia": 12148,
        "Thanh_Tien": 5405860
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 122,
        "DVT": "Lọ",
        "Don_Gia": 33450,
        "Thanh_Tien": 4080900
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 235,
        "DVT": "Viên",
        "Don_Gia": 1446,
        "Thanh_Tien": 339810
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 106,
        "DVT": "Ống",
        "Don_Gia": 671,
        "Thanh_Tien": 71126
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 203,
        "DVT": "Ống",
        "Don_Gia": 271,
        "Thanh_Tien": 55013
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 127,
        "DVT": "Lọ",
        "Don_Gia": 1672,
        "Thanh_Tien": 212344
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 433,
        "DVT": "Lọ",
        "Don_Gia": 45417,
        "Thanh_Tien": 19665561
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 290,
        "DVT": "Xịt",
        "Don_Gia": 33353,
        "Thanh_Tien": 9672370
      }
    ]
  },
  {
    "id": "DH069",
    "Ma_KH": "KH017",
    "Ten_KH": "Trung tâm Y tế Khu vực Văn Chấn",
    "So_Hoa_Don": "HD2069",
    "Ngay_Soan": "2025-12-03",
    "Ngay_Giao": "2025-12-08",
    "Tong_Tien": 770067244,
    "Items": [
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 91,
        "DVT": "Viên",
        "Don_Gia": 147,
        "Thanh_Tien": 13377
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 282,
        "DVT": "Lọ",
        "Don_Gia": 285435,
        "Thanh_Tien": 80492670
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 225,
        "DVT": "Chai",
        "Don_Gia": 7129,
        "Thanh_Tien": 1604025
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 419,
        "DVT": "Lọ",
        "Don_Gia": 1403,
        "Thanh_Tien": 587857
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 17,
        "DVT": "Viên",
        "Don_Gia": 1938,
        "Thanh_Tien": 32946
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 284,
        "DVT": "Viên",
        "Don_Gia": 2798,
        "Thanh_Tien": 794632
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 110,
        "DVT": "Lọ",
        "Don_Gia": 17392,
        "Thanh_Tien": 1913120
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 171,
        "DVT": "Viên",
        "Don_Gia": 12149,
        "Thanh_Tien": 2077479
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 216,
        "DVT": "Chai",
        "Don_Gia": 1100,
        "Thanh_Tien": 237600
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 344,
        "DVT": "Lọ",
        "Don_Gia": 12616,
        "Thanh_Tien": 4339904
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 114,
        "DVT": "Ống",
        "Don_Gia": 5760233,
        "Thanh_Tien": 656666562
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 446,
        "DVT": "Viên",
        "Don_Gia": 606,
        "Thanh_Tien": 270276
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 440,
        "DVT": "Ống",
        "Don_Gia": 597,
        "Thanh_Tien": 262680
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 424,
        "DVT": "Tuýp",
        "Don_Gia": 48818,
        "Thanh_Tien": 20698832
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 236,
        "DVT": "Viên",
        "Don_Gia": 319,
        "Thanh_Tien": 75284
      }
    ]
  },
  {
    "id": "DH070",
    "Ma_KH": "KH019",
    "Ten_KH": "BV Phục hồi chức năng Thanh Hóa",
    "So_Hoa_Don": "HD2070",
    "Ngay_Soan": "2025-04-19",
    "Ngay_Giao": "2025-04-22",
    "Tong_Tien": 1775176720,
    "Items": [
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 55,
        "DVT": "Lọ",
        "Don_Gia": 267801,
        "Thanh_Tien": 14729055
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 330,
        "DVT": "Viên",
        "Don_Gia": 782,
        "Thanh_Tien": 258060
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 200,
        "DVT": "Viên",
        "Don_Gia": 2054,
        "Thanh_Tien": 410800
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 231,
        "DVT": "Lọ",
        "Don_Gia": 1394,
        "Thanh_Tien": 322014
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 118,
        "DVT": "Ống",
        "Don_Gia": 1011,
        "Thanh_Tien": 119298
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 236,
        "DVT": "Viên",
        "Don_Gia": 374,
        "Thanh_Tien": 88264
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 185,
        "DVT": "Lọ",
        "Don_Gia": 41084,
        "Thanh_Tien": 7600540
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 86,
        "DVT": "Lọ",
        "Don_Gia": 36285,
        "Thanh_Tien": 3120510
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 388,
        "DVT": "Viên",
        "Don_Gia": 345,
        "Thanh_Tien": 133860
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 496,
        "DVT": "Viên",
        "Don_Gia": 1532,
        "Thanh_Tien": 759872
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 71,
        "DVT": "Lọ",
        "Don_Gia": 44358,
        "Thanh_Tien": 3149418
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 265,
        "DVT": "Ống",
        "Don_Gia": 6566466,
        "Thanh_Tien": 1740113490
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 463,
        "DVT": "Viên",
        "Don_Gia": 496,
        "Thanh_Tien": 229648
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 296,
        "DVT": "Viên",
        "Don_Gia": 12761,
        "Thanh_Tien": 3777256
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 365,
        "DVT": "Chai",
        "Don_Gia": 999,
        "Thanh_Tien": 364635
      }
    ]
  },
  {
    "id": "DH071",
    "Ma_KH": "KH006",
    "Ten_KH": "Bệnh Viện Đa Khoa Khu Vực Bồng Sơn",
    "So_Hoa_Don": "HD2071",
    "Ngay_Soan": "2025-05-28",
    "Ngay_Giao": "2025-05-30",
    "Tong_Tien": 139619653,
    "Items": [
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 231,
        "DVT": "Ống",
        "Don_Gia": 223,
        "Thanh_Tien": 51513
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 19,
        "DVT": "Chai",
        "Don_Gia": 1050,
        "Thanh_Tien": 19950
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 250,
        "DVT": "Chai",
        "Don_Gia": 7306,
        "Thanh_Tien": 1826500
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 216,
        "DVT": "Viên",
        "Don_Gia": 504,
        "Thanh_Tien": 108864
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 324,
        "DVT": "Viên",
        "Don_Gia": 5202,
        "Thanh_Tien": 1685448
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 402,
        "DVT": "Lọ",
        "Don_Gia": 265306,
        "Thanh_Tien": 106653012
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 497,
        "DVT": "Lọ",
        "Don_Gia": 15178,
        "Thanh_Tien": 7543466
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 370,
        "DVT": "Viên",
        "Don_Gia": 779,
        "Thanh_Tien": 288230
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 55,
        "DVT": "Viên",
        "Don_Gia": 1347,
        "Thanh_Tien": 74085
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 456,
        "DVT": "Tuýp",
        "Don_Gia": 44127,
        "Thanh_Tien": 20121912
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 20,
        "DVT": "Viên",
        "Don_Gia": 185,
        "Thanh_Tien": 3700
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 209,
        "DVT": "Viên",
        "Don_Gia": 1903,
        "Thanh_Tien": 397727
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 250,
        "DVT": "Ống",
        "Don_Gia": 689,
        "Thanh_Tien": 172250
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 417,
        "DVT": "Viên",
        "Don_Gia": 1309,
        "Thanh_Tien": 545853
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 459,
        "DVT": "Viên",
        "Don_Gia": 277,
        "Thanh_Tien": 127143
      }
    ]
  },
  {
    "id": "DH072",
    "Ma_KH": "KH020",
    "Ten_KH": "Trạm Y tế xã Xuân Lăng",
    "So_Hoa_Don": "HD2072",
    "Ngay_Soan": "2026-03-27",
    "Ngay_Giao": "2026-04-03",
    "Tong_Tien": 976520481,
    "Items": [
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 382,
        "DVT": "Lọ",
        "Don_Gia": 301811,
        "Thanh_Tien": 115291802
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 68,
        "DVT": "Viên",
        "Don_Gia": 296,
        "Thanh_Tien": 20128
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 440,
        "DVT": "Xịt",
        "Don_Gia": 31153,
        "Thanh_Tien": 13707320
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 492,
        "DVT": "Ống",
        "Don_Gia": 271,
        "Thanh_Tien": 133332
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 33,
        "DVT": "Lọ",
        "Don_Gia": 41280,
        "Thanh_Tien": 1362240
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 443,
        "DVT": "Ống",
        "Don_Gia": 1081,
        "Thanh_Tien": 478883
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 478,
        "DVT": "Viên",
        "Don_Gia": 13395,
        "Thanh_Tien": 6402810
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 176,
        "DVT": "Viên",
        "Don_Gia": 365,
        "Thanh_Tien": 64240
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 64,
        "DVT": "Lọ",
        "Don_Gia": 30047,
        "Thanh_Tien": 1923008
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 18,
        "DVT": "Viên",
        "Don_Gia": 1901,
        "Thanh_Tien": 34218
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 334,
        "DVT": "Viên",
        "Don_Gia": 5520,
        "Thanh_Tien": 1843680
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 122,
        "DVT": "Ống",
        "Don_Gia": 6842703,
        "Thanh_Tien": 834809766
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 41,
        "DVT": "Viên",
        "Don_Gia": 201,
        "Thanh_Tien": 8241
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 167,
        "DVT": "Viên",
        "Don_Gia": 1339,
        "Thanh_Tien": 223613
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 400,
        "DVT": "Viên",
        "Don_Gia": 543,
        "Thanh_Tien": 217200
      }
    ]
  },
  {
    "id": "DH073",
    "Ma_KH": "KH008",
    "Ten_KH": "Trạm Y tế xã Bình Xuyên",
    "So_Hoa_Don": "HD2073",
    "Ngay_Soan": "2025-07-06",
    "Ngay_Giao": "2025-07-12",
    "Tong_Tien": 1758099442,
    "Items": [
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 430,
        "DVT": "Viên",
        "Don_Gia": 13534,
        "Thanh_Tien": 5819620
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 303,
        "DVT": "Ống",
        "Don_Gia": 5737060,
        "Thanh_Tien": 1738329180
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 328,
        "DVT": "Tuýp",
        "Don_Gia": 39883,
        "Thanh_Tien": 13081624
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 146,
        "DVT": "Ống",
        "Don_Gia": 637,
        "Thanh_Tien": 93002
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 272,
        "DVT": "Viên",
        "Don_Gia": 2853,
        "Thanh_Tien": 776016
      }
    ]
  },
  {
    "id": "DH074",
    "Ma_KH": "KH015",
    "Ten_KH": "BV Đa khoa Cẩm Phả",
    "So_Hoa_Don": "HD2074",
    "Ngay_Soan": "2025-04-03",
    "Ngay_Giao": "2025-04-10",
    "Tong_Tien": 28570973,
    "Items": [
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 23,
        "DVT": "Ống",
        "Don_Gia": 237,
        "Thanh_Tien": 5451
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 19,
        "DVT": "Viên",
        "Don_Gia": 590,
        "Thanh_Tien": 11210
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 177,
        "DVT": "Viên",
        "Don_Gia": 1362,
        "Thanh_Tien": 241074
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 221,
        "DVT": "Lọ",
        "Don_Gia": 31046,
        "Thanh_Tien": 6861166
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 361,
        "DVT": "Viên",
        "Don_Gia": 345,
        "Thanh_Tien": 124545
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 37,
        "DVT": "Chai",
        "Don_Gia": 1222,
        "Thanh_Tien": 45214
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 307,
        "DVT": "Viên",
        "Don_Gia": 14920,
        "Thanh_Tien": 4580440
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 227,
        "DVT": "Lọ",
        "Don_Gia": 1540,
        "Thanh_Tien": 349580
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 234,
        "DVT": "Viên",
        "Don_Gia": 5665,
        "Thanh_Tien": 1325610
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 449,
        "DVT": "Ống",
        "Don_Gia": 613,
        "Thanh_Tien": 275237
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 32,
        "DVT": "Xịt",
        "Don_Gia": 30673,
        "Thanh_Tien": 981536
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 247,
        "DVT": "Lọ",
        "Don_Gia": 15131,
        "Thanh_Tien": 3737357
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 251,
        "DVT": "Lọ",
        "Don_Gia": 38169,
        "Thanh_Tien": 9580419
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 159,
        "DVT": "Viên",
        "Don_Gia": 160,
        "Thanh_Tien": 25440
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 382,
        "DVT": "Ống",
        "Don_Gia": 1117,
        "Thanh_Tien": 426694
      }
    ]
  },
  {
    "id": "DH075",
    "Ma_KH": "KH011",
    "Ten_KH": "TRUNG TÂM MẮT TỈNH QUẢNG NGÃI",
    "So_Hoa_Don": "HD2075",
    "Ngay_Soan": "2025-04-18",
    "Ngay_Giao": "2025-04-23",
    "Tong_Tien": 29244383,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 359,
        "DVT": "Ống",
        "Don_Gia": 1081,
        "Thanh_Tien": 388079
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 494,
        "DVT": "Chai",
        "Don_Gia": 7579,
        "Thanh_Tien": 3744026
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 286,
        "DVT": "Lọ",
        "Don_Gia": 46680,
        "Thanh_Tien": 13350480
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 191,
        "DVT": "Viên",
        "Don_Gia": 1866,
        "Thanh_Tien": 356406
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 300,
        "DVT": "Lọ",
        "Don_Gia": 17583,
        "Thanh_Tien": 5274900
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 472,
        "DVT": "Lọ",
        "Don_Gia": 12437,
        "Thanh_Tien": 5870264
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 16,
        "DVT": "Chai",
        "Don_Gia": 1007,
        "Thanh_Tien": 16112
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 114,
        "DVT": "Viên",
        "Don_Gia": 346,
        "Thanh_Tien": 39444
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 312,
        "DVT": "Ống",
        "Don_Gia": 656,
        "Thanh_Tien": 204672
      }
    ]
  },
  {
    "id": "DH076",
    "Ma_KH": "KH001",
    "Ten_KH": "BV Bạch Mai",
    "So_Hoa_Don": "HD2076",
    "Ngay_Soan": "2025-09-09",
    "Ngay_Giao": "2025-09-15",
    "Tong_Tien": 70051485,
    "Items": [
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 292,
        "DVT": "Viên",
        "Don_Gia": 609,
        "Thanh_Tien": 177828
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 432,
        "DVT": "Viên",
        "Don_Gia": 3348,
        "Thanh_Tien": 1446336
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 317,
        "DVT": "Lọ",
        "Don_Gia": 15797,
        "Thanh_Tien": 5007649
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 407,
        "DVT": "Xịt",
        "Don_Gia": 27803,
        "Thanh_Tien": 11315821
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 311,
        "DVT": "Viên",
        "Don_Gia": 186,
        "Thanh_Tien": 57846
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 366,
        "DVT": "Lọ",
        "Don_Gia": 51745,
        "Thanh_Tien": 18938670
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 402,
        "DVT": "Tuýp",
        "Don_Gia": 44551,
        "Thanh_Tien": 17909502
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 365,
        "DVT": "Ống",
        "Don_Gia": 1066,
        "Thanh_Tien": 389090
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 419,
        "DVT": "Ống",
        "Don_Gia": 945,
        "Thanh_Tien": 395955
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 490,
        "DVT": "Ống",
        "Don_Gia": 573,
        "Thanh_Tien": 280770
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 342,
        "DVT": "Lọ",
        "Don_Gia": 32230,
        "Thanh_Tien": 11022660
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 101,
        "DVT": "Lọ",
        "Don_Gia": 17715,
        "Thanh_Tien": 1789215
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 350,
        "DVT": "Viên",
        "Don_Gia": 1834,
        "Thanh_Tien": 641900
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 489,
        "DVT": "Lọ",
        "Don_Gia": 1387,
        "Thanh_Tien": 678243
      }
    ]
  },
  {
    "id": "DH077",
    "Ma_KH": "KH020",
    "Ten_KH": "Trạm Y tế xã Xuân Lăng",
    "So_Hoa_Don": "HD2077",
    "Ngay_Soan": "2025-06-21",
    "Ngay_Giao": "2025-06-23",
    "Tong_Tien": 2191624926,
    "Items": [
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 96,
        "DVT": "Viên",
        "Don_Gia": 1344,
        "Thanh_Tien": 129024
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 125,
        "DVT": "Ống",
        "Don_Gia": 251,
        "Thanh_Tien": 31375
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 483,
        "DVT": "Lọ",
        "Don_Gia": 54857,
        "Thanh_Tien": 26495931
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 148,
        "DVT": "Viên",
        "Don_Gia": 716,
        "Thanh_Tien": 105968
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 334,
        "DVT": "Ống",
        "Don_Gia": 6481566,
        "Thanh_Tien": 2164843044
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 102,
        "DVT": "Viên",
        "Don_Gia": 192,
        "Thanh_Tien": 19584
      }
    ]
  },
  {
    "id": "DH078",
    "Ma_KH": "KH002",
    "Ten_KH": "BV Việt Đức",
    "So_Hoa_Don": "HD2078",
    "Ngay_Soan": "2025-11-04",
    "Ngay_Giao": "2025-11-07",
    "Tong_Tien": 3055574351,
    "Items": [
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 23,
        "DVT": "Viên",
        "Don_Gia": 6168,
        "Thanh_Tien": 141864
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 482,
        "DVT": "Viên",
        "Don_Gia": 14574,
        "Thanh_Tien": 7024668
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 436,
        "DVT": "Viên",
        "Don_Gia": 605,
        "Thanh_Tien": 263780
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 337,
        "DVT": "Viên",
        "Don_Gia": 331,
        "Thanh_Tien": 111547
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 354,
        "DVT": "Viên",
        "Don_Gia": 3434,
        "Thanh_Tien": 1215636
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 459,
        "DVT": "Ống",
        "Don_Gia": 6607285,
        "Thanh_Tien": 3032743815
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 476,
        "DVT": "Viên",
        "Don_Gia": 184,
        "Thanh_Tien": 87584
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 277,
        "DVT": "Lọ",
        "Don_Gia": 49216,
        "Thanh_Tien": 13632832
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 217,
        "DVT": "Lọ",
        "Don_Gia": 1625,
        "Thanh_Tien": 352625
      }
    ]
  },
  {
    "id": "DH079",
    "Ma_KH": "KH009",
    "Ten_KH": "BV đa khoa Thanh Liêm",
    "So_Hoa_Don": "HD2079",
    "Ngay_Soan": "2026-03-25",
    "Ngay_Giao": "2026-03-28",
    "Tong_Tien": 40443942,
    "Items": [
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 38,
        "DVT": "Tuýp",
        "Don_Gia": 40125,
        "Thanh_Tien": 1524750
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 397,
        "DVT": "Lọ",
        "Don_Gia": 30898,
        "Thanh_Tien": 12266506
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 113,
        "DVT": "Viên",
        "Don_Gia": 1289,
        "Thanh_Tien": 145657
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 79,
        "DVT": "Viên",
        "Don_Gia": 153,
        "Thanh_Tien": 12087
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 228,
        "DVT": "Ống",
        "Don_Gia": 1071,
        "Thanh_Tien": 244188
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 197,
        "DVT": "Lọ",
        "Don_Gia": 13232,
        "Thanh_Tien": 2606704
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 299,
        "DVT": "Lọ",
        "Don_Gia": 40066,
        "Thanh_Tien": 11979734
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 243,
        "DVT": "Viên",
        "Don_Gia": 1950,
        "Thanh_Tien": 473850
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 220,
        "DVT": "Chai",
        "Don_Gia": 1099,
        "Thanh_Tien": 241780
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 304,
        "DVT": "Ống",
        "Don_Gia": 267,
        "Thanh_Tien": 81168
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 284,
        "DVT": "Viên",
        "Don_Gia": 1467,
        "Thanh_Tien": 416628
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 201,
        "DVT": "Lọ",
        "Don_Gia": 1435,
        "Thanh_Tien": 288435
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 496,
        "DVT": "Lọ",
        "Don_Gia": 15477,
        "Thanh_Tien": 7676592
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 108,
        "DVT": "Chai",
        "Don_Gia": 7512,
        "Thanh_Tien": 811296
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 327,
        "DVT": "Viên",
        "Don_Gia": 5121,
        "Thanh_Tien": 1674567
      }
    ]
  },
  {
    "id": "DH080",
    "Ma_KH": "KH013",
    "Ten_KH": "BV đa khoa Đông Anh",
    "So_Hoa_Don": "HD2080",
    "Ngay_Soan": "2025-05-31",
    "Ngay_Giao": "2025-06-06",
    "Tong_Tien": 77528934,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 474,
        "DVT": "Viên",
        "Don_Gia": 2853,
        "Thanh_Tien": 1352322
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 220,
        "DVT": "Chai",
        "Don_Gia": 7578,
        "Thanh_Tien": 1667160
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 434,
        "DVT": "Lọ",
        "Don_Gia": 42431,
        "Thanh_Tien": 18415054
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 188,
        "DVT": "Lọ",
        "Don_Gia": 284536,
        "Thanh_Tien": 53492768
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 471,
        "DVT": "Viên",
        "Don_Gia": 330,
        "Thanh_Tien": 155430
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 405,
        "DVT": "Viên",
        "Don_Gia": 6040,
        "Thanh_Tien": 2446200
      }
    ]
  },
  {
    "id": "DH081",
    "Ma_KH": "KH012",
    "Ten_KH": "TRUNG TÂM Y TẾ AN DƯƠNG",
    "So_Hoa_Don": "HD2081",
    "Ngay_Soan": "2026-03-19",
    "Ngay_Giao": "2026-03-21",
    "Tong_Tien": 2521486819,
    "Items": [
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 420,
        "DVT": "Viên",
        "Don_Gia": 580,
        "Thanh_Tien": 243600
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 217,
        "DVT": "Ống",
        "Don_Gia": 1038,
        "Thanh_Tien": 225246
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 425,
        "DVT": "Ống",
        "Don_Gia": 5815370,
        "Thanh_Tien": 2471532250
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 429,
        "DVT": "Chai",
        "Don_Gia": 6888,
        "Thanh_Tien": 2954952
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 490,
        "DVT": "Viên",
        "Don_Gia": 2854,
        "Thanh_Tien": 1398460
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 332,
        "DVT": "Viên",
        "Don_Gia": 1512,
        "Thanh_Tien": 501984
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 140,
        "DVT": "Lọ",
        "Don_Gia": 291634,
        "Thanh_Tien": 40828760
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 232,
        "DVT": "Viên",
        "Don_Gia": 308,
        "Thanh_Tien": 71456
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 237,
        "DVT": "Lọ",
        "Don_Gia": 14592,
        "Thanh_Tien": 3458304
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 116,
        "DVT": "Viên",
        "Don_Gia": 367,
        "Thanh_Tien": 42572
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 127,
        "DVT": "Viên",
        "Don_Gia": 1805,
        "Thanh_Tien": 229235
      }
    ]
  },
  {
    "id": "DH082",
    "Ma_KH": "KH005",
    "Ten_KH": "Bệnh viện Đại học Y Hà Nội",
    "So_Hoa_Don": "HD2082",
    "Ngay_Soan": "2024-12-30",
    "Ngay_Giao": "2025-01-05",
    "Tong_Tien": 751545705,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 135,
        "DVT": "Viên",
        "Don_Gia": 3371,
        "Thanh_Tien": 455085
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 126,
        "DVT": "Viên",
        "Don_Gia": 290,
        "Thanh_Tien": 36540
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 109,
        "DVT": "Ống",
        "Don_Gia": 6844316,
        "Thanh_Tien": 746030444
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 138,
        "DVT": "Viên",
        "Don_Gia": 172,
        "Thanh_Tien": 23736
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 27,
        "DVT": "Xịt",
        "Don_Gia": 32993,
        "Thanh_Tien": 890811
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 272,
        "DVT": "Viên",
        "Don_Gia": 152,
        "Thanh_Tien": 41344
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 15,
        "DVT": "Viên",
        "Don_Gia": 1574,
        "Thanh_Tien": 23610
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 188,
        "DVT": "Ống",
        "Don_Gia": 648,
        "Thanh_Tien": 121824
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 31,
        "DVT": "Lọ",
        "Don_Gia": 46363,
        "Thanh_Tien": 1437253
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 108,
        "DVT": "Lọ",
        "Don_Gia": 14383,
        "Thanh_Tien": 1553364
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 123,
        "DVT": "Chai",
        "Don_Gia": 6913,
        "Thanh_Tien": 850299
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 365,
        "DVT": "Ống",
        "Don_Gia": 223,
        "Thanh_Tien": 81395
      }
    ]
  },
  {
    "id": "DH083",
    "Ma_KH": "KH011",
    "Ten_KH": "TRUNG TÂM MẮT TỈNH QUẢNG NGÃI",
    "So_Hoa_Don": "HD2083",
    "Ngay_Soan": "2025-07-22",
    "Ngay_Giao": "2025-07-24",
    "Tong_Tien": 111720347,
    "Items": [
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 443,
        "DVT": "Viên",
        "Don_Gia": 1448,
        "Thanh_Tien": 641464
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 18,
        "DVT": "Tuýp",
        "Don_Gia": 48324,
        "Thanh_Tien": 869832
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 429,
        "DVT": "Viên",
        "Don_Gia": 428,
        "Thanh_Tien": 183612
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 301,
        "DVT": "Viên",
        "Don_Gia": 498,
        "Thanh_Tien": 149898
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 255,
        "DVT": "Viên",
        "Don_Gia": 907,
        "Thanh_Tien": 231285
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 57,
        "DVT": "Viên",
        "Don_Gia": 282,
        "Thanh_Tien": 16074
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 324,
        "DVT": "Lọ",
        "Don_Gia": 293620,
        "Thanh_Tien": 95132880
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 324,
        "DVT": "Viên",
        "Don_Gia": 2877,
        "Thanh_Tien": 932148
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 462,
        "DVT": "Lọ",
        "Don_Gia": 28667,
        "Thanh_Tien": 13244154
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 232,
        "DVT": "Viên",
        "Don_Gia": 1375,
        "Thanh_Tien": 319000
      }
    ]
  },
  {
    "id": "DH084",
    "Ma_KH": "KH016",
    "Ten_KH": "BV Đa khoa số 2 tỉnh Lào Cai",
    "So_Hoa_Don": "HD2084",
    "Ngay_Soan": "2025-02-11",
    "Ngay_Giao": "2025-02-18",
    "Tong_Tien": 1307295290,
    "Items": [
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 232,
        "DVT": "Viên",
        "Don_Gia": 326,
        "Thanh_Tien": 75632
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 281,
        "DVT": "Viên",
        "Don_Gia": 5772,
        "Thanh_Tien": 1621932
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 428,
        "DVT": "Lọ",
        "Don_Gia": 279599,
        "Thanh_Tien": 119668372
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 181,
        "DVT": "Ống",
        "Don_Gia": 6461198,
        "Thanh_Tien": 1169476838
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 444,
        "DVT": "Viên",
        "Don_Gia": 161,
        "Thanh_Tien": 71484
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 338,
        "DVT": "Viên",
        "Don_Gia": 411,
        "Thanh_Tien": 138918
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 212,
        "DVT": "Lọ",
        "Don_Gia": 35843,
        "Thanh_Tien": 7598716
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 181,
        "DVT": "Tuýp",
        "Don_Gia": 43948,
        "Thanh_Tien": 7954588
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 423,
        "DVT": "Ống",
        "Don_Gia": 910,
        "Thanh_Tien": 384930
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 214,
        "DVT": "Lọ",
        "Don_Gia": 1420,
        "Thanh_Tien": 303880
      }
    ]
  },
  {
    "id": "DH085",
    "Ma_KH": "KH005",
    "Ten_KH": "Bệnh viện Đại học Y Hà Nội",
    "So_Hoa_Don": "HD2085",
    "Ngay_Soan": "2025-08-18",
    "Ngay_Giao": "2025-08-24",
    "Tong_Tien": 1358957313,
    "Items": [
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 188,
        "DVT": "Ống",
        "Don_Gia": 690,
        "Thanh_Tien": 129720
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 196,
        "DVT": "Ống",
        "Don_Gia": 6927671,
        "Thanh_Tien": 1357823516
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 273,
        "DVT": "Ống",
        "Don_Gia": 1105,
        "Thanh_Tien": 301665
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 36,
        "DVT": "Viên",
        "Don_Gia": 302,
        "Thanh_Tien": 10872
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 487,
        "DVT": "Lọ",
        "Don_Gia": 1420,
        "Thanh_Tien": 691540
      }
    ]
  },
  {
    "id": "DH086",
    "Ma_KH": "KH008",
    "Ten_KH": "Trạm Y tế xã Bình Xuyên",
    "So_Hoa_Don": "HD2086",
    "Ngay_Soan": "2025-02-02",
    "Ngay_Giao": "2025-02-08",
    "Tong_Tien": 37262985,
    "Items": [
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 27,
        "DVT": "Viên",
        "Don_Gia": 12491,
        "Thanh_Tien": 337257
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 100,
        "DVT": "Lọ",
        "Don_Gia": 17807,
        "Thanh_Tien": 1780700
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 495,
        "DVT": "Ống",
        "Don_Gia": 1091,
        "Thanh_Tien": 540045
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 441,
        "DVT": "Chai",
        "Don_Gia": 7011,
        "Thanh_Tien": 3091851
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 416,
        "DVT": "Tuýp",
        "Don_Gia": 41185,
        "Thanh_Tien": 17132960
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 161,
        "DVT": "Lọ",
        "Don_Gia": 1671,
        "Thanh_Tien": 269031
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 402,
        "DVT": "Viên",
        "Don_Gia": 287,
        "Thanh_Tien": 115374
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 58,
        "DVT": "Lọ",
        "Don_Gia": 35348,
        "Thanh_Tien": 2050184
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 456,
        "DVT": "Ống",
        "Don_Gia": 886,
        "Thanh_Tien": 404016
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 469,
        "DVT": "Viên",
        "Don_Gia": 321,
        "Thanh_Tien": 150549
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 43,
        "DVT": "Viên",
        "Don_Gia": 1364,
        "Thanh_Tien": 58652
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 221,
        "DVT": "Lọ",
        "Don_Gia": 43996,
        "Thanh_Tien": 9723116
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 144,
        "DVT": "Viên",
        "Don_Gia": 568,
        "Thanh_Tien": 81792
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 81,
        "DVT": "Viên",
        "Don_Gia": 6248,
        "Thanh_Tien": 506088
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 70,
        "DVT": "Lọ",
        "Don_Gia": 14591,
        "Thanh_Tien": 1021370
      }
    ]
  },
  {
    "id": "DH087",
    "Ma_KH": "KH001",
    "Ten_KH": "BV Bạch Mai",
    "So_Hoa_Don": "HD2087",
    "Ngay_Soan": "2025-09-11",
    "Ngay_Giao": "2025-09-15",
    "Tong_Tien": 1781686489,
    "Items": [
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 348,
        "DVT": "Viên",
        "Don_Gia": 1452,
        "Thanh_Tien": 505296
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 42,
        "DVT": "Lọ",
        "Don_Gia": 33364,
        "Thanh_Tien": 1401288
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 494,
        "DVT": "Viên",
        "Don_Gia": 3487,
        "Thanh_Tien": 1722578
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 237,
        "DVT": "Lọ",
        "Don_Gia": 54037,
        "Thanh_Tien": 12806769
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 59,
        "DVT": "Ống",
        "Don_Gia": 1141,
        "Thanh_Tien": 67319
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 482,
        "DVT": "Ống",
        "Don_Gia": 223,
        "Thanh_Tien": 107486
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 214,
        "DVT": "Viên",
        "Don_Gia": 14471,
        "Thanh_Tien": 3096794
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 131,
        "DVT": "Viên",
        "Don_Gia": 373,
        "Thanh_Tien": 48863
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 365,
        "DVT": "Lọ",
        "Don_Gia": 324654,
        "Thanh_Tien": 118498710
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 289,
        "DVT": "Ống",
        "Don_Gia": 5675046,
        "Thanh_Tien": 1640088294
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 28,
        "DVT": "Viên",
        "Don_Gia": 566,
        "Thanh_Tien": 15848
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 60,
        "DVT": "Tuýp",
        "Don_Gia": 39701,
        "Thanh_Tien": 2382060
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 373,
        "DVT": "Viên",
        "Don_Gia": 1257,
        "Thanh_Tien": 468861
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 228,
        "DVT": "Ống",
        "Don_Gia": 1052,
        "Thanh_Tien": 239856
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 407,
        "DVT": "Ống",
        "Don_Gia": 581,
        "Thanh_Tien": 236467
      }
    ]
  },
  {
    "id": "DH088",
    "Ma_KH": "KH012",
    "Ten_KH": "TRUNG TÂM Y TẾ AN DƯƠNG",
    "So_Hoa_Don": "HD2088",
    "Ngay_Soan": "2025-09-24",
    "Ngay_Giao": "2025-09-29",
    "Tong_Tien": 852274515,
    "Items": [
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 421,
        "DVT": "Chai",
        "Don_Gia": 8109,
        "Thanh_Tien": 3413889
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 69,
        "DVT": "Viên",
        "Don_Gia": 191,
        "Thanh_Tien": 13179
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 150,
        "DVT": "Viên",
        "Don_Gia": 323,
        "Thanh_Tien": 48450
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 431,
        "DVT": "Xịt",
        "Don_Gia": 32764,
        "Thanh_Tien": 14121284
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 202,
        "DVT": "Lọ",
        "Don_Gia": 32211,
        "Thanh_Tien": 6506622
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 97,
        "DVT": "Ống",
        "Don_Gia": 6994089,
        "Thanh_Tien": 678426633
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 248,
        "DVT": "Viên",
        "Don_Gia": 381,
        "Thanh_Tien": 94488
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 412,
        "DVT": "Viên",
        "Don_Gia": 278,
        "Thanh_Tien": 114536
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 109,
        "DVT": "Lọ",
        "Don_Gia": 18109,
        "Thanh_Tien": 1973881
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 372,
        "DVT": "Lọ",
        "Don_Gia": 14384,
        "Thanh_Tien": 5350848
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 455,
        "DVT": "Lọ",
        "Don_Gia": 312551,
        "Thanh_Tien": 142210705
      }
    ]
  },
  {
    "id": "DH089",
    "Ma_KH": "KH016",
    "Ten_KH": "BV Đa khoa số 2 tỉnh Lào Cai",
    "So_Hoa_Don": "HD2089",
    "Ngay_Soan": "2025-08-10",
    "Ngay_Giao": "2025-08-15",
    "Tong_Tien": 58881448,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 405,
        "DVT": "Ống",
        "Don_Gia": 1004,
        "Thanh_Tien": 406620
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 280,
        "DVT": "Viên",
        "Don_Gia": 338,
        "Thanh_Tien": 94640
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 173,
        "DVT": "Viên",
        "Don_Gia": 449,
        "Thanh_Tien": 77677
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 318,
        "DVT": "Xịt",
        "Don_Gia": 34929,
        "Thanh_Tien": 11107422
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 244,
        "DVT": "Ống",
        "Don_Gia": 660,
        "Thanh_Tien": 161040
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 418,
        "DVT": "Viên",
        "Don_Gia": 1339,
        "Thanh_Tien": 559702
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 15,
        "DVT": "Ống",
        "Don_Gia": 257,
        "Thanh_Tien": 3855
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 416,
        "DVT": "Ống",
        "Don_Gia": 1109,
        "Thanh_Tien": 461344
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 426,
        "DVT": "Lọ",
        "Don_Gia": 46798,
        "Thanh_Tien": 19935948
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 500,
        "DVT": "Tuýp",
        "Don_Gia": 46111,
        "Thanh_Tien": 23055500
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 161,
        "DVT": "Lọ",
        "Don_Gia": 14699,
        "Thanh_Tien": 2366539
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 24,
        "DVT": "Lọ",
        "Don_Gia": 17274,
        "Thanh_Tien": 414576
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 21,
        "DVT": "Lọ",
        "Don_Gia": 1653,
        "Thanh_Tien": 34713
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 148,
        "DVT": "Viên",
        "Don_Gia": 1364,
        "Thanh_Tien": 201872
      }
    ]
  },
  {
    "id": "DH090",
    "Ma_KH": "KH016",
    "Ten_KH": "BV Đa khoa số 2 tỉnh Lào Cai",
    "So_Hoa_Don": "HD2090",
    "Ngay_Soan": "2025-06-29",
    "Ngay_Giao": "2025-07-05",
    "Tong_Tien": 110098325,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 130,
        "DVT": "Ống",
        "Don_Gia": 1048,
        "Thanh_Tien": 136240
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 254,
        "DVT": "Viên",
        "Don_Gia": 6006,
        "Thanh_Tien": 1525524
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 10,
        "DVT": "Viên",
        "Don_Gia": 154,
        "Thanh_Tien": 1540
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 276,
        "DVT": "Viên",
        "Don_Gia": 13733,
        "Thanh_Tien": 3790308
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 325,
        "DVT": "Lọ",
        "Don_Gia": 275231,
        "Thanh_Tien": 89450075
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 380,
        "DVT": "Chai",
        "Don_Gia": 1075,
        "Thanh_Tien": 408500
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 496,
        "DVT": "Viên",
        "Don_Gia": 2090,
        "Thanh_Tien": 1036640
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 294,
        "DVT": "Tuýp",
        "Don_Gia": 46767,
        "Thanh_Tien": 13749498
      }
    ]
  },
  {
    "id": "DH091",
    "Ma_KH": "KH020",
    "Ten_KH": "Trạm Y tế xã Xuân Lăng",
    "So_Hoa_Don": "HD2091",
    "Ngay_Soan": "2025-07-19",
    "Ngay_Giao": "2025-07-22",
    "Tong_Tien": 18641545,
    "Items": [
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 367,
        "DVT": "Xịt",
        "Don_Gia": 32139,
        "Thanh_Tien": 11795013
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 185,
        "DVT": "Lọ",
        "Don_Gia": 36077,
        "Thanh_Tien": 6674245
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 141,
        "DVT": "Viên",
        "Don_Gia": 341,
        "Thanh_Tien": 48081
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 39,
        "DVT": "Viên",
        "Don_Gia": 2976,
        "Thanh_Tien": 116064
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 46,
        "DVT": "Viên",
        "Don_Gia": 177,
        "Thanh_Tien": 8142
      }
    ]
  },
  {
    "id": "DH092",
    "Ma_KH": "KH020",
    "Ten_KH": "Trạm Y tế xã Xuân Lăng",
    "So_Hoa_Don": "HD2092",
    "Ngay_Soan": "2026-01-27",
    "Ngay_Giao": "2026-01-31",
    "Tong_Tien": 1938562952,
    "Items": [
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 390,
        "DVT": "Viên",
        "Don_Gia": 5724,
        "Thanh_Tien": 2232360
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 308,
        "DVT": "Ống",
        "Don_Gia": 5727647,
        "Thanh_Tien": 1764115276
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 374,
        "DVT": "Viên",
        "Don_Gia": 1813,
        "Thanh_Tien": 678062
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 147,
        "DVT": "Viên",
        "Don_Gia": 1339,
        "Thanh_Tien": 196833
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 401,
        "DVT": "Lọ",
        "Don_Gia": 44169,
        "Thanh_Tien": 17711769
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 166,
        "DVT": "Tuýp",
        "Don_Gia": 39910,
        "Thanh_Tien": 6625060
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 156,
        "DVT": "Chai",
        "Don_Gia": 7874,
        "Thanh_Tien": 1228344
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 98,
        "DVT": "Viên",
        "Don_Gia": 133,
        "Thanh_Tien": 13034
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 381,
        "DVT": "Ống",
        "Don_Gia": 259,
        "Thanh_Tien": 98679
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 48,
        "DVT": "Viên",
        "Don_Gia": 563,
        "Thanh_Tien": 27024
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 185,
        "DVT": "Lọ",
        "Don_Gia": 31863,
        "Thanh_Tien": 5894655
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 216,
        "DVT": "Viên",
        "Don_Gia": 174,
        "Thanh_Tien": 37584
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 293,
        "DVT": "Lọ",
        "Don_Gia": 50820,
        "Thanh_Tien": 14890260
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 457,
        "DVT": "Lọ",
        "Don_Gia": 273116,
        "Thanh_Tien": 124814012
      }
    ]
  },
  {
    "id": "DH093",
    "Ma_KH": "KH017",
    "Ten_KH": "Trung tâm Y tế Khu vực Văn Chấn",
    "So_Hoa_Don": "HD2093",
    "Ngay_Soan": "2025-11-19",
    "Ngay_Giao": "2025-11-22",
    "Tong_Tien": 33338253,
    "Items": [
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 334,
        "DVT": "Tuýp",
        "Don_Gia": 39520,
        "Thanh_Tien": 13199680
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 240,
        "DVT": "Lọ",
        "Don_Gia": 45624,
        "Thanh_Tien": 10949760
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 219,
        "DVT": "Ống",
        "Don_Gia": 241,
        "Thanh_Tien": 52779
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 351,
        "DVT": "Viên",
        "Don_Gia": 292,
        "Thanh_Tien": 102492
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 494,
        "DVT": "Lọ",
        "Don_Gia": 15004,
        "Thanh_Tien": 7411976
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 309,
        "DVT": "Viên",
        "Don_Gia": 782,
        "Thanh_Tien": 241638
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 472,
        "DVT": "Viên",
        "Don_Gia": 1509,
        "Thanh_Tien": 712248
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 48,
        "DVT": "Lọ",
        "Don_Gia": 13910,
        "Thanh_Tien": 667680
      }
    ]
  },
  {
    "id": "DH094",
    "Ma_KH": "KH018",
    "Ten_KH": "BV Đa khoa tỉnh Quảng Trị",
    "So_Hoa_Don": "HD2094",
    "Ngay_Soan": "2025-09-08",
    "Ngay_Giao": "2025-09-13",
    "Tong_Tien": 3023650867,
    "Items": [
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 43,
        "DVT": "Viên",
        "Don_Gia": 343,
        "Thanh_Tien": 14749
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 260,
        "DVT": "Xịt",
        "Don_Gia": 28341,
        "Thanh_Tien": 7368660
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 48,
        "DVT": "Chai",
        "Don_Gia": 1014,
        "Thanh_Tien": 48672
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 477,
        "DVT": "Ống",
        "Don_Gia": 6321034,
        "Thanh_Tien": 3015133218
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 404,
        "DVT": "Ống",
        "Don_Gia": 1118,
        "Thanh_Tien": 451672
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 472,
        "DVT": "Lọ",
        "Don_Gia": 1343,
        "Thanh_Tien": 633896
      }
    ]
  },
  {
    "id": "DH095",
    "Ma_KH": "KH013",
    "Ten_KH": "BV đa khoa Đông Anh",
    "So_Hoa_Don": "HD2095",
    "Ngay_Soan": "2025-03-14",
    "Ngay_Giao": "2025-03-16",
    "Tong_Tien": 1199778766,
    "Items": [
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 453,
        "DVT": "Lọ",
        "Don_Gia": 45323,
        "Thanh_Tien": 20531319
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 77,
        "DVT": "Lọ",
        "Don_Gia": 19112,
        "Thanh_Tien": 1471624
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 394,
        "DVT": "Viên",
        "Don_Gia": 150,
        "Thanh_Tien": 59100
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 111,
        "DVT": "Ống",
        "Don_Gia": 1048,
        "Thanh_Tien": 116328
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 349,
        "DVT": "Viên",
        "Don_Gia": 1334,
        "Thanh_Tien": 465566
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 412,
        "DVT": "Lọ",
        "Don_Gia": 16369,
        "Thanh_Tien": 6744028
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 32,
        "DVT": "Viên",
        "Don_Gia": 2842,
        "Thanh_Tien": 90944
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 202,
        "DVT": "Viên",
        "Don_Gia": 14299,
        "Thanh_Tien": 2888398
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 322,
        "DVT": "Lọ",
        "Don_Gia": 29460,
        "Thanh_Tien": 9486120
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 197,
        "DVT": "Ống",
        "Don_Gia": 5838502,
        "Thanh_Tien": 1150184894
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 397,
        "DVT": "Viên",
        "Don_Gia": 203,
        "Thanh_Tien": 80591
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 398,
        "DVT": "Viên",
        "Don_Gia": 417,
        "Thanh_Tien": 165966
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 177,
        "DVT": "Lọ",
        "Don_Gia": 42150,
        "Thanh_Tien": 7460550
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 38,
        "DVT": "Ống",
        "Don_Gia": 241,
        "Thanh_Tien": 9158
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 39,
        "DVT": "Ống",
        "Don_Gia": 620,
        "Thanh_Tien": 24180
      }
    ]
  },
  {
    "id": "DH096",
    "Ma_KH": "KH015",
    "Ten_KH": "BV Đa khoa Cẩm Phả",
    "So_Hoa_Don": "HD2096",
    "Ngay_Soan": "2025-04-30",
    "Ngay_Giao": "2025-05-03",
    "Tong_Tien": 1865696559,
    "Items": [
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 411,
        "DVT": "Chai",
        "Don_Gia": 7079,
        "Thanh_Tien": 2909469
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 324,
        "DVT": "Viên",
        "Don_Gia": 3421,
        "Thanh_Tien": 1108404
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 370,
        "DVT": "Lọ",
        "Don_Gia": 47041,
        "Thanh_Tien": 17405170
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 405,
        "DVT": "Lọ",
        "Don_Gia": 1419,
        "Thanh_Tien": 574695
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 417,
        "DVT": "Viên",
        "Don_Gia": 369,
        "Thanh_Tien": 153873
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 316,
        "DVT": "Ống",
        "Don_Gia": 5834003,
        "Thanh_Tien": 1843544948
      }
    ]
  },
  {
    "id": "DH097",
    "Ma_KH": "KH005",
    "Ten_KH": "Bệnh viện Đại học Y Hà Nội",
    "So_Hoa_Don": "HD2097",
    "Ngay_Soan": "2025-05-16",
    "Ngay_Giao": "2025-05-23",
    "Tong_Tien": 149674454,
    "Items": [
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 35,
        "DVT": "Viên",
        "Don_Gia": 5721,
        "Thanh_Tien": 200235
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 20,
        "DVT": "Ống",
        "Don_Gia": 221,
        "Thanh_Tien": 4420
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 447,
        "DVT": "Lọ",
        "Don_Gia": 50941,
        "Thanh_Tien": 22770627
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 364,
        "DVT": "Viên",
        "Don_Gia": 326,
        "Thanh_Tien": 118664
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 292,
        "DVT": "Viên",
        "Don_Gia": 2043,
        "Thanh_Tien": 596556
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 400,
        "DVT": "Chai",
        "Don_Gia": 7469,
        "Thanh_Tien": 2987600
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 473,
        "DVT": "Lọ",
        "Don_Gia": 38487,
        "Thanh_Tien": 18204351
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 300,
        "DVT": "Ống",
        "Don_Gia": 891,
        "Thanh_Tien": 267300
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 275,
        "DVT": "Ống",
        "Don_Gia": 680,
        "Thanh_Tien": 187000
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 311,
        "DVT": "Lọ",
        "Don_Gia": 335491,
        "Thanh_Tien": 104337701
      }
    ]
  },
  {
    "id": "DH098",
    "Ma_KH": "KH017",
    "Ten_KH": "Trung tâm Y tế Khu vực Văn Chấn",
    "So_Hoa_Don": "HD2098",
    "Ngay_Soan": "2025-02-17",
    "Ngay_Giao": "2025-02-22",
    "Tong_Tien": 114636998,
    "Items": [
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 337,
        "DVT": "Lọ",
        "Don_Gia": 334948,
        "Thanh_Tien": 112877476
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 80,
        "DVT": "Lọ",
        "Don_Gia": 17534,
        "Thanh_Tien": 1402720
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 215,
        "DVT": "Viên",
        "Don_Gia": 727,
        "Thanh_Tien": 156305
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 412,
        "DVT": "Viên",
        "Don_Gia": 169,
        "Thanh_Tien": 69628
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 333,
        "DVT": "Viên",
        "Don_Gia": 393,
        "Thanh_Tien": 130869
      }
    ]
  },
  {
    "id": "DH099",
    "Ma_KH": "KH003",
    "Ten_KH": "BV Chợ Rẫy",
    "So_Hoa_Don": "HD2099",
    "Ngay_Soan": "2025-06-17",
    "Ngay_Giao": "2025-06-23",
    "Tong_Tien": 18991025,
    "Items": [
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 491,
        "DVT": "Viên",
        "Don_Gia": 165,
        "Thanh_Tien": 81015
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 172,
        "DVT": "Lọ",
        "Don_Gia": 43890,
        "Thanh_Tien": 7549080
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 169,
        "DVT": "Viên",
        "Don_Gia": 13579,
        "Thanh_Tien": 2294851
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 158,
        "DVT": "Lọ",
        "Don_Gia": 20853,
        "Thanh_Tien": 3294774
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 17,
        "DVT": "Ống",
        "Don_Gia": 1253,
        "Thanh_Tien": 21301
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 203,
        "DVT": "Lọ",
        "Don_Gia": 1347,
        "Thanh_Tien": 273441
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 337,
        "DVT": "Chai",
        "Don_Gia": 1192,
        "Thanh_Tien": 401704
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 349,
        "DVT": "Viên",
        "Don_Gia": 1961,
        "Thanh_Tien": 684389
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 247,
        "DVT": "Viên",
        "Don_Gia": 166,
        "Thanh_Tien": 41002
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 194,
        "DVT": "Ống",
        "Don_Gia": 235,
        "Thanh_Tien": 45590
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 123,
        "DVT": "Xịt",
        "Don_Gia": 34792,
        "Thanh_Tien": 4279416
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 27,
        "DVT": "Ống",
        "Don_Gia": 906,
        "Thanh_Tien": 24462
      }
    ]
  },
  {
    "id": "DH100",
    "Ma_KH": "KH013",
    "Ten_KH": "BV đa khoa Đông Anh",
    "So_Hoa_Don": "HD2100",
    "Ngay_Soan": "2025-08-08",
    "Ngay_Giao": "2025-08-11",
    "Tong_Tien": 2860169,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 488,
        "DVT": "Viên",
        "Don_Gia": 2070,
        "Thanh_Tien": 1010160
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 188,
        "DVT": "Viên",
        "Don_Gia": 158,
        "Thanh_Tien": 29704
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 125,
        "DVT": "Ống",
        "Don_Gia": 1074,
        "Thanh_Tien": 134250
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 136,
        "DVT": "Ống",
        "Don_Gia": 651,
        "Thanh_Tien": 88536
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 26,
        "DVT": "Lọ",
        "Don_Gia": 20732,
        "Thanh_Tien": 539032
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 433,
        "DVT": "Viên",
        "Don_Gia": 1355,
        "Thanh_Tien": 586715
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 83,
        "DVT": "Viên",
        "Don_Gia": 5684,
        "Thanh_Tien": 471772
      }
    ]
  },
  {
    "id": "DH101",
    "Ma_KH": "KH016",
    "Ten_KH": "BV Đa khoa số 2 tỉnh Lào Cai",
    "So_Hoa_Don": "HD2101",
    "Ngay_Soan": "2026-02-12",
    "Ngay_Giao": "2026-02-17",
    "Tong_Tien": 25586108,
    "Items": [
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 31,
        "DVT": "Ống",
        "Don_Gia": 1109,
        "Thanh_Tien": 34379
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 131,
        "DVT": "Viên",
        "Don_Gia": 6168,
        "Thanh_Tien": 808008
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 24,
        "DVT": "Viên",
        "Don_Gia": 173,
        "Thanh_Tien": 4152
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 247,
        "DVT": "Lọ",
        "Don_Gia": 41594,
        "Thanh_Tien": 10273718
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 190,
        "DVT": "Viên",
        "Don_Gia": 441,
        "Thanh_Tien": 83790
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 133,
        "DVT": "Chai",
        "Don_Gia": 1026,
        "Thanh_Tien": 136458
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 395,
        "DVT": "Xịt",
        "Don_Gia": 28918,
        "Thanh_Tien": 11422610
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 32,
        "DVT": "Lọ",
        "Don_Gia": 13567,
        "Thanh_Tien": 434144
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 88,
        "DVT": "Ống",
        "Don_Gia": 594,
        "Thanh_Tien": 52272
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 129,
        "DVT": "Lọ",
        "Don_Gia": 18113,
        "Thanh_Tien": 2336577
      }
    ]
  },
  {
    "id": "DH102",
    "Ma_KH": "KH014",
    "Ten_KH": "BV Đa khoa Từ Sơn",
    "So_Hoa_Don": "HD2102",
    "Ngay_Soan": "2025-09-15",
    "Ngay_Giao": "2025-09-18",
    "Tong_Tien": 55189734,
    "Items": [
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 184,
        "DVT": "Viên",
        "Don_Gia": 209,
        "Thanh_Tien": 38456
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 364,
        "DVT": "Ống",
        "Don_Gia": 916,
        "Thanh_Tien": 333424
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 437,
        "DVT": "Viên",
        "Don_Gia": 2797,
        "Thanh_Tien": 1222289
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 11,
        "DVT": "Viên",
        "Don_Gia": 778,
        "Thanh_Tien": 8558
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 319,
        "DVT": "Lọ",
        "Don_Gia": 17336,
        "Thanh_Tien": 5530184
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 430,
        "DVT": "Viên",
        "Don_Gia": 360,
        "Thanh_Tien": 154800
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 411,
        "DVT": "Chai",
        "Don_Gia": 6777,
        "Thanh_Tien": 2785347
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 467,
        "DVT": "Viên",
        "Don_Gia": 1438,
        "Thanh_Tien": 671546
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 430,
        "DVT": "Lọ",
        "Don_Gia": 47555,
        "Thanh_Tien": 20448650
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 394,
        "DVT": "Lọ",
        "Don_Gia": 46620,
        "Thanh_Tien": 18368280
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 180,
        "DVT": "Lọ",
        "Don_Gia": 31111,
        "Thanh_Tien": 5599980
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 83,
        "DVT": "Viên",
        "Don_Gia": 340,
        "Thanh_Tien": 28220
      }
    ]
  },
  {
    "id": "DH103",
    "Ma_KH": "KH019",
    "Ten_KH": "BV Phục hồi chức năng Thanh Hóa",
    "So_Hoa_Don": "HD2103",
    "Ngay_Soan": "2025-06-09",
    "Ngay_Giao": "2025-06-11",
    "Tong_Tien": 136815164,
    "Items": [
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 227,
        "DVT": "Viên",
        "Don_Gia": 141,
        "Thanh_Tien": 32007
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 68,
        "DVT": "Viên",
        "Don_Gia": 511,
        "Thanh_Tien": 34748
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 339,
        "DVT": "Lọ",
        "Don_Gia": 333317,
        "Thanh_Tien": 112994463
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 248,
        "DVT": "Viên",
        "Don_Gia": 12355,
        "Thanh_Tien": 3064040
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 358,
        "DVT": "Lọ",
        "Don_Gia": 35003,
        "Thanh_Tien": 12531074
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 273,
        "DVT": "Viên",
        "Don_Gia": 276,
        "Thanh_Tien": 75348
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 471,
        "DVT": "Ống",
        "Don_Gia": 1128,
        "Thanh_Tien": 531288
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 126,
        "DVT": "Lọ",
        "Don_Gia": 14573,
        "Thanh_Tien": 1836198
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 421,
        "DVT": "Chai",
        "Don_Gia": 7842,
        "Thanh_Tien": 3301482
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 398,
        "DVT": "Viên",
        "Don_Gia": 2937,
        "Thanh_Tien": 1168926
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 393,
        "DVT": "Chai",
        "Don_Gia": 1233,
        "Thanh_Tien": 484569
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 83,
        "DVT": "Viên",
        "Don_Gia": 2032,
        "Thanh_Tien": 168656
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 391,
        "DVT": "Lọ",
        "Don_Gia": 1515,
        "Thanh_Tien": 592365
      }
    ]
  },
  {
    "id": "DH104",
    "Ma_KH": "KH003",
    "Ten_KH": "BV Chợ Rẫy",
    "So_Hoa_Don": "HD2104",
    "Ngay_Soan": "2026-02-20",
    "Ngay_Giao": "2026-02-26",
    "Tong_Tien": 17594602,
    "Items": [
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 410,
        "DVT": "Viên",
        "Don_Gia": 387,
        "Thanh_Tien": 158670
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 318,
        "DVT": "Lọ",
        "Don_Gia": 20280,
        "Thanh_Tien": 6449040
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 320,
        "DVT": "Ống",
        "Don_Gia": 691,
        "Thanh_Tien": 221120
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 78,
        "DVT": "Tuýp",
        "Don_Gia": 46496,
        "Thanh_Tien": 3626688
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 412,
        "DVT": "Viên",
        "Don_Gia": 14800,
        "Thanh_Tien": 6097600
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 255,
        "DVT": "Viên",
        "Don_Gia": 535,
        "Thanh_Tien": 136425
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 121,
        "DVT": "Viên",
        "Don_Gia": 145,
        "Thanh_Tien": 17545
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 270,
        "DVT": "Ống",
        "Don_Gia": 970,
        "Thanh_Tien": 261900
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 306,
        "DVT": "Viên",
        "Don_Gia": 367,
        "Thanh_Tien": 112302
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 319,
        "DVT": "Chai",
        "Don_Gia": 1138,
        "Thanh_Tien": 363022
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 95,
        "DVT": "Lọ",
        "Don_Gia": 1582,
        "Thanh_Tien": 150290
      }
    ]
  },
  {
    "id": "DH105",
    "Ma_KH": "KH001",
    "Ten_KH": "BV Bạch Mai",
    "So_Hoa_Don": "HD2105",
    "Ngay_Soan": "2025-03-01",
    "Ngay_Giao": "2025-03-05",
    "Tong_Tien": 1417322326,
    "Items": [
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 151,
        "DVT": "Tuýp",
        "Don_Gia": 41880,
        "Thanh_Tien": 6323880
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 348,
        "DVT": "Viên",
        "Don_Gia": 1597,
        "Thanh_Tien": 555756
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 188,
        "DVT": "Ống",
        "Don_Gia": 6771374,
        "Thanh_Tien": 1273018312
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 363,
        "DVT": "Ống",
        "Don_Gia": 893,
        "Thanh_Tien": 324159
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 285,
        "DVT": "Viên",
        "Don_Gia": 393,
        "Thanh_Tien": 112005
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 440,
        "DVT": "Lọ",
        "Don_Gia": 309789,
        "Thanh_Tien": 136307160
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 375,
        "DVT": "Viên",
        "Don_Gia": 1354,
        "Thanh_Tien": 507750
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 348,
        "DVT": "Viên",
        "Don_Gia": 498,
        "Thanh_Tien": 173304
      }
    ]
  },
  {
    "id": "DH106",
    "Ma_KH": "KH020",
    "Ten_KH": "Trạm Y tế xã Xuân Lăng",
    "So_Hoa_Don": "HD2106",
    "Ngay_Soan": "2025-03-21",
    "Ngay_Giao": "2025-03-25",
    "Tong_Tien": 26547602,
    "Items": [
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 40,
        "DVT": "Viên",
        "Don_Gia": 299,
        "Thanh_Tien": 11960
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 39,
        "DVT": "Viên",
        "Don_Gia": 2877,
        "Thanh_Tien": 112203
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 146,
        "DVT": "Viên",
        "Don_Gia": 875,
        "Thanh_Tien": 127750
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 49,
        "DVT": "Lọ",
        "Don_Gia": 1372,
        "Thanh_Tien": 67228
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 268,
        "DVT": "Lọ",
        "Don_Gia": 32227,
        "Thanh_Tien": 8636836
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 320,
        "DVT": "Tuýp",
        "Don_Gia": 39104,
        "Thanh_Tien": 12513280
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 280,
        "DVT": "Viên",
        "Don_Gia": 1186,
        "Thanh_Tien": 332080
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 237,
        "DVT": "Viên",
        "Don_Gia": 1441,
        "Thanh_Tien": 341517
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 150,
        "DVT": "Lọ",
        "Don_Gia": 15146,
        "Thanh_Tien": 2271900
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 391,
        "DVT": "Ống",
        "Don_Gia": 952,
        "Thanh_Tien": 372232
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 24,
        "DVT": "Lọ",
        "Don_Gia": 1455,
        "Thanh_Tien": 34920
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 42,
        "DVT": "Lọ",
        "Don_Gia": 41088,
        "Thanh_Tien": 1725696
      }
    ]
  },
  {
    "id": "DH107",
    "Ma_KH": "KH001",
    "Ten_KH": "BV Bạch Mai",
    "So_Hoa_Don": "HD2107",
    "Ngay_Soan": "2025-08-18",
    "Ngay_Giao": "2025-08-21",
    "Tong_Tien": 178612887,
    "Items": [
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 157,
        "DVT": "Viên",
        "Don_Gia": 440,
        "Thanh_Tien": 69080
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 470,
        "DVT": "Lọ",
        "Don_Gia": 15788,
        "Thanh_Tien": 7420360
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 168,
        "DVT": "Viên",
        "Don_Gia": 415,
        "Thanh_Tien": 69720
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 143,
        "DVT": "Viên",
        "Don_Gia": 3204,
        "Thanh_Tien": 458172
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 453,
        "DVT": "Lọ",
        "Don_Gia": 30872,
        "Thanh_Tien": 13985016
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 288,
        "DVT": "Viên",
        "Don_Gia": 180,
        "Thanh_Tien": 51840
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 204,
        "DVT": "Chai",
        "Don_Gia": 7293,
        "Thanh_Tien": 1487772
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 313,
        "DVT": "Viên",
        "Don_Gia": 5481,
        "Thanh_Tien": 1715553
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 455,
        "DVT": "Lọ",
        "Don_Gia": 270529,
        "Thanh_Tien": 123090695
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 320,
        "DVT": "Lọ",
        "Don_Gia": 51176,
        "Thanh_Tien": 16376320
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 447,
        "DVT": "Xịt",
        "Don_Gia": 30619,
        "Thanh_Tien": 13686693
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 366,
        "DVT": "Viên",
        "Don_Gia": 551,
        "Thanh_Tien": 201666
      }
    ]
  },
  {
    "id": "DH108",
    "Ma_KH": "KH018",
    "Ten_KH": "BV Đa khoa tỉnh Quảng Trị",
    "So_Hoa_Don": "HD2108",
    "Ngay_Soan": "2025-10-20",
    "Ngay_Giao": "2025-10-27",
    "Tong_Tien": 11479757,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 413,
        "DVT": "Ống",
        "Don_Gia": 1222,
        "Thanh_Tien": 504686
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 441,
        "DVT": "Viên",
        "Don_Gia": 434,
        "Thanh_Tien": 191394
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 205,
        "DVT": "Viên",
        "Don_Gia": 12631,
        "Thanh_Tien": 2589355
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 92,
        "DVT": "Lọ",
        "Don_Gia": 18364,
        "Thanh_Tien": 1689488
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 193,
        "DVT": "Lọ",
        "Don_Gia": 29948,
        "Thanh_Tien": 5779964
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 417,
        "DVT": "Chai",
        "Don_Gia": 1120,
        "Thanh_Tien": 467040
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 169,
        "DVT": "Viên",
        "Don_Gia": 331,
        "Thanh_Tien": 55939
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 201,
        "DVT": "Viên",
        "Don_Gia": 197,
        "Thanh_Tien": 39597
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 363,
        "DVT": "Viên",
        "Don_Gia": 297,
        "Thanh_Tien": 107811
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 381,
        "DVT": "Viên",
        "Don_Gia": 143,
        "Thanh_Tien": 54483
      }
    ]
  },
  {
    "id": "DH109",
    "Ma_KH": "KH012",
    "Ten_KH": "TRUNG TÂM Y TẾ AN DƯƠNG",
    "So_Hoa_Don": "HD2109",
    "Ngay_Soan": "2026-01-31",
    "Ngay_Giao": "2026-02-03",
    "Tong_Tien": 1114538103,
    "Items": [
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 438,
        "DVT": "Lọ",
        "Don_Gia": 55111,
        "Thanh_Tien": 24138618
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 150,
        "DVT": "Ống",
        "Don_Gia": 6536498,
        "Thanh_Tien": 980474700
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 158,
        "DVT": "Viên",
        "Don_Gia": 12850,
        "Thanh_Tien": 2030300
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 327,
        "DVT": "Lọ",
        "Don_Gia": 318936,
        "Thanh_Tien": 104292072
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 187,
        "DVT": "Lọ",
        "Don_Gia": 17775,
        "Thanh_Tien": 3323925
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 161,
        "DVT": "Viên",
        "Don_Gia": 432,
        "Thanh_Tien": 69552
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 182,
        "DVT": "Ống",
        "Don_Gia": 1148,
        "Thanh_Tien": 208936
      }
    ]
  },
  {
    "id": "DH110",
    "Ma_KH": "KH013",
    "Ten_KH": "BV đa khoa Đông Anh",
    "So_Hoa_Don": "HD2110",
    "Ngay_Soan": "2026-03-21",
    "Ngay_Giao": "2026-03-25",
    "Tong_Tien": 17507920,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 204,
        "DVT": "Viên",
        "Don_Gia": 2067,
        "Thanh_Tien": 421668
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 26,
        "DVT": "Lọ",
        "Don_Gia": 286304,
        "Thanh_Tien": 7443904
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 69,
        "DVT": "Lọ",
        "Don_Gia": 50408,
        "Thanh_Tien": 3478152
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 223,
        "DVT": "Lọ",
        "Don_Gia": 20633,
        "Thanh_Tien": 4601159
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 94,
        "DVT": "Ống",
        "Don_Gia": 1258,
        "Thanh_Tien": 118252
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 121,
        "DVT": "Viên",
        "Don_Gia": 1319,
        "Thanh_Tien": 159599
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 79,
        "DVT": "Viên",
        "Don_Gia": 529,
        "Thanh_Tien": 41791
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 471,
        "DVT": "Lọ",
        "Don_Gia": 1453,
        "Thanh_Tien": 684363
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 313,
        "DVT": "Ống",
        "Don_Gia": 648,
        "Thanh_Tien": 202824
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 492,
        "DVT": "Viên",
        "Don_Gia": 724,
        "Thanh_Tien": 356208
      }
    ]
  },
  {
    "id": "DH111",
    "Ma_KH": "KH007",
    "Ten_KH": "Trung tâm Y tế khu vực Lục Yên",
    "So_Hoa_Don": "HD2111",
    "Ngay_Soan": "2025-09-28",
    "Ngay_Giao": "2025-09-30",
    "Tong_Tien": 36527293,
    "Items": [
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 287,
        "DVT": "Lọ",
        "Don_Gia": 29448,
        "Thanh_Tien": 8451576
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 293,
        "DVT": "Xịt",
        "Don_Gia": 27888,
        "Thanh_Tien": 8171184
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 191,
        "DVT": "Lọ",
        "Don_Gia": 40312,
        "Thanh_Tien": 7699592
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 284,
        "DVT": "Viên",
        "Don_Gia": 5803,
        "Thanh_Tien": 1648052
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 423,
        "DVT": "Lọ",
        "Don_Gia": 14832,
        "Thanh_Tien": 6273936
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 36,
        "DVT": "Viên",
        "Don_Gia": 1858,
        "Thanh_Tien": 66888
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 277,
        "DVT": "Ống",
        "Don_Gia": 596,
        "Thanh_Tien": 165092
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 126,
        "DVT": "Lọ",
        "Don_Gia": 18481,
        "Thanh_Tien": 2328606
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 96,
        "DVT": "Viên",
        "Don_Gia": 528,
        "Thanh_Tien": 50688
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 205,
        "DVT": "Viên",
        "Don_Gia": 794,
        "Thanh_Tien": 162770
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 415,
        "DVT": "Lọ",
        "Don_Gia": 1548,
        "Thanh_Tien": 642420
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 116,
        "DVT": "Viên",
        "Don_Gia": 334,
        "Thanh_Tien": 38744
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 80,
        "DVT": "Chai",
        "Don_Gia": 8005,
        "Thanh_Tien": 640400
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 445,
        "DVT": "Viên",
        "Don_Gia": 421,
        "Thanh_Tien": 187345
      }
    ]
  },
  {
    "id": "DH112",
    "Ma_KH": "KH018",
    "Ten_KH": "BV Đa khoa tỉnh Quảng Trị",
    "So_Hoa_Don": "HD2112",
    "Ngay_Soan": "2025-03-27",
    "Ngay_Giao": "2025-03-30",
    "Tong_Tien": 37680926,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 242,
        "DVT": "Viên",
        "Don_Gia": 2871,
        "Thanh_Tien": 694782
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 81,
        "DVT": "Viên",
        "Don_Gia": 339,
        "Thanh_Tien": 27459
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 138,
        "DVT": "Viên",
        "Don_Gia": 1489,
        "Thanh_Tien": 205482
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 237,
        "DVT": "Viên",
        "Don_Gia": 1155,
        "Thanh_Tien": 273735
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 451,
        "DVT": "Xịt",
        "Don_Gia": 29745,
        "Thanh_Tien": 13414995
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 431,
        "DVT": "Lọ",
        "Don_Gia": 17725,
        "Thanh_Tien": 7639475
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 315,
        "DVT": "Chai",
        "Don_Gia": 1135,
        "Thanh_Tien": 357525
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 42,
        "DVT": "Ống",
        "Don_Gia": 591,
        "Thanh_Tien": 24822
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 443,
        "DVT": "Lọ",
        "Don_Gia": 1643,
        "Thanh_Tien": 727849
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 272,
        "DVT": "Ống",
        "Don_Gia": 994,
        "Thanh_Tien": 270368
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 415,
        "DVT": "Lọ",
        "Don_Gia": 12882,
        "Thanh_Tien": 5346030
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 209,
        "DVT": "Tuýp",
        "Don_Gia": 40938,
        "Thanh_Tien": 8556042
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 198,
        "DVT": "Viên",
        "Don_Gia": 719,
        "Thanh_Tien": 142362
      }
    ]
  },
  {
    "id": "DH113",
    "Ma_KH": "KH014",
    "Ten_KH": "BV Đa khoa Từ Sơn",
    "So_Hoa_Don": "HD2113",
    "Ngay_Soan": "2025-08-20",
    "Ngay_Giao": "2025-08-23",
    "Tong_Tien": 2274879794,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 187,
        "DVT": "Viên",
        "Don_Gia": 3312,
        "Thanh_Tien": 619344
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 498,
        "DVT": "Tuýp",
        "Don_Gia": 45486,
        "Thanh_Tien": 22652028
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 381,
        "DVT": "Chai",
        "Don_Gia": 1225,
        "Thanh_Tien": 466725
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 175,
        "DVT": "Viên",
        "Don_Gia": 1278,
        "Thanh_Tien": 223650
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 272,
        "DVT": "Viên",
        "Don_Gia": 1616,
        "Thanh_Tien": 439552
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 97,
        "DVT": "Lọ",
        "Don_Gia": 32733,
        "Thanh_Tien": 3175101
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 306,
        "DVT": "Viên",
        "Don_Gia": 136,
        "Thanh_Tien": 41616
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 342,
        "DVT": "Ống",
        "Don_Gia": 6549328,
        "Thanh_Tien": 2239870176
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 145,
        "DVT": "Ống",
        "Don_Gia": 580,
        "Thanh_Tien": 84100
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 234,
        "DVT": "Lọ",
        "Don_Gia": 1503,
        "Thanh_Tien": 351702
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 445,
        "DVT": "Lọ",
        "Don_Gia": 14964,
        "Thanh_Tien": 6658980
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 180,
        "DVT": "Lọ",
        "Don_Gia": 1649,
        "Thanh_Tien": 296820
      }
    ]
  },
  {
    "id": "DH114",
    "Ma_KH": "KH011",
    "Ten_KH": "TRUNG TÂM MẮT TỈNH QUẢNG NGÃI",
    "So_Hoa_Don": "HD2114",
    "Ngay_Soan": "2025-10-21",
    "Ngay_Giao": "2025-10-27",
    "Tong_Tien": 2190100778,
    "Items": [
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 416,
        "DVT": "Viên",
        "Don_Gia": 170,
        "Thanh_Tien": 70720
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 254,
        "DVT": "Viên",
        "Don_Gia": 302,
        "Thanh_Tien": 76708
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 280,
        "DVT": "Viên",
        "Don_Gia": 2762,
        "Thanh_Tien": 773360
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 88,
        "DVT": "Viên",
        "Don_Gia": 161,
        "Thanh_Tien": 14168
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 21,
        "DVT": "Lọ",
        "Don_Gia": 18334,
        "Thanh_Tien": 385014
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 182,
        "DVT": "Viên",
        "Don_Gia": 12430,
        "Thanh_Tien": 2262260
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 127,
        "DVT": "Lọ",
        "Don_Gia": 48485,
        "Thanh_Tien": 6157595
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 453,
        "DVT": "Lọ",
        "Don_Gia": 14580,
        "Thanh_Tien": 6604740
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 407,
        "DVT": "Ống",
        "Don_Gia": 1081,
        "Thanh_Tien": 439967
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 360,
        "DVT": "Viên",
        "Don_Gia": 1272,
        "Thanh_Tien": 457920
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 395,
        "DVT": "Xịt",
        "Don_Gia": 33156,
        "Thanh_Tien": 13096620
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 308,
        "DVT": "Ống",
        "Don_Gia": 6989756,
        "Thanh_Tien": 2152844848
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 26,
        "DVT": "Lọ",
        "Don_Gia": 266033,
        "Thanh_Tien": 6916858
      }
    ]
  },
  {
    "id": "DH115",
    "Ma_KH": "KH003",
    "Ten_KH": "BV Chợ Rẫy",
    "So_Hoa_Don": "HD2115",
    "Ngay_Soan": "2025-06-23",
    "Ngay_Giao": "2025-06-30",
    "Tong_Tien": 1370778723,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 395,
        "DVT": "Viên",
        "Don_Gia": 2076,
        "Thanh_Tien": 820020
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 282,
        "DVT": "Tuýp",
        "Don_Gia": 39010,
        "Thanh_Tien": 11000820
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 441,
        "DVT": "Lọ",
        "Don_Gia": 41527,
        "Thanh_Tien": 18313407
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 210,
        "DVT": "Ống",
        "Don_Gia": 6327870,
        "Thanh_Tien": 1328852700
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 252,
        "DVT": "Ống",
        "Don_Gia": 1004,
        "Thanh_Tien": 253008
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 482,
        "DVT": "Viên",
        "Don_Gia": 1165,
        "Thanh_Tien": 561530
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 398,
        "DVT": "Xịt",
        "Don_Gia": 27581,
        "Thanh_Tien": 10977238
      }
    ]
  },
  {
    "id": "DH116",
    "Ma_KH": "KH003",
    "Ten_KH": "BV Chợ Rẫy",
    "So_Hoa_Don": "HD2116",
    "Ngay_Soan": "2025-06-04",
    "Ngay_Giao": "2025-06-11",
    "Tong_Tien": 33786246,
    "Items": [
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 86,
        "DVT": "Viên",
        "Don_Gia": 504,
        "Thanh_Tien": 43344
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 74,
        "DVT": "Ống",
        "Don_Gia": 246,
        "Thanh_Tien": 18204
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 306,
        "DVT": "Lọ",
        "Don_Gia": 35678,
        "Thanh_Tien": 10917468
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 126,
        "DVT": "Chai",
        "Don_Gia": 1046,
        "Thanh_Tien": 131796
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 240,
        "DVT": "Ống",
        "Don_Gia": 944,
        "Thanh_Tien": 226560
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 14,
        "DVT": "Lọ",
        "Don_Gia": 1464,
        "Thanh_Tien": 20496
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 93,
        "DVT": "Viên",
        "Don_Gia": 745,
        "Thanh_Tien": 69285
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 100,
        "DVT": "Viên",
        "Don_Gia": 344,
        "Thanh_Tien": 34400
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 125,
        "DVT": "Lọ",
        "Don_Gia": 19475,
        "Thanh_Tien": 2434375
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 279,
        "DVT": "Viên",
        "Don_Gia": 330,
        "Thanh_Tien": 92070
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 412,
        "DVT": "Tuýp",
        "Don_Gia": 48054,
        "Thanh_Tien": 19798248
      }
    ]
  },
  {
    "id": "DH117",
    "Ma_KH": "KH011",
    "Ten_KH": "TRUNG TÂM MẮT TỈNH QUẢNG NGÃI",
    "So_Hoa_Don": "HD2117",
    "Ngay_Soan": "2025-09-01",
    "Ngay_Giao": "2025-09-06",
    "Tong_Tien": 1779223563,
    "Items": [
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 475,
        "DVT": "Viên",
        "Don_Gia": 1313,
        "Thanh_Tien": 623675
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 76,
        "DVT": "Lọ",
        "Don_Gia": 30827,
        "Thanh_Tien": 2342852
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 246,
        "DVT": "Chai",
        "Don_Gia": 1080,
        "Thanh_Tien": 265680
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 197,
        "DVT": "Lọ",
        "Don_Gia": 19697,
        "Thanh_Tien": 3880309
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 86,
        "DVT": "Ống",
        "Don_Gia": 930,
        "Thanh_Tien": 79980
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 453,
        "DVT": "Lọ",
        "Don_Gia": 12719,
        "Thanh_Tien": 5761707
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 316,
        "DVT": "Ống",
        "Don_Gia": 5589460,
        "Thanh_Tien": 1766269360
      }
    ]
  },
  {
    "id": "DH118",
    "Ma_KH": "KH007",
    "Ten_KH": "Trung tâm Y tế khu vực Lục Yên",
    "So_Hoa_Don": "HD2118",
    "Ngay_Soan": "2025-07-11",
    "Ngay_Giao": "2025-07-18",
    "Tong_Tien": 20643471,
    "Items": [
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 159,
        "DVT": "Lọ",
        "Don_Gia": 20021,
        "Thanh_Tien": 3183339
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 91,
        "DVT": "Viên",
        "Don_Gia": 321,
        "Thanh_Tien": 29211
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 51,
        "DVT": "Viên",
        "Don_Gia": 390,
        "Thanh_Tien": 19890
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 51,
        "DVT": "Lọ",
        "Don_Gia": 36156,
        "Thanh_Tien": 1843956
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 48,
        "DVT": "Lọ",
        "Don_Gia": 279113,
        "Thanh_Tien": 13397424
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 363,
        "DVT": "Viên",
        "Don_Gia": 5977,
        "Thanh_Tien": 2169651
      }
    ]
  },
  {
    "id": "DH119",
    "Ma_KH": "KH007",
    "Ten_KH": "Trung tâm Y tế khu vực Lục Yên",
    "So_Hoa_Don": "HD2119",
    "Ngay_Soan": "2025-03-07",
    "Ngay_Giao": "2025-03-11",
    "Tong_Tien": 1316534589,
    "Items": [
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 116,
        "DVT": "Lọ",
        "Don_Gia": 1500,
        "Thanh_Tien": 174000
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 471,
        "DVT": "Lọ",
        "Don_Gia": 15249,
        "Thanh_Tien": 7182279
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 221,
        "DVT": "Lọ",
        "Don_Gia": 37828,
        "Thanh_Tien": 8359988
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 219,
        "DVT": "Ống",
        "Don_Gia": 5937516,
        "Thanh_Tien": 1300316004
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 284,
        "DVT": "Ống",
        "Don_Gia": 597,
        "Thanh_Tien": 169548
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 311,
        "DVT": "Ống",
        "Don_Gia": 1070,
        "Thanh_Tien": 332770
      }
    ]
  },
  {
    "id": "DH120",
    "Ma_KH": "KH010",
    "Ten_KH": "BỆNH VIỆN ĐA KHOA VŨ THƯ",
    "So_Hoa_Don": "HD2120",
    "Ngay_Soan": "2025-09-15",
    "Ngay_Giao": "2025-09-19",
    "Tong_Tien": 623093993,
    "Items": [
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 478,
        "DVT": "Viên",
        "Don_Gia": 342,
        "Thanh_Tien": 163476
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 178,
        "DVT": "Viên",
        "Don_Gia": 160,
        "Thanh_Tien": 28480
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 130,
        "DVT": "Tuýp",
        "Don_Gia": 47667,
        "Thanh_Tien": 6196710
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 360,
        "DVT": "Chai",
        "Don_Gia": 1206,
        "Thanh_Tien": 434160
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 135,
        "DVT": "Viên",
        "Don_Gia": 437,
        "Thanh_Tien": 58995
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 412,
        "DVT": "Viên",
        "Don_Gia": 1587,
        "Thanh_Tien": 653844
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 107,
        "DVT": "Ống",
        "Don_Gia": 5752616,
        "Thanh_Tien": 615529912
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 111,
        "DVT": "Ống",
        "Don_Gia": 256,
        "Thanh_Tien": 28416
      }
    ]
  },
  {
    "id": "DH121",
    "Ma_KH": "KH009",
    "Ten_KH": "BV đa khoa Thanh Liêm",
    "So_Hoa_Don": "HD2121",
    "Ngay_Soan": "2026-03-12",
    "Ngay_Giao": "2026-03-15",
    "Tong_Tien": 16457404,
    "Items": [
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 340,
        "DVT": "Chai",
        "Don_Gia": 7421,
        "Thanh_Tien": 2523140
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 313,
        "DVT": "Viên",
        "Don_Gia": 135,
        "Thanh_Tien": 42255
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 262,
        "DVT": "Viên",
        "Don_Gia": 285,
        "Thanh_Tien": 74670
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 152,
        "DVT": "Tuýp",
        "Don_Gia": 38521,
        "Thanh_Tien": 5855192
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 362,
        "DVT": "Viên",
        "Don_Gia": 410,
        "Thanh_Tien": 148420
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 384,
        "DVT": "Ống",
        "Don_Gia": 1139,
        "Thanh_Tien": 437376
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 245,
        "DVT": "Viên",
        "Don_Gia": 587,
        "Thanh_Tien": 143815
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 256,
        "DVT": "Xịt",
        "Don_Gia": 27580,
        "Thanh_Tien": 7060480
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 72,
        "DVT": "Viên",
        "Don_Gia": 1259,
        "Thanh_Tien": 90648
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 318,
        "DVT": "Ống",
        "Don_Gia": 256,
        "Thanh_Tien": 81408
      }
    ]
  },
  {
    "id": "DH122",
    "Ma_KH": "KH003",
    "Ten_KH": "BV Chợ Rẫy",
    "So_Hoa_Don": "HD2122",
    "Ngay_Soan": "2026-03-08",
    "Ngay_Giao": "2026-03-10",
    "Tong_Tien": 32099239,
    "Items": [
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 441,
        "DVT": "Lọ",
        "Don_Gia": 32323,
        "Thanh_Tien": 14254443
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 404,
        "DVT": "Viên",
        "Don_Gia": 391,
        "Thanh_Tien": 157964
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 392,
        "DVT": "Viên",
        "Don_Gia": 154,
        "Thanh_Tien": 60368
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 169,
        "DVT": "Viên",
        "Don_Gia": 1450,
        "Thanh_Tien": 245050
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 348,
        "DVT": "Viên",
        "Don_Gia": 1783,
        "Thanh_Tien": 620484
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 116,
        "DVT": "Viên",
        "Don_Gia": 555,
        "Thanh_Tien": 64380
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 325,
        "DVT": "Lọ",
        "Don_Gia": 51374,
        "Thanh_Tien": 16696550
      }
    ]
  },
  {
    "id": "DH123",
    "Ma_KH": "KH015",
    "Ten_KH": "BV Đa khoa Cẩm Phả",
    "So_Hoa_Don": "HD2123",
    "Ngay_Soan": "2025-04-12",
    "Ngay_Giao": "2025-04-17",
    "Tong_Tien": 2572220100,
    "Items": [
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 32,
        "DVT": "Chai",
        "Don_Gia": 1156,
        "Thanh_Tien": 36992
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 430,
        "DVT": "Ống",
        "Don_Gia": 5776430,
        "Thanh_Tien": 2483864900
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 215,
        "DVT": "Lọ",
        "Don_Gia": 1504,
        "Thanh_Tien": 323360
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 450,
        "DVT": "Ống",
        "Don_Gia": 235,
        "Thanh_Tien": 105750
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 114,
        "DVT": "Xịt",
        "Don_Gia": 33605,
        "Thanh_Tien": 3830970
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 297,
        "DVT": "Lọ",
        "Don_Gia": 283024,
        "Thanh_Tien": 84058128
      }
    ]
  },
  {
    "id": "DH124",
    "Ma_KH": "KH014",
    "Ten_KH": "BV Đa khoa Từ Sơn",
    "So_Hoa_Don": "HD2124",
    "Ngay_Soan": "2025-01-19",
    "Ngay_Giao": "2025-01-25",
    "Tong_Tien": 17614406,
    "Items": [
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 64,
        "DVT": "Chai",
        "Don_Gia": 7773,
        "Thanh_Tien": 497472
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 14,
        "DVT": "Lọ",
        "Don_Gia": 318474,
        "Thanh_Tien": 4458636
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 17,
        "DVT": "Lọ",
        "Don_Gia": 33477,
        "Thanh_Tien": 569109
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 292,
        "DVT": "Viên",
        "Don_Gia": 5911,
        "Thanh_Tien": 1726012
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 432,
        "DVT": "Viên",
        "Don_Gia": 1416,
        "Thanh_Tien": 611712
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 274,
        "DVT": "Lọ",
        "Don_Gia": 18620,
        "Thanh_Tien": 5101880
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 323,
        "DVT": "Viên",
        "Don_Gia": 14395,
        "Thanh_Tien": 4649585
      }
    ]
  },
  {
    "id": "DH125",
    "Ma_KH": "KH018",
    "Ten_KH": "BV Đa khoa tỉnh Quảng Trị",
    "So_Hoa_Don": "HD2125",
    "Ngay_Soan": "2026-02-03",
    "Ngay_Giao": "2026-02-08",
    "Tong_Tien": 106047180,
    "Items": [
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 461,
        "DVT": "Lọ",
        "Don_Gia": 13322,
        "Thanh_Tien": 6141442
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 12,
        "DVT": "Viên",
        "Don_Gia": 161,
        "Thanh_Tien": 1932
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 500,
        "DVT": "Viên",
        "Don_Gia": 15264,
        "Thanh_Tien": 7632000
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 243,
        "DVT": "Lọ",
        "Don_Gia": 307289,
        "Thanh_Tien": 74671227
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 490,
        "DVT": "Lọ",
        "Don_Gia": 34528,
        "Thanh_Tien": 16918720
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 116,
        "DVT": "Viên",
        "Don_Gia": 458,
        "Thanh_Tien": 53128
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 303,
        "DVT": "Lọ",
        "Don_Gia": 1357,
        "Thanh_Tien": 411171
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 222,
        "DVT": "Ống",
        "Don_Gia": 980,
        "Thanh_Tien": 217560
      }
    ]
  },
  {
    "id": "DH126",
    "Ma_KH": "KH005",
    "Ten_KH": "Bệnh viện Đại học Y Hà Nội",
    "So_Hoa_Don": "HD2126",
    "Ngay_Soan": "2025-03-22",
    "Ngay_Giao": "2025-03-27",
    "Tong_Tien": 48318859,
    "Items": [
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 455,
        "DVT": "Lọ",
        "Don_Gia": 17153,
        "Thanh_Tien": 7804615
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 413,
        "DVT": "Chai",
        "Don_Gia": 1195,
        "Thanh_Tien": 493535
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 186,
        "DVT": "Viên",
        "Don_Gia": 778,
        "Thanh_Tien": 144708
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 349,
        "DVT": "Lọ",
        "Don_Gia": 1463,
        "Thanh_Tien": 510587
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 406,
        "DVT": "Viên",
        "Don_Gia": 575,
        "Thanh_Tien": 233450
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 454,
        "DVT": "Viên",
        "Don_Gia": 1351,
        "Thanh_Tien": 613354
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 386,
        "DVT": "Viên",
        "Don_Gia": 311,
        "Thanh_Tien": 120046
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 132,
        "DVT": "Viên",
        "Don_Gia": 456,
        "Thanh_Tien": 60192
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 187,
        "DVT": "Viên",
        "Don_Gia": 5222,
        "Thanh_Tien": 976514
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 454,
        "DVT": "Lọ",
        "Don_Gia": 31223,
        "Thanh_Tien": 14175242
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 462,
        "DVT": "Lọ",
        "Don_Gia": 14956,
        "Thanh_Tien": 6909672
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 371,
        "DVT": "Lọ",
        "Don_Gia": 39344,
        "Thanh_Tien": 14596624
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 90,
        "DVT": "Lọ",
        "Don_Gia": 17971,
        "Thanh_Tien": 1617390
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 434,
        "DVT": "Viên",
        "Don_Gia": 145,
        "Thanh_Tien": 62930
      }
    ]
  },
  {
    "id": "DH127",
    "Ma_KH": "KH006",
    "Ten_KH": "Bệnh Viện Đa Khoa Khu Vực Bồng Sơn",
    "So_Hoa_Don": "HD2127",
    "Ngay_Soan": "2025-08-31",
    "Ngay_Giao": "2025-09-04",
    "Tong_Tien": 13972969,
    "Items": [
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 395,
        "DVT": "Viên",
        "Don_Gia": 14818,
        "Thanh_Tien": 5853110
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 29,
        "DVT": "Viên",
        "Don_Gia": 813,
        "Thanh_Tien": 23577
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 155,
        "DVT": "Viên",
        "Don_Gia": 1386,
        "Thanh_Tien": 214830
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 478,
        "DVT": "Ống",
        "Don_Gia": 1114,
        "Thanh_Tien": 532492
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 18,
        "DVT": "Ống",
        "Don_Gia": 647,
        "Thanh_Tien": 11646
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 111,
        "DVT": "Viên",
        "Don_Gia": 1645,
        "Thanh_Tien": 182595
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 206,
        "DVT": "Viên",
        "Don_Gia": 144,
        "Thanh_Tien": 29664
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 135,
        "DVT": "Xịt",
        "Don_Gia": 34561,
        "Thanh_Tien": 4665735
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 317,
        "DVT": "Chai",
        "Don_Gia": 7640,
        "Thanh_Tien": 2421880
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 96,
        "DVT": "Viên",
        "Don_Gia": 390,
        "Thanh_Tien": 37440
      }
    ]
  },
  {
    "id": "DH128",
    "Ma_KH": "KH012",
    "Ten_KH": "TRUNG TÂM Y TẾ AN DƯƠNG",
    "So_Hoa_Don": "HD2128",
    "Ngay_Soan": "2025-02-11",
    "Ngay_Giao": "2025-02-14",
    "Tong_Tien": 12978531,
    "Items": [
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 193,
        "DVT": "Viên",
        "Don_Gia": 1202,
        "Thanh_Tien": 231986
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 231,
        "DVT": "Viên",
        "Don_Gia": 328,
        "Thanh_Tien": 75768
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 28,
        "DVT": "Ống",
        "Don_Gia": 1055,
        "Thanh_Tien": 29540
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 126,
        "DVT": "Viên",
        "Don_Gia": 151,
        "Thanh_Tien": 19026
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 13,
        "DVT": "Viên",
        "Don_Gia": 13159,
        "Thanh_Tien": 171067
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 105,
        "DVT": "Viên",
        "Don_Gia": 3392,
        "Thanh_Tien": 356160
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 364,
        "DVT": "Viên",
        "Don_Gia": 292,
        "Thanh_Tien": 106288
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 163,
        "DVT": "Xịt",
        "Don_Gia": 31312,
        "Thanh_Tien": 5103856
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 74,
        "DVT": "Viên",
        "Don_Gia": 395,
        "Thanh_Tien": 29230
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 59,
        "DVT": "Lọ",
        "Don_Gia": 38192,
        "Thanh_Tien": 2253328
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 40,
        "DVT": "Lọ",
        "Don_Gia": 30043,
        "Thanh_Tien": 1201720
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 323,
        "DVT": "Viên",
        "Don_Gia": 394,
        "Thanh_Tien": 127262
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 225,
        "DVT": "Lọ",
        "Don_Gia": 14548,
        "Thanh_Tien": 3273300
      }
    ]
  },
  {
    "id": "DH129",
    "Ma_KH": "KH011",
    "Ten_KH": "TRUNG TÂM MẮT TỈNH QUẢNG NGÃI",
    "So_Hoa_Don": "HD2129",
    "Ngay_Soan": "2025-12-20",
    "Ngay_Giao": "2025-12-23",
    "Tong_Tien": 432246522,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 250,
        "DVT": "Viên",
        "Don_Gia": 1689,
        "Thanh_Tien": 422250
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 171,
        "DVT": "Ống",
        "Don_Gia": 1201,
        "Thanh_Tien": 205371
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 149,
        "DVT": "Viên",
        "Don_Gia": 416,
        "Thanh_Tien": 61984
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 309,
        "DVT": "Viên",
        "Don_Gia": 502,
        "Thanh_Tien": 155118
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 486,
        "DVT": "Viên",
        "Don_Gia": 289,
        "Thanh_Tien": 140454
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 90,
        "DVT": "Lọ",
        "Don_Gia": 16987,
        "Thanh_Tien": 1528830
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 27,
        "DVT": "Lọ",
        "Don_Gia": 1577,
        "Thanh_Tien": 42579
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 71,
        "DVT": "Ống",
        "Don_Gia": 5668978,
        "Thanh_Tien": 402497438
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 115,
        "DVT": "Lọ",
        "Don_Gia": 29610,
        "Thanh_Tien": 3405150
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 457,
        "DVT": "Viên",
        "Don_Gia": 3426,
        "Thanh_Tien": 1565682
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 277,
        "DVT": "Viên",
        "Don_Gia": 864,
        "Thanh_Tien": 239328
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 488,
        "DVT": "Chai",
        "Don_Gia": 6722,
        "Thanh_Tien": 3280336
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 371,
        "DVT": "Viên",
        "Don_Gia": 339,
        "Thanh_Tien": 125769
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 464,
        "DVT": "Lọ",
        "Don_Gia": 39972,
        "Thanh_Tien": 18547008
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 167,
        "DVT": "Viên",
        "Don_Gia": 175,
        "Thanh_Tien": 29225
      }
    ]
  },
  {
    "id": "DH130",
    "Ma_KH": "KH009",
    "Ten_KH": "BV đa khoa Thanh Liêm",
    "So_Hoa_Don": "HD2130",
    "Ngay_Soan": "2025-05-16",
    "Ngay_Giao": "2025-05-23",
    "Tong_Tien": 400245383,
    "Items": [
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 197,
        "DVT": "Viên",
        "Don_Gia": 146,
        "Thanh_Tien": 28762
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 292,
        "DVT": "Viên",
        "Don_Gia": 416,
        "Thanh_Tien": 121472
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 34,
        "DVT": "Lọ",
        "Don_Gia": 14816,
        "Thanh_Tien": 503744
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 196,
        "DVT": "Viên",
        "Don_Gia": 285,
        "Thanh_Tien": 55860
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 275,
        "DVT": "Lọ",
        "Don_Gia": 33460,
        "Thanh_Tien": 9201500
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 338,
        "DVT": "Viên",
        "Don_Gia": 501,
        "Thanh_Tien": 169338
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 306,
        "DVT": "Ống",
        "Don_Gia": 568,
        "Thanh_Tien": 173808
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 66,
        "DVT": "Ống",
        "Don_Gia": 269,
        "Thanh_Tien": 17754
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 72,
        "DVT": "Viên",
        "Don_Gia": 1387,
        "Thanh_Tien": 99864
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 67,
        "DVT": "Ống",
        "Don_Gia": 5670498,
        "Thanh_Tien": 379923366
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 390,
        "DVT": "Viên",
        "Don_Gia": 2917,
        "Thanh_Tien": 1137630
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 415,
        "DVT": "Viên",
        "Don_Gia": 177,
        "Thanh_Tien": 73455
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 426,
        "DVT": "Viên",
        "Don_Gia": 747,
        "Thanh_Tien": 318222
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 256,
        "DVT": "Xịt",
        "Don_Gia": 32893,
        "Thanh_Tien": 8420608
      }
    ]
  },
  {
    "id": "DH131",
    "Ma_KH": "KH014",
    "Ten_KH": "BV Đa khoa Từ Sơn",
    "So_Hoa_Don": "HD2131",
    "Ngay_Soan": "2025-09-05",
    "Ngay_Giao": "2025-09-08",
    "Tong_Tien": 44974391,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 256,
        "DVT": "Ống",
        "Don_Gia": 1053,
        "Thanh_Tien": 269568
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 36,
        "DVT": "Viên",
        "Don_Gia": 1141,
        "Thanh_Tien": 41076
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 223,
        "DVT": "Viên",
        "Don_Gia": 456,
        "Thanh_Tien": 101688
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 63,
        "DVT": "Lọ",
        "Don_Gia": 326642,
        "Thanh_Tien": 20578446
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 472,
        "DVT": "Viên",
        "Don_Gia": 306,
        "Thanh_Tien": 144432
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 84,
        "DVT": "Viên",
        "Don_Gia": 304,
        "Thanh_Tien": 25536
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 217,
        "DVT": "Ống",
        "Don_Gia": 899,
        "Thanh_Tien": 195083
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 195,
        "DVT": "Lọ",
        "Don_Gia": 16312,
        "Thanh_Tien": 3180840
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 323,
        "DVT": "Viên",
        "Don_Gia": 1684,
        "Thanh_Tien": 543932
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 272,
        "DVT": "Tuýp",
        "Don_Gia": 42525,
        "Thanh_Tien": 11566800
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 495,
        "DVT": "Lọ",
        "Don_Gia": 1630,
        "Thanh_Tien": 806850
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 247,
        "DVT": "Viên",
        "Don_Gia": 13677,
        "Thanh_Tien": 3378219
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 402,
        "DVT": "Viên",
        "Don_Gia": 854,
        "Thanh_Tien": 343308
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 247,
        "DVT": "Lọ",
        "Don_Gia": 15379,
        "Thanh_Tien": 3798613
      }
    ]
  },
  {
    "id": "DH132",
    "Ma_KH": "KH019",
    "Ten_KH": "BV Phục hồi chức năng Thanh Hóa",
    "So_Hoa_Don": "HD2132",
    "Ngay_Soan": "2025-12-25",
    "Ngay_Giao": "2025-12-31",
    "Tong_Tien": 124159960,
    "Items": [
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 326,
        "DVT": "Viên",
        "Don_Gia": 183,
        "Thanh_Tien": 59658
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 492,
        "DVT": "Lọ",
        "Don_Gia": 14840,
        "Thanh_Tien": 7301280
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 18,
        "DVT": "Lọ",
        "Don_Gia": 55201,
        "Thanh_Tien": 993618
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 275,
        "DVT": "Lọ",
        "Don_Gia": 13283,
        "Thanh_Tien": 3652825
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 366,
        "DVT": "Ống",
        "Don_Gia": 275,
        "Thanh_Tien": 100650
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 248,
        "DVT": "Viên",
        "Don_Gia": 3401,
        "Thanh_Tien": 843448
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 19,
        "DVT": "Ống",
        "Don_Gia": 1247,
        "Thanh_Tien": 23693
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 296,
        "DVT": "Ống",
        "Don_Gia": 692,
        "Thanh_Tien": 204832
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 16,
        "DVT": "Ống",
        "Don_Gia": 6728335,
        "Thanh_Tien": 107653360
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 169,
        "DVT": "Lọ",
        "Don_Gia": 19684,
        "Thanh_Tien": 3326596
      }
    ]
  },
  {
    "id": "DH133",
    "Ma_KH": "KH003",
    "Ten_KH": "BV Chợ Rẫy",
    "So_Hoa_Don": "HD2133",
    "Ngay_Soan": "2026-03-15",
    "Ngay_Giao": "2026-03-19",
    "Tong_Tien": 73544635,
    "Items": [
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 92,
        "DVT": "Viên",
        "Don_Gia": 348,
        "Thanh_Tien": 32016
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 293,
        "DVT": "Viên",
        "Don_Gia": 185,
        "Thanh_Tien": 54205
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 138,
        "DVT": "Viên",
        "Don_Gia": 12121,
        "Thanh_Tien": 1672698
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 444,
        "DVT": "Tuýp",
        "Don_Gia": 47303,
        "Thanh_Tien": 21002532
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 305,
        "DVT": "Viên",
        "Don_Gia": 147,
        "Thanh_Tien": 44835
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 301,
        "DVT": "Ống",
        "Don_Gia": 684,
        "Thanh_Tien": 205884
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 238,
        "DVT": "Lọ",
        "Don_Gia": 47513,
        "Thanh_Tien": 11308094
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 232,
        "DVT": "Viên",
        "Don_Gia": 1803,
        "Thanh_Tien": 418296
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 482,
        "DVT": "Lọ",
        "Don_Gia": 47051,
        "Thanh_Tien": 22678582
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 260,
        "DVT": "Viên",
        "Don_Gia": 1386,
        "Thanh_Tien": 360360
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 471,
        "DVT": "Xịt",
        "Don_Gia": 32379,
        "Thanh_Tien": 15250509
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 458,
        "DVT": "Ống",
        "Don_Gia": 1128,
        "Thanh_Tien": 516624
      }
    ]
  },
  {
    "id": "DH134",
    "Ma_KH": "KH006",
    "Ten_KH": "Bệnh Viện Đa Khoa Khu Vực Bồng Sơn",
    "So_Hoa_Don": "HD2134",
    "Ngay_Soan": "2025-10-21",
    "Ngay_Giao": "2025-10-25",
    "Tong_Tien": 30600718,
    "Items": [
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 148,
        "DVT": "Lọ",
        "Don_Gia": 1592,
        "Thanh_Tien": 235616
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 106,
        "DVT": "Ống",
        "Don_Gia": 1006,
        "Thanh_Tien": 106636
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 207,
        "DVT": "Viên",
        "Don_Gia": 329,
        "Thanh_Tien": 68103
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 236,
        "DVT": "Lọ",
        "Don_Gia": 33573,
        "Thanh_Tien": 7923228
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 23,
        "DVT": "Lọ",
        "Don_Gia": 15235,
        "Thanh_Tien": 350405
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 238,
        "DVT": "Xịt",
        "Don_Gia": 28494,
        "Thanh_Tien": 6781572
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 47,
        "DVT": "Lọ",
        "Don_Gia": 47590,
        "Thanh_Tien": 2236730
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 216,
        "DVT": "Viên",
        "Don_Gia": 330,
        "Thanh_Tien": 71280
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 35,
        "DVT": "Lọ",
        "Don_Gia": 326094,
        "Thanh_Tien": 11413290
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 451,
        "DVT": "Viên",
        "Don_Gia": 202,
        "Thanh_Tien": 91102
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 347,
        "DVT": "Chai",
        "Don_Gia": 1058,
        "Thanh_Tien": 367126
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 429,
        "DVT": "Viên",
        "Don_Gia": 1814,
        "Thanh_Tien": 778206
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 31,
        "DVT": "Viên",
        "Don_Gia": 1237,
        "Thanh_Tien": 38347
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 303,
        "DVT": "Viên",
        "Don_Gia": 459,
        "Thanh_Tien": 139077
      }
    ]
  },
  {
    "id": "DH135",
    "Ma_KH": "KH014",
    "Ten_KH": "BV Đa khoa Từ Sơn",
    "So_Hoa_Don": "HD2135",
    "Ngay_Soan": "2025-08-30",
    "Ngay_Giao": "2025-09-05",
    "Tong_Tien": 1827268654,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 342,
        "DVT": "Ống",
        "Don_Gia": 1252,
        "Thanh_Tien": 428184
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 316,
        "DVT": "Ống",
        "Don_Gia": 5751161,
        "Thanh_Tien": 1817366876
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 362,
        "DVT": "Ống",
        "Don_Gia": 601,
        "Thanh_Tien": 217562
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 176,
        "DVT": "Chai",
        "Don_Gia": 6671,
        "Thanh_Tien": 1174096
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 353,
        "DVT": "Viên",
        "Don_Gia": 301,
        "Thanh_Tien": 106253
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 113,
        "DVT": "Viên",
        "Don_Gia": 615,
        "Thanh_Tien": 69495
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 78,
        "DVT": "Ống",
        "Don_Gia": 966,
        "Thanh_Tien": 75348
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 193,
        "DVT": "Ống",
        "Don_Gia": 236,
        "Thanh_Tien": 45548
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 191,
        "DVT": "Viên",
        "Don_Gia": 12512,
        "Thanh_Tien": 2389792
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 169,
        "DVT": "Viên",
        "Don_Gia": 294,
        "Thanh_Tien": 49686
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 272,
        "DVT": "Lọ",
        "Don_Gia": 1529,
        "Thanh_Tien": 415888
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 284,
        "DVT": "Viên",
        "Don_Gia": 2854,
        "Thanh_Tien": 810536
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 330,
        "DVT": "Lọ",
        "Don_Gia": 12483,
        "Thanh_Tien": 4119390
      }
    ]
  },
  {
    "id": "DH136",
    "Ma_KH": "KH002",
    "Ten_KH": "BV Việt Đức",
    "So_Hoa_Don": "HD2136",
    "Ngay_Soan": "2026-03-09",
    "Ngay_Giao": "2026-03-14",
    "Tong_Tien": 530480046,
    "Items": [
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 28,
        "DVT": "Viên",
        "Don_Gia": 1367,
        "Thanh_Tien": 38276
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 156,
        "DVT": "Viên",
        "Don_Gia": 3104,
        "Thanh_Tien": 484224
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 61,
        "DVT": "Ống",
        "Don_Gia": 6081265,
        "Thanh_Tien": 370957165
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 187,
        "DVT": "Viên",
        "Don_Gia": 293,
        "Thanh_Tien": 54791
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 144,
        "DVT": "Ống",
        "Don_Gia": 255,
        "Thanh_Tien": 36720
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 417,
        "DVT": "Lọ",
        "Don_Gia": 323383,
        "Thanh_Tien": 134850711
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 487,
        "DVT": "Viên",
        "Don_Gia": 166,
        "Thanh_Tien": 80842
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 226,
        "DVT": "Viên",
        "Don_Gia": 5969,
        "Thanh_Tien": 1348994
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 243,
        "DVT": "Viên",
        "Don_Gia": 369,
        "Thanh_Tien": 89667
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 89,
        "DVT": "Lọ",
        "Don_Gia": 19231,
        "Thanh_Tien": 1711559
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 492,
        "DVT": "Viên",
        "Don_Gia": 498,
        "Thanh_Tien": 245016
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 487,
        "DVT": "Tuýp",
        "Don_Gia": 42263,
        "Thanh_Tien": 20582081
      }
    ]
  },
  {
    "id": "DH137",
    "Ma_KH": "KH015",
    "Ten_KH": "BV Đa khoa Cẩm Phả",
    "So_Hoa_Don": "HD2137",
    "Ngay_Soan": "2025-03-23",
    "Ngay_Giao": "2025-03-30",
    "Tong_Tien": 34353536,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 490,
        "DVT": "Viên",
        "Don_Gia": 3493,
        "Thanh_Tien": 1711570
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 48,
        "DVT": "Lọ",
        "Don_Gia": 1570,
        "Thanh_Tien": 75360
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 410,
        "DVT": "Viên",
        "Don_Gia": 390,
        "Thanh_Tien": 159900
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 104,
        "DVT": "Viên",
        "Don_Gia": 204,
        "Thanh_Tien": 21216
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 376,
        "DVT": "Viên",
        "Don_Gia": 12474,
        "Thanh_Tien": 4690224
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 60,
        "DVT": "Viên",
        "Don_Gia": 281,
        "Thanh_Tien": 16860
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 226,
        "DVT": "Lọ",
        "Don_Gia": 47427,
        "Thanh_Tien": 10718502
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 201,
        "DVT": "Chai",
        "Don_Gia": 7375,
        "Thanh_Tien": 1482375
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 343,
        "DVT": "Viên",
        "Don_Gia": 331,
        "Thanh_Tien": 113533
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 231,
        "DVT": "Lọ",
        "Don_Gia": 13084,
        "Thanh_Tien": 3022404
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 306,
        "DVT": "Tuýp",
        "Don_Gia": 40332,
        "Thanh_Tien": 12341592
      }
    ]
  },
  {
    "id": "DH138",
    "Ma_KH": "KH019",
    "Ten_KH": "BV Phục hồi chức năng Thanh Hóa",
    "So_Hoa_Don": "HD2138",
    "Ngay_Soan": "2025-06-29",
    "Ngay_Giao": "2025-07-04",
    "Tong_Tien": 830909,
    "Items": [
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 365,
        "DVT": "Ống",
        "Don_Gia": 946,
        "Thanh_Tien": 345290
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 56,
        "DVT": "Viên",
        "Don_Gia": 151,
        "Thanh_Tien": 8456
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 64,
        "DVT": "Lọ",
        "Don_Gia": 1490,
        "Thanh_Tien": 95360
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 288,
        "DVT": "Ống",
        "Don_Gia": 1136,
        "Thanh_Tien": 327168
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 245,
        "DVT": "Ống",
        "Don_Gia": 223,
        "Thanh_Tien": 54635
      }
    ]
  },
  {
    "id": "DH139",
    "Ma_KH": "KH009",
    "Ten_KH": "BV đa khoa Thanh Liêm",
    "So_Hoa_Don": "HD2139",
    "Ngay_Soan": "2025-04-03",
    "Ngay_Giao": "2025-04-05",
    "Tong_Tien": 15582434,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 288,
        "DVT": "Viên",
        "Don_Gia": 3088,
        "Thanh_Tien": 889344
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 150,
        "DVT": "Lọ",
        "Don_Gia": 1327,
        "Thanh_Tien": 199050
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 211,
        "DVT": "Viên",
        "Don_Gia": 5919,
        "Thanh_Tien": 1248909
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 10,
        "DVT": "Lọ",
        "Don_Gia": 32246,
        "Thanh_Tien": 322460
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 442,
        "DVT": "Viên",
        "Don_Gia": 173,
        "Thanh_Tien": 76466
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 268,
        "DVT": "Viên",
        "Don_Gia": 158,
        "Thanh_Tien": 42344
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 377,
        "DVT": "Viên",
        "Don_Gia": 338,
        "Thanh_Tien": 127426
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 285,
        "DVT": "Tuýp",
        "Don_Gia": 39681,
        "Thanh_Tien": 11309085
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 29,
        "DVT": "Lọ",
        "Don_Gia": 47150,
        "Thanh_Tien": 1367350
      }
    ]
  },
  {
    "id": "DH140",
    "Ma_KH": "KH012",
    "Ten_KH": "TRUNG TÂM Y TẾ AN DƯƠNG",
    "So_Hoa_Don": "HD2140",
    "Ngay_Soan": "2025-11-22",
    "Ngay_Giao": "2025-11-28",
    "Tong_Tien": 62628707,
    "Items": [
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 467,
        "DVT": "Lọ",
        "Don_Gia": 14745,
        "Thanh_Tien": 6885915
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 384,
        "DVT": "Lọ",
        "Don_Gia": 39589,
        "Thanh_Tien": 15202176
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 208,
        "DVT": "Viên",
        "Don_Gia": 501,
        "Thanh_Tien": 104208
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 482,
        "DVT": "Tuýp",
        "Don_Gia": 43208,
        "Thanh_Tien": 20826256
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 462,
        "DVT": "Viên",
        "Don_Gia": 399,
        "Thanh_Tien": 184338
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 490,
        "DVT": "Lọ",
        "Don_Gia": 35706,
        "Thanh_Tien": 17495940
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 410,
        "DVT": "Lọ",
        "Don_Gia": 1530,
        "Thanh_Tien": 627300
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 215,
        "DVT": "Viên",
        "Don_Gia": 2051,
        "Thanh_Tien": 440965
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 16,
        "DVT": "Viên",
        "Don_Gia": 132,
        "Thanh_Tien": 2112
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 359,
        "DVT": "Ống",
        "Don_Gia": 243,
        "Thanh_Tien": 87237
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 15,
        "DVT": "Lọ",
        "Don_Gia": 51484,
        "Thanh_Tien": 772260
      }
    ]
  },
  {
    "id": "DH141",
    "Ma_KH": "KH020",
    "Ten_KH": "Trạm Y tế xã Xuân Lăng",
    "So_Hoa_Don": "HD2141",
    "Ngay_Soan": "2025-07-17",
    "Ngay_Giao": "2025-07-21",
    "Tong_Tien": 4237640,
    "Items": [
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 315,
        "DVT": "Viên",
        "Don_Gia": 558,
        "Thanh_Tien": 175770
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 455,
        "DVT": "Chai",
        "Don_Gia": 1238,
        "Thanh_Tien": 563290
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 369,
        "DVT": "Viên",
        "Don_Gia": 144,
        "Thanh_Tien": 53136
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 258,
        "DVT": "Viên",
        "Don_Gia": 2776,
        "Thanh_Tien": 716208
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 251,
        "DVT": "Viên",
        "Don_Gia": 1832,
        "Thanh_Tien": 459832
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 235,
        "DVT": "Viên",
        "Don_Gia": 5183,
        "Thanh_Tien": 1218005
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 363,
        "DVT": "Viên",
        "Don_Gia": 449,
        "Thanh_Tien": 162987
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 434,
        "DVT": "Ống",
        "Don_Gia": 974,
        "Thanh_Tien": 422716
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 63,
        "DVT": "Chai",
        "Don_Gia": 7392,
        "Thanh_Tien": 465696
      }
    ]
  },
  {
    "id": "DH142",
    "Ma_KH": "KH010",
    "Ten_KH": "BỆNH VIỆN ĐA KHOA VŨ THƯ",
    "So_Hoa_Don": "HD2142",
    "Ngay_Soan": "2026-02-24",
    "Ngay_Giao": "2026-02-27",
    "Tong_Tien": 1523233738,
    "Items": [
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 113,
        "DVT": "Lọ",
        "Don_Gia": 1621,
        "Thanh_Tien": 183173
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 293,
        "DVT": "Chai",
        "Don_Gia": 8388,
        "Thanh_Tien": 2457684
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 264,
        "DVT": "Ống",
        "Don_Gia": 5757749,
        "Thanh_Tien": 1520045736
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 83,
        "DVT": "Viên",
        "Don_Gia": 1637,
        "Thanh_Tien": 135871
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 137,
        "DVT": "Viên",
        "Don_Gia": 3002,
        "Thanh_Tien": 411274
      }
    ]
  },
  {
    "id": "DH143",
    "Ma_KH": "KH008",
    "Ten_KH": "Trạm Y tế xã Bình Xuyên",
    "So_Hoa_Don": "HD2143",
    "Ngay_Soan": "2025-12-17",
    "Ngay_Giao": "2025-12-19",
    "Tong_Tien": 31287027,
    "Items": [
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 31,
        "DVT": "Viên",
        "Don_Gia": 6040,
        "Thanh_Tien": 187240
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 413,
        "DVT": "Lọ",
        "Don_Gia": 46759,
        "Thanh_Tien": 19311467
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 126,
        "DVT": "Lọ",
        "Don_Gia": 46791,
        "Thanh_Tien": 5895666
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 82,
        "DVT": "Viên",
        "Don_Gia": 1176,
        "Thanh_Tien": 96432
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 339,
        "DVT": "Lọ",
        "Don_Gia": 17098,
        "Thanh_Tien": 5796222
      }
    ]
  },
  {
    "id": "DH144",
    "Ma_KH": "KH018",
    "Ten_KH": "BV Đa khoa tỉnh Quảng Trị",
    "So_Hoa_Don": "HD2144",
    "Ngay_Soan": "2026-04-09",
    "Ngay_Giao": "2026-04-11",
    "Tong_Tien": 6432656,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 107,
        "DVT": "Viên",
        "Don_Gia": 1976,
        "Thanh_Tien": 211432
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 186,
        "DVT": "Ống",
        "Don_Gia": 234,
        "Thanh_Tien": 43524
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 266,
        "DVT": "Viên",
        "Don_Gia": 294,
        "Thanh_Tien": 78204
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 142,
        "DVT": "Lọ",
        "Don_Gia": 39034,
        "Thanh_Tien": 5542828
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 423,
        "DVT": "Viên",
        "Don_Gia": 1316,
        "Thanh_Tien": 556668
      }
    ]
  },
  {
    "id": "DH145",
    "Ma_KH": "KH005",
    "Ten_KH": "Bệnh viện Đại học Y Hà Nội",
    "So_Hoa_Don": "HD2145",
    "Ngay_Soan": "2026-03-29",
    "Ngay_Giao": "2026-04-05",
    "Tong_Tien": 3469630821,
    "Items": [
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 147,
        "DVT": "Ống",
        "Don_Gia": 1060,
        "Thanh_Tien": 155820
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 264,
        "DVT": "Viên",
        "Don_Gia": 433,
        "Thanh_Tien": 114312
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 133,
        "DVT": "Viên",
        "Don_Gia": 375,
        "Thanh_Tien": 49875
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 494,
        "DVT": "Ống",
        "Don_Gia": 6983041,
        "Thanh_Tien": 3449622254
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 136,
        "DVT": "Viên",
        "Don_Gia": 171,
        "Thanh_Tien": 23256
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 391,
        "DVT": "Lọ",
        "Don_Gia": 42311,
        "Thanh_Tien": 16543601
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 80,
        "DVT": "Viên",
        "Don_Gia": 139,
        "Thanh_Tien": 11120
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 135,
        "DVT": "Viên",
        "Don_Gia": 1380,
        "Thanh_Tien": 186300
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 267,
        "DVT": "Viên",
        "Don_Gia": 345,
        "Thanh_Tien": 92115
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 355,
        "DVT": "Chai",
        "Don_Gia": 7056,
        "Thanh_Tien": 2504880
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 159,
        "DVT": "Ống",
        "Don_Gia": 657,
        "Thanh_Tien": 104463
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 197,
        "DVT": "Viên",
        "Don_Gia": 606,
        "Thanh_Tien": 119382
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 87,
        "DVT": "Ống",
        "Don_Gia": 1189,
        "Thanh_Tien": 103443
      }
    ]
  },
  {
    "id": "DH146",
    "Ma_KH": "KH019",
    "Ten_KH": "BV Phục hồi chức năng Thanh Hóa",
    "So_Hoa_Don": "HD2146",
    "Ngay_Soan": "2025-02-11",
    "Ngay_Giao": "2025-02-14",
    "Tong_Tien": 8511778,
    "Items": [
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 228,
        "DVT": "Lọ",
        "Don_Gia": 1545,
        "Thanh_Tien": 352260
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 194,
        "DVT": "Xịt",
        "Don_Gia": 32801,
        "Thanh_Tien": 6363394
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 254,
        "DVT": "Viên",
        "Don_Gia": 2005,
        "Thanh_Tien": 509270
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 121,
        "DVT": "Chai",
        "Don_Gia": 7094,
        "Thanh_Tien": 858374
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 229,
        "DVT": "Viên",
        "Don_Gia": 472,
        "Thanh_Tien": 108088
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 15,
        "DVT": "Viên",
        "Don_Gia": 1650,
        "Thanh_Tien": 24750
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 150,
        "DVT": "Viên",
        "Don_Gia": 277,
        "Thanh_Tien": 41550
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 50,
        "DVT": "Viên",
        "Don_Gia": 799,
        "Thanh_Tien": 39950
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 491,
        "DVT": "Ống",
        "Don_Gia": 274,
        "Thanh_Tien": 134534
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 248,
        "DVT": "Viên",
        "Don_Gia": 321,
        "Thanh_Tien": 79608
      }
    ]
  },
  {
    "id": "DH147",
    "Ma_KH": "KH012",
    "Ten_KH": "TRUNG TÂM Y TẾ AN DƯƠNG",
    "So_Hoa_Don": "HD2147",
    "Ngay_Soan": "2025-11-23",
    "Ngay_Giao": "2025-11-27",
    "Tong_Tien": 136918048,
    "Items": [
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 329,
        "DVT": "Viên",
        "Don_Gia": 188,
        "Thanh_Tien": 61852
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 90,
        "DVT": "Viên",
        "Don_Gia": 520,
        "Thanh_Tien": 46800
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 317,
        "DVT": "Lọ",
        "Don_Gia": 1558,
        "Thanh_Tien": 493886
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 427,
        "DVT": "Ống",
        "Don_Gia": 267,
        "Thanh_Tien": 114009
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 307,
        "DVT": "Xịt",
        "Don_Gia": 29523,
        "Thanh_Tien": 9063561
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 179,
        "DVT": "Lọ",
        "Don_Gia": 1363,
        "Thanh_Tien": 243977
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 158,
        "DVT": "Ống",
        "Don_Gia": 1194,
        "Thanh_Tien": 188652
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 376,
        "DVT": "Lọ",
        "Don_Gia": 299681,
        "Thanh_Tien": 112680056
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 265,
        "DVT": "Chai",
        "Don_Gia": 7717,
        "Thanh_Tien": 2045005
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 230,
        "DVT": "Viên",
        "Don_Gia": 324,
        "Thanh_Tien": 74520
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 192,
        "DVT": "Viên",
        "Don_Gia": 3443,
        "Thanh_Tien": 661056
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 200,
        "DVT": "Lọ",
        "Don_Gia": 13578,
        "Thanh_Tien": 2715600
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 479,
        "DVT": "Lọ",
        "Don_Gia": 17806,
        "Thanh_Tien": 8529074
      }
    ]
  },
  {
    "id": "DH148",
    "Ma_KH": "KH009",
    "Ten_KH": "BV đa khoa Thanh Liêm",
    "So_Hoa_Don": "HD2148",
    "Ngay_Soan": "2025-10-27",
    "Ngay_Giao": "2025-11-03",
    "Tong_Tien": 57552963,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 253,
        "DVT": "Ống",
        "Don_Gia": 1086,
        "Thanh_Tien": 274758
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 45,
        "DVT": "Lọ",
        "Don_Gia": 15836,
        "Thanh_Tien": 712620
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 190,
        "DVT": "Chai",
        "Don_Gia": 1237,
        "Thanh_Tien": 235030
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 10,
        "DVT": "Lọ",
        "Don_Gia": 1356,
        "Thanh_Tien": 13560
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 229,
        "DVT": "Lọ",
        "Don_Gia": 45132,
        "Thanh_Tien": 10335228
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 377,
        "DVT": "Viên",
        "Don_Gia": 1200,
        "Thanh_Tien": 452400
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 437,
        "DVT": "Lọ",
        "Don_Gia": 14773,
        "Thanh_Tien": 6455801
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 37,
        "DVT": "Lọ",
        "Don_Gia": 1605,
        "Thanh_Tien": 59385
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 46,
        "DVT": "Viên",
        "Don_Gia": 549,
        "Thanh_Tien": 25254
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 381,
        "DVT": "Tuýp",
        "Don_Gia": 45852,
        "Thanh_Tien": 17469612
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 165,
        "DVT": "Viên",
        "Don_Gia": 3288,
        "Thanh_Tien": 542520
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 113,
        "DVT": "Viên",
        "Don_Gia": 142,
        "Thanh_Tien": 16046
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 172,
        "DVT": "Lọ",
        "Don_Gia": 53861,
        "Thanh_Tien": 9264092
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 367,
        "DVT": "Xịt",
        "Don_Gia": 31871,
        "Thanh_Tien": 11696657
      }
    ]
  },
  {
    "id": "DH149",
    "Ma_KH": "KH009",
    "Ten_KH": "BV đa khoa Thanh Liêm",
    "So_Hoa_Don": "HD2149",
    "Ngay_Soan": "2025-05-31",
    "Ngay_Giao": "2025-06-05",
    "Tong_Tien": 31091780,
    "Items": [
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 199,
        "DVT": "Viên",
        "Don_Gia": 344,
        "Thanh_Tien": 68456
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 66,
        "DVT": "Lọ",
        "Don_Gia": 47038,
        "Thanh_Tien": 3104508
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 89,
        "DVT": "Viên",
        "Don_Gia": 5446,
        "Thanh_Tien": 484694
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 156,
        "DVT": "Viên",
        "Don_Gia": 462,
        "Thanh_Tien": 72072
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 460,
        "DVT": "Tuýp",
        "Don_Gia": 42825,
        "Thanh_Tien": 19699500
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 33,
        "DVT": "Viên",
        "Don_Gia": 519,
        "Thanh_Tien": 17127
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 23,
        "DVT": "Lọ",
        "Don_Gia": 12921,
        "Thanh_Tien": 297183
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 25,
        "DVT": "Lọ",
        "Don_Gia": 1365,
        "Thanh_Tien": 34125
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 457,
        "DVT": "Viên",
        "Don_Gia": 3162,
        "Thanh_Tien": 1445034
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 302,
        "DVT": "Lọ",
        "Don_Gia": 16832,
        "Thanh_Tien": 5083264
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 257,
        "DVT": "Viên",
        "Don_Gia": 302,
        "Thanh_Tien": 77614
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 232,
        "DVT": "Viên",
        "Don_Gia": 194,
        "Thanh_Tien": 45008
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 15,
        "DVT": "Ống",
        "Don_Gia": 1109,
        "Thanh_Tien": 16635
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 480,
        "DVT": "Viên",
        "Don_Gia": 1347,
        "Thanh_Tien": 646560
      }
    ]
  },
  {
    "id": "DH150",
    "Ma_KH": "KH011",
    "Ten_KH": "TRUNG TÂM MẮT TỈNH QUẢNG NGÃI",
    "So_Hoa_Don": "HD2150",
    "Ngay_Soan": "2025-02-14",
    "Ngay_Giao": "2025-02-18",
    "Tong_Tien": 1288157275,
    "Items": [
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 296,
        "DVT": "Viên",
        "Don_Gia": 164,
        "Thanh_Tien": 48544
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 188,
        "DVT": "Chai",
        "Don_Gia": 1161,
        "Thanh_Tien": 218268
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 82,
        "DVT": "Xịt",
        "Don_Gia": 29354,
        "Thanh_Tien": 2407028
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 235,
        "DVT": "Chai",
        "Don_Gia": 8362,
        "Thanh_Tien": 1965070
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 268,
        "DVT": "Lọ",
        "Don_Gia": 14613,
        "Thanh_Tien": 3916284
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 64,
        "DVT": "Lọ",
        "Don_Gia": 1560,
        "Thanh_Tien": 99840
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 222,
        "DVT": "Viên",
        "Don_Gia": 870,
        "Thanh_Tien": 193140
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 194,
        "DVT": "Viên",
        "Don_Gia": 1821,
        "Thanh_Tien": 353274
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 98,
        "DVT": "Lọ",
        "Don_Gia": 48005,
        "Thanh_Tien": 4704490
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 499,
        "DVT": "Viên",
        "Don_Gia": 12318,
        "Thanh_Tien": 6146682
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 186,
        "DVT": "Ống",
        "Don_Gia": 6800480,
        "Thanh_Tien": 1264889280
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 318,
        "DVT": "Ống",
        "Don_Gia": 1099,
        "Thanh_Tien": 349482
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 416,
        "DVT": "Viên",
        "Don_Gia": 327,
        "Thanh_Tien": 136032
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 83,
        "DVT": "Lọ",
        "Don_Gia": 29792,
        "Thanh_Tien": 2472736
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 425,
        "DVT": "Viên",
        "Don_Gia": 605,
        "Thanh_Tien": 257125
      }
    ]
  },
  {
    "id": "DH151",
    "Ma_KH": "KH017",
    "Ten_KH": "Trung tâm Y tế Khu vực Văn Chấn",
    "So_Hoa_Don": "HD2151",
    "Ngay_Soan": "2025-08-21",
    "Ngay_Giao": "2025-08-25",
    "Tong_Tien": 94793010,
    "Items": [
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 245,
        "DVT": "Viên",
        "Don_Gia": 863,
        "Thanh_Tien": 211435
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 269,
        "DVT": "Lọ",
        "Don_Gia": 326205,
        "Thanh_Tien": 87749145
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 190,
        "DVT": "Viên",
        "Don_Gia": 397,
        "Thanh_Tien": 75430
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 143,
        "DVT": "Viên",
        "Don_Gia": 3224,
        "Thanh_Tien": 461032
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 432,
        "DVT": "Lọ",
        "Don_Gia": 14574,
        "Thanh_Tien": 6295968
      }
    ]
  },
  {
    "id": "DH152",
    "Ma_KH": "KH016",
    "Ten_KH": "BV Đa khoa số 2 tỉnh Lào Cai",
    "So_Hoa_Don": "HD2152",
    "Ngay_Soan": "2026-04-07",
    "Ngay_Giao": "2026-04-09",
    "Tong_Tien": 2486581948,
    "Items": [
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 314,
        "DVT": "Viên",
        "Don_Gia": 6128,
        "Thanh_Tien": 1924192
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 400,
        "DVT": "Ống",
        "Don_Gia": 6160820,
        "Thanh_Tien": 2464328000
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 384,
        "DVT": "Lọ",
        "Don_Gia": 1593,
        "Thanh_Tien": 611712
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 277,
        "DVT": "Chai",
        "Don_Gia": 1080,
        "Thanh_Tien": 299160
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 42,
        "DVT": "Viên",
        "Don_Gia": 147,
        "Thanh_Tien": 6174
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 199,
        "DVT": "Viên",
        "Don_Gia": 3105,
        "Thanh_Tien": 617895
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 80,
        "DVT": "Viên",
        "Don_Gia": 384,
        "Thanh_Tien": 30720
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 213,
        "DVT": "Viên",
        "Don_Gia": 280,
        "Thanh_Tien": 59640
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 148,
        "DVT": "Xịt",
        "Don_Gia": 29205,
        "Thanh_Tien": 4322340
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 207,
        "DVT": "Ống",
        "Don_Gia": 226,
        "Thanh_Tien": 46782
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 254,
        "DVT": "Lọ",
        "Don_Gia": 34881,
        "Thanh_Tien": 8859774
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 78,
        "DVT": "Lọ",
        "Don_Gia": 1547,
        "Thanh_Tien": 120666
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 274,
        "DVT": "Ống",
        "Don_Gia": 1223,
        "Thanh_Tien": 335102
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 121,
        "DVT": "Tuýp",
        "Don_Gia": 40526,
        "Thanh_Tien": 4903646
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 87,
        "DVT": "Viên",
        "Don_Gia": 1335,
        "Thanh_Tien": 116145
      }
    ]
  }
];
