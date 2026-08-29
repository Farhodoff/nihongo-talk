import React, { useState } from 'react';
import { BookOpen, Sparkles, Search, Volume2, CheckCircle2, GraduationCap, Flame, Plus, Check, Play, ArrowRight } from 'lucide-react';
import { JLPT_GRAMMAR_DATA, JLPT_KANJI_DATA, JlptGrammarItem, JlptKanjiItem } from '../../data/jlptGrammarKanji';
import { JLPT_GRAMMAR_DATABASE } from '../../data/jlptGrammarDatabase';
import { JLPT_KANJI_DATABASE } from '../../data/jlptKanjiDatabase';
import { JLPT_GRAMMAR_QUESTIONS, JlptGrammarQuestion } from '../../data/jlpt/grammar_data';
import { speakText } from '../../utils/audioTts';
import { useStudyData } from '../../context/StudyPlannerContext';
import { FuriganaText } from './FuriganaText';
import { KanjiStrokeOrderModal } from './KanjiStrokeOrderModal';
import { useJlptMastery, MasteryStatus } from '../../hooks/useJlptMastery';
import { HistoryService } from '../../services/HistoryService';
import { useLanguage } from '../../context/LanguageContext';
import { getOrEnsureLanguageSubject } from '../../utils/subjectResolver';

