import React from 'react';
import { Mic, HeartPulse, MessageCircle, RotateCcw, MicOff, PhoneOff, PhoneCall } from 'lucide-react';
import AudioVisualizer from './AudioVisualizer';

import { useLanguage } from '../../context/LanguageContext';

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
    isHandsFree?: boolean;
    onToggleHandsFree?: () => void;
    onBargeIn?: () => void;
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
    isHandsFree = false,
    onToggleHandsFree,
    onBargeIn,
}) => {
    const { language } = useLanguage();
    const isJa = language === 'ja';

    const getStatusInfo = () => {
        if (isSpeaking) return { 
            label: isJa ? 'AI音声出力中 (タップで中断)' : 'AI Gapirmoqda (To\'xtatish uchun bosing)', 
            color: 'text-blue-400', 
            pulseColor: 'bg-blue-500' 
        };
        if (isThinking) return { 
            label: isJa ? '思考中...' : "O'ylamoqda...", 
            color: 'text-purple-400', 
            pulseColor: 'bg-purple-500' 
        };
        if (isListening) return { 
            label: isJa ? '音声認識中 (お話しください)' : 'Eshitmoqda (Siz gapiryapsiz)', 
            color: 'text-emerald-400', 
            pulseColor: 'bg-emerald-500' 
        };
        return { 
            label: isHandsFree 
                ? (isJa ? 'ハンズフリー会話モード待機中' : 'Uzluksiz muloqotga tayyor')
                : (isJa ? '会話待機中 (マイクを押して開始)' : 'Tayyor (Gapirish uchun mikrofonga bosing)'), 
            color: 'text-amber-400', 
            pulseColor: 'bg-amber-500' 
        };
    };
    const status = getStatusInfo();

    return (
        <div className="relative z-20 px-3 md:px-5 pb-[72px] md:pb-3 pt-1 flex-shrink-0">
            <div className="bg-card/90 backdrop-blur-2xl rounded-2xl shadow-xl border border-border p-2.5 md:p-3">
                
                {/* Audio Visualizer Row — Only during live session */}
                {isLiveSession && (
                    <div className="mb-2.5 px-2">
                        <div className="flex items-center justify-between mb-1.5">
                            <div
                                onClick={() => {
                                    if (isSpeaking && onBargeIn) {
                                        onBargeIn();
                                    } else if (onForceStartListening) {
                                        onForceStartListening();
                                    }
                                }}
                                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                                title={isSpeaking ? "AI gapirishini to'xtatish" : "Gapirish uchun bosish"}
                            >
                                <span className={`w-2.5 h-2.5 rounded-full ${status.pulseColor} animate-pulse`} />
                                <span className={`text-[11px] font-bold uppercase tracking-wider ${status.color}`}>
                                    {status.label}
                                </span>
                            </div>
                            <span className="font-mono text-[11px] font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-md border border-border">
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
                            <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium truncate">
                                <HeartPulse size={14} className="shrink-0 text-emerald-500 animate-pulse" />
                                <span className="truncate">{isJa ? '会話を始めるには通話開始を押してください' : "Suhbat boshlash uchun qo'ng'iroq qiling"}</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                                <MessageCircle size={14} className="shrink-0 text-primary" />
                                <span>{chatHistoryLength} {isJa ? '件のメッセージ' : 'ta xabar'}</span>
                                {isHandsFree ? (
                                    <button
                                        type="button"
                                        onClick={onToggleHandsFree}
                                        className="hidden sm:inline text-emerald-400 font-bold text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors cursor-pointer"
                                        title={isJa ? 'ハンズフリーをオフにする' : "Hands-free rejimini o'chirish"}
                                    >
                                        ⚡ {isJa ? 'ハンズフリー' : 'Hands-free'}
                                    </button>
                                ) : onToggleHandsFree ? (
                                    <button
                                        type="button"
                                        onClick={onToggleHandsFree}
                                        className="hidden sm:inline text-muted-foreground font-medium text-[10px] px-1.5 py-0.5 rounded bg-muted border border-border hover:text-foreground transition-colors cursor-pointer"
                                        title={isJa ? 'ハンズフリーをオンにする' : 'Hands-free rejimini yoqish'}
                                    >
                                        🖐️ {isJa ? '手動' : "Qo'lda"}
                                    </button>
                                ) : null}
                            </div>
                        )}
                    </div>

                    {/* Right: Action Buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                        {/* Clear History */}
                        {chatHistoryLength > 0 && !isLiveSession && (
                            <button
                                onClick={onClearHistory}
                                className="p-2.5 bg-muted hover:bg-rose-500/10 text-muted-foreground hover:text-rose-400 rounded-xl transition-all border border-border cursor-pointer"
                                title={isJa ? '会話履歴を消去' : 'Chatni tozalash'}
                            >
                                <RotateCcw size={16} />
                            </button>
                        )}

                        {/* Mute Mic Toggle / Force Start / Barge-in */}
                        {isLiveSession && (
                            <button
                                onClick={() => {
                                    if (isSpeaking && onBargeIn) {
                                        onBargeIn();
                                    } else {
                                        if (isMuted) {
                                            setIsMuted(false);
                                        }
                                        if (onForceStartListening) {
                                            onForceStartListening();
                                        }
                                    }
                                }}
                                className={`p-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                                    isMuted 
                                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25' 
                                    : isSpeaking
                                    ? 'bg-[#C9A961]/20 text-[#C9A961] border border-[#C9A961]/40 animate-pulse'
                                    : isListening
                                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                                    : 'bg-primary text-primary-foreground shadow-md hover:bg-primary/90'
                                }`}
                                title={isSpeaking ? (isJa ? 'AI音声を中断' : "AI ni to'xtatish va gapirish") : isMuted ? (isJa ? 'マイクをオン' : "Mikrofonni yoqish") : (isJa ? '話す（マイク有効化）' : "Gapirish (Mikrofonni faollashtirish)")}
                            >
                                {isMuted ? <MicOff size={16} /> : <Mic size={16} className={isListening ? "animate-pulse text-emerald-400" : ""} />}
                                {isSpeaking ? (
                                    <span className="text-[11px] font-bold text-[#C9A961]">{isJa ? '中断' : "TO'XTATISH"}</span>
                                ) : !isListening && !isMuted && !isThinking ? (
                                    <span className="text-[11px] font-bold">{isJa ? '話す' : 'GAPIRISH'}</span>
                                ) : null}
                            </button>
                        )}

                        {/* PRIMARY CALL BUTTON */}
                        <button
                            onClick={toggleSession}
                            className={`relative group px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl flex items-center gap-2 font-extrabold text-white transition-all duration-300 shadow-md overflow-hidden active:scale-95 cursor-pointer ${
                                isLiveSession 
                                ? 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/25' 
                                : 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/25'
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
                                    <span className="text-xs tracking-wide relative z-10">{isJa ? '終了' : 'TUGATISH'}</span>
                                </>
                            ) : (
                                <>
                                    <PhoneCall size={16} className="group-hover:-rotate-12 transition-transform relative z-10 shrink-0 fill-current" />
                                    <span className="text-xs tracking-wide relative z-10">{isJa ? '通話開始' : "QO'NG'IROQ"}</span>
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
