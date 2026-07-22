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
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const serverKey = process.env.DEEPSEEK_API_KEY;
  const clientAuth = req.headers.get('Authorization');
  const clientKey = clientAuth && clientAuth.startsWith('Bearer ') && clientAuth.length > 15 ? clientAuth.substring(7) : null;
  
  const apiKey = serverKey || clientKey || getFallbackKey();

  try {
    const payload = await req.json();

    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.text();
      return new Response(errorData, {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("DeepSeek API proxy error:", error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
