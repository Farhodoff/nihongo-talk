import React, { useEffect, useRef, useState } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { supabase } from '../lib/supabase';
import {
    Shield, Users, Key, Loader2, Save, CheckCircle2,
    MessageSquare, Send, X, Gift, Crown,
    Zap, Star, RefreshCw, MoreVertical, UserX, Home
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { isAdminEmail } from '../utils/admin';
import { UserNotificationService } from '../services/UserNotificationService';

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

    // Message modal
    const [messageModalUser, setMessageModalUser] = useState<{ id: string; email: string } | null>(null);
    const [msgTitle, setMsgTitle] = useState('🎁 Maxsus Xabar');
    const [msgContent, setMsgContent] = useState('');
    const [sendingMsg, setSendingMsg] = useState(false);

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
                <button
                    onClick={handleRefresh}
                    className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-4 py-2 rounded-xl transition-colors"
                >
                    <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
                    Yangilash
                </button>
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
        </div>
    );
};

export default AdminDashboardPage;
