import OpenAI from "openai";

let openaiInstance: OpenAI | null = null;
let currentKey: string = '';

const getDeepSeekClient = (apiKey: string) => {
    if (!openaiInstance || currentKey !== apiKey) {
        openaiInstance = new OpenAI({
            baseURL: 'https://api.deepseek.com/v1',
            apiKey: apiKey,
            dangerouslyAllowBrowser: true 
        });
        currentKey = apiKey;
    }
    return openaiInstance;
};

export const callDeepSeek = async (
    prompt: string,
    apiKey: string | undefined | null,
    systemPrompt?: string,
    isJson: boolean = false,
    modelName: string = 'deepseek-chat',
    thinkingEnabled: boolean = false
): Promise<string> => {
    let actualModel = 'deepseek-chat';
    if (modelName === 'deepseek-reasoner' || modelName.includes('pro') || thinkingEnabled) {
        actualModel = 'deepseek-reasoner';
    }

    const messages: { role: string; content: string }[] = [];
    if (systemPrompt) {
        messages.push({ role: "system", content: systemPrompt });
    }
    messages.push({ role: "user", content: prompt });

    const payload: Record<string, unknown> = {
        model: actualModel,
        messages: messages
    };

    if (isJson) {
        payload.response_format = { type: "json_object" };
    }

    if (thinkingEnabled) {
        payload.thinking = { type: "enabled" };
        payload.reasoning_effort = "high";
    }

    // Enforce strict key isolation: reject non-DeepSeek keys (e.g. Gemini AIza... or OpenAI sk-proj-...)
    let validApiKey = apiKey;
    if (validApiKey && (validApiKey.startsWith('AIza') || validApiKey.startsWith('sk-proj-'))) {
        validApiKey = null;
    }

    // Try env variable or hardcoded default fallback
    if (!validApiKey) {
        try {
            if (typeof import.meta !== 'undefined' && import.meta.env?.VITE_DEEPSEEK_API_KEY) {
                validApiKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
            }
        } catch (e) {}
        if (!validApiKey) {
            try {
                validApiKey = atob('c2stOGI1YjZiMTg5MWI3NDRmNGExZTJiOWZiY2M5MTcyNjk=');
            } catch (e) {}
        }
    }

    // === STRATEGY 1: Vercel serverless proxy (works in both dev and production) ===
    // Always try the /api/deepseek proxy first — it uses the server-side DEEPSEEK_API_KEY
    // and avoids CORS issues entirely. This is the primary path in production.
    try {
        const headers: Record<string, string> = { 'Content-Type': 'application/json' };
        if (validApiKey) {
            headers['Authorization'] = `Bearer ${validApiKey}`;
        }
        
        const proxyRes = await fetch('/api/deepseek', {
            method: 'POST',
            headers,
            body: JSON.stringify(payload)
        });

        if (proxyRes.ok) {
            const data = await proxyRes.json();
            const text = data.choices?.[0]?.message?.content || '';
            if (text) return text;
        }
        // If proxy returned an error but we have a key, fall through to direct call
        if (!validApiKey) {
            const errorText = await proxyRes.text().catch(() => '');
            throw new Error(`AI server xatosi (${proxyRes.status}): ${errorText || 'Noma\'lum xato'}`);
        }
    } catch (e: any) {
        // If no valid key and proxy failed, throw
        if (!validApiKey) {
            throw e;
        }
        console.warn('[DeepSeek] Server proxy failed, trying direct call:', e.message);
    }

    // === STRATEGY 2: Direct OpenAI SDK call (works if CORS is allowed / dev mode) ===
    if (validApiKey) {
        const client = getDeepSeekClient(validApiKey);
        const response = await client.chat.completions.create(payload as any);
        return response.choices[0].message.content || '';
    }

    throw new Error("🔑 DeepSeek API kaliti topilmadi. Sozlamalar bo'limida API kalitingizni kiriting.");
};
