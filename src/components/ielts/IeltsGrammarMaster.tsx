import React, { useState, useEffect } from 'react';
import { 
    CheckCircle2, AlertCircle, Sparkles, 
    Search, PlusCircle, BookCheck
} from 'lucide-react';
import { IELTS_GRAMMAR_DATABASE, IeltsGrammarTopic } from '../../data/ielts/ielts_grammar_data';
import { useStudyData } from '../../context/StudyPlannerContext';
import { HistoryService } from '../../services/HistoryService';
import { supabase } from '../../lib/supabase';
import { toast } from '../../hooks/use-toast';

export const IeltsGrammarMaster: React.FC = () => {
    const { addFlashcardsBatch, awardXP, subjects, addSubject, addSession } = useStudyData();
    const [selectedLevel, setSelectedLevel] = useState<'ALL' | 'A1-A2' | 'B1-B2' | 'C1'>('ALL');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTopic, setSelectedTopic] = useState<IeltsGrammarTopic>(IELTS_GRAMMAR_DATABASE[0]);
    
    // Quiz state
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [isSavingCards, setIsSavingCards] = useState(false);
    const [masteredTopics, setMasteredTopics] = useState<Set<string>>(new Set());

    useEffect(() => {
        const loadMastery = async () => {
            const local = localStorage.getItem('study_planner_ielts_grammar_mastery');
            if (local) {
                try {
                    setMasteredTopics(new Set(JSON.parse(local)));
                } catch (e) {}
            }
            try {
                const { data: { user } } = await supabase.auth.getUser();
                if (user?.user_metadata?.ielts_grammar_mastery) {
                    const dbSet = new Set<string>(user.user_metadata.ielts_grammar_mastery);
                    setMasteredTopics(dbSet);
                    localStorage.setItem('study_planner_ielts_grammar_mastery', JSON.stringify(Array.from(dbSet)));
                }
            } catch (e) {}
        };
        loadMastery();
    }, []);

    const filteredTopics = IELTS_GRAMMAR_DATABASE.filter(t => {
        const matchesLevel = selectedLevel === 'ALL' || t.level === selectedLevel;
        const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              t.uzbekMeaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              t.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesLevel && matchesSearch;
    });

    const handleSelectTopic = (topic: IeltsGrammarTopic) => {
        setSelectedTopic(topic);
        setSelectedAnswers({});
        setQuizSubmitted(false);
    };

    const handleAnswerSelect = (qIdx: number, option: string) => {
        if (quizSubmitted) return;
        setSelectedAnswers(prev => ({ ...prev, [qIdx]: option }));
    };

    const handleQuizSubmit = async () => {
        if (quizSubmitted || !selectedTopic) return;
        setQuizSubmitted(true);

        const totalQ = selectedTopic.quizQuestions.length;
        let correct = 0;
        selectedTopic.quizQuestions.forEach((q, idx) => {
            if (selectedAnswers[idx] === q.correctAnswer) {
                correct++;
            }
        });

        // Award XP
        if (correct > 0) {
            await awardXP(correct * 25);
        }

        // Record study session duration in public.study_sessions
        if (addSession) {
            try {
                let ieltsSub = subjects.find(s => s.name.toLowerCase().includes('ielts'));
                await addSession({
                    duration: 5,
                    type: 'focus',
                    completed: true,
                    subjectId: ieltsSub?.id || undefined,
                    startTime: new Date().toISOString()
                });
            } catch (e) {}
        }

        // Save exam history
        try {
            await HistoryService.saveMockExam({
                examType: 'ielts_reading',
                level: selectedTopic.level,
                score: correct,
                totalQuestions: totalQ,
                bandScore: (correct / totalQ) * 9.0
            });
        } catch (e) {}

        // Mark as mastered if 100%
        if (correct === totalQ) {
            const nextSet = new Set(masteredTopics).add(selectedTopic.id);
            setMasteredTopics(nextSet);
            const arr = Array.from(nextSet);
            localStorage.setItem('study_planner_ielts_grammar_mastery', JSON.stringify(arr));
            try {
                await supabase.auth.updateUser({
                    data: { ielts_grammar_mastery: arr }
                });
            } catch (e) {}
            toast({
                title: '🎉 Tabriklaymiz!',
                description: `${selectedTopic.title} mavzusi to'liq o'zlashtirildi (+${correct * 25} XP)!`
            });
        }
    };

    const handleConvertMistakesToFlashcards = async () => {
        if (!selectedTopic) return;
        setIsSavingCards(true);
        try {
            let ieltsSub = subjects.find(s => s.name.toLowerCase().includes('ielts'));
            let subId = ieltsSub ? ieltsSub.id : '';

            if (!subId) {
                const newSub = await addSubject({
                    name: 'IELTS Academic Master',
                    color: '#6366f1',
                    icon: '🎯'
                });
                if (newSub?.id) subId = newSub.id;
            }

            const cardsToCreate = selectedTopic.quizQuestions.map(q => ({
                subjectId: subId || undefined,
                front: `[IELTS ${selectedTopic.level}] ${q.question}`,
                back: `To'g'ri javob: ${q.correctAnswer}\n\nQoida: ${selectedTopic.structure}\n\nIzoh: ${q.explanation}`,
                example: selectedTopic.academicExamples[0]?.sentence || selectedTopic.uzbekMeaning,
                interval: 1,
                repetitions: 0,
                easeFactor: 2.5
            }));

            await addFlashcardsBatch(cardsToCreate);
            toast({
                title: '⚡ Fleshkartalar Yaratildi!',
                description: `${cardsToCreate.length} ta savol Anki SM-2 SRS takrorlash tizimiga qo'shildi.`
            });
        } catch (e) {
            toast({ variant: 'destructive', title: 'Xatolik', description: 'Kartochkalarni yaratishda xato bo\'ldi.' });
        } finally {
            setIsSavingCards(false);
        }
    };

    return (
        <div className="bg-white dark:bg-[#1f2937] p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-5">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold mb-2">
                        <BookCheck size={14} />
                        <span>IELTS Band 7.5+ Grammatika Akademiyasi</span>
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                        IELTS English Grammar & Academic Structure Master 📚
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        A1 dan C1 gacha bo'lgan rasmiy IELTS grammatik qoidalari, Task 1/2 ilmiy misollari va interaktiv testlar.
                    </p>
                </div>

                {/* Level Tabs */}
                <div className="flex items-center gap-1.5 p-1 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                    {(['ALL', 'A1-A2', 'B1-B2', 'C1'] as const).map(lvl => (
                        <button
                            key={lvl}
                            onClick={() => setSelectedLevel(lvl)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                selectedLevel === lvl 
                                    ? 'bg-indigo-600 text-white shadow-md' 
                                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                            }`}
                        >
                            {lvl === 'ALL' ? 'Barchasi' : lvl}
                        </button>
                    ))}
                </div>
            </div>

            {/* Search Input */}
            <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Grammatik qoida yoki o'zbekcha ma'nosi bo'yicha qidirish (masalan: Inversion, Passive, Artikllar)..."
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/60 rounded-2xl text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            {/* Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Sidebar: Topics List */}
                <div className="lg:col-span-4 space-y-2 max-h-[600px] overflow-y-auto pr-1">
                    {filteredTopics.map(t => {
                        const isSelected = selectedTopic?.id === t.id;
                        const isMastered = masteredTopics.has(t.id);

                        return (
                            <button
                                key={t.id}
                                onClick={() => handleSelectTopic(t)}
                                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                                    isSelected 
                                        ? 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-300 dark:border-indigo-700 shadow-sm' 
                                        : 'bg-white dark:bg-gray-800/40 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700'
                                }`}
                            >
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${
                                            t.level === 'C1' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300' :
                                            t.level === 'B1-B2' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' :
                                            'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300'
                                        }`}>
                                            {t.level}
                                        </span>
                                        <span className="text-xs font-bold text-gray-900 dark:text-white line-clamp-1">
                                            {t.title}
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1">
                                        {t.uzbekMeaning}
                                    </p>
                                </div>

                                {isMastered && (
                                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Right Area: Selected Topic Details & Quiz */}
                <div className="lg:col-span-8 space-y-6 bg-gray-50/50 dark:bg-gray-800/30 p-6 rounded-3xl border border-gray-100 dark:border-gray-800">
                    {selectedTopic ? (
                        <>
                            {/* Topic Title & Formula Banner */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                                        {selectedTopic.category} • {selectedTopic.level}
                                    </span>
                                    <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-lg font-medium">
                                        🎯 {selectedTopic.ieltsRelevance}
                                    </span>
                                </div>
                                <h3 className="text-xl font-black text-gray-900 dark:text-white">
                                    {selectedTopic.title}
                                </h3>
                                <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 p-3 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
                                    🇺🇿 {selectedTopic.uzbekMeaning}
                                </p>
                            </div>

                            {/* Formula / Structure */}
                            <div className="p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-1">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                                    📐 Grammatik Formula & Struktura:
                                </span>
                                <code className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 block break-words">
                                    {selectedTopic.structure}
                                </code>
                            </div>

                            {/* Explanation */}
                            <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
                                <span className="font-bold text-gray-900 dark:text-white block text-sm">
                                    💡 Qoida Izohi:
                                </span>
                                <p>{selectedTopic.explanation}</p>
                            </div>

                            {/* Academic Examples from IELTS */}
                            <div className="space-y-2">
                                <span className="font-bold text-gray-900 dark:text-white block text-xs uppercase tracking-wider">
                                    📑 IELTS Task 1 / Task 2 dan Ilmiy Misollar:
                                </span>
                                <div className="space-y-2">
                                    {selectedTopic.academicExamples.map((ex, idx) => (
                                        <div key={idx} className="p-3 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-md">
                                                    {ex.context}
                                                </span>
                                                <span className="text-xs font-bold text-gray-900 dark:text-white">
                                                    "{ex.sentence}"
                                                </span>
                                            </div>
                                            <p className="text-[11px] text-gray-500 dark:text-gray-400 pl-2 border-l-2 border-indigo-400">
                                                Tarjimasi: {ex.translation}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Common Mistakes */}
                            {selectedTopic.commonMistakes.length > 0 && (
                                <div className="space-y-2">
                                    <span className="font-bold text-rose-600 dark:text-rose-400 block text-xs uppercase tracking-wider flex items-center gap-1.5">
                                        <AlertCircle size={14} /> Eng Ko'p Uchraydigan Xato (Common Mistake):
                                    </span>
                                    {selectedTopic.commonMistakes.map((m, idx) => (
                                        <div key={idx} className="p-3 bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 rounded-2xl space-y-1 text-xs">
                                            <div className="text-rose-600 dark:text-rose-400 line-through">❌ {m.incorrect}</div>
                                            <div className="text-emerald-600 dark:text-emerald-400 font-bold">✅ {m.correct}</div>
                                            <div className="text-[11px] text-gray-600 dark:text-gray-400 pt-1 border-t border-rose-200/40">{m.explanation}</div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Interactive Mini-Quiz */}
                            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-black text-gray-900 dark:text-white flex items-center gap-1.5">
                                        <Sparkles size={16} className="text-amber-500" />
                                        <span>Amaliy Mini-Test (Knowledge Check)</span>
                                    </h4>
                                    <span className="text-xs text-amber-500 font-bold">
                                        +25 XP har bir to'g'ri javobga
                                    </span>
                                </div>

                                {selectedTopic.quizQuestions.map((q, qIdx) => {
                                    const userChoice = selectedAnswers[qIdx];
                                    const isCorrect = userChoice === q.correctAnswer;

                                    return (
                                        <div key={qIdx} className="p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-3">
                                            <p className="text-xs font-bold text-gray-900 dark:text-white">
                                                {qIdx + 1}. {q.question}
                                            </p>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                {q.options.map((opt, optIdx) => {
                                                    let btnClass = "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300";
                                                    
                                                    if (quizSubmitted) {
                                                        if (opt === q.correctAnswer) {
                                                            btnClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold";
                                                        } else if (userChoice === opt) {
                                                            btnClass = "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 font-bold";
                                                        }
                                                    } else if (userChoice === opt) {
                                                        btnClass = "border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-bold";
                                                    }

                                                    return (
                                                        <button
                                                            key={optIdx}
                                                            onClick={() => handleAnswerSelect(qIdx, opt)}
                                                            className={`p-2.5 rounded-xl border text-left text-xs transition-all ${btnClass}`}
                                                        >
                                                            {opt}
                                                        </button>
                                                    );
                                                })}
                                            </div>

                                            {quizSubmitted && (
                                                <div className={`p-2.5 rounded-xl text-xs ${isCorrect ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300' : 'bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300'}`}>
                                                    <span className="font-bold">{isCorrect ? '✅ To\'g\'ri!' : '❌ Xato!'}</span> {q.explanation}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}

                                {/* Actions Bar */}
                                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                                    {!quizSubmitted ? (
                                        <button
                                            onClick={handleQuizSubmit}
                                            disabled={Object.keys(selectedAnswers).length < selectedTopic.quizQuestions.length}
                                            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold rounded-2xl shadow-md transition-all"
                                        >
                                            Javoblarni Tekshirish 🎯
                                        </button>
                                    ) : (
                                        <div className="flex flex-wrap items-center gap-3 w-full justify-between">
                                            <button
                                                onClick={handleConvertMistakesToFlashcards}
                                                disabled={isSavingCards}
                                                className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs font-bold rounded-2xl shadow-md flex items-center gap-1.5 transition-all"
                                            >
                                                <PlusCircle size={15} />
                                                <span>Fleshkartaga Aylantirish (Anki SRS)</span>
                                            </button>

                                            <button
                                                onClick={() => {
                                                    setSelectedAnswers({});
                                                    setQuizSubmitted(false);
                                                }}
                                                className="px-4 py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold rounded-2xl hover:bg-gray-300 transition-all"
                                            >
                                                Qayta Topshirish 🔄
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="py-20 text-center text-gray-400">
                            Mavzuni tanlang
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
