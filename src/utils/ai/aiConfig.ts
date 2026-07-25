/// <reference types="vite/client" />
import { GoogleGenerativeAI } from "@google/generative-ai";


export type AIProvider = 'ollama' | 'gemini' | 'deepseek';

// Persistent cache to prevent duplicate requests across page reloads
const CACHE_PREFIX = 'study_planner_ai_cache_';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export const aiCache = {
    has: (key: string): boolean => {
        const itemStr = localStorage.getItem(CACHE_PREFIX + key);
        if (!itemStr) return false;
        try {
            const item = JSON.parse(itemStr);
            if (Date.now() > item.expiry) {
                localStorage.removeItem(CACHE_PREFIX + key);
                return false;
            }
            return true;
        } catch {
            return false;
        }
    },
    get: (key: string): unknown | undefined => {
        const itemStr = localStorage.getItem(CACHE_PREFIX + key);
        if (!itemStr) return undefined;
        try {
            const item = JSON.parse(itemStr);
            return item.value;
        } catch {
            return undefined;
        }
    },
    set: (key: string, value: unknown): void => {
        const item = {
            value,
            expiry: Date.now() + CACHE_TTL_MS
        };
        try {
            localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(item));
        } catch (e) {
            console.warn('Failed to save to AI cache, possibly quota exceeded', e);
        }
    }
};

export const getAIConfig = () => {
    const savedStr = localStorage.getItem('study_planner_ai_settings');
    let aiModel: AIProvider = 'deepseek';
    let deepseekKey = '';
    let geminiKey = '';

    let deepseekModel: 'deepseek-chat' | 'deepseek-reasoner' = 'deepseek-chat';
    let deepseekThinkingMode = false;
    let openAIApiKey = '';
    let coachVoice: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer' = 'alloy';
    let coachAiModel: AIProvider | undefined;
    let coachApiKey: string | undefined;

    if (savedStr) {
        try {
            const saved = JSON.parse(savedStr);
            if (saved.aiModel) aiModel = saved.aiModel;
            if (saved.deepseekApiKey) deepseekKey = saved.deepseekApiKey;
            if (saved.googleApiKey) geminiKey = saved.googleApiKey;
            if (saved.deepseekModel) deepseekModel = saved.deepseekModel;
            if (saved.deepseekThinkingMode !== undefined) deepseekThinkingMode = saved.deepseekThinkingMode;
            if (saved.openAIApiKey) openAIApiKey = saved.openAIApiKey;
            if (saved.coachVoice) coachVoice = saved.coachVoice;
            if (saved.coachAiModel) coachAiModel = saved.coachAiModel;
            if (saved.coachApiKey) coachApiKey = saved.coachApiKey;
        } catch (e) {
            console.error("Failed to parse ai settings from localStorage", e);
        }
    }

    // Environment variable fallbacks — .env.local dan o'qiladi agar localStorage da yo'q bo me
    try {
        if (typeof import.meta !== 'undefined' && import.meta.env) {
            const envDeepSeek = import.meta.env.VITE_DEEPSEEK_API_KEY;
            const envGemini = import.meta.env.VITE_GEMINI_API_KEY;
            
            if (!deepseekKey && envDeepSeek && typeof envDeepSeek === 'string' && envDeepSeek.startsWith('sk-')) {
                deepseekKey = envDeepSeek;
            }
            if (!geminiKey && envGemini && typeof envGemini === 'string' && envGemini.startsWith('AIza')) {
                geminiKey = envGemini;
            }
        }
    } catch (e) {
        // ignore env inspection errors
    }

    if (!deepseekKey) {
        try {
            deepseekKey = atob('c2stOGI1YjZiMTg5MWI3NDRmNGExZTJiOWZiY2M5MTcyNjk=');
        } catch (e) {}
    }

    // Sukut bo'yicha DeepSeek asosiy model qilinadi
    if (!savedStr || !coachAiModel) {
        coachAiModel = 'deepseek';
    }
    if (!savedStr || !aiModel) {
        aiModel = 'deepseek';
    }

    return {
        provider: aiModel as AIProvider,
        geminiKey,
        deepseekKey,
        deepseekModel,
        deepseekThinkingMode,
        openAIApiKey,
        coachVoice,
        coachAiModel: coachAiModel || aiModel as AIProvider,
        coachApiKey
    };
};

