import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { safeLocalStorage } from '../safeLocalStorage';

describe('safeLocalStorage Resiliency & Quota Recovery Tests', () => {
  beforeEach(() => {
    safeLocalStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('1. correctly writes and reads strings', () => {
    safeLocalStorage.setItem('test_key', 'hello_world');
    expect(safeLocalStorage.getItem('test_key')).toBe('hello_world');
    expect(safeLocalStorage.getItem('missing_key', 'fallback')).toBe('fallback');
  });

  it('2. correctly writes and reads JSON objects', () => {
    const obj = { id: 1, name: 'JLPT N5', active: true };
    safeLocalStorage.setJSON('test_json', obj);
    expect(safeLocalStorage.getJSON('test_json')).toEqual(obj);
  });

  it('3. safely returns defaultValue when stored JSON is corrupted', () => {
    safeLocalStorage.setItem('corrupted_json', '{invalid:json');
    const result = safeLocalStorage.getJSON('corrupted_json', { safe: true });
    expect(result).toEqual({ safe: true });
  });

  it('4. handles QuotaExceededError by auto-cleaning cache keys and retrying write', () => {
    // Populate old cache keys directly in window.localStorage first
    safeLocalStorage.setItem('study_planner_analytics_cache', 'large_cache_data');

    // Throw QuotaExceededError only on the first write attempt
    vi.spyOn(window.localStorage, 'setItem').mockImplementationOnce(() => {
      throw new DOMException('QuotaExceededError', 'QuotaExceededError');
    });

    const writeSuccess = safeLocalStorage.setItem('important_user_data', 'saved');
    expect(writeSuccess).toBe(true);
    expect(safeLocalStorage.getItem('important_user_data')).toBe('saved');
    // Ensure cache keys were purged during recovery
    expect(safeLocalStorage.getItem('study_planner_analytics_cache')).toBeNull();
  });

  it('5. gracefully handles removal and clear', () => {
    safeLocalStorage.setItem('item1', '1');
    safeLocalStorage.setItem('item2', '2');
    safeLocalStorage.removeItem('item1');
    expect(safeLocalStorage.getItem('item1')).toBeNull();
    expect(safeLocalStorage.getItem('item2')).toBe('2');

    safeLocalStorage.clear();
    expect(safeLocalStorage.getItem('item2')).toBeNull();
    expect(safeLocalStorage.getAllKeys().length).toBe(0);
  });
});
