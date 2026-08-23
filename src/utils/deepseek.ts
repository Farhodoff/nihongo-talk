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

    // 1. Primary: Route via Supabase Edge Function ('deepseek-')
    try {
        let { data, error } = await supabase.functions.invoke('deepseek-', {
            body: payload,
        });

        if (error && ((error as any)?.context?.status === 404 || (error as any)?.message?.includes('not found') || (error as any)?.message?.includes('Failed to send'))) {
            const fallbackResult = await supabase.functions.invoke('deepseek', {
                body: payload,
            });
            if (fallbackResult.data || !fallbackResult.error) {
                data = fallbackResult.data;
                error = fallbackResult.error;
            }
        }

        if (!error && data) {
            if (data.error) {
                const status = (error as any)?.context?.status || (data.error?.code === 'AI_NOT_CONFIGURED' ? 503 : 400);
                throw new Error(formatDeepSeekError(status, data));
            }
            const text = data.choices?.[0]?.message?.content || '';
            if (text && text.trim().length > 0) return text;
            throw new Error("AI_INVALID_RESPONSE: AI javobi bo'sh qaytdi.");
        }

        if (error) {
            const status = (error as any)?.context?.status || 500;
            let errObj: any = {};
            try {
                if (typeof (error as any)?.context?.json === 'function') {
                    errObj = await (error as any).context.json();
                } else if ((error as any)?.message) {
                    errObj = { message: (error as any).message };
                }
            } catch {
                errObj = { message: error.message };
            }

            if (status === 503 || status === 429 || status === 400 || (errObj && errObj.error)) {
                throw new Error(formatDeepSeekError(status, errObj));
            }
        }
    } catch (edgeErr: any) {
        if (edgeErr?.message && (edgeErr.message.startsWith('AI_') || edgeErr.message.includes('AI xizmati') || edgeErr.message.includes('AI_UNAVAILABLE'))) {
            throw edgeErr;
        }
        console.warn('[Supabase Edge Function] Invocation note:', edgeErr);
    }

    // 2. Secondary / Local Dev fallback: Route via POST /api/deepseek
    try {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        };

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
            credentials: 'omit',
            body: JSON.stringify(payload),
            signal: typeof AbortSignal !== 'undefined' && 'timeout' in AbortSignal ? AbortSignal.timeout(45000) : undefined,
        });

        if (response.ok) {
            const data = await response.json();
            const text = data.choices?.[0]?.message?.content || '';
            if (text && text.trim().length > 0) return text;
            throw new Error("AI_INVALID_RESPONSE: AI javobi bo'sh qaytdi.");
        } else {
            const errData = await response.json().catch(() => ({}));
            console.warn('[DeepSeek Gateway] Server returned non-200:', response.status, errData);
            throw new Error(formatDeepSeekError(response.status, errData));
        }
    } catch (proxyErr: any) {
        console.warn('[DeepSeek Gateway] Error:', proxyErr);
        if (proxyErr?.message && !proxyErr.message.includes('fetch')) {
            throw proxyErr;
        }
        throw new Error("AI_UNAVAILABLE: AI xizmatiga ulanib bo'lmadi (Tarmoq xatosi). Iltimos internet aloqasini tekshiring va qayta urinib ko'ring.");
    }
};
