import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LearningOrchestrator } from '../services/LearningOrchestrator';
import { AlertCircle, ChevronRight, X } from 'lucide-react';
import { useStudyData } from '../context/StudyPlannerContext';
import { LessonService } from '../services/LessonService';
import { LearningSignalService } from '../services/LearningSignalService';
import { Lesson, LessonStep, UserLessonProgress } from '../types/lesson';
import { IncorrectAnswerSignal } from '../types/learningSignals';
import { LearnStepView } from '../components/lesson/LearnStepView';
import { PracticeStepView } from '../components/lesson/PracticeStepView';
import { TestStepView, MissedQuestionInfo } from '../components/lesson/TestStepView';
import { LessonCompletionView } from '../components/lesson/LessonCompletionView';
import { useSEO } from '../hooks/useSEO';

export const LessonPlayerPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { user, awardXP } = useStudyData();

  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isLessonCompleted, setIsLessonCompleted] = useState(false);
  const [quizResult, setQuizResult] = useState<
    { score: number; total: number; percentage: number } | undefined
  >(undefined);
  const [loading, setLoading] = useState(true);
  const [sessionErrors, setSessionErrors] = useState<IncorrectAnswerSignal[]>([]);
  const [srsSummary, setSrsSummary] = useState<{ newCardsCount: number; mistakesCount: number }>({
    newCardsCount: 0,
    mistakesCount: 0,
  });
  const completionInFlightRef = useRef(false);

  useSEO({
    title: lesson ? `${lesson.title} - Dars Mashg'uloti` : "O'quv Darsi - Nihongo Talk",
    description: lesson ? lesson.description : "Interaktiv til o'rganish darsi.",
    canonical: `/lesson/${lessonId || ''}`,
  });

  useEffect(() => {
    if (!lessonId) {
      setLoading(false);
      return;
    }

    const foundLesson = LessonService.getLessonById(lessonId);
    if (foundLesson) {
      // Phase 15: Service-level prerequisite and access validation
      const access = LearningOrchestrator.canAccessLesson(lessonId, user?.id || '');
      if (!access.allowed) {
        console.warn(`[LessonPlayer] Access denied: ${access.reason}`);
        navigate(access.redirectTo || '/jlpt', { replace: true });
        return;
      }
      setLesson(foundLesson);

      // Load saved progress
      const savedProgress = LessonService.getLessonProgress(user?.id || '', lessonId);
      if (savedProgress) {
        if (savedProgress.isCompleted) {
          setIsLessonCompleted(true);
          setQuizResult(savedProgress.quizScore);
        } else if (savedProgress.currentStepIndex !== undefined) {
          setCurrentStepIdx(Math.min(savedProgress.currentStepIndex, foundLesson.steps.length - 1));
        }
      }
    }
    setLoading(false);
  }, [lessonId, user?.id]);

  const totalSteps = lesson ? lesson.steps.length : 0;
  const progressPercentage =
    totalSteps > 0
      ? Math.round(((currentStepIdx + (isLessonCompleted ? 1 : 0)) / totalSteps) * 100)
      : 0;

  const currentStep: LessonStep | undefined = lesson?.steps[currentStepIdx];

  const handlePracticeIncorrectAnswer = (
    exerciseId: string,
    prompt: string,
    userAnswer: string | number,
    expectedAnswer: string | number,
    explanation?: string,
  ) => {
    if (!lesson || !currentStep) return;
    const errSig: IncorrectAnswerSignal = {
      id: 'err_' + Math.random().toString(36).substring(2, 9),
      type: 'incorrect_answer',
      language: lesson.language,
      lessonId: lesson.id,
      userId: user?.id || 'guest',
      stepId: currentStep.id,
      questionId: exerciseId,
      prompt,
      userAnswer,
      expectedAnswer,
      explanation,
      attemptCount: 1,
      timestamp: new Date().toISOString(),
    };
    setSessionErrors((prev) => [...prev, errSig]);
  };

  const handleNextStep = async () => {
    if (!lesson) return;

    if (currentStepIdx < totalSteps - 1) {
      const nextIdx = currentStepIdx + 1;
      setCurrentStepIdx(nextIdx);

      // Save progress
      const progress: UserLessonProgress = {
        lessonId: lesson.id,
        userId: user?.id || 'guest',
        currentStepIndex: nextIdx,
        completedStepIds: lesson.steps.slice(0, nextIdx).map((s) => s.id),
        isCompleted: false,
        lastAttemptedAt: new Date().toISOString(),
      };
      await LessonService.saveLessonProgress(user?.id || '', progress);
    } else {
      // Reached completion
      await handleCompleteLesson(
        quizResult || { score: totalSteps, total: totalSteps, percentage: 100 },
      );
    }
  };

  const handlePrevStep = () => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx((prev) => prev - 1);
    }
  };

  const handleTestCompletion = async (result: {
    score: number;
    total: number;
    percentage: number;
    missedQuestions: MissedQuestionInfo[];
  }) => {
    if (!lesson || !currentStep) return;

    const testErrors: IncorrectAnswerSignal[] = (result.missedQuestions || []).map((mq) => ({
      id: 'err_' + Math.random().toString(36).substring(2, 9),
      type: 'incorrect_answer',
      language: lesson.language,
      lessonId: lesson.id,
      userId: user?.id || 'guest',
      stepId: currentStep.id,
      questionId: mq.questionId,
      prompt: mq.prompt,
      userAnswer: mq.userAnswer,
      expectedAnswer: mq.expectedAnswer,
      explanation: mq.explanation,
      attemptCount: 1,
      timestamp: new Date().toISOString(),
    }));

    const allErrors = [...sessionErrors, ...testErrors];
    setSessionErrors(allErrors);

    const passingScore = currentStep.testData?.passingScorePercentage ?? 75;
    const isPassed = result.percentage >= passingScore;

    // Failed test attempt should remain incomplete (do not mark lesson completed).
    if (!isPassed) {
      setQuizResult({
        score: result.score,
        total: result.total,
        percentage: result.percentage,
      });

      // Persist attempt progress without completing the lesson.
      const progress: UserLessonProgress = {
        lessonId: lesson.id,
        userId: user?.id || 'guest',
        currentStepIndex: currentStepIdx,
        completedStepIds: lesson.steps.slice(0, currentStepIdx).map((s) => s.id),
        isCompleted: false,
        quizScore: {
          score: result.score,
          total: result.total,
          percentage: result.percentage,
        },
        lastAttemptedAt: new Date().toISOString(),
      };
      await LessonService.saveLessonProgress(user?.id || '', progress);
      return;
    }

    await handleCompleteLesson(
      {
        score: result.score,
        total: result.total,
        percentage: result.percentage,
      },
      allErrors,
    );
  };

  const handleCompleteLesson = async (
    score: { score: number; total: number; percentage: number },
    mistakes: IncorrectAnswerSignal[] = sessionErrors,
  ) => {
    if (!lesson || completionInFlightRef.current) return;
    completionInFlightRef.current = true;

    const activeUserId = user?.id || 'guest';
    const existingProgress = LessonService.getLessonProgress(activeUserId, lesson.id);
    const alreadyCompleted = !!existingProgress?.isCompleted;

    setQuizResult(score);
    setIsLessonCompleted(true);

    // Award XP
    try {
      if (!alreadyCompleted && awardXP) {
        await awardXP(50);
      }
    } catch (e) {}

    try {
      // Persist lesson completion first, then emit canonical learning signals/mastery evidence.
      await LessonService.completeLesson(activeUserId, lesson.id, score);

      const summary = await LearningSignalService.processLessonCompletion(
        activeUserId,
        lesson,
        score,
        mistakes,
      );
      setSrsSummary(summary);
    } catch (err) {
      console.error('[LessonPlayerPage] Failed to complete lesson mastery pipeline:', err);
    } finally {
      completionInFlightRef.current = false;
    }
  };

  const handleExit = () => {
    navigate('/jlpt');
  };

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="mx-auto my-16 max-w-md space-y-4 rounded-3xl border border-border bg-card p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-500">
          <AlertCircle size={32} />
        </div>
        <h2 className="text-xl font-bold text-foreground">Dars Topilmadi</h2>
        <p className="text-xs text-muted-foreground">
          Siz qidirayotgan dars ID si mavjud emas yoki o'chirilgan bo'lishi mumkin.
        </p>
        <button
          onClick={handleExit}
          className="rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-md transition-all hover:opacity-90"
        >
          Bosh Sahifaga Qaytish
        </button>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col justify-between overflow-hidden bg-background">
      {/* Top Navigation Bar */}
      <div className="z-20 shrink-0 border-b border-border bg-background/80 px-3.5 py-2.5 pt-[max(env(safe-area-inset-top),0.75rem)] backdrop-blur-xl sm:px-4 sm:py-3">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 sm:gap-4">
          {/* Left: Exit & Title */}
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <button
              onClick={handleExit}
              className="rounded-xl border border-border p-2 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground active:scale-95"
              title="Chiqish"
              aria-label="Chiqish"
            >
              <X size={18} />
            </button>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="rounded-md border border-primary/20 bg-primary/10 px-1.5 py-0.5 text-[10px] font-black uppercase text-primary sm:px-2 sm:text-xs">
                  {lesson.language === 'ja'
                    ? `🇯🇵 JLPT ${lesson.level}`
                    : `🇬🇧 English ${lesson.level}`}
                </span>
                <span className="hidden text-xs font-medium text-muted-foreground sm:inline">
                  {lesson.unitTitle}
                </span>
              </div>
              <h1 className="truncate text-xs font-bold text-foreground sm:text-sm md:text-base">
                {lesson.title}
              </h1>
            </div>
          </div>

          {/* Right: Step Counter */}
          {!isLessonCompleted && (
            <div className="flex shrink-0 items-center gap-3">
              <div className="text-right">
                <div className="text-[11px] font-bold uppercase text-muted-foreground">Qadam</div>
                <div className="text-xs font-black text-foreground">
                  {currentStepIdx + 1} / {totalSteps}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Progress Line */}
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${Math.min(100, Math.max(5, progressPercentage))}%` }}
          />
        </div>
      </div>

      {/* Main Content Area - Scrollable Container with bottom buffer */}
      <div className="mx-auto w-full max-w-4xl flex-1 overflow-y-auto overscroll-contain p-3.5 pb-24 sm:p-5 sm:pb-28 md:p-8">
        {isLessonCompleted ? (
          <LessonCompletionView
            lesson={lesson}
            scoreData={quizResult}
            newCardsCount={srsSummary.newCardsCount}
            mistakesCount={srsSummary.mistakesCount}
            onExit={handleExit}
          />
        ) : currentStep ? (
          <div className="space-y-4 sm:space-y-6">
            {/* Step Type Pill Header */}
            <div className="mb-2 flex items-center justify-center">
              <span
                className={`rounded-full px-3.5 py-1 text-xs font-bold ${
                  currentStep.type === 'learn'
                    ? 'border border-blue-500/20 bg-blue-500/10 text-blue-500'
                    : currentStep.type === 'practice'
                      ? 'border border-purple-500/20 bg-purple-500/10 text-purple-500'
                      : 'border border-emerald-500/20 bg-emerald-500/10 text-emerald-500'
                }`}
              >
                {currentStep.title}
              </span>
            </div>

            {/* Step Renderers */}
            {currentStep.type === 'learn' && currentStep.learnData && (
              <LearnStepView content={currentStep.learnData} language={lesson.language} />
            )}

            {currentStep.type === 'practice' && currentStep.practiceData && (
              <PracticeStepView
                instructions={currentStep.practiceData.instructions}
                exercises={currentStep.practiceData.exercises}
                onIncorrectAnswer={handlePracticeIncorrectAnswer}
              />
            )}

            {currentStep.type === 'test' && currentStep.testData && (
              <TestStepView
                instructions={currentStep.testData.instructions}
                questions={currentStep.testData.questions}
                passingScorePercentage={currentStep.testData.passingScorePercentage}
                onCompleteTest={handleTestCompletion}
              />
            )}
          </div>
        ) : null}
      </div>

      {/* Bottom Step Controller Footer */}
      {!isLessonCompleted && (
        <div className="z-20 shrink-0 border-t border-border bg-background/90 p-3 pb-[max(env(safe-area-inset-bottom),0.875rem)] backdrop-blur-xl sm:p-4">
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-2.5 sm:gap-4">
            <button
              onClick={handlePrevStep}
              disabled={currentStepIdx === 0}
              className="h-11 cursor-pointer touch-manipulation select-none rounded-2xl border border-border px-3 text-xs font-bold text-muted-foreground transition-all hover:bg-secondary hover:text-foreground active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 sm:px-4"
            >
              <span className="sm:hidden">Oldingi</span>
              <span className="hidden sm:inline">Oldingi qadam</span>
            </button>

            <button
              onClick={handleNextStep}
              aria-label={
                currentStepIdx === totalSteps - 1 ? 'Darsni Yakunlash' : "Keyingi Qadamga O'tish"
              }
              className="flex h-11 cursor-pointer touch-manipulation select-none items-center gap-1.5 rounded-2xl bg-primary px-4 text-xs font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:opacity-90 active:scale-95 sm:gap-2 sm:px-6 md:text-sm"
            >
              <span>
                {currentStepIdx === totalSteps - 1 ? (
                  <>
                    <span className="sm:hidden">Yakunlash 🎉</span>
                    <span className="hidden sm:inline">Darsni Yakunlash 🎉</span>
                  </>
                ) : (
                  <>
                    <span className="sm:hidden">Keyingi</span>
                    <span className="hidden sm:inline">Keyingi Qadamga O'tish</span>
                  </>
                )}
              </span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonPlayerPage;
