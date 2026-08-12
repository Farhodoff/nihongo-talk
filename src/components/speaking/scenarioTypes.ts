export interface ConversationScenario {
    id: string;
    title_ja: string;        // e.g. "レストラン"
    title_uz: string;        // e.g. "Restoran"
    emoji: string;           // e.g. "🍣"
    difficulty: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
    category: 'daily' | 'business' | 'travel' | 'social';
    description_uz: string;  // e.g. "Restoranda ovqat buyurtma qilish va to'lov qilish suhbati"
    opening_line_ja: string; // Coach initial message
    context_prompt: string;  // Prompt for AI system instruction
    key_phrases: string[];   // Expected key vocabulary/phrases
    is_custom?: boolean;     // Created by admin
    created_at?: string;
}

export interface ScenarioSessionResult {
    id: string;
    scenario_id: string;
    scenario_title: string;
    pronunciation_score: number;  // 0-100
    fluency_score: number;        // 0-100
    grammar_score: number;        // 0-100
    vocabulary_score: number;     // 0-100
    overall_score: number;        // 0-100
    duration_seconds: number;
    user_audio_url?: string;      // Recorded blob URL for playback
    ai_feedback: string;
    key_phrases_used: string[];
    key_phrases_missed: string[];
    created_at: string;
}
