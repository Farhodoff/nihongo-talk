import React from 'react';
import SmartInsight from '../components/SmartInsight';
import StudyStatsCards from '../components/analytics/StudyStatsCards';
import ActivityAnalytics from '../components/analytics/ActivityAnalytics';
import ActivityHeatmap from '../components/analytics/ActivityHeatmap';
import SubjectAnalytics from '../components/analytics/SubjectAnalytics';
import FlashcardAnalytics from '../components/analytics/FlashcardAnalytics';
import { useStudyData } from '../context/StudyPlannerContext';
import Skeleton from '../components/ui/Skeleton';

const ProgressPage: React.FC = () => {
    const { sessions, subjects, tasks, settings, flashcards, loading } = useStudyData();

    const totalHours = (sessions.reduce((acc, s) => acc + s.duration, 0) / 60).toFixed(1);
    const completedTasks = tasks.filter(t => t.completed).length;

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto pb-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Analitika</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Jarayon va tahlillarni kuzatib boring.</p>
                </div>
            </div>

            <SmartInsight />

            {/* KPI Cards */}
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="bg-white dark:bg-[#1f2937] p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="flex justify-between items-start mb-2">
                                <Skeleton width={40} height={40} className="rounded-lg" />
                            </div>
                            <Skeleton width={80} height={32} className="mb-2" />
                            <Skeleton width={100} height={16} />
                        </div>
                    ))}
                </div>
            ) : (
                <StudyStatsCards
                    totalHours={totalHours}
                    completedTasks={completedTasks}
                    currentStreak={settings.currentStreak}
                />
            )}

            {loading ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 h-80">
                        <Skeleton width={200} height={24} className="mb-6" />
                        <Skeleton width="100%" height={240} />
                    </div>
                    <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 h-80">
                        <Skeleton width={200} height={24} className="mb-6" />
                        <Skeleton width="100%" height={240} />
                    </div>
                </div>
            ) : (
                <>
                    <ActivityAnalytics sessions={sessions} />
                    <ActivityHeatmap sessions={sessions} />
                </>
            )}

            {loading ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 h-80">
                            <Skeleton width={200} height={24} className="mb-6" />
                            <Skeleton width="100%" height={240} />
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <SubjectAnalytics
                        subjects={subjects}
                        sessions={sessions}
                        flashcards={flashcards}
                    />

                    <FlashcardAnalytics flashcards={flashcards} />
                </>
            )}
        </div>
    );
};

export default ProgressPage;
