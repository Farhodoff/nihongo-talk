import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Flame,
  Sparkles,
  Award,
  Volume2,
  CheckCircle2,
  XCircle,
  RotateCw,
  ArrowRight,
  ExternalLink,
  BookOpen,
  MessageSquare,
  CheckSquare,
  ChevronRight,
} from 'lucide-react';
import { useTelegramWebApp } from '../hooks/useTelegramWebApp';
import { useSEO } from '../hooks/useSEO';
import { useGamificationStore, useFlashcardStore, useAuthStore } from '../stores';

interface MiniQuizQuestion {
  id: number;
  question: string;
  romaji?: string;
  meaning: string;
  options: string[];
  correct: number;
  explanation: string;
}

const TWA_QUIZ_QUESTIONS: MiniQuizQuestion[] = [
  {
    id: 1,
    question: '毎朝、パン _____ 食べます。',
    romaji: 'Maiasa, pan _____ tabemasu.',
    meaning: 'Har kuni ertalab non yeyman.',
    options: ['を (o)', 'に (ni)', 'で (de)', 'が (ga)'],
    correct: 0,
    explanation: "Harakatning vositasiz ob'ekti (non) bilan har doim 'を' yuklamasi ishlatiladi.",
  },
  {
    id: 2,
    question: '学校 _____ バスで行きます。',
    romaji: 'Gakkou _____ basu de ikimasu.',
    meaning: 'Maktabga avtobus bilan boraman.',
    options: ['へ (e)', 'を (o)', 'と (to)', 'から (kara)'],
    correct: 0,
    explanation: "Harakat yo'nalishi va manzil uchun 'へ (e)' yoki 'に (ni)' qo'llaniladi.",
  },
  {
    id: 3,
    question: "「約束」ning o'qilishi qanday?",
    romaji: "Ushbu kanji so'zini to'g'ri o'qing:",
    meaning: "Ma'nosi: Va'da / Kelishuv",
    options: [
      'やくそく (yakusoku)',
      'あんない (annai)',
      'しんぱい (shinpai)',
      'れんらく (renraku)',
    ],
    correct: 0,
    explanation:
      "「約束」 so'zi 'yakusoku' deb o'qiladi va 'va'da/kelishuv' degan ma'noni bildiradi.",
  },
  {
    id: 4,
    question: '昨日、友達 _____ 会いました。',
    romaji: 'Kinou, tomodachi _____ aimashita.',
    meaning: "Kecha do'stim bilan uchrashdim.",
    options: ['に (ni)', 'を (o)', 'で (de)', 'へ (e)'],
    correct: 0,
    explanation: "Yapon tilida 'uchrashmoq' (会う - au) fe'li 'に' yuklamasi bilan ishlatiladi.",
  },
  {
    id: 5,
    question: '日本へ行く _____、お金をためています。',
    romaji: 'Nihon e iku _____, okane o tamete imasu.',
    meaning: "Yaponiyaga borish maqsadida pul yig'yapman.",
    options: ['ために (tameni)', 'ように (youni)', 'から (kara)', 'のに (noni)'],
    correct: 0,
    explanation:
      "Iroda va aniq maqsadni ifodalash uchun fe'lning oddiy shakli + 'ために' ishlatiladi.",
  },
];

const DEFAULT_TWA_FLASHCARDS = [
  { id: '1', front: 'こんにちは', romaji: 'Konnichiwa', back: 'Assalomu alaykum / Xayrli kun' },
  { id: '2', front: 'ありがとう', romaji: 'Arigatou', back: 'Rahmat / Tashakkur' },
  { id: '3', front: 'すみません', romaji: 'Sumimasen', back: "Kechirasiz / Uzr so'rayman" },
  { id: '4', front: 'いくらですか', romaji: 'Ikura desu ka?', back: 'Bu qancha turadi?' },
  {
    id: '5',
    front: '駅はどこですか',
    romaji: 'Eki wa doko desu ka?',
    back: 'Bekat qayerda joylashgan?',
  },
  {
    id: '6',
    front: '日本語を勉強しています',
    romaji: 'Nihongo o benkyou shite imasu',
    back: "Yapon tilini o'rganyapman",
  },
];

