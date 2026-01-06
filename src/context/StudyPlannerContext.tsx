import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

// ===== TURLAR (TYPES) =====
export interface Flashcard {
    id: string;
    subject_id: string;
    front: string;
    back: string;
    next_review_date: string;
    interval?: number;
    repetitions?: number;
    ease_factor?: number;
}

export interface Task {
    id: string;
    title: string;
    status: 'todo' | 'in_progress' | 'done' | 'completed';
    // Supporting both for now during refactor
    subject_id?: string;
    subjectId?: string;
    goal_id?: string;
    goalId?: string;
    due_date?: string;
    dueDate?: string;
    priority?: string;
    completed?: boolean;
    created_at?: string;
    createdAt?: string;
}

export interface Subject {
    id: string;
    name: string;
    color: string;
    description?: string;
    icon?: string;
    teacher_name?: string;
    room_location?: string;
    schedule?: any[];
}

export interface Goal {
    id: string;
    title: string;
    description?: string;
    target_date?: string;
    progress?: number;
    color?: string;
    created_at?: string;
}

export interface Note {
    id: string;
    subject_id: string;
    title: string;
    content: string;
    attachments?: string[];
    created_at?: string;
    updated_at?: string;
}

export interface StudySession {
    id: string;
    subject_id: string;
    start_time: string;
    duration: number;
    type?: string;
    mood_before?: number;
    mood_after?: number;
    completed?: boolean;
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

// ===== CONTEXT TURI =====
interface StudyContextType {
    // Ma'lumotlar
    tasks: Task[];
    flashcards: Flashcard[];
    subjects: Subject[];
    goals: Goal[];
    notes: Note[];
    sessions: StudySession[];
    settings: Settings;
    loading: boolean;

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

    // Session operatsiyalari
    addSession: (session: Partial<StudySession>) => Promise<void>;

    // Settings va boshqalar
    updateSettings: (updates: Partial<Settings>) => Promise<void>;
    awardXP: (amount: number) => Promise<void>;
    refreshData: () => Promise<void>;

    // Focus Timer (stub)
    focusState: any;
    startTimer: () => void;
    pauseTimer: () => void;
    resetTimer: () => void;
    switchMode: (mode: any) => void;
    setFocusSubject: (id: string) => void;
    setFocusTask: (id: string | null) => void;
    setBgSound: (sound: string) => void;
    setMuted: (muted: boolean) => void;
    getRank: (level: number) => string;
}

const StudyPlannerContext = createContext<StudyContextType | undefined>(undefined);

// ===== PROVIDER =====
export const StudyPlannerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [goals, setGoals] = useState<Goal[]>([]);
    const [notes, setNotes] = useState<Note[]>([]);
    const [sessions, setSessions] = useState<StudySession[]>([]);
    const [settings, setSettings] = useState<Settings>({
        theme: 'light',
        notificationsEnabled: true,
        totalXp: 0,
        level: 1,
        currentStreak: 0,
        lastActivityDate: null,
    });
    const [loading, setLoading] = useState(true);

