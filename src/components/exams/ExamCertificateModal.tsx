import React from 'react';
import { Button } from '../ui/Button';
import { Award, CheckCircle2, Download, Sparkles, X } from 'lucide-react';

interface ExamCertificateModalProps {
    isOpen: boolean;
    onClose: () => void;
    examTitle: string;
    examType: string;
    overallScore: string | number;
    sectionScores: {
        reading?: number | string;
        listening?: number | string;
        writing?: number | string;
        speaking?: number | string;
    };
    aiFeedback?: string;
    userName?: string;
    dateStr?: string;
}

export const ExamCertificateModal: React.FC<ExamCertificateModalProps> = ({
    isOpen,
    onClose,
    examTitle,
    examType,
    overallScore,
    sectionScores,
    aiFeedback,
    userName = "Foydalanuvchi",
    dateStr = new Date().toLocaleDateString('uz-UZ', { day: '2-digit', month: 'long', year: 'numeric' })
}) => {
    if (!isOpen) return null;

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-2xl p-6 md:p-8 shadow-2xl space-y-6 relative overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Certificate Border Box */}
                <div className="border-4 border-double border-indigo-500/30 rounded-2xl p-6 space-y-6 text-center bg-gradient-to-b from-indigo-500/5 via-transparent to-purple-500/5">
                    
                    {/* Badge Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-500/30 mx-auto">
                        <Award className="w-8 h-8" />
                    </div>

                    <div className="space-y-1">
                        <span className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                            Rasmiy Imtihon Sertifikati
                        </span>
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                            {examTitle}
                        </h2>
                        <p className="text-xs text-slate-500 font-medium">Toifa: {examType} • Sana: {dateStr}</p>
                    </div>

                    {/* Score Showcase */}
                    <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-4 shadow-sm max-w-md mx-auto flex items-center justify-around">
                        <div>
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Umumiy Natija</span>
                            <span className="text-4xl font-black text-indigo-600 dark:text-indigo-400">{overallScore}</span>
                        </div>
                        <div className="h-10 w-px bg-slate-200 dark:bg-slate-700" />
                        <div>
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Egasining Ismi</span>
                            <span className="text-base font-extrabold text-slate-800 dark:text-slate-200">{userName}</span>
                        </div>
                    </div>

                    {/* Breakdown by Sections */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                        {sectionScores.reading !== undefined && (
                            <div className="bg-slate-50 dark:bg-slate-800 p-2.5 rounded-xl border border-slate-100 dark:border-slate-700">
                                <span className="text-[10px] font-bold text-slate-400 block uppercase">Reading (読解)</span>
                                <span className="text-base font-black text-emerald-600">{sectionScores.reading}</span>
                            </div>
                        )}
                        {sectionScores.listening !== undefined && (
                            <div className="bg-slate-50 dark:bg-slate-800 p-2.5 rounded-xl border border-slate-100 dark:border-slate-700">
                                <span className="text-[10px] font-bold text-slate-400 block uppercase">Listening (聴解)</span>
                                <span className="text-base font-black text-blue-600">{sectionScores.listening}</span>
                            </div>
                        )}
                        {sectionScores.writing !== undefined && (
                            <div className="bg-slate-50 dark:bg-slate-800 p-2.5 rounded-xl border border-slate-100 dark:border-slate-700">
                                <span className="text-[10px] font-bold text-slate-400 block uppercase">Writing (作文)</span>
                                <span className="text-base font-black text-purple-600">{sectionScores.writing}</span>
                            </div>
                        )}
                        {sectionScores.speaking !== undefined && (
                            <div className="bg-slate-50 dark:bg-slate-800 p-2.5 rounded-xl border border-slate-100 dark:border-slate-700">
                                <span className="text-[10px] font-bold text-slate-400 block uppercase">Speaking (会話)</span>
                                <span className="text-base font-black text-rose-600">{sectionScores.speaking}</span>
                            </div>
                        )}
                    </div>

                    {/* AI Feedback Section */}
                    {aiFeedback && (
                        <div className="text-left bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                                <Sparkles className="w-3.5 h-3.5" /> AI Evaluator Xulosasi:
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-h-32 overflow-y-auto">
                                {aiFeedback}
                            </p>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="flex gap-3 justify-end pt-2">
                    <Button variant="outline" onClick={handlePrint} className="gap-2 rounded-xl font-bold">
                        <Download className="w-4 h-4" /> Yuklab Olish / Chop Etish
                    </Button>
                    <Button onClick={onClose} className="gap-2 rounded-xl font-bold bg-indigo-600 text-white">
                        <CheckCircle2 className="w-4 h-4" /> Yopish
                    </Button>
                </div>
            </div>
        </div>
    );
};
