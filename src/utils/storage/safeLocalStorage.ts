/**
 * Safe localStorage wrapper with QuotaExceededError recovery and automatic fallback.
 * Prevents mobile and desktop browsers from crashing when storage limits are approached.
 */

export const safeLocalStorage = {
    getItem(key: string, defaultValue: string | null = null): string | null {
        try {
            if (typeof window === 'undefined' || !window.localStorage) return defaultValue;
            const val = window.localStorage.getItem(key);
            return val !== null ? val : defaultValue;
        } catch (e) {
            console.warn(`[safeLocalStorage] Read warning for "${key}":`, e);
            return defaultValue;
        }
    },

    setItem(key: string, value: string): boolean {
        try {
            if (typeof window === 'undefined' || !window.localStorage) return false;
            window.localStorage.setItem(key, value);
            return true;
        } catch (e: any) {
            console.warn(`[safeLocalStorage] Write error for "${key}" (Quota exceeded?), attempting cleanup...`, e);
            
            // Auto-recovery: Clean temporary/old caches to free up quota
            try {
                const keysToClean = [
                    'study_planner_analytics_cache',
                    'study_planner_whiteboards_cache',
                    'study_planner_events_cache',
                    'study_planner_history_cache'
                ];
                for (const k of keysToClean) {
                    if (k !== key) {
                        window.localStorage.removeItem(k);
                    }
                }
                // Retry write
                window.localStorage.setItem(key, value);
                return true;
            } catch (retryErr) {
                console.error(`[safeLocalStorage] Secondary write failure for "${key}":`, retryErr);
                return false;
            }
        }
    },

    removeItem(key: string): void {
        try {
            if (typeof window !== 'undefined' && window.localStorage) {
                window.localStorage.removeItem(key);
            }
        } catch (e) {
            console.warn(`[safeLocalStorage] Remove error for "${key}":`, e);
        }
    },

    getJSON<T>(key: string, defaultValue: T): T {
        const raw = this.getItem(key);
        if (!raw) return defaultValue;
        try {
            return JSON.parse(raw) as T;
        } catch {
            return defaultValue;
        }
    },

    setJSON<T>(key: string, value: T): boolean {
        try {
            return this.setItem(key, JSON.stringify(value));
        } catch {
            return false;
        }
    }
};
