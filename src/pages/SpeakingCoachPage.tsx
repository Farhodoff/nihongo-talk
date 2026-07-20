import React, { useState, useEffect, useRef } from 'react';
import { Mic, Square, RefreshCcw, Volume2, CheckCircle2, MessageSquare, Target, Activity, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { analyzeSpeech, SpeechAnalysisResult } from '../utils/ai';

// Add TypeScript types for Web Speech API
declare global {
    interface Window {
        SpeechRecognition: any;
        webkitSpeechRecognition: any;
    }
}

const SpeakingCoachPage: React.FC = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [topic, setTopic] = useState('My hobbies and interests');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [feedback, setFeedback] = useState<SpeechAnalysisResult | null>(null);
    const [error, setError] = useState<string | null>(null);
    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        // Initialize SpeechRecognition
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = true;
            recognitionRef.current.interimResults = true;
            recognitionRef.current.lang = 'en-US';

            recognitionRef.current.onresult = (event: any) => {
                let currentTranscript = '';
                for (let i = 0; i < event.results.length; i++) {
                    currentTranscript += event.results[i][0].transcript;
                }
                setTranscript(currentTranscript);
            };

            recognitionRef.current.onerror = (event: any) => {
                console.error('Speech recognition error', event.error);
                setError('Mikrofon bilan xatolik yuz berdi. Ruxsat berilganini tekshiring.');
                setIsRecording(false);
            };

            recognitionRef.current.onend = () => {
                setIsRecording(false);
            };
        } else {
            setError('Sizning brauzeringiz ovoz yozishni qo\'llab-quvvatlamaydi. Iltimos, Chrome dan foydalaning.');
        }

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        };
    }, []);

    const toggleRecording = () => {
        if (!recognitionRef.current) return;

        if (isRecording) {
            recognitionRef.current.stop();
        } else {
            setTranscript('');
            setFeedback(null);
            setError(null);
            try {
                recognitionRef.current.start();
                setIsRecording(true);
            } catch (e) {
                console.error(e);
            }
        }
    };

    const handleAnalyze = async () => {
        if (!transcript.trim()) return;
        
        setIsAnalyzing(true);
        setError(null);
        try {
            const result = await analyzeSpeech(transcript, topic);
            setFeedback(result);
        } catch (err: any) {
            setError(err.message || "Tahlil qilishda xatolik yuz berdi.");
        } finally {
            setIsAnalyzing(false);
        }
    };

    const speakFeedback = () => {
        if (!feedback) return;
        const msg = new SpeechSynthesisUtterance(feedback.overall_feedback);
        msg.lang = 'en-US';
        window.speechSynthesis.speak(msg);
    };

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto h-full flex flex-col overflow-y-auto w-full">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground flex items-center gap-2">
                    <Mic className="text-primary" size={32} />
                    Speaking Coach
                </h2>
                <p className="text-muted-foreground mt-1">Sun'iy intellekt yordamida Ingliz tilida gapirish qobiliyatingizni oshiring.</p>
            </div>

            <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-border mb-6">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-foreground mb-2">Qaysi mavzuda gaplashamiz?</label>
                    <input 
                        type="text" 
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                        placeholder="Masalan: My favorite book, The future of AI, IELTS Part 2..."
                        disabled={isRecording}
                    />
                </div>

                <div className="flex flex-col items-center justify-center py-8">
                    <button
                        onClick={toggleRecording}
                        className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                            isRecording 
                            ? 'bg-red-500 hover:bg-red-600 animate-pulse scale-110 shadow-red-500/30' 
                            : 'bg-primary hover:bg-primary/90 shadow-primary/30'
                        }`}
                    >
                        {isRecording ? <Square fill="white" className="text-white" size={32} /> : <Mic fill="white" className="text-white" size={40} />}
                    </button>
                    
                    <p className={`mt-4 font-medium ${isRecording ? 'text-red-500 animate-pulse' : 'text-muted-foreground'}`}>
                        {isRecording ? "Yozib olinmoqda... To'xtatish uchun bosing" : "Boshlash uchun mikrofonga bosing"}
                    </p>
                </div>

                {error && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl mb-4 text-sm text-center">
                        {error}
                    </div>
                )}

                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 min-h-[150px] relative">
                    {transcript ? (
                        <p className="text-foreground leading-relaxed">{transcript}</p>
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground italic">
                            Sizning nutqingiz shu yerda yozilib boradi...
                        </div>
                    )}
                </div>

                {transcript && !isRecording && !feedback && (
                    <div className="mt-6 flex justify-end">
                        <Button onClick={handleAnalyze} disabled={isAnalyzing}>
                            {isAnalyzing ? (
                                <><RefreshCcw className="mr-2 animate-spin" size={18} /> Tahlil qilinmoqda...</>
                            ) : (
                                <><Target className="mr-2" size={18} /> Tahlil qilish</>
                            )}
                        </Button>
                    </div>
                )}
            </div>

            {feedback && (
                <div className="space-y-6 animate-in slide-in-from-bottom-4 mb-8">
                    {/* Overall Feedback */}
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 relative">
                        <Button 
                            variant="secondary" 
                            size="sm" 
                            onClick={speakFeedback} 
                            className="absolute top-4 right-4 bg-white dark:bg-gray-800"
                        >
                            <Volume2 size={16} className="mr-2" /> Tinglash
                        </Button>
                        <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-3">
                            <MessageSquare size={20} /> Umumiy Xulosa
                        </h3>
                        <p className="text-foreground leading-relaxed pr-24">{feedback.overall_feedback}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Fluency Score */}
                        <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl border border-border flex flex-col items-center justify-center text-center shadow-sm">
                            <Activity size={32} className="text-blue-500 mb-2" />
                            <h4 className="text-sm text-muted-foreground font-medium mb-1">Fluency (IELTS)</h4>
                            <div className="text-4xl font-bold text-foreground">{feedback.fluency_score.toFixed(1)}</div>
                            <span className="text-xs text-muted-foreground mt-2">/ 9.0</span>
                        </div>

                        {/* Grammar */}
                        <div className="md:col-span-2 bg-white dark:bg-[#1f2937] p-6 rounded-2xl border border-border shadow-sm">
                            <h4 className="font-semibold text-foreground flex items-center gap-2 mb-4">
                                <CheckCircle2 size={18} className="text-green-500" /> Grammatika
                            </h4>
                            {feedback.grammar_corrections.length > 0 ? (
                                <ul className="space-y-3">
                                    {feedback.grammar_corrections.map((corr, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm">
                                            <span className="text-red-500 mt-1">•</span>
                                            <span className="text-muted-foreground">{corr}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">Ajoyib! Hech qanday qo'pol grammatik xato topilmadi.</p>
                            )}
                        </div>
                    </div>

                    {/* Vocabulary */}
                    {feedback.better_vocabulary.length > 0 && (
                        <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl border border-border shadow-sm">
                            <h4 className="font-semibold text-foreground mb-4">Lug'at boyligi tavsiyalari</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {feedback.better_vocabulary.map((vocab, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                        <span className="text-red-500 line-through text-sm">{vocab.original}</span>
                                        <ChevronRight size={16} className="text-muted-foreground" />
                                        <span className="text-green-600 dark:text-green-400 font-medium text-sm">{vocab.suggested}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SpeakingCoachPage;
