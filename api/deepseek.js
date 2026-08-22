import { verifyAuth, getBearerToken } from './_auth.js';
import { checkRateLimit } from './_rateLimit.js';
import { checkDailyQuota } from './_quota.js';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Custom-Key',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  const rawBody = await req.text().catch(() => '');
  let payload;
  try {
    payload = JSON.parse(rawBody || '{}');
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  const token = getBearerToken(req);
  const customKey = req.headers.get('X-Custom-Key');
  const serverKey = process.env.DEEPSEEK_API_KEY || process.env.VITE_DEEPSEEK_API_KEY || process.env.DEEPSEEK_KEY || process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY;

  let effectiveApiKey = null;
  let authenticatedUserId = null;

  // 1. If user provided a direct DeepSeek key (BYOK: sk-...)
  if (customKey && customKey.startsWith('sk-')) {
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
        return new Response(JSON.stringify({
          error: 'Too Many Requests',
          message: `AI so'rovlar tezligi oshdi. Iltimos ${rateCheck.retryAfter} soniyadan so'ng qayta urinib ko'ring.`,
          retryAfter: rateCheck.retryAfter,
        }), {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Retry-After': String(rateCheck.retryAfter),
          },
        });
      }

      // Daily quota check
      const quotaCheck = await checkDailyQuota(authenticatedUserId, user.role, rawBody);
      if (!quotaCheck.allowed) {
        return new Response(JSON.stringify({
          error: 'Quota Exceeded',
          message: quotaCheck.reason,
        }), {
          status: 403,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
    }

    // 3. Check server-side configured API key
    if (!serverKey) {
      return new Response(JSON.stringify({
        error: 'Service Unavailable',
        message: 'Serverda DeepSeek API kaliti (DEEPSEEK_API_KEY) sozlanmagan. Iltimos Vercel Environment Variables bo\'limida DEEPSEEK_API_KEY ni kiriting yoki Sozlamalar bo\'limida shaxsiy kalitingizni kiriting.',
      }), {
        status: 503,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
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
        return new Response(JSON.stringify({
          error: 'Too Many Requests',
          message: `So'rovlar tezligi oshdi. Iltimos ${byokRate.retryAfter} soniyadan so'ng qayta urinib ko'ring.`,
          retryAfter: byokRate.retryAfter,
        }), {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Retry-After': String(byokRate.retryAfter),
          },
        });
      }
    }

    // SECURITY: clamp cost-relevant params regardless of auth path — the
    // payload is client-controlled and may be billed to the server key.
    if (payload && typeof payload === 'object' && typeof payload.max_tokens === 'number') {
      payload.max_tokens = Math.min(Math.max(Math.floor(payload.max_tokens), 1), 4096);
    }

    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${effectiveApiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const contentType = response.headers.get('content-type') || 'application/json';
    return new Response(response.body, {
      status: response.status,
      headers: {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('DeepSeek API proxy error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error', message: error?.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
}
