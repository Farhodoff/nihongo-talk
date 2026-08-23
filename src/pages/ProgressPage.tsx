import React, { useState } from 'react';
import SmartInsight from '../components/SmartInsight';
import StudyStatsCards from '../components/analytics/StudyStatsCards';
import ActivityAnalytics from '../components/analytics/ActivityAnalytics';
import ActivityHeatmap from '../components/analytics/ActivityHeatmap';
import SubjectAnalytics from '../components/analytics/SubjectAnalytics';
import FlashcardAnalytics from '../components/analytics/FlashcardAnalytics';
import ExamHistoryAnalytics from '../components/analytics/ExamHistoryAnalytics';
import CoachAnalytics from '../components/analytics/CoachAnalytics';
import JlptProgressAnalytics from '../components/analytics/JlptProgressAnalytics';
import { useStudyData } from '../context/StudyPlannerContext';
import Skeleton from '../components/ui/Skeleton';
import ShareCardModal from '../components/ShareCardModal';
import { Share2, BarChart3, Globe2, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProgressPage: React.FC = () => {
    const { sessions, subjects, tasks, settings, flashcards, coachSessions, loading } = useStudyData();
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<'overview' | 'language' | 'subjects'>('overview');
    const [isShareOpen, setIsShareOpen] = useState(false);

    const totalHours = (sessions.reduce((acc, s) => acc + s.duration, 0) / 60).toFixed(1);
    const completedTasks = tasks.filter(t => t.completed || t.status === 'done').length;

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto pb-12 space-y-6 animate-in fade-in duration-200">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">{t('progress.title')}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('progress.subtitle')}</p>
                </div>
                <button
                    onClick={() => setIsShareOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-2xl font-bold hover:opacity-90 transition-all shadow-sm text-xs"
                >
                    <Share2 size={16} />
                    <span>{t('progress.share')}</span>
                </button>
            </div>

            {/* Smart Insight AI recommendation */}
            <SmartInsight />

            {/* KPI Cards */}
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="bg-card p-5 rounded-2xl border border-border">
                            <Skeleton width={40} height={40} className="rounded-lg mb-2" />
                            <Skeleton width={80} height={28} className="mb-1" />
                            <Skeleton width={100} height={14} />
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

            {/* Tab Navigation */}
            <div className="flex items-center gap-2 border-b border-border pb-3 overflow-x-auto no-scrollbar">
                <button
                    onClick={() => setActiveTab('overview')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all shrink-0 ${
                        activeTab === 'overview'
                            ? 'bg-primary text-primary-foreground shadow-sm'
                            : 'bg-muted/40 hover:bg-muted text-muted-foreground'
                    }`}
                >
                    <BarChart3 size={15} />
                    <span>Umumiy Faoliyat & Vaqt</span>
                </button>
                <button
                    onClick={() => setActiveTab('language')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all shrink-0 ${
                        activeTab === 'language'
                            ? 'bg-primary text-primary-foreground shadow-sm'
                            : 'bg-muted/40 hover:bg-muted text-muted-foreground'
                    }`}
                >
                    <Globe2 size={15} />
                    <span>Til, JLPT & Speaking</span>
                </button>
                <button
                    onClick={() => setActiveTab('subjects')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all shrink-0 ${
                        activeTab === 'subjects'
                            ? 'bg-primary text-primary-foreground shadow-sm'
                            : 'bg-muted/40 hover:bg-muted text-muted-foreground'
                    }`}
                >
                    <BookOpen size={15} />
                    <span>Fanlar & Fleshkartalar</span>
                </button>
            </div>

            {/* Tab 1: Overview & Time Activity */}
            {activeTab === 'overview' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                    <ActivityAnalytics sessions={sessions} />
                    <ActivityHeatmap sessions={sessions} />
                </div>
            )}

            {/* Tab 2: Language, JLPT & Coach */}
            {activeTab === 'language' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                    <JlptProgressAnalytics />
                    <CoachAnalytics sessions={coachSessions} />
                    <ExamHistoryAnalytics />
                </div>
            )}

            {/* Tab 3: Subjects & Flashcards */}
            {activeTab === 'subjects' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                    <SubjectAnalytics
                        subjects={subjects}
                        sessions={sessions}
                        flashcards={flashcards}
                    />
                    <FlashcardAnalytics flashcards={flashcards} />
                </div>
            )}

            <ShareCardModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
        </div>
    );
};

export default ProgressPage;
