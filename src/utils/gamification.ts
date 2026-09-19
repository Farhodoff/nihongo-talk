import { LevelInfo } from '../types/gamification';

export interface LevelConfig {
  level: number;
  minXp: number;
  title: string;
  icon: string;
  perks: string[];
}

export const LEVELS: LevelConfig[] = [
  {
    level: 1,
    minXp: 0,
    title: "Boshlang'ich Talaba",
    icon: '🌱',
    perks: ["Asosiy fleshkartalar va kunlik mashg'ulotlar", 'Hiragana & Katakana darslari'],
  },
  {
    level: 2,
    minXp: 500,
    title: 'Shogird',
    icon: '📖',
    perks: ['Kanji Canvas chizish moduli', 'Kunlik missiyalar va bonus XP'],
  },
  {
    level: 3,
    minXp: 1500,
    title: 'Olim',
    icon: '⚡',
    perks: ['Choukai Tinglash audio sinxronizatsiyasi', 'Ovozli Speaking coach kirish'],
  },
  {
    level: 4,
    minXp: 3000,
    title: 'Tadqiqotchi',
    icon: '🔬',
    perks: ["Pitch Accent Studio to'liq rejimi", 'Qiyin xatolar daftari (Mistake Vault)'],
  },
  {
    level: 5,
    minXp: 5000,
    title: 'Ekspert',
    icon: '🏆',
    perks: ["JLPT N5 va N4 Mock Exam to'liq sinovlari", "Batafsil o'quv analitikasi"],
  },
  {
    level: 6,
    minXp: 8000,
    title: 'Usta',
    icon: '🥋',
    perks: ['JLPT N3 chuqurlashtirilgan imtihonlar', 'Uzluksiz Streak Freeze bonusi'],
  },
  {
    level: 7,
    minXp: 12000,
    title: 'Grossmeyster',
    icon: '👑',
    perks: ['Barcha darajadagi maxsus nishonlar', 'Shaxsiy AI repetitor tavsiyalari'],
  },
  {
    level: 8,
    minXp: 20000,
    title: 'Professor',
    icon: '🎓',
    perks: ['Maksimal pedagogik maqom', 'Mukammal yapon tili sertifikati nishoni'],
  },
];

export const getLevelInfo = (xp: number): LevelInfo => {
  // Find the highest level where xp >= minXp
  const current =
    LEVELS.slice()
      .reverse()
      .find((l) => xp >= l.minXp) || LEVELS[0];
  const nextIndex = LEVELS.findIndex((l) => l.level === current.level + 1);
  const next = LEVELS[nextIndex];

  let progress = 0;
  let xpForNext = 0;
  let xpInCurrent = 0;

  if (next) {
    xpForNext = next.minXp - current.minXp;
    xpInCurrent = xp - current.minXp;
    progress = (xpInCurrent / xpForNext) * 100;
  } else {
    progress = 100; // Max level
  }

  return {
    level: current.level,
    title: current.title,
    progress: Math.min(100, Math.max(0, progress)),
    currentXp: xp,
    nextLevelXp: next ? next.minXp : xp,
    xpToNext: next ? next.minXp - xp : 0,
    perks: current.perks,
  };
};

export interface StreakOptions {
  streakFreezeAvailable?: boolean;
  useLocalDate?: boolean;
}

export interface StreakResult {
  streak: number;
  lastActivityDate: string;
  freezeUsed?: boolean;
}

/**
 * Format local date as YYYY-MM-DD
 */
export const getLocalDateString = (d: Date = new Date()): string => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Calculates current streak accurately based on last activity date and today's date.
 * Supports optional streakFreeze protection when 1 day is missed.
 */
export const calculateStreak = (
  lastActivityDate: string | null,
  currentStreak: number,
  now: Date = new Date(),
  options?: StreakOptions,
): StreakResult => {
  const todayStr = options?.useLocalDate
    ? getLocalDateString(now)
    : now.toISOString().split('T')[0];
  if (!lastActivityDate) {
    return { streak: 1, lastActivityDate: todayStr, freezeUsed: false };
  }

  const lastStr = lastActivityDate.split('T')[0];
  if (lastStr === todayStr) {
    return {
      streak: Math.max(1, currentStreak || 1),
      lastActivityDate: todayStr,
      freezeUsed: false,
    };
  }

  const lastDate = new Date(lastStr);
  const currentDate = new Date(todayStr);
  const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    return { streak: (currentStreak || 0) + 1, lastActivityDate: todayStr, freezeUsed: false };
  } else if (diffDays === 2 && options?.streakFreezeAvailable) {
    // Missed exactly 1 day, but streak freeze is available! Streak is protected!
    return {
      streak: Math.max(1, currentStreak || 1),
      lastActivityDate: todayStr,
      freezeUsed: true,
    };
  } else {
    // Missed one or more days without freeze protection
    return { streak: 1, lastActivityDate: todayStr, freezeUsed: false };
  }
};
