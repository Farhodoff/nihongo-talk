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

    // === STRATEGY 1: Direct OpenAI SDK call if API key exists ===
    if (validApiKey) {
        try {
            const client = getDeepSeekClient(validApiKey);
            const response = await client.chat.completions.create(payload as any);
            const text = response.choices[0]?.message?.content || '';
            if (text) return text;
        } catch (sdkErr: any) {
            console.warn('[DeepSeek] Direct SDK call failed, trying proxy...', sdkErr?.message);
        }
    }

    // === STRATEGY 2: Serverless proxy ===
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
    } catch (e: any) {
        console.warn('[DeepSeek] Server proxy error:', e?.message);
    }

    throw new Error("🔑 DeepSeek xizmati bilan bog'lanishda xato. Gemini zaxira modeliga o'tilmoqda.");
};
