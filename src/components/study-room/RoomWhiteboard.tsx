import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Eraser, RotateCcw, Pen } from 'lucide-react';

interface RoomWhiteboardProps {
    onMount?: (canvas: HTMLCanvasElement | null) => void;
}

const COLORS = ['#0f172a', '#6366f1', '#3b82f6', '#10b981', '#ef4444', '#f59e0b'];
const STROKE_WIDTHS = [2, 4, 8, 14];

export const RoomWhiteboard: React.FC<RoomWhiteboardProps> = ({ onMount }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState('#6366f1');
    const [isEraser, setIsEraser] = useState(false);
    const [strokeWidth, setStrokeWidth] = useState(4);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        if (onMount) onMount(canvas);

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) return;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        return () => window.removeEventListener('resize', resizeCanvas);
    }, [onMount]);

    const startDrawing = useCallback((e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
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
    }, []);

    const draw = useCallback((e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const rect = canvas.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

        ctx.strokeStyle = isEraser ? '#ffffff' : color;
        ctx.lineWidth = strokeWidth;
        ctx.lineTo(clientX - rect.left, clientY - rect.top);
        ctx.stroke();
    }, [isDrawing, color, isEraser, strokeWidth]);

    const stopDrawing = useCallback(() => {
        setIsDrawing(false);
    }, []);

    const handleClear = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    return (
        <div className="flex flex-col h-full w-full bg-white relative rounded-2xl overflow-hidden select-none" data-testid="tldraw-whiteboard">
            {/* Toolbar */}
            <div className="flex items-center justify-between p-2 bg-slate-50 border-b border-slate-200 gap-2 flex-wrap z-10">
                <div className="flex items-center gap-1.5">
                    <button
                        type="button"
                        onClick={() => setIsEraser(false)}
                        className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                            !isEraser ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                        }`}
                        title="Ruchka"
                    >
                        <Pen size={14} />
                    </button>

                    <button
                        type="button"
                        onClick={() => setIsEraser(true)}
                        className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                            isEraser ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                        }`}
                        title="O'chirg'ich"
                    >
                        <Eraser size={14} />
                    </button>

                    <div className="h-4 w-px bg-slate-300 mx-1" />

                    {/* Color Palette */}
                    {!isEraser && (
                        <div className="flex items-center gap-1">
                            {COLORS.map((c) => (
                                <button
                                    key={c}
                                    type="button"
                                    onClick={() => setColor(c)}
                                    className={`w-5 h-5 rounded-full border transition-all ${
                                        color === c ? 'scale-125 ring-2 ring-indigo-400 border-white' : 'border-transparent hover:scale-110'
                                    }`}
                                    style={{ backgroundColor: c }}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-2">
                    {/* Stroke Width Selector */}
                    <div className="flex items-center gap-1">
                        {STROKE_WIDTHS.map((sw) => (
                            <button
                                key={sw}
                                type="button"
                                onClick={() => setStrokeWidth(sw)}
                                className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold border ${
                                    strokeWidth === sw ? 'bg-indigo-100 border-indigo-400 text-indigo-700' : 'bg-slate-100 border-slate-200 text-slate-600'
                                }`}
                            >
                                {sw}
                            </button>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={handleClear}
                        className="p-1.5 rounded-lg text-xs font-bold bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 flex items-center gap-1 transition-all"
                        title="Tozalash"
                    >
                        <RotateCcw size={13} />
                        <span>Tozalash</span>
                    </button>
                </div>
            </div>

            {/* Drawing Canvas */}
            <div className="flex-1 w-full h-full relative cursor-crosshair bg-white">
                <canvas
                    ref={canvasRef}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                    className="w-full h-full block touch-none"
                />
            </div>
        </div>
    );
};

export default RoomWhiteboard;
