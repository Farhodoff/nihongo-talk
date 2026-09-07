import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { useFocusTimerContext } from '../context/FocusTimerContext';
import { useLanguage } from '../context/LanguageContext';
import FocusControls from '../components/focus/FocusControls';
import FocusTimer from '../components/focus/FocusTimer';
import MoodCheckOverlay from '../components/focus/MoodCheckOverlay';
import SoundMixer from '../components/focus/SoundMixer';
import { PersonalLearningPlanService } from '../services/PersonalLearningPlanService';
import { LearningSignalService } from '../services/LearningSignalService';

const FocusPage: React.FC = () => {
  const {
    addSession,
    awardXP,
    tasks: _tasks,
    updateTaskStatus,
    user,
    primaryLanguage,
  } = useStudyData();
  const {
    focusState,
    startTimer,
    pauseTimer,
    resetTimer,
    switchMode,
    setCustomTime,
    setFocusTask,
    setBgSound,
    setMuted,
  } = useFocusTimerContext();
  const { language, t } = useLanguage();

  // Mood State
  const [moodBefore, setMoodBefore] = useState<number | null>(null);
  const [showMoodCheck, setShowMoodCheck] = useState<'before' | 'after' | null>(null);
  const [activeDurationMins, setActiveDurationMins] = useState<number>(25);

  // Ringtone State
  const ringtoneRef = useRef<HTMLAudioElement | null>(null);

  // Calculated Progress
  const progress =
    ((activeDurationMins * 60 - focusState.timeLeft) / (activeDurationMins * 60)) * 100;

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
      ringtoneRef.current.play().catch((e) => console.error('Ringtone play blocked', e));
    }
  };

  const saveSession = async (moodAfterValue: number) => {
    let taskCompleted = false;

    if (focusState.selectedTaskId) {
      if (window.confirm('Tanlangan vazifani tugatdingizmi?')) {
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
      moodAfter: moodAfterValue,
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
        percentage: Math.min(
          100,
          Math.round((activeDurationMins / (activeGoal.dailyMinutes || 45)) * 100),
        ),
        newCardsCreated: 0,
        mistakesCount: 0,
      }).catch(() => {});
    }

    if (taskCompleted) setFocusTask(null);
  };

  return (
    <div className="relative mx-auto flex min-h-[75vh] max-w-4xl flex-col items-center justify-center space-y-4 p-3.5 pb-20 sm:space-y-6 sm:p-4 md:p-8 md:pb-8">
      <audio
        ref={ringtoneRef}
        src="https://cdn.pixabay.com/audio/2021/08/04/audio_0625c1539c.mp3"
      />

      <MoodCheckOverlay
        isVisible={!!showMoodCheck}
        checkType={showMoodCheck}
        onSelect={handleMoodSelect}
        onSkip={() => setShowMoodCheck(null)}
      />

      <div className="text-center">
        <h2 className="font-display text-2xl font-black tracking-tight text-foreground md:text-3xl">
          {t('focus.title')}
        </h2>
      </div>

      <div>
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
      <div className="flex flex-col items-center gap-3">
        <div className="flex rounded-2xl border border-border/50 bg-muted/50 p-1">
          <button
            onClick={() => switchMode('focus')}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-all sm:text-sm ${focusState.mode === 'focus' ? 'bg-primary text-primary-foreground shadow-xs' : 'text-muted-foreground hover:text-foreground'}`}
          >
            {language === 'ja' ? '集中' : 'Fokus'}
          </button>
          <button
            onClick={() => switchMode('short_break')}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-all sm:text-sm ${focusState.mode === 'short_break' ? 'bg-primary text-primary-foreground shadow-xs' : 'text-muted-foreground hover:text-foreground'}`}
          >
            {language === 'ja' ? '小休憩' : 'Qisqa'}
          </button>
          <button
            onClick={() => switchMode('long_break')}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-all sm:text-sm ${focusState.mode === 'long_break' ? 'bg-primary text-primary-foreground shadow-xs' : 'text-muted-foreground hover:text-foreground'}`}
          >
            {language === 'ja' ? '大休憩' : 'Uzun'}
          </button>
        </div>

        {/* Deep Work Custom Duration Presets */}
        {focusState.mode === 'focus' && (
          <div className="flex max-w-xs flex-wrap items-center justify-center gap-1.5 animate-in fade-in sm:max-w-none sm:gap-2">
            {[
              { mins: 25, label: language === 'ja' ? '⚡ 25分' : '⚡ 25m Standard' },
              { mins: 60, label: language === 'ja' ? '📚 60分' : '📚 60m (1 Soat)' },
              { mins: 90, label: language === 'ja' ? '🎓 90分' : '🎓 90m (1.5 Soat)' },
              { mins: 120, label: language === 'ja' ? '🚀 120分' : '🚀 120m (2 Soat)' },
            ].map((p) => (
              <button
                key={p.mins}
                disabled={focusState.isActive}
                onClick={() => handleSelectDuration(p.mins)}
                className={`rounded-xl border px-3 py-1.5 text-[11px] font-bold transition-all sm:text-xs ${
                  activeDurationMins === p.mins
                    ? 'border-primary bg-primary text-primary-foreground shadow-md'
                    : 'border-border bg-card text-muted-foreground hover:border-primary/50'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        )}
      </div>

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
