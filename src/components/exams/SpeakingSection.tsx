import React, { useState, useRef } from 'react';
import { Button } from '../ui/Button';
import { Mic, Square, Sparkles, CheckCircle2, AlertCircle, Loader2, RefreshCw, Award } from 'lucide-react';
import { aiEvaluationService, AiEvaluationResult } from '../../services/aiEvaluationService';

interface SpeakingSectionProps {
  examType: 'IELTS' | 'JLPT';
  promptText: string;
  promptId: string;
  sessionId: string;
  onSubmitted?: (result: AiEvaluationResult) => void;
}

export const SpeakingSection: React.FC<SpeakingSectionProps> = ({
  examType,
  promptText,
  promptId: _promptId,
  sessionId: _sessionId,
  onSubmitted
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiEvaluationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const recognitionRef = useRef<any>(null);

  const startRecording = () => {
    setError(null);
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setError('Brauzeringiz nutqni tanib olishni (Speech Recognition) qo\'llab-quvvatlamaydi. Javobingizni matn ko\'rinishida yozib kiriting.');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = examType === 'JLPT' ? 'ja-JP' : 'en-US';

      recognition.onresult = (event: any) => {
        let currentTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript + ' ';
        }
        setTranscript(currentTranscript);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsRecording(false);
      };

      recognition.start();
      recognitionRef.current = recognition;
      setIsRecording(true);
    } catch (err) {
      console.error(err);
      setError('Mikrofonni ishga tushirishda xatolik.');
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleSubmit = async () => {
    if (!transcript.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const evalResult = await aiEvaluationService.evaluateSpeakingTranscript(examType, promptText, transcript);
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
          <span className="p-2 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400">
            <Mic className="w-5 h-5" />
          </span>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              {examType} Speaking Task (Nutq / Kaiwa)
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Mavzu va Savol:</h3>
          </div>
        </div>
        <p className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed whitespace-pre-wrap font-sans bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
          {promptText}
        </p>
      </div>

      {/* Recording Area */}
      {!result ? (
        <div className="space-y-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm text-center">
          <div className="flex justify-center my-4">
            {!isRecording ? (
              <button
                onClick={startRecording}
                className="w-24 h-24 rounded-full bg-gradient-to-tr from-rose-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white flex items-center justify-center shadow-xl shadow-rose-500/30 transition transform hover:scale-105"
              >
                <Mic className="w-10 h-10" />
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="w-24 h-24 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-xl ring-8 ring-rose-500/30 animate-pulse"
              >
                <Square className="w-10 h-10 text-rose-500" />
              </button>
            )}
          </div>

          <p className="text-xs font-bold text-slate-400">
            {isRecording ? "🔴 Yozib olinmoqda... To'xtatish uchun tugmani bosing" : "🎙️ Gapirishni boshlash uchun mikrofonga bosing"}
          </p>

          <div className="mt-4">
            <textarea
              rows={4}
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              placeholder="Ovoziz matnga aylantiriladi yoki matn ko'rinishida yozishingiz mumkin..."
              className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-sm text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-rose-500 font-sans"
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 rounded-2xl text-sm border border-red-200 dark:border-red-500/20 text-left">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex justify-end pt-2">
            <Button
              onClick={handleSubmit}
              disabled={loading || !transcript.trim()}
              className="gap-2 bg-gradient-to-r from-rose-600 to-amber-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-rose-500/20"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              {loading ? "DeepSeek AI Baholamoqda..." : "AI Baholashiga Yuborish 🚀"}
            </Button>
          </div>
        </div>
      ) : (
        /* Evaluation Result */
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-500 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-extrabold text-xl text-slate-900 dark:text-white">Speaking AI Natijasi</h4>
                <p className="text-xs text-slate-400">DeepSeek AI Examiner Tahlili</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-rose-500/10 to-amber-500/10 border border-rose-500/20 rounded-2xl px-6 py-2.5 text-center">
              <div className="text-xs font-black text-rose-500 uppercase tracking-wider flex items-center gap-1 justify-center">
                <Award className="w-3.5 h-3.5" /> Ball
              </div>
              <div className="text-3xl font-black text-rose-600 dark:text-rose-400">{result.score}</div>
            </div>
          </div>

          <div className="space-y-2">
            <h5 className="font-extrabold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-500" /> Tahlil va Xatolar ustida ishlash:
            </h5>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 whitespace-pre-wrap font-sans">
              {result.feedback}
            </p>
          </div>

          <div className="flex justify-end pt-2">
            <Button variant="outline" onClick={() => setResult(null)} className="gap-2 rounded-xl font-bold">
              <RefreshCw className="w-4 h-4" /> Qayta Gapirib Ko'rish
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
