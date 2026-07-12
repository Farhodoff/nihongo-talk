import React, { useState, useEffect } from 'react';
import { generateMindMapWithAI } from '../utils/ai';
import { useStudyData } from '../context/StudyPlannerContext';
import mermaid from 'mermaid';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { BrainCircuit, Sparkles, Download, Copy, Loader2, ZoomIn, ZoomOut, Maximize, AlertCircle, Send, ChevronUp, ChevronDown, Fullscreen, Minimize2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import AIKeyGuard from '../components/AIKeyGuard';

// Initialize mermaid
mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    securityLevel: 'loose',
    mindmap: {
        padding: 15,
    }
});

const AIMindMapPage: React.FC = () => {
    const { settings } = useStudyData();
    const [noteContent, setNoteContent] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [mermaidCode, setMermaidCode] = useState('');
    const [svgContent, setSvgContent] = useState('');
    const [error, setError] = useState('');
    const [isInputCollapsed, setIsInputCollapsed] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const containerId = 'mermaid-container';

    // Whenever mermaidCode changes, render SVG
    useEffect(() => {
        if (!mermaidCode) {
            setSvgContent('');
            return;
        }

        const renderMermaid = async () => {
            try {
                const id = `mermaid-${Date.now()}`;
                const { svg } = await mermaid.render(id, mermaidCode);
                setSvgContent(svg);
                setError('');
            } catch (err: any) {
                console.error("Mermaid Render Error:", err);
                setError("Aqliy xaritani chizishda xatolik yuz berdi. Iltimos qaytadan urinib ko'ring. Boshqa matn yoki format ishlatib ko'ring.");
                setSvgContent('');
            }
        };

        renderMermaid();
    }, [mermaidCode]);

    // Auto-collapse input after generating
    const handleGenerate = async () => {
        if (!noteContent.trim()) {
            setError("Iltimos, avval konspekt matnini kiriting!");
            return;
        }
        
        setError('');
        setIsGenerating(true);
        setSvgContent('');
        
        try {
            const code = await generateMindMapWithAI(noteContent, settings.googleApiKey);
            setMermaidCode(code);
            setIsInputCollapsed(true); // Auto-collapse after generation
        } catch (err: any) {
            console.error("Mind Map Error:", err);
            setError(err.message || "Aqliy xarita yaratishda xatolik yuz berdi.");
        } finally {
            setIsGenerating(false);
        }
    };

    const downloadSvg = () => {
        if (!svgContent) return;
        const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `mindmap-${Date.now()}.svg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const copySvg = async () => {
        if (!svgContent) return;
        try {
            await navigator.clipboard.writeText(svgContent);
            alert("SVG kod nusxalandi!");
        } catch (err) {
            console.error('Failed to copy', err);
        }
    };

    // Fullscreen mode - xarita to'liq ekranni egallaydi
    if (isFullscreen && svgContent) {
        return (
            <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col">
                {/* Minimal toolbar */}
                <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 border-b border-slate-800 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-white">
                        <BrainCircuit size={20} className="text-fuchsia-400" />
                        <span className="text-sm font-bold">Aqliy Xarita</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="secondary" onClick={copySvg} className="text-xs py-1.5 px-3 border border-slate-700 bg-slate-800 text-white hover:bg-slate-700">
                            <Copy size={14} className="mr-1.5" /> Nusxalash
                        </Button>
                        <Button variant="secondary" onClick={downloadSvg} className="text-xs py-1.5 px-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white border-none">
                            <Download size={14} className="mr-1.5" /> SVG
                        </Button>
                        <button
                            onClick={() => setIsFullscreen(false)}
                            className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                            title="Chiqish"
                        >
                            <Minimize2 size={18} />
                        </button>
                    </div>
                </div>

                {/* Full canvas */}
                <div className="flex-1 relative">
                    <TransformWrapper
                        initialScale={0.8}
                        minScale={0.1}
                        maxScale={5}
                        centerOnInit
                        wheel={{ step: 0.08 }}
                        pinch={{ step: 5 }}
                    >
                        {({ zoomIn, zoomOut, resetTransform }) => (
                            <React.Fragment>
                                <div className="absolute bottom-6 right-6 z-10 flex gap-1 bg-slate-900/90 p-1.5 rounded-xl backdrop-blur border border-slate-700">
                                    <button onClick={() => zoomIn()} className="p-2.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"><ZoomIn size={18} /></button>
                                    <button onClick={() => zoomOut()} className="p-2.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"><ZoomOut size={18} /></button>
                                    <button onClick={() => resetTransform()} className="p-2.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"><Maximize size={18} /></button>
                                </div>
                                <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }} contentStyle={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div 
                                        id={`${containerId}-fs`}
                                        dangerouslySetInnerHTML={{ __html: svgContent }} 
                                        className="w-full h-full flex items-center justify-center p-8 [&>svg]:max-w-none [&>svg]:h-auto"
                                    />
                                </TransformComponent>
                            </React.Fragment>
                        )}
                    </TransformWrapper>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] animate-in fade-in duration-300">
            
            {/* Compact Input Bar - top */}
            <div className={`shrink-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300 ${isInputCollapsed ? '' : ''}`}>
                {/* Collapsed state - inline bar */}
                {isInputCollapsed ? (
                    <div className="flex items-center gap-3 px-4 py-3 max-w-7xl mx-auto w-full">
                        <BrainCircuit size={20} className="text-fuchsia-400 shrink-0" />
                        <p className="text-sm text-slate-400 truncate flex-1">
                            {noteContent.substring(0, 80)}{noteContent.length > 80 ? '...' : ''}
                        </p>
                        <button
                            onClick={() => setIsInputCollapsed(false)}
                            className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 shrink-0 transition-colors"
                        >
                            <ChevronDown size={14} /> Tahrirlash
                        </button>
                    </div>
                ) : (
                    /* Expanded state - input form */
                    <div className="max-w-4xl mx-auto w-full px-4 py-5 space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                                <BrainCircuit size={22} className="text-fuchsia-400" />
                                <h1 className="text-lg font-bold text-white">Aqliy Xarita</h1>
                                <Sparkles className="text-yellow-400" size={16} />
                            </div>
                            {svgContent && (
                                <button
                                    onClick={() => setIsInputCollapsed(true)}
                                    className="text-xs text-slate-400 hover:text-slate-200 font-medium flex items-center gap-1 transition-colors"
                                >
                                    <ChevronUp size={14} /> Yig'ish
                                </button>
                            )}
                        </div>
                        <div className="flex gap-3">
                            <textarea
                                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none placeholder:text-slate-600"
                                placeholder="Konspekt, maqola yoki mavzu matnini kiriting..."
                                value={noteContent}
                                onChange={(e) => setNoteContent(e.target.value)}
                                rows={3}
                            />
                            <Button 
                                onClick={handleGenerate}
                                disabled={isGenerating || !noteContent.trim()}
                                className="self-end bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-3 rounded-xl shadow-lg transition-all border-none shrink-0"
                            >
                                {isGenerating ? (
                                    <Loader2 className="animate-spin" size={20} />
                                ) : (
                                    <Send size={20} />
                                )}
                            </Button>
                        </div>
                    </div>
                )}
            </div>

            {/* Error */}
            {error && (
                <div className="shrink-0 px-4 py-2 max-w-4xl mx-auto w-full">
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 flex gap-3 text-sm font-medium items-start">
                        <AlertCircle size={18} className="shrink-0 mt-0.5" />
                        <p>{error}</p>
                    </div>
                </div>
            )}

            {/* Canvas Area - fills remaining space */}
            <div className="flex-1 min-h-0 relative">
                {/* Empty state */}
                {!svgContent && !isGenerating && !error && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-slate-600 space-y-4">
                            <BrainCircuit size={64} className="mx-auto opacity-20" />
                            <div className="space-y-1">
                                <p className="text-base font-semibold text-slate-500">Xaritangiz bu yerda ko'rinadi</p>
                                <p className="text-xs text-slate-600">Matn kiriting va <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-400 text-[10px]">↵</kbd> bosing</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Loading state */}
                {isGenerating && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-indigo-400 space-y-4 animate-pulse">
                            <Loader2 size={48} className="animate-spin mx-auto" />
                            <p className="text-sm font-bold uppercase tracking-widest">Aqliy xarita chizilmoqda...</p>
                        </div>
                    </div>
                )}

                {/* Rendered Mind Map */}
                {svgContent && (
                    <TransformWrapper
                        initialScale={0.7}
                        minScale={0.05}
                        maxScale={5}
                        centerOnInit
                        wheel={{ step: 0.08 }}
                        pinch={{ step: 5 }}
                    >
                        {({ zoomIn, zoomOut, resetTransform }) => (
                            <React.Fragment>
                                {/* Floating toolbar */}
                                <div className="absolute bottom-5 right-5 z-10 flex gap-1.5 bg-slate-900/90 p-1.5 rounded-xl backdrop-blur-md border border-slate-700/80 shadow-2xl">
                                    <button onClick={() => zoomIn()} className="p-2.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors" title="Kattalashtirish">
                                        <ZoomIn size={18} />
                                    </button>
                                    <button onClick={() => zoomOut()} className="p-2.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors" title="Kichiklashtirish">
                                        <ZoomOut size={18} />
                                    </button>
                                    <button onClick={() => resetTransform()} className="p-2.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors" title="Asl holatga qaytarish">
                                        <Maximize size={18} />
                                    </button>
                                    <div className="w-px bg-slate-700 mx-0.5" />
                                    <button onClick={() => setIsFullscreen(true)} className="p-2.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors" title="To'liq ekran">
                                        <Fullscreen size={18} />
                                    </button>
                                </div>

                                {/* Top-right action buttons */}
                                <div className="absolute top-4 right-4 z-10 flex gap-2">
                                    <Button variant="secondary" onClick={copySvg} className="text-xs py-1.5 px-3 border border-slate-700 bg-slate-800/90 backdrop-blur-md text-white hover:bg-slate-700">
                                        <Copy size={14} className="mr-1.5" /> Nusxalash
                                    </Button>
                                    <Button variant="secondary" onClick={downloadSvg} className="text-xs py-1.5 px-3 bg-fuchsia-600/90 backdrop-blur-md hover:bg-fuchsia-700 text-white border-none">
                                        <Download size={14} className="mr-1.5" /> SVG
                                    </Button>
                                </div>

                                <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }} contentStyle={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div 
                                        id={containerId}
                                        dangerouslySetInnerHTML={{ __html: svgContent }} 
                                        className="w-full h-full flex items-center justify-center p-8 [&>svg]:max-w-none [&>svg]:h-auto"
                                    />
                                </TransformComponent>
                            </React.Fragment>
                        )}
                    </TransformWrapper>
                )}
            </div>
        </div>
    );
};

const AIMindMapPageWithGuard: React.FC = () => (
    <AIKeyGuard>
        <AIMindMapPage />
    </AIKeyGuard>
);

export default AIMindMapPageWithGuard;
