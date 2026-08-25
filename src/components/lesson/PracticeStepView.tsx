import React, { useState, useMemo } from 'react';
import { CheckCircle2, XCircle, ArrowRight, Sparkles } from 'lucide-react';
import { PracticeExercise } from '../../types/lesson';
import { FuriganaText } from '../jlpt/FuriganaText';

interface PracticeStepViewProps {
    instructions: string;
    exercises: PracticeExercise[];
    onCompleteExercise?: (exerciseId: string, isCorrect: boolean) => void;
    onIncorrectAnswer?: (exerciseId: string, prompt: string, userAnswer: string | number, expectedAnswer: string | number, explanation?: string) => void;
}

export const PracticeStepView: React.FC<PracticeStepViewProps> = ({
    instructions,
    exercises,
    onCompleteExercise,
    onIncorrectAnswer
}) => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Dynamic shuffle for multiple-choice exercise options
    const activeExercises = useMemo(() => {
        return exercises.map(ex => {
            if (ex.type !== 'multiple-choice' || !ex.options || ex.options.length < 2) {
                return ex;
            }
            const correctText = typeof ex.correctAnswer === 'number'
                ? ex.options[ex.correctAnswer]
                : ex.correctAnswer;

            const shuffled = [...ex.options];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            const newCorrectIdx = shuffled.indexOf(correctText);

            return {
                ...ex,
                options: shuffled,
                correctAnswer: newCorrectIdx >= 0 ? newCorrectIdx : ex.correctAnswer
            };
        });
    }, [exercises]);

    const currentExercise = activeExercises[currentIdx];
    const isCorrect = currentExercise && selectedOption !== null && (
        typeof currentExercise.correctAnswer === 'number'
            ? selectedOption === currentExercise.correctAnswer
            : String(selectedOption).trim().toLowerCase() === String(currentExercise.correctAnswer).trim().toLowerCase()
    );

    const handleSelectOption = (optIdx: number) => {
        if (isSubmitted) return;
        setSelectedOption(optIdx);
    };

    const handleCheckAnswer = () => {
        if (selectedOption === null || isSubmitted) return;
        setIsSubmitted(true);
        const correct = typeof currentExercise.correctAnswer === 'number'
            ? selectedOption === currentExercise.correctAnswer
            : String(selectedOption).trim().toLowerCase() === String(currentExercise.correctAnswer).trim().toLowerCase();

        onCompleteExercise?.(currentExercise.id, correct);
        if (!correct) {
            onIncorrectAnswer?.(
                currentExercise.id,
                currentExercise.prompt,
                selectedOption,
                currentExercise.correctAnswer,
                currentExercise.explanation
            );
        }
    };

    const handleNextExercise = () => {
        if (currentIdx < exercises.length - 1) {
            setCurrentIdx(prev => prev + 1);
            setSelectedOption(null);
            setIsSubmitted(false);
        }
    };

    const handlePrevExercise = () => {
        if (currentIdx > 0) {
            setCurrentIdx(prev => prev - 1);
            setSelectedOption(null);
            setIsSubmitted(false);
        }
    };

    if (!currentExercise) {
        return (
            <div className="text-center p-8 text-muted-foreground">
                Mashqlar topilmadi.
            </div>
        );
    }

    return (
        <div className="space-y-6 max-w-2xl mx-auto animate-in fade-in duration-200">
            {/* Header / Subtitle */}
            <div className="flex items-center justify-between">
                <div>
                    <span className="text-xs font-black text-primary uppercase tracking-wider">
                        Interaktiv Mashq
                    </span>
                    <p className="text-xs text-muted-foreground mt-0.5">
                        {instructions || "Savolga to'g'ri javobni tanlang:"}
                    </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-secondary text-xs font-bold text-foreground">
                    {currentIdx + 1} / {exercises.length}
                </div>
            </div>

            {/* Exercise Card */}
            <div className="p-6 rounded-3xl bg-card border border-border shadow-sm space-y-6">
                <div className="text-lg font-bold text-foreground leading-snug">
                    <FuriganaText text={currentExercise.prompt} />
                </div>

                {/* Options list */}
                {currentExercise.options && (
                    <div className="space-y-2.5">
                        {currentExercise.options.map((opt, optIdx) => {
                            const isSelected = selectedOption === optIdx;
                            let btnStyle = 'border-border bg-secondary/30 hover:bg-secondary text-foreground';

                            if (isSubmitted) {
                                if (optIdx === currentExercise.correctAnswer) {
                                    btnStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold';
                                } else if (isSelected && !isCorrect) {
                                    btnStyle = 'border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400';
                                }
                            } else if (isSelected) {
                                btnStyle = 'border-primary bg-primary/10 text-primary font-bold shadow-sm';
                            }

                            return (
                                <button
                                    key={optIdx}
                                    onClick={() => handleSelectOption(optIdx)}
                                    disabled={isSubmitted}
                                    className={`w-full p-4 rounded-2xl border text-left text-sm transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-lg bg-card border border-border flex items-center justify-center text-xs font-black text-muted-foreground">
                                            {String.fromCharCode(65 + optIdx)}
                                        </span>
                                        <span><FuriganaText text={opt} /></span>
                                    </div>
                                    {isSubmitted && optIdx === currentExercise.correctAnswer && (
                                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                                    )}
                                    {isSubmitted && isSelected && !isCorrect && (
                                        <XCircle size={18} className="text-rose-500 shrink-0" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                )}

                {/* Action Buttons */}
                {!isSubmitted ? (
                    <button
                        onClick={handleCheckAnswer}
                        disabled={selectedOption === null}
                        className="w-full py-3.5 rounded-2xl bg-primary text-primary-foreground text-sm font-bold shadow-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        Javobni Tekshirish
                    </button>
                ) : (
                    <div className="space-y-4 animate-in fade-in">
                        {/* Result Alert */}
                        <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
                            isCorrect 
                                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400' 
                                : 'bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400'
                        }`}>
                            {isCorrect ? <CheckCircle2 size={20} className="shrink-0 mt-0.5" /> : <XCircle size={20} className="shrink-0 mt-0.5" />}
                            <div className="text-xs leading-relaxed">
                                <div className="font-bold text-sm mb-0.5">
                                    {isCorrect ? "To'g'ri javob! 🎉" : "Noto'g'ri javob 💡"}
                                </div>
                                {currentExercise.explanation && (
                                    <div className="mt-1 text-foreground/80">
                                        <FuriganaText text={currentExercise.explanation} />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Navigation between exercises */}
                        <div className="flex items-center justify-between gap-3">
                            <button
                                onClick={handlePrevExercise}
                                disabled={currentIdx === 0}
                                className="px-4 py-2.5 rounded-xl border border-border text-xs font-bold text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                Oldingi mashq
                            </button>
                            {currentIdx < exercises.length - 1 ? (
                                <button
                                    onClick={handleNextExercise}
                                    className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-sm hover:opacity-90 flex items-center gap-1.5"
                                >
                                    <span>Keyingi mashq</span>
                                    <ArrowRight size={14} />
                                </button>
                            ) : (
                                <div className="text-xs font-bold text-emerald-500 flex items-center gap-1">
                                    <Sparkles size={14} />
                                    <span>Barcha mashqlar bajarildi!</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
