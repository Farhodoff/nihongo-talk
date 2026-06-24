import { CheckCircle2 } from 'lucide-react';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { useFocusTimerContext } from '../context/FocusTimerContext';
import FocusControls from '../components/focus/FocusControls';
import FocusTimer from '../components/focus/FocusTimer';
import MoodCheckOverlay from '../components/focus/MoodCheckOverlay';
import SoundMixer from '../components/focus/SoundMixer';
import { LocalTour, LocalTourStep } from '../components/LocalTour';

const FOCUS_TOUR_STEPS: LocalTourStep[] = [
    {
        title: "Vazifa tanlash 📝",
        content: "Ayni paytda bajarmonchi bo'lgan vazifangizni tanlang. Taymer tugagach, tizim ushbu vazifani tugatishni taklif qiladi.",
        target: "[data-tour=\"focus-task-selector\"]",
        placement: "bottom"
    },
    {
        title: "Lo-Fi va Tabiat Ovozlari 🌧️",
        content: "Darsga qattiqroq fokuslanish uchun sokin yomg'ir, olov yoki Lo-Fi musiqasini qoshing va ovozini o'zingizga moslang.",
        target: "[data-tour=\"focus-sound-mixer\"]",
        placement: "bottom"
    },
    {
        title: "Taymer Sozlamalari ⏱️",
        content: "Bu yerdan Pomodoro, Qisqa yoki Uzun tanaffus vaqtlarini tanlashingiz mumkin.",
        target: "[data-tour=\"focus-mode-switcher\"]",
        placement: "top"
    }
];

const FocusPage: React.FC = () => {
    const { subjects, addSession, awardXP, tasks, updateTaskStatus } = useStudyData();
    const { focusState, startTimer, pauseTimer, resetTimer, switchMode, setFocusSubject, setFocusTask, setBgSound, setMuted } = useFocusTimerContext();

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

    const handleTimerEnd = useCallback(() => {
        // Notification handled globally in Context
        if (focusState.mode === 'focus') {
            // Avoid double trigger if possible, or check if we already showed popup
            if (!showMoodCheck) setShowMoodCheck('after');
        } else {
            resetTimer();
        }
    }, [focusState.mode, showMoodCheck, resetTimer]);

    // Watch for timer completion via focusState to trigger mood check
    useEffect(() => {
        if (focusState.timeLeft === 0 && !focusState.isActive) {
            handleTimerEnd();
        }
    }, [focusState.timeLeft, focusState.isActive, handleTimerEnd]);

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
            startTime: new Date(Date.now() - 25 * 60 * 1000).toISOString(), // 25 daqiqa oldin boshlangan
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
        <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 md:p-8 max-w-7xl mx-auto relative">
            <audio ref={ringtoneRef} src="/lofi-music.mp3" />

            <MoodCheckOverlay
                isVisible={!!showMoodCheck}
                checkType={showMoodCheck}
                onSelect={handleMoodSelect}
                onSkip={() => setShowMoodCheck(null)}
            />

            {/* Task Selector (New) */}
            <div className="w-full max-w-sm mb-6" data-tour="focus-task-selector">
                <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-widest text-center">
                    Hozir nima ustida ishlayapsiz?
                </label>
                <div className="relative">
                    <select
                        value={focusState.selectedTaskId || ''}
                        onChange={(e) => setFocusTask(e.target.value || null)}
                        className="w-full pl-4 pr-10 py-3 bg-background border border-border rounded-2xl shadow-sm text-foreground outline-none focus:ring-2 focus:ring-primary appearance-none transition-all glass-card"
                        disabled={focusState.isActive}
                    >
                        <option value="">Shunchaki fokuslanish...</option>
                        {pendingTasks.map(task => (
                            <option key={task.id} value={task.id}>{task.title}</option>
                        ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                        <CheckCircle2 size={16} />
                    </div>
                </div>
            </div>

            <div className="mb-4 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-2">Fokus Mod</h2>
                <p className="text-muted-foreground">Har bir sessiyada unumli bo'ling.</p>
            </div>

            <div data-tour="focus-sound-mixer">
                <SoundMixer
                    selectedSound={focusState.bgSound}
                    isMuted={focusState.isMuted}
                    isDisabled={focusState.isActive}
                    onSoundChange={setBgSound}
                    onMuteToggle={() => setMuted(!focusState.isMuted)}
                    onTestSound={playRingtone}
                />
            </div>

            {/* Mode Switcher */}
            <div className="flex bg-muted/50 p-1 rounded-2xl mb-8 border border-border/50" data-tour="focus-mode-switcher">
                <button onClick={() => switchMode('focus')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${focusState.mode === 'focus' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>Fokus</button>
                <button onClick={() => switchMode('short_break')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${focusState.mode === 'short_break' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>Qisqa</button>
                <button onClick={() => switchMode('long_break')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${focusState.mode === 'long_break' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>Uzun</button>
            </div>

            {/* Subject Selector */}
            {focusState.mode === 'focus' && (
                <div className="w-full max-w-xs mb-8">
                    <select
                        value={focusState.selectedSubjectId || ''}
                        onChange={(e) => setFocusSubject(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl border border-border bg-background/50 text-foreground focus:ring-2 focus:ring-primary outline-none text-center appearance-none backdrop-blur-sm"
                    >
                        <option value="">Umumiy O'qish</option>
                        {subjects.filter(s => !s.isArchived).map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
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
            
            <LocalTour steps={FOCUS_TOUR_STEPS} tourKey="focus_page_tour_completed" />
        </div>
    );
};

export default FocusPage;
