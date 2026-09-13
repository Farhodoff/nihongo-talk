import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { VersionUpdateServiceClass } from '../VersionUpdateService';

describe('VersionUpdateService', () => {
  let service: VersionUpdateServiceClass;

  beforeEach(() => {
    vi.restoreAllMocks();
    service = new VersionUpdateServiceClass();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('initializes with current version and build timestamp', () => {
    expect(service.getCurrentVersion()).toBeDefined();
    expect(typeof service.getCurrentBuildTimestamp()).toBe('number');
  });

  it('detects a newer version when buildTimestamp is greater', async () => {
    const currentTimestamp = service.getCurrentBuildTimestamp();
    const newVersionData = {
      version: '1.2.0',
      buildTimestamp: currentTimestamp + 10000,
      buildDate: new Date(currentTimestamp + 10000).toISOString(),
    };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => newVersionData,
    });

    const listener = vi.fn();
    const unsubscribe = service.onUpdateAvailable(listener);

    const hasNew = await service.checkForUpdate();
    expect(hasNew).toBe(true);
    expect(service.isUpdateAvailable()).toBe(true);
    expect(listener).toHaveBeenCalledWith(newVersionData);

    unsubscribe();
  });

  it('does not trigger update when buildTimestamp is equal or older', async () => {
    const currentTimestamp = service.getCurrentBuildTimestamp();
    const oldVersionData = {
      version: '1.0.0',
      buildTimestamp: currentTimestamp - 5000,
      buildDate: new Date(currentTimestamp - 5000).toISOString(),
    };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => oldVersionData,
    });

    const listener = vi.fn();
    service.onUpdateAvailable(listener);

    const hasNew = await service.checkForUpdate();
    expect(hasNew).toBe(false);
    expect(service.isUpdateAvailable()).toBe(false);
    expect(listener).not.toHaveBeenCalled();
  });

  it('purges caches on applyUpdate and reloads', async () => {
    const mockCachesDelete = vi.fn().mockResolvedValue(true);
    const mockCachesKeys = vi.fn().mockResolvedValue(['v1-cache', 'workbox-precache']);

    Object.defineProperty(window, 'caches', {
      value: {
        keys: mockCachesKeys,
        delete: mockCachesDelete,
      },
      writable: true,
      configurable: true,
    });

    const reloadMock = vi.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: reloadMock },
      writable: true,
      configurable: true,
    });

    vi.useFakeTimers();
    const applyPromise = service.applyUpdate();
    await applyPromise;

    expect(mockCachesKeys).toHaveBeenCalled();
    expect(mockCachesDelete).toHaveBeenCalledWith('v1-cache');
    expect(mockCachesDelete).toHaveBeenCalledWith('workbox-precache');

    vi.advanceTimersByTime(300);
    expect(reloadMock).toHaveBeenCalled();
    vi.useRealTimers();
  });
});
