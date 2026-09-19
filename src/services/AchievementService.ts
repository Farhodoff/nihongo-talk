import { AchievementDefinition, GamificationStats, UserAchievement } from '../types/gamification';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

const ACHIEVEMENTS_STORAGE_PREFIX = 'nihongo_unlocked_achievements';

export const ACHIEVEMENTS_REGISTRY: AchievementDefinition[] = [
  // Streak
  {
    id: 'streak_3',
    category: 'streak',
    tier: 'bronze',
    icon: '🔥',
    xpReward: 50,
    title: {
      uz: '3 Kunlik Olov',
      ja: '3日連続学習の火',
      en: '3-Day Fire Streak',
    },
    description: {
      uz: 'Ketma-ket 3 kun faoliyat olib boring',
      ja: '3日連続で学習を継続する',
      en: 'Maintain a 3-day study streak',
    },
    target: 3,
    metric: 'currentStreak',
  },
  {
    id: 'streak_7',
    category: 'streak',
    tier: 'silver',
    icon: '⚡',
    xpReward: 150,
    title: {
      uz: 'Haftalik Samurai',
      ja: '週間サムライ',
      en: 'Weekly Samurai',
    },
    description: {
      uz: "1 hafta (7 kun) uzluksiz o'qish",
      ja: '1週間（7日間）連続で学習する',
      en: 'Achieve a continuous 7-day study streak',
    },
    target: 7,
    metric: 'currentStreak',
  },
  {
    id: 'streak_14',
    category: 'streak',
    tier: 'gold',
    icon: '🥋',
    xpReward: 300,
    title: {
      uz: "2 Haftalik Qat'iyat",
      ja: '2週間の不屈の精神',
      en: 'Fortnight Dedication',
    },
    description: {
      uz: "14 kun davomida streakni uzmasdan o'qish",
      ja: '14日間ストリークを維持する',
      en: 'Keep your streak alive for 14 straight days',
    },
    target: 14,
    metric: 'currentStreak',
  },
  {
    id: 'streak_30',
    category: 'streak',
    tier: 'diamond',
    icon: '👑',
    xpReward: 600,
    title: {
      uz: 'Oylik Grossmeyster',
      ja: '月間グランドマスター',
      en: 'Monthly Grandmaster',
    },
    description: {
      uz: "30 kunlik afsonaviy o'quv intizomi",
      ja: '30日間の伝説的な学習継続',
      en: '30 days of relentless Japanese study',
    },
    target: 30,
    metric: 'currentStreak',
  },

  // Vocabulary & Flashcards
  {
    id: 'vocab_25',
    category: 'vocabulary',
    tier: 'bronze',
    icon: '📖',
    xpReward: 50,
    title: {
      uz: "So'z Shogirdi",
      ja: '単語の弟子',
      en: 'Word Apprentice',
    },
    description: {
      uz: "25 ta so'zni takrorlang",
      ja: '25個の単語を復習する',
      en: 'Review 25 flashcard vocabulary items',
    },
    target: 25,
    metric: 'totalFlashcards',
  },
  {
    id: 'vocab_100',
    category: 'vocabulary',
    tier: 'silver',
    icon: '📚',
    xpReward: 150,
    title: {
      uz: "So'z Zafari",
      ja: '百単語の勝利',
      en: 'Centurion of Words',
    },
    description: {
      uz: "100 ta so'z va iborani o'zlashtiring",
      ja: '100枚のフラッシュカードを達成する',
      en: 'Reach 100 reviewed flashcards',
    },
    target: 100,
    metric: 'totalFlashcards',
  },
  {
    id: 'vocab_300',
    category: 'vocabulary',
    tier: 'gold',
    icon: '💎',
    xpReward: 350,
    title: {
      uz: "Lug'at Boyligi",
      ja: '語彙の宝庫',
      en: 'Vocabulary Treasury',
    },
    description: {
      uz: '300 ta fleshkartani muvaffaqiyatli takrorlang',
      ja: '300個の単語を完全に習得する',
      en: 'Master 300 vocabulary flashcards',
    },
    target: 300,
    metric: 'totalFlashcards',
  },

  // Kanji
  {
    id: 'kanji_5',
    category: 'kanji',
    tier: 'bronze',
    icon: '🖌️',
    xpReward: 60,
    title: {
      uz: 'Iyeroglif Chizuvchi',
      ja: '漢字の筆跡',
      en: 'Kanji Apprentice',
    },
    description: {
      uz: "Kanji Canvas'da 5 ta iyeroglifni to'g'ri chizing",
      ja: '5文字の漢字書き順を練習する',
      en: 'Draw 5 kanji characters on the canvas',
    },
    target: 5,
    metric: 'totalKanji',
  },
  {
    id: 'kanji_25',
    category: 'kanji',
    tier: 'silver',
    icon: '🏯',
    xpReward: 200,
    title: {
      uz: 'Kanji Ustasi',
      ja: '漢字マスター',
      en: 'Kanji Craftsman',
    },
    description: {
      uz: "25 ta Kanji iyeroglifini chizib o'rganing",
      ja: '25文字の漢字を完全に描く',
      en: 'Master 25 kanji with accurate stroke order',
    },
    target: 25,
    metric: 'totalKanji',
  },
  {
    id: 'kanji_100',
    category: 'kanji',
    tier: 'gold',
    icon: '⛩️',
    xpReward: 400,
    title: {
      uz: 'Kanji Grossmeysteri',
      ja: '漢字グランドマスター',
      en: 'Kanji Grandmaster',
    },
    description: {
      uz: "100 ta Kanji iyeroglifini chizishni o'zlashtiring",
      ja: '100文字の漢字を極める',
      en: 'Attain mastery over 100 kanji characters',
    },
    target: 100,
    metric: 'totalKanji',
  },

  // Listening
  {
    id: 'listening_3',
    category: 'listening',
    tier: 'bronze',
    icon: '🎧',
    xpReward: 75,
    title: {
      uz: "O'tkir Quloq",
      ja: '研ぎ澄まされた耳',
      en: 'Sharp Listener',
    },
    description: {
      uz: '3 ta tinglash (Choukai) savolini yeching',
      ja: '3問の聴解問題を解く',
      en: 'Solve 3 authentic listening questions',
    },
    target: 3,
    metric: 'totalListening',
  },
  {
    id: 'listening_10',
    category: 'listening',
    tier: 'silver',
    icon: '📻',
    xpReward: 200,
    title: {
      uz: 'Choukai Mutaxassisi',
      ja: '聴解エキスパート',
      en: 'Listening Expert',
    },
    description: {
      uz: '10 ta tinglash savolini muvaffaqiyatli topshiring',
      ja: '10問のリスニング課題をクリアする',
      en: 'Successfully solve 10 listening dialogues',
    },
    target: 10,
    metric: 'totalListening',
  },

  // Speaking & Pitch Accent
  {
    id: 'speaking_3',
    category: 'speaking',
    tier: 'bronze',
    icon: '🎙️',
    xpReward: 100,
    title: {
      uz: "Erkin So'zlovchi",
      ja: '流暢な話し手',
      en: 'Fluent Speaker',
    },
    description: {
      uz: "Speaking Coach'da 3 ta jonli suhbat mashqi",
      ja: 'スピーキング練習を3セッション完了する',
      en: 'Complete 3 speaking coach conversation sessions',
    },
    target: 3,
    metric: 'totalSpeaking',
  },
  {
    id: 'pitch_3',
    category: 'speaking',
    tier: 'bronze',
    icon: '🎶',
    xpReward: 80,
    title: {
      uz: 'Ohang Sohibi',
      ja: 'アクセントの響き',
      en: 'Pitch Accent Sensei',
    },
    description: {
      uz: "Pitch Accent Studio'da 3 ta ohang mashqini yakunlang",
      ja: '3つのピッチアクセント練習を完了する',
      en: 'Complete 3 pitch accent training exercises',
    },
    target: 3,
    metric: 'totalPitchAccent',
  },

  // JLPT Exam & Quests
  {
    id: 'jlpt_first',
    category: 'jlpt',
    tier: 'silver',
    icon: '📝',
    xpReward: 150,
    title: {
      uz: 'Sinov Qahramoni',
      ja: '模試の挑戦者',
      en: 'JLPT Contender',
    },
    description: {
      uz: "Birinchi to'liq JLPT Mock imtihonini yakunlang",
      ja: '最初のJLPT模擬試験を完了する',
      en: 'Complete your first official JLPT Mock Exam',
    },
    target: 1,
    metric: 'mockExamsCompleted',
  },
  {
    id: 'quest_all_clear',
    category: 'jlpt',
    tier: 'gold',
    icon: '🎯',
    xpReward: 200,
    title: {
      uz: 'Kunlik Chempion',
      ja: 'デイリーチャンピオン',
      en: 'Daily Champion',
    },
    description: {
      uz: 'Bir kunda barcha 4 ta kunlik kvestni 100% bajaring',
      ja: '1日の全デイリークエストを完全クリアする',
      en: 'Complete all daily quests in a single day',
    },
    target: 1,
    metric: 'dailyQuestsAllClear',
  },
];

