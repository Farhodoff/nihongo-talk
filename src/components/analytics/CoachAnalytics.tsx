import React, { useMemo, memo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { CoachSession } from '../../types';
import { Bot, MessageSquare, TrendingUp } from 'lucide-react';

interface CoachAnalyticsProps {
    sessions: CoachSession[];
}

const CoachAnalytics: React.FC<CoachAnalyticsProps> = memo(({ sessions }) => {
    // We want the oldest first for the chart, so reverse the array since it comes newest first
    const chartData = useMemo(() => {
        return [...sessions].reverse().map(s => {
            const date = new Date(s.createdAt);
            return {
                name: `${date.getDate()}/${date.getMonth() + 1}`,
                Fluency: s.fluencyScore,
                Vocabulary: s.vocabularyScore,
                Grammar: s.grammarScore,
                Pronunciation: s.pronunciationScore,
                FullDate: date.toLocaleString()
            };
        });
    }, [sessions]);

    const recentFeedback = useMemo(() => {
        // Just take the top 3 latest sessions that have feedback
        return sessions.filter(s => s.feedback && s.feedback.trim() !== '').slice(0, 3);
    }, [sessions]);

    if (sessions.length === 0) {
        return (
            <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 col-span-full">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                        <Bot size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">AI Coach Natijalari</h3>
                </div>
                <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400">Hali AI Coach bilan suhbat o'tkazmagansiz. Speaking bo'limida mashq qilib ko'ring!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 col-span-full mb-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                    <TrendingUp size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">AI Coach O'sish Grafiklari</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Chart Section */}
                <div className="lg:col-span-2">
                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} vertical={false} />
                                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    labelStyle={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '4px' }}
                                    cursor={{ stroke: '#6366f1', strokeWidth: 1, strokeDasharray: '3 3' }}
                                />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                <Line type="monotone" dataKey="Fluency" stroke="#6366f1" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                                <Line type="monotone" dataKey="Vocabulary" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
                                <Line type="monotone" dataKey="Grammar" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} />
                                <Line type="monotone" dataKey="Pronunciation" stroke="#ec4899" strokeWidth={3} dot={{ r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Feedback Section */}
                <div className="lg:col-span-1 flex flex-col">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                        <MessageSquare size={16} />
                        So'nggi Tavsiyalar
                    </h4>
                    <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                        {recentFeedback.map((session, idx) => (
                            <div key={idx} className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 rounded-md">
                                        {session.personaTitle}
                                    </span>
                                    <span className="text-[10px] text-gray-500">
                                        {new Date(session.createdAt).toLocaleDateString()}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-4">
                                    {session.feedback}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CoachAnalytics;
