import { verifyAuth } from './_auth.js';
import { checkRateLimit } from './_rateLimit.js';
import { checkDailyQuota } from './_quota.js';

export const config = {
  maxDuration: 60,
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Diagnostic GET route: allows checking AI gateway availability
  if (req.method === 'GET') {
    const rawServerKey = process.env.DEEPSEEK_API_KEY;
    const isConfigured = Boolean(rawServerKey && rawServerKey.trim().length > 10);
    return res.status(200).json({
      status: 'active',
      service: 'DeepSeek Gateway',
      available: isConfigured,
      provider: 'DeepSeek',
      model: 'deepseek-chat',
      hint: isConfigured
        ? 'DeepSeek AI gateway is active and configured.'
        : 'DEEPSEEK_API_KEY is missing in server environment variables.'
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  let payload = req.body || {};
  if (typeof payload === 'string') {
    try {
      payload = JSON.parse(payload);
    } catch {
      return res.status(400).json({ error: 'Invalid JSON payload' });
    }
  }

  const rawBody = typeof req.body === 'string' ? req.body : JSON.stringify(req.body || {});

  // Server-only single source of truth for DeepSeek API Key
  const rawServerKey = process.env.DEEPSEEK_API_KEY;
  const serverKey = rawServerKey ? rawServerKey.trim().replace(/^["']|["']$/g, '').replace(/^Bearer\s+/i, '') : null;

  // If DEEPSEEK_API_KEY is not directly in Vercel env, forward server-to-server to Supabase Edge Function
  if (!serverKey) {
    try {
      const edgeUrl = 'https://qmuimxnknxwarvnkpnlo.supabase.co/functions/v1/deepseek';
      const anonKey = 'sb_publishable_6g0Ei_1Cw46e1mJLKj_1Ug_sOmhlgoI';
      const edgeRes = await fetch(edgeUrl, {
        method: 'POST',
        headers: {
          'apikey': anonKey,
          'Authorization': `Bearer ${anonKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const edgeData = await edgeRes.json();
      return res.status(edgeRes.status).json(edgeData);
    } catch (edgeProxyErr) {
      console.error('Failed to proxy to Supabase Edge Function from Vercel:', edgeProxyErr);
      return res.status(503).json({
        error: {
          code: 'AI_NOT_CONFIGURED',
          message: 'AI xizmati vaqtincha mavjud emas.',
        },
      });
    }
  }

  const effectiveApiKey = serverKey;
  let authenticatedUserId = null;

  // Verify optional Supabase user for rate-limiting and quota tracking
  const { user } = await verifyAuth(req);
  if (user && user.id) {
    authenticatedUserId = user.id;

    const rateCheck = await checkRateLimit(req, authenticatedUserId);
    if (!rateCheck.allowed) {
      res.setHeader('Retry-After', String(rateCheck.retryAfter));
      return res.status(429).json({
        error: 'Too Many Requests',
        message: `AI so'rovlar tezligi oshdi. Iltimos ${rateCheck.retryAfter} soniyadan so'ng qayta urinib ko'ring.`,
        retryAfter: rateCheck.retryAfter,
      });
    }

    const quotaCheck = await checkDailyQuota(authenticatedUserId, user.role, rawBody);
    if (!quotaCheck.allowed) {
      return res.status(403).json({
        error: 'Quota Exceeded',
        message: quotaCheck.reason,
      });
    }
  } else {
    // Anonymous / Guest IP rate limit
    const ipRate = await checkRateLimit(req, null);
    if (!ipRate.allowed) {
      res.setHeader('Retry-After', String(ipRate.retryAfter));
      return res.status(429).json({
        error: 'Too Many Requests',
        message: `So'rovlar tezligi oshdi. Iltimos ${ipRate.retryAfter} soniyadan so'ng qayta urinib ko'ring.`,
        retryAfter: ipRate.retryAfter,
      });
    }
  }

  try {
    // SECURITY & BUFFER PROTECTION: clamp cost-relevant and payload size parameters
    if (payload && typeof payload === 'object') {
      if (Array.isArray(payload.messages)) {
        const rawMessages = payload.messages;
        const systemMessages = rawMessages.filter(m => m && m.role === 'system');
        const nonSystemMessages = rawMessages.filter(m => m && m.role !== 'system');

        // Keep last 20 conversational turns to avoid buffer bloat
        const trimmedNonSystem = nonSystemMessages.slice(-20).map(msg => ({
          role: msg.role === 'assistant' ? 'assistant' : 'user',
          content: typeof msg.content === 'string' ? msg.content : String(msg.content || '')
        }));

        payload.messages = [...systemMessages.slice(0, 2), ...trimmedNonSystem];
      }

      if (typeof payload.max_tokens === 'number') {
        payload.max_tokens = Math.min(Math.max(Math.floor(payload.max_tokens), 1), 4096);
      }
      if (typeof payload.temperature === 'number') {
        payload.temperature = Math.min(Math.max(payload.temperature, 0), 2);
      }

      // JSON Mode compatibility: DeepSeek-R1 (deepseek-reasoner) does not support response_format.
      // Automatically fall back model to deepseek-chat when response_format is json_object.
      if (payload.response_format && payload.response_format.type === 'json_object') {
        payload.model = 'deepseek-chat';
      }
      if (!payload.model || !['deepseek-chat', 'deepseek-reasoner'].includes(payload.model)) {
        payload.model = 'deepseek-chat';
      }
    }

    const cleanAuthKey = effectiveApiKey.trim().replace(/^["']|["']$/g, '').replace(/^Bearer\s+/i, '');

    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cleanAuthKey}`,
      },
      body: JSON.stringify(payload),
    });

    const resText = await response.text();
    let resJson;
    try {
      resJson = JSON.parse(resText);
    } catch {
      resJson = { raw: resText };
    }

    return res.status(response.status).json(resJson);
  } catch (error) {
    console.error('DeepSeek API proxy network error');
    return res.status(500).json({ error: 'Internal Server Error', message: 'Network error connecting to AI provider' });
  }
}