export const JlptGrammarKanjiMaster: React.FC = () => {
    const { addFlashcardsBatch, subjects, addSubject, awardXP, addSession } = useStudyData();
    const { getItemStatus, setItemStatus, getStatsForLevel } = useJlptMastery();
    const { language } = useLanguage();

    const [activeTab, setActiveTab] = useState<'grammar' | 'kanji' | 'quiz'>('grammar');
    const [selectedLevel, setSelectedLevel] = useState<'ALL' | 'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('ALL');
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState<'ALL' | MasteryStatus>('ALL');

    // Stroke Modal State
    const [strokeModalKanji, setStrokeModalKanji] = useState<JlptKanjiItem | null>(null);

    // Saved Flashcard Items Notification State
    const [savedCardIds, setSavedCardIds] = useState<string[]>([]);

    // Merge databases (or fallback)
    const grammarSource: JlptGrammarItem[] = JLPT_GRAMMAR_DATABASE.length > 0 ? JLPT_GRAMMAR_DATABASE : JLPT_GRAMMAR_DATA;
    const kanjiSource: JlptKanjiItem[] = JLPT_KANJI_DATABASE.length > 0 ? JLPT_KANJI_DATABASE : JLPT_KANJI_DATA;

    // Direct Export to Flashcards
    const handleExportToFlashcard = async (item: JlptGrammarItem | JlptKanjiItem, isGrammar: boolean) => {
        const subjectId = await getOrEnsureLanguageSubject(subjects, addSubject, 'ja');
        
        let frontText = '';
        let backText = '';

        if (isGrammar) {
            const g = item as JlptGrammarItem;
            frontText = `[${g.level} Grammar] ${g.title}\nStruktura: ${g.structure}`;
            backText = `🇺🇿 Ma'nosi: ${g.meaningUz}\n\nMisol:\n${g.examples[0]?.ja || ''}\n(${g.examples[0]?.romaji || ''})\n${g.examples[0]?.uz || ''}`;
        } else {
            const k = item as JlptKanjiItem;
            frontText = `[${k.level} Kanji] ${k.kanji}`;
            backText = `Onyomi: ${k.onyomi}\nKunyomi: ${k.kunyomi}\n\nMa'nosi: ${k.meaningUz}\n\nMisol: ${k.examples[0]?.word || ''} (${k.examples[0]?.reading || ''}) — ${k.examples[0]?.meaning || ''}`;
        }

        await addFlashcardsBatch([
            {
                subjectId,
                front: frontText,
                back: backText,
                interval: 1,
                repetitions: 0,
                easeFactor: 2.5
            }
        ]);

        setSavedCardIds(prev => [...prev, item.id]);
    };

    // Filter Grammar Items
    const filteredGrammar = grammarSource.filter(item => {
        const matchesLevel = selectedLevel === 'ALL' || item.level === selectedLevel;
        const matchesQuery = !searchQuery.trim() || 
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            item.meaningUz.toLowerCase().includes(searchQuery.toLowerCase()) || 
            item.romaji.toLowerCase().includes(searchQuery.toLowerCase());
        const itemStatus = getItemStatus(item.id);
        const matchesStatus = statusFilter === 'ALL' || itemStatus === statusFilter;
        return matchesLevel && matchesQuery && matchesStatus;
    });

    // Filter Kanji Items
    const filteredKanji = kanjiSource.filter(item => {
        const matchesLevel = selectedLevel === 'ALL' || item.level === selectedLevel;
        const matchesQuery = !searchQuery.trim() || 
            item.kanji.includes(searchQuery) || 
            item.meaningUz.toLowerCase().includes(searchQuery.toLowerCase()) || 
            item.onyomi.toLowerCase().includes(searchQuery.toLowerCase()) || 
            item.kunyomi.toLowerCase().includes(searchQuery.toLowerCase());
        const itemStatus = getItemStatus(item.id);
        const matchesStatus = statusFilter === 'ALL' || itemStatus === statusFilter;
        return matchesLevel && matchesQuery && matchesStatus;
    });

    // Calculate level stats
    const currentActiveList = activeTab === 'grammar' ? grammarSource : kanjiSource;
    const currentLevelItems = selectedLevel === 'ALL' ? currentActiveList : currentActiveList.filter(i => i.level === selectedLevel);
    const levelStats = getStatsForLevel(currentLevelItems);

    // Quiz State
    const [quizIndex, setQuizIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [missedQuizQuestions, setMissedQuizQuestions] = useState<JlptGrammarQuestion[]>([]);
    const [quizFlashcardsSaved, setQuizFlashcardsSaved] = useState(false);

    const quizQuestions: JlptGrammarQuestion[] = selectedLevel === 'ALL'
        ? JLPT_GRAMMAR_QUESTIONS
        : (JLPT_GRAMMAR_QUESTIONS.filter(q => q.level === selectedLevel).length > 0
            ? JLPT_GRAMMAR_QUESTIONS.filter(q => q.level === selectedLevel)
            : JLPT_GRAMMAR_QUESTIONS);

    const handleAnswerQuiz = (index: number) => {
        if (selectedOption !== null) return;
        setSelectedOption(index);
        const currentQ = quizQuestions[quizIndex];
        if (index === currentQ.correctAnswer) {
            setScore(prev => prev + 1);
            setItemStatus(`jlpt_${currentQ.level}_${currentQ.id}`, 'mastered');
        } else {
            setMissedQuizQuestions(prev => [...prev, currentQ]);
            setItemStatus(`jlpt_${currentQ.level}_${currentQ.id}`, 'hard');
        }
    };

    const handleNextQuiz = async () => {
        setSelectedOption(null);
        if (quizIndex + 1 < quizQuestions.length) {
            setQuizIndex(prev => prev + 1);
        } else {
            setIsQuizCompleted(true);
            try {
                if (awardXP && score > 0) {
                    awardXP(score * 20);
                }
                if (addSession) {
                    const quizSubjectId = await getOrEnsureLanguageSubject(subjects, addSubject, 'ja');
                    addSession({
                        duration: Math.max(3, Math.round(quizQuestions.length * 1.5)),
                        type: 'focus',
                        completed: true,
                        subjectId: quizSubjectId || undefined,
                        startTime: new Date().toISOString()
                    });
                }
                HistoryService.saveMockExam({
                    examType: 'jlpt',
                    level: selectedLevel === 'ALL' ? 'N3' : selectedLevel,
                    score,
                    totalQuestions: quizQuestions.length,
                    bandScore: Math.round((score / (quizQuestions.length || 1)) * 180)
                });
            } catch (e) {
                console.warn('Failed to save JLPT quiz score:', e);
            }
        }
    };

    const handleCreateFlashcardsFromMistakes = async () => {
        if (missedQuizQuestions.length === 0 || quizFlashcardsSaved) return;
        const subjectId = await getOrEnsureLanguageSubject(subjects, addSubject, 'ja');
        const cards = missedQuizQuestions.map(q => ({
            subjectId,
            front: `[JLPT ${q.level} Grammar] ${q.pattern}\n\n${q.questionText}`,
            back: `To'g'ri javob: ${q.options[q.correctAnswer]}\n\n🇺🇿 Tahlil: ${q.explanationUzbek}`,
            interval: 1,
            repetitions: 0,
            easeFactor: 2.5
        }));
        await addFlashcardsBatch(cards);
        setQuizFlashcardsSaved(true);
    };

    const resetQuiz = () => {
        setQuizIndex(0);
        setSelectedOption(null);
        setScore(0);
        setIsQuizCompleted(false);
        setMissedQuizQuestions([]);
        setQuizFlashcardsSaved(false);
    };

    return (
        <div className="space-y-6">
            {/* Header Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-950 via-slate-900 to-indigo-950 p-6 md:p-8 border border-rose-800/40 shadow-2xl">
                <div className="absolute -right-12 -top-12 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-semibold mb-3">
                            <Sparkles className="w-3.5 h-3.5" /> {language === 'ja' ? 'こうしき きょうかしょ＆テストの データベース' : 'Rasmiy Darsliklar & Imtihonlar Bazasi'}
                        </div>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                            {language === 'ja' ? '⛩️ JLPT ぶんぽう＆かんじ マスター' : '⛩️ JLPT Grammar & Kanji Master'}
                        </h1>
                        <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
                            {language === 'ja' 
                                ? 'N5〜N1の こうしき ぶんぽう＆かんじ。かきじゅん アニメーション、ふりがな ひょうじ、ワンクリックで たんごちょうへ ほぞんできます！' 
                                : "N5-N1 rasmiy darsliklar va imtihonlar bazasi. Kanji Stroke Order animatsiyalari, Furigana o'qilishlari hamda 1-Bosing bilan Flashcards eksporti!"}
                        </p>
                    </div>

                    {/* Quick Stats Widget */}
                    <div className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 shadow-lg">
                        <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400">
                            <Flame className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-xs text-slate-400 font-medium">{language === 'ja' ? 'データすう' : 'Baza hajmi'}</div>
                            <div className="text-lg font-black text-white flex items-center gap-1.5">
                                <span>{grammarSource.length} {language === 'ja' ? 'ルール' : 'Qoida'}</span> • <span className="text-rose-400">{kanjiSource.length} {language === 'ja' ? 'かんじ' : 'Kanji'}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sub-Tabs Bar */}
                <div className="flex items-center gap-2 mt-6 border-t border-slate-800/80 pt-4 overflow-x-auto">
                    <button
                        onClick={() => setActiveTab('grammar')}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                            activeTab === 'grammar'
                                ? 'bg-gradient-to-r from-rose-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-semibold'
                                : 'bg-slate-900/70 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
                        }`}
                    >
                        <BookOpen className="w-4 h-4" />
                        {language === 'ja' ? `📖 ぶんぽう (${grammarSource.length})` : `📖 Grammatika (${grammarSource.length})`}
                    </button>

                    <button
                        onClick={() => setActiveTab('kanji')}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                            activeTab === 'kanji'
                                ? 'bg-gradient-to-r from-rose-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-semibold'
                                : 'bg-slate-900/70 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
                        }`}
                    >
                        <GraduationCap className="w-4 h-4" />
                        {language === 'ja' ? `⛩️ かんじ (${kanjiSource.length})` : `⛩️ Kanji Iyerogliflar (${kanjiSource.length})`}
                    </button>

                    <button
                        onClick={() => setActiveTab('quiz')}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                            activeTab === 'quiz'
                                ? 'bg-gradient-to-r from-rose-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-semibold'
                                : 'bg-slate-900/70 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
                        }`}
                    >
                        <Flame className="w-4 h-4 text-amber-400" />
                        {language === 'ja' ? '⚡ AIテスト ジェネレーター' : '⚡ AI Test Generator'}
                    </button>
                </div>
            </div>

            {/* Level & Search Controls (for Grammar & Kanji) */}
            {activeTab !== 'quiz' && (
                <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 shadow-xl space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        {/* Level Pills */}
                        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
                            {(['ALL', 'N5', 'N4', 'N3', 'N2', 'N1'] as const).map(lvl => (
                                <button
                                    key={lvl}
                                    onClick={() => setSelectedLevel(lvl)}
                                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                        selectedLevel === lvl
                                            ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30 scale-105'
                                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                                    }`}
                                >
                                    {lvl === 'ALL' ? (language === 'ja' ? 'ぜんぶ' : 'BARCHASI') : lvl}
                                </button>
                            ))}
                        </div>

                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={activeTab === 'grammar' 
                                    ? (language === 'ja' ? "ぶんぽう、ローマ字、いみで さがす..." : "Grammatika, romaji yoki uzbekcha izlash...") 
                                    : (language === 'ja' ? "かんじ、よみかた、いみで さがす..." : "Kanji iyeroglif, o'qilishi yoki ma'nosi...")}
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-rose-500 transition"
                            />
                        </div>
                    </div>

                    {/* Mastery Filter & Progress Bar */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
                        {/* Status Filter buttons */}
                        <div className="flex items-center gap-2 text-xs">
                            <span className="text-slate-400 font-medium mr-1">{language === 'ja' ? 'じょうたい:' : 'Holat:'}</span>
                            {(['ALL', 'mastered', 'learned', 'hard', 'unlearned'] as const).map(st => (
                                <button
                                    key={st}
                                    onClick={() => setStatusFilter(st)}
                                    className={`px-2.5 py-1 rounded-lg font-medium transition ${
                                        statusFilter === st
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                                    }`}
                                >
                                    {st === 'ALL' 
                                        ? (language === 'ja' ? 'ぜんぶ' : 'Barchasi') 
                                        : st === 'mastered' 
                                            ? (language === 'ja' ? ' おぼえた' : ' Mustahkamlandi') 
                                            : st === 'learned' 
                                                ? (language === 'ja' ? ' がくしゅうずみ' : " O'rganildi") 
                                                : st === 'hard' 
                                                    ? (language === 'ja' ? ' むずかしい' : ' Qiyin') 
                                                    : (language === 'ja' ? ' あたらしい' : ' Yangi')}
                                </button>
                            ))}
                        </div>

                        {/* Progress Bar Widget */}
                        <div className="flex items-center gap-3">
                            <div className="text-xs text-slate-400">
                                {language === 'ja' ? 'しんちょく' : 'Progress'} ({selectedLevel === 'ALL' && language === 'ja' ? 'ぜんぶ' : selectedLevel}): <span className="font-bold text-emerald-400">{levelStats.percentage}%</span> ({levelStats.mastered + levelStats.learned}/{levelStats.total})
                            </div>
                            <div className="w-32 h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                                <div
                                    className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500 transition-all duration-500"
                                    style={{ width: `${levelStats.percentage}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB 1: GRAMMAR LIST */}
            {activeTab === 'grammar' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredGrammar.map(item => {
                        const status = getItemStatus(item.id);
                        const isExported = savedCardIds.includes(item.id);

                        return (
                            <div
                                key={item.id}
                                className="group relative bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 shadow-lg flex flex-col justify-between"
                            >
                                <div>
                                    {/* Level Badge & Audio */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">
                                            {item.level}
                                        </span>
                                        <div className="flex items-center gap-1.5">
                                            <button
                                                onClick={() => speakText(item.title, 'ja-JP')}
                                                className="p-2 rounded-xl bg-slate-800/80 hover:bg-indigo-600/30 text-slate-400 hover:text-indigo-300 transition"
                                                title="Yaponcha talaffuz"
                                            >
                                                <Volume2 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleExportToFlashcard(item, true)}
                                                className={`p-2 rounded-xl border transition ${
                                                    isExported
                                                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                                                        : 'bg-slate-800/80 hover:bg-amber-600/30 text-slate-400 hover:text-amber-300 border-slate-800'
                                                }`}
                                                title="Flashcards'ga saqlash"
                                            >
                                                {isExported ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Rule Title & Furigana */}
                                    <h3 className="text-xl font-extrabold text-white tracking-tight mb-1 group-hover:text-indigo-300 transition">
                                        <FuriganaText text={item.title} />
                                    </h3>
                                    <div className="text-xs text-indigo-400/90 font-mono mb-2">{item.romaji}</div>

                                    {/* Structure & Uzbek Meaning */}
                                    <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60 mb-3 space-y-1">
                                        <div className="text-xs font-semibold text-slate-300">
                                            <span className="text-rose-400">Formula:</span> {item.structure}
                                        </div>
                                        <div className="text-xs text-slate-300">
                                            <span className="text-emerald-400">🇺🇿 Ma'nosi:</span> {item.meaningUz}
                                        </div>
                                    </div>

                                    {/* Example Sentences */}
                                    {item.examples.map((ex, idx) => (
                                        <div key={idx} className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/40 space-y-1">
                                            <div className="text-sm font-medium text-slate-100 flex items-center justify-between">
                                                <span><FuriganaText text={ex.ja} /></span>
                                                <button
                                                    onClick={() => speakText(ex.ja, 'ja-JP')}
                                                    className="text-slate-500 hover:text-indigo-300 transition"
                                                >
                                                    <Volume2 className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                            <div className="text-xs text-slate-400 italic">{ex.romaji}</div>
                                            <div className="text-xs text-emerald-300/90">{ex.uz}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Status Toggle Buttons */}
                                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                                    <span className="text-slate-500">{language === 'ja' ? 'おぼえかた:' : 'Mustahkamlash:'}</span>
                                    <div className="flex items-center gap-1.5">
                                        <button
                                            onClick={() => setItemStatus(item.id, 'hard')}
                                            className={`px-2 py-1 rounded-lg border transition ${
                                                status === 'hard'
                                                    ? 'bg-rose-500/30 text-rose-300 border-rose-500/50 font-semibold'
                                                    : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-rose-300'
                                            }`}
                                        >
                                            {language === 'ja' ? 'むずかしい 🔴' : 'Qiyin 🔴'}
                                        </button>
                                        <button
                                            onClick={() => setItemStatus(item.id, 'learned')}
                                            className={`px-2 py-1 rounded-lg border transition ${
                                                status === 'learned'
                                                    ? 'bg-emerald-500/30 text-emerald-300 border-emerald-500/50 font-semibold'
                                                    : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-emerald-300'
                                            }`}
                                        >
                                            {language === 'ja' ? 'がくしゅうずみ 🟢' : "O'rganildi 🟢"}
                                        </button>
                                        <button
                                            onClick={() => setItemStatus(item.id, 'mastered')}
                                            className={`px-2 py-1 rounded-lg border transition ${
                                                status === 'mastered'
                                                    ? 'bg-indigo-500/30 text-indigo-300 border-indigo-500/50 font-semibold'
                                                    : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-indigo-300'
                                            }`}
                                        >
                                            {language === 'ja' ? 'おぼえた ⚡' : 'Mukammal ⚡'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* TAB 2: KANJI LIST */}
            {activeTab === 'kanji' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredKanji.map(item => {
                        const status = getItemStatus(item.id);
                        const isExported = savedCardIds.includes(item.id);

                        return (
                            <div
                                key={item.id}
                                className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-slate-800/80 hover:border-rose-500/50 transition-all duration-300 shadow-lg flex flex-col justify-between"
                            >
                                <div>
                                    {/* Level Badge & Actions */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 border border-rose-500/30 text-rose-300">
                                            {item.level} • {item.strokeCount} {language === 'ja' ? 'かく' : 'chiziq'}
                                        </span>
                                        <div className="flex items-center gap-1.5">
                                            <button
                                                onClick={() => speakText(item.kanji, 'ja-JP')}
                                                className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-rose-600/30 text-slate-400 hover:text-rose-300 transition"
                                                title={language === 'ja' ? 'おんせい' : 'Talaffuz'}
                                            >
                                                <Volume2 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => setStrokeModalKanji(item)}
                                                className="p-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 transition text-xs font-semibold flex items-center gap-1"
                                                title="Stroke Order Animation"
                                            >
                                                <Play className="w-3.5 h-3.5" /> {language === 'ja' ? 'かきじゅん' : 'Chizish'}
                                            </button>
                                            <button
                                                onClick={() => handleExportToFlashcard(item, false)}
                                                className={`p-1.5 rounded-xl border transition ${
                                                    isExported
                                                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                                                        : 'bg-slate-800/80 hover:bg-indigo-600/30 text-slate-400 hover:text-indigo-300 border-slate-800'
                                                }`}
                                                title={language === 'ja' ? 'たんごカードへ ほぞん' : "Flashcards'ga saqlash"}
                                            >
                                                {isExported ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Kanji Large Render */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div
                                            onClick={() => setStrokeModalKanji(item)}
                                            className="w-20 h-20 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-4xl font-black text-rose-400 cursor-pointer hover:scale-105 transition shadow-inner"
                                        >
                                            {item.kanji}
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-lg font-bold text-white">{item.meaningUz}</div>
                                            <div className="text-xs text-rose-300">Onyomi: {item.onyomi}</div>
                                            <div className="text-xs text-emerald-300">Kunyomi: {item.kunyomi}</div>
                                        </div>
                                    </div>

                                    {/* Examples */}
                                    <div className="space-y-1.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                                        {item.examples.map((ex, idx) => (
                                            <div key={idx} className="flex items-center justify-between text-xs">
                                                <span className="font-semibold text-slate-200">{ex.word} ({ex.reading})</span>
                                                <span className="text-slate-400">{ex.meaning}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Status Toggle Buttons */}
                                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                                    <span className="text-slate-500">{language === 'ja' ? 'じょうたい:' : 'Holat:'}</span>
                                    <div className="flex items-center gap-1">
                                        <button
                                            onClick={() => setItemStatus(item.id, 'hard')}
                                            className={`px-2 py-0.5 rounded-lg border transition ${
                                                status === 'hard'
                                                    ? 'bg-rose-500/30 text-rose-300 border-rose-500/50'
                                                    : 'bg-slate-950/60 text-slate-400 border-slate-800'
                                            }`}
                                        >
                                            {language === 'ja' ? 'むずかしい 🔴' : 'Qiyin 🔴'}
                                        </button>
                                        <button
                                            onClick={() => setItemStatus(item.id, 'mastered')}
                                            className={`px-2 py-0.5 rounded-lg border transition ${
                                                status === 'mastered'
                                                    ? 'bg-indigo-500/30 text-indigo-300 border-indigo-500/50'
                                                    : 'bg-slate-950/60 text-slate-400 border-slate-800'
                                            }`}
                                        >
                                            {language === 'ja' ? 'おぼえた ⚡' : 'Mukammal ⚡'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* TAB 3: QUIZ MODE */}
            {activeTab === 'quiz' && (
                <div className="max-w-2xl mx-auto bg-slate-900/90 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-slate-800 shadow-2xl space-y-6">
                    {!isQuizCompleted && quizQuestions.length > 0 ? (
                        <>
                            <div className="flex items-center justify-between text-xs text-slate-400 font-semibold border-b border-slate-800 pb-3">
                                <span>Savol {quizIndex + 1} / {quizQuestions.length} ({quizQuestions[quizIndex]?.level})</span>
                                <span>Joriy Ball: {score}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white leading-relaxed">
                                {quizQuestions[quizIndex]?.questionText}
                            </h3>

                            <div className="space-y-3">
                                {quizQuestions[quizIndex]?.options.map((opt, idx) => {
                                    const isSelected = selectedOption === idx;
                                    const isCorrect = idx === quizQuestions[quizIndex].correctAnswer;

                                    let btnClass = "w-full text-left p-4 rounded-2xl border text-sm font-semibold transition-all flex items-center justify-between ";

                                    if (selectedOption === null) {
                                        btnClass += "bg-slate-950/80 border-slate-800 hover:border-indigo-500/50 text-slate-200";
                                    } else if (isCorrect) {
                                        btnClass += "bg-emerald-500/20 border-emerald-500/50 text-emerald-300";
                                    } else if (isSelected) {
                                        btnClass += "bg-rose-500/20 border-rose-500/50 text-rose-300";
                                    } else {
                                        btnClass += "bg-slate-950/40 border-slate-800 text-slate-500";
                                    }

                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswerQuiz(idx)}
                                            className={btnClass}
                                        >
                                            <span>{opt}</span>
                                            {selectedOption !== null && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                                        </button>
                                    );
                                })}
                            </div>

                            {selectedOption !== null && (
                                <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-800/40 space-y-3 animate-fadeIn">
                                    <div className="text-xs text-indigo-300 font-semibold">
                                        💡 Tushuntirish: {quizQuestions[quizIndex]?.explanationUzbek}
                                    </div>
                                    <button
                                        onClick={handleNextQuiz}
                                        className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition"
                                    >
                                        Keyingi Savol <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center space-y-5 py-8">
                            <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto text-2xl font-bold">
                                🏆
                            </div>
                            <h3 className="text-2xl font-black text-white">Test Yakunlandi!</h3>
                            <p className="text-slate-400 text-sm">
                                Siz {quizQuestions.length} ta savoldan <span className="font-bold text-emerald-400">{score} ta</span> to'g'ri javob berdingiz. (+{score * 20} XP)
                            </p>

                            {missedQuizQuestions.length > 0 && (
                                <div className="pt-2">
                                    <button
                                        onClick={handleCreateFlashcardsFromMistakes}
                                        disabled={quizFlashcardsSaved}
                                        className={`w-full py-3.5 px-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
                                            quizFlashcardsSaved
                                                ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30'
                                                : 'bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white shadow-indigo-500/20'
                                        }`}
                                    >
                                        {quizFlashcardsSaved ? (
                                            <>
                                                <Check className="w-4 h-4" /> Xatolar Fleshkartalarga Qo'shildi!
                                            </>
                                        ) : (
                                            <>
                                                <Plus className="w-4 h-4" /> {missedQuizQuestions.length} ta Xatolarni Fleshkartaga Aylantirish (Anki SRS)
                                            </>
                                        )}
                                    </button>
                                </div>
                            )}

                            <div className="pt-2">
                                <button
                                    onClick={resetQuiz}
                                    className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition"
                                >
                                    Qayta Boshlash
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Kanji Stroke Order Modal */}
            {strokeModalKanji && (
                <KanjiStrokeOrderModal
                    kanji={strokeModalKanji.kanji}
                    meaningUz={strokeModalKanji.meaningUz}
                    onyomi={strokeModalKanji.onyomi}
                    kunyomi={strokeModalKanji.kunyomi}
                    strokeCount={strokeModalKanji.strokeCount}
                    level={strokeModalKanji.level}
                    isOpen={!!strokeModalKanji}
                    onClose={() => setStrokeModalKanji(null)}
                />
            )}
        </div>
    );
};

export default JlptGrammarKanjiMaster;

