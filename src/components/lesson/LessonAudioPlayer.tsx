import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Disc, RotateCcw, RotateCw, Volume2, VolumeX } from 'lucide-react';
import { resolveAudioUrl } from '../../utils/audioUrl';

interface LessonAudioPlayerProps {
  audioUrl: string;
  audioTitle?: string;
  className?: string;
  autoPlay?: boolean;
}

const formatAudioTime = (seconds: number): string => {
  if (isNaN(seconds) || seconds <= 0) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const PLAYBACK_RATES = [0.8, 1.0, 1.2, 1.5];

export const LessonAudioPlayer: React.FC<LessonAudioPlayerProps> = ({
  audioUrl,
  audioTitle,
  className = '',
  autoPlay = false,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [isMuted, setIsMuted] = useState(false);

  // Initialize and clean up audio on audioUrl change or unmount
  useEffect(() => {
    if (typeof window === 'undefined' || typeof Audio === 'undefined') return;

    const resolvedSrc = resolveAudioUrl(audioUrl);
    const audio = new Audio(resolvedSrc);
    audio.preload = 'metadata';
    audio.playbackRate = playbackRate;
    audioRef.current = audio;

    const onLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime || 0);
    };

    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const onError = (e: Event) => {
      console.warn('[LessonAudioPlayer] Error loading audio:', audioUrl, e);
      setIsPlaying(false);
    };

    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);

    if (autoPlay) {
      const p = audio.play();
      if (p && typeof p.then === 'function') {
        p.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      } else {
        setIsPlaying(true);
      }
    }

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
      audio.src = '';
      audioRef.current = null;
    };
  }, [audioUrl, autoPlay]);

  const handleTogglePlay = () => {
    if (!audioRef.current) {
      if (typeof window === 'undefined' || typeof Audio === 'undefined') return;
      audioRef.current = new Audio(resolveAudioUrl(audioUrl));
    }
    const audio = audioRef.current;
    audio.playbackRate = playbackRate;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      const p = audio.play();
      if (p && typeof p.then === 'function') {
        p.then(() => setIsPlaying(true)).catch((err) => {
          console.warn('[LessonAudioPlayer] Playback was prevented:', err);
          setIsPlaying(false);
        });
      } else {
        setIsPlaying(true);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleJump = (delta: number) => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime || 0;
    const target = Math.max(0, Math.min(duration || current + delta, current + delta));
    audioRef.current.currentTime = target;
    setCurrentTime(target);
  };

  const handleReplay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      const p = audioRef.current.play();
      if (p && typeof p.then === 'function') {
        p.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      } else {
        setIsPlaying(true);
      }
    }
  };

  const handleRateChange = (rate: number) => {
    setPlaybackRate(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  const handleToggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const progressPct = duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0;

  return (
    <div
      className={`sm:p-4.5 relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 via-card to-card p-3.5 shadow-sm transition-all ${className}`}
    >
      {/* Top Row: Track Badge, Title & Timing */}
      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-2.5">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Disc size={20} className={isPlaying ? 'animate-spin' : ''} />
            {isPlaying && (
              <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
            )}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center rounded-md bg-primary/20 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-primary">
                Studiya CD Audiosi
              </span>
              <span className="xs:inline hidden text-[11px] font-medium text-muted-foreground">
                {isPlaying ? 'Ijro etilmoqda...' : 'Tinglashga tayyor'}
              </span>
            </div>
            <p className="mt-0.5 truncate text-xs font-bold text-foreground sm:text-sm">
              {audioTitle || 'Minna no Nihongo Mondai Tinglash Audiosi'}
            </p>
          </div>
        </div>

        {/* Timestamp */}
        <div className="flex items-center justify-between gap-2 text-xs sm:justify-end">
          <span className="font-mono font-bold text-foreground">
            {formatAudioTime(currentTime)}
          </span>
          <span className="font-mono text-muted-foreground">/</span>
          <span className="font-mono text-muted-foreground">{formatAudioTime(duration)}</span>
        </div>
      </div>

      {/* Scrubber Progress Slider */}
      <div className="relative mt-3 flex items-center">
        <input
          type="range"
          min="0"
          max={duration || 100}
          step="0.1"
          value={currentTime}
          onChange={handleSeek}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-secondary accent-primary transition-all hover:h-2.5"
          aria-label="Audio progress slider"
          style={{
            background: `linear-gradient(to right, var(--primary, #6366f1) ${progressPct}%, var(--secondary, #27272a) ${progressPct}%)`,
          }}
        />
      </div>

      {/* Bottom Controls Row: Play, Jumps, Speed & Mute */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-border/40 pt-1">
        {/* Playback Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Main Play/Pause Button */}
          <button
            type="button"
            onClick={handleTogglePlay}
            aria-label={isPlaying ? "Audioni to'xtatish" : 'Audioni tinglash'}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md transition-all hover:scale-105 active:scale-95"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
          </button>

          {/* Jump -5s */}
          <button
            type="button"
            onClick={() => handleJump(-5)}
            className="flex h-9 items-center gap-1 rounded-lg border border-border bg-card px-2 text-[11px] font-bold text-foreground transition-all hover:bg-secondary active:scale-95"
            title="5 soniya orqaga"
          >
            <RotateCcw size={13} />
            <span>-5s</span>
          </button>

          {/* Jump +5s */}
          <button
            type="button"
            onClick={() => handleJump(5)}
            className="flex h-9 items-center gap-1 rounded-lg border border-border bg-card px-2 text-[11px] font-bold text-foreground transition-all hover:bg-secondary active:scale-95"
            title="5 soniya oldinga"
          >
            <RotateCw size={13} />
            <span>+5s</span>
          </button>

          {/* Replay */}
          <button
            type="button"
            onClick={handleReplay}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:bg-secondary hover:text-foreground active:scale-95"
            title="Boshidan tinglash"
          >
            <RotateCcw size={14} />
          </button>
        </div>

        {/* Speed Pills & Mute */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center rounded-lg border border-border bg-card/60 p-0.5">
            {PLAYBACK_RATES.map((rate) => {
              const isSelected = playbackRate === rate;
              return (
                <button
                  key={rate}
                  type="button"
                  onClick={() => handleRateChange(rate)}
                  className={`rounded-md px-2 py-1 font-mono text-[11px] font-bold transition-all ${
                    isSelected
                      ? 'bg-primary text-primary-foreground shadow-xs'
                      : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
                  }`}
                  title={`${rate}x tezlik`}
                >
                  {rate}x
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleToggleMute}
            className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all ${
              isMuted
                ? 'border-rose-500/40 bg-rose-500/10 text-rose-500'
                : 'border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground'
            }`}
            title={isMuted ? 'Ovozni yoqish' : "Ovozni o'chirish"}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
        </div>
      </div>
    </div>
  );
};
