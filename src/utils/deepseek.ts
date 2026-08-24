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
        if (lower.includes('invalid api key') || lower.includes('authentication') || lower.includes('unauthorized')) {
            return "AI_UNAVAILABLE: DeepSeek API kaliti noto'g'ri sozlangan. Iltimos kalitni tekshiring.";
        }
        if (rawMsg) {
            return `AI_ERROR (${status}): ${rawMsg}`;
        }
        return `AI_ERROR: AI xizmatida xatolik yuz berdi (HTTP ${status}). Iltimos qayta urinib ko'ring.`;
    };

    // 1. Primary: Route via Supabase Edge Function ('deepseek')
    try {
        let { data, error } = await supabase.functions.invoke('deepseek', {
            body: payload,
        });

        // If Edge Function returns 404 or alternate name needed
        if (error && ((error as any)?.context?.status === 404 || (error as any)?.message?.includes('not found'))) {
            const fallbackResult = await supabase.functions.invoke('deepseek-', {
                body: payload,
            });
            if (fallbackResult.data || !fallbackResult.error) {
                data = fallbackResult.data;
                error = fallbackResult.error;
            }
        }

        if (!error && data) {
            if (data.error) {
                const status = (data as any)?.status || (data.error?.code === 'AI_NOT_CONFIGURED' ? 503 : 400);
                throw new Error(formatDeepSeekError(status, data));
            }
            const text = data.choices?.[0]?.message?.content || data.choices?.[0]?.message?.reasoning_content || data.choices?.[0]?.text || data.reply || '';
            if (text && text.trim().length > 0) return text;
        }

        if (error) {
            console.warn('[Supabase Edge Function] Invoke notice, trying direct endpoint fetch:', error);
        }
    } catch (edgeErr: any) {
        if (edgeErr?.message && (edgeErr.message.startsWith('AI_') || edgeErr.message.includes('AI xizmati') || edgeErr.message.includes('AI_RATE_LIMITED') || edgeErr.message.includes('Quota'))) {
            throw edgeErr;
        }
        console.warn('[Supabase Edge Function] Catch notice, attempting direct endpoint fetch:', edgeErr?.message);
    }

    // 2. Direct Supabase Edge Endpoint Fetch (Bypasses client wrapper quirks)
    try {
        const directUrl = 'https://qmuimxnknxwarvnkpnlo.supabase.co/functions/v1/deepseek';
        const anonKey = 'sb_publishable_6g0Ei_1Cw46e1mJLKj_1Ug_sOmhlgoI';
        
        let token = anonKey;
        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.access_token) {
                token = session.access_token;
            }
        } catch {}

        const response = await fetch(directUrl, {
            method: 'POST',
            headers: {
                'apikey': anonKey,
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
            signal: typeof AbortSignal !== 'undefined' && 'timeout' in AbortSignal ? AbortSignal.timeout(45000) : undefined,
        });

        if (response.ok) {
            const data = await response.json();
            const text = data.choices?.[0]?.message?.content || data.choices?.[0]?.message?.reasoning_content || data.choices?.[0]?.text || data.reply || '';
            if (text && text.trim().length > 0) return text;
            throw new Error("AI_EMPTY_RESPONSE: AI xizmati bo'sh javob qaytardi.");
        } else {
            const errData = await response.json().catch(() => ({}));
            throw new Error(formatDeepSeekError(response.status, errData));
        }
    } catch (directErr: any) {
        if (directErr?.message && (directErr.message.startsWith('AI_') || directErr.message.includes('AI xizmati') || directErr.message.includes('AI_RATE_LIMITED'))) {
            throw directErr;
        }
        throw new Error("AI_UNAVAILABLE: AI xizmatiga ulanib bo'lmadi (Tarmoq xatosi). Iltimos internet aloqasini tekshiring va qayta urinib ko'ring.");
    }
};
