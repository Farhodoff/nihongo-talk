import { ArrowLeft, CheckCircle2, Loader2, Volume2, Trash2, Edit3, X } from 'lucide-react';
import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import { isAdminEmail } from '../utils/admin';
import { Flashcard } from '../types';
import { Rating, Grade, calculateReview, getPreviewIntervals } from '../utils/srs';
import { speakText } from '../utils/audioTts';
import { toast } from '../hooks/use-toast';

const StudyModePage: React.FC = () => {
    const { subjectId } = useParams<{ subjectId: string }>();
    const navigate = useNavigate();

    const { user, flashcards, subjects, reviewFlashcard, updateFlashcard, deleteFlashcard, loading } = useStudyData();
    const isAdmin = isAdminEmail(user?.email) || localStorage.getItem('admin_override') === 'true';

    const [queue, setQueue] = useState<Flashcard[]>([]);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [totalXpEarned, setTotalXpEarned] = useState(0);
    const [accent, setAccent] = useState<'en-GB' | 'en-US' | 'ja-JP'>('en-US');
    const [isQueueInitialized, setIsQueueInitialized] = useState(false);

    // Admin inline editing state
    const [isEditingCard, setIsEditingCard] = useState(false);
    const [editFront, setEditFront] = useState('');
    const [editBack, setEditBack] = useState('');

    const currentSubject = subjects.find(s => s.id === subjectId);

    useEffect(() => {
        if (subjectId && flashcards.length > 0 && !isQueueInitialized) {
            const due = flashcards.filter((c: Flashcard) =>
                c.subjectId === subjectId && new Date(c.nextReviewDate) <= new Date()
            );
            // If no due cards, show all cards in subject for revision
            const targetSet = due.length > 0 ? due : flashcards.filter((c: Flashcard) => c.subjectId === subjectId);
            setQueue([...targetSet].sort(() => Math.random() - 0.5).slice(0, 20));
            setIsQueueInitialized(true);
        }
    }, [subjectId, flashcards, isQueueInitialized]);

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
                setQueue(prev => prev.filter(c => c.id !== cardToDeleteId));
            } else {
                setQueue(prev => prev.filter(c => c.id !== cardToDeleteId));
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
                back: editBack.trim()
            });

            // Update local queue state
            setQueue(prev => prev.map((c, idx) => 
                idx === currentCardIndex ? { ...c, front: editFront.trim(), back: editBack.trim() } : c
            ));

            setIsEditingCard(false);
            toast({ title: "✅ Kartochka to'g'rilandi va saqlandi" });
        } catch (err) {
            console.error("Failed to edit flashcard:", err);
            toast({ variant: 'destructive', title: "❌ Xatolik", description: "Kartochkani tahrirlashda xatolik yuz berdi." });
        }
    };

    const handleRate = async (grade: Grade) => {
        if (!currentCard || isProcessing) return;
        setIsProcessing(true);

        try {
            calculateReview(
                grade,
                currentCard.interval || 0,
                currentCard.repetitions || 0,
                currentCard.easeFactor || 2.5
            );

            await reviewFlashcard(currentCard.id, grade);
            setTotalXpEarned(prev => prev + grade * 2);

            if (currentCardIndex < queue.length - 1) {
                setIsFlipped(false);
                setCurrentCardIndex(prev => prev + 1);
            } else {
                setIsFinished(true);
            }
        } catch (err) {
            console.error("Flashcard review error:", err);
        } finally {
            setIsProcessing(false);
        }
    };

    if (loading) return <div className="flex justify-center p-20"><Loader2 className="animate-spin text-primary" /></div>;

    if (isFinished || (queue.length === 0 && !loading)) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
                <div className="p-4 bg-emerald-500/10 rounded-full text-emerald-500 mb-4">
                    <CheckCircle2 size={48} />
                </div>
                <h2 className="text-2xl font-black mb-2 text-foreground">Sessiya yakunlandi! 🎉</h2>
                <p className="text-muted-foreground text-sm max-w-md mb-6">
                    Barcha kartochkalar SuperMemo SM-2 algoritmi bo'yicha takrorlandi. Keyingi takrorlash sanasi avtomatik belgilandi.
                </p>
                {totalXpEarned > 0 && <p className="text-primary font-extrabold text-lg mb-6">+{totalXpEarned} XP to'pladingiz</p>}
                <Button onClick={() => navigate('/flashcards')} className="px-8 py-3 font-bold rounded-xl">Orqaga Qaytish</Button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-6 relative">
            {isEditingCard && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-card w-full max-w-lg rounded-3xl p-6 shadow-2xl border border-border">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold">Kartochkani tahrirlash</h3>
                            <button onClick={() => setIsEditingCard(false)} className="p-1 rounded-full hover:bg-muted"><X size={20} /></button>
                        </div>
                        <div className="space-y-4">
                            <input value={editFront} onChange={(e) => setEditFront(e.target.value)} className="w-full p-3 rounded-xl bg-muted border border-border" placeholder="Old qismi" />
                            <textarea value={editBack} onChange={(e) => setEditBack(e.target.value)} className="w-full p-3 rounded-xl bg-muted border border-border h-32" placeholder="Orqa qismi" />
                            <Button onClick={handleSaveEdit} className="w-full">Saqlash</Button>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex items-center justify-between">
                <button onClick={() => navigate('/flashcards')} className="p-2.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all">
                    <ArrowLeft size={20} />
                </button>
                <div className="flex items-center gap-3">
                    {/* Accent / Language Switcher */}
                    <div className="flex items-center gap-1 bg-muted/60 p-1 rounded-xl border border-border">
                        {isJapanese ? (
                            <button
                                onClick={() => setAccent('ja-JP')}
                                className="px-2.5 py-1 text-xs font-bold rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center gap-1.5"
                                title="Yapon tili talaffuzi (ja-JP)"
                            >
                                🇯🇵 JP (Yapon)
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={() => setAccent('en-US')}
                                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${accent === 'en-US' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'}`}
                                >
                                    🇺🇸 US
                                </button>
                                <button
                                    onClick={() => setAccent('en-GB')}
                                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${accent === 'en-GB' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'}`}
                                >
                                    🇬🇧 UK
                                </button>
                            </>
                        )}
                    </div>

                    <span className="text-xs font-black text-primary px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                        {currentCardIndex + 1} / {queue.length}
                    </span>
                </div>
            </div>

            {/* Professional 3D Flip Card */}
            <div className="perspective-1000 h-96 cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
                <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                    {/* Front Side */}
                    <div className="absolute inset-0 backface-hidden glass-card border border-border bg-card/80 backdrop-blur-xl rounded-3xl shadow-xl flex flex-col justify-between p-8">
                        <div className="flex justify-between items-center">
                            {isAdmin ? (
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={handleStartEdit}
                                        title="Admin: Ushbu kartochkani tahrirlash"
                                        className="p-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 rounded-xl transition-all shadow-sm active:scale-95 flex items-center gap-1 text-xs font-bold"
                                    >
                                        <Edit3 size={14} /> Tahrirlash
                                    </button>
                                    <button
                                        onClick={handleDeleteCard}
                                        title="Admin: Ushbu kartochkani bazadan o'chirish"
                                        className="p-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 rounded-xl transition-all shadow-sm active:scale-95 flex items-center gap-1 text-xs font-bold"
                                    >
                                        <Trash2 size={14} /> O'chirish
                                    </button>
                                </div>
                            ) : <div />}
                            <button
                                onClick={handleSpeak}
                                title="Talaffuzni eshitish"
                                className="p-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-2xl transition-all shadow-sm active:scale-95"
                            >
                                <Volume2 size={24} />
                            </button>
                        </div>
                        <div className="text-center my-auto">
                            <p className="text-4xl font-extrabold text-foreground tracking-tight">{currentCard?.front}</p>
                        </div>
                        <p className="text-xs text-center text-muted-foreground font-medium">Kartani bosing — Javobni ko'rish</p>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-xl flex flex-col justify-between p-8 text-white">
                        <div className="flex justify-end">
                            <button
                                onClick={handleSpeak}
                                className="p-3 bg-white/20 hover:bg-white/30 text-white rounded-2xl transition-all active:scale-95"
                            >
                                <Volume2 size={24} />
                            </button>
                        </div>
                        <div className="text-center my-auto space-y-3 max-h-[220px] overflow-y-auto px-2 custom-scrollbar">
                            <div className="text-xl md:text-2xl font-bold whitespace-pre-line leading-relaxed tracking-wide">
                                {currentCard?.back}
                            </div>
                            <div className="pt-3 border-t border-white/20">
                                <p className="text-xs font-semibold opacity-80">{currentCard?.front}</p>
                            </div>
                        </div>
                        <p className="text-xs text-center opacity-75 font-medium">SuperMemo SM-2 bo'yicha baholang</p>
                    </div>
                </div>
            </div>

            <div>
                {!isFlipped ? (
                    <Button className="w-full py-4 text-base font-bold rounded-2xl shadow-lg shadow-primary/20" onClick={() => setIsFlipped(true)}>
                        Javobni ko'rish
                    </Button>
                ) : (
                    (() => {
                        const intervals = currentCard
                            ? getPreviewIntervals(currentCard.interval || 0, currentCard.repetitions || 0, currentCard.easeFactor || 2.5)
                            : { [Rating.AGAIN]: 1, [Rating.HARD]: 3, [Rating.GOOD]: 7, [Rating.EASY]: 14 };
                        
                        return (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {[
                                    { l: 'Qayta (❌)', v: Rating.AGAIN, sub: `${intervals[Rating.AGAIN]} kun`, c: 'bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20' },
                                    { l: 'Qiyin (😐)', v: Rating.HARD, sub: `${intervals[Rating.HARD]} kun`, c: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 hover:bg-amber-500/20' },
                                    { l: 'Yaxshi (🙂)', v: Rating.GOOD, sub: `${intervals[Rating.GOOD]} kun`, c: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 hover:bg-blue-500/20' },
                                    { l: 'Oson (😄)', v: Rating.EASY, sub: `${intervals[Rating.EASY]} kun`, c: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20' }
                                ].map(b => (
                                    <button
                                        key={b.v}
                                        disabled={isProcessing}
                                        onClick={() => handleRate(b.v)}
                                        className={`${b.c} p-3.5 rounded-2xl font-extrabold text-sm border transition-all shadow-sm active:scale-95 text-center`}
                                    >
                                        <div>{b.l}</div>
                                        <span className="text-[11px] font-medium opacity-80 block mt-0.5">{b.sub}</span>
                                    </button>
                                ))}
                            </div>
                        );
                    })()
                )}
            </div>
        </div>
    );
};

export default StudyModePage;