import { create } from 'zustand';
import { getLevelInfo, calculateStreak } from '../utils/gamification';
import {
  DailyQuestCategory,
  DailyQuestState,
  UserAchievement,
  AchievementDefinition,
} from '../types/gamification';
import { DailyQuestService } from '../services/DailyQuestService';
import { AchievementService } from '../services/AchievementService';

export interface PendingLevelUp {
  oldLevel: number;
  newLevel: number;
  title: string;
}

export interface GamificationState {
  totalXp: number;
  level: number;
  currentStreak: number;
  lastActivityDate: string | null;
  pendingLevelUp: PendingLevelUp | null;
  dailyQuestState: DailyQuestState;
  unlockedAchievements: UserAchievement[];
  recentUnlockedAchievement: AchievementDefinition | null;
  awardXP: (amount: number) => void;
  resetXP: () => void;
  getRank: (level: number) => string;
  setGamificationState: (state: Partial<GamificationState>) => void;
  clearPendingLevelUp: () => void;
  clearRecentUnlockedAchievement: () => void;
  recordQuestProgress: (category: DailyQuestCategory, count?: number) => void;
  claimQuestReward: (questId: string) => number;
  claimAllCompletedBonus: () => number;
  refreshQuestsAndAchievements: (userId?: string | null) => void;
}

export const useGamificationStore = create<GamificationState>((set, get) => {
  const initialQuests = DailyQuestService.getDailyQuestState(null);
  const initialAchievements = AchievementService.getUnlockedAchievements(null);

  return {
    totalXp: 0,
    level: 1,
    currentStreak: 0,
    lastActivityDate: null,
    pendingLevelUp: null,
    dailyQuestState: initialQuests,
    unlockedAchievements: initialAchievements,
    recentUnlockedAchievement: null,

    awardXP: (amount) =>
      set((state) => {
        const newXp = Math.max(0, state.totalXp + amount);
        const levelInfo = getLevelInfo(newXp);
        const newLevel = levelInfo.level;
        const oldLevel = state.level;

        const streakData = calculateStreak(state.lastActivityDate, state.currentStreak);

        // Check if level increased
        const pendingLevelUp =
          newLevel > oldLevel
            ? { oldLevel, newLevel, title: levelInfo.title }
            : state.pendingLevelUp;

        // Auto evaluate streak achievements
        const meta = DailyQuestService.getGamificationMeta(null);
        const newlyUnlocked = AchievementService.evaluateAchievements(
          {
            currentStreak: streakData.streak,
            totalXp: newXp,
            level: newLevel,
            flashcardsReviewed: meta.flashcardsReviewed,
            kanjiMastered: meta.kanjiMastered,
            listeningQuestionsCompleted: meta.listeningQuestionsCompleted,
            speakingSessionsCompleted: meta.speakingSessionsCompleted,
            pitchAccentPracticesCompleted: meta.pitchAccentPracticesCompleted,
            mockExamsCompleted: meta.mockExamsCompleted,
            highestMockScore: meta.highestMockScore,
            dailyQuestsAllClearCount: meta.dailyQuestsAllClearCount,
          },
          null,
        );

        return {
          totalXp: newXp,
          level: newLevel,
          currentStreak: streakData.streak,
          lastActivityDate: streakData.lastActivityDate,
          pendingLevelUp,
          unlockedAchievements: AchievementService.getUnlockedAchievements(null),
          recentUnlockedAchievement:
            newlyUnlocked.length > 0 ? newlyUnlocked[0] : state.recentUnlockedAchievement,
        };
      }),

    resetXP: () =>
      set({
        totalXp: 0,
        level: 1,
        currentStreak: 0,
        lastActivityDate: new Date().toISOString().split('T')[0],
        pendingLevelUp: null,
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

    clearPendingLevelUp: () => set({ pendingLevelUp: null }),

    clearRecentUnlockedAchievement: () => set({ recentUnlockedAchievement: null }),

    recordQuestProgress: (category, count = 1) => {
      const result = DailyQuestService.recordQuestProgress(category, count, null);
      // Also evaluate achievements
      const meta = DailyQuestService.getGamificationMeta(null);
      const state = get();
      const newlyUnlocked = AchievementService.evaluateAchievements(
        {
          currentStreak: state.currentStreak,
          totalXp: state.totalXp,
          level: state.level,
          flashcardsReviewed: meta.flashcardsReviewed,
          kanjiMastered: meta.kanjiMastered,
          listeningQuestionsCompleted: meta.listeningQuestionsCompleted,
          speakingSessionsCompleted: meta.speakingSessionsCompleted,
          pitchAccentPracticesCompleted: meta.pitchAccentPracticesCompleted,
          mockExamsCompleted: meta.mockExamsCompleted,
          highestMockScore: meta.highestMockScore,
          dailyQuestsAllClearCount: meta.dailyQuestsAllClearCount,
        },
        null,
      );

      set({
        dailyQuestState: result.state,
        unlockedAchievements: AchievementService.getUnlockedAchievements(null),
        recentUnlockedAchievement:
          newlyUnlocked.length > 0 ? newlyUnlocked[0] : state.recentUnlockedAchievement,
      });
    },

    claimQuestReward: (questId) => {
      const result = DailyQuestService.claimQuestReward(questId, null);
      if (result.xpAwarded > 0) {
        get().awardXP(result.xpAwarded);
      }
      set({ dailyQuestState: result.updatedState });
      return result.xpAwarded;
    },

    claimAllCompletedBonus: () => {
      const result = DailyQuestService.claimAllCompletedBonus(null);
      if (result.xpAwarded > 0) {
        get().awardXP(result.xpAwarded);
      }
      set({ dailyQuestState: result.updatedState });
      return result.xpAwarded;
    },

    refreshQuestsAndAchievements: (userId = null) => {
      set({
        dailyQuestState: DailyQuestService.getDailyQuestState(userId),
        unlockedAchievements: AchievementService.getUnlockedAchievements(userId),
      });
    },
  };
});
