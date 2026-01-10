import React, { useState, useMemo } from 'react';
import {
    DndContext,
    DragEndEvent,
    DragOverlay,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
    DragStartEvent
} from '@dnd-kit/core';
import moment from 'moment';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { useStudyData } from '../context/StudyPlannerContext';
import CalendarDay from '../components/calendar/CalendarDay';
import DraggableTask from '../components/calendar/DraggableTask';

const CalendarPage: React.FC = () => {
    const { tasks, updateTask, sessions } = useStudyData();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [activeId, setActiveId] = useState<string | null>(null);

    // Sensors for drag detection (Mouse + Touch)
    const sensors = useSensors(
        useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
        useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 5 } })
    );

    // Active Task for Overlay
    const activeTask = useMemo(() =>
        tasks.find(t => t.id === activeId),
        [activeId, tasks]);

    // Calendar Generation Logic
    const calendarDays = useMemo(() => {
        const startOfMonth = moment(currentDate).startOf('month');
        const endOfMonth = moment(currentDate).endOf('month');
        const startDate = startOfMonth.clone().startOf('week'); // Start from Sunday/Monday
        const endDate = endOfMonth.clone().endOf('week');



        // Re-do concise loop
        const _days = [];
        let _day = startDate.clone();
        // Since we want inclusive end, and endOf('week') is usually Saturday night
        while (_day.isSameOrBefore(endDate, 'day')) {
            _days.push(_day.toDate());
            _day.add(1, 'day');
        }
        return _days;
    }, [currentDate]);

    // Data Mapping
    const getTasksForDate = (date: Date) => {
        const dateStr = moment(date).format('YYYY-MM-DD');
        return tasks.filter(task => {
            const targetDate = task.dueDate || task.deadline || task.startTime;
            if (!targetDate) return false;
            return moment(targetDate).format('YYYY-MM-DD') === dateStr;
        });
    };

    const getStudyDurationForDate = (date: Date) => {
        const dateStr = moment(date).format('YYYY-MM-DD');
        return sessions
            .filter(s => moment(s.startTime).format('YYYY-MM-DD') === dateStr)
            .reduce((acc, s) => acc + s.duration, 0);
    };

    // Handlers
    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveId(null);

        if (over && active.id !== over.id) {
            // New Date is the ID of the droppable day
            const newDateStr = over.id as string; // YYYY-MM-DD

            // Only update if actually changed
            const task = tasks.find(t => t.id === active.id);
            if (!task) return;

            const oldDateStr = task.dueDate || task.deadline || task.startTime
                ? moment(task.dueDate || task.deadline || task.startTime).format('YYYY-MM-DD')
                : null;

            if (oldDateStr !== newDateStr) {
                // Format as ISO string preserving time if needed, but for now midnight or keep time
                // Simple approach: set YYYY-MM-DD with current time or 9am
                const newIso = moment(newDateStr).hour(9).minute(0).toISOString();

                console.log(`Moving Task ${task.title} to ${newDateStr}`);
                updateTask(task.id, {
                    dueDate: newIso,
                    deadline: newIso, // Sync both just in case
                    startTime: newIso // Check if we want to move start time too. Usually yes for calendar.
                });
            }
        }
    };

    return (
        <div className="h-[calc(100vh-100px)] flex flex-col p-4 md:p-6 max-w-7xl mx-auto w-full">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2 dark:text-white">
                    <CalendarIcon className="text-indigo-600" />
                    {moment(currentDate).format('MMMM YYYY')}
                </h2>
                <div className="flex gap-2">
                    <button
                        onClick={() => setCurrentDate(moment(currentDate).subtract(1, 'month').toDate())}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={() => setCurrentDate(new Date())}
                        className="px-4 py-2 text-sm font-medium bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400"
                    >
                        Bugun
                    </button>
                    <button
                        onClick={() => setCurrentDate(moment(currentDate).add(1, 'month').toDate())}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>

            {/* Grid Header */}
            <div className="grid grid-cols-7 gap-px mb-2 text-center">
                {['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Juma', 'Shan'].map(day => (
                    <div key={day} className="text-sm font-medium text-gray-400 py-2">
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Grid */}
            <DndContext
                sensors={sensors}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                <div className="flex-1 grid grid-cols-7 grid-rows-5 gap-px bg-gray-200 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm">
                    {calendarDays.map((date, idx) => (
                        <CalendarDay
                            key={idx}
                            date={date}
                            isCurrentMonth={moment(date).isSame(currentDate, 'month')}
                            isToday={moment(date).isSame(new Date(), 'day')}
                            tasks={getTasksForDate(date)}
                            studyDuration={getStudyDurationForDate(date)}
                        />
                    ))}
                </div>

                <DragOverlay>
                    {activeTask ? <DraggableTask task={activeTask} /> : null}
                </DragOverlay>
            </DndContext>
        </div>
    );
};

export default CalendarPage;