export const TelegramMiniAppPage: React.FC = () => {
  useSEO({
    title: 'Telegram Mini App — Yapon Tili Mashqlari',
    description:
      "Telegram ichida to'g'ridan-to'g'ri yapon tili fleshkartalari, mini-quiz va AI speaking mashqlari.",
    canonical: '/twa',
    keywords:
      'telegram yapon tili, telegram bot yapon tili, nihongo talk telegram mini app, TWA japanese',
  });

  const navigate = useNavigate();
  const { user: tgUser, initData, haptics, isTwa } = useTelegramWebApp();
  const { totalXp, level, currentStreak, awardXP } = useGamificationStore();
  const { flashcards } = useFlashcardStore();
  const { setUser } = useAuthStore();

  const [activeTab, setActiveTab] = useState<'flashcards' | 'quiz' | 'speaking' | 'tasks'>(
    'flashcards',
  );

  // Flashcards state
  const cardsList =
    flashcards.length > 0
      ? flashcards.map((c) => ({ id: c.id, front: c.front, romaji: '', back: c.back }))
      : DEFAULT_TWA_FLASHCARDS;
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);

  // Quiz state
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Tasks state
  const [tasksCompleted, setTasksCompleted] = useState<Record<string, boolean>>({
    task1: false,
    task2: false,
    task3: false,
  });

  // Auto-authenticate with backend TWA endpoint
  useEffect(() => {
    if (initData) {
      const endpoint =
        typeof window !== 'undefined' && window.location?.origin
          ? `${window.location.origin}/api/telegram/auth-twa`
          : '/api/telegram/auth-twa';

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ initData }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.ok && data.userId) {
            setUser({
              id: data.userId,
              email: `tg_${data.telegramUser?.id || 'guest'}@nihontalk.app`,
              user_metadata: {
                name: data.telegramUser?.firstName || 'Telegram User',
                username: data.telegramUser?.username,
              },
              app_metadata: {},
              aud: 'authenticated',
              created_at: new Date().toISOString(),
            } as any);
          }
        })
        .catch((err) => console.warn('TWA Auth background sync failed:', err));
    }
  }, [initData, setUser]);

  // Audio helper
  const speakWord = (text: string) => {
    haptics.impact('light');
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Flashcard interactions
  const handleFlipCard = () => {
    haptics.impact('light');
    setIsFlipped((prev) => !prev);
  };

  const handleNextCard = (rating: 'hard' | 'good' | 'easy') => {
    if (rating === 'easy') {
      haptics.notification('success');
      awardXP(15);
    } else if (rating === 'good') {
      haptics.impact('medium');
      awardXP(10);
    } else {
      haptics.notification('warning');
      awardXP(5);
    }

    setReviewedCount((prev) => prev + 1);
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % cardsList.length);
  };

  // Quiz interactions
  const handleSelectQuizOption = (optIdx: number) => {
    if (selectedOption !== null) return; // already answered
    setSelectedOption(optIdx);

    const currentQ = TWA_QUIZ_QUESTIONS[quizIndex];
    if (optIdx === currentQ.correct) {
      haptics.notification('success');
      setQuizScore((prev) => prev + 1);
      awardXP(20);
    } else {
      haptics.notification('error');
    }
  };

  const handleNextQuizQuestion = () => {
    haptics.impact('medium');
    setSelectedOption(null);
    if (quizIndex + 1 < TWA_QUIZ_QUESTIONS.length) {
      setQuizIndex((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    haptics.impact('medium');
    setQuizIndex(0);
    setSelectedOption(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  // Task toggle
  const handleToggleTask = (taskId: string) => {
    haptics.impact('light');
    setTasksCompleted((prev) => {
      const nextState = !prev[taskId];
      if (nextState) awardXP(25);
      return { ...prev, [taskId]: nextState };
    });
  };

  const currentCard = cardsList[currentCardIndex];
  const currentQuiz = TWA_QUIZ_QUESTIONS[quizIndex];

  return (
    <div className="mx-auto flex min-h-screen max-w-md select-none flex-col bg-background p-4 pb-20 text-foreground">
      {/* Top Telegram Native Header */}
      <header className="mb-4 flex items-center justify-between border-b border-border/60 pb-3.5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-rose-500 to-indigo-600 text-sm font-black text-white shadow-md">
            {tgUser?.first_name ? tgUser.first_name[0].toUpperCase() : 'N'}
          </div>
          <div>
            <h1 className="flex items-center gap-1.5 text-sm font-black tracking-tight text-foreground">
              <span>{tgUser?.first_name || "O'quvchi"}</span>
              {isTwa && (
                <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[10px] font-bold text-sky-500">
                  Telegram
                </span>
              )}
            </h1>
            <p className="text-[11px] font-medium text-muted-foreground">Nihon Talk Mini App</p>
          </div>
        </div>

        {/* Gamification Stats */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1 rounded-xl border border-rose-500/20 bg-rose-500/10 px-2 py-1 text-[11px] font-black text-rose-500">
            <Award size={13} />
            <span>Lvl {level}</span>
          </div>
          <div className="flex items-center gap-1 rounded-xl border border-amber-500/20 bg-amber-500/10 px-2 py-1 text-[11px] font-black text-amber-500">
            <Flame size={13} className="fill-amber-500" />
            <span>{currentStreak}d</span>
          </div>
          <div className="flex items-center gap-1 rounded-xl border border-indigo-500/20 bg-indigo-500/10 px-2 py-1 text-[11px] font-black text-indigo-400">
            <Sparkles size={12} />
            <span>{totalXp}</span>
          </div>
        </div>
      </header>

      {/* Tabs Navigation Bar */}
      <nav className="mb-4 grid grid-cols-4 gap-1.5 rounded-2xl border border-border/60 bg-muted/50 p-1 text-xs font-bold">
        <button
          onClick={() => {
            haptics.selection();
            setActiveTab('flashcards');
          }}
          className={`flex flex-col items-center gap-1 rounded-xl py-2 transition-all ${
            activeTab === 'flashcards'
              ? 'border border-border/50 bg-background text-rose-500 shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <BookOpen size={16} />
          <span className="text-[10px]">Kartalar</span>
        </button>

        <button
          onClick={() => {
            haptics.selection();
            setActiveTab('quiz');
          }}
          className={`flex flex-col items-center gap-1 rounded-xl py-2 transition-all ${
            activeTab === 'quiz'
              ? 'border border-border/50 bg-background text-indigo-500 shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Award size={16} />
          <span className="text-[10px]">Mini-Quiz</span>
        </button>

        <button
          onClick={() => {
            haptics.selection();
            setActiveTab('speaking');
          }}
          className={`flex flex-col items-center gap-1 rounded-xl py-2 transition-all ${
            activeTab === 'speaking'
              ? 'border border-border/50 bg-background text-emerald-500 shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <MessageSquare size={16} />
          <span className="text-[10px]">Speaking</span>
        </button>

        <button
          onClick={() => {
            haptics.selection();
            setActiveTab('tasks');
          }}
          className={`flex flex-col items-center gap-1 rounded-xl py-2 transition-all ${
            activeTab === 'tasks'
              ? 'border border-border/50 bg-background text-amber-500 shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <CheckSquare size={16} />
          <span className="text-[10px]">Vazifalar</span>
        </button>
      </nav>

      {/* TAB 1: FLASHCARDS */}
      {activeTab === 'flashcards' && (
        <div className="flex flex-1 flex-col justify-between space-y-4">
          <div className="flex items-center justify-between px-1 text-xs font-semibold text-muted-foreground">
            <span>
              Fleshkarta: {currentCardIndex + 1} / {cardsList.length}
            </span>
            <span>Takrorlandi: {reviewedCount} ta</span>
          </div>

          {/* Interactive Card */}
          <div
            onClick={handleFlipCard}
            className="relative flex min-h-[260px] cursor-pointer flex-col items-center justify-center rounded-3xl border border-border/80 bg-card p-6 text-center shadow-xl transition-all active:scale-[0.99]"
          >
            <div className="absolute right-4 top-4 flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speakWord(currentCard.front);
                }}
                className="rounded-xl bg-muted/60 p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                title="Ovozni tinglash"
              >
                <Volume2 size={18} />
              </button>
            </div>

            {!isFlipped ? (
              <div className="space-y-3">
                <div className="font-serif text-3xl font-black text-foreground sm:text-4xl">
                  {currentCard.front}
                </div>
                {currentCard.romaji && (
                  <div className="font-mono text-xs font-medium text-rose-500">
                    {currentCard.romaji}
                  </div>
                )}
                <div className="flex items-center justify-center gap-1 pt-4 text-[11px] text-muted-foreground">
                  <RotateCw size={12} /> Tarjimani ko'rish uchun bosing
                </div>
              </div>
            ) : (
              <div className="space-y-3 animate-in fade-in zoom-in-95">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  O'zbekcha Ma'nosi:
                </div>
                <div className="whitespace-pre-wrap text-xl font-black text-emerald-500 sm:text-2xl">
                  {currentCard.back}
                </div>
                <div className="pt-2 font-serif text-xs text-muted-foreground">
                  {currentCard.front}
                </div>
              </div>
            )}
          </div>

          {/* Rating Buttons */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            <button
              onClick={() => handleNextCard('hard')}
              className="rounded-2xl border border-rose-500/30 bg-rose-500/10 py-3 text-xs font-black text-rose-500 transition-all hover:bg-rose-500/20 active:scale-95"
            >
              🔴 Qiyin
            </button>
            <button
              onClick={() => handleNextCard('good')}
              className="rounded-2xl border border-amber-500/30 bg-amber-500/10 py-3 text-xs font-black text-amber-500 transition-all hover:bg-amber-500/20 active:scale-95"
            >
              🟡 Yaxshi
            </button>
            <button
              onClick={() => handleNextCard('easy')}
              className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 py-3 text-xs font-black text-emerald-500 transition-all hover:bg-emerald-500/20 active:scale-95"
            >
              🟢 Oson
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: MINI-QUIZ */}
      {activeTab === 'quiz' && (
        <div className="flex flex-1 flex-col justify-between space-y-4">
          {!quizFinished ? (
            <>
              <div className="flex items-center justify-between px-1 text-xs font-semibold text-muted-foreground">
                <span>
                  Savol: {quizIndex + 1} / {TWA_QUIZ_QUESTIONS.length}
                </span>
                <span className="font-bold text-indigo-400">Ball: {quizScore}</span>
              </div>

              <div className="space-y-3 rounded-3xl border border-border/80 bg-card p-5 shadow-lg">
                <div className="font-serif text-base font-black leading-relaxed text-foreground">
                  {currentQuiz.question}
                </div>
                {currentQuiz.romaji && (
                  <div className="font-mono text-xs text-muted-foreground">
                    {currentQuiz.romaji}
                  </div>
                )}
                <div className="text-xs font-medium text-indigo-400">{currentQuiz.meaning}</div>
              </div>

              {/* Options */}
              <div className="space-y-2">
                {currentQuiz.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQuiz.correct;

                  let btnStyle = 'bg-muted/40 border-border text-foreground hover:bg-muted';
                  if (selectedOption !== null) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-500 font-black';
                    } else if (isSelected) {
                      btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-500 font-black';
                    } else {
                      btnStyle = 'opacity-40 border-border text-muted-foreground';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectQuizOption(idx)}
                      disabled={selectedOption !== null}
                      className={`flex w-full items-center justify-between rounded-2xl border p-3 text-left text-xs font-bold transition-all ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {selectedOption !== null && isCorrect && (
                        <CheckCircle2 size={16} className="text-emerald-500" />
                      )}
                      {selectedOption !== null && isSelected && !isCorrect && (
                        <XCircle size={16} className="text-rose-500" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next */}
              {selectedOption !== null && (
                <div className="space-y-3 rounded-2xl border border-border/70 bg-muted/40 p-4 animate-in fade-in">
                  <p className="text-xs leading-relaxed text-foreground">
                    💡 <b>Izoh:</b> {currentQuiz.explanation}
                  </p>
                  <button
                    onClick={handleNextQuizQuestion}
                    className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-indigo-600 py-3 text-xs font-black text-white shadow-md transition-all hover:bg-indigo-700"
                  >
                    <span>Keyingi savol</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="space-y-4 rounded-3xl border border-border bg-card p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                <Award size={36} />
              </div>
              <h2 className="text-xl font-black text-foreground">Quiz Yakunlandi! 🎉</h2>
              <div className="font-mono text-3xl font-black text-indigo-400">
                {quizScore} / {TWA_QUIZ_QUESTIONS.length}
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Ajoyib natija! Kunlik mini-quiz sizga grammatika va so'zlarni muntazam
                mustahkamlashga yordam beradi.
              </p>
              <button
                onClick={handleRestartQuiz}
                className="flex w-full items-center justify-center gap-1.5 rounded-2xl bg-indigo-600 py-3 text-xs font-black text-white shadow-md transition-all hover:bg-indigo-700"
              >
                <RotateCw size={14} />
                <span>Qayta topshirish</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: SPEAKING SPRINT */}
      {activeTab === 'speaking' && (
        <div className="flex-1 space-y-3">
          <div className="px-1 text-xs font-semibold text-muted-foreground">
            Kundalik 10 daqiqalik hayotiy ssenariylar:
          </div>

          <div className="space-y-2.5">
            {[
              {
                id: 'konbini_shopping',
                title: '🏪 Kombinida xarid qilish',
                level: 'JLPT N5',
                desc: "Bento isitish, xalta va to'lov muloqoti",
              },
              {
                id: 'tokyo_train_ticket',
                title: '🚇 Tokioda metro chiptasi',
                level: 'JLPT N4',
                desc: "Chipta xarid qilish, yo'nalish va transfer",
              },
              {
                id: 'fudousan_apartment_rental',
                title: '🏢 Kvartira ijarasi',
                level: 'JLPT N3',
                desc: "Byudjet, shikikin/reikin va xona ko'rish",
              },
              {
                id: 'baito_job_interview',
                title: '💼 Ish suhbati (Mensetsu)',
                level: 'JLPT N2',
                desc: 'Arubaito intervyusi, tajriba va keigo',
              },
            ].map((sc) => (
              <div
                key={sc.id}
                onClick={() => {
                  haptics.impact('medium');
                  navigate(`/speaking-coach?scenario=${sc.id}&lang=ja`);
                }}
                className="flex cursor-pointer items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-sm transition-all hover:border-emerald-500/40 active:scale-[0.99]"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-foreground">{sc.title}</span>
                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-extrabold text-emerald-500">
                      {sc.level}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">{sc.desc}</p>
                </div>
                <ChevronRight size={18} className="text-muted-foreground" />
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                haptics.impact('medium');
                navigate('/speaking-coach?lang=ja');
              }}
              className="active:scale-98 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3.5 text-xs font-black text-white shadow-lg shadow-emerald-500/20 transition-all"
            >
              <MessageSquare size={16} />
              <span>AI Coach bilan Jonli Suhbatni Boshlash</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB 4: TASKS & HABIT */}
      {activeTab === 'tasks' && (
        <div className="flex-1 space-y-4">
          <div className="px-1 text-xs font-semibold text-muted-foreground">
            Bugungi reja & odat shakllantirish:
          </div>

          <div className="space-y-2.5">
            {[
              { id: 'task1', text: '10 daqiqa Speaking mashqi', xp: 25 },
              { id: 'task2', text: 'Bugungi SRS fleshkartalarini takrorlash', xp: 25 },
              { id: 'task3', text: '1 ta JLPT grammatika / kanji testi', xp: 25 },
            ].map((t) => (
              <div
                key={t.id}
                onClick={() => handleToggleTask(t.id)}
                className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition-all ${
                  tasksCompleted[t.id]
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-foreground'
                    : 'border-border/80 bg-card text-foreground hover:bg-muted/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-lg border ${
                      tasksCompleted[t.id]
                        ? 'border-emerald-500 bg-emerald-500 text-white'
                        : 'border-muted-foreground'
                    }`}
                  >
                    {tasksCompleted[t.id] && <CheckCircle2 size={14} />}
                  </div>
                  <span
                    className={`text-xs font-bold ${tasksCompleted[t.id] ? 'text-muted-foreground line-through' : ''}`}
                  >
                    {t.text}
                  </span>
                </div>
                <span className="text-[11px] font-black text-amber-500">+{t.xp} XP</span>
              </div>
            ))}
          </div>

          {/* Telegram Reminder Info */}
          <div className="space-y-1.5 rounded-2xl border border-sky-500/30 bg-sky-500/10 p-4 text-xs text-sky-400">
            <div className="flex items-center gap-1.5 font-bold">
              <span>🔔 Telegram Bot Eslatmalari Faol</span>
            </div>
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              Bot har kuni soat 20:00 da o'quv rejangiz va takrorlanishi kerak bo'lgan so'zlarni
              eslatib turadi.
            </p>
          </div>
        </div>
      )}

      {/* Bottom Action: Open Full Web Platform */}
      <footer className="border-t border-border/50 pt-4 text-center">
        <button
          onClick={() => {
            haptics.impact('light');
            navigate('/jlpt');
          }}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>To'liq veb platformaga o'tish</span>
          <ExternalLink size={13} />
        </button>
      </footer>
    </div>
  );
};

export default TelegramMiniAppPage;
