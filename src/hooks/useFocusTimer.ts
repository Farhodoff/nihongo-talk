import { useState, useEffect } from 'react';

import { FocusState } from '../types/focus';

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
                    icon: '/favicon.svg'
                });
            }
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [focusState.isActive, focusState.timeLeft, focusState.mode, notificationsEnabled]);

    // Cross-tab Synchronization via Storage Event
    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'study_planner_focus_state' && e.newValue) {
                try {
                    const parsed = JSON.parse(e.newValue);
                    if (parsed.isActive && parsed.lastUpdated) {
                        const now = Date.now();
                        const passedSeconds = Math.floor((now - parsed.lastUpdated) / 1000);
                        const newTimeLeft = Math.max(0, parsed.timeLeft - passedSeconds);
                        setFocusState(prev => ({
                            ...prev,
                            ...parsed,
                            timeLeft: newTimeLeft,
                            isActive: newTimeLeft > 0 ? parsed.isActive : false,
                            isSessionCompleted: newTimeLeft <= 0
                        }));
                    } else {
                        setFocusState(prev => ({ ...prev, ...parsed }));
                    }
                } catch (e) {
                    console.warn('Cross-tab focus state sync warning:', e);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    // Page Visibility Resync (resumes accurate time when returning from background tab)
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                const saved = localStorage.getItem('study_planner_focus_state');
                if (saved) {
                    try {
                        const parsed = JSON.parse(saved);
                        if (parsed.isActive && parsed.lastUpdated) {
                            const now = Date.now();
                            const passedSeconds = Math.floor((now - parsed.lastUpdated) / 1000);
                            const newTimeLeft = Math.max(0, parsed.timeLeft - passedSeconds);
                            setFocusState(prev => ({
                                ...prev,
                                ...parsed,
                                timeLeft: newTimeLeft,
                                isActive: newTimeLeft > 0 ? parsed.isActive : false,
                                isSessionCompleted: newTimeLeft <= 0
                            }));
                        }
                    } catch (e) {
                        console.warn('Visibility focus sync warning:', e);
                    }
                }
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, []);

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

    const setCustomTime = (seconds: number) => {
        setFocusState(prev => ({
            ...prev,
            mode: 'focus',
            timeLeft: seconds,
            isActive: false,
            isSessionCompleted: false
        }));
    };

    return {
        focusState,
        startTimer,
        pauseTimer,
        resetTimer,
        switchMode,
        setCustomTime,
        setFocusSubject,
        setFocusTask,
        setBgSound,
        setMuted
    };
};
