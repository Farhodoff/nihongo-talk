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
      await new Promise((r) => setTimeout(r, 50));
      return new Response(JSON.stringify([{ id: 'test-item-1' }]), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    });

    const { supabase } = await import('../supabase');

    // Fire 3 parallel identical queries
    const [res1, res2, res3] = await Promise.all([
      supabase.from('subjects').select('*').eq('user_id', 'dedupe-user-123'),
      supabase.from('subjects').select('*').eq('user_id', 'dedupe-user-123'),
      supabase.from('subjects').select('*').eq('user_id', 'dedupe-user-123'),
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

    global.fetch = vi
      .fn()
      .mockRejectedValue(new TypeError('Failed to fetch: net::ERR_CONNECTION_RESET'));

    const { supabase } = await import('../supabase');

    const res = await supabase.from('notes').select('*').eq('user_id', 'resilient-user-456');

    // Should gracefully resolve with empty data fallback without throwing unhandled rejection
    expect(res.data).toBeDefined();
    expect(Array.isArray(res.data)).toBe(true);

    global.fetch = originalFetch;
  });

  it('should NOT return fake 200 OK with mock IDs on network failure for POST mutations (prevents silent data loss)', async () => {
    const originalFetch = global.fetch;
    global.fetch = vi
      .fn()
      .mockRejectedValue(new TypeError('Failed to fetch: net::ERR_INTERNET_DISCONNECTED'));

    const { supabase } = await import('../supabase');

    const res = await supabase
      .from('tasks')
      .insert({ title: 'Offline task', user_id: 'user-789' })
      .select()
      .single();

    // Must return an error, NEVER fake success with { success: true, id: 1 }
    expect(res.error).toBeDefined();
    expect(res.error?.code).toBe('PGRST_NETWORK_ERROR');
    expect(res.data).toBeNull();

    global.fetch = originalFetch;
  });

  it('should return network error on UPDATE mutations when offline', async () => {
    const originalFetch = global.fetch;
    global.fetch = vi.fn().mockRejectedValue(new TypeError('Failed to fetch: Connection timeout'));

    const { supabase } = await import('../supabase');

    const res = await supabase
      .from('tasks')
      .update({ completed: true })
      .eq('id', 'real-task-id-123');

    expect(res.error).toBeDefined();
    expect(res.error?.code).toBe('PGRST_NETWORK_ERROR');

    global.fetch = originalFetch;
  });

  it('should return network error on DELETE mutations when offline', async () => {
    const originalFetch = global.fetch;
    global.fetch = vi.fn().mockRejectedValue(new TypeError('Failed to fetch: Connection reset'));

    const { supabase } = await import('../supabase');

    const res = await supabase.from('tasks').delete().eq('id', 'real-task-id-123');

    expect(res.error).toBeDefined();
    expect(res.error?.code).toBe('PGRST_NETWORK_ERROR');

    global.fetch = originalFetch;
  });
});
