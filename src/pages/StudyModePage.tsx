import { ArrowLeft, CheckCircle2, Copy, Loader2, Volume2, Trash2, Edit3, X } from 'lucide-react';
import React, { useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import { isAdminEmail } from '../utils/admin';
import { Flashcard } from '../types';
import { Rating, Grade, getPreviewIntervals, sortCardsBySRSPriority } from '../utils/srs';
import { speakText } from '../utils/audioTts';
import { toast } from '../hooks/use-toast';
import { PersonalLearningPlanService } from '../services/PersonalLearningPlanService';
import { isFlashcardAnswerCorrect } from '../utils/flashcardMatching';

const StudyModePage: React.FC = () => {
  const { subjectId } = useParams<{ subjectId?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const { user, flashcards, subjects, reviewFlashcard, updateFlashcard, deleteFlashcard, loading } =
    useStudyData();
  const isAdmin = isAdminEmail(user?.email);

  const [queue, setQueue] = useState<Flashcard[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [totalXpEarned, setTotalXpEarned] = useState(0);
  const [accent, setAccent] = useState<'en-GB' | 'en-US' | 'ja-JP'>('en-US');
  const [isQueueInitialized, setIsQueueInitialized] = useState(false);
  const [planTaskCompleted, setPlanTaskCompleted] = useState(false);
  const planTask = (
    location.state as { personalPlanTask?: { planId: string; taskId: string } } | null
  )?.personalPlanTask;

  // Study Mode: 'srs' | 'type'
  const [studyMode, setStudyMode] = useState<'srs' | 'type'>('srs');
  const [typedAnswer, setTypedAnswer] = useState('');
  const [typeResult, setTypeResult] = useState<'correct' | 'incorrect' | null>(null);

  // Admin inline editing state
  const [isEditingCard, setIsEditingCard] = useState(false);
  const [editFront, setEditFront] = useState('');
  const [editBack, setEditBack] = useState('');

  const [allAvailableCards, setAllAvailableCards] = useState<Flashcard[]>([]);
  const [batchLimit, setBatchLimit] = useState<'10' | '25' | '50' | 'all'>('25');

  const currentSubject = subjects.find((s) => s.id === subjectId);

  useEffect(() => {
    if (flashcards.length > 0 && !isQueueInitialized) {
      let targetSet: Flashcard[] = [];
      if (subjectId) {
        const subjectCards = flashcards.filter((c: Flashcard) => c.subjectId === subjectId);
        const due = subjectCards.filter((c: Flashcard) => new Date(c.nextReviewDate) <= new Date());
        targetSet = due.length > 0 ? due : subjectCards;
      } else {
        // Global study mode across all decks / subjects
        const due = flashcards.filter((c: Flashcard) => new Date(c.nextReviewDate) <= new Date());
        targetSet = due.length > 0 ? due : flashcards;
      }
      setAllAvailableCards(targetSet);
      const limitNum = batchLimit === 'all' ? targetSet.length : parseInt(batchLimit, 10);
      const initialQueue = sortCardsBySRSPriority(targetSet).slice(0, limitNum);
      setQueue(initialQueue);
      setIsQueueInitialized(true);
    } else if (flashcards.length === 0 && !loading && !isQueueInitialized) {
      setIsQueueInitialized(true);
    }
  }, [subjectId, flashcards, isQueueInitialized, loading, batchLimit]);

  const handleBatchLimitChange = (newLimit: '10' | '25' | '50' | 'all') => {
    setBatchLimit(newLimit);
    const pool =
      allAvailableCards.length > 0
        ? allAvailableCards
        : subjectId
          ? flashcards.filter((c) => c.subjectId === subjectId)
          : flashcards;
    const limitNum = newLimit === 'all' ? pool.length : parseInt(newLimit, 10);
    const newQueue = sortCardsBySRSPriority(pool).slice(0, limitNum);
    setQueue(newQueue);
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setIsFinished(false);
    setTypeResult(null);
    setTypedAnswer('');
    const actualCount = newQueue.length;
    toast({
      title: '🎯 Sessiya hajmi yangilandi',
      description: `Mashg'ulot uchun ${newLimit === 'all' ? `barcha (${actualCount} ta)` : `${actualCount} ta`} karta belgilandi.`,
    });
  };

  const currentCard = queue[currentCardIndex];

  const completeLinkedPlanTask = async () => {
    if (planTaskCompleted) return;
    const userId = user?.id || 'guest';
    if (planTask?.planId && planTask?.taskId) {
      const updated = await PersonalLearningPlanService.completePlanTask(
        userId,
        planTask.planId,
        planTask.taskId,
      );
      if (updated) setPlanTaskCompleted(true);
      return;
    }
    // Auto-detect active plan's today SRS task if not passed explicitly in location.state
    try {
      const activeGoal = PersonalLearningPlanService.getActiveGoal(userId);
      if (activeGoal) {
        const plan = PersonalLearningPlanService.getLatestWeeklyPlan(userId, activeGoal.id);
        if (plan) {
          const daysOfWeek = [
            'sunday',
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
          ];
          const todayName = daysOfWeek[new Date().getDay()];
          const todayDay = plan.days.find((d) => d.day.toLowerCase() === todayName);
          const srsTask = todayDay?.tasks.find(
            (t) => (t.type === 'srs' || t.sourceType === 'srs') && !t.completed,
          );
          if (srsTask) {
            await PersonalLearningPlanService.completePlanTask(userId, plan.id, srsTask.id);
            setPlanTaskCompleted(true);
          }
        }
      }
    } catch (e) {
      console.warn('Could not auto-complete today SRS task in plan:', e);
    }
  };

  const isJapanese = useMemo(() => {
    if (!currentCard && !currentSubject) return false;
    const frontText = currentCard?.front || '';
    const backText = currentCard?.back || '';
    const subjectTitle = currentSubject?.name || '';
    const subjectType = (currentSubject as any)?.type || '';
    const subjectCategory = (currentSubject as any)?.category || '';

    const hasJapaneseChars =
      /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uffef\u4e00-\u9faf]/.test(
        frontText + backText + subjectTitle,
      );
    const isJlptMeta =
      subjectType.toLowerCase().includes('jlpt') ||
      subjectCategory.toLowerCase().includes('jlpt') ||
      subjectTitle.toLowerCase().includes('jlpt') ||
      subjectTitle.toLowerCase().includes('kanji') ||
      subjectTitle.toLowerCase().includes('yapon');

    return hasJapaneseChars || isJlptMeta;
  }, [currentCard, currentSubject]);

  const handleSpeak = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentCard?.front) {
      speakText(currentCard.front, isJapanese ? 'ja-JP' : accent);
    }
  };

  const handleDeleteCard = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentCard) return;
    if (window.confirm("Admin: Ushbu kartochkani bazadan BUTKUL O'CHIRMOQCHIMISIZ?")) {
      const cardToDeleteId = currentCard.id;
      if (currentCardIndex < queue.length - 1) {
        setQueue((prev) => prev.filter((c) => c.id !== cardToDeleteId));
      } else {
        setQueue((prev) => prev.filter((c) => c.id !== cardToDeleteId));
        setIsFinished(true);
      }
      setIsFlipped(false);
      await deleteFlashcard(cardToDeleteId, true);
      toast({ title: "🗑️ Kartochka bazadan o'chirildi" });
    }
  };

  const handleStartEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentCard) return;
    setEditFront(currentCard.front);
    setEditBack(currentCard.back);
    setIsEditingCard(true);
  };

  const handleSaveEdit = async () => {
    if (!currentCard || !editFront.trim() || !editBack.trim()) return;
    try {
      await updateFlashcard(currentCard.id, {
        front: editFront.trim(),
        back: editBack.trim(),
      });

      // Update local queue state
      setQueue((prev) =>
        prev.map((c, idx) =>
          idx === currentCardIndex ? { ...c, front: editFront.trim(), back: editBack.trim() } : c,
        ),
      );

      setIsEditingCard(false);
      toast({ title: "✅ Kartochka to'g'rilandi va saqlandi" });
    } catch (err) {
      console.error('Failed to edit flashcard:', err);
      toast({
        variant: 'destructive',
        title: '❌ Xatolik',
        description: 'Kartochkani tahrirlashda xatolik yuz berdi.',
      });
    }
  };

  const handleRate = async (grade: Grade) => {
    if (!currentCard || isProcessing) return;
    setIsProcessing(true);

    try {
      await reviewFlashcard(currentCard.id, grade, currentCard);
      setTotalXpEarned((prev) => prev + grade * 2);

      // True Spaced Repetition (SuperMemo): If user failed (AGAIN), re-queue at the end
      const shouldRequeue = grade === Rating.AGAIN;
      if (shouldRequeue) {
        setQueue((prev) => [...prev, currentCard]);
        toast({
          title: "🔄 Karta navbat oxiriga qo'shildi",
          description: "Ushbu so'zni sessiya oxirida yana bir bor takrorlaysiz.",
        });
      }

      if (currentCardIndex < queue.length - 1 || shouldRequeue) {
        setIsFlipped(false);
        setCurrentCardIndex((prev) => prev + 1);
        setTypeResult(null);
        setTypedAnswer('');
      } else {
        await completeLinkedPlanTask();
        setIsFinished(true);
      }
    } catch (err) {
      console.error('Flashcard review error:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center p-20">
        <Loader2 className="animate-spin text-primary" />
      </div>
    );

  if (!loading && flashcards.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center p-6 text-center">
        <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
          <Copy size={48} className="text-primary" />
        </div>
        <h2 className="mb-2 text-2xl font-black text-foreground">Fleshkartalar topilmadi</h2>
        <p className="mb-6 max-w-md text-sm text-muted-foreground">
          O'rganishni boshlash uchun avval lug'at to'plamlaridan karta qo'shing yoki yangi
          fleshkarta yarating.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            onClick={() => navigate('/vocabulary')}
            variant="outline"
            className="rounded-xl px-6 py-2.5 font-bold"
          >
            Lug'atga o'tish
          </Button>
          <Button
            onClick={() => navigate('/flashcards')}
            variant="outline"
            className="rounded-xl px-6 py-2.5 font-bold"
          >
            To'plamlarni ko'rish
          </Button>
          <Button onClick={() => navigate(-1)} className="rounded-xl px-6 py-2.5 font-bold">
            Rejaga qaytish
          </Button>
        </div>
      </div>
    );
  }

  if (isFinished || (queue.length === 0 && !loading && isQueueInitialized)) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-6 p-6 text-center animate-in fade-in">
        <div className="mb-2 rounded-full bg-emerald-500/10 p-4 text-emerald-500">
          <CheckCircle2 size={48} />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-foreground">Sessiya yakunlandi! 🎉</h2>
          <p className="mx-auto max-w-md text-sm text-muted-foreground">
            Barcha {queue.length > 0 ? `${queue.length} ta ` : ''}kartochkalar SuperMemo SM-2
            algoritmi bo'yicha takrorlandi. Keyingi takrorlash sanasi avtomatik belgilandi.
          </p>
          {totalXpEarned > 0 && (
            <p className="pt-1 text-lg font-extrabold text-primary">
              +{totalXpEarned} XP to'pladingiz
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button
            onClick={() => handleBatchLimitChange(batchLimit)}
            className="rounded-xl bg-primary px-6 py-2.5 font-bold text-primary-foreground shadow-md"
          >
            🔄 Yana O'rganish ({batchLimit === 'all' ? 'Barchasi' : `${batchLimit} ta`})
          </Button>
          <Button
            onClick={() => navigate('/vocabulary')}
            variant="outline"
            className="rounded-xl px-6 py-2.5 font-bold"
          >
            Lug'atga o'tish
          </Button>
          <Button
            onClick={() => navigate('/flashcards')}
            variant="outline"
            className="rounded-xl px-6 py-2.5 font-bold"
          >
            To'plamlarga qaytish
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto max-w-4xl space-y-6 p-4 md:p-8">
      {isEditingCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-3xl border border-border bg-card p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-bold">Kartochkani tahrirlash</h3>
              <button
                onClick={() => setIsEditingCard(false)}
                className="rounded-full p-1 hover:bg-muted"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <input
                value={editFront}
                onChange={(e) => setEditFront(e.target.value)}
                className="w-full rounded-xl border border-border bg-muted p-3"
                placeholder="Old qismi"
              />
              <textarea
                value={editBack}
                onChange={(e) => setEditBack(e.target.value)}
                className="h-32 w-full rounded-xl border border-border bg-muted p-3"
                placeholder="Orqa qismi"
              />
              <Button onClick={handleSaveEdit} className="w-full">
                Saqlash
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="rounded-xl border border-border p-2.5 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
            title="Orqaga"
          >
            <ArrowLeft size={20} />
          </button>
          {/* Mode selector */}
          <div className="flex items-center gap-1 rounded-xl border border-border bg-muted p-1">
            <button
              onClick={() => setStudyMode('srs')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${studyMode === 'srs' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            >
              🎴 Flashcard SRS
            </button>
            <button
              onClick={() => setStudyMode('type')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${studyMode === 'type' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            >
              ✏️ Yozib Tekshirish
            </button>
          </div>

          {/* Configurable Batch Size Selector */}
          <div className="flex items-center gap-1 rounded-xl border border-border bg-muted/70 p-1">
            <span className="hidden px-1.5 text-[10px] font-bold text-muted-foreground sm:inline">
              Hajm:
            </span>
            {(['10', '25', '50', 'all'] as const).map((option) => (
              <button
                key={option}
                onClick={() => handleBatchLimitChange(option)}
                className={`rounded-lg px-2 py-1 text-xs font-bold transition-all ${
                  batchLimit === option
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                title={option === 'all' ? "To'plamdagi barcha kartalar" : `${option} ta karta`}
              >
                {option === 'all' ? 'Barchasi' : option}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Accent / Language Switcher */}
          <div className="flex items-center gap-1 rounded-xl border border-border bg-muted/60 p-1">
            {isJapanese ? (
              <button
                onClick={() => setAccent('ja-JP')}
                className="flex items-center gap-1.5 rounded-lg border border-rose-500/30 bg-rose-500/20 px-2.5 py-1 text-xs font-bold text-rose-400"
                title="Yapon tili talaffuzi (ja-JP)"
              >
                🇯🇵 JP (Yapon)
              </button>
            ) : (
              <>
                <button
                  onClick={() => setAccent('en-US')}
                  className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${accent === 'en-US' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'}`}
                >
                  🇺🇸 US
                </button>
                <button
                  onClick={() => setAccent('en-GB')}
                  className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${accent === 'en-GB' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'}`}
                >
                  🇬🇧 UK
                </button>
              </>
            )}
          </div>

          <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-black text-primary">
            {currentCardIndex + 1} / {queue.length}
          </span>
        </div>
      </div>

      {studyMode === 'type' ? (
        <div className="flex min-h-[380px] flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Yozma Javob Berish
            </span>
            <button
              onClick={handleSpeak}
              className="rounded-xl bg-primary/10 p-3 text-primary transition-all hover:bg-primary/20"
            >
              <Volume2 size={20} />
            </button>
          </div>
          <div className="my-6 space-y-4 text-center">
            <h3 className="text-3xl font-extrabold text-foreground">{currentCard?.front}</h3>
            <p className="text-xs text-muted-foreground">
              Ushbu so'z yoki iboraning o'zbekcha/inglizcha ma'nosini yozing:
            </p>
            <input
              type="text"
              value={typedAnswer}
              onChange={(e) => {
                setTypedAnswer(e.target.value);
                setTypeResult(null);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (typeResult === 'incorrect') {
                    setTypedAnswer('');
                    setTypeResult(null);
                    if (currentCardIndex < queue.length - 1) {
                      setCurrentCardIndex((i) => i + 1);
                    } else {
                      completeLinkedPlanTask();
                      setIsFinished(true);
                    }
                  } else {
                    if (!typedAnswer.trim() || !currentCard) return;
                    const isCorrect = isFlashcardAnswerCorrect(typedAnswer, currentCard.back);
                    if (isCorrect) {
                      setTypeResult('correct');
                      setTotalXpEarned((x) => x + 25);
                      setTimeout(() => {
                        setTypedAnswer('');
                        setTypeResult(null);
                        if (currentCardIndex < queue.length - 1) {
                          setCurrentCardIndex((i) => i + 1);
                        } else {
                          completeLinkedPlanTask();
                          setIsFinished(true);
                        }
                      }, 1100);
                    } else {
                      setTypeResult('incorrect');
                    }
                  }
                }
              }}
              placeholder="Javobingizni shu yerga yozing va Enter bosing..."
              className={`mx-auto w-full max-w-md rounded-2xl border px-4 py-3 text-center text-base transition-all ${
                typeResult === 'correct'
                  ? 'border-emerald-500 bg-emerald-500/10 font-bold text-emerald-600'
                  : typeResult === 'incorrect'
                    ? 'border-rose-500 bg-rose-500/10 text-rose-600'
                    : 'border-border bg-background/50 text-foreground focus:ring-2 focus:ring-primary'
              }`}
              autoFocus
            />
            {typeResult === 'correct' && (
              <p className="animate-bounce text-sm font-bold text-emerald-500">
                ✨ Muvaffaqiyatli! +25 XP
              </p>
            )}
            {typeResult === 'incorrect' && (
              <div className="mx-auto max-w-md rounded-xl border border-rose-500/20 bg-rose-500/10 p-3 text-left text-xs text-rose-500 animate-in fade-in">
                <span className="block font-bold">To'g'ri ma'nosi:</span>
                <span className="whitespace-pre-line font-medium">{currentCard?.back}</span>
              </div>
            )}
          </div>
          <Button
            onClick={() => {
              if (typeResult === 'incorrect') {
                setTypedAnswer('');
                setTypeResult(null);
                if (currentCardIndex < queue.length - 1) {
                  setCurrentCardIndex((i) => i + 1);
                } else {
                  completeLinkedPlanTask();
                  setIsFinished(true);
                }
              } else {
                if (!typedAnswer.trim() || !currentCard) return;
                const isCorrect = isFlashcardAnswerCorrect(typedAnswer, currentCard.back);
                if (isCorrect) {
                  setTypeResult('correct');
                  setTotalXpEarned((x) => x + 25);
                  setTimeout(() => {
                    setTypedAnswer('');
                    setTypeResult(null);
                    if (currentCardIndex < queue.length - 1) {
                      setCurrentCardIndex((i) => i + 1);
                    } else {
                      completeLinkedPlanTask();
                      setIsFinished(true);
                    }
                  }, 1100);
                } else {
                  setTypeResult('incorrect');
                }
              }
            }}
            className="w-full rounded-2xl py-3 font-bold"
          >
            {typeResult === 'incorrect' ? "Keyingi Kartaga o'tish →" : 'Tekshirish (Enter) →'}
          </Button>
        </div>
      ) : (
        /* Professional 3D Flip Card */
        <div
          className="perspective-1000 h-96 cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div
            className={`transform-style-3d relative h-full w-full transition-all duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}
          >
            {/* Front Side */}
            <div className="backface-hidden absolute inset-0 flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-xl">
              <div className="flex items-center justify-between">
                {isAdmin ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleStartEdit}
                      title="Admin: Ushbu kartochkani tahrirlash"
                      className="flex items-center gap-1 rounded-xl bg-[#C9A961]/15 p-2 text-xs font-bold text-[#C9A961] shadow-xs transition-all hover:bg-[#C9A961]/25 active:scale-95"
                    >
                      <Edit3 size={14} /> Tahrirlash
                    </button>
                    <button
                      onClick={handleDeleteCard}
                      title="Admin: Ushbu kartochkani bazadan o'chirish"
                      className="flex items-center gap-1 rounded-xl bg-rose-500/10 p-2 text-xs font-bold text-rose-500 shadow-xs transition-all hover:bg-rose-500/20 active:scale-95"
                    >
                      <Trash2 size={14} /> O'chirish
                    </button>
                  </div>
                ) : (
                  <div />
                )}
                <button
                  onClick={handleSpeak}
                  title="Talaffuzni eshitish"
                  className="rounded-2xl bg-primary/10 p-3 text-primary shadow-xs transition-all hover:bg-primary/20 active:scale-95"
                >
                  <Volume2 size={24} />
                </button>
              </div>
              <div className="my-auto text-center">
                <p className="text-4xl font-extrabold tracking-tight text-foreground">
                  {currentCard?.front}
                </p>
              </div>
              <p className="text-center text-xs font-medium text-muted-foreground">
                Kartani bosing — Javobni ko'rish
              </p>
            </div>

            {/* Back Side */}
            <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-between rounded-3xl border-2 border-primary/50 bg-gradient-to-br from-[#1A2028] via-[#222B36] to-[#1A2028] p-8 text-foreground shadow-2xl">
              <div className="flex justify-end">
                <button
                  onClick={handleSpeak}
                  className="rounded-2xl border border-border bg-card p-3 text-foreground transition-all hover:bg-muted active:scale-95"
                >
                  <Volume2 size={24} />
                </button>
              </div>
              <div className="custom-scrollbar my-auto max-h-[220px] space-y-3 overflow-y-auto px-2 text-center">
                <div className="whitespace-pre-line text-xl font-black leading-relaxed tracking-wide text-primary md:text-2xl">
                  {currentCard?.back}
                </div>
                <div className="border-t border-border pt-3">
                  <p className="text-xs font-semibold text-muted-foreground">
                    {currentCard?.front}
                  </p>
                </div>
              </div>
              <p className="text-center text-xs font-medium text-muted-foreground">
                SuperMemo SM-2 bo'yicha baholang
              </p>
            </div>
          </div>
        </div>
      )}

      {studyMode === 'srs' && (
        <div>
          {!isFlipped ? (
            <Button
              className="w-full rounded-2xl bg-primary py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
              onClick={() => setIsFlipped(true)}
            >
              Javobni ko'rish
            </Button>
          ) : (
            (() => {
              const intervals = currentCard
                ? getPreviewIntervals(
                    currentCard.interval || 0,
                    currentCard.repetitions || 0,
                    currentCard.easeFactor || 2.5,
                  )
                : { [Rating.AGAIN]: 1, [Rating.HARD]: 3, [Rating.GOOD]: 7, [Rating.EASY]: 14 };

              return (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    {
                      l: 'Qayta (❌)',
                      v: Rating.AGAIN,
                      sub: `${intervals[Rating.AGAIN]} kun`,
                      c: 'bg-rose-500/10 text-rose-500 border-rose-500/20 hover:bg-rose-500/20',
                    },
                    {
                      l: 'Qiyin (😐)',
                      v: Rating.HARD,
                      sub: `${intervals[Rating.HARD]} kun`,
                      c: 'bg-[#C9A961]/15 text-[#C9A961] border-[#C9A961]/30 hover:bg-[#C9A961]/25',
                    },
                    {
                      l: 'Yaxshi (🙂)',
                      v: Rating.GOOD,
                      sub: `${intervals[Rating.GOOD]} kun`,
                      c: 'bg-primary/10 text-primary border-primary/30 hover:bg-primary/20',
                    },
                    {
                      l: 'Oson (😄)',
                      v: Rating.EASY,
                      sub: `${intervals[Rating.EASY]} kun`,
                      c: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500/20',
                    },
                  ].map((b) => (
                    <button
                      key={b.v}
                      disabled={isProcessing}
                      onClick={() => handleRate(b.v)}
                      className={`${b.c} rounded-2xl border p-3.5 text-center text-sm font-extrabold shadow-xs transition-all active:scale-95`}
                    >
                      <div>{b.l}</div>
                      <span className="mt-0.5 block text-[11px] font-medium opacity-80">
                        {b.sub}
                      </span>
                    </button>
                  ))}
                </div>
              );
            })()
          )}
        </div>
      )}
    </div>
  );
};

export default StudyModePage;
