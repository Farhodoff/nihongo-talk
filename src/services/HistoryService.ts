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

// In-memory set of missing tables to avoid repeated 404 network errors
const missingTables = new Set<string>();

function isTableDisabled(tableName: string): boolean {
    return missingTables.has(tableName);
}

function handleTableError(tableName: string, error: any) {
    if (error && (error.code === 'PGRST301' || error.code === '42P01' || error.status === 404 || String(error.message).includes('404'))) {
        missingTables.add(tableName);
    }
}

export class HistoryService {
    static clearMissingTablesCache() {
        missingTables.clear();
    }
    // === IELTS Writing History ===
    static async saveWritingAttempt(item: Omit<WritingHistoryItem, 'id' | 'createdAt'>): Promise<WritingHistoryItem> {
        const newItem: WritingHistoryItem = {
            ...item,
            id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2),
            createdAt: new Date().toISOString()
        };

        if (!isTableDisabled('ielts_writing_history')) {
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
                    if (error) handleTableError('ielts_writing_history', error);
                }
            } catch (e) {
                handleTableError('ielts_writing_history', e);
            }
        }

        const local = localStorage.getItem('study_planner_ielts_writing_history');
        const list: WritingHistoryItem[] = local ? JSON.parse(local) : [];
        list.unshift(newItem);
        localStorage.setItem('study_planner_ielts_writing_history', JSON.stringify(list));

        return newItem;
    }

    static async getWritingHistory(): Promise<WritingHistoryItem[]> {
        if (typeof navigator !== 'undefined' && !navigator.onLine) {
            const local = localStorage.getItem('study_planner_ielts_writing_history');
            return local ? JSON.parse(local) : [];
        }

        if (!isTableDisabled('ielts_writing_history')) {
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
                    } else if (error) {
                        handleTableError('ielts_writing_history', error);
                    }
                }
            } catch (e) {
                handleTableError('ielts_writing_history', e);
            }
        }

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

        if (!isTableDisabled('speaking_coach_sessions')) {
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
                    if (error) handleTableError('speaking_coach_sessions', error);
                }
            } catch (e) {
                handleTableError('speaking_coach_sessions', e);
            }
        }

        const local = localStorage.getItem('study_planner_speaking_coach_sessions');
        const list: SpeakingSessionItem[] = local ? JSON.parse(local) : [];
        list.unshift(newItem);
        localStorage.setItem('study_planner_speaking_coach_sessions', JSON.stringify(list));

        return newItem;
    }

    static async getSpeakingHistory(): Promise<SpeakingSessionItem[]> {
        if (typeof navigator !== 'undefined' && !navigator.onLine) {
            const local = localStorage.getItem('study_planner_speaking_coach_sessions');
            return local ? JSON.parse(local) : [];
        }

        if (!isTableDisabled('speaking_coach_sessions')) {
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
                    } else if (error) {
                        handleTableError('speaking_coach_sessions', error);
                    }
                }
            } catch (e) {
                handleTableError('speaking_coach_sessions', e);
            }
        }

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

        if (!isTableDisabled('mock_exams_history')) {
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
                    if (error) handleTableError('mock_exams_history', error);
                }
            } catch (e) {
                handleTableError('mock_exams_history', e);
            }
        }

        const local = localStorage.getItem('study_planner_mock_exams_history');
        const list: MockExamItem[] = local ? JSON.parse(local) : [];
        list.unshift(newItem);
        localStorage.setItem('study_planner_mock_exams_history', JSON.stringify(list));

        return newItem;
    }

    static async getMockExamsHistory(): Promise<MockExamItem[]> {
        if (typeof navigator !== 'undefined' && !navigator.onLine) {
            const local = localStorage.getItem('study_planner_mock_exams_history');
            return local ? JSON.parse(local) : [];
        }

        if (!isTableDisabled('mock_exams_history')) {
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
                    } else if (error) {
                        handleTableError('mock_exams_history', error);
                    }
                }
            } catch (e) {
                handleTableError('mock_exams_history', e);
            }
        }

        const local = localStorage.getItem('study_planner_mock_exams_history');
        return local ? JSON.parse(local) : [];
    }
}
