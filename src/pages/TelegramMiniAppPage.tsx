import React, { useState, useEffect, useMemo } from 'react';
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
  Layers,
} from 'lucide-react';
import { useTelegramWebApp } from '../hooks/useTelegramWebApp';
import { useSEO } from '../hooks/useSEO';
import { useGamificationStore, useFlashcardStore, useAuthStore } from '../stores';
import { JLPT_MOCK_EXAM_DATA } from '../data/jlptMockExamData';

interface MiniQuizQuestion {
  id: number;
  question: string;
  romaji?: string;
  meaning?: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface MiniCard {
  id: string;
  front: string;
  romaji?: string;
  back: string;
  example?: string;
}

const LEVEL_VOCAB_DECKS: Record<'N5' | 'N4' | 'N3' | 'N2' | 'N1', MiniCard[]> = {
  N5: [
    {
      id: 'n5_1',
      front: 'こんにちは',
      romaji: 'Konnichiwa',
      back: 'Assalomu alaykum / Xayrli kun',
      example: '元気に 挨拶を しましょう。',
    },
    {
      id: 'n5_2',
      front: 'ありがとう',
      romaji: 'Arigatou',
      back: 'Rahmat / Tashakkur',
      example: '手伝ってくれて ありがとう。',
    },
    {
      id: 'n5_3',
      front: '学生',
      romaji: 'Gakusei',
      back: "Talaba, o'quvchi",
      example: 'わたしは 日本語の 学生です。',
    },
    {
      id: 'n5_4',
      front: '先生',
      romaji: 'Sensei',
      back: "O'qituvchi, ustoz",
      example: '田中先生は とても 親切です。',
    },
    {
      id: 'n5_5',
      front: '食べる',
      romaji: 'Taberu',
      back: "Yemoq (fe'l)",
      example: '毎朝 パンを 食べます。',
    },
    { id: 'n5_6', front: '本', romaji: 'Hon', back: 'Kitob', example: '図書館で 本を 読みます。' },
    { id: 'n5_7', front: '水', romaji: 'Mizu', back: 'Suv', example: '冷たい 水を ください。' },
  ],
  N4: [
    {
      id: 'n4_1',
      front: '準備',
      romaji: 'Junbi',
      back: 'Tayyorgarlik',
      example: '旅行の 準備を しました。',
    },
    {
      id: 'n4_2',
      front: '約束',
      romaji: 'Yakusoku',
      back: "Va'da, kelishuv",
      example: '友達と 約束が あります。',
    },
    {
      id: 'n4_3',
      front: '経験',
      romaji: 'Keiken',
      back: 'Tajriba',
      example: '日本へ 行った 経験が あります。',
    },
    {
      id: 'n4_4',
      front: '案内',
      romaji: 'Annai',
      back: "Yo'l ko'rsatish, tanishtiruv",
      example: '町を 案内して くれました。',
    },
    {
      id: 'n4_5',
      front: '故障',
      romaji: 'Koshou',
      back: 'Buzilish, nosozlik',
      example: 'パソコンが 故障しました。',
    },
    {
      id: 'n4_6',
      front: '遠慮',
      romaji: 'Enryo',
      back: 'Iymanmoq, tortinmoq',
      example: 'どうぞ 遠慮しないで ください。',
    },
  ],
  N3: [
    {
      id: 'n3_1',
      front: '意識',
      romaji: 'Ishiki',
      back: 'Ong, tushuncha',
      example: '環境への 意識が 高まっています。',
    },
    {
      id: 'n3_2',
      front: '解決',
      romaji: 'Kaiketsu',
      back: 'Hal qilish, yechim',
      example: '問題を 解決する 方法を 考えます。',
    },
    {
      id: 'n3_3',
      front: '歓迎',
      romaji: 'Kangei',
      back: 'Kutib olish, samimiy qabul',
      example: '新入生を 心から 歓迎します。',
    },
    {
      id: 'n3_4',
      front: '効果',
      romaji: 'Kouka',
      back: "Samara, natija, ta'sir",
      example: 'この 薬は とても 効果が あります。',
    },
    {
      id: 'n3_5',
      front: '状況',
      romaji: 'Joukyou',
      back: 'Vaziyat, holat',
      example: '現在の 状況を 報告してください。',
    },
  ],
  N2: [
    {
      id: 'n2_1',
      front: '把握',
      romaji: 'Haaku',
      back: 'Mohiyatini anglash, tushunib yetish',
      example: '現状を 正確に 把握することが 重要だ。',
    },
    {
      id: 'n2_2',
      front: '柔軟',
      romaji: 'Juunan',
      back: 'Moslashuvchan, egiluvchan',
      example: '変化に 柔軟に 対応する。',
    },
    {
      id: 'n2_3',
      front: '契機',
      romaji: 'Keiki',
      back: 'Turtki, sabab, imkoniyat',
      example: '留学を 契機に 価値観が 変わった。',
    },
    {
      id: 'n2_4',
      front: '徹底',
      romaji: 'Tettei',
      back: "Oxiriga yetkazish, qat'iy amal qilish",
      example: '安全対策を 徹底してください。',
    },
  ],
  N1: [
    {
      id: 'n1_1',
      front: '未曾有',
      romaji: 'Mizou',
      back: "Misli ko'rilmagan, tarixdagi birinchi",
      example: '未曾有の 危機に 直面している。',
    },
    {
      id: 'n1_2',
      front: '示唆',
      romaji: 'Shisa',
      back: "Ishtiboh, ma'noli ishora bermoq",
      example: 'この データは 多くの 示唆を 含んでいる。',
    },
    {
      id: 'n1_3',
      front: '懸念',
      romaji: 'Kenen',
      back: 'Xavotir, andisha',
      example: '景気の 悪化が 懸念されている。',
    },
    {
      id: 'n1_4',
      front: '包括',
      romaji: 'Houkatsu',
      back: 'Qamrab oluvchi, yalpi',
      example: '包括的な 支援策が 求められる。',
    },
  ],
};

// Fallback baseline questions for quick N5 practice
const N5_BASELINE_QUESTIONS: MiniQuizQuestion[] = [
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
  const [selectedLevel, setSelectedLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('N5');
  const [deckSource, setDeckSource] = useState<'jlpt' | 'user'>('jlpt');

  // Flashcards derived from real level or user store
  const cardsList: MiniCard[] = useMemo(() => {
    if (deckSource === 'user' && flashcards.length > 0) {
      return flashcards.map((c) => ({
        id: c.id,
        front: c.front,
        romaji: '',
        back: c.back,
        example: undefined,
      }));
    }
    return LEVEL_VOCAB_DECKS[selectedLevel] || LEVEL_VOCAB_DECKS['N5'];
  }, [selectedLevel, deckSource, flashcards]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);

  // Dynamic Quiz Questions from real JLPT data
  const quizQuestions: MiniQuizQuestion[] = useMemo(() => {
    if (selectedLevel === 'N5') {
      const mockQuestions = (JLPT_MOCK_EXAM_DATA['N5'] || []).map((q, idx) => ({
        id: idx + 10,
        question: q.questionText,
        meaning: q.passageText ? 'Matn savoli' : undefined,
        options: q.options,
        correct: q.correctAnswer,
        explanation: q.explanationUzbek,
      }));
      return [...N5_BASELINE_QUESTIONS, ...mockQuestions];
    }

    const levelData = JLPT_MOCK_EXAM_DATA[selectedLevel] || [];
    return levelData.map((q, idx) => ({
      id: idx + 1,
      question: q.questionText,
      meaning: q.passageText ? 'Kontekst savoli' : undefined,
      options: q.options,
      correct: q.correctAnswer,
      explanation: q.explanationUzbek,
    }));
  }, [selectedLevel]);

  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Reset indices when level changes
  useEffect(() => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setQuizIndex(0);
    setSelectedOption(null);
    setQuizScore(0);
    setQuizFinished(false);
  }, [selectedLevel]);

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
        .catch(() => {});
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
    if (selectedOption !== null) return;
    setSelectedOption(optIdx);

    const currentQ = quizQuestions[quizIndex];
    if (optIdx === currentQ?.correct) {
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
    if (quizIndex + 1 < quizQuestions.length) {
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

  const currentCard = cardsList[currentCardIndex] || cardsList[0];
  const currentQuiz = quizQuestions[quizIndex] || quizQuestions[0];

  return (
    <div className="mx-auto flex min-h-screen max-w-md select-none flex-col bg-background p-4 pb-24 font-sans text-foreground">
      {/* Top Native Header */}
      <header className="mb-3.5 flex items-center justify-between border-b border-border/60 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-rose-500 via-purple-600 to-indigo-600 text-sm font-black text-white shadow-md">
            {tgUser?.first_name ? tgUser.first_name[0].toUpperCase() : 'N'}
          </div>
          <div className="min-w-0">
            <h1 className="flex items-center gap-1.5 truncate text-sm font-black tracking-tight text-foreground">
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
          <div className="flex items-center gap-1 rounded-xl border border-rose-500/20 bg-rose-500/10 px-2.5 py-1 text-[11px] font-black text-rose-500">
            <Award size={13} />
            <span>Lvl {level}</span>
          </div>
          <div className="flex items-center gap-1 rounded-xl border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-[11px] font-black text-amber-500">
            <Flame size={13} className="fill-amber-500" />
            <span>{currentStreak}d</span>
          </div>
          <div className="flex items-center gap-1 rounded-xl border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-[11px] font-black text-indigo-400">
            <Sparkles size={12} />
            <span>{totalXp}</span>
          </div>
        </div>
      </header>

      {/* Level Selector Bar (N5 - N1) */}
      <div className="mb-3.5 flex items-center justify-between gap-1.5 rounded-2xl border border-border/60 bg-muted/40 p-1.5">
        {(['N5', 'N4', 'N3', 'N2', 'N1'] as const).map((lvl) => {
          const isActive = selectedLevel === lvl;
          return (
            <button
              key={lvl}
              onClick={() => {
                haptics.selection();
                setSelectedLevel(lvl);
              }}
              className={`flex-1 rounded-xl py-1.5 text-xs font-black transition-all ${
                isActive
                  ? 'scale-[1.02] bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {lvl}
            </button>
          );
        })}
      </div>

      {/* Main Tabs Navigation */}
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
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-rose-500/10 px-1.5 py-0.5 text-[10px] font-black text-rose-500">
                {selectedLevel}
              </span>
              <span>
                {currentCardIndex + 1} / {cardsList.length}
              </span>
            </div>
            {flashcards.length > 0 && (
              <button
                onClick={() => {
                  haptics.selection();
                  setDeckSource((prev) => (prev === 'jlpt' ? 'user' : 'jlpt'));
                }}
                className="flex items-center gap-1 text-[11px] text-primary hover:underline"
              >
                <Layers size={12} />
                <span>{deckSource === 'jlpt' ? 'Mening kartalarim' : 'JLPT Lug‘ati'}</span>
              </button>
            )}
            <span>Takrorlandi: {reviewedCount} ta</span>
          </div>

          {/* Ergonomic Interactive Card */}
          <div
            onClick={handleFlipCard}
            className="relative flex min-h-[260px] cursor-pointer flex-col items-center justify-center rounded-3xl border border-border/80 bg-card p-6 text-center shadow-xl transition-all active:scale-[0.99]"
          >
            <div className="absolute right-4 top-4 flex items-center gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  speakWord(currentCard.front);
                }}
                className="rounded-xl bg-muted/60 p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:scale-95"
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
                {currentCard.example && (
                  <div className="pt-2 text-xs italic text-muted-foreground">
                    {currentCard.example}
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

          {/* Rating Buttons with Ergonomic Touch Targets */}
          <div className="grid grid-cols-3 gap-2.5 pt-2">
            <button
              onClick={() => handleNextCard('hard')}
              className="min-h-[48px] rounded-2xl border border-rose-500/30 bg-rose-500/10 py-3 text-xs font-black text-rose-500 transition-all hover:bg-rose-500/20 active:scale-95"
            >
              🔴 Qiyin
            </button>
            <button
              onClick={() => handleNextCard('good')}
              className="min-h-[48px] rounded-2xl border border-amber-500/30 bg-amber-500/10 py-3 text-xs font-black text-amber-500 transition-all hover:bg-amber-500/20 active:scale-95"
            >
              🟡 Yaxshi
            </button>
            <button
              onClick={() => handleNextCard('easy')}
              className="min-h-[48px] rounded-2xl border border-emerald-500/30 bg-emerald-500/10 py-3 text-xs font-black text-emerald-500 transition-all hover:bg-emerald-500/20 active:scale-95"
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
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-indigo-500/10 px-1.5 py-0.5 text-[10px] font-black text-indigo-400">
                    {selectedLevel}
                  </span>
                  <span>
                    Savol: {quizIndex + 1} / {quizQuestions.length}
                  </span>
                </div>
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
                {currentQuiz.meaning && (
                  <div className="text-xs font-medium text-indigo-400">{currentQuiz.meaning}</div>
                )}
              </div>

              {/* Options */}
              <div className="space-y-2.5">
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
                      className={`flex min-h-[48px] w-full items-center justify-between rounded-2xl border p-3.5 text-left text-xs font-bold transition-all ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {selectedOption !== null && isCorrect && (
                        <CheckCircle2 size={16} className="ml-2 shrink-0 text-emerald-500" />
                      )}
                      {selectedOption !== null && isSelected && !isCorrect && (
                        <XCircle size={16} className="ml-2 shrink-0 text-rose-500" />
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
                    className="flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-xl bg-indigo-600 py-3 text-xs font-black text-white shadow-md transition-all hover:bg-indigo-700 active:scale-95"
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
                {quizScore} / {quizQuestions.length}
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Ajoyib natija! {selectedLevel} darajasidagi testlar sizga imtihonga tayyorlanishda
                katta yordam beradi.
              </p>
              <button
                onClick={handleRestartQuiz}
                className="flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-2xl bg-indigo-600 py-3 text-xs font-black text-white shadow-md transition-all hover:bg-indigo-700 active:scale-95"
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
              className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3.5 text-xs font-black text-white shadow-lg shadow-emerald-500/20 transition-all active:scale-[0.98]"
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
                className={`flex min-h-[48px] cursor-pointer items-center justify-between rounded-2xl border p-4 transition-all ${
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
