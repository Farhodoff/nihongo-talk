import React, { useState, useMemo } from 'react';
import { Award, CheckCircle2, XCircle, ChevronRight, RotateCcw, Sparkles } from 'lucide-react';
import { TestQuestion } from '../../types/lesson';
import { FuriganaText } from '../jlpt/FuriganaText';

export interface MissedQuestionInfo {
    questionId: string;
    prompt: string;
    userAnswer: string;
    expectedAnswer: string;
    explanation: string;
}

interface TestStepViewProps {
    instructions: string;
    questions: TestQuestion[];
    passingScorePercentage?: number;
    onCompleteTest?: (result: { 
        score: number; 
        total: number; 
        percentage: number;
        missedQuestions: MissedQuestionInfo[];
    }) => void;
}

export const TestStepView: React.FC<TestStepViewProps> = ({
    instructions,
    questions,
    passingScorePercentage = 75,
    onCompleteTest
}) => {
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [attemptSeed, setAttemptSeed] = useState(0);

    // Shuffle options for each question dynamically per attempt
    const activeQuestions = useMemo(() => {
        return questions.map(q => {
            if (!q.options || q.options.length < 2) return q;
            const correctOptionText = q.options[q.correctAnswerIndex];
            
            const shuffled = [...q.options];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            const newCorrectIdx = shuffled.indexOf(correctOptionText);

            return {
                ...q,
                options: shuffled,
                correctAnswerIndex: newCorrectIdx >= 0 ? newCorrectIdx : q.correctAnswerIndex
            };
        });
    }, [questions, attemptSeed]);

    const currentQuestion = activeQuestions[currentIdx];
    const totalQuestions = activeQuestions.length;
    const answeredCount = Object.keys(selectedAnswers).length;

    const handleSelectOption = (optionIdx: number) => {
        if (isCompleted) return;
        setSelectedAnswers(prev => ({
            ...prev,
            [currentIdx]: optionIdx
        }));
    };

    const handleFinishTest = () => {
        let correctCount = 0;
        const missedQuestions: MissedQuestionInfo[] = [];

        activeQuestions.forEach((q, idx) => {
            if (selectedAnswers[idx] === q.correctAnswerIndex) {
                correctCount++;
            } else {
                missedQuestions.push({
                    questionId: q.id,
                    prompt: q.question,
                    userAnswer: q.options[selectedAnswers[idx]] || 'Tanlanmadi',
                    expectedAnswer: q.options[q.correctAnswerIndex],
                    explanation: q.explanation
                });
            }
        });

        const percentage = Math.round((correctCount / totalQuestions) * 100);
        setIsCompleted(true);
        onCompleteTest?.({
            score: correctCount,
            total: totalQuestions,
            percentage,
            missedQuestions
        });
    };

    const handleRetry = () => {
        setSelectedAnswers({});
        setCurrentIdx(0);
        setIsCompleted(false);
        setAttemptSeed(prev => prev + 1);
    };

    let score = 0;
    if (isCompleted) {
        activeQuestions.forEach((q, idx) => {
            if (selectedAnswers[idx] === q.correctAnswerIndex) {
                score++;
            }
        });
    }
    const scorePercentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
    const isPassed = scorePercentage >= passingScorePercentage;

    return (
        <div className="space-y-6 max-w-2xl mx-auto animate-in fade-in duration-200">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <span className="text-xs font-black text-primary uppercase tracking-wider flex items-center gap-1.5">
                        <Award size={14} />
                        <span>Dars Testi (Quiz)</span>
                    </span>
                    <p className="text-xs text-muted-foreground mt-0.5">
                        {instructions || "Bilimingizni sinovdan o'tkazing:"}
                    </p>
                </div>
                {!isCompleted && (
                    <div className="px-3 py-1 rounded-full bg-secondary text-xs font-bold text-foreground">
                        {currentIdx + 1} / {totalQuestions}
                    </div>
                )}
            </div>

            {!isCompleted ? (
                /* Active Question Card */
                <div className="p-6 rounded-3xl bg-card border border-border shadow-sm space-y-6">
                    <div className="text-base md:text-lg font-bold text-foreground leading-snug">
                        <FuriganaText text={currentQuestion.question} />
                    </div>

                    <div className="space-y-2.5">
                        {currentQuestion.options.map((opt, optIdx) => {
                            const isSelected = selectedAnswers[currentIdx] === optIdx;
                            return (
                                <button
                                    key={optIdx}
                                    onClick={() => handleSelectOption(optIdx)}
                                    className={`w-full p-4 rounded-2xl border text-left text-sm transition-all flex items-center justify-between gap-3 ${
                                        isSelected
                                            ? 'border-primary bg-primary/10 text-primary font-bold shadow-sm'
                                            : 'border-border bg-secondary/30 hover:bg-secondary text-foreground'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black ${
                                            isSelected ? 'bg-primary text-primary-foreground' : 'bg-card border border-border text-muted-foreground'
                                        }`}>
                                            {String.fromCharCode(65 + optIdx)}
                                        </span>
                                        <span><FuriganaText text={opt} /></span>
                                    </div>
                                    {isSelected && <CheckCircle2 size={18} className="text-primary shrink-0" />}
                                </button>
                            );
                        })}
                    </div>

                    {/* Footer Nav Controls */}
                    <div className="flex items-center justify-between gap-3 pt-2">
                        <button
                            onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
                            disabled={currentIdx === 0}
                            className="px-4 py-2.5 rounded-xl border border-border text-xs font-bold text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            Oldingisi
                        </button>

                        {currentIdx < totalQuestions - 1 ? (
                            <button
                                onClick={() => setCurrentIdx(prev => prev + 1)}
                                disabled={selectedAnswers[currentIdx] === undefined}
                                className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-sm hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
                            >
                                <span>Keyingisi</span>
                                <ChevronRight size={14} />
                            </button>
                        ) : (
                            <button
                                onClick={handleFinishTest}
                                disabled={answeredCount < totalQuestions}
                                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black shadow-md shadow-emerald-600/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1.5"
                            >
                                <Sparkles size={14} />
                                <span>Testni Yakunlash</span>
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                /* Test Summary & Question Review Card */
                <div className="space-y-6">
                    {/* Score Hero Banner */}
                    <div className={`p-6 rounded-3xl border shadow-md text-center space-y-3 ${
                        isPassed
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-foreground'
                            : 'bg-amber-500/10 border-amber-500/30 text-foreground'
                    }`}>
                        <div className="text-3xl">
                            {isPassed ? '🎉' : '📖'}
                        </div>
                        <h3 className="text-xl font-black">
                            {isPassed ? 'Test Muvaffaqiyatli Topshirildi!' : 'Qayta urinib ko\'ring'}
                        </h3>
                        <div className="flex items-center justify-center gap-3">
                            <span className="text-3xl font-black text-primary">{score} / {totalQuestions}</span>
                            <span className="text-sm font-bold text-muted-foreground">({scorePercentage}%)</span>
                        </div>
                        <p className="text-xs text-muted-foreground max-w-md mx-auto">
                            {isPassed
                                ? "Ajoyib natija! Ushbu darsning barcha asosiy mavzularini o'zlashtirdingiz."
                                : "Natijangizni yaxshilash uchun tahlillarni ko'rib chiqing va qayta urinib ko'ring."}
                        </p>
                    </div>

                    {/* Question by Question Review */}
                    <div className="space-y-3">
                        <h4 className="text-xs font-black uppercase tracking-wider text-muted-foreground">
                            Savollar Tahlili:
                        </h4>

                        {activeQuestions.map((q, qIdx) => {
                            const userAnswer = selectedAnswers[qIdx];
                            const isUserCorrect = userAnswer === q.correctAnswerIndex;

                            return (
                                <div
                                    key={qIdx}
                                    className={`p-4 rounded-2xl border bg-card space-y-2 ${
                                        isUserCorrect ? 'border-emerald-500/30' : 'border-rose-500/30'
                                    }`}
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="text-xs font-bold text-foreground">
                                            {qIdx + 1}. <FuriganaText text={q.question} />
                                        </div>
                                        {isUserCorrect ? (
                                            <span className="text-xs font-bold text-emerald-500 flex items-center gap-1 shrink-0">
                                                <CheckCircle2 size={14} /> To'g'ri
                                            </span>
                                        ) : (
                                            <span className="text-xs font-bold text-rose-500 flex items-center gap-1 shrink-0">
                                                <XCircle size={14} /> Xato
                                            </span>
                                        )}
                                    </div>

                                    <div className="text-xs text-muted-foreground space-y-1 pt-1 border-t border-border/50">
                                        <div>
                                            <span className="font-semibold text-foreground">To'g'ri javob: </span>
                                            <span className="text-emerald-500 font-bold"><FuriganaText text={q.options[q.correctAnswerIndex]} /></span>
                                        </div>
                                        {q.explanation && (
                                            <div className="text-[11px] text-muted-foreground mt-0.5">
                                                💡 <FuriganaText text={q.explanation} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {!isPassed && (
                        <button
                            onClick={handleRetry}
                            className="w-full py-3 rounded-2xl border border-border bg-card hover:bg-secondary text-foreground text-xs font-bold transition-all flex items-center justify-center gap-2"
                        >
                            <RotateCcw size={14} />
                            <span>Testni Qayta Topshirish</span>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};
