import { verifyAuth, getBearerToken } from '../_auth.js';
import { checkRateLimit } from '../_rateLimit.js';

export const config = {
  runtime: 'edge',
};

function safeParseJson(rawContent, fallback = {}) {
  if (!rawContent || typeof rawContent !== 'string') return fallback;
  try {
    const cleaned = rawContent
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();
    return JSON.parse(cleaned);
  } catch (e) {
    const match = rawContent.match(/\{[\s\S]*\}/);
    if (match) {
      try {
        return JSON.parse(match[0]);
      } catch {}
    }
    return fallback;
  }
}

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Kaizen-Key, X-Custom-Key',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed. Use POST.' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  const token = getBearerToken(req);
  const customKey = req.headers.get('X-Custom-Key') || req.headers.get('X-Kaizen-Key');
  const serverKey = process.env.DEEPSEEK_API_KEY;

  let effectiveApiKey = null;
  let authenticatedUserId = null;

  if (customKey && customKey.startsWith('sk-')) {
    effectiveApiKey = customKey;
  } else if (token && token.startsWith('sk-')) {
    effectiveApiKey = token;
  } else {
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

    authenticatedUserId = user.id;

    // Rate limiting for shared server API key
    const rateCheck = checkRateLimit(req, authenticatedUserId);
    if (!rateCheck.allowed) {
      return new Response(JSON.stringify({
        error: 'Too Many Requests',
        message: `Fleshkarta yaratish so'rovlari chegarasi oshdi. Iltimos ${rateCheck.retryAfter} soniyadan so'ng qayta urinib ko'ring.`,
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

    if (!serverKey) {
      return new Response(JSON.stringify({
        error: 'Service Unavailable',
        message: 'Serverda DeepSeek API kaliti sozlanmagan.',
      }), {
        status: 503,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }
    effectiveApiKey = serverKey;
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  const { topic, language = 'uz', count = 5 } = body;

  if (!topic || typeof topic !== 'string') {
    return new Response(JSON.stringify({ error: 'Please specify a "topic" string.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  const safeCount = Math.min(25, Math.max(1, count));
  const safeTopic = topic.substring(0, 500);

  const prompt = `Generate exactly ${safeCount} high-quality educational flashcards about: "${safeTopic}".
Target language for translations / explanations: ${language}.

Format strictly as raw JSON without markdown:
{
  "flashcards": [
    {
      "front": "Word or Question or Kanji",
      "back": "Translation and definition in ${language}",
      "example": "Sample sentence in context"
    }
  ]
}`;

  try {
    const aiResponse = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${effectiveApiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: 'You are a flashcard generation API that outputs valid raw JSON only.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.4,
        response_format: { type: 'json_object' }
      }),
    });

    if (!aiResponse.ok) {
      const errText = await aiResponse.text();
      return new Response(JSON.stringify({ error: 'AI generation failed', details: errText }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    const aiData = await aiResponse.json();
    const content = aiData.choices?.[0]?.message?.content;
    const parsed = safeParseJson(content, { flashcards: [] });

    return new Response(JSON.stringify({ success: true, count: parsed.flashcards?.length || 0, data: parsed.flashcards || [] }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal API Server Error', message: error?.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
}
