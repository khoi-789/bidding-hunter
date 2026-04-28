// Proxy Google Translate TTS để bypass CORS của browser
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { text } = req.query;
  if (!text) return res.status(400).json({ error: 'Missing text' });

  try {
    const url = `https://translate.googleapis.com/translate_tts?client=tw-ob&ie=UTF-8&tl=vi&q=${encodeURIComponent(text)}`;
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://translate.google.com',
      }
    });

    if (!response.ok) {
      return res.status(502).json({ error: 'TTS fetch failed', status: response.status });
    }

    const audioBuffer = await response.arrayBuffer();
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(Buffer.from(audioBuffer));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
