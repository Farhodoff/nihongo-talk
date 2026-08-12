import React from 'react';
import { Play, Pause, RotateCcw, Volume2, Mic } from 'lucide-react';

interface VoicePlaybackBarProps {
    recordedUrl: string | null;
    durationSeconds: number;
    isPlaying: boolean;
    audioProgress: number;
    onPlay: () => void;
    onPause: () => void;
    onClear?: () => void;
    title?: string;
}

export const VoicePlaybackBar: React.FC<VoicePlaybackBarProps> = ({
    recordedUrl,
    durationSeconds,
    isPlaying,
    audioProgress,
    onPlay,
    onPause,
    onClear,
    title = "Sizning ovozli yozuv va talaffuzingiz"
}) => {
    if (!recordedUrl) return null;

    const formatSeconds = (sec: number) => {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    return (
        <div className="bg-card border border-border/80 rounded-2xl p-4 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                    <span className="p-1.5 bg-indigo-500/10 text-indigo-500 rounded-lg">
                        <Mic size={14} />
                    </span>
                    <span>{title}</span>
                </div>
                <span className="text-[11px] font-mono text-muted-foreground">
                    {formatSeconds(durationSeconds)}
                </span>
            </div>

            {/* Audio Wave Visualizer & Progress Bar */}
            <div className="relative w-full h-8 bg-muted/40 rounded-xl overflow-hidden flex items-center px-3 gap-1">
                {/* Simulated Waveform Bars */}
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-30 pointer-events-none">
                    {[40, 75, 30, 90, 60, 100, 45, 80, 55, 95, 40, 70, 85, 35, 90, 65, 50, 80, 40, 75].map((h, i) => (
                        <div
                            key={i}
                            className={`w-1 rounded-full ${isPlaying ? 'bg-indigo-500 animate-pulse' : 'bg-foreground'}`}
                            style={{ height: `${h}%`, animationDelay: `${i * 0.05}s` }}
                        />
                    ))}
                </div>

                {/* Progress bar fill */}
                <div
                    className="absolute top-0 left-0 bottom-0 bg-indigo-500/20 transition-all duration-150 border-r-2 border-indigo-500"
                    style={{ width: `${audioProgress}%` }}
                />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                    {isPlaying ? (
                        <button
                            onClick={onPause}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
                        >
                            <Pause size={14} />
                            <span>Pauza</span>
                        </button>
                    ) : (
                        <button
                            onClick={onPlay}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
                        >
                            <Play size={14} />
                            <span>Ovozni eshitish</span>
                        </button>
                    )}

                    {onClear && (
                        <button
                            onClick={onClear}
                            className="p-1.5 text-muted-foreground hover:text-foreground rounded-lg transition-colors"
                            title="Yazuvni tozalash"
                        >
                            <RotateCcw size={14} />
                        </button>
                    )}
                </div>

                <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Volume2 size={13} />
                    <span>Mikrofon yozuvi tayyor</span>
                </div>
            </div>
        </div>
    );
};
