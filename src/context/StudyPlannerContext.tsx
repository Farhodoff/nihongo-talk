import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Flashcard, Goal, Note, StudySession, Subject, Task, WhiteboardMetadata, StudyNote, Event } from '../types';
import notificationManager from '../services/NotificationManager';
import { useFocusTimer } from '../hooks/useFocusTimer';
import { useGamification } from '../hooks/useGamification';
import { useTasks } from '../hooks/useTasks';

interface Settings {
    theme: 'light' | 'dark';
    notificationsEnabled: boolean;
    totalXp: number;
    level: number;
    currentStreak: number;
    lastActivityDate: string | null;
    googleApiKey?: string;
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
    settings: Settings;
    loading: boolean;
    user: any;

    // Task operatsiyalari
    addTask: (task: Partial<Task>) => Promise<void>;
    updateTask: (id: string, updates: Partial<Task>) => Promise<void>;
    deleteTask: (id: string) => Promise<void>;
    toggleTask: (id: string) => Promise<void>;
    updateTaskStatus: (id: string, status: string) => Promise<void>;

    // Flashcard operatsiyalari
    addFlashcard: (card: Partial<Flashcard>) => Promise<void>;
    updateFlashcard: (id: string, updates: Partial<Flashcard>) => Promise<void>;
    deleteFlashcard: (id: string) => Promise<void>;
    reviewFlashcard: (id: string, rating: number) => Promise<void>;
    importFlashcards: (subjectId: string, cards: any[]) => Promise<boolean>;

    // Subject operatsiyalari
    addSubject: (subject: Partial<Subject>) => Promise<Subject | null>;
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

    // Session operatsiyalari
    addSession: (session: Partial<StudySession>) => Promise<void>;

    // Data
    refreshData: () => Promise<void>;

    // Settings & XP
    updateSettings: (updates: Partial<Settings>) => Promise<void>;
    awardXP: (amount: number) => Promise<void>;
    getRank: (level: number) => string;

    // Focus Timer
    focusState: any;
    startTimer: () => void;
    pauseTimer: () => void;
    resetTimer: () => void;
    switchMode: (mode: any) => void;
    setFocusSubject: (id: string) => void;
    setFocusTask: (id: string | null) => void;
    setBgSound: (sound: string) => void;
    setMuted: (muted: boolean) => void;
}


const StudyPlannerContext = createContext<StudyPlannerContextType | undefined>(undefined);

