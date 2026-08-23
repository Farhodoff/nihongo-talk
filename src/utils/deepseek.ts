import { supabase } from '../lib/supabase';
import { safeStorage } from './safeStorage';

export const callDeepSeek = async (
    prompt: string,
    apiKey: string | undefined | null,
    systemPrompt?: string,
    isJson: boolean = false,
    modelName: string = 'deepseek-chat',
    thinkingEnabled: boolean = false
): Promise<string> => {
    let actualModel = 'deepseek-chat';
    if (!isJson && (modelName === 'deepseek-reasoner' || modelName === 'deepseek-v4-pro' || modelName.includes('pro') || modelName.includes('reasoner') || thinkingEnabled)) {
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
        payload.model = 'deepseek-chat';
        payload.response_format = { type: "json_object" };
    }

    // Enforce strict key isolation: reject non-DeepSeek keys (e.g. Gemini AIza...)
    let validApiKey = apiKey;
    if (validApiKey && (validApiKey.startsWith('AIza') || validApiKey.startsWith('sk-proj-'))) {
        validApiKey = null;
    }

    if (!validApiKey || !validApiKey.startsWith('sk-')) {
        const envKey = (import.meta as any).env?.VITE_DEEPSEEK_API_KEY || (import.meta as any).env?.DEEPSEEK_API_KEY;
        if (envKey && typeof envKey === 'string' && envKey.trim().startsWith('sk-')) {
            validApiKey = envKey.trim();
        }
    }

    if (!validApiKey || !validApiKey.startsWith('sk-')) {
        const savedSettings = safeStorage.getItem<Record<string, any>>('study_planner_ai_settings');
        if (savedSettings?.deepseekApiKey && typeof savedSettings.deepseekApiKey === 'string' && savedSettings.deepseekApiKey.startsWith('sk-')) {
            validApiKey = savedSettings.deepseekApiKey;
        } else if (savedSettings?.coachApiKey && typeof savedSettings.coachApiKey === 'string' && savedSettings.coachApiKey.startsWith('sk-')) {
            validApiKey = savedSettings.coachApiKey;
        } else {
            const storedUserKey = typeof localStorage !== 'undefined'
                ? localStorage.getItem('study_planner_deepseek_api_key')
                : null;
            if (storedUserKey && storedUserKey.startsWith('sk-')) {
                validApiKey = storedUserKey;
            }
        }
    }

    // Helper to format DeepSeek errors cleanly
    const formatDeepSeekError = (status: number, errObj: any): string => {
        const rawMsg = errObj?.error?.message || errObj?.message || (typeof errObj?.error === 'string' ? errObj.error : null) || '';
        const lower = rawMsg.toLowerCase();

        if (status === 401 || lower.includes('authentication') || lower.includes('invalid api key')) {
            return "DeepSeek API kaliti noto'g'ri (401 Authentication Error). Iltimos platform.deepseek.com orqali to'g'ri API kalit oling.";
        }
        if (status === 402 || lower.includes('insufficient') || lower.includes('balance') || errObj?.error?.code === 'insufficient_balance') {
            return "DeepSeek hisobingizda mablag' tugagan (402 Insufficient Balance). platform.deepseek.com orqali 'Top up' qilib hisobingizni to'ldiring.";
        }
        if (status === 429 || lower.includes('rate limit') || lower.includes('too many requests')) {
            return "DeepSeek so'rovlar limiti oshdi (429 Rate Limit). Iltimos bir necha soniyadan so'ng qayta urinib ko'ring.";
        }
        if (status === 503) {
            return rawMsg || "Serverda DeepSeek API kaliti sozlanmagan. Iltimos Vercel Environment Variables-da DEEPSEEK_API_KEY qo'shib, Redeploy qiling.";
        }
        if (rawMsg) {
            return `DeepSeek xatosi (${status}): ${rawMsg}`;
        }
        return `DeepSeek xatosi (HTTP ${status}). Iltimos sozlamalarni tekshiring.`;
    };

    // 1. If user provided a valid direct DeepSeek key (BYOK), call API directly first
    if (validApiKey && validApiKey.startsWith('sk-')) {
        try {
            const directResponse = await fetch('https://api.deepseek.com/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${validApiKey}`,
                },
                body: JSON.stringify(payload),
            });

            if (directResponse.ok) {
                const data = await directResponse.json();
                const text = data.choices?.[0]?.message?.content || '';
                if (text) return text;
            } else {
                const errJson = await directResponse.json().catch(() => ({}));
                console.warn('[DeepSeek Direct BYOK] Status non-200:', directResponse.status, errJson);
                // If direct BYOK fails with authentication or balance error, throw immediately with exact diagnostic
                if (directResponse.status === 401 || directResponse.status === 402) {
                    throw new Error(formatDeepSeekError(directResponse.status, errJson));
                }
            }
        } catch (directErr: any) {
            if (directErr?.message && (directErr.message.includes('401') || directErr.message.includes('402') || directErr.message.includes('Insufficient'))) {
                throw directErr;
            }
            console.warn('[DeepSeek Direct BYOK] Call failed, attempting proxy fallback:', directErr);
        }
    }

    // 2. Try serverless proxy /api/deepseek with Supabase auth token or custom key header
    try {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        };

        if (validApiKey && validApiKey.startsWith('sk-')) {
            headers['X-Custom-Key'] = validApiKey;
        }

        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.access_token) {
                headers['Authorization'] = `Bearer ${session.access_token}`;
            }
        } catch {
            // Guest or offline
        }

        const response = await fetch('/api/deepseek', {
            method: 'POST',
            headers,
            credentials: 'omit', // Avoid HTTP 494 Request Header Too Large from cookies
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            const data = await response.json();
            const text = data.choices?.[0]?.message?.content || '';
            if (text) return text;
        } else {
            const errData = await response.json().catch(() => ({}));
            console.warn('[DeepSeek Proxy] Serverless proxy returned non-200:', response.status, errData);
            throw new Error(formatDeepSeekError(response.status, errData));
        }
    } catch (proxyErr: any) {
        console.warn('[DeepSeek Proxy] Error calling serverless proxy:', proxyErr);
        if (proxyErr?.message && !proxyErr.message.includes('fetch')) {
            throw proxyErr;
        }
    }

    throw new Error("DeepSeek AI xizmatiga ulanib bo'lmadi. Iltimos Sozlamalar bo'limida API kalitingizni tekshiring yoki Vercel Environment Variables-da DEEPSEEK_API_KEY mavjudligini ta'minlang.");
};
