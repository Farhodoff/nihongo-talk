import React, { useState, useEffect } from 'react';
import { HistoryService, SpeakingSessionItem } from '../../services/HistoryService';
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { History, Mic, Clock, MessageSquare, Zap, BarChart2 } from 'lucide-react';

export const CoachProgressDashboard: React.FC = () => {
    const [history, setHistory] = useState<SpeakingSessionItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'score' | 'duration'>('score');

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
            Pronunciation: item.pronunciationScore || 7.0,
            DurationMins: Math.max(1, Math.round(item.durationSeconds / 60))
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

    // AI Consistency Score (0 - 100%)
    const consistencyScore = history.length === 0 
        ? 0 
        : Math.min(100, Math.round((history.length * 15) + (totalMins * 1.5)));

    const getConsistencyBadge = (score: number) => {
        if (score >= 80) return { label: '🔥 Master Consistency', color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' };
        if (score >= 50) return { label: '⚡ Yaxshi Sur\'at', color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20' };
        return { label: '🌱 Boshlang\'ich Mashq', color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' };
    };

    const consistencyBadge = getConsistencyBadge(consistencyScore);

    return (
        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-xl">
                        <Mic size={20} />
                    </div>
                    <div>
                        <h3 className="text-sm font-extrabold text-foreground">Speaking Coach & AI Analytics</h3>
                        <p className="text-[10px] text-muted-foreground mt-0.5">Sizning ovozli muloqot va talaffuz o'sish ko'rsatkichlaringiz.</p>
                    </div>
                </div>

                <div className="flex items-center gap-1 bg-muted/60 p-1 rounded-xl text-xs font-bold">
                    <button
                        onClick={() => setActiveTab('score')}
                        className={`px-3 py-1 rounded-lg transition-all ${
                            activeTab === 'score' 
                            ? 'bg-card text-foreground shadow-sm' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        Ballar
                    </button>
                    <button
                        onClick={() => setActiveTab('duration')}
                        className={`px-3 py-1 rounded-lg transition-all ${
                            activeTab === 'duration' 
                            ? 'bg-card text-foreground shadow-sm' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        Vaqt (Daqiqalar)
                    </button>
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
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
                        <div className="p-3 bg-emerald-500/5 border border-emerald-500/15 rounded-2xl flex flex-col justify-center items-center">
                            <span className="text-[9px] text-muted-foreground font-bold uppercase block flex items-center gap-1">
                                <Zap size={12} className="text-emerald-500" /> AI Consistency
                            </span>
                            <span className="text-base font-black text-emerald-500">{consistencyScore}%</span>
                        </div>
                    </div>

                    {/* AI Consistency Bar */}
                    <div className="bg-muted/40 border border-border p-4 rounded-2xl space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold">
                            <span className="flex items-center gap-1.5 text-foreground">
                                <Zap size={14} className="text-emerald-500 animate-pulse" />
                                AI Consistency Index (Barqarorlik ko'rsatkichi)
                            </span>
                            <span className={`text-[10px] px-2.5 py-0.5 rounded-full border ${consistencyBadge.color}`}>
                                {consistencyBadge.label}
                            </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                            <div 
                                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 h-2.5 rounded-full transition-all duration-500"
                                style={{ width: `${consistencyScore}%` }}
                            />
                        </div>
                    </div>

                    {/* Progression Chart */}
                    <div className="space-y-2">
                        <h4 className="text-[10px] font-extrabold uppercase text-muted-foreground tracking-wider flex items-center gap-1">
                            {activeTab === 'score' ? <History size={14} /> : <BarChart2 size={14} />}
                            {activeTab === 'score' ? "O'sish Dinamikasi (Fluency & Pronunciation)" : "Kunlik O'qish Daqiqalari (Study Duration)"}
                        </h4>
                        <div className="h-48 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                {activeTab === 'score' ? (
                                    <LineChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                                        <XAxis dataKey="date" stroke="var(--muted-foreground)" fontSize={9} tickLine={false} />
                                        <YAxis domain={[4.0, 9.0]} ticks={[4.0, 5.5, 7.0, 8.5, 9.0]} stroke="var(--muted-foreground)" fontSize={9} tickLine={false} />
                                        <Tooltip contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }} />
                                        <Legend wrapperStyle={{ fontSize: 9 }} />
                                        <Line type="monotone" dataKey="Fluency" stroke="#6366f1" strokeWidth={2.5} dot={{ r: 3 }} />
                                        <Line type="monotone" dataKey="Pronunciation" stroke="#f43f5e" strokeWidth={2.5} dot={{ r: 3 }} />
                                    </LineChart>
                                ) : (
                                    <BarChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                                        <XAxis dataKey="date" stroke="var(--muted-foreground)" fontSize={9} tickLine={false} />
                                        <YAxis stroke="var(--muted-foreground)" fontSize={9} tickLine={false} />
                                        <Tooltip contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }} />
                                        <Bar dataKey="DurationMins" fill="#6366f1" radius={[4, 4, 0, 0]} name="Daqiqalar" />
                                    </BarChart>
                                )}
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
