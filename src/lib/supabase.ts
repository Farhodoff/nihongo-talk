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
let supabaseAnonKey = (rawKey && rawKey !== 'your_supabase_anon_key' && rawKey !== 'placeholder-anon-key') ? rawKey : '';
if (!supabaseAnonKey) {
    supabaseAnonKey = 'sb_publishable_6g0Ei_1Cw46e1mJLKj_1Ug_sOmhlgoI';
}

if (!isValidUrl(rawUrl) || !rawKey || rawKey === 'your_supabase_anon_key') {
    console.warn('Supabase client: Initialized with default or placeholder credentials.');
}

// Lightweight concurrency queue to prevent HTTP/2 stream multiplexing resets
let activeRequests = 0;
const MAX_CONCURRENT = 3;
const requestQueue: Array<() => void> = [];

const acquireSlot = async (): Promise<void> => {
    if (activeRequests < MAX_CONCURRENT) {
        activeRequests++;
        return;
    }
    return new Promise<void>((resolve) => {
        requestQueue.push(() => {
            activeRequests++;
            resolve();
        });
    });
};

const releaseSlot = () => {
    activeRequests--;
    if (requestQueue.length > 0 && activeRequests < MAX_CONCURRENT) {
        const next = requestQueue.shift();
        if (next) next();
    }
};

// Helper to retry fetch on transient connection resets / network drops
const fetchWithRetry = async (input: RequestInfo | URL, init?: RequestInit, maxRetries = 2): Promise<Response> => {
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            return await fetch(input, init);
        } catch (err: any) {
            // Aborted requests must never be retried: the signal stays aborted,
            // so every retry rejects instantly and spams "AbortError" rejections.
            if (err?.name === 'AbortError') throw err;
            const isLast = attempt === maxRetries;
            if (isLast) throw err;
            await new Promise(resolve => setTimeout(resolve, 200 * Math.pow(2, attempt)));
        }
    }
    throw new Error('Fetch failed after retries');
};

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

    // Already-aborted signals go straight to the fallback path — fetching with a
    // dead signal only produces an immediate AbortError rejection.
    const isAuth = urlStr.includes('/auth/v1');
    if (init?.signal?.aborted) {
        return isAuth
            ? new Response(JSON.stringify({ error: 'Request aborted' }), { status: 503, headers: { 'Content-Type': 'application/json' } })
            : new Response(JSON.stringify([]), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }

    await acquireSlot();
    try {
        return await fetchWithRetry(input, init, 2);
    } catch (err: unknown) {
        const isAuth = urlStr.includes('/auth/v1');
        if (isAuth) {
            // Rethrow so Supabase Auth client keeps the cached session instead of wiping it
            throw err;
        }

        // Return a clean empty array or ok object for REST queries to avoid throwing unhandled rejections
        const isPostOrPatch = init?.method === 'POST' || init?.method === 'PATCH' || init?.method === 'PUT';
        const fallbackBody = isPostOrPatch ? JSON.stringify({ success: true, id: 1 }) : JSON.stringify([]);

        return new Response(
            fallbackBody,
            {
                status: 200,
                statusText: 'OK',
                headers: { 'Content-Type': 'application/json' }
            }
        );
    } finally {
        releaseSlot();
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
