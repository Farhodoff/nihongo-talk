import React, { useEffect, useRef } from 'react';
import { Mic, MicOff, Sparkles, AlertCircle, CheckCircle2, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ErrorTag {
    id: string;
    type: 'grammar' | 'vocabulary' | 'pronunciation';
    originalText: string;
    correction: string;
    explanation: string;
}

interface RealtimeVoiceOverlayProps {
    isRecording: boolean;
    isAiSpeaking: boolean;
    transcript: string;
    errors: ErrorTag[];
    activeCefrLevel?: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
    activeJlptLevel?: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
    onToggleRecording: () => void;
}

export const RealtimeVoiceOverlay: React.FC<RealtimeVoiceOverlayProps> = ({
    isRecording,
    isAiSpeaking,
    transcript,
    errors,
    activeCefrLevel = 'B2',
    activeJlptLevel,
    onToggleRecording
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    // Animated Neon Soundwave Simulation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        let phase = 0;

        const renderWave = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const width = canvas.width;
            const height = canvas.height;
            const centerY = height / 2;

            if (isRecording || isAiSpeaking) {
                const waveColor = isAiSpeaking ? '#38bdf8' : '#a855f7';
                ctx.beginPath();
                ctx.lineWidth = 3;
                ctx.strokeStyle = waveColor;
                ctx.shadowBlur = 12;
                ctx.shadowColor = waveColor;

                for (let x = 0; x < width; x += 4) {
                    const amplitude = isRecording ? (Math.sin(x * 0.05 + phase) * 20 + Math.cos(x * 0.03) * 15) : (Math.sin(x * 0.08 + phase) * 30);
                    const y = centerY + amplitude;
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }

                ctx.stroke();
                phase += 0.15;
            } else {
                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.strokeStyle = '#475569';
                ctx.shadowBlur = 0;
                ctx.moveTo(0, centerY);
                ctx.lineTo(width, centerY);
                ctx.stroke();
            }

            animationId = requestAnimationFrame(renderWave);
        };

        renderWave();

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [isRecording, isAiSpeaking]);

    const getBadgeStyle = (level: string) => {
        switch (level) {
            case 'C2': case 'C1': case 'N1':
                return 'from-rose-500 to-purple-600 text-white shadow-rose-500/30';
            case 'B2': case 'B1': case 'N2': case 'N3':
                return 'from-indigo-500 to-cyan-500 text-white shadow-indigo-500/30';
            default:
                return 'from-emerald-500 to-teal-500 text-white shadow-emerald-500/30';
        }
    };

    return (
        <div className="w-full bg-slate-900/90 border border-indigo-500/20 rounded-3xl p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden space-y-6">
            {/* Header & Adaptive Scaffolding Badge */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${isRecording ? 'from-purple-600 to-indigo-600 animate-pulse' : 'from-slate-800 to-slate-900'} text-white shadow-lg`}>
                        <Mic size={22} className={isRecording ? 'animate-bounce' : ''} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            Real-Time Voice Assistant
                            {isAiSpeaking && (
                                <span className="px-2 py-0.5 text-[10px] font-black uppercase tracking-widest bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 animate-pulse">
                                    AI Examiner Gapirmoqda...
                                </span>
                            )}
                        </h3>
                        <p className="text-xs text-slate-400">
                            {isRecording ? 'Ovozingiz jonli yozib olinmoqda va tahlil qilinmoqda...' : 'Muloqotni boshlash uchun mikrofonni bosing'}
                        </p>
                    </div>
                </div>

                {/* CEFR / JLPT Level Scaffolding Badge */}
                <div className="flex items-center gap-2">
                    {activeJlptLevel && (
                        <div className={`px-3 py-1.5 rounded-xl bg-gradient-to-r ${getBadgeStyle(activeJlptLevel)} font-black text-xs shadow-lg flex items-center gap-1.5`}>
                            <Flame size={14} />
                            <span>JLPT {activeJlptLevel}</span>
                        </div>
                    )}
                    <div className={`px-3 py-1.5 rounded-xl bg-gradient-to-r ${getBadgeStyle(activeCefrLevel)} font-black text-xs shadow-lg flex items-center gap-1.5`}>
                        <Sparkles size={14} />
                        <span>CEFR {activeCefrLevel}</span>
                    </div>
                </div>
            </div>

            {/* Neon Waveform Canvas */}
            <div className="relative w-full h-24 bg-slate-950/80 rounded-2xl border border-indigo-500/10 flex items-center justify-center overflow-hidden">
                <canvas ref={canvasRef} width={600} height={96} className="w-full h-full" />
                {!isRecording && !isAiSpeaking && (
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-slate-500">
                        Ovoz to'lqinlari shu yerda aks etadi
                    </div>
                )}
            </div>

            {/* Live Transcript & Error Highlights */}
            {transcript && (
                <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800 space-y-3 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                        <span>Jonli Nutq Matni (Transcript)</span>
                        {errors.length > 0 && (
                            <span className="text-amber-400 flex items-center gap-1">
                                <AlertCircle size={13} /> {errors.length} ta grammatik maslahat
                            </span>
                        )}
                    </div>
                    <p className="text-sm font-medium text-slate-200 leading-relaxed font-sans">
                        "{transcript}"
                    </p>
                </div>
            )}

            {/* Inline Micro-Error Cards */}
            {errors.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    {errors.slice(0, 4).map((err) => (
                        <motion.div
                            key={err.id}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-amber-950/30 border border-amber-500/20 rounded-2xl p-3.5 flex items-start gap-3"
                        >
                            <div className="p-1.5 bg-amber-500/20 text-amber-400 rounded-lg mt-0.5">
                                <AlertCircle size={15} />
                            </div>
                            <div className="space-y-1 text-xs">
                                <div className="font-bold text-amber-300 capitalize flex items-center gap-1.5">
                                    <span>{err.type} Xatosi</span>
                                    <span className="line-through text-slate-500">{err.originalText}</span>
                                </div>
                                <div className="text-emerald-400 font-semibold flex items-center gap-1">
                                    <CheckCircle2 size={13} /> {err.correction}
                                </div>
                                <p className="text-slate-400 text-[11px] leading-snug">
                                    {err.explanation}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Record Toggle Button */}
            <div className="flex justify-center pt-2">
                <button
                    onClick={onToggleRecording}
                    className={`py-3.5 px-8 rounded-2xl font-black text-sm shadow-xl flex items-center gap-3 transition-all transform active:scale-95 ${
                        isRecording
                            ? 'bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white shadow-rose-500/30'
                            : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 text-white shadow-indigo-500/30'
                    }`}
                >
                    {isRecording ? (
                        <>
                            <MicOff size={18} />
                            <span>Yozib Olishni To'xtatish</span>
                        </>
                    ) : (
                        <>
                            <Mic size={18} />
                            <span>Gapirishni Boshlash 🎙️</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default RealtimeVoiceOverlay;
