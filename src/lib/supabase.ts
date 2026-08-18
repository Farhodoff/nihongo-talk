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
    const urlStr = typeof input === 'string' 
        ? input 
        : input instanceof URL 
            ? input.toString() 
            : (input as Request)?.url || '';

    // Prevent sending malformed undefined/null queries to Supabase
    if (urlStr.includes('=eq.undefined') || urlStr.includes('=eq.null')) {
        return new Response(
            JSON.stringify([]),
            {
                status: 200,
                statusText: 'OK',
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }

    try {
        return await fetch(input, init);
    } catch (err: unknown) {
        const isAuth = urlStr.includes('/auth/v1');
        if (isAuth) {
            return new Response(
                JSON.stringify({ error: 'Network connection reset or offline' }),
                {
                    status: 503,
                    statusText: 'Service Unavailable',
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        // Return a clean empty array for REST list queries to avoid throwing iterable errors
        return new Response(
            JSON.stringify([]),
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
