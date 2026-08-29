import { supabase } from '../lib/supabase';
import { purgeOversizedCookies } from '../lib/consoleFilter';

export interface DeepSeekRequestOptions {
    systemPrompt?: string;
    isJson?: boolean;
    modelName?: 'deepseek-chat' | 'deepseek-reasoner' | string;
    thinkingEnabled?: boolean;
}

/**
 * Universal DeepSeek AI Dispatcher.
 * 
 * ARCHITECTURE INVARIANTS:
 * - Single AI Provider: DeepSeek.
 * - NO API keys on frontend / browser bundle.
 * - NO localStorage / sessionStorage / user settings API key / BYOK.
 * - All AI requests route strictly through POST /api/deepseek (Serverless Gateway).
 */
export const callDeepSeek = async (
    prompt: string,
    systemPromptOrOptions?: string | DeepSeekRequestOptions | null,
    systemPromptParam?: string,
    isJson: boolean = false,
    modelName: string = 'deepseek-chat',
    thinkingEnabled: boolean = false
): Promise<string> => {
    let effectiveSystemPrompt: string | undefined = undefined;
    let effectiveIsJson = isJson;
    let effectiveModel = modelName;
    let effectiveThinking = thinkingEnabled;

    if (systemPromptOrOptions && typeof systemPromptOrOptions === 'object') {
        effectiveSystemPrompt = systemPromptOrOptions.systemPrompt;
        effectiveIsJson = Boolean(systemPromptOrOptions.isJson);
        effectiveModel = systemPromptOrOptions.modelName || 'deepseek-chat';
        effectiveThinking = Boolean(systemPromptOrOptions.thinkingEnabled);
    } else if (typeof systemPromptOrOptions === 'string') {
        effectiveSystemPrompt = systemPromptOrOptions;
    } else if (systemPromptParam) {
        effectiveSystemPrompt = systemPromptParam;
    }

    let actualModel = 'deepseek-chat';
    if (!effectiveIsJson && (effectiveModel === 'deepseek-reasoner' || effectiveModel.includes('reasoner') || effectiveThinking)) {
        actualModel = 'deepseek-reasoner';
    }

    const messages: { role: string; content: string }[] = [];
    if (effectiveSystemPrompt) {
        messages.push({ role: 'system', content: effectiveSystemPrompt });
    }
    messages.push({ role: 'user', content: prompt });

    const payload: Record<string, unknown> = {
        model: actualModel,
        messages: messages
    };

    if (effectiveIsJson) {
        payload.model = 'deepseek-chat';
        payload.response_format = { type: 'json_object' };
    }

    // Helper to format DeepSeek errors transparently
    const formatDeepSeekError = (status: number, errObj: any): string => {
        const rawMsg = errObj?.error?.message || errObj?.message || (typeof errObj?.error === 'string' ? errObj.error : null) || '';
        const lower = rawMsg.toLowerCase();

        const errorCode = errObj?.error?.code || (typeof errObj?.error === 'string' ? errObj.error : null);
        if (status === 401 || lower.includes('invalid api key') || lower.includes('authentication fails') || lower.includes('authentication') || lower.includes('unauthorized')) {
            return "AI_UNAVAILABLE: DeepSeek API kaliti noto'g'ri sozlangan yoki muddati o'tgan (Authentication Fails). Iltimos Vercel Dashboard → Settings → Environment Variables bo'limida DEEPSEEK_API_KEY kalitini yangilang.";
        }
        if (status === 503 || errorCode === 'AI_UNAVAILABLE' || errorCode === 'AI_NOT_CONFIGURED' || lower.includes('unavailable') || lower.includes('not configured')) {
            return "AI_UNAVAILABLE: AI xizmati vaqtincha mavjud emas. Iltimos birozdan so'ng qayta urinib ko'ring.";
        }
        if (status === 429 || lower.includes('rate limit') || lower.includes('too many requests')) {
            return "AI_RATE_LIMITED: AI so'rovlar tezligi oshdi (429). Iltimos bir necha soniyadan so'ng qayta urinib ko'ring.";
        }
        if (status === 408 || lower.includes('timeout')) {
            return "AI_TIMEOUT: AI xizmati javob berish vaqti tugadi (Timeout). Iltimos qayta urinib ko'ring.";
        }
        if (status === 494 || status === 431 || lower.includes('header too large') || lower.includes('cookie')) {
            purgeOversizedCookies();
            return "AI_UNAVAILABLE: Brauzer xotirasi sarlavhalari to'ldi (HTTP 494). Kesh avtomatik tozalandi, iltimos sahifani yangilab qayta urinib ko'ring.";
        }
        if (lower.includes('balance') || lower.includes('insufficient')) {
            return "AI_UNAVAILABLE: DeepSeek hisobingizda mablag' (balans) tugagan. Iltimos DeepSeek hisobini to'ldiring.";
        }
        if (rawMsg) {
            return `AI_ERROR (${status}): ${rawMsg}`;
        }
        return `AI_ERROR: AI xizmatida xatolik yuz berdi (HTTP ${status}). Iltimos qayta urinib ko'ring.`;
    };

    const baseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qmuimxnknxwarvnkpnlo.supabase.co';
    const directUrl = `${baseUrl.replace(/\/$/, '')}/functions/v1/deepseek`;
    const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_6g0Ei_1Cw46e1mJLKj_1Ug_sOmhlgoI';

    // 1. Primary Resilient Gateway: Same-Origin /api/deepseek (Zero ISP/CORS connection resets)
    try {
        purgeOversizedCookies();
        let authToken = anonKey;
        try {
            const { data } = await supabase.auth.getSession();
            if (data?.session?.access_token) {
                authToken = data.session.access_token;
            }
        } catch {}

        const response = await fetch('/api/deepseek', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            credentials: 'omit',
            body: JSON.stringify(payload),
            signal: typeof AbortSignal !== 'undefined' && 'timeout' in AbortSignal ? AbortSignal.timeout(45000) : undefined,
        });

        if (response.ok) {
            const data = await response.json();
            if (data.error) {
                const status = (data as any)?.status || (data.error?.code === 'AI_NOT_CONFIGURED' ? 503 : 400);
                throw new Error(formatDeepSeekError(status, data));
            }
            const text = data.choices?.[0]?.message?.content || data.choices?.[0]?.message?.reasoning_content || data.choices?.[0]?.text || data.reply || '';
            if (text && text.trim().length > 0) return text;
            throw new Error("AI_EMPTY_RESPONSE: AI xizmati bo'sh javob qaytardi.");
        } else {
            const errData = await response.json().catch(() => ({}));
            const errMsg = formatDeepSeekError(response.status, errData);
            if (response.status === 401 || response.status === 429 || response.status === 503 || response.status === 402) {
                throw new Error(errMsg);
            }
            console.warn('[DeepSeek /api/deepseek] Server returned non-200, trying direct Supabase Edge:', response.status);
        }
    } catch (apiErr: any) {
        if (apiErr?.message && (apiErr.message.includes('AI_RATE_LIMITED') || apiErr.message.includes('balans') || apiErr.message.includes('DEEPSEEK_API_KEY') || apiErr.message.includes('Authentication Fails'))) {
            throw apiErr;
        }
        console.warn('[DeepSeek /api/deepseek] Proxy notice, trying direct Edge Function:', apiErr?.message);
    }

    // 2. Secondary: Direct HTTPS to Supabase Edge Function
    try {
        const response = await fetch(directUrl, {
            method: 'POST',
            headers: {
                'apikey': anonKey,
                'Authorization': `Bearer ${anonKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
            signal: typeof AbortSignal !== 'undefined' && 'timeout' in AbortSignal ? AbortSignal.timeout(45000) : undefined,
        });

        if (response.ok) {
            const data = await response.json();
            if (data.error) {
                const status = (data as any)?.status || (data.error?.code === 'AI_NOT_CONFIGURED' ? 503 : 400);
                throw new Error(formatDeepSeekError(status, data));
            }
            const text = data.choices?.[0]?.message?.content || data.choices?.[0]?.message?.reasoning_content || data.choices?.[0]?.text || data.reply || '';
            if (text && text.trim().length > 0) return text;
        } else {
            const errData = await response.json().catch(() => ({}));
            const errMsg = formatDeepSeekError(response.status, errData);
            if (response.status === 401 || response.status === 429 || response.status === 503 || response.status === 402) {
                throw new Error(errMsg);
            }
        }
    } catch (directErr: any) {
        if (directErr?.message && (directErr.message.includes('AI_RATE_LIMITED') || directErr.message.includes('balans') || directErr.message.includes('DEEPSEEK_API_KEY') || directErr.message.includes('Authentication Fails'))) {
            throw directErr;
        }
        console.warn('[DeepSeek Edge Direct] Notice, trying supabase.functions.invoke fallback:', directErr?.message);
    }

    // 3. Tertiary: Supabase SDK Function Invoke
    try {
        const { data, error } = await supabase.functions.invoke('deepseek', {
            body: payload,
        });

        if (!error && data) {
            if (data.error) {
                const status = (data as any)?.status || (data.error?.code === 'AI_NOT_CONFIGURED' ? 503 : 400);
                throw new Error(formatDeepSeekError(status, data));
            }
            const text = data.choices?.[0]?.message?.content || data.choices?.[0]?.message?.reasoning_content || data.choices?.[0]?.text || data.reply || '';
            if (text && text.trim().length > 0) return text;
        } else if (error) {
            const errMsg = formatDeepSeekError(500, { message: error.message });
            if (error.message && (error.message.includes('401') || error.message.includes('Authentication') || error.message.includes('DEEPSEEK_API_KEY'))) {
                throw new Error(errMsg);
            }
        }
    } catch (sdkErr: any) {
        if (sdkErr?.message && (sdkErr.message.includes('AI_RATE_LIMITED') || sdkErr.message.includes('balans') || sdkErr.message.includes('DEEPSEEK_API_KEY') || sdkErr.message.includes('Authentication Fails'))) {
            throw sdkErr;
        }
        console.warn('[DeepSeek SDK] SDK invocation error:', sdkErr?.message);
    }

    throw new Error("AI_UNAVAILABLE: AI xizmatiga ulanib bo'lmadi (Tarmoq xatosi). Iltimos internet aloqasini tekshiring va qayta urinib ko'ring.");
};
