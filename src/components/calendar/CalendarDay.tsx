import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Task, Event, EVENT_TYPE_COLORS } from '../../types';
import DraggableTask from './DraggableTask';
import { format } from 'date-fns';

interface CalendarDayProps {
    date: Date;
    tasks: Task[];
    events: Event[];
    studyDuration: number; // in minutes
    isCurrentMonth: boolean;
    isToday: boolean;
    onShowMore?: () => void;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ date, tasks, events, studyDuration, isCurrentMonth, isToday, onShowMore }) => {
    // Unique ID for droppable: simple date string YYYY-MM-DD
    const dateId = format(date, 'yyyy-MM-dd');

    const { setNodeRef, isOver } = useDroppable({
        id: dateId,
        data: {
            date,
            type: 'Day'
        }
    });

    // Heatmap Logic
    const getHeatmapColor = (minutes: number) => {
        if (minutes <= 0) return 'bg-transparent';
        if (minutes < 30) return 'bg-indigo-50/50 dark:bg-indigo-900/10';
        if (minutes < 60) return 'bg-indigo-100/50 dark:bg-indigo-900/20'; // Light
        if (minutes < 180) return 'bg-indigo-200/50 dark:bg-indigo-900/40'; // Medium
        return 'bg-indigo-300/50 dark:bg-indigo-900/60'; // High intensity
    };

    const heatmapClass = getHeatmapColor(studyDuration);

    // Task display limit based on screen size (simplified as we don't have a reliable hook here, 
    // but we can adjust CSS to hide items on very small heights)
    const DISPLAY_LIMIT = 2; // Reduced for better fit
    const visibleTasks = tasks.slice(0, DISPLAY_LIMIT);

    return (
        <div
            ref={setNodeRef}
            onClick={() => onShowMore?.()} // Allow tapping anywhere on mobile to see details
            className={`
                min-h-[80px] md:min-h-[120px] p-1 md:p-2 border border-gray-100 dark:border-gray-700 relative transition-colors cursor-pointer md:cursor-default
                ${isCurrentMonth ? 'bg-white dark:bg-[#1f2937]' : 'bg-gray-50/50 dark:bg-[#111827]/50'}
                ${heatmapClass}
                ${isOver ? 'ring-2 ring-indigo-500 ring-inset z-10' : ''}
            `}
        >
            {/* Header: Date & Mood */}
            <div className="flex justify-between items-center mb-1 md:mb-2">
                <span className={`
                    text-xs md:text-sm font-semibold w-5 h-5 md:w-7 md:h-7 flex items-center justify-center rounded-full
                    ${isToday ? 'bg-indigo-600 text-white' : isCurrentMonth ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-600'}
                `}>
                    {date.getDate()}
                </span>
                
                {studyDuration > 60 && <span className="text-xs md:text-base" title={`${Math.round(studyDuration / 60)} soat o'qildi`}>🔥</span>}
            </div>

            {/* Tasks & Events List - Hidden or very compact on mobile */}
            <div className="flex flex-col gap-0.5 md:gap-1 min-h-[30px] md:min-h-[60px] overflow-hidden">
                <div className="hidden md:flex flex-col gap-1">
                    {visibleTasks.map(task => (
                        <DraggableTask key={task.id} task={task} />
                    ))}
                </div>

                {/* Mobile indicators (dots) instead of full tasks */}
                <div className="flex md:hidden flex-wrap gap-0.5">
                    {tasks.map(t => (
                        <div key={t.id} className="w-1 h-1 rounded-full bg-indigo-500" />
                    ))}
                    {events.map(e => (
                        <div key={e.id} className="w-1 h-1 rounded-full bg-purple-500" />
                    ))}
                </div>

                {/* Event Badges (Desktop only) */}
                <div className="hidden md:flex flex-col gap-1">
                    {events.slice(0, 2).map(event => (
                        <div
                            key={event.id}
                            className="px-2 py-1 rounded text-[10px] font-medium truncate border-l-2 shadow-sm"
                            style={{
                                borderLeftColor: EVENT_TYPE_COLORS[event.eventType],
                                backgroundColor: `${EVENT_TYPE_COLORS[event.eventType]}20`
                            }}
                        >
                            {event.title}
                        </div>
                    ))}
                </div>

                {/* Show More (Indicator) */}
                {(tasks.length > 0 || events.length > 0) && (
                    <div className="md:hidden mt-auto text-[8px] text-gray-400 font-bold">
                        {tasks.length + events.length} ta
                    </div>
                )}
            </div>
        </div>
    );
};

export default CalendarDay;
