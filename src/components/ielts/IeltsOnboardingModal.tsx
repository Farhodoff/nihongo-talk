import React, { useState } from 'react';
import { Target, Award, Calendar, Sparkles, ArrowRight, RefreshCw, X, ShieldCheck } from 'lucide-react';
import { generateIeltsStudyPlan, IeltsStudyPlanResult } from '../../utils/ai';
import { useStudyData } from '../../context/StudyPlannerContext';
import { ensureIeltsSubjectAndDecks } from '../../utils/ieltsAutoSubject';
import { calculateCefrFeasibility } from '../../utils/cefrCalculator';
import { Task, Flashcard, StudyNote } from '../../types';
import { PlacementTestModal } from '../ui/PlacementTestModal';
import { supabase } from '../../lib/supabase';
import { toDeterministicUUID } from '../../utils/uuid';

interface IeltsOnboardingModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPlanCreated?: (plan: IeltsStudyPlanResult) => void;
}

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_v, i) =>
        arr.slice(i * size, i * size + size)
    );
};

export const IeltsOnboardingModal: React.FC<IeltsOnboardingModalProps> = ({
    isOpen,
    onClose,
    onPlanCreated
}) => {
    const { subjects, addSubject, addFlashcard, addTasksBatch, addFlashcardsBatch, addStudyNotesBatch } = useStudyData();
    const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
    const [currentBand, setCurrentBand] = useState<number>(5.5);
    const [targetBand, setTargetBand] = useState<number>(7.0);
    const [durationDays, setDurationDays] = useState<number>(30);
    const [weakSkill, setWeakSkill] = useState<string>('Writing & Speaking');
    
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedPlan, setGeneratedPlan] = useState<IeltsStudyPlanResult | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [showPlacementTest, setShowPlacementTest] = useState(false);

    if (!isOpen) return null;

    if (showPlacementTest) {
        return (
            <PlacementTestModal 
                isOpen={showPlacementTest} 
                onClose={() => setShowPlacementTest(false)} 
                testType="ielts"
                onComplete={(level) => {
                    const parsedBand = parseFloat(level);
                    if (!isNaN(parsedBand)) {
                        setCurrentBand(parsedBand);
                    }
                    setShowPlacementTest(false);
                }} 
            />
        );
    }

    const handleGenerate = async () => {
        setIsGenerating(true);
        setErrorMsg(null);
        try {
            const plan = await generateIeltsStudyPlan(currentBand, targetBand, durationDays, weakSkill);
            setGeneratedPlan(plan);
            setStep(5);

            const targetObj = {
                currentBand,
                targetBand,
                durationDays,
                weakSkill,
                generatedPlan: plan,
                createdAt: new Date().toISOString()
            };

            // Save to localStorage
            localStorage.setItem('study_planner_ielts_user_target', JSON.stringify(targetObj));

            // Save to Supabase DB user_targets table (and user_metadata fallback)
            try {
                const { data: { user } } = await supabase.auth.getUser();
                if (user?.id) {
                    const uuid = toDeterministicUUID(`target_${user.id}_ielts`);
                    await supabase.from('user_targets').upsert({
                        id: uuid,
                        user_id: user.id,
                        target_type: 'ielts',
                        target_score: String(targetBand),
                        details: targetObj,
                        updated_at: new Date().toISOString()
                    });
                }
                await supabase.auth.updateUser({
                    data: { ielts_user_target: targetObj }
                });
            } catch (e) {
                console.error("Failed to sync IELTS plan to Supabase DB:", e);
            }

            // Auto create "IELTS Academic & CEFR Master" subject and populate flashcard decks
            const ieltsSubjectId = await ensureIeltsSubjectAndDecks(currentBand, targetBand, subjects, addSubject, addFlashcard);

            // Auto add top daily tasks to user's Task manager
            if (plan.dailyPlan && plan.dailyPlan.length > 0) {
                const tasksToInsert: Partial<Task>[] = [];
                plan.dailyPlan.forEach((day, index) => {
                    day.tasks.forEach((t) => {
                        tasksToInsert.push({
                            title: `[IELTS Day ${day.day}] ${t} (${day.focusSkill})`,
                            completed: false,
                            status: 'todo',
                            priority: index === 0 ? 'high' : 'medium',
                            dueDate: new Date(Date.now() + index * 86400000).toISOString().split('T')[0],
                            subjectId: ieltsSubjectId || undefined
                        });
                    });

                    // Explicitly add specific vocabulary task for the day if provided
                    if (day.vocabularyList && day.vocabularyList.length > 0) {
                        const wordsStr = day.vocabularyList.map(v => `${v.word} (${v.meaning})`).join(', ');
                        const alreadyIncludesWords = day.tasks.some(t => day.vocabularyList?.some(v => t.includes(v.word)));
                        if (!alreadyIncludesWords) {
                            tasksToInsert.push({
                                title: `[IELTS Day ${day.day}] 📖 Kunlik maxsus lug'at yodlash: ${wordsStr}`,
                                completed: false,
                                status: 'todo',
                                priority: 'high',
                                dueDate: new Date(Date.now() + index * 86400000).toISOString().split('T')[0],
                                subjectId: ieltsSubjectId || undefined
                            });
                        }
                    }
                });
                
                const taskChunks = chunkArray(tasksToInsert, 100);
                for (const chunk of taskChunks) {
                    await addTasksBatch(chunk);
                }
            }

            // Auto add Flashcards and Grammar Notes
            if (plan.dailyPlan && plan.dailyPlan.length > 0) {
                const flashcardsToInsert: Partial<Flashcard>[] = [];
                const notesToInsert: Partial<StudyNote>[] = [];

                plan.dailyPlan.forEach((day) => {
                    // Vocabulary
                    if (day.vocabularyList) {
                        day.vocabularyList.forEach(v => {
                            flashcardsToInsert.push({
                                subjectId: ieltsSubjectId || undefined,
                                front: v.word,
                                back: v.meaning + (v.example ? `\n\nExample: ${v.example}` : '')
                            });
                        });
                    }
                    // Grammar Notes
                    if (day.grammarNotes) {
                        day.grammarNotes.forEach(g => {
                            notesToInsert.push({
                                subjectId: ieltsSubjectId || undefined,
                                title: `[IELTS Day ${day.day}] ${g.rule}`,
                                content: `## ${g.rule}\n\n**Explanation:** ${g.explanation}\n\n${g.example ? `**Example:** ${g.example}` : ''}`
                            });
                        });
                    }
                });

                if (flashcardsToInsert.length > 0) {
                    const fcChunks = chunkArray(flashcardsToInsert, 100);
                    for (const chunk of fcChunks) {
                        await addFlashcardsBatch(chunk);
                    }
                }
                if (notesToInsert.length > 0) {
                    const notesChunks = chunkArray(notesToInsert, 50);
                    for (const chunk of notesChunks) {
                        await addStudyNotesBatch(chunk);
                    }
                }
            }

            if (onPlanCreated) onPlanCreated(plan);
        } catch (err: any) {
            setErrorMsg(err?.message || "Reja tuzishda xatolik yuz berdi");
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in">
            <div className="bg-white dark:bg-[#1f2937] w-full max-w-xl rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white rounded-full bg-gray-100 dark:bg-gray-800 transition-colors z-10"
                >
                    <X size={18} />
                </button>

                {/* Progress Header */}
                <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 bg-white/20 rounded-full text-xs font-bold tracking-wide">
                            IELTS AI COACH 🎯
                        </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-black">
                        {step === 5 ? "Sizning Shaxsiy IELTS Rejangiz Tayyor!" : "Shaxsiy IELTS Dars Rejangizni Yaratamiz"}
                    </h2>
                    <p className="text-xs text-indigo-100 mt-1">
                        {step === 5 ? "AI tomonidan tayyorlangan 30 kunlik intensiv yo'l xaritasi" : "4 ta oddiy savol orqali AI dars jadvalingizni shakllantiradi."}
                    </p>
                </div>

                {/* Step Content */}
                <div className="p-6 space-y-6">
                    {/* Step 1: Current vs Target Band */}
                    {step === 1 && (
                        <div className="space-y-5 animate-in fade-in">
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <label className="text-sm font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                                        <Target size={18} className="text-indigo-500" />
                                        Joriy (Hozirgi taxminiy) IELTS Ballingiz:
                                    </label>
                                    <button 
                                        onClick={() => setShowPlacementTest(true)}
                                        className="text-xs font-bold text-indigo-600 bg-indigo-500/10 px-3 py-1 rounded-full hover:bg-indigo-500/20 transition-colors flex items-center gap-1"
                                    >
                                        <Sparkles size={12} /> Darajani aniqlash (AI Test)
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                                    {[0, 4.5, 5.0, 5.5, 6.0, 6.5].map((b) => (
                                        <button
                                            key={b}
                                            onClick={() => setCurrentBand(b)}
                                            className={`py-3 px-1 rounded-2xl font-extrabold text-xs border transition-all ${
                                                currentBand === b
                                                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20 scale-[1.02]'
                                                    : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-indigo-300'
                                            }`}
                                        >
                                            {b === 0 ? "🌱 0 Level (Noldan)" : b.toFixed(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                                    <Award size={18} className="text-amber-500" />
                                    Maqsadli (Orzu qilgan) IELTS Ballingiz:
                                </label>
                                <div className="grid grid-cols-5 gap-2">
                                    {[6.5, 7.0, 7.5, 8.0, 8.5].map((b) => (
                                        <button
                                            key={b}
                                            onClick={() => setTargetBand(b)}
                                            className={`py-3 rounded-2xl font-extrabold text-sm border transition-all ${
                                                targetBand === b
                                                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-500 shadow-md shadow-amber-500/20 scale-[1.02]'
                                                    : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-amber-300'
                                            }`}
                                        >
                                            {b.toFixed(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => setStep(2)}
                                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2"
                            >
                                <span>Davom Etish</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    )}

                    {/* Step 2: Timeframe */}
                    {step === 2 && (
                        <div className="space-y-6 animate-in fade-in">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                                    <Calendar size={18} className="text-indigo-500" />
                                    Imtihongacha Qancha Vaqtingiz Bor?
                                </label>
                                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 font-black text-xs rounded-full">
                                    📅 {Math.round(durationDays / 30) > 0 ? `${Math.round(durationDays / 30)} Oy` : `${durationDays} Kun`} ({durationDays} Kun)
                                </span>
                            </div>

                            {/* Interactive Month Slider Control */}
                            <div className="p-4 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/80 rounded-2xl space-y-4">
                                <div className="flex items-center justify-between text-xs font-extrabold text-gray-600 dark:text-gray-300">
                                    <span>1 Oy (30 kun)</span>
                                    <span className="text-indigo-600 dark:text-indigo-400 font-black text-sm">
                                        🎚️ {Math.round(durationDays / 30)} Oy Tayyorgarlik
                                    </span>
                                    <span>12 Oy (365 kun)</span>
                                </div>

                                <input
                                    type="range"
                                    min={1}
                                    max={12}
                                    step={1}
                                    value={Math.min(12, Math.max(1, Math.round(durationDays / 30)))}
                                    onChange={(e) => {
                                        const months = parseInt(e.target.value);
                                        setDurationDays(months * 30);
                                    }}
                                    className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                />

                                <div className="flex justify-between text-[10px] text-gray-400 font-bold px-1">
                                    <span>1Oy</span>
                                    <span>2Oy</span>
                                    <span>3Oy</span>
                                    <span className="text-indigo-500 font-black">4Oy ⭐</span>
                                    <span>6Oy</span>
                                    <span>9Oy</span>
                                    <span>12Oy</span>
                                </div>
                            </div>

                            {/* Fast Preset Cards */}
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                                {[
                                    { months: 1, days: 30, title: '1 Oy' },
                                    { months: 2, days: 60, title: '2 Oy' },
                                    { months: 3, days: 90, title: '3 Oy' },
                                    { months: 4, days: 120, title: '4 Oy ⭐' },
                                    { months: 6, days: 180, title: '6 Oy' },
                                    { months: 12, days: 365, title: '1 Yil' }
                                ].map((item) => (
                                    <button
                                        key={item.days}
                                        onClick={() => setDurationDays(item.days)}
                                        className={`py-3 px-2 rounded-2xl text-center border transition-all ${
                                            durationDays === item.days
                                                ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20 scale-[1.02]'
                                                : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-300'
                                        }`}
                                    >
                                        <div className="font-extrabold text-xs">{item.title}</div>
                                        <div className="text-[10px] opacity-75 mt-0.5">{item.days} kun</div>
                                    </button>
                                ))}
                            </div>

                            {/* Cambridge Realistic Feasibility Indicator Widget */}
                            {(() => {
                                const analysis = calculateCefrFeasibility(currentBand, targetBand, durationDays);
                                return (
                                    <div className={`p-4 rounded-2xl border text-xs space-y-2 ${
                                        analysis.feasibilityStatus === 'unrealistic'
                                            ? 'bg-rose-500/10 border-rose-500/30 text-rose-700 dark:text-rose-300'
                                            : analysis.feasibilityStatus === 'intensive'
                                            ? 'bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300'
                                            : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
                                    }`}>
                                        <div className="flex items-center justify-between font-extrabold text-sm">
                                            <span>{analysis.statusText}</span>
                                            <span className="font-mono bg-background/80 px-2.5 py-1 rounded-full border border-border">
                                                Kunlik: {analysis.dailyRequiredHours} soat
                                            </span>
                                        </div>
                                        <p className="leading-relaxed">{analysis.description}</p>
                                        {analysis.feasibilityStatus === 'unrealistic' && (
                                            <button
                                                type="button"
                                                onClick={() => setDurationDays(analysis.recommendedDays)}
                                                className="mt-1 w-full py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs shadow transition-all"
                                            >
                                                💡 Samimiy Tavsiya: Muddatni {analysis.recommendedDays} kunga o'zgartirish (kuniga 3.0 soat)
                                            </button>
                                        )}
                                    </div>
                                );
                            })()}

                            <div className="flex gap-3 pt-2">
                                <button
                                    onClick={() => setStep(1)}
                                    className="px-6 py-3.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold rounded-2xl hover:bg-gray-200"
                                >
                                    Orqaga
                                </button>
                                <button
                                    onClick={() => setStep(3)}
                                    className="flex-1 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2"
                                >
                                    <span>Keyingisi</span>
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Weak Skill Focus */}
                    {step === 3 && (
                        <div className="space-y-5 animate-in fade-in">
                            <label className="block text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">
                                Qaysi Bo'limda Eng Ko'p Qiynalasiz?
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    'Writing (Insho & Report)',
                                    'Speaking (Suhbat & Accent)',
                                    'Reading (Matnlar & Vaqt)',
                                    'Listening (Tushunish & Spel)',
                                    'Barcha Qismlarda'
                                ].map((skill) => (
                                    <button
                                        key={skill}
                                        onClick={() => setWeakSkill(skill)}
                                        className={`p-4 rounded-2xl text-left border text-sm font-bold transition-all ${
                                            weakSkill === skill
                                                ? 'bg-purple-50 dark:bg-purple-950/50 border-purple-600 text-purple-700 dark:text-purple-300 shadow-sm'
                                                : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'
                                        }`}
                                    >
                                        {skill}
                                    </button>
                                ))}
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    onClick={() => setStep(2)}
                                    className="px-6 py-3.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold rounded-2xl hover:bg-gray-200"
                                >
                                    Orqaga
                                </button>
                                <button
                                    onClick={handleGenerate}
                                    disabled={isGenerating}
                                    className="flex-1 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2"
                                >
                                    {isGenerating ? (
                                        <>
                                            <RefreshCw size={18} className="animate-spin" />
                                            <span>AI Reja Tuzmoqda...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Sparkles size={18} />
                                            <span>AI Dars Rejasini Generatsiya Qilish</span>
                                        </>
                                    )}
                                </button>
                            </div>
                            {errorMsg && (
                                <p className="text-xs text-rose-500 font-medium text-center">{errorMsg}</p>
                            )}
                        </div>
                    )}

                    {/* Step 5: Resulting Plan View */}
                    {step === 5 && generatedPlan && (
                        <div className="space-y-4 animate-in fade-in max-h-[60vh] overflow-y-auto pr-1">
                            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl text-emerald-800 dark:text-emerald-300 text-xs leading-relaxed">
                                <div className="font-extrabold text-sm mb-1 flex items-center gap-2">
                                    <ShieldCheck size={18} />
                                    {generatedPlan.headline}
                                </div>
                                <p>{generatedPlan.summary}</p>
                            </div>

                            <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 pt-2">
                                Topshiriqlar Rejasi (Namuna Kunlar):
                            </h4>

                            <div className="space-y-2.5">
                                {generatedPlan.dailyPlan.slice(0, 5).map((d) => (
                                    <div key={d.day} className="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-800 text-xs">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-indigo-600 dark:text-indigo-400">
                                                Day {d.day}: {d.title}
                                            </span>
                                            <span className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded text-[10px] font-bold">
                                                {d.focusSkill} • {d.pomodoroTargetMinutes} min
                                            </span>
                                        </div>
                                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-0.5">
                                            {d.tasks.map((t, idx) => (
                                                <li key={idx}>{t}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={onClose}
                                className="w-full mt-4 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg transition-all"
                            >
                                Tayyorgarlikni Boshlash 🚀
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <PlacementTestModal 
                isOpen={showPlacementTest}
                onClose={() => setShowPlacementTest(false)}
                testType="ielts"
                onComplete={(level) => {
                    const parsedBand = parseFloat(level);
                    if (!isNaN(parsedBand)) {
                        setCurrentBand(parsedBand);
                    }
                }}
            />
        </div>
    );
};
