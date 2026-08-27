import React, { useEffect, useRef, useState } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { supabase } from '../lib/supabase';
import {
    Users, Loader2, CheckCircle2,
    RefreshCw, Home, Activity, BookOpen,
    Wand2, Search, Mic, MessageSquareText, Clock, AlertTriangle, ShieldCheck
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { isAdminEmail, isSuperAdmin, grantAdminRole, revokeAdminRole } from '../utils/admin';
import { UserNotificationService } from '../services/UserNotificationService';
import { AdminAiCardCleanerModal } from '../components/decks/AdminAiCardCleanerModal';
import { AdminScenarioManager } from '../components/admin/AdminScenarioManager';
import { AdminSpeechAnalytics } from '../components/admin/AdminSpeechAnalytics';
import { AdminDatasetVaultModal } from '../components/admin/AdminDatasetVaultModal';
import { SvgLineChart } from '../components/ui/SvgCharts';
import { toast } from '../hooks/use-toast';

interface UserRecord {
    id: string;
    email: string;
    full_name?: string;
    role?: string;
    created_at: string;
    last_sign_in_at?: string;
}

interface TableFetchStatus {
    rpcUsers: { ok: boolean; count: number; error: string | null };
    profiles: { ok: boolean; count: number; error: string | null };
    studySessions: { ok: boolean; count: number; error: string | null };
    speakingSessions: { ok: boolean; count: number; error: string | null };
    speakingCoachSessions: { ok: boolean; count: number; error: string | null };
    aiCoachSessions: { ok: boolean; count: number; error: string | null };
}

const RoleBadge: React.FC<{ role?: string; email?: string }> = ({ role, email }) => {
    if (isSuperAdmin(email) || role === 'superadmin') {
        return (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-500/10 text-rose-400 border border-rose-500/20 shrink-0">
                👑 Superadmin
            </span>
        );
    }
    if (role === 'admin' || isAdminEmail(email)) {
        return (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                🛡️ Admin
            </span>
        );
    }
    return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shrink-0">
            <CheckCircle2 size={10} /> O'quvchi
        </span>
    );
};

