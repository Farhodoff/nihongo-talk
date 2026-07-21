import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle2, XCircle, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import telegramService, { TelegramUser } from '../../services/TelegramService';
import { useStudyData } from '../../context/StudyPlannerContext';

const TelegramSection: React.FC = () => {
    const { user } = useStudyData();
    const [linkCode, setLinkCode] = useState<string | null>(null);
    const [expiresAt, setExpiresAt] = useState<string | null>(null);
    const [linkedAccount, setLinkedAccount] = useState<TelegramUser | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    // Load linked account on mount
    useEffect(() => {
        const loadLinkedAccount = async () => {
            if (!user) return;
            const account = await telegramService.getLinkedAccount(user.id);
            setLinkedAccount(account);
            if (account) {
                setNotificationsEnabled(account.notifications_enabled);
            }
        };

        if (user) {
            loadLinkedAccount();
        }
    }, [user]);
    const handleGenerateCode = async () => {
        if (!user) return;

        setLoading(true);
        setError('');

        try {
            const result = await telegramService.generateLinkCode(user.id);
            if (result) {
                setLinkCode(result.code);
                setExpiresAt(result.expires_at);
            } else {
                setError('Kod yaratishda xatolik yuz berdi');
            }
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'Xatolik yuz berdi');
        } finally {
            setLoading(false);
        }
    };

    const handleUnlink = async () => {
        if (!user || !confirm('Telegram akkauntini uzmoqchimisiz?')) return;

        setLoading(true);
        const success = await telegramService.unlinkAccount(user.id);
        if (success) {
            setLinkedAccount(null);
            setLinkCode(null);
        }
        setLoading(false);
    };

    const handleToggleNotifications = async () => {
        if (!user) return;

        const newValue = !notificationsEnabled;
        const success = await telegramService.updateNotificationSettings(user.id, newValue);
        if (success) {
            setNotificationsEnabled(newValue);
        }
    };

    const formatExpiry = (expiry: string) => {
        const diff = new Date(expiry).getTime() - Date.now();
        const minutes = Math.floor(diff / 60000);
        return `${minutes} daqiqa`;
    };

    const botUsername = import.meta.env.VITE_TELEGRAM_BOT_USERNAME || 'study_plannerr_bot';

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Telegram Bot
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Vazifalar va maqsadlar haqida Telegram orqali xabarnomalar oling
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
                                    Telegram ulangan
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

                    {/* Unlink Button */}
                    <Button
                        onClick={handleUnlink}
                        disabled={loading}
                        variant="secondary"
                        className="w-full text-red-600 border-red-200 hover:bg-red-50"
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
                            <li>Telegram da @{botUsername} botni oching</li>
                            <li>
                                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                                    /start {linkCode}
                                </code>{' '}
                                yuboring
                            </li>
                            <li>Tasdiq xabarini kuting</li>
                        </ol>
                    </div>

                    <a
                        href={`https://t.me/${botUsername}?start=${linkCode}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors"
                    >
                        Telegram da ochish
                        <ExternalLink size={16} />
                    </a>

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
                    {error && (
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 flex items-start gap-3">
                            <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
                        </div>
                    )}

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
                            'Telegram ni ulash'
                        )}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default TelegramSection;
