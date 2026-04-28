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
  // --- NHÓM KHỚP MẠNH VỚI CRAWL DATA ĐỂ TỐI ƯU TỶ LỆ DOANH THU (50-70%) ---
  // Hạ giá niêm yết xuống mức cực thấp (~30-50% giá kê khai) để luôn pass điều kiện (Giá NY < Giá Trần)
  { id: 'SP101', Ma_Hang: 'HD-MEL', Ten_Biet_Duoc: 'Meloxicam 7.5mg', Hoat_Chat: 'Meloxicam', Ham_Luong: '7.5mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 2500, SL_Ton: 5000000, Gia_Niem_Yet: 450 },
  { id: 'SP102', Ma_Hang: 'HD-ATR', Ten_Biet_Duoc: 'Atropin 0.25mg', Hoat_Chat: 'Atropin sulfat', Ham_Luong: '0.25mg/ml', Duong_Dung: 'Tiêm', Dang_Bao_Che: 'Thuốc tiêm', Nhom_Ky_Thuat: '4', Gia_Ke_Khai: 5000, SL_Ton: 5000000, Gia_Niem_Yet: 900 },
  { id: 'SP103', Ma_Hang: 'HD-SPI', Ten_Biet_Duoc: 'Spironolacton 25mg', Hoat_Chat: 'Spironolacton', Ham_Luong: '25mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 3200, SL_Ton: 5000000, Gia_Niem_Yet: 750 },
  { id: 'SP104', Ma_Hang: 'HD-ACI', Ten_Biet_Duoc: 'Aciclovir 200mg', Hoat_Chat: 'Aciclovir', Ham_Luong: '200mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 2100, SL_Ton: 5000000, Gia_Niem_Yet: 550 },
  { id: 'SP105', Ma_Hang: 'HD-KAL', Ten_Biet_Duoc: 'Kali Clorid 500mg', Hoat_Chat: 'Kali clorid', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1500, SL_Ton: 5000000, Gia_Niem_Yet: 420 },
  { id: 'SP106', Ma_Hang: 'HD-ALT', Ten_Biet_Duoc: 'Alteplase 50mg', Hoat_Chat: 'Alteplase', Ham_Luong: '50mg', Duong_Dung: 'Tiêm truyền', Dang_Bao_Che: 'Bột pha tiêm', Nhom_Ky_Thuat: '1', Gia_Ke_Khai: 12500000, SL_Ton: 1000000, Gia_Niem_Yet: 4500000 },
  { id: 'SP107', Ma_Hang: 'HD-MIS', Ten_Biet_Duoc: 'Misoprostol 200mcg', Hoat_Chat: 'Misoprostol', Ham_Luong: '200mcg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '2', Gia_Ke_Khai: 18000, SL_Ton: 1000000, Gia_Niem_Yet: 5200 },
  { id: 'SP108', Ma_Hang: 'HD-SOF', Ten_Biet_Duoc: 'Sofosbuvir + Velpatasvir', Hoat_Chat: 'Sofosbuvir + velpatasvir', Ham_Luong: '400mg + 100mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén bao phim', Nhom_Ky_Thuat: '1', Gia_Ke_Khai: 8500000, SL_Ton: 1000000, Gia_Niem_Yet: 2800000 },
  { id: 'SP109', Ma_Hang: 'HD-PIR', Ten_Biet_Duoc: 'Piroxicam 20mg', Hoat_Chat: 'Piroxicam', Ham_Luong: '20mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nang', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1200, SL_Ton: 5000000, Gia_Niem_Yet: 350 },
  { id: 'SP110', Ma_Hang: 'HD-DTL', Ten_Biet_Duoc: 'Dolutegravir combination', Hoat_Chat: 'Dolutegravir + Lamivudine + Tenofovir', Ham_Luong: '50mg+300mg+300mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '1', Gia_Ke_Khai: 1250000, SL_Ton: 1000000, Gia_Niem_Yet: 320000 },

  // Nhóm kháng sinh phổ biến
  { id: 'SP001', Ma_Hang: 'HD-AMO', Ten_Biet_Duoc: 'Amoxicillin 500mg', Hoat_Chat: 'Amoxicillin', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nang', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1800, SL_Ton: 10000000, Gia_Niem_Yet: 650 },
  { id: 'SP018', Ma_Hang: 'HD-AUG', Ten_Biet_Duoc: 'Augmentin 625mg', Hoat_Chat: 'Amoxicillin + acid clavulanic', Ham_Luong: '500mg + 125mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '1', Gia_Ke_Khai: 18500, SL_Ton: 5000000, Gia_Niem_Yet: 8200 },
  { id: 'SP019', Ma_Hang: 'HD-LEX', Ten_Biet_Duoc: 'Cefalexin 500mg', Hoat_Chat: 'Cefalexin', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nang', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 2200, SL_Ton: 5000000, Gia_Niem_Yet: 850 },
  { id: 'SP017', Ma_Hang: 'HD-ZIN', Ten_Biet_Duoc: 'Cefuroxim 500mg', Hoat_Chat: 'Cefuroxim', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '2', Gia_Ke_Khai: 15500, SL_Ton: 5000000, Gia_Niem_Yet: 4200 },
  
  // Nhóm giảm đau, hạ sốt, kháng viêm
  { id: 'SP008', Ma_Hang: 'HD-PARA', Ten_Biet_Duoc: 'Paracetamol 500mg', Hoat_Chat: 'Paracetamol', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 800, SL_Ton: 20000000, Gia_Niem_Yet: 250 },
  { id: 'SP111', Ma_Hang: 'HD-DIC', Ten_Biet_Duoc: 'Diclofenac 50mg', Hoat_Chat: 'Diclofenac', Ham_Luong: '50mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1200, SL_Ton: 5000000, Gia_Niem_Yet: 420 },
  { id: 'SP112', Ma_Hang: 'HD-PRED', Ten_Biet_Duoc: 'Prednisolon 5mg', Hoat_Chat: 'Prednisolon', Ham_Luong: '5mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1500, SL_Ton: 5000000, Gia_Niem_Yet: 480 },
  { id: 'SP113', Ma_Hang: 'HD-METH', Ten_Biet_Duoc: 'Methylprednisolon 16mg', Hoat_Chat: 'Methylprednisolon', Ham_Luong: '16mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '4', Gia_Ke_Khai: 4500, SL_Ton: 2000000, Gia_Niem_Yet: 1850 },

  // Nhóm tim mạch & Huyết áp
  { id: 'SP023', Ma_Hang: 'HD-AML', Ten_Biet_Duoc: 'Amlodipine 5mg', Hoat_Chat: 'Amlodipine', Ham_Luong: '5mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1200, SL_Ton: 8000000, Gia_Niem_Yet: 350 },
  { id: 'SP006', Ma_Hang: 'HD-LOS', Ten_Biet_Duoc: 'Losartan 50mg', Hoat_Chat: 'Losartan', Ham_Luong: '50mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén bao phim', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 2100, SL_Ton: 5000000, Gia_Niem_Yet: 650 },
  { id: 'SP114', Ma_Hang: 'HD-NIF', Ten_Biet_Duoc: 'Nifedipin 20mg', Hoat_Chat: 'Nifedipin', Ham_Luong: '20mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén giải phóng chậm', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 3500, SL_Ton: 3000000, Gia_Niem_Yet: 1200 },
  { id: 'SP115', Ma_Hang: 'HD-CAP', Ten_Biet_Duoc: 'Captopril 25mg', Hoat_Chat: 'Captopril', Ham_Luong: '25mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1800, SL_Ton: 4000000, Gia_Niem_Yet: 550 },

  // Nhóm tiêu hóa
  { id: 'SP005', Ma_Hang: 'HD-OME', Ten_Biet_Duoc: 'Omeprazole 20mg', Hoat_Chat: 'Omeprazole', Ham_Luong: '20mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nang', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1200, SL_Ton: 15000000, Gia_Niem_Yet: 350 },
  { id: 'SP021', Ma_Hang: 'HD-PAN', Ten_Biet_Duoc: 'Pantoprazol 40mg', Hoat_Chat: 'Pantoprazol', Ham_Luong: '40mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén bao tan trong ruột', Nhom_Ky_Thuat: '4', Gia_Ke_Khai: 8500, SL_Ton: 5000000, Gia_Niem_Yet: 2800 },
  { id: 'SP116', Ma_Hang: 'HD-DOM', Ten_Biet_Duoc: 'Domperidon 10mg', Hoat_Chat: 'Domperidon', Ham_Luong: '10mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1100, SL_Ton: 6000000, Gia_Niem_Yet: 380 },

  // Nhóm hô hấp
  { id: 'SP016', Ma_Hang: 'HD-SAL', Ten_Biet_Duoc: 'Salbutamol HFA 100mcg', Hoat_Chat: 'Salbutamol', Ham_Luong: '100mcg', Duong_Dung: 'Hít', Dang_Bao_Che: 'Bình xịt', Nhom_Ky_Thuat: 'NA', Gia_Ke_Khai: 115000, SL_Ton: 200000, Gia_Niem_Yet: 45000 },
  { id: 'SP026', Ma_Hang: 'HD-BRO', Ten_Biet_Duoc: 'Bromhexin 8mg', Hoat_Chat: 'Bromhexin hydroclorid', Ham_Luong: '8mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 800, SL_Ton: 10000000, Gia_Niem_Yet: 220 },
  { id: 'SP117', Ma_Hang: 'HD-AMB', Ten_Biet_Duoc: 'Ambroxol 30mg', Hoat_Chat: 'Ambroxol', Ham_Luong: '30mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1500, SL_Ton: 5000000, Gia_Niem_Yet: 450 },

  // Nhóm Vitamin & Khác
  { id: 'SP118', Ma_Hang: 'HD-VC', Ten_Biet_Duoc: 'Vitamin C 500mg', Hoat_Chat: 'Vitamin C', Ham_Luong: '500mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 800, SL_Ton: 15000000, Gia_Niem_Yet: 210 },
  { id: 'SP028', Ma_Hang: 'HD-LOR', Ten_Biet_Duoc: 'Loratadin 10mg', Hoat_Chat: 'Loratadin', Ham_Luong: '10mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1500, SL_Ton: 6000000, Gia_Niem_Yet: 480 },
  { id: 'SP038', Ma_Hang: 'HD-DIA', Ten_Biet_Duoc: 'Seduxen 5mg', Hoat_Chat: 'Diazepam', Ham_Luong: '5mg', Duong_Dung: 'Uống', Dang_Bao_Che: 'Viên nén', Nhom_Ky_Thuat: '5', Gia_Ke_Khai: 1200, SL_Ton: 2000000, Gia_Niem_Yet: 350 },
];
