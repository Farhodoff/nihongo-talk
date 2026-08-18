import { verifyAuth, getBearerToken } from './_auth.js';

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

  const token = getBearerToken(req);
  const customKey = req.headers.get('X-Custom-Key');
  const serverKey = process.env.DEEPSEEK_API_KEY;

  let effectiveApiKey = null;

  // 1. If user provided a direct DeepSeek key (BYOK: sk-...)
  if (customKey && customKey.startsWith('sk-')) {
    effectiveApiKey = customKey;
  } else if (token && token.startsWith('sk-')) {
    effectiveApiKey = token;
  } else {
    // 2. Otherwise verify user's Supabase JWT access token
    const { user, error: authError } = await verifyAuth(req);
    if (authError || !user) {
      return new Response(JSON.stringify({
        error: 'Unauthorized',
        message: 'Foydalanuvchi tizimga kirmagan yoki shaxsiy API kalit kiritilmagan.',
        details: authError,
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    // 3. User is authenticated, use server-side configured API key
    if (!serverKey) {
      return new Response(JSON.stringify({
        error: 'Service Unavailable',
        message: 'Serverda DeepSeek API kaliti sozlanmagan. Iltimos Sozlamalar bo\'limida o\'z API kalitingizni kiriting.',
      }), {
        status: 503,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }
    effectiveApiKey = serverKey;
  }

  let payload;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  try {
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
