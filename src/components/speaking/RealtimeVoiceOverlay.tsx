import React from 'react';
import { Mic, Sparkles, AlertCircle, CheckCircle2, Volume2, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    isHandsFree?: boolean;
    onToggleRecording: () => void;
    onCommitNow?: () => void;
    onBargeIn?: () => void;
    onToggleHandsFree?: () => void;
}

export const RealtimeVoiceOverlay: React.FC<RealtimeVoiceOverlayProps> = ({
    isRecording,
    isAiSpeaking,
    transcript,
    errors,
    isHandsFree = false,
    onCommitNow,
    onBargeIn,
    onToggleHandsFree,
}) => {
    const getCategoryBadge = (type: string) => {
        switch (type) {
            case 'vocabulary':
                return { label: 'Lug\'at', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' };
            case 'pronunciation':
                return { label: 'Talaffuz', color: 'bg-purple-500/20 text-purple-300 border-purple-500/30' };
            default:
                return { label: 'Grammatika', color: 'bg-amber-500/20 text-amber-300 border-amber-500/30' };
        }
    };

    return (
        <div className="w-full space-y-2 shrink-0">
            {/* Sleek Compact Top Bar */}
            <div className="w-full bg-slate-900/80 backdrop-blur-xl border border-indigo-500/20 rounded-2xl px-4 py-2.5 flex items-center justify-between shadow-xl">
                {/* Left: Live Status Badge */}
                <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-md transition-colors ${
                        isAiSpeaking 
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 animate-pulse'
                            : isRecording 
                            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 animate-pulse'
                            : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}>
                        {isAiSpeaking ? (
                            <Volume2 size={16} className="animate-bounce" />
                        ) : isRecording ? (
                            <Mic size={16} className="animate-pulse text-rose-400" />
                        ) : (
                            <Sparkles size={16} />
                        )}
                    </div>

                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-extrabold text-white tracking-wide">
                                {isAiSpeaking ? 'AI Coach Gapirmoqda...' : isRecording ? 'Jonli Ovoz Yozib Olinmoqda...' : 'Real-Time Voice Coach'}
                            </span>
                            {(isRecording || isAiSpeaking) && (
                                <span className="flex h-2 w-2 relative">
                                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isAiSpeaking ? 'bg-cyan-400' : 'bg-rose-400'}`} />
                                    <span className={`relative inline-flex rounded-full h-2 w-2 ${isAiSpeaking ? 'bg-cyan-500' : 'bg-rose-500'}`} />
                                </span>
                            )}
                        </div>
                        <p className="text-[10px] text-slate-400 font-medium flex items-center gap-1.5">
                            {isAiSpeaking ? 'Gapirish uchun to\'xtatishingiz mumkin' : isRecording ? 'Tezkor adaptiv tahlil rejimida' : 'Jonli ovozli muloqot rejimida'}
                            {isHandsFree && (
                                <span className="text-emerald-400 font-bold text-[9px] px-1 py-0.2 rounded bg-emerald-500/10 border border-emerald-500/20">
                                    ⚡ Hands-free
                                </span>
                            )}
                        </p>
                    </div>
                </div>

                {/* Right: Level Badges, Hands-Free Toggle & Barge-in */}
                <div className="flex items-center gap-2">
                    {/* Barge-in Stop Button if AI is speaking */}
                    {isAiSpeaking && onBargeIn && (
                        <button
                            type="button"
                            onClick={onBargeIn}
                            className="px-2.5 py-1 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-[11px] font-bold flex items-center gap-1 shrink-0 transition-all cursor-pointer shadow-md active:scale-95"
                            title="AI gapirishini to'xtatish va so'zlash"
                        >
                            <Zap size={12} className="text-cyan-300 animate-pulse" />
                            <span>To'xtatish</span>
                        </button>
                    )}

                    {onToggleHandsFree && (
                        <button
                            type="button"
                            onClick={onToggleHandsFree}
                            className={`hidden md:flex items-center gap-1 px-2 py-1 rounded-xl text-[10px] font-bold border transition-all ${
                                isHandsFree 
                                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' 
                                    : 'bg-slate-800 border-slate-700 text-slate-400'
                            }`}
                            title="Hands-free avtomatik suhbat rejimini yoqish/o'chirish"
                        >
                            <span>Hands-free: {isHandsFree ? 'ON' : 'OFF'}</span>
                        </button>
                    )}

                    {errors.length > 0 && (
                        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-bold">
                            <AlertCircle size={13} />
                            <span>{errors.length} maslahat</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Live Streaming Transcript Pill with Instant Commit */}
            <AnimatePresence>
                {isRecording && transcript && (
                    <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="bg-slate-900/90 border border-rose-500/30 rounded-xl px-3.5 py-2 flex items-center justify-between gap-2 shadow-lg backdrop-blur-md"
                    >
                        <div className="flex items-center gap-2 min-w-0">
                            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping shrink-0" />
                            <p className="text-xs text-rose-100 font-medium truncate">
                                &quot;{transcript}&quot;
                            </p>
                        </div>
                        {onCommitNow && (
                            <button
                                type="button"
                                onClick={onCommitNow}
                                className="px-2.5 py-1 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 text-[11px] font-bold flex items-center gap-1 shrink-0 transition-all cursor-pointer"
                            >
                                <Zap size={12} className="text-rose-400" />
                                <span>Yuborish</span>
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Expandable Micro-error toasts if detected */}
            <AnimatePresence>
                {errors.length > 0 && (
                    <motion.div 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                    >
                        {errors.slice(0, 2).map((err) => {
                            const badge = getCategoryBadge(err.type);
                            return (
                                <div key={err.id} className="bg-amber-950/40 border border-amber-500/20 rounded-xl p-2.5 flex items-start gap-2.5 text-xs backdrop-blur-md">
                                    <AlertCircle size={14} className="text-amber-400 shrink-0 mt-0.5" />
                                    <div className="min-w-0 space-y-1 flex-1">
                                        <div className="flex items-center justify-between gap-1">
                                            <div className="font-bold text-amber-200 truncate flex items-center gap-1.5 text-[11px]">
                                                <span className="line-through text-slate-400">{err.originalText}</span>
                                                <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                                                    <CheckCircle2 size={11} /> {err.correction}
                                                </span>
                                            </div>
                                            <span className={`text-[9px] px-1.5 py-0.5 rounded border font-bold uppercase ${badge.color}`}>
                                                {badge.label}
                                            </span>
                                        </div>
                                        <p className="text-slate-300 text-[10px] line-clamp-1">
                                            {err.explanation}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default RealtimeVoiceOverlay;
