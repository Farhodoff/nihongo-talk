import React, { useEffect, useRef, useState } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { supabase } from '../lib/supabase';
import {
    Users, Loader2, CheckCircle2,
    MessageSquare, Send, X, Crown,
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
    tier: 'free' | 'pro' | 'premium';
    ai_credits: number;
    last_reset_date: string;
    created_at: string;
    valid_until?: string;
}

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
            desc: isUserAdmin ? 'Japanese Scenarios boshqaruvini bekor qilish' : 'Japanese Scenarios va Speech analytics ruxsatini berish',
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
            label: '🔄 Free ga qaytarish',
            desc: 'Obunani bekor qilish',
            color: 'text-slate-400',
            bg: 'hover:bg-red-500/10 hover:text-red-400',
            onClick: () => { onFree(sub.id); setOpen(false); },
        },
    ];

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={() => setOpen(o => !o)}
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-muted hover:bg-muted/80 text-muted-foreground transition-colors"
            >
                <MoreVertical className="w-4 h-4" />
            </button>

            {open && (
                <div className="absolute right-0 top-10 z-30 w-64 bg-card border border-border rounded-2xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    {actions.map((a, i) =>
                        (a as any).divider ? (
                            <div key={i} className="my-1 border-t border-border" />
                        ) : (
                            <button
                                key={i}
                                onClick={(a as any).onClick}
                                className={`w-full text-left px-4 py-2.5 flex flex-col gap-0.5 transition-colors ${(a as any).color} ${(a as any).bg}`}
                            >
                                <span className="text-xs font-bold">{(a as any).label}</span>
                                <span className="text-[10px] text-muted-foreground">{(a as any).desc}</span>
                            </button>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

// ─── Tier Badge ───────────────────────────────────────────────────────────────
const TierBadge: React.FC<{ tier: string }> = ({ tier }) => {
    const cfg = {
        premium: { cls: 'bg-amber-500/10 text-amber-500 border-amber-500/30', icon: <Crown className="w-3 h-3" />, label: 'Premium' },
        pro:     { cls: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/30', icon: <Zap className="w-3 h-3" />, label: 'Pro' },
        free:    { cls: 'bg-muted text-muted-foreground border-border', icon: <Star className="w-3 h-3" />, label: 'Free' },
    }[tier] ?? { cls: 'bg-muted text-muted-foreground border-border', icon: null, label: tier };

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

    // Instant SWR initial state from localStorage cache to eliminate initial blank spinner
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

    // Broadcast modal / form
    const [broadcastTitle, setBroadcastTitle] = useState('🚀 Yangi JLPT N2 5-Qism va 6-Qism 100 ta Kanjilari yuklandi!');
    const [broadcastMessage, setBroadcastMessage] = useState("Platformaning 'To'plamlar' bo'limiga kirib, yangi yuklangan 100 ta Kanjilarni o'rganishni boshlashingiz mumkin.");
    const [broadcastTag, setBroadcastTag] = useState('JLPT N2');
    const [sendingBroadcast, setSendingBroadcast] = useState(false);
    const [broadcastSuccess, setBroadcastSuccess] = useState(false);

    // AI Card Cleaner
    const [isCleanerOpen, setIsCleanerOpen] = useState(false);

    // Secret AI Dataset Vault Modal (Easter Egg)
    const [isVaultOpen, setIsVaultOpen] = useState(false);
    const secretClicksRef = useRef(0);

    // Secret Key Combination: Ctrl+Shift+D
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

    // Message modal
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
            const [rpcSettled, profilesSettled, subsSettled, speakingSettled, coachSpeakingSettled, aiCoachSettled, studySessionsSettled] = await Promise.allSettled([
                supabase.rpc('get_admin_all_users'),
                supabase.from('profiles').select('*').limit(500),
                supabase.from('user_subscriptions').select('*').limit(500),
                supabase.from('speaking_sessions').select('*').limit(500),
                supabase.from('speaking_coach_sessions').select('*').limit(500),
                supabase.from('ai_coach_sessions').select('*').limit(500),
                supabase.from('study_sessions').select('*').limit(500)
            ]);

            const rpcUsers = (rpcSettled.status === 'fulfilled' && Array.isArray(rpcSettled.value.data)) ? rpcSettled.value.data : [];
            const dbProfiles = (profilesSettled.status === 'fulfilled' && Array.isArray(profilesSettled.value.data)) ? profilesSettled.value.data : [];
            const dbSubs = (subsSettled.status === 'fulfilled' && Array.isArray(subsSettled.value.data)) ? subsSettled.value.data : [];
            const dbSpeaking = (speakingSettled.status === 'fulfilled' && Array.isArray(speakingSettled.value.data)) ? speakingSettled.value.data : [];
            const dbCoachSpeaking = (coachSpeakingSettled.status === 'fulfilled' && Array.isArray(coachSpeakingSettled.value.data)) ? coachSpeakingSettled.value.data : [];
            const dbAiCoach = (aiCoachSettled.status === 'fulfilled' && Array.isArray(aiCoachSettled.value.data)) ? aiCoachSettled.value.data : [];
            const dbStudySessions = (studySessionsSettled.status === 'fulfilled' && Array.isArray(studySessionsSettled.value.data)) ? studySessionsSettled.value.data : [];

            // 1. Map registered users from Supabase DB (merge RPC + profiles + subscriptions)
            const userMap = new Map<string, UserSubscription>();

            rpcUsers.forEach((u: any) => {
                if (u.id) {
                    userMap.set(u.id, {
                        id: u.id,
                        email: u.email || 'student@kaizen.ai',
                        full_name: u.full_name || '',
                        tier: (u.role === 'admin' || u.role === 'superadmin' || u.email === 'fsoyilov@gmail.com' ? 'premium' : (u.tier || 'free')) as any,
                        ai_credits: u.ai_credits ?? 99999,
                        last_reset_date: u.created_at || new Date().toISOString(),
                        valid_until: undefined,
                        created_at: u.created_at || new Date().toISOString()
                    });
                }
            });
            
            dbProfiles.forEach((p: any) => {
                const uid = p.id || p.user_id;
                if (uid) {
                    userMap.set(uid, {
                        id: uid,
                        email: p.email || (p.full_name ? `${p.full_name.toLowerCase().replace(/\s+/g, '')}@kaizen.ai` : 'student@kaizen.ai'),
                        full_name: p.full_name || '',
                        tier: (p.role === 'admin' || p.role === 'superadmin' || p.email === 'fsoyilov@gmail.com' ? 'premium' : 'free') as any,
                        ai_credits: 99999,
                        last_reset_date: p.created_at || new Date().toISOString(),
                        valid_until: undefined,
                        created_at: p.created_at || new Date().toISOString()
                    });
                }
            });

            dbSubs.forEach((sub: any) => {
                const uid = sub.id || sub.user_id;
                if (!uid) return;
                const existing = userMap.get(uid);
                if (existing) {
                    existing.tier = sub.tier || existing.tier;
                    existing.ai_credits = sub.ai_credits ?? existing.ai_credits;
                    existing.valid_until = sub.valid_until || existing.valid_until;
                } else {
                    userMap.set(uid, {
                        id: uid,
                        email: sub.email || 'student@kaizen.ai',
                        full_name: '',
                        tier: sub.tier || 'free',
                        ai_credits: sub.ai_credits ?? 99999,
                        last_reset_date: sub.created_at || new Date().toISOString(),
                        valid_until: sub.valid_until,
                        created_at: sub.created_at || new Date().toISOString()
                    });
                }
            });

            const currentUid = user?.id || 'admin-root';
            const currentEmail = user?.email || 'fsoyilov@gmail.com';
            const currentName = (user as any)?.user_metadata?.full_name || (user as any)?.full_name || 'Farhod (Admin)';
            
            [...dbSpeaking, ...dbCoachSpeaking, ...dbStudySessions, ...dbAiCoach].forEach((s: any) => {
                const uid = s.user_id;
                if (uid && !userMap.has(uid)) {
                    const isCurrentUser = uid === currentUid;
                    const email = isCurrentUser ? currentEmail : (s.user_email || `user-${uid.slice(0, 6)}@kaizen.ai`);
                    userMap.set(uid, {
                        id: uid,
                        email: email || 'student@kaizen.ai',
                        full_name: isCurrentUser ? currentName : '',
                        tier: (email === 'fsoyilov@gmail.com' || isCurrentUser ? 'premium' : 'free') as any,
                        ai_credits: 99999,
                        last_reset_date: s.created_at || new Date().toISOString(),
                        created_at: s.created_at || new Date().toISOString()
                    });
                }
            });

            // Ensure current admin user is ALWAYS in userMap
            if (!userMap.has(currentUid)) {
                userMap.set(currentUid, {
                    id: currentUid,
                    email: currentEmail,
                    full_name: currentName,
                    tier: 'premium',
                    ai_credits: 99999,
                    last_reset_date: new Date().toISOString(),
                    created_at: new Date().toISOString()
                });
            } else {
                const adminEntry = userMap.get(currentUid)!;
                if (currentEmail) adminEntry.email = currentEmail;
                adminEntry.tier = 'premium';
                if (currentName && !adminEntry.full_name) adminEntry.full_name = currentName;
            }

            const usersList = Array.from(userMap.values());
            setSubscriptions(usersList);
            if (typeof window !== 'undefined' && usersList.length > 0) {
                try {
                    localStorage.setItem('study_planner_admin_users_cache', JSON.stringify(usersList.slice(0, 100)));
                } catch {}
            }

            // 2. Aggregate daily stats from speaking_sessions, speaking_coach_sessions and study_sessions + local storage
            const dateMap = new Map<string, { activity_date: string; activeUsers: Set<string>; total_duration_minutes: number; total_sessions: number }>();

            const processRecord = (created_at?: string, durationMin?: number, userId?: string) => {
                if (!created_at) return;
                const dateStr = created_at.split('T')[0];
                if (!dateMap.has(dateStr)) {
                    dateMap.set(dateStr, {
                        activity_date: dateStr,
                        activeUsers: new Set<string>(),
                        total_duration_minutes: 0,
                        total_sessions: 0
                    });
                }
                const entry = dateMap.get(dateStr)!;
                if (userId) entry.activeUsers.add(userId);
                entry.total_duration_minutes += Math.max(1, Math.round(durationMin || 2));
                entry.total_sessions += 1;
            };

            dbSpeaking.forEach((s: any) => {
                processRecord(s.created_at || s.createdAt, (s.duration_seconds || s.durationSeconds || 120) / 60, s.user_id);
            });

            dbCoachSpeaking.forEach((s: any) => {
                processRecord(s.created_at || s.createdAt, (s.duration_seconds || s.durationSeconds || 120) / 60, s.user_id);
            });

            dbAiCoach.forEach((s: any) => {
                processRecord(s.created_at || s.createdAt, 2, s.user_id);
            });

            dbStudySessions.forEach((s: any) => {
                processRecord(s.created_at || s.start_time, s.duration || s.planned_duration || 25, s.user_id);
            });

            // Scan local storage for client sessions & activity
            if (typeof window !== 'undefined') {
                try {
                    for (let i = 0; i < localStorage.length; i++) {
                        const k = localStorage.key(i);
                        if (k && (k.includes('scenario_history') || k.includes('speaking') || k.includes('study_sessions') || k.includes('focus_history') || k.includes('pomodoro'))) {
                            const raw = localStorage.getItem(k);
                            if (raw) {
                                try {
                                    const parsed = JSON.parse(raw);
                                    if (Array.isArray(parsed)) {
                                        parsed.forEach((item: any) => {
                                            const itemDate = item.created_at || item.createdAt || item.start_time || item.date;
                                            const itemDur = (item.duration_seconds || item.durationSeconds) ? (item.duration_seconds || item.durationSeconds) / 60 : (item.duration || 2);
                                            processRecord(itemDate, itemDur, item.user_id || 'self');
                                        });
                                    }
                                } catch {}
                            }
                        }
                    }
                } catch {}
            }

            const sortedStats = Array.from(dateMap.values())
                .sort((a, b) => a.activity_date.localeCompare(b.activity_date))
                .slice(-14)
                .map(entry => ({
                    activity_date: entry.activity_date,
                    active_users: Math.max(1, entry.activeUsers.size),
                    total_duration_minutes: entry.total_duration_minutes,
                    total_sessions: entry.total_sessions
                }));

            setDailyStats(sortedStats);
            if (typeof window !== 'undefined' && sortedStats.length > 0) {
                try {
                    localStorage.setItem('study_planner_admin_stats_cache', JSON.stringify(sortedStats));
                } catch {}
            }
        } catch (err) {
            console.error('fetchAdminData error:', err);
        }
    };

    useEffect(() => {
        let isMounted = true;
        (async () => {
            try {
                await fetchAdminData();
            } finally {
                if (isMounted) setLoading(false);
            }
        })();
        return () => { isMounted = false; };
    }, [user?.email]);

    const handleRefresh = async () => {
        setRefreshing(true);
        await fetchAdminData();
        setRefreshing(false);
    };

    // Stats & Real User Activity
    const totalUsers = subscriptions.length;
    const todayStr = new Date().toISOString().split('T')[0];
    const todayStat = dailyStats.find(s => s.activity_date === todayStr);
    const activeTodayCount = todayStat?.active_users || 0;
    const totalSessionsCount = dailyStats.reduce((sum, d) => sum + (d.total_sessions || 0), 0);
    const totalDurationMinutes = dailyStats.reduce((sum, d) => sum + (d.total_duration_minutes || 0), 0);
    const totalDurationHours = Math.floor(totalDurationMinutes / 60);
    const remainingMinutes = totalDurationMinutes % 60;

    // Filter users by search
    const filteredSubscriptions = userSearchQuery.trim()
        ? subscriptions.filter(s =>
            s.email.toLowerCase().includes(userSearchQuery.toLowerCase()) ||
            (s.full_name && s.full_name.toLowerCase().includes(userSearchQuery.toLowerCase()))
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
            console.error("Set tier error:", error);
            toast({
                variant: 'destructive',
                title: '❌ Obuna berishda xatolik',
                description: error.message || 'Ma\'lumotlar bazasiga yozishda xatolik yuz berdi.'
            });
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
            console.error("Set tier trial error:", error);
            toast({
                variant: 'destructive',
                title: '❌ Sinov muddati berishda xatolik',
                description: error.message || 'Ma\'lumotlar bazasiga yozishda xatolik yuz berdi.'
            });
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
            toast({
                title: '✅ Xabar Yuborildi',
                description: `Xabar ${messageModalUser.email} ga muvaffaqiyatli yetkazildi.`
            });
            setMessageModalUser(null);
            setMsgContent('');
        } catch { 
            toast({
                variant: 'destructive',
                title: 'Xatolik',
                description: 'Xabar yuborishda xatolik yuz berdi.'
            });
        }
        finally { setSendingMsg(false); }
    };

    const handleToggleAdmin = (targetEmail: string) => {
        if (!isSuperAdmin(user?.email)) {
            toast({
                variant: 'destructive',
                title: 'Ruxsat Cheklangan',
                description: 'Faqat Super Admin boshqa foydalanuvchiga Admin rolini bera oladi.'
            });
            return;
        }
        if (isAdminEmail(targetEmail)) {
            revokeAdminRole(targetEmail);
            toast({
                title: '🛡️ Adminlik Bekor Qilindi',
                description: `${targetEmail} adminlikdan chiqarildi.`
            });
        } else {
            grantAdminRole(targetEmail);
            toast({
                title: '🛡️ Admin Roli Berildi',
                description: `${targetEmail} ga Admin roli muvaffaqiyatli berildi!`
            });
        }
        fetchAdminData();
    };

    return (
        <div className="max-w-6xl mx-auto space-y-6 pb-20 md:pb-12 animate-in fade-in duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
                <div>
                    <h1 
                        onClick={handleSecretTitleClick} 
                        className="text-xl sm:text-2xl font-black text-foreground tracking-tight cursor-default select-none transition-colors hover:text-indigo-400/90 active:scale-[0.99]"
                        title="Kaizen Admin Console"
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

            {/* Navigation Tabs (Foydalanuvchilar | AI Coach Speech Analytics (Natijalar %) | Yaponcha Ssenariylar) */}
            <div className="flex items-center gap-1 bg-muted p-1 rounded-xl border border-border w-fit text-xs font-bold">
                <button
                    onClick={() => setActiveSection('users')}
                    className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                        activeSection === 'users' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    <Users size={14} /> Foydalanuvchilar & Faollik ({totalUsers})
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

            {/* TAB 1: USERS & ACTIVITY */}
            {activeSection === 'users' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                    {/* Stats Cards Grid - User Engagement & Activity */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="bg-card border border-border rounded-2xl p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold shrink-0">
                                <Users size={18} />
                            </div>
                            <div>
                                <div className="text-xl font-black text-foreground">{totalUsers}</div>
                                <div className="text-[11px] font-semibold text-muted-foreground">Jami Foydalanuvchilar</div>
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

                    {/* Daily Activity Chart */}
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
                                        return {
                                            ...s,
                                            dateFormatted: `${day}-${months[d.getMonth()] || ''}`
                                        };
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

                    {/* Users Management Section */}
                    <div className="bg-card border border-border rounded-2xl overflow-hidden">
                        <div className="p-4 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                                <Users size={16} className="text-primary" />
                                <h2 className="font-bold text-sm text-foreground">Foydalanuvchilar Boshqaruvi</h2>
                                <span className="px-2 py-0.5 bg-muted rounded-full text-[11px] font-extrabold text-muted-foreground">{filteredSubscriptions.length} / {totalUsers}</span>
                            </div>

                            <div className="relative w-full sm:w-64">
                                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Qidiruv..."
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
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-foreground truncate">
                                                    {sub.full_name || sub.email.split('@')[0]}
                                                </span>
                                                <TierBadge tier={sub.tier} />
                                            </div>
                                            <span className="text-[11px] text-muted-foreground truncate block">{sub.email}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 shrink-0">
                                        <button
                                            onClick={() => setUserTierDays(sub.id, 'premium', 3)}
                                            title="3 kunlik Premium Trial berish"
                                            className="px-2.5 py-1 text-[10px] font-extrabold text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-lg hover:bg-amber-500/20 transition-colors"
                                        >
                                            +3 kun
                                        </button>
                                        <button
                                            onClick={() => setMessageModalUser({ id: sub.id, email: sub.email })}
                                            title="Xabar yuborish"
                                            className="p-1.5 text-muted-foreground hover:text-foreground bg-muted rounded-lg border border-border transition-colors"
                                        >
                                            <MessageSquare size={13} />
                                        </button>
                                        <ActionDropdown
                                            sub={sub}
                                            onTierDays={setUserTierDays}
                                            onTier={setUserTier}
                                            onMessage={setMessageModalUser}
                                            onFree={(id) => setUserTier(id, 'free', 0)}
                                            onToggleAdmin={handleToggleAdmin}
                                            isUserAdmin={isAdminEmail(sub.email)}
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

                    {/* Kaizen AI Gateway Status */}
                    <div className="bg-card border border-border rounded-2xl p-4 space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Cpu size={16} className="text-primary" />
                                <div>
                                    <h2 className="font-bold text-sm text-foreground">Kaizen AI Gateway Status</h2>
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
