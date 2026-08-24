import React, { useState } from 'react';
import { SvgBarChart, SvgLineChart, SvgPieChart } from '../ui/SvgCharts';
import { Sparkles, RefreshCw, BarChart2 } from 'lucide-react';
import { generateAIResponse, extractJsonFromAiResponse } from '../../utils/ai/aiCore';

interface ChartDataset {
    label: string;
    data: number[];
    color?: string;
}

interface Task1ChartData {
    type: 'bar' | 'line' | 'pie';
    title: string;
    subtitle?: string;
    labels: string[];
    datasets: ChartDataset[];
    unit?: string;
    description?: string; // summary the AI wrote about the chart
}

const CHART_COLORS = ['#6366f1', '#f43f5e', '#f59e0b', '#10b981', '#8b5cf6', '#06b6d4'];

interface Task1GraphGeneratorProps {
    onPromptGenerated?: (prompt: string) => void;
}

export const Task1GraphGenerator: React.FC<Task1GraphGeneratorProps> = ({ onPromptGenerated }) => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [chartData, setChartData] = useState<Task1ChartData | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [topic, setTopic] = useState('');

    const PRESET_TOPICS = [
        'Internet usage by age group (2010-2023)',
        'Energy consumption by fuel type in the UK',
        'University enrollment by gender and subject',
        'CO₂ emissions by country comparison',
        'Population growth in major cities',
    ];

    const handleGenerate = async (customTopic?: string) => {
        const usedTopic = customTopic || topic || PRESET_TOPICS[Math.floor(Math.random() * PRESET_TOPICS.length)];
        setIsGenerating(true);
        setErrorMsg(null);
        setChartData(null);

        const prompt = `You are an IELTS Task 1 examiner. Generate realistic academic chart data for this topic: "${usedTopic}".

Return ONLY valid JSON (no markdown, no backticks) with this EXACT structure:
{
  "type": "bar" | "line" | "pie",
  "title": "Full chart title as it would appear on an IELTS exam",
  "subtitle": "Short subtitle or time period (optional)",
  "labels": ["Label1", "Label2", ...],
  "datasets": [
    { "label": "Series name", "data": [number, number, ...], "color": "#hex" }
  ],
  "unit": "% / millions / thousands / etc",
  "description": "One-sentence description of what a student should write about (prompt)"
}

Rules:
- Use realistic, plausible data for academic IELTS context
- For pie charts: single dataset, labels and data arrays must match in length
- For bar/line: 2-4 datasets, 5-8 labels (years, countries, categories)
- Keep numbers realistic (not all round numbers)
- Use standard Uzbek/English context where relevant`;

        try {
            const raw = await generateAIResponse([
                { role: 'system', content: 'Return only valid JSON, no markdown.' },
                { role: 'user', content: prompt }
            ], { isJson: true });
            const parsed = extractJsonFromAiResponse<Task1ChartData>(raw);

            if (!parsed.type || !parsed.title || !parsed.labels || !parsed.datasets) {
                throw new Error('Invalid chart JSON format');
            }

            setChartData(parsed);

            // Build IELTS prompt text for the writing textarea
            if (onPromptGenerated) {
                const promptText = `The ${parsed.type} chart below shows ${parsed.title}${parsed.subtitle ? ` (${parsed.subtitle})` : ''}. ${parsed.description || 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.'}`;
                onPromptGenerated(promptText);
            }
        } catch (err: any) {
            console.error(err);
            setErrorMsg("Grafik ma'lumotlarini yaratishda xatolik. Qayta urinib ko'ring.");
        } finally {
            setIsGenerating(false);
        }
    };

    const renderChart = () => {
        if (!chartData) return null;

        const { type, labels, datasets, unit } = chartData;

        if (type === 'pie' && datasets[0]) {
            const pieData = labels.map((l, i) => ({
                name: l,
                value: datasets[0].data[i] || 0,
                color: datasets[0]?.color || CHART_COLORS[i % CHART_COLORS.length]
            }));
            return (
                <div className="w-full h-64 flex items-center justify-center">
                    <SvgPieChart data={pieData} height={220} innerRadius={0.5} />
                </div>
            );
        }

        if (type === 'line') {
            const lineData = labels.map((label, i) => {
                const obj: Record<string, string | number> = { label };
                datasets.forEach(ds => { obj[ds.label] = ds.data[i] ?? 0; });
                return obj;
            });
            const series = datasets.map((ds, i) => ({
                dataKey: ds.label,
                stroke: ds.color || CHART_COLORS[i % CHART_COLORS.length],
                name: ds.label
            }));

            return (
                <div className="w-full h-64">
                    <SvgLineChart data={lineData} xKey="label" series={series} height={240} unit={unit} />
                </div>
            );
        }

        // Bar chart (default)
        const barData = labels.map((label, i) => {
            const obj: Record<string, string | number> = { label };
            datasets.forEach(ds => { obj[ds.label] = ds.data[i] ?? 0; });
            return obj;
        });
        const barSeries = datasets.map((ds, i) => ({
            dataKey: ds.label,
            fill: ds.color || CHART_COLORS[i % CHART_COLORS.length],
            name: ds.label
        }));

        return (
            <div className="w-full h-64">
                <SvgBarChart data={barData} xKey="label" series={barSeries} height={240} unit={unit} />
            </div>
        );
    };

    return (
        <div className="bg-card border border-border rounded-3xl p-5 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
                <div className="p-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-xl">
                    <BarChart2 size={18} />
                </div>
                <div>
                    <h3 className="text-sm font-extrabold text-foreground">Task 1 AI Grafik Generator</h3>
                    <p className="text-[10px] text-muted-foreground">AI yordamida IELTS Task 1 grafigi va unga mos savol yarating</p>
                </div>
            </div>

            {/* Topic input */}
            <div className="flex gap-2">
                <input
                    value={topic}
                    onChange={e => setTopic(e.target.value)}
                    placeholder="Mavzu kiriting (ixtiyoriy)..."
                    className="flex-1 px-3 py-2 text-xs bg-muted/40 border border-border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <button
                    onClick={() => handleGenerate()}
                    disabled={isGenerating}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all disabled:opacity-50 flex items-center gap-1.5"
                >
                    {isGenerating ? <RefreshCw size={14} className="animate-spin" /> : <Sparkles size={14} />}
                    {isGenerating ? 'Yaratilmoqda...' : 'Yarat'}
                </button>
            </div>

            {/* Preset topics */}
            <div className="flex flex-wrap gap-1.5">
                {PRESET_TOPICS.map((t, i) => (
                    <button
                        key={i}
                        onClick={() => handleGenerate(t)}
                        disabled={isGenerating}
                        className="text-[10px] px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-all disabled:opacity-50"
                    >
                        {t}
                    </button>
                ))}
            </div>

            {/* Error */}
            {errorMsg && (
                <div className="text-xs text-red-500 bg-red-500/5 border border-red-500/20 rounded-xl px-3 py-2">
                    {errorMsg}
                </div>
            )}

            {/* Chart display */}
            {chartData && (
                <div className="space-y-3">
                    <div className="text-center">
                        <h4 className="text-xs font-extrabold text-foreground">{chartData.title}</h4>
                        {chartData.subtitle && (
                            <p className="text-[10px] text-muted-foreground">{chartData.subtitle}</p>
                        )}
                    </div>
                    <div className="bg-muted/20 rounded-2xl p-3">
                        {renderChart()}
                    </div>
                    {chartData.description && (
                        <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl px-3 py-2">
                            <p className="text-[10px] text-indigo-700 dark:text-indigo-300 font-medium">
                                📝 Prompt: {chartData.description}
                            </p>
                        </div>
                    )}
                    {onPromptGenerated && (
                        <button
                            onClick={() => {
                                if (chartData.description) {
                                    const promptText = `The ${chartData.type} chart below shows ${chartData.title}${chartData.subtitle ? ` (${chartData.subtitle})` : ''}. ${chartData.description}`;
                                    onPromptGenerated(promptText);
                                }
                            }}
                            className="w-full py-2 text-xs font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 rounded-xl hover:bg-emerald-500/20 transition-all"
                        >
                            ✅ Bu grafikni asosida insho yozish →
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Task1GraphGenerator;
