import { create } from 'zustand';

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
}

export interface SettingsState {
  settings: Settings;
  updateSettings: (updates: Partial<Settings>) => void;
}

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
};

export const useSettingsStore = create<SettingsState>((set) => ({
  settings: defaultSettings,
  updateSettings: (updates) => set((state) => ({ settings: { ...state.settings, ...updates } })),
}));
