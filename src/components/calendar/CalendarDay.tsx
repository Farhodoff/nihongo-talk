import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Task } from '../../types';
import DraggableTask from './DraggableTask';
import moment from 'moment';

interface CalendarDayProps {
    date: Date;
    tasks: Task[];
    studyDuration: number; // in minutes
    isCurrentMonth: boolean;
    isToday: boolean;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ date, tasks, studyDuration, isCurrentMonth, isToday }) => {
    // Unique ID for droppable: simple date string YYYY-MM-DD
    const dateId = moment(date).format('YYYY-MM-DD');

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

    return (
        <div
            ref={setNodeRef}
            className={`
                min-h-[120px] p-2 border border-gray-100 dark:border-gray-700 relative transition-colors
                ${isCurrentMonth ? 'bg-white dark:bg-[#1f2937]' : 'bg-gray-50/50 dark:bg-[#111827]/50'}
                ${heatmapClass}
                ${isOver ? 'ring-2 ring-indigo-500 ring-inset z-10' : ''}
            `}
        >
            {/* Header: Date & Mood */}
            <div className="flex justify-between items-center mb-2">
                <span className={`
                    text-sm font-semibold w-7 h-7 flex items-center justify-center rounded-full
                    ${isToday ? 'bg-indigo-600 text-white' : isCurrentMonth ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-600'}
                `}>
                    {date.getDate()}
                </span>

                {/* Optional Mood/Sticker Placeholder */}
                {studyDuration > 60 && <span title={`${Math.round(studyDuration / 60)} soat o'qildi`}>🔥</span>}
            </div>

            {/* Tasks List */}
            <div className="flex flex-col gap-1 min-h-[60px]">
                {tasks.map(task => (
                    <DraggableTask key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default CalendarDay;
