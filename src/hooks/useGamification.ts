import { useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';

export interface GamificationState {
    totalXp: number;
    level: number;
    currentStreak: number;
    lastActivityDate: string | null;
}

export const useGamification = (initialState: GamificationState) => {
    const [gameState, setGameState] = useState<GamificationState>(initialState);

    // Initial state might come from async fetch in parent, so we might need a sync effect or just rely on parent updating the prop?
    // Better: let the hook manage its own state, initialized or updated via useEffect if prop changes.
    // For now, let's assume parent initializes it or we provide a setter to sync.
    // Actually, simple useState with initial prop is risky if prop updates.
    // Let's add an updater for full state sync if needed, or better, `useEffect` to sync if `initialState` changes (if typical data fetching pattern).
    // Given the context pattern, `fetchData` in context sets the state. So this hook might just hold the state and modifiers.

    const getRank = useCallback((level: number): string => {
        if (level >= 30) return "Master (Ustoz)";
        if (level >= 20) return "Expert (Mutaxassis)";
        if (level >= 10) return "Adept (Tajribali)";
        if (level >= 5) return "Apprentice (O'rganuvchi)";
        return "Novice (Boshlovchi)";
    }, []);

    const awardXP = useCallback(async (amount: number) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        // Use functional update to ensure we have latest state if multiple awards happen cleanly
        setGameState(prev => {
            const newXp = prev.totalXp + amount;
            const newLevel = Math.floor(newXp / 1000) + 1;

            supabase.from('profiles').upsert({
                id: user.id,
                total_xp: newXp,
                level: newLevel,
                updated_at: new Date().toISOString()
            }).then(({ error }) => {
                if (error && navigator.onLine) console.warn('XP update notice:', error.message);
            }, () => {});

            return { ...prev, totalXp: newXp, level: newLevel };
        });
    }, []);

    // Helper to manually sync state if parent fetches fresh data
    const setGamificationState = useCallback((value: GamificationState | ((prev: GamificationState) => GamificationState)) => {
        setGameState(value);
    }, []);

    const resetXP = useCallback(async () => {
        const { data: { user } } = await supabase.auth.getUser();
        setGameState(prev => ({ ...prev, totalXp: 0, level: 1 }));
        if (user) {
            await supabase.from('profiles').upsert({
                id: user.id,
                total_xp: 0,
                level: 1,
                updated_at: new Date().toISOString()
            });
        }
    }, []);

    return {
        gameState,
        setGamificationState,
        awardXP,
        resetXP,
        getRank
    };
};
