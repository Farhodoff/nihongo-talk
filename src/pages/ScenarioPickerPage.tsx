import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ConversationScenario, ScenarioSessionResult } from '../components/speaking/scenarioTypes';
import { ScenarioService } from '../services/ScenarioService';
import { Sparkles, Play, Award, History, ArrowLeft, Plus, Globe, Trash2, X, AlertTriangle } from 'lucide-react';
import { isSuperAdmin } from '../utils/admin';
import { useStudyData } from '../context/StudyPlannerContext';
import { useLanguage } from '../context/LanguageContext';
import { toast } from '../hooks/use-toast';

export const ScenarioPickerPage: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const { user } = useStudyData();
    const { language } = useLanguage();
    const isSuper = isSuperAdmin(user?.email);

    const initialLang = (isSuper && searchParams.get('lang') === 'en' ? 'en' : 'ja') as 'en' | 'ja';
    const [activeLang, setActiveLang] = useState<'en' | 'ja'>(initialLang);
    const [scenarios, setScenarios] = useState<ConversationScenario[]>(() => ScenarioService.getImmediateScenarios());
    const [history, setHistory] = useState<ScenarioSessionResult[]>(() => ScenarioService.getImmediateHistory());
    const [selectedLevel, setSelectedLevel] = useState<string>('all');

    // Create Modal State
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [deletingScenario, setDeletingScenario] = useState<ConversationScenario | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // New Scenario Form State
    const [formData, setFormData] = useState({
        language: 'ja' as 'ja' | 'en',
        emoji: '💼',
        difficulty: 'N2' as ConversationScenario['difficulty'],
        category: 'business' as 'business' | 'daily' | 'travel' | 'social' | 'academic',
        title_ja: '',
        title_en: '',
        title_uz: '',
        description_uz: '',
        opening_line_ja: '',
        opening_line_en: '',
        context_prompt: '',
        key_phrases_input: ''
    });

    const refreshData = async () => {
        try {
            const list = await ScenarioService.getScenarios();
            const hist = await ScenarioService.getScenarioHistory();
            setScenarios(list);
            setHistory(hist);
        } catch (err) {
            console.debug('Scenario reload error:', err);
        }
    };

    useEffect(() => {
        let isMounted = true;
        const loadData = async () => {
            try {
                const list = await ScenarioService.getScenarios();
                const hist = await ScenarioService.getScenarioHistory();
                if (isMounted) {
                    setScenarios(list);
                    setHistory(hist);
                }
            } catch (err) {
                console.debug('Scenario background revalidation note:', err);
            }
        };
        loadData();
        return () => {
            isMounted = false;
        };
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

    const handleOpenCreateModal = () => {
        setFormData({
            language: activeLang,
            emoji: activeLang === 'ja' ? '💼' : '🗣️',
            difficulty: activeLang === 'ja' ? 'N2' : 'B2',
            category: 'business',
            title_ja: '',
            title_en: '',
            title_uz: '',
            description_uz: '',
            opening_line_ja: '',
            opening_line_en: '',
            context_prompt: '',
            key_phrases_input: ''
        });
        setIsCreateModalOpen(true);
    };

    const handleSaveNewScenario = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const isJa = formData.language === 'ja';

            if (isJa && (!formData.title_ja.trim() || !formData.opening_line_ja.trim())) {
                toast({
                    variant: 'destructive',
                    title: '⚠️ Maydonlar to\'liq emas',
                    description: 'Yaponcha sarlavha va AI ochilish jumlasi kiritilishi shart.'
                });
                setIsSubmitting(false);
                return;
            }

            if (!isJa && (!formData.title_en.trim() || !formData.opening_line_en.trim())) {
                toast({
                    variant: 'destructive',
                    title: '⚠️ Maydonlar to\'liq emas',
                    description: 'Inglizcha sarlavha va AI ochilish jumlasi kiritilishi shart.'
                });
                setIsSubmitting(false);
                return;
            }

            if (!formData.title_uz.trim() || !formData.description_uz.trim()) {
                toast({
                    variant: 'destructive',
                    title: '⚠️ Maydonlar to\'liq emas',
                    description: 'O\'zbekcha sarlavha va tavsif kiritilishi shart.'
                });
                setIsSubmitting(false);
                return;
            }

            const keyPhrases = formData.key_phrases_input
                .split(',')
                .map(k => k.trim())
                .filter(k => k.length > 0);

            const newScenario: ConversationScenario = {
                id: `custom_${Date.now()}`,
                language: formData.language,
                emoji: formData.emoji.trim() || (formData.language === 'ja' ? '🎌' : '🇬🇧'),
                difficulty: formData.difficulty,
                category: formData.category,
                title_ja: isJa ? formData.title_ja.trim() : undefined,
                title_en: !isJa ? formData.title_en.trim() : undefined,
                title_uz: formData.title_uz.trim(),
                description_uz: formData.description_uz.trim(),
                opening_line_ja: isJa ? formData.opening_line_ja.trim() : undefined,
                opening_line_en: !isJa ? formData.opening_line_en.trim() : undefined,
                context_prompt: formData.context_prompt.trim() || (isJa
                    ? `あなたは親切な日本語のネイティブスピーカーです。${formData.difficulty}レベルの学習者と「${formData.title_ja}」についてロールプレイ会話を行ってください。`
                    : `You are a professional conversation coach. Roleplay the scenario "${formData.title_en}" with a ${formData.difficulty} student.`),
                key_phrases: keyPhrases.length > 0 ? keyPhrases : ['こんにちは', 'よろしくお願いします'],
                is_custom: true,
                created_at: new Date().toISOString()
            };

            await ScenarioService.saveScenario(newScenario);
            await refreshData();
            setIsCreateModalOpen(false);

            toast({
                title: '✅ Ssenariy Muvaffaqiyatli Qo\'shildi',
                description: `"${newScenario.title_uz}" ssenariysi ro'yxatga qo'shildi.`
            });
        } catch (error: any) {
            toast({
                variant: 'destructive',
                title: '❌ Xatolik yuz berdi',
                description: error?.message || 'Ssenariyni saqlashda xatolik.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDeleteScenario = async (scenario: ConversationScenario) => {
        try {
            await ScenarioService.deleteScenario(scenario.id);
            // Optimistic update
            setScenarios(prev => prev.filter(s => s.id !== scenario.id));
            setDeletingScenario(null);

            toast({
                title: '🗑️ Ssenariy O\'chirildi',
                description: `"${scenario.title_uz || scenario.title_ja || scenario.title_en}" muvaffaqiyatli o'chirildi.`
            });
        } catch (error: any) {
            toast({
                variant: 'destructive',
                title: '❌ Xatolik yuz berdi',
                description: 'Ssenariyni o\'chirishda xatolik yuz berdi.'
            });
        }
    };

    const jaLevels = ['all', 'N5', 'N4', 'N3', 'N2', 'N1'] as const;
    const enLevels = ['all', 'A2', 'B1', 'B2', 'C1', 'IELTS'] as const;

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-8 animate-in fade-in pb-16">
            {/* Header Banner */}
            <div className="relative rounded-3xl p-6 md:p-8 overflow-hidden bg-card border border-border text-foreground shadow-sm">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => navigate(activeLang === 'ja' ? '/jlpt' : '/ielts')}
                                className="p-2 bg-muted hover:bg-muted/80 border border-border rounded-xl text-foreground transition-all cursor-pointer"
                            >
                                <ArrowLeft size={16} />
                            </button>
                            <span className="text-xs font-bold px-3 py-1 bg-[#C9A961]/15 text-[#C9A961] rounded-full border border-[#C9A961]/30 flex items-center gap-1.5">
                                <Globe size={12} />
                                {activeLang === 'ja' 
                                    ? (language === 'ja' ? '🎌 日本語シチュエーション会話' : '🎌 Japanese Conversation Scenarios') 
                                    : '🇬🇧 English Conversation Scenarios'}
                            </span>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-display font-black tracking-tight text-foreground">
                            {activeLang === 'ja' 
                                ? (language === 'ja' ? 'シチュエーション会話練習' : 'Japanese Scenarios (Muloqot Ssenariylari)') 
                                : 'English Scenarios (Real-World Conversation)'}
                        </h1>
                        <p className="text-xs md:text-sm text-muted-foreground max-w-xl leading-relaxed">
                            {activeLang === 'ja'
                                ? (language === 'ja' 
                                    ? "ビジネス交渉、障害報告、面接、ショッピングなど、リアルな場面でAIと自由に会話練習をしましょう。" 
                                    : "Biznes muzokaralar, tizim nosozligi hisoboti, ish suhbati va real hayotiy ssenariylarda AI murabbiy bilan erkin muloqot qiling.")
                                : "IT ish intervyusi, aeroport va turli xil real vaziyatlarda jonli ovozli muloqot qiling."}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Language Selector in Header (Super Admin Only) */}
                        {isSuper && (
                            <div className="flex bg-muted/60 p-1 rounded-2xl border border-border">
                                <button
                                    onClick={() => handleLangChange('en')}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                        activeLang === 'en'
                                            ? 'bg-primary text-primary-foreground shadow-xs'
                                            : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                >
                                    🇬🇧 English
                                </button>
                                <button
                                    onClick={() => handleLangChange('ja')}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                        activeLang === 'ja'
                                            ? 'bg-primary text-primary-foreground shadow-xs'
                                            : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                >
                                    🎌 日本語
                                </button>
                            </div>
                        )}

                        {/* Direct Scenario Create Button */}
                        <button
                            onClick={handleOpenCreateModal}
                            className="px-4 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl text-xs font-bold flex items-center gap-2 shadow-md shadow-primary/20 transition-all self-start md:self-auto cursor-pointer active:scale-95"
                        >
                            <Plus size={16} />
                            <span>{language === 'ja' ? 'シナリオ作成' : "Ssenariy Qo'shish"}</span>
                        </button>
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
                            className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all border cursor-pointer ${
                                selectedLevel === lvl
                                    ? 'bg-primary text-primary-foreground border-primary shadow-xs'
                                    : 'bg-muted/60 text-muted-foreground border-border hover:text-foreground hover:bg-muted'
                            }`}
                        >
                            {lvl === 'all' 
                                ? (language === 'ja' ? 'すべて' : 'Barchasi') 
                                : activeLang === 'ja' ? `JLPT ${lvl}` : `CEFR / ${lvl}`}
                        </button>
                    ))}
                </div>

                <div className="text-xs text-muted-foreground font-medium flex items-center gap-1 shrink-0">
                    <Sparkles size={14} className="text-[#C9A961]" />
                    <span>{language === 'ja' ? `${filteredScenarios.length} 件のシナリオ` : `${filteredScenarios.length} ta ssenariy`}</span>
                </div>
            </div>

            {/* Scenarios Grid */}
            {scenarios.length === 0 ? (
                <div className="py-12 text-center text-muted-foreground">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent mb-2" />
                    <p className="text-xs">{language === 'ja' ? 'シナリオを読み込み中...' : 'Ssenariylar yuklanmoqda...'}</p>
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
                                className="group relative bg-card border border-border hover:border-primary/50 rounded-3xl p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="text-3xl p-3 bg-muted/60 rounded-2xl group-hover:scale-110 transition-transform">
                                            {scenario.emoji}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold border ${
                                                scenario.difficulty === 'N5' || scenario.difficulty === 'N4' || scenario.difficulty === 'A1' || scenario.difficulty === 'A2'
                                                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                                    : 'bg-[#C9A961]/15 text-[#C9A961] border-[#C9A961]/30'
                                            }`}>
                                                {activeLang === 'ja' ? 'JLPT ' : ''}{scenario.difficulty}
                                            </span>
                                            
                                            {/* Delete Button */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setDeletingScenario(scenario);
                                                }}
                                                title="Ssenariyni o'chirish"
                                                className="p-1.5 text-muted-foreground hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all cursor-pointer"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </div>

                                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                                        {title}
                                    </h3>
                                    {language !== 'ja' && scenario.title_uz && (
                                        <p className="text-xs font-semibold text-muted-foreground mt-0.5">
                                            {scenario.title_uz}
                                        </p>
                                    )}
                                    {language !== 'ja' && scenario.description_uz && (
                                        <p className="text-xs text-muted-foreground/80 mt-2 line-clamp-2 leading-relaxed">
                                            {scenario.description_uz}
                                        </p>
                                    )}

                                    {/* Key Phrases */}
                                    <div className="mt-4 pt-3 border-t border-border/40 space-y-1.5">
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase">{language === 'ja' ? '重要フレーズ:' : 'Kalit iboralar:'}</span>
                                        <div className="flex flex-wrap gap-1">
                                            {scenario.key_phrases.slice(0, 3).map((kp, idx) => (
                                                <span key={idx} className="px-2 py-0.5 bg-muted text-[10px] font-mono text-foreground rounded-md border border-border/40">
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
                                            <Award size={16} className="text-[#C9A961]" />
                                            <div>
                                                <span className="font-bold text-foreground">{lastSession.overall_score}%</span>
                                                <span className="text-muted-foreground text-[10px] ml-1">{language === 'ja' ? '前回のスコア' : 'oxirgi natija'}</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-[11px] text-muted-foreground flex items-center gap-1">
                                            <History size={12} />
                                            <span>{language === 'ja' ? '未着手' : 'Boshlanmagan'}</span>
                                        </div>
                                    )}

                                    <button
                                        onClick={() => handleSelectScenario(scenario)}
                                        className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-primary/20 transition-all group-hover:scale-105 active:scale-95 cursor-pointer"
                                    >
                                        <Play size={14} className="fill-current" />
                                        <span>{language === 'ja' ? '会話を開始' : 'Boshlash'}</span>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Create Scenario Modal */}
            {isCreateModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
                    <div className="bg-card border border-border rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl space-y-6 relative">
                        <div className="flex items-center justify-between border-b border-border pb-4">
                            <div className="flex items-center gap-2.5">
                                <span className="text-2xl">{formData.emoji}</span>
                                <div>
                                    <h2 className="text-xl font-bold text-foreground">
                                        {language === 'ja' ? '新しい会話シナリオの作成' : 'Yangi Ssenariy Yaratish'}
                                    </h2>
                                    <p className="text-xs text-muted-foreground">
                                        {language === 'ja' ? 'AIコーチとのロールプレイ用シナリオを追加' : 'AI Murabbiy uchun shaxsiy rolli ssenariy qo\'shing'}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsCreateModalOpen(false)}
                                className="p-2 text-muted-foreground hover:text-foreground rounded-xl hover:bg-muted transition-colors cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSaveNewScenario} className="space-y-4">
                            {/* Language, Difficulty, Category Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-muted-foreground mb-1.5">Til (Language)</label>
                                    <select
                                        value={formData.language}
                                        onChange={(e) => setFormData(prev => ({ ...prev, language: e.target.value as 'ja' | 'en' }))}
                                        className="w-full px-3 py-2 bg-muted/50 border border-border rounded-xl text-xs font-bold text-foreground outline-hidden focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="ja">🎌 Yaponcha (JA)</option>
                                        <option value="en">🇬🇧 Inglizcha (EN)</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-muted-foreground mb-1.5">Emoji</label>
                                    <input
                                        type="text"
                                        value={formData.emoji}
                                        onChange={(e) => setFormData(prev => ({ ...prev, emoji: e.target.value }))}
                                        className="w-full px-3 py-2 bg-muted/50 border border-border rounded-xl text-xs font-bold text-foreground outline-hidden focus:ring-2 focus:ring-primary text-center"
                                        placeholder="💼"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-muted-foreground mb-1.5">Daraja (Level)</label>
                                    <select
                                        value={formData.difficulty}
                                        onChange={(e) => setFormData(prev => ({ ...prev, difficulty: e.target.value as ConversationScenario['difficulty'] }))}
                                        className="w-full px-3 py-2 bg-muted/50 border border-border rounded-xl text-xs font-bold text-foreground outline-hidden focus:ring-2 focus:ring-primary"
                                    >
                                        {formData.language === 'ja' ? (
                                            <>
                                                <option value="N5">JLPT N5</option>
                                                <option value="N4">JLPT N4</option>
                                                <option value="N3">JLPT N3</option>
                                                <option value="N2">JLPT N2</option>
                                                <option value="N1">JLPT N1</option>
                                            </>
                                        ) : (
                                            <>
                                                <option value="A2">A2 Elementary</option>
                                                <option value="B1">B1 Intermediate</option>
                                                <option value="B2">B2 Upper-Int</option>
                                                <option value="C1">C1 Advanced</option>
                                                <option value="IELTS">IELTS Mock</option>
                                            </>
                                        )}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-muted-foreground mb-1.5">Kategoriya</label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as any }))}
                                        className="w-full px-3 py-2 bg-muted/50 border border-border rounded-xl text-xs font-bold text-foreground outline-hidden focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="business">💼 Biznes</option>
                                        <option value="daily">🍜 Kundalik</option>
                                        <option value="travel">✈️ Sayohat</option>
                                        <option value="social">🤝 Ijtimoiy</option>
                                        <option value="academic">🎓 Akademik</option>
                                    </select>
                                </div>
                            </div>

                            {/* Target Language Title & Opening Line */}
                            {formData.language === 'ja' ? (
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                                            Yaponcha Sarlavha (Kanji/Kana) *
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.title_ja}
                                            onChange={(e) => setFormData(prev => ({ ...prev, title_ja: e.target.value }))}
                                            className="w-full px-3.5 py-2.5 bg-muted/50 border border-border rounded-xl text-sm font-bold text-foreground outline-hidden focus:ring-2 focus:ring-primary"
                                            placeholder="例: 取引先との新規商談 (New Client Negotiation)"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                                            AI Murabbiyning Boshlovchi Jumlasi (Opening Line) *
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.opening_line_ja}
                                            onChange={(e) => setFormData(prev => ({ ...prev, opening_line_ja: e.target.value }))}
                                            className="w-full px-3.5 py-2.5 bg-muted/50 border border-border rounded-xl text-sm text-foreground outline-hidden focus:ring-2 focus:ring-primary"
                                            placeholder="例: いつもお世話になっております。本日は新規案件についてご相談したく存じます。"
                                            required
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                                            Inglizcha Sarlavha *
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.title_en}
                                            onChange={(e) => setFormData(prev => ({ ...prev, title_en: e.target.value }))}
                                            className="w-full px-3.5 py-2.5 bg-muted/50 border border-border rounded-xl text-sm font-bold text-foreground outline-hidden focus:ring-2 focus:ring-primary"
                                            placeholder="e.g. Executive Strategy Presentation"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                                            AI Murabbiyning Boshlovchi Jumlasi (Opening Line) *
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.opening_line_en}
                                            onChange={(e) => setFormData(prev => ({ ...prev, opening_line_en: e.target.value }))}
                                            className="w-full px-3.5 py-2.5 bg-muted/50 border border-border rounded-xl text-sm text-foreground outline-hidden focus:ring-2 focus:ring-primary"
                                            placeholder="e.g. Welcome to our quarterly business review meeting."
                                            required
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Uzbek Title & Description */}
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                                        O'zbekcha Sarlavha *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.title_uz}
                                        onChange={(e) => setFormData(prev => ({ ...prev, title_uz: e.target.value }))}
                                        className="w-full px-3.5 py-2.5 bg-muted/50 border border-border rounded-xl text-sm font-bold text-foreground outline-hidden focus:ring-2 focus:ring-primary"
                                        placeholder="Masalan: Hamkor bilan biznes shartnomani muzokara qilish"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                                        O'zbekcha Qisqacha Tavsif *
                                    </label>
                                    <textarea
                                        value={formData.description_uz}
                                        onChange={(e) => setFormData(prev => ({ ...prev, description_uz: e.target.value }))}
                                        rows={2}
                                        className="w-full px-3.5 py-2.5 bg-muted/50 border border-border rounded-xl text-xs text-foreground outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                        placeholder="Ushbu mashqda qanday ko'nikmalar rivojlantiriladi..."
                                        required
                                    />
                                </div>
                            </div>

                            {/* AI Context Prompt */}
                            <div>
                                <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                                    AI Sensei uchun Kontekst Prompt (Ixtiyoriy)
                                </label>
                                <textarea
                                    value={formData.context_prompt}
                                    onChange={(e) => setFormData(prev => ({ ...prev, context_prompt: e.target.value }))}
                                    rows={2}
                                    className="w-full px-3.5 py-2.5 bg-muted/50 border border-border rounded-xl text-xs font-mono text-foreground outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="AI roli, maqsadi va qat'iylik darajasi..."
                                />
                            </div>

                            {/* Key Phrases */}
                            <div>
                                <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                                    Kalit Iboralar (vergul bilan ajrating)
                                </label>
                                <input
                                    type="text"
                                    value={formData.key_phrases_input}
                                    onChange={(e) => setFormData(prev => ({ ...prev, key_phrases_input: e.target.value }))}
                                    className="w-full px-3.5 py-2.5 bg-muted/50 border border-border rounded-xl text-xs text-foreground outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="いつもお世話になっております, 納期について, ご検討ください"
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
                                <button
                                    type="button"
                                    onClick={() => setIsCreateModalOpen(false)}
                                    className="px-5 py-2.5 rounded-2xl text-xs font-bold bg-muted hover:bg-muted/80 text-foreground transition-all cursor-pointer"
                                >
                                    Bekor qilish
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-6 py-2.5 rounded-2xl text-xs font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20 transition-all cursor-pointer disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Saqlanmoqda...' : 'Ssenariyni Saqlash'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {deletingScenario && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
                    <div className="bg-card border border-border rounded-3xl w-full max-w-md p-6 shadow-2xl space-y-5 text-center">
                        <div className="w-14 h-14 bg-red-500/10 text-red-500 border border-red-500/20 rounded-2xl flex items-center justify-center mx-auto">
                            <AlertTriangle size={28} />
                        </div>

                        <div className="space-y-1.5">
                            <h3 className="text-lg font-bold text-foreground">Ssenariyni o'chirishni tasdiqlaysizmi?</h3>
                            <p className="text-xs text-muted-foreground">
                                <span className="font-bold text-foreground">"{deletingScenario.title_uz || deletingScenario.title_ja || deletingScenario.title_en}"</span> ssenariysi ro'yxatdan o'chiriladi.
                            </p>
                        </div>

                        <div className="flex items-center justify-center gap-3 pt-2">
                            <button
                                onClick={() => setDeletingScenario(null)}
                                className="px-5 py-2.5 rounded-2xl text-xs font-bold bg-muted hover:bg-muted/80 text-foreground transition-all cursor-pointer"
                            >
                                Bekor qilish
                            </button>
                            <button
                                onClick={() => handleDeleteScenario(deletingScenario)}
                                className="px-5 py-2.5 rounded-2xl text-xs font-bold bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-500/20 transition-all cursor-pointer"
                            >
                                Ha, o'chirilsin
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
