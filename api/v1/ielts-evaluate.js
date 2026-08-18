import { verifyAuth, getBearerToken } from '../_auth.js';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  // CORS preflight
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

  const { essay, topic = 'General IELTS Task', taskType = 'task2' } = body;

  if (!essay || typeof essay !== 'string' || essay.trim().length < 20) {
    return new Response(JSON.stringify({ error: 'Please provide an essay with at least 20 characters.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  const prompt = `You are a certified IELTS Senior Examiner.
Evaluate the following IELTS ${taskType === 'task1' ? 'Task 1 Report' : 'Task 2 Essay'}.
Topic/Prompt: "${topic}"
Student Essay:
"""
${essay.substring(0, 8000)}
"""

Provide your assessment strictly in the following JSON format without markdown fences:
{
  "overallBand": 7.0,
  "scores": {
    "taskAchievement": 7.0,
    "coherenceAndCohesion": 7.0,
    "lexicalResource": 7.5,
    "grammaticalRange": 6.5
  },
  "summary": "Brief overall commentary",
  "strengths": ["point 1", "point 2"],
  "improvements": ["point 1", "point 2"],
  "correctedEssay": "Full improved version of the essay with advanced vocabulary"
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
          { role: 'system', content: 'You are an IELTS examiner API that outputs valid raw JSON only.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.3,
        response_format: { type: 'json_object' }
      }),
    });

    if (!aiResponse.ok) {
      const errText = await aiResponse.text();
      return new Response(JSON.stringify({ error: 'AI evaluation failed', details: errText }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    const aiData = await aiResponse.json();
    const content = aiData.choices?.[0]?.message?.content;
    const parsed = JSON.parse(content || '{}');

    return new Response(JSON.stringify({ success: true, data: parsed }), {
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
