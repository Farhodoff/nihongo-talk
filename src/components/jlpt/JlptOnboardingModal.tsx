import React, { useState } from 'react';
import { Target, Award, Calendar, Sparkles, ArrowRight, X } from 'lucide-react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { ensureJlptSubjectAndDecks } from '../../utils/jlptAutoSubject';
import { calculateJlptFeasibility } from '../../utils/jlptCalculator';

interface JlptOnboardingModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPlanCreated?: () => void;
}

export const JlptOnboardingModal: React.FC<JlptOnboardingModalProps> = ({ isOpen, onClose, onPlanCreated }) => {
    const [step, setStep] = useState(1);
    const [currentLevel, setCurrentLevel] = useState('N5');
    const [targetLevel, setTargetLevel] = useState('N3');
    const [durationDays, setDurationDays] = useState(120);
    const [isGenerating, setIsGenerating] = useState(false);

    const { subjects, addSubject, addFlashcard } = useStudyData();

    if (!isOpen) return null;

    const handleCreatePlan = async () => {
        setIsGenerating(true);
        try {
            await ensureJlptSubjectAndDecks(currentLevel, targetLevel, subjects, addSubject, addFlashcard);
            
            // Save user target to localStorage
            const planMeta = {
                currentLevel,
                targetLevel,
                durationDays,
                createdAt: new Date().toISOString()
            };
            localStorage.setItem('study_planner_jlpt_user_target', JSON.stringify(planMeta));

            if (onPlanCreated) onPlanCreated();
            onClose();
        } catch (e) {
            console.error("JLPT plan create error", e);
        } finally {
            setIsGenerating(false);
        }
    };

    const feasibility = calculateJlptFeasibility(currentLevel, targetLevel, durationDays);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in">
            <div className="bg-card border border-border w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/60"
                >
                    <X size={20} />
                </button>

                <div className="p-6 bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 text-white">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black bg-white/20 backdrop-blur-md mb-2">
                        <Sparkles size={14} /> NIHONGO JLPT AI COACH 🎌
                    </div>
                    <h2 className="text-xl md:text-2xl font-black">Shaxsiy JLPT Yapon Tili Rejangizni Yaratamiz</h2>
                    <p className="text-xs text-rose-100 mt-1">N5 dan N1 gacha bo'lgan iyeroglif va muloqot rejangiz</p>
                </div>

                <div className="p-6 space-y-6">
                    {step === 1 && (
                        <div className="space-y-5 animate-in fade-in">
                            <div>
                                <label className="block text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                                    <Target size={18} className="text-rose-500" /> Joriy JLPT Darajangiz:
                                </label>
                                <div className="grid grid-cols-5 gap-2">
                                    {['N5', 'N4', 'N3', 'N2', 'N1'].map((lvl) => (
                                        <button
                                            key={lvl}
                                            onClick={() => setCurrentLevel(lvl)}
                                            className={`py-3 rounded-2xl font-extrabold text-sm border transition-all ${
                                                currentLevel === lvl
                                                    ? 'bg-rose-600 text-white border-rose-600 shadow-md scale-[1.02]'
                                                    : 'bg-muted/40 text-foreground border-border hover:border-rose-300'
                                            }`}
                                        >
                                            {lvl}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                                    <Award size={18} className="text-amber-500" /> Maqsadli JLPT Darajangiz:
                                </label>
                                <div className="grid grid-cols-5 gap-2">
                                    {['N5', 'N4', 'N3', 'N2', 'N1'].map((lvl) => (
                                        <button
                                            key={lvl}
                                            onClick={() => setTargetLevel(lvl)}
                                            className={`py-3 rounded-2xl font-extrabold text-sm border transition-all ${
                                                targetLevel === lvl
                                                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-500 shadow-md scale-[1.02]'
                                                    : 'bg-muted/40 text-foreground border-border hover:border-amber-300'
                                            }`}
                                        >
                                            {lvl}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => setStep(2)}
                                className="w-full py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                                <span>Davom Etish</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-5 animate-in fade-in">
                            <label className="block text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                                <Calendar size={18} className="text-rose-500" /> Imtihongacha Qancha Vaqt Bor?
                            </label>
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { days: 60, title: '2 Oy (60 Kun)' },
                                    { days: 120, title: '4 Oy (120 Kun)' },
                                    { days: 180, title: '6 Oy (180 Kun)' }
                                ].map((item) => (
                                    <button
                                        key={item.days}
                                        onClick={() => setDurationDays(item.days)}
                                        className={`p-4 rounded-2xl text-left border transition-all ${
                                            durationDays === item.days
                                                ? 'bg-rose-500/10 border-rose-500 text-rose-600 dark:text-rose-400 font-extrabold'
                                                : 'bg-muted/40 border-border text-foreground'
                                        }`}
                                    >
                                        <div className="font-extrabold text-sm">{item.title}</div>
                                    </button>
                                ))}
                            </div>

                            {/* JLPT Feasibility Indicator */}
                            <div className={`p-4 rounded-2xl border text-xs space-y-2 ${
                                feasibility.feasibilityStatus === 'unrealistic'
                                    ? 'bg-rose-500/10 border-rose-500/30 text-rose-700 dark:text-rose-300'
                                    : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
                            }`}>
                                <div className="flex items-center justify-between font-extrabold text-sm">
                                    <span>{feasibility.statusText}</span>
                                    <span className="font-mono bg-background/80 px-2.5 py-1 rounded-full border border-border">
                                        Kunlik: {feasibility.dailyRequiredHours} soat
                                    </span>
                                </div>
                                <p className="leading-relaxed">{feasibility.description}</p>
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    onClick={() => setStep(1)}
                                    className="px-6 py-3.5 bg-muted text-foreground font-bold rounded-2xl"
                                >
                                    Orqaga
                                </button>
                                <button
                                    onClick={handleCreatePlan}
                                    disabled={isGenerating}
                                    className="flex-1 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
                                >
                                    <span>{isGenerating ? "JLPT Reja Yaratilmoqda..." : "JLPT Rejani Tasdiqlash 🎌"}</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
