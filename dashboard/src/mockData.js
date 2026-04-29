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
  {
    "id": "SP201",
    "Ma_Hang": "HD-ATR",
    "Ten_Biet_Duoc": "Atropin",
    "Hoat_Chat": "Atropin",
    "Ham_Luong": "0.25mg",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Tiêm",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 17040000,
    "SL_Ton": 9000000,
    "Gia_Niem_Yet": 14200000
  },
  {
    "id": "SP202",
    "Ma_Hang": "HD-LID-E",
    "Ten_Biet_Duoc": "Lidocain + epinephrine",
    "Hoat_Chat": "Lidocain + epinephrine",
    "Ham_Luong": "NA",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Tiêm",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 25800000,
    "SL_Ton": 9000000,
    "Gia_Niem_Yet": 21500000
  },
  {
    "id": "SP203",
    "Ma_Hang": "HD-MOR",
    "Ten_Biet_Duoc": "Morphin",
    "Hoat_Chat": "Morphin",
    "Ham_Luong": "10mg",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Tiêm",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 42960000,
    "SL_Ton": 9000000,
    "Gia_Niem_Yet": 35800000
  },
  {
    "id": "SP204",
    "Ma_Hang": "HD-PRO",
    "Ten_Biet_Duoc": "Proparacain",
    "Hoat_Chat": "Proparacain",
    "Ham_Luong": "NA",
    "Duong_Dung": "Nhỏ mắt",
    "Dang_Bao_Che": "Nhỏ mắt",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 20040000,
    "SL_Ton": 9000000,
    "Gia_Niem_Yet": 16700000
  },
  {
    "id": "SP205",
    "Ma_Hang": "HD-PET",
    "Ten_Biet_Duoc": "Pethidin",
    "Hoat_Chat": "Pethidin",
    "Ham_Luong": "100mg",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Tiêm",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 31680000,
    "SL_Ton": 9000000,
    "Gia_Niem_Yet": 26400000
  },
  {
    "id": "SP206",
    "Ma_Hang": "HD-MEL",
    "Ten_Biet_Duoc": "Meloxicam",
    "Hoat_Chat": "Meloxicam",
    "Ham_Luong": "7.5mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 18000,
    "SL_Ton": 9000000,
    "Gia_Niem_Yet": 15000
  },
  {
    "id": "SP207",
    "Ma_Hang": "HD-MIS",
    "Ten_Biet_Duoc": "Misoprostol",
    "Hoat_Chat": "Misoprostol",
    "Ham_Luong": "200mcg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 60000,
    "SL_Ton": 9000000,
    "Gia_Niem_Yet": 50000
  },
  {
    "id": "SP208",
    "Ma_Hang": "HD-AVE",
    "Ten_Biet_Duoc": "Avelumab",
    "Hoat_Chat": "Avelumab",
    "Ham_Luong": "NA",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Tiêm",
    "Nhom_Ky_Thuat": "1",
    "Gia_Ke_Khai": 20000000,
    "SL_Ton": 1000000,
    "Gia_Niem_Yet": 5000000
  },
  {
    "id": "SP209",
    "Ma_Hang": "HD-AZA",
    "Ten_Biet_Duoc": "Azathioprin",
    "Hoat_Chat": "Azathioprin",
    "Ham_Luong": "NA",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "2",
    "Gia_Ke_Khai": 30000000,
    "SL_Ton": 9000000,
    "Gia_Niem_Yet": 25000000
  },
  {
    "id": "SP210",
    "Ma_Hang": "HD-BIS-A",
    "Ten_Biet_Duoc": "Bisoprolol + Amlodipine",
    "Hoat_Chat": "Bisoprolol fumarate + Amlodipine",
    "Ham_Luong": "NA",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "1",
    "Gia_Ke_Khai": 18000000,
    "SL_Ton": 9000000,
    "Gia_Niem_Yet": 15000000
  },
  {
    "id": "SP211",
    "Ma_Hang": "HD-ACI",
    "Ten_Biet_Duoc": "Aciclovir",
    "Hoat_Chat": "Aciclovir",
    "Ham_Luong": "200mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 21000,
    "SL_Ton": 9000000,
    "Gia_Niem_Yet": 17500
  },
  {
    "id": "SP212",
    "Ma_Hang": "HD-SAL",
    "Ten_Biet_Duoc": "Salbutamol",
    "Hoat_Chat": "Salbutamol",
    "Ham_Luong": "NA",
    "Duong_Dung": "Hít",
    "Dang_Bao_Che": "Xịt",
    "Nhom_Ky_Thuat": "NA",
    "Gia_Ke_Khai": 110000,
    "SL_Ton": 1000000,
    "Gia_Niem_Yet": 25000
  },
  {
    "id": "SP213",
    "Ma_Hang": "HD-BRO",
    "Ten_Biet_Duoc": "Bromhexin",
    "Hoat_Chat": "Bromhexin hydroclorid",
    "Ham_Luong": "8mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 9000,
    "SL_Ton": 9000000,
    "Gia_Niem_Yet": 7500
  },
  {
    "id": "SP214",
    "Ma_Hang": "HD-PAN",
    "Ten_Biet_Duoc": "Pantoprazol",
    "Hoat_Chat": "Pantoprazol",
    "Ham_Luong": "40mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "4",
    "Gia_Ke_Khai": 72000,
    "SL_Ton": 9000000,
    "Gia_Niem_Yet": 60000
  },
  {
    "id": "SP215",
    "Ma_Hang": "HD-SPI",
    "Ten_Biet_Duoc": "Spironolacton",
    "Hoat_Chat": "Spironolacton",
    "Ham_Luong": "25mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 39000,
    "SL_Ton": 9000000,
    "Gia_Niem_Yet": 32500
  },
  {
    "id": "SP216",
    "Ma_Hang": "HD-KAL",
    "Ten_Biet_Duoc": "Kali clorid",
    "Hoat_Chat": "Kali clorid",
    "Ham_Luong": "500mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 15000,
    "SL_Ton": 9000000,
    "Gia_Niem_Yet": 12500
  },
  {
    "id": "SP001",
    "Ma_Hang": "HD-AMO",
    "Ten_Biet_Duoc": "Amoxicillin",
    "Hoat_Chat": "Amoxicillin",
    "Ham_Luong": "500mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 27000,
    "SL_Ton": 10000000,
    "Gia_Niem_Yet": 22500
  },
  {
    "id": "SP008",
    "Ma_Hang": "HD-PARA",
    "Ten_Biet_Duoc": "Paracetamol",
    "Hoat_Chat": "Paracetamol",
    "Ham_Luong": "500mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 7200,
    "SL_Ton": 20000000,
    "Gia_Niem_Yet": 6000
  },
  {
    "id": "SP023",
    "Ma_Hang": "HD-AML",
    "Ten_Biet_Duoc": "Amlodipine",
    "Hoat_Chat": "Amlodipine",
    "Ham_Luong": "5mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 15000,
    "SL_Ton": 8000000,
    "Gia_Niem_Yet": 12500
  },
  {
    "id": "SP301",
    "Ma_Hang": "HD-HPM",
    "Ten_Biet_Duoc": "HPMC Eye Drop",
    "Hoat_Chat": "Hydroxypropylmethylcellulose",
    "Ham_Luong": "NA",
    "Duong_Dung": "Nhỏ mắt",
    "Dang_Bao_Che": "Thuốc nhỏ mắt",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 25000,
    "SL_Ton": 5000000,
    "Gia_Niem_Yet": 15000
  },
  {
    "id": "SP302",
    "Ma_Hang": "HD-IND",
    "Ten_Biet_Duoc": "Indomethacin Eye Drop",
    "Hoat_Chat": "Indomethacin",
    "Ham_Luong": "NA",
    "Duong_Dung": "Nhỏ mắt",
    "Dang_Bao_Che": "Thuốc nhỏ mắt",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 50000,
    "SL_Ton": 5000000,
    "Gia_Niem_Yet": 34000
  },
  {
    "id": "SP303",
    "Ma_Hang": "HD-MOX",
    "Ten_Biet_Duoc": "Moxifloxacin Eye Drop",
    "Hoat_Chat": "Moxifloxacin",
    "Ham_Luong": "NA",
    "Duong_Dung": "Nhỏ mắt",
    "Dang_Bao_Che": "Thuốc nhỏ mắt",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 65000,
    "SL_Ton": 5000000,
    "Gia_Niem_Yet": 40000
  },
  {
    "id": "SP304",
    "Ma_Hang": "HD-MDX",
    "Ten_Biet_Duoc": "Moxifloxacin + Dexamethason",
    "Hoat_Chat": "Moxifloxacin + Dexamethason",
    "Ham_Luong": "NA",
    "Duong_Dung": "Nhỏ mắt",
    "Dang_Bao_Che": "Thuốc nhỏ mắt",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 18000,
    "SL_Ton": 5000000,
    "Gia_Niem_Yet": 11000
  },
  {
    "id": "SP305",
    "Ma_Hang": "HD-OXY",
    "Ten_Biet_Duoc": "Oxy già HD",
    "Hoat_Chat": "Nước oxy già",
    "Ham_Luong": "NA",
    "Duong_Dung": "Dùng ngoài",
    "Dang_Bao_Che": "Dùng ngoài",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 54000,
    "SL_Ton": 5000000,
    "Gia_Niem_Yet": 45000
  },
  {
    "id": "SP306",
    "Ma_Hang": "HD-OFL-M",
    "Ten_Biet_Duoc": "Ofloxacin Eye Drop",
    "Hoat_Chat": "Ofloxacin",
    "Ham_Luong": "NA",
    "Duong_Dung": "Nhỏ mắt",
    "Dang_Bao_Che": "Thuốc nhỏ mắt",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 45000,
    "SL_Ton": 5000000,
    "Gia_Niem_Yet": 26000
  },
  {
    "id": "SP307",
    "Ma_Hang": "HD-OFL-T",
    "Ten_Biet_Duoc": "Ofloxacin Tra Mắt",
    "Hoat_Chat": "Ofloxacin",
    "Ham_Luong": "NA",
    "Duong_Dung": "Tra mắt",
    "Dang_Bao_Che": "Thuốc tra mắt",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 60000,
    "SL_Ton": 5000000,
    "Gia_Niem_Yet": 35000
  },
  {
    "id": "SP308",
    "Ma_Hang": "HD-POV",
    "Ten_Biet_Duoc": "Povidon Iodin HD",
    "Hoat_Chat": "Povidon Iodin",
    "Ham_Luong": "NA",
    "Duong_Dung": "Dùng ngoài",
    "Dang_Bao_Che": "Dùng ngoài",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 360000,
    "SL_Ton": 5000000,
    "Gia_Niem_Yet": 300000
  },
  {
    "id": "SP309",
    "Ma_Hang": "HD-PRO-H",
    "Ten_Biet_Duoc": "Proparacain hydroclorid",
    "Hoat_Chat": "Proparacain hydroclorid",
    "Ham_Luong": "NA",
    "Duong_Dung": "Nhỏ mắt",
    "Dang_Bao_Che": "Thuốc nhỏ mắt",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 72000,
    "SL_Ton": 5000000,
    "Gia_Niem_Yet": 60000
  },
  {
    "id": "SP310",
    "Ma_Hang": "HD-TIM",
    "Ten_Biet_Duoc": "Timolol Eye Drop",
    "Hoat_Chat": "Timolol",
    "Ham_Luong": "NA",
    "Duong_Dung": "Nhỏ mắt",
    "Dang_Bao_Che": "Thuốc nhỏ mắt",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 22000,
    "SL_Ton": 5000000,
    "Gia_Niem_Yet": 13000
  },
  {
    "id": "SP311",
    "Ma_Hang": "HD-TRI",
    "Ten_Biet_Duoc": "Triamcinolon acetonid",
    "Hoat_Chat": "Triamcinolon acetonid",
    "Ham_Luong": "NA",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Thuốc tiêm",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 22000,
    "SL_Ton": 5000000,
    "Gia_Niem_Yet": 13000
  },
  {
    "id": "SP312",
    "Ma_Hang": "HD-TPH",
    "Ten_Biet_Duoc": "Tropicamide + Phenylephrine",
    "Hoat_Chat": "Tropicamide + Phenylephrine hydroclorid",
    "Ham_Luong": "NA",
    "Duong_Dung": "Nhỏ mắt",
    "Dang_Bao_Che": "Thuốc nhỏ mắt",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 55000,
    "SL_Ton": 5000000,
    "Gia_Niem_Yet": 33000
  },
  {
    "id": "SP313",
    "Ma_Hang": "HD-VITA",
    "Ten_Biet_Duoc": "Vitamin A HD",
    "Hoat_Chat": "Vitamin A",
    "Ham_Luong": "NA",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Ke_Khai": 6000,
    "SL_Ton": 10000000,
    "Gia_Niem_Yet": 5000
  },
  {
    "id": "SP401",
    "Ma_Hang": "HD-API",
    "Ten_Biet_Duoc": "Apitor-Ez",
    "Hoat_Chat": "Apitor",
    "Ham_Luong": "10/10mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 225000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP402",
    "Ma_Hang": "HD-AUG1",
    "Ten_Biet_Duoc": "Augmentin 1g HD",
    "Hoat_Chat": "Augmentin 1g",
    "Ham_Luong": "1g",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 11000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP403",
    "Ma_Hang": "HD-AUG5",
    "Ten_Biet_Duoc": "Augmentin 500mg HD",
    "Hoat_Chat": "Augmentin 500mg/62,5mg",
    "Ham_Luong": "500mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Gói",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 400000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP404",
    "Ma_Hang": "HD-BZO",
    "Ten_Biet_Duoc": "Betaloc Zok 50mg HD",
    "Hoat_Chat": "Betaloc Zok 50mg",
    "Ham_Luong": "50mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 135000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP405",
    "Ma_Hang": "HD-BS16",
    "Ten_Biet_Duoc": "Betaserc 16mg HD",
    "Hoat_Chat": "Betaserc 16mg",
    "Ham_Luong": "16mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 90000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP406",
    "Ma_Hang": "HD-BS24",
    "Ten_Biet_Duoc": "Betaserc 24mg HD",
    "Hoat_Chat": "Betaserc 24mg",
    "Ham_Luong": "24mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 160000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP407",
    "Ma_Hang": "HD-BIL",
    "Ten_Biet_Duoc": "Biloban HD",
    "Hoat_Chat": "Biloban",
    "Ham_Luong": "80mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 165000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP408",
    "Ma_Hang": "HD-BIO",
    "Ten_Biet_Duoc": "BIOFLORA 100MG HD",
    "Hoat_Chat": "BIOFLORA 100MG",
    "Ham_Luong": "100mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Gói",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 135000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP409",
    "Ma_Hang": "HD-CEF",
    "Ten_Biet_Duoc": "Cefurich 500 HD",
    "Hoat_Chat": "Cefurich 500",
    "Ham_Luong": "500mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 225000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP410",
    "Ma_Hang": "HD-COV10",
    "Ten_Biet_Duoc": "Coveram 10/10mg HD",
    "Hoat_Chat": "Coveram 10mg/10mg",
    "Ham_Luong": "10/10mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 250000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP411",
    "Ma_Hang": "HD-COV5",
    "Ten_Biet_Duoc": "Coveram 5/5mg HD",
    "Hoat_Chat": "Coveram 5mg/5mg",
    "Ham_Luong": "5/5mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 160000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP412",
    "Ma_Hang": "HD-CYS5",
    "Ten_Biet_Duoc": "Coversyl 5mg HD",
    "Hoat_Chat": "Coversyl 5mg",
    "Ham_Luong": "5mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 125000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP413",
    "Ma_Hang": "HD-CPL",
    "Ten_Biet_Duoc": "Coversyl Plus HD",
    "Hoat_Chat": "Coversyl Plus Arginine 5mg/1.25mg",
    "Ham_Luong": "5/1.25mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 160000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP414",
    "Ma_Hang": "HD-CRE",
    "Ten_Biet_Duoc": "Crestor 10mg HD",
    "Hoat_Chat": "Crestor 10mg",
    "Ham_Luong": "10mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 245000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP415",
    "Ma_Hang": "HD-DEP",
    "Ten_Biet_Duoc": "Depo-Medrol HD",
    "Hoat_Chat": "Depo",
    "Ham_Luong": "40mg",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Lọ",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 17000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP416",
    "Ma_Hang": "HD-DIA",
    "Ten_Biet_Duoc": "Diamicron MR 30mg HD",
    "Hoat_Chat": "Diamicron MR 30mg",
    "Ham_Luong": "30mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 75000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP417",
    "Ma_Hang": "HD-DIP",
    "Ten_Biet_Duoc": "Diprospan HD",
    "Hoat_Chat": "Diprospan",
    "Ham_Luong": "5/2mg",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Ống",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 37000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP418",
    "Ma_Hang": "HD-DUP",
    "Ten_Biet_Duoc": "Duphaston HD",
    "Hoat_Chat": "Duphaston",
    "Ham_Luong": "10mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 220000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP419",
    "Ma_Hang": "HD-EMA",
    "Ten_Biet_Duoc": "Emanera 40mg HD",
    "Hoat_Chat": "Emanera 40mg gastro",
    "Ham_Luong": "40mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 300000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP420",
    "Ma_Hang": "HD-EPI",
    "Ten_Biet_Duoc": "Epinosine B Forte HD",
    "Hoat_Chat": "Epinosine B Forte",
    "Ham_Luong": "2ml",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Ống",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 27000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP421",
    "Ma_Hang": "HD-FOS",
    "Ten_Biet_Duoc": "Fosmicin 500mg HD",
    "Hoat_Chat": "Fosmicin tablets 500mg",
    "Ham_Luong": "500mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 11000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP422",
    "Ma_Hang": "HD-GIN",
    "Ten_Biet_Duoc": "Ginkomifa HD",
    "Hoat_Chat": "Ginkomifa",
    "Ham_Luong": "17.5mg",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Ống",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 33000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP423",
    "Ma_Hang": "HD-LAN",
    "Ten_Biet_Duoc": "Lantus HD",
    "Hoat_Chat": "Lantus",
    "Ham_Luong": "100U",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Lọ",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 240000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP424",
    "Ma_Hang": "HD-LIP",
    "Ten_Biet_Duoc": "Lipanthyl 200M HD",
    "Hoat_Chat": "Lipanthyl 200M",
    "Ham_Luong": "200mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 175000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP425",
    "Ma_Hang": "HD-LIV",
    "Ten_Biet_Duoc": "Livosil 140mg HD",
    "Hoat_Chat": "Livosil 140mg",
    "Ham_Luong": "140mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 160000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP426",
    "Ma_Hang": "HD-MEI",
    "Ten_Biet_Duoc": "Meiact Fine HD",
    "Hoat_Chat": "Meiact Fine Granules",
    "Ham_Luong": "50mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Gói",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 12000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP427",
    "Ma_Hang": "HD-MIX",
    "Ten_Biet_Duoc": "Mixtard 30 HD",
    "Hoat_Chat": "Mixtard 30",
    "Ham_Luong": "10ml",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Lọ",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 32000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP428",
    "Ma_Hang": "HD-NOV",
    "Ten_Biet_Duoc": "Novorapid FlexPen HD",
    "Hoat_Chat": "Novorapid FlexPen",
    "Ham_Luong": "3ml",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Bút tiêm",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 110000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP429",
    "Ma_Hang": "HD-PUL",
    "Ten_Biet_Duoc": "Pulmicort Respules HD",
    "Hoat_Chat": "Pulmicort Respules",
    "Ham_Luong": "1mg",
    "Duong_Dung": "Hít",
    "Dang_Bao_Che": "Ống",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 12000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP430",
    "Ma_Hang": "HD-RED",
    "Ten_Biet_Duoc": "Reduze HD",
    "Hoat_Chat": "Reduze",
    "Ham_Luong": "NA",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 175000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP431",
    "Ma_Hang": "HD-ROT",
    "Ten_Biet_Duoc": "Rotunda HD",
    "Hoat_Chat": "Rotunda",
    "Ham_Luong": "30mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 20000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP432",
    "Ma_Hang": "HD-SEP",
    "Ten_Biet_Duoc": "Septanest HD",
    "Hoat_Chat": "Septanest with Adrenaline 1/100,000",
    "Ham_Luong": "1.7ml",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Ống",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 80000000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP433",
    "Ma_Hang": "HD-SIN",
    "Ten_Biet_Duoc": "Singulair 5mg HD",
    "Hoat_Chat": "Singulair 5mg (đóng gói tại Merck Sharp & Dohme B.V. Địa chỉ: Waarderweg 39, 2031 BN Haarlem",
    "Ham_Luong": "5mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 325000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP434",
    "Ma_Hang": "HD-SME",
    "Ten_Biet_Duoc": "Solu-Medrol HD",
    "Hoat_Chat": "Solu",
    "Ham_Luong": "40mg",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Lọ",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 20000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP501",
    "Ma_Hang": "HD-DTL",
    "Ten_Biet_Duoc": "Dolutegravir + Lamivudin + Tenofovir HD",
    "Hoat_Chat": "Dolutegravir + Lamivudin + Tenofovir disoproxil fumarate",
    "Ham_Luong": "50mg + 300mg + 300mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 90000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP502",
    "Ma_Hang": "HD-CIS",
    "Ten_Biet_Duoc": "Cisplatin HD",
    "Hoat_Chat": "Cisplatin",
    "Ham_Luong": "10mg/20ml",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Lọ",
    "Nhom_Ky_Thuat": "4",
    "Gia_Niem_Yet": 35000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP504",
    "Ma_Hang": "HD-SOR",
    "Ten_Biet_Duoc": "Sorbitol HD",
    "Hoat_Chat": "Sorbitol",
    "Ham_Luong": "5g",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Gói",
    "Nhom_Ky_Thuat": "2",
    "Gia_Niem_Yet": 9000000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP505",
    "Ma_Hang": "HD-EFA",
    "Ten_Biet_Duoc": "Efavirenz HD",
    "Hoat_Chat": "Efavirenz",
    "Ham_Luong": "600mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 70000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP506",
    "Ma_Hang": "HD-CAR",
    "Ten_Biet_Duoc": "Carboplatin HD",
    "Hoat_Chat": "Carboplatin",
    "Ham_Luong": "150mg",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Lọ",
    "Nhom_Ky_Thuat": "4",
    "Gia_Niem_Yet": 165000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP507",
    "Ma_Hang": "HD-CYC",
    "Ten_Biet_Duoc": "Cyclophosphamid HD",
    "Hoat_Chat": "Cyclophosphamid",
    "Ham_Luong": "500mg",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Lọ",
    "Nhom_Ky_Thuat": "1",
    "Gia_Niem_Yet": 65000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP508",
    "Ma_Hang": "HD-TRI-H",
    "Ten_Biet_Duoc": "Trihexyphenidyl HD",
    "Hoat_Chat": "Trihexyphenidyl hydroclorid",
    "Ham_Luong": "2mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "4",
    "Gia_Niem_Yet": 3500,
    "SL_Ton": 1000000
  },
  {
    "id": "SP509",
    "Ma_Hang": "HD-GLI",
    "Ten_Biet_Duoc": "Gliclazid HD",
    "Hoat_Chat": "Gliclazid",
    "Ham_Luong": "60mg",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "2",
    "Gia_Niem_Yet": 6000000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP510",
    "Ma_Hang": "HD-INS-N",
    "Ten_Biet_Duoc": "Insulin Nhanh HD",
    "Hoat_Chat": "Insulin người tác dụng nhanh, ngắn",
    "Ham_Luong": "400 IU/10ml",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Lọ",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 45000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP511",
    "Ma_Hang": "HD-INS-T",
    "Ten_Biet_Duoc": "Insulin Trung Bình HD",
    "Hoat_Chat": "Insulin người tác dụng trung bình, trung gian",
    "Ham_Luong": "400 IU/10ml",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Lọ",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 45000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP512",
    "Ma_Hang": "HD-ETH",
    "Ten_Biet_Duoc": "Ethyl ester acid béo iod hóa HD",
    "Hoat_Chat": "Ethyl ester của acid béo iod hóa trong dầu hạt thuốc phiện",
    "Ham_Luong": "4,8g Iod/ 10ml",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Lọ",
    "Nhom_Ky_Thuat": "1",
    "Gia_Niem_Yet": 3100000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP601",
    "Ma_Hang": "HD-ACA",
    "Ten_Biet_Duoc": "Acalabrutinib HD",
    "Hoat_Chat": "Acalabrutinib",
    "Ham_Luong": "NA",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên nang",
    "Nhom_Ky_Thuat": "1",
    "Gia_Niem_Yet": 1000000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP602",
    "Ma_Hang": "HD-ACC",
    "Ten_Biet_Duoc": "Acetylcystein HD",
    "Hoat_Chat": "Acetylcystein",
    "Ham_Luong": "NA",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Gói",
    "Nhom_Ky_Thuat": "1",
    "Gia_Niem_Yet": 8000000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP603",
    "Ma_Hang": "HD-AMI",
    "Ten_Biet_Duoc": "Amitriptyline HD",
    "Hoat_Chat": "Amitriptyline",
    "Ham_Luong": "NA",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "1",
    "Gia_Niem_Yet": 20000000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP604",
    "Ma_Hang": "HD-JOHN",
    "Ten_Biet_Duoc": "Cao khô cỏ thánh John HD",
    "Hoat_Chat": "Cao khô cỏ thánh John (Hyperici herbae extractum siccum)",
    "Ham_Luong": "NA",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "1",
    "Gia_Niem_Yet": 10000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP605",
    "Ma_Hang": "HD-CLA",
    "Ten_Biet_Duoc": "Cladribin HD",
    "Hoat_Chat": "Cladribin",
    "Ham_Luong": "NA",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "1",
    "Gia_Niem_Yet": 23000000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP606",
    "Ma_Hang": "HD-DEN",
    "Ten_Biet_Duoc": "Denosumab HD",
    "Hoat_Chat": "Denosumab",
    "Ham_Luong": "NA",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Bút tiêm",
    "Nhom_Ky_Thuat": "1",
    "Gia_Niem_Yet": 3100000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP607",
    "Ma_Hang": "HD-DIA-Z",
    "Ten_Biet_Duoc": "Diazepam HD",
    "Hoat_Chat": "Diazepam",
    "Ham_Luong": "NA",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "1",
    "Gia_Niem_Yet": 9500000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP608",
    "Ma_Hang": "HD-DOX",
    "Ten_Biet_Duoc": "Doxycyclin HD",
    "Hoat_Chat": "Doxycyclin",
    "Ham_Luong": "NA",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên nang",
    "Nhom_Ky_Thuat": "1",
    "Gia_Niem_Yet": 7500000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP609",
    "Ma_Hang": "HD-DYD",
    "Ten_Biet_Duoc": "Dydrogesterone HD",
    "Hoat_Chat": "Dydrogesterone",
    "Ham_Luong": "NA",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "1",
    "Gia_Niem_Yet": 44000000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP610",
    "Ma_Hang": "HD-ERI",
    "Ten_Biet_Duoc": "Eribulin HD",
    "Hoat_Chat": "Eribulin mesylate",
    "Ham_Luong": "NA",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Lọ",
    "Nhom_Ky_Thuat": "1",
    "Gia_Niem_Yet": 2000000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP611",
    "Ma_Hang": "HD-GLU",
    "Ten_Biet_Duoc": "Glucosamin + Chondroitin HD",
    "Hoat_Chat": "Glucosamin sulfat + Chondroitin sulfat",
    "Ham_Luong": "NA",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên nang",
    "Nhom_Ky_Thuat": "1",
    "Gia_Niem_Yet": 55000000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP612",
    "Ma_Hang": "HD-IMI",
    "Ten_Biet_Duoc": "Imidafenacin HD",
    "Hoat_Chat": "Imidafenacin",
    "Ham_Luong": "NA",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 255000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP613",
    "Ma_Hang": "HD-INC",
    "Ten_Biet_Duoc": "Inclisiran HD",
    "Hoat_Chat": "Inclisiran",
    "Ham_Luong": "NA",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Bút tiêm",
    "Nhom_Ky_Thuat": "1",
    "Gia_Niem_Yet": 19000000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP614",
    "Ma_Hang": "HD-NIR",
    "Ten_Biet_Duoc": "Nirsevimab HD",
    "Hoat_Chat": "Kháng thể đơn dòng Nirsevimab",
    "Ham_Luong": "NA",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Bơm tiêm",
    "Nhom_Ky_Thuat": "1",
    "Gia_Niem_Yet": 5600000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP615",
    "Ma_Hang": "HD-LAM",
    "Ten_Biet_Duoc": "Lamotrigine HD",
    "Hoat_Chat": "Lamotrigine",
    "Ham_Luong": "NA",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "1",
    "Gia_Niem_Yet": 24500000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP616",
    "Ma_Hang": "HD-LYO",
    "Ten_Biet_Duoc": "Lyophilized E.coli HD",
    "Hoat_Chat": "Lyophilized eschrichia coli bacterial lysate",
    "Ham_Luong": "NA",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên nang",
    "Nhom_Ky_Thuat": "1",
    "Gia_Niem_Yet": 75000000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP617",
    "Ma_Hang": "HD-MET",
    "Ten_Biet_Duoc": "Methyldopa HD",
    "Hoat_Chat": "Methyldopa",
    "Ham_Luong": "NA",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "1",
    "Gia_Niem_Yet": 12000000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP618",
    "Ma_Hang": "HD-MEP",
    "Ten_Biet_Duoc": "Methylprednisolon HD",
    "Hoat_Chat": "Methylprednisolon (dưới dạng methylprednisolon natri succinat)",
    "Ham_Luong": "NA",
    "Duong_Dung": "Tiêm",
    "Dang_Bao_Che": "Lọ",
    "Nhom_Ky_Thuat": "4",
    "Gia_Niem_Yet": 80000000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP619",
    "Ma_Hang": "HD-PEM",
    "Ten_Biet_Duoc": "Pembrolizumab HD",
    "Hoat_Chat": "Pembrolizumab",
    "Ham_Luong": "NA",
    "Duong_Dung": "Tiêm truyền",
    "Dang_Bao_Che": "Lọ",
    "Nhom_Ky_Thuat": "5",
    "Gia_Niem_Yet": 9200000,
    "SL_Ton": 1000000
  },
  {
    "id": "SP620",
    "Ma_Hang": "HD-PER",
    "Ten_Biet_Duoc": "Perindopril + Bisoprolol HD",
    "Hoat_Chat": "Perindopril + Bisoprolol",
    "Ham_Luong": "NA",
    "Duong_Dung": "Uống",
    "Dang_Bao_Che": "Viên",
    "Nhom_Ky_Thuat": "1",
    "Gia_Niem_Yet": 33000000,
    "SL_Ton": 1000000
  }
];

