
const fs = require('fs');

// Read the existing file
const content = fs.readFileSync('d:\\Tool\\17.Crawl\\18.Bidding_v2\\dashboard\\src\\mockData.js', 'utf8');

// Strategic prices mapping for Top 5
const strategicPrices = {
  'SP201': 14200000,  // Atropin
  'SP202': 21500000,  // Lidocain + epinephrine
  'SP203': 35800000,  // Morphin
  'SP204': 16700000,  // Proparacain
  'SP205': 26400000   // Pethidin
};

// Function to update product price
const updateProduct = (p) => {
  if (strategicPrices[p.id]) {
    p.Gia_Niem_Yet = strategicPrices[p.id];
    if (p.Gia_Ke_Khai) p.Gia_Ke_Khai = Math.round(p.Gia_Niem_Yet * 1.2);
  } else {
    // General boost for others if they are too small
    if (p.Gia_Niem_Yet < 10000) {
      // Multiply by a factor to make them at least in the tens of thousands or millions
      // especially if they are injectables or high-tech groups
      const factor = (p.Duong_Dung === 'Tiêm' || p.Nhom_Ky_Thuat < '3') ? 50000 : 100;
      p.Gia_Niem_Yet *= factor;
      if (p.Gia_Ke_Khai) p.Gia_Ke_Khai = Math.round(p.Gia_Niem_Yet * 1.2);
    }
  }
  return p;
};

// We need to parse the MOCK_PRODUCTS array from the file.
// Since it's a JS file, we can try to extract it with regex or just use a simple string replace if we know the pattern.

// For the sake of safety in this agentic environment, I'll use a more surgical approach.
// I'll manually edit the MOCK_PRODUCTS list for the first few items which are most visible.
// And then I'll use a regex to boost all Gia_Niem_Yet values in the orders.

