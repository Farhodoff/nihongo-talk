import React, { useState, useRef } from 'react';
import { Button } from '../ui/Button';
import { Mic, Square, Sparkles, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
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
      setError('Brauzeringiz nutqni tanib olishni (Speech Recognition) qo\'llab-quvvatlamaydi. Iltimos, javobingizni matn ko\'rinishida yozib kiriting.');
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
      setError('AI orqali baholashda xatolik yuz berdi. Qayta urinib ko\'ring.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Prompt Card */}
      <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-wider text-fuchsia-600 dark:text-fuchsia-400 mb-2">
          {examType} Speaking Task
        </h3>
        <p className="text-slate-800 dark:text-slate-200 text-base leading-relaxed whitespace-pre-wrap font-medium">
          {promptText}
        </p>
      </div>

      {/* Recording Area */}
      {!result ? (
        <div className="space-y-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm text-center">
          <div className="flex justify-center my-4">
            {!isRecording ? (
              <button
                onClick={startRecording}
                className="w-20 h-20 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-500/30 transition transform hover:scale-105"
              >
                <Mic className="w-8 h-8" />
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="w-20 h-20 rounded-full bg-slate-800 text-white flex items-center justify-center shadow-lg animate-pulse"
              >
                <Square className="w-8 h-8" />
              </button>
            )}
          </div>

          <p className="text-xs text-slate-400">
            {isRecording ? "Yozib olinmoqda... To'xtatish uchun tugmani bosing" : "Gapirishni boshlash uchun mikrofonga bosing"}
          </p>

          <div className="mt-4">
            <textarea
              rows={4}
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              placeholder="Ovoziz matnga aylantiriladi yoki matn ko'rinishida tahrirlashingiz mumkin..."
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm text-slate-900 dark:text-white"
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 rounded-xl text-xs border border-red-200">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex justify-end">
            <Button
              onClick={handleSubmit}
              disabled={loading || !transcript.trim()}
              className="gap-2 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white px-6 py-2 rounded-xl"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              {loading ? "DeepSeek baholamoqda..." : "AI Baholashiga yuborish"}
            </Button>
          </div>
        </div>
      ) : (
        /* Result */
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white">Speaking AI Natijasi</h4>
                <p className="text-xs text-slate-400">DeepSeek AI tahlili</p>
              </div>
            </div>
            <div className="bg-fuchsia-50 dark:bg-fuchsia-500/10 border border-fuchsia-200 dark:border-fuchsia-500/20 rounded-2xl px-5 py-2 text-center">
              <div className="text-xs font-bold text-fuchsia-500 uppercase">Ball</div>
              <div className="text-2xl font-black text-fuchsia-600 dark:text-fuchsia-400">{result.score}</div>
            </div>
          </div>

          <div className="space-y-2">
            <h5 className="font-bold text-sm text-slate-800 dark:text-slate-200">Tahlil va Xatolar ustida ishlash:</h5>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800 whitespace-pre-wrap">
              {result.feedback}
            </p>
          </div>

          <div className="flex justify-end pt-2">
            <Button variant="outline" onClick={() => setResult(null)}>
              Qayta gapirib ko'rish
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
