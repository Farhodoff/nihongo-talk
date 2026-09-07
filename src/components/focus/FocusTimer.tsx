import React from 'react';
import { MOODS } from './constants';

interface FocusTimerProps {
  timeLeft: number;
  progress: number;
  mode: 'focus' | 'short_break' | 'long_break';
  moodBefore?: number | null;
  isActive: boolean;
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const FocusTimer: React.FC<FocusTimerProps> = ({
  timeLeft,
  progress,
  mode,
  moodBefore,
  isActive,
}) => {
  const colorClass = mode === 'focus' ? 'text-primary' : 'text-emerald-500';
  const glowClass =
    mode === 'focus'
      ? 'shadow-primary/25 dark:shadow-primary/10'
      : 'shadow-emerald-500/25 dark:shadow-emerald-500/10';
  const bgGlow =
    mode === 'focus'
      ? 'bg-primary/[0.03] dark:bg-primary/[0.01]'
      : 'bg-emerald-500/[0.03] dark:bg-emerald-500/[0.01]';
  const borderGlowColor =
    mode === 'focus'
      ? 'border-primary/20 dark:border-primary/10'
      : 'border-emerald-500/20 dark:border-emerald-500/10';
  const dashedGlowColor =
    mode === 'focus'
      ? 'border-primary/15 dark:border-primary/5'
      : 'border-emerald-500/15 dark:border-emerald-500/5';

  return (
    <div
      className={`relative mb-6 flex h-64 w-64 items-center justify-center rounded-full transition-all duration-700 sm:mb-8 sm:h-80 sm:w-80 ${isActive ? 'scale-105' : 'scale-100'} ${bgGlow}`}
    >
      {/* Outer Glow Ring */}
      <div
        className={`absolute inset-0 rounded-full border ${borderGlowColor} ${isActive ? 'animate-pulse' : ''} shadow-[0_0_60px_-15px_rgba(0,0,0,0.35)] ${glowClass}`}
      ></div>

      {/* Premium Rotating Dashed Outer Ring */}
      <div
        className={`absolute -inset-3 rounded-full border border-dashed transition-all duration-1000 ${isActive ? `${dashedGlowColor} animate-spin [animation-duration:120s]` : 'border-transparent'}`}
      />

      <svg
        className="absolute inset-0 h-full w-full -rotate-90 drop-shadow-sm"
        viewBox="0 0 100 100"
      >
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-muted"
        />
        {/* Progress Circle */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeDasharray="289"
          strokeDashoffset={289 - (289 * progress) / 100}
          strokeLinecap="round"
          className={`transition-[stroke-dashoffset] duration-1000 ease-linear ${colorClass}`}
          style={{ filter: isActive ? 'drop-shadow(0 0 8px currentColor)' : 'none' }}
        />
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center">
        <span className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
          {mode === 'focus' ? 'Fokus' : 'Tanaffus'}
        </span>
        <div
          className={`font-mono text-5xl font-bold tabular-nums tracking-tight text-foreground transition-transform duration-300 sm:text-7xl ${isActive ? 'scale-110' : 'scale-100'}`}
        >
          {formatTime(timeLeft)}
        </div>
        {mode === 'focus' && moodBefore && isActive && (
          <div className="absolute -bottom-8 flex animate-bounce items-center gap-2 rounded-full border border-border bg-background px-3 py-1 shadow-sm">
            <span className="text-lg">{MOODS.find((m) => m.value === moodBefore)?.emoji}</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter text-muted-foreground">
              Faol
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FocusTimer;
