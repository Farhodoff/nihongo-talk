import React, { useEffect, useState, useRef } from 'react';

interface AudioVisualizerProps {
    isActive: boolean;
    mode: 'speaking' | 'listening' | 'thinking' | 'idle';
    barCount?: number;
    compact?: boolean;
}

export const AudioVisualizer: React.FC<AudioVisualizerProps> = ({
    isActive,
    mode,
    barCount = 24,
    compact = false
}) => {
    const bars = Array.from({ length: barCount }, (_, i) => i);
    const [heights, setHeights] = useState<number[]>(bars.map(() => 8));
    const isActiveRef = useRef(isActive);
    const modeRef = useRef(mode);

    useEffect(() => {
        isActiveRef.current = isActive;
        modeRef.current = mode;
    }, [isActive, mode]);

    useEffect(() => {
        let frame: number;
        const animate = () => {
            if (isActiveRef.current) {
                setHeights(prev => prev.map((_, i) => {
                    const time = Date.now() / 1000;
                    const base = modeRef.current === 'speaking' ? 55 : modeRef.current === 'listening' ? 40 : 30;
                    const amplitude = modeRef.current === 'speaking' ? 35 : modeRef.current === 'listening' ? 25 : 15;
                    const freq = modeRef.current === 'thinking' ? 1.5 : 3;
                    const phase = (i / barCount) * Math.PI * 2;
                    const wave = Math.sin(time * freq + phase) * 0.5 + 0.5;
                    const wave2 = Math.sin(time * freq * 1.7 + phase * 1.3) * 0.3 + 0.5;
                    const noise = Math.random() * (modeRef.current === 'speaking' ? 15 : 8);
                    return Math.max(6, Math.min(95, base + amplitude * (wave * 0.6 + wave2 * 0.4) + noise - amplitude / 2));
                }));
            } else {
                setHeights(prev => prev.map((h) => h + (8 - h) * 0.15));
            }
            frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, []);

    const getModeColors = () => {
        switch (mode) {
            case 'speaking':
                return { from: '#6366f1', via: '#8b5cf6', to: '#a855f7' };
            case 'listening':
                return { from: '#10b981', via: '#14b8a6', to: '#06b6d4' };
            case 'thinking':
                return { from: '#f59e0b', via: '#a855f7', to: '#ec4899' };
            default:
                return { from: '#6b7280', via: '#9ca3af', to: '#d1d5db' };
        }
    };

    const colors = getModeColors();

    return (
        <div className={`flex items-end justify-center gap-[2px] ${compact ? 'h-8' : 'h-10'} w-full overflow-hidden`}>
            {bars.map((bar) => {
                const progress = bar / (barCount - 1);
                const r1 = parseInt(colors.from.slice(1, 3), 16);
                const g1 = parseInt(colors.from.slice(3, 5), 16);
                const b1 = parseInt(colors.from.slice(5, 7), 16);
                const r2 = parseInt(colors.to.slice(1, 3), 16);
                const g2 = parseInt(colors.to.slice(3, 5), 16);
                const b2 = parseInt(colors.to.slice(5, 7), 16);
                const r = Math.round(r1 + (r2 - r1) * progress);
                const g = Math.round(g1 + (g2 - g1) * progress);
                const b = Math.round(b1 + (b2 - b1) * progress);

                return (
                    <div
                        key={bar}
                        className="rounded-full transition-[height] duration-75 ease-out"
                        style={{
                            width: compact ? '2px' : '3px',
                            height: `${heights[bar]}%`,
                            backgroundColor: `rgb(${r}, ${g}, ${b})`,
                            opacity: isActive ? 0.9 : 0.25,
                            minHeight: '3px',
                        }}
                    />
                );
            })}
        </div>
    );
};

export default AudioVisualizer;
