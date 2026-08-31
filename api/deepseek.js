import { verifyAuth } from './_auth.js';
import { checkRateLimit } from './_rateLimit.js';
import { checkDailyQuota } from './_quota.js';

export const config = {
  maxDuration: 60,
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, apikey');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Diagnostic GET route: allows checking AI gateway availability
  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'active',
      service: 'Supabase Edge AI Gateway',
      available: true,
      provider: 'DeepSeek via Supabase Edge Function',
      model: 'deepseek-chat',
      hint: 'AI gateway is active and routed to Supabase Edge Function.'
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
  const rawServerKey = process.env.DEEPSEEK_API_KEY;

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

  // SECURITY & BUFFER PROTECTION: clamp client-controlled parameters
  if (payload && typeof payload === 'object') {
    if (typeof payload.max_tokens === 'number') {
      payload.max_tokens = Math.min(Math.max(Math.floor(payload.max_tokens), 1), 4096);
    }
  }

  // Forward directly to authoritative Supabase Edge Function
  try {
    const edgeUrl = process.env.VITE_SUPABASE_URL
      ? `${process.env.VITE_SUPABASE_URL.replace(/\/$/, '')}/functions/v1/deepseek`
      : 'https://qmuimxnknxwarvnkpnlo.supabase.co/functions/v1/deepseek';
    const anonKey = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_6g0Ei_1Cw46e1mJLKj_1Ug_sOmhlgoI';

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
    console.error('Failed to proxy to Supabase Edge Function:', edgeProxyErr);
    return res.status(503).json({
      error: {
        code: 'AI_NOT_CONFIGURED',
        message: 'AI xizmati vaqtincha mavjud emas.',
      },
    });
  }
}
