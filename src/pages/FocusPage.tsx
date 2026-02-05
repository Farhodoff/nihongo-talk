import { CheckCircle2 } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import FocusControls from '../components/focus/FocusControls';
import FocusTimer from '../components/focus/FocusTimer';
import MoodCheckOverlay from '../components/focus/MoodCheckOverlay';
import SoundMixer from '../components/focus/SoundMixer';

const FocusPage: React.FC = () => {
    const { subjects, addSession, awardXP, focusState, startTimer, pauseTimer, resetTimer, switchMode, setFocusSubject, setFocusTask, setBgSound, setMuted, tasks, updateTaskStatus } = useStudyData();

    // Mood State
    const [moodBefore, setMoodBefore] = useState<number | null>(null);
    const [showMoodCheck, setShowMoodCheck] = useState<'before' | 'after' | null>(null);

    // Pending Tasks
    const pendingTasks = tasks.filter(t => t.status !== 'done');

    // Ringtone State
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
            // Silent fail if browser blocks autoplay
            ringtoneRef.current.play().catch(() => { });
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

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 relative">
            <audio ref={ringtoneRef} src="/lofi-music.mp3" />

            <MoodCheckOverlay
                isVisible={!!showMoodCheck}
                checkType={showMoodCheck}
                onSelect={handleMoodSelect}
                onSkip={() => setShowMoodCheck(null)}
            />

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

            <SoundMixer
                selectedSound={focusState.bgSound}
                isMuted={focusState.isMuted}
                isDisabled={focusState.isActive}
                onSoundChange={setBgSound}
                onMuteToggle={() => setMuted(!focusState.isMuted)}
                onTestSound={playRingtone}
            />

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

            <FocusTimer
                timeLeft={focusState.timeLeft}
                progress={progress}
                mode={focusState.mode}
                moodBefore={moodBefore}
                isActive={focusState.isActive}
            />

            <FocusControls
                isActive={focusState.isActive}
                onToggle={handleStartClick}
                onReset={resetTimer}
            />
        </div>
    );
};

export default FocusPage;
