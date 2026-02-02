import React, { useMemo } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { useStudyData } from '../context/StudyPlannerContext';
import { EVENT_TYPE_LABELS, EVENT_TYPE_COLORS, Event } from '../types';
import moment from 'moment';

const CountdownWidget: React.FC = () => {
    const { events } = useStudyData();

    // Get upcoming events (next 30 days)
    const upcomingEvents = useMemo(() => {
        const now = moment();
        const thirtyDaysLater = moment().add(30, 'days');

        return events
            .filter(event => {
                const eventDate = moment(event.eventDate);
                return eventDate.isAfter(now) && eventDate.isBefore(thirtyDaysLater);
            })
            .sort((a, b) => moment(a.eventDate).diff(moment(b.eventDate)))
            .slice(0, 3); // Show top 3
    }, [events]);

    if (upcomingEvents.length === 0) {
        return null;
    }

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-indigo-600" size={20} />
                <h3 className="font-bold text-gray-900 dark:text-white">Yaqinlashayotgan Tadbirlar</h3>
            </div>

            <div className="space-y-3">
                {upcomingEvents.map((event: Event) => {
                    const daysLeft = moment(event.eventDate).diff(moment(), 'days');
                    const hoursLeft = moment(event.eventDate).diff(moment(), 'hours') % 24;

                    return (
                        <div
                            key={event.id}
                            className="p-3 rounded-xl border-l-4"
                            style={{
                                borderLeftColor: EVENT_TYPE_COLORS[event.eventType],
                                backgroundColor: `${EVENT_TYPE_COLORS[event.eventType]}10`
                            }}
                        >
                            <div className="flex justify-between items-center gap-2">
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-gray-900 dark:text-white text-sm truncate">
                                        {event.title}
                                    </p>
                                    <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1">
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            {EVENT_TYPE_LABELS[event.eventType]}
                                        </p>
                                        <p className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                                            <Clock size={12} />
                                            {moment(event.eventDate).format('MMM D, HH:mm')}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className="text-xl md:text-2xl font-bold" style={{ color: EVENT_TYPE_COLORS[event.eventType] }}>
                                        {daysLeft}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-none">
                                        {daysLeft === 0 ? `${hoursLeft}s` : 'kun'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CountdownWidget;
