import { create } from 'zustand';
import { getLevelInfo, calculateStreak } from '../utils/gamification';

export interface GamificationState {
  totalXp: number;
  level: number;
  currentStreak: number;
  lastActivityDate: string | null;
  awardXP: (amount: number) => void;
  resetXP: () => void;
  getRank: (level: number) => string;
  setGamificationState: (state: Partial<GamificationState>) => void;
}

export const useGamificationStore = create<GamificationState>((set) => ({
  totalXp: 0,
  level: 1,
  currentStreak: 0,
  lastActivityDate: null,

  awardXP: (amount) =>
    set((state) => {
      const newXp = state.totalXp + amount;
      const newLevel = getLevelInfo
        ? getLevelInfo(newXp).level
        : Math.floor(Math.sqrt(newXp / 100)) + 1;
      const streakData = calculateStreak
        ? calculateStreak(state.lastActivityDate, state.currentStreak)
        : { streak: state.currentStreak, lastActivityDate: new Date().toISOString() };

      return {
        totalXp: newXp,
        level: newLevel,
        currentStreak: streakData.streak,
        lastActivityDate: streakData.lastActivityDate,
      };
    }),

  resetXP: () =>
    set({
      totalXp: 0,
      level: 1,
      currentStreak: 0,
      lastActivityDate: new Date().toISOString().split('T')[0],
    }),

  getRank: (level) => {
    if (level >= 8) return 'Professor';
    if (level >= 7) return 'Grossmeyster';
    if (level >= 6) return 'Usta';
    if (level >= 5) return 'Ekspert';
    if (level >= 4) return 'Tadqiqotchi';
    if (level >= 3) return 'Olim';
    if (level >= 2) return 'Shogird';
    return "Boshlang'ich Talaba";
  },

  setGamificationState: (updates) =>
    set((state) => ({
      ...state,
      ...updates,
    })),
}));
