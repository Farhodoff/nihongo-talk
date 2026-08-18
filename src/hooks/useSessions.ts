import { useState, useCallback, useRef, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { StudySession, CoachSession } from '../types';
import { DatabaseSession } from '../types/supabase-types';
import { generateUUID } from '../utils/uuid';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

export const useSessions = (awardXP?: (amount: number) => Promise<void>) => {
    const awardXPRef = useRef(awardXP);
    useEffect(() => {
        awardXPRef.current = awardXP;
    }, [awardXP]);

    const [sessions, setSessions] = useState<StudySession[]>(() => {
        return safeLocalStorage.getJSON<StudySession[]>('study_planner_sessions_cache', []);
    });
    const [coachSessions, setCoachSessions] = useState<CoachSession[]>([]);

    const addSession = useCallback(async (sessionData: Partial<StudySession>): Promise<void> => {
        let activeUserId = 'local_user';
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user?.id) activeUserId = user.id;
        } catch {}

        const sessionId = sessionData.id || generateUUID();
        const supabaseData: DatabaseSession = {
            id: sessionId,
            user_id: activeUserId,
            duration: sessionData.duration || 0,
            type: sessionData.type || 'focus',
            completed: !!sessionData.completed,
            mood_before: sessionData.moodBefore === null ? undefined : sessionData.moodBefore,
            mood_after: sessionData.moodAfter === null ? undefined : sessionData.moodAfter,
            subject_id: sessionData.subjectId || undefined,
            start_time: sessionData.startTime || new Date().toISOString()
        };

        const mappedSession: StudySession = {
            id: sessionId,
            subjectId: sessionData.subjectId,
            startTime: supabaseData.start_time,
            duration: supabaseData.duration,
            type: supabaseData.type as 'focus' | 'break',
            completed: supabaseData.completed,
            moodBefore: supabaseData.mood_before,
            moodAfter: supabaseData.mood_after
        };

        setSessions(prev => {
            const updated = [...prev, mappedSession];
            safeLocalStorage.setJSON('study_planner_sessions_cache', updated);
            return updated;
        });

        if (activeUserId !== 'local_user') {
            try {
                const { data, error } = await supabase.from('study_sessions').insert(supabaseData).select().single();
                if (data && !error) {
                    setSessions(prev => {
                        const updated = prev.map(s => s.id === sessionId ? {
                            ...data,
                            subjectId: data.subject_id,
                            startTime: data.start_time,
                            moodBefore: data.mood_before,
                            moodAfter: data.mood_after
                        } as StudySession : s);
                        safeLocalStorage.setJSON('study_planner_sessions_cache', updated);
                        return updated;
                    });
                    if (awardXPRef.current) {
                        await awardXPRef.current(sessionData.type === 'focus' ? 10 : 2);
                    }
                }
            } catch (e) {
                console.warn('[addSession] DB sync notice (local session preserved):', e);
            }
        }
    }, []);

    const addCoachSession = useCallback(async (session: Partial<CoachSession>): Promise<void> => {
        let activeUserId: string | null = null;
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user?.id) activeUserId = user.id;
        } catch {}

        if (!activeUserId) return;

        const dbCoachSession = {
            user_id: activeUserId,
            persona: session.personaTitle || 'AI Coach',
            fluency_score: session.fluencyScore || 0,
            pronunciation_score: session.pronunciationScore || 0,
            feedback: session.feedback || ''
        };

        const { data, error } = await supabase.from('speaking_coach_sessions').insert(dbCoachSession).select().single();

        if (error) {
            console.warn("Coach Session Supabase'ga saqlanmadi (lokal saqlanmoqda):", error);
            const newLocalSession: CoachSession = {
                id: 'cs-' + Date.now(),
                personaTitle: dbCoachSession.persona,
                fluencyScore: dbCoachSession.fluency_score,
                vocabularyScore: session.vocabularyScore || 0,
                grammarScore: session.grammarScore || 0,
                pronunciationScore: dbCoachSession.pronunciation_score,
                feedback: dbCoachSession.feedback,
                createdAt: new Date().toISOString()
            };
            setCoachSessions(prev => [newLocalSession, ...prev]);
            return;
        }

        if (data) {
            setCoachSessions(prev => [{
                id: data.id,
                personaTitle: data.persona_title,
                fluencyScore: data.fluency_score,
                vocabularyScore: data.vocabulary_score,
                grammarScore: data.grammar_score,
                pronunciationScore: data.pronunciation_score,
                feedback: data.feedback,
                createdAt: data.created_at
            }, ...prev]);
            if (awardXPRef.current) {
                await awardXPRef.current(15);
            }
        }
    }, []);

    const setSessionsState = useCallback((value: React.SetStateAction<StudySession[]>) => {
        setSessions(value);
    }, []);

    const setCoachSessionsState = useCallback((value: React.SetStateAction<CoachSession[]>) => {
        setCoachSessions(value);
    }, []);

    return {
        sessions,
        setSessions: setSessionsState,
        coachSessions,
        setCoachSessions: setCoachSessionsState,
        addSession,
        addCoachSession
    };
};
