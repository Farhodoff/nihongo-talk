import React from 'react';

interface AudioVisualizerProps {
    isActive: boolean;
    mode: 'speaking' | 'listening' | 'thinking' | 'idle';
    barCount?: number;
}

export const AudioVisualizer: React.FC<AudioVisualizerProps> = ({
    isActive,
    mode,
    barCount = 16
}) => {
    const bars = Array.from({ length: barCount }, (_, i) => i);

    const getModeColor = () => {
        switch (mode) {
            case 'speaking':
                return 'from-blue-500 via-indigo-500 to-purple-500';
            case 'listening':
                return 'from-emerald-400 via-teal-500 to-green-500';
            case 'thinking':
                return 'from-amber-400 via-purple-500 to-pink-500';
            default:
                return 'from-gray-400 to-gray-500';
        }
    };

    return (
        <div className="flex items-center justify-center gap-1.5 h-14 px-6 py-2 rounded-2xl bg-black/10 dark:bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden w-full max-w-md mx-auto">
            {bars.map((bar) => {
                const delay = (bar * 0.08).toFixed(2);
                const duration = (0.4 + (bar % 5) * 0.15).toFixed(2);

                return (
                    <div
                        key={bar}
                        className={`w-1.5 rounded-full bg-gradient-to-t ${getModeColor()} transition-all duration-300 ${
                            isActive ? 'animate-pulse' : 'h-2 opacity-30'
                        }`}
                        style={{
                            height: isActive
                                ? `${Math.min(100, Math.max(25, (bar % 4 === 0 ? 80 : bar % 3 === 0 ? 60 : 40)))}%`
                                : '8px',
                            animationDuration: `${duration}s`,
                            animationDelay: `${delay}s`,
                            transformOrigin: 'bottom'
                        }}
                    />
                );
            })}
        </div>
    );
};

export default AudioVisualizer;
