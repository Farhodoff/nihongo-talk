import { supabase } from '../lib/supabase';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

export class TourService {
    private static getCacheKey(userId: string): string {
        return `study_planner_tour_completed_${userId}`;
    }

    /**
     * Get tour completion status for the authenticated user.
     * Supabase database is the single source of truth.
     */
    static async isTourCompleted(userId: string): Promise<boolean> {
        if (!userId) return true;

        try {
            const { data, error } = await supabase
                .from('profiles')
                .select('tour_completed')
                .eq('id', userId)
                .maybeSingle();

            if (error) {
                // If network/schema error occurs, check safe cache first
                const cached = safeLocalStorage.getItem(this.getCacheKey(userId));
                if (cached !== null) {
                    return cached === 'true';
                }
                // Fallback to true to prevent disruptive flashing on errors
                return true;
            }

            if (data && typeof data.tour_completed === 'boolean') {
                const isCompleted = data.tour_completed;
                safeLocalStorage.setItem(this.getCacheKey(userId), String(isCompleted));
                if (isCompleted) {
                    safeLocalStorage.setItem('onboarding_completed', 'true');
                }
                return isCompleted;
            }

            // If profile row doesn't exist yet or column is null
            const cached = safeLocalStorage.getItem(this.getCacheKey(userId));
            return cached === 'true';
        } catch {
            const cached = safeLocalStorage.getItem(this.getCacheKey(userId));
            return cached === 'true';
        }
    }

    /**
     * Mark tour as completed in Supabase database and local cache.
     */
    static async completeTour(userId: string): Promise<void> {
        if (!userId) return;

        // 1. Immediately update cache for instant UI response
        safeLocalStorage.setItem(this.getCacheKey(userId), 'true');
        safeLocalStorage.setItem('onboarding_completed', 'true');

        // 2. Persist to Supabase Database (Source of Truth)
        try {
            await supabase
                .from('profiles')
                .update({
                    tour_completed: true,
                    updated_at: new Date().toISOString()
                })
                .eq('id', userId);
        } catch (err) {
            console.error('Failed to persist tour completion to Supabase:', err);
        }
    }

    /**
     * Reset tour status (e.g. when user explicitly clicks restart tour in Settings)
     */
    static async resetTour(userId: string): Promise<void> {
        if (!userId) return;

        safeLocalStorage.removeItem(this.getCacheKey(userId));
        safeLocalStorage.removeItem('onboarding_completed');

        try {
            await supabase
                .from('profiles')
                .update({
                    tour_completed: false,
                    updated_at: new Date().toISOString()
                })
                .eq('id', userId);
        } catch (err) {
            console.error('Failed to reset tour in Supabase:', err);
        }
    }
}
