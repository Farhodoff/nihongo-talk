import OpenAI from "openai";

let openaiInstance: OpenAI | null = null;
let currentKey: string = '';

const getDeepSeekClient = (apiKey: string) => {
    if (!openaiInstance || currentKey !== apiKey) {
        openaiInstance = new OpenAI({
            baseURL: 'https://api.deepseek.com',
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

    if (!apiKey) {
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

        const data = await response.json();
        return data.choices?.[0]?.message?.content || '';
    }
    
    // Fallback to direct call using OpenAI SDK if user provided their own key
    const client = getDeepSeekClient(apiKey);




     
    const response = await client.chat.completions.create(payload as any);

    return response.choices[0].message.content || '';
};
