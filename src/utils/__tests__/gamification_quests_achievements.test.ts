import { describe, it, expect, beforeEach } from 'vitest';
import { DailyQuestService } from '../../services/DailyQuestService';
import { AchievementService, ACHIEVEMENTS_REGISTRY } from '../../services/AchievementService';
import { calculateStreak, getLocalDateString } from '../gamification';
import { useGamificationStore } from '../../stores/useGamificationStore';

describe('Gamification, Daily Quests & Achievements Suite', () => {
  beforeEach(() => {
    localStorage.clear();
    useGamificationStore.getState().resetXP();
    useGamificationStore.getState().clearPendingLevelUp();
  });

  describe('1. DailyQuestService', () => {
    it('generates deterministic daily quests for a given date', () => {
      const questsA = DailyQuestService.generateDailyQuests('2026-09-19');
      const questsB = DailyQuestService.generateDailyQuests('2026-09-19');

      expect(questsA.length).toBe(4);
      expect(questsA).toEqual(questsB);
      expect(questsA.map((q) => q.category)).toEqual([
        'flashcards',
        'listening',
        'kanji',
        'speaking',
      ]);
    });

    it('records quest progress and flags completion', () => {
      const date = '2026-09-20';
      // Flashcard target is 10
      const initial = DailyQuestService.getDailyQuestState('test_user', date);
      const flashcardQuest = initial.quests.find((q) => q.category === 'flashcards');
      expect(flashcardQuest?.completed).toBe(false);

      // Increment by 5
      const step1 = DailyQuestService.recordQuestProgress('flashcards', 5, 'test_user', date);
      const q1 = step1.state.quests.find((q) => q.category === 'flashcards');
      expect(q1?.progress).toBe(5);
      expect(q1?.completed).toBe(false);
      expect(step1.justCompleted).toBeNull();

      // Increment by another 5 -> Reaches 10
      const step2 = DailyQuestService.recordQuestProgress('flashcards', 5, 'test_user', date);
      const q2 = step2.state.quests.find((q) => q.category === 'flashcards');
      expect(q2?.progress).toBe(10);
      expect(q2?.completed).toBe(true);
      expect(step2.justCompleted).not.toBeNull();
      expect(step2.justCompleted?.category).toBe('flashcards');
    });

    it('claims quest reward once and prevents double claiming', () => {
      const date = '2026-09-21';
      // Complete listening quest (target: 1)
      DailyQuestService.recordQuestProgress('listening', 1, 'user_claim', date);

      const state = DailyQuestService.getDailyQuestState('user_claim', date);
      const listeningQuest = state.quests.find((q) => q.category === 'listening')!;
      expect(listeningQuest.completed).toBe(true);
      expect(listeningQuest.claimed).toBe(false);

      // Claim reward
      const claim1 = DailyQuestService.claimQuestReward(listeningQuest.id, 'user_claim', date);
      expect(claim1.xpAwarded).toBe(40);
      expect(claim1.quest?.claimed).toBe(true);

      // Claim again -> should yield 0 XP
      const claim2 = DailyQuestService.claimQuestReward(listeningQuest.id, 'user_claim', date);
      expect(claim2.xpAwarded).toBe(0);
      expect(claim2.quest).toBeNull();
    });

    it('awards and claims all-clear bonus when all quests are finished', () => {
      const date = '2026-09-22';
      // Complete all 4 quests
      DailyQuestService.recordQuestProgress('flashcards', 10, 'user_all', date);
      DailyQuestService.recordQuestProgress('listening', 1, 'user_all', date);
      DailyQuestService.recordQuestProgress('kanji', 2, 'user_all', date);
      const lastRes = DailyQuestService.recordQuestProgress('speaking', 1, 'user_all', date);

      expect(lastRes.allCompletedJustNow).toBe(true);

      // Claim bonus
      const bonusRes = DailyQuestService.claimAllCompletedBonus('user_all', date);
      expect(bonusRes.xpAwarded).toBe(100);
      expect(bonusRes.updatedState.allCompletedBonusClaimed).toBe(true);

      // Double claim yields 0
      const secondBonus = DailyQuestService.claimAllCompletedBonus('user_all', date);
      expect(secondBonus.xpAwarded).toBe(0);
    });

    it('handles streak freeze consumption correctly', () => {
      const initialMeta = DailyQuestService.getGamificationMeta('freeze_user');
      expect(initialMeta.streakFreezes).toBe(1);

      const used1 = DailyQuestService.consumeStreakFreeze('freeze_user', '2026-09-23');
      expect(used1).toBe(true);

      // Same day should not consume another
      const usedSameDay = DailyQuestService.consumeStreakFreeze('freeze_user', '2026-09-23');
      expect(usedSameDay).toBe(false);

      // No more freezes left
      const usedNextDay = DailyQuestService.consumeStreakFreeze('freeze_user', '2026-09-24');
      expect(usedNextDay).toBe(false);
    });
  });

  describe('2. AchievementService', () => {
    it('contains all 16 defined pedagogical achievements with tiers', () => {
      expect(ACHIEVEMENTS_REGISTRY.length).toBe(16);
      const tiers = new Set(ACHIEVEMENTS_REGISTRY.map((a) => a.tier));
      expect(tiers.has('bronze')).toBe(true);
      expect(tiers.has('silver')).toBe(true);
      expect(tiers.has('gold')).toBe(true);
      expect(tiers.has('diamond')).toBe(true);
    });

    it('evaluates and unlocks achievements according to user stats', () => {
      const newlyUnlocked = AchievementService.evaluateAchievements(
        {
          currentStreak: 7, // qualifies for streak_3 and streak_7
          flashcardsReviewed: 30, // qualifies for vocab_25
          kanjiMastered: 6, // qualifies for kanji_5
        },
        'ach_user',
      );

      const unlockedIds = newlyUnlocked.map((a) => a.id);
      expect(unlockedIds).toContain('streak_3');
      expect(unlockedIds).toContain('streak_7');
      expect(unlockedIds).toContain('vocab_25');
      expect(unlockedIds).toContain('kanji_5');

      // Subsequent check with same stats should yield 0 new unlocks
      const duplicateCheck = AchievementService.evaluateAchievements(
        { currentStreak: 7 },
        'ach_user',
      );
      expect(duplicateCheck.length).toBe(0);
    });

    it('claims achievement XP and marks claimed', () => {
      AchievementService.evaluateAchievements({ currentStreak: 3 }, 'claim_user');
      const res = AchievementService.claimAchievement('streak_3', 'claim_user');
      expect(res.xpAwarded).toBe(50);
      expect(res.achievement?.id).toBe('streak_3');

      // Double claim
      const res2 = AchievementService.claimAchievement('streak_3', 'claim_user');
      expect(res2.xpAwarded).toBe(0);
    });
  });

  describe('3. Streak Engine & Timezone Stability', () => {
    it('formats local date accurately', () => {
      const date = new Date(2026, 8, 19); // September 19, 2026 local
      expect(getLocalDateString(date)).toBe('2026-09-19');
    });

    it('protects streak when 1 day is missed if streakFreezeAvailable is true', () => {
      const lastActivity = '2026-09-17';
      const today = new Date('2026-09-19T10:00:00Z'); // Missed Sept 18 (2 days diff)

      // Without freeze: resets to 1
      const resWithoutFreeze = calculateStreak(lastActivity, 5, today, {
        streakFreezeAvailable: false,
      });
      expect(resWithoutFreeze.streak).toBe(1);
      expect(resWithoutFreeze.freezeUsed).toBe(false);

      // With freeze: maintains streak of 5 and flags freezeUsed: true
      const resWithFreeze = calculateStreak(lastActivity, 5, today, {
        streakFreezeAvailable: true,
      });
      expect(resWithFreeze.streak).toBe(5);
      expect(resWithFreeze.freezeUsed).toBe(true);
      expect(resWithFreeze.lastActivityDate).toBe('2026-09-19');
    });

    it('resets streak if missed more than 1 day even with freeze', () => {
      const lastActivity = '2026-09-15';
      const today = new Date('2026-09-19T10:00:00Z'); // 4 days diff
      const res = calculateStreak(lastActivity, 10, today, {
        streakFreezeAvailable: true,
      });
      expect(res.streak).toBe(1);
      expect(res.freezeUsed).toBe(false);
    });
  });

  describe('4. Store Level Up & Celebrations', () => {
    it('sets pendingLevelUp when XP crosses level boundary', () => {
      const store = useGamificationStore.getState();
      expect(store.level).toBe(1);
      expect(store.pendingLevelUp).toBeNull();

      // Award 600 XP (Level 2 threshold is 500 XP)
      store.awardXP(600);

      const updated = useGamificationStore.getState();
      expect(updated.level).toBe(2);
      expect(updated.pendingLevelUp).not.toBeNull();
      expect(updated.pendingLevelUp?.oldLevel).toBe(1);
      expect(updated.pendingLevelUp?.newLevel).toBe(2);
      expect(updated.pendingLevelUp?.title).toBe('Shogird');

      // Clear level up
      updated.clearPendingLevelUp();
      expect(useGamificationStore.getState().pendingLevelUp).toBeNull();
    });
  });
});
