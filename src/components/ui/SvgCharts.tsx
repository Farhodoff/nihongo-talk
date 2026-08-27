import React, { useState, useMemo } from 'react';

// ==========================================
// 1. SVG BAR CHART
// ==========================================
export interface BarSeries {
    dataKey: string;
    fill?: string;
    name?: string;
    radius?: number;
}

export interface SvgBarChartProps {
    data: Record<string, any>[];
    xKey: string;
    series: BarSeries[];
    height?: number;
    unit?: string;
    showGrid?: boolean;
}

export const SvgBarChart: React.FC<SvgBarChartProps> = ({
    data,
    xKey,
    series,
    height = 240,
    unit = '',
    showGrid = true,
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const viewBoxWidth = 600;
    const viewBoxHeight = height;
    const padding = { top: 20, right: 20, bottom: 40, left: 45 };

    const chartWidth = viewBoxWidth - padding.left - padding.right;
    const chartHeight = viewBoxHeight - padding.top - padding.bottom;

    const maxValue = useMemo(() => {
        let max = 0;
        data.forEach(item => {
            series.forEach(s => {
                const val = Number(item[s.dataKey]) || 0;
                if (val > max) max = val;
            });
        });
        return max === 0 ? 10 : Math.ceil(max * 1.15);
    }, [data, series]);

    const yTicks = [0, 0.25, 0.5, 0.75, 1].map(pct => Math.round(pct * maxValue * 10) / 10);

    const groupWidth = data.length > 0 ? chartWidth / data.length : chartWidth;
    const barWidth = Math.min(32, Math.max(6, (groupWidth * 0.65) / (series.length || 1)));

    const labelInterval = useMemo(() => Math.max(1, Math.ceil(data.length / 8)), [data.length]);

    if (!data || data.length === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground" style={{ minHeight: height }}>
                Ma'lumot mavjud emas
            </div>
        );
    }

    return (
        <div className="w-full h-full relative select-none">
            <svg
                viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
                className="w-full h-full overflow-visible"
            >
                {/* Y-Axis Grid & Labels */}
                {showGrid &&
                    yTicks.map((tick, i) => {
                        const y = padding.top + chartHeight - (tick / (maxValue || 1)) * chartHeight;
                        return (
                            <g key={i}>
                                <line
                                    x1={padding.left}
                                    y1={y}
                                    x2={padding.left + chartWidth}
                                    y2={y}
                                    stroke="currentColor"
                                    strokeOpacity={0.08}
                                    strokeDasharray="4 4"
                                />
                                <text
                                    x={padding.left - 8}
                                    y={y + 3}
                                    textAnchor="end"
                                    className="text-[10px] fill-slate-400 dark:fill-slate-500 font-medium"
                                >
                                    {tick}
                                </text>
                            </g>
                        );
                    })}

                {/* Bars */}
                {data.map((item, groupIdx) => {
                    const groupX = padding.left + groupIdx * groupWidth + (groupWidth - series.length * barWidth) / 2;
                    const isHovered = hoveredIndex === groupIdx;
                    const showLabel = data.length <= 8 || groupIdx % labelInterval === 0 || groupIdx === data.length - 1;

                    return (
                        <g
                            key={groupIdx}
                            onMouseEnter={() => setHoveredIndex(groupIdx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="cursor-pointer"
                        >
                            {/* Hover highlight column */}
                            <rect
                                x={padding.left + groupIdx * groupWidth}
                                y={padding.top}
                                width={groupWidth}
                                height={chartHeight}
                                fill={isHovered ? 'currentColor' : 'transparent'}
                                fillOpacity={0.04}
                                rx={6}
                            />

                            {/* Bars in group */}
                            {series.map((s, sIdx) => {
                                const val = Number(item[s.dataKey]) || 0;
                                const barHeight = (val / (maxValue || 1)) * chartHeight;
                                const barX = groupX + sIdx * barWidth;
                                const barY = padding.top + chartHeight - barHeight;

                                return (
                                    <rect
                                        key={sIdx}
                                        x={barX}
                                        y={barY}
                                        width={Math.max(4, barWidth - 2)}
                                        height={Math.max(2, barHeight)}
                                        fill={s.fill || '#6366f1'}
                                        rx={4}
                                        className="transition-all duration-300"
                                        style={{
                                            filter: isHovered ? 'brightness(1.15)' : 'none',
                                        }}
                                    />
                                );
                            })}

                            {/* X-Axis Label with smart thinning */}
                            {showLabel && (
                                <text
                                    x={padding.left + groupIdx * groupWidth + groupWidth / 2}
                                    y={padding.top + chartHeight + 18}
                                    textAnchor="middle"
                                    className={`text-[11px] font-bold ${
                                        isHovered ? 'fill-indigo-600 dark:fill-indigo-400' : 'fill-slate-500 dark:fill-slate-400'
                                    }`}
                                >
                                    {item[xKey]}
                                </text>
                            )}
                        </g>
                    );
                })}
            </svg>

            {/* Interactive Floating Tooltip */}
            {hoveredIndex !== null && data[hoveredIndex] && (
                <div
                    className="absolute top-2 left-1/2 -translate-x-1/2 bg-slate-900/95 text-white backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-semibold shadow-xl border border-slate-700 pointer-events-none flex items-center gap-3 animate-in fade-in zoom-in-95 duration-150 z-20"
                >
                    <span className="font-bold text-indigo-400">{data[hoveredIndex][xKey]}:</span>
                    {series.map((s, idx) => (
                        <span key={idx} className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.fill || '#6366f1' }} />
                            <span>
                                {data[hoveredIndex][s.dataKey]} {unit}
                            </span>
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

// ==========================================
// 2. SVG LINE & AREA CHART
// ==========================================
export interface LineSeries {
    dataKey: string;
    stroke?: string;
    fill?: string;
    name?: string;
    color?: string;
    label?: string;
}

export interface SvgLineChartProps {
    data: Record<string, any>[];
    xKey: string;
    series: LineSeries[];
    height?: number;
    showArea?: boolean;
    unit?: string;
    showGrid?: boolean;
}

export const SvgLineChart: React.FC<SvgLineChartProps> = ({
    data = [],
    xKey = 'xLabel',
    series = [{ dataKey: 'value', label: 'Value', color: '#6366f1' }],
    height = 240,
    showArea = false,
    unit = '',
    showGrid = true,
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const viewBoxWidth = 600;
    const viewBoxHeight = height;
    const padding = { top: 20, right: 25, bottom: 40, left: 45 };

    const chartWidth = viewBoxWidth - padding.left - padding.right;
    const chartHeight = viewBoxHeight - padding.top - padding.bottom;

    const maxValue = useMemo(() => {
        let max = 0;
        const safeData = Array.isArray(data) ? data : [];
        const safeSeries = Array.isArray(series) ? series : [{ dataKey: 'value', label: 'Value', color: '#6366f1' }];
        safeData.forEach(item => {
            safeSeries.forEach(s => {
                const val = Number(item[s.dataKey]) || 0;
                if (val > max) max = val;
            });
        });
        return max === 0 ? 10 : Math.ceil(max * 1.15);
    }, [data, series]);

    const yTicks = [0, 0.25, 0.5, 0.75, 1].map(pct => Math.round(pct * maxValue * 10) / 10);

    const getX = (index: number) => {
        if (data.length <= 1) return padding.left + chartWidth / 2;
        return padding.left + (index / (data.length - 1)) * chartWidth;
    };

    const getY = (value: number) => {
        return padding.top + chartHeight - (value / (maxValue || 1)) * chartHeight;
    };

    const labelInterval = useMemo(() => Math.max(1, Math.ceil(data.length / 8)), [data.length]);

    if (!data || data.length === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground" style={{ minHeight: height }}>
                Ma'lumot mavjud emas
            </div>
        );
    }

    return (
        <div className="w-full h-full relative select-none">
            <svg
                viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
                className="w-full h-full overflow-visible"
            >
                {/* Defs for gradients */}
                <defs>
                    {series.map((s, idx) => (
                        <linearGradient key={idx} id={`gradient-${s.dataKey}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={s.stroke || '#6366f1'} stopOpacity={0.35} />
                            <stop offset="100%" stopColor={s.stroke || '#6366f1'} stopOpacity={0.0} />
                        </linearGradient>
                    ))}
                </defs>

                {/* Y-Axis Grid */}
                {showGrid &&
                    yTicks.map((tick, i) => {
                        const y = getY(tick);
                        return (
                            <g key={i}>
                                <line
                                    x1={padding.left}
                                    y1={y}
                                    x2={padding.left + chartWidth}
                                    y2={y}
                                    stroke="currentColor"
                                    strokeOpacity={0.08}
                                    strokeDasharray="4 4"
                                />
                                <text
                                    x={padding.left - 8}
                                    y={y + 3}
                                    textAnchor="end"
                                    className="text-[10px] fill-slate-400 dark:fill-slate-500 font-medium"
                                >
                                    {tick}
                                </text>
                            </g>
                        );
                    })}

                {/* Series Lines & Areas */}
                {series.map((s, sIdx) => {
                    const points = data.map((d, i) => `${getX(i)},${getY(Number(d[s.dataKey]) || 0)}`).join(' ');
                    const areaPoints = `${getX(0)},${padding.top + chartHeight} ${points} ${getX(
                        data.length - 1
                    )},${padding.top + chartHeight}`;

                    return (
                        <g key={sIdx}>
                            {showArea && (
                                <polygon
                                    points={areaPoints}
                                    fill={`url(#gradient-${s.dataKey})`}
                                    className="transition-all duration-300"
                                />
                            )}
                            <polyline
                                fill="none"
                                stroke={s.stroke || '#6366f1'}
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                points={points}
                                className="transition-all duration-300"
                            />
                            {/* Dots */}
                            {data.map((d, i) => {
                                const cx = getX(i);
                                const cy = getY(Number(d[s.dataKey]) || 0);
                                const isHovered = hoveredIndex === i;

                                return (
                                    <circle
                                        key={i}
                                        cx={cx}
                                        cy={cy}
                                        r={isHovered ? 6 : (data.length > 20 ? 2 : 4)}
                                        fill={s.stroke || '#6366f1'}
                                        stroke="#ffffff"
                                        strokeWidth={1.5}
                                        className="transition-all duration-200 cursor-pointer"
                                    />
                                );
                            })}
                        </g>
                    );
                })}

                {/* X-Axis labels & Hover areas */}
                {data.map((item, i) => {
                    const x = getX(i);
                    const isHovered = hoveredIndex === i;
                    const stepWidth = data.length > 1 ? chartWidth / (data.length - 1) : chartWidth;
                    const showLabel = data.length <= 8 || i % labelInterval === 0 || i === data.length - 1;

                    return (
                        <g key={i}>
                            {/* Interactive touch/hover zone */}
                            <rect
                                x={x - stepWidth / 2}
                                y={padding.top}
                                width={stepWidth}
                                height={chartHeight}
                                fill="transparent"
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="cursor-pointer"
                            />
                            {/* Hover vertical line */}
                            {isHovered && (
                                <line
                                    x1={x}
                                    y1={padding.top}
                                    x2={x}
                                    y2={padding.top + chartHeight}
                                    stroke="#6366f1"
                                    strokeWidth="1.5"
                                    strokeDasharray="3 3"
                                />
                            )}
                            {showLabel && (
                                <text
                                    x={x}
                                    y={padding.top + chartHeight + 18}
                                    textAnchor="middle"
                                    className={`text-[11px] font-bold ${
                                        isHovered ? 'fill-indigo-600 dark:fill-indigo-400' : 'fill-slate-500 dark:fill-slate-400'
                                    }`}
                                >
                                    {item[xKey]}
                                </text>
                            )}
                        </g>
                    );
                })}
            </svg>

            {/* Tooltip */}
            {hoveredIndex !== null && data[hoveredIndex] && (
                <div
                    className="absolute top-2 left-1/2 -translate-x-1/2 bg-slate-900/95 text-white backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-semibold shadow-xl border border-slate-700 pointer-events-none flex items-center gap-3 animate-in fade-in zoom-in-95 duration-150 z-20"
                >
                    <span className="font-bold text-indigo-400">{data[hoveredIndex][xKey]}:</span>
                    {series.map((s, idx) => (
                        <span key={idx} className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.stroke || '#6366f1' }} />
                            <span>
                                {data[hoveredIndex][s.dataKey]} {unit}
                            </span>
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

// ==========================================
// 3. SVG PIE & DONUT CHART
// ==========================================
export interface SvgPieItem {
    name: string;
    value: number;
    color: string;
}

export interface SvgPieChartProps {
    data: SvgPieItem[];
    height?: number;
    innerRadius?: number;
}

export const SvgPieChart: React.FC<SvgPieChartProps> = ({
    data,
    height = 240,
    innerRadius = 0.55,
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const total = useMemo(() => data.reduce((acc, d) => acc + (d.value || 0), 0), [data]);

    const size = height;
    const center = size / 2;
    const outerR = center * 0.82;
    const innerR = outerR * innerRadius;

    // Build slices
    const slices = useMemo(() => {
        let accumulatedAngle = -Math.PI / 2;
        return data.map(item => {
            const fraction = total === 0 ? 0 : item.value / total;
            const angle = fraction * Math.PI * 2;
            const startAngle = accumulatedAngle;
            const endAngle = accumulatedAngle + angle;
            accumulatedAngle += angle;

            const x1 = center + outerR * Math.cos(startAngle);
            const y1 = center + outerR * Math.sin(startAngle);
            const x2 = center + outerR * Math.cos(endAngle);
            const y2 = center + outerR * Math.sin(endAngle);

            const ix1 = center + innerR * Math.cos(endAngle);
            const iy1 = center + innerR * Math.sin(endAngle);
            const ix2 = center + innerR * Math.cos(startAngle);
            const iy2 = center + innerR * Math.sin(startAngle);

            const largeArc = angle > Math.PI ? 1 : 0;

            const path =
                innerRadius > 0
                    ? `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2} L ${ix1} ${iy1} A ${innerR} ${innerR} 0 ${largeArc} 0 ${ix2} ${iy2} Z`
                    : `M ${center} ${center} L ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2} Z`;

            const percentage = Math.round(fraction * 100);

            return {
                ...item,
                path,
                percentage,
            };
        });
    }, [data, total, center, outerR, innerR, innerRadius]);

    if (!data || data.length === 0 || total === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground" style={{ minHeight: height }}>
                Ma'lumot mavjud emas
            </div>
        );
    }

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full h-full">
            {/* SVG Donut */}
            <div className="relative shrink-0" style={{ width: size, height: size }}>
                <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full overflow-visible">
                    {slices.map((slice, i) => {
                        const isHovered = hoveredIndex === i;
                        return (
                            <path
                                key={i}
                                d={slice.path}
                                fill={slice.color}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="transition-all duration-300 cursor-pointer"
                                style={{
                                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                                    transformOrigin: `${center}px ${center}px`,
                                    filter: isHovered ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.25))' : 'none',
                                }}
                            />
                        );
                    })}
                </svg>

                {/* Center Stats in Donut */}
                {innerRadius > 0 && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-2xl font-black text-foreground">{total}</span>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                            Jami
                        </span>
                    </div>
                )}
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-2 min-w-[140px]">
                {slices.map((slice, i) => (
                    <div
                        key={i}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`flex items-center justify-between p-2 rounded-xl cursor-pointer transition-all border ${
                            hoveredIndex === i
                                ? 'bg-secondary font-bold scale-105 border-border shadow-sm'
                                : 'text-muted-foreground border-transparent hover:bg-muted/40'
                        }`}
                    >
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: slice.color }} />
                            <span className="text-xs font-semibold text-foreground">{slice.name}</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-muted-foreground ml-3">
                            {slice.value} ({slice.percentage}%)
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// ==========================================
// 4. SVG RADAR / SPIDER CHART
// ==========================================
export interface SvgRadarItem {
    subject: string;
    score: number;
    fullMark?: number;
}

export interface SvgRadarChartProps {
    data: SvgRadarItem[];
    height?: number;
    color?: string;
}

export const SvgRadarChart: React.FC<SvgRadarChartProps> = ({
    data,
    height = 240,
    color = '#6366f1',
}) => {
    const size = height;
    const center = size / 2;
    const radius = center * 0.60;
    const totalSides = data.length || 4;

    const angleStep = (Math.PI * 2) / totalSides;
    const levels = [0.25, 0.5, 0.75, 1.0];

    const polygonPoints = useMemo(() => {
        return data
            .map((item, i) => {
                const angle = i * angleStep - Math.PI / 2;
                const ratio = Math.min(1, Math.max(0, item.score / (item.fullMark || 9)));
                const r = radius * ratio;
                const x = center + r * Math.cos(angle);
                const y = center + r * Math.sin(angle);
                return `${x},${y}`;
            })
            .join(' ');
    }, [data, radius, center, angleStep]);

    return (
        <div className="w-full h-full flex items-center justify-center select-none">
            <svg viewBox={`0 0 ${size} ${size}`} style={{ width: size, height: size }} className="overflow-visible">
                {/* Background Web Polygons */}
                {levels.map((lvl, lIdx) => {
                    const levelPoints = Array.from({ length: totalSides }, (_, i) => {
                        const angle = i * angleStep - Math.PI / 2;
                        const r = radius * lvl;
                        const x = center + r * Math.cos(angle);
                        const y = center + r * Math.sin(angle);
                        return `${x},${y}`;
                    }).join(' ');

                    return (
                        <polygon
                            key={lIdx}
                            points={levelPoints}
                            fill="none"
                            stroke="currentColor"
                            strokeOpacity={0.12}
                            strokeDasharray={lIdx === levels.length - 1 ? 'none' : '3 3'}
                        />
                    );
                })}

                {/* Web Axes Spokes */}
                {data.map((_, i) => {
                    const angle = i * angleStep - Math.PI / 2;
                    const x2 = center + radius * Math.cos(angle);
                    const y2 = center + radius * Math.sin(angle);
                    return (
                        <line
                            key={i}
                            x1={center}
                            y1={center}
                            x2={x2}
                            y2={y2}
                            stroke="currentColor"
                            strokeOpacity={0.15}
                        />
                    );
                })}

                {/* Filled Data Polygon */}
                <polygon
                    points={polygonPoints}
                    fill={color}
                    fillOpacity={0.35}
                    stroke={color}
                    strokeWidth={2.5}
                    strokeLinejoin="round"
                    className="transition-all duration-500 animate-in zoom-in-95"
                />

                {/* Labels & Data Dots */}
                {data.map((item, i) => {
                    const angle = i * angleStep - Math.PI / 2;
                    const ratio = Math.min(1, Math.max(0, item.score / (item.fullMark || 9)));
                    const r = radius * ratio;
                    const dotX = center + r * Math.cos(angle);
                    const dotY = center + r * Math.sin(angle);

                    const labelR = radius + 24;
                    const labelX = center + labelR * Math.cos(angle);
                    const labelY = center + labelR * Math.sin(angle);

                    return (
                        <g key={i}>
                            <circle
                                cx={dotX}
                                cy={dotY}
                                r={4.5}
                                fill={color}
                                stroke="#ffffff"
                                strokeWidth={2}
                                className="shadow-md"
                            />
                            <text
                                x={labelX}
                                y={labelY + 4}
                                textAnchor="middle"
                                className="text-[10px] font-bold fill-slate-500 dark:fill-slate-400"
                            >
                                {item.subject} ({item.score})
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};
