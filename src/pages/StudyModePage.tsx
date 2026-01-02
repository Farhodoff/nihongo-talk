import { ArrowLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useStudyPlanner } from '../context/StudyPlannerContext';
import { Rating } from '../utils/srs';

const StudyModePage: React.FC = () => {
    const { subjectId } = useParams<{ subjectId: string }>();
    const navigate = useNavigate();
    const { flashcards, reviewFlashcard, awardXP } = useStudyPlanner();

    // Get due cards for this subject
    // Note: In real app, we might shuffle them.
    const [queue, setQueue] = useState<typeof flashcards>([]);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        if (subjectId) {
            const due = flashcards.filter(c =>
                c.subjectId === subjectId && new Date(c.nextReviewDate) <= new Date()
            );
            setQueue(due);
        }
    }, [subjectId, flashcards]);

    const currentCard = queue[currentCardIndex];


    const handleRate = (grade: number) => {
        if (!currentCard) return;

        reviewFlashcard(currentCard.id, grade as any);
        awardXP(5); // 5 XP per card review

        if (currentCardIndex < queue.length - 1) {
            setIsFlipped(false);
            setCurrentCardIndex(prev => prev + 1);
        } else {
            setIsFinished(true);
        }
    };

    if (isFinished || queue.length === 0) {
        return (
            <div className="text-center py-20">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Hammasi Tamom! 🎉</h2>
                <p className="text-gray-500 mb-8">Hozircha barcha kartalarni takrorlab bo'ldingiz.</p>
                <Button onClick={() => navigate('/flashcards')}>To'plamlarga qaytish</Button>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto h-[calc(100vh-140px)] flex flex-col">
            <div className="flex items-center justify-between mb-8">
                <button onClick={() => navigate('/flashcards')} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <ArrowLeft />
                </button>
                <span className="text-sm font-medium text-gray-500">
                    Karta {currentCardIndex + 1} / {queue.length}
                </span>
            </div>

            {/* Flashcard Area */}
            <div className="flex-1 perspective-1000 relative">
                <div
                    className={`relative w-full h-96 bg-white dark:bg-[#1f2937] rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                    onClick={() => setIsFlipped(!isFlipped)}
                >
                    {/* Front */}
                    <div className={`absolute inset-0 backface-hidden flex flex-col items-center justify-center p-8 ${isFlipped ? 'hidden' : 'block'}`}>
                        <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-4">Savol</h3>
                        <p className="text-2xl font-medium text-gray-900 dark:text-white">{currentCard.front}</p>
                        <p className="absolute bottom-8 text-xs text-gray-400">O'girish uchun bosing</p>
                    </div>

                    {/* Back */}
                    <div className={`absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center justify-center p-8 ${!isFlipped ? 'hidden' : 'block'}`}>
                        <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-4">Javob</h3>
                        <p className="text-2xl font-medium text-gray-900 dark:text-white">{currentCard.back}</p>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="mt-8 h-24">
                {!isFlipped ? (
                    <Button className="w-full py-4 text-lg" onClick={() => setIsFlipped(true)}>
                        Javobni Ko'rsatish
                    </Button>
                ) : (
                    <div className="grid grid-cols-4 gap-4">
                        <button
                            onClick={() => handleRate(Rating.AGAIN)}
                            className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 py-3 rounded-xl font-medium hover:bg-red-200 transition-colors"
                        >
                            Qayta
                            <span className="block text-xs opacity-70 font-normal">1m</span>
                        </button>
                        <button
                            onClick={() => handleRate(Rating.HARD)}
                            className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 py-3 rounded-xl font-medium hover:bg-orange-200 transition-colors"
                        >
                            Qiyin
                            <span className="block text-xs opacity-70 font-normal">2d</span>
                        </button>
                        <button
                            onClick={() => handleRate(Rating.GOOD)}
                            className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 py-3 rounded-xl font-medium hover:bg-blue-200 transition-colors"
                        >
                            Yaxshi
                            <span className="block text-xs opacity-70 font-normal">4d</span>
                        </button>
                        <button
                            onClick={() => handleRate(Rating.EASY)}
                            className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 py-3 rounded-xl font-medium hover:bg-green-200 transition-colors"
                        >
                            Oson
                            <span className="block text-xs opacity-70 font-normal">7d</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudyModePage;
