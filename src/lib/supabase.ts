import { createClient } from '@supabase/supabase-js';

const rawUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL;
const rawKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const isValidUrl = (url?: string) => {
    if (!url) return false;
    try {
        const parsed = new URL(url);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch {
        return false;
    }
};

const supabaseUrl = isValidUrl(rawUrl) ? rawUrl! : 'https://qmuimxnknxwarvnkpnlo.supabase.co';

// Clean and validate Supabase Anon Key (never expose or use SERVICE_ROLE in client bundle)
let supabaseAnonKey = (rawKey && rawKey !== 'your_supabase_anon_key') ? rawKey : '';
if (!supabaseAnonKey) {
    supabaseAnonKey = 'placeholder-anon-key';
}

if (!isValidUrl(rawUrl) || !rawKey || rawKey === 'your_supabase_anon_key') {
    console.warn('Supabase client: Initialized with default or placeholder credentials.');
}

// Custom fetch wrapper that handles network offline/AdBlocker/Connection Reset fetch errors gracefully
const customFetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    try {
        return await fetch(input, init);
    } catch (err: unknown) {
        // If direct fetch fails (e.g. ERR_CONNECTION_RESET, ERR_HTTP2_PROTOCOL_ERROR),
        // automatically fallback to local dev proxy in dev mode
        const urlStr = typeof input === 'string' 
            ? input 
            : input instanceof URL 
                ? input.toString() 
                : (input as Request)?.url || '';

        if (import.meta.env.DEV && urlStr.includes('supabase.co')) {
            try {
                const proxiedUrl = urlStr.replace(/^https:\/\/[^/]+/, '/supabase-proxy');
                return await fetch(proxiedUrl, init);
            } catch {
                // Ignore proxy error and proceed to safe fallback
            }
        }

        const errMsg = err instanceof Error ? err.message : 'Network connection reset or offline';
        return new Response(
            JSON.stringify({ 
                error: 'Network unavailable', 
                message: errMsg,
                data: [] 
            }),
            {
                status: 200,
                statusText: 'OK',
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
};

export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey,
    {
        auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: true
        },
        global: {
            fetch: customFetch
        }
    }
);
