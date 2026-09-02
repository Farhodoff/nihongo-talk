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
import { useGamificationInfo } from '../stores';

const ProgressPage: React.FC = () => {
  const { sessions, subjects, tasks, settings, flashcards, coachSessions, loading } =
    useStudyData();
  const { totalXp, level } = useGamificationInfo();
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'language' | 'subjects'>('overview');
  const [isShareOpen, setIsShareOpen] = useState(false);

  const totalHours = (sessions.reduce((acc, s) => acc + s.duration, 0) / 60).toFixed(1);
  const completedTasks = tasks.filter((t) => t.completed || t.status === 'done').length;

  return (
    <div className="mx-auto max-w-7xl space-y-6 p-4 pb-12 duration-200 animate-in fade-in md:p-8">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">
            {language === 'ja'
              ? '学習進捗 & アナリティクス'
              : language === 'en'
                ? 'Study Progress & Analytics'
                : "O'quv Statistikasi & Progress"}
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {language === 'ja'
              ? '日々の学習成果、科目別アクティビティ、弱点克服の記録'
              : language === 'en'
                ? 'Daily study performance, activity heatmap, and learning insights'
                : "Kunlik o'rganish natijalari, faollik xaritasi va o'sish ko'rsatkichlari"}
          </p>
        </div>
        <button
          onClick={() => setIsShareOpen(true)}
          className="flex items-center gap-2 rounded-2xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:opacity-90"
        >
          <Share2 size={16} />
          <span>{language === 'ja' ? 'シェアする' : language === 'en' ? 'Share' : 'Ulashish'}</span>
        </button>
      </div>

      {/* Smart Insight AI recommendation */}
      <SmartInsight />

      {/* KPI Cards */}
      {loading ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-5">
              <Skeleton width={40} height={40} className="mb-2 rounded-lg" />
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
          totalXp={totalXp}
          level={level}
        />
      )}

      {/* Tab Navigation */}
      <div className="no-scrollbar flex items-center gap-2 overflow-x-auto border-b border-border pb-3">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-xs font-extrabold transition-all ${
            activeTab === 'overview'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-muted/40 text-muted-foreground hover:bg-muted'
          }`}
        >
          <BarChart3 size={15} />
          <span>{language === 'ja' ? '総合アクティビティ・時間' : 'Umumiy Faoliyat & Vaqt'}</span>
        </button>
        <button
          onClick={() => setActiveTab('language')}
          className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-xs font-extrabold transition-all ${
            activeTab === 'language'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-muted/40 text-muted-foreground hover:bg-muted'
          }`}
        >
          <Globe2 size={15} />
          <span>{language === 'ja' ? '言語・JLPT・スピーキング' : 'Til, JLPT & Speaking'}</span>
        </button>
        <button
          onClick={() => setActiveTab('subjects')}
          className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-xs font-extrabold transition-all ${
            activeTab === 'subjects'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-muted/40 text-muted-foreground hover:bg-muted'
          }`}
        >
          <BookOpen size={15} />
          <span>{language === 'ja' ? '科目・フラッシュカード' : 'Fanlar & Fleshkartalar'}</span>
        </button>
      </div>

      {/* Tab 1: Overview & Time Activity */}
      {activeTab === 'overview' && (
        <div className="space-y-8 duration-300 animate-in fade-in">
          <ActivityAnalytics sessions={sessions} />
          <ActivityHeatmap sessions={sessions} />
        </div>
      )}

      {/* Tab 2: Language, JLPT & Coach */}
      {activeTab === 'language' && (
        <div className="space-y-8 duration-300 animate-in fade-in">
          <JlptProgressAnalytics />
          <CoachAnalytics sessions={coachSessions} />
          <ExamHistoryAnalytics />
        </div>
      )}

      {/* Tab 3: Subjects & Flashcards */}
      {activeTab === 'subjects' && (
        <div className="space-y-8 duration-300 animate-in fade-in">
          <SubjectAnalytics subjects={subjects} sessions={sessions} flashcards={flashcards} />
          <FlashcardAnalytics flashcards={flashcards} />
        </div>
      )}

      <ShareCardModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
    </div>
  );
};

export default ProgressPage;