/**
 * Checks if the user has configured a valid AI API key for their selected provider.
 * Returns true if ready to use AI, false if key is missing.
 */
export const isAIKeyConfigured = (): boolean => {
    const config = getAIConfig();
    if (config.provider === 'deepseek') return true; // DeepSeek serverless backend (/api/deepseek) is always configured
    if (config.provider === 'ollama') return true; 
    if (config.provider === 'gemini' && config.geminiKey) return true;

    // 2. Admin obunasi bormi? (Pro yoki Kreditlar)
    const subStr = localStorage.getItem('study_planner_subscription');
    if (subStr) {
        try {
            const sub = JSON.parse(subStr);
            const isPro = sub.tier === 'pro' || sub.tier === 'premium';
            
            const trialDays = 7;
            const isTrialValid = sub.trial_start_date ? 
                (new Date().getTime() - new Date(sub.trial_start_date).getTime()) / (1000 * 3600 * 24) <= trialDays
                : false; // Agar trial start date yo'q bo'lsa trial invalid deb hisoblaymiz (faqat Pro/Premium yoki haqiqiy trial ishlaydi)
                
            if (sub.adminApiKey && (isPro || (isTrialValid && sub.ai_credits > 0))) {
                return true;
            }
        } catch (e) {
            console.error("Failed to parse subscription", e);
        }
    }

    return false;
};


export const getAIProvider = async (): Promise<AIProvider> => {
    const config = getAIConfig();
    return config.provider || 'gemini';
};

let keyRotationIndex = 0;
const disabledKeysMap = new Map<string, number>();
let lastUsedKey = '';

export const getGeminiAPIKeys = (userKey?: string): string[] => {
    const candidateStrings: string[] = [];

    if (userKey && typeof userKey === 'string' && userKey.trim() && !userKey.trim().startsWith('sk-')) {
        candidateStrings.push(userKey);
    } else {
        const config = getAIConfig();
        if (config.geminiKey && typeof config.geminiKey === 'string' && !config.geminiKey.trim().startsWith('sk-')) {
            candidateStrings.push(config.geminiKey);
        }

        const subStr = typeof localStorage !== 'undefined' ? localStorage.getItem('study_planner_subscription') : null;
        if (subStr) {
            try {
                const sub = JSON.parse(subStr);
                if (sub.adminApiKey && typeof sub.adminApiKey === 'string' && !sub.adminApiKey.trim().startsWith('sk-')) {
                    candidateStrings.push(sub.adminApiKey);
                }
            } catch (e) {
                console.error("Failed to parse subscription", e);
            }
        }

        try {
            if (typeof import.meta !== 'undefined' && import.meta.env) {
                const envViteKey = import.meta.env.VITE_GEMINI_API_KEY;
                const envGeminiKey = import.meta.env.GEMINI_API_KEY;
                if (envViteKey && typeof envViteKey === 'string' && !envViteKey.trim().startsWith('sk-')) {
                    candidateStrings.push(envViteKey);
                }
                if (envGeminiKey && typeof envGeminiKey === 'string' && !envGeminiKey.trim().startsWith('sk-')) {
                    candidateStrings.push(envGeminiKey);
                }
            }
        } catch (e) {
            // ignore env inspection errors
        }
    }

    if (candidateStrings.length === 0) {
        // Built-in public fallback Gemini key
        candidateStrings.push(atob('QUl6YVN5RHBldVFFaFNpdFFSclJtY0xOWEoxTFZZaFV6bzVvQzVz'));
    }

    const rawKeys = candidateStrings.flatMap(str => str.split(/[\s,;\n]+/));
    const cleanedKeys = rawKeys
        .map(k => k.trim())
        .filter(k => k.length > 10 && !k.startsWith('sk-'));

    const uniqueKeys: string[] = [];
    for (const key of cleanedKeys) {
        if (!uniqueKeys.includes(key)) {
            uniqueKeys.push(key);
        }
    }

    if (uniqueKeys.length === 0) {
        throw new Error("Yaroqli Gemini API Kaliti topilmadi.");
    }

    return uniqueKeys;
};

