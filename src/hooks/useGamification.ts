import { useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { getLevelInfo, calculateStreak } from '../utils/gamification';

export interface GamificationState {
    totalXp: number;
    level: number;
    currentStreak: number;
    lastActivityDate: string | null;
}

const getAuthUser = async () => {
    try {
        if (typeof supabase?.auth?.getSession === 'function') {
            const { data } = await supabase.auth.getSession();
            if (data?.session?.user) return data.session.user;
            return null;
        }
        if (typeof supabase?.auth?.getUser === 'function') {
            const { data } = await supabase.auth.getUser();
            if (data?.user) return data.user;
        }
    } catch {}
    return null;
};

export const useGamification = (initialState: GamificationState) => {
    const [gameState, setGameState] = useState<GamificationState>(initialState);

    const getRank = useCallback((level: number): string => {
        if (level >= 8) return "Professor";
        if (level >= 7) return "Grossmeyster";
        if (level >= 6) return "Usta";
        if (level >= 5) return "Ekspert";
        if (level >= 4) return "Tadqiqotchi";
        if (level >= 3) return "Olim";
        if (level >= 2) return "Shogird";
        return "Boshlang'ich Talaba";
    }, []);

    const awardXP = useCallback(async (amount: number) => {
        const user = await getAuthUser();
        if (!user) return;

        setGameState(prev => {
            const newXp = prev.totalXp + amount;
            const newLevel = getLevelInfo(newXp).level;
            const { streak: newStreak, lastActivityDate: newLastActivityDate } = calculateStreak(
                prev.lastActivityDate,
                prev.currentStreak
            );

            supabase.from('profiles').upsert({
                id: user.id,
                total_xp: newXp,
                level: newLevel,
                current_streak: newStreak,
                last_activity_date: newLastActivityDate,
                updated_at: new Date().toISOString()
            }).then(({ error }) => {
                if (error && navigator.onLine) console.warn('XP and streak update notice:', error.message);
            }, () => {});

            return {
                ...prev,
                totalXp: newXp,
                level: newLevel,
                currentStreak: newStreak,
                lastActivityDate: newLastActivityDate
            };
        });
    }, []);

    // Helper to manually sync state if parent fetches fresh data
    const setGamificationState = useCallback((value: GamificationState | ((prev: GamificationState) => GamificationState)) => {
        setGameState(value);
    }, []);

    const resetXP = useCallback(async () => {
        const user = await getAuthUser();
        const todayStr = new Date().toISOString().split('T')[0];
        setGameState(prev => ({ ...prev, totalXp: 0, level: 1, currentStreak: 0, lastActivityDate: todayStr }));
        if (user) {
            await supabase.from('profiles').upsert({
                id: user.id,
                total_xp: 0,
                level: 1,
                current_streak: 0,
                last_activity_date: todayStr,
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
