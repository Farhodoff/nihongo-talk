import { Crown, Sparkles, Trophy } from 'lucide-react';
import React from 'react';
import { useStudyData } from '../context/StudyPlannerContext';

const UserRankBadge: React.FC = () => {
    const { settings, getRank } = useStudyData();
    const { level, totalXp } = settings;

    // Rank Name
    const rankName = getRank(level);

    // Progress Calculation
    // Level = floor(XP / 500) + 1
    // Current Level XP start = (Level - 1) * 500
    // Next Level XP start = Level * 500
    // XP within current level = totalXp - ((Level - 1) * 500)
    // Actually simpler: XP % 500 is progress within level.
    // Progress % = (XP % 500) / 500 * 100

    const currentLevelProgressXp = totalXp % 500;
    const progressPercent = (currentLevelProgressXp / 500) * 100;

    return (
        <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl p-6 text-white shadow-lg mb-8 relative overflow-hidden ring-4 ring-yellow-400/30">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 p-4 opacity-20 transform rotate-12">
                <Trophy size={100} />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>

            <div className="relative z-10 flex items-center gap-6">
                {/* Level Circle */}
                <div className="relative shrink-0">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-4 border-yellow-300 shadow-inner">
                        <span className="text-3xl font-black text-white drop-shadow-md">{level}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1.5 shadow-md border-2 border-white">
                        <Crown size={14} className="text-white fill-current" />
                    </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="text-yellow-200 animate-pulse" size={18} />
                        <span className="text-yellow-100 font-medium tracking-wide text-sm uppercase">Current Rank</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-3 tracking-tight">{rankName}</h2>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-medium text-yellow-100/90">
                            <span>{currentLevelProgressXp} XP</span>
                            <span>500 XP</span>
                        </div>
                        <div className="h-3 bg-black/20 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
                            <div
                                className="h-full bg-gradient-to-r from-white to-yellow-200 shadow-lg transition-all duration-1000 ease-out relative"
                                style={{ width: `${progressPercent}%` }}
                            >
                                <div className="absolute inset-0 bg-white/30 animate-pulse w-full h-full" />
                            </div>
                        </div>
                        <div className="text-right text-xs text-yellow-100/70 mt-1">
                            Keyingi darajagacha {500 - currentLevelProgressXp} XP qoldi
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRankBadge;