// ===== PROVIDER =====
export const StudyPlannerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // 1. Core Hooks
    const {
        gameState,
        setGamificationState,
        awardXP,
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
        updateTask,
        toggleTask,
        updateTaskStatus,
        deleteTask
    } = useTasks(awardXP);

    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [goals, setGoals] = useState<Goal[]>([]);
    const [notes, setNotes] = useState<Note[]>([]);
    const [studyNotes, setStudyNotes] = useState<StudyNote[]>([]);
    const [sessions, setSessions] = useState<StudySession[]>([]);
    const [whiteboards, setWhiteboards] = useState<WhiteboardMetadata[]>([]);
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);

    // App Settings (Non-gamification)
    const [appSettings, setAppSettings] = useState<{
        theme: 'light' | 'dark';
        notificationsEnabled: boolean;
        googleApiKey?: string;
    }>(() => {
        const savedTheme = localStorage.getItem('study_planner_theme');
        return {
            theme: (savedTheme as 'light' | 'dark') || 'light',
            notificationsEnabled: true,
        };
    });

    // Derived full settings for consumers
    const settings: Settings = {
        ...appSettings,
        ...gameState
    };

    // Focus Timer Hook
    const {
        focusState,
        startTimer,
        pauseTimer,
        resetTimer,
        switchMode,
        setFocusSubject,
        setFocusTask,
        setBgSound,
        setMuted
    } = useFocusTimer(appSettings.notificationsEnabled);

    // Ma'lumotlarni yuklash
    const fetchData = async () => {
        setLoading(true);
        try {
            const { data: { user: currentUser } } = await supabase.auth.getUser();
            setUser(currentUser);
            if (!currentUser) {
                setLoading(false);
                return;
            }

            // Parallel yuklash
            const [tasksRes, cardsRes, subjectsRes, goalsRes, notesRes, sessionsRes, studyNotesRes, whiteboardsRes, eventsRes, profileRes] = await Promise.all([
                supabase.from('tasks').select('*').eq('user_id', currentUser.id),
                supabase.from('flashcards').select('*').eq('user_id', currentUser.id),
                supabase.from('subjects').select('*').eq('user_id', currentUser.id),
                supabase.from('goals').select('*').eq('user_id', currentUser.id),
                supabase.from('notes').select('*').eq('user_id', currentUser.id),
                supabase.from('study_sessions').select('*').eq('user_id', currentUser.id),
                supabase.from('study_notes').select('*').eq('user_id', currentUser.id),
                supabase.from('whiteboards').select('id, subject_id, user_id, title, updated_at').eq('user_id', currentUser.id),
                supabase.from('events').select('*').eq('user_id', currentUser.id),
                supabase.from('profiles').select('*').eq('id', currentUser.id).maybeSingle(),
            ]);

            // Tasks - using hook setter
            if (tasksRes.data) {
                const normalizedTasks: Task[] = tasksRes.data.map((t: any) => ({
                    id: t.id,
                    title: t.title,
                    status: t.status,
                    priority: t.priority,
                    completed: t.completed !== undefined ? t.completed : (t.status === 'done' || t.status === 'completed'),
                    subjectId: t.subject_id,
                    dueDate: t.due_date,
                    deadline: t.due_date, // shim
                    createdAt: t.created_at,
                    goalId: t.goal_id
                })) as any;
                setTasks(normalizedTasks);
            }

            // ... (Other setters remain the same: subjects, goals, notes, etc.)
            if (subjectsRes.data) {
                setSubjects(subjectsRes.data.map((s: any) => ({
                    id: s.id,
                    name: s.name,
                    color: s.color,
                    schedule: s.schedule,
                    teacherName: s.teacher_name,
                    roomLocation: s.room_location,
                    description: s.description,
                    icon: s.icon
                })) as any);
            }

            if (sessionsRes.data) {
                setSessions(sessionsRes.data.map((s: any) => ({
                    ...s,
                    subjectId: s.subject_id,
                    startTime: s.start_time,
                    moodBefore: s.mood_before,
                    moodAfter: s.mood_after
                })) as any);
            }

            if (notesRes.data) {
                setNotes(notesRes.data.map((n: any) => ({
                    ...n,
                    subjectId: n.subject_id,
                    createdAt: n.created_at,
                    updatedAt: n.updated_at
                })) as any);
            }

            if (studyNotesRes.data) {
                setStudyNotes(studyNotesRes.data.map((n: any) => ({
                    ...n,
                    userId: n.user_id,
                    subjectId: n.subject_id,
                    createdAt: n.created_at,
                    updatedAt: n.updated_at
                })) as any);
            }

            if (cardsRes.data) {
                setFlashcards(cardsRes.data.map((c: any) => ({
                    ...c,
                    subjectId: c.subject_id,
                    nextReviewDate: c.next_review_date,
                    easeFactor: c.ease_factor
                })) as any);
            }

            if (goalsRes.data) {
                setGoals(goalsRes.data);
            }

            if (whiteboardsRes.data) {
                setWhiteboards(whiteboardsRes.data.map((w: any) => ({
                    id: w.id,
                    subjectId: w.subject_id,
                    userId: w.user_id,
                    title: w.title || 'Adsiz Doska',
                    updatedAt: w.updated_at
                })));
            }

            if (eventsRes.data) {
                setEvents(eventsRes.data.map((e: any) => ({
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
                    createdAt: e.created_at,
                    updatedAt: e.updated_at
                })));
            }

            // Profile & Settings
            if (profileRes.data) {
                setAppSettings({
                    theme: profileRes.data.theme || 'light',
                    notificationsEnabled: profileRes.data.notifications_enabled ?? true,
                    googleApiKey: profileRes.data.google_api_key,
                });

                setGamificationState({
                    totalXp: profileRes.data.total_xp || 0,
                    level: profileRes.data.level || 1,
                    currentStreak: profileRes.data.current_streak || 0,
                    lastActivityDate: profileRes.data.last_activity_date,
                });
            }

        } catch (error) {
            console.error("Ma'lumot yuklashda xato:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Apply theme
    useEffect(() => {
        if (appSettings.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('study_planner_theme', appSettings.theme);
    }, [appSettings.theme]);

    // Notification Logic for Sessions (Keeping it here as it taps into sessions state which is staying here for now)
    // Eventually move sessions to useSessions hook
    useEffect(() => {
        if (appSettings.notificationsEnabled && events.length > 0) {
            notificationManager.requestPermission().then(granted => {
                if (granted) {
                    notificationManager.startMonitoring(events, (eventId) => {
                        updateEvent(eventId, { isNotified: true });
                    });
                }
            });
        }
        return () => {
            notificationManager.stopMonitoring();
        };
    }, [events, appSettings.notificationsEnabled]);

    useEffect(() => {
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
                            icon: '/vite.svg'
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
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return null;

        const { data } = await supabase.from('goals').insert({ ...goalData, user_id: user.id }).select().single();
        if (data) setGoals([...goals, data]);
        return data;
    };

    const updateGoal = async (id: string, updates: Partial<Goal>) => {
        await supabase.from('goals').update(updates).eq('id', id);
        setGoals(goals.map(g => g.id === id ? { ...g, ...updates } : g));
    };

    const deleteGoal = async (id: string) => {
        setGoals(goals.filter(g => g.id !== id));
        await supabase.from('goals').delete().eq('id', id);
    };

    // Task & XP logic moved to hooks, but other entity logic stays:

    // ===== FLASHCARD OPERATSIYALARI =====
    const addFlashcard = async (cardData: Partial<Flashcard>) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { data } = await supabase.from('flashcards').insert({
            ...cardData,
            user_id: user.id,
            next_review_date: new Date().toISOString(),
        }).select().single();
        if (data) setFlashcards([...flashcards, { ...data, subjectId: data.subject_id, nextReviewDate: data.next_review_date, easeFactor: data.ease_factor }]);
    };

    const updateFlashcard = async (id: string, updates: Partial<Flashcard>) => {
        await supabase.from('flashcards').update(updates).eq('id', id);
        setFlashcards(flashcards.map(c => c.id === id ? { ...c, ...updates } : c));
    };

    const deleteFlashcard = async (id: string) => {
        await supabase.from('flashcards').delete().eq('id', id);
        setFlashcards(flashcards.filter(c => c.id !== id));
    };

    const reviewFlashcard = async (id: string, rating: number) => {
        console.log(`Card ${id} rated: ${rating}`);

        const now = new Date();
        const nextReviewDate = new Date(now);

        // SRS Logic (Custom as per user request)
        // 1 (Bilmayman) -> 10 minutes
        // 2 (Qiyin) -> 1 day
        // 3 (Yaxshi) -> 3 days
        // 4 (Juda oson) -> 7 days

        switch (rating) {
            case 1: // Again / Bilmayman
                nextReviewDate.setMinutes(now.getMinutes() + 10);
                break;
            case 2: // Hard / Qiyin
                nextReviewDate.setDate(now.getDate() + 1);
                break;
            case 3: // Good / Yaxshi
                nextReviewDate.setDate(now.getDate() + 3);
                break;
            case 4: // Easy / Juda oson
                nextReviewDate.setDate(now.getDate() + 7);
                break;
            default:
                nextReviewDate.setDate(now.getDate() + 1);
        }

        const updates = {
            nextReviewDate: nextReviewDate.toISOString(),
        };

        await updateFlashcard(id, updates);
        await awardXP(rating * 2); // XP based on performance: 2, 4, 6, 8 XP
    };

    const importFlashcards = async (subjectId: string, cards: any[]) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return false;

        try {
            const dbCards = cards.map(c => ({
                user_id: user.id,
                subject_id: subjectId,
                front: c.front,
                back: c.back + (c.example ? `\n\nMisol: ${c.example}` : ''),
                next_review_date: new Date().toISOString(),
                ease_factor: 2.5,
                interval: 0,
                repetitions: 0
            }));

            const { error } = await supabase.from('flashcards').insert(dbCards);

            if (error) throw error;

            // Reload to get IDs and sync state
            const { data: _cards } = await supabase.from('flashcards').select('*').eq('user_id', user.id);
            if (_cards) setFlashcards(_cards.map((c: any) => ({
                ...c,
                subjectId: c.subject_id,
                nextReviewDate: c.next_review_date,
                easeFactor: c.ease_factor
            })) as any);

            return true;
        } catch (e) {
            console.error("Import error:", e);
            return false;
        }
    };


    // ===== SUBJECT OPERATSIYALARI =====
    const addSubject = async (subjectData: Partial<Subject>) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return null;

        const dbSubject = {
            user_id: user.id,
            name: subjectData.name,
            color: subjectData.color,
            teacher_name: subjectData.teacherName,
            room_location: subjectData.roomLocation,
            description: subjectData.description,
            schedule: subjectData.schedule || [],
            icon: subjectData.icon
        };

        const { data } = await supabase.from('subjects').insert(dbSubject).select().single();
        if (data) {
            const newSubject = {
                id: data.id,
                name: data.name,
                color: data.color,
                schedule: data.schedule,
                teacherName: data.teacher_name,
                roomLocation: data.room_location,
                description: data.description,
                icon: data.icon
            } as any;
            setSubjects([...subjects, newSubject]);
            return newSubject;
        }
        return null;
    };

    const deleteSubject = async (id: string) => {
        await supabase.from('subjects').delete().eq('id', id);
        setSubjects(subjects.filter(s => s.id !== id));
    };

    // ===== NOTE OPERATSIYALARI =====
    const addNote = async (noteData: Partial<Note>) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return null;

        const dbNote = {
            user_id: user.id,
            subject_id: noteData.subjectId,
            title: noteData.title,
            content: noteData.content,
            attachments: noteData.attachments
        };

        const { data } = await supabase.from('notes').insert(dbNote).select().single();
        if (data) {
            const newNote = { ...data, subjectId: data.subject_id, createdAt: data.created_at, updatedAt: data.updated_at } as any;
            setNotes([...notes, newNote]);
            return newNote;
        }
        return null;
    };

    const updateNote = async (id: string, updates: Partial<Note>) => {
        const dbUpdates: any = { ...updates };
        if (updates.subjectId) {
            dbUpdates.subject_id = updates.subjectId;
            delete dbUpdates.subjectId;
        }
        await supabase.from('notes').update(dbUpdates).eq('id', id);
        setNotes(notes.map(n => n.id === id ? { ...n, ...updates } : n));
    };

    const deleteNote = async (id: string) => {
        await supabase.from('notes').delete().eq('id', id);
        setNotes(notes.filter(n => n.id !== id));
    };

    // ===== STUDY NOTES (KONSPEKTLAR) OPERATSIYALARI =====
    const addStudyNote = async (noteData: Partial<StudyNote>) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        const dbNote = {
            user_id: user.id,
            subject_id: noteData.subjectId,
            title: noteData.title,
            content: noteData.content,
        };
        const { data } = await supabase.from('study_notes').insert(dbNote).select().single();
        if (data) setStudyNotes([...studyNotes, { ...data, userId: data.user_id, subjectId: data.subject_id, createdAt: data.created_at, updatedAt: data.updated_at } as any]);
    };

    const updateStudyNote = async (id: string, updates: Partial<StudyNote>) => {
        const dbUpdates: any = { ...updates };
        if (updates.subjectId) {
            dbUpdates.subject_id = updates.subjectId;
            delete dbUpdates.subjectId;
        }
        await supabase.from('study_notes').update(dbUpdates).eq('id', id);
        setStudyNotes(studyNotes.map(n => n.id === id ? { ...n, ...updates } : n));
    };

    const deleteStudyNote = async (id: string) => {
        setStudyNotes(studyNotes.filter(n => n.id !== id));
        await supabase.from('study_notes').delete().eq('id', id);
    };

    // ===== SESSION OPERATSIYALARI =====
    const addSession = async (sessionData: Partial<StudySession>) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { data } = await supabase.from('study_sessions').insert({ ...sessionData, user_id: user.id }).select().single();
        if (data) setSessions([...sessions, data]);
    };

    // ===== UPDATE SETTINGS (Combined) =====
    const updateSettings = async (updates: Partial<Settings>) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        // Separate gamification updates from app settings
        if (updates.totalXp !== undefined || updates.level !== undefined) {
            // Handled by awardXP in useGamification mostly, but if manual update:
            // We can't easily update hook state from here unless we exposed a setter.
            // We did expose setGamificationState.
            setGamificationState(prev => ({
                ...prev,
                totalXp: updates.totalXp ?? prev.totalXp,
                level: updates.level ?? prev.level,
                currentStreak: updates.currentStreak ?? prev.currentStreak,
                lastActivityDate: updates.lastActivityDate ?? prev.lastActivityDate
            }));
        }

        if (updates.theme || updates.notificationsEnabled !== undefined || updates.googleApiKey) {
            setAppSettings(prev => ({
                ...prev,
                theme: updates.theme || prev.theme,
                notificationsEnabled: updates.notificationsEnabled ?? prev.notificationsEnabled,
                googleApiKey: updates.googleApiKey || prev.googleApiKey
            }));
        }

        // Persist to DB
        const { error } = await supabase.from('profiles').upsert({
            id: user.id,
            theme: updates.theme || appSettings.theme,
            notifications_enabled: updates.notificationsEnabled ?? appSettings.notificationsEnabled,
            google_api_key: updates.googleApiKey || appSettings.googleApiKey,
            updated_at: new Date().toISOString()
            // We should also include XP fields here if we want to be safe, but they are handled by useGamification's db calls usually.
            // But since this is a generic updateSettings... better include them if present in updates.
        });

        if (error) {
            console.error('Error updating settings:', error);
        }
    };

    const addWhiteboard = async (subjectId: string, title: string) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            console.error("addWhiteboard: No user found");
            return null;
        }

        console.log("addWhiteboard: Attempting to create whiteboard", { subjectId, title, userId: user.id });

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
            console.log("addWhiteboard: Success", data);
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
        setWhiteboards(whiteboards.filter(w => w.id !== id));
        await supabase.from('whiteboards').delete().eq('id', id);
    };

    const updateWhiteboardTitle = async (id: string, title: string) => {
        setWhiteboards(whiteboards.map(w => w.id === id ? { ...w, title } : w));
        await supabase.from('whiteboards').update({ title }).eq('id', id);
    };

    // ===== EVENT OPERATSIYALARI =====
    const addEvent = async (eventData: Partial<Event>) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return null;

        const dbEvent = {
            user_id: user.id,
            title: eventData.title,
            description: eventData.description,
            event_type: eventData.eventType,
            event_date: eventData.eventDate,
            notify_before_minutes: eventData.notifyBeforeMinutes || 60,
            repetition_type: eventData.repetitionType || 'none',
            repetition_end_date: eventData.repetitionEndDate,
            repetition_days: eventData.repetitionDays,
            is_notified: false
        };

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
                createdAt: data.created_at,
                updatedAt: data.updated_at
            };
            setEvents([...events, newEvent]);
            return newEvent;
        }
        return null;
    };

    const updateEvent = async (id: string, updates: Partial<Event>) => {
        const dbUpdates: any = { ...updates };
        if (updates.eventType) dbUpdates.event_type = updates.eventType;
        if (updates.eventDate) dbUpdates.event_date = updates.eventDate;
        if (updates.notifyBeforeMinutes) dbUpdates.notify_before_minutes = updates.notifyBeforeMinutes;
        if (updates.isNotified !== undefined) dbUpdates.is_notified = updates.isNotified;

        delete dbUpdates.eventType;
        delete dbUpdates.eventDate;
        delete dbUpdates.notifyBeforeMinutes;
        delete dbUpdates.isNotified;
        delete dbUpdates.userId;
        delete dbUpdates.createdAt;
        delete dbUpdates.updatedAt;

        await supabase.from('events').update(dbUpdates).eq('id', id);
        setEvents(events.map(e => e.id === id ? { ...e, ...updates } : e));
    };

    const deleteEvent = async (id: string) => {
        setEvents(events.filter(e => e.id !== id));
        await supabase.from('events').delete().eq('id', id);
    };

    return (
        <StudyPlannerContext.Provider value={{
            goals, tasks, subjects, sessions,
            addGoal, updateGoal, deleteGoal,
            addTask, toggleTask, deleteTask, updateTask, updateTaskStatus,
            addSubject, deleteSubject,
            addSession, awardXP,
            notes, addNote, updateNote, deleteNote,
            studyNotes, addStudyNote, updateStudyNote, deleteStudyNote,
            flashcards, addFlashcard, updateFlashcard, deleteFlashcard, reviewFlashcard, importFlashcards,
            whiteboards, addWhiteboard, deleteWhiteboard, updateWhiteboardTitle,
            events, addEvent, updateEvent, deleteEvent,
            refreshData: fetchData,
            settings, updateSettings, getRank,
            // Exposed Focus State
            focusState, startTimer, pauseTimer, resetTimer, switchMode, setFocusSubject, setFocusTask, setBgSound, setMuted,
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
