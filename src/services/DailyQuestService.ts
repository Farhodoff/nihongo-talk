import { DailyQuest, DailyQuestCategory, DailyQuestState } from '../types/gamification';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';
import { getLocalDateString } from '../utils/gamification';

const STORAGE_PREFIX = 'nihongo_daily_quests';
const META_PREFIX = 'nihongo_gamification_meta';

export const ALL_COMPLETED_BONUS_XP = 100;

export class DailyQuestService {
  /**
   * Generates deterministic daily quests for a given date.
   */
  static generateDailyQuests(dateStr: string): DailyQuest[] {
    // Generate 4 core engaging pedagogical quests
    const quests: DailyQuest[] = [
      {
        id: `quest-flashcards-${dateStr}`,
        category: 'flashcards',
        title: {
          uz: "Fleshkarta Mashg'uloti",
          ja: '単語フラッシュカード復習',
          en: 'Flashcard Mastery',
        },
        description: {
          uz: "10 ta so'z yoki iborani takrorlang",
          ja: '10枚の単語・フレーズを復習する',
          en: 'Review 10 flashcards',
        },
        target: 10,
        progress: 0,
        xpReward: 35,
        completed: false,
        claimed: false,
        icon: '📇',
      },
      {
        id: `quest-listening-${dateStr}`,
        category: 'listening',
        title: {
          uz: 'Choukai Tinglash Sinovi',
          ja: '聴解リスニング練習',
          en: 'Listening Comprehension',
        },
        description: {
          uz: 'Kamida 1 ta dialogli tinglash savolini yeching',
          ja: '少なくとも1問の聴解問題を解く',
          en: 'Complete at least 1 listening dialogue question',
        },
        target: 1,
        progress: 0,
        xpReward: 40,
        completed: false,
        claimed: false,
        icon: '🎧',
      },
      {
        id: `quest-kanji-${dateStr}`,
        category: 'kanji',
        title: {
          uz: 'Kanji Chizish Sanati',
          ja: '漢字書き順マスター',
          en: 'Kanji Canvas Strokes',
        },
        description: {
          uz: "2 ta Kanji iyeroglifini to'g'ri chizing",
          ja: '2文字の漢字を正しく書く',
          en: 'Draw 2 Kanji characters with correct stroke order',
        },
        target: 2,
        progress: 0,
        xpReward: 35,
        completed: false,
        claimed: false,
        icon: '🖌️',
      },
      {
        id: `quest-speaking-${dateStr}`,
        category: 'speaking',
        title: {
          uz: 'Jonli Nutq & Ohang',
          ja: 'スピーキング・アクセント',
          en: 'Speaking & Pitch Accent',
        },
        description: {
          uz: "Speaking Coach yoki Pitch Accent'da 1 ta mashq bajaring",
          ja: 'スピーキング練習またはアクセント練習を1回行う',
          en: 'Practice 1 speaking dialogue or pitch accent card',
        },
        target: 1,
        progress: 0,
        xpReward: 45,
        completed: false,
        claimed: false,
        icon: '🎙️',
      },
    ];

    return quests;
  }

  private static getStorageKey(userId?: string | null, dateStr?: string): string {
    const userKey = userId || 'guest';
    const date = dateStr || getLocalDateString();
    return `${STORAGE_PREFIX}:${userKey}:${date}`;
  }

  private static getMetaStorageKey(userId?: string | null): string {
    const userKey = userId || 'guest';
    return `${META_PREFIX}:${userKey}`;
  }

  /**
   * Retrieves today's DailyQuestState. Initializes if not present.
   */
  static getDailyQuestState(userId?: string | null, dateStr?: string): DailyQuestState {
    const date = dateStr || getLocalDateString();
    const key = this.getStorageKey(userId, date);
    const existing = safeLocalStorage.getJSON<DailyQuestState | null>(key, null);

    if (existing && existing.date === date && Array.isArray(existing.quests)) {
      return existing;
    }

    // Initialize fresh daily quests for the day
    const newState: DailyQuestState = {
      date,
      quests: this.generateDailyQuests(date),
      allCompletedBonusClaimed: false,
      allCompletedBonusXp: ALL_COMPLETED_BONUS_XP,
    };

    safeLocalStorage.setJSON(key, newState);
    return newState;
  }

  /**
   * Records progress for a specific quest category.
   */
  static recordQuestProgress(
    category: DailyQuestCategory,
    count: number = 1,
    userId?: string | null,
    dateStr?: string,
  ): {
    state: DailyQuestState;
    justCompleted: DailyQuest | null;
    allCompletedJustNow: boolean;
  } {
    const state = this.getDailyQuestState(userId, dateStr);
    let justCompleted: DailyQuest | null = null;

    const quests = Array.isArray(state.quests)
      ? state.quests
      : this.generateDailyQuests(state.date);

    const updatedQuests = quests.map((q) => {
      if (q.category === category) {
        const newProgress = Math.min(q.target, (q.progress || 0) + count);
        const wasCompleted = q.completed;
        const isNowCompleted = newProgress >= q.target;

        if (!wasCompleted && isNowCompleted) {
          justCompleted = { ...q, progress: newProgress, completed: true };
        }

        return {
          ...q,
          progress: newProgress,
          completed: isNowCompleted,
        };
      }
      return q;
    });

    const allWereCompletedBefore = quests.every((q) => q.completed);
    const allAreCompletedNow = updatedQuests.every((q) => q.completed);
    const allCompletedJustNow = !allWereCompletedBefore && allAreCompletedNow;

    const updatedState: DailyQuestState = {
      ...state,
      quests: updatedQuests,
    };

    safeLocalStorage.setJSON(this.getStorageKey(userId, updatedState.date), updatedState);

    // If all completed, increment all-clear counter in meta
    if (allCompletedJustNow) {
      this.incrementMetaCounter(userId, 'dailyQuestsAllClearCount');
    }

    return {
      state: updatedState,
      justCompleted,
      allCompletedJustNow,
    };
  }

