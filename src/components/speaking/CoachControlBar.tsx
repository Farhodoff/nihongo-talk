import React, { useState } from 'react';
import {
  Mic,
  HeartPulse,
  MessageCircle,
  RotateCcw,
  MicOff,
  PhoneOff,
  PhoneCall,
  Send,
} from 'lucide-react';
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
  onBargeIn?: () => void;
  isPreparingAudio?: boolean;
  onSendText?: (text: string) => void;
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
  onBargeIn,
  isPreparingAudio = false,
  onSendText,
}) => {
  const { language } = useLanguage();
  const isJa = language === 'ja';
  const [textDraft, setTextDraft] = useState('');

  const submitText = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!onSendText || isThinking) return;
    onSendText(textDraft);
    setTextDraft('');
  };

  const getStatusInfo = () => {
    if (isSpeaking)
      return {
        label: isJa ? 'AI音声出力中 (タップで中断)' : "AI Gapirmoqda (To'xtatish uchun bosing)",
        color: 'text-blue-400',
        pulseColor: 'bg-blue-500',
      };
    if (isPreparingAudio)
      return {
        label: isJa ? '音声準備中...' : 'Ovoz tayyorlanmoqda...',
        color: 'text-amber-400',
        pulseColor: 'bg-amber-500',
      };
    if (isThinking)
      return {
        label: isJa ? '思考中...' : "O'ylamoqda...",
        color: 'text-purple-400',
        pulseColor: 'bg-purple-500',
      };
    if (isListening)
      return {
        label: isJa ? '音声認識中 (お話しください)' : 'Eshitmoqda (Siz gapiryapsiz)',
        color: 'text-emerald-400',
        pulseColor: 'bg-emerald-500',
      };
    return {
      label: isJa ? '会話待機中 (マイクを押して開始)' : 'Tayyor (Gapirish uchun mikrofonga bosing)',
      color: 'text-amber-400',
      pulseColor: 'bg-amber-500',
    };
  };
  const status = getStatusInfo();

  return (
    <div className="relative z-20 flex-shrink-0 px-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-1 md:px-5 md:pb-3">
      <div className="rounded-2xl border border-border bg-card/90 p-2.5 shadow-xl backdrop-blur-2xl md:p-3">
        {/* Text fallback — usable when microphone is unavailable */}
        {isLiveSession && onSendText && (
          <form onSubmit={submitText} className="mb-2 flex items-center gap-2">
            <input
              type="text"
              value={textDraft}
              onChange={(e) => setTextDraft(e.target.value)}
              enterKeyHint="send"
              autoComplete="off"
              disabled={isThinking}
              placeholder={isJa ? 'タイプして送信…' : 'Yozib yuboring…'}
              aria-label={isJa ? 'テキストで返答' : 'Matn bilan javob berish'}
              className="h-11 min-w-0 flex-1 rounded-xl border border-border bg-background px-3.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isThinking || textDraft.trim().length < 2}
              aria-label={isJa ? '送信' : 'Yuborish'}
              className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md transition-all hover:bg-primary/90 active:scale-95 disabled:opacity-40"
            >
              <Send size={16} />
            </button>
          </form>
        )}
        {/* Audio Visualizer Row — Only during live session */}
        {isLiveSession && (
          <div className="mb-2 px-1 sm:mb-2.5 sm:px-2">
            <div className="mb-1.5 flex items-center justify-between gap-2">
              <div
                onClick={() => {
                  if (isSpeaking && onBargeIn) {
                    onBargeIn();
                  } else if (onForceStartListening) {
                    onForceStartListening();
                  }
                }}
                className="flex min-w-0 cursor-pointer items-center gap-1.5 transition-opacity hover:opacity-80 sm:gap-2"
                title={isSpeaking ? "AI gapirishini to'xtatish" : 'Gapirish uchun bosish'}
              >
                <span
                  className={`h-2 w-2 shrink-0 rounded-full sm:h-2.5 sm:w-2.5 ${status.pulseColor} animate-pulse`}
                />
                <span
                  className={`truncate text-[10px] font-bold uppercase tracking-wider sm:text-[11px] ${status.color}`}
                >
                  {status.label}
                </span>
              </div>
              <span className="shrink-0 rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-bold text-muted-foreground sm:px-2 sm:text-[11px]">
                {formatTimer(sessionSeconds)}
              </span>
            </div>
            <AudioVisualizer
              isActive={isSpeaking || isListening || isThinking}
              mode={
                isSpeaking
                  ? 'speaking'
                  : isThinking
                    ? 'thinking'
                    : isListening
                      ? 'listening'
                      : 'idle'
              }
              barCount={32}
            />
          </div>
        )}

        {/* Controls Row */}
        <div className="flex items-center justify-between gap-2">
          {/* Left: Status or Info */}
          <div className="flex min-w-0 flex-1 items-center gap-2">
            {!isLiveSession ? (
              <div className="flex items-center gap-2 truncate text-xs font-medium text-muted-foreground">
                <HeartPulse size={14} className="shrink-0 animate-pulse text-emerald-500" />
                <span className="truncate">
                  {isJa
                    ? '会話を始めるには通話開始を押してください'
                    : "Suhbat boshlash uchun qo'ng'iroq qiling"}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <MessageCircle size={14} className="shrink-0 text-primary" />
                <span>
                  {chatHistoryLength} {isJa ? '件のメッセージ' : 'ta xabar'}
                </span>
              </div>
            )}
          </div>

          {/* Right: Action Buttons */}
          <div className="flex shrink-0 items-center gap-2">
            {/* Clear History */}
            {chatHistoryLength > 0 && !isLiveSession && (
              <button
                onClick={onClearHistory}
                className="cursor-pointer rounded-xl border border-border bg-muted p-2.5 text-muted-foreground transition-all hover:bg-rose-500/10 hover:text-rose-400"
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
                className={`flex min-h-[44px] cursor-pointer items-center gap-1.5 rounded-xl px-3 py-2.5 transition-all ${
                  isMuted
                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25'
                    : isSpeaking
                      ? 'animate-pulse border border-[#C9A961]/40 bg-[#C9A961]/20 text-[#C9A961]'
                      : isListening
                        ? 'border border-emerald-500/30 bg-emerald-500/15 text-emerald-400'
                        : 'bg-primary text-primary-foreground shadow-md hover:bg-primary/90'
                }`}
                title={
                  isSpeaking
                    ? isJa
                      ? 'AI音声を中断'
                      : "AI ni to'xtatish va gapirish"
                    : isMuted
                      ? isJa
                        ? 'マイクをオン'
                        : 'Mikrofonni yoqish'
                      : isJa
                        ? '話す（マイク有効化）'
                        : 'Gapirish (Mikrofonni faollashtirish)'
                }
              >
                {isMuted ? (
                  <MicOff size={16} />
                ) : (
                  <Mic size={16} className={isListening ? 'animate-pulse text-emerald-400' : ''} />
                )}
                <span
                  className={`text-[11px] font-bold ${isSpeaking ? 'text-[#C9A961]' : ''}`}
                  aria-live="polite"
                >
                  {isSpeaking
                    ? isJa
                      ? '中断'
                      : "TO'XTATISH"
                    : isListening
                      ? isJa
                        ? '聴取中'
                        : 'ESHITYAPMAN'
                      : isThinking
                        ? isJa
                          ? '思考中'
                          : 'KUTILMOQDA'
                        : isMuted
                          ? isJa
                            ? 'ミュート'
                            : "O'CHIQ"
                          : isJa
                            ? '話す'
                            : 'GAPIRISH'}
                </span>
              </button>
            )}

            {/* PRIMARY CALL BUTTON */}
            <button
              onClick={toggleSession}
              className={`group relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-xl px-4 py-2 font-extrabold text-white shadow-md transition-all duration-300 active:scale-95 sm:px-6 sm:py-2.5 ${
                isLiveSession
                  ? 'bg-rose-600 shadow-rose-600/25 hover:bg-rose-700'
                  : 'bg-primary text-primary-foreground shadow-primary/25 hover:bg-primary/90'
              }`}
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              {isLiveSession && (
                <span className="pointer-events-none absolute inset-0 animate-ping rounded-xl border-2 border-white/20" />
              )}
              {isLiveSession ? (
                <>
                  <PhoneOff
                    size={16}
                    className="relative z-10 shrink-0 transition-transform group-hover:rotate-12"
                  />
                  <span className="relative z-10 text-xs tracking-wide">
                    {isJa ? '終了' : 'TUGATISH'}
                  </span>
                </>
              ) : (
                <>
                  <PhoneCall
                    size={16}
                    className="relative z-10 shrink-0 fill-current transition-transform group-hover:-rotate-12"
                  />
                  <span className="relative z-10 text-xs tracking-wide">
                    {isJa ? '通話開始' : "QO'NG'IROQ"}
                  </span>
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
