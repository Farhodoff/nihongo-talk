import React, { useMemo, memo } from 'react';
import { Bar, CartesianGrid, Cell, Legend, Pie, PieChart, BarChart as ReBarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Smile, TrendingUp } from 'lucide-react';
import { Subject, StudySession, Flashcard } from '../../types';
import { calculateMasteryScore } from '../../utils/analytics';

interface SubjectAnalyticsProps {
    subjects: Subject[];
    sessions: StudySession[];
    flashcards: Flashcard[];
}

const SubjectAnalytics: React.FC<SubjectAnalyticsProps> = memo(({ subjects, sessions, flashcards }) => {
    // Subject Mood Data
    const subjectMoodData = useMemo(() => {
        const data: { name: string; mood: number; color: string }[] = [];
        subjects.forEach(subject => {
            const subjectSessions = sessions.filter(s => s.subjectId === subject.id && s.moodAfter);
            if (subjectSessions.length > 0) {
                const totalMood = subjectSessions.reduce((acc, s) => acc + (s.moodAfter || 0), 0);
                const avgMood = totalMood / subjectSessions.length;
                data.push({
                    name: subject.name,
                    mood: Number(avgMood.toFixed(1)),
                    color: subject.color
                });
            }
        });
        return data;
    }, [subjects, sessions]);

    // Subject Mastery Data
    const subjectMasteryData = useMemo(() => {
        const data: { name: string; score: number; color: string }[] = [];
        subjects.forEach(subject => {
            const subjectCards = flashcards.filter(c => c.subjectId === subject.id);
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
    }, [subjects, flashcards]);

    // Subject Distribution Data
    const subjectDistributionData = useMemo(() => {
        const data: { name: string; value: number; color: string }[] = [];
        subjects.forEach(subject => {
            const subjectSessions = sessions.filter(s => s.subjectId === subject.id);
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
    }, [subjects, sessions]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Subject Mood Analysis */}
            <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <Smile size={20} className="text-yellow-500" /> Fanlar bo'yicha O'rtacha Kayfiyat
                </h3>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                        <ReBarChart data={subjectMoodData} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
                            <XAxis type="number" domain={[0, 5]} hide />
                            <YAxis dataKey="name" type="category" width={100} axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                            <Tooltip cursor={{ fill: 'transparent' }} />
                            <Bar dataKey="mood" radius={[0, 4, 4, 0]} barSize={20}>
                                {subjectMoodData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </ReBarChart>
                    </ResponsiveContainer>
                </div>
                <p className="text-xs text-center text-gray-400 mt-2">Shkala: 1 (Yomon) - 5 (Zo'r)</p>
            </div>

            {/* Subject Mastery */}
            <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <TrendingUp size={20} className="text-indigo-500" /> Fanlar O'zlashtirish Darajasi (%)
                </h3>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                        <ReBarChart data={subjectMasteryData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} domain={[0, 100]} />
                            <Tooltip cursor={{ fill: 'transparent' }} />
                            <Bar dataKey="score" radius={[6, 6, 0, 0]}>
                                {subjectMasteryData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </ReBarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Subject Distribution */}
            <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 lg:col-span-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Fanlar bo'yicha Jami Vaqt</h3>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                        <PieChart>
                            <Pie
                                data={subjectDistributionData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {subjectDistributionData.map((entry, index) => (
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
    );
});

export default SubjectAnalytics;
