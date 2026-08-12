import React from 'react';
import { Award, AlertTriangle, Lightbulb, RefreshCw, ArrowLeft, XCircle } from 'lucide-react';
import { ExamDiagnosticReport } from '../../utils/ai/examEvaluator';

interface JlptExamResultCardProps {
    report: ExamDiagnosticReport;
    level: string;
    onRetry: () => void;
    onBackToHub: () => void;
}

export const JlptExamResultCard: React.FC<JlptExamResultCardProps> = ({
    report,
    level,
    onRetry,
    onBackToHub
}) => {
    return (
        <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 py-4">
            {/* Header Score Card */}
            <div className={`p-6 rounded-3xl border text-center shadow-xl backdrop-blur-xl relative overflow-hidden ${
                report.passed
                    ? 'bg-gradient-to-b from-emerald-500/15 to-teal-500/5 border-emerald-500/30'
                    : 'bg-gradient-to-b from-amber-500/15 to-rose-500/5 border-amber-500/30'
            }`}>
                <div className="inline-flex p-3 rounded-2xl bg-white/10 dark:bg-gray-800/40 mb-3 shadow-sm">
                    <Award size={36} className={report.passed ? 'text-emerald-500' : 'text-amber-500'} />
                </div>
                
                <h2 className="text-xl sm:text-2xl font-black text-foreground">
                    JLPT {level} Imtihon Natijasi
                </h2>
                
                <div className="mt-2 text-3xl sm:text-4xl font-black font-mono tracking-tight text-foreground">
                    {report.percentage}%
                </div>

                <div className="mt-2 inline-block px-3 py-1 rounded-full text-xs font-extrabold tracking-wide uppercase shadow-sm bg-background border border-border">
                    {report.overall_score_text}
                </div>
            </div>

            {/* Top 3 Mistakes Section */}
            {report.top_3_mistakes.length > 0 && (
                <div className="bg-card border border-border rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 text-base font-extrabold text-foreground border-b border-border/60 pb-3">
                        <AlertTriangle size={18} className="text-amber-500" />
                        <span>📌 Asosiy Topilgan Xatolar Tahlili (Top 3)</span>
                    </div>

                    <div className="space-y-3">
                        {report.top_3_mistakes.map((mistake, idx) => (
                            <div key={idx} className="p-4 bg-muted/40 rounded-2xl border border-border/60 space-y-1.5">
                                <div className="flex items-center gap-2 text-xs font-bold text-rose-500">
                                    <XCircle size={14} />
                                    <span>{mistake.title}</span>
                                </div>
                                <p className="text-xs text-foreground font-medium leading-relaxed">
                                    {mistake.explanation_uz}
                                </p>
                                <div className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 p-2 rounded-xl inline-block mt-1">
                                    💡 {mistake.correct_concept}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* AI Actionable Recommendation Card */}
            <div className="bg-gradient-to-r from-indigo-950/80 to-purple-950/80 border border-indigo-500/30 rounded-3xl p-5 sm:p-6 text-white shadow-lg space-y-2 backdrop-blur-md">
                <div className="flex items-center gap-2 text-sm font-extrabold text-indigo-300">
                    <Lightbulb size={18} className="text-amber-400" />
                    <span>🤖 AI Coach Tavsiyasi</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-medium">
                    {report.actionable_recommendation}
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between gap-4 pt-2">
                <button
                    onClick={onBackToHub}
                    className="px-4 py-2.5 bg-muted hover:bg-muted/80 text-foreground rounded-2xl text-xs font-bold transition-all flex items-center gap-2 border border-border"
                >
                    <ArrowLeft size={14} />
                    <span>JLPT Hub-ga qaytish</span>
                </button>

                <button
                    onClick={onRetry}
                    className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-2xl text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20"
                >
                    <RefreshCw size={14} />
                    <span>Qayta topshirish</span>
                </button>
            </div>
        </div>
    );
};
