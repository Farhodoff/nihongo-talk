import React, { useEffect, useState } from 'react';
import { Award, History, CalendarDays, CheckCircle2 } from 'lucide-react';

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
      console.error('Failed to load exam history', e);
    }
  }, []);

  if (history.length === 0) return null;

  return (
    <div className="mb-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-[#1f2937]">
      <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
        <History className="text-primary" />
        Imtihonlar Tarixi
      </h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {history.slice(0, 6).map((exam) => {
          const percentage = Math.round((exam.score / exam.totalQuestions) * 100);
          let colorClass = 'text-fuchsia-500 bg-fuchsia-50 dark:bg-fuchsia-500/10';
          if (percentage === 100) colorClass = 'text-yellow-500 bg-yellow-50 dark:bg-yellow-500/10';
          else if (percentage >= 80) colorClass = 'text-green-500 bg-green-50 dark:bg-green-500/10';
          else if (percentage < 60) colorClass = 'text-red-500 bg-red-50 dark:bg-red-500/10';

          return (
            <div
              key={exam.id}
              className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 transition-colors hover:border-fuchsia-300 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-fuchsia-500/50"
            >
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <h4
                    className="truncate font-bold text-gray-900 dark:text-white"
                    title={exam.subjectName}
                  >
                    {exam.subjectName}
                  </h4>
                  <div className="mt-1 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <CalendarDays size={12} />
                    {new Date(exam.timestamp).toLocaleDateString('uz-UZ', {
                      day: '2-digit',
                      month: 'short',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
                <div className={`rounded-lg px-2.5 py-1 text-xs font-bold ${colorClass}`}>
                  {percentage}%
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300">
                  <CheckCircle2
                    size={16}
                    className={percentage >= 80 ? 'text-green-500' : 'text-gray-400'}
                  />
                  <span>
                    {exam.score} / {exam.totalQuestions} to'g'ri
                  </span>
                </div>
                <div className="flex items-center gap-1 font-bold text-fuchsia-600 dark:text-fuchsia-400">
                  <Award size={16} />+{exam.xpEarned} XP
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
