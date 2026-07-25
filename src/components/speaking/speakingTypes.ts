import { PERSONAS_BY_LANG, CoachPersona } from './PersonaSelector';

export type { CoachPersona };
export { PERSONAS_BY_LANG };

export interface CoachChatMessage {
    role: 'user' | 'assistant';
    content: string;
    timestamp?: string;
    translation?: string;
    isTranslating?: boolean;
    showTranslation?: boolean;
    isEditing?: boolean;
}
