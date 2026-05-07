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
            case 0: return 'bg-[#ebedf0] dark:bg-[#161b22]'; // GitHub empty cell
            case 1: return 'bg-[#9be9a8] dark:bg-[#0e4429]'; // GitHub Level 1
            case 2: return 'bg-[#40c463] dark:bg-[#006d32]'; // GitHub Level 2
            case 3: return 'bg-[#30a14e] dark:bg-[#26a641]'; // GitHub Level 3
            case 4: return 'bg-[#216e39] dark:bg-[#39d353]'; // GitHub Level 4
            default: return 'bg-[#ebedf0] dark:bg-[#161b22]';
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
        <div className="bg-white dark:bg-[#0d1117] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 mb-8 overflow-hidden font-sans">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">O'quv Faolligi</h3>
                <div className="flex items-center gap-2 text-[11px] text-gray-500 dark:text-gray-400">
                    <span>Kam</span>
                    <div className="flex gap-[3px]">
                        <div className="w-[10px] h-[10px] rounded-[2px] bg-[#ebedf0] dark:bg-[#161b22]"></div>
                        <div className="w-[10px] h-[10px] rounded-[2px] bg-[#9be9a8] dark:bg-[#0e4429]"></div>
                        <div className="w-[10px] h-[10px] rounded-[2px] bg-[#40c463] dark:bg-[#006d32]"></div>
                        <div className="w-[10px] h-[10px] rounded-[2px] bg-[#30a14e] dark:bg-[#26a641]"></div>
                        <div className="w-[10px] h-[10px] rounded-[2px] bg-[#216e39] dark:bg-[#39d353]"></div>
                    </div>
                    <span>Ko'p</span>
                </div>
            </div>

            <div className="overflow-x-auto pb-4 scrollbar-hide">
                <div className="inline-block min-w-full">
                    {/* Month Labels */}
                    <div className="flex h-4 mb-1 ml-8 text-[10px] text-gray-500 dark:text-gray-400">
                        {monthLabels.map((m, i) => (
                            <div 
                                key={i} 
                                style={{ 
                                    position: 'absolute', 
                                    left: `${m.index * 13 + 32}px` 
                                }}
                            >
                                {m.label}
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-2 relative mt-4">
                        {/* Day Labels */}
                        <div className="flex flex-col justify-between py-[2px] text-[9px] text-gray-400 dark:text-gray-500 w-6 h-[88px] text-left">
                            <span className="h-[10px]">Mon</span>
                            <span className="h-[10px]">Wed</span>
                            <span className="h-[10px]">Fri</span>
                        </div>

                        {/* Grid */}
                        <div className="flex gap-[3px]">
                            {weeks.map((week, weekIdx) => (
                                <div key={weekIdx} className="flex flex-col gap-[3px]">
                                    {week.map((day, dayIdx) => (
                                        <div
                                            key={dayIdx}
                                            title={day ? `${format(day.date, 'MMM d, yyyy')}: ${day.minutes} daqiqa` : ''}
                                            className={`w-[10px] h-[10px] rounded-[2px] transition-all duration-200 hover:ring-1 hover:ring-indigo-500 dark:hover:ring-white/40 ${day ? getColor(day.level) : 'bg-transparent'}`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-between items-center mt-4">
                <p className="text-[11px] text-gray-400 dark:text-gray-500">
                    Learn how we count contributions
                </p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 italic">
                    * Oxirgi 1 yillik ma'lumotlar
                </p>
            </div>
        </div>
    );
};

export default ActivityHeatmap;
