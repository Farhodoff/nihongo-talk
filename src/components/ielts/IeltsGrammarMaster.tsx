import React, { useState } from 'react';
import { 
    BookOpen, Sparkles, Search, Volume2, CheckCircle2, 
    Flame, Plus, Check, ArrowRight, BookCheck
} from 'lucide-react';
import { IeltsGrammarTopic, IELTS_GRAMMAR_DATABASE } from '../../data/ielts/ielts_grammar_data';
import { useGrammarLessons } from '../../hooks/useGrammarLessons';
import { speakText } from '../../utils/audioTts';
import { useStudyData } from '../../context/StudyPlannerContext';
import { useEnglishGrammarMastery, GrammarMasteryStatus } from '../../hooks/useEnglishGrammarMastery';
import { toast } from '../../hooks/use-toast';
import { getOrEnsureLanguageSubject } from '../../utils/subjectResolver';

export const IeltsGrammarMaster: React.FC = () => {
    const { addFlashcardsBatch, awardXP, subjects, addSubject, addSession } = useStudyData();
    const { topics: rawTopics } = useGrammarLessons('en');
    const { getItemStatus, setItemStatus, getStatsForLevel } = useEnglishGrammarMastery();

    const [activeTab, setActiveTab] = useState<'grammar' | 'quiz'>('grammar');
    const [selectedLevel, setSelectedLevel] = useState<'ALL' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1'>('A1');
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState<'ALL' | GrammarMasteryStatus>('ALL');

    // Saved Flashcard Items Notification State
    const [savedCardIds, setSavedCardIds] = useState<string[]>([]);

    // Use local comprehensive database if hook is still loading or for instant response
    const topics: IeltsGrammarTopic[] = rawTopics.length > 0 ? rawTopics : IELTS_GRAMMAR_DATABASE;

    // Direct Export to Flashcards
    const handleExportToFlashcard = async (topic: IeltsGrammarTopic) => {
        const subjectId = await getOrEnsureLanguageSubject(subjects, addSubject, 'en');
        
        const frontText = `[${topic.level} English Grammar] ${topic.title}\n\n📐 Formula:\n${topic.structure}`;
        const backText = `🇺🇿 Ma'nosi: ${topic.uzbekMeaning}\n\n💡 Qoida:\n${topic.explanation}\n\n📑 Misol:\n${topic.academicExamples[0]?.sentence || ''}\n(${topic.academicExamples[0]?.translation || ''})`;

        try {
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
            setSavedCardIds(prev => [...prev, topic.id]);
            toast({
                title: '⚡ Fleshkarta Yaratildi!',
                description: `"${topic.title}" Anki SM-2 takrorlash tizimingizga qo'shildi.`
            });
        } catch (e) {
            toast({ variant: 'destructive', title: 'Xatolik', description: 'Fleshkartani saqlashda xato yuz berdi.' });
        }
    };

    // Filter Topics
    const filteredTopics = topics.filter(item => {
        const matchesLevel = selectedLevel === 'ALL' || 
            item.level === selectedLevel || 
            (selectedLevel === 'A1' && item.level === 'A1-A2') ||
            (selectedLevel === 'A2' && item.level === 'A1-A2') ||
            (selectedLevel === 'B1' && item.level === 'B1-B2') ||
            (selectedLevel === 'B2' && item.level === 'B1-B2');

        const matchesQuery = !searchQuery.trim() || 
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            item.uzbekMeaning.toLowerCase().includes(searchQuery.toLowerCase()) || 
            item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.explanation.toLowerCase().includes(searchQuery.toLowerCase());

        const itemStatus = getItemStatus(item.id);
        const matchesStatus = statusFilter === 'ALL' || itemStatus === statusFilter;

        return matchesLevel && matchesQuery && matchesStatus;
    });

    // Level Stats for Progress Bar
    const currentLevelItems = selectedLevel === 'ALL' 
        ? topics 
        : topics.filter(i => i.level === selectedLevel || (selectedLevel === 'A1' && i.level === 'A1-A2'));
    const levelStats = getStatsForLevel(currentLevelItems);

    // Quiz State
    const [quizIndex, setQuizIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [missedQuestions, setMissedQuestions] = useState<{ topic: IeltsGrammarTopic; q: any }[]>([]);

    // Compile all questions from currently selected level
    const allQuizPool = currentLevelItems.flatMap(topic => 
        topic.quizQuestions.map(q => ({ topic, q }))
    );

    const handleAnswerQuiz = (option: string) => {
        if (selectedOption !== null) return;
        setSelectedOption(option);
        const currentItem = allQuizPool[quizIndex];
        if (!currentItem) return;

        if (option === currentItem.q.correctAnswer) {
            setScore(prev => prev + 1);
            setItemStatus(currentItem.topic.id, 'mastered');
        } else {
            setMissedQuestions(prev => [...prev, currentItem]);
            setItemStatus(currentItem.topic.id, 'hard');
        }
    };

    const handleNextQuiz = async () => {
        setSelectedOption(null);
        if (quizIndex + 1 < allQuizPool.length) {
            setQuizIndex(prev => prev + 1);
        } else {
            setIsQuizCompleted(true);
            if (awardXP && score > 0) {
                await awardXP(score * 25);
            }
            if (addSession) {
                try {
                    let engSub = subjects.find(s => s.name.toLowerCase().includes('english') || s.name.toLowerCase().includes('ielts'));
                    await addSession({
                        duration: Math.max(3, Math.round(allQuizPool.length * 1.5)),
                        type: 'focus',
                        completed: true,
                        subjectId: engSub?.id || undefined,
                        startTime: new Date().toISOString()
                    });
                } catch (e) {}
            }
        }
    };

    const resetQuiz = () => {
        setQuizIndex(0);
        setSelectedOption(null);
        setScore(0);
        setIsQuizCompleted(false);
        setMissedQuestions([]);
    };

    return (
        <div className="space-y-6">
            {/* Header Banner (Japanese Grammar Hub style) */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 p-6 md:p-8 border border-blue-800/40 shadow-2xl">
                <div className="absolute -right-12 -top-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
                            <Sparkles className="w-3.5 h-3.5" /> Rasmiy Darsliklar & Imtihonlar Bazasi
                        </div>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                            📚 English Grammar Master (Raymond Murphy)
                        </h1>
                        <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
                            A1 dan C1 gacha bo'lgan rasmiy Murphy darsliklari bazasi. Grammatik formulalar, audio talaffuzlar, amaliy misollar va Anki Flashcards eksporti!
                        </p>
                    </div>

                    {/* Quick Stats Widget */}
                    <div className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 shadow-lg">
                        <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400">
                            <Flame className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-xs text-slate-400 font-medium">Baza hajmi</div>
                            <div className="text-lg font-black text-white flex items-center gap-1.5">
                                <span>{topics.length} Qoida / Unit</span>
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
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-semibold'
                                : 'bg-slate-900/70 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
                        }`}
                    >
                        <BookOpen className="w-4 h-4" />
                        📖 Grammatika ({topics.length})
                    </button>

                    <button
                        onClick={() => {
                            setActiveTab('quiz');
                            resetQuiz();
                        }}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                            activeTab === 'quiz'
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-semibold'
                                : 'bg-slate-900/70 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
                        }`}
                    >
                        <Flame className="w-4 h-4 text-amber-400" />
                        ⚡ AI Test Generator ({allQuizPool.length} Savol)
                    </button>
                </div>
            </div>

            {/* Level & Search Controls (Matching user screenshot 4) */}
            {activeTab === 'grammar' && (
                <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 shadow-xl space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        {/* Level Pills */}
                        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
                            {(['BARCHASI', 'A1', 'A2', 'B1', 'B2', 'C1'] as const).map(lvl => {
                                const levelKey = lvl === 'BARCHASI' ? 'ALL' : lvl;
                                const isSelected = selectedLevel === levelKey;
                                return (
                                    <button
                                        key={lvl}
                                        onClick={() => setSelectedLevel(levelKey)}
                                        className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                            isSelected
                                                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30 scale-105'
                                                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                                        }`}
                                    >
                                        {lvl}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Grammatika, qoida yoki uzbekcha izlash..."
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition"
                            />
                        </div>
                    </div>

                    {/* Mastery Filter & Progress Bar */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
                        {/* Status Filter buttons */}
                        <div className="flex items-center gap-2 text-xs flex-wrap">
                            <span className="text-slate-400 font-medium mr-1">Holat:</span>
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
                                    {st === 'ALL' ? 'Barchasi' : st === 'mastered' ? 'Mustahkamlandi' : st === 'learned' ? 'O\'rganildi' : st === 'hard' ? 'Qiyin' : 'Yangi'}
                                </button>
                            ))}
                        </div>

                        {/* Progress Bar Widget */}
                        <div className="flex items-center gap-3">
                            <div className="text-xs text-slate-400">
                                Progress ({selectedLevel}): <span className="font-bold text-emerald-400">{levelStats.progressPercent}%</span> ({levelStats.mastered + levelStats.learned}/{levelStats.total})
                            </div>
                            <div className="w-32 h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                                <div
                                    className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500 transition-all duration-500"
                                    style={{ width: `${levelStats.progressPercent}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB 1: GRAMMAR UNITS LIST */}
            {activeTab === 'grammar' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {filteredTopics.length === 0 ? (
                        <div className="col-span-2 p-12 text-center bg-slate-900/60 rounded-3xl border border-dashed border-slate-800 text-slate-400 space-y-3">
                            <BookCheck className="w-8 h-8 mx-auto text-slate-600" />
                            <p className="text-sm font-semibold">Mos keluvchi grammatika mavzusi topilmadi.</p>
                            <button 
                                onClick={() => { setSelectedLevel('ALL'); setStatusFilter('ALL'); setSearchQuery(''); }}
                                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition"
                            >
                                Filtrlarni tozalash
                            </button>
                        </div>
                    ) : (
                        filteredTopics.map(topic => {
                            const status = getItemStatus(topic.id);
                            const isExported = savedCardIds.includes(topic.id);

                            return (
                                <div
                                    key={topic.id}
                                    className="group relative bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 shadow-lg flex flex-col justify-between space-y-4"
                                >
                                    <div>
                                        {/* Header Row: Level Badge, Category, Audio & Flashcards */}
                                        <div className="flex items-center justify-between gap-2 mb-3">
                                            <div className="flex items-center gap-2">
                                                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                                                    topic.level.startsWith('A') ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300' :
                                                    topic.level.startsWith('B') ? 'bg-blue-500/20 border-blue-500/30 text-blue-300' :
                                                    'bg-purple-500/20 border-purple-500/30 text-purple-300'
                                                }`}>
                                                    {topic.level} Foundation
                                                </span>
                                                <span className="text-[11px] font-semibold text-slate-400">
                                                    {topic.category}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-1.5">
                                                <button
                                                    onClick={() => speakText(topic.title.replace(/Unit \d+:\s*/, ''), 'en-US')}
                                                    className="p-2 rounded-xl bg-slate-800/80 hover:bg-indigo-600/30 text-slate-400 hover:text-indigo-300 transition"
                                                    title="Inglizcha talaffuz"
                                                >
                                                    <Volume2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleExportToFlashcard(topic)}
                                                    className={`p-2 rounded-xl border transition ${
                                                        isExported
                                                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                                                            : 'bg-slate-800/80 hover:bg-amber-600/30 text-slate-400 hover:text-amber-300 border-slate-800'
                                                    }`}
                                                    title="Fleshkartaga saqlash"
                                                >
                                                    {isExported ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                                </button>
                                            </div>
                                        </div>

                                        {/* Unit Title & Uzbek meaning */}
                                        <h3 className="text-lg font-black text-white tracking-tight group-hover:text-indigo-300 transition mb-1">
                                            {topic.title}
                                        </h3>
                                        <p className="text-xs font-semibold text-indigo-400/90 mb-3">
                                            🇺🇿 {topic.uzbekMeaning}
                                        </p>

                                        {/* Formula / Structure Box */}
                                        <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 mb-3 space-y-1">
                                            <div className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                                                📐 Grammatik Formula & Struktura:
                                            </div>
                                            <code className="text-xs font-mono text-amber-300 block break-words">
                                                {topic.structure}
                                            </code>
                                        </div>

                                        {/* Explanation Box */}
                                        <div className="text-xs text-slate-300 leading-relaxed mb-3 space-y-1 bg-slate-950/40 p-3 rounded-xl border border-slate-800/40">
                                            <span className="font-bold text-slate-200 block text-[11px]">
                                                💡 Murphy Qoidasi:
                                            </span>
                                            <p>{topic.explanation}</p>
                                        </div>

                                        {/* Example Sentences with individual Audio */}
                                        <div className="space-y-2 mb-3">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                                📑 Amaliy Misollar (Hayotiy & Akademik):
                                            </span>
                                            {topic.academicExamples.map((ex, idx) => (
                                                <div key={idx} className="bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/60 space-y-1">
                                                    <div className="text-xs font-semibold text-slate-100 flex items-center justify-between gap-2">
                                                        <span>"{ex.sentence}"</span>
                                                        <button
                                                            onClick={() => speakText(ex.sentence, 'en-US')}
                                                            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-indigo-300 shrink-0"
                                                            title="O'qib berish"
                                                        >
                                                            <Volume2 className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>
                                                    <p className="text-[11px] text-slate-400 pl-2 border-l-2 border-indigo-500">
                                                        {ex.translation}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Common Mistakes Box */}
                                        {topic.commonMistakes.length > 0 && (
                                            <div className="space-y-1 mb-3">
                                                {topic.commonMistakes.map((m, idx) => (
                                                    <div key={idx} className="p-2.5 bg-rose-950/30 border border-rose-900/40 rounded-xl space-y-1 text-xs">
                                                        <div className="text-rose-400 line-through">❌ {m.incorrect}</div>
                                                        <div className="text-emerald-400 font-bold">✅ {m.correct}</div>
                                                        <div className="text-[10px] text-slate-400">{m.explanation}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Bottom Row: Status Toggles */}
                                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                                        <span className="text-[10px] text-slate-500 font-medium">Holat:</span>
                                        <div className="flex items-center gap-1">
                                            {(['unlearned', 'hard', 'learned', 'mastered'] as const).map(st => (
                                                <button
                                                    key={st}
                                                    onClick={() => setItemStatus(topic.id, st)}
                                                    className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition ${
                                                        status === st
                                                            ? (st === 'mastered' ? 'bg-emerald-600 text-white' :
                                                               st === 'learned' ? 'bg-blue-600 text-white' :
                                                               st === 'hard' ? 'bg-amber-600 text-white' : 'bg-slate-700 text-white')
                                                            : 'bg-slate-950 text-slate-500 hover:text-slate-300 border border-slate-800'
                                                    }`}
                                                >
                                                    {st === 'mastered' ? 'Mustahkamlandi' : st === 'learned' ? 'O\'rganildi' : st === 'hard' ? 'Qiyin' : 'Yangi'}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            )}

            {/* TAB 2: AI / PRACTICE QUIZ GENERATOR */}
            {activeTab === 'quiz' && (
                <div className="max-w-2xl mx-auto bg-slate-900/90 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
                    {!isQuizCompleted && allQuizPool.length > 0 ? (
                        <>
                            {/* Quiz Header & Progress */}
                            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                                <div>
                                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                                        Savol {quizIndex + 1} / {allQuizPool.length}
                                    </span>
                                    <h3 className="text-sm font-black text-white mt-0.5">
                                        {allQuizPool[quizIndex]?.topic.title}
                                    </h3>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs text-slate-400">To'plangan ball</span>
                                    <div className="text-lg font-black text-emerald-400">{score} / {allQuizPool.length}</div>
                                </div>
                            </div>

                            {/* Question Text */}
                            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-base font-bold text-white leading-relaxed">
                                {allQuizPool[quizIndex]?.q.question}
                            </div>

                            {/* Options */}
                            <div className="grid grid-cols-1 gap-2.5">
                                {allQuizPool[quizIndex]?.q.options.map((opt: string, idx: number) => {
                                    const isSelected = selectedOption === opt;
                                    const isCorrect = opt === allQuizPool[quizIndex]?.q.correctAnswer;
                                    
                                    let btnClass = "bg-slate-950/70 hover:bg-slate-800 border-slate-800 text-slate-200";
                                    if (selectedOption !== null) {
                                        if (isCorrect) {
                                            btnClass = "bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold";
                                        } else if (isSelected && !isCorrect) {
                                            btnClass = "bg-rose-950/80 border-rose-500 text-rose-300";
                                        } else {
                                            btnClass = "bg-slate-950/40 border-slate-900 text-slate-500 opacity-50";
                                        }
                                    }

                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswerQuiz(opt)}
                                            disabled={selectedOption !== null}
                                            className={`w-full text-left p-3.5 rounded-xl border text-xs font-medium transition flex items-center justify-between ${btnClass}`}
                                        >
                                            <span>{opt}</span>
                                            {selectedOption !== null && isCorrect && <CheckCircle2 size={16} className="text-emerald-400" />}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Answer Explanation & Next Button */}
                            {selectedOption !== null && (
                                <div className="space-y-4 pt-2 animate-in fade-in">
                                    <div className="p-3 bg-indigo-950/40 rounded-xl border border-indigo-900/40 text-xs text-indigo-300">
                                        💡 <strong>Tushuntirish:</strong> {allQuizPool[quizIndex]?.q.explanation}
                                    </div>
                                    <button
                                        onClick={handleNextQuiz}
                                        className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition"
                                    >
                                        <span>Keyingi Savol</span>
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            )}
                        </>
                    ) : isQuizCompleted ? (
                        <div className="text-center space-y-6 py-6">
                            <div className="inline-flex p-4 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                <Sparkles className="w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-white">Test Yakunlandi! 🎉</h3>
                                <p className="text-sm text-slate-300 mt-1">
                                    Siz {allQuizPool.length} ta savoldan <strong>{score}</strong> tasiga to'g'ri javob berdingiz ({Math.round((score / allQuizPool.length) * 100)}%).
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-3">
                                {missedQuestions.length > 0 && (
                                    <button
                                        onClick={async () => {
                                            const subjectId = await getOrEnsureLanguageSubject(subjects, addSubject, 'en');
                                            const cards = missedQuestions.map(m => ({
                                                subjectId: subjectId || undefined,
                                                front: `[${m.topic.level} Grammar Practice] ${m.topic.title}\n\n❓ ${m.q.question}`,
                                                back: `✅ To'g'ri javob: ${m.q.correctAnswer}\n\n💡 Izoh: ${m.q.explanation}\n\n📐 Formula: ${m.topic.structure}`,
                                                interval: 1,
                                                repetitions: 0,
                                                easeFactor: 2.5
                                            }));
                                            await addFlashcardsBatch(cards);
                                            toast({
                                                title: '🎴 Fleshkartalar Saqlandi!',
                                                description: `${cards.length} ta xato qilingan savol takrorlash tizimiga qo'shildi.`
                                            });
                                        }}
                                        className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition shadow"
                                    >
                                        Xatolarni Fleshkartaga Saqlash ({missedQuestions.length})
                                    </button>
                                )}
                                <button
                                    onClick={resetQuiz}
                                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition shadow"
                                >
                                    Qayta topshirish
                                </button>
                                <button
                                    onClick={() => setActiveTab('grammar')}
                                    className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition"
                                >
                                    Darslarga qaytish
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="p-8 text-center text-slate-400 text-xs">
                            Ushbu darajada test savollari topilmadi.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default IeltsGrammarMaster;
