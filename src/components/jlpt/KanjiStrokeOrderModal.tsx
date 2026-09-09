import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Volume2,
  Sparkles,
  PenTool,
  Eye,
  EyeOff,
  Trash2,
} from 'lucide-react';
import { speakText } from '../../utils/audioTts';
import kanjiStrokesData from '../../data/kanjiStrokes.json';

interface KanjiStrokeEntry {
  paths: string[];
  numbers: { x: number; y: number; num: number }[];
}

const localStrokes: Record<string, KanjiStrokeEntry> = kanjiStrokesData as unknown as Record<
  string,
  KanjiStrokeEntry
>;

interface KanjiStrokeOrderModalProps {
  kanji: string;
  meaningUz: string;
  onyomi: string;
  kunyomi: string;
  strokeCount: number;
  level: string;
  isOpen: boolean;
  onClose: () => void;
}

function parseKanjiSvg(data: string): KanjiStrokeEntry {
  const paths: string[] = [];
  const pathRegex = /<path[^>]+d="([^"]+)"/g;
  let match: RegExpExecArray | null;
  while ((match = pathRegex.exec(data)) !== null) {
    paths.push(match[1]);
  }

  const numbers: { x: number; y: number; num: number }[] = [];
  const textRegex = /<text[^>]+matrix\([^)]+\s+([\d.]+)\s+([\d.]+)\)[^>]*>(\d+)<\/text>/g;
  while ((match = textRegex.exec(data)) !== null) {
    numbers.push({ x: parseFloat(match[1]), y: parseFloat(match[2]), num: parseInt(match[3], 10) });
  }
  return { paths, numbers };
}

