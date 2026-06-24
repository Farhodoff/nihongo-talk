import React, { useState, useEffect } from 'react';
import { generateMindMapWithAI } from '../utils/ai';
import { useStudyData } from '../context/StudyPlannerContext';
import mermaid from 'mermaid';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { BrainCircuit, Sparkles, Download, Copy, Loader2, ZoomIn, ZoomOut, Maximize, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

// Initialize mermaid
mermaid.initialize({
    startOnLoad: false,
    theme: 'dark', // Match our dark theme
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
    const containerId = 'mermaid-container';

    // Whenever mermaidCode changes, render SVG
    useEffect(() => {
        if (!mermaidCode) {
            setSvgContent('');
            return;
        }

        const renderMermaid = async () => {
            try {
                // Generate unique id to avoid collisions
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
            alert("SVG kod nusxalandi! Endi uni Tldraw doskasiga (yoki boshqa joyga) paste (Ctrl+V) qilishingiz mumkin.");
        } catch (err) {
            console.error('Failed to copy', err);
        }
    };

    return (
        <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in zoom-in-95 duration-300 pb-12">
            {/* Header Section */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 p-8 sm:p-10 text-white shadow-2xl border border-white/10">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-fuchsia-500 rounded-full blur-[100px] opacity-30 animate-pulse" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-30" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                    <div className="p-5 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20 shadow-inner">
                        <BrainCircuit size={48} className="text-fuchsia-300 drop-shadow-md" />
                    </div>
                    <div className="text-center md:text-left space-y-2">
                        <h1 className="text-3xl sm:text-4xl font-black tracking-tight flex items-center gap-3">
                            Aqliy Xarita (Mind Map) <Sparkles className="text-yellow-400" size={28} />
                        </h1>
                        <p className="text-indigo-200 text-lg max-w-2xl font-medium leading-relaxed">
                            Matnli konspektlaringizni chiroyli va tushunarli vizual diagrammalarga aylantiring.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Input Area (Left) */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex-1 flex flex-col">
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            1. Matnni kiriting
                        </h2>
                        <textarea
                            className="flex-1 w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none min-h-[300px]"
                            placeholder="Bu yerga o'z konspektingizni, maqolani yoki darslikdan parchani kiriting..."
                            value={noteContent}
                            onChange={(e) => setNoteContent(e.target.value)}
                        />
                        <Button 
                            onClick={handleGenerate}
                            disabled={isGenerating || !noteContent.trim()}
                            className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-all border-none"
                        >
                            {isGenerating ? (
                                <>
                                    <Loader2 className="animate-spin mr-2" size={20} />
                                    Generatsiya qilinmoqda...
                                </>
                            ) : (
                                <>
                                    <BrainCircuit className="mr-2" size={20} />
                                    Xarita Yaratish
                                </>
                            )}
                        </Button>
                    </div>
                </div>

                {/* Canvas Area (Right) */}
                <div className="lg:col-span-8 flex flex-col gap-4">
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex-1 flex flex-col min-h-[500px]">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                2. Natija
                            </h2>
                            {svgContent && (
                                <div className="flex gap-2">
                                    <Button variant="secondary" onClick={copySvg} className="text-xs py-1.5 px-3 border border-slate-700 bg-slate-800 text-white hover:bg-slate-700" title="Tldraw ga tashlash uchun (Ctrl+V) nusxalash">
                                        <Copy size={14} className="mr-1.5" /> Nusxalash
                                    </Button>
                                    <Button variant="secondary" onClick={downloadSvg} className="text-xs py-1.5 px-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white border-none">
                                        <Download size={14} className="mr-1.5" /> Saqlash (SVG)
                                    </Button>
                                </div>
                            )}
                        </div>

                        {error && (
                            <div className="p-4 mb-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 flex gap-3 text-sm font-medium items-start">
                                <AlertCircle size={20} className="shrink-0 mt-0.5" />
                                <p>{error}</p>
                            </div>
                        )}

                        <div className="flex-1 bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 relative flex items-center justify-center">
                            {!svgContent && !isGenerating && !error && (
                                <div className="text-center text-slate-500 space-y-3">
                                    <BrainCircuit size={48} className="mx-auto opacity-20" />
                                    <p className="text-sm font-medium">Xarita bu yerda ko'rinadi</p>
                                </div>
                            )}
                            
                            {isGenerating && (
                                <div className="text-center text-indigo-400 space-y-4 animate-pulse">
                                    <Loader2 size={48} className="animate-spin mx-auto" />
                                    <p className="text-sm font-bold uppercase tracking-widest">Aqliy xarita chizilmoqda...</p>
                                </div>
                            )}

                            {svgContent && (
                                <TransformWrapper
                                    initialScale={1}
                                    minScale={0.1}
                                    maxScale={4}
                                    centerOnInit
                                >
                                    {({ zoomIn, zoomOut, resetTransform }) => (
                                        <React.Fragment>
                                            <div className="absolute bottom-4 right-4 z-10 flex gap-2 bg-slate-900/80 p-2 rounded-xl backdrop-blur border border-slate-700">
                                                <button onClick={() => zoomIn()} className="p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"><ZoomIn size={18} /></button>
                                                <button onClick={() => zoomOut()} className="p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"><ZoomOut size={18} /></button>
                                                <button onClick={() => resetTransform()} className="p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"><Maximize size={18} /></button>
                                            </div>
                                            <TransformComponent wrapperClass="w-full h-full" contentClass="w-full h-full flex items-center justify-center">
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
                </div>
            </div>
        </div>
    );
};

export default AIMindMapPage;
