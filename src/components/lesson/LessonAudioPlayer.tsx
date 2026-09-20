import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Disc, RotateCcw } from 'lucide-react';

interface LessonAudioPlayerProps {
  audioUrl: string;
  audioTitle?: string;
  className?: string;
}

const formatAudioTime = (seconds: number): string => {
  if (isNaN(seconds) || seconds <= 0) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const LessonAudioPlayer: React.FC<LessonAudioPlayerProps> = ({
  audioUrl,
  audioTitle,
  className = '',
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, []);

  // Reset when audioUrl changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
      audioRef.current = null;
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, [audioUrl]);

  const handleTogglePlay = () => {
    if (!audioRef.current) {
      const audio = new Audio(audioUrl);
      audio.playbackRate = playbackRate;

      audio.onloadedmetadata = () => {
        setDuration(audio.duration || 0);
      };

      audio.ontimeupdate = () => {
        setCurrentTime(audio.currentTime || 0);
      };

      audio.onended = () => {
        setIsPlaying(false);
        setCurrentTime(0);
      };

      audio.onerror = (e) => {
        console.error('[LessonAudioPlayer] Error loading audio:', audioUrl, e);
        setIsPlaying(false);
      };

      audioRef.current = audio;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('[LessonAudioPlayer] Playback was prevented:', err);
          setIsPlaying(false);
        });
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleTogglePlaybackRate = () => {
    const rates = [1.0, 0.8, 1.2];
    const nextIdx = (rates.indexOf(playbackRate) + 1) % rates.length;
    const newRate = rates[nextIdx];
    setPlaybackRate(newRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = newRate;
    }
  };

  const handleReplay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      if (!isPlaying) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  };

  return (
    <div
      className={`flex flex-col items-stretch justify-between gap-3 rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/10 via-primary/5 to-card p-3 shadow-sm sm:flex-row sm:items-center sm:p-4 ${className}`}
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleTogglePlay}
          aria-label={isPlaying ? "Audioni to'xtatish" : 'Audioni tinglash'}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md transition-all hover:scale-105 active:scale-95"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
        </button>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-primary">
              <Disc size={12} className={isPlaying ? 'animate-spin' : ''} />
              Studiya CD Audiosi
            </span>
            <span className="font-mono text-xs font-bold text-muted-foreground">
              {formatAudioTime(currentTime)} / {formatAudioTime(duration)}
            </span>
          </div>
          <p className="mt-0.5 truncate text-xs font-semibold text-foreground">
            {audioTitle || 'Minna no Nihongo Mondai Tinglash Audiosi'}
          </p>
        </div>
      </div>

      <div className="flex flex-1 items-center gap-2.5 sm:max-w-xs">
        <input
          type="range"
          min="0"
          max={duration || 100}
          step="0.1"
          value={currentTime}
          onChange={handleSeek}
          className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-border accent-primary"
          aria-label="Audio progress slider"
        />

        <button
          type="button"
          onClick={handleReplay}
          className="shrink-0 rounded-lg border border-border bg-card p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          title="Boshidan tinglash"
        >
          <RotateCcw size={14} />
        </button>

        <button
          type="button"
          onClick={handleTogglePlaybackRate}
          className="shrink-0 rounded-lg border border-border bg-card px-2.5 py-1 font-mono text-xs font-bold text-foreground transition-colors hover:bg-secondary"
          title="Ijro tezligi"
        >
          {playbackRate}x
        </button>
      </div>
    </div>
  );
};
