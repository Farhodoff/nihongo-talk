import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Mic, Search, RefreshCw, Award, Clock, User, Calendar, TrendingUp, MessageSquareText, X, FileText } from 'lucide-react';

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
    transcript?: Array<{
        role: 'user' | 'assistant';
        content: string;
        timestamp?: string;
        translation?: string;
    }>;
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
    const [selectedTranscriptSession, setSelectedTranscriptSession] = useState<SpeakingSessionRecord | null>(null);

    const fetchSessions = async () => {
        setIsLoading(true);
        let list: SpeakingSessionRecord[] = [];

        try {
            // 1. Fetch profiles to map user_id -> email / full_name for clean display
            const { data: profileData } = await supabase
                .from('profiles')
                .select('id, email, full_name');
            const profileMap = new Map<string, string>();
            if (profileData) {
                profileData.forEach(p => {
                    if (p.id) profileMap.set(p.id, p.email || p.full_name || 'Student');
                });
            }

            // Also check current authenticated user
            try {
                const { data: authData } = await supabase.auth.getUser();
                if (authData?.user?.id && authData?.user?.email) {
                    profileMap.set(authData.user.id, authData.user.email);
                }
            } catch {}

            // 2. Fetch primary speaking_sessions table with transcript JSONB
            const { data: speakData, error: speakErr } = await supabase
                .from('speaking_sessions')
                .select('*')
                .order('created_at', { ascending: false });

            if (!speakErr && speakData && speakData.length > 0) {
                speakData.forEach(item => {
                    list.push({
                        id: item.id,
                        user_email: item.user_email || (item.user_id ? profileMap.get(item.user_id) : undefined) || 'Student',
                        persona_title: item.persona_title || item.topic || 'Speaking Muloqot',
                        fluency_score: Number(item.fluency_score) || 0,
                        pronunciation_score: Number(item.pronunciation_score) || Number(item.fluency_score) || 0,
                        grammar_score: Number(item.grammar_score) || 0,
                        vocabulary_score: Number(item.vocabulary_score) || 0,
                        duration_seconds: Number(item.duration_seconds) || 0,
                        feedback: item.feedback || item.ai_feedback || '',
                        transcript: item.transcript || [],
                        created_at: item.created_at || new Date().toISOString()
                    });
                });
            }

            // 3. Fetch speaking_coach_sessions (standard table used by Speaking Coach)
            const { data: coachSessionsData, error: coachSessionsErr } = await supabase
                .from('speaking_coach_sessions')
                .select('*')
                .order('created_at', { ascending: false });

            if (!coachSessionsErr && coachSessionsData && coachSessionsData.length > 0) {
                for (const item of coachSessionsData) {
                    if (!list.some(l => l.id === item.id)) {
                        list.push({
                            id: item.id,
                            user_email: (item.user_id ? profileMap.get(item.user_id) : undefined) || 'Student',
                            persona_title: item.persona_title || item.persona || 'Speaking Muloqot',
                            fluency_score: Number(item.fluency_score) || 0,
                            pronunciation_score: Number(item.pronunciation_score) || Number(item.fluency_score) || 0,
                            grammar_score: Number(item.grammar_score) || 0,
                            vocabulary_score: Number(item.vocabulary_score) || 0,
                            duration_seconds: Number(item.duration_seconds) || 120,
                            feedback: item.feedback || '',
                            transcript: item.transcript || [],
                            created_at: item.created_at || new Date().toISOString()
                        });
                    }
                }
            }

            // 4. Fetch legacy coach_sessions if present
            const { data: legacyData, error: legacyErr } = await supabase
                .from('coach_sessions')
                .select('*')
                .order('created_at', { ascending: false });

            if (!legacyErr && legacyData && legacyData.length > 0) {
                for (const item of legacyData) {
                    if (!list.some(l => l.id === item.id)) {
                        list.push({
                            id: item.id,
                            user_email: item.user_email || (item.user_id ? profileMap.get(item.user_id) : undefined) || 'Student',
                            persona_title: item.persona_title || 'Yaponcha Muloqot',
                            fluency_score: Number(item.fluency_score) || 0,
                            pronunciation_score: Number(item.pronunciation_score) || Number(item.fluency_score) || 0,
                            grammar_score: Number(item.grammar_score) || 0,
                            vocabulary_score: Number(item.vocabulary_score) || 0,
                            duration_seconds: Number(item.duration_seconds) || 0,
                            feedback: item.feedback || '',
                            created_at: item.created_at || new Date().toISOString()
                        });
                    }
                }
            }

            // 5. Scan LocalStorage for any local speech sessions & auto-sync to DB
            if (typeof window !== 'undefined') {
                try {
                    const localCoachRaw = localStorage.getItem('study_planner_speaking_coach_sessions');
                    if (localCoachRaw) {
                        const parsedCoach = JSON.parse(localCoachRaw);
                        if (Array.isArray(parsedCoach)) {
                            for (const item of parsedCoach) {
                                const sessionId = item.id || `local-coach-${item.createdAt || item.created_at || Date.now()}`;
                                if (!list.some(l => l.id === sessionId)) {
                                    list.push({
                                        id: sessionId,
                                        user_email: item.user_email || (item.user_id ? profileMap.get(item.user_id) : undefined) || 'Siz (Admin / Local)',
                                        persona_title: item.personaTitle || item.persona || 'Speaking Muloqot',
                                        fluency_score: Number(item.fluencyScore || item.fluency_score) || 0,
                                        pronunciation_score: Number(item.pronunciationScore || item.pronunciation_score) || 0,
                                        grammar_score: Number(item.grammarScore || item.grammar_score) || 0,
                                        vocabulary_score: Number(item.vocabularyScore || item.vocabulary_score) || 0,
                                        duration_seconds: Number(item.durationSeconds || item.duration_seconds) || 120,
                                        feedback: item.feedback || '',
                                        transcript: item.transcript || [],
                                        created_at: item.createdAt || item.created_at || new Date().toISOString()
                                    });
                                }
                            }
                        }
                    }

                    // Scan scoped scenario and speaking history keys
                    for (let i = 0; i < localStorage.length; i++) {
                        const k = localStorage.key(i);
                        if (k && (k.startsWith('study_planner_scenario_history_') || k.startsWith('study_planner_speaking_history_') || k.startsWith('study_planner_speaking_coach_sessions_'))) {
                            try {
                                const raw = localStorage.getItem(k);
                                if (raw) {
                                    const parsed = JSON.parse(raw);
                                    if (Array.isArray(parsed)) {
                                        for (const item of parsed) {
                                            const scId = item.id || `local-sc-${item.created_at || item.createdAt || Date.now()}`;
                                            if (!list.some(l => l.id === scId)) {
                                                list.push({
                                                    id: scId,
                                                    user_email: item.user_email || (item.user_id ? profileMap.get(item.user_id) : undefined) || 'Siz (Admin / Local)',
                                                    persona_title: item.scenario_title || item.persona_title || 'Ssenariy Muloqot',
                                                    fluency_score: Number(item.fluency_score || item.fluencyScore) || 0,
                                                    pronunciation_score: Number(item.pronunciation_score || item.pronunciationScore) || 0,
                                                    grammar_score: Number(item.grammar_score || item.grammarScore) || 0,
                                                    vocabulary_score: Number(item.vocabulary_score || item.vocabularyScore) || 0,
                                                    duration_seconds: Number(item.duration_seconds || item.durationSeconds) || 120,
                                                    feedback: item.ai_feedback || item.feedback || '',
                                                    transcript: item.transcript || [],
                                                    created_at: item.created_at || item.createdAt || new Date().toISOString()
                                                });
                                            }
                                        }
                                    }
                                }
                            } catch {}
                        }
                    }
                } catch (localErr) {
                    console.warn('Local storage speech scan notice:', localErr);
                }
            }
        } catch (err) {
            console.warn('Supabase speech analytics fetch notice:', err);
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
                                            <th className="p-3.5 text-center">Matn (Transcript)</th>
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
                                                <td className="p-3.5 text-center">
                                                    <button
                                                        onClick={() => setSelectedTranscriptSession(item)}
                                                        className="px-2.5 py-1 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30 rounded-lg text-[11px] font-extrabold inline-flex items-center gap-1 transition-all"
                                                        title="Suhbat matnini (transcript) ko'rish"
                                                    >
                                                        <MessageSquareText size={12} />
                                                        <span>📜 Matn ({item.transcript?.length || 0})</span>
                                                    </button>
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

            {/* TRANSCRIPT VIEWER MODAL */}
            {selectedTranscriptSession && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
                    <div className="bg-card border border-border rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl animate-in zoom-in-95">
                        {/* Modal Header */}
                        <div className="p-4 sm:p-5 border-b border-border flex items-center justify-between gap-4 bg-muted/30">
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="p-2.5 bg-indigo-500/20 text-indigo-500 rounded-2xl shrink-0">
                                    <FileText size={20} />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-base font-extrabold text-foreground truncate">
                                        📜 Suhbat Tarixi va Matni (Transcript)
                                    </h3>
                                    <p className="text-xs text-muted-foreground truncate">
                                        {selectedTranscriptSession.user_email} • {selectedTranscriptSession.persona_title}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedTranscriptSession(null)}
                                className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Session Overview Stats */}
                        <div className="px-5 py-3 bg-muted/20 border-b border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs">
                            <div className="flex items-center gap-2">
                                <span className="text-muted-foreground font-semibold">O'rtacha Ball:</span>
                                <span className="font-extrabold font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                                    {Math.round((selectedTranscriptSession.fluency_score + selectedTranscriptSession.pronunciation_score + selectedTranscriptSession.grammar_score + selectedTranscriptSession.vocabulary_score) / 4)}%
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-muted-foreground font-semibold">Davomiyligi:</span>
                                <span className="font-extrabold text-foreground">
                                    {selectedTranscriptSession.duration_seconds}s
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-muted-foreground font-semibold">Sana:</span>
                                <span className="text-muted-foreground">
                                    {new Date(selectedTranscriptSession.created_at).toLocaleString()}
                                </span>
                            </div>
                        </div>

                        {/* Chat Messages List */}
                        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
                            {!selectedTranscriptSession.transcript || selectedTranscriptSession.transcript.length === 0 ? (
                                <div className="py-12 text-center text-xs text-muted-foreground">
                                    <MessageSquareText size={24} className="mx-auto mb-2 opacity-50" />
                                    <p>Ushbu seans uchun saqlangan suhbat matni topilmadi.</p>
                                </div>
                            ) : (
                                selectedTranscriptSession.transcript.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                                    >
                                        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-bold mb-1 px-1">
                                            <span>{msg.role === 'user' ? `👤 ${selectedTranscriptSession.user_email}` : `🤖 ${selectedTranscriptSession.persona_title}`}</span>
                                            {msg.timestamp && <span>• {msg.timestamp}</span>}
                                        </div>
                                        <div
                                            className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm font-medium leading-relaxed shadow-sm ${
                                                msg.role === 'user'
                                                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-tr-none'
                                                    : 'bg-muted/80 text-foreground border border-border rounded-tl-none'
                                            }`}
                                        >
                                            <p className="whitespace-pre-wrap">{msg.content}</p>
                                            {msg.translation && (
                                                <div className="mt-2 pt-2 border-t border-white/20 dark:border-border text-xs italic opacity-90">
                                                    🇺🇿 {msg.translation}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}

                            {selectedTranscriptSession.feedback && (
                                <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-xs">
                                    <div className="font-extrabold text-amber-600 dark:text-amber-400 mb-1 flex items-center gap-1.5">
                                        💡 AI Coach Xulosasi & Feedback:
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {selectedTranscriptSession.feedback}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="p-4 border-t border-border flex justify-end bg-muted/30">
                            <button
                                onClick={() => setSelectedTranscriptSession(null)}
                                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-md"
                            >
                                Yopish
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
