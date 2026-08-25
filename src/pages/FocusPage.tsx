import { CheckCircle2 } from 'lucide-react';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { useFocusTimerContext } from '../context/FocusTimerContext';
import { useLanguage } from '../context/LanguageContext';
import FocusControls from '../components/focus/FocusControls';
import FocusTimer from '../components/focus/FocusTimer';
import MoodCheckOverlay from '../components/focus/MoodCheckOverlay';
import SoundMixer from '../components/focus/SoundMixer';
import { LocalTour, LocalTourStep } from '../components/LocalTour';
import { PersonalLearningPlanService } from '../services/PersonalLearningPlanService';
import { LearningSignalService } from '../services/LearningSignalService';

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
    const { subjects, addSession, awardXP, tasks, updateTaskStatus, user, primaryLanguage } = useStudyData();
    const { focusState, startTimer, pauseTimer, resetTimer, switchMode, setCustomTime, setFocusSubject, setFocusTask, setBgSound, setMuted } = useFocusTimerContext();
    const { language, t } = useLanguage();

    // Mood State
    const [moodBefore, setMoodBefore] = useState<number | null>(null);
    const [showMoodCheck, setShowMoodCheck] = useState<'before' | 'after' | null>(null);
    const [activeDurationMins, setActiveDurationMins] = useState<number>(25);

    // Pending Tasks
    const pendingTasks = tasks.filter(t => t.status !== 'done');

    // Ringtone State
    const ringtoneRef = useRef<HTMLAudioElement | null>(null);

    // Calculated Progress
    const progress = ((activeDurationMins * 60 - focusState.timeLeft) / (activeDurationMins * 60)) * 100;

    const handleTimerEnd = useCallback(() => {
        if (focusState.mode === 'focus') {
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

    const handleSelectDuration = (mins: number) => {
        setActiveDurationMins(mins);
        setCustomTime(mins * 60);
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
            ringtoneRef.current.play().catch(e => console.error("Ringtone play blocked", e));
        }
    };

    const saveSession = async (moodAfterValue: number) => {
        let taskCompleted = false;

        if (focusState.selectedTaskId) {
            if (window.confirm("Tanlangan vazifani tugatdingizmi?")) {
                await updateTaskStatus(focusState.selectedTaskId, 'done');
                taskCompleted = true;
            }
        }

        addSession({
            subjectId: focusState.selectedSubjectId || undefined,
            startTime: new Date(Date.now() - activeDurationMins * 60 * 1000).toISOString(),
            duration: activeDurationMins,
            type: 'focus',
            completed: true,
            moodBefore: moodBefore || undefined,
            moodAfter: moodAfterValue
        });

        // Dynamic XP Award: 10 XP per minute completed
        await awardXP(activeDurationMins * 10);

        // Sync with Personal Learning Plan & Learning Signals
        const activeUserId = user?.id || 'guest';
        const activeGoal = PersonalLearningPlanService.getActiveGoal(activeUserId);
        if (activeGoal && activeGoal.status === 'active') {
            LearningSignalService.recordSignal({
                id: `focus_session_${Date.now()}`,
                type: 'completed_lesson',
                language: activeGoal.language || primaryLanguage || 'en',
                userId: activeUserId,
                timestamp: new Date().toISOString(),
                lessonId: focusState.selectedTaskId || 'focus_pomodoro',
                level: activeGoal.currentLevel || 'A1',
                score: activeDurationMins,
                total: activeGoal.dailyMinutes || 45,
                percentage: Math.min(100, Math.round((activeDurationMins / (activeGoal.dailyMinutes || 45)) * 100)),
                newCardsCreated: 0,
                mistakesCount: 0
            }).catch(() => {});
        }

        if (taskCompleted) setFocusTask(null);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 md:p-8 max-w-7xl mx-auto relative pb-[76px] md:pb-8">
            <audio ref={ringtoneRef} src="https://cdn.pixabay.com/audio/2021/08/04/audio_0625c1539c.mp3" />

            <MoodCheckOverlay
                isVisible={!!showMoodCheck}
                checkType={showMoodCheck}
                onSelect={handleMoodSelect}
                onSkip={() => setShowMoodCheck(null)}
            />

            {/* Task Selector (New) */}
            <div className="w-full max-w-sm mb-6" data-tour="focus-task-selector">
                <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-widest text-center">
                    {language === 'ja' ? '現在取り組んでいるタスク' : 'Hozir nima ustida ishlayapsiz?'}
                </label>
                <div className="relative">
                    <select
                        value={focusState.selectedTaskId || ''}
                        onChange={(e) => setFocusTask(e.target.value || null)}
                        className="w-full pl-4 pr-10 py-3 bg-background border border-border rounded-2xl shadow-sm text-foreground outline-none focus:ring-2 focus:ring-primary appearance-none transition-all glass-card"
                        disabled={focusState.isActive}
                    >
                        <option value="">{language === 'ja' ? 'フリー集中セッション...' : 'Shunchaki fokuslanish...'}</option>
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
                <h2 className="text-3xl font-bold text-foreground mb-2">{t('focus.title')}</h2>
                <p className="text-muted-foreground">{t('focus.subtitle')}</p>
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

            {/* Mode & Deep Work Duration Switcher */}
            <div className="flex flex-col items-center gap-3 mb-8">
                <div className="flex bg-muted/50 p-1 rounded-2xl border border-border/50" data-tour="focus-mode-switcher">
                    <button onClick={() => switchMode('focus')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${focusState.mode === 'focus' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                        {language === 'ja' ? '集中' : 'Fokus'}
                    </button>
                    <button onClick={() => switchMode('short_break')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${focusState.mode === 'short_break' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                        {language === 'ja' ? '小休憩' : 'Qisqa'}
                    </button>
                    <button onClick={() => switchMode('long_break')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${focusState.mode === 'long_break' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                        {language === 'ja' ? '大休憩' : 'Uzun'}
                    </button>
                </div>

                {/* Deep Work Custom Duration Presets */}
                {focusState.mode === 'focus' && (
                    <div className="flex items-center gap-2 flex-wrap justify-center animate-in fade-in">
                        {[
                            { mins: 25, label: language === 'ja' ? '⚡ 25分（標準）' : '⚡ 25m Standard' },
                            { mins: 60, label: language === 'ja' ? '📚 60分（1時間）' : '📚 60m (1 Soat)' },
                            { mins: 90, label: language === 'ja' ? '🎓 90分（1.5時間）' : '🎓 90m (1.5 Soat)' },
                            { mins: 120, label: language === 'ja' ? '🚀 120分（2時間）' : '🚀 120m (2 Soat)' }
                        ].map((p) => (
                            <button
                                key={p.mins}
                                disabled={focusState.isActive}
                                onClick={() => handleSelectDuration(p.mins)}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                                    activeDurationMins === p.mins
                                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20'
                                        : 'bg-background/80 text-muted-foreground border-border hover:border-indigo-500/50'
                                }`}
                            >
                                {p.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Subject Selector */}
            {focusState.mode === 'focus' && (
                <div className="w-full max-w-xs mb-8">
                    <select
                        value={focusState.selectedSubjectId || ''}
                        onChange={(e) => setFocusSubject(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl border border-border bg-background/50 text-foreground focus:ring-2 focus:ring-primary outline-none text-center appearance-none backdrop-blur-sm"
                    >
                        <option value="">{language === 'ja' ? '一般学習' : "Umumiy O'qish"}</option>
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
