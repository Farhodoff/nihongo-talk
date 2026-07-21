export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  // Server-side key takes priority, then fall back to client-provided key
  const serverKey = process.env.DEEPSEEK_API_KEY;
  const clientAuth = req.headers.get('Authorization');
  const clientKey = clientAuth?.startsWith('Bearer ') ? clientAuth.substring(7) : null;
  
  const apiKey = serverKey || clientKey;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'DeepSeek API kaliti sozlanmagan. Vercel Environment Variables dan DEEPSEEK_API_KEY ni qo\'shing.' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

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
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("DeepSeek API proxy error:", error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
