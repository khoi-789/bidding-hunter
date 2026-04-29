import random
import json
from datetime import datetime, timedelta

customers = [
    {'id': 'KH001', 'Ma_KH': 'KH001', 'Ten_Ben_Vien': 'BV Bạch Mai'},
    {'id': 'KH002', 'Ma_KH': 'KH002', 'Ten_Ben_Vien': 'BV Việt Đức'},
    {'id': 'KH003', 'Ma_KH': 'KH003', 'Ten_Ben_Vien': 'BV Chợ Rẫy'},
    {'id': 'KH005', 'Ma_KH': 'KH005', 'Ten_Ben_Vien': 'Bệnh viện Đại học Y Hà Nội'},
    {'id': 'KH006', 'Ma_KH': 'KH006', 'Ten_Ben_Vien': 'Bệnh Viện Đa Khoa Khu Vực Bồng Sơn'},
    {'id': 'KH007', 'Ma_KH': 'KH007', 'Ten_Ben_Vien': 'Trung tâm Y tế khu vực Lục Yên'},
    {'id': 'KH008', 'Ma_KH': 'KH008', 'Ten_Ben_Vien': 'Trạm Y tế xã Bình Xuyên'},
    {'id': 'KH009', 'Ma_KH': 'KH009', 'Ten_Ben_Vien': 'BV đa khoa Thanh Liêm'},
    {'id': 'KH010', 'Ma_KH': 'KH010', 'Ten_Ben_Vien': 'BỆNH VIỆN ĐA KHOA VŨ THƯ'},
    {'id': 'KH011', 'Ma_KH': 'KH011', 'Ten_Ben_Vien': 'TRUNG TÂM MẮT TỈNH QUẢNG NGÃI'},
    {'id': 'KH012', 'Ma_KH': 'KH012', 'Ten_Ben_Vien': 'TRUNG TÂM Y TẾ AN DƯƠNG'},
    {'id': 'KH013', 'Ma_KH': 'KH013', 'Ten_Ben_Vien': 'BV đa khoa Đông Anh'},
    {'id': 'KH014', 'Ma_KH': 'KH014', 'Ten_Ben_Vien': 'BV Đa khoa Từ Sơn'},
    {'id': 'KH015', 'Ma_KH': 'KH015', 'Ten_Ben_Vien': 'BV Đa khoa Cẩm Phả'},
    {'id': 'KH016', 'Ma_KH': 'KH016', 'Ten_Ben_Vien': 'BV Đa khoa số 2 tỉnh Lào Cai'},
    {'id': 'KH017', 'Ma_KH': 'KH017', 'Ten_Ben_Vien': 'Trung tâm Y tế Khu vực Văn Chấn'},
    {'id': 'KH018', 'Ma_KH': 'KH018', 'Ten_Ben_Vien': 'BV Đa khoa tỉnh Quảng Trị'},
    {'id': 'KH019', 'Ma_KH': 'KH019', 'Ten_Ben_Vien': 'BV Phục hồi chức năng Thanh Hóa'},
    {'id': 'KH020', 'Ma_KH': 'KH020', 'Ten_Ben_Vien': 'Trạm Y tế xã Xuân Lăng'},
]

