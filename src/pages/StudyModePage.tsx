import { ArrowLeft, CheckCircle2, Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import { Flashcard } from '../types';
import { supabase } from '../lib/supabase';

enum Rating {
    AGAIN = 1,
    HARD = 2,
    GOOD = 3,
    EASY = 4
}

const StudyModePage: React.FC = () => {
    const { subjectId } = useParams<{ subjectId: string }>();
    const navigate = useNavigate();

    // To'g'ri nomlangan hook va undan olingan qiymatlar
    const { flashcards, reviewFlashcard, loading } = useStudyData();

    const [queue, setQueue] = useState<Flashcard[]>([]);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [totalXpEarned, setTotalXpEarned] = useState(0);

    useEffect(() => {
        if (subjectId && flashcards.length > 0) {
            const due = flashcards.filter((c: Flashcard) =>
                c.subjectId === subjectId && new Date(c.nextReviewDate) <= new Date()
            );
            // Agar bugungi kartalar bo'lmasa, hammasini o'qish uchun chiqarib berish (optional tweak)
            // Hozircha faqat due kartalar
            setQueue([...due].sort(() => Math.random() - 0.5));
        }
    }, [subjectId, flashcards]);

    const currentCard = queue[currentCardIndex];

    const handleRate = async (grade: number) => {
        if (!currentCard || isProcessing) return;
        setIsProcessing(true);

        try {
            await reviewFlashcard(currentCard.id, grade);

            // Edge Function orqali XP hisoblash
            const { data } = await supabase.functions.invoke('update-xp', {
                body: { card_id: currentCard.id, rating: grade }
            });

            if (data?.earnedXP) setTotalXpEarned(prev => prev + data.earnedXP);

            if (currentCardIndex < queue.length - 1) {
                setIsFlipped(false);
                setCurrentCardIndex(prev => prev + 1);
            } else {
                setIsFinished(true);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsProcessing(false);
        }
    };

    if (loading) return <div className="flex justify-center p-20"><Loader2 className="animate-spin" /></div>;

    if (isFinished || (queue.length === 0 && !loading)) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <CheckCircle2 className="text-green-500 mb-4" size={48} />
                <h2 className="text-2xl font-bold mb-2">Sessiya yakunlandi!</h2>
                {totalXpEarned > 0 && <p className="text-indigo-600 font-bold mb-6">+{totalXpEarned} XP to'pladingiz</p>}
                <Button onClick={() => navigate('/flashcards')}>Orqaga qaytish</Button>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="flex items-center justify-between mb-8">
                <button onClick={() => navigate('/flashcards')}><ArrowLeft /></button>
                <span className="text-sm font-bold text-indigo-600">{currentCardIndex + 1} / {queue.length}</span>
            </div>

            <div className="perspective-1000 h-80">
                <div
                    className={`relative w-full h-full transition-all duration-500 transform-style-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
                    onClick={() => setIsFlipped(!isFlipped)}
                >
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden bg-white dark:bg-gray-800 rounded-3xl shadow-xl flex items-center justify-center p-8 border border-gray-100 dark:border-gray-700">
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">{currentCard?.front}</p>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-indigo-50 dark:bg-gray-700 rounded-3xl shadow-xl flex items-center justify-center p-8">
                        <p className="text-2xl font-medium text-gray-900 dark:text-white">{currentCard?.back}</p>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                {!isFlipped ? (
                    <Button className="w-full py-4" onClick={() => setIsFlipped(true)}>Javobni ko'rish</Button>
                ) : (
                    <div className="grid grid-cols-4 gap-2">
                        {[
                            { l: 'Qayta', v: Rating.AGAIN, c: 'bg-red-50 text-red-600' },
                            { l: 'Qiyin', v: Rating.HARD, c: 'bg-orange-50 text-orange-600' },
                            { l: 'Yaxshi', v: Rating.GOOD, c: 'bg-blue-50 text-blue-600' },
                            { l: 'Oson', v: Rating.EASY, c: 'bg-green-50 text-green-600' }
                        ].map(b => (
                            <button key={b.v} onClick={() => handleRate(b.v)} className={`${b.c} p-4 rounded-2xl font-bold text-xs hover:opacity-80`}>
                                {b.l}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudyModePage;