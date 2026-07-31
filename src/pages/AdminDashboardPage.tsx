import React, { useEffect, useRef, useState } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { supabase } from '../lib/supabase';
import {
    Shield, Users, Key, Loader2, Save, CheckCircle2,
    MessageSquare, Send, X, Gift, Crown,
    Zap, Star, RefreshCw, MoreVertical, UserX, Home, Activity, TrendingUp, BookOpen,
    Megaphone, Wand2, PieChart, AlertTriangle
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { isAdminEmail } from '../utils/admin';
import { UserNotificationService } from '../services/UserNotificationService';
import { AdminAiCardCleanerModal } from '../components/decks/AdminAiCardCleanerModal';
import {
    AreaChart, Area, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

interface UserSubscription {
    id: string;
    email: string;
    tier: 'free' | 'pro' | 'premium';
    ai_credits: number;
    last_reset_date: string;
    created_at: string;
    valid_until?: string;
}

// ─── Dropdown Menu Component ─────────────────────────────────────────────────
interface DropdownMenuProps {
    sub: UserSubscription;
    onTierDays: (id: string, tier: string, days: number) => void;
    onTier: (id: string, tier: string, months: number) => void;
    onMessage: (user: { id: string; email: string }) => void;
    onFree: (id: string) => void;
}

const ActionDropdown: React.FC<DropdownMenuProps> = ({ sub, onTierDays, onTier, onMessage, onFree }) => {
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
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
                <MoreVertical className="w-4 h-4 text-slate-500" />
            </button>

            {open && (
                <div className="absolute right-0 top-11 z-30 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    {actions.map((a, i) =>
                        (a as any).divider ? (
                            <div key={i} className="my-1 border-t border-slate-100 dark:border-slate-800" />
                        ) : (
                            <button
                                key={i}
                                onClick={(a as any).onClick}
                                className={`w-full text-left px-4 py-2.5 flex flex-col gap-0.5 transition-colors ${(a as any).color} ${(a as any).bg}`}
                            >
                                <span className="text-sm font-semibold">{(a as any).label}</span>
                                <span className="text-[11px] text-slate-400">{(a as any).desc}</span>
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
        premium: { cls: 'bg-amber-500/10 text-amber-500 border-amber-500/25', icon: <Crown className="w-3 h-3" />, label: 'Premium' },
        pro:     { cls: 'bg-fuchsia-500/10 text-fuchsia-500 border-fuchsia-500/25', icon: <Zap className="w-3 h-3" />, label: 'Pro' },
        free:    { cls: 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700', icon: <Star className="w-3 h-3" />, label: 'Free' },
    }[tier] ?? { cls: 'bg-slate-100 text-slate-500 border-slate-200', icon: null, label: tier };

    return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${cfg.cls}`}>
            {cfg.icon}
            {cfg.label}
        </span>
    );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const AdminDashboardPage: React.FC = () => {
    const { user } = useStudyData();
    const navigate = useNavigate();
    const [subscriptions, setSubscriptions] = useState<UserSubscription[]>([]);
    const [loading, setLoading] = useState(true);
    const [apiKey, setApiKey] = useState('');
    const [savingKey, setSavingKey] = useState(false);
    const [keySaved, setKeySaved] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [dailyStats, setDailyStats] = useState<any[]>([]);
    const [statsError, setStatsError] = useState<boolean>(false);
    const [chartMode, setChartMode] = useState<'dau' | 'duration'>('dau');

    // Broadcast modal / form
    const [broadcastTitle, setBroadcastTitle] = useState('🚀 Yangi JLPT N2 5-Qism va 6-Qism 100 ta Kanjilari yuklandi!');
    const [broadcastMessage, setBroadcastMessage] = useState("Platformaning 'To'plamlar' bo'limiga kirib, yangi yuklangan 100 ta Kanjilarni o'rganishni boshlashingiz mumkin.");
    const [broadcastTag, setBroadcastTag] = useState('JLPT N2');
    const [sendingBroadcast, setSendingBroadcast] = useState(false);
    const [broadcastSuccess, setBroadcastSuccess] = useState(false);

    // AI Card Cleaner
    const [isCleanerOpen, setIsCleanerOpen] = useState(false);

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

    // Stats
    const totalUsers = subscriptions.length;
    const premiumCount = subscriptions.filter(s => s.tier === 'premium').length;
    const proCount = subscriptions.filter(s => s.tier === 'pro').length;
    const freeCount = subscriptions.filter(s => s.tier === 'free').length;

    const fetchAdminData = async () => {
        try {
            const { data: subs } = await supabase
                .from('user_subscriptions')
                .select('*')
                .order('created_at', { ascending: false });
            setSubscriptions(subs || []);

            const { data: appSettings } = await supabase
                .from('app_settings')
                .select('gemini_api_key')
                .eq('id', 1)
                .single();
            if (appSettings) setApiKey(appSettings.gemini_api_key || '');

            const { data: stats, error: statsErr } = await supabase
                .from('admin_daily_stats')
                .select('*')
                .order('activity_date', { ascending: true })
                .limit(30);
            if (statsErr) {
                console.warn('Failed to fetch admin_daily_stats:', statsErr);
                setStatsError(true);
            } else {
                setDailyStats(stats || []);
                setStatsError(false);
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        (async () => {
            setLoading(true);
            if (isAdminEmail(user?.email)) await fetchAdminData();
            setLoading(false);
        })();
    }, [user]);

    const handleRefresh = async () => {
        setRefreshing(true);
        await fetchAdminData();
        setRefreshing(false);
    };

    if (loading) return (
        <div className="flex items-center justify-center h-[70vh]">
            <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
        </div>
    );

    if (!isAdminEmail(user?.email)) return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4 text-center">
            <span className="text-7xl">🔒</span>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Kirish taqiqlangan</h2>
            <p className="text-slate-500 max-w-sm">Bu sahifaga faqat admin foydalanuvchilari kira oladi.</p>
            <Button onClick={() => navigate('/')} className="gap-2 mt-2">
                <Home className="w-4 h-4" /> Bosh sahifaga
            </Button>
        </div>
    );

    // ── Handlers ──────────────────────────────────────────────────────────────
    const handleSaveApiKey = async () => {
        setSavingKey(true);
        try {
            const { error } = await supabase.from('app_settings').upsert({ id: 1, gemini_api_key: apiKey });
            if (error) throw error;
            setKeySaved(true);
            setTimeout(() => setKeySaved(false), 2500);
        } catch { alert('Kalitni saqlashda xatolik.'); }
        finally { setSavingKey(false); }
    };

    const setUserTier = async (userId: string, newTier: string, months: number) => {
        let validUntil: string | undefined;
        if (newTier !== 'free') {
            const d = new Date();
            d.setMonth(d.getMonth() + months);
            validUntil = d.toISOString();
        }
        const { error } = await supabase
            .from('user_subscriptions')
            .update({ tier: newTier, valid_until: validUntil || null })
            .eq('id', userId);
        if (!error) setSubscriptions(s => s.map(x => x.id === userId ? { ...x, tier: newTier as any, valid_until: validUntil } : x));
    };

    const setUserTierDays = async (userId: string, newTier: string, days: number) => {
        const d = new Date();
        d.setDate(d.getDate() + days);
        const validUntil = d.toISOString();
        const { error } = await supabase
            .from('user_subscriptions')
            .update({ tier: newTier, valid_until: validUntil })
            .eq('id', userId);
        if (!error) {
            setSubscriptions(s => s.map(x => x.id === userId ? { ...x, tier: newTier as any, valid_until: validUntil } : x));
            await UserNotificationService.sendNotification({
                user_id: userId,
                title: '🎁 3 Kunlik Bepul Premium Trial!',
                message: 'Sizga 3 kunlik bepul Premium tarif taqdim etildi! Barcha imkoniyatlarni sinab ko\'ring 🚀',
                type: 'promo'
            });
        }
    };

    const addCredits = async (userId: string, cur: number) => {
        const n = cur + 3;
        const { error } = await supabase.from('user_subscriptions').update({ ai_credits: n }).eq('id', userId);
        if (!error) setSubscriptions(s => s.map(x => x.id === userId ? { ...x, ai_credits: n } : x));
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
            alert(`✅ Xabar ${messageModalUser.email} ga yuborildi!`);
            setMessageModalUser(null);
            setMsgContent('');
        } catch { alert('Xabar yuborishda xatolik.'); }
        finally { setSendingMsg(false); }
    };

    const formatDate = (iso?: string) => {
        if (!iso) return '—';
        return new Date(iso).toLocaleDateString('uz-UZ', { day: '2-digit', month: 'short', year: 'numeric' });
    };

    // ── Render ────────────────────────────────────────────────────────────────
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-7 animate-in fade-in duration-300">

            {/* ── Header ── */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-fuchsia-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
                        <Shield className="text-white w-5 h-5" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">Admin Paneli</h1>
                        <p className="text-xs text-slate-400 mt-0.5">Foydalanuvchilar va obunalarni boshqarish</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsCleanerOpen(true)}
                        className="flex items-center gap-2 text-sm font-bold text-amber-300 bg-amber-500/20 border border-amber-500/40 hover:bg-amber-500/30 px-4 py-2 rounded-xl transition-all shadow-sm"
                    >
                        <Wand2 className="w-4 h-4" />
                        ⚡ AI Card Cleaner
                    </button>
                    <button
                        onClick={() => navigate('/admin/exams')}
                        className="flex items-center gap-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-xl transition-colors"
                    >
                        <BookOpen className="w-4 h-4" />
                        Imtihonlar (Exams)
                    </button>
                    <button
                        onClick={handleRefresh}
                        className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-4 py-2 rounded-xl transition-colors"
                    >
                        <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
                        Yangilash
                    </button>
                </div>
            </div>

            {/* ── Stats Cards ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                    { label: 'Jami foydalanuvchi', value: totalUsers, color: 'from-indigo-500 to-indigo-600', icon: <Users className="w-5 h-5 text-white" /> },
                    { label: 'Premium', value: premiumCount, color: 'from-amber-500 to-orange-500', icon: <Crown className="w-5 h-5 text-white" /> },
                    { label: 'Pro', value: proCount, color: 'from-fuchsia-500 to-purple-600', icon: <Zap className="w-5 h-5 text-white" /> },
                    { label: 'Bepul (Free)', value: freeCount, color: 'from-slate-400 to-slate-500', icon: <Star className="w-5 h-5 text-white" /> },
                ].map(stat => (
                    <div key={stat.label} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-center gap-3 shadow-sm">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                            {stat.icon}
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                            <div className="text-[11px] text-slate-400 font-medium">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Daily Activity Chart ── */}
            {statsError ? (
                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 rounded-2xl p-5 space-y-4 shadow-sm animate-in fade-in">
                    <div className="flex gap-3">
                        <span className="text-xl">⚠️</span>
                        <div>
                            <h3 className="font-bold text-amber-800 dark:text-amber-400">Kunlik Faollik Tahlili Faol Emas</h3>
                            <p className="text-xs text-amber-600 dark:text-amber-500 mt-0.5">
                                Tizimda foydalanuvchilarning kunlik faolligi va dars vaqtlarini ko'rish uchun <code>admin_daily_stats</code> ko'rinishi (View) yaratilishi lozim.
                            </p>
                        </div>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-4 text-xs font-mono text-slate-300 overflow-x-auto select-all max-h-48 border border-slate-800">
                        {`CREATE OR REPLACE VIEW public.admin_daily_stats WITH (security_invoker = false) AS
SELECT 
  (ss.start_time::date) as activity_date,
  count(distinct ss.user_id) as active_users,
  sum(ss.duration) as total_duration_minutes,
  count(ss.id) as total_sessions
FROM public.study_sessions ss
GROUP BY (ss.start_time::date)
ORDER BY activity_date DESC;

GRANT SELECT ON public.admin_daily_stats TO authenticated;`}
                    </div>
                    <p className="text-[11px] text-slate-400">
                        Ushbu SQL kodni nusxalab, Supabase SQL Editor'da ishga tushiring va sahifani yangilang.
                    </p>
                </div>
            ) : (
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-indigo-500" />
                            <div>
                                <h2 className="font-bold text-slate-800 dark:text-white text-base">Foydalanuvchilar Faolligi & Dars Vaqti</h2>
                                <p className="text-[11px] text-slate-400">Oxirgi 30 kunlik Daily Active Users (DAU) va jami o'qilgan vaqt statistikasi</p>
                            </div>
                        </div>
                        
                        {/* Tab Toggle */}
                        <div className="flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl self-start sm:self-auto border border-slate-200/30">
                            <button
                                onClick={() => setChartMode('dau')}
                                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${chartMode === 'dau' ? 'bg-white dark:bg-slate-700 shadow text-indigo-600 dark:text-white' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`}
                            >
                                <Users className="w-3.5 h-3.5 inline mr-1" />
                                Active Users (DAU)
                            </button>
                            <button
                                onClick={() => setChartMode('duration')}
                                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${chartMode === 'duration' ? 'bg-white dark:bg-slate-700 shadow text-indigo-600 dark:text-white' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`}
                            >
                                <TrendingUp className="w-3.5 h-3.5 inline mr-1" />
                                Study Time (Min)
                            </button>
                        </div>
                    </div>

                    <div className="h-64 w-full">
                        {dailyStats.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-slate-400 text-sm">
                                <Activity className="w-8 h-8 opacity-20 mb-2 animate-pulse" />
                                Kunlik faoliyat bo'yicha ma'lumotlar mavjud emas.
                            </div>
                        ) : (
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={dailyStats} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor={chartMode === 'dau' ? '#6366f1' : '#a855f7'} stopOpacity={0.2}/>
                                            <stop offset="95%" stopColor={chartMode === 'dau' ? '#6366f1' : '#a855f7'} stopOpacity={0.0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.15)" />
                                    <XAxis 
                                        dataKey="activity_date" 
                                        tickLine={false} 
                                        axisLine={false}
                                        tickFormatter={(val) => {
                                            if (!val) return '';
                                            const d = new Date(val);
                                            return d.toLocaleDateString('uz-UZ', { day: '2-digit', month: 'short' });
                                        }}
                                        tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 500 }}
                                    />
                                    <YAxis 
                                        tickLine={false} 
                                        axisLine={false}
                                        tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 500 }}
                                    />
                                    <Tooltip 
                                        contentStyle={{
                                            backgroundColor: 'rgba(15, 23, 42, 0.9)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: '16px',
                                            padding: '10px 14px',
                                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
                                        }}
                                        labelStyle={{ color: '#94a3b8', fontSize: '11px', fontWeight: 600, marginBottom: '4px' }}
                                        itemStyle={{ fontSize: '12px', fontWeight: 700 }}
                                        labelFormatter={(label) => {
                                            if (!label) return '';
                                            return new Date(label).toLocaleDateString('uz-UZ', { day: '2-digit', month: 'long', year: 'numeric' });
                                        }}
                                    />
                                    <Area 
                                        type="monotone" 
                                        dataKey={chartMode === 'dau' ? 'active_users' : 'total_duration_minutes'} 
                                        name={chartMode === 'dau' ? 'Faol foydalanuvchilar' : 'Dars vaqti (Daqiqa)'}
                                        stroke={chartMode === 'dau' ? '#6366f1' : '#a855f7'} 
                                        strokeWidth={2.5}
                                        fillOpacity={1} 
                                        fill="url(#colorValue)" 
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                </div>
            )}

            {/* ── API Key ── */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                    <Key className="w-4 h-4 text-indigo-500" />
                    <h2 className="font-bold text-slate-800 dark:text-white">Gemini API Kaliti</h2>
                    <span className="ml-auto text-[11px] text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">Pro & Premium foydalanuvchilar uchun</span>
                </div>
                <div className="flex gap-3">
                    <input
                        type="password"
                        value={apiKey}
                        onChange={e => setApiKey(e.target.value)}
                        placeholder="AIza... yoki sk-... kalit kiriting"
                        className="flex-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition"
                    />
                    <Button onClick={handleSaveApiKey} disabled={savingKey} className="gap-2 px-6 min-w-[120px]">
                        {savingKey ? <Loader2 className="w-4 h-4 animate-spin" /> : keySaved ? <CheckCircle2 className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                        {keySaved ? 'Saqlandi!' : 'Saqlash'}
                    </Button>
                </div>
            </div>

            {/* ── Users Table ── */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                    <Users className="w-4 h-4 text-indigo-500" />
                    <h2 className="font-bold text-slate-800 dark:text-white">Foydalanuvchilar</h2>
                    <span className="ml-auto text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">{totalUsers} ta</span>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/50 text-xs uppercase tracking-wider text-slate-400 font-semibold">
                                <th className="px-6 py-3 text-left">Foydalanuvchi</th>
                                <th className="px-6 py-3 text-left">Tarif</th>
                                <th className="px-6 py-3 text-left">Tugash sanasi</th>
                                <th className="px-6 py-3 text-left">AI Kreditlar</th>
                                <th className="px-6 py-3 text-center">Harakatlar</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                            {subscriptions.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="py-16 text-center text-slate-400">
                                        <UserX className="w-10 h-10 mx-auto mb-2 opacity-30" />
                                        <p>Hech qanday foydalanuvchi topilmadi</p>
                                    </td>
                                </tr>
                            ) : subscriptions.map(sub => (
                                <tr key={sub.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/30 transition-colors group">

                                    {/* Email */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                                {sub.email[0].toUpperCase()}
                                            </div>
                                            <span className="font-medium text-slate-800 dark:text-slate-200 truncate max-w-[200px]">{sub.email}</span>
                                        </div>
                                    </td>

                                    {/* Tier */}
                                    <td className="px-6 py-4">
                                        <TierBadge tier={sub.tier} />
                                    </td>

                                    {/* Valid Until */}
                                    <td className="px-6 py-4">
                                        {sub.tier !== 'free' && sub.valid_until ? (
                                            <div className="flex flex-col">
                                                <span className="font-medium text-slate-700 dark:text-slate-300">{formatDate(sub.valid_until)}</span>
                                                <span className="text-[11px] text-slate-400 mt-0.5">
                                                    {(() => {
                                                        const diff = Math.ceil((new Date(sub.valid_until).getTime() - Date.now()) / 86400000);
                                                        return diff > 0 ? `${diff} kun qoldi` : <span className="text-red-400">Muddati o'tgan</span>;
                                                    })()}
                                                </span>
                                            </div>
                                        ) : (
                                            <span className="text-slate-400 text-xs">—</span>
                                        )}
                                    </td>

                                    {/* AI Credits */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-slate-700 dark:text-slate-200 tabular-nums w-6 text-center">{sub.ai_credits}</span>
                                            <button
                                                onClick={() => addCredits(sub.id, sub.ai_credits)}
                                                title="+3 kredit qo'shish"
                                                className="text-[11px] font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 px-2 py-0.5 rounded-lg transition-colors"
                                            >
                                                +3
                                            </button>
                                        </div>
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-2">
                                            {/* Quick gift button */}
                                            <button
                                                onClick={() => setUserTierDays(sub.id, 'premium', 3)}
                                                title="3 kunlik Premium Trial berish"
                                                className="flex items-center gap-1.5 text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-500/10 hover:bg-amber-100 dark:hover:bg-amber-500/20 px-3 py-1.5 rounded-xl transition-colors border border-amber-200 dark:border-amber-500/20"
                                            >
                                                <Gift className="w-3.5 h-3.5" />
                                                3 kun
                                            </button>

                                            {/* Message button */}
                                            <button
                                                onClick={() => setMessageModalUser({ id: sub.id, email: sub.email })}
                                                title="Xabar yuborish"
                                                className="w-8 h-8 rounded-xl flex items-center justify-center bg-sky-50 dark:bg-sky-500/10 hover:bg-sky-100 dark:hover:bg-sky-500/20 text-sky-500 transition-colors border border-sky-200 dark:border-sky-500/20"
                                            >
                                                <MessageSquare className="w-3.5 h-3.5" />
                                            </button>

                                            {/* More dropdown */}
                                            <ActionDropdown
                                                sub={sub}
                                                onTierDays={setUserTierDays}
                                                onTier={setUserTier}
                                                onMessage={setMessageModalUser}
                                                onFree={(id) => setUserTier(id, 'free', 0)}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ── Message Modal ── */}
            {messageModalUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-5 animate-in zoom-in-95 duration-200">

                        {/* Modal Header */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-9 h-9 rounded-xl bg-sky-500/10 flex items-center justify-center">
                                    <MessageSquare className="w-4 h-4 text-sky-500" />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Xabar Yuborish</h3>
                            </div>
                            <button
                                onClick={() => setMessageModalUser(null)}
                                className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Recipient */}
                        <div className="flex items-center gap-2 bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 rounded-xl px-4 py-2.5">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                {messageModalUser.email[0].toUpperCase()}
                            </div>
                            <span className="text-sm font-medium text-sky-700 dark:text-sky-300 truncate">{messageModalUser.email}</span>
                        </div>

                        {/* Quick Templates */}
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Tezkor shablonlar</p>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { label: '🎁 3 Kun Trial', title: '🎁 3 Kunlik Bepul Premium Trial!', msg: 'Salom! Sizga 3 kunlik bepul Premium tarif taqdim etildi. Barcha imkoniyatlarni sinab ko\'ring 🚀' },
                                    { label: '👑 VIP Faol', title: '👑 VIP Obuna Aktivlashdi!', msg: 'Sizning VIP obunangiz muvaffaqiyatli faollashtirildi! Cheksiz AI imkoniyatlaridan bahramand bo\'ling 🌟' },
                                    { label: '⚡ Pro Faol', title: '⚡ Pro Obuna Faollashdi!', msg: 'Pro tarifga xush kelibsiz! Kengaytirilgan funksiyalardan foydalaning 🚀' },
                                ].map(t => (
                                    <button
                                        key={t.label}
                                        onClick={() => { setMsgTitle(t.title); setMsgContent(t.msg); }}
                                        className="text-xs bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors font-medium"
                                    >
                                        {t.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Fields */}
                        <div className="space-y-3">
                            <div>
                                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1.5">Sarlavha</label>
                                <input
                                    type="text"
                                    value={msgTitle}
                                    onChange={e => setMsgTitle(e.target.value)}
                                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 outline-none transition"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1.5">Xabar matni</label>
                                <textarea
                                    rows={3}
                                    value={msgContent}
                                    onChange={e => setMsgContent(e.target.value)}
                                    placeholder="Xabar matnini yozing..."
                                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 outline-none transition resize-none"
                                />
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 pt-1">
                            <Button variant="outline" onClick={() => setMessageModalUser(null)} className="flex-1">
                                Bekor qilish
                            </Button>
                            <Button
                                onClick={handleSendMsg}
                                disabled={sendingMsg || !msgTitle.trim() || !msgContent.trim()}
                                className="flex-1 gap-2 bg-sky-600 hover:bg-sky-500"
                            >
                                {sendingMsg ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                                {sendingMsg ? 'Yuborilmoqda...' : 'Yuborish'}
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* ── 📢 Broadcast Announcement Form Section ── */}
            <div className="bg-gradient-to-br from-indigo-900 via-purple-950 to-slate-900 text-white rounded-3xl p-6 shadow-xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-amber-500/20 border border-amber-500/30 rounded-2xl text-amber-400">
                            <Megaphone size={22} />
                        </div>
                        <div>
                            <h2 className="text-lg font-black flex items-center gap-2">
                                📢 Global Broadcast Announcement (Barcha Foydalanuvchilarga E'lon)
                            </h2>
                            <p className="text-xs text-slate-300">
                                Ushbu bildirishnoma barcha foydalanuvchilar ekranida va Push-notification shaklida ko'rinadi.
                            </p>
                        </div>
                    </div>

                    {broadcastSuccess && (
                        <div className="px-3.5 py-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs rounded-xl flex items-center gap-1.5 animate-in fade-in">
                            <CheckCircle2 size={16} /> Live E'lon Barchaga Yuborildi!
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div>
                        <label className="font-extrabold text-slate-300 block mb-1.5">E'lon Sarlavhasi:</label>
                        <input
                            type="text"
                            value={broadcastTitle}
                            onChange={e => setBroadcastTitle(e.target.value)}
                            placeholder="🚀 Yangi JLPT N2 5-Qism va 6-Qism 100 ta Kanjilari yuklandi!"
                            className="w-full p-3 bg-black/40 border border-white/10 rounded-xl text-white font-bold placeholder:text-slate-500"
                        />
                    </div>

                    <div>
                        <label className="font-extrabold text-slate-300 block mb-1.5">Tag (Kategoriya / Daraja):</label>
                        <select
                            value={broadcastTag}
                            onChange={e => setBroadcastTag(e.target.value)}
                            className="w-full p-3 bg-black/40 border border-white/10 rounded-xl text-white font-bold"
                        >
                            <option value="JLPT N2">JLPT N2</option>
                            <option value="JLPT N3">JLPT N3</option>
                            <option value="JLPT N4">JLPT N4</option>
                            <option value="JLPT N5">JLPT N5</option>
                            <option value="IELTS">IELTS</option>
                            <option value="E'lon">Umumiy E'lon</option>
                        </select>
                    </div>

                    <div>
                        <label className="font-extrabold text-slate-300 block mb-1.5">Harakat (Action):</label>
                        <Button
                            disabled={sendingBroadcast || !broadcastTitle.trim() || !broadcastMessage.trim()}
                            onClick={handleSendBroadcast}
                            className="w-full py-3 bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 hover:from-amber-600 hover:to-indigo-700 text-white font-black text-xs rounded-xl shadow-lg flex items-center justify-center gap-2"
                        >
                            {sendingBroadcast ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
                            {sendingBroadcast ? "Yuborilmoqda..." : "📢 Live Broadcast Yuborish"}
                        </Button>
                    </div>
                </div>

                <div>
                    <label className="font-extrabold text-slate-300 block mb-1.5 text-xs">E'lon Matni:</label>
                    <textarea
                        rows={2}
                        value={broadcastMessage}
                        onChange={e => setBroadcastMessage(e.target.value)}
                        placeholder="Platformaning 'To'plamlar' bo'limiga kirib, yangi yuklangan 100 ta Kanjilarni o'rganishni boshlashingiz mumkin."
                        className="w-full p-3 bg-black/40 border border-white/10 rounded-xl text-white font-medium text-xs placeholder:text-slate-500 resize-none"
                    />
                </div>
            </div>

            {/* ── 📊 Student Deck Popularity & Struggled Cards Analytics ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-indigo-500/10 text-indigo-500 rounded-2xl">
                            <PieChart size={20} />
                        </div>
                        <div>
                            <h3 className="font-black text-base text-foreground">Kutubxona Decklar Mashhurligi (Deck Popularity)</h3>
                            <p className="text-xs text-muted-foreground">Foydalanuvchilar eng ko'p saqlagan darajalar ulushi</p>
                        </div>
                    </div>

                    <div className="h-56 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={[
                                { name: 'JLPT N4', count: 6655, fill: '#6366f1' },
                                { name: 'IELTS A1-A2', count: 1646, fill: '#10b981' },
                                { name: 'IELTS B1-B2', count: 1201, fill: '#f59e0b' },
                                { name: 'JLPT N3', count: 350, fill: '#ec4899' },
                                { name: 'JLPT N5', count: 200, fill: '#3b82f6' },
                                { name: 'JLPT N2', count: 150, fill: '#8b5cf6' },
                            ]}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.15)" />
                                <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} tickLine={false} />
                                <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} />
                                <Tooltip />
                                <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                                    {[
                                        { fill: '#6366f1' },
                                        { fill: '#10b981' },
                                        { fill: '#f59e0b' },
                                        { fill: '#ec4899' },
                                        { fill: '#3b82f6' },
                                        { fill: '#8b5cf6' }
                                    ].map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-rose-500/10 text-rose-500 rounded-2xl">
                            <AlertTriangle size={20} />
                        </div>
                        <div>
                            <h3 className="font-black text-base text-foreground">Eng Qiyin Kartochkalar (Struggled Cards)</h3>
                            <p className="text-xs text-muted-foreground">O'quvchilar ko'p marotaba Qayta (AGAIN) deb baholagan so'zlar</p>
                        </div>
                    </div>

                    <div className="space-y-2.5 text-xs max-h-56 overflow-y-auto pr-1">
                        {[
                            { word: 'たくさん (Takusan)', meaning: 'Ko\'p, mo\'l-ko me l', count: '142 marta qayta' },
                            { word: '勉強 (Benkyou)', meaning: 'O\'qish, ta\'lim olish', count: '98 marta qayta' },
                            { word: '約束 (Yakusoku)', meaning: 'Va\'da, kelishuv', count: '76 marta qayta' },
                            { word: '準備 (Junbi)', meaning: 'Tayyorgarlik', count: '64 marta qayta' },
                            { word: '複雑 (Fukuzatsu)', meaning: 'Murakkab, chigal', count: '52 marta qayta' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
                                <div>
                                    <span className="font-extrabold text-foreground block">{item.word}</span>
                                    <span className="text-[11px] text-muted-foreground">{item.meaning}</span>
                                </div>
                                <span className="px-2.5 py-1 text-[10px] font-black text-rose-500 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                                    {item.count}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* AI OCR Card Cleaner Modal */}
            <AdminAiCardCleanerModal
                isOpen={isCleanerOpen}
                onClose={() => setIsCleanerOpen(false)}
            />
        </div>
    );
};

export default AdminDashboardPage;
