export type DailyQuestCategory =
  'flashcards' | 'listening' | 'kanji' | 'speaking' | 'grammar' | 'focus';

export interface LocalizedText {
  uz: string;
  ja: string;
  en: string;
}

export interface DailyQuest {
  id: string; // e.g. 'quest-flashcards-2026-09-19'
  category: DailyQuestCategory;
  title: LocalizedText;
  description: LocalizedText;
  target: number;
  progress: number;
  xpReward: number;
  completed: boolean;
  claimed: boolean;
  icon: string;
}

export interface DailyQuestState {
  date: string; // YYYY-MM-DD
  quests: DailyQuest[];
  allCompletedBonusClaimed: boolean;
  allCompletedBonusXp: number;
}

export type AchievementTier = 'bronze' | 'silver' | 'gold' | 'diamond';
export type AchievementCategory =
  'streak' | 'vocabulary' | 'kanji' | 'listening' | 'speaking' | 'jlpt';

export interface AchievementDefinition {
  id: string;
  category: AchievementCategory;
  tier: AchievementTier;
  icon: string;
  xpReward: number;
  title: LocalizedText;
  description: LocalizedText;
  target: number;
  metric:
    | 'currentStreak'
    | 'totalFlashcards'
    | 'totalKanji'
    | 'totalListening'
    | 'totalSpeaking'
    | 'totalPitchAccent'
    | 'mockExamsCompleted'
    | 'mockExamHighScore'
    | 'dailyQuestsAllClear';
}

export interface UserAchievement {
  id: string;
  unlockedAt: string; // ISO date
  claimed: boolean;
}

export interface GamificationStats {
  totalXp: number;
  level: number;
  currentStreak: number;
  lastActivityDate: string | null;
  streakFreezes: number;
  streakFreezeUsedToday?: boolean;
  flashcardsReviewed: number;
  kanjiMastered: number;
  listeningQuestionsCompleted: number;
  speakingSessionsCompleted: number;
  pitchAccentPracticesCompleted: number;
  mockExamsCompleted: number;
  highestMockScore: number;
  dailyQuestsAllClearCount: number;
}

export interface LevelInfo {
  level: number;
  title: string;
  progress: number;
  currentXp: number;
  nextLevelXp: number;
  xpToNext: number;
  perks?: string[];
}
