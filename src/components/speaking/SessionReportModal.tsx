import React from 'react';
import { X, Award, AlertCircle, CheckCircle, Sparkles, BookOpen, Download } from 'lucide-react';
import { SessionAnalysisReport } from '../../utils/ai';

interface SessionReportModalProps {
    isOpen: boolean;
    onClose: () => void;
    report: SessionAnalysisReport | null;
    isLoading: boolean;
    personaTitle: string;
}

export const SessionReportModal: React.FC<SessionReportModalProps> = ({
    isOpen,
    onClose,
    report,
    isLoading,
    personaTitle
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
                
                {/* Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-2xl">
                            <Award size={28} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                Suhbat Tahlili & Natijalari
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Ssenariy: <span className="font-semibold text-indigo-500">{personaTitle}</span>
                            </p>
                        </div>
                    </div>
                    
                    <button
                        onClick={onClose}
                        className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body Content */}
                <div className="p-6 overflow-y-auto space-y-6 flex-1">
                    {isLoading ? (
                        <div className="py-16 flex flex-col items-center justify-center space-y-4">
                            <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
                            <p className="text-gray-500 dark:text-gray-400 font-medium">
                                Sun'iy intellekt suhbatingizni tahlil qilmoqda...
                            </p>
                        </div>
                    ) : report ? (
                        <>
                            {/* Score & Overall Feedback Banner */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex flex-col items-center justify-center text-center shadow-lg">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-100">
                                        Fluency / Band Bali
                                    </span>
                                    <div className="text-4xl font-extrabold my-1">
                                        {report.fluency_score.toFixed(1)} <span className="text-lg opacity-80">/ 9.0</span>
                                    </div>
                                    <span className="text-xs text-indigo-100/90 font-medium">
                                        Erkin so'zlashuv bahosi
                                    </span>
                                </div>

                                <div className="md:col-span-2 p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60 flex flex-col justify-center">
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                                        <Sparkles size={16} className="text-indigo-500" />
                                        Umumiy Xulosa
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {report.overall_feedback}
                                    </p>
                                </div>
                            </div>

                            {/* Strengths & Areas to Improve */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                                    <h4 className="text-sm font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2 mb-3">
                                        <CheckCircle size={18} /> Kuchli Jihatlaringiz
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                        {report.strengths.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-emerald-500 mt-0.5">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                                    <h4 className="text-sm font-bold text-amber-700 dark:text-amber-400 flex items-center gap-2 mb-3">
                                        <AlertCircle size={18} /> Rivojlantirish Kerak Boyicha Maslahatlar
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                        {report.areas_to_improve.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-amber-500 mt-0.5">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Grammar Corrections */}
                            {report.grammar_corrections.length > 0 && (
                                <div className="space-y-3">
                                    <h4 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                        <BookOpen size={18} className="text-indigo-500" />
                                        Grammatik Xatolar va Tuzatishlar ({report.grammar_corrections.length})
                                    </h4>
                                    <div className="space-y-3">
                                        {report.grammar_corrections.map((item, idx) => (
                                            <div key={idx} className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 space-y-2">
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                                                    <span className="text-red-500 dark:text-red-400 line-through bg-red-500/10 px-2 py-0.5 rounded-md font-mono">
                                                        ❌ {item.original}
                                                    </span>
                                                    <span className="text-gray-400 hidden sm:inline">➔</span>
                                                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-md font-mono">
                                                        ✅ {item.corrected}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                                                    💡 {item.explanation}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Better Vocabulary Suggestions */}
                            {report.better_vocabulary.length > 0 && (
                                <div className="space-y-3">
                                    <h4 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                        <Sparkles size={18} className="text-purple-500" />
                                        Lug'at Boyligini Oshirish (Native / Band 8+ Iboralar)
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {report.better_vocabulary.map((vocab, idx) => (
                                            <div key={idx} className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/15 space-y-1">
                                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                                    Oddiy ibora: <span className="font-semibold text-gray-700 dark:text-gray-300">{vocab.original}</span>
                                                </div>
                                                <div className="text-sm font-bold text-purple-600 dark:text-purple-400">
                                                    ✨ {vocab.suggested}
                                                </div>
                                                <div className="text-xs text-gray-600 dark:text-gray-400 pt-1">
                                                    {vocab.context}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="py-12 text-center text-gray-500">
                            Hisobot topilmadi.
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/80 flex items-center justify-between gap-3">
                    {report && (
                        <button
                            onClick={() => {
                                const printWindow = window.open('', '_blank');
                                if (!printWindow) return;
                                const reportHtml = `
                                    <!DOCTYPE html>
                                    <html>
                                    <head>
                                        <title>Speaking Coach Tahlil Hisoboti - ${personaTitle}</title>
                                        <style>
                                            body { font-family: system-ui, -apple-system, sans-serif; padding: 40px; color: #111827; background: #fff; }
                                            h1 { color: #4f46e5; font-size: 24px; margin-bottom: 4px; }
                                            .subtitle { color: #6b7280; font-size: 14px; margin-bottom: 24px; }
                                            .score-card { background: #4f46e5; color: white; padding: 20px; border-radius: 12px; text-align: center; margin-bottom: 24px; }
                                            .score { font-size: 36px; font-weight: bold; }
                                            .section-title { font-size: 18px; font-weight: bold; margin-top: 24px; margin-bottom: 12px; color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 6px; }
                                            .box { background: #f9fafb; border: 1px solid #e5e7eb; padding: 14px; border-radius: 8px; margin-bottom: 12px; }
                                            .green { color: #059669; font-weight: bold; }
                                            .red { color: #dc2626; text-decoration: line-through; }
                                            .item-list { padding-left: 20px; }
                                            .item-list li { margin-bottom: 6px; }
                                        </style>
                                    </head>
                                    <body>
                                        <h1>🎙 Speaking Coach — Suhbat Tahlil Hisoboti</h1>
                                        <div class="subtitle">Ssenariy: <strong>${personaTitle}</strong> | Sana: ${new Date().toLocaleDateString('uz-UZ')}</div>

                                        <div class="score-card">
                                            <div>Fluency / Band Bali</div>
                                            <div class="score">${report.fluency_score.toFixed(1)} / 9.0</div>
                                            <div style="font-size: 12px; opacity: 0.9;">Erkin so'zlashuv bahosi</div>
                                        </div>

                                        <div class="section-title">💡 Umumiy Xulosa</div>
                                        <div class="box">${report.overall_feedback}</div>

                                        <div class="section-title">✅ Kuchli Jihatlar</div>
                                        <ul class="item-list">
                                            ${report.strengths.map(s => `<li>${s}</li>`).join('')}
                                        </ul>

                                        <div class="section-title">🎯 Rivojlantirish Kerak Bo'lgan Jihatlar</div>
                                        <ul class="item-list">
                                            ${report.areas_to_improve.map(a => `<li>${a}</li>`).join('')}
                                        </ul>

                                        ${report.grammar_corrections.length > 0 ? `
                                            <div class="section-title">📚 Grammatik Xatolar & Tuzatishlar</div>
                                            ${report.grammar_corrections.map(g => `
                                                <div class="box">
                                                    <div><span class="red">❌ ${g.original}</span> ➔ <span class="green">✅ ${g.corrected}</span></div>
                                                    <div style="font-size: 12px; color: #6b7280; margin-top: 4px;">💡 ${g.explanation}</div>
                                                </div>
                                            `).join('')}
                                        ` : ''}

                                        ${report.better_vocabulary.length > 0 ? `
                                            <div class="section-title">✨ Band 8+ Lug'at Tavsiyalari</div>
                                            ${report.better_vocabulary.map(v => `
                                                <div class="box">
                                                    <div>Oddiy: ${v.original} ➔ <strong style="color: #7c3aed;">✨ ${v.suggested}</strong></div>
                                                    <div style="font-size: 12px; color: #6b7280; margin-top: 4px;">${v.context}</div>
                                                </div>
                                            `).join('')}
                                        ` : ''}
                                    </body>
                                    </html>
                                `;
                                printWindow.document.write(reportHtml);
                                printWindow.document.close();
                                printWindow.focus();
                                setTimeout(() => {
                                    printWindow.print();
                                }, 500);
                            }}
                            className="px-4 py-2.5 rounded-xl font-semibold bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors flex items-center gap-2 text-sm"
                        >
                            <Download size={18} />
                            PDF / Chop Etish
                        </button>
                    )}

                    <button
                        onClick={onClose}
                        className="px-5 py-2.5 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors shadow-md"
                    >
                        Tushunarli, Yopish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SessionReportModal;