products = [
    {'id': 'SP201', 'Ma_Hang': 'HD-ATR', 'Ten_Biet_Duoc': 'Atropin', 'DVT': 'Ống', 'Gia_Niem_Yet': 200},
    {'id': 'SP202', 'Ma_Hang': 'HD-LID-E', 'Ten_Biet_Duoc': 'Lidocain + epinephrine', 'DVT': 'Ống', 'Gia_Niem_Yet': 500},
    {'id': 'SP203', 'Ma_Hang': 'HD-MOR', 'Ten_Biet_Duoc': 'Morphin', 'DVT': 'Ống', 'Gia_Niem_Yet': 800},
    {'id': 'SP204', 'Ma_Hang': 'HD-PRO', 'Ten_Biet_Duoc': 'Proparacain', 'DVT': 'Lọ', 'Gia_Niem_Yet': 1200},
    {'id': 'SP205', 'Ma_Hang': 'HD-PET', 'Ten_Biet_Duoc': 'Pethidin', 'DVT': 'Ống', 'Gia_Niem_Yet': 900},
    {'id': 'SP206', 'Ma_Hang': 'HD-MEL', 'Ten_Biet_Duoc': 'Meloxicam', 'DVT': 'Viên', 'Gia_Niem_Yet': 300},
    {'id': 'SP207', 'Ma_Hang': 'HD-MIS', 'Ten_Biet_Duoc': 'Misoprostol', 'DVT': 'Viên', 'Gia_Niem_Yet': 1000},
    {'id': 'SP208', 'Ma_Hang': 'HD-AVE', 'Ten_Biet_Duoc': 'Avelumab', 'DVT': 'Ống', 'Gia_Niem_Yet': 5000000},
    {'id': 'SP209', 'Ma_Hang': 'HD-AZA', 'Ten_Biet_Duoc': 'Azathioprin', 'DVT': 'Viên', 'Gia_Niem_Yet': 2500},
    {'id': 'SP210', 'Ma_Hang': 'HD-BIS-A', 'Ten_Biet_Duoc': 'Bisoprolol + Amlodipine', 'DVT': 'Viên', 'Gia_Niem_Yet': 1500},
    {'id': 'SP211', 'Ma_Hang': 'HD-ACI', 'Ten_Biet_Duoc': 'Aciclovir', 'DVT': 'Viên', 'Gia_Niem_Yet': 350},
    {'id': 'SP212', 'Ma_Hang': 'HD-SAL', 'Ten_Biet_Duoc': 'Salbutamol', 'DVT': 'Xịt', 'Gia_Niem_Yet': 25000},
    {'id': 'SP213', 'Ma_Hang': 'HD-BRO', 'Ten_Biet_Duoc': 'Bromhexin', 'DVT': 'Viên', 'Gia_Niem_Yet': 150},
    {'id': 'SP214', 'Ma_Hang': 'HD-PAN', 'Ten_Biet_Duoc': 'Pantoprazol', 'DVT': 'Viên', 'Gia_Niem_Yet': 1200},
    {'id': 'SP215', 'Ma_Hang': 'HD-SPI', 'Ten_Biet_Duoc': 'Spironolacton', 'DVT': 'Viên', 'Gia_Niem_Yet': 650},
    {'id': 'SP216', 'Ma_Hang': 'HD-KAL', 'Ten_Biet_Duoc': 'Kali clorid', 'DVT': 'Viên', 'Gia_Niem_Yet': 250},
    {'id': 'SP001', 'Ma_Hang': 'HD-AMO', 'Ten_Biet_Duoc': 'Amoxicillin', 'DVT': 'Viên', 'Gia_Niem_Yet': 450},
    {'id': 'SP008', 'Ma_Hang': 'HD-PARA', 'Ten_Biet_Duoc': 'Paracetamol', 'DVT': 'Viên', 'Gia_Niem_Yet': 120},
    {'id': 'SP023', 'Ma_Hang': 'HD-AML', 'Ten_Biet_Duoc': 'Amlodipine', 'DVT': 'Viên', 'Gia_Niem_Yet': 250},
    {'id': 'SP301', 'Ma_Hang': 'HD-HPM', 'Ten_Biet_Duoc': 'HPMC Eye Drop', 'DVT': 'Lọ', 'Gia_Niem_Yet': 15000},
    {'id': 'SP302', 'Ma_Hang': 'HD-IND', 'Ten_Biet_Duoc': 'Indomethacin Eye Drop', 'DVT': 'Lọ', 'Gia_Niem_Yet': 34000},
    {'id': 'SP303', 'Ma_Hang': 'HD-MOX', 'Ten_Biet_Duoc': 'Moxifloxacin Eye Drop', 'DVT': 'Lọ', 'Gia_Niem_Yet': 40000},
    {'id': 'SP304', 'Ma_Hang': 'HD-MDX', 'Ten_Biet_Duoc': 'Moxifloxacin + Dexamethason', 'DVT': 'Lọ', 'Gia_Niem_Yet': 11000},
    {'id': 'SP305', 'Ma_Hang': 'HD-OXY', 'Ten_Biet_Duoc': 'Oxy già HD', 'DVT': 'Chai', 'Gia_Niem_Yet': 900},
    {'id': 'SP306', 'Ma_Hang': 'HD-OFL-M', 'Ten_Biet_Duoc': 'Ofloxacin Eye Drop', 'DVT': 'Lọ', 'Gia_Niem_Yet': 26000},
    {'id': 'SP307', 'Ma_Hang': 'HD-OFL-T', 'Ten_Biet_Duoc': 'Ofloxacin Tra Mắt', 'DVT': 'Tuýp', 'Gia_Niem_Yet': 35000},
    {'id': 'SP308', 'Ma_Hang': 'HD-POV', 'Ten_Biet_Duoc': 'Povidon Iodin HD', 'DVT': 'Chai', 'Gia_Niem_Yet': 6000},
    {'id': 'SP309', 'Ma_Hang': 'HD-PRO-H', 'Ten_Biet_Duoc': 'Proparacain hydroclorid', 'DVT': 'Lọ', 'Gia_Niem_Yet': 1200},
    {'id': 'SP310', 'Ma_Hang': 'HD-TIM', 'Ten_Biet_Duoc': 'Timolol Eye Drop', 'DVT': 'Lọ', 'Gia_Niem_Yet': 13000},
    {'id': 'SP401', 'Ma_Hang': 'HD-API', 'Ten_Biet_Duoc': 'Apitor-Ez', 'DVT': 'Viên', 'Gia_Niem_Yet': 4500},
    {'id': 'SP402', 'Ma_Hang': 'HD-AUG1', 'Ten_Biet_Duoc': 'Augmentin 1g HD', 'DVT': 'Viên', 'Gia_Niem_Yet': 11000},
    {'id': 'SP423', 'Ma_Hang': 'HD-LAN', 'Ten_Biet_Duoc': 'Lantus HD', 'DVT': 'Lọ', 'Gia_Niem_Yet': 240000},
]

