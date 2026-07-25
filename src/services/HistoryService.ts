import { supabase } from '../lib/supabase';

export interface WritingHistoryItem {
    id: string;
    taskType: 'task1' | 'task2';
    prompt: string;
    essay: string;
    score: number;
    criteriaBreakdown: {
        tr: number; // Task Achievement
        cc: number; // Coherence & Cohesion
        lr: number; // Lexical Resource
        gra: number; // Grammatical Range
    };
    feedback: string;
    createdAt: string;
}

export interface SpeakingSessionItem {
    id: string;
    language: 'en' | 'ja';
    persona: string;
    durationSeconds: number;
    fluencyScore: number;
    pronunciationScore: number;
    transcript: string;
    feedback: string;
    createdAt: string;
}

export interface MockExamItem {
    id: string;
    examType: 'ielts_reading' | 'ielts_listening' | 'jlpt';
    level?: string; // for JLPT (N5-N1)
    score: number; // raw correct count or JLPT score out of 180
    totalQuestions: number;
    bandScore?: number; // for IELTS (e.g. 7.5)
    createdAt: string;
}

export class HistoryService {
    // === IELTS Writing History ===
    static async saveWritingAttempt(item: Omit<WritingHistoryItem, 'id' | 'createdAt'>): Promise<WritingHistoryItem> {
        const newItem: WritingHistoryItem = {
            ...item,
            id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2),
            createdAt: new Date().toISOString()
        };

        // 1. Save to Supabase (if authenticated)
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { error } = await supabase.from('ielts_writing_history').insert({
                    user_id: user.id,
                    task_type: newItem.taskType,
                    prompt: newItem.prompt,
                    essay: newItem.essay,
                    score: newItem.score,
                    criteria: newItem.criteriaBreakdown,
                    feedback: newItem.feedback,
                    created_at: newItem.createdAt
                });
                if (error) console.error('[HistoryService] Supabase insert error:', error);
            }
        } catch (e) {
            console.warn('[HistoryService] Supabase offline fallback to local:', e);
        }

        // 2. Save to LocalStorage fallback
        const local = localStorage.getItem('study_planner_ielts_writing_history');
        const list: WritingHistoryItem[] = local ? JSON.parse(local) : [];
        list.unshift(newItem);
        localStorage.setItem('study_planner_ielts_writing_history', JSON.stringify(list));

        return newItem;
    }

    static async getWritingHistory(): Promise<WritingHistoryItem[]> {
        // Try Supabase first
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { data, error } = await supabase
                    .from('ielts_writing_history')
                    .select('*')
                    .eq('user_id', user.id)
                    .order('created_at', { ascending: false });
                if (!error && data) {
                    return data.map((item: any) => ({
                        id: item.id || item.user_id,
                        taskType: item.task_type,
                        prompt: item.prompt,
                        essay: item.essay,
                        score: item.score,
                        criteriaBreakdown: item.criteria,
                        feedback: item.feedback,
                        createdAt: item.created_at
                    }));
                }
            }
        } catch (e) {}

        const local = localStorage.getItem('study_planner_ielts_writing_history');
        return local ? JSON.parse(local) : [];
    }

    // === Speaking Coach Sessions ===
    static async saveSpeakingSession(item: Omit<SpeakingSessionItem, 'id' | 'createdAt'>): Promise<SpeakingSessionItem> {
        const newItem: SpeakingSessionItem = {
            ...item,
            id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2),
            createdAt: new Date().toISOString()
        };

        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { error } = await supabase.from('speaking_coach_sessions').insert({
                    user_id: user.id,
                    language: newItem.language,
                    persona: newItem.persona,
                    duration_seconds: newItem.durationSeconds,
                    fluency_score: newItem.fluencyScore,
                    pronunciation_score: newItem.pronunciationScore,
                    transcript: newItem.transcript,
                    feedback: newItem.feedback,
                    created_at: newItem.createdAt
                });
                if (error) console.error('[HistoryService] Supabase insert error:', error);
            }
        } catch (e) {
            console.warn('[HistoryService] Supabase offline fallback:', e);
        }

        const local = localStorage.getItem('study_planner_speaking_coach_sessions');
        const list: SpeakingSessionItem[] = local ? JSON.parse(local) : [];
        list.unshift(newItem);
        localStorage.setItem('study_planner_speaking_coach_sessions', JSON.stringify(list));

        return newItem;
    }

    static async getSpeakingHistory(): Promise<SpeakingSessionItem[]> {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { data, error } = await supabase
                    .from('speaking_coach_sessions')
                    .select('*')
                    .eq('user_id', user.id)
                    .order('created_at', { ascending: false });
                if (!error && data) {
                    return data.map((item: any) => ({
                        id: item.id || item.user_id,
                        language: item.language,
                        persona: item.persona,
                        durationSeconds: item.duration_seconds,
                        fluencyScore: item.fluency_score,
                        pronunciationScore: item.pronunciation_score,
                        transcript: item.transcript,
                        feedback: item.feedback,
                        createdAt: item.created_at
                    }));
                }
            }
        } catch (e) {}

        const local = localStorage.getItem('study_planner_speaking_coach_sessions');
        return local ? JSON.parse(local) : [];
    }

    // === Mock Exams (IELTS Reading/Listening, JLPT) ===
    static async saveMockExam(item: Omit<MockExamItem, 'id' | 'createdAt'>): Promise<MockExamItem> {
        const newItem: MockExamItem = {
            ...item,
            id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2),
            createdAt: new Date().toISOString()
        };

        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { error } = await supabase.from('mock_exams_history').insert({
                    user_id: user.id,
                    exam_type: newItem.examType,
                    level: newItem.level || null,
                    score: newItem.score,
                    total_questions: newItem.totalQuestions,
                    band_score: newItem.bandScore || null,
                    created_at: newItem.createdAt
                });
                if (error) console.error('[HistoryService] Supabase insert error:', error);
            }
        } catch (e) {}

        const local = localStorage.getItem('study_planner_mock_exams_history');
        const list: MockExamItem[] = local ? JSON.parse(local) : [];
        list.unshift(newItem);
        localStorage.setItem('study_planner_mock_exams_history', JSON.stringify(list));

        return newItem;
    }

    static async getMockExamsHistory(): Promise<MockExamItem[]> {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { data, error } = await supabase
                    .from('mock_exams_history')
                    .select('*')
                    .eq('user_id', user.id)
                    .order('created_at', { ascending: false });
                if (!error && data) {
                    return data.map((item: any) => ({
                        id: item.id || item.user_id,
                        examType: item.exam_type,
                        level: item.level,
                        score: item.score,
                        totalQuestions: item.total_questions,
                        bandScore: item.band_score,
                        createdAt: item.created_at
                    }));
                }
            }
        } catch (e) {}

        const local = localStorage.getItem('study_planner_mock_exams_history');
        return local ? JSON.parse(local) : [];
    }
}
