import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { supabase } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';
import type { Flashcard, Goal, Note, StudySession, Subject, Task, WhiteboardMetadata, StudyNote, Event, CoachSession } from '../types';
import { useGamification } from '../hooks/useGamification';
import { useTasks } from '../hooks/useTasks';
import { useFlashcards } from '../hooks/useFlashcards';
import { useSubjects } from '../hooks/useSubjects';
import { useGoals } from '../hooks/useGoals';
import { useNotes } from '../hooks/useNotes';
import { useStudyNotes } from '../hooks/useStudyNotes';
import { useSessions } from '../hooks/useSessions';
import { useWhiteboards } from '../hooks/useWhiteboards';
import { useEvents } from '../hooks/useEvents';
import { TaskService } from '../services/TaskService';
import { FlashcardService } from '../services/FlashcardService';
import { GoogleCalendarEvent } from '../services/GoogleCalendarService';
import { DatabaseSubject, DatabaseSession, DatabaseNote, DatabaseStudyNote, DatabaseWhiteboard, DatabaseEvent, DatabaseProfile } from '../types/supabase-types';
import { isUuid } from '../utils/uuid';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';
import { LearningTrackStorage } from '../utils/storage/LearningTrackStorage';
import { MasteryEngine } from '../services/MasteryEngine';
import { DiagnosticService } from '../services/DiagnosticService';
import { LessonService } from '../services/LessonService';
import { ErrorVaultService } from '../services/ErrorVaultService';
import { DataMigrationService } from '../services/DataMigrationService';
import { isSuperAdmin } from '../utils/admin';


export interface Settings {
    theme: 'light' | 'dark';
    notificationsEnabled: boolean;
    totalXp: number;
    level: number;
    currentStreak: number;
    lastActivityDate: string | null;
    aiModel?: 'deepseek';
    deepseekModel?: 'deepseek-chat' | 'deepseek-reasoner';
    deepseekThinkingMode?: boolean;
    dailyStudyGoalMinutes: number;
    coachAiModel?: 'deepseek';
    showFurigana: boolean;
    showRomaji: boolean;
}

export interface StudyPlannerContextType {
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

    // Task operations
    addTask: (task: Partial<Task>) => Promise<void>;
    addTasksBatch: (tasks: Partial<Task>[]) => Promise<Task[]>;
    updateTask: (id: string, updates: Partial<Task>) => Promise<void>;
    deleteTask: (id: string, permanent?: boolean) => Promise<void>;
    restoreTask: (id: string) => Promise<void>;
    toggleTask: (id: string) => Promise<void>;
    updateTaskStatus: (id: string, status: string) => Promise<void>;

    // Flashcard operations
    addFlashcard: (card: Partial<Flashcard>) => Promise<Flashcard | null>;
    addFlashcardsBatch: (cards: Partial<Flashcard>[]) => Promise<Flashcard[]>;
    updateFlashcard: (id: string, updates: Partial<Flashcard>) => Promise<void>;
    deleteFlashcard: (id: string, permanent?: boolean) => Promise<void>;
    restoreFlashcard: (id: string) => Promise<void>;
    reviewFlashcard: (id: string, rating: number, card?: Flashcard) => Promise<void>;
    importFlashcards: (subjectId: string, cards: { front: string; back: string; example?: string }[]) => Promise<boolean>;

    // Subject operations
    addSubject: (subject: Partial<Subject>) => Promise<Subject | null>;
    updateSubject: (id: string, updates: Partial<Subject>) => Promise<void>;
    deleteSubject: (id: string) => Promise<void>;

    // Goal operations
    addGoal: (goal: Partial<Goal>) => Promise<Goal | null>;
    updateGoal: (id: string, updates: Partial<Goal>) => Promise<void>;
    deleteGoal: (id: string) => Promise<void>;

    // Note operations
    addNote: (note: Partial<Note>) => Promise<Note | null>;
    updateNote: (id: string, updates: Partial<Note>) => Promise<void>;
    deleteNote: (id: string) => Promise<void>;

    // Study Note (Konspekt) operations
    addStudyNote: (note: Partial<StudyNote>) => Promise<void>;
    addStudyNotesBatch: (notes: Partial<StudyNote>[]) => Promise<StudyNote[]>;
    updateStudyNote: (id: string, updates: Partial<StudyNote>) => Promise<void>;
    deleteStudyNote: (id: string) => Promise<void>;

    // Whiteboard operations
    addWhiteboard: (subjectId: string, title: string) => Promise<string | null>;
    deleteWhiteboard: (id: string) => Promise<void>;
    updateWhiteboardTitle: (id: string, title: string) => Promise<void>;

    // Event operations
    addEvent: (event: Partial<Event>) => Promise<Event | null>;
    updateEvent: (id: string, updates: Partial<Event>) => Promise<void>;
    deleteEvent: (id: string) => Promise<void>;
    syncGoogleEvents: () => Promise<void>;

