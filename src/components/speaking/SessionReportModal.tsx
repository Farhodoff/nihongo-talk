import React, { useState } from 'react';
import { X, Award, AlertCircle, CheckCircle, Sparkles, BookOpen, Download, Volume2, Copy } from 'lucide-react';
import { SessionAnalysisReport, cleanJapaneseTTS } from '../../utils/ai';
import { ErrorVaultService } from '../../services/ErrorVaultService';
import { useStudyData } from '../../context/StudyPlannerContext';
import { toast } from '../../hooks/use-toast';
import { escapeHtml } from '../../utils/escapeHtml';

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
    const { addFlashcardsBatch } = useStudyData();
    const [isExporting, setIsExporting] = useState(false);

    const handleExportToFlashcards = async () => {
        if (!report || (!report.grammar_corrections?.length && !report.better_vocabulary?.length)) {
            toast({
                title: 'ℹ️ Xatolar yo\'q',
                description: 'Ushbu sessiyada saqlash uchun grammatik xatolar topilmadi.'
            });
            return;
        }

        setIsExporting(true);
        try {
            const isJapanese = (report.user_level_jp && report.user_level_jp.includes('JLPT')) || false;
            const lang = isJapanese ? 'ja' : 'en';

            const directCards = (report.grammar_corrections || []).map(g => ({
                front: `❌ Qoidani tuzating (${lang.toUpperCase()}):\n"${g.original}"`,
                back: `✅ To'g'ri variant:\n"${g.corrected}"\n\n💡 Tushuntirish:\n${g.explanation}`
            }));

            const vocabCards = (report.better_vocabulary || []).map(v => ({
                front: `🧠 Lug'at takomillashtirish (${lang.toUpperCase()}):\n"${v.original}"`,
                back: `✨ Tavsiya etilgan ibora:\n"${v.suggested}"\n\n📖 Kontekst:\n${v.context}`
            }));

            const vaultCards = ErrorVaultService.convertErrorsToFlashcards(lang);
            const allCards = [...directCards, ...vocabCards, ...vaultCards];

            // Remove duplicates by front text
            const uniqueCards = allCards.filter((card, index, self) =>
                index === self.findIndex((c) => c.front === card.front)
            );

            if (uniqueCards.length > 0) {
                await addFlashcardsBatch(uniqueCards);
                toast({
                    title: '🎴 Fleshkartalar Yaratildi!',
                    description: `${uniqueCards.length} ta xatolar to'plami Flashcardlar bo'limiga qo'shildi va DB ga saqlandi.`
                });
            }
        } catch (e) {
            console.error('Error exporting cards:', e);
            toast({
                title: '❌ Xatolik',
                description: 'Fleshkartalarni saqlashda xatolik yuz berdi.'
            });
        } finally {
            setIsExporting(false);
        }
    };

    const playWordAudio = (word: string) => {
        if (typeof window === 'undefined' || !window.speechSynthesis) return;
        try {
            window.speechSynthesis.cancel();
            const isJa = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(word);
            const cleanWord = isJa ? cleanJapaneseTTS(word) : word.trim();
            if (!cleanWord) return;
            const utterance = new SpeechSynthesisUtterance(cleanWord);
            utterance.lang = isJa ? 'ja-JP' : 'en-US';
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        } catch (e) {
            console.debug('Speech play error:', e);
        }
    };

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
                            {/* Score & Level & Overall Feedback Banner */}
                            <div className="space-y-4">
                                {/* Overall Level Badge Banner */}
                                <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                                            <Sparkles size={32} />
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold uppercase tracking-wider opacity-90">
                                                Umumiy Natija va Daraja
                                            </span>
                                            <h3 className="text-2xl font-extrabold">
                                                {report.user_level_eng || report.user_level_jp || "CEFR B2 (IELTS Band 6.5)"}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="px-5 py-2.5 bg-white/20 backdrop-blur-md rounded-2xl font-black text-2xl tracking-tight">
                                        {(report.overall_score || report.fluency_score || 7.0).toFixed(1)} <span className="text-xs font-normal opacity-80">/ 9.0</span>
                                    </div>
                                </div>

                                {/* 4 Criteria Breakdown Cards */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-center">
                                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                                            📚 Lexical (30%)
                                        </span>
                                        <div className="text-2xl font-black text-gray-900 dark:text-white">
                                            {(report.lexical_score || 7.0).toFixed(1)} <span className="text-xs text-gray-400 font-normal">/ 9.0</span>
                                        </div>
                                        <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 block">
                                            So'z boyligi
                                        </span>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-center">
                                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-600 dark:text-purple-400 block mb-1">
                                            ⚖️ Grammar (30%)
                                        </span>
                                        <div className="text-2xl font-black text-gray-900 dark:text-white">
                                            {(report.grammar_score || 7.0).toFixed(1)} <span className="text-xs text-gray-400 font-normal">/ 9.0</span>
                                        </div>
                                        <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 block">
                                            Grammatika
                                        </span>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-center">
                                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-1">
                                            🗣️ Fluency (25%)
                                        </span>
                                        <div className="text-2xl font-black text-gray-900 dark:text-white">
                                            {(report.fluency_score || 7.0).toFixed(1)} <span className="text-xs text-gray-400 font-normal">/ 9.0</span>
                                        </div>
                                        <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 block">
                                            Ravonlik
                                        </span>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-center">
                                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-pink-600 dark:text-pink-400 block mb-1">
                                            🎙️ Accent (15%)
                                        </span>
                                        <div className="text-2xl font-black text-gray-900 dark:text-white">
                                            {(report.pronunciation_score || 7.5).toFixed(1)} <span className="text-xs text-gray-400 font-normal">/ 9.0</span>
                                        </div>
                                        <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 block">
                                            Talaffuz
                                        </span>
                                    </div>
                                </div>

                                {/* Overall Feedback */}
                                <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60">
                                    <h4 className="text-xs font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-1">
                                        <Sparkles size={16} className="text-indigo-500" />
                                        Umumiy Tahlil va Xulosa
                                    </h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mt-1">
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

                            {/* Pronunciation Feedback & Errors */}
                            {((report.pronunciation_errors && report.pronunciation_errors.length > 0) || report.pronunciation_feedback) && (
                                <div className="space-y-3 bg-rose-500/5 dark:bg-rose-950/10 p-5 border border-rose-500/20 rounded-3xl">
                                    <h4 className="text-sm font-bold text-rose-700 dark:text-rose-400 flex items-center gap-2">
                                        <Volume2 size={18} />
                                        Talaffuz va Intonatsiya Tahlili
                                    </h4>
                                    {report.pronunciation_feedback && (
                                        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {report.pronunciation_feedback}
                                        </p>
                                    )}
                                    {report.pronunciation_errors && report.pronunciation_errors.length > 0 && (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                                            {report.pronunciation_errors.map((err, idx) => (
                                                <div key={idx} className="p-3 bg-white dark:bg-gray-900 border border-rose-500/20 rounded-xl text-xs space-y-1 relative group">
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-serif font-black text-rose-600 dark:text-rose-400">"{err.word}"</span>
                                                        <button
                                                            onClick={() => playWordAudio(err.word)}
                                                            className="p-1 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 transition-colors flex items-center gap-1 text-[10px] font-bold"
                                                            title="To'g'ri talaffuzni eshitish"
                                                        >
                                                            <Volume2 size={12} />
                                                            <span>Eshitish</span>
                                                        </button>
                                                    </div>
                                                    <span className="text-[10px] text-muted-foreground block">💡 {err.correctionHelp}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

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
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm">
                                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                                        <span className="text-red-500 dark:text-red-400 line-through bg-red-500/10 px-2 py-0.5 rounded-md font-mono">
                                                            ❌ {item.original}
                                                        </span>
                                                        <span className="text-gray-400 hidden sm:inline">➔</span>
                                                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-md font-mono">
                                                            ✅ {item.corrected}
                                                        </span>
                                                    </div>
                                                    <button
                                                        onClick={() => playWordAudio(item.corrected)}
                                                        className="self-start sm:self-auto p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 transition-colors flex items-center gap-1 text-[11px] font-bold shrink-0"
                                                        title="To'g'ri gapni eshitish"
                                                    >
                                                        <Volume2 size={13} />
                                                        <span>Audioni tinglash</span>
                                                    </button>
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
                                            <div key={idx} className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/15 space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                                        Oddiy: <span className="font-semibold text-gray-700 dark:text-gray-300">{vocab.original}</span>
                                                    </div>
                                                    <button
                                                        onClick={() => playWordAudio(vocab.suggested)}
                                                        className="p-1 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 dark:text-purple-400 transition-colors flex items-center gap-1 text-[10px] font-bold"
                                                        title="Band 8+ iborani eshitish"
                                                    >
                                                        <Volume2 size={12} />
                                                        <span>Eshitish</span>
                                                    </button>
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
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleExportToFlashcards}
                                disabled={isExporting}
                                className="px-4 py-2.5 rounded-xl font-semibold bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/20 transition-colors flex items-center gap-2 text-sm"
                                title="Xatolarni Fleshkartalar bo'limiga saqlash"
                            >
                                <Copy size={18} />
                                {isExporting ? "Saqlanmoqda..." : "Xatolardan Flashcard Yaratish 🎴"}
                            </button>

                            <button
                                onClick={() => {
                                    const printWindow = window.open('', '_blank');
                                    if (!printWindow) return;
                                    // SECURITY: every interpolation is user/AI-controlled text and is
                                    // escaped — the popup runs on the app origin.
                                    const eT = escapeHtml(personaTitle);
                                    const reportHtml = `
                                        <!DOCTYPE html>
                                        <html>
                                        <head>
                                            <title>Speaking Coach Tahlil Hisoboti - ${eT}</title>
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
                                            <div class="subtitle">Ssenariy: <strong>${eT}</strong> | Sana: ${new Date().toLocaleDateString('uz-UZ')}</div>

                                            <div class="score-card">
                                                <div>Fluency / Band Bali</div>
                                                <div class="score">${report.fluency_score.toFixed(1)} / 9.0</div>
                                                <div style="font-size: 12px; opacity: 0.9;">Erkin so'zlashuv bahosi</div>
                                            </div>

                                            <div class="section-title">💡 Umumiy Xulosa</div>
                                            <div class="box">${escapeHtml(report.overall_feedback)}</div>

                                            <div class="section-title">✅ Kuchli Jihatlar</div>
                                            <ul class="item-list">
                                                ${report.strengths.map(s => `<li>${escapeHtml(s)}</li>`).join('')}
                                            </ul>

                                            <div class="section-title">🎯 Rivojlantirish Kerak Bo'lgan Jihatlar</div>
                                            <ul class="item-list">
                                                ${report.areas_to_improve.map(a => `<li>${escapeHtml(a)}</li>`).join('')}
                                            </ul>

                                            ${report.grammar_corrections.length > 0 ? `
                                                <div class="section-title">📚 Grammatik Xatolar & Tuzatishlar</div>
                                                ${report.grammar_corrections.map(g => `
                                                    <div class="box">
                                                        <div><span class="red">❌ ${escapeHtml(g.original)}</span> ➔ <span class="green">✅ ${escapeHtml(g.corrected)}</span></div>
                                                        <div style="font-size: 12px; color: #6b7280; margin-top: 4px;">💡 ${escapeHtml(g.explanation)}</div>
                                                    </div>
                                                `).join('')}
                                            ` : ''}

                                            ${report.better_vocabulary.length > 0 ? `
                                                <div class="section-title">✨ Band 8+ Lug'at Tavsiyalari</div>
                                                ${report.better_vocabulary.map(v => `
                                                    <div class="box">
                                                        <div>Oddiy: ${escapeHtml(v.original)} ➔ <strong style="color: #7c3aed;">✨ ${escapeHtml(v.suggested)}</strong></div>
                                                        <div style="font-size: 12px; color: #6b7280; margin-top: 4px;">${escapeHtml(v.context)}</div>
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
                        </div>
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
