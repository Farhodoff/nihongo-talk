import React, { Suspense, lazy } from 'react';
import { Target, FileText, Mic, BookOpen, Sparkles, ArrowRight, Languages, Compass, Volume2, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useStudyData } from '../context/StudyPlannerContext';
import { useSEO } from '../hooks/useSEO';

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
    const { flashcards, settings, updateSettings } = useStudyData();

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
                            onClick={() => navigate('/personal-plan')}
                            className="px-5 py-2.5 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-extrabold text-xs rounded-2xl shadow-lg shadow-rose-500/25 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
                        >
                            <Target size={16} />
                            <span>Shaxsiy Rejam</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Direct Link to Central Personal Learning Plan */}
            <div className="bg-gradient-to-r from-rose-950/80 via-slate-900 to-purple-950/80 p-5 md:p-6 rounded-3xl border border-rose-500/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 text-white">
                <div className="flex items-center gap-3.5">
                    <div className="p-3 bg-rose-500/20 rounded-2xl text-rose-300 border border-rose-500/30 shrink-0">
                        <Target size={24} />
                    </div>
                    <div>
                        <h2 className="text-base md:text-lg font-black text-white flex items-center gap-2">
                            <span>JLPT Shaxsiy Rejangiz & Darslar</span>
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                AI Adaptive
                            </span>
                        </h2>
                        <p className="text-xs text-slate-300 mt-0.5">
                            Kunlik va haftalik vazifalar, Speaking, Kanji, Fleshkartalar va Mock imtihonlar taqsimoti
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => navigate('/personal-plan')}
                    className="w-full md:w-auto px-5 py-2.5 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer active:scale-95"
                >
                    <span>Shaxsiy Rejamga O'tish</span>
                    <ArrowRight size={14} />
                </button>
            </div>

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
            </Suspense>
        </div>
    );
};

export default JlptHubPage;