  /**
   * Claims reward for a completed quest.
   */
  static claimQuestReward(
    questId: string,
    userId?: string | null,
    dateStr?: string,
  ): {
    quest: DailyQuest | null;
    xpAwarded: number;
    updatedState: DailyQuestState;
  } {
    const state = this.getDailyQuestState(userId, dateStr);
    let xpAwarded = 0;
    let claimedQuest: DailyQuest | null = null;
    const quests = Array.isArray(state.quests) ? state.quests : [];

    const updatedQuests = quests.map((q) => {
      if (q.id === questId && q.completed && !q.claimed) {
        xpAwarded = q.xpReward;
        claimedQuest = { ...q, claimed: true };
        return claimedQuest;
      }
      return q;
    });

    const updatedState: DailyQuestState = {
      ...state,
      quests: updatedQuests,
    };

    safeLocalStorage.setJSON(this.getStorageKey(userId, updatedState.date), updatedState);

    return {
      quest: claimedQuest,
      xpAwarded,
      updatedState,
    };
  }

  /**
   * Claims the "All Quests Completed" bonus XP.
   */
  static claimAllCompletedBonus(
    userId?: string | null,
    dateStr?: string,
  ): {
    xpAwarded: number;
    updatedState: DailyQuestState;
  } {
    const state = this.getDailyQuestState(userId, dateStr);
    const quests = Array.isArray(state.quests) ? state.quests : [];
    const allCompleted = quests.length > 0 && quests.every((q) => q.completed);

    if (!allCompleted || state.allCompletedBonusClaimed) {
      return { xpAwarded: 0, updatedState: state };
    }

    const updatedState: DailyQuestState = {
      ...state,
      allCompletedBonusClaimed: true,
    };

    safeLocalStorage.setJSON(this.getStorageKey(userId, updatedState.date), updatedState);

    return {
      xpAwarded: state.allCompletedBonusXp || ALL_COMPLETED_BONUS_XP,
      updatedState,
    };
  }

  /**
   * Streak Freeze and Meta management with null-safe fallbacks
   */
  static getGamificationMeta(userId?: string | null): {
    streakFreezes: number;
    lastFreezeUsedDate?: string;
    flashcardsReviewed: number;
    kanjiMastered: number;
    listeningQuestionsCompleted: number;
    speakingSessionsCompleted: number;
    pitchAccentPracticesCompleted: number;
    mockExamsCompleted: number;
    highestMockScore: number;
    dailyQuestsAllClearCount: number;
  } {
    const key = this.getMetaStorageKey(userId);
    const meta = safeLocalStorage.getJSON<any>(key, null);
    return {
      streakFreezes: typeof meta?.streakFreezes === 'number' ? meta.streakFreezes : 1,
      flashcardsReviewed:
        typeof meta?.flashcardsReviewed === 'number' ? meta.flashcardsReviewed : 0,
      kanjiMastered: typeof meta?.kanjiMastered === 'number' ? meta.kanjiMastered : 0,
      listeningQuestionsCompleted:
        typeof meta?.listeningQuestionsCompleted === 'number'
          ? meta.listeningQuestionsCompleted
          : 0,
      speakingSessionsCompleted:
        typeof meta?.speakingSessionsCompleted === 'number' ? meta.speakingSessionsCompleted : 0,
      pitchAccentPracticesCompleted:
        typeof meta?.pitchAccentPracticesCompleted === 'number'
          ? meta.pitchAccentPracticesCompleted
          : 0,
      mockExamsCompleted:
        typeof meta?.mockExamsCompleted === 'number' ? meta.mockExamsCompleted : 0,
      highestMockScore: typeof meta?.highestMockScore === 'number' ? meta.highestMockScore : 0,
      dailyQuestsAllClearCount:
        typeof meta?.dailyQuestsAllClearCount === 'number' ? meta.dailyQuestsAllClearCount : 0,
      lastFreezeUsedDate: meta?.lastFreezeUsedDate,
    };
  }

  static incrementMetaCounter(
    userId: string | null | undefined,
    field:
      | 'flashcardsReviewed'
      | 'kanjiMastered'
      | 'listeningQuestionsCompleted'
      | 'speakingSessionsCompleted'
      | 'pitchAccentPracticesCompleted'
      | 'mockExamsCompleted'
      | 'dailyQuestsAllClearCount',
    count: number = 1,
  ): void {
    const meta = this.getGamificationMeta(userId);
    meta[field] = (meta[field] || 0) + count;
    safeLocalStorage.setJSON(this.getMetaStorageKey(userId), meta);
  }

  static recordMockScore(userId: string | null | undefined, scorePercentage: number): void {
    const meta = this.getGamificationMeta(userId);
    meta.mockExamsCompleted = (meta.mockExamsCompleted || 0) + 1;
    meta.highestMockScore = Math.max(meta.highestMockScore || 0, scorePercentage);
    safeLocalStorage.setJSON(this.getMetaStorageKey(userId), meta);
  }

  static consumeStreakFreeze(userId?: string | null, dateStr?: string): boolean {
    const meta = this.getGamificationMeta(userId);
    const date = dateStr || getLocalDateString();
    if (meta.streakFreezes > 0 && meta.lastFreezeUsedDate !== date) {
      meta.streakFreezes -= 1;
      meta.lastFreezeUsedDate = date;
      safeLocalStorage.setJSON(this.getMetaStorageKey(userId), meta);
      return true;
    }
    return false;
  }
}
