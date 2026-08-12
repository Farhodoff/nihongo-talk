import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { ScenarioService } from '../../services/ScenarioService';
import { Mic, Search, RefreshCw, Award, Clock, User, Calendar, TrendingUp } from 'lucide-react';

export interface SpeakingSessionRecord {
    id: string;
    user_email?: string;
    persona_title: string;
    fluency_score: number;
    pronunciation_score: number;
    grammar_score: number;
    vocabulary_score: number;
    duration_seconds: number;
    feedback?: string;
    created_at: string;
}

export interface UserSpeechAggregation {
    email: string;
    totalSessions: number;
    todaySessions: number;
    todayAvgScore: number;
    weeklyAvgScore: number;
    overallAvgScore: number;
    lastTopic: string;
    lastDate: string;
}

export const AdminSpeechAnalytics: React.FC = () => {
    const [sessions, setSessions] = useState<SpeakingSessionRecord[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState<'users' | 'history'>('users');

    const fetchSessions = async () => {
        setIsLoading(true);
        let list: SpeakingSessionRecord[] = [];

        try {
            // 1. Fetch from Supabase coach_sessions
            const { data, error } = await supabase
                .from('coach_sessions')
                .select('*')
                .order('created_at', { ascending: false });

            if (!error && data && data.length > 0) {
                list = data.map(item => ({
                    id: item.id,
                    user_email: item.user_email || item.profiles?.email || 'Student',
                    persona_title: item.persona_title || 'Yaponcha Suhbat',
                    fluency_score: item.fluency_score || 0,
                    pronunciation_score: item.pronunciation_score || item.fluency_score || 0,
                    grammar_score: item.grammar_score || 75,
                    vocabulary_score: item.vocabulary_score || 75,
                    duration_seconds: item.duration_seconds || 60,
                    feedback: item.feedback || '',
                    created_at: item.created_at || new Date().toISOString()
                }));
            }
        } catch (err) {
            console.warn('Supabase coach_sessions fetch error:', err);
        }

        // 2. Fetch local scenario history records
        try {
            const scenarioHistory = await ScenarioService.getScenarioHistory();
            for (const item of scenarioHistory) {
                if (!list.some(l => l.id === item.id)) {
                    list.push({
                        id: item.id,
                        user_email: 'Student (Local)',
                        persona_title: item.scenario_title,
                        fluency_score: item.fluency_score,
                        pronunciation_score: item.pronunciation_score,
                        grammar_score: item.grammar_score,
                        vocabulary_score: item.vocabulary_score,
                        duration_seconds: item.duration_seconds,
                        feedback: item.ai_feedback,
                        created_at: item.created_at
                    });
                }
            }
        } catch (e) {
            console.error(e);
        }

        // Sort descending by created_at
        list.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        setSessions(list);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchSessions();
    }, []);

    // Summary & Date Filtering calculations
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    const todaySessions = sessions.filter(s => s.created_at && s.created_at.startsWith(todayStr));
    const weeklySessions = sessions.filter(s => s.created_at && new Date(s.created_at) >= sevenDaysAgo);

    const getSessionScore = (s: SpeakingSessionRecord) =>
        Math.round((s.pronunciation_score + s.fluency_score + s.grammar_score + s.vocabulary_score) / 4);

    const todayAvgScore = todaySessions.length > 0
        ? Math.round(todaySessions.reduce((acc, curr) => acc + getSessionScore(curr), 0) / todaySessions.length)
        : 0;

    const weeklyAvgScore = weeklySessions.length > 0
        ? Math.round(weeklySessions.reduce((acc, curr) => acc + getSessionScore(curr), 0) / weeklySessions.length)
        : 0;

    const totalSpokenMins = Math.round(sessions.reduce((acc, curr) => acc + curr.duration_seconds, 0) / 60);

    // Grouping by User Email for User Analytics Aggregation
    const userAggregationsMap = new Map<string, SpeakingSessionRecord[]>();
    for (const s of sessions) {
        const email = s.user_email || 'Student';
        if (!userAggregationsMap.has(email)) {
            userAggregationsMap.set(email, []);
        }
        userAggregationsMap.get(email)!.push(s);
    }

    const userAggregations: UserSpeechAggregation[] = Array.from(userAggregationsMap.entries()).map(([email, userList]) => {
        const userTodayList = userList.filter(s => s.created_at && s.created_at.startsWith(todayStr));
        const userWeeklyList = userList.filter(s => s.created_at && new Date(s.created_at) >= sevenDaysAgo);

        const uTodayAvg = userTodayList.length > 0
            ? Math.round(userTodayList.reduce((acc, curr) => acc + getSessionScore(curr), 0) / userTodayList.length)
            : 0;

        const uWeeklyAvg = userWeeklyList.length > 0
            ? Math.round(userWeeklyList.reduce((acc, curr) => acc + getSessionScore(curr), 0) / userWeeklyList.length)
            : 0;

        const uOverallAvg = Math.round(userList.reduce((acc, curr) => acc + getSessionScore(curr), 0) / userList.length);

        return {
            email,
            totalSessions: userList.length,
            todaySessions: userTodayList.length,
            todayAvgScore: uTodayAvg,
            weeklyAvgScore: uWeeklyAvg,
            overallAvgScore: uOverallAvg,
            lastTopic: userList[0]?.persona_title || 'Noma\'lum',
            lastDate: userList[0]?.created_at || ''
        };
    });

    const filteredUsers = userAggregations.filter(u =>
        u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.lastTopic.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredSessions = sessions.filter(s =>
        s.persona_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.user_email && s.user_email.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="space-y-6 animate-in fade-in">
            {/* Title Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h3 className="text-base font-extrabold text-foreground flex items-center gap-2">
                        <Mic size={18} className="text-indigo-500" />
                        <span>🎤 Foydalanuvchilar Speech va Kunlik/Haftalik Analytics (Admin)</span>
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                        Kunlik va haftalik suhbat foizlari (%), seanslar chastotasi va foydalanuvchilar suhbat tarixi.
                    </p>
                </div>

                <button
                    onClick={fetchSessions}
                    className="px-3.5 py-1.5 bg-muted hover:bg-muted/80 text-foreground rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors self-start sm:self-auto"
                >
                    <RefreshCw size={13} className={isLoading ? 'animate-spin' : ''} />
                    <span>Yangilash</span>
                </button>
            </div>

            {/* Top Stat Cards: Daily vs Weekly % & Frequency */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-card border border-border rounded-2xl p-4 flex items-center gap-3 shadow-sm">
                    <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-xl">
                        <Calendar size={20} />
                    </div>
                    <div>
                        <div className="text-xl font-black text-indigo-500">{todaySessions.length} seans</div>
                        <div className="text-[11px] text-muted-foreground font-medium">Bugungi Suhbatlar</div>
                    </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-4 flex items-center gap-3 shadow-sm">
                    <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl">
                        <Award size={20} />
                    </div>
                    <div>
                        <div className="text-xl font-black text-emerald-500">{todayAvgScore}%</div>
                        <div className="text-[11px] text-muted-foreground font-medium">Kunlik O'rtacha Foiz</div>
                    </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-4 flex items-center gap-3 shadow-sm">
                    <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl">
                        <TrendingUp size={20} />
                    </div>
                    <div>
                        <div className="text-xl font-black text-purple-500">{weeklyAvgScore}%</div>
                        <div className="text-[11px] text-muted-foreground font-medium">Haftalik O'rtacha Foiz</div>
                    </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-4 flex items-center gap-3 shadow-sm">
                    <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl">
                        <Clock size={20} />
                    </div>
                    <div>
                        <div className="text-xl font-black text-amber-500">{totalSpokenMins} min</div>
                        <div className="text-[11px] text-muted-foreground font-medium">Jami Gapirilgan Vaqt</div>
                    </div>
                </div>
            </div>

            {/* View Filter Tabs & Search */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-3">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setActiveTab('users')}
                        className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all border ${
                            activeTab === 'users'
                                ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                                : 'bg-card text-muted-foreground border-border hover:bg-muted'
                        }`}
                    >
                        👥 Foydalanuvchilar Kesimida ({userAggregations.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('history')}
                        className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all border ${
                            activeTab === 'history'
                                ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                                : 'bg-card text-muted-foreground border-border hover:bg-muted'
                        }`}
                    >
                        📜 Barcha Muloqot Tarixi ({sessions.length})
                    </button>
                </div>

                <div className="relative w-full sm:w-72">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Qidiruv..."
                        className="w-full pl-9 pr-4 py-2 bg-muted/50 border border-border rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                </div>
            </div>

            {/* TAB 1: User Analytics Aggregation (Daily & Weekly Foiz %) */}
            {activeTab === 'users' && (
                <div>
                    {isLoading ? (
                        <div className="py-12 text-center text-xs text-muted-foreground">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-indigo-600 border-t-transparent mb-2" />
                            <p>Analytics yuklanmoqda...</p>
                        </div>
                    ) : filteredUsers.length === 0 ? (
                        <div className="py-12 text-center text-xs text-muted-foreground bg-card border border-border rounded-2xl">
                            Foydalanuvchilar statistikasi topilmadi.
                        </div>
                    ) : (
                        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full text-xs text-left">
                                    <thead className="bg-muted/60 text-[11px] uppercase text-muted-foreground font-bold border-b border-border">
                                        <tr>
                                            <th className="p-3.5">Foydalanuvchi Emaili</th>
                                            <th className="p-3.5 text-center">Jami Seanslar</th>
                                            <th className="p-3.5 text-center">Bugungi Seanslar</th>
                                            <th className="p-3.5 text-center">Kunlik Foiz %</th>
                                            <th className="p-3.5 text-center">Haftalik Foiz %</th>
                                            <th className="p-3.5 text-center">Umumiy Ball %</th>
                                            <th className="p-3.5 text-right">Oxirgi Muloqot</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/60">
                                        {filteredUsers.map(user => (
                                            <tr key={user.email} className="hover:bg-muted/30 transition-colors">
                                                <td className="p-3.5">
                                                    <div className="flex items-center gap-2 font-bold text-foreground">
                                                        <User size={14} className="text-indigo-500" />
                                                        <span className="truncate max-w-[180px]">{user.email}</span>
                                                    </div>
                                                </td>
                                                <td className="p-3.5 text-center font-mono font-bold text-foreground">
                                                    {user.totalSessions} ta
                                                </td>
                                                <td className="p-3.5 text-center font-mono font-bold text-indigo-500">
                                                    {user.todaySessions > 0 ? (
                                                        <span className="px-2 py-0.5 bg-indigo-500/10 rounded-md">
                                                            {user.todaySessions} marta
                                                        </span>
                                                    ) : (
                                                        <span className="text-muted-foreground">0</span>
                                                    )}
                                                </td>
                                                <td className="p-3.5 text-center font-mono font-bold">
                                                    {user.todayAvgScore > 0 ? (
                                                        <span className={`px-2 py-0.5 rounded-md ${
                                                            user.todayAvgScore >= 80 ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                                                        }`}>
                                                            {user.todayAvgScore}%
                                                        </span>
                                                    ) : (
                                                        <span className="text-muted-foreground">-</span>
                                                    )}
                                                </td>
                                                <td className="p-3.5 text-center font-mono font-bold">
                                                    {user.weeklyAvgScore > 0 ? (
                                                        <span className={`px-2 py-0.5 rounded-md ${
                                                            user.weeklyAvgScore >= 80 ? 'bg-purple-500/10 text-purple-500' : 'bg-indigo-500/10 text-indigo-500'
                                                        }`}>
                                                            {user.weeklyAvgScore}%
                                                        </span>
                                                    ) : (
                                                        <span className="text-muted-foreground">-</span>
                                                    )}
                                                </td>
                                                <td className="p-3.5 text-center font-mono font-bold text-emerald-500">
                                                    {user.overallAvgScore}%
                                                </td>
                                                <td className="p-3.5 text-right text-[11px] text-muted-foreground">
                                                    <div className="font-bold text-foreground truncate max-w-[120px] ml-auto">
                                                        {user.lastTopic}
                                                    </div>
                                                    <div>
                                                        {user.lastDate ? new Date(user.lastDate).toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-'}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* TAB 2: All Speech Sessions History Log */}
            {activeTab === 'history' && (
                <div>
                    {isLoading ? (
                        <div className="py-12 text-center text-xs text-muted-foreground">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-indigo-600 border-t-transparent mb-2" />
                            <p>Muloqot tarixi yuklanmoqda...</p>
                        </div>
                    ) : filteredSessions.length === 0 ? (
                        <div className="py-12 text-center text-xs text-muted-foreground bg-card border border-border rounded-2xl">
                            Talaffuz va suhbat natijalari topilmadi.
                        </div>
                    ) : (
                        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full text-xs text-left">
                                    <thead className="bg-muted/60 text-[11px] uppercase text-muted-foreground font-bold border-b border-border">
                                        <tr>
                                            <th className="p-3.5">Foydalanuvchi</th>
                                            <th className="p-3.5">Mavzu / Scenario</th>
                                            <th className="p-3.5 text-center">Talaffuz</th>
                                            <th className="p-3.5 text-center">Silliqlik</th>
                                            <th className="p-3.5 text-center">Grammatika</th>
                                            <th className="p-3.5 text-center">Lug'at</th>
                                            <th className="p-3.5 text-center">Vaqt</th>
                                            <th className="p-3.5 text-right">Sana</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/60">
                                        {filteredSessions.map(item => (
                                            <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                                                <td className="p-3.5">
                                                    <div className="flex items-center gap-2 font-medium text-foreground">
                                                        <User size={13} className="text-muted-foreground" />
                                                        <span className="truncate max-w-[140px]">{item.user_email}</span>
                                                    </div>
                                                </td>
                                                <td className="p-3.5 font-bold text-foreground">
                                                    {item.persona_title}
                                                </td>
                                                <td className="p-3.5 text-center font-mono font-bold text-indigo-500">
                                                    {item.pronunciation_score}%
                                                </td>
                                                <td className="p-3.5 text-center font-mono font-bold text-emerald-500">
                                                    {item.fluency_score}%
                                                </td>
                                                <td className="p-3.5 text-center font-mono font-bold text-purple-500">
                                                    {item.grammar_score}%
                                                </td>
                                                <td className="p-3.5 text-center font-mono font-bold text-amber-500">
                                                    {item.vocabulary_score}%
                                                </td>
                                                <td className="p-3.5 text-center text-muted-foreground">
                                                    {Math.round(item.duration_seconds / 60)} min ({item.duration_seconds}s)
                                                </td>
                                                <td className="p-3.5 text-right text-[11px] text-muted-foreground">
                                                    {new Date(item.created_at).toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
