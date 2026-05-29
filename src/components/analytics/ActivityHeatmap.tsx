import React, { useMemo } from 'react';
import { StudySession } from '../../types';
import { format, eachDayOfInterval, startOfYear, endOfYear } from 'date-fns';

interface ActivityHeatmapProps {
    sessions: StudySession[];
}

const ActivityHeatmap: React.FC<ActivityHeatmapProps> = ({ sessions }) => {
    // 2026 yil to'liq: January - December
    const year2026 = new Date(2026, 0, 1); // January 1, 2026
    const startDate = startOfYear(year2026);
    const endDate = endOfYear(year2026); // December 31, 2026

    const days = useMemo(() => {
        const interval = eachDayOfInterval({ start: startDate, end: endDate });
        
        // Group sessions by date
        const sessionMap = new Map<string, number>();
        sessions.forEach(s => {
            const dateStr = format(new Date(s.startTime), 'yyyy-MM-dd');
            sessionMap.set(dateStr, (sessionMap.get(dateStr) || 0) + s.duration);
        });

        return interval.map(date => {
            const dateStr = format(date, 'yyyy-MM-dd');
            const minutes = sessionMap.get(dateStr) || 0;
            return {
                date,
                dateStr,
                minutes,
                level: minutes === 0 ? 0 : minutes < 30 ? 1 : minutes < 60 ? 2 : minutes < 120 ? 3 : 4
            };
        });
    }, [sessions, startDate, endDate]);

    interface HeatmapDay {
        date: Date;
        dateStr: string;
        minutes: number;
        level: number;
    }

    // Group days into weeks for the grid
    const weeks = useMemo(() => {
        const result: (HeatmapDay | null)[][] = [];
        let currentWeek: (HeatmapDay | null)[] = [];
        
        // Offset to align days of week
        const startDayOfWeek = startDate.getDay();
        for (let i = 0; i < startDayOfWeek; i++) {
            currentWeek.push(null);
        }

        days.forEach(day => {
            if (currentWeek.length === 7) {
                result.push(currentWeek);
                currentWeek = [];
            }
            currentWeek.push(day);
        });

        if (currentWeek.length > 0) {
            while (currentWeek.length < 7) currentWeek.push(null);
            result.push(currentWeek);
        }

        return result;
    }, [days, startDate]);

    const getColor = (level: number) => {
        switch (level) {
            case 0: return 'bg-[#161b22] border border-white/5'; 
            case 1: return 'bg-[#0e4429] shadow-[0_0_8px_rgba(14,68,41,0.4)]'; 
            case 2: return 'bg-[#006d32] shadow-[0_0_10px_rgba(0,109,50,0.5)]'; 
            case 3: return 'bg-[#26a641] shadow-[0_0_12px_rgba(38,166,65,0.6)]'; 
            case 4: return 'bg-[#39d353] shadow-[0_0_15px_rgba(57,211,83,0.8)]'; 
            default: return 'bg-[#161b22]';
        }
    };

    const monthLabels = useMemo(() => {
        const labels: { label: string; index: number }[] = [];
        let lastMonth = -1;
        
        weeks.forEach((week, i) => {
            const firstDay = week.find(d => d !== null);
            if (firstDay) {
                const month = firstDay.date.getMonth();
                if (month !== lastMonth) {
                    labels.push({ label: format(firstDay.date, 'MMM'), index: i });
                    lastMonth = month;
                }
            }
        });
        return labels;
    }, [weeks]);

    // Yil ko'rsatkichi
    const yearRange = '2026';

    return (
        <div className="bg-[#0d1117] p-8 rounded-[24px] border border-white/10 mb-8 overflow-hidden font-sans">
            <div className="flex items-center justify-between mb-10">
                <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">O'quv Faolligi</h3>
                    <p className="text-xs text-gray-500 mt-1">{yearRange}</p>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="opacity-60">Kam</span>
                    <div className="flex gap-[4px]">
                        <div className="w-[12px] h-[12px] rounded-[3px] bg-[#161b22] border border-white/10" title="0 daqiqa"></div>
                        <div className="w-[12px] h-[12px] rounded-[3px] bg-[#0e4429]" title="<30 daqiqa"></div>
                        <div className="w-[12px] h-[12px] rounded-[3px] bg-[#006d32]" title="<60 daqiqa"></div>
                        <div className="w-[12px] h-[12px] rounded-[3px] bg-[#26a641]" title="<120 daqiqa"></div>
                        <div className="w-[12px] h-[12px] rounded-[3px] bg-[#39d353] shadow-[0_0_10px_rgba(57,211,83,0.5)]" title="≥120 daqiqa"></div>
                    </div>
                    <span className="opacity-60">Ko'p</span>
                </div>
            </div>

            <div className="overflow-x-auto pb-6 scrollbar-hide">
                <div className="inline-block min-w-full">
                    {/* Month Labels */}
                    <div className="relative h-6 ml-[40px] text-[11px] text-gray-500 font-medium">
                        {monthLabels.map((m, i) => (
                            <div 
                                key={i} 
                                className="absolute"
                                style={{ 
                                    left: `${m.index * 15}px` 
                                }}
                            >
                                {m.label}
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4 relative">
                        {/* Day Labels */}
                        <div className="flex flex-col text-[10px] text-gray-500 font-medium w-8 h-[100px] justify-between py-1">
                            <span className="leading-none">Mon</span>
                            <span className="leading-none">Wed</span>
                            <span className="leading-none">Fri</span>
                        </div>

                        {/* Grid */}
                        <div className="flex gap-[4px]">
                            {weeks.map((week, weekIdx) => (
                                <div key={weekIdx} className="flex flex-col gap-[4px]">
                                    {week.map((day, dayIdx) => (
                                        <div
                                            key={dayIdx}
                                            title={day ? `${format(day.date, 'MMM d, yyyy')}: ${day.minutes} daqiqa` : ''}
                                            className={`w-[11px] h-[11px] rounded-[3px] transition-all duration-300 hover:scale-125 cursor-pointer hover:z-10 ${day ? getColor(day.level) : 'bg-transparent'}`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/5">
                <button className="text-[12px] text-gray-500 hover:text-indigo-400 transition-colors">
                    Learn how we count contributions
                </button>
                <p className="text-[12px] text-gray-500 italic font-light">
                    * Oxirgi 1 yillik ma'lumotlar
                </p>
            </div>
        </div>
    );
};

export default ActivityHeatmap;
