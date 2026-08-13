import OpenAI from "openai";
import { callGeminiFallback } from './ai/aiConfig';

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
    let actualModel = 'deepseek-v4-flash';
    if (modelName === 'deepseek-reasoner' || modelName === 'deepseek-v4-pro' || modelName.includes('pro') || modelName.includes('reasoner') || thinkingEnabled) {
        actualModel = 'deepseek-v4-pro';
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

    // Enforce strict key isolation: reject non-DeepSeek keys (e.g. Gemini AIza... or OpenAI sk-proj-...)
    let validApiKey = apiKey;
    if (validApiKey && (validApiKey.startsWith('AIza') || validApiKey.startsWith('sk-proj-'))) {
        validApiKey = null;
    }

    // Try env variable
    if (!validApiKey) {
        try {
            if (typeof import.meta !== 'undefined' && import.meta.env?.VITE_DEEPSEEK_API_KEY) {
                validApiKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
            }
        } catch (e) {}
    }

    // If no valid DeepSeek API key exists, fallback to Gemini
    if (!validApiKey || !validApiKey.startsWith('sk-')) {
        console.warn("[DeepSeek] API key missing or invalid. Falling back to Google Gemini...");
        return callGeminiFallback(prompt, systemPrompt);
    }

    try {
        const client = getDeepSeekClient(validApiKey);
        const response = await client.chat.completions.create(payload as any);
        const text = response.choices[0]?.message?.content || '';
        if (text) return text;
    } catch (sdkErr: any) {
        console.warn('[DeepSeek] SDK call failed (e.g. 402 Insufficient Balance). Falling back to Google Gemini:', sdkErr?.message || sdkErr);
        try {
            return await callGeminiFallback(prompt, systemPrompt);
        } catch (fallbackErr) {
            console.error('[Gemini Fallback Failed]:', fallbackErr);
            throw sdkErr;
        }
    }

    return callGeminiFallback(prompt, systemPrompt);
};
