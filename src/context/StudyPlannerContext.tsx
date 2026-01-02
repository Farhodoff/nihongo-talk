import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Flashcard, Goal, Note, StudySession, Subject, Task } from '../types';

// ... (Keep existing Type Definitions or import them) ...
// Since I am overwriting, I need to make sure I don't lose the interface definitions if they are not external. 
// Luckily types are in src/types/index.ts

interface Settings {
    theme: 'light' | 'dark';
    notificationsEnabled: boolean;
    totalXp: number;
    level: number;
    currentStreak: number;
    lastActivityDate: string | null;
    googleApiKey?: string;
}

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
    subjects: Subject[];
    sessions: StudySession[];
    addGoal: (goal: Omit<Goal, 'id' | 'createdAt'>) => void;
    updateGoal: (id: string, updates: Partial<Goal>) => void;
    deleteGoal: (id: string) => void;
    addTask: (task: Omit<Task, 'id' | 'createdAt' | 'completed' | 'status'> & Partial<Task>) => void;
    toggleTask: (id: string) => void;
    deleteTask: (id: string) => void;

    addSubject: (subject: Omit<Subject, 'id' | 'createdAt'>) => void;
    deleteSubject: (id: string) => void;

    addSession: (session: Omit<StudySession, 'id' | 'createdAt'>) => void;
    awardXP: (amount: number) => void;

    // Notes
    notes: Note[];
    addNote: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => void;
    updateNote: (id: string, updates: Partial<Note>) => void;
    deleteNote: (id: string) => void;

    // Flashcards
    flashcards: Flashcard[];
    addFlashcard: (card: Omit<Flashcard, 'id' | 'nextReviewDate' | 'interval' | 'easeFactor' | 'repetitions'>) => void;
    updateFlashcard: (id: string, updates: Partial<Flashcard>) => void;
    deleteFlashcard: (id: string) => void;
    reviewFlashcard: (id: string, grade: any) => void;

    // Tasks 
    updateTask: (id: string, updates: Partial<Task>) => void;

    // Data
    refreshData: () => Promise<void>;

    settings: Settings;
    updateSettings: (newSettings: Partial<Settings>) => void;

    // Focus Timer
    focusState: {
        timeLeft: number;
        isActive: boolean;
        isSessionCompleted: boolean;
        mode: 'focus' | 'short_break' | 'long_break';
        selectedSubjectId: string | null;
        bgSound: string;
        isMuted: boolean;
    };
    startTimer: () => void;
    pauseTimer: () => void;
    resetTimer: () => void;
    switchMode: (mode: 'focus' | 'short_break' | 'long_break') => void;
    setFocusSubject: (id: string) => void;
    setBgSound: (sound: string) => void;
    setMuted: (muted: boolean) => void;
}

const StudyPlannerContext = createContext<StudyPlannerContextType | undefined>(undefined);