export class AchievementService {
  private static getStorageKey(userId?: string | null): string {
    const userKey = userId || 'guest';
    return `${ACHIEVEMENTS_STORAGE_PREFIX}:${userKey}`;
  }

  static getUnlockedAchievements(userId?: string | null): UserAchievement[] {
    const key = this.getStorageKey(userId);
    const result = safeLocalStorage.getJSON<UserAchievement[]>(key, []);
    return Array.isArray(result) ? result : [];
  }

  /**
   * Evaluates user stats against the registry and unlocks newly qualified achievements.
   * Returns array of newly unlocked achievements.
   */
  static evaluateAchievements(
    stats: Partial<GamificationStats>,
    userId?: string | null,
  ): AchievementDefinition[] {
    const unlocked = this.getUnlockedAchievements(userId);
    const unlockedIds = new Set(unlocked.map((u) => u.id));
    const newlyUnlocked: AchievementDefinition[] = [];

    for (const ach of ACHIEVEMENTS_REGISTRY) {
      if (unlockedIds.has(ach.id)) continue;

      let value = 0;
      switch (ach.metric) {
        case 'currentStreak':
          value = stats.currentStreak || 0;
          break;
        case 'totalFlashcards':
          value = stats.flashcardsReviewed || 0;
          break;
        case 'totalKanji':
          value = stats.kanjiMastered || 0;
          break;
        case 'totalListening':
          value = stats.listeningQuestionsCompleted || 0;
          break;
        case 'totalSpeaking':
          value = stats.speakingSessionsCompleted || 0;
          break;
        case 'totalPitchAccent':
          value = stats.pitchAccentPracticesCompleted || 0;
          break;
        case 'mockExamsCompleted':
          value = stats.mockExamsCompleted || 0;
          break;
        case 'mockExamHighScore':
          value = stats.highestMockScore || 0;
          break;
        case 'dailyQuestsAllClear':
          value = stats.dailyQuestsAllClearCount || 0;
          break;
      }

      if (value >= ach.target) {
        newlyUnlocked.push(ach);
        unlocked.push({
          id: ach.id,
          unlockedAt: new Date().toISOString(),
          claimed: false,
        });
      }
    }

    if (newlyUnlocked.length > 0) {
      safeLocalStorage.setJSON(this.getStorageKey(userId), unlocked);
    }

    return newlyUnlocked;
  }

  /**
   * Marks an unlocked achievement's reward as claimed.
   */
  static claimAchievement(
    achievementId: string,
    userId?: string | null,
  ): { achievement: AchievementDefinition | null; xpAwarded: number } {
    const unlocked = this.getUnlockedAchievements(userId);
    const targetDef = ACHIEVEMENTS_REGISTRY.find((a) => a.id === achievementId);
    let xpAwarded = 0;

    const updated = unlocked.map((u) => {
      if (u.id === achievementId && !u.claimed) {
        xpAwarded = targetDef ? targetDef.xpReward : 0;
        return { ...u, claimed: true };
      }
      return u;
    });

    safeLocalStorage.setJSON(this.getStorageKey(userId), updated);
    return { achievement: targetDef || null, xpAwarded };
  }
}
