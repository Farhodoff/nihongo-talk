import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { ArrowLeft, CheckCircle2, Loader2, Volume2, Trash2, Edit3, Trophy, RotateCcw, Keyboard } from 'lucide-react';
import { Button } from '../ui/Button';
import { useStudyData } from '../../context/StudyPlannerContext';
import { useLanguage } from '../../context/LanguageContext';
import { isAdminEmail } from '../../utils/admin';
import { Flashcard } from '../../types';
import { Rating, Grade, getPreviewIntervals } from '../../utils/srs';
import { speakText } from '../../utils/audioTts';
import { toast } from '../../hooks/use-toast';

interface FlashcardStudySessionProps {
    subjectId?: string | null; // null or undefined means 'all due cards'
    onClose: () => void;
}

export const FlashcardStudySession: React.FC<FlashcardStudySessionProps> = ({
    subjectId,
    onClose
}) => {
    const { user, flashcards, subjects, reviewFlashcard, updateFlashcard, deleteFlashcard, loading } = useStudyData();
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

    // Study Mode: 'srs' | 'type'
    const [studyMode, setStudyMode] = useState<'srs' | 'type'>('srs');
    const [typedAnswer, setTypedAnswer] = useState('');

    // Admin inline editing state
    const [isEditingCard, setIsEditingCard] = useState(false);
    const [editFront, setEditFront] = useState('');
    const [editBack, setEditBack] = useState('');

    const currentSubject = subjects.find(s => s.id === subjectId);

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
            setQueue([...targetSet].sort(() => Math.random() - 0.5).slice(0, 30));
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

        const hasJapaneseChars = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uffef\u4e00-\u9faf]/.test(frontText + backText + subjectTitle);
        const isJlptMeta = subjectType.toLowerCase().includes('jlpt') || subjectCategory.toLowerCase().includes('jlpt') || subjectTitle.toLowerCase().includes('jlpt') || subjectTitle.toLowerCase().includes('kanji') || subjectTitle.toLowerCase().includes('yapon');

        return hasJapaneseChars || isJlptMeta;
    }, [currentCard, currentSubject]);

    const handleSpeak = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (currentCard?.front) {
            speakText(currentCard.front, isJapanese ? 'ja-JP' : accent);
        }
    }, [currentCard, isJapanese, accent]);

    const handleReview = useCallback(async (grade: Grade) => {
        if (!currentCard || isProcessing) return;

        setIsProcessing(true);
        try {
            await reviewFlashcard(currentCard.id, grade);
            const xpGained = grade === Rating.EASY ? 15 : grade === Rating.GOOD ? 10 : grade === Rating.HARD ? 5 : 2;
            setTotalXpEarned(prev => prev + xpGained);
            setReviewedCount(prev => prev + 1);

            if (currentCardIndex < queue.length - 1) {
                setCurrentCardIndex(prev => prev + 1);
                setIsFlipped(false);
                setTypedAnswer('');
                setIsEditingCard(false);
            } else {
                setIsFinished(true);
            }
        } catch (error) {
            console.error('Error reviewing flashcard:', error);
            toast({ variant: 'destructive', title: 'Xatolik', description: "Natijani saqlashda xato yuz berdi" });
        } finally {
            setIsProcessing(false);
        }
    }, [currentCard, isProcessing, reviewFlashcard, currentCardIndex, queue.length]);

    const handleDeleteCard = async (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!currentCard) return;
        if (window.confirm("Ushbu kartochkani o'chirmoqchimisiz?")) {
            const cardToDeleteId = currentCard.id;
            setQueue(prev => prev.filter(c => c.id !== cardToDeleteId));
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
                back: editBack.trim()
            });

            setQueue(prev => prev.map(c => c.id === currentCard.id ? { ...c, front: editFront.trim(), back: editBack.trim() } : c));
            setIsEditingCard(false);
            toast({ title: "✅ Kartochka yangilandi" });
        } catch {
            toast({ variant: 'destructive', title: "Xatolik", description: "O'zgartirishni saqlashda xato bo'ldi" });
        }
    };

    // Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isEditingCard || isFinished || isProcessing) return;
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

            if (e.code === 'Space') {
                e.preventDefault();
                setIsFlipped(prev => !prev);
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
            currentCard.easeFactor || 2.5
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
            <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-4">
                <div className="text-center space-y-4">
                    <Loader2 size={40} className="animate-spin text-primary mx-auto" />
                    <p className="font-extrabold text-sm text-foreground">Kartochkalar tayyorlanmoqda...</p>
                </div>
            </div>
        );
    }

    if (queue.length === 0) {
        return (
            <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-card p-8 rounded-3xl text-center space-y-6 border border-border shadow-2xl animate-in zoom-in-95">
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto">
                        <CheckCircle2 size={36} />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-black text-foreground">Barchasi Takrorlandi! ✨</h2>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            {currentSubject ? `"${currentSubject.name}" to'plamida` : "Barcha to'plamlarda"} hozircha takrorlanishi kerak bo'lgan kartochkalar yo'q.
                        </p>
                    </div>
                    <Button onClick={onClose} className="w-full font-black py-3 rounded-xl bg-primary text-primary-foreground">
                        To'plamlarga Qaytish
                    </Button>
                </div>
            </div>
        );
    }

    if (isFinished) {
        return (
            <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-card p-8 rounded-3xl text-center space-y-6 border border-border shadow-2xl animate-in zoom-in-95">
                    <div className="w-20 h-20 bg-[#C9A961]/15 text-[#C9A961] rounded-3xl flex items-center justify-center mx-auto">
                        <Trophy size={44} />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-black text-foreground">{isJa ? '学習セッション完了！ 🎉' : "Mashg'ulot Yakunlandi! 🎉"}</h2>
                        <p className="text-xs text-muted-foreground">
                            {isJa ? (
                                <><strong>{reviewedCount} 枚</strong>のカードを学習し、<strong>+{totalXpEarned} XP</strong> を獲得しました！</>
                            ) : (
                                <>Siz <strong>{reviewedCount} ta</strong> kartochkani muvaffaqiyatli takrorladingiz va <strong>+{totalXpEarned} XP</strong> yutib oldingiz!</>
                            )}
                        </p>
                    </div>

                    <div className="p-4 bg-muted/40 rounded-2xl border border-border grid grid-cols-2 gap-4 text-center">
                        <div>
                            <span className="text-[10px] font-bold text-muted-foreground uppercase block">{isJa ? '復習済みカード' : 'Takrorlangan'}</span>
                            <span className="text-xl font-black text-foreground">{reviewedCount} {isJa ? '枚' : 'ta'}</span>
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-[#C9A961] uppercase block">{isJa ? '獲得 XP' : 'Yutilgan XP'}</span>
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
                            className="flex-1 font-bold py-3 rounded-xl"
                        >
                            <RotateCcw size={16} className="mr-2" /> {isJa ? 'もう一度復習' : "Qayta O'rganish"}
                        </Button>
                        <Button onClick={onClose} className="flex-1 font-black py-3 rounded-xl bg-primary text-primary-foreground">
                            {isJa ? '完了' : 'Tugatish'}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    const progressPercentage = Math.round(((currentCardIndex) / queue.length) * 100);

    return (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col p-4 md:p-8 overflow-y-auto">
            {/* Top Bar */}
            <div className="max-w-3xl w-full mx-auto flex items-center justify-between gap-4 mb-6">
                <button
                    onClick={onClose}
                    className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-xl transition-all flex items-center gap-2 text-xs font-bold cursor-pointer"
                >
                    <ArrowLeft size={18} />
                    <span>{isJa ? '単語帳一覧に戻る' : "To'plamlarga qaytish"}</span>
                </button>

                {/* Progress bar */}
                <div className="flex-1 max-w-xs space-y-1">
                    <div className="flex justify-between text-[11px] font-bold text-muted-foreground">
                        <span>{currentCardIndex + 1} / {queue.length}</span>
                        <span>{progressPercentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-primary to-[#C9A961] transition-all duration-300 rounded-full"
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
                            className="px-2.5 py-1.5 bg-muted/60 border border-border text-foreground rounded-xl text-xs font-bold focus:outline-hidden"
                        >
                            <option value="en-US">🇺🇸 US</option>
                            <option value="en-GB">🇬🇧 UK</option>
                        </select>
                    )}

                    {/* Study Mode: Flashcard / Typing */}
                    <div className="flex p-1 bg-card rounded-xl border border-border">
                        <button
                            onClick={() => setStudyMode('srs')}
                            className={`px-2.5 py-1 text-[11px] font-extrabold rounded-lg transition-all ${
                                studyMode === 'srs' ? 'bg-primary text-primary-foreground shadow-xs' : 'text-muted-foreground'
                            }`}
                        >
                            {isJa ? 'SRS暗記' : 'SRS'}
                        </button>
                        <button
                            onClick={() => setStudyMode('type')}
                            className={`px-2.5 py-1 text-[11px] font-extrabold rounded-lg transition-all ${
                                studyMode === 'type' ? 'bg-primary text-primary-foreground shadow-xs' : 'text-muted-foreground'
                            }`}
                        >
                            {isJa ? '入力' : 'Yozma'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Interactive Flashcard Stage */}
            <div className="max-w-2xl w-full mx-auto flex-1 flex flex-col justify-center items-center py-4">
                <div
                    onClick={() => {
                        if (!isEditingCard) setIsFlipped(prev => !prev);
                    }}
                    className={`w-full min-h-[320px] md:min-h-[380px] p-8 bg-card rounded-3xl border border-border shadow-2xl flex flex-col justify-between cursor-pointer transition-all duration-300 relative select-none hover:border-primary/40 ${
                        isFlipped ? 'bg-card' : 'bg-card'
                    }`}
                >
                    {/* Top Card Controls */}
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold px-3 py-1 bg-primary/10 text-primary rounded-full">
                            {currentSubject?.name || (isJa ? 'SRS 単語カード' : 'SRS Fleshkarta')}
                        </span>

                        <div className="flex items-center gap-1" onClick={e => e.stopPropagation()}>
                            <button
                                onClick={handleSpeak}
                                className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all cursor-pointer"
                                title={isJa ? '音声再生 (TTS)' : "Ovoz chiqarish (TTS)"}
                            >
                                <Volume2 size={20} />
                            </button>

                            {isAdmin && !isEditingCard && (
                                <button
                                    onClick={handleStartEdit}
                                    className="p-2 text-muted-foreground hover:text-[#C9A961] hover:bg-[#C9A961]/10 rounded-xl transition-all cursor-pointer"
                                    title={isJa ? '編集' : "Tahrirlash"}
                                >
                                    <Edit3 size={18} />
                                </button>
                            )}

                            {isAdmin && (
                                <button
                                    onClick={handleDeleteCard}
                                    className="p-2 text-muted-foreground hover:text-rose-500 hover:bg-rose-500/10 rounded-xl transition-all cursor-pointer"
                                    title={isJa ? '削除' : "O'chirish"}
                                >
                                    <Trash2 size={18} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Card Content Area */}
                    <div className="my-auto text-center space-y-4 py-6">
                        {isEditingCard ? (
                            <div className="space-y-3 text-left" onClick={e => e.stopPropagation()}>
                                <div>
                                    <label className="text-xs font-bold text-muted-foreground">{isJa ? '表面 (Front)' : 'Old qism (Front)'}</label>
                                    <input
                                        type="text"
                                        value={editFront}
                                        onChange={e => setEditFront(e.target.value)}
                                        className="w-full px-3 py-2 bg-muted border border-border rounded-xl text-sm font-bold text-foreground focus:outline-hidden"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-muted-foreground">{isJa ? '裏面 (Back)' : 'Orqa qism (Back)'}</label>
                                    <textarea
                                        value={editBack}
                                        onChange={e => setEditBack(e.target.value)}
                                        rows={3}
                                        className="w-full px-3 py-2 bg-muted border border-border rounded-xl text-sm font-semibold text-foreground focus:outline-hidden"
                                    />
                                </div>
                                <div className="flex gap-2 justify-end pt-2">
                                    <Button onClick={() => setIsEditingCard(false)} variant="secondary" className="text-xs">
                                        {isJa ? 'キャンセル' : 'Bekor qilish'}
                                    </Button>
                                    <Button onClick={handleSaveEdit} className="text-xs bg-primary text-primary-foreground font-bold">
                                        {isJa ? '保存' : 'Saqlash'}
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">
                                    {currentCard?.front}
                                </h3>

                                {isFlipped ? (
                                    <div className="pt-4 border-t border-border/60 animate-in fade-in-50 duration-200">
                                        <p className="text-xl md:text-2xl font-bold text-primary">
                                            {currentCard?.back}
                                        </p>
                                    </div>
                                ) : (
                                    <p className="text-xs font-bold text-muted-foreground/60 flex items-center justify-center gap-1.5 pt-4">
                                        <Keyboard size={14} /> {isJa ? 'スペースキーまたはカードをタップして裏返す' : "Bo'sh joy (Space) yoki kartani bosing"}
                                    </p>
                                )}
                            </>
                        )}
                    </div>

                    {/* Footer Status */}
                    <div className="flex items-center justify-between text-[11px] font-bold text-muted-foreground">
                        <span>{isJa ? `復習回数: ${currentCard?.repetitions || 0}回` : `Repetitsiya: ${currentCard?.repetitions || 0}`}</span>
                        <span>{isJa ? `学習間隔: ${currentCard?.interval || 0}日` : `Interval: ${currentCard?.interval || 0} kun`}</span>
                    </div>
                </div>

                {/* Typing Mode Input Form */}
                {studyMode === 'type' && !isFlipped && (
                    <form onSubmit={handleTypeSubmit} className="w-full mt-4 flex gap-2">
                        <input
                            type="text"
                            placeholder={isJa ? "意味や読み方を入力..." : "Tarjimasini yozing..."}
                            value={typedAnswer}
                            onChange={e => setTypedAnswer(e.target.value)}
                            className="flex-1 px-4 py-3 bg-muted/60 border border-border rounded-2xl text-sm font-bold text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary"
                            autoFocus
                        />
                        <Button type="submit" className="px-6 font-bold rounded-2xl bg-primary text-primary-foreground">
                            {isJa ? "判定" : "Tekshirish"}
                        </Button>
                    </form>
                )}

                {/* SRS Grading Buttons (Again / Hard / Good / Easy) */}
                {isFlipped && (
                    <div className="w-full mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 animate-in slide-in-from-bottom-3 duration-200">
                        <button
                            onClick={() => handleReview(Rating.AGAIN)}
                            disabled={isProcessing}
                            className="p-3.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 rounded-2xl border border-rose-500/20 transition-all font-black text-center group cursor-pointer active:scale-95"
                        >
                            <span className="text-sm block leading-none mb-1">{isJa ? 'もう一度 (Again)' : 'Qayta (Again)'}</span>
                            <span className="text-[10px] font-semibold opacity-80 block">{previewIntervals[Rating.AGAIN]} (1)</span>
                        </button>

                        <button
                            onClick={() => handleReview(Rating.HARD)}
                            disabled={isProcessing}
                            className="p-3.5 bg-[#C9A961]/15 hover:bg-[#C9A961]/25 text-[#C9A961] rounded-2xl border border-[#C9A961]/30 transition-all font-black text-center group cursor-pointer active:scale-95"
                        >
                            <span className="text-sm block leading-none mb-1">{isJa ? '難しい (Hard)' : 'Qiyin (Hard)'}</span>
                            <span className="text-[10px] font-semibold opacity-80 block">{previewIntervals[Rating.HARD]} (2)</span>
                        </button>

                        <button
                            onClick={() => handleReview(Rating.GOOD)}
                            disabled={isProcessing}
                            className="p-3.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-2xl border border-primary/30 transition-all font-black text-center group cursor-pointer active:scale-95"
                        >
                            <span className="text-sm block leading-none mb-1">{isJa ? '普通 (Good)' : 'Yaxshi (Good)'}</span>
                            <span className="text-[10px] font-semibold opacity-80 block">{previewIntervals[Rating.GOOD]} (3)</span>
                        </button>

                        <button
                            onClick={() => handleReview(Rating.EASY)}
                            disabled={isProcessing}
                            className="p-3.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 rounded-2xl border border-emerald-500/20 transition-all font-black text-center group cursor-pointer active:scale-95"
                        >
                            <span className="text-sm block leading-none mb-1">{isJa ? '簡単 (Easy)' : 'Oson (Easy)'}</span>
                            <span className="text-[10px] font-semibold opacity-80 block">{previewIntervals[Rating.EASY]} (4)</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
