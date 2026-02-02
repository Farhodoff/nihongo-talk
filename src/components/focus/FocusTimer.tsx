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
    return (
        <div className="relative w-72 h-72 mb-8 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-100 dark:text-gray-800" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="283" strokeDashoffset={283 - (283 * progress) / 100} strokeLinecap="round" className={`transition-all duration-1000 ${mode === 'focus' ? 'text-indigo-500' : 'text-green-500'}`} />
            </svg>

            <div className="relative z-10 text-center flex flex-col items-center">
                <div className="text-6xl font-bold text-gray-900 dark:text-white font-mono tracking-wider">{formatTime(timeLeft)}</div>
                {mode === 'focus' && moodBefore && isActive && (
                    <div className="mt-2 text-2xl animate-pulse">{MOODS.find(m => m.value === moodBefore)?.emoji}</div>
                )}
            </div>
        </div>
    );
};

export default FocusTimer;
