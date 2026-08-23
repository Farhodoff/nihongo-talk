import React, { useMemo, memo } from 'react';
import { SvgBarChart, SvgLineChart } from '../ui/SvgCharts';
import { StudySession } from '../../types';

interface ActivityAnalyticsProps {
    sessions: StudySession[];
}

const ActivityAnalytics: React.FC<ActivityAnalyticsProps> = memo(({ sessions }) => {
    // 1. Weekly Activity Data
    const weeklyData = useMemo(() => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const data = days.map(day => ({ name: day, hours: 0 }));

        const now = new Date();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(now.getDate() - 7);

        sessions.forEach(session => {
            const date = new Date(session.startTime);
            if (date >= oneWeekAgo) {
                const dayIndex = date.getDay();
                data[dayIndex].hours += (session.duration / 60);
            }
        });

        // Round hours
        return data.map(d => ({ ...d, hours: Number(d.hours.toFixed(1)) }));
    }, [sessions]);

    // 2. Hourly Productivity Data
    const hourlyData = useMemo(() => {
        const hours = Array.from({ length: 24 }, (_, i) => ({ name: i, value: 0 }));

        sessions.forEach(session => {
            const date = new Date(session.startTime);
            const hour = date.getHours();
            hours[hour].value += session.duration; // Total minutes studied at this hour
        });

        return hours.map(h => ({
            name: `${h.name}:00`,
            minutes: h.value
        }));
    }, [sessions]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* 1. Weekly Activity */}
            <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Haftalik Faoliyat (Soatlar)</h3>
                <div className="h-64 w-full" style={{ minHeight: '256px' }}>
                    <SvgBarChart
                        data={weeklyData}
                        xKey="name"
                        series={[{ dataKey: 'hours', fill: '#6366f1' }]}
                        height={240}
                        unit="soat"
                    />
                </div>
            </div>

            {/* 2. Hourly Productivity */}
            <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Unumli Soatlar (Jami Daqiqalar)</h3>
                <div className="h-64 w-full" style={{ minHeight: '256px' }}>
                    <SvgLineChart
                        data={hourlyData}
                        xKey="name"
                        series={[{ dataKey: 'minutes', stroke: '#8b5cf6' }]}
                        height={240}
                        showArea={true}
                        unit="daq"
                    />
                </div>
            </div>
        </div>
    );
});

export default ActivityAnalytics;
