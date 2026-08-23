import { verifyAuth, getBearerToken } from './_auth.js';
import { checkRateLimit } from './_rateLimit.js';
import { checkDailyQuota } from './_quota.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Custom-Key');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Diagnostic GET route: allows verifying if Vercel has loaded the DEEPSEEK_API_KEY
  if (req.method === 'GET') {
    const rawServerKey =
      process.env.DEEPSEEK_API_KEY ||
      process.env.VITE_DEEPSEEK_API_KEY ||
      process.env.DEEPSEEK_KEY ||
      process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY ||
      process.env.DEEP_SEEK_API_KEY;
    const isConfigured = Boolean(rawServerKey && rawServerKey.trim().length > 10);
    return res.status(200).json({
      status: 'active',
      service: 'DeepSeek Proxy (Node.js Serverless)',
      serverKeyConfigured: isConfigured,
      keyPrefix: isConfigured ? rawServerKey.trim().substring(0, 6) + '...' : 'NONE',
      hint: isConfigured ? 'Server key is ready and loaded.' : 'DEEPSEEK_API_KEY is missing in Vercel Environment Variables.'
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
  const token = getBearerToken(req);
  const customKey = req.headers ? (req.headers['x-custom-key'] || req.headers['X-Custom-Key']) : null;

  // Support standard and common variant names for DeepSeek API Key
  const rawServerKey =
    process.env.DEEPSEEK_API_KEY ||
    process.env.VITE_DEEPSEEK_API_KEY ||
    process.env.DEEPSEEK_KEY ||
    process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY ||
    process.env.DEEP_SEEK_API_KEY;
  const serverKey = rawServerKey ? rawServerKey.trim().replace(/^["']|["']$/g, '').replace(/^Bearer\s+/i, '') : null;

  let effectiveApiKey = null;
  let authenticatedUserId = null;

  // 1. If user provided a direct DeepSeek key (BYOK: sk-...)
  if (customKey && typeof customKey === 'string' && customKey.startsWith('sk-')) {
    effectiveApiKey = customKey;
  } else if (token && token.startsWith('sk-')) {
    effectiveApiKey = token;
  } else {
    // 2. Try to verify user's Supabase JWT access token
    const { user } = await verifyAuth(req);
    if (user && user.id) {
      authenticatedUserId = user.id;

      // Rate limit check for shared server key
      const rateCheck = await checkRateLimit(req, authenticatedUserId);
      if (!rateCheck.allowed) {
        res.setHeader('Retry-After', String(rateCheck.retryAfter));
        return res.status(429).json({
          error: 'Too Many Requests',
          message: `AI so'rovlar tezligi oshdi. Iltimos ${rateCheck.retryAfter} soniyadan so'ng qayta urinib ko'ring.`,
          retryAfter: rateCheck.retryAfter,
        });
      }

      // Daily quota check
      const quotaCheck = await checkDailyQuota(authenticatedUserId, user.role, rawBody);
      if (!quotaCheck.allowed) {
        return res.status(403).json({
          error: 'Quota Exceeded',
          message: quotaCheck.reason,
        });
      }
    }

    // 3. Check server-side configured API key
    if (!serverKey) {
      return res.status(503).json({
        error: 'Service Unavailable',
        message: 'Serverda DeepSeek API kaliti (DEEPSEEK_API_KEY) sozlanmagan. Iltimos Vercel Environment Variables bo\'limida DEEPSEEK_API_KEY ni kiriting yoki Sozlamalar bo\'limida shaxsiy kalitingizni kiriting.',
      });
    }
    effectiveApiKey = serverKey;
  }

  try {
    // SECURITY: BYOK requests are not JWT-authenticated; apply IP-based rate
    // limiting so this path cannot be used as an unthrottled anonymous relay.
    if (!authenticatedUserId) {
      const byokRate = await checkRateLimit(req, null);
      if (!byokRate.allowed) {
        res.setHeader('Retry-After', String(byokRate.retryAfter));
        return res.status(429).json({
          error: 'Too Many Requests',
          message: `So'rovlar tezligi oshdi. Iltimos ${byokRate.retryAfter} soniyadan so'ng qayta urinib ko'ring.`,
          retryAfter: byokRate.retryAfter,
        });
      }
    }

    // SECURITY: clamp cost-relevant params regardless of auth path — the
    // payload is client-controlled and may be billed to the server key.
    if (payload && typeof payload === 'object') {
      if (typeof payload.max_tokens === 'number') {
        payload.max_tokens = Math.min(Math.max(Math.floor(payload.max_tokens), 1), 4096);
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

    const cleanAuthKey = (effectiveApiKey || '').trim().replace(/^["']|["']$/g, '').replace(/^Bearer\s+/i, '');

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
    console.error('DeepSeek API proxy error:', error);
    return res.status(500).json({ error: 'Internal Server Error', message: error?.message });
  }
}
