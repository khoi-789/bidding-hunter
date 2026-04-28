export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { message, context, apiKey, history = [] } = req.body;

  if (!apiKey) return res.status(400).json({ error: 'NO_API_KEY' });
  if (!message) return res.status(400).json({ error: 'NO_MESSAGE' });

  const systemPrompt = `Bạn là Trợ lý AI Gemini phân tích đấu thầu của công ty dược phẩm Hoàng Đức Pharma.
LƯU Ý QUAN TRỌNG VỀ XƯNG HÔ:
- Luôn xưng "em" và gọi người dùng là "Sếp".
- Giọng điệu: tôn trọng, chuyên nghiệp, khôn khéo như một trợ lý cấp cao báo cáo cho Sếp.

NHIỆM VỤ:
- Phân tích dữ liệu đấu thầu dược phẩm và trả lời câu hỏi.
- Đưa ra khuyến nghị chiến lược cụ thể, thực tế.
- LUÔN trả lời bằng tiếng Việt 100%.

DỮ LIỆU THỰC TẾ HỆ THỐNG BIDDING HUNTER:
${JSON.stringify(context, null, 2)}

Hãy phân tích dựa trên dữ liệu cụ thể được cung cấp, đưa ra con số và tên cụ thể khi có thể. Đừng quên xưng hô Sếp/em trong câu trả lời.`;

  const contents = [];
  
  // Gemini yêu cầu strict alternating roles (user -> model -> user -> model)
  let lastRole = null;
  for (const h of history.slice(-6)) {
    if (h.role === lastRole) continue; // Bỏ qua nếu trùng role liên tiếp
    if (!h.text || h.isError) continue; // Bỏ qua tin lỗi
    contents.push({ role: h.role, parts: [{ text: h.text }] });
    lastRole = h.role;
  }
  
  // Đảm bảo tin cuối cùng trong history là 'model' (trước tin 'user' hiện tại)
  if (contents.length > 0 && contents[contents.length - 1].role === 'user') {
    contents.pop(); 
  }
  
  contents.push({ role: 'user', parts: [{ text: message }] });

  // Mỗi model dùng API version khác nhau
  const MODELS = [
    { name: 'gemini-2.5-flash', version: 'v1beta' },
    { name: 'gemini-2.0-flash', version: 'v1beta' },
    { name: 'gemini-1.5-flash', version: 'v1beta' },
    { name: 'gemini-1.5-flash-latest', version: 'v1beta' },
  ];

  let lastError = null;
  for (const { name: model, version } of MODELS) {
    try {
      const url = `https://generativelanguage.googleapis.com/${version}/models/${model}:generateContent?key=${apiKey}`;
      const payload = {
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents,
        generationConfig: { temperature: 0.7, maxOutputTokens: 1500, topP: 0.9 }
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json().catch(() => ({}));
      console.log(`[Gemini API] Status: ${response.status}`, JSON.stringify(data).substring(0, 500));

      if (response.status === 429) {
        lastError = `QUOTA_EXCEEDED (${model})`;
        continue;
      }
      
      if (!response.ok) {
        lastError = `${model}: ${data.error?.message || response.status}`;
        continue;
      }

      const text = data.candidates?.[0]?.content?.parts?.[0]?.text
        || 'Xin lỗi, tôi không thể trả lời lúc này. Vui lòng thử lại.';
      return res.status(200).json({ text, model });

    } catch (err) {
      lastError = `${model}: ${err.message}`;
    }
  }

  return res.status(500).json({ error: 'ALL_MODELS_FAILED', details: lastError });
}
