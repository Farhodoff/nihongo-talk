import React, { useState, useMemo } from 'react';
import { AlertTriangle, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import {
  JlptLevel,
  JlptReadinessService,
  UserSkillStats,
} from '../../services/JlptReadinessService';
import { SvgRadarChart } from '../ui/SvgCharts';
import { useLanguage } from '../../context/LanguageContext';

export interface JlptReadinessCardProps {
  stats: UserSkillStats;
  initialLevel?: JlptLevel;
}

export const JlptReadinessCard: React.FC<JlptReadinessCardProps> = ({
  stats,
  initialLevel = 'N5',
}) => {
  const { language } = useLanguage();
  const [selectedLevel, setSelectedLevel] = useState<JlptLevel>(initialLevel);

  const report = useMemo(() => {
    return JlptReadinessService.calculateReadiness(stats, selectedLevel);
  }, [stats, selectedLevel]);

  const langKey = language === 'ja' ? 'ja' : language === 'en' ? 'en' : 'uz';
  const levels: JlptLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];

  const probabilityColor =
    report.passProbability >= 75
      ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
      : report.passProbability >= 50
        ? 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20'
        : 'text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/20';

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-sm transition-all sm:p-6">
      {/* Header & Level Selector */}
      <div className="flex flex-col gap-4 border-b border-border pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-rose-500/20 bg-rose-500/10 text-xl text-rose-500">
            🎌
          </div>
          <div>
            <h3 className="text-base font-black tracking-tight text-foreground sm:text-lg">
              {language === 'ja'
                ? 'JLPT 合格判定 & スキルレーダー'
                : language === 'en'
                  ? 'JLPT Readiness & Skill Radar'
                  : 'JLPT Tayyorgarlik & 5 Qirrali Radar'}
            </h3>
            <p className="text-xs text-muted-foreground">
              {language === 'ja'
                ? '5大スキルバランス、総合予測スコアおよびセクション別基準点判定'
                : language === 'en'
                  ? '5-pillar skill balance, projected 180 score, and sectional cutoff validation'
                  : '5 ta asosiy ustun, 180 ballik prognoz va 19/60 minimal sektor xavfsizligi'}
            </p>
          </div>
        </div>

        {/* Level Switcher */}
        <div className="flex items-center gap-1.5 self-start rounded-2xl border border-border/80 bg-muted/40 p-1 sm:self-auto">
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`cursor-pointer rounded-xl px-3 py-1.5 text-xs font-black transition-all active:scale-95 ${
                selectedLevel === lvl
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Radar Chart + Projected Score Card */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
        {/* Radar Chart Visual (5 columns) */}
        <div className="flex flex-col items-center justify-center rounded-2xl border border-border/60 bg-muted/10 p-4 lg:col-span-5">
          <span className="mb-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            {language === 'ja'
              ? '5大スキル分布レーダー (0-100%)'
              : language === 'en'
                ? '5-Skill Radar Polygon (0-100%)'
                : '5 Koʻnikma Radari (0-100%)'}
          </span>
          <div className="h-64 w-full max-w-[280px]">
            <SvgRadarChart data={report.radarData} height={250} color="#f43f5e" />
          </div>
        </div>

        {/* Score Projection & Sectional Health (7 columns) */}
        <div className="space-y-4 lg:col-span-7">
          {/* Main KPI Row */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {/* Projected Score */}
            <div className="rounded-2xl border border-border bg-muted/20 p-3.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                {language === 'ja'
                  ? '予測スコア'
                  : language === 'en'
                    ? 'Projected Score'
                    : 'Prognoz Ball'}
              </span>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-black text-foreground">{report.projectedScore}</span>
                <span className="text-xs font-semibold text-muted-foreground">/ 180</span>
              </div>
              <p className="mt-0.5 text-[11px] text-muted-foreground">
                {language === 'ja'
                  ? `合格ライン: ${report.passMark}点`
                  : language === 'en'
                    ? `Pass mark: ${report.passMark}`
                    : `O'tish: ${report.passMark} ball`}
              </p>
            </div>

            {/* Pass Probability */}
            <div className="rounded-2xl border border-border bg-muted/20 p-3.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                {language === 'ja'
                  ? '合格確率'
                  : language === 'en'
                    ? 'Pass Probability'
                    : "O'tish Ehtimoli"}
              </span>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-2xl font-black text-foreground">
                  {report.passProbability}%
                </span>
              </div>
              <span
                className={`mt-1 inline-block rounded-md border px-2 py-0.5 text-[10px] font-extrabold ${probabilityColor}`}
              >
                {report.isProjectedToPass
                  ? language === 'ja'
                    ? '合格圏内'
                    : language === 'en'
                      ? 'Likely Pass'
                      : 'Katta Ehtimol'
                  : language === 'en'
                    ? 'More Prep Needed'
                    : 'Tayyorgarlik Zarur'}
              </span>
            </div>

            {/* Overall Readiness */}
            <div className="col-span-2 rounded-2xl border border-border bg-muted/20 p-3.5 sm:col-span-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                {language === 'ja'
                  ? '総合準備率'
                  : language === 'en'
                    ? 'Overall Readiness'
                    : 'Tayyorgarlik'}
              </span>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-black text-foreground">
                  {report.overallReadiness}%
                </span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-rose-500 transition-all duration-500"
                  style={{ width: `${report.overallReadiness}%` }}
                />
              </div>
            </div>
          </div>

          {/* Sectional Cutoff Verification (19/60 point check) */}
          <div className="rounded-2xl border border-border/70 bg-muted/30 p-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <ShieldCheck size={15} className="text-rose-500" />
                <span>
                  {language === 'ja'
                    ? 'セクション別 基準点判定（各セクション最低19/60点）'
                    : language === 'en'
                      ? 'Sectional Cutoff Check (Min 19/60 per section)'
                      : "Sektorlar Xavfsizligi (Har bir bo'lim min 19/60 ball)"}
                </span>
              </span>
              {report.hasSectionalFailureRisk ? (
                <span className="flex items-center gap-1 rounded-md bg-rose-500/10 px-2 py-0.5 text-[10px] font-black text-rose-600 dark:text-rose-400">
                  <AlertTriangle size={12} />
                  <span>{language === 'ja' ? '足切り危険あり' : 'Xavf mavjud'}</span>
                </span>
              ) : (
                <span className="flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-black text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={12} />
                  <span>{language === 'ja' ? '全セクション安全' : 'Barchasi xavfsiz'}</span>
                </span>
              )}
            </div>

            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {/* Gengo Chishiki */}
              <div
                className={`rounded-xl border p-2.5 ${
                  report.sections.gengoChishiki.isAtRisk
                    ? 'border-rose-500/50 bg-rose-500/10'
                    : 'border-border/60 bg-background/60'
                }`}
              >
                <p className="truncate text-[11px] font-bold text-foreground">
                  {report.sections.gengoChishiki.name[langKey]}
                </p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-base font-black">
                    {report.sections.gengoChishiki.score} / 60
                  </span>
                  <span
                    className={`text-[10px] font-bold ${
                      report.sections.gengoChishiki.isAtRisk
                        ? 'text-rose-600 dark:text-rose-400'
                        : 'text-emerald-600 dark:text-emerald-400'
                    }`}
                  >
                    {report.sections.gengoChishiki.isAtRisk ? '< 19 (Xavf)' : '≥ 19 (Oʻtadi)'}
                  </span>
                </div>
              </div>

              {/* Dokkai */}
              <div
                className={`rounded-xl border p-2.5 ${
                  report.sections.dokkai.isAtRisk
                    ? 'border-rose-500/50 bg-rose-500/10'
                    : 'border-border/60 bg-background/60'
                }`}
              >
                <p className="truncate text-[11px] font-bold text-foreground">
                  {report.sections.dokkai.name[langKey]}
                </p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-base font-black">{report.sections.dokkai.score} / 60</span>
                  <span
                    className={`text-[10px] font-bold ${
                      report.sections.dokkai.isAtRisk
                        ? 'text-rose-600 dark:text-rose-400'
                        : 'text-emerald-600 dark:text-emerald-400'
                    }`}
                  >
                    {report.sections.dokkai.isAtRisk ? '< 19 (Xavf)' : '≥ 19 (Oʻtadi)'}
                  </span>
                </div>
              </div>

              {/* Choukai */}
              <div
                className={`rounded-xl border p-2.5 ${
                  report.sections.choukai.isAtRisk
                    ? 'border-rose-500/50 bg-rose-500/10'
                    : 'border-border/60 bg-background/60'
                }`}
              >
                <p className="truncate text-[11px] font-bold text-foreground">
                  {report.sections.choukai.name[langKey]}
                </p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-base font-black">{report.sections.choukai.score} / 60</span>
                  <span
                    className={`text-[10px] font-bold ${
                      report.sections.choukai.isAtRisk
                        ? 'text-rose-600 dark:text-rose-400'
                        : 'text-emerald-600 dark:text-emerald-400'
                    }`}
                  >
                    {report.sections.choukai.isAtRisk ? '< 19 (Xavf)' : '≥ 19 (Oʻtadi)'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Actionable Remedial Advice Banner */}
          <div className="flex items-start gap-2.5 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-3.5 text-xs text-foreground">
            <Zap size={16} className="mt-0.5 shrink-0 text-amber-500" />
            <p className="leading-relaxed">
              <span className="font-bold">
                {language === 'ja'
                  ? 'AI学習アドバイス: '
                  : language === 'en'
                    ? 'AI Insight: '
                    : 'AI Tavsiya: '}
              </span>
              {report.actionableRecommendation[langKey]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