export const MOCK_ORDERS = [
  {
    "id": "DH001",
    "Ma_KH": "KH010",
    "Ten_KH": "BỆNH VIỆN ĐA KHOA VŨ THƯ",
    "So_Hoa_Don": "HD2001",
    "Ngay_Soan": "2026-04-18",
    "Ngay_Giao": "2026-04-25",
    "Tong_Tien": 20863637202,
    "Items": [
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 154,
        "DVT": "Lọ",
        "Don_Gia": 13445,
        "Thanh_Tien": 2070530
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 216,
        "DVT": "Lọ",
        "Don_Gia": 38316,
        "Thanh_Tien": 8276256
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 124,
        "DVT": "Viên",
        "Don_Gia": 11212,
        "Thanh_Tien": 1390288
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 170,
        "DVT": "Ống",
        "Don_Gia": 5329726,
        "Thanh_Tien": 906053420
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 37,
        "DVT": "Lọ",
        "Don_Gia": 26901,
        "Thanh_Tien": 995337
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 212,
        "DVT": "Viên",
        "Don_Gia": 16036,
        "Thanh_Tien": 3399632
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 371,
        "DVT": "Viên",
        "Don_Gia": 8031,
        "Thanh_Tien": 2979501
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 331,
        "DVT": "Viên",
        "Don_Gia": 25068530,
        "Thanh_Tien": 8297683430
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 81,
        "DVT": "Lọ",
        "Don_Gia": 15626,
        "Thanh_Tien": 1265706
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 432,
        "DVT": "Viên",
        "Don_Gia": 23517,
        "Thanh_Tien": 10159344
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 65,
        "DVT": "Xịt",
        "Don_Gia": 27502,
        "Thanh_Tien": 1787630
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 319,
        "DVT": "Lọ",
        "Don_Gia": 11728,
        "Thanh_Tien": 3741232
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 235,
        "DVT": "Ống",
        "Don_Gia": 26571395,
        "Thanh_Tien": 6244277825
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 27,
        "DVT": "Ống",
        "Don_Gia": 15602829,
        "Thanh_Tien": 421276383
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 202,
        "DVT": "Ống",
        "Don_Gia": 24545944,
        "Thanh_Tien": 4958280688
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
    "Tong_Tien": 47106719879,
    "Items": [
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 19,
        "DVT": "Viên",
        "Don_Gia": 15014,
        "Thanh_Tien": 285266
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 389,
        "DVT": "Lọ",
        "Don_Gia": 16883971,
        "Thanh_Tien": 6567864719
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 144,
        "DVT": "Xịt",
        "Don_Gia": 25003,
        "Thanh_Tien": 3600432
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 38,
        "DVT": "Lọ",
        "Don_Gia": 14100,
        "Thanh_Tien": 535800
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 150,
        "DVT": "Lọ",
        "Don_Gia": 29160,
        "Thanh_Tien": 4374000
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 349,
        "DVT": "Ống",
        "Don_Gia": 14469752,
        "Thanh_Tien": 5049943448
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 187,
        "DVT": "Viên",
        "Don_Gia": 23085,
        "Thanh_Tien": 4316895
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 454,
        "DVT": "Ống",
        "Don_Gia": 28723780,
        "Thanh_Tien": 13040596120
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 374,
        "DVT": "Lọ",
        "Don_Gia": 11390,
        "Thanh_Tien": 4259860
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 49,
        "DVT": "Viên",
        "Don_Gia": 19404,
        "Thanh_Tien": 950796
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 149,
        "DVT": "Lọ",
        "Don_Gia": 240487,
        "Thanh_Tien": 35832563
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 214,
        "DVT": "Lọ",
        "Don_Gia": 66488,
        "Thanh_Tien": 14228432
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 426,
        "DVT": "Ống",
        "Don_Gia": 40995336,
        "Thanh_Tien": 17464013136
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 172,
        "DVT": "Viên",
        "Don_Gia": 28580921,
        "Thanh_Tien": 4915918412
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
    "Tong_Tien": 166006559,
    "Items": [
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 440,
        "DVT": "Chai",
        "Don_Gia": 344695,
        "Thanh_Tien": 151665800
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 276,
        "DVT": "Lọ",
        "Don_Gia": 15442,
        "Thanh_Tien": 4261992
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 81,
        "DVT": "Viên",
        "Don_Gia": 36361,
        "Thanh_Tien": 2945241
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 87,
        "DVT": "Lọ",
        "Don_Gia": 35758,
        "Thanh_Tien": 3110946
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 320,
        "DVT": "Viên",
        "Don_Gia": 11415,
        "Thanh_Tien": 3652800
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 60,
        "DVT": "Viên",
        "Don_Gia": 6163,
        "Thanh_Tien": 369780
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
    "Tong_Tien": 9618594344,
    "Items": [
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 232,
        "DVT": "Lọ",
        "Don_Gia": 11863,
        "Thanh_Tien": 2752216
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 392,
        "DVT": "Viên",
        "Don_Gia": 24139,
        "Thanh_Tien": 9462488
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 67,
        "DVT": "Chai",
        "Don_Gia": 306191,
        "Thanh_Tien": 20514797
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 158,
        "DVT": "Lọ",
        "Don_Gia": 38665,
        "Thanh_Tien": 6109070
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 331,
        "DVT": "Lọ",
        "Don_Gia": 16746,
        "Thanh_Tien": 5542926
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 256,
        "DVT": "Viên",
        "Don_Gia": 228428,
        "Thanh_Tien": 58477568
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 132,
        "DVT": "Xịt",
        "Don_Gia": 26451,
        "Thanh_Tien": 3491532
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 42,
        "DVT": "Viên",
        "Don_Gia": 25885834,
        "Thanh_Tien": 1087205028
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 388,
        "DVT": "Ống",
        "Don_Gia": 21638690,
        "Thanh_Tien": 8395811720
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 466,
        "DVT": "Viên",
        "Don_Gia": 12805,
        "Thanh_Tien": 5967130
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 377,
        "DVT": "Viên",
        "Don_Gia": 18960,
        "Thanh_Tien": 7147920
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 449,
        "DVT": "Viên",
        "Don_Gia": 15710,
        "Thanh_Tien": 7053790
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 253,
        "DVT": "Viên",
        "Don_Gia": 35803,
        "Thanh_Tien": 9058159
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
    "Tong_Tien": 2028853712,
    "Items": [
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 362,
        "DVT": "Ống",
        "Don_Gia": 5422866,
        "Thanh_Tien": 1963077492
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 340,
        "DVT": "Lọ",
        "Don_Gia": 34615,
        "Thanh_Tien": 11769100
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 401,
        "DVT": "Viên",
        "Don_Gia": 17039,
        "Thanh_Tien": 6832639
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 216,
        "DVT": "Viên",
        "Don_Gia": 53706,
        "Thanh_Tien": 11600496
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 426,
        "DVT": "Lọ",
        "Don_Gia": 67840,
        "Thanh_Tien": 28899840
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 465,
        "DVT": "Viên",
        "Don_Gia": 14353,
        "Thanh_Tien": 6674145
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
    "Tong_Tien": 34989406051,
    "Items": [
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 484,
        "DVT": "Ống",
        "Don_Gia": 40820417,
        "Thanh_Tien": 19757081828
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 426,
        "DVT": "Ống",
        "Don_Gia": 23756924,
        "Thanh_Tien": 10120449624
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 154,
        "DVT": "Chai",
        "Don_Gia": 48401,
        "Thanh_Tien": 7453754
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 173,
        "DVT": "Ống",
        "Don_Gia": 15100945,
        "Thanh_Tien": 2612463485
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 452,
        "DVT": "Ống",
        "Don_Gia": 5513180,
        "Thanh_Tien": 2491957360
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
    "Tong_Tien": 26086276314,
    "Items": [
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 380,
        "DVT": "Chai",
        "Don_Gia": 49311,
        "Thanh_Tien": 18738180
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 390,
        "DVT": "Viên",
        "Don_Gia": 16004882,
        "Thanh_Tien": 6241903980
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 476,
        "DVT": "Ống",
        "Don_Gia": 14399469,
        "Thanh_Tien": 6854147244
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 419,
        "DVT": "Ống",
        "Don_Gia": 22776365,
        "Thanh_Tien": 9543296935
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 420,
        "DVT": "Viên",
        "Don_Gia": 11593,
        "Thanh_Tien": 4869060
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 100,
        "DVT": "Lọ",
        "Don_Gia": 14661,
        "Thanh_Tien": 1466100
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 162,
        "DVT": "Chai",
        "Don_Gia": 341130,
        "Thanh_Tien": 55263060
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 270,
        "DVT": "Viên",
        "Don_Gia": 6120,
        "Thanh_Tien": 1652400
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 75,
        "DVT": "Viên",
        "Don_Gia": 25341087,
        "Thanh_Tien": 1900581525
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 398,
        "DVT": "Viên",
        "Don_Gia": 13624,
        "Thanh_Tien": 5422352
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 286,
        "DVT": "Ống",
        "Don_Gia": 5101173,
        "Thanh_Tien": 1458935478
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
    "Tong_Tien": 19378429023,
    "Items": [
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 146,
        "DVT": "Lọ",
        "Don_Gia": 44228,
        "Thanh_Tien": 6457288
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 181,
        "DVT": "Ống",
        "Don_Gia": 22993761,
        "Thanh_Tien": 4161870741
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 55,
        "DVT": "Viên",
        "Don_Gia": 14114,
        "Thanh_Tien": 776270
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 34,
        "DVT": "Viên",
        "Don_Gia": 18716,
        "Thanh_Tien": 636344
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 352,
        "DVT": "Viên",
        "Don_Gia": 8102,
        "Thanh_Tien": 2851904
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 59,
        "DVT": "Lọ",
        "Don_Gia": 29527,
        "Thanh_Tien": 1742093
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 362,
        "DVT": "Ống",
        "Don_Gia": 40821842,
        "Thanh_Tien": 14777506804
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 265,
        "DVT": "Viên",
        "Don_Gia": 36808,
        "Thanh_Tien": 9754120
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 151,
        "DVT": "Viên",
        "Don_Gia": 253647,
        "Thanh_Tien": 38300697
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 110,
        "DVT": "Viên",
        "Don_Gia": 11439,
        "Thanh_Tien": 1258290
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 68,
        "DVT": "Ống",
        "Don_Gia": 5548154,
        "Thanh_Tien": 377274472
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
    "Tong_Tien": 28099475301,
    "Items": [
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 137,
        "DVT": "Tuýp",
        "Don_Gia": 37399,
        "Thanh_Tien": 5123663
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 420,
        "DVT": "Viên",
        "Don_Gia": 6620,
        "Thanh_Tien": 2780400
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 320,
        "DVT": "Viên",
        "Don_Gia": 28019804,
        "Thanh_Tien": 8966337280
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 55,
        "DVT": "Lọ",
        "Don_Gia": 26660,
        "Thanh_Tien": 1466300
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 50,
        "DVT": "Lọ",
        "Don_Gia": 36084,
        "Thanh_Tien": 1804200
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 157,
        "DVT": "Lọ",
        "Don_Gia": 12473,
        "Thanh_Tien": 1958261
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 442,
        "DVT": "Ống",
        "Don_Gia": 15972084,
        "Thanh_Tien": 7059661128
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 200,
        "DVT": "Ống",
        "Don_Gia": 22160547,
        "Thanh_Tien": 4432109400
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 454,
        "DVT": "Chai",
        "Don_Gia": 50747,
        "Thanh_Tien": 23039138
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 465,
        "DVT": "Viên",
        "Don_Gia": 11338,
        "Thanh_Tien": 5272170
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 430,
        "DVT": "Lọ",
        "Don_Gia": 17645457,
        "Thanh_Tien": 7587546510
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 68,
        "DVT": "Xịt",
        "Don_Gia": 27597,
        "Thanh_Tien": 1876596
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 171,
        "DVT": "Lọ",
        "Don_Gia": 61405,
        "Thanh_Tien": 10500255
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
    "Tong_Tien": 12105535122,
    "Items": [
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 85,
        "DVT": "Chai",
        "Don_Gia": 321774,
        "Thanh_Tien": 27350790
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 150,
        "DVT": "Viên",
        "Don_Gia": 12600,
        "Thanh_Tien": 1890000
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 258,
        "DVT": "Viên",
        "Don_Gia": 28745313,
        "Thanh_Tien": 7416290754
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 143,
        "DVT": "Lọ",
        "Don_Gia": 63459,
        "Thanh_Tien": 9074637
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 316,
        "DVT": "Xịt",
        "Don_Gia": 26619,
        "Thanh_Tien": 8411604
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 147,
        "DVT": "Viên",
        "Don_Gia": 15012333,
        "Thanh_Tien": 2206812951
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 11,
        "DVT": "Tuýp",
        "Don_Gia": 36796,
        "Thanh_Tien": 404756
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 80,
        "DVT": "Viên",
        "Don_Gia": 64192,
        "Thanh_Tien": 5135360
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 484,
        "DVT": "Ống",
        "Don_Gia": 5011011,
        "Thanh_Tien": 2425329324
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 238,
        "DVT": "Viên",
        "Don_Gia": 6132,
        "Thanh_Tien": 1459416
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 205,
        "DVT": "Lọ",
        "Don_Gia": 16466,
        "Thanh_Tien": 3375530
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
    "Tong_Tien": 16446206519,
    "Items": [
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 10,
        "DVT": "Lọ",
        "Don_Gia": 274428,
        "Thanh_Tien": 2744280
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 224,
        "DVT": "Lọ",
        "Don_Gia": 28677,
        "Thanh_Tien": 6423648
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 110,
        "DVT": "Viên",
        "Don_Gia": 34912,
        "Thanh_Tien": 3840320
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 364,
        "DVT": "Ống",
        "Don_Gia": 39870248,
        "Thanh_Tien": 14512770272
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 242,
        "DVT": "Ống",
        "Don_Gia": 5263354,
        "Thanh_Tien": 1273731668
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 444,
        "DVT": "Lọ",
        "Don_Gia": 63619,
        "Thanh_Tien": 28246836
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 136,
        "DVT": "Viên",
        "Don_Gia": 16501,
        "Thanh_Tien": 2244136
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 129,
        "DVT": "Viên",
        "Don_Gia": 8231,
        "Thanh_Tien": 1061799
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 26,
        "DVT": "Ống",
        "Don_Gia": 22351969,
        "Thanh_Tien": 581151194
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 71,
        "DVT": "Viên",
        "Don_Gia": 225063,
        "Thanh_Tien": 15979473
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 347,
        "DVT": "Viên",
        "Don_Gia": 6624,
        "Thanh_Tien": 2298528
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 124,
        "DVT": "Viên",
        "Don_Gia": 13801,
        "Thanh_Tien": 1711324
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 325,
        "DVT": "Viên",
        "Don_Gia": 24827,
        "Thanh_Tien": 8068775
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 338,
        "DVT": "Viên",
        "Don_Gia": 17557,
        "Thanh_Tien": 5934266
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
    "Tong_Tien": 12150148515,
    "Items": [
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 450,
        "DVT": "Lọ",
        "Don_Gia": 26005,
        "Thanh_Tien": 11702250
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 28,
        "DVT": "Viên",
        "Don_Gia": 8252,
        "Thanh_Tien": 231056
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 465,
        "DVT": "Viên",
        "Don_Gia": 18503,
        "Thanh_Tien": 8603895
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 405,
        "DVT": "Ống",
        "Don_Gia": 29637047,
        "Thanh_Tien": 12003004035
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 129,
        "DVT": "Lọ",
        "Don_Gia": 35599,
        "Thanh_Tien": 4592271
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 402,
        "DVT": "Viên",
        "Don_Gia": 15784,
        "Thanh_Tien": 6345168
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 440,
        "DVT": "Lọ",
        "Don_Gia": 262886,
        "Thanh_Tien": 115669840
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
    "Tong_Tien": 24442108358,
    "Items": [
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 118,
        "DVT": "Ống",
        "Don_Gia": 5286308,
        "Thanh_Tien": 623784344
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 325,
        "DVT": "Viên",
        "Don_Gia": 6688,
        "Thanh_Tien": 2173600
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 280,
        "DVT": "Lọ",
        "Don_Gia": 17947282,
        "Thanh_Tien": 5025238960
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 36,
        "DVT": "Lọ",
        "Don_Gia": 16457,
        "Thanh_Tien": 592452
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 425,
        "DVT": "Ống",
        "Don_Gia": 24340259,
        "Thanh_Tien": 10344610075
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 26,
        "DVT": "Lọ",
        "Don_Gia": 12547,
        "Thanh_Tien": 326222
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 187,
        "DVT": "Lọ",
        "Don_Gia": 244024,
        "Thanh_Tien": 45632488
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 138,
        "DVT": "Viên",
        "Don_Gia": 14312,
        "Thanh_Tien": 1975056
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 485,
        "DVT": "Viên",
        "Don_Gia": 17210508,
        "Thanh_Tien": 8347096380
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 482,
        "DVT": "Viên",
        "Don_Gia": 7851,
        "Thanh_Tien": 3784182
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 431,
        "DVT": "Lọ",
        "Don_Gia": 42387,
        "Thanh_Tien": 18268797
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 374,
        "DVT": "Viên",
        "Don_Gia": 19751,
        "Thanh_Tien": 7386874
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 404,
        "DVT": "Xịt",
        "Don_Gia": 27152,
        "Thanh_Tien": 10969408
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 274,
        "DVT": "Lọ",
        "Don_Gia": 37480,
        "Thanh_Tien": 10269520
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
    "Tong_Tien": 2402757936,
    "Items": [
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 217,
        "DVT": "Chai",
        "Don_Gia": 334520,
        "Thanh_Tien": 72590840
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 104,
        "DVT": "Viên",
        "Don_Gia": 16498106,
        "Thanh_Tien": 1715803024
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 414,
        "DVT": "Viên",
        "Don_Gia": 12769,
        "Thanh_Tien": 5286366
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 478,
        "DVT": "Viên",
        "Don_Gia": 11039,
        "Thanh_Tien": 5276642
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 343,
        "DVT": "Viên",
        "Don_Gia": 15237,
        "Thanh_Tien": 5226291
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 30,
        "DVT": "Viên",
        "Don_Gia": 35550,
        "Thanh_Tien": 1066500
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 205,
        "DVT": "Lọ",
        "Don_Gia": 15361,
        "Thanh_Tien": 3149005
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 37,
        "DVT": "Ống",
        "Don_Gia": 16063764,
        "Thanh_Tien": 594359268
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
    "Tong_Tien": 22872141042,
    "Items": [
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 462,
        "DVT": "Lọ",
        "Don_Gia": 12595,
        "Thanh_Tien": 5818890
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 284,
        "DVT": "Viên",
        "Don_Gia": 6713,
        "Thanh_Tien": 1906492
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 256,
        "DVT": "Viên",
        "Don_Gia": 25029,
        "Thanh_Tien": 6407424
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 381,
        "DVT": "Viên",
        "Don_Gia": 241245,
        "Thanh_Tien": 91914345
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 236,
        "DVT": "Lọ",
        "Don_Gia": 18982156,
        "Thanh_Tien": 4479788816
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 195,
        "DVT": "Ống",
        "Don_Gia": 5050081,
        "Thanh_Tien": 984765795
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 82,
        "DVT": "Viên",
        "Don_Gia": 62453,
        "Thanh_Tien": 5121146
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 264,
        "DVT": "Viên",
        "Don_Gia": 25482124,
        "Thanh_Tien": 6727280736
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 442,
        "DVT": "Ống",
        "Don_Gia": 23893103,
        "Thanh_Tien": 10560751526
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 319,
        "DVT": "Xịt",
        "Don_Gia": 26288,
        "Thanh_Tien": 8385872
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
    "Tong_Tien": 16826593622,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 483,
        "DVT": "Viên",
        "Don_Gia": 17145466,
        "Thanh_Tien": 8281260078
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 280,
        "DVT": "Lọ",
        "Don_Gia": 26082,
        "Thanh_Tien": 7302960
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 229,
        "DVT": "Lọ",
        "Don_Gia": 45758,
        "Thanh_Tien": 10478582
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 291,
        "DVT": "Lọ",
        "Don_Gia": 11219,
        "Thanh_Tien": 3264729
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 169,
        "DVT": "Lọ",
        "Don_Gia": 66430,
        "Thanh_Tien": 11226670
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 79,
        "DVT": "Viên",
        "Don_Gia": 25739287,
        "Thanh_Tien": 2033403673
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 348,
        "DVT": "Lọ",
        "Don_Gia": 14837,
        "Thanh_Tien": 5163276
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 202,
        "DVT": "Viên",
        "Don_Gia": 34745,
        "Thanh_Tien": 7018490
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 45,
        "DVT": "Viên",
        "Don_Gia": 67714,
        "Thanh_Tien": 3047130
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 481,
        "DVT": "Viên",
        "Don_Gia": 12712,
        "Thanh_Tien": 6114472
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 328,
        "DVT": "Ống",
        "Don_Gia": 5046950,
        "Thanh_Tien": 1655399600
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 20,
        "DVT": "Lọ",
        "Don_Gia": 16297,
        "Thanh_Tien": 325940
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 269,
        "DVT": "Lọ",
        "Don_Gia": 17848680,
        "Thanh_Tien": 4801294920
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 114,
        "DVT": "Viên",
        "Don_Gia": 11343,
        "Thanh_Tien": 1293102
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
    "Tong_Tien": 9908500609,
    "Items": [
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 452,
        "DVT": "Viên",
        "Don_Gia": 23090,
        "Thanh_Tien": 10436680
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 45,
        "DVT": "Viên",
        "Don_Gia": 240214,
        "Thanh_Tien": 10809630
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 304,
        "DVT": "Xịt",
        "Don_Gia": 26803,
        "Thanh_Tien": 8148112
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 321,
        "DVT": "Lọ",
        "Don_Gia": 41874,
        "Thanh_Tien": 13441554
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 454,
        "DVT": "Lọ",
        "Don_Gia": 38874,
        "Thanh_Tien": 17648796
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 159,
        "DVT": "Lọ",
        "Don_Gia": 272558,
        "Thanh_Tien": 43336722
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 381,
        "DVT": "Viên",
        "Don_Gia": 7603,
        "Thanh_Tien": 2896743
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 75,
        "DVT": "Tuýp",
        "Don_Gia": 38949,
        "Thanh_Tien": 2921175
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 88,
        "DVT": "Ống",
        "Don_Gia": 38221053,
        "Thanh_Tien": 3363452664
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 211,
        "DVT": "Viên",
        "Don_Gia": 25450239,
        "Thanh_Tien": 5370000429
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 457,
        "DVT": "Lọ",
        "Don_Gia": 63365,
        "Thanh_Tien": 28957805
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 394,
        "DVT": "Viên",
        "Don_Gia": 6606,
        "Thanh_Tien": 2602764
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 35,
        "DVT": "Ống",
        "Don_Gia": 29538501,
        "Thanh_Tien": 1033847535
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
    "Tong_Tien": 8605225183,
    "Items": [
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 355,
        "DVT": "Viên",
        "Don_Gia": 60780,
        "Thanh_Tien": 21576900
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 382,
        "DVT": "Viên",
        "Don_Gia": 37237,
        "Thanh_Tien": 14224534
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 62,
        "DVT": "Viên",
        "Don_Gia": 27149700,
        "Thanh_Tien": 1683281400
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 149,
        "DVT": "Viên",
        "Don_Gia": 6086,
        "Thanh_Tien": 906814
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 436,
        "DVT": "Tuýp",
        "Don_Gia": 37627,
        "Thanh_Tien": 16405372
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 348,
        "DVT": "Lọ",
        "Don_Gia": 35200,
        "Thanh_Tien": 12249600
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 187,
        "DVT": "Lọ",
        "Don_Gia": 14771,
        "Thanh_Tien": 2762177
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 355,
        "DVT": "Lọ",
        "Don_Gia": 18993964,
        "Thanh_Tien": 6742857220
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 461,
        "DVT": "Viên",
        "Don_Gia": 15003,
        "Thanh_Tien": 6916383
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 215,
        "DVT": "Lọ",
        "Don_Gia": 28644,
        "Thanh_Tien": 6158460
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 289,
        "DVT": "Chai",
        "Don_Gia": 338707,
        "Thanh_Tien": 97886323
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
    "Tong_Tien": 3515125846,
    "Items": [
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 14,
        "DVT": "Lọ",
        "Don_Gia": 68577,
        "Thanh_Tien": 960078
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 363,
        "DVT": "Lọ",
        "Don_Gia": 12398,
        "Thanh_Tien": 4500474
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 259,
        "DVT": "Viên",
        "Don_Gia": 23172,
        "Thanh_Tien": 6001548
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 118,
        "DVT": "Lọ",
        "Don_Gia": 18376605,
        "Thanh_Tien": 2168439390
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 240,
        "DVT": "Lọ",
        "Don_Gia": 27512,
        "Thanh_Tien": 6602880
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 275,
        "DVT": "Viên",
        "Don_Gia": 8023,
        "Thanh_Tien": 2206325
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 29,
        "DVT": "Xịt",
        "Don_Gia": 25274,
        "Thanh_Tien": 732946
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 345,
        "DVT": "Lọ",
        "Don_Gia": 272910,
        "Thanh_Tien": 94153950
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 156,
        "DVT": "Lọ",
        "Don_Gia": 13370,
        "Thanh_Tien": 2085720
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 396,
        "DVT": "Chai",
        "Don_Gia": 344529,
        "Thanh_Tien": 136433484
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 191,
        "DVT": "Ống",
        "Don_Gia": 5575721,
        "Thanh_Tien": 1064962711
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 57,
        "DVT": "Lọ",
        "Don_Gia": 35460,
        "Thanh_Tien": 2021220
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 480,
        "DVT": "Viên",
        "Don_Gia": 54219,
        "Thanh_Tien": 26025120
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
    "Tong_Tien": 16822646801,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 214,
        "DVT": "Viên",
        "Don_Gia": 16790026,
        "Thanh_Tien": 3593065564
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 475,
        "DVT": "Viên",
        "Don_Gia": 13330,
        "Thanh_Tien": 6331750
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 241,
        "DVT": "Viên",
        "Don_Gia": 11111,
        "Thanh_Tien": 2677751
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 127,
        "DVT": "Viên",
        "Don_Gia": 8483,
        "Thanh_Tien": 1077341
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 245,
        "DVT": "Viên",
        "Don_Gia": 65653,
        "Thanh_Tien": 16084985
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 177,
        "DVT": "Ống",
        "Don_Gia": 29547764,
        "Thanh_Tien": 5229954228
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 261,
        "DVT": "Lọ",
        "Don_Gia": 45333,
        "Thanh_Tien": 11831913
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 442,
        "DVT": "Lọ",
        "Don_Gia": 15671,
        "Thanh_Tien": 6926582
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 432,
        "DVT": "Lọ",
        "Don_Gia": 18095276,
        "Thanh_Tien": 7817159232
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 268,
        "DVT": "Viên",
        "Don_Gia": 33577,
        "Thanh_Tien": 8998636
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 447,
        "DVT": "Lọ",
        "Don_Gia": 255693,
        "Thanh_Tien": 114294771
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 252,
        "DVT": "Viên",
        "Don_Gia": 56524,
        "Thanh_Tien": 14244048
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
    "Tong_Tien": 26385311234,
    "Items": [
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 489,
        "DVT": "Viên",
        "Don_Gia": 8215,
        "Thanh_Tien": 4017135
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 476,
        "DVT": "Ống",
        "Don_Gia": 15590376,
        "Thanh_Tien": 7421018976
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 287,
        "DVT": "Viên",
        "Don_Gia": 11908,
        "Thanh_Tien": 3417596
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 403,
        "DVT": "Viên",
        "Don_Gia": 19153,
        "Thanh_Tien": 7718659
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 27,
        "DVT": "Viên",
        "Don_Gia": 15637440,
        "Thanh_Tien": 422210880
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 278,
        "DVT": "Ống",
        "Don_Gia": 26594426,
        "Thanh_Tien": 7393250428
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 452,
        "DVT": "Ống",
        "Don_Gia": 24632030,
        "Thanh_Tien": 11133677560
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
    "Tong_Tien": 13633880590,
    "Items": [
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 392,
        "DVT": "Lọ",
        "Don_Gia": 11677,
        "Thanh_Tien": 4577384
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 127,
        "DVT": "Viên",
        "Don_Gia": 51284,
        "Thanh_Tien": 6513068
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 204,
        "DVT": "Viên",
        "Don_Gia": 16319,
        "Thanh_Tien": 3329076
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 228,
        "DVT": "Lọ",
        "Don_Gia": 15205,
        "Thanh_Tien": 3466740
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 174,
        "DVT": "Lọ",
        "Don_Gia": 68389,
        "Thanh_Tien": 11899686
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 18,
        "DVT": "Viên",
        "Don_Gia": 26909946,
        "Thanh_Tien": 484379028
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 454,
        "DVT": "Ống",
        "Don_Gia": 28898052,
        "Thanh_Tien": 13119715608
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
    "Tong_Tien": 34673999850,
    "Items": [
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 255,
        "DVT": "Ống",
        "Don_Gia": 36036166,
        "Thanh_Tien": 9189222330
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 464,
        "DVT": "Viên",
        "Don_Gia": 27051845,
        "Thanh_Tien": 12552056080
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 113,
        "DVT": "Chai",
        "Don_Gia": 50755,
        "Thanh_Tien": 5735315
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 433,
        "DVT": "Ống",
        "Don_Gia": 29364209,
        "Thanh_Tien": 12714702497
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 201,
        "DVT": "Viên",
        "Don_Gia": 67571,
        "Thanh_Tien": 13581771
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 37,
        "DVT": "Ống",
        "Don_Gia": 5045345,
        "Thanh_Tien": 186677765
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 197,
        "DVT": "Lọ",
        "Don_Gia": 61036,
        "Thanh_Tien": 12024092
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
    "Tong_Tien": 7780028206,
    "Items": [
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 11,
        "DVT": "Lọ",
        "Don_Gia": 14155,
        "Thanh_Tien": 155705
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 495,
        "DVT": "Viên",
        "Don_Gia": 13251,
        "Thanh_Tien": 6559245
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 274,
        "DVT": "Lọ",
        "Don_Gia": 65505,
        "Thanh_Tien": 17948370
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 128,
        "DVT": "Viên",
        "Don_Gia": 8368,
        "Thanh_Tien": 1071104
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 286,
        "DVT": "Ống",
        "Don_Gia": 26528501,
        "Thanh_Tien": 7587151286
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 312,
        "DVT": "Viên",
        "Don_Gia": 66077,
        "Thanh_Tien": 20616024
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 389,
        "DVT": "Lọ",
        "Don_Gia": 27468,
        "Thanh_Tien": 10685052
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 234,
        "DVT": "Xịt",
        "Don_Gia": 25614,
        "Thanh_Tien": 5993676
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 150,
        "DVT": "Viên",
        "Don_Gia": 17086,
        "Thanh_Tien": 2562900
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 365,
        "DVT": "Viên",
        "Don_Gia": 12035,
        "Thanh_Tien": 4392775
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 443,
        "DVT": "Lọ",
        "Don_Gia": 274227,
        "Thanh_Tien": 121482561
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 93,
        "DVT": "Lọ",
        "Don_Gia": 15156,
        "Thanh_Tien": 1409508
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
    "Tong_Tien": 11087590657,
    "Items": [
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 475,
        "DVT": "Lọ",
        "Don_Gia": 13174,
        "Thanh_Tien": 6257650
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 162,
        "DVT": "Viên",
        "Don_Gia": 12995,
        "Thanh_Tien": 2105190
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 74,
        "DVT": "Ống",
        "Don_Gia": 23156693,
        "Thanh_Tien": 1713595282
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 251,
        "DVT": "Viên",
        "Don_Gia": 257294,
        "Thanh_Tien": 64580794
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 440,
        "DVT": "Lọ",
        "Don_Gia": 12172,
        "Thanh_Tien": 5355680
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 36,
        "DVT": "Viên",
        "Don_Gia": 12381,
        "Thanh_Tien": 445716
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 287,
        "DVT": "Viên",
        "Don_Gia": 25098211,
        "Thanh_Tien": 7203186557
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 195,
        "DVT": "Lọ",
        "Don_Gia": 41902,
        "Thanh_Tien": 8170890
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 126,
        "DVT": "Viên",
        "Don_Gia": 16122147,
        "Thanh_Tien": 2031390522
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 179,
        "DVT": "Lọ",
        "Don_Gia": 273123,
        "Thanh_Tien": 48889017
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 146,
        "DVT": "Viên",
        "Don_Gia": 7734,
        "Thanh_Tien": 1129164
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 401,
        "DVT": "Viên",
        "Don_Gia": 6195,
        "Thanh_Tien": 2484195
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
    "Tong_Tien": 5997159034,
    "Items": [
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 296,
        "DVT": "Lọ",
        "Don_Gia": 37398,
        "Thanh_Tien": 11069808
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 66,
        "DVT": "Viên",
        "Don_Gia": 24914,
        "Thanh_Tien": 1644324
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 123,
        "DVT": "Viên",
        "Don_Gia": 14025,
        "Thanh_Tien": 1725075
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 297,
        "DVT": "Viên",
        "Don_Gia": 33427,
        "Thanh_Tien": 9927819
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 326,
        "DVT": "Xịt",
        "Don_Gia": 25251,
        "Thanh_Tien": 8231826
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 326,
        "DVT": "Lọ",
        "Don_Gia": 18278259,
        "Thanh_Tien": 5958712434
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 197,
        "DVT": "Lọ",
        "Don_Gia": 29684,
        "Thanh_Tien": 5847748
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
    "Tong_Tien": 33270076751,
    "Items": [
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 97,
        "DVT": "Ống",
        "Don_Gia": 22727713,
        "Thanh_Tien": 2204588161
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 388,
        "DVT": "Lọ",
        "Don_Gia": 17710645,
        "Thanh_Tien": 6871730260
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 187,
        "DVT": "Viên",
        "Don_Gia": 12129,
        "Thanh_Tien": 2268123
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 67,
        "DVT": "Ống",
        "Don_Gia": 29727901,
        "Thanh_Tien": 1991769367
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 264,
        "DVT": "Lọ",
        "Don_Gia": 251862,
        "Thanh_Tien": 66491568
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 400,
        "DVT": "Lọ",
        "Don_Gia": 13909,
        "Thanh_Tien": 5563600
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 383,
        "DVT": "Viên",
        "Don_Gia": 26358883,
        "Thanh_Tien": 10095452189
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 353,
        "DVT": "Lọ",
        "Don_Gia": 16819,
        "Thanh_Tien": 5937107
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 178,
        "DVT": "Viên",
        "Don_Gia": 13067,
        "Thanh_Tien": 2325926
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 294,
        "DVT": "Ống",
        "Don_Gia": 40730394,
        "Thanh_Tien": 11974735836
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 426,
        "DVT": "Lọ",
        "Don_Gia": 63394,
        "Thanh_Tien": 27005844
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 486,
        "DVT": "Lọ",
        "Don_Gia": 11671,
        "Thanh_Tien": 5672106
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 420,
        "DVT": "Viên",
        "Don_Gia": 37125,
        "Thanh_Tien": 15592500
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 67,
        "DVT": "Viên",
        "Don_Gia": 14092,
        "Thanh_Tien": 944164
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
    "Tong_Tien": 35338415099,
    "Items": [
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 86,
        "DVT": "Xịt",
        "Don_Gia": 25268,
        "Thanh_Tien": 2173048
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 15,
        "DVT": "Chai",
        "Don_Gia": 51571,
        "Thanh_Tien": 773565
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 234,
        "DVT": "Viên",
        "Don_Gia": 15556681,
        "Thanh_Tien": 3640263354
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 335,
        "DVT": "Viên",
        "Don_Gia": 13358,
        "Thanh_Tien": 4474930
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 91,
        "DVT": "Ống",
        "Don_Gia": 24359556,
        "Thanh_Tien": 2216719596
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 306,
        "DVT": "Lọ",
        "Don_Gia": 65352,
        "Thanh_Tien": 19997712
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 378,
        "DVT": "Lọ",
        "Don_Gia": 17834886,
        "Thanh_Tien": 6741586908
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 499,
        "DVT": "Ống",
        "Don_Gia": 27093391,
        "Thanh_Tien": 13519602109
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 377,
        "DVT": "Lọ",
        "Don_Gia": 15576,
        "Thanh_Tien": 5872152
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 67,
        "DVT": "Lọ",
        "Don_Gia": 26758,
        "Thanh_Tien": 1792786
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 318,
        "DVT": "Viên",
        "Don_Gia": 28583102,
        "Thanh_Tien": 9089426436
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 274,
        "DVT": "Lọ",
        "Don_Gia": 13232,
        "Thanh_Tien": 3625568
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 226,
        "DVT": "Chai",
        "Don_Gia": 317975,
        "Thanh_Tien": 71862350
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 355,
        "DVT": "Viên",
        "Don_Gia": 57027,
        "Thanh_Tien": 20244585
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
    "Tong_Tien": 26965193885,
    "Items": [
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 392,
        "DVT": "Lọ",
        "Don_Gia": 40437,
        "Thanh_Tien": 15851304
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 320,
        "DVT": "Chai",
        "Don_Gia": 324317,
        "Thanh_Tien": 103781440
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 373,
        "DVT": "Lọ",
        "Don_Gia": 36831,
        "Thanh_Tien": 13737963
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 79,
        "DVT": "Viên",
        "Don_Gia": 17800,
        "Thanh_Tien": 1406200
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 339,
        "DVT": "Lọ",
        "Don_Gia": 17702127,
        "Thanh_Tien": 6001021053
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 310,
        "DVT": "Chai",
        "Don_Gia": 50113,
        "Thanh_Tien": 15535030
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 102,
        "DVT": "Lọ",
        "Don_Gia": 62930,
        "Thanh_Tien": 6418860
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 246,
        "DVT": "Viên",
        "Don_Gia": 13791,
        "Thanh_Tien": 3392586
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 290,
        "DVT": "Ống",
        "Don_Gia": 22085528,
        "Thanh_Tien": 6404803120
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 420,
        "DVT": "Ống",
        "Don_Gia": 5305452,
        "Thanh_Tien": 2228289840
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 323,
        "DVT": "Ống",
        "Don_Gia": 37674099,
        "Thanh_Tien": 12168733977
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 34,
        "DVT": "Viên",
        "Don_Gia": 65368,
        "Thanh_Tien": 2222512
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
    "Tong_Tien": 847655732,
    "Items": [
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 34,
        "DVT": "Lọ",
        "Don_Gia": 17601986,
        "Thanh_Tien": 598467524
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 448,
        "DVT": "Viên",
        "Don_Gia": 244994,
        "Thanh_Tien": 109757312
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 420,
        "DVT": "Lọ",
        "Don_Gia": 41590,
        "Thanh_Tien": 17467800
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 498,
        "DVT": "Lọ",
        "Don_Gia": 68424,
        "Thanh_Tien": 34075152
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 112,
        "DVT": "Chai",
        "Don_Gia": 342477,
        "Thanh_Tien": 38357424
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 168,
        "DVT": "Lọ",
        "Don_Gia": 11381,
        "Thanh_Tien": 1912008
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 113,
        "DVT": "Viên",
        "Don_Gia": 55096,
        "Thanh_Tien": 6225848
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 142,
        "DVT": "Lọ",
        "Don_Gia": 16273,
        "Thanh_Tien": 2310766
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 13,
        "DVT": "Lọ",
        "Don_Gia": 28536,
        "Thanh_Tien": 370968
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 140,
        "DVT": "Xịt",
        "Don_Gia": 26204,
        "Thanh_Tien": 3668560
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 422,
        "DVT": "Lọ",
        "Don_Gia": 35535,
        "Thanh_Tien": 14995770
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 430,
        "DVT": "Chai",
        "Don_Gia": 46620,
        "Thanh_Tien": 20046600
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
    "Tong_Tien": 19602125075,
    "Items": [
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 68,
        "DVT": "Viên",
        "Don_Gia": 12998,
        "Thanh_Tien": 883864
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 141,
        "DVT": "Viên",
        "Don_Gia": 32711,
        "Thanh_Tien": 4612251
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 482,
        "DVT": "Chai",
        "Don_Gia": 316366,
        "Thanh_Tien": 152488412
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 490,
        "DVT": "Lọ",
        "Don_Gia": 37772,
        "Thanh_Tien": 18508280
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 500,
        "DVT": "Ống",
        "Don_Gia": 38583651,
        "Thanh_Tien": 19291825500
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 466,
        "DVT": "Lọ",
        "Don_Gia": 266352,
        "Thanh_Tien": 124120032
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 80,
        "DVT": "Lọ",
        "Don_Gia": 29265,
        "Thanh_Tien": 2341200
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 444,
        "DVT": "Lọ",
        "Don_Gia": 16544,
        "Thanh_Tien": 7345536
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
    "Tong_Tien": 16362349237,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 299,
        "DVT": "Viên",
        "Don_Gia": 26779075,
        "Thanh_Tien": 8006943425
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 438,
        "DVT": "Tuýp",
        "Don_Gia": 36777,
        "Thanh_Tien": 16108326
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 429,
        "DVT": "Viên",
        "Don_Gia": 14056,
        "Thanh_Tien": 6030024
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 356,
        "DVT": "Lọ",
        "Don_Gia": 264580,
        "Thanh_Tien": 94190480
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 45,
        "DVT": "Ống",
        "Don_Gia": 27621125,
        "Thanh_Tien": 1242950625
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 94,
        "DVT": "Lọ",
        "Don_Gia": 13968,
        "Thanh_Tien": 1312992
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 12,
        "DVT": "Lọ",
        "Don_Gia": 65443,
        "Thanh_Tien": 785316
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 367,
        "DVT": "Lọ",
        "Don_Gia": 43794,
        "Thanh_Tien": 16072398
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 152,
        "DVT": "Viên",
        "Don_Gia": 54113,
        "Thanh_Tien": 8225176
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 37,
        "DVT": "Viên",
        "Don_Gia": 6580,
        "Thanh_Tien": 243460
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 202,
        "DVT": "Chai",
        "Don_Gia": 344152,
        "Thanh_Tien": 69518704
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 174,
        "DVT": "Ống",
        "Don_Gia": 39596084,
        "Thanh_Tien": 6889718616
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 387,
        "DVT": "Xịt",
        "Don_Gia": 26485,
        "Thanh_Tien": 10249695
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
    "Tong_Tien": 12514430837,
    "Items": [
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 223,
        "DVT": "Viên",
        "Don_Gia": 25445,
        "Thanh_Tien": 5674235
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 155,
        "DVT": "Viên",
        "Don_Gia": 16054415,
        "Thanh_Tien": 2488434325
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 208,
        "DVT": "Ống",
        "Don_Gia": 24323978,
        "Thanh_Tien": 5059387424
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 165,
        "DVT": "Lọ",
        "Don_Gia": 18574621,
        "Thanh_Tien": 3064812465
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 116,
        "DVT": "Ống",
        "Don_Gia": 16228168,
        "Thanh_Tien": 1882467488
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 461,
        "DVT": "Viên",
        "Don_Gia": 7672,
        "Thanh_Tien": 3536792
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 208,
        "DVT": "Lọ",
        "Don_Gia": 11214,
        "Thanh_Tien": 2332512
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 293,
        "DVT": "Xịt",
        "Don_Gia": 26572,
        "Thanh_Tien": 7785596
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
    "Tong_Tien": 34634966229,
    "Items": [
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 370,
        "DVT": "Lọ",
        "Don_Gia": 66206,
        "Thanh_Tien": 24496220
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 142,
        "DVT": "Lọ",
        "Don_Gia": 27924,
        "Thanh_Tien": 3965208
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 395,
        "DVT": "Viên",
        "Don_Gia": 27154952,
        "Thanh_Tien": 10726206040
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 326,
        "DVT": "Chai",
        "Don_Gia": 45242,
        "Thanh_Tien": 14748892
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 363,
        "DVT": "Viên",
        "Don_Gia": 16199,
        "Thanh_Tien": 5880237
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 209,
        "DVT": "Ống",
        "Don_Gia": 5740902,
        "Thanh_Tien": 1199848518
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 466,
        "DVT": "Ống",
        "Don_Gia": 35898205,
        "Thanh_Tien": 16728563530
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 489,
        "DVT": "Viên",
        "Don_Gia": 258186,
        "Thanh_Tien": 126252954
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 155,
        "DVT": "Chai",
        "Don_Gia": 337735,
        "Thanh_Tien": 52348925
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 416,
        "DVT": "Viên",
        "Don_Gia": 8119,
        "Thanh_Tien": 3377504
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 120,
        "DVT": "Lọ",
        "Don_Gia": 37596,
        "Thanh_Tien": 4511520
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 25,
        "DVT": "Lọ",
        "Don_Gia": 15699,
        "Thanh_Tien": 392475
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 351,
        "DVT": "Ống",
        "Don_Gia": 15111930,
        "Thanh_Tien": 5304287430
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 24,
        "DVT": "Lọ",
        "Don_Gia": 18336949,
        "Thanh_Tien": 440086776
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
    "Tong_Tien": 14028092632,
    "Items": [
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 440,
        "DVT": "Xịt",
        "Don_Gia": 26712,
        "Thanh_Tien": 11753280
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 194,
        "DVT": "Ống",
        "Don_Gia": 16114957,
        "Thanh_Tien": 3126301658
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 251,
        "DVT": "Ống",
        "Don_Gia": 37447165,
        "Thanh_Tien": 9399238415
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 115,
        "DVT": "Viên",
        "Don_Gia": 14285,
        "Thanh_Tien": 1642775
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 209,
        "DVT": "Viên",
        "Don_Gia": 68707,
        "Thanh_Tien": 14359763
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 55,
        "DVT": "Ống",
        "Don_Gia": 26746673,
        "Thanh_Tien": 1471067015
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 299,
        "DVT": "Viên",
        "Don_Gia": 12474,
        "Thanh_Tien": 3729726
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
    "Tong_Tien": 10522259108,
    "Items": [
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 25,
        "DVT": "Lọ",
        "Don_Gia": 36417,
        "Thanh_Tien": 910425
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 51,
        "DVT": "Viên",
        "Don_Gia": 61192,
        "Thanh_Tien": 3120792
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 81,
        "DVT": "Viên",
        "Don_Gia": 25059340,
        "Thanh_Tien": 2029806540
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 194,
        "DVT": "Viên",
        "Don_Gia": 36388,
        "Thanh_Tien": 7059272
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 175,
        "DVT": "Viên",
        "Don_Gia": 247738,
        "Thanh_Tien": 43354150
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 412,
        "DVT": "Ống",
        "Don_Gia": 5119364,
        "Thanh_Tien": 2109177968
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 434,
        "DVT": "Viên",
        "Don_Gia": 7667,
        "Thanh_Tien": 3327478
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 141,
        "DVT": "Tuýp",
        "Don_Gia": 38229,
        "Thanh_Tien": 5390289
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 358,
        "DVT": "Lọ",
        "Don_Gia": 17645312,
        "Thanh_Tien": 6317021696
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 51,
        "DVT": "Lọ",
        "Don_Gia": 60598,
        "Thanh_Tien": 3090498
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
    "Tong_Tien": 7208312599,
    "Items": [
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 122,
        "DVT": "Viên",
        "Don_Gia": 6237,
        "Thanh_Tien": 760914
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 337,
        "DVT": "Lọ",
        "Don_Gia": 17822359,
        "Thanh_Tien": 6006134983
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 188,
        "DVT": "Viên",
        "Don_Gia": 16891,
        "Thanh_Tien": 3175508
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 51,
        "DVT": "Viên",
        "Don_Gia": 240030,
        "Thanh_Tien": 12241530
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 408,
        "DVT": "Lọ",
        "Don_Gia": 44078,
        "Thanh_Tien": 17983824
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 53,
        "DVT": "Xịt",
        "Don_Gia": 27996,
        "Thanh_Tien": 1483788
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 39,
        "DVT": "Viên",
        "Don_Gia": 15490977,
        "Thanh_Tien": 604148103
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 43,
        "DVT": "Viên",
        "Don_Gia": 23117,
        "Thanh_Tien": 994031
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 385,
        "DVT": "Viên",
        "Don_Gia": 11298,
        "Thanh_Tien": 4349730
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 23,
        "DVT": "Lọ",
        "Don_Gia": 37433,
        "Thanh_Tien": 860959
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 38,
        "DVT": "Ống",
        "Don_Gia": 14515647,
        "Thanh_Tien": 551594586
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 34,
        "DVT": "Viên",
        "Don_Gia": 19238,
        "Thanh_Tien": 654092
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 472,
        "DVT": "Viên",
        "Don_Gia": 7812,
        "Thanh_Tien": 3687264
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 17,
        "DVT": "Viên",
        "Don_Gia": 14311,
        "Thanh_Tien": 243287
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
    "Tong_Tien": 7447484465,
    "Items": [
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 305,
        "DVT": "Ống",
        "Don_Gia": 5431630,
        "Thanh_Tien": 1656647150
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 229,
        "DVT": "Viên",
        "Don_Gia": 18076,
        "Thanh_Tien": 4139404
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 311,
        "DVT": "Lọ",
        "Don_Gia": 243581,
        "Thanh_Tien": 75753691
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 85,
        "DVT": "Viên",
        "Don_Gia": 16295479,
        "Thanh_Tien": 1385115715
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 308,
        "DVT": "Viên",
        "Don_Gia": 24937,
        "Thanh_Tien": 7680596
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 434,
        "DVT": "Viên",
        "Don_Gia": 64452,
        "Thanh_Tien": 27972168
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 113,
        "DVT": "Ống",
        "Don_Gia": 37966157,
        "Thanh_Tien": 4290175741
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
    "Tong_Tien": 45802591645,
    "Items": [
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 489,
        "DVT": "Ống",
        "Don_Gia": 40109493,
        "Thanh_Tien": 19613542077
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 258,
        "DVT": "Lọ",
        "Don_Gia": 19200070,
        "Thanh_Tien": 4953618060
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 99,
        "DVT": "Viên",
        "Don_Gia": 18960,
        "Thanh_Tien": 1877040
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 106,
        "DVT": "Viên",
        "Don_Gia": 22658,
        "Thanh_Tien": 2401748
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 247,
        "DVT": "Ống",
        "Don_Gia": 30079257,
        "Thanh_Tien": 7429576479
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 364,
        "DVT": "Chai",
        "Don_Gia": 51146,
        "Thanh_Tien": 18617144
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 53,
        "DVT": "Lọ",
        "Don_Gia": 37627,
        "Thanh_Tien": 1994231
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 62,
        "DVT": "Lọ",
        "Don_Gia": 63753,
        "Thanh_Tien": 3952686
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 446,
        "DVT": "Ống",
        "Don_Gia": 21881387,
        "Thanh_Tien": 9759098602
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 241,
        "DVT": "Ống",
        "Don_Gia": 16216725,
        "Thanh_Tien": 3908230725
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 367,
        "DVT": "Viên",
        "Don_Gia": 247140,
        "Thanh_Tien": 90700380
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 442,
        "DVT": "Viên",
        "Don_Gia": 13643,
        "Thanh_Tien": 6030206
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 450,
        "DVT": "Viên",
        "Don_Gia": 11822,
        "Thanh_Tien": 5319900
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 191,
        "DVT": "Viên",
        "Don_Gia": 37361,
        "Thanh_Tien": 7135951
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 32,
        "DVT": "Viên",
        "Don_Gia": 15513,
        "Thanh_Tien": 496416
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
    "Tong_Tien": 4916955004,
    "Items": [
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 401,
        "DVT": "Viên",
        "Don_Gia": 16965,
        "Thanh_Tien": 6802965
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 47,
        "DVT": "Ống",
        "Don_Gia": 36186255,
        "Thanh_Tien": 1700753985
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 34,
        "DVT": "Lọ",
        "Don_Gia": 17144952,
        "Thanh_Tien": 582928368
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 465,
        "DVT": "Lọ",
        "Don_Gia": 264058,
        "Thanh_Tien": 122786970
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 441,
        "DVT": "Lọ",
        "Don_Gia": 26426,
        "Thanh_Tien": 11653866
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 60,
        "DVT": "Tuýp",
        "Don_Gia": 39712,
        "Thanh_Tien": 2382720
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 380,
        "DVT": "Viên",
        "Don_Gia": 225919,
        "Thanh_Tien": 85849220
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 461,
        "DVT": "Ống",
        "Don_Gia": 5214310,
        "Thanh_Tien": 2403796910
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
    "Tong_Tien": 8088621068,
    "Items": [
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 144,
        "DVT": "Viên",
        "Don_Gia": 6476,
        "Thanh_Tien": 932544
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 138,
        "DVT": "Xịt",
        "Don_Gia": 25914,
        "Thanh_Tien": 3576132
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 124,
        "DVT": "Lọ",
        "Don_Gia": 16485,
        "Thanh_Tien": 2044140
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 139,
        "DVT": "Lọ",
        "Don_Gia": 29202,
        "Thanh_Tien": 4059078
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 81,
        "DVT": "Ống",
        "Don_Gia": 27517702,
        "Thanh_Tien": 2228933862
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 29,
        "DVT": "Viên",
        "Don_Gia": 23198,
        "Thanh_Tien": 672742
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 109,
        "DVT": "Tuýp",
        "Don_Gia": 38929,
        "Thanh_Tien": 4243261
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 159,
        "DVT": "Lọ",
        "Don_Gia": 42564,
        "Thanh_Tien": 6767676
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 499,
        "DVT": "Viên",
        "Don_Gia": 252166,
        "Thanh_Tien": 125830834
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 127,
        "DVT": "Lọ",
        "Don_Gia": 250301,
        "Thanh_Tien": 31788227
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 413,
        "DVT": "Ống",
        "Don_Gia": 5726431,
        "Thanh_Tien": 2365016003
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 497,
        "DVT": "Viên",
        "Don_Gia": 66722,
        "Thanh_Tien": 33160834
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 209,
        "DVT": "Viên",
        "Don_Gia": 15697437,
        "Thanh_Tien": 3280764333
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 102,
        "DVT": "Viên",
        "Don_Gia": 8151,
        "Thanh_Tien": 831402
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
    "Tong_Tien": 18025128122,
    "Items": [
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 290,
        "DVT": "Lọ",
        "Don_Gia": 14922,
        "Thanh_Tien": 4327380
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 241,
        "DVT": "Viên",
        "Don_Gia": 13624,
        "Thanh_Tien": 3283384
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 117,
        "DVT": "Ống",
        "Don_Gia": 15661632,
        "Thanh_Tien": 1832410944
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 82,
        "DVT": "Chai",
        "Don_Gia": 45055,
        "Thanh_Tien": 3694510
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 374,
        "DVT": "Tuýp",
        "Don_Gia": 35516,
        "Thanh_Tien": 13282984
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 464,
        "DVT": "Ống",
        "Don_Gia": 27851571,
        "Thanh_Tien": 12923128944
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 252,
        "DVT": "Xịt",
        "Don_Gia": 27803,
        "Thanh_Tien": 7006356
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 90,
        "DVT": "Viên",
        "Don_Gia": 12818,
        "Thanh_Tien": 1153620
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 189,
        "DVT": "Lọ",
        "Don_Gia": 17020069,
        "Thanh_Tien": 3216793041
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 158,
        "DVT": "Viên",
        "Don_Gia": 25275,
        "Thanh_Tien": 3993450
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 311,
        "DVT": "Viên",
        "Don_Gia": 51619,
        "Thanh_Tien": 16053509
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
    "Tong_Tien": 18533538307,
    "Items": [
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 221,
        "DVT": "Chai",
        "Don_Gia": 325718,
        "Thanh_Tien": 71983678
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 336,
        "DVT": "Ống",
        "Don_Gia": 28112121,
        "Thanh_Tien": 9445672656
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 499,
        "DVT": "Viên",
        "Don_Gia": 25821,
        "Thanh_Tien": 12884679
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 410,
        "DVT": "Viên",
        "Don_Gia": 6366,
        "Thanh_Tien": 2610060
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 126,
        "DVT": "Ống",
        "Don_Gia": 38318290,
        "Thanh_Tien": 4828104540
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 130,
        "DVT": "Viên",
        "Don_Gia": 14002,
        "Thanh_Tien": 1820260
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 311,
        "DVT": "Viên",
        "Don_Gia": 17689,
        "Thanh_Tien": 5501279
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 174,
        "DVT": "Ống",
        "Don_Gia": 23814752,
        "Thanh_Tien": 4143766848
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 157,
        "DVT": "Lọ",
        "Don_Gia": 29288,
        "Thanh_Tien": 4598216
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 252,
        "DVT": "Viên",
        "Don_Gia": 7533,
        "Thanh_Tien": 1898316
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 443,
        "DVT": "Lọ",
        "Don_Gia": 11705,
        "Thanh_Tien": 5185315
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 215,
        "DVT": "Lọ",
        "Don_Gia": 44244,
        "Thanh_Tien": 9512460
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
    "Tong_Tien": 6891822808,
    "Items": [
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 268,
        "DVT": "Ống",
        "Don_Gia": 5244119,
        "Thanh_Tien": 1405423892
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 185,
        "DVT": "Ống",
        "Don_Gia": 24533847,
        "Thanh_Tien": 4538761695
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 87,
        "DVT": "Viên",
        "Don_Gia": 64239,
        "Thanh_Tien": 5588793
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 320,
        "DVT": "Lọ",
        "Don_Gia": 11933,
        "Thanh_Tien": 3818560
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 341,
        "DVT": "Lọ",
        "Don_Gia": 27099,
        "Thanh_Tien": 9240759
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 54,
        "DVT": "Viên",
        "Don_Gia": 16654171,
        "Thanh_Tien": 899325234
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 290,
        "DVT": "Lọ",
        "Don_Gia": 36844,
        "Thanh_Tien": 10684760
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 237,
        "DVT": "Viên",
        "Don_Gia": 19907,
        "Thanh_Tien": 4717959
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 377,
        "DVT": "Tuýp",
        "Don_Gia": 37828,
        "Thanh_Tien": 14261156
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
    "Tong_Tien": 26124548754,
    "Items": [
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 266,
        "DVT": "Tuýp",
        "Don_Gia": 36116,
        "Thanh_Tien": 9606856
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 132,
        "DVT": "Viên",
        "Don_Gia": 54174,
        "Thanh_Tien": 7150968
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 438,
        "DVT": "Viên",
        "Don_Gia": 12953,
        "Thanh_Tien": 5673414
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 213,
        "DVT": "Lọ",
        "Don_Gia": 17449849,
        "Thanh_Tien": 3716817837
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 11,
        "DVT": "Viên",
        "Don_Gia": 17238393,
        "Thanh_Tien": 189622323
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 166,
        "DVT": "Ống",
        "Don_Gia": 29542465,
        "Thanh_Tien": 4904049190
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 345,
        "DVT": "Viên",
        "Don_Gia": 24965,
        "Thanh_Tien": 8612925
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 66,
        "DVT": "Viên",
        "Don_Gia": 8528,
        "Thanh_Tien": 562848
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 92,
        "DVT": "Xịt",
        "Don_Gia": 26638,
        "Thanh_Tien": 2450696
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 149,
        "DVT": "Chai",
        "Don_Gia": 322333,
        "Thanh_Tien": 48027617
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 371,
        "DVT": "Viên",
        "Don_Gia": 25955562,
        "Thanh_Tien": 9629513502
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 486,
        "DVT": "Ống",
        "Don_Gia": 15642923,
        "Thanh_Tien": 7602460578
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
    "Tong_Tien": 35892654142,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 389,
        "DVT": "Ống",
        "Don_Gia": 29006904,
        "Thanh_Tien": 11283685656
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 126,
        "DVT": "Viên",
        "Don_Gia": 19755,
        "Thanh_Tien": 2489130
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 310,
        "DVT": "Viên",
        "Don_Gia": 15040876,
        "Thanh_Tien": 4662671560
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 415,
        "DVT": "Ống",
        "Don_Gia": 5496489,
        "Thanh_Tien": 2281042935
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 316,
        "DVT": "Lọ",
        "Don_Gia": 60152,
        "Thanh_Tien": 19008032
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 106,
        "DVT": "Lọ",
        "Don_Gia": 18283851,
        "Thanh_Tien": 1938088206
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 98,
        "DVT": "Viên",
        "Don_Gia": 22543,
        "Thanh_Tien": 2209214
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 344,
        "DVT": "Xịt",
        "Don_Gia": 25233,
        "Thanh_Tien": 8680152
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 386,
        "DVT": "Lọ",
        "Don_Gia": 15918,
        "Thanh_Tien": 6144348
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 457,
        "DVT": "Viên",
        "Don_Gia": 13051,
        "Thanh_Tien": 5964307
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 14,
        "DVT": "Lọ",
        "Don_Gia": 42764,
        "Thanh_Tien": 598696
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 21,
        "DVT": "Viên",
        "Don_Gia": 16868,
        "Thanh_Tien": 354228
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 418,
        "DVT": "Ống",
        "Don_Gia": 37516071,
        "Thanh_Tien": 15681717678
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
    "Tong_Tien": 23621343302,
    "Items": [
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 109,
        "DVT": "Viên",
        "Don_Gia": 35825,
        "Thanh_Tien": 3904925
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 490,
        "DVT": "Lọ",
        "Don_Gia": 26444,
        "Thanh_Tien": 12957560
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 378,
        "DVT": "Ống",
        "Don_Gia": 5651910,
        "Thanh_Tien": 2136421980
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 431,
        "DVT": "Viên",
        "Don_Gia": 15688597,
        "Thanh_Tien": 6761785307
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 362,
        "DVT": "Ống",
        "Don_Gia": 40625065,
        "Thanh_Tien": 14706273530
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
    "Tong_Tien": 18260142087,
    "Items": [
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 38,
        "DVT": "Lọ",
        "Don_Gia": 34762,
        "Thanh_Tien": 1320956
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 166,
        "DVT": "Ống",
        "Don_Gia": 27593472,
        "Thanh_Tien": 4580516352
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 238,
        "DVT": "Viên",
        "Don_Gia": 12846,
        "Thanh_Tien": 3057348
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 206,
        "DVT": "Lọ",
        "Don_Gia": 18151931,
        "Thanh_Tien": 3739297786
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 101,
        "DVT": "Chai",
        "Don_Gia": 341999,
        "Thanh_Tien": 34541899
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 420,
        "DVT": "Ống",
        "Don_Gia": 14614496,
        "Thanh_Tien": 6138088320
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 214,
        "DVT": "Viên",
        "Don_Gia": 15368063,
        "Thanh_Tien": 3288765482
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 426,
        "DVT": "Viên",
        "Don_Gia": 236288,
        "Thanh_Tien": 100658688
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 326,
        "DVT": "Viên",
        "Don_Gia": 33596,
        "Thanh_Tien": 10952296
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 149,
        "DVT": "Chai",
        "Don_Gia": 50039,
        "Thanh_Tien": 7455811
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 66,
        "DVT": "Ống",
        "Don_Gia": 5147576,
        "Thanh_Tien": 339740016
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 42,
        "DVT": "Viên",
        "Don_Gia": 13751,
        "Thanh_Tien": 577542
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 311,
        "DVT": "Lọ",
        "Don_Gia": 27279,
        "Thanh_Tien": 8483769
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 220,
        "DVT": "Viên",
        "Don_Gia": 6201,
        "Thanh_Tien": 1364220
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 286,
        "DVT": "Viên",
        "Don_Gia": 18607,
        "Thanh_Tien": 5321602
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
    "Tong_Tien": 21930281679,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 494,
        "DVT": "Viên",
        "Don_Gia": 25035869,
        "Thanh_Tien": 12367719286
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 420,
        "DVT": "Viên",
        "Don_Gia": 18005,
        "Thanh_Tien": 7562100
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 344,
        "DVT": "Lọ",
        "Don_Gia": 12213,
        "Thanh_Tien": 4201272
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 484,
        "DVT": "Viên",
        "Don_Gia": 6089,
        "Thanh_Tien": 2947076
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 61,
        "DVT": "Viên",
        "Don_Gia": 226240,
        "Thanh_Tien": 13800640
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 148,
        "DVT": "Viên",
        "Don_Gia": 15057087,
        "Thanh_Tien": 2228448876
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 24,
        "DVT": "Xịt",
        "Don_Gia": 25651,
        "Thanh_Tien": 615624
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 48,
        "DVT": "Viên",
        "Don_Gia": 63072,
        "Thanh_Tien": 3027456
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 156,
        "DVT": "Lọ",
        "Don_Gia": 13106,
        "Thanh_Tien": 2044536
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 142,
        "DVT": "Chai",
        "Don_Gia": 326502,
        "Thanh_Tien": 46363284
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 75,
        "DVT": "Lọ",
        "Don_Gia": 63401,
        "Thanh_Tien": 4755075
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 193,
        "DVT": "Ống",
        "Don_Gia": 37429448,
        "Thanh_Tien": 7223883464
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 102,
        "DVT": "Lọ",
        "Don_Gia": 244245,
        "Thanh_Tien": 24912990
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
    "Tong_Tien": 2398693388,
    "Items": [
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 440,
        "DVT": "Lọ",
        "Don_Gia": 15442,
        "Thanh_Tien": 6794480
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 130,
        "DVT": "Viên",
        "Don_Gia": 16831946,
        "Thanh_Tien": 2188152980
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 31,
        "DVT": "Ống",
        "Don_Gia": 5720014,
        "Thanh_Tien": 177320434
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 478,
        "DVT": "Viên",
        "Don_Gia": 13768,
        "Thanh_Tien": 6581104
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 416,
        "DVT": "Viên",
        "Don_Gia": 15836,
        "Thanh_Tien": 6587776
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 339,
        "DVT": "Viên",
        "Don_Gia": 12516,
        "Thanh_Tien": 4242924
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 190,
        "DVT": "Viên",
        "Don_Gia": 18367,
        "Thanh_Tien": 3489730
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 156,
        "DVT": "Viên",
        "Don_Gia": 35410,
        "Thanh_Tien": 5523960
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
    "Tong_Tien": 7457610425,
    "Items": [
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 387,
        "DVT": "Viên",
        "Don_Gia": 64939,
        "Thanh_Tien": 25131393
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 334,
        "DVT": "Viên",
        "Don_Gia": 13113,
        "Thanh_Tien": 4379742
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 332,
        "DVT": "Viên",
        "Don_Gia": 52735,
        "Thanh_Tien": 17508020
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 189,
        "DVT": "Viên",
        "Don_Gia": 26235150,
        "Thanh_Tien": 4958443350
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 211,
        "DVT": "Viên",
        "Don_Gia": 19955,
        "Thanh_Tien": 4210505
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 409,
        "DVT": "Chai",
        "Don_Gia": 336162,
        "Thanh_Tien": 137490258
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 395,
        "DVT": "Lọ",
        "Don_Gia": 61528,
        "Thanh_Tien": 24303560
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 166,
        "DVT": "Viên",
        "Don_Gia": 12563,
        "Thanh_Tien": 2085458
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 58,
        "DVT": "Xịt",
        "Don_Gia": 26708,
        "Thanh_Tien": 1549064
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 77,
        "DVT": "Ống",
        "Don_Gia": 29642975,
        "Thanh_Tien": 2282509075
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
    "Tong_Tien": 10843428765,
    "Items": [
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 77,
        "DVT": "Lọ",
        "Don_Gia": 61793,
        "Thanh_Tien": 4758061
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 152,
        "DVT": "Lọ",
        "Don_Gia": 13794,
        "Thanh_Tien": 2096688
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 120,
        "DVT": "Ống",
        "Don_Gia": 16133180,
        "Thanh_Tien": 1935981600
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 383,
        "DVT": "Viên",
        "Don_Gia": 7908,
        "Thanh_Tien": 3028764
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 25,
        "DVT": "Viên",
        "Don_Gia": 238947,
        "Thanh_Tien": 5973675
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 211,
        "DVT": "Lọ",
        "Don_Gia": 45087,
        "Thanh_Tien": 9513357
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 471,
        "DVT": "Viên",
        "Don_Gia": 50808,
        "Thanh_Tien": 23930568
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 20,
        "DVT": "Viên",
        "Don_Gia": 16465,
        "Thanh_Tien": 329300
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 488,
        "DVT": "Lọ",
        "Don_Gia": 18059141,
        "Thanh_Tien": 8812860808
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 230,
        "DVT": "Viên",
        "Don_Gia": 14289,
        "Thanh_Tien": 3286470
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 288,
        "DVT": "Viên",
        "Don_Gia": 6549,
        "Thanh_Tien": 1886112
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 422,
        "DVT": "Lọ",
        "Don_Gia": 16257,
        "Thanh_Tien": 6860454
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 370,
        "DVT": "Viên",
        "Don_Gia": 61060,
        "Thanh_Tien": 22592200
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 324,
        "DVT": "Viên",
        "Don_Gia": 14061,
        "Thanh_Tien": 4555764
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 224,
        "DVT": "Xịt",
        "Don_Gia": 25781,
        "Thanh_Tien": 5774944
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
    "Tong_Tien": 192032445,
    "Items": [
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 204,
        "DVT": "Viên",
        "Don_Gia": 50269,
        "Thanh_Tien": 10254876
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 387,
        "DVT": "Lọ",
        "Don_Gia": 43934,
        "Thanh_Tien": 17002458
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 458,
        "DVT": "Viên",
        "Don_Gia": 16908,
        "Thanh_Tien": 7743864
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 245,
        "DVT": "Viên",
        "Don_Gia": 19000,
        "Thanh_Tien": 4655000
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 223,
        "DVT": "Viên",
        "Don_Gia": 250413,
        "Thanh_Tien": 55842099
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 18,
        "DVT": "Tuýp",
        "Don_Gia": 39787,
        "Thanh_Tien": 716166
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 278,
        "DVT": "Chai",
        "Don_Gia": 344669,
        "Thanh_Tien": 95817982
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
    "Tong_Tien": 1192156392,
    "Items": [
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 155,
        "DVT": "Lọ",
        "Don_Gia": 255377,
        "Thanh_Tien": 39583435
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 96,
        "DVT": "Viên",
        "Don_Gia": 18371,
        "Thanh_Tien": 1763616
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 196,
        "DVT": "Ống",
        "Don_Gia": 5742933,
        "Thanh_Tien": 1125614868
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 198,
        "DVT": "Viên",
        "Don_Gia": 8582,
        "Thanh_Tien": 1699236
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 187,
        "DVT": "Lọ",
        "Don_Gia": 41639,
        "Thanh_Tien": 7786493
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 298,
        "DVT": "Viên",
        "Don_Gia": 22889,
        "Thanh_Tien": 6820922
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 81,
        "DVT": "Viên",
        "Don_Gia": 14032,
        "Thanh_Tien": 1136592
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 76,
        "DVT": "Lọ",
        "Don_Gia": 12191,
        "Thanh_Tien": 926516
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 34,
        "DVT": "Lọ",
        "Don_Gia": 34031,
        "Thanh_Tien": 1157054
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 90,
        "DVT": "Viên",
        "Don_Gia": 62974,
        "Thanh_Tien": 5667660
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
    "Tong_Tien": 14217908459,
    "Items": [
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 306,
        "DVT": "Lọ",
        "Don_Gia": 13414,
        "Thanh_Tien": 4104684
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 439,
        "DVT": "Viên",
        "Don_Gia": 14241,
        "Thanh_Tien": 6251799
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 427,
        "DVT": "Tuýp",
        "Don_Gia": 37603,
        "Thanh_Tien": 16056481
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 408,
        "DVT": "Viên",
        "Don_Gia": 19442,
        "Thanh_Tien": 7932336
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 195,
        "DVT": "Chai",
        "Don_Gia": 45796,
        "Thanh_Tien": 8930220
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 214,
        "DVT": "Ống",
        "Don_Gia": 29454678,
        "Thanh_Tien": 6303301092
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 113,
        "DVT": "Viên",
        "Don_Gia": 6702,
        "Thanh_Tien": 757326
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 211,
        "DVT": "Viên",
        "Don_Gia": 7515,
        "Thanh_Tien": 1585665
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 389,
        "DVT": "Viên",
        "Don_Gia": 255039,
        "Thanh_Tien": 99210171
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 109,
        "DVT": "Viên",
        "Don_Gia": 54199,
        "Thanh_Tien": 5907691
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 202,
        "DVT": "Ống",
        "Don_Gia": 38024859,
        "Thanh_Tien": 7681021518
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 307,
        "DVT": "Lọ",
        "Don_Gia": 269868,
        "Thanh_Tien": 82849476
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
    "Tong_Tien": 27446814558,
    "Items": [
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 270,
        "DVT": "Ống",
        "Don_Gia": 5246844,
        "Thanh_Tien": 1416647880
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 374,
        "DVT": "Ống",
        "Don_Gia": 36698482,
        "Thanh_Tien": 13725232268
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 373,
        "DVT": "Viên",
        "Don_Gia": 25189000,
        "Thanh_Tien": 9395497000
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 414,
        "DVT": "Tuýp",
        "Don_Gia": 39457,
        "Thanh_Tien": 16335198
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 414,
        "DVT": "Viên",
        "Don_Gia": 18382,
        "Thanh_Tien": 7610148
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 315,
        "DVT": "Xịt",
        "Don_Gia": 26685,
        "Thanh_Tien": 8405775
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 191,
        "DVT": "Viên",
        "Don_Gia": 15063279,
        "Thanh_Tien": 2877086289
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
    "Tong_Tien": 8179594766,
    "Items": [
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 380,
        "DVT": "Viên",
        "Don_Gia": 12546,
        "Thanh_Tien": 4767480
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 277,
        "DVT": "Lọ",
        "Don_Gia": 12381,
        "Thanh_Tien": 3429537
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 373,
        "DVT": "Lọ",
        "Don_Gia": 66464,
        "Thanh_Tien": 24791072
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 261,
        "DVT": "Lọ",
        "Don_Gia": 16167,
        "Thanh_Tien": 4219587
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 214,
        "DVT": "Viên",
        "Don_Gia": 6160,
        "Thanh_Tien": 1318240
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 102,
        "DVT": "Viên",
        "Don_Gia": 26705897,
        "Thanh_Tien": 2724001494
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 34,
        "DVT": "Lọ",
        "Don_Gia": 27156,
        "Thanh_Tien": 923304
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 420,
        "DVT": "Viên",
        "Don_Gia": 51351,
        "Thanh_Tien": 21567420
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 176,
        "DVT": "Viên",
        "Don_Gia": 16649,
        "Thanh_Tien": 2930224
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 50,
        "DVT": "Lọ",
        "Don_Gia": 13037,
        "Thanh_Tien": 651850
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 180,
        "DVT": "Ống",
        "Don_Gia": 29217947,
        "Thanh_Tien": 5259230460
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 414,
        "DVT": "Chai",
        "Don_Gia": 316895,
        "Thanh_Tien": 131194530
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 68,
        "DVT": "Viên",
        "Don_Gia": 8376,
        "Thanh_Tien": 569568
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
    "Tong_Tien": 38191793406,
    "Items": [
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 227,
        "DVT": "Lọ",
        "Don_Gia": 242456,
        "Thanh_Tien": 55037512
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 498,
        "DVT": "Viên",
        "Don_Gia": 25910677,
        "Thanh_Tien": 12903517146
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 154,
        "DVT": "Viên",
        "Don_Gia": 6586,
        "Thanh_Tien": 1014244
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 137,
        "DVT": "Lọ",
        "Don_Gia": 65382,
        "Thanh_Tien": 8957334
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 329,
        "DVT": "Ống",
        "Don_Gia": 36898228,
        "Thanh_Tien": 12139517012
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 415,
        "DVT": "Viên",
        "Don_Gia": 256093,
        "Thanh_Tien": 106278595
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 472,
        "DVT": "Ống",
        "Don_Gia": 24194353,
        "Thanh_Tien": 11419734616
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 428,
        "DVT": "Lọ",
        "Don_Gia": 15002,
        "Thanh_Tien": 6420856
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 106,
        "DVT": "Tuýp",
        "Don_Gia": 38611,
        "Thanh_Tien": 4092766
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 421,
        "DVT": "Lọ",
        "Don_Gia": 12376,
        "Thanh_Tien": 5210296
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 96,
        "DVT": "Ống",
        "Don_Gia": 16054365,
        "Thanh_Tien": 1541219040
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 63,
        "DVT": "Viên",
        "Don_Gia": 12603,
        "Thanh_Tien": 793989
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
    "Tong_Tien": 706050808,
    "Items": [
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 94,
        "DVT": "Viên",
        "Don_Gia": 63739,
        "Thanh_Tien": 5991466
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 462,
        "DVT": "Chai",
        "Don_Gia": 45262,
        "Thanh_Tien": 20911044
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 114,
        "DVT": "Ống",
        "Don_Gia": 5071504,
        "Thanh_Tien": 578151456
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 198,
        "DVT": "Lọ",
        "Don_Gia": 26079,
        "Thanh_Tien": 5163642
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 400,
        "DVT": "Viên",
        "Don_Gia": 239583,
        "Thanh_Tien": 95833200
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
    "Tong_Tien": 13372500453,
    "Items": [
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 355,
        "DVT": "Chai",
        "Don_Gia": 50050,
        "Thanh_Tien": 17767750
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 254,
        "DVT": "Viên",
        "Don_Gia": 15898,
        "Thanh_Tien": 4038092
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 128,
        "DVT": "Ống",
        "Don_Gia": 5015480,
        "Thanh_Tien": 641981440
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 147,
        "DVT": "Lọ",
        "Don_Gia": 16779,
        "Thanh_Tien": 2466513
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 488,
        "DVT": "Viên",
        "Don_Gia": 25893887,
        "Thanh_Tien": 12636216856
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 278,
        "DVT": "Viên",
        "Don_Gia": 245859,
        "Thanh_Tien": 68348802
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 205,
        "DVT": "Viên",
        "Don_Gia": 8200,
        "Thanh_Tien": 1681000
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
    "Tong_Tien": 14049666012,
    "Items": [
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 80,
        "DVT": "Tuýp",
        "Don_Gia": 39170,
        "Thanh_Tien": 3133600
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 228,
        "DVT": "Ống",
        "Don_Gia": 26955384,
        "Thanh_Tien": 6145827552
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 128,
        "DVT": "Ống",
        "Don_Gia": 37288576,
        "Thanh_Tien": 4772937728
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 190,
        "DVT": "Viên",
        "Don_Gia": 16229732,
        "Thanh_Tien": 3083649080
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 140,
        "DVT": "Viên",
        "Don_Gia": 13278,
        "Thanh_Tien": 1858920
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 21,
        "DVT": "Lọ",
        "Don_Gia": 27349,
        "Thanh_Tien": 574329
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 331,
        "DVT": "Viên",
        "Don_Gia": 62954,
        "Thanh_Tien": 20837774
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 105,
        "DVT": "Lọ",
        "Don_Gia": 15020,
        "Thanh_Tien": 1577100
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 259,
        "DVT": "Lọ",
        "Don_Gia": 36432,
        "Thanh_Tien": 9435888
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 391,
        "DVT": "Viên",
        "Don_Gia": 25151,
        "Thanh_Tien": 9834041
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
    "Tong_Tien": 8492158723,
    "Items": [
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 383,
        "DVT": "Lọ",
        "Don_Gia": 13655,
        "Thanh_Tien": 5229865
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 434,
        "DVT": "Lọ",
        "Don_Gia": 19030771,
        "Thanh_Tien": 8259354614
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 380,
        "DVT": "Viên",
        "Don_Gia": 13869,
        "Thanh_Tien": 5270220
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 354,
        "DVT": "Viên",
        "Don_Gia": 34085,
        "Thanh_Tien": 12066090
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 192,
        "DVT": "Lọ",
        "Don_Gia": 275225,
        "Thanh_Tien": 52843200
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 327,
        "DVT": "Lọ",
        "Don_Gia": 15194,
        "Thanh_Tien": 4968438
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 475,
        "DVT": "Chai",
        "Don_Gia": 318500,
        "Thanh_Tien": 151287500
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 17,
        "DVT": "Viên",
        "Don_Gia": 66988,
        "Thanh_Tien": 1138796
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
    "Tong_Tien": 12169818802,
    "Items": [
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 347,
        "DVT": "Lọ",
        "Don_Gia": 28865,
        "Thanh_Tien": 10016155
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 69,
        "DVT": "Ống",
        "Don_Gia": 35811529,
        "Thanh_Tien": 2470995501
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 471,
        "DVT": "Ống",
        "Don_Gia": 16288507,
        "Thanh_Tien": 7671886797
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 360,
        "DVT": "Ống",
        "Don_Gia": 5542354,
        "Thanh_Tien": 1995247440
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 313,
        "DVT": "Lọ",
        "Don_Gia": 64053,
        "Thanh_Tien": 20048589
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 60,
        "DVT": "Xịt",
        "Don_Gia": 27072,
        "Thanh_Tien": 1624320
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
    "Tong_Tien": 8882454442,
    "Items": [
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 462,
        "DVT": "Viên",
        "Don_Gia": 68156,
        "Thanh_Tien": 31488072
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 330,
        "DVT": "Tuýp",
        "Don_Gia": 36370,
        "Thanh_Tien": 12002100
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 123,
        "DVT": "Lọ",
        "Don_Gia": 16277,
        "Thanh_Tien": 2002071
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 220,
        "DVT": "Ống",
        "Don_Gia": 5388486,
        "Thanh_Tien": 1185466920
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 274,
        "DVT": "Viên",
        "Don_Gia": 51285,
        "Thanh_Tien": 14052090
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 79,
        "DVT": "Lọ",
        "Don_Gia": 17484797,
        "Thanh_Tien": 1381298963
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 426,
        "DVT": "Ống",
        "Don_Gia": 14610206,
        "Thanh_Tien": 6223947756
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 308,
        "DVT": "Viên",
        "Don_Gia": 13746,
        "Thanh_Tien": 4233768
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 314,
        "DVT": "Viên",
        "Don_Gia": 25163,
        "Thanh_Tien": 7901182
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 374,
        "DVT": "Lọ",
        "Don_Gia": 28380,
        "Thanh_Tien": 10614120
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 200,
        "DVT": "Chai",
        "Don_Gia": 47237,
        "Thanh_Tien": 9447400
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
    "Tong_Tien": 16536549951,
    "Items": [
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 285,
        "DVT": "Lọ",
        "Don_Gia": 38811,
        "Thanh_Tien": 11061135
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 390,
        "DVT": "Ống",
        "Don_Gia": 28248317,
        "Thanh_Tien": 11016843630
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 425,
        "DVT": "Viên",
        "Don_Gia": 6516,
        "Thanh_Tien": 2769300
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 150,
        "DVT": "Lọ",
        "Don_Gia": 15359,
        "Thanh_Tien": 2303850
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 356,
        "DVT": "Viên",
        "Don_Gia": 35209,
        "Thanh_Tien": 12534404
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 192,
        "DVT": "Viên",
        "Don_Gia": 16428348,
        "Thanh_Tien": 3154242816
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 394,
        "DVT": "Viên",
        "Don_Gia": 15715,
        "Thanh_Tien": 6191710
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 421,
        "DVT": "Viên",
        "Don_Gia": 13479,
        "Thanh_Tien": 5674659
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 424,
        "DVT": "Ống",
        "Don_Gia": 5225335,
        "Thanh_Tien": 2215542040
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 237,
        "DVT": "Chai",
        "Don_Gia": 341076,
        "Thanh_Tien": 80835012
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 437,
        "DVT": "Lọ",
        "Don_Gia": 65335,
        "Thanh_Tien": 28551395
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
    "Tong_Tien": 5428065366,
    "Items": [
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 71,
        "DVT": "Lọ",
        "Don_Gia": 11367,
        "Thanh_Tien": 807057
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 144,
        "DVT": "Viên",
        "Don_Gia": 6695,
        "Thanh_Tien": 964080
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 113,
        "DVT": "Lọ",
        "Don_Gia": 38992,
        "Thanh_Tien": 4406096
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 24,
        "DVT": "Viên",
        "Don_Gia": 12306,
        "Thanh_Tien": 295344
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 46,
        "DVT": "Viên",
        "Don_Gia": 25499719,
        "Thanh_Tien": 1172987074
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 133,
        "DVT": "Viên",
        "Don_Gia": 18366,
        "Thanh_Tien": 2442678
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 153,
        "DVT": "Viên",
        "Don_Gia": 13533,
        "Thanh_Tien": 2070549
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 332,
        "DVT": "Lọ",
        "Don_Gia": 15371,
        "Thanh_Tien": 5103172
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 94,
        "DVT": "Ống",
        "Don_Gia": 27678562,
        "Thanh_Tien": 2601784828
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 159,
        "DVT": "Viên",
        "Don_Gia": 253548,
        "Thanh_Tien": 40314132
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 348,
        "DVT": "Tuýp",
        "Don_Gia": 36040,
        "Thanh_Tien": 12541920
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 340,
        "DVT": "Chai",
        "Don_Gia": 324945,
        "Thanh_Tien": 110481300
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 259,
        "DVT": "Ống",
        "Don_Gia": 5568754,
        "Thanh_Tien": 1442307286
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 129,
        "DVT": "Lọ",
        "Don_Gia": 244650,
        "Thanh_Tien": 31559850
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
    "Tong_Tien": 24655946458,
    "Items": [
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 108,
        "DVT": "Ống",
        "Don_Gia": 23160648,
        "Thanh_Tien": 2501349984
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 72,
        "DVT": "Lọ",
        "Don_Gia": 11338,
        "Thanh_Tien": 816336
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 460,
        "DVT": "Ống",
        "Don_Gia": 27136146,
        "Thanh_Tien": 12482627160
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 499,
        "DVT": "Chai",
        "Don_Gia": 49842,
        "Thanh_Tien": 24871158
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 225,
        "DVT": "Viên",
        "Don_Gia": 15224822,
        "Thanh_Tien": 3425584950
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 66,
        "DVT": "Lọ",
        "Don_Gia": 35344,
        "Thanh_Tien": 2332704
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 150,
        "DVT": "Lọ",
        "Don_Gia": 67252,
        "Thanh_Tien": 10087800
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 72,
        "DVT": "Lọ",
        "Don_Gia": 14643,
        "Thanh_Tien": 1054296
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 155,
        "DVT": "Ống",
        "Don_Gia": 40046594,
        "Thanh_Tien": 6207222070
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
    "Tong_Tien": 20957476843,
    "Items": [
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 405,
        "DVT": "Viên",
        "Don_Gia": 7772,
        "Thanh_Tien": 3147660
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 156,
        "DVT": "Viên",
        "Don_Gia": 56874,
        "Thanh_Tien": 8872344
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 393,
        "DVT": "Lọ",
        "Don_Gia": 15745,
        "Thanh_Tien": 6187785
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 489,
        "DVT": "Viên",
        "Don_Gia": 15462,
        "Thanh_Tien": 7560918
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 381,
        "DVT": "Viên",
        "Don_Gia": 26378694,
        "Thanh_Tien": 10050282414
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 132,
        "DVT": "Ống",
        "Don_Gia": 40879813,
        "Thanh_Tien": 5396135316
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 391,
        "DVT": "Chai",
        "Don_Gia": 49511,
        "Thanh_Tien": 19358801
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 445,
        "DVT": "Lọ",
        "Don_Gia": 11942,
        "Thanh_Tien": 5314190
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 122,
        "DVT": "Lọ",
        "Don_Gia": 26363,
        "Thanh_Tien": 3216286
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 235,
        "DVT": "Viên",
        "Don_Gia": 63213,
        "Thanh_Tien": 14855055
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 106,
        "DVT": "Ống",
        "Don_Gia": 22959662,
        "Thanh_Tien": 2433724172
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 203,
        "DVT": "Ống",
        "Don_Gia": 14645392,
        "Thanh_Tien": 2973014576
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 127,
        "DVT": "Lọ",
        "Don_Gia": 65836,
        "Thanh_Tien": 8361172
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 433,
        "DVT": "Lọ",
        "Don_Gia": 45688,
        "Thanh_Tien": 19782904
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 290,
        "DVT": "Xịt",
        "Don_Gia": 26425,
        "Thanh_Tien": 7663250
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
    "Tong_Tien": 27180220761,
    "Items": [
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 91,
        "DVT": "Viên",
        "Don_Gia": 6498,
        "Thanh_Tien": 591318
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 282,
        "DVT": "Lọ",
        "Don_Gia": 256298,
        "Thanh_Tien": 72276036
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 225,
        "DVT": "Chai",
        "Don_Gia": 334062,
        "Thanh_Tien": 75163950
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 419,
        "DVT": "Lọ",
        "Don_Gia": 18790148,
        "Thanh_Tien": 7873072012
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 17,
        "DVT": "Viên",
        "Don_Gia": 17158770,
        "Thanh_Tien": 291699090
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 284,
        "DVT": "Viên",
        "Don_Gia": 27218906,
        "Thanh_Tien": 7730169304
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 110,
        "DVT": "Lọ",
        "Don_Gia": 13829,
        "Thanh_Tien": 1521190
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 171,
        "DVT": "Viên",
        "Don_Gia": 11585,
        "Thanh_Tien": 1981035
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 216,
        "DVT": "Chai",
        "Don_Gia": 50840,
        "Thanh_Tien": 10981440
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 344,
        "DVT": "Lọ",
        "Don_Gia": 11319,
        "Thanh_Tien": 3893736
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 114,
        "DVT": "Ống",
        "Don_Gia": 5083723,
        "Thanh_Tien": 579544422
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 446,
        "DVT": "Viên",
        "Don_Gia": 23150,
        "Thanh_Tien": 10324900
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 440,
        "DVT": "Ống",
        "Don_Gia": 23885671,
        "Thanh_Tien": 10509695240
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 424,
        "DVT": "Tuýp",
        "Don_Gia": 37791,
        "Thanh_Tien": 16023384
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 236,
        "DVT": "Viên",
        "Don_Gia": 13914,
        "Thanh_Tien": 3283704
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
    "Tong_Tien": 13762685810,
    "Items": [
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 55,
        "DVT": "Lọ",
        "Don_Gia": 246813,
        "Thanh_Tien": 13574715
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 330,
        "DVT": "Viên",
        "Don_Gia": 36869,
        "Thanh_Tien": 12166770
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 200,
        "DVT": "Viên",
        "Don_Gia": 17056304,
        "Thanh_Tien": 3411260800
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 231,
        "DVT": "Lọ",
        "Don_Gia": 16970241,
        "Thanh_Tien": 3920125671
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 118,
        "DVT": "Ống",
        "Don_Gia": 40805491,
        "Thanh_Tien": 4815047938
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 236,
        "DVT": "Viên",
        "Don_Gia": 16375,
        "Thanh_Tien": 3864500
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 185,
        "DVT": "Lọ",
        "Don_Gia": 34671,
        "Thanh_Tien": 6414135
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 86,
        "DVT": "Lọ",
        "Don_Gia": 29466,
        "Thanh_Tien": 2534076
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 388,
        "DVT": "Viên",
        "Don_Gia": 13506,
        "Thanh_Tien": 5240328
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 496,
        "DVT": "Viên",
        "Don_Gia": 67090,
        "Thanh_Tien": 33276640
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 71,
        "DVT": "Lọ",
        "Don_Gia": 42168,
        "Thanh_Tien": 2993928
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 265,
        "DVT": "Ống",
        "Don_Gia": 5677165,
        "Thanh_Tien": 1504448725
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 463,
        "DVT": "Viên",
        "Don_Gia": 25175,
        "Thanh_Tien": 11656025
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 296,
        "DVT": "Viên",
        "Don_Gia": 11294,
        "Thanh_Tien": 3343024
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 365,
        "DVT": "Chai",
        "Don_Gia": 45859,
        "Thanh_Tien": 16738535
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
    "Tong_Tien": 13343630749,
    "Items": [
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 231,
        "DVT": "Ống",
        "Don_Gia": 15746698,
        "Thanh_Tien": 3637487238
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 19,
        "DVT": "Chai",
        "Don_Gia": 46434,
        "Thanh_Tien": 882246
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 250,
        "DVT": "Chai",
        "Don_Gia": 304811,
        "Thanh_Tien": 76202750
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 216,
        "DVT": "Viên",
        "Don_Gia": 22655,
        "Thanh_Tien": 4893480
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 324,
        "DVT": "Viên",
        "Don_Gia": 257227,
        "Thanh_Tien": 83341548
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 402,
        "DVT": "Lọ",
        "Don_Gia": 265468,
        "Thanh_Tien": 106718136
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 497,
        "DVT": "Lọ",
        "Don_Gia": 11726,
        "Thanh_Tien": 5827822
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 370,
        "DVT": "Viên",
        "Don_Gia": 37249,
        "Thanh_Tien": 13782130
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 55,
        "DVT": "Viên",
        "Don_Gia": 66246,
        "Thanh_Tien": 3643530
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 456,
        "DVT": "Tuýp",
        "Don_Gia": 35175,
        "Thanh_Tien": 16039800
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 20,
        "DVT": "Viên",
        "Don_Gia": 8436,
        "Thanh_Tien": 168720
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 209,
        "DVT": "Viên",
        "Don_Gia": 16756914,
        "Thanh_Tien": 3502195026
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 250,
        "DVT": "Ống",
        "Don_Gia": 23459349,
        "Thanh_Tien": 5864837250
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 417,
        "DVT": "Viên",
        "Don_Gia": 51978,
        "Thanh_Tien": 21674826
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 459,
        "DVT": "Viên",
        "Don_Gia": 12933,
        "Thanh_Tien": 5936247
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
    "Tong_Tien": 20573624428,
    "Items": [
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 382,
        "DVT": "Lọ",
        "Don_Gia": 262198,
        "Thanh_Tien": 100159636
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 68,
        "DVT": "Viên",
        "Don_Gia": 13686,
        "Thanh_Tien": 930648
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 440,
        "DVT": "Xịt",
        "Don_Gia": 26240,
        "Thanh_Tien": 11545600
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 492,
        "DVT": "Ống",
        "Don_Gia": 14683819,
        "Thanh_Tien": 7224438948
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 33,
        "DVT": "Lọ",
        "Don_Gia": 37957,
        "Thanh_Tien": 1252581
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 443,
        "DVT": "Ống",
        "Don_Gia": 27491884,
        "Thanh_Tien": 12178904612
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 478,
        "DVT": "Viên",
        "Don_Gia": 12492,
        "Thanh_Tien": 5971176
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 176,
        "DVT": "Viên",
        "Don_Gia": 16291,
        "Thanh_Tien": 2867216
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 64,
        "DVT": "Lọ",
        "Don_Gia": 27927,
        "Thanh_Tien": 1787328
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 18,
        "DVT": "Viên",
        "Don_Gia": 16933754,
        "Thanh_Tien": 304807572
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 334,
        "DVT": "Viên",
        "Don_Gia": 238044,
        "Thanh_Tien": 79506696
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 122,
        "DVT": "Ống",
        "Don_Gia": 5263076,
        "Thanh_Tien": 642095272
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 41,
        "DVT": "Viên",
        "Don_Gia": 7910,
        "Thanh_Tien": 324310
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 167,
        "DVT": "Viên",
        "Don_Gia": 56599,
        "Thanh_Tien": 9452033
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 400,
        "DVT": "Viên",
        "Don_Gia": 23952,
        "Thanh_Tien": 9580800
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
    "Tong_Tien": 12911872063,
    "Items": [
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 430,
        "DVT": "Viên",
        "Don_Gia": 11012,
        "Thanh_Tien": 4735160
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 303,
        "DVT": "Ống",
        "Don_Gia": 5500639,
        "Thanh_Tien": 1666693617
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 328,
        "DVT": "Tuýp",
        "Don_Gia": 35250,
        "Thanh_Tien": 11562000
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 146,
        "DVT": "Ống",
        "Don_Gia": 24477587,
        "Thanh_Tien": 3573727702
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 272,
        "DVT": "Viên",
        "Don_Gia": 28143947,
        "Thanh_Tien": 7655153584
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
    "Tong_Tien": 21319575487,
    "Items": [
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 23,
        "DVT": "Ống",
        "Don_Gia": 15288073,
        "Thanh_Tien": 351625679
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 19,
        "DVT": "Viên",
        "Don_Gia": 23037,
        "Thanh_Tien": 437703
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 177,
        "DVT": "Viên",
        "Don_Gia": 50562,
        "Thanh_Tien": 8949474
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 221,
        "DVT": "Lọ",
        "Don_Gia": 27266,
        "Thanh_Tien": 6025786
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 361,
        "DVT": "Viên",
        "Don_Gia": 17152,
        "Thanh_Tien": 6191872
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 37,
        "DVT": "Chai",
        "Don_Gia": 48106,
        "Thanh_Tien": 1779922
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 307,
        "DVT": "Viên",
        "Don_Gia": 11094,
        "Thanh_Tien": 3405858
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 227,
        "DVT": "Lọ",
        "Don_Gia": 60721,
        "Thanh_Tien": 13783667
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 234,
        "DVT": "Viên",
        "Don_Gia": 226899,
        "Thanh_Tien": 53094366
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 449,
        "DVT": "Ống",
        "Don_Gia": 23982290,
        "Thanh_Tien": 10768048210
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 32,
        "DVT": "Xịt",
        "Don_Gia": 27270,
        "Thanh_Tien": 872640
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 247,
        "DVT": "Lọ",
        "Don_Gia": 14554,
        "Thanh_Tien": 3594838
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 251,
        "DVT": "Lọ",
        "Don_Gia": 35061,
        "Thanh_Tien": 8800311
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 159,
        "DVT": "Viên",
        "Don_Gia": 6837,
        "Thanh_Tien": 1087083
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 382,
        "DVT": "Ống",
        "Don_Gia": 26418529,
        "Thanh_Tien": 10091878078
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
    "Tong_Tien": 20145209942,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 359,
        "DVT": "Ống",
        "Don_Gia": 26872010,
        "Thanh_Tien": 9647051590
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 494,
        "DVT": "Chai",
        "Don_Gia": 306898,
        "Thanh_Tien": 151607612
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 286,
        "DVT": "Lọ",
        "Don_Gia": 36524,
        "Thanh_Tien": 10445864
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 191,
        "DVT": "Viên",
        "Don_Gia": 16584908,
        "Thanh_Tien": 3167717428
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 300,
        "DVT": "Lọ",
        "Don_Gia": 13201,
        "Thanh_Tien": 3960300
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 472,
        "DVT": "Lọ",
        "Don_Gia": 12296,
        "Thanh_Tien": 5803712
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 16,
        "DVT": "Chai",
        "Don_Gia": 46575,
        "Thanh_Tien": 745200
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 114,
        "DVT": "Viên",
        "Don_Gia": 16778,
        "Thanh_Tien": 1912692
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 312,
        "DVT": "Ống",
        "Don_Gia": 22935787,
        "Thanh_Tien": 7155965544
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
    "Tong_Tien": 63777995419,
    "Items": [
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 292,
        "DVT": "Viên",
        "Don_Gia": 23100,
        "Thanh_Tien": 6745200
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 432,
        "DVT": "Viên",
        "Don_Gia": 26914082,
        "Thanh_Tien": 11626883424
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 317,
        "DVT": "Lọ",
        "Don_Gia": 14390,
        "Thanh_Tien": 4561630
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 407,
        "DVT": "Xịt",
        "Don_Gia": 26944,
        "Thanh_Tien": 10966208
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 311,
        "DVT": "Viên",
        "Don_Gia": 8081,
        "Thanh_Tien": 2513191
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 366,
        "DVT": "Lọ",
        "Don_Gia": 40011,
        "Thanh_Tien": 14644026
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 402,
        "DVT": "Tuýp",
        "Don_Gia": 35544,
        "Thanh_Tien": 14288688
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 365,
        "DVT": "Ống",
        "Don_Gia": 27676625,
        "Thanh_Tien": 10101968125
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 419,
        "DVT": "Ống",
        "Don_Gia": 36510686,
        "Thanh_Tien": 15297977434
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 490,
        "DVT": "Ống",
        "Don_Gia": 24175537,
        "Thanh_Tien": 11846013130
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 342,
        "DVT": "Lọ",
        "Don_Gia": 26751,
        "Thanh_Tien": 9148842
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 101,
        "DVT": "Lọ",
        "Don_Gia": 17207,
        "Thanh_Tien": 1737907
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 350,
        "DVT": "Viên",
        "Don_Gia": 16250437,
        "Thanh_Tien": 5687652950
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 489,
        "DVT": "Lọ",
        "Don_Gia": 18717576,
        "Thanh_Tien": 9152894664
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
    "Tong_Tien": 3762066351,
    "Items": [
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 96,
        "DVT": "Viên",
        "Don_Gia": 64167,
        "Thanh_Tien": 6160032
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 125,
        "DVT": "Ống",
        "Don_Gia": 14874969,
        "Thanh_Tien": 1859371125
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 483,
        "DVT": "Lọ",
        "Don_Gia": 43214,
        "Thanh_Tien": 20872362
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 148,
        "DVT": "Viên",
        "Don_Gia": 36137,
        "Thanh_Tien": 5348276
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 334,
        "DVT": "Ống",
        "Don_Gia": 5597116,
        "Thanh_Tien": 1869436744
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 102,
        "DVT": "Viên",
        "Don_Gia": 8606,
        "Thanh_Tien": 877812
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
    "Tong_Tien": 12120213472,
    "Items": [
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 23,
        "DVT": "Viên",
        "Don_Gia": 244579,
        "Thanh_Tien": 5625317
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 482,
        "DVT": "Viên",
        "Don_Gia": 12237,
        "Thanh_Tien": 5898234
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 436,
        "DVT": "Viên",
        "Don_Gia": 25201,
        "Thanh_Tien": 10987636
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 337,
        "DVT": "Viên",
        "Don_Gia": 13661,
        "Thanh_Tien": 4603757
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 354,
        "DVT": "Viên",
        "Don_Gia": 26922941,
        "Thanh_Tien": 9530721114
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 459,
        "DVT": "Ống",
        "Don_Gia": 5518478,
        "Thanh_Tien": 2532981402
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 476,
        "DVT": "Viên",
        "Don_Gia": 7834,
        "Thanh_Tien": 3728984
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 277,
        "DVT": "Lọ",
        "Don_Gia": 45343,
        "Thanh_Tien": 12560011
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 217,
        "DVT": "Lọ",
        "Don_Gia": 60401,
        "Thanh_Tien": 13107017
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
    "Tong_Tien": 14854347583,
    "Items": [
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 38,
        "DVT": "Tuýp",
        "Don_Gia": 39769,
        "Thanh_Tien": 1511222
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 397,
        "DVT": "Lọ",
        "Don_Gia": 26723,
        "Thanh_Tien": 10609031
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 113,
        "DVT": "Viên",
        "Don_Gia": 50206,
        "Thanh_Tien": 5673278
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 79,
        "DVT": "Viên",
        "Don_Gia": 6556,
        "Thanh_Tien": 517924
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 228,
        "DVT": "Ống",
        "Don_Gia": 28802169,
        "Thanh_Tien": 6566894532
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 197,
        "DVT": "Lọ",
        "Don_Gia": 12477,
        "Thanh_Tien": 2457969
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 299,
        "DVT": "Lọ",
        "Don_Gia": 38235,
        "Thanh_Tien": 11432265
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 243,
        "DVT": "Viên",
        "Don_Gia": 15532947,
        "Thanh_Tien": 3774506121
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 220,
        "DVT": "Chai",
        "Don_Gia": 51106,
        "Thanh_Tien": 11243320
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 304,
        "DVT": "Ống",
        "Don_Gia": 14212298,
        "Thanh_Tien": 4320538592
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 284,
        "DVT": "Viên",
        "Don_Gia": 60831,
        "Thanh_Tien": 17276004
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 201,
        "DVT": "Lọ",
        "Don_Gia": 66821,
        "Thanh_Tien": 13431021
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 496,
        "DVT": "Lọ",
        "Don_Gia": 13941,
        "Thanh_Tien": 6914736
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 108,
        "DVT": "Chai",
        "Don_Gia": 307459,
        "Thanh_Tien": 33205572
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 327,
        "DVT": "Viên",
        "Don_Gia": 238948,
        "Thanh_Tien": 78135996
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
    "Tong_Tien": 13684116362,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 474,
        "DVT": "Viên",
        "Don_Gia": 28366270,
        "Thanh_Tien": 13445611980
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 220,
        "DVT": "Chai",
        "Don_Gia": 302384,
        "Thanh_Tien": 66524480
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 434,
        "DVT": "Lọ",
        "Don_Gia": 36784,
        "Thanh_Tien": 15964256
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 188,
        "DVT": "Lọ",
        "Don_Gia": 256481,
        "Thanh_Tien": 48218428
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 471,
        "DVT": "Viên",
        "Don_Gia": 17243,
        "Thanh_Tien": 8121453
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 405,
        "DVT": "Viên",
        "Don_Gia": 246113,
        "Thanh_Tien": 99675765
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
    "Tong_Tien": 26213053105,
    "Items": [
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 420,
        "DVT": "Viên",
        "Don_Gia": 24358,
        "Thanh_Tien": 10230360
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 217,
        "DVT": "Ống",
        "Don_Gia": 39708413,
        "Thanh_Tien": 8616725621
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 425,
        "DVT": "Ống",
        "Don_Gia": 5729955,
        "Thanh_Tien": 2435230875
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 429,
        "DVT": "Chai",
        "Don_Gia": 310083,
        "Thanh_Tien": 133025607
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 490,
        "DVT": "Viên",
        "Don_Gia": 26380854,
        "Thanh_Tien": 12926618460
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 332,
        "DVT": "Viên",
        "Don_Gia": 62851,
        "Thanh_Tien": 20866532
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 140,
        "DVT": "Lọ",
        "Don_Gia": 251481,
        "Thanh_Tien": 35207340
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 232,
        "DVT": "Viên",
        "Don_Gia": 12965,
        "Thanh_Tien": 3007880
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 237,
        "DVT": "Lọ",
        "Don_Gia": 14924,
        "Thanh_Tien": 3536988
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 116,
        "DVT": "Viên",
        "Don_Gia": 15154,
        "Thanh_Tien": 1757864
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 127,
        "DVT": "Viên",
        "Don_Gia": 15959414,
        "Thanh_Tien": 2026845578
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
    "Tong_Tien": 14130734749,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 135,
        "DVT": "Viên",
        "Don_Gia": 25423613,
        "Thanh_Tien": 3432187755
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 126,
        "DVT": "Viên",
        "Don_Gia": 12690,
        "Thanh_Tien": 1598940
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 109,
        "DVT": "Ống",
        "Don_Gia": 5348741,
        "Thanh_Tien": 583012769
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 138,
        "DVT": "Viên",
        "Don_Gia": 8112,
        "Thanh_Tien": 1119456
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 27,
        "DVT": "Xịt",
        "Don_Gia": 26605,
        "Thanh_Tien": 718335
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 272,
        "DVT": "Viên",
        "Don_Gia": 6598,
        "Thanh_Tien": 1794656
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 15,
        "DVT": "Viên",
        "Don_Gia": 66882,
        "Thanh_Tien": 1003230
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 188,
        "DVT": "Ống",
        "Don_Gia": 22486847,
        "Thanh_Tien": 4227527236
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 31,
        "DVT": "Lọ",
        "Don_Gia": 34389,
        "Thanh_Tien": 1066059
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 108,
        "DVT": "Lọ",
        "Don_Gia": 12220,
        "Thanh_Tien": 1319760
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 123,
        "DVT": "Chai",
        "Don_Gia": 317376,
        "Thanh_Tien": 39037248
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 365,
        "DVT": "Ống",
        "Don_Gia": 16000957,
        "Thanh_Tien": 5840349305
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
    "Tong_Tien": 8302194891,
    "Items": [
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 443,
        "DVT": "Viên",
        "Don_Gia": 60644,
        "Thanh_Tien": 26865292
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 18,
        "DVT": "Tuýp",
        "Don_Gia": 37893,
        "Thanh_Tien": 682074
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 429,
        "DVT": "Viên",
        "Don_Gia": 19197,
        "Thanh_Tien": 8235513
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 301,
        "DVT": "Viên",
        "Don_Gia": 24781,
        "Thanh_Tien": 7459081
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 255,
        "DVT": "Viên",
        "Don_Gia": 32779,
        "Thanh_Tien": 8358645
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 57,
        "DVT": "Viên",
        "Don_Gia": 13658,
        "Thanh_Tien": 778506
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 324,
        "DVT": "Lọ",
        "Don_Gia": 256961,
        "Thanh_Tien": 83255364
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 324,
        "DVT": "Viên",
        "Don_Gia": 25127293,
        "Thanh_Tien": 8141242932
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 462,
        "DVT": "Lọ",
        "Don_Gia": 28062,
        "Thanh_Tien": 12964644
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 232,
        "DVT": "Viên",
        "Don_Gia": 53245,
        "Thanh_Tien": 12352840
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
    "Tong_Tien": 21917703160,
    "Items": [
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 232,
        "DVT": "Viên",
        "Don_Gia": 13081,
        "Thanh_Tien": 3034792
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 281,
        "DVT": "Viên",
        "Don_Gia": 245352,
        "Thanh_Tien": 68943912
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 428,
        "DVT": "Lọ",
        "Don_Gia": 262550,
        "Thanh_Tien": 112371400
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 181,
        "DVT": "Ống",
        "Don_Gia": 5485450,
        "Thanh_Tien": 992866450
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 444,
        "DVT": "Viên",
        "Don_Gia": 6833,
        "Thanh_Tien": 3033852
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 338,
        "DVT": "Viên",
        "Don_Gia": 16094,
        "Thanh_Tien": 5439772
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 212,
        "DVT": "Lọ",
        "Don_Gia": 29560,
        "Thanh_Tien": 6266720
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 181,
        "DVT": "Tuýp",
        "Don_Gia": 37076,
        "Thanh_Tien": 6710756
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 423,
        "DVT": "Ống",
        "Don_Gia": 39407932,
        "Thanh_Tien": 16669555236
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 214,
        "DVT": "Lọ",
        "Don_Gia": 18922805,
        "Thanh_Tien": 4049480270
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
    "Tong_Tien": 22611115637,
    "Items": [
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 188,
        "DVT": "Ống",
        "Don_Gia": 22789797,
        "Thanh_Tien": 4284481836
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 196,
        "DVT": "Ống",
        "Don_Gia": 5539240,
        "Thanh_Tien": 1085691040
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 273,
        "DVT": "Ống",
        "Don_Gia": 30072816,
        "Thanh_Tien": 8209878768
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 36,
        "DVT": "Viên",
        "Don_Gia": 13964,
        "Thanh_Tien": 502704
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 487,
        "DVT": "Lọ",
        "Don_Gia": 18543247,
        "Thanh_Tien": 9030561289
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
    "Tong_Tien": 32556535122,
    "Items": [
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 27,
        "DVT": "Viên",
        "Don_Gia": 11212,
        "Thanh_Tien": 302724
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 100,
        "DVT": "Lọ",
        "Don_Gia": 13688,
        "Thanh_Tien": 1368800
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 495,
        "DVT": "Ống",
        "Don_Gia": 30156748,
        "Thanh_Tien": 14927590260
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 441,
        "DVT": "Chai",
        "Don_Gia": 324903,
        "Thanh_Tien": 143282223
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 416,
        "DVT": "Tuýp",
        "Don_Gia": 35408,
        "Thanh_Tien": 14729728
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 161,
        "DVT": "Lọ",
        "Don_Gia": 67913,
        "Thanh_Tien": 10933993
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 402,
        "DVT": "Viên",
        "Don_Gia": 13223,
        "Thanh_Tien": 5315646
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 58,
        "DVT": "Lọ",
        "Don_Gia": 27512,
        "Thanh_Tien": 1595696
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 456,
        "DVT": "Ống",
        "Don_Gia": 38179760,
        "Thanh_Tien": 17409970560
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 469,
        "DVT": "Viên",
        "Don_Gia": 13643,
        "Thanh_Tien": 6398567
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 43,
        "DVT": "Viên",
        "Don_Gia": 64239,
        "Thanh_Tien": 2762277
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 221,
        "DVT": "Lọ",
        "Don_Gia": 35441,
        "Thanh_Tien": 7832461
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 144,
        "DVT": "Viên",
        "Don_Gia": 24749,
        "Thanh_Tien": 3563856
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 81,
        "DVT": "Viên",
        "Don_Gia": 247041,
        "Thanh_Tien": 20010321
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 70,
        "DVT": "Lọ",
        "Don_Gia": 12543,
        "Thanh_Tien": 878010
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
    "Tong_Tien": 42677577047,
    "Items": [
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 348,
        "DVT": "Viên",
        "Don_Gia": 66939,
        "Thanh_Tien": 23294772
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 42,
        "DVT": "Lọ",
        "Don_Gia": 27733,
        "Thanh_Tien": 1164786
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 494,
        "DVT": "Viên",
        "Don_Gia": 26803013,
        "Thanh_Tien": 13240688422
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 237,
        "DVT": "Lọ",
        "Don_Gia": 42602,
        "Thanh_Tien": 10096674
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 59,
        "DVT": "Ống",
        "Don_Gia": 27871772,
        "Thanh_Tien": 1644434548
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 482,
        "DVT": "Ống",
        "Don_Gia": 16145570,
        "Thanh_Tien": 7782164740
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 214,
        "DVT": "Viên",
        "Don_Gia": 11613,
        "Thanh_Tien": 2485182
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 131,
        "DVT": "Viên",
        "Don_Gia": 15890,
        "Thanh_Tien": 2081590
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 365,
        "DVT": "Lọ",
        "Don_Gia": 274693,
        "Thanh_Tien": 100262945
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 289,
        "DVT": "Ống",
        "Don_Gia": 5072549,
        "Thanh_Tien": 1465966661
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 28,
        "DVT": "Viên",
        "Don_Gia": 22662,
        "Thanh_Tien": 634536
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 60,
        "DVT": "Tuýp",
        "Don_Gia": 36131,
        "Thanh_Tien": 2167860
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 373,
        "DVT": "Viên",
        "Don_Gia": 56918,
        "Thanh_Tien": 21230414
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 228,
        "DVT": "Ống",
        "Don_Gia": 39032348,
        "Thanh_Tien": 8899375344
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 407,
        "DVT": "Ống",
        "Don_Gia": 23296139,
        "Thanh_Tien": 9481528573
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
    "Tong_Tien": 811060091,
    "Items": [
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 421,
        "DVT": "Chai",
        "Don_Gia": 316956,
        "Thanh_Tien": 133438476
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 69,
        "DVT": "Viên",
        "Don_Gia": 7656,
        "Thanh_Tien": 528264
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 150,
        "DVT": "Viên",
        "Don_Gia": 13787,
        "Thanh_Tien": 2068050
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 431,
        "DVT": "Xịt",
        "Don_Gia": 28694,
        "Thanh_Tien": 12367114
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 202,
        "DVT": "Lọ",
        "Don_Gia": 26705,
        "Thanh_Tien": 5394410
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 97,
        "DVT": "Ống",
        "Don_Gia": 5377740,
        "Thanh_Tien": 521640780
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 248,
        "DVT": "Viên",
        "Don_Gia": 16855,
        "Thanh_Tien": 4180040
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 412,
        "DVT": "Viên",
        "Don_Gia": 12584,
        "Thanh_Tien": 5184608
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 109,
        "DVT": "Lọ",
        "Don_Gia": 13576,
        "Thanh_Tien": 1479784
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 372,
        "DVT": "Lọ",
        "Don_Gia": 12035,
        "Thanh_Tien": 4477020
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 455,
        "DVT": "Lọ",
        "Don_Gia": 264399,
        "Thanh_Tien": 120301545
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
    "Tong_Tien": 34493313333,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 405,
        "DVT": "Ống",
        "Don_Gia": 30216134,
        "Thanh_Tien": 12237534270
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 280,
        "DVT": "Viên",
        "Don_Gia": 15579,
        "Thanh_Tien": 4362120
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 173,
        "DVT": "Viên",
        "Don_Gia": 17653,
        "Thanh_Tien": 3053969
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 318,
        "DVT": "Xịt",
        "Don_Gia": 25298,
        "Thanh_Tien": 8044764
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 244,
        "DVT": "Ống",
        "Don_Gia": 22181893,
        "Thanh_Tien": 5412381892
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 418,
        "DVT": "Viên",
        "Don_Gia": 55493,
        "Thanh_Tien": 23196074
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 15,
        "DVT": "Ống",
        "Don_Gia": 15246827,
        "Thanh_Tien": 228702405
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 416,
        "DVT": "Ống",
        "Don_Gia": 38875955,
        "Thanh_Tien": 16172397280
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 426,
        "DVT": "Lọ",
        "Don_Gia": 43576,
        "Thanh_Tien": 18563376
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 500,
        "DVT": "Tuýp",
        "Don_Gia": 38820,
        "Thanh_Tien": 19410000
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 161,
        "DVT": "Lọ",
        "Don_Gia": 13099,
        "Thanh_Tien": 2108939
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 24,
        "DVT": "Lọ",
        "Don_Gia": 16977,
        "Thanh_Tien": 407448
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 21,
        "DVT": "Lọ",
        "Don_Gia": 16842672,
        "Thanh_Tien": 353696112
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 148,
        "DVT": "Viên",
        "Don_Gia": 63883,
        "Thanh_Tien": 9454684
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
    "Tong_Tien": 12061967626,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 130,
        "DVT": "Ống",
        "Don_Gia": 29645128,
        "Thanh_Tien": 3853866640
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 254,
        "DVT": "Viên",
        "Don_Gia": 246800,
        "Thanh_Tien": 62687200
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 10,
        "DVT": "Viên",
        "Don_Gia": 6706,
        "Thanh_Tien": 67060
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 276,
        "DVT": "Viên",
        "Don_Gia": 11900,
        "Thanh_Tien": 3284400
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 325,
        "DVT": "Lọ",
        "Don_Gia": 264146,
        "Thanh_Tien": 85847450
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 380,
        "DVT": "Chai",
        "Don_Gia": 45568,
        "Thanh_Tien": 17315840
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 496,
        "DVT": "Viên",
        "Don_Gia": 16183965,
        "Thanh_Tien": 8027246640
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 294,
        "DVT": "Tuýp",
        "Don_Gia": 39634,
        "Thanh_Tien": 11652396
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
    "Tong_Tien": 1096448940,
    "Items": [
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 367,
        "DVT": "Xịt",
        "Don_Gia": 28225,
        "Thanh_Tien": 10358575
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 185,
        "DVT": "Lọ",
        "Don_Gia": 26543,
        "Thanh_Tien": 4910455
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 141,
        "DVT": "Viên",
        "Don_Gia": 13402,
        "Thanh_Tien": 1889682
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 39,
        "DVT": "Viên",
        "Don_Gia": 27664104,
        "Thanh_Tien": 1078900056
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 46,
        "DVT": "Viên",
        "Don_Gia": 8482,
        "Thanh_Tien": 390172
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
    "Tong_Tien": 13496467315,
    "Items": [
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 390,
        "DVT": "Viên",
        "Don_Gia": 242694,
        "Thanh_Tien": 94650660
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 308,
        "DVT": "Ống",
        "Don_Gia": 5157104,
        "Thanh_Tien": 1588388032
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 374,
        "DVT": "Viên",
        "Don_Gia": 16131268,
        "Thanh_Tien": 6033094232
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 147,
        "DVT": "Viên",
        "Don_Gia": 50886,
        "Thanh_Tien": 7480242
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 401,
        "DVT": "Lọ",
        "Don_Gia": 39091,
        "Thanh_Tien": 15675491
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 166,
        "DVT": "Tuýp",
        "Don_Gia": 36301,
        "Thanh_Tien": 6025966
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 156,
        "DVT": "Chai",
        "Don_Gia": 332633,
        "Thanh_Tien": 51890748
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 98,
        "DVT": "Viên",
        "Don_Gia": 6656,
        "Thanh_Tien": 652288
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 381,
        "DVT": "Ống",
        "Don_Gia": 14583219,
        "Thanh_Tien": 5556206439
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 48,
        "DVT": "Viên",
        "Don_Gia": 24135,
        "Thanh_Tien": 1158480
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 185,
        "DVT": "Lọ",
        "Don_Gia": 26357,
        "Thanh_Tien": 4876045
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 216,
        "DVT": "Viên",
        "Don_Gia": 7523,
        "Thanh_Tien": 1624968
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 293,
        "DVT": "Lọ",
        "Don_Gia": 42356,
        "Thanh_Tien": 12410308
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 457,
        "DVT": "Lọ",
        "Don_Gia": 267688,
        "Thanh_Tien": 122333416
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
    "Tong_Tien": 3214550802,
    "Items": [
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 334,
        "DVT": "Tuýp",
        "Don_Gia": 37673,
        "Thanh_Tien": 12582782
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 240,
        "DVT": "Lọ",
        "Don_Gia": 44442,
        "Thanh_Tien": 10666080
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 219,
        "DVT": "Ống",
        "Don_Gia": 14327464,
        "Thanh_Tien": 3137714616
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 351,
        "DVT": "Viên",
        "Don_Gia": 13493,
        "Thanh_Tien": 4736043
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 494,
        "DVT": "Lọ",
        "Don_Gia": 13635,
        "Thanh_Tien": 6735690
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 309,
        "DVT": "Viên",
        "Don_Gia": 33251,
        "Thanh_Tien": 10274559
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 472,
        "DVT": "Viên",
        "Don_Gia": 66319,
        "Thanh_Tien": 31302568
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 48,
        "DVT": "Lọ",
        "Don_Gia": 11218,
        "Thanh_Tien": 538464
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
    "Tong_Tien": 13918680392,
    "Items": [
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 43,
        "DVT": "Viên",
        "Don_Gia": 13976,
        "Thanh_Tien": 600968
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 260,
        "DVT": "Xịt",
        "Don_Gia": 28309,
        "Thanh_Tien": 7360340
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 48,
        "DVT": "Chai",
        "Don_Gia": 50342,
        "Thanh_Tien": 2416416
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 477,
        "DVT": "Ống",
        "Don_Gia": 5190936,
        "Thanh_Tien": 2476076472
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 404,
        "DVT": "Ống",
        "Don_Gia": 28218699,
        "Thanh_Tien": 11400354396
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 472,
        "DVT": "Lọ",
        "Don_Gia": 67525,
        "Thanh_Tien": 31871800
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
    "Tong_Tien": 8103828893,
    "Items": [
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 453,
        "DVT": "Lọ",
        "Don_Gia": 40178,
        "Thanh_Tien": 18200634
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 77,
        "DVT": "Lọ",
        "Don_Gia": 15837,
        "Thanh_Tien": 1219449
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 394,
        "DVT": "Viên",
        "Don_Gia": 6765,
        "Thanh_Tien": 2665410
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 111,
        "DVT": "Ống",
        "Don_Gia": 40621098,
        "Thanh_Tien": 4508941878
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 349,
        "DVT": "Viên",
        "Don_Gia": 52678,
        "Thanh_Tien": 18384622
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 412,
        "DVT": "Lọ",
        "Don_Gia": 13453,
        "Thanh_Tien": 5542636
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 32,
        "DVT": "Viên",
        "Don_Gia": 27876331,
        "Thanh_Tien": 892042592
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 202,
        "DVT": "Viên",
        "Don_Gia": 11379,
        "Thanh_Tien": 2298558
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 322,
        "DVT": "Lọ",
        "Don_Gia": 27796,
        "Thanh_Tien": 8950312
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 197,
        "DVT": "Ống",
        "Don_Gia": 5569328,
        "Thanh_Tien": 1097157616
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 397,
        "DVT": "Viên",
        "Don_Gia": 7956,
        "Thanh_Tien": 3158532
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 398,
        "DVT": "Viên",
        "Don_Gia": 15949,
        "Thanh_Tien": 6347702
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 177,
        "DVT": "Lọ",
        "Don_Gia": 37877,
        "Thanh_Tien": 6704229
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 38,
        "DVT": "Ống",
        "Don_Gia": 15426060,
        "Thanh_Tien": 586190280
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 39,
        "DVT": "Ống",
        "Don_Gia": 24257037,
        "Thanh_Tien": 946024443
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
    "Tong_Tien": 18305128898,
    "Items": [
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 411,
        "DVT": "Chai",
        "Don_Gia": 337900,
        "Thanh_Tien": 138876900
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 324,
        "DVT": "Viên",
        "Don_Gia": 27531300,
        "Thanh_Tien": 8920141200
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 370,
        "DVT": "Lọ",
        "Don_Gia": 42957,
        "Thanh_Tien": 15894090
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 405,
        "DVT": "Lọ",
        "Don_Gia": 18680374,
        "Thanh_Tien": 7565551470
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 417,
        "DVT": "Viên",
        "Don_Gia": 15462,
        "Thanh_Tien": 6447654
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 316,
        "DVT": "Ống",
        "Don_Gia": 5247524,
        "Thanh_Tien": 1658217584
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
    "Tong_Tien": 23301873335,
    "Items": [
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 35,
        "DVT": "Viên",
        "Don_Gia": 235546,
        "Thanh_Tien": 8244110
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 20,
        "DVT": "Ống",
        "Don_Gia": 15255261,
        "Thanh_Tien": 305105220
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 447,
        "DVT": "Lọ",
        "Don_Gia": 44888,
        "Thanh_Tien": 20064936
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 364,
        "DVT": "Viên",
        "Don_Gia": 14308,
        "Thanh_Tien": 5208112
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 292,
        "DVT": "Viên",
        "Don_Gia": 15108322,
        "Thanh_Tien": 4411630024
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 400,
        "DVT": "Chai",
        "Don_Gia": 309012,
        "Thanh_Tien": 123604800
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 473,
        "DVT": "Lọ",
        "Don_Gia": 35686,
        "Thanh_Tien": 16879478
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 300,
        "DVT": "Ống",
        "Don_Gia": 39201842,
        "Thanh_Tien": 11760552600
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 275,
        "DVT": "Ống",
        "Don_Gia": 23900474,
        "Thanh_Tien": 6572630350
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 311,
        "DVT": "Lọ",
        "Don_Gia": 250655,
        "Thanh_Tien": 77953705
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
    "Tong_Tien": 110256619,
    "Items": [
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 337,
        "DVT": "Lọ",
        "Don_Gia": 274050,
        "Thanh_Tien": 92354850
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 80,
        "DVT": "Lọ",
        "Don_Gia": 13303,
        "Thanh_Tien": 1064240
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 215,
        "DVT": "Viên",
        "Don_Gia": 36253,
        "Thanh_Tien": 7794395
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 412,
        "DVT": "Viên",
        "Don_Gia": 8007,
        "Thanh_Tien": 3298884
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 333,
        "DVT": "Viên",
        "Don_Gia": 17250,
        "Thanh_Tien": 5744250
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
    "Tong_Tien": 10418930674,
    "Items": [
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 491,
        "DVT": "Viên",
        "Don_Gia": 8093,
        "Thanh_Tien": 3973663
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 172,
        "DVT": "Lọ",
        "Don_Gia": 39073,
        "Thanh_Tien": 6720556
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 169,
        "DVT": "Viên",
        "Don_Gia": 12175,
        "Thanh_Tien": 2057575
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 158,
        "DVT": "Lọ",
        "Don_Gia": 15938,
        "Thanh_Tien": 2518204
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 17,
        "DVT": "Ống",
        "Don_Gia": 28133270,
        "Thanh_Tien": 478265590
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 203,
        "DVT": "Lọ",
        "Don_Gia": 65453,
        "Thanh_Tien": 13286959
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 337,
        "DVT": "Chai",
        "Don_Gia": 45705,
        "Thanh_Tien": 15402585
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 349,
        "DVT": "Viên",
        "Don_Gia": 16174707,
        "Thanh_Tien": 5644972743
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 247,
        "DVT": "Viên",
        "Don_Gia": 6140,
        "Thanh_Tien": 1516580
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 194,
        "DVT": "Ống",
        "Don_Gia": 16253785,
        "Thanh_Tien": 3153234290
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 123,
        "DVT": "Xịt",
        "Don_Gia": 26169,
        "Thanh_Tien": 3218787
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 27,
        "DVT": "Ống",
        "Don_Gia": 40509746,
        "Thanh_Tien": 1093763142
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
    "Tong_Tien": 14914211269,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 488,
        "DVT": "Viên",
        "Don_Gia": 16768120,
        "Thanh_Tien": 8182842560
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 188,
        "DVT": "Viên",
        "Don_Gia": 6043,
        "Thanh_Tien": 1136084
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 125,
        "DVT": "Ống",
        "Don_Gia": 26996637,
        "Thanh_Tien": 3374579625
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 136,
        "DVT": "Ống",
        "Don_Gia": 24312556,
        "Thanh_Tien": 3306507616
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 26,
        "DVT": "Lọ",
        "Don_Gia": 16222,
        "Thanh_Tien": 421772
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 433,
        "DVT": "Viên",
        "Don_Gia": 65254,
        "Thanh_Tien": 28254982
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 83,
        "DVT": "Viên",
        "Don_Gia": 246610,
        "Thanh_Tien": 20468630
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
    "Tong_Tien": 3474545709,
    "Items": [
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 31,
        "DVT": "Ống",
        "Don_Gia": 40897531,
        "Thanh_Tien": 1267823461
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 131,
        "DVT": "Viên",
        "Don_Gia": 241920,
        "Thanh_Tien": 31691520
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 24,
        "DVT": "Viên",
        "Don_Gia": 8091,
        "Thanh_Tien": 194184
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 247,
        "DVT": "Lọ",
        "Don_Gia": 36465,
        "Thanh_Tien": 9006855
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 190,
        "DVT": "Viên",
        "Don_Gia": 18430,
        "Thanh_Tien": 3501700
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 133,
        "DVT": "Chai",
        "Don_Gia": 49237,
        "Thanh_Tien": 6548521
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 395,
        "DVT": "Xịt",
        "Don_Gia": 25554,
        "Thanh_Tien": 10093830
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 32,
        "DVT": "Lọ",
        "Don_Gia": 12542,
        "Thanh_Tien": 401344
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 88,
        "DVT": "Ống",
        "Don_Gia": 24353360,
        "Thanh_Tien": 2143095680
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 129,
        "DVT": "Lọ",
        "Don_Gia": 16966,
        "Thanh_Tien": 2188614
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
    "Tong_Tien": 25862768033,
    "Items": [
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 184,
        "DVT": "Viên",
        "Don_Gia": 7733,
        "Thanh_Tien": 1422872
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 364,
        "DVT": "Ống",
        "Don_Gia": 37813830,
        "Thanh_Tien": 13764234120
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 437,
        "DVT": "Viên",
        "Don_Gia": 27190776,
        "Thanh_Tien": 11882369112
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 11,
        "DVT": "Viên",
        "Don_Gia": 34958,
        "Thanh_Tien": 384538
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 319,
        "DVT": "Lọ",
        "Don_Gia": 13777,
        "Thanh_Tien": 4394863
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 430,
        "DVT": "Viên",
        "Don_Gia": 16038,
        "Thanh_Tien": 6896340
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 411,
        "DVT": "Chai",
        "Don_Gia": 325046,
        "Thanh_Tien": 133593906
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 467,
        "DVT": "Viên",
        "Don_Gia": 62795,
        "Thanh_Tien": 29325265
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 430,
        "DVT": "Lọ",
        "Don_Gia": 37631,
        "Thanh_Tien": 16181330
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 394,
        "DVT": "Lọ",
        "Don_Gia": 45799,
        "Thanh_Tien": 18044806
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 180,
        "DVT": "Lọ",
        "Don_Gia": 26684,
        "Thanh_Tien": 4803120
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 83,
        "DVT": "Viên",
        "Don_Gia": 13467,
        "Thanh_Tien": 1117761
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
    "Tong_Tien": 33853397861,
    "Items": [
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 227,
        "DVT": "Viên",
        "Don_Gia": 6259,
        "Thanh_Tien": 1420793
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 68,
        "DVT": "Viên",
        "Don_Gia": 25760,
        "Thanh_Tien": 1751680
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 339,
        "DVT": "Lọ",
        "Don_Gia": 262491,
        "Thanh_Tien": 88984449
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 248,
        "DVT": "Viên",
        "Don_Gia": 11997,
        "Thanh_Tien": 2975256
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 358,
        "DVT": "Lọ",
        "Don_Gia": 29554,
        "Thanh_Tien": 10580332
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 273,
        "DVT": "Viên",
        "Don_Gia": 13131,
        "Thanh_Tien": 3584763
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 471,
        "DVT": "Ống",
        "Don_Gia": 30093092,
        "Thanh_Tien": 14173846332
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 126,
        "DVT": "Lọ",
        "Don_Gia": 11051,
        "Thanh_Tien": 1392426
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 421,
        "DVT": "Chai",
        "Don_Gia": 311834,
        "Thanh_Tien": 131282114
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 398,
        "DVT": "Viên",
        "Don_Gia": 27971265,
        "Thanh_Tien": 11132563470
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 393,
        "DVT": "Chai",
        "Don_Gia": 50850,
        "Thanh_Tien": 19984050
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 83,
        "DVT": "Viên",
        "Don_Gia": 15707566,
        "Thanh_Tien": 1303727978
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 391,
        "DVT": "Lọ",
        "Don_Gia": 17854998,
        "Thanh_Tien": 6981304218
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
    "Tong_Tien": 17661661596,
    "Items": [
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 410,
        "DVT": "Viên",
        "Don_Gia": 20059,
        "Thanh_Tien": 8224190
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 318,
        "DVT": "Lọ",
        "Don_Gia": 15789,
        "Thanh_Tien": 5020902
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 320,
        "DVT": "Ống",
        "Don_Gia": 22537138,
        "Thanh_Tien": 7211884160
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 78,
        "DVT": "Tuýp",
        "Don_Gia": 39182,
        "Thanh_Tien": 3056196
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 412,
        "DVT": "Viên",
        "Don_Gia": 12460,
        "Thanh_Tien": 5133520
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 255,
        "DVT": "Viên",
        "Don_Gia": 23847,
        "Thanh_Tien": 6080985
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 121,
        "DVT": "Viên",
        "Don_Gia": 6388,
        "Thanh_Tien": 772948
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 270,
        "DVT": "Ống",
        "Don_Gia": 38499536,
        "Thanh_Tien": 10394874720
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 306,
        "DVT": "Viên",
        "Don_Gia": 15422,
        "Thanh_Tien": 4719132
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 319,
        "DVT": "Chai",
        "Don_Gia": 49347,
        "Thanh_Tien": 15741693
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 95,
        "DVT": "Lọ",
        "Don_Gia": 64770,
        "Thanh_Tien": 6153150
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
    "Tong_Tien": 16071497176,
    "Items": [
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 151,
        "DVT": "Tuýp",
        "Don_Gia": 39437,
        "Thanh_Tien": 5954987
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 348,
        "DVT": "Viên",
        "Don_Gia": 66825,
        "Thanh_Tien": 23255100
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 188,
        "DVT": "Ống",
        "Don_Gia": 5358665,
        "Thanh_Tien": 1007429020
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 363,
        "DVT": "Ống",
        "Don_Gia": 41033485,
        "Thanh_Tien": 14895155055
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 285,
        "DVT": "Viên",
        "Don_Gia": 18827,
        "Thanh_Tien": 5365695
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 440,
        "DVT": "Lọ",
        "Don_Gia": 241340,
        "Thanh_Tien": 106189600
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 375,
        "DVT": "Viên",
        "Don_Gia": 52461,
        "Thanh_Tien": 19672875
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 348,
        "DVT": "Viên",
        "Don_Gia": 24353,
        "Thanh_Tien": 8474844
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
    "Tong_Tien": 16980865814,
    "Items": [
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 40,
        "DVT": "Viên",
        "Don_Gia": 13781,
        "Thanh_Tien": 551240
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 39,
        "DVT": "Viên",
        "Don_Gia": 27871435,
        "Thanh_Tien": 1086985965
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 146,
        "DVT": "Viên",
        "Don_Gia": 33281,
        "Thanh_Tien": 4859026
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 49,
        "DVT": "Lọ",
        "Don_Gia": 16948529,
        "Thanh_Tien": 830477921
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 268,
        "DVT": "Lọ",
        "Don_Gia": 29214,
        "Thanh_Tien": 7829352
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 320,
        "DVT": "Tuýp",
        "Don_Gia": 35573,
        "Thanh_Tien": 11383360
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 280,
        "DVT": "Viên",
        "Don_Gia": 53085,
        "Thanh_Tien": 14863800
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 237,
        "DVT": "Viên",
        "Don_Gia": 60709,
        "Thanh_Tien": 14388033
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 150,
        "DVT": "Lọ",
        "Don_Gia": 11076,
        "Thanh_Tien": 1661400
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 391,
        "DVT": "Ống",
        "Don_Gia": 38375513,
        "Thanh_Tien": 15004825583
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 24,
        "DVT": "Lọ",
        "Don_Gia": 64122,
        "Thanh_Tien": 1538928
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 42,
        "DVT": "Lọ",
        "Don_Gia": 35743,
        "Thanh_Tien": 1501206
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
    "Tong_Tien": 4171979794,
    "Items": [
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 157,
        "DVT": "Viên",
        "Don_Gia": 19088,
        "Thanh_Tien": 2996816
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 470,
        "DVT": "Lọ",
        "Don_Gia": 13693,
        "Thanh_Tien": 6435710
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 168,
        "DVT": "Viên",
        "Don_Gia": 17229,
        "Thanh_Tien": 2894472
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 143,
        "DVT": "Viên",
        "Don_Gia": 27000793,
        "Thanh_Tien": 3861113399
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 453,
        "DVT": "Lọ",
        "Don_Gia": 27643,
        "Thanh_Tien": 12522279
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 288,
        "DVT": "Viên",
        "Don_Gia": 7763,
        "Thanh_Tien": 2235744
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 204,
        "DVT": "Chai",
        "Don_Gia": 307849,
        "Thanh_Tien": 62801196
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 313,
        "DVT": "Viên",
        "Don_Gia": 231822,
        "Thanh_Tien": 72560286
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 455,
        "DVT": "Lọ",
        "Don_Gia": 252327,
        "Thanh_Tien": 114808785
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 320,
        "DVT": "Lọ",
        "Don_Gia": 40829,
        "Thanh_Tien": 13065280
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 447,
        "DVT": "Xịt",
        "Don_Gia": 26443,
        "Thanh_Tien": 11820021
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 366,
        "DVT": "Viên",
        "Don_Gia": 23841,
        "Thanh_Tien": 8725806
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
    "Tong_Tien": 11828357353,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 413,
        "DVT": "Ống",
        "Don_Gia": 28522742,
        "Thanh_Tien": 11779892446
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 441,
        "DVT": "Viên",
        "Don_Gia": 17948,
        "Thanh_Tien": 7915068
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 205,
        "DVT": "Viên",
        "Don_Gia": 11383,
        "Thanh_Tien": 2333515
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 92,
        "DVT": "Lọ",
        "Don_Gia": 15676,
        "Thanh_Tien": 1442192
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 193,
        "DVT": "Lọ",
        "Don_Gia": 28026,
        "Thanh_Tien": 5409018
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 417,
        "DVT": "Chai",
        "Don_Gia": 48175,
        "Thanh_Tien": 20088975
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 169,
        "DVT": "Viên",
        "Don_Gia": 13548,
        "Thanh_Tien": 2289612
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 201,
        "DVT": "Viên",
        "Don_Gia": 8143,
        "Thanh_Tien": 1636743
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 363,
        "DVT": "Viên",
        "Don_Gia": 13742,
        "Thanh_Tien": 4988346
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 381,
        "DVT": "Viên",
        "Don_Gia": 6198,
        "Thanh_Tien": 2361438
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
    "Tong_Tien": 6313374366,
    "Items": [
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 438,
        "DVT": "Lọ",
        "Don_Gia": 45862,
        "Thanh_Tien": 20087556
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 150,
        "DVT": "Ống",
        "Don_Gia": 5536217,
        "Thanh_Tien": 830432550
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 158,
        "DVT": "Viên",
        "Don_Gia": 12398,
        "Thanh_Tien": 1958884
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 327,
        "DVT": "Lọ",
        "Don_Gia": 246504,
        "Thanh_Tien": 80606808
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 187,
        "DVT": "Lọ",
        "Don_Gia": 14376,
        "Thanh_Tien": 2688312
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 161,
        "DVT": "Viên",
        "Don_Gia": 18866,
        "Thanh_Tien": 3037426
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 182,
        "DVT": "Ống",
        "Don_Gia": 29530565,
        "Thanh_Tien": 5374562830
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
    "Tong_Tien": 13156674949,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 204,
        "DVT": "Viên",
        "Don_Gia": 16895085,
        "Thanh_Tien": 3446597340
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 26,
        "DVT": "Lọ",
        "Don_Gia": 275911,
        "Thanh_Tien": 7173686
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 69,
        "DVT": "Lọ",
        "Don_Gia": 40349,
        "Thanh_Tien": 2784081
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 223,
        "DVT": "Lọ",
        "Don_Gia": 15213,
        "Thanh_Tien": 3392499
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 94,
        "DVT": "Ống",
        "Don_Gia": 27796789,
        "Thanh_Tien": 2612898166
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 121,
        "DVT": "Viên",
        "Don_Gia": 55303,
        "Thanh_Tien": 6691663
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 79,
        "DVT": "Viên",
        "Don_Gia": 25115,
        "Thanh_Tien": 1984085
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 471,
        "DVT": "Lọ",
        "Don_Gia": 67482,
        "Thanh_Tien": 31784022
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 313,
        "DVT": "Ống",
        "Don_Gia": 22449835,
        "Thanh_Tien": 7026798355
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 492,
        "DVT": "Viên",
        "Don_Gia": 33681,
        "Thanh_Tien": 16571052
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
    "Tong_Tien": 7137502533,
    "Items": [
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 287,
        "DVT": "Lọ",
        "Don_Gia": 27363,
        "Thanh_Tien": 7853181
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 293,
        "DVT": "Xịt",
        "Don_Gia": 25567,
        "Thanh_Tien": 7491131
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 191,
        "DVT": "Lọ",
        "Don_Gia": 38946,
        "Thanh_Tien": 7438686
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 284,
        "DVT": "Viên",
        "Don_Gia": 227636,
        "Thanh_Tien": 64648624
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 423,
        "DVT": "Lọ",
        "Don_Gia": 14901,
        "Thanh_Tien": 6303123
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 36,
        "DVT": "Viên",
        "Don_Gia": 15915664,
        "Thanh_Tien": 572963904
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 277,
        "DVT": "Ống",
        "Don_Gia": 23100045,
        "Thanh_Tien": 6398712465
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 126,
        "DVT": "Lọ",
        "Don_Gia": 15040,
        "Thanh_Tien": 1895040
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 96,
        "DVT": "Viên",
        "Don_Gia": 24016,
        "Thanh_Tien": 2305536
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 205,
        "DVT": "Viên",
        "Don_Gia": 34058,
        "Thanh_Tien": 6981890
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 415,
        "DVT": "Lọ",
        "Don_Gia": 61440,
        "Thanh_Tien": 25497600
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 116,
        "DVT": "Viên",
        "Don_Gia": 13333,
        "Thanh_Tien": 1546628
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 80,
        "DVT": "Chai",
        "Don_Gia": 316370,
        "Thanh_Tien": 25309600
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 445,
        "DVT": "Viên",
        "Don_Gia": 19225,
        "Thanh_Tien": 8555125
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
    "Tong_Tien": 23049341309,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 242,
        "DVT": "Viên",
        "Don_Gia": 26843309,
        "Thanh_Tien": 6496080778
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 81,
        "DVT": "Viên",
        "Don_Gia": 13887,
        "Thanh_Tien": 1124847
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 138,
        "DVT": "Viên",
        "Don_Gia": 61315,
        "Thanh_Tien": 8461470
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 237,
        "DVT": "Viên",
        "Don_Gia": 51843,
        "Thanh_Tien": 12286791
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 451,
        "DVT": "Xịt",
        "Don_Gia": 26330,
        "Thanh_Tien": 11874830
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 431,
        "DVT": "Lọ",
        "Don_Gia": 13508,
        "Thanh_Tien": 5821948
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 315,
        "DVT": "Chai",
        "Don_Gia": 47915,
        "Thanh_Tien": 15093225
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 42,
        "DVT": "Ống",
        "Don_Gia": 23941945,
        "Thanh_Tien": 1005561690
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 443,
        "DVT": "Lọ",
        "Don_Gia": 18541108,
        "Thanh_Tien": 8213710844
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 272,
        "DVT": "Ống",
        "Don_Gia": 26688946,
        "Thanh_Tien": 7259393312
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 415,
        "DVT": "Lọ",
        "Don_Gia": 11560,
        "Thanh_Tien": 4797400
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 209,
        "DVT": "Tuýp",
        "Don_Gia": 39316,
        "Thanh_Tien": 8217044
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 198,
        "DVT": "Viên",
        "Don_Gia": 34935,
        "Thanh_Tien": 6917130
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
    "Tong_Tien": 14509063852,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 187,
        "DVT": "Viên",
        "Don_Gia": 25905932,
        "Thanh_Tien": 4844409284
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 498,
        "DVT": "Tuýp",
        "Don_Gia": 35729,
        "Thanh_Tien": 17793042
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 381,
        "DVT": "Chai",
        "Don_Gia": 45244,
        "Thanh_Tien": 17237964
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 175,
        "DVT": "Viên",
        "Don_Gia": 51963,
        "Thanh_Tien": 9093525
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 272,
        "DVT": "Viên",
        "Don_Gia": 64715,
        "Thanh_Tien": 17602480
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 97,
        "DVT": "Lọ",
        "Don_Gia": 27934,
        "Thanh_Tien": 2709598
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 306,
        "DVT": "Viên",
        "Don_Gia": 6497,
        "Thanh_Tien": 1988082
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 342,
        "DVT": "Ống",
        "Don_Gia": 5012645,
        "Thanh_Tien": 1714324590
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 145,
        "DVT": "Ống",
        "Don_Gia": 24045674,
        "Thanh_Tien": 3486622730
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 234,
        "DVT": "Lọ",
        "Don_Gia": 18720413,
        "Thanh_Tien": 4380576642
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 445,
        "DVT": "Lọ",
        "Don_Gia": 12379,
        "Thanh_Tien": 5508655
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 180,
        "DVT": "Lọ",
        "Don_Gia": 62207,
        "Thanh_Tien": 11197260
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
    "Tong_Tien": 23884810021,
    "Items": [
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 416,
        "DVT": "Viên",
        "Don_Gia": 7781,
        "Thanh_Tien": 3236896
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 254,
        "DVT": "Viên",
        "Don_Gia": 12709,
        "Thanh_Tien": 3228086
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 280,
        "DVT": "Viên",
        "Don_Gia": 27051633,
        "Thanh_Tien": 7574457240
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 88,
        "DVT": "Viên",
        "Don_Gia": 6561,
        "Thanh_Tien": 577368
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 21,
        "DVT": "Lọ",
        "Don_Gia": 15487,
        "Thanh_Tien": 325227
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 182,
        "DVT": "Viên",
        "Don_Gia": 12486,
        "Thanh_Tien": 2272452
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 127,
        "DVT": "Lọ",
        "Don_Gia": 40867,
        "Thanh_Tien": 5190109
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 453,
        "DVT": "Lọ",
        "Don_Gia": 13637,
        "Thanh_Tien": 6177561
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 407,
        "DVT": "Ống",
        "Don_Gia": 35901043,
        "Thanh_Tien": 14611724501
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 360,
        "DVT": "Viên",
        "Don_Gia": 51485,
        "Thanh_Tien": 18534600
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 395,
        "DVT": "Xịt",
        "Don_Gia": 27623,
        "Thanh_Tien": 10911085
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 308,
        "DVT": "Ống",
        "Don_Gia": 5328088,
        "Thanh_Tien": 1641051104
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 26,
        "DVT": "Lọ",
        "Don_Gia": 273992,
        "Thanh_Tien": 7123792
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
    "Tong_Tien": 17267727451,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 395,
        "DVT": "Viên",
        "Don_Gia": 16108948,
        "Thanh_Tien": 6363034460
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 282,
        "DVT": "Tuýp",
        "Don_Gia": 40118,
        "Thanh_Tien": 11313276
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 441,
        "DVT": "Lọ",
        "Don_Gia": 34553,
        "Thanh_Tien": 15237873
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 210,
        "DVT": "Ống",
        "Don_Gia": 5333933,
        "Thanh_Tien": 1120125930
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 252,
        "DVT": "Ống",
        "Don_Gia": 38580421,
        "Thanh_Tien": 9722266092
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 482,
        "DVT": "Viên",
        "Don_Gia": 51312,
        "Thanh_Tien": 24732384
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 398,
        "DVT": "Xịt",
        "Don_Gia": 27682,
        "Thanh_Tien": 11017436
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
    "Tong_Tien": 10581721477,
    "Items": [
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 86,
        "DVT": "Viên",
        "Don_Gia": 25700,
        "Thanh_Tien": 2210200
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 74,
        "DVT": "Ống",
        "Don_Gia": 14460649,
        "Thanh_Tien": 1070088026
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 306,
        "DVT": "Lọ",
        "Don_Gia": 26476,
        "Thanh_Tien": 8101656
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 126,
        "DVT": "Chai",
        "Don_Gia": 45051,
        "Thanh_Tien": 5676426
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 240,
        "DVT": "Ống",
        "Don_Gia": 38448547,
        "Thanh_Tien": 9227651280
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 14,
        "DVT": "Lọ",
        "Don_Gia": 17244291,
        "Thanh_Tien": 241420074
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 93,
        "DVT": "Viên",
        "Don_Gia": 33268,
        "Thanh_Tien": 3093924
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 100,
        "DVT": "Viên",
        "Don_Gia": 13161,
        "Thanh_Tien": 1316100
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 125,
        "DVT": "Lọ",
        "Don_Gia": 15230,
        "Thanh_Tien": 1903750
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 279,
        "DVT": "Viên",
        "Don_Gia": 15167,
        "Thanh_Tien": 4231593
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 412,
        "DVT": "Tuýp",
        "Don_Gia": 38904,
        "Thanh_Tien": 16028448
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
    "Tong_Tien": 5072849465,
    "Items": [
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 475,
        "DVT": "Viên",
        "Don_Gia": 54280,
        "Thanh_Tien": 25783000
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 76,
        "DVT": "Lọ",
        "Don_Gia": 28511,
        "Thanh_Tien": 2166836
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 246,
        "DVT": "Chai",
        "Don_Gia": 49076,
        "Thanh_Tien": 12072696
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 197,
        "DVT": "Lọ",
        "Don_Gia": 16719,
        "Thanh_Tien": 3293643
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 86,
        "DVT": "Ống",
        "Don_Gia": 38058076,
        "Thanh_Tien": 3272994536
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 453,
        "DVT": "Lọ",
        "Don_Gia": 11422,
        "Thanh_Tien": 5174166
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 316,
        "DVT": "Ống",
        "Don_Gia": 5542293,
        "Thanh_Tien": 1751364588
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
    "Tong_Tien": 110300221,
    "Items": [
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 159,
        "DVT": "Lọ",
        "Don_Gia": 15248,
        "Thanh_Tien": 2424432
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 91,
        "DVT": "Viên",
        "Don_Gia": 13114,
        "Thanh_Tien": 1193374
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 51,
        "DVT": "Viên",
        "Don_Gia": 16562,
        "Thanh_Tien": 844662
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 51,
        "DVT": "Lọ",
        "Don_Gia": 29678,
        "Thanh_Tien": 1513578
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 48,
        "DVT": "Lọ",
        "Don_Gia": 273622,
        "Thanh_Tien": 13133856
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 363,
        "DVT": "Viên",
        "Don_Gia": 251213,
        "Thanh_Tien": 91190319
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
    "Tong_Tien": 19545776100,
    "Items": [
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 116,
        "DVT": "Lọ",
        "Don_Gia": 61052,
        "Thanh_Tien": 7082032
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 471,
        "DVT": "Lọ",
        "Don_Gia": 14415,
        "Thanh_Tien": 6789465
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 221,
        "DVT": "Lọ",
        "Don_Gia": 35842,
        "Thanh_Tien": 7921082
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 219,
        "DVT": "Ống",
        "Don_Gia": 5310022,
        "Thanh_Tien": 1162894818
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 284,
        "DVT": "Ống",
        "Don_Gia": 21934468,
        "Thanh_Tien": 6229388912
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 311,
        "DVT": "Ống",
        "Don_Gia": 39008681,
        "Thanh_Tien": 12131699791
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
    "Tong_Tien": 2343610213,
    "Items": [
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 478,
        "DVT": "Viên",
        "Don_Gia": 14207,
        "Thanh_Tien": 6790946
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 178,
        "DVT": "Viên",
        "Don_Gia": 6191,
        "Thanh_Tien": 1101998
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 130,
        "DVT": "Tuýp",
        "Don_Gia": 37068,
        "Thanh_Tien": 4818840
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 360,
        "DVT": "Chai",
        "Don_Gia": 51258,
        "Thanh_Tien": 18452880
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 135,
        "DVT": "Viên",
        "Don_Gia": 19604,
        "Thanh_Tien": 2646540
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 412,
        "DVT": "Viên",
        "Don_Gia": 66969,
        "Thanh_Tien": 27591228
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 107,
        "DVT": "Ống",
        "Don_Gia": 5552790,
        "Thanh_Tien": 594148530
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 111,
        "DVT": "Ống",
        "Don_Gia": 15207741,
        "Thanh_Tien": 1688059251
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
    "Tong_Tien": 14877044965,
    "Items": [
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 340,
        "DVT": "Chai",
        "Don_Gia": 335812,
        "Thanh_Tien": 114176080
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 313,
        "DVT": "Viên",
        "Don_Gia": 6342,
        "Thanh_Tien": 1985046
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 262,
        "DVT": "Viên",
        "Don_Gia": 12664,
        "Thanh_Tien": 3317968
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 152,
        "DVT": "Tuýp",
        "Don_Gia": 37732,
        "Thanh_Tien": 5735264
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 362,
        "DVT": "Viên",
        "Don_Gia": 19134,
        "Thanh_Tien": 6926508
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 384,
        "DVT": "Ống",
        "Don_Gia": 26431302,
        "Thanh_Tien": 10149619968
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 245,
        "DVT": "Viên",
        "Don_Gia": 24097,
        "Thanh_Tien": 5903765
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 256,
        "DVT": "Xịt",
        "Don_Gia": 26113,
        "Thanh_Tien": 6684928
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 72,
        "DVT": "Viên",
        "Don_Gia": 50151,
        "Thanh_Tien": 3610872
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 318,
        "DVT": "Ống",
        "Don_Gia": 14399637,
        "Thanh_Tien": 4579084566
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
    "Tong_Tien": 5904009702,
    "Items": [
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 441,
        "DVT": "Lọ",
        "Don_Gia": 26170,
        "Thanh_Tien": 11540970
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 404,
        "DVT": "Viên",
        "Don_Gia": 18256,
        "Thanh_Tien": 7375424
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 392,
        "DVT": "Viên",
        "Don_Gia": 6377,
        "Thanh_Tien": 2499784
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 169,
        "DVT": "Viên",
        "Don_Gia": 63389,
        "Thanh_Tien": 10712741
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 348,
        "DVT": "Viên",
        "Don_Gia": 16825555,
        "Thanh_Tien": 5855293140
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 116,
        "DVT": "Viên",
        "Don_Gia": 25798,
        "Thanh_Tien": 2992568
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 325,
        "DVT": "Lọ",
        "Don_Gia": 41831,
        "Thanh_Tien": 13595075
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
    "Tong_Tien": 9322343711,
    "Items": [
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 32,
        "DVT": "Chai",
        "Don_Gia": 47972,
        "Thanh_Tien": 1535104
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 430,
        "DVT": "Ống",
        "Don_Gia": 5008016,
        "Thanh_Tien": 2153446880
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 215,
        "DVT": "Lọ",
        "Don_Gia": 68272,
        "Thanh_Tien": 14678480
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 450,
        "DVT": "Ống",
        "Don_Gia": 15716477,
        "Thanh_Tien": 7072414650
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 114,
        "DVT": "Xịt",
        "Don_Gia": 25911,
        "Thanh_Tien": 2953854
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 297,
        "DVT": "Lọ",
        "Don_Gia": 260319,
        "Thanh_Tien": 77314743
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
    "Tong_Tien": 135403331,
    "Items": [
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 64,
        "DVT": "Chai",
        "Don_Gia": 332664,
        "Thanh_Tien": 21290496
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 14,
        "DVT": "Lọ",
        "Don_Gia": 263858,
        "Thanh_Tien": 3694012
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 17,
        "DVT": "Lọ",
        "Don_Gia": 27487,
        "Thanh_Tien": 467279
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 292,
        "DVT": "Viên",
        "Don_Gia": 246997,
        "Thanh_Tien": 72123124
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 432,
        "DVT": "Viên",
        "Don_Gia": 68631,
        "Thanh_Tien": 29648592
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 274,
        "DVT": "Lọ",
        "Don_Gia": 15507,
        "Thanh_Tien": 4248918
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 323,
        "DVT": "Viên",
        "Don_Gia": 12170,
        "Thanh_Tien": 3930910
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
    "Tong_Tien": 14392328399,
    "Items": [
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 461,
        "DVT": "Lọ",
        "Don_Gia": 12463,
        "Thanh_Tien": 5745443
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 12,
        "DVT": "Viên",
        "Don_Gia": 6620,
        "Thanh_Tien": 79440
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 500,
        "DVT": "Viên",
        "Don_Gia": 11095,
        "Thanh_Tien": 5547500
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 243,
        "DVT": "Lọ",
        "Don_Gia": 256891,
        "Thanh_Tien": 62424513
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 490,
        "DVT": "Lọ",
        "Don_Gia": 26449,
        "Thanh_Tien": 12960010
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 116,
        "DVT": "Viên",
        "Don_Gia": 19089,
        "Thanh_Tien": 2214324
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 303,
        "DVT": "Lọ",
        "Don_Gia": 18284347,
        "Thanh_Tien": 5540157141
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 222,
        "DVT": "Ống",
        "Don_Gia": 39473874,
        "Thanh_Tien": 8763200028
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
    "Tong_Tien": 184232774,
    "Items": [
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 455,
        "DVT": "Lọ",
        "Don_Gia": 17003,
        "Thanh_Tien": 7736365
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 413,
        "DVT": "Chai",
        "Don_Gia": 51110,
        "Thanh_Tien": 21108430
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 186,
        "DVT": "Viên",
        "Don_Gia": 32767,
        "Thanh_Tien": 6094662
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 349,
        "DVT": "Lọ",
        "Don_Gia": 60598,
        "Thanh_Tien": 21148702
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 406,
        "DVT": "Viên",
        "Don_Gia": 23772,
        "Thanh_Tien": 9651432
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 454,
        "DVT": "Viên",
        "Don_Gia": 64781,
        "Thanh_Tien": 29410574
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 386,
        "DVT": "Viên",
        "Don_Gia": 12556,
        "Thanh_Tien": 4846616
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 132,
        "DVT": "Viên",
        "Don_Gia": 17683,
        "Thanh_Tien": 2334156
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 187,
        "DVT": "Viên",
        "Don_Gia": 245148,
        "Thanh_Tien": 45842676
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 454,
        "DVT": "Lọ",
        "Don_Gia": 26363,
        "Thanh_Tien": 11968802
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 462,
        "DVT": "Lọ",
        "Don_Gia": 12372,
        "Thanh_Tien": 5715864
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 371,
        "DVT": "Lọ",
        "Don_Gia": 39037,
        "Thanh_Tien": 14482727
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 90,
        "DVT": "Lọ",
        "Don_Gia": 13889,
        "Thanh_Tien": 1250010
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 434,
        "DVT": "Viên",
        "Don_Gia": 6087,
        "Thanh_Tien": 2641758
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
    "Tong_Tien": 17841972870,
    "Items": [
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 395,
        "DVT": "Viên",
        "Don_Gia": 12152,
        "Thanh_Tien": 4800040
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 29,
        "DVT": "Viên",
        "Don_Gia": 35295,
        "Thanh_Tien": 1023555
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 155,
        "DVT": "Viên",
        "Don_Gia": 55991,
        "Thanh_Tien": 8678605
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 478,
        "DVT": "Ống",
        "Don_Gia": 36215098,
        "Thanh_Tien": 17310816844
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 18,
        "DVT": "Ống",
        "Don_Gia": 21986873,
        "Thanh_Tien": 395763714
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 111,
        "DVT": "Viên",
        "Don_Gia": 64216,
        "Thanh_Tien": 7127976
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 206,
        "DVT": "Viên",
        "Don_Gia": 6022,
        "Thanh_Tien": 1240532
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 135,
        "DVT": "Xịt",
        "Don_Gia": 26685,
        "Thanh_Tien": 3602475
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 317,
        "DVT": "Chai",
        "Don_Gia": 338381,
        "Thanh_Tien": 107266777
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 96,
        "DVT": "Viên",
        "Don_Gia": 17212,
        "Thanh_Tien": 1652352
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
    "Tong_Tien": 4084757535,
    "Items": [
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 193,
        "DVT": "Viên",
        "Don_Gia": 52016,
        "Thanh_Tien": 10039088
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 231,
        "DVT": "Viên",
        "Don_Gia": 12561,
        "Thanh_Tien": 2901591
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 28,
        "DVT": "Ống",
        "Don_Gia": 38582595,
        "Thanh_Tien": 1080312660
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 126,
        "DVT": "Viên",
        "Don_Gia": 6783,
        "Thanh_Tien": 854658
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 13,
        "DVT": "Viên",
        "Don_Gia": 12643,
        "Thanh_Tien": 164359
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 105,
        "DVT": "Viên",
        "Don_Gia": 28270934,
        "Thanh_Tien": 2968448070
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 364,
        "DVT": "Viên",
        "Don_Gia": 13297,
        "Thanh_Tien": 4840108
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 163,
        "DVT": "Xịt",
        "Don_Gia": 26396,
        "Thanh_Tien": 4302548
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 74,
        "DVT": "Viên",
        "Don_Gia": 19943,
        "Thanh_Tien": 1475782
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 59,
        "DVT": "Lọ",
        "Don_Gia": 38896,
        "Thanh_Tien": 2294864
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 40,
        "DVT": "Lọ",
        "Don_Gia": 26773,
        "Thanh_Tien": 1070920
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 323,
        "DVT": "Viên",
        "Don_Gia": 15019,
        "Thanh_Tien": 4851137
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 225,
        "DVT": "Lọ",
        "Don_Gia": 14230,
        "Thanh_Tien": 3201750
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
    "Tong_Tien": 22339183802,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 250,
        "DVT": "Viên",
        "Don_Gia": 15563327,
        "Thanh_Tien": 3890831750
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 171,
        "DVT": "Ống",
        "Don_Gia": 29270010,
        "Thanh_Tien": 5005171710
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 149,
        "DVT": "Viên",
        "Don_Gia": 18552,
        "Thanh_Tien": 2764248
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 309,
        "DVT": "Viên",
        "Don_Gia": 22937,
        "Thanh_Tien": 7087533
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 486,
        "DVT": "Viên",
        "Don_Gia": 13372,
        "Thanh_Tien": 6498792
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 90,
        "DVT": "Lọ",
        "Don_Gia": 13741,
        "Thanh_Tien": 1236690
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 27,
        "DVT": "Lọ",
        "Don_Gia": 17842752,
        "Thanh_Tien": 481754304
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 71,
        "DVT": "Ống",
        "Don_Gia": 5568685,
        "Thanh_Tien": 395376635
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 115,
        "DVT": "Lọ",
        "Don_Gia": 26332,
        "Thanh_Tien": 3028180
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 457,
        "DVT": "Viên",
        "Don_Gia": 27028239,
        "Thanh_Tien": 12351905223
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 277,
        "DVT": "Viên",
        "Don_Gia": 33870,
        "Thanh_Tien": 9381990
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 488,
        "DVT": "Chai",
        "Don_Gia": 331967,
        "Thanh_Tien": 161999896
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 371,
        "DVT": "Viên",
        "Don_Gia": 13258,
        "Thanh_Tien": 4918718
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 464,
        "DVT": "Lọ",
        "Don_Gia": 34111,
        "Thanh_Tien": 15827504
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 167,
        "DVT": "Viên",
        "Don_Gia": 8387,
        "Thanh_Tien": 1400629
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
    "Tong_Tien": 19035688634,
    "Items": [
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 197,
        "DVT": "Viên",
        "Don_Gia": 6565,
        "Thanh_Tien": 1293305
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 292,
        "DVT": "Viên",
        "Don_Gia": 15986,
        "Thanh_Tien": 4667912
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 34,
        "DVT": "Lọ",
        "Don_Gia": 11688,
        "Thanh_Tien": 397392
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 196,
        "DVT": "Viên",
        "Don_Gia": 13131,
        "Thanh_Tien": 2573676
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 275,
        "DVT": "Lọ",
        "Don_Gia": 26592,
        "Thanh_Tien": 7312800
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 338,
        "DVT": "Viên",
        "Don_Gia": 23941,
        "Thanh_Tien": 8092058
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 306,
        "DVT": "Ống",
        "Don_Gia": 22634759,
        "Thanh_Tien": 6926236254
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 66,
        "DVT": "Ống",
        "Don_Gia": 15030654,
        "Thanh_Tien": 992023164
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 72,
        "DVT": "Viên",
        "Don_Gia": 66167,
        "Thanh_Tien": 4764024
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 67,
        "DVT": "Ống",
        "Don_Gia": 5199705,
        "Thanh_Tien": 348380235
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 390,
        "DVT": "Viên",
        "Don_Gia": 27471941,
        "Thanh_Tien": 10714056990
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 415,
        "DVT": "Viên",
        "Don_Gia": 7582,
        "Thanh_Tien": 3146530
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 426,
        "DVT": "Viên",
        "Don_Gia": 36647,
        "Thanh_Tien": 15611622
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 256,
        "DVT": "Xịt",
        "Don_Gia": 27862,
        "Thanh_Tien": 7132672
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
    "Tong_Tien": 30111235294,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 256,
        "DVT": "Ống",
        "Don_Gia": 28519202,
        "Thanh_Tien": 7300915712
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 36,
        "DVT": "Viên",
        "Don_Gia": 56535,
        "Thanh_Tien": 2035260
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 223,
        "DVT": "Viên",
        "Don_Gia": 19065,
        "Thanh_Tien": 4251495
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 63,
        "DVT": "Lọ",
        "Don_Gia": 246757,
        "Thanh_Tien": 15545691
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 472,
        "DVT": "Viên",
        "Don_Gia": 14114,
        "Thanh_Tien": 6661808
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 84,
        "DVT": "Viên",
        "Don_Gia": 13755,
        "Thanh_Tien": 1155420
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 217,
        "DVT": "Ống",
        "Don_Gia": 38406159,
        "Thanh_Tien": 8334136503
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 195,
        "DVT": "Lọ",
        "Don_Gia": 13328,
        "Thanh_Tien": 2598960
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 323,
        "DVT": "Viên",
        "Don_Gia": 17132772,
        "Thanh_Tien": 5533885356
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 272,
        "DVT": "Tuýp",
        "Don_Gia": 40159,
        "Thanh_Tien": 10923248
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 495,
        "DVT": "Lọ",
        "Don_Gia": 17937474,
        "Thanh_Tien": 8879049630
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 247,
        "DVT": "Viên",
        "Don_Gia": 11934,
        "Thanh_Tien": 2947698
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 402,
        "DVT": "Viên",
        "Don_Gia": 35452,
        "Thanh_Tien": 14251704
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 247,
        "DVT": "Lọ",
        "Don_Gia": 11647,
        "Thanh_Tien": 2876809
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
    "Tong_Tien": 20541412356,
    "Items": [
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 326,
        "DVT": "Viên",
        "Don_Gia": 7609,
        "Thanh_Tien": 2480534
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 492,
        "DVT": "Lọ",
        "Don_Gia": 13685,
        "Thanh_Tien": 6733020
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 18,
        "DVT": "Lọ",
        "Don_Gia": 42745,
        "Thanh_Tien": 769410
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 275,
        "DVT": "Lọ",
        "Don_Gia": 11882,
        "Thanh_Tien": 3267550
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 366,
        "DVT": "Ống",
        "Don_Gia": 15893112,
        "Thanh_Tien": 5816878992
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 248,
        "DVT": "Viên",
        "Don_Gia": 27811454,
        "Thanh_Tien": 6897240592
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 19,
        "DVT": "Ống",
        "Don_Gia": 30068443,
        "Thanh_Tien": 571300417
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 296,
        "DVT": "Ống",
        "Don_Gia": 24176780,
        "Thanh_Tien": 7156326880
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 16,
        "DVT": "Ống",
        "Don_Gia": 5228291,
        "Thanh_Tien": 83652656
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 169,
        "DVT": "Lọ",
        "Don_Gia": 16345,
        "Thanh_Tien": 2762305
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
    "Tong_Tien": 25010838773,
    "Items": [
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 92,
        "DVT": "Viên",
        "Don_Gia": 12547,
        "Thanh_Tien": 1154324
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 293,
        "DVT": "Viên",
        "Don_Gia": 8566,
        "Thanh_Tien": 2509838
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 138,
        "DVT": "Viên",
        "Don_Gia": 11908,
        "Thanh_Tien": 1643304
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 444,
        "DVT": "Tuýp",
        "Don_Gia": 35004,
        "Thanh_Tien": 15541776
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 305,
        "DVT": "Viên",
        "Don_Gia": 6245,
        "Thanh_Tien": 1904725
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 301,
        "DVT": "Ống",
        "Don_Gia": 24519754,
        "Thanh_Tien": 7380445954
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 238,
        "DVT": "Lọ",
        "Don_Gia": 41900,
        "Thanh_Tien": 9972200
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 232,
        "DVT": "Viên",
        "Don_Gia": 16227943,
        "Thanh_Tien": 3764882776
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 482,
        "DVT": "Lọ",
        "Don_Gia": 34224,
        "Thanh_Tien": 16495968
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 260,
        "DVT": "Viên",
        "Don_Gia": 54591,
        "Thanh_Tien": 14193660
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 471,
        "DVT": "Xịt",
        "Don_Gia": 26316,
        "Thanh_Tien": 12394836
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 458,
        "DVT": "Ống",
        "Don_Gia": 30108514,
        "Thanh_Tien": 13789699412
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
    "Tong_Tien": 11534976367,
    "Items": [
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 148,
        "DVT": "Lọ",
        "Don_Gia": 61275,
        "Thanh_Tien": 9068700
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 106,
        "DVT": "Ống",
        "Don_Gia": 40227203,
        "Thanh_Tien": 4264083518
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 207,
        "DVT": "Viên",
        "Don_Gia": 14362,
        "Thanh_Tien": 2972934
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 236,
        "DVT": "Lọ",
        "Don_Gia": 29012,
        "Thanh_Tien": 6846832
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 23,
        "DVT": "Lọ",
        "Don_Gia": 11226,
        "Thanh_Tien": 258198
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 238,
        "DVT": "Xịt",
        "Don_Gia": 28607,
        "Thanh_Tien": 6808466
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 47,
        "DVT": "Lọ",
        "Don_Gia": 44049,
        "Thanh_Tien": 2070303
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 216,
        "DVT": "Viên",
        "Don_Gia": 16960,
        "Thanh_Tien": 3663360
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 35,
        "DVT": "Lọ",
        "Don_Gia": 265002,
        "Thanh_Tien": 9275070
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 451,
        "DVT": "Viên",
        "Don_Gia": 8278,
        "Thanh_Tien": 3733378
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 347,
        "DVT": "Chai",
        "Don_Gia": 49826,
        "Thanh_Tien": 17289622
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 429,
        "DVT": "Viên",
        "Don_Gia": 16787606,
        "Thanh_Tien": 7201882974
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 31,
        "DVT": "Viên",
        "Don_Gia": 53829,
        "Thanh_Tien": 1668699
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 303,
        "DVT": "Viên",
        "Don_Gia": 17671,
        "Thanh_Tien": 5354313
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
    "Tong_Tien": 33456128208,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 342,
        "DVT": "Ống",
        "Don_Gia": 27909098,
        "Thanh_Tien": 9544911516
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 316,
        "DVT": "Ống",
        "Don_Gia": 5458403,
        "Thanh_Tien": 1724855348
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 362,
        "DVT": "Ống",
        "Don_Gia": 24390871,
        "Thanh_Tien": 8829495302
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 176,
        "DVT": "Chai",
        "Don_Gia": 321279,
        "Thanh_Tien": 56545104
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 353,
        "DVT": "Viên",
        "Don_Gia": 12788,
        "Thanh_Tien": 4514164
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 113,
        "DVT": "Viên",
        "Don_Gia": 25137,
        "Thanh_Tien": 2840481
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 78,
        "DVT": "Ống",
        "Don_Gia": 40641631,
        "Thanh_Tien": 3170047218
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 193,
        "DVT": "Ống",
        "Don_Gia": 15327842,
        "Thanh_Tien": 2958273506
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 191,
        "DVT": "Viên",
        "Don_Gia": 12543,
        "Thanh_Tien": 2395713
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 169,
        "DVT": "Viên",
        "Don_Gia": 14170,
        "Thanh_Tien": 2394730
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 272,
        "DVT": "Lọ",
        "Don_Gia": 65512,
        "Thanh_Tien": 17819264
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 284,
        "DVT": "Viên",
        "Don_Gia": 25134508,
        "Thanh_Tien": 7138200272
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 330,
        "DVT": "Lọ",
        "Don_Gia": 11623,
        "Thanh_Tien": 3835590
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
    "Tong_Tien": 6767499807,
    "Items": [
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 28,
        "DVT": "Viên",
        "Don_Gia": 55701,
        "Thanh_Tien": 1559628
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 156,
        "DVT": "Viên",
        "Don_Gia": 26914967,
        "Thanh_Tien": 4198734852
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 61,
        "DVT": "Ống",
        "Don_Gia": 5100128,
        "Thanh_Tien": 311107808
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 187,
        "DVT": "Viên",
        "Don_Gia": 13342,
        "Thanh_Tien": 2494954
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 144,
        "DVT": "Ống",
        "Don_Gia": 14260479,
        "Thanh_Tien": 2053508976
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 417,
        "DVT": "Lọ",
        "Don_Gia": 246301,
        "Thanh_Tien": 102707517
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 487,
        "DVT": "Viên",
        "Don_Gia": 6472,
        "Thanh_Tien": 3151864
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 226,
        "DVT": "Viên",
        "Don_Gia": 253174,
        "Thanh_Tien": 57217324
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 243,
        "DVT": "Viên",
        "Don_Gia": 17110,
        "Thanh_Tien": 4157730
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 89,
        "DVT": "Lọ",
        "Don_Gia": 15443,
        "Thanh_Tien": 1374427
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 492,
        "DVT": "Viên",
        "Don_Gia": 25749,
        "Thanh_Tien": 12668508
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 487,
        "DVT": "Tuýp",
        "Don_Gia": 38637,
        "Thanh_Tien": 18816219
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
    "Tong_Tien": 12943639126,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 490,
        "DVT": "Viên",
        "Don_Gia": 26183784,
        "Thanh_Tien": 12830054160
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 48,
        "DVT": "Lọ",
        "Don_Gia": 63143,
        "Thanh_Tien": 3030864
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 410,
        "DVT": "Viên",
        "Don_Gia": 19473,
        "Thanh_Tien": 7983930
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 104,
        "DVT": "Viên",
        "Don_Gia": 8170,
        "Thanh_Tien": 849680
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 376,
        "DVT": "Viên",
        "Don_Gia": 12535,
        "Thanh_Tien": 4713160
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 60,
        "DVT": "Viên",
        "Don_Gia": 13840,
        "Thanh_Tien": 830400
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 226,
        "DVT": "Lọ",
        "Don_Gia": 43087,
        "Thanh_Tien": 9737662
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 201,
        "DVT": "Chai",
        "Don_Gia": 335762,
        "Thanh_Tien": 67488162
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 343,
        "DVT": "Viên",
        "Don_Gia": 12558,
        "Thanh_Tien": 4307394
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 231,
        "DVT": "Lọ",
        "Don_Gia": 11072,
        "Thanh_Tien": 2557632
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 306,
        "DVT": "Tuýp",
        "Don_Gia": 39497,
        "Thanh_Tien": 12086082
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
    "Tong_Tien": 27161033512,
    "Items": [
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 365,
        "DVT": "Ống",
        "Don_Gia": 39437807,
        "Thanh_Tien": 14394799555
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 56,
        "DVT": "Viên",
        "Don_Gia": 6018,
        "Thanh_Tien": 337008
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 64,
        "DVT": "Lọ",
        "Don_Gia": 18694073,
        "Thanh_Tien": 1196420672
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 288,
        "DVT": "Ống",
        "Don_Gia": 27234349,
        "Thanh_Tien": 7843492512
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 245,
        "DVT": "Ống",
        "Don_Gia": 15208097,
        "Thanh_Tien": 3725983765
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
    "Tong_Tien": 8210652628,
    "Items": [
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 288,
        "DVT": "Viên",
        "Don_Gia": 28223049,
        "Thanh_Tien": 8128238112
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 150,
        "DVT": "Lọ",
        "Don_Gia": 65416,
        "Thanh_Tien": 9812400
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 211,
        "DVT": "Viên",
        "Don_Gia": 238632,
        "Thanh_Tien": 50351352
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 10,
        "DVT": "Lọ",
        "Don_Gia": 28251,
        "Thanh_Tien": 282510
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 442,
        "DVT": "Viên",
        "Don_Gia": 8295,
        "Thanh_Tien": 3666390
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 268,
        "DVT": "Viên",
        "Don_Gia": 6601,
        "Thanh_Tien": 1769068
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 377,
        "DVT": "Viên",
        "Don_Gia": 12778,
        "Thanh_Tien": 4817306
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 285,
        "DVT": "Tuýp",
        "Don_Gia": 36816,
        "Thanh_Tien": 10492560
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 29,
        "DVT": "Lọ",
        "Don_Gia": 42170,
        "Thanh_Tien": 1222930
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
    "Tong_Tien": 16890193513,
    "Items": [
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 467,
        "DVT": "Lọ",
        "Don_Gia": 14007,
        "Thanh_Tien": 6541269
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 384,
        "DVT": "Lọ",
        "Don_Gia": 38883,
        "Thanh_Tien": 14931072
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 208,
        "DVT": "Viên",
        "Don_Gia": 25133,
        "Thanh_Tien": 5227664
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 482,
        "DVT": "Tuýp",
        "Don_Gia": 36334,
        "Thanh_Tien": 17512988
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 462,
        "DVT": "Viên",
        "Don_Gia": 18769,
        "Thanh_Tien": 8671278
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 490,
        "DVT": "Lọ",
        "Don_Gia": 28199,
        "Thanh_Tien": 13817510
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 410,
        "DVT": "Lọ",
        "Don_Gia": 18615334,
        "Thanh_Tien": 7632286940
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 215,
        "DVT": "Viên",
        "Don_Gia": 16193936,
        "Thanh_Tien": 3481696240
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 16,
        "DVT": "Viên",
        "Don_Gia": 6785,
        "Thanh_Tien": 108560
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 359,
        "DVT": "Ống",
        "Don_Gia": 15901843,
        "Thanh_Tien": 5708761637
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 15,
        "DVT": "Lọ",
        "Don_Gia": 42557,
        "Thanh_Tien": 638355
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
    "Tong_Tien": 27930984696,
    "Items": [
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 315,
        "DVT": "Viên",
        "Don_Gia": 24650,
        "Thanh_Tien": 7764750
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 455,
        "DVT": "Chai",
        "Don_Gia": 49916,
        "Thanh_Tien": 22711780
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 369,
        "DVT": "Viên",
        "Don_Gia": 6705,
        "Thanh_Tien": 2474145
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 258,
        "DVT": "Viên",
        "Don_Gia": 25065486,
        "Thanh_Tien": 6466895388
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 251,
        "DVT": "Viên",
        "Don_Gia": 17157637,
        "Thanh_Tien": 4306566887
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 235,
        "DVT": "Viên",
        "Don_Gia": 250731,
        "Thanh_Tien": 58921785
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 363,
        "DVT": "Viên",
        "Don_Gia": 20094,
        "Thanh_Tien": 7294122
      },
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 434,
        "DVT": "Ống",
        "Don_Gia": 39259377,
        "Thanh_Tien": 17038569618
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 63,
        "DVT": "Chai",
        "Don_Gia": 314067,
        "Thanh_Tien": 19786221
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
    "Tong_Tien": 7345856966,
    "Items": [
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 113,
        "DVT": "Lọ",
        "Don_Gia": 17214906,
        "Thanh_Tien": 1945284378
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 293,
        "DVT": "Chai",
        "Don_Gia": 337890,
        "Thanh_Tien": 99001770
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 264,
        "DVT": "Ống",
        "Don_Gia": 5492257,
        "Thanh_Tien": 1449955848
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 83,
        "DVT": "Viên",
        "Don_Gia": 68891,
        "Thanh_Tien": 5717953
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 137,
        "DVT": "Viên",
        "Don_Gia": 28072241,
        "Thanh_Tien": 3845897017
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
    "Tong_Tien": 41067784,
    "Items": [
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 31,
        "DVT": "Viên",
        "Don_Gia": 239545,
        "Thanh_Tien": 7425895
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 413,
        "DVT": "Lọ",
        "Don_Gia": 45987,
        "Thanh_Tien": 18992631
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 126,
        "DVT": "Lọ",
        "Don_Gia": 36428,
        "Thanh_Tien": 4589928
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 82,
        "DVT": "Viên",
        "Don_Gia": 53403,
        "Thanh_Tien": 4379046
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 339,
        "DVT": "Lọ",
        "Don_Gia": 16756,
        "Thanh_Tien": 5680284
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
    "Tong_Tien": 4588870138,
    "Items": [
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 107,
        "DVT": "Viên",
        "Don_Gia": 16514517,
        "Thanh_Tien": 1767053319
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 186,
        "DVT": "Ống",
        "Don_Gia": 15007514,
        "Thanh_Tien": 2791397604
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 266,
        "DVT": "Viên",
        "Don_Gia": 13064,
        "Thanh_Tien": 3475024
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 142,
        "DVT": "Lọ",
        "Don_Gia": 38853,
        "Thanh_Tien": 5517126
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 423,
        "DVT": "Viên",
        "Don_Gia": 50655,
        "Thanh_Tien": 21427065
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
    "Tong_Tien": 14290674911,
    "Items": [
      {
        "Ma_SP": "SP203",
        "Ten_SP": "Morphin",
        "SL": 147,
        "DVT": "Ống",
        "Don_Gia": 37250396,
        "Thanh_Tien": 5475808212
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 264,
        "DVT": "Viên",
        "Don_Gia": 19645,
        "Thanh_Tien": 5186280
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 133,
        "DVT": "Viên",
        "Don_Gia": 15168,
        "Thanh_Tien": 2017344
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 494,
        "DVT": "Ống",
        "Don_Gia": 5613794,
        "Thanh_Tien": 2773214236
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 136,
        "DVT": "Viên",
        "Don_Gia": 8003,
        "Thanh_Tien": 1088408
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 391,
        "DVT": "Lọ",
        "Don_Gia": 38468,
        "Thanh_Tien": 15040988
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 80,
        "DVT": "Viên",
        "Don_Gia": 6255,
        "Thanh_Tien": 500400
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 135,
        "DVT": "Viên",
        "Don_Gia": 62358,
        "Thanh_Tien": 8418330
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 267,
        "DVT": "Viên",
        "Don_Gia": 12678,
        "Thanh_Tien": 3385026
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 355,
        "DVT": "Chai",
        "Don_Gia": 303655,
        "Thanh_Tien": 107797525
      },
      {
        "Ma_SP": "SP202",
        "Ten_SP": "Lidocain + epinephrine",
        "SL": 159,
        "DVT": "Ống",
        "Don_Gia": 21968873,
        "Thanh_Tien": 3493050807
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 197,
        "DVT": "Viên",
        "Don_Gia": 25615,
        "Thanh_Tien": 5046155
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 87,
        "DVT": "Ống",
        "Don_Gia": 27587600,
        "Thanh_Tien": 2400121200
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
    "Tong_Tien": 11470534898,
    "Items": [
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 228,
        "DVT": "Lọ",
        "Don_Gia": 65954,
        "Thanh_Tien": 15037512
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 194,
        "DVT": "Xịt",
        "Don_Gia": 28070,
        "Thanh_Tien": 5445580
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 254,
        "DVT": "Viên",
        "Don_Gia": 15721589,
        "Thanh_Tien": 3993283606
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 121,
        "DVT": "Chai",
        "Don_Gia": 333177,
        "Thanh_Tien": 40314417
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 229,
        "DVT": "Viên",
        "Don_Gia": 19256,
        "Thanh_Tien": 4409624
      },
      {
        "Ma_SP": "SP214",
        "Ten_SP": "Pantoprazol",
        "SL": 15,
        "DVT": "Viên",
        "Don_Gia": 64207,
        "Thanh_Tien": 963105
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 150,
        "DVT": "Viên",
        "Don_Gia": 12979,
        "Thanh_Tien": 1946850
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 50,
        "DVT": "Viên",
        "Don_Gia": 37216,
        "Thanh_Tien": 1860800
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 491,
        "DVT": "Ống",
        "Don_Gia": 15079396,
        "Thanh_Tien": 7403983436
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 248,
        "DVT": "Viên",
        "Don_Gia": 13266,
        "Thanh_Tien": 3289968
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
    "Tong_Tien": 19546044238,
    "Items": [
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 329,
        "DVT": "Viên",
        "Don_Gia": 8622,
        "Thanh_Tien": 2836638
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 90,
        "DVT": "Viên",
        "Don_Gia": 23029,
        "Thanh_Tien": 2072610
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 317,
        "DVT": "Lọ",
        "Don_Gia": 66471,
        "Thanh_Tien": 21071307
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 427,
        "DVT": "Ống",
        "Don_Gia": 15538528,
        "Thanh_Tien": 6634951456
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 307,
        "DVT": "Xịt",
        "Don_Gia": 27790,
        "Thanh_Tien": 8531530
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 179,
        "DVT": "Lọ",
        "Don_Gia": 17903749,
        "Thanh_Tien": 3204771071
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 158,
        "DVT": "Ống",
        "Don_Gia": 27342369,
        "Thanh_Tien": 4320094302
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 376,
        "DVT": "Lọ",
        "Don_Gia": 263242,
        "Thanh_Tien": 98978992
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 265,
        "DVT": "Chai",
        "Don_Gia": 312070,
        "Thanh_Tien": 82698550
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 230,
        "DVT": "Viên",
        "Don_Gia": 13424,
        "Thanh_Tien": 3087520
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 192,
        "DVT": "Viên",
        "Don_Gia": 26865547,
        "Thanh_Tien": 5158185024
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 200,
        "DVT": "Lọ",
        "Don_Gia": 12399,
        "Thanh_Tien": 2479800
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 479,
        "DVT": "Lọ",
        "Don_Gia": 13122,
        "Thanh_Tien": 6285438
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
    "Tong_Tien": 11674349540,
    "Items": [
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 253,
        "DVT": "Ống",
        "Don_Gia": 28708059,
        "Thanh_Tien": 7263138927
      },
      {
        "Ma_SP": "SP310",
        "Ten_SP": "Timolol Eye Drop",
        "SL": 45,
        "DVT": "Lọ",
        "Don_Gia": 14030,
        "Thanh_Tien": 631350
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 190,
        "DVT": "Chai",
        "Don_Gia": 45043,
        "Thanh_Tien": 8558170
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 10,
        "DVT": "Lọ",
        "Don_Gia": 16781177,
        "Thanh_Tien": 167811770
      },
      {
        "Ma_SP": "SP302",
        "Ten_SP": "Indomethacin Eye Drop",
        "SL": 229,
        "DVT": "Lọ",
        "Don_Gia": 36296,
        "Thanh_Tien": 8311784
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 377,
        "DVT": "Viên",
        "Don_Gia": 51091,
        "Thanh_Tien": 19261307
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 437,
        "DVT": "Lọ",
        "Don_Gia": 12048,
        "Thanh_Tien": 5264976
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 37,
        "DVT": "Lọ",
        "Don_Gia": 67271,
        "Thanh_Tien": 2489027
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 46,
        "DVT": "Viên",
        "Don_Gia": 24704,
        "Thanh_Tien": 1136384
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 381,
        "DVT": "Tuýp",
        "Don_Gia": 39367,
        "Thanh_Tien": 14998827
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 165,
        "DVT": "Viên",
        "Don_Gia": 25238141,
        "Thanh_Tien": 4164293265
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 113,
        "DVT": "Viên",
        "Don_Gia": 6106,
        "Thanh_Tien": 689978
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 172,
        "DVT": "Lọ",
        "Don_Gia": 42200,
        "Thanh_Tien": 7258400
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 367,
        "DVT": "Xịt",
        "Don_Gia": 28625,
        "Thanh_Tien": 10505375
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
    "Tong_Tien": 12359557010,
    "Items": [
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 199,
        "DVT": "Viên",
        "Don_Gia": 14369,
        "Thanh_Tien": 2859431
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 66,
        "DVT": "Lọ",
        "Don_Gia": 40148,
        "Thanh_Tien": 2649768
      },
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 89,
        "DVT": "Viên",
        "Don_Gia": 252994,
        "Thanh_Tien": 22516466
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 156,
        "DVT": "Viên",
        "Don_Gia": 18919,
        "Thanh_Tien": 2951364
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 460,
        "DVT": "Tuýp",
        "Don_Gia": 37174,
        "Thanh_Tien": 17100040
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 33,
        "DVT": "Viên",
        "Don_Gia": 24793,
        "Thanh_Tien": 818169
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 23,
        "DVT": "Lọ",
        "Don_Gia": 12288,
        "Thanh_Tien": 282624
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 25,
        "DVT": "Lọ",
        "Don_Gia": 61257,
        "Thanh_Tien": 1531425
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 457,
        "DVT": "Viên",
        "Don_Gia": 25908778,
        "Thanh_Tien": 11840311546
      },
      {
        "Ma_SP": "SP301",
        "Ten_SP": "HPMC Eye Drop",
        "SL": 302,
        "DVT": "Lọ",
        "Don_Gia": 16862,
        "Thanh_Tien": 5092324
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 257,
        "DVT": "Viên",
        "Don_Gia": 12793,
        "Thanh_Tien": 3287801
      },
      {
        "Ma_SP": "SP213",
        "Ten_SP": "Bromhexin",
        "SL": 232,
        "DVT": "Viên",
        "Don_Gia": 7556,
        "Thanh_Tien": 1752992
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 15,
        "DVT": "Ống",
        "Don_Gia": 28751564,
        "Thanh_Tien": 431273460
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 480,
        "DVT": "Viên",
        "Don_Gia": 56520,
        "Thanh_Tien": 27129600
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
    "Tong_Tien": 14197680826,
    "Items": [
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 296,
        "DVT": "Viên",
        "Don_Gia": 6482,
        "Thanh_Tien": 1918672
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 188,
        "DVT": "Chai",
        "Don_Gia": 49058,
        "Thanh_Tien": 9222904
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 82,
        "DVT": "Xịt",
        "Don_Gia": 25947,
        "Thanh_Tien": 2127654
      },
      {
        "Ma_SP": "SP308",
        "Ten_SP": "Povidon Iodin HD",
        "SL": 235,
        "DVT": "Chai",
        "Don_Gia": 314601,
        "Thanh_Tien": 73931235
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 268,
        "DVT": "Lọ",
        "Don_Gia": 11447,
        "Thanh_Tien": 3067796
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 64,
        "DVT": "Lọ",
        "Don_Gia": 18749576,
        "Thanh_Tien": 1199972864
      },
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 222,
        "DVT": "Viên",
        "Don_Gia": 33672,
        "Thanh_Tien": 7475184
      },
      {
        "Ma_SP": "SP210",
        "Ten_SP": "Bisoprolol + Amlodipine",
        "SL": 194,
        "DVT": "Viên",
        "Don_Gia": 15937698,
        "Thanh_Tien": 3091913412
      },
      {
        "Ma_SP": "SP303",
        "Ten_SP": "Moxifloxacin Eye Drop",
        "SL": 98,
        "DVT": "Lọ",
        "Don_Gia": 40278,
        "Thanh_Tien": 3947244
      },
      {
        "Ma_SP": "SP402",
        "Ten_SP": "Augmentin 1g HD",
        "SL": 499,
        "DVT": "Viên",
        "Don_Gia": 12374,
        "Thanh_Tien": 6174626
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 186,
        "DVT": "Ống",
        "Don_Gia": 5215436,
        "Thanh_Tien": 970071096
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 318,
        "DVT": "Ống",
        "Don_Gia": 27703993,
        "Thanh_Tien": 8809869774
      },
      {
        "Ma_SP": "SP216",
        "Ten_SP": "Kali clorid",
        "SL": 416,
        "DVT": "Viên",
        "Don_Gia": 13463,
        "Thanh_Tien": 5600608
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 83,
        "DVT": "Lọ",
        "Don_Gia": 28929,
        "Thanh_Tien": 2401107
      },
      {
        "Ma_SP": "SP001",
        "Ten_SP": "Amoxicillin",
        "SL": 425,
        "DVT": "Viên",
        "Don_Gia": 23498,
        "Thanh_Tien": 9986650
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
    "Tong_Tien": 3691379880,
    "Items": [
      {
        "Ma_SP": "SP215",
        "Ten_SP": "Spironolacton",
        "SL": 245,
        "DVT": "Viên",
        "Don_Gia": 34730,
        "Thanh_Tien": 8508850
      },
      {
        "Ma_SP": "SP423",
        "Ten_SP": "Lantus HD",
        "SL": 269,
        "DVT": "Lọ",
        "Don_Gia": 264362,
        "Thanh_Tien": 71113378
      },
      {
        "Ma_SP": "SP211",
        "Ten_SP": "Aciclovir",
        "SL": 190,
        "DVT": "Viên",
        "Don_Gia": 18276,
        "Thanh_Tien": 3472440
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 143,
        "DVT": "Viên",
        "Don_Gia": 25197524,
        "Thanh_Tien": 3603245932
      },
      {
        "Ma_SP": "SP304",
        "Ten_SP": "Moxifloxacin + Dexamethason",
        "SL": 432,
        "DVT": "Lọ",
        "Don_Gia": 11665,
        "Thanh_Tien": 5039280
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
    "Tong_Tien": 25674737603,
    "Items": [
      {
        "Ma_SP": "SP401",
        "Ten_SP": "Apitor-Ez",
        "SL": 314,
        "DVT": "Viên",
        "Don_Gia": 235386,
        "Thanh_Tien": 73911204
      },
      {
        "Ma_SP": "SP208",
        "Ten_SP": "Avelumab",
        "SL": 400,
        "DVT": "Ống",
        "Don_Gia": 5413572,
        "Thanh_Tien": 2165428800
      },
      {
        "Ma_SP": "SP204",
        "Ten_SP": "Proparacain",
        "SL": 384,
        "DVT": "Lọ",
        "Don_Gia": 17917240,
        "Thanh_Tien": 6880220160
      },
      {
        "Ma_SP": "SP305",
        "Ten_SP": "Oxy già HD",
        "SL": 277,
        "DVT": "Chai",
        "Don_Gia": 45405,
        "Thanh_Tien": 12577185
      },
      {
        "Ma_SP": "SP008",
        "Ten_SP": "Paracetamol",
        "SL": 42,
        "DVT": "Viên",
        "Don_Gia": 6251,
        "Thanh_Tien": 262542
      },
      {
        "Ma_SP": "SP209",
        "Ten_SP": "Azathioprin",
        "SL": 199,
        "DVT": "Viên",
        "Don_Gia": 25807646,
        "Thanh_Tien": 5135721554
      },
      {
        "Ma_SP": "SP206",
        "Ten_SP": "Meloxicam",
        "SL": 80,
        "DVT": "Viên",
        "Don_Gia": 16904,
        "Thanh_Tien": 1352320
      },
      {
        "Ma_SP": "SP023",
        "Ten_SP": "Amlodipine",
        "SL": 213,
        "DVT": "Viên",
        "Don_Gia": 12948,
        "Thanh_Tien": 2757924
      },
      {
        "Ma_SP": "SP212",
        "Ten_SP": "Salbutamol",
        "SL": 148,
        "DVT": "Xịt",
        "Don_Gia": 28516,
        "Thanh_Tien": 4220368
      },
      {
        "Ma_SP": "SP201",
        "Ten_SP": "Atropin",
        "SL": 207,
        "DVT": "Ống",
        "Don_Gia": 16054555,
        "Thanh_Tien": 3323292885
      },
      {
        "Ma_SP": "SP306",
        "Ten_SP": "Ofloxacin Eye Drop",
        "SL": 254,
        "DVT": "Lọ",
        "Don_Gia": 28223,
        "Thanh_Tien": 7168642
      },
      {
        "Ma_SP": "SP309",
        "Ten_SP": "Proparacain hydroclorid",
        "SL": 78,
        "DVT": "Lọ",
        "Don_Gia": 67670,
        "Thanh_Tien": 5278260
      },
      {
        "Ma_SP": "SP205",
        "Ten_SP": "Pethidin",
        "SL": 274,
        "DVT": "Ống",
        "Don_Gia": 29393450,
        "Thanh_Tien": 8053805300
      },
      {
        "Ma_SP": "SP307",
        "Ten_SP": "Ofloxacin Tra Mắt",
        "SL": 121,
        "DVT": "Tuýp",
        "Don_Gia": 35230,
        "Thanh_Tien": 4262830
      },
      {
        "Ma_SP": "SP207",
        "Ten_SP": "Misoprostol",
        "SL": 87,
        "DVT": "Viên",
        "Don_Gia": 51467,
        "Thanh_Tien": 4477629
      }
    ]
  }
];
