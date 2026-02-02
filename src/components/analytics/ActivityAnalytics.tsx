import React, { useMemo } from 'react';
import { Bar, CartesianGrid, BarChart as ReBarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { StudySession } from '../../types';

interface ActivityAnalyticsProps {
    sessions: StudySession[];
}

const ActivityAnalytics: React.FC<ActivityAnalyticsProps> = ({ sessions }) => {
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
                    <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                        <ReBarChart data={weeklyData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                            <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                            <Bar dataKey="hours" fill="#6366f1" radius={[6, 6, 0, 0]} />
                        </ReBarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* 2. Hourly Productivity */}
            <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Unumli Soatlar (Jami Daqiqalar)</h3>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                        <ReBarChart data={hourlyData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} interval={3} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                            <Tooltip cursor={{ fill: 'transparent' }} />
                            <Bar dataKey="minutes" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                        </ReBarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default ActivityAnalytics;
