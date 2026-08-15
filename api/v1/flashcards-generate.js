export const config = {
  runtime: 'edge',
};

const getFallbackKey = () => {
  try {
    return atob('c2stOGI1YjZiMTg5MWI3NDRmNGExZTJiOWZiY2M5MTcyNjk=');
  } catch (e) {
    return '';
  }
};

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Kaizen-Key',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed. Use POST.' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  const serverKey = process.env.DEEPSEEK_API_KEY;
  const clientAuth = req.headers.get('Authorization');
  const clientKey = clientAuth?.startsWith('Bearer ') && clientAuth.length > 15 ? clientAuth.substring(7) : null;
  const customKey = req.headers.get('X-Kaizen-Key');
  const apiKey = serverKey || customKey || clientKey || getFallbackKey();

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

  const prompt = `Generate exactly ${Math.min(25, Math.max(1, count))} high-quality educational flashcards about: "${topic}".
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
        'Authorization': `Bearer ${apiKey}`,
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
    const parsed = JSON.parse(content || '{}');

    return new Response(JSON.stringify({ success: true, count: parsed.flashcards?.length || 0, data: parsed.flashcards || [] }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal API Server Error', message: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
}
