import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Volume2, Sparkles } from 'lucide-react';
import { speakText } from '../../utils/audioTts';

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

export const KanjiStrokeOrderModal: React.FC<KanjiStrokeOrderModalProps> = ({
    kanji,
    meaningUz,
    onyomi,
    kunyomi,
    strokeCount,
    level,
    isOpen,
    onClose
}) => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen) {
            setCurrentStep(0);
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    }, [isOpen, kanji]);

    useEffect(() => {
        let interval: any = null;
        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentStep((prev) => {
                    if (prev >= strokeCount) {
                        setIsPlaying(false);
                        return strokeCount;
                    }
                    return prev + 1;
                });
            }, 600);
        }
        return () => clearInterval(interval);
    }, [isPlaying, strokeCount]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl p-6 shadow-2xl text-slate-100 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />

                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-rose-500 to-indigo-500 text-white shadow-sm">
                            JLPT {level}
                        </span>
                        <h3 className="text-lg font-bold text-slate-100 flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4 text-amber-400" /> Kanji Stroke Order
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Main Stroke Animation Grid */}
                <div className="my-6 flex flex-col items-center">
                    <div className="relative w-48 h-48 bg-slate-950 border-2 border-dashed border-indigo-500/40 rounded-2xl flex items-center justify-center shadow-inner overflow-hidden">
                        {/* Grid Alignment Lines */}
                        <div className="absolute inset-0 border-r border-dashed border-slate-800/50 left-1/2" />
                        <div className="absolute inset-0 border-b border-dashed border-slate-800/50 top-1/2" />

                        {/* Animated Large Kanji Render */}
                        <div className="relative z-10 text-8xl font-black text-amber-400 tracking-widest transition-all duration-300 transform scale-105 select-none drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                            {kanji}
                        </div>

                        {/* Stroke Badge */}
                        <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-slate-900/90 text-[11px] font-medium text-slate-300 border border-slate-800">
                            {currentStep} / {strokeCount} chiziq
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-3 mt-5">
                        <button
                            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                            disabled={currentStep <= 0}
                            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-300 transition"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                            onClick={() => {
                                if (currentStep >= strokeCount) setCurrentStep(0);
                                setIsPlaying(!isPlaying);
                            }}
                            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition active:scale-95"
                        >
                            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                            {isPlaying ? "Toxshatish" : "Chizishni ko'rish"}
                        </button>

                        <button
                            onClick={() => {
                                setIsPlaying(false);
                                setCurrentStep(0);
                            }}
                            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                        >
                            <RotateCcw className="w-5 h-5" />
                        </button>

                        <button
                            onClick={() => setCurrentStep((prev) => Math.min(strokeCount, prev + 1))}
                            disabled={currentStep >= strokeCount}
                            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-300 transition"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        <button
                            onClick={() => speakText(kanji, 'ja-JP')}
                            className="p-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 transition border border-amber-500/30"
                            title="Ovozli eshitish"
                        >
                            <Volume2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Details Section */}
                <div className="space-y-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 text-sm">
                    <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
                        <span className="text-slate-400">Ma'nosi:</span>
                        <span className="font-semibold text-white">{meaningUz}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
                        <span className="text-slate-400">Onyomi (Xitoycha):</span>
                        <span className="font-medium text-rose-300">{onyomi || "—"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-slate-400">Kunyomi (Yaponcha):</span>
                        <span className="font-medium text-emerald-300">{kunyomi || "—"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
