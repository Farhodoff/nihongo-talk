import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { User } from '@supabase/supabase-js';
import { Flashcard, Goal, Note, StudySession, Subject, Task, WhiteboardMetadata, StudyNote, Event } from '../types';
import { FocusState, FocusMode } from '../types/focus';
import notificationManager from '../services/NotificationManager';
import { useFocusTimer } from '../hooks/useFocusTimer';
import { useGamification } from '../hooks/useGamification';
import { useTasks } from '../hooks/useTasks';
import { useFlashcards } from '../hooks/useFlashcards';
import { TaskService } from '../services/TaskService';
import { FlashcardService } from '../services/FlashcardService';
import { GoogleCalendarService } from '../services/GoogleCalendarService';
import { DatabaseSubject, DatabaseSession, DatabaseNote, DatabaseStudyNote, DatabaseWhiteboard, DatabaseEvent, DatabaseProfile } from '../types/supabase-types';

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
    user: User | null;

    // Task operatsiyalari
    addTask: (task: Partial<Task>) => Promise<void>;
    updateTask: (id: string, updates: Partial<Task>) => Promise<void>;
    deleteTask: (id: string) => Promise<void>;
    toggleTask: (id: string) => Promise<void>;
    updateTaskStatus: (id: string, status: string) => Promise<void>;

    // Flashcard operatsiyalari
    addFlashcard: (card: Partial<Flashcard>) => Promise<Flashcard | null>;
    updateFlashcard: (id: string, updates: Partial<Flashcard>) => Promise<void>;
    deleteFlashcard: (id: string) => Promise<void>;
    reviewFlashcard: (id: string, rating: number) => Promise<void>;
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
    focusState: FocusState;
    startTimer: () => void;
    pauseTimer: () => void;
    resetTimer: () => void;
    switchMode: (mode: FocusMode) => void;
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

    const {
        flashcards,
        setFlashcards,
        addFlashcard,
        updateFlashcard,
        deleteFlashcard,
        reviewFlashcard,
        importFlashcards
    } = useFlashcards(awardXP);

    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [goals, setGoals] = useState<Goal[]>([]);
    const [notes, setNotes] = useState<Note[]>([]);
    const [studyNotes, setStudyNotes] = useState<StudyNote[]>([]);
    const [sessions, setSessions] = useState<StudySession[]>([]);
    const [whiteboards, setWhiteboards] = useState<WhiteboardMetadata[]>([]);
    const [events, setEvents] = useState<Event[]>([]);

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);

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

            // --- TASKS via Service ---
            try {
                const fetchedTasks = await TaskService.fetchTasks(currentUser.id);
                setTasks(fetchedTasks);
            } catch (e) {
                console.error("Error fetching tasks:", e);
            }

            // --- FLASHCARDS via Service ---
            try {
                const fetchedCards = await FlashcardService.fetchFlashcards(currentUser.id);
                setFlashcards(fetchedCards);
            } catch (e) {
                console.error("Error fetching flashcards:", e);
            }

            // Parallel yuklash for other entities
            const [subjectsRes, goalsRes, notesRes, sessionsRes, studyNotesRes, whiteboardsRes, eventsRes, profileRes] = await Promise.all([
                supabase.from('subjects').select('*').eq('user_id', currentUser.id),
                supabase.from('goals').select('*').eq('user_id', currentUser.id),
                supabase.from('notes').select('*').eq('user_id', currentUser.id),
                supabase.from('study_sessions').select('*').eq('user_id', currentUser.id),
                supabase.from('study_notes').select('*').eq('user_id', currentUser.id),
                supabase.from('whiteboards').select('id, subject_id, user_id, title, updated_at').eq('user_id', currentUser.id),
                supabase.from('events').select('*').eq('user_id', currentUser.id),
                supabase.from('profiles').select('*').eq('id', currentUser.id).maybeSingle(),
            ]);



            // ... (Other setters remain the same: subjects, goals, notes, etc.)
            if (subjectsRes.data) {
                setSubjects(subjectsRes.data.map((s: DatabaseSubject) => ({
                    id: s.id,
                    name: s.name,
                    color: s.color,
                    schedule: s.schedule,
                    teacherName: s.teacher_name,
                    roomLocation: s.room_location,
                    description: s.description,
                    icon: s.icon
                })));
            }

            if (sessionsRes.data) {
                setSessions(sessionsRes.data.map((s: DatabaseSession) => ({
                    ...s,
                    subjectId: s.subject_id,
                    startTime: s.start_time,
                    moodBefore: s.mood_before,
                    moodAfter: s.mood_after
                })));
            }

            if (notesRes.data) {
                setNotes(notesRes.data.map((n: DatabaseNote) => ({
                    ...n,
                    subjectId: n.subject_id,
                    createdAt: n.created_at,
                    updatedAt: n.updated_at
                })));
            }

            if (studyNotesRes.data) {
                setStudyNotes(studyNotesRes.data.map((n: DatabaseStudyNote) => ({
                    ...n,
                    userId: n.user_id,
                    subjectId: n.subject_id,
                    createdAt: n.created_at,
                    updatedAt: n.updated_at
                })));
            }



            if (goalsRes.data) {
                setGoals(goalsRes.data);
            }

            if (whiteboardsRes.data) {
                setWhiteboards(whiteboardsRes.data.map((w: DatabaseWhiteboard) => ({
                    id: w.id,
                    subjectId: w.subject_id,
                    userId: w.user_id,
                    title: w.title || 'Adsiz Doska',
                    updatedAt: w.updated_at
                })));
            }

            if (eventsRes.data) {
                setEvents(eventsRes.data.map((e: DatabaseEvent | any) => ({
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
                })));
            }

            // Profile & Settings
            if (profileRes.data) {
                const profile = profileRes.data as DatabaseProfile;
                setAppSettings({
                    theme: profile.theme || 'light',
                    notificationsEnabled: profile.notifications_enabled ?? true,
                    googleApiKey: profile.google_api_key,
                });

                setGamificationState({
                    totalXp: profile.total_xp || 0,
                    level: profile.level || 1,
                    currentStreak: profile.current_streak || 0,
                    lastActivityDate: profile.last_activity_date || null,
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



    // ===== SUBJECT OPERATSIYALARI =====
    const addSubject = async (subjectData: Partial<Subject>) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return null;

        const tempId = `temp-${Date.now()}`;
        const optimisticSubject: Subject = {
            id: tempId,
            name: subjectData.name || '',
            color: subjectData.color || '#6366f1',
            schedule: subjectData.schedule || [],
            teacherName: subjectData.teacherName,
            roomLocation: subjectData.roomLocation,
            description: subjectData.description,
            icon: subjectData.icon
        } as any;

        // Optimistic update
        setSubjects([...subjects, optimisticSubject]);

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

        try {
            const { data, error } = await supabase.from('subjects').insert(dbSubject).select().single();
            if (error) throw error;

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
                // Replace temp with real
                setSubjects(prev => prev.map(s => s.id === tempId ? newSubject : s));
                return newSubject;
            }
        } catch (error) {
            console.error("Failed to add subject:", error);
            // Revert on failure
            setSubjects(prev => prev.filter(s => s.id !== tempId));
        }
        return null;
    };

    const deleteSubject = async (id: string) => {
        await supabase.from('subjects').delete().eq('id', id);
        setSubjects(subjects.filter(s => s.id !== id));
    };

    const updateSubject = async (id: string, updates: Partial<Subject>) => {
        const dbUpdates: any = {};
        if (updates.name) dbUpdates.name = updates.name;
        if (updates.color) dbUpdates.color = updates.color;
        if (updates.teacherName !== undefined) dbUpdates.teacher_name = updates.teacherName;
        if (updates.roomLocation !== undefined) dbUpdates.room_location = updates.roomLocation;
        if (updates.description !== undefined) dbUpdates.description = updates.description;
        if (updates.icon) dbUpdates.icon = updates.icon;
        if (updates.schedule) dbUpdates.schedule = updates.schedule;

        const { error } = await supabase.from('subjects').update(dbUpdates).eq('id', id);

        if (!error) {
            setSubjects(subjects.map(s => s.id === id ? { ...s, ...updates } : s));
        } else {
            console.error("Error updating subject:", error);
        }
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
        const dbUpdates: Record<string, unknown> = { ...updates };
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
        const dbUpdates: import('../types/supabase-types').DatabaseStudyNoteUpdate = {};

        if (updates.subjectId) dbUpdates.subject_id = updates.subjectId;
        if (updates.title) dbUpdates.title = updates.title;
        if (updates.content) dbUpdates.content = updates.content;

        // Add updated_at
        dbUpdates.updated_at = new Date().toISOString();

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
        setWhiteboards(whiteboards.filter(w => w.id !== id));
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

        const dbEvent: any = {
            user_id: session.user.id,
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

    const updateEvent = async (id: string, updates: Partial<Event>) => {
        const { data: { session } } = await supabase.auth.getSession();
        
        // Find current event to get googleEventId
        const currentEvent = events.find(e => e.id === id);
        if (currentEvent?.googleEventId && session?.provider_token) {
            await GoogleCalendarService.updateEvent(session.provider_token, currentEvent.googleEventId, updates);
        }

        // Construct dbUpdates with explicit mapping to avoid 'any'
        const dbUpdates: any = {};

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
        setEvents(events.map(e => e.id === id ? { ...e, ...updates } : e));
    };

    const deleteEvent = async (id: string) => {
        const { data: { session } } = await supabase.auth.getSession();
        
        // Find current event to get googleEventId
        const currentEvent = events.find(e => e.id === id);
        if (currentEvent?.googleEventId && session?.provider_token) {
            await GoogleCalendarService.deleteEvent(session.provider_token, currentEvent.googleEventId);
        }

        setEvents(events.filter(e => e.id !== id));
        await supabase.from('events').delete().eq('id', id);
    };

    return (
        <StudyPlannerContext.Provider value={{
            goals, tasks, subjects, sessions,
            addGoal, updateGoal, deleteGoal,
            addTask, toggleTask, deleteTask, updateTask, updateTaskStatus,
            addSubject, updateSubject, deleteSubject,
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