export const KanjiStrokeOrderModal: React.FC<KanjiStrokeOrderModalProps> = ({
  kanji,
  meaningUz,
  onyomi,
  kunyomi,
  strokeCount,
  level,
  isOpen,
  onClose,
}) => {
  const [strokeData, setStrokeData] = useState<KanjiStrokeEntry | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showNumbers, setShowNumbers] = useState<boolean>(true);
  const [isPracticeMode, setIsPracticeMode] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(750); // ms per stroke

  // Canvas drawing state for practice mode
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  const totalStrokes = strokeData?.paths.length || strokeCount || 1;

  // Load stroke data
  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false);
      return;
    }

    setIsPracticeMode(false);

    if (localStrokes[kanji]) {
      setStrokeData(localStrokes[kanji]);
      setCurrentStep(1);
      setIsPlaying(true);
    } else {
      // Dynamic fetch fallback
      const code = kanji.charCodeAt(0).toString(16).padStart(5, '0');
      fetch(`https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg/kanji/${code}.svg`)
        .then((res) => {
          if (!res.ok) throw new Error('Not found');
          return res.text();
        })
        .then((svg) => {
          const parsed = parseKanjiSvg(svg);
          if (parsed.paths.length > 0) {
            setStrokeData(parsed);
            setCurrentStep(1);
            setIsPlaying(true);
          } else {
            setStrokeData(null);
          }
        })
        .catch(() => {
          setStrokeData(null);
          setCurrentStep(strokeCount);
        });
    }
  }, [isOpen, kanji, strokeCount]);

  // Animation timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying && strokeData && strokeData.paths.length > 0) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= strokeData.paths.length) {
            setIsPlaying(false);
            return strokeData.paths.length;
          }
          return prev + 1;
        });
      }, speed);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, strokeData, speed]);

  // Freehand drawing canvas logic
  const startDrawing = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const speedLabels: Record<number, string> = {
    1000: '0.7x',
    750: '1x',
    450: '1.5x',
  };

  const cycleSpeed = () => {
    if (speed === 750) setSpeed(450);
    else if (speed === 450) setSpeed(1000);
    else setSpeed(750);
  };

  if (!isOpen) return null;

  return (
    <div className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md">
      {/* Scoped CSS for realistic stroke drawing animation */}
      <style>{`
                @keyframes drawStrokeLine {
                    0% {
                        stroke-dashoffset: 350;
                        opacity: 0.7;
                    }
                    100% {
                        stroke-dashoffset: 0;
                        opacity: 1;
                    }
                }
                .animating-stroke {
                    stroke-dasharray: 350;
                    animation: drawStrokeLine ${speed * 0.85}ms cubic-bezier(0.35, 0, 0.25, 1) forwards;
                }
            `}</style>

      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900 p-6 text-slate-100 shadow-2xl">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-rose-500/20 blur-3xl" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-gradient-to-r from-rose-500 to-indigo-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
              JLPT {level}
            </span>
            <h3 className="flex items-center gap-1.5 text-lg font-bold text-slate-100">
              <Sparkles className="h-4 w-4 text-amber-400" /> Kanji Stroke Order
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl bg-slate-800/80 p-2 text-slate-400 transition hover:bg-slate-700 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <button
            onClick={() => {
              setIsPracticeMode(false);
              setIsPlaying(true);
              if (currentStep === 0) setCurrentStep(1);
            }}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-1.5 text-xs font-semibold transition ${
              !isPracticeMode
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Play className="h-3.5 w-3.5" /> Chizish animatsiyasi
          </button>
          <button
            onClick={() => {
              setIsPracticeMode(true);
              setIsPlaying(false);
            }}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-1.5 text-xs font-semibold transition ${
              isPracticeMode
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <PenTool className="h-3.5 w-3.5" /> O'zing chizib ko'r
          </button>
        </div>

        {/* Main Kanji Canvas Area */}
        <div className="my-5 flex flex-col items-center">
          <div className="relative flex h-56 w-56 items-center justify-center overflow-hidden rounded-2xl border-2 border-indigo-500/40 bg-slate-950 shadow-inner">
            {/* Grid Alignment Lines */}
            <div className="absolute inset-0 left-1/2 border-r border-dashed border-slate-800/60" />
            <div className="absolute inset-0 top-1/2 border-b border-dashed border-slate-800/60" />
            <div className="absolute inset-0 left-1/4 border-r border-dashed border-slate-800/20" />
            <div className="absolute inset-0 left-3/4 border-r border-dashed border-slate-800/20" />
            <div className="absolute inset-0 top-1/4 border-b border-dashed border-slate-800/20" />
            <div className="absolute inset-0 top-3/4 border-b border-dashed border-slate-800/20" />

            {/* Interactive Vector Stroke Display */}
            {strokeData && strokeData.paths.length > 0 ? (
              <svg
                viewBox="0 0 109 109"
                className="pointer-events-none relative z-10 h-48 w-48 select-none"
              >
                {/* 1. Ghost Background Strokes */}
                <g className="opacity-20">
                  {strokeData.paths.map((d, i) => (
                    <path
                      key={`ghost-${i}`}
                      d={d}
                      fill="none"
                      stroke="#94a3b8"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ))}
                </g>

                {/* 2. Rendered Strokes based on currentStep */}
                {!isPracticeMode && (
                  <g>
                    {strokeData.paths.slice(0, currentStep).map((d, i) => {
                      const isLatest = i === currentStep - 1;
                      return (
                        <path
                          key={`stroke-${i}-${currentStep}`}
                          d={d}
                          fill="none"
                          stroke={isLatest ? '#f59e0b' : '#fbbf24'}
                          strokeWidth="4.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={isLatest && isPlaying ? 'animating-stroke' : ''}
                          style={{
                            filter: isLatest
                              ? 'drop-shadow(0 0 6px rgba(245, 158, 11, 0.7))'
                              : undefined,
                          }}
                        />
                      );
                    })}
                  </g>
                )}

                {/* 3. Stroke Number Indicators */}
                {showNumbers &&
                  !isPracticeMode &&
                  strokeData.numbers.map((n, i) => {
                    const isVisible = i < currentStep || currentStep === 0;
                    if (!isVisible) return null;
                    const isCurrent = i === currentStep - 1;
                    return (
                      <g key={`num-${i}`}>
                        <circle
                          cx={n.x}
                          cy={n.y}
                          r="4"
                          fill={isCurrent ? '#f59e0b' : '#1e1b4b'}
                          stroke={isCurrent ? '#ffffff' : '#818cf8'}
                          strokeWidth="1"
                        />
                        <text
                          x={n.x}
                          y={n.y + 1.4}
                          textAnchor="middle"
                          fontSize="4.2"
                          fontWeight="bold"
                          fill={isCurrent ? '#000000' : '#e0e7ff'}
                        >
                          {n.num}
                        </text>
                      </g>
                    );
                  })}
              </svg>
            ) : (
              /* Fallback if stroke data not available */
              <div className="relative z-10 select-none text-8xl font-black tracking-widest text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                {kanji}
              </div>
            )}

            {/* Freehand Practice Canvas Overlay */}
            {isPracticeMode && (
              <canvas
                ref={canvasRef}
                width={224}
                height={224}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                className="absolute inset-0 z-20 cursor-crosshair touch-none"
              />
            )}

            {/* Stroke Count Badge */}
            <div className="absolute right-2 top-2 z-30 rounded-lg border border-slate-800 bg-slate-900/90 px-2.5 py-1 text-[11px] font-medium text-slate-300">
              {isPracticeMode ? 'Erkin chizish' : `${currentStep} / ${totalStrokes} chiziq`}
            </div>
          </div>

          {/* Controls Row */}
          {!isPracticeMode ? (
            <div className="mt-5 flex items-center gap-2.5">
              {/* Previous Stroke */}
              <button
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStep((prev) => Math.max(0, prev - 1));
                }}
                disabled={currentStep <= 0}
                className="rounded-xl bg-slate-800 p-2.5 text-slate-300 transition hover:bg-slate-700 disabled:opacity-30"
                title="Oldingi chiziq"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Main Play / Pause / Replay Button */}
              <button
                onClick={() => {
                  if (currentStep >= totalStrokes) {
                    setCurrentStep(1);
                    setIsPlaying(true);
                  } else {
                    setIsPlaying(!isPlaying);
                  }
                }}
                className="flex min-w-[170px] items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500 active:scale-95"
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-4 w-4" /> To'xtatish
                  </>
                ) : currentStep >= totalStrokes ? (
                  <>
                    <RotateCcw className="h-4 w-4" /> Qayta ko'rish
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" /> Chizishni ko'rish
                  </>
                )}
              </button>

              {/* Reset to Start */}
              <button
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStep(0);
                }}
                className="rounded-xl bg-slate-800 p-2.5 text-slate-300 transition hover:bg-slate-700"
                title="Boshidan boshlash"
              >
                <RotateCcw className="h-5 w-5" />
              </button>

              {/* Next Stroke */}
              <button
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStep((prev) => Math.min(totalStrokes, prev + 1));
                }}
                disabled={currentStep >= totalStrokes}
                className="rounded-xl bg-slate-800 p-2.5 text-slate-300 transition hover:bg-slate-700 disabled:opacity-30"
                title="Keyingi chiziq"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Speed Cycle Button */}
              <button
                onClick={cycleSpeed}
                className="rounded-xl bg-slate-800 px-2.5 py-2 text-xs font-semibold text-slate-300 transition hover:bg-slate-700"
                title="Chizish tezligi"
              >
                {speedLabels[speed]}
              </button>

              {/* Toggle Numbers */}
              <button
                onClick={() => setShowNumbers(!showNumbers)}
                className={`rounded-xl p-2.5 transition ${
                  showNumbers
                    ? 'border border-indigo-500/30 bg-indigo-500/20 text-indigo-400'
                    : 'bg-slate-800 text-slate-400'
                }`}
                title={showNumbers ? 'Raqamlarni yashirish' : "Raqamlarni ko'rsatish"}
              >
                {showNumbers ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
              </button>

              {/* Audio TTS */}
              <button
                onClick={() => speakText(kanji, 'ja-JP')}
                className="rounded-xl border border-amber-500/30 bg-amber-500/20 p-2.5 text-amber-300 transition hover:bg-amber-500/30"
                title="Ovozli eshitish"
              >
                <Volume2 className="h-5 w-5" />
              </button>
            </div>
          ) : (
            /* Practice Mode Controls */
            <div className="mt-5 flex items-center gap-3">
              <button
                onClick={clearCanvas}
                className="flex items-center gap-1.5 rounded-xl border border-rose-500/30 bg-rose-600/20 px-4 py-2 font-semibold text-rose-300 transition hover:bg-rose-600/30"
              >
                <Trash2 className="h-4 w-4" /> Tozalash
              </button>
              <button
                onClick={() => speakText(kanji, 'ja-JP')}
                className="rounded-xl border border-amber-500/30 bg-amber-500/20 p-2.5 text-amber-300 transition hover:bg-amber-500/30"
                title="Ovozli eshitish"
              >
                <Volume2 className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 text-sm">
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
            <span className="text-slate-400">Ma'nosi:</span>
            <span className="font-semibold text-white">{meaningUz}</span>
          </div>
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
            <span className="text-slate-400">Onyomi (Xitoycha):</span>
            <span className="font-medium text-rose-300">{onyomi || '—'}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Kunyomi (Yaponcha):</span>
            <span className="font-medium text-emerald-300">{kunyomi || '—'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
