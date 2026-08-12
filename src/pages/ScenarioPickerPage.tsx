import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConversationScenario, ScenarioSessionResult } from '../components/speaking/scenarioTypes';
import { ScenarioService } from '../services/ScenarioService';
import { Sparkles, Play, Award, History, ArrowLeft, Plus } from 'lucide-react';
import { isAdminEmail } from '../utils/admin';
import { useStudyData } from '../context/StudyPlannerContext';

export const ScenarioPickerPage: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useStudyData();
    const isAdmin = isAdminEmail(user?.email);

    const [scenarios, setScenarios] = useState<ConversationScenario[]>([]);
    const [history, setHistory] = useState<ScenarioSessionResult[]>([]);
    const [selectedLevel, setSelectedLevel] = useState<'all' | 'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('all');
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

    const filteredScenarios = selectedLevel === 'all'
        ? scenarios
        : scenarios.filter(s => s.difficulty === selectedLevel);

    const handleSelectScenario = (scenario: ConversationScenario) => {
        navigate(`/speaking-coach?lang=ja&scenario=${scenario.id}`);
    };

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-8 animate-in fade-in">
            {/* Header Banner */}
            <div className="relative rounded-3xl p-6 md:p-8 overflow-hidden bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 border border-indigo-500/20 text-white shadow-xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => navigate('/jlpt')}
                                className="p-2 bg-white/10 hover:bg-white/20 rounded-xl text-white backdrop-blur-md transition-all"
                            >
                                <ArrowLeft size={16} />
                            </button>
                            <span className="text-xs font-bold px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
                                🎌 Japanese Conversation Scenarios
                            </span>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-black tracking-tight">
                            Yaponcha Dialog va Rolli Muloqot Hubi
                        </h1>
                        <p className="text-xs md:text-sm text-gray-300 max-w-xl leading-relaxed">
                            Restoran, xarid qilish, o'zini tanishtirish kabi real yapon hayoti ssenariylarini tanlang.
                            AI Coach bilan gaplashib, talaffuzingiz va grammatikangizni baholang!
                        </p>
                    </div>

                    {isAdmin && (
                        <button
                            onClick={() => navigate('/admin')}
                            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl text-xs font-bold flex items-center gap-2 shadow-lg transition-all self-start md:self-auto"
                        >
                            <Plus size={16} />
                            <span>Scenario Qo'shish (Admin)</span>
                        </button>
                    )}
                </div>
            </div>

            {/* Level Filter Tabs */}
            <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2 border-b border-border">
                <div className="flex items-center gap-2">
                    {(['all', 'N5', 'N4', 'N3', 'N2', 'N1'] as const).map(lvl => (
                        <button
                            key={lvl}
                            onClick={() => setSelectedLevel(lvl)}
                            className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all border ${
                                selectedLevel === lvl
                                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                                    : 'bg-card text-muted-foreground border-border hover:bg-muted'
                            }`}
                        >
                            {lvl === 'all' ? 'Barchasi' : `JLPT ${lvl}`}
                        </button>
                    ))}
                </div>

                <div className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                    <Sparkles size={14} className="text-amber-500" />
                    <span>{filteredScenarios.length} ta ssenariy mavjud</span>
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
                                            scenario.difficulty === 'N5' || scenario.difficulty === 'N4'
                                                ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                                                : 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20'
                                        }`}>
                                            JLPT {scenario.difficulty}
                                        </span>
                                    </div>

                                    <h3 className="text-base font-black text-foreground group-hover:text-indigo-500 transition-colors">
                                        {scenario.title_ja}
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

                                <div className="mt-5 pt-3 border-t border-border/40 flex items-center justify-between">
                                    {lastSession ? (
                                        <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-bold">
                                            <Award size={14} />
                                            <span>O'rtacha: {lastSession.overall_score}/100</span>
                                        </div>
                                    ) : (
                                        <span className="text-[11px] text-muted-foreground">Boshlanmagan</span>
                                    )}

                                    <button
                                        onClick={() => handleSelectScenario(scenario)}
                                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-indigo-500/20 group-hover:px-5 transition-all"
                                    >
                                        <Play size={13} fill="currentColor" />
                                        <span>Boshlash</span>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* History Section */}
            {history.length > 0 && (
                <div className="bg-card border border-border/80 rounded-3xl p-6 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 border-b border-border pb-3">
                        <History size={18} className="text-indigo-500" />
                        <h3 className="text-sm font-extrabold text-foreground">Scenario O'rganish Tarixi</h3>
                    </div>

                    <div className="divide-y divide-border/40">
                        {history.slice(0, 5).map(item => (
                            <div key={item.id} className="py-3 flex items-center justify-between text-xs">
                                <div>
                                    <h4 className="font-extrabold text-foreground">{item.scenario_title}</h4>
                                    <span className="text-[10px] text-muted-foreground">
                                        {new Date(item.created_at).toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <span className="font-mono text-indigo-500 font-bold">{item.overall_score}/100</span>
                                        <p className="text-[10px] text-muted-foreground">Pronunciation: {item.pronunciation_score}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
