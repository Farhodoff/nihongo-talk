import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Loader2, Sparkles, CheckCircle, AlertCircle } from 'lucide-react';
import { aiEvaluationService, AiEvaluationResult } from '../../services/aiEvaluationService';

interface WritingSectionProps {
  examType: 'IELTS' | 'JLPT';
  promptText: string;
  promptId: string;
  sessionId: string;
  onSubmitted?: (result: AiEvaluationResult) => void;
}

export const WritingSection: React.FC<WritingSectionProps> = ({
  examType,
  promptText,
  promptId: _promptId,
  sessionId: _sessionId,
  onSubmitted
}) => {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiEvaluationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const wordCount = response.trim().split(/\s+/).filter(Boolean).length;

  const handleSubmit = async () => {
    if (!response.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const evalResult = await aiEvaluationService.evaluateWriting(examType, promptText, response);
      setResult(evalResult);
      if (onSubmitted) {
        onSubmitted(evalResult);
      }
    } catch (err: any) {
      console.error(err);
      setError('AI orqali baholashda xatolik yuz berdi. Qayta urinib ko\'ring.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Prompt Card */}
      <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
          {examType} Writing Task
        </h3>
        <p className="text-slate-800 dark:text-slate-200 text-base leading-relaxed whitespace-pre-wrap font-medium">
          {promptText}
        </p>
      </div>

      {/* Editor & Results Area */}
      {!result ? (
        <div className="space-y-4">
          <div className="relative">
            <textarea
              rows={12}
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder="Javobingizni shu yerga yozing..."
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition font-sans text-sm leading-relaxed resize-y"
            />
            <div className="absolute bottom-4 right-4 text-xs font-semibold text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
              So'zlar soni: {wordCount}
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-200">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex justify-end">
            <Button
              onClick={handleSubmit}
              disabled={loading || wordCount === 0}
              className="gap-2 bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:from-indigo-500 hover:to-fuchsia-500 text-white px-6 py-2.5 rounded-xl shadow-md"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              {loading ? "DeepSeek tekshirmoqda..." : "AI Tekshiruviga yuborish"}
            </Button>
          </div>
        </div>
      ) : (
        /* AI Result Card */
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white">AI Tekshiruv Natijasi</h4>
                <p className="text-xs text-slate-400">DeepSeek AI tahlili</p>
              </div>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 rounded-2xl px-5 py-2 text-center">
              <div className="text-xs font-bold text-indigo-500 uppercase">Ball</div>
              <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{result.score}</div>
            </div>
          </div>

          {result.criteriaScores && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {Object.entries(result.criteriaScores).map(([key, value]) => (
                <div key={key} className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-center">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{key}</div>
                  <div className="text-lg font-bold text-slate-800 dark:text-slate-200">{value}</div>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-2">
            <h5 className="font-bold text-sm text-slate-800 dark:text-slate-200">Batafsil Fikr & Tavsiyalar (Feedback):</h5>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800 whitespace-pre-wrap">
              {result.feedback}
            </p>
          </div>

          <div className="flex justify-end pt-2">
            <Button variant="outline" onClick={() => setResult(null)}>
              Qayta topshirish
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
