import React, { useState, useEffect } from 'react';
import { HistoryService, SpeakingSessionItem } from '../../services/HistoryService';
import { SvgBarChart, SvgLineChart } from '../ui/SvgCharts';
import { History, Mic, Clock, MessageSquare, Zap, BarChart2, ChevronRight } from 'lucide-react';
import { ConversationReviewModal } from './ConversationReviewModal';

export const CoachProgressDashboard: React.FC = () => {
  const [history, setHistory] = useState<SpeakingSessionItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'score' | 'duration'>('score');
  const [selectedSession, setSelectedSession] = useState<SpeakingSessionItem | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await HistoryService.getSpeakingHistory();
        setHistory(data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHistory();
  }, []);

  // Format chart data
  const chartData = [...history].reverse().map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric' }),
    Fluency: item.fluencyScore,
    Pronunciation: item.pronunciationScore || 7.0,
    DurationMins: Math.max(1, Math.round(item.durationSeconds / 60)),
  }));

  // Calculate overall stats
  const averageFluency =
    history.length > 0
      ? (history.reduce((acc, curr) => acc + curr.fluencyScore, 0) / history.length).toFixed(1)
      : '0.0';

  const averagePron =
    history.length > 0
      ? (
          history.reduce((acc, curr) => acc + (curr.pronunciationScore || 7.0), 0) / history.length
        ).toFixed(1)
      : '0.0';

  const totalDuration = history.reduce((acc, curr) => acc + curr.durationSeconds, 0);
  const totalMins = Math.round(totalDuration / 60);

  // AI Consistency Score (0 - 100%)
  const consistencyScore =
    history.length === 0 ? 0 : Math.min(100, Math.round(history.length * 15 + totalMins * 1.5));

  const getConsistencyBadge = (score: number) => {
    if (score >= 80)
      return {
        label: '🔥 Master Consistency',
        color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      };
    if (score >= 50)
      return {
        label: "⚡ Yaxshi Sur'at",
        color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
      };
    return {
      label: "🌱 Boshlang'ich Mashq",
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    };
  };

  const consistencyBadge = getConsistencyBadge(consistencyScore);

  return (
    <div className="space-y-6 rounded-3xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-indigo-500/10 p-2 text-indigo-600 dark:text-indigo-400">
            <Mic size={20} />
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-foreground">
              Speaking Coach & AI Analytics
            </h3>
            <p className="mt-0.5 text-[10px] text-muted-foreground">
              Sizning ovozli muloqot va talaffuz o'sish ko'rsatkichlaringiz.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 rounded-xl bg-muted/60 p-1 text-xs font-bold">
          <button
            onClick={() => setActiveTab('score')}
            className={`rounded-lg px-3 py-1 transition-all ${
              activeTab === 'score'
                ? 'bg-card text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Ballar
          </button>
          <button
            onClick={() => setActiveTab('duration')}
            className={`rounded-lg px-3 py-1 transition-all ${
              activeTab === 'duration'
                ? 'bg-card text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Vaqt (Daqiqalar)
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center space-y-2 py-8">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-500/30 border-t-indigo-500" />
          <p className="text-[10px] text-muted-foreground">Statistika yuklanmoqda...</p>
        </div>
      ) : history.length === 0 ? (
        <div className="py-8 text-center text-xs text-muted-foreground">
          Siz hali biror marta Speaking Coach bilan gaplashmadingiz. Sessiyani yakunlagandan keyin
          statistika shu yerda ko'rinadi!
        </div>
      ) : (
        <div className="space-y-6">
          {/* Stats Cards Row */}
          <div className="grid grid-cols-2 gap-3 text-center md:grid-cols-4">
            <div className="rounded-2xl border border-indigo-500/15 bg-indigo-500/5 p-3">
              <span className="block text-[9px] font-bold uppercase text-muted-foreground">
                Avg Fluency
              </span>
              <span className="text-base font-black text-indigo-500">{averageFluency}</span>
            </div>
            <div className="rounded-2xl border border-rose-500/15 bg-rose-500/5 p-3">
              <span className="block text-[9px] font-bold uppercase text-muted-foreground">
                Avg Pronunciation
              </span>
              <span className="text-base font-black text-rose-500">{averagePron}</span>
            </div>
            <div className="rounded-2xl border border-amber-500/15 bg-amber-500/5 p-3">
              <span className="block text-[9px] font-bold uppercase text-muted-foreground">
                Muloqot vaqti
              </span>
              <span className="flex items-center justify-center gap-1 text-base font-black text-amber-500">
                <Clock size={14} />
                {totalMins} daqiqa
              </span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/15 bg-emerald-500/5 p-3">
              <span className="block flex items-center gap-1 text-[9px] font-bold uppercase text-muted-foreground">
                <Zap size={12} className="text-emerald-500" /> AI Consistency
              </span>
              <span className="text-base font-black text-emerald-500">{consistencyScore}%</span>
            </div>
          </div>

          {/* AI Consistency Bar */}
          <div className="space-y-2 rounded-2xl border border-border bg-muted/40 p-4">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="flex items-center gap-1.5 text-foreground">
                <Zap size={14} className="animate-pulse text-emerald-500" />
                AI Consistency Index (Barqarorlik ko'rsatkichi)
              </span>
              <span
                className={`rounded-full border px-2.5 py-0.5 text-[10px] ${consistencyBadge.color}`}
              >
                {consistencyBadge.label}
              </span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-2.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 transition-all duration-500"
                style={{ width: `${consistencyScore}%` }}
              />
            </div>
          </div>

          {/* Progression Chart */}
          <div className="space-y-2">
            <h4 className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
              {activeTab === 'score' ? <History size={14} /> : <BarChart2 size={14} />}
              {activeTab === 'score'
                ? "O'sish Dinamikasi (Fluency & Pronunciation)"
                : "Kunlik O'qish Daqiqalari (Study Duration)"}
            </h4>
            <div className="h-48 w-full">
              {activeTab === 'score' ? (
                <SvgLineChart
                  data={chartData}
                  xKey="date"
                  series={[
                    { dataKey: 'Fluency', stroke: '#6366f1', name: 'Fluency' },
                    { dataKey: 'Pronunciation', stroke: '#f43f5e', name: 'Pronunciation' },
                  ]}
                  height={180}
                  unit="ball"
                />
              ) : (
                <SvgBarChart
                  data={chartData}
                  xKey="date"
                  series={[{ dataKey: 'DurationMins', fill: '#6366f1', name: 'Daqiqalar' }]}
                  height={180}
                  unit="daq"
                />
              )}
            </div>
          </div>

          {/* Session Logs / Previous sessions */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                <MessageSquare size={14} /> Sessiyalar Tarixi
              </h4>
              <span className="text-[10px] font-medium text-muted-foreground">
                Dialogni ko'rish uchun bosing
              </span>
            </div>
            <div className="max-h-48 space-y-2 overflow-y-auto pr-1">
              {history.slice(0, 5).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedSession(item)}
                  className="group flex w-full cursor-pointer items-center justify-between rounded-xl border border-border bg-muted/40 p-3 text-left text-xs transition-all duration-150 hover:border-indigo-500/40 hover:bg-muted/70 active:scale-[0.99]"
                  aria-label={`Sessiyani ko'rish: ${item.persona}`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 font-bold text-foreground transition-colors group-hover:text-indigo-500">
                      <span>Persona: {item.persona}</span>
                      <span className="text-[9px] font-semibold text-muted-foreground">
                        ({item.language.toUpperCase()})
                      </span>
                    </div>
                    <span className="text-[9px] text-muted-foreground">
                      {new Date(item.createdAt).toLocaleDateString()} ·{' '}
                      {Math.round(item.durationSeconds / 60)} daq suhbat
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-indigo-500/10 px-2 py-0.5 text-[10px] font-black text-indigo-500">
                      Fluency {item.fluencyScore.toFixed(1)}
                    </span>
                    <span className="rounded bg-rose-500/10 px-2 py-0.5 text-[10px] font-black text-rose-500">
                      Pron {item.pronunciationScore ? item.pronunciationScore.toFixed(1) : '7.0'}
                    </span>
                    <ChevronRight
                      size={14}
                      className="text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-foreground"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Conversation Review Modal */}
      <ConversationReviewModal
        isOpen={Boolean(selectedSession)}
        session={selectedSession}
        onClose={() => setSelectedSession(null)}
      />
    </div>
  );
};
export default CoachProgressDashboard;
