import { Flame } from 'lucide-react';
import React from 'react';
import { useStudyPlanner } from '../context/StudyPlannerContext';
import { getLevelInfo } from '../utils/gamification';

const LevelProgress: React.FC = () => {
    const { settings } = useStudyPlanner();
    const { level, title, progress, currentXp, xpToNext } = getLevelInfo(settings.totalXp || 0);

    return (
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-4 text-white shadow-lg mb-6">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h3 className="font-bold text-sm opacity-90 uppercase tracking-wider">{title}</h3>
                    <p className="text-2xl font-bold flex items-center gap-2">
                        Lvl {level}
                    </p>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg text-sm font-medium">
                        <Flame size={14} className="text-orange-300 fill-orange-300" />
                        {settings.currentStreak || 0} Kunlik Streak
                    </div>
                </div>
            </div>

            <div className="mb-1 flex justify-between text-xs opacity-80">
                <span>{currentXp} XP</span>
                <span>keyingisiga {xpToNext} XP</span>
            </div>

            <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                <div
                    className="h-full bg-white/90 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};

export default LevelProgress;
