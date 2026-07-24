import React, { useState } from 'react';
import { BookOpen, Sparkles, Search, Volume2, CheckCircle2, GraduationCap, Flame } from 'lucide-react';
import { JLPT_GRAMMAR_DATA, JLPT_KANJI_DATA } from '../../data/jlptGrammarKanji';
import { speakText } from '../../utils/audioTts';

export const JlptGrammarKanjiMaster: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'grammar' | 'kanji' | 'quiz'>('grammar');
    const [selectedLevel, setSelectedLevel] = useState<'ALL' | 'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('ALL');
    const [searchQuery, setSearchQuery] = useState('');

    // Quiz State
    const [quizIndex, setQuizIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);

    // Filter Grammar Items
    const filteredGrammar = JLPT_GRAMMAR_DATA.filter(item => {
        const matchesLevel = selectedLevel === 'ALL' || item.level === selectedLevel;
        const matchesQuery = !searchQuery.trim() || 
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            item.meaningUz.toLowerCase().includes(searchQuery.toLowerCase()) || 
            item.romaji.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesLevel && matchesQuery;
    });

    // Filter Kanji Items
    const filteredKanji = JLPT_KANJI_DATA.filter(item => {
        const matchesLevel = selectedLevel === 'ALL' || item.level === selectedLevel;
        const matchesQuery = !searchQuery.trim() || 
            item.kanji.includes(searchQuery) || 
            item.meaningUz.toLowerCase().includes(searchQuery.toLowerCase()) || 
            item.onyomi.toLowerCase().includes(searchQuery.toLowerCase()) || 
            item.kunyomi.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesLevel && matchesQuery;
    });

    // Sample Quiz Questions
    const QUIZ_QUESTIONS = [
        {
            question: "「ここで写真を撮って（　　）いけません。」 Bo'sh joyga mos qo'shimchani tanlang.",
            options: ["は", "が", "に", "を"],
            answer: 0,
            explanation: "〜てはいけません iborasi bajarish taqiqlangan harakatlarni bildiradi."
        },
        {
            question: "「日本へ行った（　　）があります。」 Mos so'zni tanlang.",
            options: ["もの", "こと", "とき", "ところ"],
            answer: 1,
            explanation: "〜たことがあります tajriba yoki o'tgan zamon natijasini bildiradi."
        },
        {
            question: "「日曜日」 so'zidagi 「日」 iyeroglifining to'g'ri o'qilishi qaysi?",
            options: ["にち (nichi)", "つき (tsuki)", "みず (mizu)", "ほん (hon)"],
            answer: 0,
            explanation: "日曜日 (Nichiyoubi) - Yakshanba kungi Onyomi o'qilishi にち."
        }
    ];

    const handleAnswerQuiz = (index: number) => {
        setSelectedOption(index);
        if (index === QUIZ_QUESTIONS[quizIndex].answer) {
            setScore(prev => prev + 1);
        }
    };

    const handleNextQuiz = () => {
        if (quizIndex + 1 < QUIZ_QUESTIONS.length) {
            setQuizIndex(prev => prev + 1);
            setSelectedOption(null);
        } else {
            setIsQuizCompleted(true);
        }
    };

    const handleResetQuiz = () => {
        setQuizIndex(0);
        setSelectedOption(null);
        setScore(0);
        setIsQuizCompleted(false);
    };

    return (
        <div className="bg-card border border-border rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
            {/* Header with Tabs */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border pb-6">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="px-3 py-1 bg-rose-500/10 text-rose-600 dark:text-rose-400 font-extrabold text-xs rounded-full border border-rose-500/20 flex items-center gap-1.5">
                            <Sparkles size={14} /> JLPT N5-N1 MASTER LIBRARY ⛩️
                        </span>
                    </div>
                    <h2 className="text-2xl font-black text-foreground">Grammatika & Kanji Bazasi</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">
                        JLPT barcha darajalari bo'yicha grammatik qoidalar, kanji o'qilishlari va mashqlar
                    </p>
                </div>

                {/* Sub-Tabs */}
                <div className="flex items-center gap-1.5 bg-muted/60 p-1.5 rounded-2xl border border-border">
                    <button
                        onClick={() => setActiveTab('grammar')}
                        className={`px-4 py-2 text-xs font-extrabold rounded-xl transition-all flex items-center gap-1.5 ${
                            activeTab === 'grammar' ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        <BookOpen size={15} /> Grammatika
                    </button>
                    <button
                        onClick={() => setActiveTab('kanji')}
                        className={`px-4 py-2 text-xs font-extrabold rounded-xl transition-all flex items-center gap-1.5 ${
                            activeTab === 'kanji' ? 'bg-purple-600 text-white shadow' : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        ⛩️ Kanji
                    </button>
                    <button
                        onClick={() => setActiveTab('quiz')}
                        className={`px-4 py-2 text-xs font-extrabold rounded-xl transition-all flex items-center gap-1.5 ${
                            activeTab === 'quiz' ? 'bg-amber-500 text-white shadow' : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        ⚡ AI Test
                    </button>
                </div>
            </div>

            {/* Filter Bar (for Grammar & Kanji tabs) */}
            {activeTab !== 'quiz' && (
                <div className="flex flex-wrap items-center justify-between gap-3 bg-muted/40 p-3 rounded-2xl border border-border">
                    {/* Level Selector Buttons */}
                    <div className="flex items-center gap-1.5">
                        <GraduationCap size={16} className="text-rose-500 ml-1" />
                        <span className="text-xs font-extrabold text-muted-foreground mr-1">Daraja:</span>
                        {(['ALL', 'N5', 'N4', 'N3', 'N2', 'N1'] as const).map(lvl => (
                            <button
                                key={lvl}
                                onClick={() => setSelectedLevel(lvl)}
                                className={`px-2.5 py-1 text-xs font-extrabold rounded-lg transition-all ${
                                    selectedLevel === lvl 
                                        ? 'bg-rose-600 text-white shadow-md' 
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                }`}
                            >
                                {lvl}
                            </button>
                        ))}
                    </div>

                    {/* Search Input */}
                    <div className="relative flex-1 min-w-[200px] max-w-md">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder="Qoida, kanji yoki ma'no bo'yicha izlash..."
                            className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-rose-500"
                        />
                    </div>
                </div>
            )}

            {/* TAB 1: GRAMMAR LIST */}
            {activeTab === 'grammar' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredGrammar.map(item => (
                        <div key={item.id} className="bg-card border border-border/80 hover:border-rose-500/50 p-5 rounded-2xl space-y-3 transition-all shadow-sm hover:shadow-md">
                            <div className="flex items-center justify-between">
                                <span className="px-2.5 py-0.5 bg-rose-500/10 text-rose-500 font-black text-[11px] rounded-lg border border-rose-500/20">
                                    JLPT {item.level}
                                </span>
                                <span className="text-xs font-mono text-muted-foreground">{item.structure}</span>
                            </div>

                            <div>
                                <h3 className="text-lg font-black text-foreground flex items-center justify-between">
                                    <span>{item.title}</span>
                                    <button 
                                        onClick={() => speakText(item.title.replace(/〜/g, ''), 'ja-JP')}
                                        className="p-1.5 text-rose-500 hover:bg-rose-500/10 rounded-xl transition-all"
                                        title="Qoidani eshitish"
                                    >
                                        <Volume2 size={16} />
                                    </button>
                                </h3>
                                <p className="text-xs font-extrabold text-rose-600 dark:text-rose-400 mt-1">
                                    🇺🇿 {item.meaningUz}
                                </p>
                            </div>

                            {/* Examples */}
                            <div className="space-y-2 pt-2 border-t border-border/40">
                                <span className="text-[10px] font-bold uppercase text-muted-foreground">Misollar:</span>
                                {item.examples.map((ex, idx) => (
                                    <div key={idx} className="bg-muted/50 p-2.5 rounded-xl text-xs space-y-1 border border-border/40">
                                        <div className="font-extrabold text-foreground flex items-center justify-between">
                                            <span>{ex.ja}</span>
                                            <button 
                                                onClick={() => speakText(ex.ja, 'ja-JP')}
                                                className="p-1 text-muted-foreground hover:text-rose-500"
                                            >
                                                <Volume2 size={13} />
                                            </button>
                                        </div>
                                        <div className="text-[11px] font-mono text-muted-foreground">{ex.romaji}</div>
                                        <div className="text-[11px] text-muted-foreground/90">🇺🇿 {ex.uz}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* TAB 2: KANJI LIST */}
            {activeTab === 'kanji' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredKanji.map(item => (
                        <div key={item.id} className="bg-card border border-border/80 hover:border-purple-500/50 p-5 rounded-2xl space-y-3 transition-all shadow-sm hover:shadow-md">
                            <div className="flex items-center justify-between">
                                <span className="px-2.5 py-0.5 bg-purple-500/10 text-purple-500 font-black text-[11px] rounded-lg border border-purple-500/20">
                                    JLPT {item.level} • {item.strokeCount} chiziq
                                </span>
                                <button 
                                    onClick={() => speakText(item.kanji, 'ja-JP')}
                                    className="p-1 text-purple-500 hover:bg-purple-500/10 rounded-xl"
                                >
                                    <Volume2 size={16} />
                                </button>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-tr from-purple-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-md">
                                    {item.kanji}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h4 className="text-sm font-black text-foreground truncate">{item.meaningUz}</h4>
                                    <div className="text-[11px] text-muted-foreground mt-1">
                                        <b>Onyomi:</b> {item.onyomi}
                                    </div>
                                    <div className="text-[11px] text-muted-foreground">
                                        <b>Kunyomi:</b> {item.kunyomi}
                                    </div>
                                </div>
                            </div>

                            {/* Kanji Vocabulary Examples */}
                            <div className="space-y-1.5 pt-2 border-t border-border/40 text-xs">
                                <span className="text-[10px] font-bold uppercase text-muted-foreground">So'zlar:</span>
                                {item.examples.map((ex, idx) => (
                                    <div key={idx} className="flex items-center justify-between bg-muted/40 px-2.5 py-1.5 rounded-lg">
                                        <span className="font-extrabold text-foreground">{ex.word} <span className="font-normal text-muted-foreground text-[11px]">({ex.reading})</span></span>
                                        <span className="text-muted-foreground text-[11px]">{ex.meaning}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* TAB 3: AI QUIZ GENERATOR */}
            {activeTab === 'quiz' && (
                <div className="max-w-2xl mx-auto bg-card border border-border p-6 md:p-8 rounded-3xl space-y-6 shadow-lg">
                    {!isQuizCompleted ? (
                        <>
                            <div className="flex items-center justify-between border-b border-border pb-4">
                                <span className="text-xs font-black uppercase text-amber-500 tracking-wider">
                                    JLPT Mashq Testi ({quizIndex + 1} / {QUIZ_QUESTIONS.length})
                                </span>
                                <span className="text-xs font-extrabold text-muted-foreground">Ball: {score}</span>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-base font-extrabold text-foreground leading-relaxed">
                                    {QUIZ_QUESTIONS[quizIndex].question}
                                </h3>

                                <div className="space-y-2.5">
                                    {QUIZ_QUESTIONS[quizIndex].options.map((opt, idx) => {
                                        const isSelected = selectedOption === idx;
                                        const isCorrect = idx === QUIZ_QUESTIONS[quizIndex].answer;
                                        let btnStyle = "bg-muted/50 border-border text-foreground hover:bg-muted";

                                        if (selectedOption !== null) {
                                            if (isCorrect) btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-extrabold";
                                            else if (isSelected) btnStyle = "bg-rose-500/20 border-rose-500 text-rose-600 dark:text-rose-400 font-extrabold";
                                        }

                                        return (
                                            <button
                                                key={idx}
                                                disabled={selectedOption !== null}
                                                onClick={() => handleAnswerQuiz(idx)}
                                                className={`w-full p-4 rounded-2xl border text-left text-sm font-bold transition-all flex items-center justify-between ${btnStyle}`}
                                            >
                                                <span>{opt}</span>
                                                {selectedOption !== null && isCorrect && <CheckCircle2 size={18} className="text-emerald-500" />}
                                            </button>
                                        );
                                    })}
                                </div>

                                {selectedOption !== null && (
                                    <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-xs text-amber-600 dark:text-amber-400 font-medium">
                                        💡 <b>Tushuntirish:</b> {QUIZ_QUESTIONS[quizIndex].explanation}
                                    </div>
                                )}
                            </div>

                            <button
                                disabled={selectedOption === null}
                                onClick={handleNextQuiz}
                                className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold rounded-2xl shadow-md transition-all disabled:opacity-40"
                            >
                                {quizIndex + 1 === QUIZ_QUESTIONS.length ? "Natijani Ko'rish" : "Keyingi Savol ➔"}
                            </button>
                        </>
                    ) : (
                        <div className="text-center space-y-5 py-4">
                            <div className="w-20 h-20 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center mx-auto">
                                <Flame size={40} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-foreground">Test Yakunlandi! 🎉</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Siz {QUIZ_QUESTIONS.length} ta savoldan <span className="font-extrabold text-amber-500">{score} ta</span> to'g'ri topdingiz.
                                </p>
                            </div>
                            <button
                                onClick={handleResetQuiz}
                                className="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold rounded-2xl shadow-lg transition-all"
                            >
                                Qayta Topshirish 🔄
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
