import React from 'react';
import { RotateCcw, Pause, Play, Sparkles } from 'lucide-react';

interface RoomPomodoroProps {
    pomodoroMode: 'focus' | 'short_break' | 'long_break';
    timeLeft: number;
    isRunning: boolean;
    handleModeChange: (mode: 'focus' | 'short_break' | 'long_break', duration: number) => void;
    handleStart: () => void;
    handlePause: () => void;
    handleReset: (time?: number) => void;
    formatTime: (sec: number) => string;
}

export const RoomPomodoro: React.FC<RoomPomodoroProps> = ({
    pomodoroMode,
    timeLeft,
    isRunning,
    handleModeChange,
    handleStart,
    handlePause,
    handleReset,
    formatTime
}) => {
    const radius = 85;
    const circumference = 2 * Math.PI * radius;
    const maxTime = pomodoroMode === 'focus' ? 25 * 60 : pomodoroMode === 'short_break' ? 5 * 60 : 15 * 60;
    const strokeDashoffset = circumference - ((maxTime - timeLeft) / maxTime) * circumference;

    return (
        <div className="flex-1 flex flex-col items-center justify-center py-6 space-y-8 animate-in fade-in duration-300">
            {/* Mode selection */}
            <div className="flex bg-slate-900/80 p-1 rounded-2xl border border-slate-800 w-full max-w-sm">
                <button
                    onClick={() => handleModeChange('focus', 25)}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${pomodoroMode === 'focus' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-300'}`}
                >
                    Fokus (25)
                </button>
                <button
                    onClick={() => handleModeChange('short_break', 5)}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${pomodoroMode === 'short_break' ? 'bg-green-600 text-white' : 'text-slate-400 hover:text-slate-300'}`}
                >
                    Tanaffus (5)
                </button>
                <button
                    onClick={() => handleModeChange('long_break', 15)}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${pomodoroMode === 'long_break' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-300'}`}
                >
                    Uzoq (15)
                </button>
            </div>

            {/* Circular Timer Display */}
            <div className="relative w-56 h-56 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                    {/* Background Circle */}
                    <circle
                        cx="112"
                        cy="112"
                        r={radius}
                        className="stroke-slate-800 fill-none"
                        strokeWidth="8"
                    />
                    {/* Progress Circle */}
                    <circle
                        cx="112"
                        cy="112"
                        r={radius}
                        className={`fill-none transition-all duration-1000 ${
                            pomodoroMode === 'focus' 
                                ? 'stroke-indigo-500' 
                                : pomodoroMode === 'short_break' 
                                    ? 'stroke-green-500' 
                                    : 'stroke-cyan-500'
                        }`}
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                    />
                </svg>
                
                {/* Text display */}
                <div className="absolute flex flex-col items-center justify-center">
                    <span className="text-4xl font-black font-mono tracking-tight text-white">
                        {formatTime(timeLeft)}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1 flex items-center gap-1">
                        <Sparkles size={10} className="text-indigo-400" />
                        {pomodoroMode === 'focus' ? 'Fokus rejim' : 'Tanaffus'}
                    </span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-6">
                <button
                    onClick={() => handleReset(pomodoroMode === 'focus' ? 25 * 60 : pomodoroMode === 'short_break' ? 5 * 60 : 15 * 60)}
                    className="p-4 bg-slate-850 hover:bg-slate-800 hover:text-white text-slate-400 rounded-2xl border border-slate-700/60 transition-all active:scale-90"
                    title="Qayta boshlash"
                >
                    <RotateCcw size={22} />
                </button>
                
                {isRunning ? (
                    <button
                        onClick={handlePause}
                        className="p-6 bg-red-600 hover:bg-red-700 text-white rounded-[2rem] shadow-lg shadow-red-650/20 transition-all active:scale-95 flex items-center justify-center"
                    >
                        <Pause size={30} fill="currentColor" />
                    </button>
                ) : (
                    <button
                        onClick={handleStart}
                        className={`p-6 text-white rounded-[2rem] shadow-lg transition-all active:scale-95 flex items-center justify-center ${
                            pomodoroMode === 'focus' 
                                ? 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20' 
                                : 'bg-green-600 hover:bg-green-700 shadow-green-600/20'
                        }`}
                    >
                        <Play size={30} fill="currentColor" className="ml-1" />
                    </button>
                )}

                <div className="w-14" /> {/* Spacer to align reset button */}
            </div>
        </div>
    );
};