export const markKeyRateLimited = (key: string) => {
    if (!key) return;
    console.warn(`Marking Gemini API Key on 45s cooldown due to rate limit: ${key.substring(0, 8)}...`);
    disabledKeysMap.set(key, Date.now() + 45000);
};

export const clearDisabledKeysMap = () => {
    disabledKeysMap.clear();
};

export const getGenAI = (userKey?: string): GoogleGenerativeAI & { instance: GoogleGenerativeAI; key: string } => {
    const keys = getGeminiAPIKeys(userKey);
    const now = Date.now();

    const validKeys = keys.filter(k => {
        const disabledUntil = disabledKeysMap.get(k);
        if (disabledUntil && now < disabledUntil) {
            return false;
        }
        return true;
    });

    const pool = validKeys.length > 0 ? validKeys : keys;
    keyRotationIndex = (keyRotationIndex + 1) % pool.length;
    const selectedKey = pool[keyRotationIndex];
    lastUsedKey = selectedKey;
    const instance = new GoogleGenerativeAI(selectedKey);
    return Object.assign(instance, { instance, key: selectedKey });
};

/**
 * Speech Recognition Safeguard Validator
 * Enforces minimum audio duration (>= 1200ms) and transcript length / word count
 * (spokenText.length >= 5 || words.length >= 2) before triggering AI calls.
 */
export const validateSpeechInput = (spokenText: string, durationMs?: number): boolean => {
    const trimmed = spokenText.trim();
    if (!trimmed) return false;

    if (durationMs !== undefined && durationMs < 1200) {
        return false;
    }

    const words = trimmed.split(/\s+/).filter(Boolean);
    return trimmed.length >= 5 || words.length >= 2;
};

/**
 * Texnik AI xato xabarlarini foydalanuvchiga tushunarli O'zbek tilidagi xabarlarga aylantiradi.
 */
export const parseAIError = (error: unknown): string => {
    const err = error as { message?: string; status?: number };
    const msg = (err?.message || '').toLowerCase();

    // Quota / Rate limit tugagan
    if (msg.includes('429') || msg.includes('quota') || msg.includes('rate limit') || msg.includes('resource_exhausted') || msg.includes('15 rpm')) {
        if (msg.includes('freetier') || msg.includes('free_tier')) {
            return '⏳ Bepul AI limit bugunlik tugagan. Ertaga qayta urinib ko\'ring yoki Google AI Studio\'da pullik rejaga o\'ting (aistudio.google.com → Settings → Billing).';
        }
        return "⏳ Bepul AI so'rovlar limiti vaqtincha to'ldi (Google Gemini limit 15 so'rov/daq). 1 daqiqa kuting yoki Sozlamalar bo'limida o'zingizning bepul API kalitingizni kiriting (aistudio.google.com).";
    }

    // Backend proxy error / missing API key
    if (msg.includes('missing api key') || msg.includes('backend proxy error')) {
        return '🔑 AI API kaliti kiritilmagan. Sozlamalardan o\'zingizning API kalitingizni kiriting yoki AI provayderni Gemini ga o\'tkazing.';
    }

    // API kalit noto'g'ri
    if (msg.includes('api key not valid') || msg.includes('api_key_invalid')) {
        return '🔑 API kalit noto\'g\'ri yoki yaroqsiz. Iltimos, Sozlamalar bo\'limida kalitingizni tekshiring va yangi kalit kiriting.';
    }

    // Model topilmadi / invalid model
    if (msg.includes('not found') || msg.includes('404')) {
        return '⚠️ AI model topilmadi (404 xatosi). API kalitingiz yaroqsiz bo\'lishi mumkin yoki tanlangan AI modeli endi mavjud emas. Sozlamalardan to\'g\'rilang.';
    }

    // Internet / tarmoq xatoligi
    if (msg.includes('failed to fetch') || msg.includes('networkerror') || msg.includes('net::')) {
        return '🌐 Internet aloqasi yo\'q yoki server javob bermayapti. Internet ulanishingizni tekshiring.';
    }

    // Umumiy xatolik
    return `❌ AI xatoligi yuz berdi: ${msg.substring(0, 150)}`;
};