export const StudyPlannerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null);
    const [goals, setGoals] = useState<Goal[]>([]);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [sessions, setSessions] = useState<StudySession[]>([]);
    const [notes, setNotes] = useState<Note[]>([]);
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

    const [settings, setSettings] = useState<Settings>(() => {
        // Try to load theme from localStorage first for instant application
        const savedTheme = localStorage.getItem('study_planner_theme');
        return {
            theme: (savedTheme as 'light' | 'dark') || 'light',
            notificationsEnabled: true,
            totalXp: 0,
            level: 1,
            currentStreak: 0,
            lastActivityDate: null,
        };
    });

    // 1. Load User & Data
    useEffect(() => {
        const loadData = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;
            setUser(user);

            // Load Profile
            let { data: profile, error: profileError } = await supabase.from('profiles').select('*').eq('id', user.id).maybeSingle();

            if (!profile && !profileError) {
                // Profile missing, create one (Trigger might have failed or race condition)
                const { data: newProfile, error: createError } = await supabase.from('profiles').insert({
                    id: user.id,
                    email: user.email,
                    full_name: user.user_metadata.full_name || 'User',
                    theme: 'system',
                    notifications_enabled: true
                }).select().single();

                if (!createError) {
                    profile = newProfile;
                }
            }

            if (profile) {
                setSettings({
                    theme: profile.theme || 'light',
                    notificationsEnabled: profile.notifications_enabled,
                    totalXp: profile.total_xp,
                    level: profile.level,
                    currentStreak: profile.current_streak,
                    lastActivityDate: profile.last_activity_date,
                    googleApiKey: profile.google_api_key
                });
            }

            // Load Entities with Mapping
            const { data: _goals } = await supabase.from('goals').select('*').eq('user_id', user.id);
            if (_goals) setGoals(_goals.map((g: any) => ({
                ...g,
                createdAt: g.created_at, // Map created_at
            })) as any);

            const { data: _tasks } = await supabase.from('tasks').select('*').eq('user_id', user.id);
            if (_tasks) setTasks(_tasks.map((t: any) => ({
                ...t,
                subjectId: t.subject_id,
                goalId: t.goal_id,
                dueDate: t.due_date,
                deadline: t.due_date, // shim
                createdAt: t.created_at
            })) as any);

            const { data: _subjects } = await supabase.from('subjects').select('*').eq('user_id', user.id);
            if (_subjects) setSubjects(_subjects.map((s: any) => ({
                id: s.id,
                name: s.name,
                color: s.color,
                schedule: s.schedule,
                teacherName: s.teacher_name,
                roomLocation: s.room_location
            })) as any);

            const { data: _sessions } = await supabase.from('study_sessions').select('*').eq('user_id', user.id);
            if (_sessions) setSessions(_sessions.map((s: any) => ({
                ...s,
                subjectId: s.subject_id,
                startTime: s.start_time,
                moodBefore: s.mood_before,
                moodAfter: s.mood_after
            })) as any);

            const { data: _notes } = await supabase.from('notes').select('*').eq('user_id', user.id);
            if (_notes) setNotes(_notes.map((n: any) => ({
                ...n,
                subjectId: n.subject_id,
                createdAt: n.created_at,
                updatedAt: n.updated_at
            })) as any);

            const { data: _cards } = await supabase.from('flashcards').select('*').eq('user_id', user.id);
            if (_cards) setFlashcards(_cards.map((c: any) => ({
                ...c,
                subjectId: c.subject_id,
                nextReviewDate: c.next_review_date,
                easeFactor: c.ease_factor
            })) as any);
        };
        loadData();
    }, []);

    // Apply theme to DOM and save to localStorage
    useEffect(() => {
        if (settings.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Save theme to localStorage for instant load on refresh
        localStorage.setItem('study_planner_theme', settings.theme);
    }, [settings.theme]);

    // Notification Checker
    useEffect(() => {
        const interval = setInterval(() => {
            if (!settings.notificationsEnabled || Notification.permission !== 'granted') return;

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
    }, [sessions, settings.notificationsEnabled]);

    // 2. Actions (Optimistic Updates + Supabase Sync)

    const addGoal = async (goalData: any) => {
        if (!user) return;
        const newGoal = { ...goalData, user_id: user.id };
        const { data } = await supabase.from('goals').insert(newGoal).select().single();
        if (data) setGoals([...goals, { ...data, createdAt: data.created_at } as any]);
    };

    const updateGoal = async (id: string, updates: any) => {
        setGoals(goals.map(g => g.id === id ? { ...g, ...updates } : g));
        await supabase.from('goals').update(updates).eq('id', id);
    };

    const deleteGoal = async (id: string) => {
        setGoals(goals.filter(g => g.id !== id));
        await supabase.from('goals').delete().eq('id', id);
    };

    const addTask = async (taskData: any) => {
        if (!user) return;
        const dbTask = {
            user_id: user.id,
            title: taskData.title,
            status: taskData.status,
            priority: taskData.priority,
            completed: taskData.completed,
            due_date: taskData.deadline || taskData.dueDate,
            goal_id: taskData.goalId,
            subject_id: taskData.subjectId
        };
        const { data } = await supabase.from('tasks').insert(dbTask).select().single();
        if (data) setTasks([...tasks, { ...data, subjectId: data.subject_id, goalId: data.goal_id, dueDate: data.due_date, deadline: data.due_date, createdAt: data.created_at } as any]);
    };

    const toggleTask = async (id: string) => {
        const task = tasks.find(t => t.id === id);
        if (task) {
            const newStatus = !task.completed ? 'completed' : 'todo';
            const updates = { completed: !task.completed, status: newStatus as any };
            setTasks(tasks.map(t => t.id === id ? { ...t, ...updates } : t));

            await supabase.from('tasks').update({ completed: !task.completed, status: newStatus }).eq('id', id);

            if (!task.completed) awardXP(50);
        }
    };

    const updateTask = async (id: string, updates: Partial<Task>) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, ...updates } : t));
        const dbUpdates: any = { ...updates };
        if (updates.subjectId) dbUpdates.subject_id = updates.subjectId;
        if (updates.goalId) dbUpdates.goal_id = updates.goalId;
        if (updates.dueDate) dbUpdates.due_date = updates.dueDate;
        if (updates.deadline) dbUpdates.due_date = updates.deadline;

        delete dbUpdates.subjectId;
        delete dbUpdates.goalId;
        delete dbUpdates.dueDate;
        delete dbUpdates.deadline;

        await supabase.from('tasks').update(dbUpdates).eq('id', id);
    };

    const deleteTask = async (id: string) => {
        setTasks(tasks.filter(t => t.id !== id));
        await supabase.from('tasks').delete().eq('id', id);
    };

    const addSubject = async (subjectData: any) => {
        if (!user) return;
        const dbSubject = {
            user_id: user.id,
            name: subjectData.name,
            color: subjectData.color,
            teacher_name: subjectData.teacherName,
            room_location: subjectData.roomLocation,
            schedule: subjectData.schedule || []
        };
        const { data } = await supabase.from('subjects').insert(dbSubject).select().single();
        if (data) setSubjects([...subjects, {
            id: data.id,
            name: data.name,
            color: data.color,
            schedule: data.schedule,
            teacherName: data.teacher_name,
            roomLocation: data.room_location,
            formattedSchedule: [] // shim if needed
        } as any]);
    };

    const deleteSubject = async (id: string) => {
        try {
            if (!user) {
                alert("Fanni o'chirish uchun tizimga kirishingiz kerak");
                return;
            }

            const { error } = await supabase.from('subjects').delete().eq('id', id).eq('user_id', user.id);

            if (error) {
                console.error('Subject delete error:', error);
                alert(`Fanni o'chirishda xatolik: ${error.message}`);
                return;
            }

            // Faqat muvaffaqiyatli o'chirilgandan keyin state ni yangilash
            setSubjects(subjects.filter(s => s.id !== id));
        } catch (error) {
            console.error('Subject delete failed:', error);
            alert("Fanni o'chirishda xatolik yuz berdi. Iltimos, internetga ulanganingizni tekshiring.");
        }
    };

    const addSession = async (sessionData: any) => {
        if (!user) return;
        const dbSession = {
            user_id: user.id,
            subject_id: sessionData.subjectId,
            start_time: sessionData.startTime,
            duration: sessionData.duration,
            type: sessionData.type,
            mood_before: sessionData.moodBefore,
            mood_after: sessionData.moodAfter,
            completed: sessionData.completed
        };
        const { data } = await supabase.from('study_sessions').insert(dbSession).select().single();
        if (data) setSessions([...sessions, { ...data, subjectId: data.subject_id, startTime: data.start_time, moodBefore: data.mood_before, moodAfter: data.mood_after } as any]);
    };

    // Notes
    const addNote = async (noteData: any) => {
        if (!user) return;
        const dbNote = {
            user_id: user.id,
            subject_id: noteData.subjectId,
            title: noteData.title,
            content: noteData.content,
            attachments: noteData.attachments
        };
        const { data } = await supabase.from('notes').insert(dbNote).select().single();
        if (data) setNotes([...notes, { ...data, subjectId: data.subject_id, createdAt: data.created_at, updatedAt: data.updated_at } as any]);
    };

    const updateNote = async (id: string, updates: any) => {
        setNotes(notes.map(n => n.id === id ? { ...n, ...updates } : n));
        const dbUpdates = { ...updates };
        if (updates.subjectId) {
            dbUpdates.subject_id = updates.subjectId;
            delete dbUpdates.subjectId;
        }
        await supabase.from('notes').update(dbUpdates).eq('id', id);
    };

    const deleteNote = async (id: string) => {
        setNotes(notes.filter(n => n.id !== id));
        await supabase.from('notes').delete().eq('id', id);
    };

    // Flashcards
    const addFlashcard = async (cardData: any) => {
        if (!user) return;
        const { data } = await supabase.from('flashcards').insert({
            user_id: user.id,
            subject_id: cardData.subjectId,
            front: cardData.front,
            back: cardData.back,
            next_review_date: new Date().toISOString()
        }).select().single();
        if (data) setFlashcards([...flashcards, { ...data, subjectId: data.subject_id, nextReviewDate: data.next_review_date, easeFactor: data.ease_factor } as any]);
    };

    const updateFlashcard = async (id: string, updates: any) => {
        setFlashcards(flashcards.map(c => c.id === id ? { ...c, ...updates } : c));
        // No complex mapping needed for simple updates usually, but strictly:
        const dbUpdates = { ...updates };
        if (updates.subjectId) delete dbUpdates.subjectId; // usually won't change subject
        if (updates.nextReviewDate) {
            dbUpdates.next_review_date = updates.nextReviewDate;
            delete dbUpdates.nextReviewDate;
        }
        await supabase.from('flashcards').update(dbUpdates).eq('id', id);
    };

    const deleteFlashcard = async (id: string) => {
        setFlashcards(flashcards.filter(c => c.id !== id));
        await supabase.from('flashcards').delete().eq('id', id);
    };

    const reviewFlashcard = async (id: string, _grade: any) => {
        // Simplified review logic for cloud save
        const card = flashcards.find(c => c.id === id);
        if (card) {
            // In real app, calculate new interval here. For now, push to tomorrow.
            const updates = {
                interval: (card.interval || 0) + 1,
                repetitions: (card.repetitions || 0) + 1
            };
            setFlashcards(flashcards.map(c => c.id === id ? { ...c, ...updates } : c));
            await supabase.from('flashcards').update(updates).eq('id', id);
            awardXP(5);
        }
    };

    const refreshData = async () => {
        // No-op for now or re-fetch
        window.location.reload();
    };

    const awardXP = async (amount: number) => {
        if (!user) return;
        const newXp = settings.totalXp + amount;
        const newLevel = Math.floor(newXp / 1000) + 1;

        // Streak Logic
        const today = new Date().toISOString().split('T')[0];
        let newStreak = settings.currentStreak;
        if (settings.lastActivityDate !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().split('T')[0];

            if (settings.lastActivityDate === yesterdayStr) {
                newStreak += 1;
            } else {
                newStreak = 1;
            }
        }

        const newSettings = {
            ...settings,
            totalXp: newXp,
            level: newLevel,
            currentStreak: newStreak,
            lastActivityDate: today
        };

        setSettings(newSettings);

        await supabase.from('profiles').update({
            total_xp: newXp,
            level: newLevel,
            current_streak: newStreak,
            last_activity_date: today
        }).eq('id', user.id);
    };

    const updateSettings = async (updates: Partial<Settings>) => {
        const newSettings = { ...settings, ...updates };
        setSettings(newSettings);
        if (user) {
            const profileUpdates: any = {
                theme: newSettings.theme,
                notifications_enabled: newSettings.notificationsEnabled
            };
            if (updates.googleApiKey !== undefined) {
                profileUpdates.google_api_key = updates.googleApiKey;
            }
            await supabase.from('profiles').update(profileUpdates).eq('id', user.id);
        }
    };

    // Focus Timer State
    const [focusState, setFocusState] = useState<{
        timeLeft: number;
        isActive: boolean;
        mode: 'focus' | 'short_break' | 'long_break';
        selectedSubjectId: string | null;
        lastUpdated?: number;
        isSessionCompleted: boolean;
        bgSound: string;
        isMuted: boolean;
    }>(() => {
        const saved = localStorage.getItem('study_planner_focus_state');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (parsed.isActive && parsed.lastUpdated) {
                    const now = Date.now();
                    const passedSeconds = Math.floor((now - parsed.lastUpdated) / 1000);
                    const newTimeLeft = parsed.timeLeft - passedSeconds;

                    if (newTimeLeft <= 0) {
                        return { ...parsed, timeLeft: 0, isActive: false, isSessionCompleted: true };
                    }
                    return { ...parsed, timeLeft: newTimeLeft, isSessionCompleted: false };
                }
                return { ...parsed, isSessionCompleted: parsed.isSessionCompleted || false, bgSound: parsed.bgSound || 'none', isMuted: parsed.isMuted || false };
            } catch (e) {
                console.error("Failed to parse timer state", e);
            }
        }
        return {
            timeLeft: 25 * 60,
            isActive: false,
            mode: 'focus',
            selectedSubjectId: null,
            isSessionCompleted: false,
            bgSound: 'none',
            isMuted: false
        };
    });

    // Save to localStorage on change
    useEffect(() => {
        localStorage.setItem('study_planner_focus_state', JSON.stringify({
            ...focusState,
            lastUpdated: Date.now()
        }));
    }, [focusState]);

    // Timer Logic with Ringtone
    useEffect(() => {
        let interval: any = null;
        if (focusState.isActive && focusState.timeLeft > 0) {
            interval = setInterval(() => {
                setFocusState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
            }, 1000);
        } else if (focusState.timeLeft === 0 && focusState.isActive) {
            setFocusState(prev => ({ ...prev, isActive: false, isSessionCompleted: true }));

            if (settings.notificationsEnabled) {
                new Notification("Vaqt tugadi!", {
                    body: focusState.mode === 'focus' ? "Ajoyib! Tanaffus vaqti." : "Tanaffus tugadi. Diqqatni jamlaymizmi?",
                    icon: '/vite.svg'
                });
            }
        }
        return () => clearInterval(interval);
    }, [focusState.isActive, focusState.timeLeft, settings.notificationsEnabled, focusState.mode]);


    const startTimer = () => setFocusState(prev => ({ ...prev, isActive: true }));
    const pauseTimer = () => setFocusState(prev => ({ ...prev, isActive: false }));
    const resetTimer = () => {
        const initial = focusState.mode === 'focus' ? 25 * 60 : focusState.mode === 'short_break' ? 5 * 60 : 15 * 60;
        setFocusState(prev => ({ ...prev, isActive: false, isSessionCompleted: false, timeLeft: initial }));
    };
    const switchMode = (mode: 'focus' | 'short_break' | 'long_break') => {
        const initial = mode === 'focus' ? 25 * 60 : mode === 'short_break' ? 5 * 60 : 15 * 60;
        setFocusState(prev => ({ ...prev, mode, isActive: false, isSessionCompleted: false, timeLeft: initial }));
    };
    const setFocusSubject = (id: string) => setFocusState(prev => ({ ...prev, selectedSubjectId: id }));
    const setBgSound = (sound: string) => setFocusState(prev => ({ ...prev, bgSound: sound }));
    const setMuted = (muted: boolean) => setFocusState(prev => ({ ...prev, isMuted: muted }));


    return (
        <StudyPlannerContext.Provider value={{
            goals, tasks, subjects, sessions,
            addGoal, updateGoal, deleteGoal,
            addTask, toggleTask, deleteTask,
            addSubject, deleteSubject,
            addSession, awardXP,
            notes, addNote, updateNote, deleteNote,
            flashcards, addFlashcard, updateFlashcard, deleteFlashcard, reviewFlashcard,
            updateTask, refreshData,
            settings, updateSettings,
            // Exposed Focus State
            focusState, startTimer, pauseTimer, resetTimer, switchMode, setFocusSubject, setBgSound, setMuted
        }}>
            {children}
        </StudyPlannerContext.Provider>
    );
};

export const useStudyPlanner = () => {
    const context = useContext(StudyPlannerContext);
    if (context === undefined) {
        throw new Error('useStudyPlanner must be used within a StudyPlannerProvider');
    }
    return context;
};
