import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Loader2, Sparkles, CheckCircle2, AlertCircle, RefreshCw, PenTool, Award } from 'lucide-react';
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
      setError(err?.message || 'AI orqali baholashda xatolik yuz berdi. Qayta urinib ko\'ring.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-300">
      {/* Prompt Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-3">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <PenTool className="w-5 h-5" />
          </span>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              {examType} Writing Task (Insho / Sakubun)
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Mavzu va Topshiriq:</h3>
          </div>
        </div>
        <p className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed whitespace-pre-wrap font-sans bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
          {promptText}
        </p>
      </div>

      {/* Editor & Results Area */}
      {!result ? (
        <div className="space-y-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
          <div className="relative">
            <textarea
              rows={12}
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder="Javobingizni shu yerga yozing..."
              className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition font-sans text-sm leading-relaxed resize-y"
            />
            <div className="absolute bottom-4 right-4 text-xs font-extrabold text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-full shadow-sm">
              So'zlar soni: {wordCount}
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 rounded-2xl text-sm border border-red-200 dark:border-red-500/20">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex justify-end pt-2">
            <Button
              onClick={handleSubmit}
              disabled={loading || wordCount === 0}
              className="gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-indigo-500/20 transition transform hover:-translate-y-0.5"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              {loading ? "DeepSeek AI Tekshirmoqda..." : "AI Tekshiruviga Yuborish 🚀"}
            </Button>
          </div>
        </div>
      ) : (
        /* AI Evaluation Result Card */
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-500 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-extrabold text-xl text-slate-900 dark:text-white">AI Tekshiruv Natijasi</h4>
                <p className="text-xs text-slate-400">DeepSeek AI Examiner Tahlili</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl px-6 py-2.5 text-center">
              <div className="text-xs font-black text-indigo-500 uppercase tracking-wider flex items-center gap-1 justify-center">
                <Award className="w-3.5 h-3.5" /> Umumiy Ball
              </div>
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400">{result.score}</div>
            </div>
          </div>

          {result.criteriaScores && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {Object.entries(result.criteriaScores).map(([key, value]) => (
                <div key={key} className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                  <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">{key}</div>
                  <div className="text-xl font-black text-slate-800 dark:text-slate-200 mt-0.5">{value}</div>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-2">
            <h5 className="font-extrabold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-500" /> Batafsil Tahlil va Tavsiyalar (O'zbek tilida):
            </h5>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 whitespace-pre-wrap font-sans">
              {result.feedback}
            </p>
          </div>

          <div className="flex justify-end pt-2">
            <Button variant="outline" onClick={() => setResult(null)} className="gap-2 rounded-xl font-bold">
              <RefreshCw className="w-4 h-4" /> Qayta Topshirish
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
