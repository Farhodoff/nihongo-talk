import React, { useEffect, useState, useMemo } from 'react';
import { HistoryService, MockExamItem, SpeakingSessionItem } from '../../services/HistoryService';
import { DailyQuestService } from '../../services/DailyQuestService';
import { useFlashcardStore } from '../../stores/useFlashcardStore';
import { JlptReadinessService, UserSkillStats } from '../../services/JlptReadinessService';
import { JlptReadinessCard } from './JlptReadinessCard';
import { JlptSkillsBreakdown } from './JlptSkillsBreakdown';
import { Sparkles, Trophy, Flame, BookOpen, Volume2, History, Award } from 'lucide-react';
import { SvgLineChart } from '../ui/SvgCharts';

export const JlptProgressAnalytics: React.FC = () => {
  const [jlptExams, setJlptExams] = useState<MockExamItem[]>([]);
  const [jlptSpeaking, setJlptSpeaking] = useState<SpeakingSessionItem[]>([]);
  const [loading, setLoading] = useState(true);

  const flashcards = useFlashcardStore((s) => s.flashcards);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const [exams, speaking] = await Promise.all([
          HistoryService.getMockExamsHistory(),
          HistoryService.getSpeakingHistory(),
        ]);

        setJlptExams(exams.filter((e) => e.examType === 'jlpt'));
        setJlptSpeaking(speaking.filter((s) => s.language === 'ja'));
      } catch (e) {
        console.error('[JlptProgressAnalytics] Error loading history:', e);
      } finally {
        setLoading(false);
      }
    };

    loadHistory();
  }, []);

  // Stored target plan
  const savedTarget = localStorage.getItem('study_planner_jlpt_user_target');
  const targetPlan = savedTarget ? JSON.parse(savedTarget) : null;

  const chartData = [...jlptExams].reverse().map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric' }),
    score: Math.round((item.score / item.totalQuestions) * 180),
    level: item.level || 'JLPT',
  }));

  const highestScore =
    jlptExams.length > 0
      ? Math.max(...jlptExams.map((e) => Math.round((e.score / e.totalQuestions) * 180)))
      : 0;

  const avgFluency =
    jlptSpeaking.length > 0
      ? jlptSpeaking.reduce((a, s) => a + s.fluencyScore, 0) / jlptSpeaking.length
      : null;

  const meta = DailyQuestService.getGamificationMeta(null);

  const userStats: UserSkillStats = useMemo(() => {
    const cards = Array.isArray(flashcards) ? flashcards : [];
    const kanjiFromCards = cards.filter((c) => /[\u4e00-\u9faf]/.test(c.front || '')).length;
    const grammarFromCards = cards.filter(
      (c) => c.subjectId?.includes('grammar') || (c as any).skill === 'grammar',
    ).length;

    return {
      vocabCount: Math.max(cards.length, meta.flashcardsReviewed || 0),
      vocabRetentionRate: 85,
      kanjiCount: Math.max(kanjiFromCards, meta.kanjiMastered || 0),
      grammarMasteredCount: Math.max(
        grammarFromCards,
        meta.listeningQuestionsCompleted > 0 ? 30 : 15,
      ),
      listeningCompletedCount: Math.max(
        meta.listeningQuestionsCompleted || 0,
        jlptExams.length * 4,
      ),
      listeningAccuracy: 80,
      speakingSessionsCount: Math.max(jlptSpeaking.length, meta.speakingSessionsCompleted || 0),
      speakingFluencyScore: avgFluency ?? 7.5,
      mockExamHighestScore: highestScore > 0 ? highestScore : meta.highestMockScore,
    };
  }, [flashcards, meta, jlptExams.length, jlptSpeaking.length, avgFluency, highestScore]);

  const activeLevel = (targetPlan?.currentLevel || 'N5') as any;
  const readinessReport = useMemo(() => {
    return JlptReadinessService.calculateReadiness(userStats, activeLevel);
  }, [userStats, activeLevel]);

  if (loading) return null;

  return (
    <div className="mb-8 space-y-8 rounded-3xl border border-border bg-card p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-4 border-b border-border pb-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-2.5 text-rose-600 dark:text-rose-400">
            <Sparkles size={22} />
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-lg font-extrabold text-foreground">
              JLPT & Kaiwa Japanese Progress 🎌
            </h3>
            <p className="text-xs text-muted-foreground">
              Yapon tili darajangiz, imtihon sinovlari va so'zlashuv statistikasi
            </p>
          </div>
        </div>

        {targetPlan && (
          <div className="flex items-center gap-1.5 rounded-full border border-rose-500/20 bg-rose-500/10 px-3.5 py-1.5 text-xs font-bold text-rose-600 dark:text-rose-400">
            <Flame size={14} /> Target: {targetPlan.currentLevel || 'N5'} ➔{' '}
            {targetPlan.targetLevel || 'N2'}
          </div>
        )}
      </div>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-border bg-muted/30 p-4">
          <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Topshirilgan Imtihonlar
          </span>
          <div className="flex items-center gap-1.5 text-2xl font-black text-foreground">
            <Trophy size={18} className="text-amber-500" />
            {jlptExams.length} <span className="text-xs font-normal text-muted-foreground">ta</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-muted/30 p-4">
          <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Kaiwa Suhbatlar (JA)
          </span>
          <div className="flex items-center gap-1.5 text-2xl font-black text-foreground">
            <Volume2 size={18} className="text-rose-500" />
            {jlptSpeaking.length}{' '}
            <span className="text-xs font-normal text-muted-foreground">seans</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-muted/30 p-4">
          <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Eng Yuqori Ball
          </span>
          <div className="flex items-center gap-1.5 text-2xl font-black text-foreground">
            <Award size={18} className="text-emerald-500" />
            {highestScore}
            <span className="text-xs font-normal text-muted-foreground">/ 180</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-muted/30 p-4">
          <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Suhbat Ravonligi Avg
          </span>
          <div className="flex items-center gap-1.5 text-2xl font-black text-foreground">
            <BookOpen size={18} className="text-indigo-500" />
            {avgFluency !== null ? avgFluency.toFixed(1) : '-'}/10
          </div>
        </div>
      </div>

      {/* 5-Pillar Radar & JLPT Readiness Assessment Card */}
      <JlptReadinessCard stats={userStats} initialLevel={activeLevel} />

      {/* 5 Skills Breakdown with Action Buttons */}
      <JlptSkillsBreakdown pillars={readinessReport.pillars} />

      {/* Score History Progression Chart */}
      {chartData.length > 0 ? (
        <div className="space-y-2 border-t border-border pt-6">
          <h4 className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-foreground">
            <History size={14} className="text-rose-500" />
            JLPT Imtihon Natijalari Dinamikasi (180 ballik shkala)
          </h4>
          <div className="h-44 w-full pt-2">
            <SvgLineChart
              data={chartData}
              xKey="date"
              series={[{ dataKey: 'score', stroke: '#f43f5e', fill: '#f43f5e' }]}
              height={160}
              showArea={true}
              unit="ball"
              showGrid={true}
            />
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-muted/20 p-6 text-center">
          <p className="text-xs font-medium text-muted-foreground">
            Hozircha JLPT imtihon sinovlari tarixi mavjud emas. JLPT Hub sahifasiga o'tib sinov
            topshiring! 🎌
          </p>
        </div>
      )}
    </div>
  );
};

export default JlptProgressAnalytics;
