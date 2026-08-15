import React, { useState, useEffect, useCallback } from 'react';
import { Loader2, CheckCircle2, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import telegramService, { TelegramUser } from '../../services/TelegramService';
import { useStudyData } from '../../context/StudyPlannerContext';

const TelegramSection: React.FC = () => {
    const { user, flashcards } = useStudyData();
    const [linkCode, setLinkCode] = useState<string | null>(null);
    const [expiresAt, setExpiresAt] = useState<string | null>(null);
    const [linkedAccount, setLinkedAccount] = useState<TelegramUser | null>(null);
    const [loading, setLoading] = useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const dueCardsCount = flashcards.filter(f => !f.nextReviewDate || new Date(f.nextReviewDate) <= new Date()).length;

    // Get stable user ID (authenticated user ID or fallback guest ID)
    const getEffectiveUserId = useCallback(() => {
        if (user?.id) return user.id;
        let guestId = localStorage.getItem('study_planner_guest_user_id');
        if (!guestId) {
            guestId = '99a2f2c1-3fa0-477e-b73c-2ca6537d1721';
            localStorage.setItem('study_planner_guest_user_id', guestId);
        }
        return guestId;
    }, [user]);

    const effectiveUserId = getEffectiveUserId();

    // Load linked account on mount
    useEffect(() => {
        const loadLinkedAccount = async () => {
            const account = await telegramService.getLinkedAccount(effectiveUserId);
            setLinkedAccount(account);
            if (account) {
                setNotificationsEnabled(account.notifications_enabled);
            }
        };

        loadLinkedAccount();
    }, [effectiveUserId]);

    // Poll for link completion after code is generated
    useEffect(() => {
        if (!linkCode || linkedAccount) return;

        const pollInterval = setInterval(async () => {
            try {
                const account = await telegramService.getLinkedAccount(effectiveUserId);
                if (account) {
                    setLinkedAccount(account);
                    setNotificationsEnabled(account.notifications_enabled);
                    setLinkCode(null);
                }
            } catch {
                // Silently ignore polling errors
            }
        }, 3000);

        return () => clearInterval(pollInterval);
    }, [effectiveUserId, linkCode, linkedAccount]);

    const handleGenerateCode = async () => {
        setLoading(true);

        try {
            const result = await telegramService.generateLinkCode(effectiveUserId);
            if (result.linked && result.account) {
                setLinkedAccount(result.account);
                setNotificationsEnabled(result.account.notifications_enabled);
            } else if (result.code) {
                setLinkCode(result.code);
                setExpiresAt(result.expires_at || new Date(Date.now() + 15 * 60 * 1000).toISOString());
            }
        } catch (err: unknown) {
            console.error('handleGenerateCode exception:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleUnlink = async () => {
        if (!confirm('Telegram akkauntini uzmoqchimisiz?')) return;

        setLoading(true);
        const success = await telegramService.unlinkAccount(effectiveUserId);
        if (success) {
            setLinkedAccount(null);
            setLinkCode(null);
        }
        setLoading(false);
    };

    const handleToggleNotifications = async () => {
        const newValue = !notificationsEnabled;
        const success = await telegramService.updateNotificationSettings(effectiveUserId, newValue);
        if (success) {
            setNotificationsEnabled(newValue);
        }
    };

    const formatExpiry = (expiry: string) => {
        const diff = new Date(expiry).getTime() - Date.now();
        const minutes = Math.max(1, Math.floor(diff / 60000));
        return `${minutes} daqiqa`;
    };

    const botUsername = import.meta.env.VITE_TELEGRAM_BOT_USERNAME || 'study_plannerr_bot';

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Telegram Bot Integration
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Vazifalar va maqsadlar haqida Telegram orqali bildirishnomalar oling
                </p>
            </div>

            {linkedAccount ? (
                // Linked State
                <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                            <div className="flex-1">
                                <h4 className="font-medium text-green-900 dark:text-green-100 mb-1">
                                    ✅ Telegram muvaffaqiyatli ulangan!
                                </h4>
                                <div className="text-sm text-green-700 dark:text-green-300 space-y-1">
                                    <p>
                                        <span className="font-medium">Ism:</span>{' '}
                                        {linkedAccount.telegram_first_name || '—'}
                                    </p>
                                    {linkedAccount.telegram_username && (
                                        <p>
                                            <span className="font-medium">Username:</span> @{linkedAccount.telegram_username}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Notification Settings */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                        <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">
                                Xabarnomalar
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Kunlik vazifalar va eslatmalar
                            </p>
                        </div>
                        <button
                            onClick={handleToggleNotifications}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notificationsEnabled
                                ? 'bg-indigo-600'
                                : 'bg-gray-200 dark:bg-gray-700'
                                }`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notificationsEnabled ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                            />
                        </button>
                    </div>

                    {/* SRS Status info */}
                    <div className="p-4 bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 rounded-xl flex items-center justify-between">
                        <div>
                            <div className="font-semibold text-sm text-foreground flex items-center gap-2">
                                <span>🧠 SRS Fleshkartalar Eslatmasi</span>
                                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                                    {dueCardsCount} ta tayyor
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">
                                Har kuni 09:00 va 20:00 da takrorlash kutilayotgan so'zlar haqida push-xabar yuboriladi
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Button
                            onClick={async () => {
                                setLoading(true);
                                const text = `🧠 <b>Kaizen AI — SRS Fleshkartalar Eslatmasi!</b>\n\n` +
                                    `Salom, ${linkedAccount.telegram_first_name || "O'quvchi"}! 👋\n` +
                                    (dueCardsCount > 0 
                                        ? `Sizda bugun takrorlash uchun <b>${dueCardsCount} ta fleshkarta</b> tayyor turibdi.\nUxlashdan oldin 5 daqiqa ajratib takrorlab oling va streak ballingizni oshiring! 🚀`
                                        : `Barcha fleshkartalaringiz bugun uchun o'zlashtirilgan! Yangi so'zlar qo'shishingiz yoki test topshirishingiz mumkin. ✨`
                                    );
                                const ok = await telegramService.sendNotification(effectiveUserId, text);
                                if (ok) {
                                    alert("✅ Telegram bot orqali SRS eslatmasi muvaffaqiyatli yuborildi!");
                                } else {
                                    alert("⚠️ Xabar yuborishda xatolik. Botni /start bilan qayta faollashtiring.");
                                }
                                setLoading(false);
                            }}
                            disabled={loading}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-xl transition-all"
                        >
                            🧠 SRS Eslatmasini Yuborish
                        </Button>

                        <Button
                            onClick={async () => {
                                setLoading(true);
                                const ok = await telegramService.sendNotification(
                                    effectiveUserId,
                                    "🔔 <b>Kaizen AI Kunlik Eslatmasi!</b>\n\nBugun o'z oldingizga qo'ygan kunlik maqsad va darslaringizni bajardingizmi? Tizimga kirib streak ballingizni oshiring! 🚀"
                                );
                                if (ok) {
                                    alert("✅ Telegram bot orqali sinov xabarnomasi muvaffaqiyatli yuborildi!");
                                } else {
                                    alert("⚠️ Xabar yuborishda xatolik. Botni /start bilan qayta faollashtiring.");
                                }
                                setLoading(false);
                            }}
                            disabled={loading}
                            variant="secondary"
                            className="font-medium py-2.5 rounded-xl"
                        >
                            🔔 Test Xabarnomasi
                        </Button>
                    </div>

                    {/* Unlink Button */}
                    <Button
                        onClick={handleUnlink}
                        disabled={loading}
                        variant="secondary"
                        className="w-full text-red-600 border-red-200 hover:bg-red-50 dark:border-red-900/30 dark:hover:bg-red-950/20"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin mr-2" size={16} />
                                Uzilmoqda...
                            </>
                        ) : (
                            'Telegramni uzish'
                        )}
                    </Button>
                </div>
            ) : linkCode ? (
                // Code Generated State
                <div className="space-y-4">
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6 text-center">
                        <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-3">
                            Ulanish Kodi
                        </h4>
                        <div className="text-4xl font-mono font-bold text-indigo-600 dark:text-indigo-400 tracking-wider mb-2">
                            {linkCode}
                        </div>
                        {expiresAt && (
                            <p className="text-sm text-indigo-700 dark:text-indigo-300">
                                Amal qilish muddati: {formatExpiry(expiresAt)}
                            </p>
                        )}
                    </div>

                    <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                        <p className="font-medium text-gray-900 dark:text-white">
                            Qadamlar:
                        </p>
                        <ol className="space-y-2 list-decimal list-inside">
                            <li>Quyidagi tugmani bosing — Telegram da bot ochiladi</li>
                            <li>Telegram da <b>Start</b> tugmasini bosing</li>
                            <li>Bu sahifa avtomatik yangilanadi ✅</li>
                        </ol>
                    </div>

                    <a
                        href={`https://t.me/${botUsername}?start=${linkCode}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors"
                    >
                        📱 Telegram da ochish
                        <ExternalLink size={16} />
                    </a>

                    <p className="text-xs text-center text-gray-500 dark:text-gray-500">
                        Bot ulangandan so'ng bu sahifa avtomatik "✅ Ulangan" holatiga o'tadi
                    </p>

                    <Button
                        onClick={() => setLinkCode(null)}
                        variant="secondary"
                        className="w-full"
                    >
                        Bekor qilish
                    </Button>
                </div>
            ) : (
                // Not Linked State
                <div className="space-y-4">
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                        <p>Telegram botni ulash orqali:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>Kunlik vazifalar va maqsadlar haqida xabarnomalar oling</li>
                            <li>Deadline eslatmalari oling</li>
                            <li>Telegram orqali vazifalar qo'shing</li>
                        </ul>
                    </div>

                    <Button
                        onClick={handleGenerateCode}
                        disabled={loading}
                        className="w-full"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin mr-2" size={16} />
                                Yuklanmoqda...
                            </>
                        ) : (
                            '🔗 Telegram ni ulash'
                        )}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default TelegramSection;
