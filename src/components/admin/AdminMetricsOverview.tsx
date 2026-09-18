import React from 'react';
import { Database, Users, Activity, CheckCircle2, Clock } from 'lucide-react';
import { SvgLineChart } from '../ui/SvgCharts';

export interface DatabaseResourceMetrics {
  flashcards: number;
  studySessions: number;
  speakingSessions: number;
  speakingCoachSessions: number;
  aiCoachSessions: number;
  speakingErrors: number;
  speakingVocabularies: number;
  diagnosticResults: number;
  learningGoals: number;
  profiles: number;
  globalOverrides?: number;
  writingHistory?: number;
  mockExams?: number;
  customKanji?: number;
  customGrammar?: number;
  customQuiz?: number;
}

export interface AdminMetricsOverviewProps {
  dbMetrics: DatabaseResourceMetrics;
  isJa: boolean;
  totalStudentsCount: number;
  totalAllUsers: number;
  totalAdminsCount: number;
  activeTodayCount: number;
  totalSessionsCount: number;
  totalDurationHours: number;
  remainingMinutes: number;
  totalDurationMinutes: number;
  todaySessionsCount: number;
  dailyAvgPercent: number;
  weeklyAvgPercent: number;
  totalSpeakingMinutes: number;
  chartMode: 'dau' | 'duration';
  setChartMode: (mode: 'dau' | 'duration') => void;
  dailyStats: any[];
}

