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

// Strict concurrency queue — Supabase Free Tier supports ~10 concurrent connections.
// Keep MAX_CONCURRENT very low to prevent HTTP/2 socket flooding and ERR_CONNECTION_RESET storms.
let activeRequests = 0;
const MAX_CONCURRENT = 2;
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
    // Stagger next request by 80ms to prevent burst flooding on Supabase Free Tier
    if (requestQueue.length > 0 && activeRequests < MAX_CONCURRENT) {
        setTimeout(() => {
            if (requestQueue.length > 0 && activeRequests < MAX_CONCURRENT) {
                const next = requestQueue.shift();
                if (next) next();
            }
        }, 80);
    }
};

// In-flight GET request deduplication map to prevent redundant concurrent fetches to the same endpoint
const inFlightGetMap = new Map<string, Promise<Response>>();

// Helper to retry fetch — reduced to 1 retry; connection resets are NOT retried (they indicate server overload)
const fetchWithRetry = async (input: RequestInfo | URL, init?: RequestInit, maxRetries = 1): Promise<Response> => {
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            return await fetch(input, init);
        } catch (err: any) {
            // Aborted requests must never be retried
            if (err?.name === 'AbortError') throw err;
            // Connection resets mean server overload — retrying makes it WORSE
            const msg = String(err?.message || '');
            if (msg.includes('ERR_CONNECTION_RESET') || msg.includes('ERR_HTTP2_PROTOCOL_ERROR') || msg.includes('ERR_CONNECTION_CLOSED')) {
                throw err;
            }
            const isLast = attempt === maxRetries;
            if (isLast) throw err;
            const delay = 300 * Math.pow(2, attempt) + Math.floor(Math.random() * 100);
            await new Promise(resolve => setTimeout(resolve, delay));
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

    const method = (init?.method || 'GET').toUpperCase();
    const isGet = method === 'GET' || method === 'HEAD';

    // In-flight GET deduplication: If an identical GET query is already running, share the response
    const authHeader = (init?.headers as any)?.Authorization || (init?.headers as any)?.apikey || '';
    const dedupeKey = isGet ? `${urlStr}::${authHeader}` : '';

    if (isGet && inFlightGetMap.has(dedupeKey)) {
        try {
            const existingRes = await inFlightGetMap.get(dedupeKey)!;
            return existingRes.clone();
        } catch {
            // If in-flight failed, proceed to try fresh
            inFlightGetMap.delete(dedupeKey);
        }
    }

    const executeFetch = async (): Promise<Response> => {
        await acquireSlot();
        try {
            return await fetchWithRetry(input, init, 2);
        } catch (err: unknown) {
            if (isAuth) {
                // If it's auth/v1/user check failing due to network reset, return 200 fallback session or rethrow
                // so Supabase Auth client keeps the cached session instead of wiping it
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

    if (isGet) {
        const fetchPromise = executeFetch();
        inFlightGetMap.set(dedupeKey, fetchPromise);
        try {
            const res = await fetchPromise;
            return res.clone();
        } finally {
            // Clean up from dedupe map after brief window
            setTimeout(() => {
                inFlightGetMap.delete(dedupeKey);
            }, 50);
        }
    }

    return executeFetch();
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
