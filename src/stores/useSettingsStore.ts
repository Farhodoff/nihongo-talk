import { create } from 'zustand';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

export interface Settings {
  theme: 'light' | 'dark' | 'system';
  notificationsEnabled: boolean;
  aiModel: string;
  deepseekModel: string;
  deepseekThinkingMode: boolean;
  dailyStudyGoalMinutes: number;
  coachAiModel: string;
  showFurigana: boolean;
  showRomaji: boolean;
  primaryLanguage?: 'en' | 'ja';
  targetLevel?: string;
  targetGoal?: string;
  level?: number;
  currentStreak?: number;
  totalXp?: number;
}

export interface SettingsState {
  settings: Settings;
  updateSettings: (updates: Partial<Settings>) => void;
}

const SETTINGS_STORAGE_KEY = 'study_planner_user_settings';

const defaultSettings: Settings = {
  theme: 'system',
  notificationsEnabled: true,
  aiModel: 'gpt-4o-mini',
  deepseekModel: 'deepseek-chat',
  deepseekThinkingMode: false,
  dailyStudyGoalMinutes: 60,
  coachAiModel: 'gpt-4o-mini',
  showFurigana: true,
  showRomaji: false,
  level: 1,
  currentStreak: 0,
  totalXp: 0,
};

const loadPersistedSettings = (): Settings => {
  try {
    const raw = safeLocalStorage.getItem(SETTINGS_STORAGE_KEY);
    if (raw) return { ...defaultSettings, ...JSON.parse(raw) };
  } catch {}
  return defaultSettings;
};

export const useSettingsStore = create<SettingsState>((set) => ({
  settings: loadPersistedSettings(),
  updateSettings: (updates) =>
    set((state) => {
      const merged = { ...state.settings, ...updates };
      try {
        safeLocalStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(merged));
      } catch {}
      return { settings: merged };
    }),
}));
