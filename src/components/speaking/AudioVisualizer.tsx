import React, { useEffect, useState, useRef, useMemo } from 'react';

interface AudioVisualizerProps {
  isActive: boolean;
  mode: 'speaking' | 'listening' | 'thinking' | 'idle';
  barCount?: number;
  compact?: boolean;
}

export const AudioVisualizer: React.FC<AudioVisualizerProps> = React.memo(
  ({ isActive, mode, barCount = 24, compact = false }) => {
    const bars = useMemo(() => Array.from({ length: barCount }, (_, i) => i), [barCount]);
    const [heights, setHeights] = useState<number[]>(() => bars.map(() => 8));
    const isActiveRef = useRef(isActive);
    const modeRef = useRef(mode);

    useEffect(() => {
      isActiveRef.current = isActive;
      modeRef.current = mode;
    }, [isActive, mode]);

    useEffect(() => {
      let frame: number;
      let lastTime = 0;
      const animate = (timestamp: number) => {
        // Throttle animation frame updates to ~25fps (every 40ms) to eliminate CPU lag
        if (timestamp - lastTime >= 40) {
          lastTime = timestamp;
          if (isActiveRef.current) {
            setHeights((prev) =>
              prev.map((_, i) => {
                const time = timestamp / 1000;
                const base =
                  modeRef.current === 'speaking' ? 55 : modeRef.current === 'listening' ? 40 : 30;
                const amplitude =
                  modeRef.current === 'speaking' ? 35 : modeRef.current === 'listening' ? 25 : 15;
                const freq = modeRef.current === 'thinking' ? 1.5 : 3;
                const phase = (i / barCount) * Math.PI * 2;
                const wave = Math.sin(time * freq + phase) * 0.5 + 0.5;
                const wave2 = Math.sin(time * freq * 1.7 + phase * 1.3) * 0.3 + 0.5;
                const noise = Math.random() * (modeRef.current === 'speaking' ? 15 : 8);
                return Math.max(
                  6,
                  Math.min(
                    95,
                    base + amplitude * (wave * 0.6 + wave2 * 0.4) + noise - amplitude / 2,
                  ),
                );
              }),
            );
          } else {
            setHeights((prev) => {
              const isAllResting = prev.every((h) => Math.abs(h - 8) < 0.5);
              if (isAllResting) return prev;
              return prev.map((h) => h + (8 - h) * 0.2);
            });
          }
        }
        frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frame);
    }, [barCount]);

    const barColors = useMemo(() => {
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
      const r1 = parseInt(colors.from.slice(1, 3), 16);
      const g1 = parseInt(colors.from.slice(3, 5), 16);
      const b1 = parseInt(colors.from.slice(5, 7), 16);
      const r2 = parseInt(colors.to.slice(1, 3), 16);
      const g2 = parseInt(colors.to.slice(3, 5), 16);
      const b2 = parseInt(colors.to.slice(5, 7), 16);

      return bars.map((bar) => {
        const progress = barCount > 1 ? bar / (barCount - 1) : 0;
        const r = Math.round(r1 + (r2 - r1) * progress);
        const g = Math.round(g1 + (g2 - g1) * progress);
        const b = Math.round(b1 + (b2 - b1) * progress);
        return `rgb(${r}, ${g}, ${b})`;
      });
    }, [mode, barCount, bars]);

    return (
      <div
        className={`flex items-end justify-center gap-[2px] ${compact ? 'h-8' : 'h-10'} w-full overflow-hidden`}
      >
        {bars.map((bar) => (
          <div
            key={bar}
            className="rounded-full transition-[height] duration-75 ease-out"
            style={{
              width: compact ? '2px' : '3px',
              height: `${heights[bar] || 8}%`,
              backgroundColor: barColors[bar] || '#10b981',
              opacity: isActive ? 0.9 : 0.25,
              minHeight: '3px',
            }}
          />
        ))}
      </div>
    );
  },
);

export default AudioVisualizer;
