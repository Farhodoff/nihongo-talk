import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ConversationScenario, ScenarioSessionResult } from '../components/speaking/scenarioTypes';
import { ScenarioService } from '../services/ScenarioService';
import { Sparkles, Play, Award, History, ArrowLeft, Plus, Globe } from 'lucide-react';
import { isAdminEmail } from '../utils/admin';
import { useStudyData } from '../context/StudyPlannerContext';

export const ScenarioPickerPage: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const { user } = useStudyData();
    const isAdmin = isAdminEmail(user?.email);

    const initialLang = (searchParams.get('lang') === 'en' ? 'en' : 'ja') as 'en' | 'ja';
    const [activeLang, setActiveLang] = useState<'en' | 'ja'>(initialLang);
    const [scenarios, setScenarios] = useState<ConversationScenario[]>([]);
    const [history, setHistory] = useState<ScenarioSessionResult[]>([]);
    const [selectedLevel, setSelectedLevel] = useState<string>('all');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const list = await ScenarioService.getScenarios();
                const hist = await ScenarioService.getScenarioHistory();
                setScenarios(list);
                setHistory(hist);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        loadData();
    }, []);

    const handleLangChange = (lang: 'en' | 'ja') => {
        setActiveLang(lang);
        setSelectedLevel('all');
        setSearchParams({ lang });
    };

    const langScenarios = scenarios.filter(s => {
        const sLang = s.language || (s.title_en ? 'en' : 'ja');
        return sLang === activeLang;
    });

    const filteredScenarios = selectedLevel === 'all'
        ? langScenarios
        : langScenarios.filter(s => s.difficulty === selectedLevel);

    const handleSelectScenario = (scenario: ConversationScenario) => {
        const lang = scenario.language || (scenario.title_en ? 'en' : 'ja');
        navigate(`/speaking-coach?lang=${lang}&scenario=${scenario.id}`);
    };

    const jaLevels = ['all', 'N5', 'N4', 'N3', 'N2', 'N1'] as const;
    const enLevels = ['all', 'A2', 'B1', 'B2', 'C1', 'IELTS'] as const;

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-8 animate-in fade-in">
            {/* Header Banner */}
            <div className="relative rounded-3xl p-6 md:p-8 overflow-hidden bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 border border-indigo-500/20 text-white shadow-xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => navigate(activeLang === 'ja' ? '/jlpt' : '/dashboard')}
                                className="p-2 bg-white/10 hover:bg-white/20 rounded-xl text-white backdrop-blur-md transition-all"
                            >
                                <ArrowLeft size={16} />
                            </button>
                            <span className="text-xs font-bold px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30 flex items-center gap-1.5">
                                <Globe size={12} />
                                {activeLang === 'ja' ? '🎌 Japanese Conversation Scenarios' : '🇬🇧 English Conversation Scenarios'}
                            </span>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-black tracking-tight">
                            {activeLang === 'ja' ? 'Yaponcha Dialog va Rolli Muloqot Hubi' : 'Inglizcha Real Hayotiy Rolli Muloqot Hubi'}
                        </h1>
                        <p className="text-xs md:text-sm text-gray-300 max-w-xl leading-relaxed">
                            {activeLang === 'ja'
                                ? "Restoran, xarid qilish, o'zini tanishtirish va biznes intervyu kabi real yapon hayoti ssenariylarini tanlang. AI Coach bilan gaplashib, talaffuz va grammatikani baholang!"
                                : "AQSH/Buyuk Britaniya vizasi, IT ish intervyusi, aeroport va IELTS Speaking kabi real hayotiy vaziyatlar. AI murabbiy bilan jonli muloqot qiling!"}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Language Selector in Header */}
                        <div className="flex bg-black/40 p-1 rounded-2xl border border-white/10 backdrop-blur-md">
                            <button
                                onClick={() => handleLangChange('en')}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                    activeLang === 'en'
                                        ? 'bg-indigo-600 text-white shadow'
                                        : 'text-gray-300 hover:text-white'
                                }`}
                            >
                                🇬🇧 English
                            </button>
                            <button
                                onClick={() => handleLangChange('ja')}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                    activeLang === 'ja'
                                        ? 'bg-indigo-600 text-white shadow'
                                        : 'text-gray-300 hover:text-white'
                                }`}
                            >
                                🎌 日本語
                            </button>
                        </div>

                        {isAdmin && (
                            <button
                                onClick={() => navigate('/admin')}
                                className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl text-xs font-bold flex items-center gap-2 shadow-lg transition-all self-start md:self-auto"
                            >
                                <Plus size={16} />
                                <span>Scenario Qo'shish</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Level Filter Tabs */}
            <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2 border-b border-border">
                <div className="flex items-center gap-2">
                    {(activeLang === 'ja' ? jaLevels : enLevels).map(lvl => (
                        <button
                            key={lvl}
                            onClick={() => setSelectedLevel(lvl)}
                            className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all border ${
                                selectedLevel === lvl
                                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                                    : 'bg-card text-muted-foreground border-border hover:bg-muted'
                            }`}
                        >
                            {lvl === 'all' ? 'Barchasi' : activeLang === 'ja' ? `JLPT ${lvl}` : `CEFR / ${lvl}`}
                        </button>
                    ))}
                </div>

                <div className="text-xs text-muted-foreground font-medium flex items-center gap-1 shrink-0">
                    <Sparkles size={14} className="text-amber-500" />
                    <span>{filteredScenarios.length} ta ssenariy</span>
                </div>
            </div>

            {/* Scenarios Grid */}
            {isLoading ? (
                <div className="py-12 text-center text-muted-foreground">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-indigo-600 border-t-transparent mb-2" />
                    <p className="text-xs">Ssenariylar yuklanmoqda...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredScenarios.map(scenario => {
                        const lastSession = history.find(h => h.scenario_id === scenario.id);
                        const title = activeLang === 'en'
                            ? (scenario.title_en || scenario.title_uz)
                            : (scenario.title_ja || scenario.title_uz);

                        return (
                            <div
                                key={scenario.id}
                                className="group relative bg-card border border-border/80 hover:border-indigo-500/50 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="text-3xl p-3 bg-muted/60 rounded-2xl group-hover:scale-110 transition-transform">
                                            {scenario.emoji}
                                        </div>
                                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold border ${
                                            scenario.difficulty === 'N5' || scenario.difficulty === 'N4' || scenario.difficulty === 'A1' || scenario.difficulty === 'A2'
                                                ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                                                : 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20'
                                        }`}>
                                            {activeLang === 'ja' ? 'JLPT ' : ''}{scenario.difficulty}
                                        </span>
                                    </div>

                                    <h3 className="text-base font-black text-foreground group-hover:text-indigo-500 transition-colors">
                                        {title}
                                    </h3>
                                    <p className="text-xs font-semibold text-muted-foreground mt-0.5">
                                        {scenario.title_uz}
                                    </p>
                                    <p className="text-xs text-muted-foreground/80 mt-2 line-clamp-2 leading-relaxed">
                                        {scenario.description_uz}
                                    </p>

                                    {/* Key Phrases */}
                                    <div className="mt-4 pt-3 border-t border-border/40 space-y-1.5">
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase">Kalit iboralar:</span>
                                        <div className="flex flex-wrap gap-1">
                                            {scenario.key_phrases.slice(0, 3).map((kp, idx) => (
                                                <span key={idx} className="px-2 py-0.5 bg-muted text-[10px] font-mono text-foreground rounded-md">
                                                    {kp}
                                                </span>
                                            ))}
                                            {scenario.key_phrases.length > 3 && (
                                                <span className="text-[10px] text-muted-foreground self-center">
                                                    +{scenario.key_phrases.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between gap-3">
                                    {lastSession ? (
                                        <div className="flex items-center gap-2 text-xs">
                                            <Award size={16} className="text-amber-500" />
                                            <div>
                                                <span className="font-bold text-foreground">{lastSession.overall_score}%</span>
                                                <span className="text-muted-foreground text-[10px] ml-1">oxirgi natija</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-[11px] text-muted-foreground flex items-center gap-1">
                                            <History size={12} />
                                            <span>Boshlanmagan</span>
                                        </div>
                                    )}

                                    <button
                                        onClick={() => handleSelectScenario(scenario)}
                                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs font-bold flex items-center gap-1.5 shadow-md hover:shadow-indigo-500/25 transition-all group-hover:scale-105"
                                    >
                                        <Play size={14} className="fill-white" />
                                        <span>Boshlash</span>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