def random_date(start, end):
    return start + timedelta(seconds=random.randint(0, int((end - start).total_seconds())))

start_date = datetime(2025, 1, 1)
end_date = datetime(2026, 4, 30)

orders = []
for i in range(1, 51):
    cust = random.choice(customers)
    giao = random_date(start_date, end_date)
    soan = giao - timedelta(days=random.randint(2, 7))
    
    order_items = []
    num_items = random.randint(5, 15)
    selected_prods = random.sample(products, min(len(products), num_items))
    
    total = 0
    for prod in selected_prods:
        sl = random.randint(10, 500)
        # Price at least 10-30% higher than list price
        don_gia = int(prod['Gia_Niem_Yet'] * random.uniform(1.1, 1.4))
        thanh_tien = sl * don_gia
        total += thanh_tien
        order_items.append({
            'Ma_SP': prod['id'],
            'Ten_SP': prod['Ten_Biet_Duoc'],
            'SL': sl,
            'DVT': prod['DVT'],
            'Don_Gia': don_gia,
            'Thanh_Tien': thanh_tien
        })
    
    orders.append({
        'id': f'DH{i:03d}',
        'Ma_KH': cust['Ma_KH'],
        'Ten_KH': cust['Ten_Ben_Vien'],
        'So_Hoa_Don': f'HD{2000 + i}',
        'Ngay_Soan': soan.strftime('%Y-%m-%d'),
        'Ngay_Giao': giao.strftime('%Y-%m-%d'),
        'Tong_Tien': total,
        'Items': order_items
    })

with open('orders.json', 'w', encoding='utf-8') as f:
    json.dump(orders, f, indent=2, ensure_ascii=False)
