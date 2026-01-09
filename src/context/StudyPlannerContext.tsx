import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Flashcard, Goal, Note, StudySession, Subject, Task, WhiteboardMetadata, StudyNote } from '../types';

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
    const [tasks, setTasks] = useState<Task[]>([]);
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [goals, setGoals] = useState<Goal[]>([]);
    const [notes, setNotes] = useState<Note[]>([]);
    const [studyNotes, setStudyNotes] = useState<StudyNote[]>([]);
    const [sessions, setSessions] = useState<StudySession[]>([]);
    const [whiteboards, setWhiteboards] = useState<WhiteboardMetadata[]>([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);

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
            const [tasksRes, cardsRes, subjectsRes, goalsRes, notesRes, sessionsRes, studyNotesRes, whiteboardsRes, profileRes] = await Promise.all([
                supabase.from('tasks').select('*').eq('user_id', currentUser.id),
                supabase.from('flashcards').select('*').eq('user_id', currentUser.id),
                supabase.from('subjects').select('*').eq('user_id', currentUser.id),
                supabase.from('goals').select('*').eq('user_id', currentUser.id),
                supabase.from('notes').select('*').eq('user_id', currentUser.id),
                supabase.from('study_sessions').select('*').eq('user_id', currentUser.id),
                supabase.from('study_notes').select('*').eq('user_id', currentUser.id),
                supabase.from('whiteboards').select('id, subject_id, user_id, title, updated_at').eq('user_id', currentUser.id),
                supabase.from('profiles').select('*').eq('id', currentUser.id).maybeSingle(),
            ]);

            // Normalize Data (snake_case -> camelCase)
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

    useEffect(() => {
        fetchData();
    }, []);

    // Apply theme to DOM and save to localStorage
    useEffect(() => {
        if (settings.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
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

    const addTask = async (taskData: Partial<Task>) => {
        const { data: { user } } = await supabase.auth.getUser();
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
        if (!task) return;

        const newCompleted = !task.completed;

        // Update task - use 'done' status as per database constraint
        await updateTask(id, { completed: newCompleted, status: newCompleted ? 'done' : 'todo' });

        // Award XP only if newly completed (not if unchecking)
        if (newCompleted) {
            await awardXP(50);
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

    const updateTaskStatus = async (id: string, status: string) => {
        const completed = status === 'done' || status === 'completed';
        setTasks(tasks.map(t => t.id === id ? { ...t, status: status as any, completed } : t));
        await supabase.from('tasks').update({ status: status, completed }).eq('id', id);
        if (completed) {
            await awardXP(50);
        }
    };

    const deleteTask = async (id: string) => {
        setTasks(tasks.filter(t => t.id !== id));
        await supabase.from('tasks').delete().eq('id', id);
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
        await awardXP(5);
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
