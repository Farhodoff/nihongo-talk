import React, { useEffect, useRef, useState } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { supabase } from '../lib/supabase';
import {
    Users, Loader2, CheckCircle2,
    Send, X, Crown,
    Zap, Star, RefreshCw, MoreVertical, Home, Activity, BookOpen,
    Megaphone, Wand2, Search, Mic, MessageSquareText, Cpu, Clock
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

interface UserSubscription {
    id: string;
    email: string;
    full_name?: string;
    role?: string;
    tier: 'free' | 'pro' | 'premium';
    ai_credits: number;
    last_reset_date: string;
    created_at: string;
    valid_until?: string;
}

const RoleBadge: React.FC<{ role?: string; email?: string }> = ({ role, email }) => {
    if (isSuperAdmin(email) || role === 'superadmin') {
        return (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-500/10 text-rose-400 border border-rose-500/20 shrink-0">
                👑 Superadmin
            </span>
        );
    }
    if (isAdminEmail(email, role)) {
        return (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                🛡️ Admin
            </span>
        );
    }
    return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
            🎓 O'quvchi
        </span>
    );
};

// ─── Action Dropdown Menu ───────────────────────────────────────────────────
interface DropdownMenuProps {
    sub: UserSubscription;
    onTierDays: (id: string, tier: string, days: number) => void;
    onTier: (id: string, tier: string, months: number) => void;
    onMessage: (user: { id: string; email: string }) => void;
    onFree: (id: string) => void;
    onToggleAdmin?: (email: string) => void;
    isUserAdmin?: boolean;
}