const AdminDashboardPage: React.FC = () => {
    const { user } = useStudyData();
    const navigate = useNavigate();

    const [usersList, setUsersList] = useState<UserRecord[]>(() => {
        if (typeof window !== 'undefined') {
            try {
                const cached = localStorage.getItem('study_planner_admin_users_cache');
                if (cached) return JSON.parse(cached);
            } catch {}
        }
        return [];
    });

    const [dailyStats, setDailyStats] = useState<any[]>(() => {
        if (typeof window !== 'undefined') {
            try {
                const cached = localStorage.getItem('study_planner_admin_stats_cache');
                if (cached) return JSON.parse(cached);
            } catch {}
        }
        return [];
    });

    const [speechRecords, setSpeechRecords] = useState<any[]>([]);

    // Detailed Table Status for Real DB Forensic Audit Bar & UI Error Indicators
    const [tableStatus, setTableStatus] = useState<TableFetchStatus>({
        rpcUsers: { ok: false, count: 0, error: null },
        profiles: { ok: false, count: 0, error: null },
        studySessions: { ok: false, count: 0, error: null },
        speakingSessions: { ok: false, count: 0, error: null },
        speakingCoachSessions: { ok: false, count: 0, error: null },
        aiCoachSessions: { ok: false, count: 0, error: null },
    });

    const [loading, setLoading] = useState(() => usersList.length === 0);
    const [refreshing, setRefreshing] = useState(false);
    const [chartMode, setChartMode] = useState<'dau' | 'duration'>('dau');
    const [userSearchQuery, setUserSearchQuery] = useState('');
    const [activeSection, setActiveSection] = useState<'users' | 'speech' | 'scenarios'>('users');

    const [isCleanerOpen, setIsCleanerOpen] = useState(false);
    const [isVaultOpen, setIsVaultOpen] = useState(false);
    const secretClicksRef = useRef(0);

    const [messageModalUser, setMessageModalUser] = useState<{ id: string; email: string } | null>(null);
    const [msgTitle, setMsgTitle] = useState('🎁 Maxsus Xabar');
    const [msgContent, setMsgContent] = useState('');
    const [sendingMsg, setSendingMsg] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'd') {
                e.preventDefault();
                setIsVaultOpen(prev => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleSecretTitleClick = () => {
        secretClicksRef.current += 1;
        if (secretClicksRef.current >= 5) {
            setIsVaultOpen(true);
            secretClicksRef.current = 0;
        }
    };

    // Global Independent DB Data Fetcher
    const fetchAdminData = async () => {
        if (usersList.length === 0) setLoading(true);

        const newStatus: TableFetchStatus = {
            rpcUsers: { ok: false, count: 0, error: null },
            profiles: { ok: false, count: 0, error: null },
            studySessions: { ok: false, count: 0, error: null },
            speakingSessions: { ok: false, count: 0, error: null },
            speakingCoachSessions: { ok: false, count: 0, error: null },
            aiCoachSessions: { ok: false, count: 0, error: null },
        };

        // 1. INDEPENDENT USERS FETCH (get_admin_all_users RPC -> fallback to profiles table)
        let loadedUsers: UserRecord[] = [];
        try {
            const rpcRes = await supabase.rpc('get_admin_all_users');
            if (rpcRes.error) {
                newStatus.rpcUsers = { ok: false, count: 0, error: rpcRes.error.message };
                // Fallback to profiles table
                const pRes = await supabase.from('profiles').select('*', { count: 'exact' }).limit(500);
                if (pRes.error) {
                    newStatus.profiles = { ok: false, count: 0, error: pRes.error.message };
                } else if (pRes.data) {
                    newStatus.profiles = { ok: true, count: pRes.count || pRes.data.length, error: null };
                    loadedUsers = pRes.data.map((u: any) => ({
                        id: u.id,
                        email: u.email || 'student@nihon-talk.com',
                        full_name: u.full_name || '',
                        role: u.role || (isSuperAdmin(u.email) ? 'superadmin' : 'user'),
                        created_at: u.created_at || new Date().toISOString(),
                        last_sign_in_at: u.updated_at
                    }));
                }
            } else if (rpcRes.data && Array.isArray(rpcRes.data)) {
                newStatus.rpcUsers = { ok: true, count: rpcRes.data.length, error: null };
                loadedUsers = rpcRes.data.map((u: any) => ({
                    id: u.id,
                    email: u.email || 'student@nihon-talk.com',
                    full_name: u.full_name || '',
                    role: u.role || (isSuperAdmin(u.email) ? 'superadmin' : 'user'),
                    created_at: u.created_at || new Date().toISOString(),
                    last_sign_in_at: u.last_sign_in_at || u.last_sign_in
                }));
            }
        } catch (uErr: any) {
            newStatus.rpcUsers = { ok: false, count: 0, error: uErr.message || 'RPC exception' };
        }

        if (loadedUsers.length > 0) {
            setUsersList(loadedUsers);
            try { localStorage.setItem('study_planner_admin_users_cache', JSON.stringify(loadedUsers)); } catch {}
        }

        // Also fetch profiles count independently for debug bar
        try {
            const pRes = await supabase.from('profiles').select('*', { count: 'exact' });
            newStatus.profiles = {
                ok: !pRes.error,
                count: pRes.count ?? (pRes.data ? pRes.data.length : 0),
                error: pRes.error?.message || null
            };
        } catch (pErr: any) {
            newStatus.profiles = { ok: false, count: 0, error: pErr.message || 'Profiles error' };
        }

        // 2. INDEPENDENT SESSION TABLES FETCH
        let speakingData: any[] = [];
        let coachData: any[] = [];
        let aiCoachData: any[] = [];
        let studyData: any[] = [];

        // speaking_sessions query
        try {
            const spRes = await supabase.from('speaking_sessions').select('*', { count: 'exact' }).order('created_at', { ascending: false }).limit(500);
            newStatus.speakingSessions = {
                ok: !spRes.error,
                count: spRes.count ?? (spRes.data ? spRes.data.length : 0),
                error: spRes.error?.message || null
            };
            if (spRes.data && Array.isArray(spRes.data)) speakingData = spRes.data;
        } catch (err: any) {
            newStatus.speakingSessions = { ok: false, count: 0, error: err.message };
        }

        // speaking_coach_sessions query
        try {
            const scRes = await supabase.from('speaking_coach_sessions').select('*', { count: 'exact' }).order('created_at', { ascending: false }).limit(500);
            newStatus.speakingCoachSessions = {
                ok: !scRes.error,
                count: scRes.count ?? (scRes.data ? scRes.data.length : 0),
                error: scRes.error?.message || null
            };
            if (scRes.data && Array.isArray(scRes.data)) coachData = scRes.data;
        } catch (err: any) {
            newStatus.speakingCoachSessions = { ok: false, count: 0, error: err.message };
        }

        // ai_coach_sessions query
        try {
            const aiRes = await supabase.from('ai_coach_sessions').select('*', { count: 'exact' }).order('created_at', { ascending: false }).limit(500);
            newStatus.aiCoachSessions = {
                ok: !aiRes.error,
                count: aiRes.count ?? (aiRes.data ? aiRes.data.length : 0),
                error: aiRes.error?.message || null
            };
            if (aiRes.data && Array.isArray(aiRes.data)) aiCoachData = aiRes.data;
        } catch (err: any) {
            newStatus.aiCoachSessions = { ok: false, count: 0, error: err.message };
        }

        // study_sessions query
        try {
            const stRes = await supabase.from('study_sessions').select('*', { count: 'exact' }).order('created_at', { ascending: false }).limit(500);
            newStatus.studySessions = {
                ok: !stRes.error,
                count: stRes.count ?? (stRes.data ? stRes.data.length : 0),
                error: stRes.error?.message || null
            };
            if (stRes.data && Array.isArray(stRes.data)) studyData = stRes.data;
        } catch (err: any) {
            newStatus.studySessions = { ok: false, count: 0, error: err.message };
        }

        setTableStatus(newStatus);

        // 3. AGGREGATE DAILY & WEEKLY STATS FROM REAL SESSION RECORDS ONLY
        const dailyMap = new Map<string, { activity_date: string; activeUsers: Set<string>; total_duration_minutes: number; total_sessions: number; scores: number[] }>();

        const processRecord = (created_at?: string, durationMin?: number, userId?: string, score?: number) => {
            if (!created_at) return;
            const dateStr = created_at.split('T')[0];
            if (!dailyMap.has(dateStr)) {
                dailyMap.set(dateStr, { activity_date: dateStr, activeUsers: new Set(), total_duration_minutes: 0, total_sessions: 0, scores: [] });
            }
            const entry = dailyMap.get(dateStr)!;
            if (userId) entry.activeUsers.add(userId);
            entry.total_duration_minutes += Math.max(0, Math.round(durationMin || 0));
            entry.total_sessions += 1;
            if (typeof score === 'number' && score > 0) entry.scores.push(score);
        };

        speakingData.forEach((s: any) => processRecord(s.created_at, (s.duration_seconds || 0) / 60, s.user_id, s.overall_score || s.grammar_score));
        coachData.forEach((s: any) => processRecord(s.created_at, (s.duration_seconds || 0) / 60, s.user_id, s.grammar_score || (s.fluency_score ? s.fluency_score * 20 : 0)));
        aiCoachData.forEach((s: any) => processRecord(s.created_at, (s.duration_seconds || 0) / 60, s.user_id, s.grammar_score || s.vocabulary_score));
        studyData.forEach((s: any) => processRecord(s.created_at, s.duration || 0, s.user_id));

        const allDailyStats = Array.from(dailyMap.values())
            .sort((a, b) => a.activity_date.localeCompare(b.activity_date))
            .map(entry => {
                const avgScore = entry.scores.length > 0
                    ? Math.round(entry.scores.reduce((a, b) => a + b, 0) / entry.scores.length)
                    : 0;
                return {
                    activity_date: entry.activity_date,
                    active_users: entry.activeUsers.size,
                    total_duration_minutes: entry.total_duration_minutes,
                    total_sessions: entry.total_sessions,
                    avg_score: avgScore
                };
            });

        setDailyStats(allDailyStats);
        if (allDailyStats.length > 0) {
            try { localStorage.setItem('study_planner_admin_stats_cache', JSON.stringify(allDailyStats)); } catch {}
        }

        // 4. COMBINE REAL CONVERSATION HISTORY RECORDS
        const combinedSpeech = [
            ...speakingData.map(s => ({
                id: s.id,
                user_email: s.user_email || 'student@nihon-talk.com',
                created_at: s.created_at,
                duration_seconds: s.duration_seconds || 0,
                persona_title: s.persona_title || s.topic || 'Yaponcha Suhbat',
                score: s.overall_score || s.grammar_score || 0,
                feedback: s.feedback || s.ai_feedback || "Mavjud emas",
                transcript: Array.isArray(s.transcript) && s.transcript.length > 0 ? s.transcript : null,
                type: 'Speaking'
            })),
            ...coachData.map(s => ({
                id: s.id,
                user_email: 'student@nihon-talk.com',
                created_at: s.created_at,
                duration_seconds: s.duration_seconds || 0,
                persona_title: s.persona || s.persona_title || 'Speaking Coach',
                score: s.grammar_score || (s.fluency_score ? Math.round(s.fluency_score * 20) : 0),
                feedback: s.feedback || "Mavjud emas",
                transcript: Array.isArray(s.transcript) && s.transcript.length > 0 ? s.transcript : null,
                type: 'Speaking Coach'
            })),
            ...aiCoachData.map(s => ({
                id: s.id,
                user_email: 'student@nihon-talk.com',
                created_at: s.created_at,
                duration_seconds: s.duration_seconds || 0,
                persona_title: s.persona_title || 'AI Coach',
                score: s.grammar_score || s.vocabulary_score || 0,
                feedback: s.feedback || "Mavjud emas",
                transcript: Array.isArray(s.transcript) && s.transcript.length > 0 ? s.transcript : null,
                type: 'AI Coach'
            }))
        ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

        setSpeechRecords(combinedSpeech);
        setLoading(false);
    };

    useEffect(() => {
        let isMounted = true;
        (async () => {
            try { await fetchAdminData(); }
            finally { if (isMounted) setLoading(false); }
        })();
        return () => { isMounted = false; };
    }, [user?.email]);

    const handleRefresh = async () => {
        setRefreshing(true);
        await fetchAdminData();
        setRefreshing(false);
    };

    const handleSendMsg = async () => {
        if (!messageModalUser || !msgTitle.trim() || !msgContent.trim()) return;
        setSendingMsg(true);
        try {
            await UserNotificationService.sendNotification({
                user_id: messageModalUser.id,
                title: msgTitle,
                message: msgContent,
                type: 'admin'
            });
            toast({ title: '✅ Xabar Yuborildi', description: `Xabar ${messageModalUser.email} ga muvaffaqiyatli yetkazildi.` });
            setMessageModalUser(null);
            setMsgContent('');
        } catch { toast({ variant: 'destructive', title: 'Xatolik', description: 'Xabar yuborishda xatolik yuz berdi.' }); }
        finally { setSendingMsg(false); }
    };

    const handleToggleAdmin = (targetEmail: string) => {
        if (!isSuperAdmin(user?.email)) {
            toast({ variant: 'destructive', title: 'Ruxsat Cheklangan', description: 'Faqat Super Admin admin huquqlarini o\'zgartira oladi.' });
            return;
        }
        if (isAdminEmail(targetEmail)) {
            revokeAdminRole(targetEmail);
            toast({ title: '🛡️ Adminlik Bekor Qilindi', description: `${targetEmail} adminlikdan chiqarildi.` });
        } else {
            grantAdminRole(targetEmail);
            toast({ title: '🛡️ Admin Roli Berildi', description: `${targetEmail} ga Admin roli muvaffaqiyatli berildi!` });
        }
        fetchAdminData();
    };

    // User Role Filter Calculations
    const studentUsers = usersList.filter(s => !isAdminEmail(s.email, s.role));
    const adminUsers = usersList.filter(s => isAdminEmail(s.email, s.role));
    const totalStudentsCount = studentUsers.length;
    const totalAdminsCount = adminUsers.length;
    const totalAllUsers = usersList.length;

    // Real Activity Stats Calculations
    const todayStr = new Date().toISOString().split('T')[0];
    const todayStat = dailyStats.find(s => s.activity_date === todayStr);
    const activeTodayCount = todayStat ? todayStat.active_users : 0;
    const todaySessionsCount = todayStat ? todayStat.total_sessions : 0;

    const totalSessionsCount = dailyStats.reduce((sum, d) => sum + (d.total_sessions || 0), 0);
    const totalDurationMinutes = dailyStats.reduce((sum, d) => sum + (d.total_duration_minutes || 0), 0);
    const totalDurationHours = Math.floor(totalDurationMinutes / 60);
    const remainingMinutes = totalDurationMinutes % 60;

    const totalSpeakingSeconds = speechRecords.reduce((sum, r) => sum + (r.duration_seconds || 0), 0);
    const totalSpeakingMinutes = Math.round(totalSpeakingSeconds / 60);

    // Real Averages (Calculated from Real DB Score Records Only)
    const todayScores = speechRecords
        .filter(r => r.created_at && r.created_at.split('T')[0] === todayStr && typeof r.score === 'number' && r.score > 0)
        .map(r => r.score);
    const dailyAvgPercent = todayScores.length > 0 ? Math.round(todayScores.reduce((a, b) => a + b, 0) / todayScores.length) : 0;

    const sevenDaysAgo = new Date(Date.now() - 7 * 86400 * 1000).toISOString().split('T')[0];
    const weeklyScores = speechRecords
        .filter(r => r.created_at && r.created_at.split('T')[0] >= sevenDaysAgo && typeof r.score === 'number' && r.score > 0)
        .map(r => r.score);
    const weeklyAvgPercent = weeklyScores.length > 0 ? Math.round(weeklyScores.reduce((a, b) => a + b, 0) / weeklyScores.length) : 0;

    const filteredUsers = userSearchQuery.trim()
        ? usersList.filter(s =>
            s.email.toLowerCase().includes(userSearchQuery.toLowerCase()) ||
            (s.full_name && s.full_name.toLowerCase().includes(userSearchQuery.toLowerCase())) ||
            (s.role && s.role.toLowerCase().includes(userSearchQuery.toLowerCase()))
        )
        : usersList;

    const currentEmail = user?.email || (typeof window !== 'undefined' ? localStorage.getItem('study_planner_user_email') || '' : '');
    const isAuthorized = isAdminEmail(currentEmail, (user as any)?.role);

    if (loading) return (
        <div className="flex items-center justify-center h-[60vh]">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
    );

    if (!isAuthorized) return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3 text-center">
            <span className="text-5xl">🔒</span>
            <h2 className="text-xl font-bold text-foreground">Kirish taqiqlangan</h2>
            <p className="text-xs text-muted-foreground max-w-sm">Bu sahifaga faqat admin foydalanuvchilari kira oladi.</p>
            <Button onClick={() => navigate('/')} className="gap-2 mt-2">
                <Home className="w-4 h-4" /> Bosh sahifaga
            </Button>
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto space-y-6 pb-20 md:pb-12 animate-in fade-in duration-300">
            {/* Top Bar Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
                <div>
                    <h1
                        onClick={handleSecretTitleClick}
                        className="text-xl sm:text-2xl font-black text-foreground tracking-tight cursor-default select-none transition-colors hover:text-indigo-400/90 active:scale-[0.99]"
                        title="Nihon Talk Admin Console"
                    >
                        Super Admin Paneli
                    </h1>
                    <p className="text-xs text-muted-foreground mt-0.5">Foydalanuvchilar faolligi, ta'lim ko'rsatkichlari va AI Coach tahlillari boshqaruvi</p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                    <button
                        onClick={() => setIsCleanerOpen(true)}
                        className="px-3 py-1.5 bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-xl text-xs font-bold flex items-center gap-1.5 hover:bg-amber-500/20 transition-colors"
                    >
                        <Wand2 size={14} /> AI Cleaner
                    </button>
                    <button
                        onClick={() => navigate('/admin/exams')}
                        className="px-3 py-1.5 bg-indigo-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 hover:bg-indigo-700 transition-colors"
                    >
                        <BookOpen size={14} /> Imtihonlar
                    </button>
                    <button
                        onClick={handleRefresh}
                        className="px-3 py-1.5 bg-muted text-foreground border border-border rounded-xl text-xs font-bold flex items-center gap-1.5 hover:bg-muted/80 transition-colors"
                    >
                        <RefreshCw size={14} className={refreshing ? 'animate-spin' : ''} /> Yangilash
                    </button>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1 bg-muted p-1 rounded-xl border border-border w-fit text-xs font-bold">
                <button
                    onClick={() => setActiveSection('users')}
                    className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                        activeSection === 'users' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    <Users size={14} /> Foydalanuvchilar & Faollik ({totalAllUsers})
                </button>
                <button
                    onClick={() => setActiveSection('speech')}
                    className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                        activeSection === 'speech' ? 'bg-background text-indigo-500 shadow-sm' : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    <Mic size={14} /> AI Coach Natijalari & Transkriptlar ({speechRecords.length})
                </button>
                <button
                    onClick={() => setActiveSection('scenarios')}
                    className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                        activeSection === 'scenarios' ? 'bg-background text-purple-500 shadow-sm' : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    <MessageSquareText size={14} /> Yaponcha Ssenariylar
                </button>
            </div>

            {activeSection === 'users' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                    {/* Key Real DB Stats Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="bg-card border border-border rounded-2xl p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold shrink-0">
                                <Users size={18} />
                            </div>
                            <div>
                                <div className="text-xl font-black text-foreground">{totalStudentsCount} nafar</div>
                                <div className="text-[11px] font-semibold text-muted-foreground">
                                    Jami O'quvchilar ({totalAllUsers} akkount, {totalAdminsCount} admin)
                                </div>
                            </div>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold shrink-0">
                                <Activity size={18} />
                            </div>
                            <div>
                                <div className="text-xl font-black text-foreground">{activeTodayCount} nafar</div>
                                <div className="text-[11px] font-semibold text-muted-foreground">Bugun Faol O'quvchilar</div>
                            </div>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold shrink-0">
                                <CheckCircle2 size={18} />
                            </div>
                            <div>
                                <div className="text-xl font-black text-foreground">{totalSessionsCount} ta</div>
                                <div className="text-[11px] font-semibold text-muted-foreground">Bajarilgan Mashg'ulotlar</div>
                            </div>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold shrink-0">
                                <Clock size={18} />
                            </div>
                            <div>
                                <div className="text-xl font-black text-foreground">
                                    {totalDurationHours > 0 ? `${totalDurationHours}s ${remainingMinutes}d` : `${totalDurationMinutes} daqiqa`}
                                </div>
                                <div className="text-[11px] font-semibold text-muted-foreground">Jami O'rganish Vaqti</div>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Real DB Analytics Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="bg-card border border-border rounded-2xl p-3.5 space-y-1">
                            <span className="text-[11px] font-medium text-muted-foreground">Bugungi Suhbatlar</span>
                            <div className="text-lg font-black text-indigo-400">{todaySessionsCount} seans</div>
                        </div>
                        <div className="bg-card border border-border rounded-2xl p-3.5 space-y-1">
                            <span className="text-[11px] font-medium text-muted-foreground">Kunlik O'rtacha Foiz</span>
                            <div className="text-lg font-black text-emerald-400">
                                {dailyAvgPercent > 0 ? `${dailyAvgPercent}%` : '0%'}
                            </div>
                        </div>
                        <div className="bg-card border border-border rounded-2xl p-3.5 space-y-1">
                            <span className="text-[11px] font-medium text-muted-foreground">Haftalik O'rtacha Foiz</span>
                            <div className="text-lg font-black text-purple-400">
                                {weeklyAvgPercent > 0 ? `${weeklyAvgPercent}%` : '0%'}
                            </div>
                        </div>
                        <div className="bg-card border border-border rounded-2xl p-3.5 space-y-1">
                            <span className="text-[11px] font-medium text-muted-foreground">Jami Gapirilgan Vaqt</span>
                            <div className="text-lg font-black text-amber-400">{totalSpeakingMinutes} min</div>
                        </div>
                    </div>

                    {/* User Activity Chart */}
                    <div className="bg-card border border-border rounded-2xl p-4 space-y-3">
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                                <Activity size={16} className="text-primary" />
                                <h2 className="font-bold text-sm text-foreground">Foydalanuvchilar Faolligi Graph (Real DB Records)</h2>
                            </div>
                            <div className="flex items-center gap-1 bg-muted p-1 rounded-xl text-[11px] font-semibold border border-border">
                                <button
                                    onClick={() => setChartMode('dau')}
                                    className={`px-2.5 py-1 rounded-lg transition-colors ${chartMode === 'dau' ? 'bg-background text-foreground shadow-xs font-bold' : 'text-muted-foreground'}`}
                                >
                                    Faol O'quvchilar
                                </button>
                                <button
                                    onClick={() => setChartMode('duration')}
                                    className={`px-2.5 py-1 rounded-lg transition-colors ${chartMode === 'duration' ? 'bg-background text-foreground shadow-xs font-bold' : 'text-muted-foreground'}`}
                                >
                                    Vaqt (Daqiqa)
                                </button>
                            </div>
                        </div>

                        {dailyStats.length > 0 ? (
                            <div className="h-44 w-full pt-2">
                                <SvgLineChart
                                    data={dailyStats.map(d => ({
                                        xLabel: d.activity_date.substring(5),
                                        value: chartMode === 'dau' ? d.active_users : d.total_duration_minutes,
                                        fullDate: d.activity_date,
                                        sessions: d.total_sessions
                                    }))}
                                    xKey="xLabel"
                                    series={[{ dataKey: 'value', stroke: chartMode === 'dau' ? '#6366f1' : '#a855f7', label: chartMode === 'dau' ? 'Faol O\'quvchilar' : 'Daqiqa' }]}
                                    height={160}
                                    showArea={true}
                                />
                            </div>
                        ) : (
                            <div className="h-32 flex flex-col items-center justify-center text-xs text-muted-foreground border border-dashed border-border rounded-xl">
                                <span>Real faollik statistikasi mavjud emas</span>
                            </div>
                        )}
                    </div>

                    {/* All Registered Users Table */}
                    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xs">
                        <div className="p-4 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div>
                                <h2 className="font-bold text-sm text-foreground flex items-center gap-2">
                                    <Users size={16} className="text-primary" />
                                    Barcha Ro'yxatdan O'tgan Foydalanuvchilar ({filteredUsers.length})
                                </h2>
                                <p className="text-[11px] text-muted-foreground mt-0.5">
                                    Supabase Real DB (`get_admin_all_users`) dan yuklangan {totalAllUsers} ta akkount
                                </p>
                            </div>
                            <div className="relative">
                                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                <input
                                    type="text"
                                    value={userSearchQuery}
                                    onChange={e => setUserSearchQuery(e.target.value)}
                                    placeholder="Qidiruv (email, ism)..."
                                    className="pl-8 pr-3 py-1.5 bg-muted border border-border rounded-xl text-xs text-foreground outline-none focus:border-primary w-full sm:w-64"
                                />
                            </div>
                        </div>

                        {tableStatus.rpcUsers.error && (
                            <div className="m-4 p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-xs text-rose-400 flex items-center gap-2">
                                <AlertTriangle size={16} />
                                <span>RPC DB Xatosi: {tableStatus.rpcUsers.error}</span>
                            </div>
                        )}

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead className="bg-muted/50 border-b border-border text-muted-foreground font-semibold">
                                    <tr>
                                        <th className="p-3">#</th>
                                        <th className="p-3">Foydalanuvchi</th>
                                        <th className="p-3">Rol</th>
                                        <th className="p-3">Ro'yxatdan O'tgan</th>
                                        <th className="p-3 text-right">Amallar</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/60">
                                    {filteredUsers.length > 0 ? (
                                        filteredUsers.map((u, idx) => (
                                            <tr key={u.id} className="hover:bg-muted/30 transition-colors">
                                                <td className="p-3 text-muted-foreground font-mono">{idx + 1}</td>
                                                <td className="p-3">
                                                    <div className="font-bold text-foreground">{u.full_name || u.email.split('@')[0]}</div>
                                                    <div className="text-[11px] text-muted-foreground font-mono">{u.email}</div>
                                                </td>
                                                <td className="p-3">
                                                    <RoleBadge role={u.role} email={u.email} />
                                                </td>
                                                <td className="p-3 text-muted-foreground">
                                                    {u.created_at ? new Date(u.created_at).toLocaleDateString() : 'Noma\'lum'}
                                                </td>
                                                <td className="p-3 text-right">
                                                    <div className="flex items-center justify-end gap-1.5">
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={() => setMessageModalUser({ id: u.id, email: u.email })}
                                                            className="h-7 px-2 text-[11px]"
                                                        >
                                                            Xabar
                                                        </Button>
                                                        {isSuperAdmin(user?.email) && (
                                                            <Button
                                                                size="sm"
                                                                variant="ghost"
                                                                onClick={() => handleToggleAdmin(u.email)}
                                                                className="h-7 px-2 text-[11px] text-muted-foreground hover:text-foreground"
                                                            >
                                                                {isAdminEmail(u.email) ? 'Adminlikni olish' : 'Admin qilish'}
                                                            </Button>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={5} className="p-8 text-center text-muted-foreground">
                                                Foydalanuvchilar topilmadi
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {activeSection === 'speech' && (
                <AdminSpeechAnalytics records={speechRecords} />
            )}

            {activeSection === 'scenarios' && (
                <AdminScenarioManager />
            )}

            {/* REAL DB FORENSIC DEBUG INDICATOR BAR */}
            <div className="mt-8 p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 text-[11px] font-mono flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    <span className="font-bold text-slate-100">REAL DB STATUS:</span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <span>RPC Users: <strong className={tableStatus.rpcUsers.ok ? 'text-emerald-400' : 'text-rose-400'}>{tableStatus.rpcUsers.count}</strong></span>
                    <span>Profiles: <strong className={tableStatus.profiles.ok ? 'text-emerald-400' : 'text-rose-400'}>{tableStatus.profiles.count}</strong></span>
                    <span>Study Sessions: <strong className={tableStatus.studySessions.ok ? 'text-emerald-400' : 'text-rose-400'}>{tableStatus.studySessions.count}</strong></span>
                    <span>Speaking Sessions: <strong className={tableStatus.speakingSessions.ok ? 'text-emerald-400' : 'text-rose-400'}>{tableStatus.speakingSessions.count}</strong></span>
                    <span>Speaking Coach: <strong className={tableStatus.speakingCoachSessions.ok ? 'text-emerald-400' : 'text-rose-400'}>{tableStatus.speakingCoachSessions.count}</strong></span>
                    <span>AI Coach: <strong className={tableStatus.aiCoachSessions.ok ? 'text-emerald-400' : 'text-rose-400'}>{tableStatus.aiCoachSessions.count}</strong></span>
                </div>
            </div>

            {/* Direct User Message Modal */}
            {messageModalUser && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
                    <div className="bg-card border border-border rounded-2xl p-5 max-w-md w-full space-y-4 shadow-xl">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-sm text-foreground">Xabar Yuborish: {messageModalUser.email}</h3>
                            <button onClick={() => setMessageModalUser(null)} className="text-muted-foreground hover:text-foreground">
                                ✕
                            </button>
                        </div>
                        <input
                            type="text"
                            value={msgTitle}
                            onChange={e => setMsgTitle(e.target.value)}
                            placeholder="Sarlavha"
                            className="w-full bg-muted border border-border rounded-xl px-3 py-2 text-xs text-foreground outline-none"
                        />
                        <textarea
                            rows={3}
                            value={msgContent}
                            onChange={e => setMsgContent(e.target.value)}
                            placeholder="Xabar matni..."
                            className="w-full bg-muted border border-border rounded-xl px-3 py-2 text-xs text-foreground outline-none resize-none"
                        />
                        <div className="flex gap-2">
                            <Button variant="outline" onClick={() => setMessageModalUser(null)} className="flex-1 text-xs">Bekor qilish</Button>
                            <Button onClick={handleSendMsg} disabled={sendingMsg} className="flex-1 text-xs">Yuborish</Button>
                        </div>
                    </div>
                </div>
            )}

            {/* SECRET DEVELOPER DATASET & VOICE VAULT MODAL */}
            <AdminDatasetVaultModal
                isOpen={isVaultOpen}
                onClose={() => setIsVaultOpen(false)}
            />

            <AdminAiCardCleanerModal
                isOpen={isCleanerOpen}
                onClose={() => setIsCleanerOpen(false)}
            />
        </div>
    );
};

export default AdminDashboardPage;
