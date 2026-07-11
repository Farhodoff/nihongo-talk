import React from 'react';
import { X, Calendar } from 'lucide-react';
import { Task, Event, EVENT_TYPE_COLORS } from '../../types';
import DraggableTask from './DraggableTask';
import { format } from 'date-fns';
import { uz } from 'date-fns/locale';

interface DayDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    date: Date | null;
    tasks: Task[];
    events: Event[];
    studyDuration: number;
}

const DayDetailsModal: React.FC<DayDetailsModalProps> = ({
    isOpen,
    onClose,
    date,
    tasks,
    events,
    studyDuration
}) => {
    if (!isOpen || !date) return null;

    const formattedDate = format(date, 'd MMMM yyyy, eeee', { locale: uz });
    const studyHours = Math.floor(studyDuration / 60);
    const studyMinutes = studyDuration % 60;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl border border-gray-200 dark:border-gray-700 my-8 max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <Calendar className="text-indigo-600" size={24} />
                            {formattedDate}
                        </h3>
                        {studyDuration > 0 && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                📚 O'qilgan vaqt: {studyHours > 0 && `${studyHours} soat `}{studyMinutes} daqiqa
                            </p>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6 overflow-y-auto">
                    {/* Tasks Section */}
                    {tasks.length > 0 && (
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                ✅ Vazifalar
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                    ({tasks.length})
                                </span>
                            </h4>
                            <div className="space-y-2">
                                {tasks.map(task => (
                                    <DraggableTask key={task.id} task={task} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Events Section */}
                    {events.length > 0 && (
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                📅 Tadbirlar
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                    ({events.length})
                                </span>
                            </h4>
                            <div className="space-y-2">
                                {events.map(event => (
                                    <div
                                        key={event.id}
                                        className="px-4 py-3 rounded-lg border-l-4 shadow-sm bg-white dark:bg-gray-700/50 hover:shadow-md transition-shadow"
                                        style={{
                                            borderLeftColor: EVENT_TYPE_COLORS[event.eventType]
                                        }}
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    {event.repetitionType !== 'none' && (
                                                        <span className="text-xs">🔁</span>
                                                    )}
                                                    <h5 className="font-medium text-gray-900 dark:text-white">
                                                        {event.title}
                                                    </h5>
                                                </div>
                                                {event.description && (
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                                        {event.description}
                                                    </p>
                                                )}
                                                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                                                    <span>🕐 {format(new Date(event.eventDate), 'HH:mm')}</span>
                                                    {event.repetitionType !== 'none' && (
                                                        <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600">
                                                            Takrorlanuvchi
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div
                                                className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                                                style={{ backgroundColor: EVENT_TYPE_COLORS[event.eventType] }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Empty State */}
                    {tasks.length === 0 && events.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">📭</div>
                            <p className="text-gray-500 dark:text-gray-400">
                                Ushbu kun uchun vazifa yoki tadbir yo'q
                            </p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                    <button
                        onClick={onClose}
                        className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all"
                    >
                        Yopish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DayDetailsModal;
