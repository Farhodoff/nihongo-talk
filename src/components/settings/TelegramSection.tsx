import React, { useState, useEffect, useCallback } from 'react';
import { 
    Loader2, ExternalLink, Send, Copy, Check, 
    Bell, Bot, Sparkles, RefreshCw, Unlink, AlertCircle, 
    BookOpen, CheckSquare, Zap, Clock, ShieldCheck 
} from 'lucide-react';
import { Button } from '../ui/Button';
import telegramService, { TelegramUser } from '../../services/TelegramService';
import { useStudyData } from '../../context/StudyPlannerContext';
import { toast } from '../../hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

const TelegramSection: React.FC = () => {
    const { user, flashcards } = useStudyData();
    const [linkCode, setLinkCode] = useState<string | null>(null);
    const [expiresAt, setExpiresAt] = useState<string | null>(null);
    const [linkedAccount, setLinkedAccount] = useState<TelegramUser | null>(null);
    const [loading, setLoading] = useState(false);
    const [actionLoading, setActionLoading] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [showCommands, setShowCommands] = useState(false);

    const dueCardsCount = flashcards.filter(f => !f.nextReviewDate || new Date(f.nextReviewDate) <= new Date()).length;

    // Get user ID strictly from authenticated user
    const getEffectiveUserId = useCallback(() => {
        return user?.id || null;
    }, [user]);

    const effectiveUserId = getEffectiveUserId();

    const checkLinkStatus = useCallback(async (silent = false) => {
        if (!effectiveUserId) {
            setLinkedAccount(null);
            setLoading(false);
            return;
        }
        if (!silent) setLoading(true);
        try {
            const account = await telegramService.getLinkedAccount(effectiveUserId);
            setLinkedAccount(account);
            if (account) {
                setNotificationsEnabled(account.notifications_enabled);
                setLinkCode(null);
            }
            if (!silent && account) {
                toast({ title: "✅ Telegram holati yangilandi: Ulangan" });
            }
        } catch (err) {
            if (!silent) {
                toast({ variant: 'destructive', title: "Holatni tekshirishda xatolik" });
            }
        } finally {
            if (!silent) setLoading(false);
        }
    }, [effectiveUserId]);

    // Load linked account on mount
    useEffect(() => {
        checkLinkStatus(true);
    }, [checkLinkStatus]);

    // Poll for link completion after code is generated
    useEffect(() => {
        if (!effectiveUserId || !linkCode || linkedAccount) return;

        const pollInterval = setInterval(async () => {
            try {
                const account = await telegramService.getLinkedAccount(effectiveUserId);
                if (account) {
                    setLinkedAccount(account);
                    setNotificationsEnabled(account.notifications_enabled);
                    setLinkCode(null);
                    toast({
                        title: "🎉 Telegram muvaffaqiyatli ulandi!",
                        description: `@${account.telegram_username || account.telegram_first_name || 'Foydalanuvchi'} hisobi bog'landi.`
                    });
                }
            } catch {
                // Silently ignore polling errors
            }
        }, 3000);

        return () => clearInterval(pollInterval);
    }, [effectiveUserId, linkCode, linkedAccount]);

    const handleGenerateCode = async () => {
        if (!effectiveUserId) {
            toast({ variant: 'destructive', title: "Telegram botni ulash uchun avval tizimga kiring" });
            return;
        }
        setLoading(true);
        try {
            const result = await telegramService.generateLinkCode(effectiveUserId);
            if (result.linked && result.account) {
                setLinkedAccount(result.account);
                setNotificationsEnabled(result.account.notifications_enabled);
                toast({ title: "✅ Akkaunt allaqachon ulangan!" });
            } else if (result.code) {
                setLinkCode(result.code);
                setExpiresAt(result.expires_at || new Date(Date.now() + 15 * 60 * 1000).toISOString());
                toast({ title: "🔑 Ulanish kodi yaratildi", description: "Telegram botga kodni yuboring yoki quyidagi tugmani bosing." });
            }
        } catch (err) {
            toast({ variant: 'destructive', title: "Kodni yaratishda xatolik yuz berdi" });
        } finally {
            setLoading(false);
        }
    };

    const handleCopyCode = async () => {
        if (!linkCode) return;
        try {
            await navigator.clipboard.writeText(linkCode);
            setCopied(true);
            toast({ title: "📋 Kod nusxalandi!", description: `Kod: ${linkCode}` });
            setTimeout(() => setCopied(false), 2000);
        } catch {
            toast({ title: `Kod: ${linkCode}` });
        }
    };

    const handleUnlink = async () => {
        if (!effectiveUserId) return;
        if (!window.confirm('Haqiqatan ham Telegram akkauntini uzmoqchimisiz? Bildirishnomalar to\'xtatiladi.')) return;

        setActionLoading('unlink');
        try {
            const success = await telegramService.unlinkAccount(effectiveUserId);
            if (success) {
                setLinkedAccount(null);
                setLinkCode(null);
                toast({ title: "🔌 Telegram akkaunti muvaffaqiyatli uzildi" });
            } else {
                toast({ variant: 'destructive', title: "Uzishda xatolik yuz berdi" });
            }
        } catch {
            toast({ variant: 'destructive', title: "Uzishda xatolik yuz berdi" });
        } finally {
            setActionLoading(null);
        }
    };

    const handleToggleNotifications = async () => {
        if (!effectiveUserId) return;
        const newValue = !notificationsEnabled;
        setActionLoading('toggle_notif');
        try {
            const success = await telegramService.updateNotificationSettings(effectiveUserId, newValue);
            if (success) {
                setNotificationsEnabled(newValue);
                toast({ 
                    title: newValue ? "🔔 Telegram bildirishnomalari yoqildi" : "🔕 Telegram bildirishnomalari o'chirildi" 
                });
            } else {
                toast({ variant: 'destructive', title: "Sozlamani saqlashda xatolik" });
            }
        } catch {
            toast({ variant: 'destructive', title: "Sozlamani saqlashda xatolik" });
        } finally {
            setActionLoading(null);
        }
    };

    const handleSendSrsNotification = async () => {
        if (!linkedAccount || !effectiveUserId) return;
        setActionLoading('srs_notif');
        try {
            const text = `🧠 <b>Nihongo Talk — SRS Fleshkartalar Eslatmasi!</b>\n\n` +
                `Salom, ${linkedAccount.telegram_first_name || "O'quvchi"}! 👋\n` +
                (dueCardsCount > 0 
                    ? `Sizda bugun takrorlash uchun <b>${dueCardsCount} ta fleshkarta</b> tayyor turibdi.\n5 daqiqa ajratib takrorlang va streak ballingizni oshiring! 🚀`
                    : `Barcha fleshkartalaringiz bugun uchun o'zlashtirilgan! Yangi so'zlar qo'shishingiz yoki test topshirishingiz mumkin. ✨`
                );
            const ok = await telegramService.sendNotification(effectiveUserId, text);
            if (ok) {
                toast({ 
                    title: "🧠 SRS eslatmasi yuborildi!", 
                    description: "Telegram botingizni tekshiring." 
                });
            } else {
                toast({ 
                    variant: 'destructive', 
                    title: "Xabar yuborishda xatolik", 
                    description: "Botni /start orqali qayta faollashtiring." 
                });
            }
        } catch {
            toast({ variant: 'destructive', title: "Xabar yuborishda xatolik" });
        } finally {
            setActionLoading(null);
        }
    };

    const handleSendTestNotification = async () => {
        if (!effectiveUserId) return;
        setActionLoading('test_notif');
        try {
            const ok = await telegramService.sendNotification(
                effectiveUserId,
                "🔔 <b>Nihongo Talk — Sinov Xabarnomasi!</b>\n\nTelegram integratsiyasi muvaffaqiyatli ishlamoqda. Kunlik rejalaringiz va eslatmalaringiz shu yerga yetkaziladi! 🚀"
            );
            if (ok) {
                toast({ 
                    title: "🔔 Sinov xabarnomasi yuborildi!", 
                    description: "Telegram ilovangizga xabar bordi." 
                });
            } else {
                toast({ 
                    variant: 'destructive', 
                    title: "Xabar yetkazilmadi", 
                    description: "Bot sozlamalarini tekshiring." 
                });
            }
        } catch {
            toast({ variant: 'destructive', title: "Xatolik yuz berdi" });
        } finally {
            setActionLoading(null);
        }
    };

    const formatExpiry = (expiry: string) => {
        const diff = new Date(expiry).getTime() - Date.now();
        const minutes = Math.max(1, Math.floor(diff / 60000));
        return `${minutes} daqiqa`;
    };

    const botUsername = import.meta.env.VITE_TELEGRAM_BOT_USERNAME || 'study_plannerr_bot';

    const botCommands = [
        { cmd: '/today', desc: 'Bugungi bajarilmagan rejalarni ko\'rish va tugma orqali bajarish' },
        { cmd: '/done', desc: 'Oxirgi bajarilgan vazifalar ro\'yxati va vaqtini ko\'rish' },
        { cmd: '/add [nomi]', desc: 'Yangi vazifani to\'g\'ridan-to\'g\'ri bot orqali saytga qo\'shish' },
        { cmd: '/stats', desc: 'Mening darajam (Level), umumiy XP va Streak ma\'lumotlari' },
        { cmd: '/goals', desc: 'Qo\'yilgan asosiy maqsadlar va ularning foizdagi bajarilish holati' },
        { cmd: '/time [HH:MM]', desc: 'Kunlik avtomatik eslatma vaqtini belgilash (masalan, /time 08:00)' },
    ];

    return (
        <div className="bg-card rounded-2xl border border-border p-6 md:p-8 space-y-6 shadow-xs transition-all">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-sky-500/20">
                        <Bot size={22} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="text-lg font-bold text-foreground tracking-tight">
                                Telegram Bot Integratsiyasi
                            </h3>
                            {linkedAccount ? (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    ULANGAN
                                </span>
                            ) : linkCode ? (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-500/10 text-amber-400 border border-amber-500/30">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                                    KOD KUTILMOQDA
                                </span>
                            ) : (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-muted text-muted-foreground border border-border">
                                    ULANMAGAN
                                </span>
                            )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">
                            Kunlik vazifalar, SRS fleshkartalar va deadline eslatmalarini Telegram orqali oling
                        </p>
                    </div>
                </div>

                {linkedAccount && (
                    <button
                        type="button"
                        onClick={() => checkLinkStatus(false)}
                        disabled={loading}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border bg-background hover:bg-muted text-xs font-bold text-muted-foreground hover:text-foreground transition-colors self-start sm:self-center"
                    >
                        <RefreshCw size={13} className={loading ? "animate-spin text-primary" : ""} />
                        <span>Holatni tekshirish</span>
                    </button>
                )}
            </div>

            {/* Guest Warning if not authenticated */}
            {!user && (
                <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/10 flex items-center gap-3 text-xs text-amber-200">
                    <AlertCircle size={16} className="text-amber-400 shrink-0" />
                    <span>
                        Siz hozirda mehmon rejimidasiz. Telegram bot sozlamalari barcha qurilmalaringizda sinxron bo'lishi uchun <strong>Profil & Hisob</strong> bo'limida tizimga kirishingiz tavsiya etiladi.
                    </span>
                </div>
            )}

            <AnimatePresence mode="wait">
                {linkedAccount ? (
                    /* ---------------- LINKED STATE ---------------- */
                    <motion.div
                        key="linked"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="space-y-5"
                    >
                        {/* Account Card */}
                        <div className="p-5 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-xl font-black shrink-0">
                                    <ShieldCheck size={26} />
                                </div>
                                <div className="space-y-0.5">
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-bold text-sm text-foreground">
                                            {linkedAccount.telegram_first_name || "Telegram Foydalanuvchi"}
                                            {linkedAccount.telegram_last_name ? ` ${linkedAccount.telegram_last_name}` : ''}
                                        </h4>
                                        {linkedAccount.telegram_username && (
                                            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                                                @{linkedAccount.telegram_username}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Telegram Chat ID: <code className="text-foreground font-mono">{linkedAccount.chat_id}</code> • Bot: <span className="text-primary font-bold">@{botUsername}</span>
                                    </p>
                                </div>
                            </div>

                            <a
                                href={`https://t.me/${botUsername}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-bold transition-colors self-start sm:self-center"
                            >
                                <span>Botni ochish</span>
                                <ExternalLink size={14} />
                            </a>
                        </div>

                        {/* Notification Toggle Section */}
                        <div className="p-4 rounded-xl border border-border bg-background/50 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                                    <Bell size={18} />
                                </div>
                                <div>
                                    <span className="font-bold text-sm text-foreground block">Telegram Bildirishnomalari</span>
                                    <span className="text-xs text-muted-foreground">Kunlik vazifalar, eslatmalar va dars tavsiyalari</span>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={notificationsEnabled}
                                    onChange={handleToggleNotifications}
                                    disabled={actionLoading === 'toggle_notif'}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-muted peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>

                        {/* SRS Flashcards Status */}
                        <div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400">
                                    <Sparkles size={18} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-sm text-foreground">🧠 SRS Fleshkartalar Holati</span>
                                        <span className="px-2 py-0.5 rounded-full text-xs font-black bg-primary text-primary-foreground">
                                            {dueCardsCount} ta tayyor
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        Har kuni 09:00 va 20:00 da takrorlash kutilayotgan so'zlar haqida bot orqali xabar yuboriladi
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <button
                                type="button"
                                onClick={handleSendSrsNotification}
                                disabled={!!actionLoading}
                                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs shadow-md shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50"
                            >
                                {actionLoading === 'srs_notif' ? (
                                    <Loader2 size={16} className="animate-spin" />
                                ) : (
                                    <Send size={15} />
                                )}
                                <span>🧠 SRS Eslatmasini Yuborish</span>
                            </button>

                            <button
                                type="button"
                                onClick={handleSendTestNotification}
                                disabled={!!actionLoading}
                                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-border bg-background hover:bg-muted text-foreground font-bold text-xs hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50"
                            >
                                {actionLoading === 'test_notif' ? (
                                    <Loader2 size={16} className="animate-spin" />
                                ) : (
                                    <Bell size={15} />
                                )}
                                <span>🔔 Sinov Xabarnomasi</span>
                            </button>
                        </div>

                        {/* Bot Commands Quick Guide Accordion */}
                        <div className="pt-2">
                            <button
                                type="button"
                                onClick={() => setShowCommands(!showCommands)}
                                className="w-full flex items-center justify-between p-3.5 rounded-xl border border-border bg-background/50 text-xs font-bold text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                            >
                                <span className="flex items-center gap-2">
                                    <BookOpen size={15} className="text-primary" />
                                    <span>Telegram Bot Buyruqlari ({botCommands.length} ta buyruq)</span>
                                </span>
                                <span className="text-[11px] text-primary underline">
                                    {showCommands ? 'Yopish' : 'Ko\'rsatish'}
                                </span>
                            </button>

                            {showCommands && (
                                <div className="mt-2 p-4 rounded-xl border border-border bg-background/80 space-y-2.5 animate-in fade-in duration-200">
                                    {botCommands.map(item => (
                                        <div key={item.cmd} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs py-1 border-b border-border/50 last:border-0">
                                            <code className="font-mono font-bold text-primary">{item.cmd}</code>
                                            <span className="text-muted-foreground text-[11px] sm:text-right">{item.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Unlink Action */}
                        <div className="pt-2 border-t border-border flex justify-end">
                            <button
                                type="button"
                                onClick={handleUnlink}
                                disabled={!!actionLoading}
                                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all disabled:opacity-50"
                            >
                                {actionLoading === 'unlink' ? (
                                    <Loader2 size={14} className="animate-spin" />
                                ) : (
                                    <Unlink size={14} />
                                )}
                                <span>Telegram hisobini uzish</span>
                            </button>
                        </div>
                    </motion.div>
                ) : linkCode ? (
                    /* ---------------- CODE GENERATED STATE ---------------- */
                    <motion.div
                        key="code"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="space-y-6"
                    >
                        {/* 6-digit Code Box */}
                        <div className="relative overflow-hidden rounded-2xl border-2 border-primary/40 bg-primary/5 p-6 text-center space-y-3">
                            <div className="text-xs font-black uppercase tracking-widest text-primary">
                                Bir Martalik Ulanish Kodi
                            </div>

                            <div className="flex items-center justify-center gap-3">
                                <span className="text-4xl md:text-5xl font-mono font-black tracking-widest text-foreground selection:bg-primary selection:text-white">
                                    {linkCode}
                                </span>
                                <button
                                    type="button"
                                    onClick={handleCopyCode}
                                    className="p-3 rounded-xl bg-background border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-all shadow-xs"
                                    title="Kodni nusxalash"
                                >
                                    {copied ? <Check size={20} className="text-emerald-400" /> : <Copy size={20} />}
                                </button>
                            </div>

                            {expiresAt && (
                                <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                                    <Clock size={13} />
                                    <span>Amal qilish muddati: <strong className="text-foreground">{formatExpiry(expiresAt)}</strong></span>
                                </div>
                            )}
                        </div>

                        {/* Step by step Instructions */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="p-4 rounded-xl border border-border bg-background/50 space-y-1">
                                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary font-black text-xs flex items-center justify-center">1</div>
                                <div className="text-xs font-bold text-foreground">Botni oching</div>
                                <div className="text-[11px] text-muted-foreground">Quyidagi ko'k tugmani bosing va Telegram ilovasiga o'ting.</div>
                            </div>
                            <div className="p-4 rounded-xl border border-border bg-background/50 space-y-1">
                                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary font-black text-xs flex items-center justify-center">2</div>
                                <div className="text-xs font-bold text-foreground">Start tugmasini bosing</div>
                                <div className="text-[11px] text-muted-foreground">Bot ochilgach, <b>Start</b> tugmasini bosing yoki kodni yuboring.</div>
                            </div>
                            <div className="p-4 rounded-xl border border-border bg-background/50 space-y-1">
                                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-black text-xs flex items-center justify-center">3</div>
                                <div className="text-xs font-bold text-foreground">Avtomatik ulanish</div>
                                <div className="text-[11px] text-muted-foreground">Ushbu sahifa avtomatik "Ulangan" holatiga o'tadi.</div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                            <a
                                href={`https://t.me/${botUsername}?start=${linkCode}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.01] active:scale-95"
                            >
                                <Send size={18} />
                                <span>📱 Telegram orqali 1-bosishda ulash</span>
                                <ExternalLink size={15} />
                            </a>

                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Loader2 size={14} className="animate-spin text-primary" />
                                    <span>Telegram javobi kutilmoqda...</span>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setLinkCode(null)}
                                    className="px-3.5 py-1.5 rounded-xl border border-border hover:bg-muted text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Bekor qilish
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    /* ---------------- NOT LINKED STATE ---------------- */
                    <motion.div
                        key="not-linked"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="space-y-6"
                    >
                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div className="p-4 rounded-xl border border-border bg-background/50 flex items-start gap-3">
                                <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 shrink-0">
                                    <Bell size={18} />
                                </div>
                                <div className="space-y-0.5">
                                    <h5 className="font-bold text-xs text-foreground">Rejalar & Deadlinelar</h5>
                                    <p className="text-[11px] text-muted-foreground">Kunlik vazifalar va muhim muddatlar haqida vaqtida eslatmalar oling.</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl border border-border bg-background/50 flex items-start gap-3">
                                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                                    <Sparkles size={18} />
                                </div>
                                <div className="space-y-0.5">
                                    <h5 className="font-bold text-xs text-foreground">SRS Fleshkarta Eslatmalari</h5>
                                    <p className="text-[11px] text-muted-foreground">Takrorlash kutilayotgan so'zlarni unutmasdan o'z vaqtida mustahkamlang.</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl border border-border bg-background/50 flex items-start gap-3">
                                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                                    <CheckSquare size={18} />
                                </div>
                                <div className="space-y-0.5">
                                    <h5 className="font-bold text-xs text-foreground">Tezkor Vazifa Qo'shish</h5>
                                    <p className="text-[11px] text-muted-foreground">Botga <code>/add Yangi vazifa</code> yuborish orqali rejani saytga saqlang.</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl border border-border bg-background/50 flex items-start gap-3">
                                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                                    <Zap size={18} />
                                </div>
                                <div className="space-y-0.5">
                                    <h5 className="font-bold text-xs text-foreground">Streak & Daraja Nazorati</h5>
                                    <p className="text-[11px] text-muted-foreground">Kunlik faollik, to'plangan XP va o'quv natijalaringizni tekshiring.</p>
                                </div>
                            </div>
                        </div>

                        {/* Connect Button CTA */}
                        <Button
                            onClick={handleGenerateCode}
                            disabled={loading}
                            className="w-full py-3.5 rounded-xl text-sm font-black shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin mr-2" size={18} />
                                    Kod yaratilmoqda...
                                </>
                            ) : (
                                '🔗 Telegram Botni Ulash'
                            )}
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TelegramSection;
