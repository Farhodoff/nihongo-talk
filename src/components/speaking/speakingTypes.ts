import { PERSONAS_BY_LANG, CoachPersona } from './PersonaSelector';

export type { CoachPersona };
export { PERSONAS_BY_LANG };

export interface CoachCorrection {
    hasError: boolean;
    original?: string;
    corrected?: string;
    explanation?: string;
}

export interface CoachVocabularyItem {
    word: string;
    reading?: string;
    meaning: string;
    example?: string;
}

export interface CoachChatMessage {
    role: 'user' | 'assistant';
    content: string;
    timestamp?: string;
    translation?: string;
    isTranslating?: boolean;
    showTranslation?: boolean;
    isEditing?: boolean;
    romaji?: string;
    ttsText?: string;
    correction?: CoachCorrection | null;
    vocabulary?: CoachVocabularyItem[];
}

