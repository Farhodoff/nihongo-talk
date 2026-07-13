import React, { useEffect, useState, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidViewerProps {
    chart: string;
}

const MermaidViewer: React.FC<MermaidViewerProps> = ({ chart }) => {
    const [svgContent, setSvgContent] = useState('');
    const [error, setError] = useState('');
    const idRef = useRef(`mermaid-${Math.random().toString(36).substring(2, 9)}`);

    useEffect(() => {
        const renderChart = async () => {
            if (!chart) return;
            try {
                setError('');
                const { svg } = await mermaid.render(idRef.current, chart);
                setSvgContent(svg);
            } catch (err: any) {
                console.error("Mermaid render error:", err);
                setError(err.message || 'Diagramma chizishda xatolik');
            }
        };
        renderChart();
    }, [chart]);

    if (error) {
        return (
            <div className="p-4 bg-red-50 text-red-500 rounded-xl border border-red-200 text-sm overflow-x-auto">
                <p className="font-bold mb-1">Diagramma xatosi:</p>
                <pre>{error}</pre>
            </div>
        );
    }

    if (!svgContent) {
        return <div className="p-8 text-center text-gray-500 animate-pulse">Diagramma yuklanmoqda...</div>;
    }

    return (
        <div 
            className="mermaid-wrapper flex justify-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: svgContent }} 
        />
    );
};

export default MermaidViewer;
