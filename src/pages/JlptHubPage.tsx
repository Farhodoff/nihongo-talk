import React, { Suspense, lazy } from 'react';
import { Target, FileText, BookOpen, Sparkles, ArrowRight, Languages, Compass, Headphones, GraduationCap } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useStudyData } from '../context/StudyPlannerContext';
import { useLanguage } from '../context/LanguageContext';
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
    const { language } = useLanguage();

    const activeTab = searchParams.get('tab') || 'kanji';

    const handleTabChange = (tab: string) => {
        setSearchParams({ tab });
    };

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 pb-16">
            {/* Header Banner — Sumi-e & Hanko Aesthetic */}
            <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-xs relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="space-y-2 max-w-2xl">
                        <div className="badge-gold">
                            <Sparkles size={13} />
                            <span>JLPT & KAIWA JAPANESE MASTER</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-display font-black text-foreground tracking-tight">
                            {language === 'ja' ? '日本語マスターハブ' : 'Yapon Tili Master Hub'}
                        </h1>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {language === 'ja' 
                                ? '漢字・文法・読解・聴解・会話シチュエーション・JLPT模擬試験の総合学習センター。' 
                                : "Kanji, Grammatika, Dokkai, Choukai, Dialog senariylari va 180 ballik rasmiy JLPT mock imtihonlari bitta markazda."}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                        {/* Furigana & Romaji Controls */}
                        <div className="flex items-center p-1 bg-muted/50 border border-border rounded-xl">
                            <button
                                onClick={() => updateSettings({ showFurigana: !settings.showFurigana })}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                                    settings.showFurigana
                                        ? 'bg-primary text-primary-foreground shadow-xs'
                                        : 'text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                <Languages size={13} />
                                <span>Furigana</span>
                                <span className="text-[10px] opacity-75">{settings.showFurigana ? 'ON' : 'OFF'}</span>
                            </button>
                            <button
                                onClick={() => updateSettings({ showRomaji: !settings.showRomaji })}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                    settings.showRomaji
                                        ? 'bg-amber-500/15 text-[#C9A961] border border-[#C9A961]/30'
                                        : 'text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                <span>Romaji</span>
                                <span className="text-[10px] opacity-75 ml-1">{settings.showRomaji ? 'ON' : 'OFF'}</span>
                            </button>
                        </div>

                        {/* Primary Plan Creator CTA */}
                        <button
                            onClick={() => navigate('/personal-plan')}
                            className="px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
                        >
                            <Target size={15} />
                            <span>{language === 'ja' ? '学習プラン' : 'Shaxsiy Rejam'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Direct Link to Central Personal Learning Plan */}
            <div className="bg-card border border-border border-l-4 border-l-primary p-5 md:p-6 rounded-2xl shadow-xs flex flex-col md:flex-row items-center justify-between gap-4 text-foreground">
                <div className="flex items-center gap-3.5">
                    <div className="p-3 bg-muted/80 rounded-xl text-primary border border-border shrink-0">
                        <Target size={22} />
                    </div>
                    <div>
                        <h2 className="text-base md:text-lg font-display font-black text-foreground flex items-center gap-2">
                            <span>{language === 'ja' ? 'JLPT個別学習プラン・レッスン' : 'JLPT Shaxsiy Rejangiz & Darslar'}</span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                AI Adaptive
                            </span>
                        </h2>
                        <p className="text-xs text-muted-foreground mt-0.5">
                            {language === 'ja' 
                                ? '毎日のタスク、スピーキング、漢字、単語帳、模擬試験の自動スケジュール' 
                                : 'Kunlik va haftalik vazifalar, Speaking, Kanji, Fleshkartalar va Mock imtihonlar taqsimoti'}
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => navigate('/personal-plan')}
                    className="w-full md:w-auto px-4 py-2 bg-muted/80 hover:bg-muted text-foreground border border-border font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                >
                    <span>{language === 'ja' ? '学習プランを開く' : "Shaxsiy Rejamga O'tish"}</span>
                    <ArrowRight size={14} />
                </button>
            </div>

            {/* Unified JLPT Skill Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-card/90 backdrop-blur-md rounded-2xl border border-border sticky top-0 z-20 shadow-xs">
                <button
                    onClick={() => handleTabChange('kanji')}
                    className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                        activeTab === 'kanji'
                            ? 'bg-primary text-primary-foreground shadow-xs scale-[1.02]'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/70'
                    }`}
                >
                    <BookOpen size={15} /> {language === 'ja' ? '⛩️ 漢字・文法' : '⛩️ Kanji & Grammatika'}
                </button>

                <button
                    onClick={() => handleTabChange('scenarios')}
                    className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                        activeTab === 'scenarios'
                            ? 'bg-primary text-primary-foreground shadow-xs scale-[1.02]'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/70'
                    }`}
                >
                    <Compass size={15} /> {language === 'ja' ? '🎌 会話シチュエーション' : '🎌 Dialog Senariylar'}
                </button>

                <button
                    onClick={() => handleTabChange('reading')}
                    className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                        activeTab === 'reading'
                            ? 'bg-primary text-primary-foreground shadow-xs scale-[1.02]'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/70'
                    }`}
                >
                    <FileText size={15} /> {language === 'ja' ? '📖 読解トレーニング' : "📖 Dokkai (O'qish)"}
                </button>

                <button
                    onClick={() => handleTabChange('listening')}
                    className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                        activeTab === 'listening'
                            ? 'bg-primary text-primary-foreground shadow-xs scale-[1.02]'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/70'
                    }`}
                >
                    <Headphones size={15} /> {language === 'ja' ? '🎧 聴解トレーニング' : '🎧 Choukai (Tinglash)'}
                </button>

                <button
                    onClick={() => handleTabChange('mock')}
                    className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                        activeTab === 'mock'
                            ? 'bg-primary text-primary-foreground shadow-xs scale-[1.02]'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/70'
                    }`}
                >
                    <GraduationCap size={15} /> {language === 'ja' ? '🏆 JLPT模擬試験' : '🏆 JLPT Mock Exam'}
                </button>
            </div>

            {/* Tab Views */}
            <Suspense fallback={
                <div className="p-12 flex items-center justify-center">
                    <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
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