export const AdminMetricsOverview: React.FC<AdminMetricsOverviewProps> = ({
  dbMetrics,
  isJa,
  totalStudentsCount,
  totalAllUsers,
  totalAdminsCount,
  activeTodayCount,
  totalSessionsCount,
  totalDurationHours,
  remainingMinutes,
  totalDurationMinutes,
  todaySessionsCount,
  dailyAvgPercent,
  weeklyAvgPercent,
  totalSpeakingMinutes,
  chartMode,
  setChartMode,
  dailyStats,
}) => {
  return (
    <>
      {/* Database Resources & Live Metric Registry (All 10 Tables) */}
      <div className="space-y-4 rounded-2xl border border-border/80 bg-card/50 p-4 sm:p-5">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-primary/10 p-1.5 text-primary">
              <Database size={16} />
            </span>
            <div>
              <h3 className="text-sm font-bold text-foreground">
                {isJa
                  ? 'プラットフォーム データベース (Live DB)'
                  : "Platforma Ma'lumotlar Bazasi (Live DB Registry)"}
              </h3>
              <p className="text-[11px] text-muted-foreground">
                {isJa
                  ? '主要テーブルのリアルタイム稼働状況およびレコード総数'
                  : "Barcha asosiy jadvallardagi haqiqiy ma'lumotlar soni va holati"}
              </p>
            </div>
          </div>
          <div className="flex w-fit items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            {isJa ? '同期完了' : 'Sinxronlashgan'}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          <div className="space-y-1 rounded-xl border border-border bg-background/80 p-3">
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{isJa ? '🎴 単語カード' : '🎴 Fleshkartalar'}</span>
              <span className="text-[10px] font-bold text-emerald-400">DB Active</span>
            </div>
            <div className="text-xl font-black text-foreground">
              {dbMetrics.flashcards.toLocaleString()} {isJa ? '件' : 'ta'}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {isJa ? 'Anki & JLPT公式単語' : "Anki & JLPT so'zlar"}
            </div>
          </div>

          <div className="space-y-1 rounded-xl border border-border bg-background/80 p-3">
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{isJa ? '📖 学習セッション' : '📖 Dars Sessiyalari'}</span>
              <span className="text-[10px] font-bold text-emerald-400">DB Active</span>
            </div>
            <div className="text-xl font-black text-foreground">
              {dbMetrics.studySessions.toLocaleString()} {isJa ? '件' : 'ta'}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {isJa ? '完了レッスン履歴' : "O'tilgan darslar tarixi"}
            </div>
          </div>

          <div className="space-y-1 rounded-xl border border-border bg-background/80 p-3">
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{isJa ? '🎙️ 発話セッション' : '🎙️ Speaking Muloqot'}</span>
              <span className="text-[10px] font-bold text-emerald-400">DB Active</span>
            </div>
            <div className="text-xl font-black text-foreground">
              {dbMetrics.speakingSessions.toLocaleString()} {isJa ? '件' : 'ta'}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {isJa ? '音声対話レコード' : 'Jonli audio sessiyalar'}
            </div>
          </div>

          <div className="space-y-1 rounded-xl border border-border bg-background/80 p-3">
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{isJa ? '🤖 AIコーチ指導' : '🤖 Speaking Coach'}</span>
              <span className="text-[10px] font-bold text-emerald-400">DB Active</span>
            </div>
            <div className="text-xl font-black text-foreground">
              {dbMetrics.speakingCoachSessions.toLocaleString()} {isJa ? '件' : 'ta'}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {isJa ? '面接・会話対話ログ' : 'Sensei muloqotlari'}
            </div>
          </div>

          <div className="space-y-1 rounded-xl border border-border bg-background/80 p-3">
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{isJa ? '🧠 AI文法・演習' : '🧠 AI Coach Mashqlar'}</span>
              <span className="text-[10px] font-bold text-emerald-400">DB Active</span>
            </div>
            <div className="text-xl font-black text-foreground">
              {dbMetrics.aiCoachSessions.toLocaleString()} {isJa ? '件' : 'ta'}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {isJa ? '文法解析 & 添削' : 'Grammatika & AI tahlillar'}
            </div>
          </div>

          <div className="space-y-1 rounded-xl border border-border bg-background/80 p-3">
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{isJa ? '⚠️ 弱点克服ログ' : '⚠️ Xatolar Bazasi'}</span>
              <span className="text-[10px] font-bold text-amber-400">ErrorVault</span>
            </div>
            <div className="text-xl font-black text-foreground">
              {dbMetrics.speakingErrors.toLocaleString()} {isJa ? '件' : 'ta'}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {isJa ? '添削・修正済み項目' : "To'g'rilangan xatolar"}
            </div>
          </div>

          <div className="space-y-1 rounded-xl border border-border bg-background/80 p-3">
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{isJa ? '📝 登録語彙' : "📝 Lug'at So'zlari"}</span>
              <span className="text-[10px] font-bold text-emerald-400">Saved Vocab</span>
            </div>
            <div className="text-xl font-black text-foreground">
              {dbMetrics.speakingVocabularies.toLocaleString()} {isJa ? '件' : 'ta'}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {isJa ? '保存された新規単語' : "Saqlangan yangi so'zlar"}
            </div>
          </div>

          <div className="space-y-1 rounded-xl border border-border bg-background/80 p-3">
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{isJa ? '🎯 実力診断テスト' : '🎯 Diagnostik Test'}</span>
              <span className="text-[10px] font-medium text-muted-foreground">
                {isJa ? '待機中' : 'Kutilmoqda'}
              </span>
            </div>
            <div className="text-xl font-black text-foreground">
              {dbMetrics.diagnosticResults.toLocaleString()} {isJa ? '件' : 'ta'}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {isJa ? 'レベル判定受験ログ' : 'Kirish imtihonlari'}
            </div>
          </div>

          <div className="space-y-1 rounded-xl border border-border bg-background/80 p-3">
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{isJa ? '🏆 個人学習目標' : "🏆 O'quv Maqsadlari"}</span>
              <span className="text-[10px] font-medium text-muted-foreground">
                {isJa ? '待機中' : 'Kutilmoqda'}
              </span>
            </div>
            <div className="text-xl font-black text-foreground">
              {dbMetrics.learningGoals.toLocaleString()} {isJa ? '件' : 'ta'}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {isJa ? '個別学習ロードマップ' : 'Shaxsiy rejalar'}
            </div>
          </div>

          <div className="space-y-1 rounded-xl border border-border bg-background/80 p-3">
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{isJa ? '👥 登録ユーザー' : '👥 Foydalanuvchilar'}</span>
              <span className="text-[10px] font-bold text-primary">Profiles</span>
            </div>
            <div className="text-xl font-black text-foreground">
              {dbMetrics.profiles.toLocaleString()} {isJa ? '名' : 'ta'}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {isJa ? '登録済みプロフィール' : "Ro'yxatdan o'tganlar"}
            </div>
          </div>

          <div className="space-y-1 rounded-xl border border-border bg-background/80 p-3">
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{isJa ? '🌐 グローバル修正' : '🌐 Global Tuzatishlar'}</span>
              <span className="text-[10px] font-bold text-indigo-400">Overrides</span>
            </div>
            <div className="text-xl font-black text-foreground">
              {(dbMetrics.globalOverrides ?? 0).toLocaleString()} {isJa ? '件' : 'ta'}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {isJa ? '一括適用辞書データ' : "Barcha uchun tuzatilgan so'zlar"}
            </div>
          </div>

          <div className="space-y-1 rounded-xl border border-border bg-background/80 p-3">
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{isJa ? '✍️ 作文・エッセイ' : '✍️ Sakubun / Insholar'}</span>
              <span className="text-[10px] font-bold text-purple-400">Writing</span>
            </div>
            <div className="text-xl font-black text-foreground">
              {(dbMetrics.writingHistory ?? 0).toLocaleString()} {isJa ? '件' : 'ta'}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {isJa ? 'AI採点提出ログ' : 'AI tahrir va insho tarixi'}
            </div>
          </div>

          <div className="space-y-1 rounded-xl border border-border bg-background/80 p-3">
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{isJa ? '📝 模擬試験' : '📝 Mock Imtihonlar'}</span>
              <span className="text-[10px] font-bold text-amber-400">Exams</span>
            </div>
            <div className="text-xl font-black text-foreground">
              {(dbMetrics.mockExams ?? 0).toLocaleString()} {isJa ? '件' : 'ta'}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {isJa ? 'JLPT・IELTS受験記録' : 'Topshirilgan test natijalari'}
            </div>
          </div>

          <div className="space-y-1 rounded-xl border border-border bg-background/80 p-3">
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{isJa ? '🈁 カスタム漢字' : '🈁 Maxsus Kanji'}</span>
              <span className="text-[10px] font-bold text-teal-400">Content</span>
            </div>
            <div className="text-xl font-black text-foreground">
              {(dbMetrics.customKanji ?? 0).toLocaleString()} {isJa ? '字' : 'ta'}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {isJa ? '追加された独自漢字' : "Qo'shilgan maxsus kanjilar"}
            </div>
          </div>

          <div className="space-y-1 rounded-xl border border-border bg-background/80 p-3">
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{isJa ? '📑 カスタム文法' : '📑 Maxsus Grammatika'}</span>
              <span className="text-[10px] font-bold text-teal-400">Content</span>
            </div>
            <div className="text-xl font-black text-foreground">
              {(dbMetrics.customGrammar ?? 0).toLocaleString()} {isJa ? '項目' : 'ta'}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {isJa ? '追加された文法規則' : "Qo'shimcha dars qoidalari"}
            </div>
          </div>
        </div>
      </div>

      {/* Key Real DB Stats Cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-xs">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-bold text-primary">
            <Users size={18} />
          </div>
          <div>
            <div className="text-xl font-black text-foreground">
              {totalStudentsCount} {isJa ? '名' : 'nafar'}
            </div>
            <div className="text-[11px] font-semibold text-muted-foreground">
              {isJa
                ? `総受講生数 (計${totalAllUsers}アカウント、管理者${totalAdminsCount}名)`
                : `Jami O'quvchilar (${totalAllUsers} akkount, ${totalAdminsCount} admin)`}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-xs">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 font-bold text-emerald-500">
            <Activity size={18} />
          </div>
          <div>
            <div className="text-xl font-black text-foreground">
              {activeTodayCount} {isJa ? '名' : 'nafar'}
            </div>
            <div className="text-[11px] font-semibold text-muted-foreground">
              {isJa ? '本日のアクティブ学習者 (DAU)' : "Bugun Faol O'quvchilar"}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-xs">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 font-bold text-amber-500">
            <CheckCircle2 size={18} />
          </div>
          <div>
            <div className="text-xl font-black text-foreground">
              {totalSessionsCount} {isJa ? '件' : 'ta'}
            </div>
            <div className="text-[11px] font-semibold text-muted-foreground">
              {isJa ? '累計学習・演習完了数' : "Bajarilgan Mashg'ulotlar"}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-xs">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A961]/15 font-bold text-[#C9A961]">
            <Clock size={18} />
          </div>
          <div>
            <div className="text-xl font-black text-foreground">
              {isJa
                ? totalDurationHours > 0
                  ? `${totalDurationHours}時間 ${remainingMinutes}分`
                  : `${totalDurationMinutes}分`
                : totalDurationHours > 0
                  ? `${totalDurationHours} soat ${remainingMinutes} daqiqa`
                  : `${totalDurationMinutes} daqiqa`}
            </div>
            <div className="text-[11px] font-semibold text-muted-foreground">
              {isJa ? '総学習時間' : "Jami O'rganish Vaqti"}
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Real DB Analytics Cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="space-y-1 rounded-2xl border border-border bg-card p-3.5 shadow-xs">
          <span className="text-[11px] font-medium text-muted-foreground">
            {isJa ? '本日の対話セッション' : 'Bugungi Suhbatlar'}
          </span>
          <div className="text-lg font-black text-primary">
            {todaySessionsCount} {isJa ? '回' : 'seans'}
          </div>
        </div>
        <div className="space-y-1 rounded-2xl border border-border bg-card p-3.5 shadow-xs">
          <span className="text-[11px] font-medium text-muted-foreground">
            {isJa ? '日次平均達成率' : "Kunlik O'rtacha Foiz"}
          </span>
          <div className="text-lg font-black text-emerald-400">
            {dailyAvgPercent > 0 ? `${dailyAvgPercent}%` : '0%'}
          </div>
        </div>
        <div className="space-y-1 rounded-2xl border border-border bg-card p-3.5 shadow-xs">
          <span className="text-[11px] font-medium text-muted-foreground">
            {isJa ? '週次平均達成率' : "Haftalik O'rtacha Foiz"}
          </span>
          <div className="text-lg font-black text-[#C9A961]">
            {weeklyAvgPercent > 0 ? `${weeklyAvgPercent}%` : '0%'}
          </div>
        </div>
        <div className="space-y-1 rounded-2xl border border-border bg-card p-3.5 shadow-xs">
          <span className="text-[11px] font-medium text-muted-foreground">
            {isJa ? '総発話時間' : 'Jami Gapirilgan Vaqt'}
          </span>
          <div className="text-lg font-black text-amber-400">
            {totalSpeakingMinutes} {isJa ? '分' : 'min'}
          </div>
        </div>
      </div>

      {/* User Activity Chart */}
      <div className="space-y-3 rounded-2xl border border-border bg-card p-4 shadow-xs">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Activity size={16} className="text-primary" />
            <h2 className="text-sm font-bold text-foreground">
              {isJa
                ? 'ユーザーアクティビティ推移 (Live DB)'
                : 'Foydalanuvchilar Faolligi Graph (Real DB Records)'}
            </h2>
          </div>
          <div className="flex items-center gap-1 rounded-xl border border-border bg-muted p-1 text-[11px] font-semibold">
            <button
              onClick={() => setChartMode('dau')}
              className={`cursor-pointer rounded-lg px-2.5 py-1 transition-colors ${chartMode === 'dau' ? 'bg-primary font-bold text-primary-foreground shadow-xs' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {isJa ? 'アクティブユーザー' : "Faol O'quvchilar"}
            </button>
            <button
              onClick={() => setChartMode('duration')}
              className={`cursor-pointer rounded-lg px-2.5 py-1 transition-colors ${chartMode === 'duration' ? 'bg-primary font-bold text-primary-foreground shadow-xs' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {isJa ? '学習時間 (分)' : 'Vaqt (Daqiqa)'}
            </button>
          </div>
        </div>

        {dailyStats.length > 0 ? (
          <div className="h-44 w-full pt-2">
            <SvgLineChart
              data={dailyStats.map((d) => ({
                xLabel: (d.activity_date || d.date || '').substring(5),
                value:
                  chartMode === 'dau'
                    ? d.active_users || d.dau || 0
                    : d.total_duration_minutes || d.duration || 0,
                fullDate: d.activity_date || d.date || '',
                sessions: d.total_sessions || d.sessions || 0,
              }))}
              xKey="xLabel"
              series={[
                {
                  dataKey: 'value',
                  stroke: chartMode === 'dau' ? '#E8483A' : '#C9A961',
                  label:
                    chartMode === 'dau'
                      ? isJa
                        ? 'アクティブユーザー'
                        : "Faol O'quvchilar"
                      : isJa
                        ? '分'
                        : 'Daqiqa',
                },
              ]}
              height={160}
              showArea={true}
            />
          </div>
        ) : (
          <div className="flex h-32 flex-col items-center justify-center rounded-xl border border-dashed border-border text-xs text-muted-foreground">
            <span>
              {isJa ? 'アクティビティ履歴はありません' : 'Real faollik statistikasi mavjud emas'}
            </span>
          </div>
        )}
      </div>
    </>
  );
};
