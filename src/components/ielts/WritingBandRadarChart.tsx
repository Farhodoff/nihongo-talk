import React from 'react';
import { SvgRadarChart } from '../ui/SvgCharts';
import { Sparkles, CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import { IeltsEssayEvaluationReport } from '../../utils/ai';

interface WritingBandRadarChartProps {
    report: IeltsEssayEvaluationReport;
    essayText: string;
}

export const WritingBandRadarChart: React.FC<WritingBandRadarChartProps> = ({ report, essayText }) => {
    // Recharts radar data format
    const radarData = [
        { subject: 'Task Response (TR)', score: report.taskResponseScore, fullMark: 9 },
        { subject: 'Coherence & Cohesion (CC)', score: report.coherenceScore, fullMark: 9 },
        { subject: 'Lexical Resource (LR)', score: report.lexicalResourceScore, fullMark: 9 },
        { subject: 'Grammar (GRA)', score: report.grammarScore, fullMark: 9 },
    ];

    // Split essay into paragraphs
    const paragraphs = essayText
        .split(/\n\s*\n/)
        .map(p => p.trim())
        .filter(Boolean);

    const getParagraphTitle = (index: number, total: number) => {
        if (index === 0) return "Kirish Qismi (Introduction)";
        if (index === total - 1 && total > 2) return "Xulosa Qismi (Conclusion)";
        return `Asosiy Qism ${index} (Body Paragraph ${index})`;
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            {/* Radar Chart & High Level Summary Banner */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-card border border-border/80 rounded-3xl p-6 shadow-xl">
                {/* Radar Visual */}
                <div className="flex flex-col items-center justify-center min-h-[280px]">
                    <h4 className="text-sm font-extrabold text-foreground mb-2 flex items-center gap-2">
                        <Sparkles size={16} className="text-indigo-500" />
                        IELTS mezonlari bo'yicha Radar Grafikasi
                    </h4>
                    <div className="w-full h-[240px] flex items-center justify-center">
                        <SvgRadarChart data={radarData} height={240} color="#6366f1" />
                    </div>
                </div>

                {/* Score Summary Metrics */}
                <div className="flex flex-col justify-center space-y-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-500 block mb-1">
                            Umumiy Insho Bali (Overall Band Score)
                        </span>
                        <div className="text-4xl font-extrabold text-foreground flex items-baseline gap-2">
                            {report.overallBand.toFixed(1)}
                            <span className="text-sm font-semibold text-muted-foreground">/ 9.0</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-card border border-border/70">
                            <span className="text-muted-foreground block text-[10px] font-bold">Task Response</span>
                            <span className="text-base font-extrabold text-indigo-500">{report.taskResponseScore.toFixed(1)}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-card border border-border/70">
                            <span className="text-muted-foreground block text-[10px] font-bold">Coherence</span>
                            <span className="text-base font-extrabold text-purple-500">{report.coherenceScore.toFixed(1)}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-card border border-border/70">
                            <span className="text-muted-foreground block text-[10px] font-bold">Lexical Resource</span>
                            <span className="text-base font-extrabold text-emerald-500">{report.lexicalResourceScore.toFixed(1)}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-card border border-border/70">
                            <span className="text-muted-foreground block text-[10px] font-bold">Grammar Accuracy</span>
                            <span className="text-base font-extrabold text-pink-500">{report.grammarScore.toFixed(1)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Paragraph-by-Paragraph AI Feedback Breakdown */}
            <div className="bg-card border border-border/80 rounded-3xl p-6 shadow-xl space-y-5">
                <h4 className="text-base font-extrabold text-foreground flex items-center gap-2">
                    <FileText size={20} className="text-indigo-500" />
                    Paraqrafma-Paraqraf AI Tahlili (Paragraph Feedback Breakdown)
                </h4>

                {paragraphs.length === 0 ? (
                    <p className="text-xs text-muted-foreground italic">Insho paraqraflarga ajratilmadi.</p>
                ) : (
                    <div className="space-y-4">
                        {paragraphs.map((pText, idx) => {
                            const wordCnt = pText.split(/\s+/).length;
                            const title = getParagraphTitle(idx, paragraphs.length);

                            return (
                                <div key={idx} className="p-4 rounded-2xl bg-muted/40 border border-border/60 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-indigo-500 flex items-center gap-2">
                                            <CheckCircle2 size={14} />
                                            {title}
                                        </span>
                                        <span className="text-[10px] text-muted-foreground font-semibold px-2 py-0.5 rounded-full bg-background border">
                                            {wordCnt} ta so'z
                                        </span>
                                    </div>
                                    <p className="text-xs text-foreground/90 italic leading-relaxed bg-background/50 p-3 rounded-xl border border-border/30">
                                        "{pText}"
                                    </p>
                                    <div className="text-[11px] text-muted-foreground flex items-start gap-2 pt-1">
                                        <AlertCircle size={14} className="text-amber-500 shrink-0 mt-0.5" />
                                        <span>
                                            <strong className="text-foreground">AI Maslahati: </strong>
                                            {idx === 0
                                                ? "Paraphrase va thesis statement (asosiy fikr) aniq bayon qilinganini tekshiring."
                                                : idx === paragraphs.length - 1 && paragraphs.length > 2
                                                ? "Xulosada yangi g'oyalar qo'shmasdan, asosiy fikrlarni jamlang."
                                                : "Topic sentence va uni qo'llab-quvvatlovchi misol (supporting evidence) mantiqiy bog'langanligini ta'minlang."}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};
