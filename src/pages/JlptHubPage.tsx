import React, { Suspense, lazy } from 'react';
import { Target, FileText, BookOpen, Sparkles, ArrowRight, Languages, Compass, Headphones, GraduationCap } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useStudyData } from '../context/StudyPlannerContext';
import { useSEO } from '../hooks/useSEO';

const JlptGrammarKanjiMaster = lazy(() => import('../components/jlpt/JlptGrammarKanjiMaster'));
const KanjiCanvasPractice = lazy(() => import('../components/jlpt/KanjiCanvasPractice'));
const ScenarioPickerPage = lazy(() => import('./ScenarioPickerPage').then(m => ({ default: m.ScenarioPickerPage })));
const JlptReadingPage = lazy(() => import('./JlptReadingPage').then(m => ({ default: m.JlptReadingPage })));
const JlptListeningMockPage = lazy(() => import('./JlptListeningMockPage').then(m => ({ default: m.JlptListeningMockPage })));
const JlptMockExamPage = lazy(() => import('./JlptMockExamPage').then(m => ({ default: m.JlptMockExamPage })));

export const JlptHubPage: React.FC = () => {
    useSEO({
        title: "JLPT N5-N1 Tayyorgarlik Markazi (Kanji, Grammatika, Mocks)",
        description: "Yapon tili JLPT N5 dan N1 gacha bo'lgan to'liq o'quv dasturi. 1000+ Kanji mashqi, grammatika viktorinalari va rasmiy formatdagi mock imtihonlar.",
        canonical: "/jlpt",
        keywords: "JLPT N5 N4 N3 N2 N1, yapon tili o'rganish O'zbekiston, Kanji mashq, JLPT mock exam"
    });

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const { settings, updateSettings } = useStudyData();

    const activeTab = searchParams.get('tab') || 'kanji';

    const handleTabChange = (tab: string) => {
        setSearchParams({ tab });
    };

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
                            Kanji, Grammatika, Dokkai, Choukai, Dialog senariylari va 180 ballik rasmiy JLPT mock imtihonlari bitta markazda.
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

            {/* Unified JLPT Skill Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-muted/40 border border-border/80 rounded-2xl w-fit">
                <button
                    onClick={() => handleTabChange('kanji')}
                    className={`flex items-center gap-2 px-5 py-2.5 font-black text-xs rounded-xl transition-all ${
                        activeTab === 'kanji'
                            ? 'bg-rose-600 text-white shadow-md'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    <BookOpen size={16} /> ⛩️ Kanji & Grammatika
                </button>

                <button
                    onClick={() => handleTabChange('scenarios')}
                    className={`flex items-center gap-2 px-5 py-2.5 font-black text-xs rounded-xl transition-all ${
                        activeTab === 'scenarios'
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    <Compass size={16} /> 🎌 Dialog Senariylar
                </button>

                <button
                    onClick={() => handleTabChange('reading')}
                    className={`flex items-center gap-2 px-5 py-2.5 font-black text-xs rounded-xl transition-all ${
                        activeTab === 'reading'
                            ? 'bg-emerald-600 text-white shadow-md'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    <FileText size={16} /> 📖 Dokkai (O'qish)
                </button>

                <button
                    onClick={() => handleTabChange('listening')}
                    className={`flex items-center gap-2 px-5 py-2.5 font-black text-xs rounded-xl transition-all ${
                        activeTab === 'listening'
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    <Headphones size={16} /> 🎧 Choukai (Tinglash)
                </button>

                <button
                    onClick={() => handleTabChange('mock')}
                    className={`flex items-center gap-2 px-5 py-2.5 font-black text-xs rounded-xl transition-all ${
                        activeTab === 'mock'
                            ? 'bg-amber-600 text-white shadow-md'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    <GraduationCap size={16} /> 🏆 JLPT Mock Exam
                </button>
            </div>

            {/* Tab Views */}
            <Suspense fallback={
                <div className="p-12 flex items-center justify-center">
                    <div className="w-8 h-8 border-3 border-rose-500 border-t-transparent rounded-full animate-spin" />
                </div>
            }>
                {/* Tab 1: Kanji Canvas & Bunpou Grammar Master */}
                {activeTab === 'kanji' && (
                    <div className="space-y-8 animate-in fade-in">
                        <div>
                            <KanjiCanvasPractice />
                        </div>
                        <div>
                            <JlptGrammarKanjiMaster />
                        </div>
                    </div>
                )}

                {/* Tab 2: Conversation Scenarios & Kaiwa Dialogue */}
                {activeTab === 'scenarios' && (
                    <div className="animate-in fade-in">
                        <ScenarioPickerPage />
                    </div>
                )}

                {/* Tab 3: Dokkai (Reading) */}
                {activeTab === 'reading' && (
                    <div className="animate-in fade-in">
                        <JlptReadingPage />
                    </div>
                )}

                {/* Tab 4: Choukai (Listening) */}
                {activeTab === 'listening' && (
                    <div className="animate-in fade-in">
                        <JlptListeningMockPage />
                    </div>
                )}

                {/* Tab 5: Full Mock Exam */}
                {activeTab === 'mock' && (
                    <div className="animate-in fade-in">
                        <JlptMockExamPage />
                    </div>
                )}
            </Suspense>
        </div>
    );
};

export default JlptHubPage;
