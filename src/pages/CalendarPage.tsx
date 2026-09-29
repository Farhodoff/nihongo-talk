import React, { useState, useMemo } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragStartEvent,
} from '@dnd-kit/core';
import {
  format,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  isSameDay,
  subMonths,
  addMonths,
  setHours,
  setMinutes,
  isBefore,
  isAfter,
  getDate,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  startOfDay,
} from 'date-fns';
import { uz } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Plus, Sparkles } from 'lucide-react';
import { useStudyData } from '../context/StudyPlannerContext';
import CalendarDay from '../components/calendar/CalendarDay';
import DraggableTask from '../components/calendar/DraggableTask';
import AddEventModal from '../components/AddEventModal';
import CountdownWidget from '../components/CountdownWidget';
import DayDetailsModal from '../components/calendar/DayDetailsModal';
import AITimetableGeneratorModal from '../components/timetable/AITimetableGeneratorModal';
import { Event } from '../types';

const CalendarPage: React.FC = () => {
  const { tasks, updateTask, sessions, events, googleEvents } = useStudyData();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isAITimetableOpen, setIsAITimetableOpen] = useState(false);

  // Day details modal state
  const [selectedDayData, setSelectedDayData] = useState<{
    date: Date;
    tasks: typeof tasks;
    events: typeof events;
    studyDuration: number;
  } | null>(null);

  // Sensors for drag detection (Mouse + Touch)
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 5 } }),
  );

  // Active Task for Overlay
  const activeTask = useMemo(() => tasks.find((t) => t.id === activeId), [activeId, tasks]);

  // Calendar Generation Logic
  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 }); // Start from Monday
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    return eachDayOfInterval({ start: startDate, end: endDate });
  }, [currentDate]);

  // Data Mapping
  const getTasksForDate = (date: Date) => {
    const dateStr = format(new Date(date), 'yyyy-MM-dd');
    return tasks
      .filter((task) => {
        const targetDate = task.dueDate || task.deadline || task.startTime;
        if (!targetDate) return false;
        return format(new Date(targetDate), 'yyyy-MM-dd') === dateStr;
      })
      .sort((a, b) => {
        const timeA = new Date(a.dueDate || a.deadline || a.startTime || 0).getTime();
        const timeB = new Date(b.dueDate || b.deadline || b.startTime || 0).getTime();
        return timeA - timeB;
      });
  };

  const getStudyDurationForDate = (date: Date) => {
    const dateStr = format(new Date(date), 'yyyy-MM-dd');
    return sessions
      .filter((s) => format(new Date(s.startTime), 'yyyy-MM-dd') === dateStr)
      .reduce((acc, s) => acc + s.duration, 0);
  };

  const getEventsForDate = (date: Date) => {
    const dateStr = format(new Date(date), 'yyyy-MM-dd');
    const localEvents = events.filter((event) => {
      const eventStart = new Date(event.eventDate);
      const eventEnd = event.repetitionEndDate ? new Date(event.repetitionEndDate) : null;

      switch (event.repetitionType) {
        case 'daily':
          // Show on all days from start to end
          if (isBefore(date, startOfDay(eventStart))) return false;
          if (eventEnd && isAfter(date, startOfDay(eventEnd))) return false;
          return true;

        case 'weekly': {
          // Show only on selected weekdays
          if (isBefore(date, startOfDay(eventStart))) return false;
          if (eventEnd && isAfter(date, startOfDay(eventEnd))) return false;
          const dayOfWeek = date.getDay();
          return event.repetitionDays?.includes(dayOfWeek) || false;
        }

        case 'monthly':
          // Show on same day-of-month
          if (isBefore(date, startOfDay(eventStart))) return false;
          if (eventEnd && isAfter(date, startOfDay(eventEnd))) return false;
          return date.getDate() === getDate(eventStart);

        case 'none':
        default:
          // One-time event: exact date match
          return format(new Date(event.eventDate), 'yyyy-MM-dd') === dateStr;
      }
    });

    const externalEvents: Event[] = googleEvents
      .filter((ge) => {
        const start = ge.start?.dateTime || ge.start?.date;
        return start ? format(new Date(start), 'yyyy-MM-dd') === dateStr : false;
      })
      .map((ge) => ({
        id: ge.id || '',
        userId: '',
        title: ge.summary || 'Sarlavhasiz',
        description: ge.description || 'Google Calendar tadbiri',
        eventType: 'google',
        eventDate: ge.start?.dateTime || ge.start?.date || '',
        notifyBeforeMinutes: 0,
        isNotified: true,
        repetitionType: 'none',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        googleEventId: ge.id,
      }));

    return [...localEvents, ...externalEvents];
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
      const task = tasks.find((t) => t.id === active.id);
      if (!task) return;

      const oldTargetDate = task.dueDate || task.deadline || task.startTime;
      const oldDateStr = oldTargetDate ? format(new Date(oldTargetDate), 'yyyy-MM-dd') : null;

      if (oldDateStr !== newDateStr) {
        // Format as ISO string preserving time if needed, but for now midnight or keep time
        // Simple approach: set YYYY-MM-DD with current time or 9am
        const newIso = setMinutes(setHours(new Date(newDateStr), 9), 0).toISOString();

        updateTask(task.id, {
          dueDate: newIso,
          deadline: newIso, // Sync both just in case
          startTime: newIso, // Check if we want to move start time too. Usually yes for calendar.
        });
      }
    }
  };

  const openDayDetails = (date: Date) => {
    setSelectedDayData({
      date,
      tasks: getTasksForDate(date),
      events: getEventsForDate(date),
      studyDuration: getStudyDurationForDate(date),
    });
  };

  const closeDayDetails = () => {
    setSelectedDayData(null);
  };

  return (
    <div className="mx-auto flex h-[calc(100vh-100px)] w-full max-w-7xl flex-col p-4 md:p-8">
      <div className="mb-4 flex flex-col gap-2 rounded-2xl border border-primary/25 bg-primary/5 p-3 text-xs sm:flex-row sm:items-center sm:justify-between">
        <span className="leading-relaxed text-muted-foreground">
          <span className="font-bold text-foreground">Asosiy reja:</span> Yapon tili rejasi Shaxsiy
          reja va Bosh sahifada. Bu kalendar faqat qo&apos;shimcha eslatmalar uchun.
        </span>
        <a
          href="/personal-plan"
          className="shrink-0 rounded-xl bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground"
        >
          Shaxsiy rejaga o&apos;tish
        </a>
      </div>
      <CountdownWidget />
      {/* Toolbar */}
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="flex items-center gap-2 text-xl font-bold dark:text-white md:text-2xl">
          <CalendarIcon className="text-indigo-600" />
          {format(currentDate, 'MMMM yyyy', { locale: uz })}
        </h2>
        <div className="flex w-full gap-2 sm:w-auto">
          <button
            onClick={() => setCurrentDate(subMonths(currentDate, 1))}
            className="flex-1 rounded-lg border border-gray-200 p-2 text-gray-600 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 sm:flex-none sm:border-none"
          >
            <ChevronLeft className="mx-auto" />
          </button>
          <button
            onClick={() => setIsAITimetableOpen(true)}
            className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:from-purple-700 hover:to-indigo-700"
          >
            <Sparkles size={16} />
            AI Timetable
          </button>
          <button
            onClick={() => setIsEventModalOpen(true)}
            className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700"
          >
            <Plus size={16} />
            Tadbir
          </button>
          <button
            onClick={() => setCurrentDate(addMonths(currentDate, 1))}
            className="flex-1 rounded-lg border border-gray-200 p-2 text-gray-600 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 sm:flex-none sm:border-none"
          >
            <ChevronRight className="mx-auto" />
          </button>
        </div>
      </div>

      {/* Grid Header */}
      <div className="mb-2 grid grid-cols-7 gap-px text-center">
        {['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Juma', 'Shan'].map((day) => (
          <div key={day} className="py-2 text-xs font-medium text-gray-400 md:text-sm">
            <span className="hidden md:inline">{day}</span>
            <span className="md:hidden">{day.charAt(0)}</span>
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="custom-scrollbar flex-1 overflow-auto rounded-2xl border border-gray-200 bg-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-700">
          <div className="grid h-full min-w-full grid-cols-7 grid-rows-5 gap-px">
            {calendarDays.map((date, idx) => (
              <CalendarDay
                key={idx}
                date={date}
                isCurrentMonth={isSameMonth(new Date(date), new Date(currentDate))}
                isToday={isSameDay(new Date(date), new Date(new Date()))}
                tasks={getTasksForDate(date)}
                events={getEventsForDate(date)}
                studyDuration={getStudyDurationForDate(date)}
                onShowMore={() => openDayDetails(date)}
              />
            ))}
          </div>
        </div>

        <DragOverlay>{activeTask ? <DraggableTask task={activeTask} /> : null}</DragOverlay>
      </DndContext>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsEventModalOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white shadow-lg transition-all hover:shadow-xl"
        title="Yangi Tadbir Qo'shish"
      >
        <Plus size={24} />
      </button>

      {/* Add Event Modal */}
      <AddEventModal isOpen={isEventModalOpen} onClose={() => setIsEventModalOpen(false)} />

      {/* Day Details Modal */}
      <DayDetailsModal
        isOpen={selectedDayData !== null}
        onClose={closeDayDetails}
        date={selectedDayData?.date || null}
        tasks={selectedDayData?.tasks || []}
        events={selectedDayData?.events || []}
        studyDuration={selectedDayData?.studyDuration || 0}
      />

      <AITimetableGeneratorModal
        isOpen={isAITimetableOpen}
        onClose={() => setIsAITimetableOpen(false)}
      />
    </div>
  );
};

export default CalendarPage;
