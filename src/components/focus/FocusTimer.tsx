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

const FocusTimer: React.FC<FocusTimerProps> = ({ timeLeft, progress, mode, moodBefore, isActive }) => {
    const colorClass = mode === 'focus' ? 'text-indigo-500' : 'text-emerald-500';
    const glowClass = mode === 'focus' ? 'shadow-indigo-500/20' : 'shadow-emerald-500/20';
    const bgGlow = mode === 'focus' ? 'bg-indigo-500/5' : 'bg-emerald-500/5';

    return (
        <div className={`relative w-80 h-80 mb-10 flex items-center justify-center rounded-full transition-all duration-700 ${isActive ? 'scale-105' : 'scale-100'} ${bgGlow}`}>
            {/* Outer Glow Ring */}
            <div className={`absolute inset-0 rounded-full border border-white/5 dark:border-white/10 ${isActive ? 'animate-pulse' : ''} shadow-[0_0_50px_-12px_rgba(0,0,0,0.3)] ${glowClass}`}></div>
            
            <svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-sm" viewBox="0 0 100 100">
                {/* Background Circle */}
                <circle 
                    cx="50" 
                    cy="50" 
                    r="46" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    className="text-gray-100 dark:text-gray-800/50" 
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
                    className={`transition-all duration-1000 ease-linear ${colorClass}`}
                    style={{ filter: isActive ? 'drop-shadow(0 0 6px currentColor)' : 'none' }}
                />
            </svg>

            <div className="relative z-10 text-center flex flex-col items-center">
                <span className="text-xs font-bold tracking-[0.3em] uppercase mb-1 text-gray-400 dark:text-gray-500">
                    {mode === 'focus' ? 'Fokus' : 'Tanaffus'}
                </span>
                <div className={`text-7xl font-bold text-gray-900 dark:text-white font-mono tracking-tight tabular-nums transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}>
                    {formatTime(timeLeft)}
                </div>
                {mode === 'focus' && moodBefore && isActive && (
                    <div className="absolute -bottom-8 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 animate-bounce flex items-center gap-2">
                        <span className="text-lg">{MOODS.find(m => m.value === moodBefore)?.emoji}</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Faol</span>
                    </div>
                )}
            </div>
            
            {/* Animated particles or subtle dots around the ring could be added here for extra polish */}
        </div>
    );
};

export default FocusTimer;
