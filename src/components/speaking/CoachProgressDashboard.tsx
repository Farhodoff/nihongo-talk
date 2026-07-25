import React, { useState, useEffect } from 'react';
import { HistoryService, SpeakingSessionItem } from '../../services/HistoryService';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { History, Mic, Clock, MessageSquare } from 'lucide-react';

export const CoachProgressDashboard: React.FC = () => {
    const [history, setHistory] = useState<SpeakingSessionItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const data = await HistoryService.getSpeakingHistory();
                setHistory(data);
            } catch (e) {
                console.error(e);
            } finally {
                setIsLoading(false);
            }
        };
        fetchHistory();
    }, []);

    // Format chart data
    const chartData = [...history]
        .reverse()
        .map(item => ({
            date: new Date(item.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric' }),
            Fluency: item.fluencyScore,
            Pronunciation: item.pronunciationScore || 7.0
        }));

    // Calculate overall stats
    const averageFluency = history.length > 0 
        ? (history.reduce((acc, curr) => acc + curr.fluencyScore, 0) / history.length).toFixed(1) 
        : '0.0';

    const averagePron = history.length > 0 
        ? (history.reduce((acc, curr) => acc + (curr.pronunciationScore || 7.0), 0) / history.length).toFixed(1) 
        : '0.0';

    const totalDuration = history.reduce((acc, curr) => acc + curr.durationSeconds, 0);
    const totalMins = Math.round(totalDuration / 60);

    return (
        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-6">
            <div className="flex items-center gap-2 border-b border-border pb-3">
                <div className="p-2 bg-indigo-500/10 text-indigo-600 rounded-xl">
                    <Mic size={20} />
                </div>
                <div>
                    <h3 className="text-sm font-extrabold text-foreground">Speaking Coach Analytics</h3>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Sizning ovozli muloqot mashg'ulotlaringiz tahlili va o'sish grafigi.</p>
                </div>
            </div>

            {isLoading ? (
                <div className="py-8 flex flex-col items-center justify-center space-y-2">
                    <div className="w-8 h-8 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
                    <p className="text-[10px] text-muted-foreground">Statistika yuklanmoqda...</p>
                </div>
            ) : history.length === 0 ? (
                <div className="py-8 text-center text-xs text-muted-foreground">
                    Siz hali biror marta Speaking Coach bilan gaplashmadingiz. Sessiyani yakunlagandan keyin statistika shu yerda ko'rinadi!
                </div>
            ) : (
                <div className="space-y-6">
                    {/* Stats Cards Row */}
                    <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="p-3 bg-indigo-500/5 border border-indigo-500/15 rounded-2xl">
                            <span className="text-[9px] text-muted-foreground font-bold uppercase block">Avg Fluency</span>
                            <span className="text-base font-black text-indigo-500">{averageFluency}</span>
                        </div>
                        <div className="p-3 bg-rose-500/5 border border-rose-500/15 rounded-2xl">
                            <span className="text-[9px] text-muted-foreground font-bold uppercase block">Avg Pronunciation</span>
                            <span className="text-base font-black text-rose-500">{averagePron}</span>
                        </div>
                        <div className="p-3 bg-amber-500/5 border border-amber-500/15 rounded-2xl">
                            <span className="text-[9px] text-muted-foreground font-bold uppercase block">Muloqot vaqti</span>
                            <span className="text-base font-black text-amber-500 flex items-center justify-center gap-1">
                                <Clock size={14} />
                                {totalMins} daqiqa
                            </span>
                        </div>
                    </div>

                    {/* Progression Chart */}
                    <div className="space-y-2">
                        <h4 className="text-[10px] font-extrabold uppercase text-muted-foreground tracking-wider flex items-center gap-1">
                            <History size={14} /> O'sish Dinamikasi
                        </h4>
                        <div className="h-44 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                                    <XAxis dataKey="date" stroke="var(--muted-foreground)" fontSize={9} tickLine={false} />
                                    <YAxis domain={[4.0, 9.0]} ticks={[4.0, 5.5, 7.0, 8.5, 9.0]} stroke="var(--muted-foreground)" fontSize={9} tickLine={false} />
                                    <Tooltip contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }} />
                                    <Legend wrapperStyle={{ fontSize: 9 }} />
                                    <Line type="monotone" dataKey="Fluency" stroke="#6366f1" strokeWidth={2.5} dot={{ r: 3 }} />
                                    <Line type="monotone" dataKey="Pronunciation" stroke="#f43f5e" strokeWidth={2.5} dot={{ r: 3 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Session Logs / Previous sessions */}
                    <div className="space-y-2">
                        <h4 className="text-[10px] font-extrabold uppercase text-muted-foreground tracking-wider flex items-center gap-1">
                            <MessageSquare size={14} /> Sessiyalar Tarixi
                        </h4>
                        <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                            {history.slice(0, 5).map((item) => (
                                <div key={item.id} className="p-3 bg-muted/40 border border-border rounded-xl flex items-center justify-between text-xs">
                                    <div className="space-y-0.5">
                                        <div className="font-bold text-foreground flex items-center gap-1.5">
                                            <span>Persona: {item.persona}</span>
                                            <span className="text-[9px] text-muted-foreground">({item.language.toUpperCase()})</span>
                                        </div>
                                        <span className="text-[9px] text-muted-foreground">
                                            {new Date(item.createdAt).toLocaleDateString()} · {Math.round(item.durationSeconds / 60)} daq suhbat
                                        </span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="font-black text-indigo-500 bg-indigo-500/10 px-2 py-0.5 rounded text-[10px]">
                                            Fluency {item.fluencyScore.toFixed(1)}
                                        </span>
                                        <span className="font-black text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded text-[10px]">
                                            Pron {item.pronunciationScore ? item.pronunciationScore.toFixed(1) : '7.0'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default CoachProgressDashboard;
