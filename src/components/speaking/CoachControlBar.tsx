import React from 'react';
import { Mic, HeartPulse, MessageCircle, RotateCcw, MicOff, PhoneOff, PhoneCall } from 'lucide-react';
import AudioVisualizer from './AudioVisualizer';

interface CoachControlBarProps {
    isLiveSession: boolean;
    isSpeaking: boolean;
    isThinking: boolean;
    isListening: boolean;
    isMuted: boolean;
    setIsMuted: (muted: boolean) => void;
    sessionSeconds: number;
    chatHistoryLength: number;
    toggleSession: () => void;
    onClearHistory: () => void;
    formatTimer: (sec: number) => string;
    onForceStartListening?: () => void;
}

export const CoachControlBar: React.FC<CoachControlBarProps> = ({
    isLiveSession,
    isSpeaking,
    isThinking,
    isListening,
    isMuted,
    setIsMuted,
    sessionSeconds,
    chatHistoryLength,
    toggleSession,
    onClearHistory,
    formatTimer,
    onForceStartListening,
}) => {
    const getStatusInfo = () => {
        if (isSpeaking) return { label: 'AI Gapirmoqda', color: 'text-blue-400', pulseColor: 'bg-blue-500' };
        if (isThinking) return { label: "O'ylamoqda...", color: 'text-purple-400', pulseColor: 'bg-purple-500' };
        if (isListening) return { label: 'Eshitmoqda', color: 'text-emerald-400', pulseColor: 'bg-emerald-500' };
        return { label: 'Tayyor (Gapirish uchun mikrofonga bosing)', color: 'text-amber-400', pulseColor: 'bg-amber-500' };
    };
    const status = getStatusInfo();

    return (
        <div className="relative z-20 px-3 md:px-5 pb-3 pt-1 flex-shrink-0">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-200/60 dark:border-gray-800/60 p-2.5 md:p-3">
                
                {/* Audio Visualizer Row — Only during live session */}
                {isLiveSession && (
                    <div className="mb-2.5 px-2">
                        <div className="flex items-center justify-between mb-1.5">
                            <div
                                onClick={() => {
                                    if (onForceStartListening) onForceStartListening();
                                }}
                                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                                title="Gapirish uchun bosish"
                            >
                                <span className={`w-2.5 h-2.5 rounded-full ${status.pulseColor} animate-pulse`} />
                                <span className={`text-[11px] font-bold uppercase tracking-wider ${status.color}`}>
                                    {status.label}
                                </span>
                            </div>
                            <span className="font-mono text-[11px] font-bold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-md">
                                {formatTimer(sessionSeconds)}
                            </span>
                        </div>
                        <AudioVisualizer 
                            isActive={isSpeaking || isListening || isThinking}
                            mode={isSpeaking ? 'speaking' : isThinking ? 'thinking' : isListening ? 'listening' : 'idle'}
                            barCount={32}
                        />
                    </div>
                )}

                {/* Controls Row */}
                <div className="flex items-center justify-between gap-2">
                    
                    {/* Left: Status or Info */}
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                        {!isLiveSession ? (
                            <div className="flex items-center gap-2 text-gray-400 text-xs font-medium truncate">
                                <HeartPulse size={14} className="shrink-0 text-emerald-500 animate-pulse" />
                                <span className="truncate">Suhbat boshlash uchun qo'ng'iroq qiling</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                                <MessageCircle size={14} className="shrink-0 text-indigo-400" />
                                <span>{chatHistoryLength} ta xabar</span>
                            </div>
                        )}
                    </div>

                    {/* Right: Action Buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                        {/* Clear History */}
                        {chatHistoryLength > 0 && !isLiveSession && (
                            <button
                                onClick={onClearHistory}
                                className="p-2.5 bg-gray-100 hover:bg-rose-100 dark:bg-gray-800 dark:hover:bg-rose-950/40 text-gray-500 dark:text-gray-400 hover:text-rose-500 rounded-xl transition-all"
                                title="Chatni tozalash"
                            >
                                <RotateCcw size={16} />
                            </button>
                        )}

                        {/* Mute Mic Toggle / Force Start */}
                        {isLiveSession && (
                            <button
                                onClick={() => {
                                    if (isMuted) {
                                        setIsMuted(false);
                                    }
                                    if (onForceStartListening) {
                                        onForceStartListening();
                                    }
                                }}
                                className={`p-2.5 rounded-xl transition-all flex items-center gap-1.5 ${
                                    isMuted 
                                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25' 
                                    : isListening
                                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                                    : 'bg-indigo-600 text-white shadow-md hover:bg-indigo-500 animate-bounce'
                                }`}
                                title={isMuted ? "Mikrofonni yoqish" : "Gapirish (Mikrofonni faollashtirish)"}
                            >
                                {isMuted ? <MicOff size={16} /> : <Mic size={16} className={isListening ? "animate-pulse text-emerald-400" : ""} />}
                                {!isListening && !isMuted && !isSpeaking && !isThinking && (
                                    <span className="text-[11px] font-bold">GAPIRISH</span>
                                )}
                            </button>
                        )}

                        {/* PRIMARY CALL BUTTON */}
                        <button
                            onClick={toggleSession}
                            className={`relative group px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl flex items-center gap-2 font-extrabold text-white transition-all duration-300 shadow-xl overflow-hidden active:scale-95 ${
                                isLiveSession 
                                ? 'bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 shadow-rose-500/25' 
                                : 'bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-600 hover:to-indigo-700 shadow-emerald-500/25 hover:scale-[1.02] hover:shadow-2xl'
                            }`}
                        >
                            {/* Shimmer effect */}
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            
                            {isLiveSession && (
                                <span className="absolute inset-0 rounded-xl border-2 border-white/20 animate-ping pointer-events-none" />
                            )}
                            {isLiveSession ? (
                                <>
                                    <PhoneOff size={16} className="group-hover:rotate-12 transition-transform relative z-10 shrink-0" />
                                    <span className="text-xs tracking-wide relative z-10">TUGATISH</span>
                                </>
                            ) : (
                                <>
                                    <PhoneCall size={16} className="group-hover:-rotate-12 transition-transform relative z-10 shrink-0" />
                                    <span className="text-xs tracking-wide relative z-10">QO'NG'IROQ</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoachControlBar;
