import React, { useState } from 'react';
import {
  Award,
  AlertTriangle,
  Lightbulb,
  RefreshCw,
  ArrowLeft,
  XCircle,
  Sparkles,
  BookOpen,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { ExamDiagnosticReport, ExamQuestionAnswer } from '../../utils/ai/examEvaluator';
import { useStudyData } from '../../context/StudyPlannerContext';
import { toast } from '../../hooks/use-toast';

interface JlptExamResultCardProps {
  report: ExamDiagnosticReport;
  level: string;
  mistakes?: ExamQuestionAnswer[];
  onRetry: () => void;
  onBackToHub: () => void;
}

export const JlptExamResultCard: React.FC<JlptExamResultCardProps> = ({
  report,
  level,
  mistakes = [],
  onRetry,
  onBackToHub,
}) => {
  const { addFlashcardsBatch } = useStudyData();
  const [isExporting, setIsExporting] = useState(false);
  const [isExported, setIsExported] = useState(false);
  const [showAllMistakes, setShowAllMistakes] = useState(false);

  const handleExportMistakes = async () => {
    if (!mistakes || mistakes.length === 0) return;
    setIsExporting(true);
    try {
      const cards = mistakes.map((q) => ({
        front: `🎌 JLPT ${level} Savol (${(q.section || 'Imtihon').toUpperCase()}):\n\n${q.questionText}`,
        back: `✅ To'g'ri javob:\n${q.correctAnswer}\n\n❌ Sizning javobingiz:\n${q.userAnswer}\n\n💡 Izoh:\n${q.explanationUzbek || "Ushbu savol JLPT imtihoni grammatika/lug'at qoidalariga asoslangan."}`,
      }));
      await addFlashcardsBatch(cards);
      setIsExported(true);
      toast({
        title: '🎴 Fleshkartalarga Saqlandi!',
        description: `${cards.length} ta xato qilingan savol Anki SRS fleshkartalar to'plamiga qo'shildi.`,
      });
    } catch (err) {
      console.error('Failed to export mistakes to flashcards:', err);
      toast({
        title: 'Xatolik',
        description: 'Fleshkartalarga saqlashda xatolik yuz berdi.',
        variant: 'destructive',
      });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-4 animate-in fade-in slide-in-from-bottom-4">
      {/* Header Score Card */}
      <div
        className={`relative overflow-hidden rounded-3xl border p-6 text-center shadow-xl backdrop-blur-xl ${
          report.passed
            ? 'border-emerald-500/30 bg-gradient-to-b from-emerald-500/15 to-teal-500/5'
            : 'border-amber-500/30 bg-gradient-to-b from-amber-500/15 to-rose-500/5'
        }`}
      >
        <div className="mb-3 inline-flex rounded-2xl bg-white/10 p-3 shadow-sm dark:bg-gray-800/40">
          <Award size={36} className={report.passed ? 'text-emerald-500' : 'text-amber-500'} />
        </div>

        <h2 className="text-xl font-black text-foreground sm:text-2xl">
          JLPT {level} Imtihon Natijasi
        </h2>

        <div className="mt-2 font-mono text-3xl font-black tracking-tight text-foreground sm:text-4xl">
          {report.percentage}%
        </div>

        <div className="mt-2 inline-block rounded-full border border-border bg-background px-3 py-1 text-xs font-extrabold uppercase tracking-wide shadow-sm">
          {report.overall_score_text}
        </div>
      </div>

      {/* Mistakes to Flashcards Export Action */}
      {mistakes.length > 0 && (
        <div className="space-y-4 rounded-3xl border border-rose-500/30 bg-gradient-to-r from-rose-500/10 via-purple-500/10 to-indigo-500/10 p-5 shadow-sm sm:p-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-rose-500/20 p-2.5 text-rose-500 dark:text-rose-400">
                <Sparkles size={22} />
              </div>
              <div>
                <h3 className="text-sm font-black text-foreground">
                  Xatolarni Fleshkartaga Saqlash ({mistakes.length} ta savol)
                </h3>
                <p className="text-xs text-muted-foreground">
                  Xato qilingan barcha savollarni 1 tugma bilan Anki SRS fleshkartalarga yuklab,
                  keyinroq takrorlang.
                </p>
              </div>
            </div>
            <button
              onClick={handleExportMistakes}
              disabled={isExporting || isExported}
              className={`flex shrink-0 items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-black shadow-sm transition-all ${
                isExported
                  ? 'cursor-default bg-emerald-600 text-white'
                  : 'bg-rose-600 text-white shadow-rose-500/20 hover:bg-rose-700 active:scale-95'
              }`}
            >
              {isExported ? (
                <>
                  <CheckCircle size={15} />
                  <span>Saqlandi (Anki SRS)</span>
                </>
              ) : (
                <>
                  <BookOpen size={15} />
                  <span>{isExporting ? 'Saqlanmoqda...' : 'Fleshkartalarga saqlash'}</span>
                </>
              )}
            </button>
          </div>

          {/* Expandable list of all mistakes */}
          <div className="border-t border-border/50 pt-2">
            <button
              onClick={() => setShowAllMistakes(!showAllMistakes)}
              className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>
                {showAllMistakes
                  ? "Xatolar ro'yxatini yashirish"
                  : `Barcha ${mistakes.length} ta xatolarni ko'rish`}
              </span>
              {showAllMistakes ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {showAllMistakes && (
              <div className="mt-3 max-h-80 space-y-2.5 overflow-y-auto pr-1">
                {mistakes.map((m, idx) => (
                  <div
                    key={idx}
                    className="space-y-1.5 rounded-2xl border border-border/60 bg-background/80 p-3.5 text-xs"
                  >
                    <div className="flex items-center justify-between text-[11px] font-semibold text-muted-foreground">
                      <span>
                        Savol #{idx + 1} ({m.section || 'Umumiy'})
                      </span>
                    </div>
                    <div className="font-serif font-bold text-foreground">{m.questionText}</div>
                    <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                      <span className="rounded-lg bg-rose-500/10 px-2.5 py-1 text-rose-500">
                        ❌ Sizning javob: {m.userAnswer}
                      </span>
                      <span className="rounded-lg bg-emerald-500/10 px-2.5 py-1 font-bold text-emerald-600 dark:text-emerald-400">
                        ✅ To'g'ri javob: {m.correctAnswer}
                      </span>
                    </div>
                    {m.explanationUzbek && (
                      <p className="border-t border-border/40 pt-1 text-[11px] italic text-muted-foreground">
                        💡 {m.explanationUzbek}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Top 3 Mistakes Section */}
      {report.top_3_mistakes.length > 0 && (
        <div className="space-y-4 rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-2 border-b border-border/60 pb-3 text-base font-extrabold text-foreground">
            <AlertTriangle size={18} className="text-amber-500" />
            <span>📌 Asosiy Topilgan Xatolar Tahlili (Top 3)</span>
          </div>

          <div className="space-y-3">
            {report.top_3_mistakes.map((mistake, idx) => (
              <div
                key={idx}
                className="space-y-1.5 rounded-2xl border border-border/60 bg-muted/40 p-4"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-rose-500">
                  <XCircle size={14} />
                  <span>{mistake.title}</span>
                </div>
                <p className="text-xs font-medium leading-relaxed text-foreground">
                  {mistake.explanation_uz}
                </p>
                <div className="mt-1 inline-block rounded-xl bg-emerald-500/10 p-2 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                  💡 {mistake.correct_concept}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI Actionable Recommendation Card */}
      <div className="space-y-2 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/80 to-purple-950/80 p-5 text-white shadow-lg backdrop-blur-md sm:p-6">
        <div className="flex items-center gap-2 text-sm font-extrabold text-indigo-300">
          <Lightbulb size={18} className="text-amber-400" />
          <span>🤖 AI Coach Tavsiyasi</span>
        </div>
        <p className="text-xs font-medium leading-relaxed text-gray-200 sm:text-sm">
          {report.actionable_recommendation}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <button
          onClick={onBackToHub}
          className="flex items-center gap-2 rounded-2xl border border-border bg-muted px-4 py-2.5 text-xs font-bold text-foreground transition-all hover:bg-muted/80"
        >
          <ArrowLeft size={14} />
          <span>JLPT Hub-ga qaytish</span>
        </button>

        <button
          onClick={onRetry}
          className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:from-indigo-500 hover:to-purple-500"
        >
          <RefreshCw size={14} />
          <span>Qayta topshirish</span>
        </button>
      </div>
    </div>
  );
};
