import React, { useState, useEffect } from 'react';
import { X, Sparkles, Loader2, BookOpen, Lightbulb } from 'lucide-react';
import { Button } from '../ui/Button';
import { generateAiTutorExplanation, AiTutorExplanation } from '../../utils/ai';

interface AiTutorExplanationModalProps {
    isOpen: boolean;
    onClose: () => void;
    questionText: string;
    studentAnswer: string;
    correctAnswer: string;
    contextPassage: string;
}

export const AiTutorExplanationModal: React.FC<AiTutorExplanationModalProps> = ({
    isOpen,
    onClose,
    questionText,
    studentAnswer,
    correctAnswer,
    contextPassage
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<AiTutorExplanation | null>(null);

    useEffect(() => {
        if (isOpen) {
            setIsLoading(true);
            generateAiTutorExplanation(questionText, studentAnswer, correctAnswer, contextPassage)
                .then(res => {
                    setData(res);
                    setIsLoading(false);
                })
                .catch(() => setIsLoading(false));
        }
    }, [isOpen, questionText, studentAnswer, correctAnswer, contextPassage]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-card border border-border w-full max-w-xl rounded-3xl p-6 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-border pb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-indigo-500/10 text-indigo-600 rounded-xl">
                            <Sparkles size={22} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground">AI Tutor Izohi</h3>
                            <p className="text-xs text-muted-foreground">Nima uchun ushbu javob to'g'ri/xato ekanligini o'rganing.</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 text-muted-foreground hover:text-foreground rounded-lg">
                        <X size={20} />
                    </button>
                </div>

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-3">
                        <Loader2 className="animate-spin text-primary" size={36} />
                        <p className="text-sm font-bold text-foreground">AI Tutor matn tahlilini amalga oshirmoqda...</p>
                    </div>
                ) : data ? (
                    <div className="space-y-4">
                        <div className="p-4 bg-muted/40 rounded-2xl border border-border space-y-2">
                            <span className="text-xs font-bold text-muted-foreground uppercase">Savol:</span>
                            <p className="text-sm font-extrabold text-foreground">{questionText}</p>
                            <div className="flex items-center gap-4 text-xs pt-1">
                                <span className="text-red-400 font-bold">Sizning javobingiz: "{studentAnswer}"</span>
                                <span className="text-emerald-500 font-bold">To'g'ri javob: "{correctAnswer}"</span>
                            </div>
                        </div>

                        <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl space-y-2">
                            <span className="text-xs font-bold text-indigo-500 flex items-center gap-1.5">
                                <Lightbulb size={16} /> Tutor Tushuntirish:
                            </span>
                            <p className="text-sm text-foreground leading-relaxed">{data.explanationUzbek}</p>
                        </div>

                        {data.passageCitation && (
                            <div className="p-4 bg-muted/30 border border-border/60 rounded-2xl space-y-1">
                                <span className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-1.5">
                                    <BookOpen size={14} /> Matndan Parcha (Proof):
                                </span>
                                <p className="text-xs italic text-foreground/90 leading-relaxed font-mono">"{data.passageCitation}"</p>
                            </div>
                        )}

                        {data.keyTip && (
                            <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-600 dark:text-amber-400 font-medium">
                                💡 <b>Tavsiya:</b> {data.keyTip}
                            </div>
                        )}

                        <Button onClick={onClose} className="w-full py-3 font-bold rounded-xl">
                            Tushundim
                        </Button>
                    </div>
                ) : (
                    <p className="text-sm text-red-500 text-center">Izohni yuklab bo'lmadi.</p>
                )}
            </div>
        </div>
    );
};
