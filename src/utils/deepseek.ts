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
    apiKey: string,
    systemPrompt?: string,
    isJson: boolean = false,
    modelName: 'deepseek-v4-flash' | 'deepseek-v4-pro' = 'deepseek-v4-flash',
    thinkingEnabled: boolean = false
): Promise<string> => {
    if (!apiKey) {
        throw new Error("DeepSeek API Kaliti kiritilmagan. Sozlamalardan kalitni kiriting.");
    }
    
    const client = getDeepSeekClient(apiKey);
    
    const messages: any[] = [];
    if (systemPrompt) {
        messages.push({ role: "system", content: systemPrompt });
    }
    messages.push({ role: "user", content: prompt });

    const payload: any = {
        model: modelName,
        messages: messages,
        response_format: isJson ? { type: "json_object" } : { type: "text" }
    };

    if (thinkingEnabled) {
        payload.thinking = { type: "enabled" };
        payload.reasoning_effort = "high";
    }

    const response = await client.chat.completions.create(payload);

    return response.choices[0].message.content || '';
};
