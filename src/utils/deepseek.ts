import { callGeminiFallback } from './ai/aiConfig';
import { supabase } from '../lib/supabase';

export const callDeepSeek = async (
    prompt: string,
    apiKey: string | undefined | null,
    systemPrompt?: string,
    isJson: boolean = false,
    modelName: string = 'deepseek-chat',
    thinkingEnabled: boolean = false
): Promise<string> => {
    let actualModel = 'deepseek-chat';
    if (modelName === 'deepseek-reasoner' || modelName === 'deepseek-v4-pro' || modelName.includes('pro') || modelName.includes('reasoner') || thinkingEnabled) {
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

    // Enforce strict key isolation: reject non-DeepSeek keys (e.g. Gemini AIza...)
    let validApiKey = apiKey;
    if (validApiKey && (validApiKey.startsWith('AIza') || validApiKey.startsWith('sk-proj-'))) {
        validApiKey = null;
    }

    if (!validApiKey || !validApiKey.startsWith('sk-')) {
        const storedAdminKey = typeof localStorage !== 'undefined'
            ? localStorage.getItem('study_planner_admin_deepseek_api_key') || localStorage.getItem('study_planner_deepseek_api_key')
            : null;
        if (storedAdminKey && storedAdminKey.startsWith('sk-')) {
            validApiKey = storedAdminKey;
        }
    }

    // 1. If user provided a direct DeepSeek key, use direct REST API fetch
    if (validApiKey && validApiKey.startsWith('sk-')) {
        try {
            const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${validApiKey}`
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json();
                const text = data.choices?.[0]?.message?.content || '';
                if (text) return text;
            }
        } catch (directErr: any) {
            console.warn('[DeepSeek] Direct REST call failed. Attempting proxy / fallback:', directErr?.message || directErr);
        }
    }

    // 2. Try serverless proxy /api/deepseek with Supabase auth token or client key
    try {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        };

        if (validApiKey && validApiKey.startsWith('sk-')) {
            headers['X-Custom-Key'] = validApiKey;
        }

        const { data: { session } } = await supabase.auth.getSession();
        if (session?.access_token) {
            headers['Authorization'] = `Bearer ${session.access_token}`;
        }

        const response = await fetch('/api/deepseek', {
            method: 'POST',
            headers,
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            const data = await response.json();
            const text = data.choices?.[0]?.message?.content || '';
            if (text) return text;
        }
    } catch (proxyErr) {
        console.warn('[DeepSeek Proxy] Error calling serverless proxy:', proxyErr);
    }

    // 3. Fallback to Gemini if configured
    try {
        return await callGeminiFallback(prompt, systemPrompt);
    } catch (fallbackErr) {
        console.error('[Gemini Fallback Failed]:', fallbackErr);
        throw new Error("AI xizmatiga ulanib bo'lmadi. Iltimos Sozlamalar bo'limida API kalitingizni tekshiring.");
    }
};
