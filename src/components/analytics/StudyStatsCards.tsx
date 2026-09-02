import React, { memo } from 'react';
import { Clock, Flame, CheckCircle2, Zap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface StudyStatsCardsProps {
  totalHours: string;
  completedTasks: number;
  currentStreak: number;
  totalXp?: number;
  level?: number;
}

const StudyStatsCards: React.FC<StudyStatsCardsProps> = memo(
  ({ totalHours, completedTasks, currentStreak, totalXp = 0, level = 1 }) => {
    const { language } = useLanguage();

    return (
      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-[#1f2937]">
          <div className="mb-2 flex items-start justify-between">
            <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400">
              <Clock size={20} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {totalHours}
            {language === 'ja' ? 'じかん' : language === 'en' ? 'h' : 's'}
          </h3>
          <p className="text-sm text-gray-500">
            {language === 'ja'
              ? 'がくしゅうじかん'
              : language === 'en'
                ? 'Total Study Time'
                : "Jami O'qish Vaqti"}
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-[#1f2937]">
          <div className="mb-2 flex items-start justify-between">
            <div className="rounded-lg bg-green-50 p-2 text-green-600 dark:bg-green-900/20 dark:text-green-400">
              <CheckCircle2 size={20} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{completedTasks}</h3>
          <p className="text-sm text-gray-500">
            {language === 'ja'
              ? 'かんりょうした タスク'
              : language === 'en'
                ? 'Completed Tasks'
                : 'Bajarilgan Vazifalar'}
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-[#1f2937]">
          <div className="mb-2 flex items-start justify-between">
            <div className="rounded-lg bg-orange-50 p-2 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
              <Flame size={20} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {currentStreak} {language === 'ja' ? 'にち' : language === 'en' ? 'Days' : 'Kun'}
          </h3>
          <p className="text-sm text-gray-500">
            {language === 'ja'
              ? 'れんぞく がくしゅう'
              : language === 'en'
                ? 'Current Streak'
                : 'Joriy Streak'}
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-[#1f2937]">
          <div className="mb-2 flex items-start justify-between">
            <div className="rounded-lg bg-amber-50 p-2 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400">
              <Zap size={20} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{totalXp} XP</h3>
          <p className="text-sm text-gray-500">
            {language === 'ja' ? `レベル ${level} ランク` : `Lvl ${level} Tajriba`}
          </p>
        </div>
      </div>
    );
  },
);

export default StudyStatsCards;
