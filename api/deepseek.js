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
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const serverKey = process.env.DEEPSEEK_API_KEY;
  const clientAuth = req.headers.get('Authorization');
  const clientKey = clientAuth?.startsWith('Bearer ') && clientAuth.length > 15 ? clientAuth.substring(7) : null;
  const apiKey = serverKey || clientKey || getFallbackKey();

  let payload;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
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
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
