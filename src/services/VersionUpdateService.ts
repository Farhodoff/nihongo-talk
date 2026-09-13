/**
 * VersionUpdateService
 * Real-time build version monitor, cache purger, and automatic updater.
 * Ensures users always receive new features immediately without stale PWA / browser cache issues.
 */

export interface AppVersionInfo {
  version: string;
  buildTimestamp: number;
  buildDate: string;
}

type UpdateCallback = (info: AppVersionInfo) => void;

export class VersionUpdateServiceClass {
  private currentBuildTimestamp: number;
  private currentVersion: string;
  private isChecking: boolean = false;
  private hasUpdate: boolean = false;
  private latestVersionInfo: AppVersionInfo | null = null;
  private listeners: Set<UpdateCallback> = new Set();
  private checkIntervalId: NodeJS.Timeout | null = null;
  private isApplyingUpdate: boolean = false;

  public resetForTesting(timestamp?: number): void {
    this.hasUpdate = false;
    this.latestVersionInfo = null;
    this.isChecking = false;
    this.isApplyingUpdate = false;
    this.listeners.clear();
    if (timestamp) {
      this.currentBuildTimestamp = timestamp;
    }
  }

  constructor() {
    // __APP_BUILD_TIMESTAMP__ is injected by Vite at build time
    this.currentBuildTimestamp =
      typeof __APP_BUILD_TIMESTAMP__ !== 'undefined' ? __APP_BUILD_TIMESTAMP__ : Date.now();
    this.currentVersion = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '1.1.0';
  }

  public getCurrentBuildTimestamp(): number {
    return this.currentBuildTimestamp;
  }

  public getCurrentVersion(): string {
    return this.currentVersion;
  }

  public isUpdateAvailable(): boolean {
    return this.hasUpdate;
  }

  public getLatestVersion(): AppVersionInfo | null {
    return this.latestVersionInfo;
  }

  public onUpdateAvailable(callback: UpdateCallback): () => void {
    this.listeners.add(callback);
    if (this.hasUpdate && this.latestVersionInfo) {
      callback(this.latestVersionInfo);
    }
    return () => {
      this.listeners.delete(callback);
    };
  }

  /**
   * Check /version.json with cache-busting to see if a newer deployment is live
   */
  public async checkForUpdate(): Promise<boolean> {
    if (this.isChecking || this.isApplyingUpdate) return this.hasUpdate;
    this.isChecking = true;

    try {
      const response = await fetch(`/version.json?t=${Date.now()}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          Pragma: 'no-cache',
        },
      });

      if (!response.ok) {
        return false;
      }

      const remoteData: AppVersionInfo = await response.json();

      if (
        remoteData &&
        typeof remoteData.buildTimestamp === 'number' &&
        remoteData.buildTimestamp > this.currentBuildTimestamp
      ) {
        console.info(
          `[VersionUpdate] Yangi versiya topildi: ${remoteData.version} (Build: ${new Date(remoteData.buildTimestamp).toLocaleTimeString()})`,
        );
        this.hasUpdate = true;
        this.latestVersionInfo = remoteData;
        this.notifyListeners(remoteData);

        // Service Worker yangilanishini ham tezlashtirish
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.getRegistrations().then((regs) => {
            regs.forEach((r) => r.update().catch(() => {}));
          });
        }

        return true;
      }
    } catch (err) {
      // Offline yoki tarmoq xatosi bo'lsa xotirjam o'tkazib yuboramiz
    } finally {
      this.isChecking = false;
    }

    return false;
  }

  /**
   * Clear all CacheStorage and trigger clean reload
   */
  public async applyUpdate(): Promise<void> {
    if (this.isApplyingUpdate) return;
    this.isApplyingUpdate = true;

    console.info('[VersionUpdate] Keshlar tozalanmoqda va yangilanmoqda...');

    // 1. Brauzer CacheStorage-ni butunlay tozalash
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map((name) => caches.delete(name)));
        console.info('[VersionUpdate] Barcha keshlar tozalandi.');
      } catch (e) {
        console.warn('[VersionUpdate] Keshlarni tozalashda xatolik:', e);
      }
    }

    // 2. Service Worker skipWaiting chaqirish
    if ('serviceWorker' in navigator) {
      try {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (const reg of registrations) {
          if (reg.waiting) {
            reg.waiting.postMessage({ type: 'SKIP_WAITING' });
          }
          await reg.update().catch(() => {});
        }
      } catch {}
    }

    // 3. Toza qayta yuklash
    setTimeout(() => {
      window.location.reload();
    }, 250);
  }

  /**
   * Start background periodic monitor and event triggers
   */
  public startPeriodicCheck(intervalMs: number = 30000): void {
    if (this.checkIntervalId) return;

    // 1. Dastlabki 2 soniyadan so'ng tekshirish
    setTimeout(() => {
      this.checkForUpdate();
    }, 2000);

    // 2. Davriy tekshirish
    this.checkIntervalId = setInterval(() => {
      this.checkForUpdate();
    }, intervalMs);

    // 3. Tab aktivlashganda tekshirish
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.checkForUpdate();
      }
    });

    // 4. Oyna fokus olganda tekshirish
    window.addEventListener('focus', () => {
      this.checkForUpdate();
    });

    // 5. Internet qayta ulanganda tekshirish
    window.addEventListener('online', () => {
      this.checkForUpdate();
    });
  }

  /**
   * Listen for chunk loading errors (404 / preload failures after deploy)
   * and automatically purge cache and reload.
   */
  public setupChunkErrorRecovery(): void {
    const handleChunkError = async (errorMsg: string) => {
      const isChunkError =
        errorMsg.includes('Failed to fetch dynamically imported module') ||
        errorMsg.includes('error loading dynamically imported module') ||
        errorMsg.includes('Importing a module script failed') ||
        errorMsg.includes('Loading chunk failed') ||
        errorMsg.includes('is not a valid JavaScript MIME type');

      if (isChunkError) {
        console.warn(
          '[VersionUpdate] Eski chunk xatosi aniqlandi (yangi deploy). Kesh tozalab yangilanmoqda...',
        );
        await this.applyUpdate();
      }
    };

    window.addEventListener('unhandledrejection', (event) => {
      const reason = event.reason;
      const message = reason?.message || (typeof reason === 'string' ? reason : '');
      if (message) {
        handleChunkError(message);
      }
    });

    window.addEventListener('error', (event) => {
      const message = event.message || '';
      if (message) {
        handleChunkError(message);
      }
    });
  }

  private notifyListeners(info: AppVersionInfo): void {
    this.listeners.forEach((listener) => {
      try {
        listener(info);
      } catch (err) {
        console.error('[VersionUpdate] Listener xatosi:', err);
      }
    });
  }
}

export const VersionUpdateService = new VersionUpdateServiceClass();
