import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LearningOrchestrator } from '../services/LearningOrchestrator';
import { 
    Award, BookOpen, 
    BrainCircuit, AlertCircle, ChevronRight, X 
} from 'lucide-react';
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
    const [quizResult, setQuizResult] = useState<{ score: number; total: number; percentage: number } | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [sessionErrors, setSessionErrors] = useState<IncorrectAnswerSignal[]>([]);
    const [srsSummary, setSrsSummary] = useState<{ newCardsCount: number; mistakesCount: number }>({ newCardsCount: 0, mistakesCount: 0 });

    useSEO({
        title: lesson ? `${lesson.title} - Dars Mashg'uloti` : "O'quv Darsi - Kaizen AI",
        description: lesson ? lesson.description : "Interaktiv til o'rganish darsi.",
        canonical: `/lesson/${lessonId || ''}`
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
                navigate(access.redirectTo || '/dashboard', { replace: true });
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
    const progressPercentage = totalSteps > 0 
        ? Math.round(((currentStepIdx + (isLessonCompleted ? 1 : 0)) / totalSteps) * 100)
        : 0;

    const currentStep: LessonStep | undefined = lesson?.steps[currentStepIdx];

    const handlePracticeIncorrectAnswer = (
        exerciseId: string, 
        prompt: string, 
        userAnswer: string | number, 
        expectedAnswer: string | number, 
        explanation?: string
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
            timestamp: new Date().toISOString()
        };
        setSessionErrors(prev => [...prev, errSig]);
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
                completedStepIds: lesson.steps.slice(0, nextIdx).map(s => s.id),
                isCompleted: false,
                lastAttemptedAt: new Date().toISOString()
            };
            await LessonService.saveLessonProgress(user?.id || '', progress);
        } else {
            // Reached completion
            await handleCompleteLesson(quizResult || { score: totalSteps, total: totalSteps, percentage: 100 });
        }
    };

    const handlePrevStep = () => {
        if (currentStepIdx > 0) {
            setCurrentStepIdx(prev => prev - 1);
        }
    };

    const handleTestCompletion = async (result: { 
        score: number; 
        total: number; 
        percentage: number; 
        missedQuestions: MissedQuestionInfo[]; 
    }) => {
        if (!lesson || !currentStep) return;

        const testErrors: IncorrectAnswerSignal[] = (result.missedQuestions || []).map(mq => ({
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
            timestamp: new Date().toISOString()
        }));

        const allErrors = [...sessionErrors, ...testErrors];
        setSessionErrors(allErrors);

        await handleCompleteLesson({
            score: result.score,
            total: result.total,
            percentage: result.percentage
        }, allErrors);
    };

    const handleCompleteLesson = async (
        score: { score: number; total: number; percentage: number },
        mistakes: IncorrectAnswerSignal[] = sessionErrors
    ) => {
        if (!lesson) return;
        setQuizResult(score);
        setIsLessonCompleted(true);

        // Award XP
        try {
            if (awardXP) {
                await awardXP(50);
            }
        } catch (e) {}

        // Persist lesson completion
        await LessonService.completeLesson(user?.id || '', lesson.id, score);

        // Process automated SRS ingestion and learning signals
        try {
            const summary = await LearningSignalService.processLessonCompletion(
                user?.id || '',
                lesson,
                score,
                mistakes
            );
            setSrsSummary(summary);
        } catch (err) {
            console.error('[LessonPlayerPage] Failed to process SRS ingestion:', err);
        }
    };

    const handleExit = () => {
        navigate('/dashboard');
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[70vh]">
                <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
            </div>
        );
    }

    if (!lesson) {
        return (
            <div className="max-w-md mx-auto my-16 p-8 text-center bg-card border border-border rounded-3xl space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mx-auto">
                    <AlertCircle size={32} />
                </div>
                <h2 className="text-xl font-bold text-foreground">Dars Topilmadi</h2>
                <p className="text-xs text-muted-foreground">
                    Siz qidirayotgan dars ID si mavjud emas yoki o'chirilgan bo'lishi mumkin.
                </p>
                <button
                    onClick={handleExit}
                    className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-md hover:opacity-90 transition-all"
                >
                    Bosh Sahifaga Qaytish
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex flex-col justify-between">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-border px-4 py-3">
                <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
                    {/* Left: Exit & Title */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleExit}
                            className="p-2 rounded-xl border border-border hover:bg-secondary text-muted-foreground hover:text-foreground transition-all"
                            title="Chiqish"
                            aria-label="Chiqish"
                        >
                            <X size={18} />
                        </button>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-black uppercase px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                                    {lesson.language === 'ja' ? `🇯🇵 JLPT ${lesson.level}` : `🇬🇧 English ${lesson.level}`}
                                </span>
                                <span className="text-xs text-muted-foreground font-medium hidden sm:inline">
                                    {lesson.unitTitle}
                                </span>
                            </div>
                            <h1 className="text-sm md:text-base font-bold text-foreground truncate max-w-[200px] sm:max-w-sm md:max-w-md">
                                {lesson.title}
                            </h1>
                        </div>
                    </div>

                    {/* Right: Step Counter */}
                    {!isLessonCompleted && (
                        <div className="flex items-center gap-3 shrink-0">
                            <div className="text-right">
                                <div className="text-[11px] font-bold text-muted-foreground uppercase">
                                    Qadam
                                </div>
                                <div className="text-xs font-black text-foreground">
                                    {currentStepIdx + 1} / {totalSteps}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Progress Line */}
                <div className="w-full h-1.5 bg-secondary mt-3 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
                        style={{ width: `${Math.min(100, Math.max(5, progressPercentage))}%` }}
                    />
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 max-w-4xl w-full mx-auto p-4 md:p-8">
                {isLessonCompleted ? (
                    <LessonCompletionView
                        lesson={lesson}
                        scoreData={quizResult}
                        newCardsCount={srsSummary.newCardsCount}
                        mistakesCount={srsSummary.mistakesCount}
                        onExit={handleExit}
                    />
                ) : currentStep ? (
                    <div className="space-y-6">
                        {/* Step Type Pill Header */}
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                                currentStep.type === 'learn'
                                    ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20'
                                    : currentStep.type === 'practice'
                                    ? 'bg-purple-500/10 text-purple-500 border border-purple-500/20'
                                    : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                            }`}>
                                {currentStep.type === 'learn' && <BookOpen size={13} />}
                                {currentStep.type === 'practice' && <BrainCircuit size={13} />}
                                {currentStep.type === 'test' && <Award size={13} />}
                                <span>{currentStep.title}</span>
                            </span>
                        </div>

                        {/* Step Renderers */}
                        {currentStep.type === 'learn' && currentStep.learnData && (
                            <LearnStepView
                                content={currentStep.learnData}
                                language={lesson.language}
                            />
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
                <div className="sticky bottom-0 bg-background/90 backdrop-blur-xl border-t border-border p-4 z-20">
                    <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
                        <button
                            onClick={handlePrevStep}
                            disabled={currentStepIdx === 0}
                            className="px-4 py-3 rounded-2xl border border-border text-xs font-bold text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                            Oldingi qadam
                        </button>

                        <button
                            onClick={handleNextStep}
                            className="px-6 py-3.5 rounded-2xl bg-primary text-primary-foreground text-xs md:text-sm font-bold shadow-lg shadow-primary/25 hover:opacity-90 transition-all flex items-center gap-2"
                        >
                            <span>
                                {currentStepIdx === totalSteps - 1 
                                    ? "Darsni Yakunlash 🎉" 
                                    : "Keyingi Qadamga O'tish"}
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
