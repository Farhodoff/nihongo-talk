import React, { useMemo, memo } from 'react';
import { Bar, CartesianGrid, Cell, Legend, Pie, PieChart, BarChart as ReBarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { TrendingUp } from 'lucide-react';
import { Flashcard } from '../../types';

interface FlashcardAnalyticsProps {
    flashcards: Flashcard[];
}

const FlashcardAnalytics: React.FC<FlashcardAnalyticsProps> = memo(({ flashcards }) => {
    // Daily Flashcard Reviews (Last 7 days)
    const dailyReviewsData = useMemo(() => {
        const days = ['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Juma', 'Shan'];
        const data = days.map((name, index) => ({ name, cards: 0, dayIndex: index }));

        const now = new Date();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(now.getDate() - 7);

        flashcards.forEach(card => {
            if (card.repetitions > 0) {
                const lastReview = new Date(card.nextReviewDate); // Proxy logic
                if (lastReview >= oneWeekAgo && lastReview <= now) {
                    const dayIndex = lastReview.getDay();
                    data[dayIndex].cards += 1;
                }
            }
        });

        return data;
    }, [flashcards]);

    // Flashcard Status Distribution
    const statusData = useMemo(() => {
        const statuses = {
            mastered: 0,  // repetitions >= 10
            learning: 0,  // 3 <= repetitions < 10
            new: 0        // repetitions < 3
        };

        flashcards.forEach(card => {
            if (card.repetitions >= 10) {
                statuses.mastered++;
            } else if (card.repetitions >= 3) {
                statuses.learning++;
            } else {
                statuses.new++;
            }
        });

        return [
            { name: 'Yodlangan', value: statuses.mastered, color: '#10b981' },
            { name: "O'rganilmoqda", value: statuses.learning, color: '#f59e0b' },
            { name: 'Yangi/Qiyin', value: statuses.new, color: '#ef4444' }
        ].filter(item => item.value > 0);
    }, [flashcards]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Daily Reviews */}
            <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <TrendingUp size={20} className="text-purple-500" /> Kunlik Fleshkartalar
                </h3>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                        <ReBarChart data={dailyReviewsData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                            <Tooltip cursor={{ fill: 'transparent' }} />
                            <Bar dataKey="cards" fill="#a855f7" radius={[6, 6, 0, 0]} />
                        </ReBarChart>
                    </ResponsiveContainer>
                </div>
                <p className="text-xs text-center text-gray-400 mt-2">Oxirgi 7 kunda ko'rib chiqilgan kartalar</p>
            </div>

            {/* Status Distribution */}
            <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Fleshkartalar Holati</h3>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                        <PieChart>
                            <Pie
                                data={statusData}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={80}
                                paddingAngle={8}
                                dataKey="value"
                            >
                                {statusData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4 text-xs text-center">
                    <div>
                        <div className="w-3 h-3 rounded-full bg-green-500 mx-auto mb-1"></div>
                        <p className="text-gray-600 dark:text-gray-400">Yodlangan (10+)</p>
                    </div>
                    <div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mx-auto mb-1"></div>
                        <p className="text-gray-600 dark:text-gray-400">O'rganilmoqda (3-9)</p>
                    </div>
                    <div>
                        <div className="w-3 h-3 rounded-full bg-red-500 mx-auto mb-1"></div>
                        <p className="text-gray-600 dark:text-gray-400">Yangi (&lt;3)</p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default FlashcardAnalytics;
