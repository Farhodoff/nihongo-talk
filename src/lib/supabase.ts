import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
    console.warn('Supabase credentials topilmadi. VITE_SUPABASE_URL va VITE_SUPABASE_ANON_KEY o\'rniga fallback kalitlar ishlatilmoqda.');
}

// Custom fetch wrapper that handles network offline/AdBlocker fetch errors gracefully
const customFetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    try {
        return await fetch(input, init);
    } catch (err: any) {
        if (err?.name === 'TypeError' || err?.message?.includes('Failed to fetch')) {
            // Return structured 503 response for Supabase client when offline/blocked
            return new Response(
                JSON.stringify({ error: 'Network unavailable', message: 'Offline or network request blocked' }),
                {
                    status: 503,
                    statusText: 'Service Unavailable',
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }
        throw err;
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
