import React, { useEffect, useState } from 'react';
import { Award, BrainCircuit, CalendarDays, CheckCircle2 } from 'lucide-react';

interface ExamResult {
    id: string;
    subjectName: string;
    score: number;
    totalQuestions: number;
    xpEarned: number;
    timestamp: number;
}

const ExamHistoryAnalytics: React.FC = () => {
    const [history, setHistory] = useState<ExamResult[]>([]);

    useEffect(() => {
        try {
            const saved = localStorage.getItem('study_planner_exam_history');
            if (saved) {
                setHistory(JSON.parse(saved));
            }
        } catch (e) {
            console.error("Failed to load exam history", e);
        }
    }, []);

    if (history.length === 0) return null;

    return (
        <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BrainCircuit className="text-fuchsia-500" />
                AI Imtihonlar Tarixi
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {history.slice(0, 6).map((exam) => {
                    const percentage = Math.round((exam.score / exam.totalQuestions) * 100);
                    let colorClass = "text-fuchsia-500 bg-fuchsia-50 dark:bg-fuchsia-500/10";
                    if (percentage === 100) colorClass = "text-yellow-500 bg-yellow-50 dark:bg-yellow-500/10";
                    else if (percentage >= 80) colorClass = "text-green-500 bg-green-50 dark:bg-green-500/10";
                    else if (percentage < 60) colorClass = "text-red-500 bg-red-50 dark:bg-red-500/10";

                    return (
                        <div key={exam.id} className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 hover:border-fuchsia-300 dark:hover:border-fuchsia-500/50 transition-colors">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white truncate" title={exam.subjectName}>
                                        {exam.subjectName}
                                    </h4>
                                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-500 dark:text-gray-400">
                                        <CalendarDays size={12} />
                                        {new Date(exam.timestamp).toLocaleDateString('uz-UZ', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                </div>
                                <div className={`px-2.5 py-1 rounded-lg text-xs font-bold ${colorClass}`}>
                                    {percentage}%
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300">
                                    <CheckCircle2 size={16} className={percentage >= 80 ? "text-green-500" : "text-gray-400"} />
                                    <span>{exam.score} / {exam.totalQuestions} to'g'ri</span>
                                </div>
                                <div className="flex items-center gap-1 font-bold text-fuchsia-600 dark:text-fuchsia-400">
                                    <Award size={16} />
                                    +{exam.xpEarned} XP
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            {history.length > 6 && (
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Faqat so'nggi 6 ta imtihon ko'rsatilmoqda (Jami: {history.length})
                    </p>
                </div>
            )}
        </div>
    );
};

export default ExamHistoryAnalytics;