    // Session operations
    addSession: (session: Partial<StudySession>) => Promise<void>;
    addCoachSession: (session: Partial<CoachSession>) => Promise<void>;

    // Learning Focus
    primaryLanguage: 'en' | 'ja';
    enabledLanguages: ('en' | 'ja')[];
    targetLevel: string;
    targetGoal: string;
    setPrimaryFocus: (lang: 'en' | 'ja', level?: string, goal?: string) => Promise<void>;
    addSecondaryLanguage: (lang: 'en' | 'ja') => Promise<void>;
    removeSecondaryLanguage: (lang: 'en' | 'ja') => Promise<void>;

    // Data & Settings
    refreshData: () => Promise<void>;
    updateSettings: (updates: Partial<Settings>) => Promise<void>;
    awardXP: (amount: number) => Promise<void>;
    resetXP: () => Promise<void>;
    getRank: (level: number) => string;
}

const StudyPlannerContext = createContext<StudyPlannerContextType | undefined>(undefined);

// ===== PROVIDER =====
const INITIAL_GAMIFICATION_STATE = {
    totalXp: 0,
    level: 1,
    currentStreak: 0,
    lastActivityDate: null
};

export const StudyPlannerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // 1. Gamification Hook
    const {
        gameState,
        setGamificationState,
        awardXP,
        resetXP,
        getRank
    } = useGamification(INITIAL_GAMIFICATION_STATE);

    // 2. Tasks & Flashcards Hooks
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

    // 3. Extracted Domain Hooks
    const { subjects, setSubjects, addSubject, updateSubject, deleteSubject } = useSubjects(setFlashcards);
    const { goals, setGoals, addGoal, updateGoal, deleteGoal } = useGoals();
    const { notes, setNotes, addNote, updateNote, deleteNote } = useNotes();
    const { studyNotes, setStudyNotes, addStudyNote, addStudyNotesBatch, updateStudyNote, deleteStudyNote } = useStudyNotes();
    const { sessions, setSessions, coachSessions, setCoachSessions, addSession, addCoachSession } = useSessions(awardXP);
    const { whiteboards, setWhiteboards, addWhiteboard, deleteWhiteboard, updateWhiteboardTitle } = useWhiteboards();

    // 4. App Settings State
    const [appSettings, setAppSettings] = useState<{
        theme: 'light' | 'dark';
        notificationsEnabled: boolean;
        aiModel?: 'deepseek';
        deepseekModel?: 'deepseek-chat' | 'deepseek-reasoner';
        deepseekThinkingMode?: boolean;
        dailyStudyGoalMinutes: number;
        coachAiModel?: 'deepseek';
        showFurigana: boolean;
        showRomaji: boolean;
    }>(() => {
        const savedAiSettings = safeLocalStorage.getJSON<Record<string, any>>('study_planner_ai_settings', {});
        const savedGoal = safeLocalStorage.getItem('study_planner_daily_goal');
        
        let dsModel: 'deepseek-chat' | 'deepseek-reasoner' = 'deepseek-chat';
        if (savedAiSettings.deepseekModel) {
            if (savedAiSettings.deepseekModel === 'deepseek-reasoner' || savedAiSettings.deepseekModel === 'deepseek-v4-pro') {
                dsModel = 'deepseek-reasoner';
            } else {
                dsModel = 'deepseek-chat';
            }
        }

        return {
            theme: 'dark',
            notificationsEnabled: true,
            aiModel: 'deepseek',
            deepseekModel: dsModel,
            deepseekThinkingMode: Boolean(savedAiSettings.deepseekThinkingMode),
            dailyStudyGoalMinutes: savedGoal ? parseInt(savedGoal, 10) : 240,
            coachAiModel: 'deepseek',
            showFurigana: safeLocalStorage.getItem('study_planner_show_furigana') !== 'false',
            showRomaji: safeLocalStorage.getItem('study_planner_show_romaji') === 'true',
        };
    });

    // 5. Events Hook
    const {
        events,
        setEvents,
        googleEvents,
        addEvent,
        updateEvent,
        deleteEvent,
        syncGoogleEvents
    } = useEvents(appSettings.notificationsEnabled);

    const [loading, setLoading] = useState<boolean>(() => {
        // Only show loading on cold start if there is absolutely no cached user
        const cachedUser = safeLocalStorage.getJSON<User | null>('study_planner_user_cache', null);
        return !cachedUser;
    });
    const [user, setUser] = useState<User | null>(() => {
        return safeLocalStorage.getJSON<User | null>('study_planner_user_cache', null);
    });

    // Learning Focus State - Defaults to 100% Japanese ('ja') for all public users
    const [primaryLanguage, setPrimaryLanguage] = useState<'en' | 'ja'>(() => {
        const cachedUser = safeLocalStorage.getJSON<User | null>('study_planner_user_cache', null);
        const email = cachedUser?.email || (typeof window !== 'undefined' ? localStorage.getItem('study_planner_user_email') : null);
        if (!isSuperAdmin(email)) {
            safeLocalStorage.setItem('study_planner_primary_language', 'ja');
            safeLocalStorage.setItem('study_planner_study_track', 'ja');
            return 'ja';
        }
        const saved = safeLocalStorage.getItem('study_planner_primary_language') || safeLocalStorage.getItem('study_planner_study_track');
        return (saved === 'ja' || saved === 'en') ? saved : 'ja';
    });

    const [enabledLanguages, setEnabledLanguages] = useState<('en' | 'ja')[]>(() => {
        const cachedUser = safeLocalStorage.getJSON<User | null>('study_planner_user_cache', null);
        const email = cachedUser?.email || (typeof window !== 'undefined' ? localStorage.getItem('study_planner_user_email') : null);
        if (!isSuperAdmin(email)) {
            return ['ja'];
        }
        const saved = safeLocalStorage.getJSON<('en' | 'ja')[] | null>('study_planner_enabled_languages', null);
        if (Array.isArray(saved) && saved.length > 0) return saved;
        return [primaryLanguage];
    });

    const [targetLevel, setTargetLevel] = useState<string>(() => {
        return LearningTrackStorage.getTargetLevel(primaryLanguage);
    });

    const [targetGoal, setTargetGoal] = useState<string>(() => {
        return LearningTrackStorage.getTargetGoal(primaryLanguage);
    });

    // Enforce 100% Japanese track for non-super-admins
    useEffect(() => {
        const activeEmail = user?.email || (typeof window !== 'undefined' ? localStorage.getItem('study_planner_user_email') : null);
        if (!isSuperAdmin(activeEmail)) {
            if (primaryLanguage !== 'ja') {
                setPrimaryLanguage('ja');
                safeLocalStorage.setItem('study_planner_primary_language', 'ja');
                safeLocalStorage.setItem('study_planner_study_track', 'ja');
            }
            setEnabledLanguages(['ja']);
            const currentJaTarget = LearningTrackStorage.getTargetLevel('ja');
            if (targetLevel !== currentJaTarget) {
                setTargetLevel(currentJaTarget);
            }
            const currentJaGoal = LearningTrackStorage.getTargetGoal('ja');
            if (targetGoal !== currentJaGoal) {
                setTargetGoal(currentJaGoal);
            }
        }
    }, [user?.email, primaryLanguage, targetLevel, targetGoal]);

    // Combined settings for consumers
    const settings: Settings = {
        ...appSettings,
        ...gameState
    };

    // Global Data Fetcher and Synchronizer
    const fetchData = useCallback(async () => {
        // Non-blocking background revalidation (Stale-While-Revalidate)
        try {
            if (typeof navigator !== 'undefined' && !navigator.onLine) {
                const localSession = safeLocalStorage.getJSON<User | null>('study_planner_user_cache', null);
                if (localSession) {
                    setUser(localSession);
                }
                setLoading(false);
                return;
            }

            let currentUser: any = null;
            let isAuthenticated = false;

            if (typeof supabase?.auth?.getSession === 'function') {
                try {
                    const { data: sessionData } = await supabase.auth.getSession();
                    if (sessionData?.session?.user) {
                        currentUser = sessionData.session.user;
                        isAuthenticated = Boolean(sessionData.session.access_token);
                    }
                } catch (e) {
                    console.debug("[StudyPlannerContext] Auth getSession exception:", e);
                }
            }

            if (!currentUser) {
                const localCached = safeLocalStorage.getJSON<User | null>('study_planner_user_cache', null);
                if (localCached && localCached.id && isUuid(localCached.id)) {
                    currentUser = localCached;
                }
            }

            if (!currentUser) {
                // If completely unauthenticated and no cache, set loading to false and return
                setLoading(false);
                return;
            }

            safeLocalStorage.setJSON('study_planner_user_cache', currentUser);
            if (currentUser.email) {
                safeLocalStorage.setItem('study_planner_user_email', currentUser.email);
            }
            setUser(currentUser);
            if (currentUser && currentUser.user_metadata) {
                const meta = currentUser.user_metadata;
                if (meta.current_level_en) LearningTrackStorage.setCurrentLevel('en', meta.current_level_en);
                if (meta.current_level_ja) LearningTrackStorage.setCurrentLevel('ja', meta.current_level_ja);
                if (meta.target_level_en) LearningTrackStorage.setTargetLevel('en', meta.target_level_en);
                if (meta.target_level_ja) LearningTrackStorage.setTargetLevel('ja', meta.target_level_ja);
                if (meta.target_goal_en) LearningTrackStorage.setTargetGoal('en', meta.target_goal_en);
                if (meta.target_goal_ja) LearningTrackStorage.setTargetGoal('ja', meta.target_goal_ja);
            }

            // Non-blocking background syncs & automatic LocalStorage to DB migration
            // (Only execute when user has an active authenticated session to respect RLS)
            if (isAuthenticated && currentUser.id && isUuid(currentUser.id)) {
                setTimeout(async () => {
                    try {
                        syncGoogleEvents();
                        await DataMigrationService.migrateAllLocalDataToDB(currentUser.id).catch(() => {});
                        await MasteryEngine.syncEvidenceFromDB(currentUser.id, 'en').catch(() => {});
                        await MasteryEngine.syncEvidenceFromDB(currentUser.id, 'ja').catch(() => {});
                        await DiagnosticService.syncDiagnosticFromDB(currentUser.id, 'en').catch(() => {});
                        await DiagnosticService.syncDiagnosticFromDB(currentUser.id, 'ja').catch(() => {});
                        await LessonService.syncLessonProgressFromDB(currentUser.id, 'en').catch(() => {});
                        await LessonService.syncLessonProgressFromDB(currentUser.id, 'ja').catch(() => {});
                        await ErrorVaultService.syncFromDB().catch(() => {});
                    } catch (bgErr) {
                        console.debug('[StudyPlannerContext] Background sync notice:', bgErr);
                    }
                }, 1500);
            }

            // Staggered fetch in 2 smooth batches to prevent HTTP/2 connection resets
            try {
                // Batch 1: Core learning data
                const [tasksSettled, flashcardsSettled, subjectsSettled] = await Promise.allSettled([
                    TaskService.fetchTasks(currentUser.id),
                    FlashcardService.fetchFlashcards(currentUser.id),
                    supabase.from('subjects').select('*').eq('user_id', currentUser.id),
                ]);

                if (tasksSettled.status === 'fulfilled' && tasksSettled.value) {
                    setTasks(tasksSettled.value);
                }
                if (flashcardsSettled.status === 'fulfilled' && flashcardsSettled.value) {
                    setFlashcards(flashcardsSettled.value);
                }

                // Batch 2: Secondary workspace data (staggered by 150ms)
                await new Promise(r => setTimeout(r, 150));

                const [
                    goalsSettled,
                    notesSettled,
                    sessionsSettled,
                    studyNotesSettled,
                    whiteboardsSettled,
                    eventsSettled,
                    profileSettled,
                    coachSessionsSettled,
                    speakingSessionsSettled,
                    aiCoachSessionsSettled
                ] = await Promise.allSettled([
                    supabase.from('goals').select('*').eq('user_id', currentUser.id),
                    supabase.from('notes').select('*').eq('user_id', currentUser.id),
                    supabase.from('study_sessions').select('*').eq('user_id', currentUser.id),
                    supabase.from('study_notes').select('*').eq('user_id', currentUser.id),
                    supabase.from('whiteboards').select('id, subject_id, user_id, title, updated_at').eq('user_id', currentUser.id),
                    supabase.from('events').select('*').eq('user_id', currentUser.id),
                    supabase.from('profiles').select('*').eq('id', currentUser.id).limit(1),
                    supabase.from('speaking_coach_sessions').select('*').eq('user_id', currentUser.id).order('created_at', { ascending: false }),
                    supabase.from('speaking_sessions').select('*').eq('user_id', currentUser.id).order('created_at', { ascending: false }),
                    supabase.from('ai_coach_sessions').select('*').eq('user_id', currentUser.id).order('created_at', { ascending: false }),
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
                const speakingSessionsRes = speakingSessionsSettled.status === 'fulfilled' ? speakingSessionsSettled.value : null;
                const aiCoachSessionsRes = aiCoachSessionsSettled.status === 'fulfilled' ? aiCoachSessionsSettled.value : null;

                // Subjects sync
                let localCachedSubs: Subject[] = [];
                if (currentUser?.id) {
                    localCachedSubs = safeLocalStorage.getJSON<Subject[]>('study_planner_subjects_cache_' + currentUser.id, []);
                }
                if (localCachedSubs.length === 0) {
                    localCachedSubs = safeLocalStorage.getJSON<Subject[]>('study_planner_subjects_cache', []);
                }

                let mappedSubjects: Subject[] = [];
                if (subjectsRes?.data && Array.isArray(subjectsRes.data)) {
                    mappedSubjects = subjectsRes.data.map((s: DatabaseSubject) => ({
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
                }

                const dbSubjectIds = new Set(mappedSubjects.map(s => s.id));
                const uniqueLocal = localCachedSubs.filter(s => !dbSubjectIds.has(s.id));
                const mergedSubjects = [...mappedSubjects, ...uniqueLocal];
                setSubjects(mergedSubjects);

                if (currentUser?.id) {
                    safeLocalStorage.setJSON('study_planner_subjects_cache_' + currentUser.id, mergedSubjects);
                }
                safeLocalStorage.setJSON('study_planner_subjects_cache', mergedSubjects);

                if (uniqueLocal.length > 0 && mappedSubjects.length > 0 && currentUser?.id) {
                    const dbPayload = uniqueLocal
                        .filter(s => isUuid(s.id))
                        .map(s => ({
                            id: s.id,
                            user_id: currentUser.id,
                            name: s.name,
                            color: s.color,
                            icon: s.icon,
                            description: s.description || null,
                            is_archived: s.isArchived || false
                        }));
                    if (dbPayload.length > 0) {
                        supabase.from('subjects').upsert(dbPayload).then(() => {});
                    }
                }

                // Sessions sync
                const localSessions = safeLocalStorage.getJSON<StudySession[]>('study_planner_sessions_cache', []);
                const dbSessions = (sessionsRes?.data || []).map((s: DatabaseSession) => ({
                    ...s,
                    subjectId: s.subject_id,
                    startTime: s.start_time,
                    moodBefore: s.mood_before,
                    moodAfter: s.mood_after
                }));
                const dbSessionIds = new Set(dbSessions.map((s: any) => s.id));
                const mergedSessions = [...dbSessions, ...localSessions.filter(s => !dbSessionIds.has(s.id))];
                setSessions(mergedSessions);
                safeLocalStorage.setJSON('study_planner_sessions_cache', mergedSessions);

                // Notes sync
                const localNotes = safeLocalStorage.getJSON<Note[]>('study_planner_notes_cache', []);
                const dbNotes = (notesRes?.data || []).map((n: DatabaseNote) => ({
                    ...n,
                    subjectId: n.subject_id,
                    isPinned: n.is_pinned || false,
                    createdAt: n.created_at,
                    updatedAt: n.updated_at
                }));
                const dbNoteIds = new Set(dbNotes.map((n: any) => n.id));
                const mergedNotes = [...dbNotes, ...localNotes.filter(n => !dbNoteIds.has(n.id))];
                setNotes(mergedNotes);
                safeLocalStorage.setJSON('study_planner_notes_cache', mergedNotes);

                // Study Notes (Konspektlar) sync
                const localStudyNotes = safeLocalStorage.getJSON<StudyNote[]>('study_planner_study_notes_cache', []);
                const dbStudyNotes = (studyNotesRes?.data || []).map((n: DatabaseStudyNote) => ({
                    ...n,
                    userId: n.user_id,
                    subjectId: n.subject_id,
                    createdAt: n.created_at,
                    updatedAt: n.updated_at
                }));
                const dbStudyNoteIds = new Set(dbStudyNotes.map((n: any) => n.id));
                const mergedStudyNotes = [...dbStudyNotes, ...localStudyNotes.filter(n => !dbStudyNoteIds.has(n.id))];
                setStudyNotes(mergedStudyNotes);
                safeLocalStorage.setJSON('study_planner_study_notes_cache', mergedStudyNotes);

                // Goals sync
                const localGoals = safeLocalStorage.getJSON<Goal[]>('study_planner_goals_cache', []);
                const dbGoals = (goalsRes?.data || []).map((g: any) => ({
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
                const dbGoalIds = new Set(dbGoals.map((g: any) => g.id));
                const mergedGoals = [...dbGoals, ...localGoals.filter(g => !dbGoalIds.has(g.id))];
                setGoals(mergedGoals);
                safeLocalStorage.setJSON('study_planner_goals_cache', mergedGoals);

                // Whiteboards sync
                const localWhiteboards = safeLocalStorage.getJSON<WhiteboardMetadata[]>('study_planner_whiteboards_cache', []);
                const dbWhiteboards = (whiteboardsRes?.data || []).map((w: DatabaseWhiteboard) => ({
                    id: w.id,
                    subjectId: w.subject_id,
                    userId: w.user_id,
                    title: w.title || 'Adsiz Doska',
                    updatedAt: w.updated_at || new Date().toISOString()
                }));
                const dbWbIds = new Set(dbWhiteboards.map(w => w.id));
                const mergedWhiteboards = [...dbWhiteboards, ...localWhiteboards.filter(w => !dbWbIds.has(w.id))];
                setWhiteboards(mergedWhiteboards);
                safeLocalStorage.setJSON('study_planner_whiteboards_cache', mergedWhiteboards);

                // Events sync
                const localEvents = safeLocalStorage.getJSON<Event[]>('study_planner_events_cache', []);
                const dbEvents = (eventsRes?.data || []).map((e: DatabaseEvent) => ({
                    id: e.id,
                    userId: e.user_id,
                    title: e.title,
                    description: e.description,
                    eventType: e.event_type,
                    eventDate: e.event_date,
                    notifyBeforeMinutes: e.notify_before_minutes,
                    isNotified: e.is_notified,
                    repetitionType: e.repetition_type,
                    repetitionEndDate: e.repetition_end_date,
                    repetitionDays: e.repetition_days,
                    googleEventId: e.google_event_id,
                    createdAt: e.created_at,
                    updatedAt: e.updated_at
                }));
                const dbEventIds = new Set(dbEvents.map(e => e.id));
                const mergedEvents = [...dbEvents, ...localEvents.filter(e => !dbEventIds.has(e.id))];
                setEvents(mergedEvents);
                safeLocalStorage.setJSON('study_planner_events_cache', mergedEvents);

                // Combined Coach & Speaking Sessions sync
                const mergedCoachSessions: CoachSession[] = [];
                if (coachSessionsRes?.data && Array.isArray(coachSessionsRes.data)) {
                    coachSessionsRes.data.forEach((c: any) => {
                        mergedCoachSessions.push({
                            id: c.id,
                            personaTitle: c.persona || c.persona_title || 'Speaking Coach',
                            fluencyScore: c.fluency_score || 0,
                            vocabularyScore: c.vocabulary_score || 0,
                            grammarScore: c.grammar_score || 0,
                            pronunciationScore: c.pronunciation_score || 0,
                            feedback: c.feedback || '',
                            createdAt: c.created_at
                        });
                    });
                }
                if (speakingSessionsRes?.data && Array.isArray(speakingSessionsRes.data)) {
                    speakingSessionsRes.data.forEach((c: any) => {
                        if (!mergedCoachSessions.some(m => m.id === c.id)) {
                            mergedCoachSessions.push({
                                id: c.id,
                                personaTitle: c.persona_title || c.topic || 'Speaking Muloqot',
                                fluencyScore: c.fluency_score || 0,
                                vocabularyScore: c.vocabulary_score || 0,
                                grammarScore: c.grammar_score || 0,
                                pronunciationScore: c.pronunciation_score || 0,
                                feedback: c.feedback || c.ai_feedback || '',
                                createdAt: c.created_at
                            });
                        }
                    });
                }
                if (aiCoachSessionsRes?.data && Array.isArray(aiCoachSessionsRes.data)) {
                    aiCoachSessionsRes.data.forEach((c: any) => {
                        if (!mergedCoachSessions.some(m => m.id === c.id)) {
                            mergedCoachSessions.push({
                                id: c.id,
                                personaTitle: c.persona_title || 'AI Coach',
                                fluencyScore: c.fluency_score || 0,
                                vocabularyScore: c.vocabulary_score || 0,
                                grammarScore: c.grammar_score || 0,
                                pronunciationScore: c.pronunciation_score || 0,
                                feedback: c.feedback || '',
                                createdAt: c.created_at
                            });
                        }
                    });
                }
                setCoachSessions(mergedCoachSessions);

                // Profile & Gamification sync
                const rawProf = profileRes?.data;
                const prof = Array.isArray(rawProf) ? rawProf[0] : (rawProf as DatabaseProfile | null);
                if (prof) {
                    setGamificationState(prev => ({
                        ...prev,
                        totalXp: typeof prof.total_xp === 'number' ? prof.total_xp : prev.totalXp,
                        level: typeof prof.level === 'number' ? prof.level : prev.level,
                        currentStreak: typeof prof.current_streak === 'number' ? prof.current_streak : prev.currentStreak,
                        lastActivityDate: prof.last_activity_date || prev.lastActivityDate
                    }));

                    if (prof.primary_language) {
                        setPrimaryLanguage(prof.primary_language);
                        safeLocalStorage.setItem('study_planner_primary_language', prof.primary_language);
                        safeLocalStorage.setItem('study_planner_study_track', prof.primary_language);
                        safeLocalStorage.setItem('study_planner_personalized_onboarded', 'true');
                    }
                    if (prof.enabled_languages && Array.isArray(prof.enabled_languages)) {
                        setEnabledLanguages(prof.enabled_languages as ('en' | 'ja')[]);
                        safeLocalStorage.setJSON('study_planner_enabled_languages', prof.enabled_languages);
                    }
                    const activeLang = (prof.primary_language || primaryLanguage) as any;
                    if (prof.target_level) {
                        setTargetLevel(prof.target_level);
                        LearningTrackStorage.setTargetLevel(activeLang, prof.target_level);
                    }
                    if (prof.target_goal) {
                        setTargetGoal(prof.target_goal);
                        LearningTrackStorage.setTargetGoal(activeLang, prof.target_goal);
                    }
                } else if (currentUser?.id) {
                    // Initialize profiles row if not present
                    const todayStr = new Date().toISOString().split('T')[0];
                    supabase.from('profiles').upsert({
                        id: currentUser.id,
                        email: currentUser.email,
                        total_xp: 0,
                        level: 1,
                        current_streak: 1,
                        last_activity_date: todayStr,
                        updated_at: new Date().toISOString()
                    }).then(() => {});
                }
            } catch (err) {
                console.warn("[fetchData] Entity sync warning:", err);
            }
        } finally {
            setLoading(false);
        }
    }, [setTasks, setFlashcards, setSubjects, setGoals, setNotes, setStudyNotes, setSessions, setWhiteboards, setEvents, setCoachSessions, setGamificationState, syncGoogleEvents]);

    useEffect(() => {
        fetchData();

        let subscription: any = null;
        if (typeof supabase?.auth?.onAuthStateChange === 'function') {
            const authSub = supabase.auth.onAuthStateChange((event, session) => {
                if (event === 'SIGNED_OUT') {
                    setUser(null);
                    setTasks([]);
                    setFlashcards([]);
                    setSubjects([]);
                    setGoals([]);
                    setNotes([]);
                    setStudyNotes([]);
                    setSessions([]);
                    setWhiteboards([]);
                    setEvents([]);
                    setCoachSessions([]);
                    safeLocalStorage.removeItem('study_planner_user_cache');
                    safeLocalStorage.removeItem('study_planner_user_email');
                } else if (event === 'SIGNED_IN' || event === 'USER_UPDATED' || event === 'TOKEN_REFRESHED') {
                    if (session?.user) {
                        fetchData();
                    }
                }
            });
            subscription = authSub?.data?.subscription;
        }

        return () => {
            if (subscription?.unsubscribe) {
                subscription.unsubscribe();
            }
        };
    }, [fetchData, setTasks, setFlashcards, setSubjects, setGoals, setNotes, setStudyNotes, setSessions, setWhiteboards, setEvents, setCoachSessions]);

    // Update Settings Handler
    const updateSettings = async (updates: Partial<Settings>) => {
        safeLocalStorage.setItem('study_planner_theme', 'dark');
        document.documentElement.classList.add('dark');

        if (updates.totalXp !== undefined || updates.level !== undefined) {
            setGamificationState(prev => ({
                ...prev,
                totalXp: updates.totalXp ?? prev.totalXp,
                level: updates.level ?? prev.level,
                currentStreak: updates.currentStreak ?? prev.currentStreak,
                lastActivityDate: updates.lastActivityDate ?? prev.lastActivityDate
            }));
        }

        setAppSettings(prev => {
            const newState = {
                ...prev,
                theme: updates.theme !== undefined ? updates.theme : prev.theme,
                notificationsEnabled: updates.notificationsEnabled !== undefined ? updates.notificationsEnabled : prev.notificationsEnabled,
                aiModel: 'deepseek' as const,
                deepseekModel: updates.deepseekModel !== undefined ? updates.deepseekModel : prev.deepseekModel,
                deepseekThinkingMode: updates.deepseekThinkingMode !== undefined ? updates.deepseekThinkingMode : prev.deepseekThinkingMode,
                dailyStudyGoalMinutes: updates.dailyStudyGoalMinutes !== undefined ? updates.dailyStudyGoalMinutes : prev.dailyStudyGoalMinutes,
                coachAiModel: 'deepseek' as const,
                showFurigana: updates.showFurigana !== undefined ? updates.showFurigana : prev.showFurigana,
                showRomaji: updates.showRomaji !== undefined ? updates.showRomaji : prev.showRomaji,
            };

            safeLocalStorage.setJSON('study_planner_ai_settings', {
                aiModel: 'deepseek',
                deepseekModel: newState.deepseekModel,
                deepseekThinkingMode: newState.deepseekThinkingMode,
                coachAiModel: 'deepseek'
            });

            safeLocalStorage.setItem('study_planner_daily_goal', newState.dailyStudyGoalMinutes.toString());
            safeLocalStorage.setItem('study_planner_show_furigana', String(newState.showFurigana));
            safeLocalStorage.setItem('study_planner_show_romaji', String(newState.showRomaji));

            return newState;
        });

        const { data: { session } } = await supabase.auth.getSession();
        const user = session?.user;
        if (!user) return;

        try {
            await supabase.from('profiles').update({
                theme: updates.theme !== undefined ? updates.theme : appSettings.theme,
                notifications_enabled: updates.notificationsEnabled !== undefined ? updates.notificationsEnabled : appSettings.notificationsEnabled,
                updated_at: new Date().toISOString()
            }).eq('id', user.id);

            await supabase.auth.updateUser({
                data: {
                    ai_settings: {
                        aiModel: 'deepseek',
                        deepseekModel: updates.deepseekModel !== undefined ? updates.deepseekModel : appSettings.deepseekModel,
                        deepseekThinkingMode: updates.deepseekThinkingMode !== undefined ? updates.deepseekThinkingMode : appSettings.deepseekThinkingMode,
                        coachAiModel: 'deepseek'
                    },
                    daily_goal: updates.dailyStudyGoalMinutes !== undefined ? updates.dailyStudyGoalMinutes : appSettings.dailyStudyGoalMinutes,
                    show_furigana: updates.showFurigana !== undefined ? updates.showFurigana : appSettings.showFurigana,
                    show_romaji: updates.showRomaji !== undefined ? updates.showRomaji : appSettings.showRomaji
                }
            });
        } catch (e) {
            console.warn("Profile / Metadata sync notice:", e);
        }
    };

    // Learning Focus Actions
    const setPrimaryFocus = useCallback(async (lang: 'en' | 'ja', level?: string, goal?: string) => {
        const allowedLang = (!isSuperAdmin(user?.email)) ? 'ja' : lang;
        setPrimaryLanguage(allowedLang);
        safeLocalStorage.setItem('study_planner_primary_language', allowedLang);
        safeLocalStorage.setItem('study_planner_study_track', allowedLang);

        let currentEnabled: ('en' | 'ja')[] = [];
        setEnabledLanguages(prev => {
            const next = prev.includes(allowedLang) ? prev : [allowedLang, ...prev];
            currentEnabled = next;
            safeLocalStorage.setJSON('study_planner_enabled_languages', next);
            return next;
        });

        const newLevel = level || LearningTrackStorage.getTargetLevel(allowedLang);
        const newGoal = goal || LearningTrackStorage.getTargetGoal(allowedLang);

        setTargetLevel(newLevel);
        LearningTrackStorage.setTargetLevel(allowedLang, newLevel);

        setTargetGoal(newGoal);
        LearningTrackStorage.setTargetGoal(allowedLang, newGoal);

        safeLocalStorage.setItem('study_planner_personalized_onboarded', 'true');
        window.dispatchEvent(new Event('study-track-changed'));

        let targetUserId: string | null = null;
        const cachedUser = safeLocalStorage.getJSON<User | null>('study_planner_user_cache', null);
        if (cachedUser?.id && isUuid(cachedUser.id)) {
            targetUserId = cachedUser.id;
        }

        try {
            if (!targetUserId) {
                const { data: sessionData } = await supabase.auth.getSession();
                if (sessionData?.session?.user?.id && isUuid(sessionData.session.user.id)) {
                    targetUserId = sessionData.session.user.id;
                }
            }

            if (targetUserId && isUuid(targetUserId)) {
                await Promise.allSettled([
                    supabase.from('profiles').upsert({
                        id: targetUserId,
                        primary_language: lang,
                        enabled_languages: currentEnabled.length > 0 ? currentEnabled : [lang],
                        target_level: newLevel,
                        target_goal: newGoal,
                        updated_at: new Date().toISOString()
                    }),
                    supabase.auth.updateUser({
                        data: {
                            primary_language: lang,
                            enabled_languages: currentEnabled.length > 0 ? currentEnabled : [lang],
                            target_level: newLevel,
                            target_goal: newGoal
                        }
                    })
                ]);
            }
        } catch (err) {
            console.warn('Sync learning focus warning:', err);
        }
    }, []);

    const addSecondaryLanguage = useCallback(async (lang: 'en' | 'ja') => {
        setEnabledLanguages(prev => {
            if (prev.includes(lang)) return prev;
            const next = [...prev, lang];
            safeLocalStorage.setJSON('study_planner_enabled_languages', next);

            const cached = safeLocalStorage.getJSON<User | null>('study_planner_user_cache', null);
            const uid = cached?.id;
            if (uid && isUuid(uid)) {
                supabase.from('profiles').update({
                    enabled_languages: next,
                    updated_at: new Date().toISOString()
                }).eq('id', uid).then(() => {});
            }
            return next;
        });
    }, []);

    const removeSecondaryLanguage = useCallback(async (lang: 'en' | 'ja') => {
        setEnabledLanguages(prev => {
            if (prev.length <= 1 || !prev.includes(lang)) return prev;
            const next = prev.filter(l => l !== lang);
            safeLocalStorage.setJSON('study_planner_enabled_languages', next);

            const cached = safeLocalStorage.getJSON<User | null>('study_planner_user_cache', null);
            const uid = cached?.id;
            if (uid && isUuid(uid)) {
                supabase.from('profiles').update({
                    enabled_languages: next,
                    updated_at: new Date().toISOString()
                }).eq('id', uid).then(() => {});
            }
            return next;
        });
    }, []);

    const contextValue = useMemo(() => ({
        goals, addGoal, updateGoal, deleteGoal,
        tasks, addTask, addTasksBatch, toggleTask, deleteTask, restoreTask, updateTask, updateTaskStatus,
        subjects, addSubject, updateSubject, deleteSubject,
        sessions, addSession, coachSessions, addCoachSession,
        awardXP, resetXP, getRank,
        notes, addNote, updateNote, deleteNote,
        studyNotes, addStudyNote, addStudyNotesBatch, updateStudyNote, deleteStudyNote,
        flashcards, addFlashcard, addFlashcardsBatch, updateFlashcard, deleteFlashcard, restoreFlashcard, reviewFlashcard, importFlashcards,
        whiteboards, addWhiteboard, deleteWhiteboard, updateWhiteboardTitle,
        events, addEvent, updateEvent, deleteEvent,
        googleEvents, syncGoogleEvents,
        primaryLanguage, enabledLanguages, targetLevel, targetGoal,
        setPrimaryFocus, addSecondaryLanguage, removeSecondaryLanguage,
        refreshData: fetchData,
        settings, updateSettings,
        loading, user
    }), [
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
        primaryLanguage, enabledLanguages, targetLevel, targetGoal,
        setPrimaryFocus, addSecondaryLanguage, removeSecondaryLanguage,
        fetchData, settings, updateSettings, getRank,
        loading, user
    ]);

    return (
        <StudyPlannerContext.Provider value={contextValue}>
            {children}
        </StudyPlannerContext.Provider>
    );
};

export const useStudyData = () => {
    const context = useContext(StudyPlannerContext);
    if (!context) throw new Error("useStudyData must be used within StudyPlannerProvider");
    return context;
};
