import confetti from 'canvas-confetti';
import { Crown, Star, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';

const LevelUpModal: React.FC = () => {
    const { settings, getRank } = useStudyData();
    const prevLevelRef = useRef(settings.level);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Check if level increased
        if (settings.level > prevLevelRef.current) {
            // Trigger Confetti
            const duration = 3 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

            const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

            const interval = setInterval(function () {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);

                // since particles fall down, start a bit higher than random
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
            }, 250);

            // Show Modal
            setShowModal(true);
        }

        // Update prevLevel tracker
        prevLevelRef.current = settings.level;
    }, [settings.level]);

    if (!showModal) return null;

    const currentRank = getRank(settings.level);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-1 shadow-2xl max-w-md w-full animate-in zoom-in-50 duration-500">
                <div className="bg-white dark:bg-gray-900 rounded-[1.4rem] p-8 text-center relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-yellow-400/30 rounded-full blur-3xl -z-10"></div>

                    <button
                        onClick={() => setShowModal(false)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <div className="w-24 h-24 bg-gradient-to-tr from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-100 dark:border-gray-800">
                                <Crown size={48} className="text-white fill-current" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md border-2 border-white dark:border-gray-800">
                                LEVEL UP!
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 uppercase tracking-tight">
                        Tabriklaymiz!
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 mb-6 text-lg">
                        Siz yangi darajaga ko'tarildingiz.
                    </p>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-4 mb-8 border border-yellow-100 dark:border-yellow-900/50">
                        <div className="text-sm text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider mb-1">
                            Yangi Unvon
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
                            <Star className="text-yellow-400 fill-current" /> {currentRank}
                        </div>
                    </div>

                    <button
                        onClick={() => setShowModal(false)}
                        className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-0.5 transition-all"
                    >
                        Ajoyib! 🚀
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LevelUpModal;
