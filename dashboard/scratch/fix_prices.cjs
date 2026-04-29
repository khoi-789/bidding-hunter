
const fs = require('fs');

const mockDataPath = 'd:\\Tool\\17.Crawl\\18.Bidding_v2\\dashboard\\src\\mockData.js';
let content = fs.readFileSync(mockDataPath, 'utf8');

// Strategic prices mapping for Top 5
const strategicPrices = {
  'SP201': 14200000,  // Atropin
  'SP202': 21500000,  // Lidocain + epinephrine
  'SP203': 35800000,  // Morphin
  'SP204': 16700000,  // Proparacain
  'SP205': 26400000   // Pethidin
};

// 1. Extract MOCK_PRODUCTS
const productsMatch = content.match(/export const MOCK_PRODUCTS = (\[[\s\S]+?\]);/);
if (!productsMatch) {
  console.error("Could not find MOCK_PRODUCTS");
  process.exit(1);
}

let products = JSON.parse(productsMatch[1].replace(/(\w+):/g, '"$1":').replace(/'/g, '"').replace(/,(\s*\])/, '$1'));

// Update products
products = products.map(p => {
  if (strategicPrices[p.id]) {
    p.Gia_Niem_Yet = strategicPrices[p.id];
    if (p.Gia_Ke_Khai) p.Gia_Ke_Khai = Math.round(p.Gia_Niem_Yet * 1.2);
  } else if (p.Gia_Niem_Yet < 10000) {
    const factor = (p.Duong_Dung === 'Tiêm' || p.Nhom_Ky_Thuat < '3') ? 10000 : 50;
    p.Gia_Niem_Yet *= factor;
    if (p.Gia_Ke_Khai) p.Gia_Ke_Khai = Math.round(p.Gia_Niem_Yet * 1.2);
  }
  return p;
});

const productPriceMap = {};
products.forEach(p => productPriceMap[p.id] = p.Gia_Niem_Yet);

// 2. Extract MOCK_ORDERS
const ordersMatch = content.match(/export const MOCK_ORDERS = (\[[\s\S]+?\]);/);
if (!ordersMatch) {
  console.error("Could not find MOCK_ORDERS");
  process.exit(1);
}

// Parsing huge JSON is slow but let's try
let orders = JSON.parse(ordersMatch[1]);

// Update orders
orders = orders.map(o => {
  let total = 0;
  o.Items = o.Items.map(item => {
    const minPrice = productPriceMap[item.Ma_SP] || item.Don_Gia;
    // New price is minPrice + 1-15% profit
    item.Don_Gia = Math.round(minPrice * (1 + Math.random() * 0.15));
    item.Thanh_Tien = item.Don_Gia * item.SL;
    total += item.Thanh_Tien;
    return item;
  });
  o.Tong_Tien = total;
  return o;
});

// 3. Reconstruct file
let newContent = content.replace(/export const MOCK_PRODUCTS = \[[\s\S]+?\];/, `export const MOCK_PRODUCTS = ${JSON.stringify(products, null, 2)};`);
newContent = newContent.replace(/export const MOCK_ORDERS = \[[\s\S]+?\];/, `export const MOCK_ORDERS = ${JSON.stringify(orders, null, 2)};`);

fs.writeFileSync(mockDataPath, newContent);
console.log("Successfully updated mockData.js with realistic prices.");
