import { Trash2, X } from 'lucide-react';
import moment from 'moment';
import React, { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CustomToolbar from '../components/CustomToolbar';
import { Button } from '../components/ui/Button';
import { useStudyPlanner } from '../context/StudyPlannerContext';
import '../styles/calendar.css';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const CalendarPage: React.FC = () => {
    const { tasks, updateTask, deleteTask } = useStudyPlanner();
    const [selectedEvent, setSelectedEvent] = useState<any>(null);

    const events = tasks.map(task => ({
        id: task.id,
        title: task.title,
        start: task.startTime ? new Date(task.startTime) : (task.deadline ? new Date(task.deadline) : new Date()),
        end: task.endTime ? new Date(task.endTime) : (task.deadline ? new Date(new Date(task.deadline).getTime() + 3600000) : new Date(new Date().getTime() + 3600000)),
        resource: task,
        color: task.priority === 'high' ? '#ef4444' : task.priority === 'medium' ? '#f59e0b' : '#3b82f6'
    }));

    const eventStyleGetter = (event: any) => {
        return {
            style: {
                backgroundColor: event.color,
                borderRadius: '8px',
                opacity: 0.9,
                color: 'white',
                border: '0px',
                display: 'block',
                padding: '2px 5px',
                fontSize: '0.85rem'
            }
        };
    };

    const handleEventDrop = ({ event, start, end }: any) => {
        if (event.resource) {
            updateTask(event.resource.id, {
                startTime: start.toISOString(),
                endTime: end.toISOString()
            });
        }
    };

    const handleSelectEvent = (event: any) => {
        setSelectedEvent(event);
    };

    const handleDelete = () => {
        if (selectedEvent && selectedEvent.resource) {
            if (window.confirm('Ushbu vazifani o\'chirasizmi?')) {
                deleteTask(selectedEvent.resource.id);
                setSelectedEvent(null);
            }
        }
    };

    return (
        <div className="h-[calc(100vh-100px)] flex flex-col relative">

            <div className="flex-1 bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <DnDCalendar
                    localizer={localizer}
                    events={events}
                    startAccessor={(e: any) => e.start}
                    endAccessor={(e: any) => e.end}
                    style={{ height: '100%' }}
                    eventPropGetter={eventStyleGetter}
                    views={[Views.MONTH, Views.WEEK, Views.DAY]}
                    defaultView={Views.MONTH}
                    onEventDrop={handleEventDrop}
                    draggableAccessor={() => true}
                    components={{
                        toolbar: CustomToolbar
                    }}
                    onSelectEvent={handleSelectEvent}
                />
            </div>

            {/* Event Detail Modal */}
            {selectedEvent && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-2xl">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-sm m-4 animate-in fade-in zoom-in duration-200">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
                                {selectedEvent.title}
                            </h3>
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500 dark:text-gray-400">Holat:</span>
                                <span className={`text-xs px-2 py-1 rounded-md font-medium capitalize 
                                    ${selectedEvent.resource.status === 'done' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                        'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}>
                                    {selectedEvent.resource.status === 'done' || selectedEvent.resource.completed ? 'Bajarildi' : 'Bajarish kerak'}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500 dark:text-gray-400">Vaqt:</span>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                    {moment(selectedEvent.start).format('MMM D, h:mm A')} - {moment(selectedEvent.end).format('h:mm A')}
                                </span>
                            </div>

                            {selectedEvent.resource.priority && (
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Muhimlik:</span>
                                    <span className={`text-xs px-2 py-1 rounded-md font-medium capitalize 
                                        ${selectedEvent.resource.priority === 'high' ? 'bg-red-100 text-red-700' :
                                            selectedEvent.resource.priority === 'medium' ? 'bg-orange-100 text-orange-700' :
                                                'bg-blue-100 text-blue-700'}`}>
                                        {selectedEvent.resource.priority === 'high' ? 'Yuqori' : selectedEvent.resource.priority === 'medium' ? 'O\'rta' : 'Past'}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="flex gap-3">
                            <Button
                                variant="danger"
                                onClick={handleDelete}
                                className="flex-1 flex justify-center items-center gap-2"
                            >
                                <Trash2 size={16} /> O'chirish
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalendarPage;
