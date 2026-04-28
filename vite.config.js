import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import askAi from './api/ask-ai.js'
import tts from './api/tts.js'
import sendEmail from './api/send-email.js'
import { URL } from 'url'

// Middleware helper to parse body and emulate Vercel response
const apiMiddleware = (handler) => async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    req.query = Object.fromEntries(url.searchParams);
    console.log(`[API] ${req.method} ${url.pathname}`, req.query);
    
    if (req.method === 'POST') {
      if (req.body) {
        console.log('[API] Body already parsed by upstream');
      } else {
        req.body = await new Promise((resolve) => {
          const chunks = [];
          req.on('data', chunk => chunks.push(chunk));
          req.on('end', () => {
            const bodyStr = Buffer.concat(chunks).toString();
            console.log(`[API] Body read finished, length: ${bodyStr.length}`);
            try { 
              const parsed = JSON.parse(bodyStr);
              console.log(`[API] Body parsed successfully, message: "${parsed.message}"`);
              resolve(parsed); 
            } catch (e) { 
              console.warn('[API] JSON Parse failed, using raw body');
              resolve(bodyStr); 
            }
          });
          req.on('error', (err) => {
            console.error('[API] Body read error:', err);
            resolve({});
          });
        });
      }
    }

    res.status = (code) => { res.statusCode = code; return res; };
    res.json = (data) => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
      return res;
    };
    res.send = (data) => {
      if (typeof data === 'object' && !Buffer.isBuffer(data)) return res.json(data);
      if (Buffer.isBuffer(data)) {
        res.setHeader('Content-Length', data.length);
      }
      res.end(data);
      return res;
    };

    console.log(`[API] Calling handler for ${url.pathname}`);
    await handler(req, res);
    console.log(`[API] Handler finished for ${url.pathname}`);
  } catch (err) {
    console.error('[API] CRITICAL ERROR:', err.stack || err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: err.message, stack: err.stack }));
  }
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'api-middleware',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
          if (url.pathname.startsWith('/api/')) {
            console.log(`[API Proxy] Intercepting: ${url.pathname}`);
            if (url.pathname === '/api/ask-ai') return apiMiddleware(askAi)(req, res);
            if (url.pathname === '/api/tts') return apiMiddleware(tts)(req, res);
            if (url.pathname === '/api/send-email') return apiMiddleware(sendEmail)(req, res);
          }
          next();
        });
      }
    }
  ],
})
// Restart dev server to apply Gemini API fixes
