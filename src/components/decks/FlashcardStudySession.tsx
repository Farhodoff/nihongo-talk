import React, { useEffect, useState, useMemo, useCallback } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Loader2,
  Volume2,
  Trash2,
  Edit3,
  Trophy,
  RotateCcw,
  Keyboard,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { useStudyData } from '../../context/StudyPlannerContext';
import { useLanguage } from '../../context/LanguageContext';
import { isAdminEmail } from '../../utils/admin';
import { Flashcard } from '../../types';
import { Rating, Grade, getPreviewIntervals, sortCardsBySRSPriority } from '../../utils/srs';
import { speakText } from '../../utils/audioTts';
import { toast } from '../../hooks/use-toast';
import { safeLocalStorage } from '../../utils/storage/safeLocalStorage';

interface FlashcardStudySessionProps {
  subjectId?: string | null; // null or undefined means 'all due cards'
  onClose: () => void;
}

export const FlashcardStudySession: React.FC<FlashcardStudySessionProps> = ({
  subjectId,
  onClose,
}) => {
  const { user, flashcards, subjects, reviewFlashcard, updateFlashcard, deleteFlashcard, loading } =
    useStudyData();
  const { language } = useLanguage();
  const isJa = language === 'ja';
  const isAdmin = isAdminEmail(user?.email);

  const [queue, setQueue] = useState<Flashcard[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [totalXpEarned, setTotalXpEarned] = useState(0);
  const [reviewedCount, setReviewedCount] = useState(0);
  const [accent, setAccent] = useState<'en-GB' | 'en-US' | 'ja-JP'>('en-US');
  const [isQueueInitialized, setIsQueueInitialized] = useState(false);
  const [autoAudio, setAutoAudio] = useState<boolean>(() => {
    return safeLocalStorage.getItem('study_planner_flashcard_auto_audio') === 'true';
  });

  const toggleAutoAudio = () => {
    setAutoAudio((prev) => {
      const next = !prev;
      safeLocalStorage.setItem('study_planner_flashcard_auto_audio', String(next));
      return next;
    });
  };

  // Study Mode: 'srs' | 'type'
  const [studyMode, setStudyMode] = useState<'srs' | 'type'>('srs');
  const [typedAnswer, setTypedAnswer] = useState('');

  // Admin inline editing state
  const [isEditingCard, setIsEditingCard] = useState(false);
  const [editFront, setEditFront] = useState('');
  const [editBack, setEditBack] = useState('');

  const currentSubject = subjects.find((s) => s.id === subjectId);

  useEffect(() => {
    if (flashcards.length > 0 && !isQueueInitialized) {
      let targetSet: Flashcard[] = [];
      if (subjectId && subjectId !== 'all') {
        const subjectCards = flashcards.filter((c: Flashcard) => c.subjectId === subjectId);
        const due = subjectCards.filter((c: Flashcard) => new Date(c.nextReviewDate) <= new Date());
        targetSet = due.length > 0 ? due : subjectCards;
      } else {
        // Global study mode across all decks / subjects
        const due = flashcards.filter((c: Flashcard) => new Date(c.nextReviewDate) <= new Date());
        targetSet = due.length > 0 ? due : flashcards;
      }
      setQueue(sortCardsBySRSPriority(targetSet).slice(0, 30));
      setIsQueueInitialized(true);
    } else if (flashcards.length === 0 && !loading && !isQueueInitialized) {
      setIsQueueInitialized(true);
    }
  }, [subjectId, flashcards, isQueueInitialized, loading]);

  const currentCard = queue[currentCardIndex];

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

  const handleSpeak = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (currentCard?.front) {
        speakText(currentCard.front, isJapanese ? 'ja-JP' : accent);
      }
    },
    [currentCard, isJapanese, accent],
  );

  useEffect(() => {
    if (autoAudio && currentCard && !isFinished && !isEditingCard) {
      const timer = setTimeout(() => {
        if (currentCard?.front) {
          speakText(currentCard.front, isJapanese ? 'ja-JP' : accent);
        }
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [currentCardIndex, autoAudio, isFinished, isEditingCard, isJapanese, accent, currentCard]);

  const handleReview = useCallback(
    async (grade: Grade) => {
      if (!currentCard || isProcessing) return;

      setIsProcessing(true);
      try {
        await reviewFlashcard(currentCard.id, grade);
        const xpGained =
          grade === Rating.EASY ? 15 : grade === Rating.GOOD ? 10 : grade === Rating.HARD ? 5 : 2;
        setTotalXpEarned((prev) => prev + xpGained);
        setReviewedCount((prev) => prev + 1);

        const shouldRequeue = grade === Rating.AGAIN;
        if (shouldRequeue) {
          setQueue((prev) => [...prev, currentCard]);
          toast({
            title: "🔄 Karta navbat oxiriga qo'shildi",
            description: "Ushbu so'zni sessiya oxirida yana bir bor takrorlaysiz.",
          });
        }

        if (currentCardIndex < queue.length - 1 || shouldRequeue) {
          setCurrentCardIndex((prev) => prev + 1);
          setIsFlipped(false);
          setTypedAnswer('');
          setIsEditingCard(false);
        } else {
          setIsFinished(true);
        }
      } catch (error) {
        console.error('Error reviewing flashcard:', error);
        toast({
          variant: 'destructive',
          title: 'Xatolik',
          description: 'Natijani saqlashda xato yuz berdi',
        });
      } finally {
        setIsProcessing(false);
      }
    },
    [currentCard, isProcessing, reviewFlashcard, currentCardIndex, queue.length],
  );

  const handleDeleteCard = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentCard) return;
    if (window.confirm("Ushbu kartochkani o'chirmoqchimisiz?")) {
      const cardToDeleteId = currentCard.id;
      setQueue((prev) => prev.filter((c) => c.id !== cardToDeleteId));
      if (currentCardIndex >= queue.length - 1) {
        setIsFinished(true);
      }
      setIsFlipped(false);
      await deleteFlashcard(cardToDeleteId);
      toast({ title: "🗑️ Kartochka o'chirildi" });
    }
  };

  const handleStartEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentCard) return;
    setEditFront(currentCard.front);
    setEditBack(currentCard.back);
    setIsEditingCard(true);
  };

  const handleSaveEdit = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentCard || !editFront.trim() || !editBack.trim()) return;

    try {
      await updateFlashcard(currentCard.id, {
        front: editFront.trim(),
        back: editBack.trim(),
      });

      setQueue((prev) =>
        prev.map((c) =>
          c.id === currentCard.id ? { ...c, front: editFront.trim(), back: editBack.trim() } : c,
        ),
      );
      setIsEditingCard(false);
      toast({ title: '✅ Kartochka yangilandi' });
    } catch {
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: "O'zgartirishni saqlashda xato bo'ldi",
      });
    }
  };

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isEditingCard || isFinished || isProcessing) return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (isFlipped) {
        if (e.key === '1') handleReview(Rating.AGAIN);
        if (e.key === '2') handleReview(Rating.HARD);
        if (e.key === '3') handleReview(Rating.GOOD);
        if (e.key === '4') handleReview(Rating.EASY);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEditingCard, isFinished, isProcessing, isFlipped, handleReview]);

  const handleTypeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedAnswer.trim() || !currentCard) return;
    setIsFlipped(true);
  };

  const previewIntervals = useMemo(() => {
    if (!currentCard) {
      return {
        [Rating.AGAIN]: '10 min',
        [Rating.HARD]: '1 kun',
        [Rating.GOOD]: '3 kun',
        [Rating.EASY]: '7 kun',
      };
    }
    const calculated = getPreviewIntervals(
      currentCard.interval || 0,
      currentCard.repetitions || 0,
      currentCard.easeFactor || 2.5,
    );
    return {
      [Rating.AGAIN]: calculated[Rating.AGAIN] <= 1 ? '1 kun' : `${calculated[Rating.AGAIN]} kun`,
      [Rating.HARD]: `${calculated[Rating.HARD]} kun`,
      [Rating.GOOD]: `${calculated[Rating.GOOD]} kun`,
      [Rating.EASY]: `${calculated[Rating.EASY]} kun`,
    };
  }, [currentCard]);

  if (loading && !isQueueInitialized) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-md">
        <div className="space-y-4 text-center">
          <Loader2 size={40} className="mx-auto animate-spin text-primary" />
          <p className="text-sm font-extrabold text-foreground">Kartochkalar tayyorlanmoqda...</p>
        </div>
      </div>
    );
  }

  if (queue.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl">
        <div className="w-full max-w-md space-y-6 rounded-3xl border border-border bg-card p-8 text-center shadow-2xl animate-in zoom-in-95">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
            <CheckCircle2 size={36} />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-foreground">Barchasi Takrorlandi! ✨</h2>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {currentSubject ? `"${currentSubject.name}" to'plamida` : "Barcha to'plamlarda"}{' '}
              hozircha takrorlanishi kerak bo'lgan kartochkalar yo'q.
            </p>
          </div>
          <Button
            onClick={onClose}
            className="w-full rounded-xl bg-primary py-3 font-black text-primary-foreground"
          >
            To'plamlarga Qaytish
          </Button>
        </div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl">
        <div className="w-full max-w-md space-y-6 rounded-3xl border border-border bg-card p-8 text-center shadow-2xl animate-in zoom-in-95">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#C9A961]/15 text-[#C9A961]">
            <Trophy size={44} />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-foreground">
              {isJa ? '学習セッション完了！ 🎉' : "Mashg'ulot Yakunlandi! 🎉"}
            </h2>
            <p className="text-xs text-muted-foreground">
              {isJa ? (
                <>
                  <strong>{reviewedCount} 枚</strong>のカードを学習し、
                  <strong>+{totalXpEarned} XP</strong> を獲得しました！
                </>
              ) : (
                <>
                  Siz <strong>{reviewedCount} ta</strong> kartochkani muvaffaqiyatli takrorladingiz
                  va <strong>+{totalXpEarned} XP</strong> yutib oldingiz!
                </>
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-muted/40 p-4 text-center">
            <div>
              <span className="block text-[10px] font-bold uppercase text-muted-foreground">
                {isJa ? '復習済みカード' : 'Takrorlangan'}
              </span>
              <span className="text-xl font-black text-foreground">
                {reviewedCount} {isJa ? '枚' : 'ta'}
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase text-[#C9A961]">
                {isJa ? '獲得 XP' : 'Yutilgan XP'}
              </span>
              <span className="text-xl font-black text-[#C9A961]">+{totalXpEarned} XP</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={() => {
                setCurrentCardIndex(0);
                setIsFlipped(false);
                setIsFinished(false);
                setReviewedCount(0);
              }}
              variant="secondary"
              className="flex-1 rounded-xl py-3 font-bold"
            >
              <RotateCcw size={16} className="mr-2" /> {isJa ? 'もう一度復習' : "Qayta O'rganish"}
            </Button>
            <Button
              onClick={onClose}
              className="flex-1 rounded-xl bg-primary py-3 font-black text-primary-foreground"
            >
              {isJa ? '完了' : 'Tugatish'}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const progressPercentage = Math.round((currentCardIndex / queue.length) * 100);

  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-background/95 p-4 backdrop-blur-xl md:p-8">
      {/* Top Bar */}
      <div className="mx-auto mb-6 flex w-full max-w-3xl items-center justify-between gap-4">
        <button
          onClick={onClose}
          className="flex cursor-pointer items-center gap-2 rounded-xl p-2 text-xs font-bold text-muted-foreground transition-all hover:bg-muted/60 hover:text-foreground"
        >
          <ArrowLeft size={18} />
          <span>{isJa ? '単語帳一覧に戻る' : "To'plamlarga qaytish"}</span>
        </button>

        {/* Progress bar */}
        <div className="max-w-xs flex-1 space-y-1">
          <div className="flex justify-between text-[11px] font-bold text-muted-foreground">
            <span>
              {currentCardIndex + 1} / {queue.length}
            </span>
            <span>{progressPercentage}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-[#C9A961] transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Audio Accent toggle */}
          {!isJapanese && (
            <select
              value={accent}
              onChange={(e) => setAccent(e.target.value as any)}
              className="focus:outline-hidden rounded-xl border border-border bg-muted/60 px-2.5 py-1.5 text-xs font-bold text-foreground"
            >
              <option value="en-US">🇺🇸 US</option>
              <option value="en-GB">🇬🇧 UK</option>
            </select>
          )}

          {/* Auto Audio Playback Toggle */}
          <button
            onClick={toggleAutoAudio}
            className={`flex cursor-pointer items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-xs font-extrabold transition-all ${
              autoAudio
                ? 'border-primary/40 bg-primary/10 text-primary shadow-xs'
                : 'border-border bg-card text-muted-foreground hover:text-foreground'
            }`}
            title={
              autoAudio
                ? isJa
                  ? '自動音声: オン'
                  : 'Avtomatik ovoz: Yoqilgan'
                : isJa
                  ? '自動音声: オフ'
                  : 'Avtomatik ovoz: O‘chirilgan'
            }
          >
            <Volume2 size={14} className={autoAudio ? 'animate-pulse text-primary' : ''} />
            <span className="hidden sm:inline">
              {autoAudio ? (isJa ? '音声: オン' : 'Ovoz: On') : isJa ? '音声: オフ' : 'Ovoz: Off'}
            </span>
          </button>

          {/* Study Mode: Flashcard / Typing */}
          <div className="flex rounded-xl border border-border bg-card p-1">
            <button
              onClick={() => setStudyMode('srs')}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-extrabold transition-all ${
                studyMode === 'srs'
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'text-muted-foreground'
              }`}
            >
              {isJa ? 'SRS暗記' : 'SRS'}
            </button>
            <button
              onClick={() => setStudyMode('type')}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-extrabold transition-all ${
                studyMode === 'type'
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'text-muted-foreground'
              }`}
            >
              {isJa ? '入力' : 'Yozma'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Flashcard Stage */}
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center py-4">
        {isEditingCard ? (
          <div className="relative flex min-h-[340px] w-full flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-2xl md:min-h-[380px]">
            <div className="space-y-3 text-left">
              <div>
                <label className="text-xs font-bold text-muted-foreground">
                  {isJa ? '表面 (Front)' : 'Old qism (Front)'}
                </label>
                <input
                  type="text"
                  value={editFront}
                  onChange={(e) => setEditFront(e.target.value)}
                  className="focus:outline-hidden w-full rounded-xl border border-border bg-muted px-3 py-2 text-sm font-bold text-foreground"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground">
                  {isJa ? '裏面 (Back)' : 'Orqa qism (Back)'}
                </label>
                <textarea
                  value={editBack}
                  onChange={(e) => setEditBack(e.target.value)}
                  rows={3}
                  className="focus:outline-hidden w-full rounded-xl border border-border bg-muted px-3 py-2 text-sm font-semibold text-foreground"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <Button
                  onClick={() => setIsEditingCard(false)}
                  variant="secondary"
                  className="text-xs"
                >
                  {isJa ? 'キャンセル' : 'Bekor qilish'}
                </Button>
                <Button
                  onClick={handleSaveEdit}
                  className="bg-primary text-xs font-bold text-primary-foreground"
                >
                  {isJa ? '保存' : 'Saqlash'}
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div
            onClick={() => setIsFlipped((prev) => !prev)}
            className="perspective-1000 min-h-[340px] w-full cursor-pointer select-none md:min-h-[380px]"
          >
            <div
              className={`transform-style-3d relative h-full min-h-[340px] w-full transition-transform duration-500 md:min-h-[380px] ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front Side */}
              <div className="backface-hidden absolute inset-0 flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-2xl transition-all hover:border-primary/40">
                {/* Top Card Controls */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-extrabold text-primary">
                    {currentSubject?.name || (isJa ? 'SRS 単語カード' : 'SRS Fleshkarta')}
                  </span>

                  <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={handleSpeak}
                      className="cursor-pointer rounded-xl p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
                      title={isJa ? '音声再生 (TTS)' : 'Ovoz chiqarish (TTS)'}
                    >
                      <Volume2 size={20} />
                    </button>

                    {isAdmin && (
                      <>
                        <button
                          onClick={handleStartEdit}
                          className="cursor-pointer rounded-xl p-2 text-muted-foreground transition-all hover:bg-[#C9A961]/10 hover:text-[#C9A961]"
                          title={isJa ? '編集' : 'Tahrirlash'}
                        >
                          <Edit3 size={18} />
                        </button>
                        <button
                          onClick={handleDeleteCard}
                          className="cursor-pointer rounded-xl p-2 text-muted-foreground transition-all hover:bg-rose-500/10 hover:text-rose-500"
                          title={isJa ? '削除' : "O'chirish"}
                        >
                          <Trash2 size={18} />
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Card Front Content */}
                <div className="my-auto py-6 text-center">
                  <h3 className="text-3xl font-black leading-tight tracking-tight text-foreground md:text-4xl">
                    {currentCard?.front}
                  </h3>
                  <p className="flex items-center justify-center gap-1.5 pt-6 text-xs font-bold text-muted-foreground/60">
                    <Keyboard size={14} />{' '}
                    {isJa
                      ? 'スペースキーまたはカードをタップして裏返す'
                      : "Bo'sh joy (Space) yoki kartani bosing"}
                  </p>
                </div>

                {/* Footer Status */}
                <div className="flex items-center justify-between text-[11px] font-bold text-muted-foreground">
                  <span>
                    {isJa
                      ? `復習回数: ${currentCard?.repetitions || 0}回`
                      : `Repetitsiya: ${currentCard?.repetitions || 0}`}
                  </span>
                  <span>
                    {isJa
                      ? `学習間隔: ${currentCard?.interval || 0}日`
                      : `Interval: ${currentCard?.interval || 0} kun`}
                  </span>
                </div>
              </div>

              {/* Back Side */}
              <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-between rounded-3xl border-2 border-primary/50 bg-gradient-to-br from-card via-card to-primary/5 p-8 shadow-2xl">
                {/* Top Card Controls */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                    {isJa ? '解答 (Answer)' : 'Javob'}
                  </span>
                  <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={handleSpeak}
                      className="cursor-pointer rounded-xl p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
                      title={isJa ? '音声再生 (TTS)' : 'Ovoz chiqarish (TTS)'}
                    >
                      <Volume2 size={20} />
                    </button>
                  </div>
                </div>

                {/* Card Back Content */}
                <div className="my-auto space-y-3 py-4 text-center">
                  <p className="text-xl font-bold leading-relaxed text-primary md:text-2xl">
                    {currentCard?.back}
                  </p>
                  <p className="text-xs font-semibold text-muted-foreground/80">
                    {currentCard?.front}
                  </p>
                </div>

                {/* Footer Status */}
                <div className="flex items-center justify-between text-[11px] font-bold text-muted-foreground">
                  <span>SM-2 Algoritmi</span>
                  <span>
                    {isJa
                      ? `難易度: ${(currentCard?.easeFactor || 2.5).toFixed(2)}`
                      : `Osonlik: ${(currentCard?.easeFactor || 2.5).toFixed(2)}`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Typing Mode Input Form */}
        {studyMode === 'type' && !isFlipped && (
          <form onSubmit={handleTypeSubmit} className="mt-4 flex w-full gap-2">
            <input
              type="text"
              placeholder={isJa ? '意味や読み方を入力...' : 'Tarjimasini yozing...'}
              value={typedAnswer}
              onChange={(e) => setTypedAnswer(e.target.value)}
              className="focus:outline-hidden flex-1 rounded-2xl border border-border bg-muted/60 px-4 py-3 text-sm font-bold text-foreground focus:ring-2 focus:ring-primary"
              autoFocus
            />
            <Button
              type="submit"
              className="rounded-2xl bg-primary px-6 font-bold text-primary-foreground"
            >
              {isJa ? '判定' : 'Tekshirish'}
            </Button>
          </form>
        )}

        {/* SRS Grading Buttons (Again / Hard / Good / Easy) */}
        {isFlipped && (
          <div className="mt-6 grid w-full grid-cols-2 gap-3 duration-200 animate-in slide-in-from-bottom-3 md:grid-cols-4">
            <button
              onClick={() => handleReview(Rating.AGAIN)}
              disabled={isProcessing}
              className="group cursor-pointer rounded-2xl border border-rose-500/20 bg-rose-500/10 p-3.5 text-center font-black text-rose-500 transition-all hover:bg-rose-500/20 active:scale-95"
            >
              <span className="mb-1 block text-sm leading-none">
                {isJa ? 'もう一度 (Again)' : 'Qayta (Again)'}
              </span>
              <span className="block text-[10px] font-semibold opacity-80">
                {previewIntervals[Rating.AGAIN]} (1)
              </span>
            </button>

            <button
              onClick={() => handleReview(Rating.HARD)}
              disabled={isProcessing}
              className="group cursor-pointer rounded-2xl border border-[#C9A961]/30 bg-[#C9A961]/15 p-3.5 text-center font-black text-[#C9A961] transition-all hover:bg-[#C9A961]/25 active:scale-95"
            >
              <span className="mb-1 block text-sm leading-none">
                {isJa ? '難しい (Hard)' : 'Qiyin (Hard)'}
              </span>
              <span className="block text-[10px] font-semibold opacity-80">
                {previewIntervals[Rating.HARD]} (2)
              </span>
            </button>

            <button
              onClick={() => handleReview(Rating.GOOD)}
              disabled={isProcessing}
              className="group cursor-pointer rounded-2xl border border-primary/30 bg-primary/10 p-3.5 text-center font-black text-primary transition-all hover:bg-primary/20 active:scale-95"
            >
              <span className="mb-1 block text-sm leading-none">
                {isJa ? '普通 (Good)' : 'Yaxshi (Good)'}
              </span>
              <span className="block text-[10px] font-semibold opacity-80">
                {previewIntervals[Rating.GOOD]} (3)
              </span>
            </button>

            <button
              onClick={() => handleReview(Rating.EASY)}
              disabled={isProcessing}
              className="group cursor-pointer rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3.5 text-center font-black text-emerald-500 transition-all hover:bg-emerald-500/20 active:scale-95"
            >
              <span className="mb-1 block text-sm leading-none">
                {isJa ? '簡単 (Easy)' : 'Oson (Easy)'}
              </span>
              <span className="block text-[10px] font-semibold opacity-80">
                {previewIntervals[Rating.EASY]} (4)
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