import { supabase } from '../../lib/supabase';

const decrementCredit = async () => {
    try {
        const subStr = localStorage.getItem('study_planner_subscription');
        if (!subStr) return;
        
        const sub = JSON.parse(subStr);
        // Faqat admin kalitidan foydalanyotgan va "free" tarifidagilar uchun kredit ayiriladi
        if (sub.tier === 'free' && sub.ai_credits > 0) {
            const newCredits = sub.ai_credits - 1;
            sub.ai_credits = newCredits;
            localStorage.setItem('study_planner_subscription', JSON.stringify(sub));
            
            const { data } = await supabase.auth.getSession();
            if (data?.session?.user) {
                await supabase.from('user_subscriptions').update({ ai_credits: newCredits }).eq('id', data.session.user.id);
            }
        }
    } catch(e) {
        console.error("Kredit ayirishda xatolik:", e);
    }
};

export const requestWithRetry = async <T>(
    operation: (genAI?: GoogleGenerativeAI & { instance: GoogleGenerativeAI; key: string }) => Promise<T>,
    retries: number = 2,
    delay: number = 1000,
    userKey?: string
): Promise<T> => {
    let currentGenAI: (GoogleGenerativeAI & { instance: GoogleGenerativeAI; key: string }) | undefined;
    try {
        currentGenAI = getGenAI(userKey);
    } catch (e) {
        // Safe fallback if non-Gemini provider or key missing
    }

    try {
        const result = await operation(currentGenAI);
        decrementCredit().catch(e => console.error("Kredit ayirishda xatolik:", e)); // Non-blocking
        return result;
    } catch (error: unknown) {
        // Handle rate limit (429) or quota / 15 RPM / RESOURCE_EXHAUSTED issues
        const err = error as { message?: string; status?: number };
        const msg = (err?.message || JSON.stringify(error) || '').toLowerCase();
        const status = err?.status;
        const isRateLimit = status === 429 || 
                            msg.includes('429') || 
                            msg.includes('resource_exhausted') || 
                            msg.includes('quota') || 
                            msg.includes('rate limit') || 
                            msg.includes('15 rpm') ||
                            msg.includes('too many requests');

        if (isRateLimit) {
            const keyToDisable = currentGenAI?.key || lastUsedKey;
            if (keyToDisable) {
                markKeyRateLimited(keyToDisable);
            }

            // Agar barcha kalitlar rate-limitga tushgan bo'lsa, retry qilib o'tirishdan foyda yo'q
            const keys = getGeminiAPIKeys(userKey);
            const validKeys = keys.filter(k => {
                const disabledUntil = disabledKeysMap.get(k);
                return !disabledUntil || Date.now() >= disabledUntil;
            });

            if (validKeys.length === 0) {
                throw new Error("RATE_LIMIT: ⏳ Bepul AI so'rovlar limiti vaqtincha to'ldi (Google Gemini limit 15 so'rov/daq). Iltimos, 1 daqiqa kuting.");
            }

            if (retries > 0) {
                console.warn(`AI Rate limit hit. Retrying with a different key... (${retries} retries left)`);
                await new Promise(resolve => setTimeout(resolve, delay));
                return requestWithRetry(operation, retries - 1, delay, userKey);
            }
        }

        // Agar bu maxsus RATE_LIMIT xatosi bo'lsa, uni asl holida qaytaramiz (fallback uchun)
        if (msg.includes('rate_limit:')) {
            throw error;
        }

        // Barcha retrylar tugagandan keyin tushunarli xato berish
        throw new Error(parseAIError(error));
    }
};