export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const url = new URL(req.url);
  const text = url.searchParams.get('text');
  const lang = url.searchParams.get('lang') || 'en';

  if (!text) {
    return new Response('Missing text parameter', { status: 400 });
  }

  const cleanText = text.replace(/[*_#`~]/g, '').trim().substring(0, 200);
  const targetLang = lang.startsWith('ja') ? 'ja' : 'en';

  const gUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(cleanText)}&tl=${targetLang}&client=tw-ob`;

  try {
    const response = await fetch(gUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (!response.ok) {
      return new Response('TTS upstream error', { status: response.status });
    }

    const audioData = await response.arrayBuffer();

    return new Response(audioData, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=86400, immutable'
      }
    });
  } catch (error) {
    console.error("TTS proxy error:", error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
