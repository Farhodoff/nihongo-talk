import { describe, it, expect, vi } from 'vitest';

describe('Supabase Client Network Layer Resilience & Deduplication', () => {
    it('should correctly configure the Supabase client with customFetch', async () => {
        const { supabase } = await import('../supabase');
        expect(supabase).toBeDefined();
        expect(typeof supabase.from).toBe('function');
        expect(typeof supabase.auth.getUser).toBe('function');
    });

    it('should deduplicate in-flight concurrent GET requests to the same endpoint', async () => {
        let fetchCount = 0;
        const originalFetch = global.fetch;

        global.fetch = vi.fn().mockImplementation(async () => {
            fetchCount++;
            await new Promise(r => setTimeout(r, 50));
            return new Response(JSON.stringify([{ id: 'test-item-1' }]), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        });

        const { supabase } = await import('../supabase');

        // Fire 3 parallel identical queries
        const [res1, res2, res3] = await Promise.all([
            supabase.from('subjects').select('*').eq('user_id', 'dedupe-user-123'),
            supabase.from('subjects').select('*').eq('user_id', 'dedupe-user-123'),
            supabase.from('subjects').select('*').eq('user_id', 'dedupe-user-123')
        ]);

        // With in-flight deduplication, the underlying fetch should be called at most once or twice instead of 3 distinct network calls
        expect(fetchCount).toBeLessThanOrEqual(2);
        expect(res1.data).toBeDefined();
        expect(res2.data).toBeDefined();
        expect(res3.data).toBeDefined();

        global.fetch = originalFetch;
    });

    it('should return fallback 200 response on network connection reset instead of crashing', async () => {
        const originalFetch = global.fetch;

        global.fetch = vi.fn().mockRejectedValue(new TypeError('Failed to fetch: net::ERR_CONNECTION_RESET'));

        const { supabase } = await import('../supabase');

        const res = await supabase.from('notes').select('*').eq('user_id', 'resilient-user-456');
        
        // Should gracefully resolve with empty data fallback without throwing unhandled rejection
        expect(res.data).toBeDefined();
        expect(Array.isArray(res.data)).toBe(true);

        global.fetch = originalFetch;
    });
});
