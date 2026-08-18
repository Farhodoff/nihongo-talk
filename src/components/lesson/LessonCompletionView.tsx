import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Zap, ArrowRight, Home, Sparkles, Layers, AlertCircle } from 'lucide-react';
import { Lesson } from '../../types/lesson';
import { LessonService } from '../../services/LessonService';

interface LessonCompletionViewProps {
    lesson: Lesson;
    scoreData?: {
        score: number;
        total: number;
        percentage: number;
    };
    newCardsCount?: number;
    mistakesCount?: number;
    onExit: () => void;
}

export const LessonCompletionView: React.FC<LessonCompletionViewProps> = ({
    lesson,
    scoreData,
    newCardsCount = 0,
    mistakesCount = 0,
    onExit
}) => {
    const navigate = useNavigate();
    const nextLesson = LessonService.getNextLesson(lesson.id);

    const handleContinue = () => {
        if (nextLesson) {
            navigate(`/lesson/${nextLesson.id}`);
        } else {
            navigate('/dashboard');
        }
    };

    return (
        <div className="max-w-lg mx-auto py-8 px-4 text-center space-y-8 animate-in fade-in zoom-in-95 duration-300">
            {/* Celebration Icon */}
            <div className="relative inline-block">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-white flex items-center justify-center mx-auto shadow-xl shadow-amber-500/30">
                    <Trophy size={48} className="animate-bounce" />
                </div>
                <div className="absolute -top-2 -right-2 p-2 bg-emerald-500 rounded-full text-white shadow-md">
                    <Sparkles size={16} />
                </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-primary">
                    {lesson.language === 'ja' ? '🇯🇵 JLPT N3 O\'quv Darsi' : '🇬🇧 English B2 Lesson'}
                </span>
                <h1 className="text-3xl font-black text-foreground tracking-tight">
                    Dars Yakunlandi! 🎉
                </h1>
                <p className="text-sm text-muted-foreground">
                    «{lesson.title}» darsini muvaffaqiyatli yakunladingiz.
                </p>
            </div>

            {/* Stats Summary Cards */}
            <div className="grid grid-cols-3 gap-3">
                {/* Score */}
                <div className="p-4 rounded-2xl bg-card border border-border space-y-1">
                    <div className="text-muted-foreground text-[11px] font-bold uppercase">Test Balli</div>
                    <div className="text-lg font-black text-primary">
                        {scoreData ? `${scoreData.score}/${scoreData.total}` : '100%'}
                    </div>
                </div>

                {/* Steps */}
                <div className="p-4 rounded-2xl bg-card border border-border space-y-1">
                    <div className="text-muted-foreground text-[11px] font-bold uppercase">Qadamlar</div>
                    <div className="text-lg font-black text-foreground">
                        {lesson.steps.length}/{lesson.steps.length}
                    </div>
                </div>

                {/* XP */}
                <div className="p-4 rounded-2xl bg-card border border-border space-y-1">
                    <div className="text-muted-foreground text-[11px] font-bold uppercase">XP Bonus</div>
                    <div className="text-lg font-black text-amber-500 flex items-center justify-center gap-1">
                        <Zap size={14} />
                        <span>+50 XP</span>
                    </div>
                </div>
            </div>

            {/* Automated SRS & Learning Signals Notice */}
            <div className="space-y-2 text-left">
                {newCardsCount > 0 && (
                    <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-500 shrink-0">
                            <Layers size={18} />
                        </div>
                        <div className="text-xs">
                            <div className="font-black">{newCardsCount} ta yangi so'z Fleshkartalarga qo'shildi</div>
                            <div className="text-muted-foreground">SM-2 interval algoritmi orqali takrorlash rejalashtirildi.</div>
                        </div>
                    </div>
                )}

                {mistakesCount > 0 && (
                    <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-amber-500/20 text-amber-500 shrink-0">
                            <AlertCircle size={18} />
                        </div>
                        <div className="text-xs">
                            <div className="font-black">{mistakesCount} ta xato qayd etildi</div>
                            <div className="text-muted-foreground">Keyingi amaliy mashg'ulotlarda ko'proq e'tibor beriladi.</div>
                        </div>
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
                {nextLesson ? (
                    <button
                        onClick={handleContinue}
                        className="w-full py-4 rounded-2xl bg-primary text-primary-foreground text-sm font-black shadow-lg shadow-primary/25 hover:opacity-90 transition-all flex items-center justify-center gap-2"
                    >
                        <span>Keyingi Darsga O'tish</span>
                        <ArrowRight size={16} />
                    </button>
                ) : (
                    <div className="p-4 rounded-2xl bg-secondary/50 border border-border text-xs text-muted-foreground">
                        ✨ Siz joriy modul bo'yicha barcha darslarni yakunladingiz!
                    </div>
                )}

                <button
                    onClick={onExit}
                    className="w-full py-3.5 rounded-2xl border border-border bg-card hover:bg-secondary text-foreground text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                    <Home size={14} />
                    <span>Bosh Sahifaga Qaytish</span>
                </button>
            </div>
        </div>
    );
};
