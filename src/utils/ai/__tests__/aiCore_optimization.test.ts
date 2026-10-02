import { describe, it, expect, vi, beforeEach } from 'vitest';
import { callAI, clearAICache, getAICacheStats, batchSequentialAI } from '../aiCore';
import * as deepseekModule from '../../deepseek';

vi.mock('../../deepseek', () => ({
  callDeepSeek: vi.fn(),
}));

describe('AI Request Caching & Rate-Limit Optimization', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    clearAICache();
  });

  it('serves repeated identical requests from cache without calling callDeepSeek again', async () => {
    vi.mocked(deepseekModule.callDeepSeek).mockResolvedValue('Cached translation response');

    // First call -> calls deepseek
    const res1 = await callAI('Translate this word', 'system prompt', false);
    expect(res1).toBe('Cached translation response');
    expect(deepseekModule.callDeepSeek).toHaveBeenCalledTimes(1);

    // Second call -> served from cache
    const res2 = await callAI('Translate this word', 'system prompt', false);
    expect(res2).toBe('Cached translation response');
    expect(deepseekModule.callDeepSeek).toHaveBeenCalledTimes(1);

    expect(getAICacheStats().size).toBe(1);
  });

  it('bypasses cache when skipCache option is provided', async () => {
    vi.mocked(deepseekModule.callDeepSeek).mockResolvedValue('Fresh response');

    await callAI('Hello world', undefined, false, { skipCache: true });
    await callAI('Hello world', undefined, false, { skipCache: true });

    expect(deepseekModule.callDeepSeek).toHaveBeenCalledTimes(2);
  });

  it('deduplicates in-flight concurrent requests to the same prompt', async () => {
    let resolveDeepSeek: (val: string) => void;
    const promise = new Promise<string>((resolve) => {
      resolveDeepSeek = resolve;
    });
    vi.mocked(deepseekModule.callDeepSeek).mockReturnValue(promise);

    // Fire 2 concurrent identical requests before the first finishes
    const call1 = callAI('Concurrent test', 'sys', false);
    const call2 = callAI('Concurrent test', 'sys', false);

    resolveDeepSeek!('Shared result');

    const [res1, res2] = await Promise.all([call1, call2]);
    expect(res1).toBe('Shared result');
    expect(res2).toBe('Shared result');
    expect(deepseekModule.callDeepSeek).toHaveBeenCalledTimes(1);
  });

  it('retries with exponential backoff on 429 rate limit error', async () => {
    vi.mocked(deepseekModule.callDeepSeek)
      .mockRejectedValueOnce(new Error('AI_RATE_LIMITED: 429 too many requests'))
      .mockResolvedValueOnce('Success after retry');

    const result = await callAI('Prompt with retry', undefined, false, { maxRetries: 1 });
    expect(result).toBe('Success after retry');
    expect(deepseekModule.callDeepSeek).toHaveBeenCalledTimes(2);
  });

  it('executes batchSequentialAI with delay between items', async () => {
    const items = [1, 2, 3];
    const worker = vi.fn().mockImplementation(async (n: number) => `Result ${n}`);

    const results = await batchSequentialAI(items, worker, 10);
    expect(results).toEqual(['Result 1', 'Result 2', 'Result 3']);
    expect(worker).toHaveBeenCalledTimes(3);
  });
});
