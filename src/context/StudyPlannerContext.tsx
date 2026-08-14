import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { User } from '@supabase/supabase-js';
import { Flashcard, Goal, Note, StudySession, Subject, Task, WhiteboardMetadata, StudyNote, Event, CoachSession } from '../types';
import { PushNotificationService } from '../services/PushNotificationService';
import { useGamification } from '../hooks/useGamification';
import { useTasks } from '../hooks/useTasks';
import { useFlashcards } from '../hooks/useFlashcards';
import { TaskService } from '../services/TaskService';
import { FlashcardService } from '../services/FlashcardService';
import { GoogleCalendarService, GoogleCalendarEvent } from '../services/GoogleCalendarService';
import { DatabaseSubject, DatabaseSession, DatabaseNote, DatabaseStudyNote, DatabaseWhiteboard, DatabaseEvent, DatabaseProfile, DatabaseEventUpdate, DatabaseCoachSession } from '../types/supabase-types';
import { generateUUID } from '../utils/uuid';



interface Settings {
    theme: 'light' | 'dark';
    notificationsEnabled: boolean;
    totalXp: number;
    level: number;
    currentStreak: number;
    lastActivityDate: string | null;
    googleApiKey?: string;
    aiModel?: 'gemini' | 'deepseek' | 'ollama';
    deepseekApiKey?: string;
    deepseekModel?: 'deepseek-v4-flash' | 'deepseek-v4-pro';
    deepseekThinkingMode?: boolean;
    ollamaUrl?: string;
    ollamaModel?: string;
    dailyStudyGoalMinutes: number;
    openAIApiKey?: string;
    coachVoice?: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';
    coachAiModel?: 'gemini' | 'deepseek' | 'ollama';
    coachApiKey?: string;
    showFurigana: boolean;
    showRomaji: boolean;
}

interface StudyPlannerContextType {
    goals: Goal[];
    tasks: Task[];
    flashcards: Flashcard[];
    subjects: Subject[];
    notes: Note[];
    studyNotes: StudyNote[];
    sessions: StudySession[];
    whiteboards: WhiteboardMetadata[];
    events: Event[];
    coachSessions: CoachSession[];
    googleEvents: GoogleCalendarEvent[];
    settings: Settings;
    loading: boolean;
    user: User | null;

    // Task operatsiyalari
    addTask: (task: Partial<Task>) => Promise<void>;
    addTasksBatch: (tasks: Partial<Task>[]) => Promise<Task[]>;
    updateTask: (id: string, updates: Partial<Task>) => Promise<void>;
    deleteTask: (id: string, permanent?: boolean) => Promise<void>;
    restoreTask: (id: string) => Promise<void>;
    toggleTask: (id: string) => Promise<void>;
    updateTaskStatus: (id: string, status: string) => Promise<void>;

    // Flashcard operatsiyalari
    addFlashcard: (card: Partial<Flashcard>) => Promise<Flashcard | null>;
    addFlashcardsBatch: (cards: Partial<Flashcard>[]) => Promise<Flashcard[]>;
    updateFlashcard: (id: string, updates: Partial<Flashcard>) => Promise<void>;
    deleteFlashcard: (id: string, permanent?: boolean) => Promise<void>;
    restoreFlashcard: (id: string) => Promise<void>;
    reviewFlashcard: (id: string, rating: number, card?: Flashcard) => Promise<void>;
    importFlashcards: (subjectId: string, cards: { front: string; back: string; example?: string }[]) => Promise<boolean>;

    // Subject operatsiyalari
    addSubject: (subject: Partial<Subject>) => Promise<Subject | null>;
    updateSubject: (id: string, updates: Partial<Subject>) => Promise<void>;
    deleteSubject: (id: string) => Promise<void>;

    // Goal operatsiyalari
    addGoal: (goal: Partial<Goal>) => Promise<Goal | null>;
    updateGoal: (id: string, updates: Partial<Goal>) => Promise<void>;
    deleteGoal: (id: string) => Promise<void>;

    // Note operatsiyalari
    addNote: (note: Partial<Note>) => Promise<Note | null>;
    updateNote: (id: string, updates: Partial<Note>) => Promise<void>;
    deleteNote: (id: string) => Promise<void>;

    // Study Note (Konspekt) operatsiyalari
    addStudyNote: (note: Partial<StudyNote>) => Promise<void>;
    addStudyNotesBatch: (notes: Partial<StudyNote>[]) => Promise<StudyNote[]>;
    updateStudyNote: (id: string, updates: Partial<StudyNote>) => Promise<void>;
    deleteStudyNote: (id: string) => Promise<void>;

    // Whiteboard operatsiyalari
    addWhiteboard: (subjectId: string, title: string) => Promise<string | null>;
    deleteWhiteboard: (id: string) => Promise<void>;
    updateWhiteboardTitle: (id: string, title: string) => Promise<void>;

    // Event operatsiyalari
    addEvent: (event: Partial<Event>) => Promise<Event | null>;
    updateEvent: (id: string, updates: Partial<Event>) => Promise<void>;
    deleteEvent: (id: string) => Promise<void>;
    syncGoogleEvents: () => Promise<void>;

    // Session operatsiyalari
    addSession: (session: Partial<StudySession>) => Promise<void>;
    addCoachSession: (session: Partial<CoachSession>) => Promise<void>;

    // Data
    refreshData: () => Promise<void>;

    // Settings & XP
    updateSettings: (updates: Partial<Settings>) => Promise<void>;
    awardXP: (amount: number) => Promise<void>;
    resetXP: () => Promise<void>;
    getRank: (level: number) => string;

}


const StudyPlannerContext = createContext<StudyPlannerContextType | undefined>(undefined);

