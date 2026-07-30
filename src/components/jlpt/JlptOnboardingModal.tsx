import React, { useState } from 'react';
import { Target, Award, Sparkles, X, AlertTriangle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { ensureJlptSubjectAndDecks } from '../../utils/jlptAutoSubject';
import { calculateJlptFeasibility } from '../../utils/jlptCalculator';
import { generateJlptStudyPlan } from '../../utils/ai';
import { Task, Flashcard, StudyNote } from '../../types';
import { PlacementTestModal } from '../ui/PlacementTestModal';
import { supabase } from '../../lib/supabase';

interface JlptOnboardingModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPlanCreated?: () => void;
}

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_v, i) =>
        arr.slice(i * size, i * size + size)
    );
};

export const JlptOnboardingModal: React.FC<JlptOnboardingModalProps> = ({ isOpen, onClose, onPlanCreated }) => {
    const [planType, setPlanType] = useState<'special' | 'jlpt'>('special');
    const [specialGoal, setSpecialGoal] = useState<'kaiwa' | 'mensetsu' | 'dokkai' | 'kanji' | 'custom'>('kaiwa');
    const [customGoalText, setCustomGoalText] = useState('');
    const [currentLevel, setCurrentLevel] = useState('N5');
    const [targetLevel, setTargetLevel] = useState('N3');
    const [durationDays, setDurationDays] = useState(90);
    const [isGenerating, setIsGenerating] = useState(false);
    const [showPlacementTest, setShowPlacementTest] = useState(false);
    const [showConfirmStep, setShowConfirmStep] = useState(false);

    const { subjects, addSubject, addFlashcard, addTasksBatch, addFlashcardsBatch, addStudyNotesBatch } = useStudyData();

    if (!isOpen) return null;

    if (showPlacementTest) {
        return (
            <PlacementTestModal 
                isOpen={showPlacementTest} 
                onClose={() => setShowPlacementTest(false)} 
                testType="jlpt"
                onComplete={(level) => {
                    setCurrentLevel(level);
                    setShowPlacementTest(false);
                }} 
            />
        );
    }

    const handleCreatePlan = async () => {
        setIsGenerating(true);
        try {
            // 1. Generate study plan using AI
            const plan = await generateJlptStudyPlan(currentLevel, targetLevel, durationDays, planType, specialGoal);

            // 2. Create Japanese subject and populate decks
            const jlptSubjectId = await ensureJlptSubjectAndDecks(currentLevel, targetLevel, subjects, addSubject, addFlashcard);
            
            let finalGoalTitle = "";
            if (planType === 'special') {
                if (specialGoal === 'kaiwa') finalGoalTitle = "🗣️ Kaiwa Erkin Muloqot & Suhbat";
                else if (specialGoal === 'mensetsu') finalGoalTitle = "💼 Mensetsu (Yapon Kompaniyalariga Intervyu)";
                else if (specialGoal === 'dokkai') finalGoalTitle = "📖 Dokkai Mutolaa & Matnlar";
                else if (specialGoal === 'kanji') finalGoalTitle = "⛩️ Kanji & Lug'at Yodlash";
                else finalGoalTitle = customGoalText || "🎯 Shaxsiy Yapon Tili Maqsadi";
            } else {
                finalGoalTitle = `🎓 JLPT ${currentLevel} ➔ ${targetLevel} Imtihon Sertifikati`;
            }

            const planMeta = {
                planType,
                specialGoal,
                finalGoalTitle,
                currentLevel,
                targetLevel,
                durationDays,
                generatedPlan: plan,
                createdAt: new Date().toISOString()
            };
            localStorage.setItem('study_planner_jlpt_user_target', JSON.stringify(planMeta));

            try {
                await supabase.auth.updateUser({
                    data: { jlpt_user_target: planMeta }
                });
            } catch (e) {
                console.error("Failed to sync JLPT plan to Supabase DB:", e);
            }

            // 3. Batch Add Tasks
            if (plan.dailyPlan && plan.dailyPlan.length > 0) {
                const tasksToInsert: Partial<Task>[] = [];
                plan.dailyPlan.forEach((day, index) => {
                    day.tasks.forEach((t) => {
                        tasksToInsert.push({
                            title: `[JLPT Day ${day.day}] ${t} (${day.focusArea})`,
                            completed: false,
                            status: 'todo',
                            priority: index === 0 ? 'high' : 'medium',
                            dueDate: new Date(Date.now() + index * 86400000).toISOString().split('T')[0],
                            subjectId: jlptSubjectId || undefined
                        });
                    });
                });
                
                const taskChunks = chunkArray(tasksToInsert, 100);
                for (const chunk of taskChunks) {
                    await addTasksBatch(chunk);
                }
            }

            // 4. Batch Add Flashcards & Notes
            if (plan.dailyPlan && plan.dailyPlan.length > 0) {
                const flashcardsToInsert: Partial<Flashcard>[] = [];
                const notesToInsert: Partial<StudyNote>[] = [];

                plan.dailyPlan.forEach((day) => {
                    // Vocabulary
                    if (day.vocabularyList) {
                        day.vocabularyList.forEach(v => {
                            flashcardsToInsert.push({
                                subjectId: jlptSubjectId || undefined,
                                front: v.word + (v.reading ? ` (${v.reading})` : ''),
                                back: v.meaning + (v.example ? `\n\nMisol: ${v.example}` : '')
                            });
                        });
                    }
                    // Kanji
                    if (day.kanjiList) {
                        day.kanjiList.forEach(k => {
                            flashcardsToInsert.push({
                                subjectId: jlptSubjectId || undefined,
                                front: k.kanji,
                                back: `Ma'nosi: ${k.meaning}\nOn'yomi: ${k.onyomi || '-'}\nKun'yomi: ${k.kunyomi || '-'}`
                            });
                        });
                    }
                    // Grammar Notes
                    if (day.grammarNotes) {
                        day.grammarNotes.forEach(g => {
                            notesToInsert.push({
                                subjectId: jlptSubjectId || undefined,
                                title: `[JLPT Kun ${day.day}] ${g.rule}`,
                                content: `## ${g.rule}\n\n**Qoida:** ${g.explanation}\n\n${g.example ? `**Misol:** ${g.example}` : ''}`
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

                <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
                    {/* Plan Type Selector */}
                    <div>
                        <label className="block text-xs font-extrabold text-muted-foreground uppercase mb-2">Reja Turi (Plan Track):</label>
                        <div className="grid grid-cols-2 gap-2 p-1 bg-muted rounded-2xl">
                            <button
                                onClick={() => setPlanType('special')}
                                className={`py-2.5 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-1.5 ${
                                    planType === 'special'
                                        ? 'bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-md'
                                        : 'text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                <Target size={14} /> Maxsus Maqsad (Kaiwa/Mensetsu)
                            </button>
                            <button
                                onClick={() => setPlanType('jlpt')}
                                className={`py-2.5 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-1.5 ${
                                    planType === 'jlpt'
                                        ? 'bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-md'
                                        : 'text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                <Award size={14} /> JLPT Imtihon (N5 ➔ N1)
                            </button>
                        </div>
                    </div>

                    {planType === 'special' ? (
                        <div className="space-y-4 animate-in fade-in">
                            <label className="block text-sm font-bold text-foreground mb-1">
                                Yapon Tilini O'rganishdan Asosiy Maqsadingiz Nima?
                            </label>
                            <div className="grid grid-cols-1 gap-2.5">
                                {[
                                    { id: 'kaiwa', icon: '🗣️', title: "Kaiwa (会話)", desc: "Erkin yaponcha muloqot va kundalik so'zlashuv" },
                                    { id: 'mensetsu', icon: '💼', title: "Mensetsu (面接)", desc: "Yaponiyadagi ish/universitet suhbatiga tayyorgarlik" },
                                    { id: 'dokkai', icon: '📖', title: "Dokkai (読解)", desc: "Manga, kitob va texnik hujjatlarni o'qib tushunish" },
                                    { id: 'kanji', icon: '⛩️', title: "Kanji & Lug'at (漢字)", desc: "Iyerogliflar va so'z boyligini kengaytirish" },
                                    { id: 'custom', icon: '✏️', title: "Shaxsiy Maqsad", desc: "O'zingizning maxsus maqsadingizni yozasiz" }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setSpecialGoal(item.id as any)}
                                        className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                                            specialGoal === item.id
                                                ? 'bg-rose-500/10 border-rose-500 text-rose-600 dark:text-rose-400 font-extrabold shadow-sm'
                                                : 'bg-muted/30 border-border text-foreground hover:border-rose-300'
                                        }`}
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                        <div>
                                            <div className="font-extrabold text-sm">{item.title}</div>
                                            <div className="text-xs text-muted-foreground">{item.desc}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {specialGoal === 'custom' && (
                                <div>
                                    <label className="block text-xs font-bold text-muted-foreground mb-1">Shaxsiy maqsadingizni yozing:</label>
                                    <input
                                        type="text"
                                        value={customGoalText}
                                        onChange={(e) => setCustomGoalText(e.target.value)}
                                        placeholder="Masalan: Yaponiyada mehmonxona sohasida ishlash uchun..."
                                        className="w-full p-3.5 rounded-2xl border border-input bg-background text-sm text-foreground focus:ring-2 focus:ring-rose-500 outline-none"
                                    />
                                </div>
                            )}

                            {/* Month Slider & Presets */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <label className="block text-xs font-bold text-muted-foreground">Reja Muddati (Kun / Oy):</label>
                                    <span className="px-2.5 py-0.5 bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold text-xs rounded-full border border-rose-500/20">
                                        📅 {Math.round(durationDays / 30) > 0 ? `${Math.round(durationDays / 30)} Oy` : `${durationDays} Kun`} ({durationDays} Kun)
                                    </span>
                                </div>

                                <div className="p-3 bg-muted/40 border border-border rounded-xl space-y-2">
                                    <input
                                        type="range"
                                        min={1}
                                        max={12}
                                        step={1}
                                        value={Math.min(12, Math.max(1, Math.round(durationDays / 30)))}
                                        onChange={(e) => setDurationDays(parseInt(e.target.value) * 30)}
                                        className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-rose-600"
                                    />
                                    <div className="flex justify-between text-[10px] text-muted-foreground font-bold px-1">
                                        <span>1Oy</span>
                                        <span>2Oy</span>
                                        <span>3Oy</span>
                                        <span className="text-rose-500 font-black">4Oy ⭐</span>
                                        <span>6Oy</span>
                                        <span>9Oy</span>
                                        <span>12Oy</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-4 gap-2">
                                    {[
                                        { title: '1 Oy', days: 30 },
                                        { title: '2 Oy', days: 60 },
                                        { title: '3 Oy', days: 90 },
                                        { title: '4 Oy ⭐', days: 120 },
                                        { title: '6 Oy', days: 180 },
                                        { title: '12 Oy', days: 365 }
                                    ].map((item) => (
                                        <button
                                            key={item.days}
                                            onClick={() => setDurationDays(item.days)}
                                            className={`py-2 rounded-xl font-bold text-xs border ${
                                                durationDays === item.days ? 'bg-rose-600 text-white border-rose-600' : 'bg-muted/40 text-foreground border-border'
                                            }`}
                                        >
                                            {item.title}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => setShowConfirmStep(true)}
                                disabled={isGenerating}
                                className="w-full py-4 bg-rose-600 hover:bg-rose-700 text-white font-extrabold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                                <span>Maxsus Rejani Ko'rib Chiqish 🎯</span>
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-5 animate-in fade-in">
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <label className="text-sm font-bold text-foreground flex items-center gap-2">
                                        <Target size={18} className="text-rose-500" /> Joriy JLPT Darajangiz:
                                    </label>
                                    <button 
                                        onClick={() => setShowPlacementTest(true)}
                                        className="text-xs font-bold text-indigo-600 bg-indigo-500/10 px-3 py-1 rounded-full hover:bg-indigo-500/20 transition-colors flex items-center gap-1"
                                    >
                                        <Sparkles size={12} /> Darajani aniqlash (AI Test)
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                                    {['0', 'N5', 'N4', 'N3', 'N2', 'N1'].map((lvl) => (
                                        <button
                                            key={lvl}
                                            onClick={() => setCurrentLevel(lvl)}
                                            className={`py-3 px-1 rounded-2xl font-extrabold text-xs border transition-all ${
                                                currentLevel === lvl
                                                    ? 'bg-rose-600 text-white border-rose-600 shadow-md scale-[1.02]'
                                                    : 'bg-muted/40 text-foreground border-border hover:border-rose-300'
                                            }`}
                                        >
                                            {lvl === '0' ? "🌱 0 Level (Noldan)" : lvl}
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

                            <button
                                onClick={() => setShowConfirmStep(true)}
                                disabled={isGenerating}
                                className="w-full py-4 bg-rose-600 hover:bg-rose-700 text-white font-extrabold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                                <span>JLPT Sertifikat Rejasini Ko'rib Chiqish 🎌</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* Confirmation Review Modal Step */}
                {showConfirmStep && (
                    <div className="absolute inset-0 z-50 bg-background/95 backdrop-blur-md p-6 flex flex-col justify-between animate-in fade-in zoom-in-95">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between border-b border-border pb-3">
                                <h3 className="text-lg font-black text-foreground flex items-center gap-2">
                                    <CheckCircle2 className="text-rose-500" size={20} />
                                    <span>Rejani Tasdiqlash va Yaratish</span>
                                </h3>
                                <button
                                    onClick={() => setShowConfirmStep(false)}
                                    className="p-1 text-muted-foreground hover:text-foreground rounded-lg"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="p-4 bg-muted/40 rounded-2xl border border-border space-y-3">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-muted-foreground font-bold">Reja Turi:</span>
                                    <span className="font-extrabold text-rose-500 uppercase">
                                        {planType === 'special' ? `Maxsus Maqsad (${specialGoal})` : 'JLPT Imtihon Rejasi'}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-muted-foreground font-bold">Boshlang'ich ➔ Maqsad:</span>
                                    <span className="font-extrabold text-amber-500">
                                        {currentLevel === '0' ? '0 Level (Noldan)' : currentLevel} ➔ {targetLevel}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-muted-foreground font-bold">Davomiyligi:</span>
                                    <span className="font-extrabold text-foreground">{durationDays} Kun</span>
                                </div>
                            </div>

                            <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-start gap-3 text-xs text-amber-700 dark:text-amber-300">
                                <AlertTriangle size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold mb-0.5">⚠️ Diqqat!</p>
                                    <p className="leading-relaxed">
                                        Ushbu tugmani bossangiz, joriy o'quv maqsadingiz yangi tanlangan ushbu reja bilan almashtiriladi hamda mos dars jadvali shakllantiriladi.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pt-4 border-t border-border">
                            <button
                                onClick={() => setShowConfirmStep(false)}
                                disabled={isGenerating}
                                className="w-1/3 py-3.5 bg-muted hover:bg-muted/80 text-muted-foreground font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5"
                            >
                                <ArrowLeft size={14} />
                                <span>Orqaga</span>
                            </button>
                            <button
                                onClick={handleCreatePlan}
                                disabled={isGenerating}
                                className="w-2/3 py-3.5 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                                <span>{isGenerating ? "Reja Yaratilmoqda..." : "Ha, Rejani Yarataman 🚀"}</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <PlacementTestModal 
                isOpen={showPlacementTest}
                onClose={() => setShowPlacementTest(false)}
                testType="jlpt"
                onComplete={(lvl) => {
                    setCurrentLevel(lvl);
                }}
            />
        </div>
    );
};
