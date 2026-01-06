import { Clock, Flame, Smile, TrendingUp } from 'lucide-react';
import React from 'react';
import { Bar, CartesianGrid, Cell, Legend, Pie, PieChart, BarChart as ReBarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import SmartInsight from '../components/SmartInsight';
import { useStudyData } from '../context/StudyPlannerContext';
import { calculateMasteryScore } from '../utils/analytics';

const ProgressPage: React.FC = () => {
    const { sessions, subjects, tasks, settings, flashcards } = useStudyData();

    // 1. Weekly Activity Data
    const getWeeklyData = () => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const data = days.map(day => ({ name: day, hours: 0 }));

        const now = new Date();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(now.getDate() - 7);

        sessions.forEach(session => {
            const date = new Date(session.start_time);
            if (date >= oneWeekAgo) {
                const dayIndex = date.getDay();
                data[dayIndex].hours += (session.duration / 60);
            }
        });

        // Round hours
        return data.map(d => ({ ...d, hours: Number(d.hours.toFixed(1)) }));
    };

    // 2. Subject Distribution Data
    const getSubjectData = () => {
        const data: any[] = [];
        subjects.forEach(subject => {
            const subjectSessions = sessions.filter(s => s.subject_id === subject.id);
            const totalMinutes = subjectSessions.reduce((acc, s) => acc + s.duration, 0);
            if (totalMinutes > 0) {
                data.push({
                    name: subject.name,
                    value: totalMinutes,
                    color: subject.color
                });
            }
        });
        return data;
    };

    // 3. Hourly Productivity Data
    const getHourlyData = () => {
        const hours = Array.from({ length: 24 }, (_, i) => ({ name: i, value: 0 }));

        sessions.forEach(session => {
            const date = new Date(session.start_time);
            const hour = date.getHours();
            hours[hour].value += session.duration; // Total minutes studied at this hour
        });

        return hours.map(h => ({
            name: `${h.name}:00`,
            minutes: h.value
        }));
    };

    // 4. Subject Mood Data
    const getSubjectMoodData = () => {
        const data: any[] = [];
        subjects.forEach(subject => {
            const subjectSessions = sessions.filter(s => s.subject_id === subject.id && s.mood_after);
            if (subjectSessions.length > 0) {
                const totalMood = subjectSessions.reduce((acc, s) => acc + (s.mood_after || 0), 0);
                const avgMood = totalMood / subjectSessions.length;
                data.push({
                    name: subject.name,
                    mood: Number(avgMood.toFixed(1)),
                    color: subject.color
                });
            }
        });
        return data;
    };

    // 5. Subject Mastery Data
    const getSubjectMasteryData = () => {
        const data: any[] = [];
        subjects.forEach(subject => {
            const subjectCards = flashcards.filter(c => c.subject_id === subject.id);
            if (subjectCards.length > 0) {
                const score = calculateMasteryScore(subjectCards);
                data.push({
                    name: subject.name,
                    score: score,
                    color: subject.color
                });
            }
        });
        return data;
    };

    const totalHours = (sessions.reduce((acc, s) => acc + s.duration, 0) / 60).toFixed(1);
    const completedTasks = tasks.filter(t => t.completed).length;

    return (
        <div className="pb-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Analitika</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Jarayon va tahlillarni kuzatib boring.</p>
                </div>
            </div>

            <SmartInsight />

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white dark:bg-[#1f2937] p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-start mb-2">
                        <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600 dark:text-indigo-400">
                            <Clock size={20} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{totalHours}s</h3>
                    <p className="text-sm text-gray-500">Jami O'qish Vaqti</p>
                </div>
                <div className="bg-white dark:bg-[#1f2937] p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-start mb-2">
                        <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-600 dark:text-green-400">
                            <CheckCircle2 size={20} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{completedTasks}</h3>
                    <p className="text-sm text-gray-500">Bajarilgan Vazifalar</p>
                </div>
                <div className="bg-white dark:bg-[#1f2937] p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-start mb-2">
                        <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-orange-600 dark:text-orange-400">
                            <Flame size={20} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{settings.currentStreak} Kun</h3>
                    <p className="text-sm text-gray-500">Joriy Streak</p>
                </div>
                <div className="bg-white dark:bg-[#1f2937] p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-start mb-2">
                        <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-yellow-600 dark:text-yellow-400">
                            <TrendingUp size={20} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Daraja {settings.level}</h3>
                    <p className="text-sm text-gray-500">Jami XP: {settings.totalXp}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* 1. Weekly Activity */}
                <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Haftalik Faoliyat (Soatlar)</h3>
                    <div className="h-64 w-full" style={{ minHeight: '256px' }}>
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                            <ReBarChart data={getWeeklyData()}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Bar dataKey="hours" fill="#6366f1" radius={[6, 6, 0, 0]} />
                            </ReBarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* 2. Hourly Productivity (New) */}
                <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Unumli Soatlar (Jami Daqiqalar)</h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                            <ReBarChart data={getHourlyData()}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} interval={3} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                                <Tooltip cursor={{ fill: 'transparent' }} />
                                <Bar dataKey="minutes" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                            </ReBarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* 3. Subject Mood Analysis (New) */}
                <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <Smile size={20} className="text-yellow-500" /> Fanlar bo'yicha O'rtacha Kayfiyat
                    </h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                            <ReBarChart data={getSubjectMoodData()} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
                                <XAxis type="number" domain={[0, 5]} hide />
                                <YAxis dataKey="name" type="category" width={100} axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                                <Tooltip cursor={{ fill: 'transparent' }} />
                                <Bar dataKey="mood" radius={[0, 4, 4, 0]} barSize={20}>
                                    {getSubjectMoodData().map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </ReBarChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="text-xs text-center text-gray-400 mt-2">Shkala: 1 (Yomon) - 5 (Zo'r)</p>
                </div>

                {/* 4. Subject Mastery (New) */}
                <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <TrendingUp size={20} className="text-indigo-500" /> Fanlar O'zlashtirish Darajasi (%)
                    </h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                            <ReBarChart data={getSubjectMasteryData()}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} domain={[0, 100]} />
                                <Tooltip cursor={{ fill: 'transparent' }} />
                                <Bar dataKey="score" radius={[6, 6, 0, 0]}>
                                    {getSubjectMasteryData().map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </ReBarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* 5. Subject Distribution (Renumbered) */}
                <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Fanlar bo'yicha Jami Vaqt</h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                            <PieChart>
                                <Pie
                                    data={getSubjectData()}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {getSubjectData().map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper for icon
import { CheckCircle2 } from 'lucide-react';

export default ProgressPage;
