export * from './useAuthStore';
export * from './useSettingsStore';
export * from './useGamificationStore';
export * from './useSubjectStore';
export * from './useFlashcardStore';
export * from './useTaskStore';
export * from './useNoteStore';

import { useShallow } from 'zustand/react/shallow';
import { useAuthStore } from './useAuthStore';
import { useSettingsStore } from './useSettingsStore';
import { useGamificationStore } from './useGamificationStore';
import { useSubjectStore } from './useSubjectStore';
import { useFlashcardStore } from './useFlashcardStore';
import { useTaskStore } from './useTaskStore';

// Convenient granular selectors for high-performance subscriptions
export const useCurrentUser = () => useAuthStore((s) => s.user);
export const useIsAuthLoading = () => useAuthStore((s) => s.loading);
export const useAllFlashcards = () => useFlashcardStore((s) => s.flashcards);
export const useAllTasks = () => useTaskStore((s) => s.tasks);
export const useAllEvents = () => useTaskStore((s) => s.events);
export const useAllSubjects = () => useSubjectStore((s) => s.subjects);
export const useGamificationInfo = () =>
  useGamificationStore(
    useShallow((s) => ({
      totalXp: s.totalXp,
      level: s.level,
      currentStreak: s.currentStreak,
      lastActivityDate: s.lastActivityDate,
    })),
  );
export const useAppSettings = () => useSettingsStore((s) => s.settings);
