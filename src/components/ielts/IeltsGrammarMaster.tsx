import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Sparkles,
  Search,
  Volume2,
  CheckCircle2,
  Flame,
  Plus,
  Check,
  ArrowRight,
  BookCheck,
} from 'lucide-react';
import type { IeltsGrammarTopic } from '../../data/ielts/ielts_grammar_data';
import { useGrammarLessons } from '../../hooks/useGrammarLessons';
import { speakText } from '../../utils/audioTts';
import { useStudyData } from '../../context/StudyPlannerContext';
import {
  useEnglishGrammarMastery,
  GrammarMasteryStatus,
} from '../../hooks/useEnglishGrammarMastery';
import { toast } from '../../hooks/use-toast';
import { getOrEnsureLanguageSubject } from '../../utils/subjectResolver';

export const IeltsGrammarMaster: React.FC = () => {
  const { addFlashcardsBatch, awardXP, subjects, addSubject, addSession } = useStudyData();
  const { topics: rawTopics } = useGrammarLessons('en');
  const { getItemStatus, setItemStatus, getStatsForLevel } = useEnglishGrammarMastery();

  const [activeTab, setActiveTab] = useState<'grammar' | 'quiz'>('grammar');
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1'>(
    'A1',
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | GrammarMasteryStatus>('ALL');
  const [fallbackTopics, setFallbackTopics] = useState<IeltsGrammarTopic[]>([]);
  const [isLoadingFallback, setIsLoadingFallback] = useState(true);

  useEffect(() => {
    const loadDb = async () => {
      try {
        const module = await import('../../data/ielts/ielts_grammar_data');
        setFallbackTopics(module.IELTS_GRAMMAR_DATABASE);
      } catch (err) {
        console.error('Failed to load IELTS grammar data', err);
      } finally {
        setIsLoadingFallback(false);
      }
    };
    loadDb();
  }, []);

  // Saved Flashcard Items Notification State
  const [savedCardIds, setSavedCardIds] = useState<string[]>([]);

  // Quiz State
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [missedQuestions, setMissedQuestions] = useState<{ topic: IeltsGrammarTopic; q: any }[]>(
    [],
  );

  // Use local comprehensive database if hook is still loading or for instant response
  const topics: IeltsGrammarTopic[] = rawTopics.length > 0 ? rawTopics : fallbackTopics;

  if (isLoadingFallback && rawTopics.length === 0) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
      </div>
    );
  }

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
          easeFactor: 2.5,
        },
      ]);
      setSavedCardIds((prev) => [...prev, topic.id]);
      toast({
        title: '⚡ Fleshkarta Yaratildi!',
        description: `"${topic.title}" Anki SM-2 takrorlash tizimingizga qo'shildi.`,
      });
    } catch (e) {
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: 'Fleshkartani saqlashda xato yuz berdi.',
      });
    }
  };

  // Filter Topics
  const filteredTopics = topics.filter((item) => {
    const matchesLevel =
      selectedLevel === 'ALL' ||
      item.level === selectedLevel ||
      (selectedLevel === 'A1' && item.level === 'A1-A2') ||
      (selectedLevel === 'A2' && item.level === 'A1-A2') ||
      (selectedLevel === 'B1' && item.level === 'B1-B2') ||
      (selectedLevel === 'B2' && item.level === 'B1-B2');

    const matchesQuery =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.uzbekMeaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.explanation.toLowerCase().includes(searchQuery.toLowerCase());

    const itemStatus = getItemStatus(item.id);
    const matchesStatus = statusFilter === 'ALL' || itemStatus === statusFilter;

    return matchesLevel && matchesQuery && matchesStatus;
  });

  // Level Stats for Progress Bar
  const currentLevelItems =
    selectedLevel === 'ALL'
      ? topics
      : topics.filter(
          (i) => i.level === selectedLevel || (selectedLevel === 'A1' && i.level === 'A1-A2'),
        );
  const levelStats = getStatsForLevel(currentLevelItems);

  // Compile all questions from currently selected level
  const allQuizPool = currentLevelItems.flatMap((topic) =>
    topic.quizQuestions.map((q) => ({ topic, q })),
  );

  const handleAnswerQuiz = (option: string) => {
    if (selectedOption !== null) return;
    setSelectedOption(option);
    const currentItem = allQuizPool[quizIndex];
    if (!currentItem) return;

    if (option === currentItem.q.correctAnswer) {
      setScore((prev) => prev + 1);
      setItemStatus(currentItem.topic.id, 'mastered');
    } else {
      setMissedQuestions((prev) => [...prev, currentItem]);
      setItemStatus(currentItem.topic.id, 'hard');
    }
  };

  const handleNextQuiz = async () => {
    setSelectedOption(null);
    if (quizIndex + 1 < allQuizPool.length) {
      setQuizIndex((prev) => prev + 1);
    } else {
      setIsQuizCompleted(true);
      if (awardXP && score > 0) {
        await awardXP(score * 25);
      }
      if (addSession) {
        try {
          let engSub = subjects.find(
            (s) =>
              s.name.toLowerCase().includes('english') || s.name.toLowerCase().includes('ielts'),
          );
          await addSession({
            duration: Math.max(3, Math.round(allQuizPool.length * 1.5)),
            type: 'focus',
            completed: true,
            subjectId: engSub?.id || undefined,
            startTime: new Date().toISOString(),
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
      <div className="relative overflow-hidden rounded-3xl border border-blue-800/40 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 p-6 shadow-2xl md:p-8">
        <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300">
              <Sparkles className="h-3.5 w-3.5" /> Rasmiy Darsliklar & Imtihonlar Bazasi
            </div>
            <h1 className="flex items-center gap-3 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              📚 English Grammar Master (Raymond Murphy)
            </h1>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-300">
              A1 dan C1 gacha bo'lgan rasmiy Murphy darsliklari bazasi. Grammatik formulalar, audio
              talaffuzlar, amaliy misollar va Anki Flashcards eksporti!
            </p>
          </div>

          {/* Quick Stats Widget */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 shadow-lg backdrop-blur-md">
            <div className="rounded-xl bg-amber-500/20 p-3 text-amber-400">
              <Flame className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs font-medium text-slate-400">Baza hajmi</div>
              <div className="flex items-center gap-1.5 text-lg font-black text-white">
                <span>{topics.length} Qoida / Unit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Tabs Bar */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto border-t border-slate-800/80 pt-4">
          <button
            onClick={() => setActiveTab('grammar')}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
              activeTab === 'grammar'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white shadow-lg shadow-indigo-600/30'
                : 'border border-slate-800 bg-slate-900/70 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            📖 Grammatika ({topics.length})
          </button>

          <button
            onClick={() => {
              setActiveTab('quiz');
              resetQuiz();
            }}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
              activeTab === 'quiz'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white shadow-lg shadow-indigo-600/30'
                : 'border border-slate-800 bg-slate-900/70 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <Flame className="h-4 w-4 text-amber-400" />⚡ AI Test Generator ({allQuizPool.length}{' '}
            Savol)
          </button>
        </div>
      </div>

      {/* Level & Search Controls (Matching user screenshot 4) */}
      {activeTab === 'grammar' && (
        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-xl backdrop-blur-md">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            {/* Level Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {(['BARCHASI', 'A1', 'A2', 'B1', 'B2', 'C1'] as const).map((lvl) => {
                const levelKey = lvl === 'BARCHASI' ? 'ALL' : lvl;
                const isSelected = selectedLevel === levelKey;
                return (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(levelKey)}
                    className={`rounded-xl px-4 py-1.5 text-xs font-bold transition-all ${
                      isSelected
                        ? 'scale-105 bg-rose-600 text-white shadow-md shadow-rose-600/30'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                    }`}
                  >
                    {lvl}
                  </button>
                );
              })}
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Grammatika, qoida yoki uzbekcha izlash..."
                className="w-full rounded-xl border border-slate-800 bg-slate-950/80 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 transition focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Mastery Filter & Progress Bar */}
          <div className="flex flex-col justify-between gap-3 border-t border-slate-800/80 pt-3 md:flex-row md:items-center">
            {/* Status Filter buttons */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="mr-1 font-medium text-slate-400">Holat:</span>
              {(['ALL', 'mastered', 'learned', 'hard', 'unlearned'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`rounded-lg px-2.5 py-1 font-medium transition ${
                    statusFilter === st
                      ? 'bg-indigo-600 text-white'
                      : 'border border-slate-800 bg-slate-950 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {st === 'ALL'
                    ? 'Barchasi'
                    : st === 'mastered'
                      ? 'Mustahkamlandi'
                      : st === 'learned'
                        ? "O'rganildi"
                        : st === 'hard'
                          ? 'Qiyin'
                          : 'Yangi'}
                </button>
              ))}
            </div>

            {/* Progress Bar Widget */}
            <div className="flex items-center gap-3">
              <div className="text-xs text-slate-400">
                Progress ({selectedLevel}):{' '}
                <span className="font-bold text-emerald-400">{levelStats.progressPercent}%</span> (
                {levelStats.mastered + levelStats.learned}/{levelStats.total})
              </div>
              <div className="h-2.5 w-32 overflow-hidden rounded-full border border-slate-800 bg-slate-950">
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
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredTopics.length === 0 ? (
            <div className="col-span-2 space-y-3 rounded-3xl border border-dashed border-slate-800 bg-slate-900/60 p-12 text-center text-slate-400">
              <BookCheck className="mx-auto h-8 w-8 text-slate-600" />
              <p className="text-sm font-semibold">Mos keluvchi grammatika mavzusi topilmadi.</p>
              <button
                onClick={() => {
                  setSelectedLevel('ALL');
                  setStatusFilter('ALL');
                  setSearchQuery('');
                }}
                className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-indigo-700"
              >
                Filtrlarni tozalash
              </button>
            </div>
          ) : (
            filteredTopics.map((topic) => {
              const status = getItemStatus(topic.id);
              const isExported = savedCardIds.includes(topic.id);

              return (
                <div
                  key={topic.id}
                  className="group relative flex flex-col justify-between space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-indigo-500/50"
                >
                  <div>
                    {/* Header Row: Level Badge, Category, Audio & Flashcards */}
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${
                            topic.level.startsWith('A')
                              ? 'border-emerald-500/30 bg-emerald-500/20 text-emerald-300'
                              : topic.level.startsWith('B')
                                ? 'border-blue-500/30 bg-blue-500/20 text-blue-300'
                                : 'border-purple-500/30 bg-purple-500/20 text-purple-300'
                          }`}
                        >
                          {topic.level} Foundation
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400">
                          {topic.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() =>
                            speakText(topic.title.replace(/Unit \d+:\s*/, ''), 'en-US')
                          }
                          className="rounded-xl bg-slate-800/80 p-2 text-slate-400 transition hover:bg-indigo-600/30 hover:text-indigo-300"
                          title="Inglizcha talaffuz"
                        >
                          <Volume2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleExportToFlashcard(topic)}
                          className={`rounded-xl border p-2 transition ${
                            isExported
                              ? 'border-emerald-500/30 bg-emerald-500/20 text-emerald-300'
                              : 'border-slate-800 bg-slate-800/80 text-slate-400 hover:bg-amber-600/30 hover:text-amber-300'
                          }`}
                          title="Fleshkartaga saqlash"
                        >
                          {isExported ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Plus className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Unit Title & Uzbek meaning */}
                    <h3 className="mb-1 text-lg font-black tracking-tight text-white transition group-hover:text-indigo-300">
                      {topic.title}
                    </h3>
                    <p className="mb-3 text-xs font-semibold text-indigo-400/90">
                      🇺🇿 {topic.uzbekMeaning}
                    </p>

                    {/* Formula / Structure Box */}
                    <div className="mb-3 space-y-1 rounded-xl border border-slate-800/80 bg-slate-950/70 p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                        📐 Grammatik Formula & Struktura:
                      </div>
                      <code className="block break-words font-mono text-xs text-amber-300">
                        {topic.structure}
                      </code>
                    </div>

                    {/* Explanation Box */}
                    <div className="mb-3 space-y-1 rounded-xl border border-slate-800/40 bg-slate-950/40 p-3 text-xs leading-relaxed text-slate-300">
                      <span className="block text-[11px] font-bold text-slate-200">
                        💡 Murphy Qoidasi:
                      </span>
                      <p>{topic.explanation}</p>
                    </div>

                    {/* Example Sentences with individual Audio */}
                    <div className="mb-3 space-y-2">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        📑 Amaliy Misollar (Hayotiy & Akademik):
                      </span>
                      {topic.academicExamples.map((ex, idx) => (
                        <div
                          key={idx}
                          className="space-y-1 rounded-xl border border-slate-800/60 bg-slate-950/50 p-2.5"
                        >
                          <div className="flex items-center justify-between gap-2 text-xs font-semibold text-slate-100">
                            <span>"{ex.sentence}"</span>
                            <button
                              onClick={() => speakText(ex.sentence, 'en-US')}
                              className="shrink-0 rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-indigo-300"
                              title="O'qib berish"
                            >
                              <Volume2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <p className="border-l-2 border-indigo-500 pl-2 text-[11px] text-slate-400">
                            {ex.translation}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Common Mistakes Box */}
                    {topic.commonMistakes.length > 0 && (
                      <div className="mb-3 space-y-1">
                        {topic.commonMistakes.map((m, idx) => (
                          <div
                            key={idx}
                            className="space-y-1 rounded-xl border border-rose-900/40 bg-rose-950/30 p-2.5 text-xs"
                          >
                            <div className="text-rose-400 line-through">❌ {m.incorrect}</div>
                            <div className="font-bold text-emerald-400">✅ {m.correct}</div>
                            <div className="text-[10px] text-slate-400">{m.explanation}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Row: Status Toggles */}
                  <div className="flex items-center justify-between gap-2 border-t border-slate-800/80 pt-3">
                    <span className="text-[10px] font-medium text-slate-500">Holat:</span>
                    <div className="flex items-center gap-1">
                      {(['unlearned', 'hard', 'learned', 'mastered'] as const).map((st) => (
                        <button
                          key={st}
                          onClick={() => setItemStatus(topic.id, st)}
                          className={`rounded-lg px-2 py-0.5 text-[10px] font-bold transition ${
                            status === st
                              ? st === 'mastered'
                                ? 'bg-emerald-600 text-white'
                                : st === 'learned'
                                  ? 'bg-blue-600 text-white'
                                  : st === 'hard'
                                    ? 'bg-amber-600 text-white'
                                    : 'bg-slate-700 text-white'
                              : 'border border-slate-800 bg-slate-950 text-slate-500 hover:text-slate-300'
                          }`}
                        >
                          {st === 'mastered'
                            ? 'Mustahkamlandi'
                            : st === 'learned'
                              ? "O'rganildi"
                              : st === 'hard'
                                ? 'Qiyin'
                                : 'Yangi'}
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
        <div className="mx-auto max-w-2xl space-y-6 rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-md md:p-8">
          {!isQuizCompleted && allQuizPool.length > 0 ? (
            <>
              {/* Quiz Header & Progress */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                    Savol {quizIndex + 1} / {allQuizPool.length}
                  </span>
                  <h3 className="mt-0.5 text-sm font-black text-white">
                    {allQuizPool[quizIndex]?.topic.title}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400">To'plangan ball</span>
                  <div className="text-lg font-black text-emerald-400">
                    {score} / {allQuizPool.length}
                  </div>
                </div>
              </div>

              {/* Question Text */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 text-base font-bold leading-relaxed text-white">
                {allQuizPool[quizIndex]?.q.question}
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-2.5">
                {allQuizPool[quizIndex]?.q.options.map((opt: string, idx: number) => {
                  const isSelected = selectedOption === opt;
                  const isCorrect = opt === allQuizPool[quizIndex]?.q.correctAnswer;

                  let btnClass =
                    'bg-slate-950/70 hover:bg-slate-800 border-slate-800 text-slate-200';
                  if (selectedOption !== null) {
                    if (isCorrect) {
                      btnClass = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold';
                    } else if (isSelected && !isCorrect) {
                      btnClass = 'bg-rose-950/80 border-rose-500 text-rose-300';
                    } else {
                      btnClass = 'bg-slate-950/40 border-slate-900 text-slate-500 opacity-50';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswerQuiz(opt)}
                      disabled={selectedOption !== null}
                      className={`flex w-full items-center justify-between rounded-xl border p-3.5 text-left text-xs font-medium transition ${btnClass}`}
                    >
                      <span>{opt}</span>
                      {selectedOption !== null && isCorrect && (
                        <CheckCircle2 size={16} className="text-emerald-400" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Answer Explanation & Next Button */}
              {selectedOption !== null && (
                <div className="space-y-4 pt-2 animate-in fade-in">
                  <div className="rounded-xl border border-indigo-900/40 bg-indigo-950/40 p-3 text-xs text-indigo-300">
                    💡 <strong>Tushuntirish:</strong> {allQuizPool[quizIndex]?.q.explanation}
                  </div>
                  <button
                    onClick={handleNextQuiz}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-xs font-bold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-700"
                  >
                    <span>Keyingi Savol</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </>
          ) : isQuizCompleted ? (
            <div className="space-y-6 py-6 text-center">
              <div className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/20 p-4 text-emerald-400">
                <Sparkles className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Test Yakunlandi! 🎉</h3>
                <p className="mt-1 text-sm text-slate-300">
                  Siz {allQuizPool.length} ta savoldan <strong>{score}</strong> tasiga to'g'ri javob
                  berdingiz ({Math.round((score / allQuizPool.length) * 100)}%).
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {missedQuestions.length > 0 && (
                  <button
                    onClick={async () => {
                      const subjectId = await getOrEnsureLanguageSubject(
                        subjects,
                        addSubject,
                        'en',
                      );
                      const cards = missedQuestions.map((m) => ({
                        subjectId: subjectId || undefined,
                        front: `[${m.topic.level} Grammar Practice] ${m.topic.title}\n\n❓ ${m.q.question}`,
                        back: `✅ To'g'ri javob: ${m.q.correctAnswer}\n\n💡 Izoh: ${m.q.explanation}\n\n📐 Formula: ${m.topic.structure}`,
                        interval: 1,
                        repetitions: 0,
                        easeFactor: 2.5,
                      }));
                      await addFlashcardsBatch(cards);
                      toast({
                        title: '🎴 Fleshkartalar Saqlandi!',
                        description: `${cards.length} ta xato qilingan savol takrorlash tizimiga qo'shildi.`,
                      });
                    }}
                    className="rounded-xl bg-amber-600 px-6 py-2.5 text-xs font-bold text-white shadow transition hover:bg-amber-700"
                  >
                    Xatolarni Fleshkartaga Saqlash ({missedQuestions.length})
                  </button>
                )}
                <button
                  onClick={resetQuiz}
                  className="rounded-xl bg-indigo-600 px-6 py-2.5 text-xs font-bold text-white shadow transition hover:bg-indigo-700"
                >
                  Qayta topshirish
                </button>
                <button
                  onClick={() => setActiveTab('grammar')}
                  className="rounded-xl bg-slate-800 px-6 py-2.5 text-xs font-bold text-slate-200 transition hover:bg-slate-700"
                >
                  Darslarga qaytish
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-xs text-slate-400">
              Ushbu darajada test savollari topilmadi.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IeltsGrammarMaster;
