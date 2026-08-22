import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Target, FileText, Mic, BookOpen, Sparkles, ArrowRight, Flame, Volume2, Award, Languages, Compass, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { generateAlgorithmicJlptPlan } from '../utils/curriculum/jlptAlgorithmicPlanner';
import { useStudyData } from '../context/StudyPlannerContext';
import { toast } from '../hooks/use-toast';
import { supabase } from '../lib/supabase';
import { toDeterministicUUID } from '../utils/uuid';
import { useSEO } from '../hooks/useSEO';

const JlptOnboardingModal = lazy(() => import('../components/jlpt/JlptOnboardingModal').then(m => ({ default: m.JlptOnboardingModal })));
const JlptGrammarKanjiMaster = lazy(() => import('../components/jlpt/JlptGrammarKanjiMaster'));
const KanjiCanvasPractice = lazy(() => import('../components/jlpt/KanjiCanvasPractice'));


export const JlptHubPage: React.FC = () => {
    useSEO({
        title: "JLPT N5-N1 Tayyorgarlik Markazi (Kanji, Grammatika, Mocks)",
        description: "Yapon tili JLPT N5 dan N1 gacha bo'lgan to'liq o'quv dasturi. 1000+ Kanji mashqi, grammatika viktorinalari va rasmiy formatdagi mock imtihonlar.",
        canonical: "/jlpt",
        keywords: "JLPT N5 N4 N3 N2 N1, yapon tili o'rganish O'zbekiston, Kanji mashq, JLPT mock exam"
    });

    const navigate = useNavigate();
    const [isQuizOpen, setIsQuizOpen] = useState(false);
    const { flashcards, settings, updateSettings } = useStudyData();

    const [userPlanData, setUserPlanData] = useState<{
        finalGoalTitle?: string;
        currentLevel?: string;
        targetLevel?: string;
        durationDays?: number;
        dailyMinutes?: number;
        generatedPlan?: {
            headline: string;
            summary: string;
            dailyPlan?: any[];
        };
    } | null>(null);

    const handleCancelPlan = async () => {
        if (window.confirm("Haqiqatan ham joriy o'quv rejangiz va maqsadingizni bekor qilmoqchimisiz?")) {
            localStorage.removeItem('study_planner_jlpt_user_target');
            setUserPlanData(null);
            try {
                const { data: { user } } = await supabase.auth.getUser();
                if (user?.id) {
                    const uuid = toDeterministicUUID(`target_${user.id}_jlpt`);
                    await supabase.from('user_targets').delete().eq('id', uuid);
                }
                await supabase.auth.updateUser({ data: { jlpt_user_target: null } });
            } catch (e) {}
            toast({
                title: '🗑️ Reja bekor qilindi',
                description: 'Joriy rejangiz o\'chirildi. Yangi reja tuzishingiz mumkin.'
            });
        }
    };

    useEffect(() => {
        const loadPlan = async () => {
            let parsed = null;
            const saved = localStorage.getItem('study_planner_jlpt_user_target');
            if (saved) {
                try { parsed = JSON.parse(saved); } catch (e) {}
            }

            // Load from user_targets DB table + user_metadata fallback
            if (!parsed) {
                try {
                    const { data: { user } } = await supabase.auth.getUser();
                    if (user?.id) {
                        const { data: dbTarget, error: dbErr } = await supabase
                            .from('user_targets')
                            .select('*')
                            .eq('user_id', user.id)
                            .eq('target_type', 'jlpt')
                            .maybeSingle();

                        if (!dbErr && dbTarget?.details) {
                            parsed = dbTarget.details;
                            localStorage.setItem('study_planner_jlpt_user_target', JSON.stringify(parsed));
                        } else if (user.user_metadata?.jlpt_user_target) {
                            parsed = user.user_metadata.jlpt_user_target;
                            localStorage.setItem('study_planner_jlpt_user_target', JSON.stringify(parsed));
                        }
                    }
                } catch (e) {}
            }

            if (parsed) {
                if (parsed.generatedPlan && (!parsed.generatedPlan.dailyPlan || parsed.generatedPlan.dailyPlan.length === 0)) {
                    parsed.generatedPlan.dailyPlan = generateAlgorithmicJlptPlan(
                        parsed.currentLevel || 'N5',
                        parsed.targetLevel || 'N3',
                        parsed.durationDays || 30
                    );
                    localStorage.setItem('study_planner_jlpt_user_target', JSON.stringify(parsed));
                }
                setUserPlanData(parsed);
            }
        };
        loadPlan();
    }, []);

    const jlptCards = flashcards.filter(f => f.front.includes('[N') || f.front.includes('漢字') || f.front.includes('語彙'));

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 pb-16">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-rose-950/80 via-purple-950/60 to-slate-900 border border-rose-500/20 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="space-y-2 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/15 text-rose-400 font-extrabold text-xs rounded-full border border-rose-500/30">
                            <Sparkles size={14} className="animate-pulse" />
                            <span>JLPT & KAIWA JAPANESE MASTER</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                            Yapon Tili Master Hub
                        </h1>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Kaiwa (会話) muloqot, Mensetsu suhbat, Sakubun insho hamda N5–N1 Kanji bilimlarini AI yordamida chuqurlashtiring.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                        {/* Furigana & Romaji Controls */}
                        <div className="flex items-center p-1 bg-black/30 border border-white/10 rounded-2xl backdrop-blur-md">
                            <button
                                onClick={() => updateSettings({ showFurigana: !settings.showFurigana })}
                                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                                    settings.showFurigana
                                        ? 'bg-rose-500 text-white shadow-md'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                <Languages size={13} />
                                <span>Furigana</span>
                                <span className="text-[10px] opacity-75">{settings.showFurigana ? 'ON' : 'OFF'}</span>
                            </button>
                            <button
                                onClick={() => updateSettings({ showRomaji: !settings.showRomaji })}
                                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                                    settings.showRomaji
                                        ? 'bg-amber-500 text-white shadow-md'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                <span>Romaji</span>
                                <span className="text-[10px] opacity-75 ml-1">{settings.showRomaji ? 'ON' : 'OFF'}</span>
                            </button>
                        </div>

                        {/* Primary Plan Creator CTA */}
                        <button
                            onClick={() => setIsQuizOpen(true)}
                            className="px-6 py-3 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-rose-500/25 transition-all flex items-center gap-2 active:scale-95"
                        >
                            <Target size={18} />
                            <span>{userPlanData ? "Maqsadni Yangilash" : "Shaxsiy Reja Tuzish"}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Target Roadmap Banner (Active User Plan) */}
            {userPlanData && (
                <div className="bg-gradient-to-r from-slate-900 via-rose-950/40 to-slate-900 border border-rose-500/30 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                        <Award size={180} />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        <div className="lg:col-span-8 space-y-3">
                            <div className="flex flex-wrap items-center gap-2">
                                <div className="inline-flex items-center gap-2 bg-rose-500/20 text-rose-300 text-xs font-bold px-3 py-1 rounded-full border border-rose-500/30">
                                    <Flame size={14} />
                                    <span>{userPlanData.durationDays || 90}-Kunlik Yapon Tili Challenge</span>
                                </div>
                                <button
                                    onClick={handleCancelPlan}
                                    className="inline-flex items-center gap-1.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 text-xs font-bold px-3 py-1 rounded-full border border-rose-500/30 transition-colors"
                                    title="Maqsadni bekor qilish va o'chirish"
                                >
                                    <Trash2 size={13} />
                                    <span>Rejani Bekor Qilish</span>
                                </button>
                            </div>
                            <h2 className="text-2xl font-black">
                                {userPlanData.generatedPlan?.headline || userPlanData.finalGoalTitle || `${userPlanData.currentLevel} ➔ ${userPlanData.targetLevel}`}
                            </h2>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                {userPlanData.generatedPlan?.summary || "Yapon tilini samarali o'zlashtirish va imtihonlarni topshirish uchun sun'iy intellekt tomonidan shakllantirilgan dars jadvali."}
                            </p>
                        </div>

                        <div className="lg:col-span-4 flex items-center justify-around lg:justify-end gap-6 border-t lg:border-t-0 lg:border-l border-slate-800 pt-4 lg:pt-0 lg:pl-6">
                            <div className="text-center">
                                <span className="text-xs text-slate-400 font-medium uppercase block">Boshlang'ich</span>
                                <span className="text-xl font-extrabold text-slate-300">
                                    {userPlanData.currentLevel === '0' ? "🌱 0 Level" : userPlanData.currentLevel}
                                </span>
                            </div>
                            <ArrowRight size={20} className="text-rose-400" />
                            <div className="text-center">
                                <span className="text-xs text-amber-400 font-bold uppercase block">Maqsad</span>
                                <span className="text-3xl font-black text-amber-400">{userPlanData.targetLevel}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* AI Generated Study Plan (Roadmap) */}
            {userPlanData && (userPlanData as any).generatedPlan?.dailyPlan && (userPlanData as any).generatedPlan.dailyPlan.length > 0 && (
                <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm">
                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <FileText className="text-rose-500" /> AI Kunlik Dars Rejasi (Yo'l Xaritasi)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {(userPlanData as any).generatedPlan.dailyPlan.map((dayPlan: any, idx: number) => (
                            <div key={idx} className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/20">
                                <div className="flex items-start justify-between mb-3">
                                    <h4 className="font-bold text-foreground">
                                        <span className="text-rose-500 mr-1">Kun {dayPlan.day}:</span> {dayPlan.title}
                                    </h4>
                                    <span className="text-[10px] font-bold px-2 py-1 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-lg whitespace-nowrap ml-2">
                                        {dayPlan.focusArea || dayPlan.focusSkill}
                                    </span>
                                </div>
                                <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-muted-foreground">
                                    {dayPlan.tasks.map((t: string, i: number) => <li key={i}>{t}</li>)}
                                </ul>

                                {/* Daily Kanji List */}
                                {dayPlan.kanjiList && dayPlan.kanjiList.length > 0 && (
                                    <div className="mt-3 pt-3 border-t border-rose-500/20">
                                        <span className="text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1 mb-2">
                                            ⛩️ Bugungi Kanji ({dayPlan.kanjiList.length} ta):
                                        </span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {dayPlan.kanjiList.map((k: any, kIdx: number) => (
                                                <span 
                                                    key={kIdx} 
                                                    title={`On: ${k.onyomi || '-'} | Kun: ${k.kunyomi || '-'}`}
                                                    className="px-2 py-1 bg-rose-500/10 text-rose-700 dark:text-rose-300 text-xs font-bold rounded-lg border border-rose-500/20"
                                                >
                                                    <strong className="text-sm font-black mr-1">{k.kanji}</strong> ({k.meaning})
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Daily Vocabulary List */}
                                {dayPlan.vocabularyList && dayPlan.vocabularyList.length > 0 && (
                                    <div className="mt-3 pt-2 border-t border-rose-500/10">
                                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 mb-2">
                                            📖 Bugungi Lug'at ({dayPlan.vocabularyList.length} ta):
                                        </span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {dayPlan.vocabularyList.map((v: any, vIdx: number) => (
                                                <span 
                                                    key={vIdx} 
                                                    className="px-2 py-1 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs font-bold rounded-lg border border-indigo-500/20"
                                                >
                                                    {v.word} {v.reading ? `<${v.reading}>` : ''} <span className="font-normal opacity-80">({v.meaning})</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Daily Grammar Notes */}
                                {dayPlan.grammarNotes && dayPlan.grammarNotes.length > 0 && (
                                    <div className="mt-3 pt-2 border-t border-rose-500/10">
                                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mb-1.5">
                                            📝 Grammatika Qoidasi:
                                        </span>
                                        <div className="space-y-1">
                                            {dayPlan.grammarNotes.map((g: any, gIdx: number) => (
                                                <div key={gIdx} className="text-xs text-muted-foreground bg-emerald-500/5 p-2 rounded-lg border border-emerald-500/10">
                                                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{g.rule}:</span> {g.explanation}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="mt-4 pt-3 border-t border-rose-500/20 flex items-center gap-1.5 text-xs text-rose-500 font-semibold">
                                    <Target size={14} /> Vaqt maqsadi: {dayPlan.pomodoroTargetMinutes} min
                                </div>
                            </div>
                        ))}
                    </div>
                    {(userPlanData as any).generatedPlan.recommendedTips && (userPlanData as any).generatedPlan.recommendedTips.length > 0 && (
                        <div className="mt-6 p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                            <h4 className="font-bold text-amber-600 dark:text-amber-500 mb-3 flex items-center gap-2">
                                <Award size={18} className="text-amber-500" /> AI Tavsiyalari
                            </h4>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-amber-700 dark:text-amber-400/90">
                                {(userPlanData as any).generatedPlan.recommendedTips.map((tip: string, i: number) => <li key={i}>{tip}</li>)}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            {/* Core Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Conversation Scenarios Card */}
                <div
                    onClick={() => navigate('/scenarios')}
                    className="group bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-transparent hover:bg-indigo-500/[0.04] p-6 rounded-3xl border border-indigo-500/30 hover:border-indigo-500/60 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Compass size={24} />
                        </div>
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-indigo-500/10 text-indigo-500 text-[10px] font-extrabold rounded-full border border-indigo-500/20 mb-2">
                            ✨ YANGI MANZIL
                        </div>
                        <h3 className="text-lg font-extrabold text-foreground mb-1 group-hover:text-indigo-500 transition-colors">
                            Yaponcha Dialog va Scenarios
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Restoran, shopping, o'zini tanishtirish va boshqa rolli muloqot mashqlari + ovozni yozib talaffuzni baholash.
                        </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-bold text-indigo-500">
                        <span>Ssenariylarni Tanlash</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                {/* Kaiwa AI Speaking Coach */}
                <div
                    onClick={() => navigate('/jlpt-speaking')}
                    className="group bg-card hover:bg-rose-500/[0.02] p-6 rounded-3xl border border-border hover:border-rose-500/40 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Mic size={24} />
                        </div>
                        <h3 className="text-lg font-extrabold text-foreground mb-1 group-hover:text-rose-500 transition-colors">
                            Kaiwa AI Speaking Coach
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Yaponiyalik AI O'qituvchi bilan jonli audiomuloqot (Romaji va Furigana qo'llab-quvvatlanadi).
                        </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-bold text-rose-500">
                        <span>Boshlash</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                {/* Sakubun Writing Evaluator */}
                <div
                    onClick={() => navigate('/jlpt-writing')}
                    className="group bg-card hover:bg-amber-500/[0.02] p-6 rounded-3xl border border-border hover:border-amber-500/40 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <FileText size={24} />
                        </div>
                        <h3 className="text-lg font-extrabold text-foreground mb-1 group-hover:text-amber-500 transition-colors">
                            Sakubun (作文) Insho Tekshiruvi
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Yaponcha insho va matnlaringizni Desu/Masu va Kanji qoidalariga ko'ra tekshirish.
                        </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-bold text-amber-500">
                        <span>Boshlash</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                {/* JLPT Grammar Quiz */}
                <div
                    onClick={() => navigate('/jlpt/grammar')}
                    className="group bg-card hover:bg-indigo-500/[0.02] p-6 rounded-3xl border border-border hover:border-indigo-500/40 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Compass size={24} />
                        </div>
                        <h3 className="text-lg font-extrabold text-foreground mb-1 group-hover:text-indigo-500 transition-colors">
                            Bunpou (文法) Grammar Quiz
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            N5–N1 darajalari bo'yicha grammatika qoliplari va predloglarni interaktiv testlar yordamida tekshirish.
                        </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-bold text-indigo-500">
                        <span>Testni Boshlash</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                {/* JLPT Reading (Dokkai) */}
                <div
                    onClick={() => navigate('/jlpt/reading')}
                    className="group bg-card hover:bg-emerald-500/[0.02] p-6 rounded-3xl border border-border hover:border-emerald-500/40 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <BookOpen size={24} />
                        </div>
                        <h3 className="text-lg font-extrabold text-foreground mb-1 group-hover:text-emerald-500 transition-colors">
                            Dokkai (読解) Reading Master
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            N5–N1 darajasidagi taymerli yaponcha o'qish matnlari va savollarga javob berish mashqi.
                        </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-bold text-emerald-500">
                        <span>O'qishni Boshlash</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                {/* JLPT Listening Mock */}
                <div
                    onClick={() => navigate('/jlpt/listening')}
                    className="group bg-card hover:bg-purple-500/[0.02] p-6 rounded-3xl border border-border hover:border-purple-500/40 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Volume2 size={24} />
                        </div>
                        <h3 className="text-lg font-extrabold text-foreground mb-1 group-hover:text-purple-500 transition-colors">
                            Choukai (聴解) Listening Mock
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            N5–N1 Yapon tili tinglab tushunish mock imtihonlari va skript tahlili.
                        </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-bold text-purple-500">
                        <span>Mashq qilish</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                {/* Kanji Flashcards */}
                <div
                    onClick={() => navigate('/flashcards')}
                    className="group bg-card hover:bg-rose-500/[0.02] p-6 rounded-3xl border border-border hover:border-rose-500/40 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <BookOpen size={24} />
                        </div>
                        <h3 className="text-lg font-extrabold text-foreground mb-1 group-hover:text-rose-500 transition-colors">
                            Kanji (漢字) & Vocab Decks
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            N5–N1 Kanji va so'zlarni SM-2 takrorlash algoritmi orqali yodlash ({jlptCards.length} ta kartochka).
                        </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-bold text-rose-500">
                        <span>Kartochkalarni ko'rish</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                {/* JLPT Mock Exam */}
                <div
                    onClick={() => navigate('/jlpt/mock-exam')}
                    className="group bg-gradient-to-br from-rose-500/10 via-amber-500/5 to-purple-500/10 p-6 rounded-3xl border border-rose-500/30 shadow-md hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Award size={24} />
                        </div>
                        <h3 className="text-lg font-extrabold text-foreground mb-1 group-hover:text-rose-500 transition-colors">
                            JLPT Full Mock Exam
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Barcha bo'limlardan iborat to'liq 180 ballik rasmiy JLPT darajasidagi mock imtihoni.
                        </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-bold text-rose-500">
                        <span>Imtihonni Boshlash</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>

            {/* Kanji Canvas Practice Section & Library */}
            <Suspense fallback={<div className="p-8 flex justify-center"><div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>}>
                <div>
                    <KanjiCanvasPractice />
                </div>

                <div>
                    <JlptGrammarKanjiMaster />
                </div>

                {isQuizOpen && (
                    <JlptOnboardingModal
                        isOpen={isQuizOpen}
                        onClose={() => setIsQuizOpen(false)}
                        onPlanCreated={() => {
                            const saved = localStorage.getItem('study_planner_jlpt_user_target');
                            if (saved) setUserPlanData(JSON.parse(saved));
                        }}
                    />
                )}
            </Suspense>
        </div>
    );
};

export default JlptHubPage;
