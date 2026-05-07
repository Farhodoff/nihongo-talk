import React, { useMemo } from 'react';
import { StudySession } from '../../types';
import { format, subDays, eachDayOfInterval, startOfDay } from 'date-fns';

interface ActivityHeatmapProps {
    sessions: StudySession[];
}

const ActivityHeatmap: React.FC<ActivityHeatmapProps> = ({ sessions }) => {
    const today = startOfDay(new Date());
    const startDate = subDays(today, 364); // Last 365 days

    const days = useMemo(() => {
        const interval = eachDayOfInterval({ start: startDate, end: today });
        
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
    }, [sessions, startDate, today]);

    // Group days into weeks for the grid
    const weeks = useMemo(() => {
        const result: any[][] = [];
        let currentWeek: any[] = [];
        
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
            case 0: return 'bg-gray-100 dark:bg-gray-800';
            case 1: return 'bg-emerald-200 dark:bg-emerald-900/40';
            case 2: return 'bg-emerald-400 dark:bg-emerald-700';
            case 3: return 'bg-emerald-600 dark:bg-emerald-500';
            case 4: return 'bg-emerald-800 dark:bg-emerald-400';
            default: return 'bg-gray-100 dark:bg-gray-800';
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

    return (
        <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-8 overflow-hidden">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">O'quv Faolligi</h3>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>Kam</span>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-sm bg-gray-100 dark:bg-gray-800"></div>
                        <div className="w-3 h-3 rounded-sm bg-emerald-200 dark:bg-emerald-900/40"></div>
                        <div className="w-3 h-3 rounded-sm bg-emerald-400 dark:bg-emerald-700"></div>
                        <div className="w-3 h-3 rounded-sm bg-emerald-600 dark:bg-emerald-500"></div>
                        <div className="w-3 h-3 rounded-sm bg-emerald-800 dark:bg-emerald-400"></div>
                    </div>
                    <span>Ko'p</span>
                </div>
            </div>

            <div className="overflow-x-auto pb-2 scrollbar-hide">
                <div className="min-w-[800px]">
                    {/* Month Labels */}
                    <div className="flex mb-2 ml-8 text-[10px] text-gray-400 uppercase tracking-wider">
                        {monthLabels.map((m, i) => (
                            <div key={i} style={{ marginLeft: i === 0 ? `${m.index * 14}px` : `${(m.index - monthLabels[i-1].index) * 14 - 24}px` }} className="w-6">
                                {m.label}
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        {/* Day Labels */}
                        <div className="flex flex-col gap-[7px] pt-1 text-[9px] text-gray-400 font-medium w-6 uppercase">
                            <span>Dush</span>
                            <span>Chor</span>
                            <span>Jum</span>
                        </div>

                        {/* Grid */}
                        <div className="flex gap-[3px]">
                            {weeks.map((week, weekIdx) => (
                                <div key={weekIdx} className="flex flex-col gap-[3px]">
                                    {week.map((day, dayIdx) => (
                                        <div
                                            key={dayIdx}
                                            title={day ? `${day.dateStr}: ${day.minutes} daqiqa` : ''}
                                            className={`w-[11px] h-[11px] rounded-[2px] transition-colors duration-300 ${day ? getColor(day.level) : 'bg-transparent'}`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <p className="text-xs text-gray-400 mt-4 italic">
                * Oxirgi 365 kunlik o'quv sessiyalari asosida hisoblangan.
            </p>
        </div>
    );
};

export default ActivityHeatmap;
