import { Flame } from 'lucide-react';
import React, { memo } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { useGamificationInfo } from '../stores';
import { getLevelInfo } from '../utils/gamification';

interface LevelProgressContentProps {
  totalXp: number;
  currentStreak: number;
}

const LevelProgressContent: React.FC<LevelProgressContentProps> = memo(
  ({ totalXp, currentStreak }) => {
    const { level, title, progress, currentXp, xpToNext } = getLevelInfo(totalXp);

    return (
      <div className="mb-6 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-4 text-white shadow-lg">
        <div className="mb-2 flex items-start justify-between">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider opacity-90">{title}</h3>
            <p className="flex items-center gap-2 text-2xl font-bold">Lvl {level}</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 rounded-lg bg-white/20 px-2 py-1 text-sm font-medium">
              <Flame size={14} className="fill-orange-300 text-orange-300" />
              {currentStreak} Kunlik Streak
            </div>
          </div>
        </div>

        <div className="mb-1 flex justify-between text-xs opacity-80">
          <span>{currentXp} XP</span>
          <span>keyingisiga {xpToNext} XP</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-black/20">
          <div
            className="h-full rounded-full bg-white/90 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  },
);

const LevelProgress: React.FC = () => {
  const studyData = useStudyData();
  const gamification = useGamificationInfo();

  const totalXp = studyData?.settings?.totalXp ?? gamification.totalXp ?? 0;
  const currentStreak = studyData?.settings?.currentStreak ?? gamification.currentStreak ?? 0;

  return <LevelProgressContent totalXp={totalXp} currentStreak={currentStreak} />;
};

export default LevelProgress;
