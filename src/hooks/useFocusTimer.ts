import { useState, useEffect } from 'react';

export interface FocusState {
    timeLeft: number;
    isActive: boolean;
    mode: 'focus' | 'short_break' | 'long_break';
    selectedSubjectId: string | null;
    selectedTaskId: string | null;
    lastUpdated?: number;
    isSessionCompleted: boolean;
    bgSound: string;
    isMuted: boolean;
}

export const useFocusTimer = (notificationsEnabled: boolean) => {
    const [focusState, setFocusState] = useState<FocusState>(() => {
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
            timeLeft: 1 * 60,
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
        let interval: ReturnType<typeof setInterval> | null = null;
        if (focusState.isActive && focusState.timeLeft > 0) {
            interval = setInterval(() => {
                setFocusState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
            }, 1000);
        } else if (focusState.timeLeft === 0 && focusState.isActive) {
            // Timer tugadi
            setFocusState(prev => ({ ...prev, isActive: false, isSessionCompleted: true }));

            // Notification
            if (notificationsEnabled && Notification.permission === 'granted') {
                new Notification("Vaqt tugadi!", {
                    body: focusState.mode === 'focus' ? "Ajoyib! Tanaffus vaqti." : "Tanaffus tugadi. Diqqatni jamlaymizmi?",
                    icon: '/vite.svg'
                });
            }
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [focusState.isActive, focusState.timeLeft, focusState.mode, notificationsEnabled]);

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
        const initial = focusState.mode === 'focus' ? 1 * 60 : focusState.mode === 'short_break' ? 5 * 60 : 15 * 60;
        setFocusState(prev => ({ ...prev, isActive: false, isSessionCompleted: false, timeLeft: initial }));
    };
    const switchMode = (mode: 'focus' | 'short_break' | 'long_break') => {
        const initial = mode === 'focus' ? 1 * 60 : mode === 'short_break' ? 5 * 60 : 15 * 60;
        setFocusState(prev => ({ ...prev, mode, isActive: false, isSessionCompleted: false, timeLeft: initial }));
    };

    const setFocusSubject = (id: string) => setFocusState(prev => ({ ...prev, selectedSubjectId: id }));
    const setFocusTask = (id: string | null) => setFocusState(prev => ({ ...prev, selectedTaskId: id }));
    const setBgSound = (sound: string) => setFocusState(prev => ({ ...prev, bgSound: sound }));
    const setMuted = (muted: boolean) => setFocusState(prev => ({ ...prev, isMuted: muted }));

    return {
        focusState,
        startTimer,
        pauseTimer,
        resetTimer,
        switchMode,
        setFocusSubject,
        setFocusTask,
        setBgSound,
        setMuted
    };
};
