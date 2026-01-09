import { Bell, CheckCircle2, Music, Pause, Play, RefreshCw, Volume2, VolumeX } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';

const MOODS = [
    { value: 1, label: 'Stressed', emoji: '😫' },
    { value: 2, label: 'Tired', emoji: '😕' },
    { value: 3, label: 'Okay', emoji: '😐' },
    { value: 4, label: 'Good', emoji: '🙂' },
    { value: 5, label: 'Great', emoji: '🤩' },
];

const SOUNDS = [
    { id: 'none', label: 'Silent', url: '' },
    { id: 'lofi', label: 'Lofi Music', url: '/lofi-music.mp3' },
    { id: 'rain', label: 'Heavy Rain', url: 'https://actions.google.com/sounds/v1/weather/rain_heavy.ogg' },
    { id: 'forest', label: 'Forest', url: 'https://actions.google.com/sounds/v1/ambiences/forest_morning.ogg' },
    { id: 'cafe', label: 'Cafe', url: 'https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg' },
];

const FocusPage: React.FC = () => {
    const { subjects, addSession, awardXP, focusState, startTimer, pauseTimer, resetTimer, switchMode, setFocusSubject, setFocusTask, setBgSound, setMuted, tasks, updateTaskStatus } = useStudyData();

    // Mood State
    const [moodBefore, setMoodBefore] = useState<number | null>(null);
    const [showMoodCheck, setShowMoodCheck] = useState<'before' | 'after' | null>(null);
    // Removed local state: selectedTaskId

    // Pending Tasks
    const pendingTasks = tasks.filter(t => t.status !== 'done');

    // Ringtone State (removed - now in Context)
    const ringtoneRef = useRef<HTMLAudioElement | null>(null);

    // Calculated Progress
    const initialTime = focusState.mode === 'focus' ? 25 * 60 : focusState.mode === 'short_break' ? 5 * 60 : 15 * 60;
    const progress = ((initialTime - focusState.timeLeft) / initialTime) * 100;

    // Watch for timer completion via focusState to trigger mood check
    useEffect(() => {
        if (focusState.timeLeft === 0 && !focusState.isActive) {
            handleTimerEnd();
        }
    }, [focusState.timeLeft, focusState.isActive]);


    const handleStartClick = () => {
        if (focusState.isActive) {
            pauseTimer();
            return;
        }

        if (focusState.mode === 'focus' && !moodBefore) {
            setShowMoodCheck('before'); // Ask mood first
        } else {
            startTimer();
        }
    };

    const handleMoodSelect = (value: number) => {
        if (showMoodCheck === 'before') {
            setMoodBefore(value);
            setShowMoodCheck(null);
            startTimer();
        } else if (showMoodCheck === 'after') {
            saveSession(value);
            setShowMoodCheck(null);
            setMoodBefore(null); // Reset
            resetTimer();
        }
    };

    const playRingtone = () => {
        if (ringtoneRef.current) {
            ringtoneRef.current.currentTime = 0;
            ringtoneRef.current.play().catch(e => console.log("Ringtone play failed", e));
        }
    };

    const handleTimerEnd = () => {
        // Play ringtone when timer completes
        playRingtone();

        // Notification handled globally in Context
        if (focusState.mode === 'focus') {
            // Avoid double trigger if possible, or check if we already showed popup
            if (!showMoodCheck) setShowMoodCheck('after');
        } else {
            resetTimer();
        }
    };

    const saveSession = async (moodAfterValue: number) => {

        let taskCompleted = false;

        // If a task was selected, ask if it's done
        if (focusState.selectedTaskId) {
            if (window.confirm("Tanlangan vazifani tugatdingizmi?")) {
                await updateTaskStatus(focusState.selectedTaskId, 'done');
                taskCompleted = true;
                // bonusXp = 50; // Task bonus (already handled in updateTaskStatus but we track here for logic if needed)
                // Note: updateTaskStatus inside context awards XP. prevent double dipping if context does it.
                // Yes, context's updateTaskStatus awards 50 XP.
            }
        }

        addSession({
            subjectId: focusState.selectedSubjectId || undefined,
            startTime: new Date().toISOString(),
            duration: 25,
            type: 'focus',
            completed: true,
            moodBefore: moodBefore || undefined,
            moodAfter: moodAfterValue
        });

        // Base session XP
        await awardXP(250);

        // Reset selection
        if (taskCompleted) setFocusTask(null);
    };


    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 relative">
            <audio ref={ringtoneRef} src="/lofi-music.mp3" />

            {/* Mood Popup Overlay */}
            {showMoodCheck && (
                <div className="absolute inset-0 z-50 bg-white/90 dark:bg-gray-900/95 backdrop-blur-sm flex flex-col items-center justify-center rounded-3xl animate-in fade-in">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                        {showMoodCheck === 'before' ? 'O\'zingizni qanday his qilyapsiz?' : 'Hozir qanday his qilyapsiz?'}
                    </h3>
                    <div className="flex gap-4">
                        {MOODS.map(m => (
                            <button
                                key={m.value}
                                onClick={() => handleMoodSelect(m.value)}
                                className="flex flex-col items-center gap-2 p-4 rounded-2xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all transform hover:scale-110"
                            >
                                <span className="text-4xl" role="img" aria-label={m.label}>{m.emoji}</span>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{m.label}</span>
                            </button>
                        ))}
                    </div>
                    <button onClick={() => setShowMoodCheck(null)} className="mt-8 text-gray-400">O'tkazib yuborish</button>
                </div>
            )}

            {/* Task Selector (New) */}
            <div className="w-full max-w-sm mb-6">
                <label className="block text-xs font-bold text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-widest text-center">
                    Hozir nima ustida ishlayapsiz?
                </label>
                <div className="relative">
                    <select
                        value={focusState.selectedTaskId || ''}
                        onChange={(e) => setFocusTask(e.target.value || null)}
                        className="w-full pl-4 pr-10 py-3 bg-white dark:bg-gray-800 border-none rounded-2xl shadow-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 appearance-none transition-all"
                        disabled={focusState.isActive}
                    >
                        <option value="">Shunchaki fokuslanish...</option>
                        {pendingTasks.map(task => (
                            <option key={task.id} value={task.id}>{task.title}</option>
                        ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <CheckCircle2 size={16} />
                    </div>
                </div>
            </div>

            <div className="mb-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Fokus Mod</h2>
                <p className="text-gray-500 dark:text-gray-400">Har bir sessiyada unumli bo'ling.</p>
            </div>

            <div className="mb-8 flex items-center justify-center gap-4 bg-white dark:bg-gray-800 p-2 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <Music size={18} className="text-indigo-500" />
                <select
                    value={focusState.bgSound}
                    onChange={(e) => setBgSound(e.target.value)}
                    className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-200 outline-none"
                    disabled={focusState.isActive}
                >
                    {SOUNDS.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                </select>
                <button onClick={() => setMuted(!focusState.isMuted)} className="text-gray-400 hover:text-indigo-500">
                    {focusState.isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
                <button
                    onClick={() => playRingtone()}
                    className="text-gray-400 hover:text-indigo-500"
                    title="Test ringtone"
                >
                    <Bell size={18} />
                </button>
            </div>

            {/* Mode Switcher */}
            <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-2xl mb-8">
                <button onClick={() => switchMode('focus')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${focusState.mode === 'focus' ? 'bg-white dark:bg-gray-700 shadow-sm text-indigo-600 dark:text-white' : 'text-gray-500'}`}>Fokus</button>
                <button onClick={() => switchMode('short_break')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${focusState.mode === 'short_break' ? 'bg-white dark:bg-gray-700 shadow-sm text-indigo-600 dark:text-white' : 'text-gray-500'}`}>Qisqa</button>
                <button onClick={() => switchMode('long_break')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${focusState.mode === 'long_break' ? 'bg-white dark:bg-gray-700 shadow-sm text-indigo-600 dark:text-white' : 'text-gray-500'}`}>Uzun</button>
            </div>

            {/* Subject Selector */}
            {focusState.mode === 'focus' && (
                <div className="w-full max-w-xs mb-8">
                    <select
                        value={focusState.selectedSubjectId || ''}
                        onChange={(e) => setFocusSubject(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none text-center appearance-none"
                    >
                        <option value="">Umumiy O'qish</option>
                        {subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                    </select>
                </div>
            )}

            {/* Timer Display */}
            <div className="relative w-72 h-72 mb-8 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-100 dark:text-gray-800" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="283" strokeDashoffset={283 - (283 * progress) / 100} strokeLinecap="round" className={`transition-all duration-1000 ${focusState.mode === 'focus' ? 'text-indigo-500' : 'text-green-500'}`} />
                </svg>

                <div className="relative z-10 text-center flex flex-col items-center">
                    <div className="text-6xl font-bold text-gray-900 dark:text-white font-mono tracking-wider">{formatTime(focusState.timeLeft)}</div>
                    {focusState.mode === 'focus' && moodBefore && focusState.isActive && (
                        <div className="mt-2 text-2xl animate-pulse">{MOODS.find(m => m.value === moodBefore)?.emoji}</div>
                    )}
                </div>
            </div>

            {/* Controls */}
            <div className="flex gap-4">
                <Button onClick={handleStartClick} className={`w-32 flex justify-center items-center gap-2 ${focusState.isActive ? 'bg-orange-500 hover:bg-orange-600' : 'bg-indigo-600 hover:bg-indigo-700'}`}>
                    {focusState.isActive ? <><Pause size={20} /> Pauza</> : <><Play size={20} /> Boshlash</>}
                </Button>
                <Button variant="secondary" onClick={resetTimer} className="w-12 h-10 flex justify-center items-center px-0"><RefreshCw size={20} /></Button>
            </div>
        </div>
    );
};

export default FocusPage;
