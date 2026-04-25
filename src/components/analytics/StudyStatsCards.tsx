import React, { memo } from 'react';
import { Clock, Flame, CheckCircle2 } from 'lucide-react';


interface StudyStatsCardsProps {
    totalHours: string;
    completedTasks: number;
    currentStreak: number;
}

const StudyStatsCards: React.FC<StudyStatsCardsProps> = memo(({ totalHours, completedTasks, currentStreak }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white dark:bg-[#1f2937] p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-start mb-2">
                    <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600 dark:text-indigo-400">
                        <Clock size={20} />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{totalHours}s</h3>
                <p className="text-sm text-gray-500">Jami O'qish Vaqti</p>
            </div>
            <div className="bg-white dark:bg-[#1f2937] p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-start mb-2">
                    <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-600 dark:text-green-400">
                        <CheckCircle2 size={20} />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{completedTasks}</h3>
                <p className="text-sm text-gray-500">Bajarilgan Vazifalar</p>
            </div>
            <div className="bg-white dark:bg-[#1f2937] p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-start mb-2">
                    <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-orange-600 dark:text-orange-400">
                        <Flame size={20} />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{currentStreak} Kun</h3>
                <p className="text-sm text-gray-500">Joriy Streak</p>
            </div>
        </div>
    );
});

export default StudyStatsCards;
