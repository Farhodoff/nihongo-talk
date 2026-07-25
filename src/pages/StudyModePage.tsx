import { ArrowLeft, CheckCircle2, Loader2, Volume2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import { Flashcard } from '../types';
import { supabase } from '../lib/supabase';
import { Rating, Grade, calculateReview, getPreviewIntervals } from '../utils/srs';
import { speakText } from '../utils/audioTts';

const StudyModePage: React.FC = () => {
    const { subjectId } = useParams<{ subjectId: string }>();
    const navigate = useNavigate();

    const { flashcards, reviewFlashcard, loading } = useStudyData();

    const [queue, setQueue] = useState<Flashcard[]>([]);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [totalXpEarned, setTotalXpEarned] = useState(0);
    const [accent, setAccent] = useState<'en-GB' | 'en-US'>('en-US');

    useEffect(() => {
        if (subjectId && flashcards.length > 0) {
            const due = flashcards.filter((c: Flashcard) =>
                c.subjectId === subjectId && new Date(c.nextReviewDate) <= new Date()
            );
            // If no due cards, show all cards in subject for revision
            const targetSet = due.length > 0 ? due : flashcards.filter((c: Flashcard) => c.subjectId === subjectId);
            setQueue([...targetSet].sort(() => Math.random() - 0.5).slice(0, 20));
        }
    }, [subjectId, flashcards]);

    const currentCard = queue[currentCardIndex];

    const handleSpeak = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (currentCard?.front) {
            speakText(currentCard.front, accent);
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

            try {
                const { data } = await supabase.functions.invoke('update-xp', {
                    body: { card_id: currentCard.id, rating: grade }
                });
                if (data?.earnedXP) setTotalXpEarned(prev => prev + data.earnedXP);
            } catch (e) {
                // XP edge function fallback
            }

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
        <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-6">
            <div className="flex items-center justify-between">
                <button onClick={() => navigate('/flashcards')} className="p-2.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all">
                    <ArrowLeft size={20} />
                </button>
                <div className="flex items-center gap-3">
                    {/* Accent Switcher */}
                    <div className="flex items-center gap-1 bg-muted/60 p-1 rounded-xl border border-border">
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
                        <div className="flex justify-end">
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
                        <div className="text-center my-auto space-y-3">
                            <p className="text-3xl font-black">{currentCard?.back}</p>
                            <div className="pt-4 border-t border-white/20">
                                <p className="text-sm font-semibold opacity-90">{currentCard?.front}</p>
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