const ActionDropdown: React.FC<DropdownMenuProps> = ({ sub, onTierDays, onTier, onMessage, onFree, onToggleAdmin, isUserAdmin }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const actions = [
        {
            label: '🎁 +3 Kun (Premium Trial)',
            desc: 'Bepul sinov, avtomatik xabar',
            color: 'text-amber-500',
            bg: 'hover:bg-amber-500/10',
            onClick: () => { onTierDays(sub.id, 'premium', 3); setOpen(false); },
        },
        {
            label: '⚡ +1 Oy (Pro)',
            desc: 'Pro tarif — 1 oy',
            color: 'text-indigo-400',
            bg: 'hover:bg-indigo-500/10',
            onClick: () => { onTier(sub.id, 'pro', 1); setOpen(false); },
        },
        {
            label: '✨ +1 Oy (Premium)',
            desc: 'Premium tarif — 1 oy',
            color: 'text-fuchsia-400',
            bg: 'hover:bg-fuchsia-500/10',
            onClick: () => { onTier(sub.id, 'premium', 1); setOpen(false); },
        },
        {
            label: '👑 +6 Oy (VIP $50)',
            desc: 'Ultra VIP — 6 oy',
            color: 'text-rose-400',
            bg: 'hover:bg-rose-500/10',
            onClick: () => { onTier(sub.id, 'premium', 6); setOpen(false); },
        },
        { divider: true },
        {
            label: isUserAdmin ? '🛡️ Admin Rolini Bekor Qilish' : '🛡️ Admin Rolini Berish',
            desc: isUserAdmin ? 'Admin boshqaruv huquqini bekor qilish' : 'Admin boshqaruv huquqini berish',
            color: isUserAdmin ? 'text-rose-400' : 'text-emerald-400',
            bg: isUserAdmin ? 'hover:bg-rose-500/10' : 'hover:bg-emerald-500/10',
            onClick: () => { if (onToggleAdmin) onToggleAdmin(sub.email); setOpen(false); },
        },
        { divider: true },
        {
            label: '💬 Xabar Yuborish',
            desc: 'In-app bildirishnoma',
            color: 'text-sky-400',
            bg: 'hover:bg-sky-500/10',
            onClick: () => { onMessage({ id: sub.id, email: sub.email }); setOpen(false); },
        },
        { divider: true },
        {
            label: '🔄 Bepul Tarifga Qaytarish',
            desc: 'Obunani bekor qilish',
            color: 'text-muted-foreground',
            bg: 'hover:bg-muted',
            onClick: () => { onFree(sub.id); setOpen(false); },
        },
    ];

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen(p => !p)}
                className="p-1.5 text-muted-foreground hover:text-foreground bg-muted rounded-lg border border-border transition-colors"
                title="Boshqarish menyusi"
            >
                <MoreVertical size={13} />
            </button>

            {open && (
                <div className="absolute right-0 top-8 z-50 w-64 bg-card border border-border rounded-2xl shadow-2xl p-1.5 space-y-0.5 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-2 border-b border-border/50">
                        <p className="text-[11px] font-bold text-foreground truncate">{sub.full_name || sub.email}</p>
                        <p className="text-[10px] text-muted-foreground truncate">{sub.email}</p>
                    </div>
                    {actions.map((act, i) =>
                        (act as any).divider ? (
                            <div key={i} className="border-t border-border/50 my-1" />
                        ) : (
                            <button
                                key={i}
                                onClick={(act as any).onClick}
                                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex flex-col transition-colors ${(act as any).bg}`}
                            >
                                <span className={`font-bold ${(act as any).color}`}>{(act as any).label}</span>
                                <span className="text-[10px] text-muted-foreground">{(act as any).desc}</span>
                            </button>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

// ─── Tier Badge ─────────────────────────────────────────────────────────────
const TierBadge: React.FC<{ tier: 'free' | 'pro' | 'premium' }> = ({ tier }) => {
    const config = {
        premium: { label: 'PREMIUM', cls: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20', icon: <Crown size={10} /> },
        pro: { label: 'PRO', cls: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20', icon: <Zap size={10} /> },
        free: { label: 'FREE', cls: 'bg-muted text-muted-foreground border-border', icon: <Star size={10} /> },
    };
    const cfg = config[tier] || config.free;
    return (
        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border ${cfg.cls}`}>
            {cfg.icon}
            {cfg.label}
        </span>
    );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const AdminDashboardPage: React.FC = () => {
    const { user } = useStudyData();
    const navigate = useNavigate();

    const [subscriptions, setSubscriptions] = useState<UserSubscription[]>(() => {
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
    const [loading, setLoading] = useState(() => subscriptions.length === 0);
    const [refreshing, setRefreshing] = useState(false);
    const [chartMode, setChartMode] = useState<'dau' | 'duration'>('dau');
    const [userSearchQuery, setUserSearchQuery] = useState('');
    const [activeSection, setActiveSection] = useState<'users' | 'speech' | 'scenarios'>('users');

    const [broadcastTitle, setBroadcastTitle] = useState('🚀 Yangi JLPT N2 5-Qism va 6-Qism 100 ta Kanjilari yuklandi!');
    const [broadcastMessage, setBroadcastMessage] = useState("Platformaning 'To'plamlar' bo'limiga kirib, yangi yuklangan 100 ta Kanjilarni o'rganishni boshlashingiz mumkin.");
    const [broadcastTag, setBroadcastTag] = useState('JLPT N2');
    const [sendingBroadcast, setSendingBroadcast] = useState(false);
    const [broadcastSuccess, setBroadcastSuccess] = useState(false);

    const [isCleanerOpen, setIsCleanerOpen] = useState(false);
    const [isVaultOpen, setIsVaultOpen] = useState(false);
    const secretClicksRef = useRef(0);

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

    const [messageModalUser, setMessageModalUser] = useState<{ id: string; email: string } | null>(null);
    const [msgTitle, setMsgTitle] = useState('🎁 Maxsus Xabar');
    const [msgContent, setMsgContent] = useState('');
    const [sendingMsg, setSendingMsg] = useState(false);

    const handleSendBroadcast = async () => {
        if (!broadcastTitle.trim() || !broadcastMessage.trim()) return;
        setSendingBroadcast(true);
        try {
            await UserNotificationService.sendGlobalBroadcastAnnouncement({
                title: broadcastTitle.trim(),
                message: broadcastMessage.trim(),
                tag: broadcastTag
            });
            setBroadcastSuccess(true);
            setTimeout(() => setBroadcastSuccess(false), 4000);
        } catch (err) {
            console.error("Failed to send broadcast:", err);
        } finally {
            setSendingBroadcast(false);
        }
    };

    const fetchAdminData = async () => {
        try {
            if (subscriptions.length === 0) setLoading(true);

            let usersData: any[] = [];
            try {
                const usersRes = await supabase.rpc('get_admin_all_users');
                if (usersRes.data && Array.isArray(usersRes.data) && usersRes.data.length > 0) {
                    usersData = usersRes.data;
                } else if (usersRes.error) {
                    const pRes = await supabase.from('profiles').select('*').limit(500);
                    if (pRes.data && Array.isArray(pRes.data)) usersData = pRes.data;
                }
            } catch (uErr) { console.error("Users load error:", uErr); }

            if (usersData.length > 0) {
                const usersList: UserSubscription[] = usersData.map((u: any) => ({
                    id: u.id,
                    email: u.email || 'student@nihon-talk.com',
                    full_name: u.full_name || '',
                    role: u.role || (isSuperAdmin(u.email) ? 'superadmin' : 'user'),
                    tier: u.tier || 'free',
                    ai_credits: u.ai_credits ?? 0,
                    last_reset_date: u.last_reset_date || u.created_at || new Date().toISOString(),
                    created_at: u.created_at || new Date().toISOString(),
                    valid_until: u.valid_until,
                }));

                setSubscriptions(usersList);
                try { localStorage.setItem('study_planner_admin_users_cache', JSON.stringify(usersList)); } catch {}
            }

            try {
                const [speakingRes, coachRes, aiCoachRes, studyRes] = await Promise.allSettled([
                    supabase.from('speaking_sessions').select('*').limit(500),
                    supabase.from('speaking_coach_sessions').select('*').limit(500),
                    supabase.from('ai_coach_sessions').select('*').limit(500),
                    supabase.from('study_sessions').select('*').limit(500),
                ]);

                const speakingData = speakingRes.status === 'fulfilled' && Array.isArray(speakingRes.value?.data) ? speakingRes.value.data : [];
                const coachData = coachRes.status === 'fulfilled' && Array.isArray(coachRes.value?.data) ? coachRes.value.data : [];
                const aiCoachData = aiCoachRes.status === 'fulfilled' && Array.isArray(aiCoachRes.value?.data) ? aiCoachRes.value.data : [];
                const studyData = studyRes.status === 'fulfilled' && Array.isArray(studyRes.value?.data) ? studyRes.value.data : [];

                const dailyMap = new Map<string, { activity_date: string; activeUsers: Set<string>; total_duration_minutes: number; total_sessions: number; }>();

                const processRecord = (created_at?: string, durationMin?: number, userId?: string) => {
                    if (!created_at) return;
                    const dateStr = created_at.split('T')[0];
                    if (!dailyMap.has(dateStr)) {
                        dailyMap.set(dateStr, { activity_date: dateStr, activeUsers: new Set(), total_duration_minutes: 0, total_sessions: 0 });
                    }
                    const entry = dailyMap.get(dateStr)!;
                    if (userId) entry.activeUsers.add(userId);
                    entry.total_duration_minutes += Math.max(0, Math.round(durationMin || 0));
                    entry.total_sessions += 1;
                };

                speakingData.forEach((s: any) => processRecord(s.created_at, (s.duration_seconds || 0) / 60, s.user_id));
                coachData.forEach((s: any) => processRecord(s.created_at, (s.duration_seconds || 0) / 60, s.user_id));
                aiCoachData.forEach((s: any) => processRecord(s.created_at, (s.duration_seconds || 0) / 60, s.user_id));
                studyData.forEach((s: any) => processRecord(s.created_at, s.duration || 0, s.user_id));

                const allDailyStats = Array.from(dailyMap.values())
                    .sort((a, b) => a.activity_date.localeCompare(b.activity_date))
                    .map(entry => ({
                        activity_date: entry.activity_date,
                        active_users: entry.activeUsers.size,
                        total_duration_minutes: entry.total_duration_minutes,
                        total_sessions: entry.total_sessions,
                    }));

                setDailyStats(allDailyStats);
                if (allDailyStats.length > 0) try { localStorage.setItem('study_planner_admin_stats_cache', JSON.stringify(allDailyStats)); } catch {}
            } catch (actErr) { console.warn('Activity stats load error:', actErr); }

        } catch (err) { console.error('fetchAdminData error:', err); }
        finally { setLoading(false); }
    };

    useEffect(() => {
        let isMounted = true;
        (async () => { try { await fetchAdminData(); } finally { if (isMounted) setLoading(false); } })();
        return () => { isMounted = false; };
    }, [user?.email]);

    const handleRefresh = async () => {
        setRefreshing(true);
        await fetchAdminData();
        setRefreshing(false);
    };

    const studentUsers = subscriptions.filter(s => !isAdminEmail(s.email, s.role));
    const adminUsers = subscriptions.filter(s => isAdminEmail(s.email, s.role));
    const totalStudentsCount = studentUsers.length;
    const totalAdminsCount = adminUsers.length;
    const totalAllUsers = subscriptions.length;

    const todayStr = new Date().toISOString().split('T')[0];
    const todayStat = dailyStats.find(s => s.activity_date === todayStr);
    const activeTodayCount = todayStat ? todayStat.active_users : 0;

    const totalSessionsCount = dailyStats.reduce((sum, d) => sum + (d.total_sessions || 0), 0);
    const totalDurationMinutes = dailyStats.reduce((sum, d) => sum + (d.total_duration_minutes || 0), 0);
    const totalDurationHours = Math.floor(totalDurationMinutes / 60);
    const remainingMinutes = totalDurationMinutes % 60;

    const filteredSubscriptions = userSearchQuery.trim()
        ? subscriptions.filter(s =>
            s.email.toLowerCase().includes(userSearchQuery.toLowerCase()) ||
            (s.full_name && s.full_name.toLowerCase().includes(userSearchQuery.toLowerCase())) ||
            (s.role && s.role.toLowerCase().includes(userSearchQuery.toLowerCase()))
        )
        : subscriptions;

    const isAuthorized = isAdminEmail(user?.email);

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

    const setUserTier = async (userId: string, newTier: string, months: number) => {
        let validUntil: string | undefined;
        if (newTier !== 'free') {
            const d = new Date();
            d.setMonth(d.getMonth() + months);
            validUntil = d.toISOString();
        }
        const { error } = await supabase
            .from('user_subscriptions')
            .upsert({ id: userId, tier: newTier, valid_until: validUntil || null, updated_at: new Date().toISOString() });
        if (!error) {
            setSubscriptions(s => s.map(x => x.id === userId ? { ...x, tier: newTier as any, valid_until: validUntil } : x));
            toast({
                title: '✅ Obuna muvaffaqiyatli berildi',
                description: `Foydalanuvchiga ${newTier.toUpperCase()} tarifi ${months ? `${months} oyga` : 'cheksiz'} faollashtirildi.`
            });
        } else {
            toast({ variant: 'destructive', title: '❌ Obuna berishda xatolik', description: error.message || 'Xatolik yuz berdi.' });
        }
    };

    const setUserTierDays = async (userId: string, newTier: string, days: number) => {
        const d = new Date();
        d.setDate(d.getDate() + days);
        const validUntil = d.toISOString();
        const { error } = await supabase
            .from('user_subscriptions')
            .upsert({ id: userId, tier: newTier, valid_until: validUntil, updated_at: new Date().toISOString() });
        if (!error) {
            setSubscriptions(s => s.map(x => x.id === userId ? { ...x, tier: newTier as any, valid_until: validUntil } : x));
            toast({
                title: '🎁 Sinov tarifi faollashtirildi',
                description: `Foydalanuvchiga ${days} kunlik ${newTier.toUpperCase()} sinov muddati berildi.`
            });
            await UserNotificationService.sendNotification({
                user_id: userId,
                title: `🎁 ${days} Kunlik Bepul Premium Trial!`,
                message: `Sizga ${days} kunlik bepul Premium tarif taqdim etildi! Barcha imkoniyatlarni sinab ko'ring 🚀`,
                type: 'promo'
            });
        } else {
            toast({ variant: 'destructive', title: '❌ Sinov muddati berishda xatolik', description: error.message || 'Xatolik yuz berdi.' });
        }
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

    return (
        <div className="max-w-6xl mx-auto space-y-6 pb-20 md:pb-12 animate-in fade-in duration-300">
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
                    <Mic size={14} /> AI Coach Natijalari (%) & Transkriptlar
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
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="bg-card border border-border rounded-2xl p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold shrink-0">
                                <Users size={18} />
                            </div>
                            <div>
                                <div className="text-xl font-black text-foreground">{totalStudentsCount} nafar</div>
                                <div className="text-[11px] font-semibold text-muted-foreground">
                                    Jami O'quvchilar {totalAdminsCount > 0 ? `(+${totalAdminsCount} admin)` : ''}
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

                    <div className="bg-card border border-border rounded-2xl p-4 space-y-3">
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                                <Activity size={16} className="text-primary" />
                                <h2 className="font-bold text-sm text-foreground">Foydalanuvchilar Faolligi</h2>
                            </div>
                            <div className="flex bg-muted p-0.5 rounded-lg border border-border">
                                <button
                                    onClick={() => setChartMode('dau')}
                                    className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all ${chartMode === 'dau' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'}`}
                                >
                                    Active Users (DAU)
                                </button>
                                <button
                                    onClick={() => setChartMode('duration')}
                                    className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all ${chartMode === 'duration' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'}`}
                                >
                                    Study Time
                                </button>
                            </div>
                        </div>

                        <div className="h-56 w-full flex items-center justify-center">
                            {dailyStats.length === 0 ? (
                                <div className="text-center py-10">
                                    <Activity className="w-8 h-8 text-muted-foreground/40 mx-auto mb-2" />
                                    <p className="text-xs font-semibold text-muted-foreground">Hozircha o'qish faolliklari qayd etilmagan</p>
                                </div>
                            ) : (
                                <SvgLineChart
                                    data={dailyStats.map(s => {
                                        const d = new Date(s.activity_date);
                                        const day = d.getDate();
                                        const months = ['yan', 'fev', 'mar', 'apr', 'may', 'iyn', 'iyl', 'avg', 'sen', 'okt', 'noy', 'dek'];
                                        return { ...s, dateFormatted: `${day}-${months[d.getMonth()] || ''}` };
                                    })}
                                    xKey="dateFormatted"
                                    series={[{
                                        dataKey: chartMode === 'dau' ? 'active_users' : 'total_duration_minutes',
                                        stroke: '#6366f1',
                                        fill: '#6366f1',
                                        name: chartMode === 'dau' ? 'Faol talabalar' : "O'qish daqiqalari"
                                    }]}
                                    height={220}
                                    showArea={true}
                                    unit={chartMode === 'dau' ? 'ta' : 'daq'}
                                />
                            )}
                        </div>
                    </div>

                    <div className="bg-card border border-border rounded-2xl overflow-hidden">
                        <div className="p-4 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                                <Users size={16} className="text-primary" />
                                <h2 className="font-bold text-sm text-foreground">Foydalanuvchilar Boshqaruvi</h2>
                                <span className="px-2 py-0.5 bg-muted rounded-full text-[11px] font-extrabold text-muted-foreground">
                                    {filteredSubscriptions.length} / {totalAllUsers}
                                </span>
                            </div>

                            <div className="relative w-full sm:w-64">
                                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Email, ism yoki rol bo'yicha qidiruv..."
                                    value={userSearchQuery}
                                    onChange={e => setUserSearchQuery(e.target.value)}
                                    className="w-full pl-9 pr-3 py-1.5 bg-muted border border-border rounded-xl text-xs font-medium text-foreground placeholder:text-muted-foreground focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="divide-y divide-border/50">
                            {filteredSubscriptions.map(sub => (
                                <div key={sub.id} className="p-3.5 flex items-center justify-between gap-3 hover:bg-muted/30 transition-colors">
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                                            {sub.email.charAt(0).toUpperCase()}
                                        </div>
                                        <div className="min-w-0">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <span className="text-xs font-bold text-foreground truncate">
                                                    {sub.full_name || sub.email.split('@')[0]}
                                                </span>
                                                <RoleBadge role={sub.role} email={sub.email} />
                                                <TierBadge tier={sub.tier} />
                                            </div>
                                            <span className="text-[11px] text-muted-foreground truncate block">{sub.email}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 shrink-0">
                                        <ActionDropdown
                                            sub={sub}
                                            onTierDays={setUserTierDays}
                                            onTier={setUserTier}
                                            onMessage={setMessageModalUser}
                                            onFree={(id) => setUserTier(id, 'free', 0)}
                                            onToggleAdmin={handleToggleAdmin}
                                            isUserAdmin={isAdminEmail(sub.email, sub.role)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Broadcast Form Section */}
                    <div className="bg-card border border-border rounded-2xl p-4 space-y-3">
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <Megaphone size={16} className="text-amber-500" />
                                <h2 className="font-bold text-sm text-foreground">Global Bildirishnoma (Broadcast)</h2>
                            </div>
                            {broadcastSuccess && (
                                <span className="text-[11px] font-bold text-emerald-500 flex items-center gap-1">
                                    <CheckCircle2 size={13} /> Yuborildi!
                                </span>
                            )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                            <input
                                type="text"
                                value={broadcastTitle}
                                onChange={e => setBroadcastTitle(e.target.value)}
                                placeholder="E'lon sarlavhasi..."
                                className="w-full p-2 bg-muted border border-border rounded-xl font-medium text-foreground outline-none"
                            />
                            <select
                                value={broadcastTag}
                                onChange={e => setBroadcastTag(e.target.value)}
                                className="w-full p-2 bg-muted border border-border rounded-xl font-medium text-foreground outline-none"
                            >
                                <option value="JLPT N2">JLPT N2</option>
                                <option value="JLPT N3">JLPT N3</option>
                                <option value="JLPT N4">JLPT N4</option>
                                <option value="JLPT N5">JLPT N5</option>
                                <option value="IELTS">IELTS</option>
                                <option value="E'lon">Umumiy E'lon</option>
                            </select>
                            <Button
                                disabled={sendingBroadcast || !broadcastTitle.trim() || !broadcastMessage.trim()}
                                onClick={handleSendBroadcast}
                                className="w-full text-xs py-2 bg-primary text-primary-foreground font-bold rounded-xl flex items-center justify-center gap-1.5"
                            >
                                {sendingBroadcast ? <Loader2 className="animate-spin" size={14} /> : <Send size={14} />}
                                Broadcast Yuborish
                            </Button>
                        </div>

                        <textarea
                            rows={2}
                            value={broadcastMessage}
                            onChange={e => setBroadcastMessage(e.target.value)}
                            placeholder="E'lon matnini kiriting..."
                            className="w-full p-2 bg-muted border border-border rounded-xl font-medium text-xs text-foreground outline-none resize-none"
                        />
                    </div>

                    {/* Nihon Talk Gateway Status */}
                    <div className="bg-card border border-border rounded-2xl p-4 space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Cpu size={16} className="text-primary" />
                                <div>
                                    <h2 className="font-bold text-sm text-foreground">Nihon Talk Gateway Status</h2>
                                    <p className="text-[11px] text-muted-foreground">Server-side markaziy DeepSeek arxitekturasi</p>
                                </div>
                            </div>
                            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Active & Monitored
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 text-xs">
                            <div className="p-3 bg-muted rounded-xl border border-border">
                                <span className="text-muted-foreground block text-[11px]">AI Provider</span>
                                <span className="font-bold text-foreground">DeepSeek (V3 / R1)</span>
                            </div>
                            <div className="p-3 bg-muted rounded-xl border border-border">
                                <span className="text-muted-foreground block text-[11px]">Default Model</span>
                                <span className="font-bold text-foreground">deepseek-chat</span>
                            </div>
                            <div className="p-3 bg-muted rounded-xl border border-border">
                                <span className="text-muted-foreground block text-[11px]">Key Security</span>
                                <span className="font-bold text-foreground">process.env.DEEPSEEK_API_KEY</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB 2: AI COACH & SPEECH ANALYTICS (%) */}
            {activeSection === 'speech' && (
                <div className="bg-card border border-border rounded-2xl p-5 shadow-sm animate-in fade-in duration-200">
                    <AdminSpeechAnalytics />
                </div>
            )}

            {/* TAB 3: JAPANESE SCENARIOS */}
            {activeSection === 'scenarios' && (
                <div className="bg-card border border-border rounded-2xl p-5 shadow-sm animate-in fade-in duration-200">
                    <AdminScenarioManager />
                </div>
            )}

            {/* AI Card Cleaner Modal */}
            <AdminAiCardCleanerModal
                isOpen={isCleanerOpen}
                onClose={() => setIsCleanerOpen(false)}
            />

            {/* Message Modal */}
            {messageModalUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-card border border-border rounded-2xl p-5 max-w-md w-full shadow-2xl space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-sm text-foreground">Xabar Yuborish</h3>
                            <button onClick={() => setMessageModalUser(null)} className="p-1 text-muted-foreground hover:text-foreground">
                                <X size={16} />
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

            {/* SECRET DEVELOPER DATASET & VOICE VAULT MODAL (EASTER EGG) */}
            <AdminDatasetVaultModal
                isOpen={isVaultOpen}
                onClose={() => setIsVaultOpen(false)}
            />
        </div>
    );
};

export default AdminDashboardPage;