// ===== PROVIDER =====
export const StudyPlannerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // 1. Core Hooks

    const {
        gameState,
        setGamificationState,
        awardXP,
        resetXP,
        getRank
    } = useGamification({
        totalXp: 0,
        level: 1,
        currentStreak: 0,
        lastActivityDate: null
    });

    const {
        tasks,
        setTasks,
        addTask,
        addTasksBatch,
        updateTask,
        toggleTask,
        updateTaskStatus,
        deleteTask,
        restoreTask
    } = useTasks(awardXP);

    const {
        flashcards,
        setFlashcards,
        addFlashcard,
        addFlashcardsBatch,
        updateFlashcard,
        deleteFlashcard,
        restoreFlashcard,
        reviewFlashcard,
        importFlashcards
    } = useFlashcards(awardXP);

    const [subjects, setSubjects] = useState<Subject[]>(() => {
        try {
            const raw = localStorage.getItem('study_planner_subjects_cache');
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) return parsed;
            }
        } catch {}
        return [];
    });
    const [goals, setGoals] = useState<Goal[]>([]);
    const [notes, setNotes] = useState<Note[]>([]);
    const [studyNotes, setStudyNotes] = useState<StudyNote[]>([]);
    const [sessions, setSessions] = useState<StudySession[]>([]);
    const [whiteboards, setWhiteboards] = useState<WhiteboardMetadata[]>([]);
    const [events, setEvents] = useState<Event[]>([]);
    const [coachSessions, setCoachSessions] = useState<CoachSession[]>([]);
    const [googleEvents, setGoogleEvents] = useState<GoogleCalendarEvent[]>([]);

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(() => {
        try {
            const localSession = localStorage.getItem('study_planner_user_cache');
            if (localSession) {
                return JSON.parse(localSession);
            }
        } catch {}
        return null;
    });

    // Google Calendar tadbirlarini sinxronizatsiya qilish
    const syncGoogleEvents = useCallback(async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.provider_token) {
            try {
                const now = new Date();
                const timeMin = new Date(now.getFullYear(), now.getMonth() - 1, 1).toISOString();
                const timeMax = new Date(now.getFullYear(), now.getMonth() + 2, 1).toISOString();
                
                const fetchedEvents = await GoogleCalendarService.listEvents(session.provider_token, timeMin, timeMax);
                setGoogleEvents(fetchedEvents);
            } catch (error) {
                console.error("Google Calendar sync error:", error);
            }
        }
    }, []);

    // App Settings (Non-gamification)
    const [appSettings, setAppSettings] = useState<{
        theme: 'light' | 'dark';
        notificationsEnabled: boolean;
        googleApiKey?: string;
        aiModel?: 'gemini' | 'deepseek' | 'ollama';
        deepseekApiKey?: string;
        deepseekModel?: 'deepseek-v4-flash' | 'deepseek-v4-pro';
        deepseekThinkingMode?: boolean;
        ollamaUrl?: string;
        ollamaModel?: string;
        dailyStudyGoalMinutes: number;
        openAIApiKey?: string;
        coachVoice?: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';
        coachAiModel?: 'gemini' | 'deepseek' | 'ollama';
        coachApiKey?: string;
        showFurigana: boolean;
        showRomaji: boolean;
    }>(() => {
        const savedTheme = localStorage.getItem('study_planner_theme');
        const savedAiSettingsStr = localStorage.getItem('study_planner_ai_settings');
        const savedAiSettings = savedAiSettingsStr ? JSON.parse(savedAiSettingsStr) : {};
        const savedGoal = localStorage.getItem('study_planner_daily_goal');
        
        let dsModel: 'deepseek-v4-flash' | 'deepseek-v4-pro' = 'deepseek-v4-flash';
        if (savedAiSettings.deepseekModel) {
            if (savedAiSettings.deepseekModel === 'deepseek-chat') {
                dsModel = 'deepseek-v4-flash';
            } else if (savedAiSettings.deepseekModel === 'deepseek-reasoner') {
                dsModel = 'deepseek-v4-pro';
            } else {
                dsModel = savedAiSettings.deepseekModel;
            }
        }

        return {
            theme: (savedTheme as 'light' | 'dark') || 'light',
            notificationsEnabled: true,
            googleApiKey: savedAiSettings.googleApiKey,
            aiModel: savedAiSettings.aiModel || 'deepseek',
            deepseekApiKey: savedAiSettings.deepseekApiKey || '',
            deepseekModel: dsModel,
            deepseekThinkingMode: savedAiSettings.deepseekThinkingMode,
            ollamaUrl: savedAiSettings.ollamaUrl,
            ollamaModel: savedAiSettings.ollamaModel,
            dailyStudyGoalMinutes: savedGoal ? parseInt(savedGoal, 10) : 240,
            openAIApiKey: savedAiSettings.openAIApiKey,
            coachVoice: savedAiSettings.coachVoice || 'alloy',
            coachAiModel: savedAiSettings.coachAiModel || 'deepseek',
            coachApiKey: savedAiSettings.coachApiKey || '',
            showFurigana: localStorage.getItem('study_planner_show_furigana') !== 'false',
            showRomaji: localStorage.getItem('study_planner_show_romaji') === 'true',
        };
    });

    // Derived full settings for consumers
    const settings: Settings = {
        ...appSettings,
        ...gameState
    };

    // Ma'lumotlarni yuklash
    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            // Ofiine rejimda brauzer network error spam bo'lmasligi uchun lokal keshdan yuklaymiz
            if (typeof navigator !== 'undefined' && !navigator.onLine) {
                const localSession = localStorage.getItem('study_planner_user_cache');
                if (localSession) {
                    try {
                        setUser(JSON.parse(localSession));
                    } catch {}
                }
                setLoading(false);
                return;
            }

            let currentUser: any = null;
            try {
                const { data, error: authError } = await supabase.auth.getUser();
                if (!authError && data?.user) {
                    currentUser = data.user;
                } else if (authError && authError.message && typeof authError.message === 'string' && authError.message !== 'Auth session missing!' && !authError.message.includes('Offline') && !authError.message.includes('Network') && !authError.message.includes('Failed to fetch')) {
                    console.warn("[StudyPlannerContext] Auth getUser notice:", authError.message);
                }
            } catch (e) {
                console.warn("[StudyPlannerContext] Auth exception:", e);
            }

            // Fallback to getSession if getUser failed or had temporary network error
            if (!currentUser && typeof supabase?.auth?.getSession === 'function') {
                try {
                    const { data: sessionData } = await supabase.auth.getSession();
                    if (sessionData?.session?.user) {
                        currentUser = sessionData.session.user;
                    }
                } catch (e) {
                    console.warn("[StudyPlannerContext] Auth getSession exception:", e);
                }
            }

            if (!currentUser) {
                localStorage.removeItem('study_planner_user_cache');
                setUser(null);
                setLoading(false);
                return;
            }
            localStorage.setItem('study_planner_user_cache', JSON.stringify(currentUser));
            setUser(currentUser);

            

            // Google Calendar sinxronizatsiyasi
            syncGoogleEvents();

            // --- BACKGROUND SYNC: Fetch fresh data from Supabase ---
            // --- TASKS via Service ---
            try {
                const fetchedTasks = await TaskService.fetchTasks(currentUser.id);
                setTasks(fetchedTasks);
            } catch (e: any) {
                console.warn("Tasks sync warning:", e?.message || e);
            }

            // --- FLASHCARDS via Service ---
            try {
                const fetchedCards = await FlashcardService.fetchFlashcards(currentUser.id);
                setFlashcards(fetchedCards);
            } catch (e: any) {
                console.warn("Flashcards sync warning:", e?.message || e);
            }

            // Parallel yuklash for other entities
            try {
                const [subjectsSettled, goalsSettled, notesSettled, sessionsSettled, studyNotesSettled, whiteboardsSettled, eventsSettled, profileSettled, coachSessionsSettled] = await Promise.allSettled([
                    supabase.from('subjects').select('*').eq('user_id', currentUser.id),
                    supabase.from('goals').select('*').eq('user_id', currentUser.id),
                    supabase.from('notes').select('*').eq('user_id', currentUser.id),
                    supabase.from('study_sessions').select('*').eq('user_id', currentUser.id),
                    supabase.from('study_notes').select('*').eq('user_id', currentUser.id),
                    supabase.from('whiteboards').select('id, subject_id, user_id, title, updated_at').eq('user_id', currentUser.id),
                    supabase.from('events').select('*').eq('user_id', currentUser.id),
                    supabase.from('profiles').select('*').eq('id', currentUser.id).maybeSingle(),
                    supabase.from('speaking_coach_sessions').select('*').eq('user_id', currentUser.id).order('created_at', { ascending: false }),
                ]);

                const subjectsRes = subjectsSettled.status === 'fulfilled' ? subjectsSettled.value : null;
                const goalsRes = goalsSettled.status === 'fulfilled' ? goalsSettled.value : null;
                const notesRes = notesSettled.status === 'fulfilled' ? notesSettled.value : null;
                const sessionsRes = sessionsSettled.status === 'fulfilled' ? sessionsSettled.value : null;
                const studyNotesRes = studyNotesSettled.status === 'fulfilled' ? studyNotesSettled.value : null;
                const whiteboardsRes = whiteboardsSettled.status === 'fulfilled' ? whiteboardsSettled.value : null;
                const eventsRes = eventsSettled.status === 'fulfilled' ? eventsSettled.value : null;
                const profileRes = profileSettled.status === 'fulfilled' ? profileSettled.value : null;
                const coachSessionsRes = coachSessionsSettled.status === 'fulfilled' ? coachSessionsSettled.value : null;

                if (subjectsRes?.data) {
                    const mappedSubjects = subjectsRes.data.map((s: DatabaseSubject) => ({
                        id: s.id,
                        name: s.name,
                        color: s.color,
                        schedule: s.schedule || [],
                        teacherName: s.teacher_name,
                        roomLocation: s.room_location,
                        description: s.description,
                        icon: s.icon,
                        isArchived: s.is_archived || false
                    }));

                    // Merge DB subjects with local cached subjects so new subjects are never lost
                    let localCachedSubs: Subject[] = [];
                    try {
                        const rawCache = localStorage.getItem('study_planner_subjects_cache_' + currentUser.id);
                        if (rawCache) localCachedSubs = JSON.parse(rawCache);
                    } catch (e) {}

                    const dbSubIds = new Set(mappedSubjects.map(s => s.id));
                    const missingLocalSubs = localCachedSubs.filter(s => !dbSubIds.has(s.id));

                    let mergedSubjects = [...mappedSubjects, ...missingLocalSubs];
                    if (mergedSubjects.length === 0) {
                        mergedSubjects = [
                            {
                                id: 'sub_jlpt_master',
                                name: '🎌 JLPT Japanese Master',
                                color: '#f43f5e',
                                icon: 'Sparkles',
                                schedule: [],
                                isArchived: false
                            },
                            {
                                id: 'sub_ielts_master',
                                name: '📘 IELTS Academic & CEFR Master',
                                color: '#6366f1',
                                icon: 'GraduationCap',
                                schedule: [],
                                isArchived: false
                            },
                            {
                                id: 'sub_it_programming',
                                name: '💻 IT & Dasturlash',
                                color: '#10b981',
                                icon: 'Code',
                                schedule: [],
                                isArchived: false
                            },
                            {
                                id: 'sub_general_notes',
                                name: '📝 Qaydnoma va Konspektlar',
                                color: '#8b5cf6',
                                icon: 'BookOpen',
                                schedule: [],
                                isArchived: false
                            }
                        ];
                    }

                    setSubjects(mergedSubjects);
                    try {
                        localStorage.setItem('study_planner_subjects_cache_' + currentUser.id, JSON.stringify(mergedSubjects));
                        localStorage.setItem('study_planner_subjects_cache', JSON.stringify(mergedSubjects));
                    } catch (e) {}

                    // Background Sync: Upsert subjects directly into Supabase DB
                    if (mergedSubjects.length > 0) {
                        const dbPayload = mergedSubjects.map(s => ({
                            id: s.id,
                            user_id: currentUser.id,
                            name: s.name,
                            color: s.color,
                            icon: s.icon,
                            description: s.description || null,
                            is_archived: s.isArchived || false
                        }));
                        supabase.from('subjects').upsert(dbPayload).then(({ error }) => {
                            if (error) console.warn("[Background Sync] Subjects upsert warning:", error);
                        });
                    }
                }

                if (sessionsRes?.data) {
                    const mappedSessions = sessionsRes.data.map((s: DatabaseSession) => ({
                        ...s,
                        subjectId: s.subject_id,
                        startTime: s.start_time,
                        moodBefore: s.mood_before,
                        moodAfter: s.mood_after
                    }));
                    setSessions(mappedSessions);
                }

                if (notesRes?.data) {
                    const mappedNotes = notesRes.data.map((n: DatabaseNote) => ({
                        ...n,
                        subjectId: n.subject_id,
                        isPinned: n.is_pinned || false,
                        createdAt: n.created_at,
                        updatedAt: n.updated_at
                    }));
                    setNotes(mappedNotes);
                }

                if (studyNotesRes?.data) {
                    const mappedStudyNotes = studyNotesRes.data.map((n: DatabaseStudyNote) => ({
                        ...n,
                        userId: n.user_id,
                        subjectId: n.subject_id,
                        createdAt: n.created_at,
                        updatedAt: n.updated_at
                    }));
                    setStudyNotes(mappedStudyNotes);
                }

                if (goalsRes?.data) {
                    const mappedGoals = goalsRes.data.map((g: any) => ({
                        id: g.id,
                        title: g.title,
                        description: g.description || '',
                        deadline: g.deadline || g.target_date || new Date().toISOString(),
                        progress: typeof g.progress === 'number' ? g.progress : 0,
                        color: g.color || '#6366f1',
                        priority: g.priority || 'medium',
                        createdAt: g.created_at || g.createdAt || new Date().toISOString(),
                        completed: g.completed || false
                    }));
                    setGoals(mappedGoals);
                }

                if (whiteboardsRes?.data) {
                    setWhiteboards(whiteboardsRes.data.map((w: DatabaseWhiteboard) => ({
                        id: w.id,
                        subjectId: w.subject_id,
                        userId: w.user_id,
                        title: w.title || 'Adsiz Doska',
                        updatedAt: w.updated_at
                    })));
                }

                if (eventsRes?.data) {
                    const mappedEvents = eventsRes.data.map((e: DatabaseEvent) => ({
                        id: e.id,
                        userId: e.user_id,
                        title: e.title,
                        description: e.description,
                        eventType: e.event_type,
                        eventDate: e.event_date,
                        notifyBeforeMinutes: e.notify_before_minutes,
                        isNotified: e.is_notified,
                        repetitionType: e.repetition_type || 'none',
                        repetitionEndDate: e.repetition_end_date,
                        repetitionDays: e.repetition_days,
                        googleEventId: e.google_event_id,
                        createdAt: e.created_at,
                        updatedAt: e.updated_at
                    }));
                    setEvents(mappedEvents);
                }

                if (coachSessionsRes?.data) {
                    const mappedCoachSessions = coachSessionsRes.data.map((s: DatabaseCoachSession) => ({
                        id: s.id,
                        personaTitle: s.persona_title,
                        fluencyScore: s.fluency_score,
                        vocabularyScore: s.vocabulary_score,
                        grammarScore: s.grammar_score,
                        pronunciationScore: s.pronunciation_score,
                        feedback: s.feedback,
                        createdAt: s.created_at
                    }));
                    setCoachSessions(mappedCoachSessions);
                }

                // Profile & Settings
                const userMeta = currentUser.user_metadata || {};
                const dbAiSettings = userMeta.ai_settings || {};
                const dbDailyGoal = userMeta.daily_goal;
                const dbShowFurigana = userMeta.show_furigana;
                const dbShowRomaji = userMeta.show_romaji;

                if (dbAiSettings && Object.keys(dbAiSettings).length > 0) {
                    try {
                        localStorage.setItem('study_planner_ai_settings', JSON.stringify(dbAiSettings));
                    } catch (e) {
                        console.warn("Failed to update localStorage with DB AI settings", e);
                    }
                }

                if (profileRes?.data) {
                    const profile = profileRes.data as DatabaseProfile;
                    const savedLocalTheme = localStorage.getItem('study_planner_theme') as 'light' | 'dark' | null;
                    setAppSettings(prev => ({
                        ...prev,
                        theme: savedLocalTheme || profile.theme || prev.theme || 'light',
                        notificationsEnabled: profile.notifications_enabled ?? true,
                        googleApiKey: dbAiSettings.googleApiKey || profile.google_api_key || prev.googleApiKey,
                        aiModel: dbAiSettings.aiModel || prev.aiModel,
                        deepseekApiKey: dbAiSettings.deepseekApiKey || prev.deepseekApiKey,
                        deepseekModel: dbAiSettings.deepseekModel || prev.deepseekModel,
                        deepseekThinkingMode: dbAiSettings.deepseekThinkingMode ?? prev.deepseekThinkingMode,
                        ollamaUrl: dbAiSettings.ollamaUrl || prev.ollamaUrl,
                        ollamaModel: dbAiSettings.ollamaModel || prev.ollamaModel,
                        openAIApiKey: dbAiSettings.openAIApiKey || prev.openAIApiKey,
                        coachVoice: dbAiSettings.coachVoice || prev.coachVoice,
                        coachAiModel: dbAiSettings.coachAiModel || prev.coachAiModel,
                        coachApiKey: dbAiSettings.coachApiKey || prev.coachApiKey,
                        dailyStudyGoalMinutes: dbDailyGoal !== undefined ? Number(dbDailyGoal) : prev.dailyStudyGoalMinutes,
                        showFurigana: dbShowFurigana !== undefined ? Boolean(dbShowFurigana) : prev.showFurigana,
                        showRomaji: dbShowRomaji !== undefined ? Boolean(dbShowRomaji) : prev.showRomaji,
                    }));

                    setGamificationState({
                        totalXp: profile.total_xp || 0,
                        level: profile.level || 1,
                        currentStreak: profile.current_streak || 0,
                        lastActivityDate: profile.last_activity_date || null,
                    });
                }
            } catch (innerError) {
                console.error("Tarmoq xatosi", innerError);
            }

        } catch (error) {
            console.error("Ma'lumot yuklashda xato:", error);
        } finally {
            setLoading(false);
        }
    }, [syncGoogleEvents, setFlashcards, setTasks, setGoals, setWhiteboards, setEvents, setAppSettings, setGamificationState]);

    useEffect(() => {
        fetchData();
        const handleOnline = () => {
            fetchData();
        };
        window.addEventListener('online', handleOnline);
        return () => window.removeEventListener('online', handleOnline);
    }, [fetchData]);

    

    // Apply theme
    useEffect(() => {
        if (appSettings.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('study_planner_theme', appSettings.theme);
    }, [appSettings.theme]);



    useEffect(() => {
        if (appSettings.notificationsEnabled) {
            PushNotificationService.requestPermission().then(granted => {
                if (granted === 'granted') {
                    PushNotificationService.startInactivityTracker(10);
                }
            });
        }

        const interval = setInterval(() => {
            if (!appSettings.notificationsEnabled || Notification.permission !== 'granted') return;

            const now = new Date();
            sessions.forEach(session => {
                if (session.completed) return;
                const start = new Date(session.startTime);
                const diffMs = start.getTime() - now.getTime();
                const diffMins = diffMs / 60000;

                if (diffMins > 0 && diffMins <= 15) {
                    const key = `notif-session-${session.id}`;
                    if (!sessionStorage.getItem(key)) {
                        new Notification("Dars vaqti yaqinlashmoqda!", {
                            body: `Dars 15 daqiqa ichida boshlanadi.`,
                            icon: '/favicon.svg'
                        });
                        sessionStorage.setItem(key, 'true');
                    }
                }
            });

        }, 60000);

        return () => clearInterval(interval);
    }, [sessions, appSettings.notificationsEnabled]);


    // 2. Actions (Optimistic Updates + Supabase Sync) for other entities

    const addGoal = async (goalData: Partial<Goal>) => {
        const activeUserId = user?.id || 'local_user';
        const goalId = goalData.id || (generateUUID());
        const fullGoalData: Goal = {
            id: goalId,
            title: goalData.title || 'Adsiz Maqsad',
            description: goalData.description || '',
            deadline: goalData.deadline || new Date().toISOString(),
            progress: goalData.progress || 0,
            color: goalData.color || '#6366f1',
            priority: goalData.priority || 'medium',
            createdAt: new Date().toISOString(),
            completed: goalData.completed || false
        };

        setGoals(prev => [...prev.filter(g => g.id !== goalId), fullGoalData]);

        if (activeUserId !== 'local_user') {
            try {
                const dbPayload = {
                    id: goalId,
                    user_id: activeUserId,
                    title: fullGoalData.title,
                    description: fullGoalData.description,
                    deadline: fullGoalData.deadline,
                    target_date: fullGoalData.deadline ? fullGoalData.deadline.split('T')[0] : null,
                    progress: fullGoalData.progress,
                    color: fullGoalData.color,
                    priority: fullGoalData.priority,
                    completed: fullGoalData.completed
                };
                const { data } = await supabase.from('goals').upsert(dbPayload).select().maybeSingle();
                if (data) {
                    const mapped: Goal = {
                        id: data.id,
                        title: data.title,
                        description: data.description || '',
                        deadline: data.deadline || data.target_date || fullGoalData.deadline,
                        progress: typeof data.progress === 'number' ? data.progress : 0,
                        color: data.color || '#6366f1',
                        priority: data.priority || 'medium',
                        createdAt: data.created_at || fullGoalData.createdAt,
                        completed: data.completed || false
                    };
                    setGoals(prev => [...prev.filter(g => g.id !== goalId), mapped]);
                }
            } catch (e) {
                console.warn("[addGoal] DB sync error:", e);
            }
        }
        return fullGoalData;
    };

    const updateGoal = async (id: string, updates: Partial<Goal>) => {
        setGoals(prev => prev.map(g => g.id === id ? { ...g, ...updates } : g));

        const activeUserId = user?.id || 'local_user';
        if (activeUserId !== 'local_user') {
            const dbUpdates: any = { ...updates };
            if (updates.deadline) {
                dbUpdates.target_date = updates.deadline.split('T')[0];
            }
            await supabase.from('goals').update(dbUpdates).eq('id', id);
        }
    };

    const deleteGoal = async (id: string) => {
        setGoals(prev => prev.filter(g => g.id !== id));

        

        await supabase.from('goals').delete().eq('id', id);
    };

    // Task & XP logic moved to hooks, but other entity logic stays:

    // ===== FLASHCARD OPERATSIYALARI =====



    // ===== SUBJECT OPERATSIYALARI =====
    const addSubject = async (subjectData: Partial<Subject>) => {
        const activeUserId = user?.id || 'local_user';

        const tempId = subjectData.id || (generateUUID());
        const optimisticSubject: Subject = {
            id: tempId,
            name: subjectData.name || 'Yangi Fan',
            color: subjectData.color || '#6366f1',
            schedule: subjectData.schedule || [],
            teacherName: subjectData.teacherName,
            roomLocation: subjectData.roomLocation,
            description: subjectData.description,
            icon: subjectData.icon,
            isArchived: subjectData.isArchived || false
        };

        // Optimistic update - ALWAYS update state immediately so user sees the new subject!
        setSubjects(prev => {
            const filtered = prev.filter(s => s.id !== tempId);
            const updated = [...filtered, optimisticSubject];
            try {
                localStorage.setItem('study_planner_subjects_cache_' + activeUserId, JSON.stringify(updated));
            } catch (e) {}
            return updated;
        });

        if (activeUserId !== 'local_user') {
            const dbSubject: Record<string, any> = {
                id: tempId,
                user_id: activeUserId,
                name: subjectData.name || 'Yangi Fan',
                color: subjectData.color || '#6366f1',
                schedule: subjectData.schedule || [],
            };
            if (subjectData.teacherName) dbSubject.teacher_name = subjectData.teacherName;
            if (subjectData.roomLocation) dbSubject.room_location = subjectData.roomLocation;
            if (subjectData.description) dbSubject.description = subjectData.description;
            if (subjectData.icon) dbSubject.icon = subjectData.icon;
            if (subjectData.isArchived !== undefined) dbSubject.is_archived = subjectData.isArchived;

            try {
                let { data, error } = await supabase.from('subjects').insert(dbSubject).select().single();
                
                // Retry without optional columns if DB schema lacks them
                if (error && (error.code === '42703' || error.message?.includes('column'))) {
                    const minimalDbSubject = {
                        id: tempId,
                        user_id: activeUserId,
                        name: subjectData.name || 'Yangi Fan',
                        color: subjectData.color || '#6366f1',
                        schedule: subjectData.schedule || []
                    };
                    const retry = await supabase.from('subjects').insert(minimalDbSubject).select().single();
                    data = retry.data;
                    error = retry.error;
                }

                if (error && !error.message?.includes('Offline') && !error.message?.includes('Network')) {
                    console.warn('[addSubject] Supabase insert warning:', error.message);
                }

                const finalId = data?.id || tempId;
                const finalSubject: Subject = {
                    id: finalId,
                    name: data?.name || optimisticSubject.name,
                    color: data?.color || optimisticSubject.color,
                    schedule: data?.schedule || optimisticSubject.schedule,
                    teacherName: data?.teacher_name || optimisticSubject.teacherName,
                    roomLocation: data?.room_location || optimisticSubject.roomLocation,
                    description: data?.description || optimisticSubject.description,
                    icon: data?.icon || optimisticSubject.icon,
                    isArchived: data?.is_archived ?? optimisticSubject.isArchived
                };

                if (finalId !== tempId) {
                    setFlashcards(prev => {
                        const updated = prev.map(c => c.subjectId === tempId ? { ...c, subjectId: finalId } : c);
                        try {
                            localStorage.setItem('study_planner_flashcards_cache_' + activeUserId, JSON.stringify(updated));
                        } catch (e) {}
                        return updated;
                    });
                }

                setSubjects(prev => {
                    const filtered = prev.filter(s => s.id !== tempId && s.id !== finalId);
                    const updated = [...filtered, finalSubject];
                    try {
                        localStorage.setItem('study_planner_subjects_cache_' + activeUserId, JSON.stringify(updated));
                    } catch (e) {}
                    return updated;
                });

                return finalSubject;
            } catch (error: any) {
                if (error?.message && !error.message.includes('Offline') && !error.message.includes('Network')) {
                    console.warn("Failed to add subject DB insert, using optimistic subject:", error);
                }
                return optimisticSubject;
            }
        }

        return optimisticSubject;
    };

    const deleteSubject = async (id: string) => {
        const activeUserId = user?.id || 'local_user';
        setSubjects(prev => {
            const updated = prev.filter(s => s.id !== id);
            try {
                localStorage.setItem('study_planner_subjects_cache_' + activeUserId, JSON.stringify(updated));
            } catch (e) {}
            return updated;
        });

        if (activeUserId !== 'local_user') {
            const { error } = await supabase.from('subjects').delete().eq('id', id);
            if (error && !error.message?.includes('Offline') && !error.message?.includes('Network')) {
                console.warn("Delete subject warning:", error.message);
            }
        }
    };

    const updateSubject = async (id: string, updates: Partial<Subject>) => {
        const activeUserId = user?.id || 'local_user';
        setSubjects(prev => {
            const updated = prev.map(s => s.id === id ? { ...s, ...updates } : s);
            try {
                localStorage.setItem('study_planner_subjects_cache_' + activeUserId, JSON.stringify(updated));
            } catch (e) {}
            return updated;
        });

        if (activeUserId !== 'local_user') {
            const dbUpdates: Partial<DatabaseSubject> = {};
            if (updates.name) dbUpdates.name = updates.name;
            if (updates.color) dbUpdates.color = updates.color;
            if (updates.teacherName !== undefined) dbUpdates.teacher_name = updates.teacherName;
            if (updates.roomLocation !== undefined) dbUpdates.room_location = updates.roomLocation;
            if (updates.description !== undefined) dbUpdates.description = updates.description;
            if (updates.icon) dbUpdates.icon = updates.icon;
            if (updates.schedule) dbUpdates.schedule = updates.schedule;
            if (updates.isArchived !== undefined) dbUpdates.is_archived = updates.isArchived;

            const { error } = await supabase.from('subjects').update(dbUpdates).eq('id', id);
            if (error && !error.message?.includes('Offline') && !error.message?.includes('Network')) {
                console.warn("Update subject warning:", error.message);
            }
        }
    };

    // ===== NOTE OPERATSIYALARI =====
    const addNote = async (noteData: Partial<Note>) => {
        const activeUserId = user?.id || 'local_user';

        const noteId = noteData.id || (generateUUID());
        const dbNote = {
            id: noteId,
            user_id: activeUserId,
            subject_id: noteData.subjectId,
            title: noteData.title,
            content: noteData.content,
            attachments: noteData.attachments,
            is_pinned: noteData.isPinned || false
        };

        const newNote: Note = {
            id: noteId,
            subjectId: noteData.subjectId || '',
            title: noteData.title || '',
            content: noteData.content || '',
            attachments: noteData.attachments || [],
            isPinned: noteData.isPinned || false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        setNotes(prev => [...prev, newNote]);

        

        const { data } = await supabase.from('notes').insert(dbNote).select().single();
        if (data) {
            const returnedNote: Note = {
                id: data.id,
                subjectId: data.subject_id,
                title: data.title,
                content: data.content,
                attachments: data.attachments || [],
                isPinned: data.is_pinned || false,
                createdAt: data.created_at,
                updatedAt: data.updated_at
            };
            setNotes(prev => prev.map(n => n.id === noteId ? returnedNote : n));
            return returnedNote;
        }
        return null;
    };

    const updateNote = async (id: string, updates: Partial<Note>) => {
        const dbUpdates: Record<string, unknown> = { ...updates };
        if (updates.subjectId) {
            dbUpdates.subject_id = updates.subjectId;
            delete dbUpdates.subjectId;
        }
        if (updates.isPinned !== undefined) {
            dbUpdates.is_pinned = updates.isPinned;
            delete dbUpdates.isPinned;
        }

        setNotes(prev => prev.map(n => n.id === id ? { ...n, ...updates } : n));

        

        await supabase.from('notes').update(dbUpdates).eq('id', id);
    };

    const deleteNote = async (id: string) => {
        setNotes(prev => prev.filter(n => n.id !== id));

        

        await supabase.from('notes').delete().eq('id', id);
    };

    // ===== STUDY NOTES (KONSPEKTLAR) OPERATSIYALARI =====
    const addStudyNote = async (noteData: Partial<StudyNote>) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const noteId = noteData.id || (generateUUID());
        const dbNote = {
            id: noteId,
            user_id: user.id,
            subject_id: noteData.subjectId,
            title: noteData.title,
            content: noteData.content,
        };

        const newNote: StudyNote = {
            id: noteId,
            subjectId: noteData.subjectId || '',
            userId: user.id,
            title: noteData.title || '',
            content: noteData.content || '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        setStudyNotes(prev => [...prev, newNote]);

        

        const { data } = await supabase.from('study_notes').insert(dbNote).select().single();
        if (data) {
            const returnedNote: StudyNote = {
                id: data.id,
                subjectId: data.subject_id,
                userId: data.user_id,
                title: data.title,
                content: data.content,
                createdAt: data.created_at,
                updatedAt: data.updated_at
            };
            setStudyNotes(prev => prev.map(n => n.id === noteId ? returnedNote : n));
        }
    };

    const addStudyNotesBatch = async (notesData: Partial<StudyNote>[]): Promise<StudyNote[]> => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return [];

        const tempNotes = notesData.map(n => {
            const noteId = n.id || generateUUID();
            return {
                id: noteId,
                user_id: user.id,
                subject_id: n.subjectId,
                title: n.title,
                content: n.content
            };
        });

        const newLocalNotes: StudyNote[] = tempNotes.map(dbNote => ({
            id: dbNote.id,
            subjectId: dbNote.subject_id || '',
            userId: user.id,
            title: dbNote.title || '',
            content: dbNote.content || '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }));

        setStudyNotes(prev => [...newLocalNotes, ...prev]);

        try {
            const chunkSize = 100;
            const insertedNotes: StudyNote[] = [];

            for (let i = 0; i < tempNotes.length; i += chunkSize) {
                const chunk = tempNotes.slice(i, i + chunkSize);
                const { data, error } = await supabase
                    .from('study_notes')
                    .insert(chunk)
                    .select();

                if (error || !data) {
                    console.warn('[addStudyNotesBatch] DB insert chunk error:', error);
                    insertedNotes.push(...newLocalNotes.slice(i, i + chunkSize));
                } else {
                    insertedNotes.push(...(data as any[]).map(n => ({
                        id: n.id,
                        subjectId: n.subject_id,
                        userId: n.user_id,
                        title: n.title,
                        content: n.content,
                        createdAt: n.created_at,
                        updatedAt: n.updated_at
                    })));
                }
            }

            // Sync updated DB IDs with local state if necessary
            setStudyNotes(prev => {
                const next = [...prev];
                insertedNotes.forEach(inserted => {
                    const idx = next.findIndex(n => n.id === inserted.id);
                    if (idx !== -1) {
                        next[idx] = inserted;
                    }
                });
                return next;
            });

            return insertedNotes;
        } catch (err) {
            console.error('[addStudyNotesBatch] Exception:', err);
            return newLocalNotes;
        }
    };

    const updateStudyNote = async (id: string, updates: Partial<StudyNote>) => {
        const dbUpdates: import('../types/supabase-types').DatabaseStudyNoteUpdate = {};

        if (updates.subjectId) dbUpdates.subject_id = updates.subjectId;
        if (updates.title) dbUpdates.title = updates.title;
        if (updates.content) dbUpdates.content = updates.content;
        dbUpdates.updated_at = new Date().toISOString();

        setStudyNotes(prev => prev.map(n => n.id === id ? { ...n, ...updates } : n));

        

        await supabase.from('study_notes').update(dbUpdates).eq('id', id);
    };

    const deleteStudyNote = async (id: string) => {
        setStudyNotes(prev => prev.filter(n => n.id !== id));

        

        await supabase.from('study_notes').delete().eq('id', id);
    };

    // ===== SESSION OPERATSIYALARI =====
    const addSession = async (sessionData: Partial<StudySession>) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            return;
        }

        const sessionId = sessionData.id || (generateUUID());
        const supabaseData: DatabaseSession = {
            id: sessionId,
            user_id: user.id,
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

        setSessions(prev => [...prev, mappedSession]);

        

        const { data, error } = await supabase.from('study_sessions').insert(supabaseData).select().single();

        if (error) {
            console.error("Session qo'shishda xato:", error);
            alert("Dars sessiyasini saqlashda xato yuz berdi");
            return;
        }

        if (data) {
            setSessions(prev => [...prev, {
                ...data,
                subjectId: data.subject_id,
                startTime: data.start_time,
                moodBefore: data.mood_before,
                moodAfter: data.mood_after
            } as StudySession]);
            awardXP(sessionData.type === 'focus' ? 10 : 2); // XP reward
        }
    };

    const addCoachSession = useCallback(async (session: Partial<CoachSession>) => {
        if (!user) return;

        const dbCoachSession = {
            user_id: user.id,
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
            awardXP(15);
        }
    }, [user, awardXP]);

    // ===== UPDATE SETTINGS (Combined) =====
    const updateSettings = async (updates: Partial<Settings>) => {
        // 1. Instant local DOM and state update
        if (updates.theme !== undefined) {
            localStorage.setItem('study_planner_theme', updates.theme);
            if (updates.theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }

        // Separate gamification updates from app settings
        if (updates.totalXp !== undefined || updates.level !== undefined) {
            setGamificationState(prev => {
                const newXp = updates.totalXp ?? prev.totalXp;
                const newStreak = updates.currentStreak ?? prev.currentStreak;
                return {
                    ...prev,
                    totalXp: newXp,
                    level: updates.level ?? prev.level,
                    currentStreak: newStreak,
                    lastActivityDate: updates.lastActivityDate ?? prev.lastActivityDate
                };
            });
        }

        if (updates.theme !== undefined || updates.notificationsEnabled !== undefined || updates.googleApiKey !== undefined || updates.aiModel !== undefined || updates.deepseekApiKey !== undefined || updates.deepseekModel !== undefined || updates.deepseekThinkingMode !== undefined || updates.ollamaUrl !== undefined || updates.ollamaModel !== undefined || updates.dailyStudyGoalMinutes !== undefined || updates.openAIApiKey !== undefined || updates.coachVoice !== undefined || updates.coachAiModel !== undefined || updates.coachApiKey !== undefined || updates.showFurigana !== undefined || updates.showRomaji !== undefined) {
            setAppSettings(prev => {
                const newState = {
                    ...prev,
                    theme: updates.theme !== undefined ? updates.theme : prev.theme,
                    notificationsEnabled: updates.notificationsEnabled !== undefined ? updates.notificationsEnabled : prev.notificationsEnabled,
                    googleApiKey: updates.googleApiKey !== undefined ? updates.googleApiKey : prev.googleApiKey,
                    aiModel: updates.aiModel !== undefined ? updates.aiModel : prev.aiModel,
                    deepseekApiKey: updates.deepseekApiKey !== undefined ? updates.deepseekApiKey : prev.deepseekApiKey,
                    deepseekModel: updates.deepseekModel !== undefined ? (updates.deepseekModel as any) : prev.deepseekModel,
                    deepseekThinkingMode: updates.deepseekThinkingMode !== undefined ? updates.deepseekThinkingMode : prev.deepseekThinkingMode,
                    ollamaUrl: updates.ollamaUrl !== undefined ? updates.ollamaUrl : prev.ollamaUrl,
                    ollamaModel: updates.ollamaModel !== undefined ? updates.ollamaModel : prev.ollamaModel,
                    dailyStudyGoalMinutes: updates.dailyStudyGoalMinutes !== undefined ? updates.dailyStudyGoalMinutes : prev.dailyStudyGoalMinutes,
                    openAIApiKey: updates.openAIApiKey !== undefined ? updates.openAIApiKey : prev.openAIApiKey,
                    coachVoice: updates.coachVoice !== undefined ? updates.coachVoice : prev.coachVoice,
                    coachAiModel: updates.coachAiModel !== undefined ? updates.coachAiModel : prev.coachAiModel,
                    coachApiKey: updates.coachApiKey !== undefined ? updates.coachApiKey : prev.coachApiKey,
                    showFurigana: updates.showFurigana !== undefined ? updates.showFurigana : prev.showFurigana,
                    showRomaji: updates.showRomaji !== undefined ? updates.showRomaji : prev.showRomaji,
                };
                
                // Save AI settings to localStorage
                localStorage.setItem('study_planner_ai_settings', JSON.stringify({
                    googleApiKey: newState.googleApiKey,
                    aiModel: newState.aiModel,
                    deepseekApiKey: newState.deepseekApiKey,
                    deepseekModel: newState.deepseekModel,
                    deepseekThinkingMode: newState.deepseekThinkingMode,
                    ollamaUrl: newState.ollamaUrl,
                    ollamaModel: newState.ollamaModel,
                    openAIApiKey: newState.openAIApiKey,
                    coachVoice: newState.coachVoice,
                    coachAiModel: newState.coachAiModel,
                    coachApiKey: newState.coachApiKey
                }));

                // Save Goal to localStorage
                localStorage.setItem('study_planner_daily_goal', newState.dailyStudyGoalMinutes.toString());
                // Save Furigana/Romaji prefs
                localStorage.setItem('study_planner_show_furigana', String(newState.showFurigana));
                localStorage.setItem('study_planner_show_romaji', String(newState.showRomaji));
                
                return newState;
            });
        }

        // 2. Persist to DB using UPDATE to profiles table
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { error } = await supabase.from('profiles').update({
            theme: updates.theme !== undefined ? updates.theme : appSettings.theme,
            notifications_enabled: updates.notificationsEnabled !== undefined ? updates.notificationsEnabled : appSettings.notificationsEnabled,
            google_api_key: updates.googleApiKey !== undefined ? updates.googleApiKey : appSettings.googleApiKey,
            updated_at: new Date().toISOString()
        }).eq('id', user.id);

        if (error) {
            console.error('Error updating profiles table:', error);
        }

        // Persist complete AI settings and user preferences to Auth user_metadata (DB)
        try {
            await supabase.auth.updateUser({
                data: {
                    ai_settings: {
                        googleApiKey: updates.googleApiKey !== undefined ? updates.googleApiKey : appSettings.googleApiKey,
                        aiModel: updates.aiModel !== undefined ? updates.aiModel : appSettings.aiModel,
                        deepseekApiKey: updates.deepseekApiKey !== undefined ? updates.deepseekApiKey : appSettings.deepseekApiKey,
                        deepseekModel: updates.deepseekModel !== undefined ? updates.deepseekModel : appSettings.deepseekModel,
                        deepseekThinkingMode: updates.deepseekThinkingMode !== undefined ? updates.deepseekThinkingMode : appSettings.deepseekThinkingMode,
                        ollamaUrl: updates.ollamaUrl !== undefined ? updates.ollamaUrl : appSettings.ollamaUrl,
                        ollamaModel: updates.ollamaModel !== undefined ? updates.ollamaModel : appSettings.ollamaModel,
                        openAIApiKey: updates.openAIApiKey !== undefined ? updates.openAIApiKey : appSettings.openAIApiKey,
                        coachVoice: updates.coachVoice !== undefined ? updates.coachVoice : appSettings.coachVoice,
                        coachAiModel: updates.coachAiModel !== undefined ? updates.coachAiModel : appSettings.coachAiModel,
                        coachApiKey: updates.coachApiKey !== undefined ? updates.coachApiKey : appSettings.coachApiKey
                    },
                    daily_goal: updates.dailyStudyGoalMinutes !== undefined ? updates.dailyStudyGoalMinutes : appSettings.dailyStudyGoalMinutes,
                    show_furigana: updates.showFurigana !== undefined ? updates.showFurigana : appSettings.showFurigana,
                    show_romaji: updates.showRomaji !== undefined ? updates.showRomaji : appSettings.showRomaji
                }
            });
        } catch (authMetaErr) {
            console.error('Error syncing user_metadata to Supabase Auth DB:', authMetaErr);
        }
    };

    const addWhiteboard = async (subjectId: string, title: string) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            return null;
        }

        const { data, error } = await supabase.from('whiteboards').insert({
            user_id: user.id,
            subject_id: subjectId,
            title: title,
            updated_at: new Date().toISOString()
        }).select('id, subject_id, user_id, title, updated_at').single();

        if (error) {
            console.error("addWhiteboard: Supabase error", error);
            alert(`Xatolik: Doska yaratib bo'lmadi. Iltimos, Supabase SQL Editor orqali 'create_whiteboards_table.sql' skriptini ishga tushiring.\n\nXato: ${error.message}`);
            return null;
        }

        if (data) {
            const newWb: WhiteboardMetadata = {
                id: data.id,
                subjectId: data.subject_id,
                userId: data.user_id,
                title: data.title,
                updatedAt: data.updated_at
            };
            setWhiteboards([...whiteboards, newWb]);
            return data.id;
        }
        return null;
    };

    const deleteWhiteboard = async (id: string) => {
        setWhiteboards(prev => prev.filter(w => w.id !== id));
        await supabase.from('whiteboards').delete().eq('id', id);
    };

    const updateWhiteboardTitle = async (id: string, title: string) => {
        setWhiteboards(whiteboards.map(w => w.id === id ? { ...w, title } : w));
        await supabase.from('whiteboards').update({ title }).eq('id', id);
    };

    // ===== EVENT OPERATSIYALARI =====
    const addEvent = async (eventData: Partial<Event>) => {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session?.user) return null;

        const dbEvent: Omit<DatabaseEvent, 'id' | 'created_at' | 'updated_at'> & { google_event_id?: string } = {
            user_id: session.user.id,
            title: eventData.title || '',
            description: eventData.description,
            event_type: (eventData.eventType === 'google' ? 'personal' : (eventData.eventType || 'personal')) as 'jdu' | 'career' | 'jlpt' | 'personal',
            event_date: eventData.eventDate || '',
            notify_before_minutes: eventData.notifyBeforeMinutes || 60,
            repetition_type: (eventData.repetitionType || 'none') as 'none' | 'daily' | 'weekly' | 'monthly',
            repetition_end_date: eventData.repetitionEndDate,
            repetition_days: eventData.repetitionDays,
            is_notified: false
        };

        // Google Calendar Sync
        if (session.provider_token && eventData.eventDate) {
            const googleEventId = await GoogleCalendarService.createEvent(session.provider_token, eventData);
            if (googleEventId) {
                dbEvent.google_event_id = googleEventId;
            }
        }

        const { data, error } = await supabase.from('events').insert(dbEvent).select().single();

        if (error) {
            console.error("addEvent error:", error);
            return null;
        }

        if (data) {
            const newEvent: Event = {
                id: data.id,
                userId: data.user_id,
                title: data.title,
                description: data.description,
                eventType: data.event_type,
                eventDate: data.event_date,
                notifyBeforeMinutes: data.notify_before_minutes,
                isNotified: data.is_notified,
                repetitionType: data.repetition_type || 'none',
                repetitionEndDate: data.repetition_end_date,
                repetitionDays: data.repetition_days,
                googleEventId: data.google_event_id,
                createdAt: data.created_at,
                updatedAt: data.updated_at
            };
            setEvents([...events, newEvent]);
            return newEvent;
        }
        return null;
    };

    const updateEvent = useCallback(async (id: string, updates: Partial<Event>) => {
        const { data: { session } } = await supabase.auth.getSession();
        
        // Find current event to get googleEventId
        const currentEvent = events.find(e => e.id === id);
        if (currentEvent?.googleEventId && session?.provider_token) {
            await GoogleCalendarService.updateEvent(session.provider_token, currentEvent.googleEventId, updates);
        }

        // Construct dbUpdates with explicit mapping to avoid 'any'
        const dbUpdates: DatabaseEventUpdate = {};

        if (updates.title) dbUpdates.title = updates.title;
        if (updates.description) dbUpdates.description = updates.description;
        if (updates.eventType) dbUpdates.event_type = updates.eventType;
        if (updates.eventDate) dbUpdates.event_date = updates.eventDate;
        if (updates.notifyBeforeMinutes !== undefined) dbUpdates.notify_before_minutes = updates.notifyBeforeMinutes;
        if (updates.isNotified !== undefined) dbUpdates.is_notified = updates.isNotified;
        if (updates.repetitionType) dbUpdates.repetition_type = updates.repetitionType;
        if (updates.repetitionEndDate) dbUpdates.repetition_end_date = updates.repetitionEndDate;
        if (updates.repetitionDays) dbUpdates.repetition_days = updates.repetitionDays;

        await supabase.from('events').update(dbUpdates).eq('id', id);
        setEvents(prev => prev.map(e => e.id === id ? { ...e, ...updates } : e));
    }, [events]);

    const updateEventRef = useRef(updateEvent);
    useEffect(() => {
        updateEventRef.current = updateEvent;
    }, [updateEvent]);

    useEffect(() => {
        if (appSettings.notificationsEnabled && events.length > 0) {
            PushNotificationService.requestPermission().then(granted => {
                if (granted === 'granted') {
                    PushNotificationService.startMonitoring(events, (eventId) => {
                        updateEventRef.current(eventId, { isNotified: true });
                    });
                }
            });
        }
        return () => {
            PushNotificationService.stopMonitoring();
        };
    }, [events, appSettings.notificationsEnabled]);

    const deleteEvent = async (id: string) => {
        const { data: { session } } = await supabase.auth.getSession();
        
        // Find current event to get googleEventId
        const currentEvent = events.find(e => e.id === id);
        if (currentEvent?.googleEventId && session?.provider_token) {
            await GoogleCalendarService.deleteEvent(session.provider_token, currentEvent.googleEventId);
        }

        setEvents(prev => prev.filter(e => e.id !== id));
        await supabase.from('events').delete().eq('id', id);
    };

    return (
        <StudyPlannerContext.Provider value={{
            goals, tasks, subjects, sessions, coachSessions,
            addGoal, updateGoal, deleteGoal,
            addTask, addTasksBatch, toggleTask, deleteTask, restoreTask, updateTask, updateTaskStatus,
            addSubject, updateSubject, deleteSubject,
            addSession, addCoachSession, awardXP, resetXP,
            notes, addNote, updateNote, deleteNote,
            studyNotes, addStudyNote, addStudyNotesBatch, updateStudyNote, deleteStudyNote,
            flashcards, addFlashcard, addFlashcardsBatch, updateFlashcard, deleteFlashcard, restoreFlashcard, reviewFlashcard, importFlashcards,
            whiteboards, addWhiteboard, deleteWhiteboard, updateWhiteboardTitle,
            events, addEvent, updateEvent, deleteEvent,
            googleEvents, syncGoogleEvents,
            refreshData: fetchData,
            settings, updateSettings, getRank,
            loading, user
        }}>
            {children}
        </StudyPlannerContext.Provider>
    );
};

 
export const useStudyData = () => {
    const context = useContext(StudyPlannerContext);
    if (!context) throw new Error("useStudyData must be used within StudyPlannerProvider");
    return context;
};
