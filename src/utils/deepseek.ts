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
        messages: messages,
        response_format: isJson ? { type: "json_object" } : { type: "text" }
    };

    if (thinkingEnabled) {
        payload.thinking = { type: "enabled" };
        payload.reasoning_effort = "high";
    }

    // Enforce strict key isolation: reject non-DeepSeek keys (e.g. Gemini AIza... or OpenAI sk-proj-...)
    let validApiKey = apiKey;
    if (validApiKey && (validApiKey.startsWith('AIza') || validApiKey.startsWith('sk-proj-'))) {
        validApiKey = null;
    }

    if (!validApiKey) {
        try {
            if (typeof import.meta !== 'undefined' && import.meta.env?.VITE_DEEPSEEK_API_KEY) {
                validApiKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
            }
        } catch (e) {}
    }

    if (!validApiKey) {
        // If no user-provided key, try to use the backend proxy
        const response = await fetch('/api/deepseek', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            let errorMsg = `Backend proxy error: ${response.status}`;
            try {
                const errorText = await response.text();
                errorMsg += ` - ${errorText}`;
            } catch (e) {}
            throw new Error(errorMsg);
        }

    // In browser environment, try Vite dev proxy first to bypass CORS issues
    if (typeof window !== 'undefined') {
        try {
            const proxyRes = await fetch('/api/deepseek/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${validApiKey}`
                },
                body: JSON.stringify(payload)
            });

            if (proxyRes.ok) {
                const data = await proxyRes.json();
                const text = data.choices?.[0]?.message?.content || '';
                if (text) return text;
            }
        } catch (e) {
            console.warn('[DeepSeek Proxy] Proxy request failed, falling back to direct SDK call:', e);
        }
    }
    
    // Fallback to direct call using OpenAI SDK
    const client = getDeepSeekClient(validApiKey);
    const response = await client.chat.completions.create(payload as any);

    return response.choices[0].message.content || '';
};