    // Ma'lumotlarni yuklash
    const fetchData = async () => {
        setLoading(true);
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;

            // Parallel yuklash
            const [tasksRes, cardsRes, subjectsRes, goalsRes, notesRes, sessionsRes, profileRes] = await Promise.all([
                supabase.from('tasks').select('*').eq('user_id', user.id),
                supabase.from('flashcards').select('*').eq('user_id', user.id),
                supabase.from('subjects').select('*').eq('user_id', user.id),
                supabase.from('goals').select('*').eq('user_id', user.id),
                supabase.from('notes').select('*').eq('user_id', user.id),
                supabase.from('study_sessions').select('*').eq('user_id', user.id),
                supabase.from('profiles').select('*').eq('id', user.id).maybeSingle(),
            ]);

            // Normalize Data (snake_case -> camelCase)
            const normalizedTasks: Task[] = (tasksRes.data || []).map((t: any) => ({
                id: t.id,
                title: t.title,
                status: t.status,
                priority: t.priority,
                // Ensure completed is synced with status if missing
                completed: t.completed !== undefined ? t.completed : (t.status === 'done' || t.status === 'completed'),
                subjectId: t.subject_id,
                goalId: t.goal_id,
                dueDate: t.due_date,
                createdAt: t.created_at
            } as any)); // Helper cast due to interface mismatch in this file (Context defines snake_case but we want to supply camelCase properties for components)

            // We need to update the Context Interface to match this new shape or just cast it. 
            // Ideally we should update the interface in this file effectively.

            setTasks(normalizedTasks);

            setFlashcards((cardsRes.data || []).map((c: any) => ({
                ...c,
                subjectId: c.subject_id,
                nextReviewDate: c.next_review_date,
                easeFactor: c.ease_factor,
            })));

            setSubjects((subjectsRes.data || []).map((s: any) => ({
                ...s,
                // subjects table usually purely snake_case in logic but if components need camelCase...
                // Let's check Subject usage.
            })));

            // Re-using raw data for others if no conflicts found yet.
            setSubjects(subjectsRes.data || []);
            setGoals(goalsRes.data || []);
            setNotes(notesRes.data || []);
            setSessions(sessionsRes.data || []);

            if (profileRes.data) {
                setSettings({
                    theme: profileRes.data.theme || 'light',
                    notificationsEnabled: profileRes.data.notifications_enabled ?? true,
                    totalXp: profileRes.data.total_xp || 0,
                    level: profileRes.data.level || 1,
                    currentStreak: profileRes.data.current_streak || 0,
                    lastActivityDate: profileRes.data.last_activity_date,
                    googleApiKey: profileRes.data.google_api_key,
                });
            }
        } catch (error) {
            console.error("Ma'lumot yuklashda xato:", error);
        } finally {
            setLoading(false);
        }
    };

    // ===== TASK OPERATSIYALARI =====
    const addTask = async (taskData: Partial<Task>) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { data } = await supabase.from('tasks').insert({ ...taskData, user_id: user.id }).select().single();
        if (data) setTasks([...tasks, data]);
    };

    const updateTask = async (id: string, updates: Partial<Task>) => {
        // Convert camelCase to snake_case for Supabase
        const dbUpdates: any = {};
        if (updates.subjectId !== undefined) dbUpdates.subject_id = updates.subjectId;
        if (updates.goalId !== undefined) dbUpdates.goal_id = updates.goalId;
        if (updates.dueDate !== undefined) dbUpdates.due_date = updates.dueDate;
        if (updates.title !== undefined) dbUpdates.title = updates.title;
        if (updates.status !== undefined) dbUpdates.status = updates.status;
        if (updates.priority !== undefined) dbUpdates.priority = updates.priority;
        if (updates.completed !== undefined) dbUpdates.completed = updates.completed;

        console.log('🔍 Updating task:', id, 'with dbUpdates:', dbUpdates);
        const { data, error } = await supabase.from('tasks').update(dbUpdates).eq('id', id).select();
        console.log('✅ Update result:', { data, error });

        setTasks(tasks.map(t => t.id === id ? { ...t, ...updates } : t));
    };

    const deleteTask = async (id: string) => {
        await supabase.from('tasks').delete().eq('id', id);
        setTasks(tasks.filter(t => t.id !== id));
    };

    const toggleTask = async (id: string) => {
        const task = tasks.find(t => t.id === id);
        if (!task) return;

        const newCompleted = !task.completed;

        // Update task - use 'done' status as per database constraint
        await updateTask(id, { completed: newCompleted, status: newCompleted ? 'done' : 'todo' });

        // Award XP only if newly completed (not if unchecking)
        if (newCompleted) {
            await awardXP(50);
        }
    };

    const updateTaskStatus = async (id: string, status: string) => {
        const { error } = await supabase.from('tasks').update({ status }).eq('id', id);

        if (!error) {
            // Agar vazifa bajarilgan bo'lsa (done yoki completed), XP beramiz
            if (status === 'done' || status === 'completed') {
                await supabase.functions.invoke('update-xp', {
                    body: { amount: 50, reason: 'Task Completed' }
                });
                await awardXP(50); // Local state update immediately for better UX
            }

            setTasks(prev => prev.map(t => t.id === id ? { ...t, status: status as any, completed: (status === 'done' || status === 'completed') } : t));
        }
    };

    const getRank = (level: number): string => {
        if (level >= 30) return "Master (Ustoz)";
        if (level >= 20) return "Expert (Mutaxassis)";
        if (level >= 10) return "Adept (Tajribali)";
        if (level >= 5) return "Apprentice (O'rganuvchi)";
        return "Novice (Boshlovchi)";
    };

    // ===== FLASHCARD OPERATSIYALARI =====
    const addFlashcard = async (cardData: Partial<Flashcard>) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { data } = await supabase.from('flashcards').insert({
            ...cardData,
            user_id: user.id,
            next_review_date: new Date().toISOString(),
        }).select().single();
        if (data) setFlashcards([...flashcards, data]);
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
        await awardXP(5);
    };

    // ===== SUBJECT OPERATSIYALARI =====
    const addSubject = async (subjectData: Partial<Subject>) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return null;

        const { data } = await supabase.from('subjects').insert({ ...subjectData, user_id: user.id }).select().single();
        if (data) setSubjects([...subjects, data]);
        return data;
    };

    const deleteSubject = async (id: string) => {
        await supabase.from('subjects').delete().eq('id', id);
        setSubjects(subjects.filter(s => s.id !== id));
    };

    // ===== GOAL OPERATSIYALARI =====
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
        await supabase.from('goals').delete().eq('id', id);
        setGoals(goals.filter(g => g.id !== id));
    };

    // ===== NOTE OPERATSIYALARI =====
    const addNote = async (noteData: Partial<Note>) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return null;

        const { data } = await supabase.from('notes').insert({ ...noteData, user_id: user.id }).select().single();
        if (data) setNotes([...notes, data]);
        return data;
    };

    const updateNote = async (id: string, updates: Partial<Note>) => {
        await supabase.from('notes').update(updates).eq('id', id);
        setNotes(notes.map(n => n.id === id ? { ...n, ...updates } : n));
    };

    const deleteNote = async (id: string) => {
        await supabase.from('notes').delete().eq('id', id);
        setNotes(notes.filter(n => n.id !== id));
    };

    // ===== SESSION OPERATSIYALARI =====
    const addSession = async (sessionData: Partial<StudySession>) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { data } = await supabase.from('study_sessions').insert({ ...sessionData, user_id: user.id }).select().single();
        if (data) setSessions([...sessions, data]);
    };

    // ===== SETTINGS VA XP =====
    const updateSettings = async (updates: Partial<Settings>) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        setSettings({ ...settings, ...updates });
        // Use upsert to handle both insert and update
        const { error } = await supabase.from('profiles').upsert({
            id: user.id,
            theme: updates.theme || settings.theme,
            notifications_enabled: updates.notificationsEnabled ?? settings.notificationsEnabled,
            google_api_key: updates.googleApiKey || settings.googleApiKey,
            updated_at: new Date().toISOString()
        });

        if (error) {
            console.error('Error updating settings:', error);
        }
    };

    const awardXP = async (amount: number) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const newXp = settings.totalXp + amount;
        const newLevel = Math.floor(newXp / 1000) + 1;

        setSettings({ ...settings, totalXp: newXp, level: newLevel });
        // Use upsert here as well
        const { error } = await supabase.from('profiles').upsert({
            id: user.id,
            total_xp: newXp,
            level: newLevel,
            updated_at: new Date().toISOString()
        });

        if (error) {
            console.error('Error awarding XP:', error);
        }
    };

    // ===== FOCUS TIMER (TO'LIQ VERSIYA) =====
    const [focusState, setFocusState] = useState<{
        timeLeft: number;
        isActive: boolean;
        mode: 'focus' | 'short_break' | 'long_break';
        selectedSubjectId: string | null;
        selectedTaskId: string | null;
        lastUpdated?: number;
        isSessionCompleted: boolean;
        bgSound: string;
        isMuted: boolean;
    }>(() => {
        // localStorage'dan yuklash
        const saved = localStorage.getItem('study_planner_focus_state');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Agar timer ishlayotgan bo'lsa va sahifa yangilangan bo'lsa, o'tgan vaqtni hisobga olamiz
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
                console.error("Timer state yuklashda xato", e);
            }
        }
        // Default state
        return {
            timeLeft: 25 * 60,
            isActive: false,
            mode: 'focus',
            selectedSubjectId: null,
            selectedTaskId: null,
            isSessionCompleted: false,
            bgSound: 'none',
            isMuted: false
        };
    });

    // Timer interval
    useEffect(() => {
        let interval: any = null;
        if (focusState.isActive && focusState.timeLeft > 0) {
            interval = setInterval(() => {
                setFocusState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
            }, 1000);
        } else if (focusState.timeLeft === 0 && focusState.isActive) {
            // Timer tugadi
            setFocusState(prev => ({ ...prev, isActive: false, isSessionCompleted: true }));

            // Notification
            if (settings.notificationsEnabled && Notification.permission === 'granted') {
                new Notification("Vaqt tugadi!", {
                    body: focusState.mode === 'focus' ? "Ajoyib! Tanaffus vaqti." : "Tanaffus tugadi. Diqqatni jamlaymizmi?",
                    icon: '/vite.svg'
                });
            }
        }
        return () => clearInterval(interval);
    }, [focusState.isActive, focusState.timeLeft, focusState.mode, settings.notificationsEnabled]);

    // localStorage'ga saqlash
    useEffect(() => {
        localStorage.setItem('study_planner_focus_state', JSON.stringify({
            ...focusState,
            lastUpdated: Date.now()
        }));
    }, [focusState]);

    const startTimer = () => setFocusState(prev => ({ ...prev, isActive: true, isSessionCompleted: false }));
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
    const setFocusTask = (id: string | null) => setFocusState(prev => ({ ...prev, selectedTaskId: id }));
    const setBgSound = (sound: string) => setFocusState(prev => ({ ...prev, bgSound: sound }));
    const setMuted = (muted: boolean) => setFocusState(prev => ({ ...prev, isMuted: muted }));


    // Theme Effect
    useEffect(() => {
        if (settings.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [settings.theme]);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <StudyPlannerContext.Provider value={{
            tasks, flashcards, subjects, goals, notes, sessions, settings, loading,
            addTask, updateTask, deleteTask, toggleTask, updateTaskStatus,
            addFlashcard, updateFlashcard, deleteFlashcard, reviewFlashcard,
            addSubject, deleteSubject,
            addGoal, updateGoal, deleteGoal,
            addNote, updateNote, deleteNote,
            addSession,
            updateSettings, awardXP, refreshData: fetchData,
            focusState, startTimer, pauseTimer, resetTimer, switchMode, setFocusSubject, setFocusTask, setBgSound, setMuted,
            getRank
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
