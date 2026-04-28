import { parseDateTime } from './firebase';

// Format giá tiền
export function formatPrice(val) {
  if (!val || val === 'NA' || isNaN(Number(String(val).replace(/,/g, '')))) return 'N/A';
  const num = Number(String(val).replace(/,/g, ''));
  if (num >= 1e9) return `${(num / 1e9).toFixed(2)} tỷ`;
  if (num >= 1e6) return `${(num / 1e6).toFixed(1)} triệu`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(0)} nghìn`;
  return `${num.toLocaleString('vi-VN')} đ`;
}

// Chuyển đổi chuỗi tiền VNĐ (có thể có dấu . hoặc ,) thành số
export function parseVND(val) {
  if (!val || val === 'NA') return 0;
  // Loại bỏ tất cả ký tự không phải số
  const clean = String(val).replace(/[^\d]/g, '');
  const num = parseFloat(clean);
  return isNaN(num) ? 0 : num;
}

// Format datetime từ string
export function formatDeadline(str) {
  if (!str || str === 'NA') return 'N/A';
  // Nếu đã là dạng "HH:mm dd-MM-yyyy" → hiển thị luôn
  if (/\d{1,2}:\d{2}\s+\d{1,2}-\d{1,2}-\d{4}/.test(str)) return str;
  const d = parseDateTime(str);
  if (!d) return str;
  return d.toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' });
}

// Số ngày còn lại
export function getDaysLeft(str) {
  if (!str || str === 'NA') return 999;
  const d = parseDateTime(str);
  if (!d) return 999;
  const diff = d - Date.now();
  const days = Math.ceil(diff / 86400000);
  return days < 0 ? 0 : days;
}

// CSS class theo deadline
export function getDeadlineClass(str) {
  const days = getDaysLeft(str);
  if (days <= 0) return 'deadline-expired';
  if (days <= 2) return 'deadline-urgent';
  if (days <= 7) return 'deadline-warning';
  return 'deadline-ok';
}
