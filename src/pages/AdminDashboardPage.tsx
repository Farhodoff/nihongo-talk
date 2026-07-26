import React, { useEffect, useState } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { supabase } from '../lib/supabase';
import { Shield, Users, Key, Loader2, Save, CheckCircle2, MessageSquare, Send, X } from 'lucide-react';
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

const AdminDashboardPage: React.FC = () => {
    const { user } = useStudyData();
    const navigate = useNavigate();
    const [subscriptions, setSubscriptions] = useState<UserSubscription[]>([]);
    const [loading, setLoading] = useState(true);
    const [apiKey, setApiKey] = useState('');
    const [savingKey, setSavingKey] = useState(false);
    const [keySaved, setKeySaved] = useState(false);

    // Message Modal State
    const [messageModalUser, setMessageModalUser] = useState<{ id: string; email: string } | null>(null);
    const [msgTitle, setMsgTitle] = useState('🎁 Maxsus Xabar');
    const [msgContent, setMsgContent] = useState('Xush kelibsiz! Sizga 3 kunlik bepul Pro tarif taqdim etildi. Platformamizdan unumli foydalaning! 🚀');
    const [sendingMsg, setSendingMsg] = useState(false);

    const fetchAdminData = async () => {
        setLoading(true);
        try {
            // Fetch subscriptions
            const { data: subs, error: subsError } = await supabase
                .from('user_subscriptions')
                .select('*')
                .order('created_at', { ascending: false });

            if (subsError) throw subsError;
            setSubscriptions(subs || []);

            // Fetch API Key
            const { data: appSettings, error: keyError } = await supabase
                .from('app_settings')
                .select('gemini_api_key')
                .eq('id', 1)
                .single();

            if (!keyError && appSettings) {
                setApiKey(appSettings.gemini_api_key || '');
            }
        } catch (error) {
            console.error('Error fetching admin data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isAdminEmail(user?.email)) {
            fetchAdminData();
        } else {
            setLoading(false);
        }
    }, [user]);

    if (loading && !user) {
        return (
            <div className="flex items-center justify-center h-[70vh]">
                <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
            </div>
        );
    }

    if (!isAdminEmail(user?.email)) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center animate-in fade-in duration-500">
                <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500 mb-4 opacity-80">404</h1>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Sahifa topilmadi</h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8">
                    Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki o'chirilgan bo'lishi mumkin.
                </p>
                <Button onClick={() => navigate('/')} className="gap-2">
                    Bosh sahifaga qaytish
                </Button>
            </div>
        );
    }

    const handleSaveApiKey = async () => {
        setSavingKey(true);
        try {
            const { error } = await supabase
                .from('app_settings')
                .upsert({ id: 1, gemini_api_key: apiKey });

            if (error) throw error;
            setKeySaved(true);
            setTimeout(() => setKeySaved(false), 2000);
        } catch (error) {
            console.error('Error saving API key:', error);
            alert("Kalitni saqlashda xatolik yuz berdi.");
        } finally {
            setSavingKey(false);
        }
    };

    const setUserTier = async (userId: string, newTier: string, monthsDuration: number = 1) => {
        try {
            let validUntil: string | undefined = undefined;
            if (newTier !== 'free') {
                const date = new Date();
                date.setMonth(date.getMonth() + monthsDuration);
                validUntil = date.toISOString();
            }

            const { error } = await supabase
                .from('user_subscriptions')
                .update({ tier: newTier, valid_until: validUntil || null })
                .eq('id', userId);

            if (error) throw error;
            
            setSubscriptions(subs => 
                subs.map(s => s.id === userId ? { ...s, tier: newTier as any, valid_until: validUntil } : s)
            );
        } catch (error) {
            console.error('Error updating user tier:', error);
            alert("Statusni o'zgartirishda xatolik yuz berdi.");
        }
    };

    const addCredits = async (userId: string, currentCredits: number) => {
        const newCredits = currentCredits + 3;
        try {
            const { error } = await supabase
                .from('user_subscriptions')
                .update({ ai_credits: newCredits })
                .eq('id', userId);

            if (error) throw error;
            
            setSubscriptions(subs => 
                subs.map(s => s.id === userId ? { ...s, ai_credits: newCredits } : s)
            );
        } catch (error) {
            console.error('Error adding credits:', error);
        }
    };

    const handleSendInAppMessage = async () => {
        if (!messageModalUser || !msgTitle.trim() || !msgContent.trim()) return;
        setSendingMsg(true);
        try {
            await UserNotificationService.sendNotification({
                user_id: messageModalUser.id,
                title: msgTitle,
                message: msgContent,
                type: 'admin'
            });
            alert(`Xabar ${messageModalUser.email} ga muvaffaqiyatli yuborildi! 🚀`);
            setMessageModalUser(null);
        } catch (e) {
            alert("Xabar yuborishda xatolik yuz berdi.");
        } finally {
            setSendingMsg(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[70vh]">
                <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 animate-in fade-in">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center">
                    <Shield className="text-fuchsia-500 w-6 h-6" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Admin Boshqaruv Paneli</h1>
                    <p className="text-slate-500">Tizim va foydalanuvchilar obunasini hamda bildirishnomalarni boshqarish</p>
                </div>
            </div>

            {/* API Key Management */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                    <Key className="w-5 h-5 text-indigo-500" />
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Umumiy AI Kaliti</h2>
                </div>
                <p className="text-sm text-slate-500 mb-4">
                    Ushbu kalit Pro va Premium foydalanuvchilar uchun ishlatiladi.
                </p>
                
                <div className="flex gap-4">
                    <input
                        type="password"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        placeholder="Google Gemini API Key kiriting..."
                        className="flex-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                    <Button onClick={handleSaveApiKey} disabled={savingKey} className="gap-2 px-8">
                        {savingKey ? <Loader2 className="w-4 h-4 animate-spin" /> : keySaved ? <CheckCircle2 className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                        {keySaved ? "Saqlandi!" : "Saqlash"}
                    </Button>
                </div>
            </div>

            {/* Users List */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-indigo-500" />
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Foydalanuvchilar Ro'yxati</h2>
                    </div>
                    <div className="text-sm font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                        Jami: {subscriptions.length} ta
                    </div>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 dark:bg-slate-900/50 border-b border-gray-100 dark:border-slate-800">
                            <tr>
                                <th className="p-4 font-semibold text-gray-600 dark:text-slate-300">Pochta (Email)</th>
                                <th className="p-4 font-semibold text-gray-600 dark:text-slate-300">Tarif (Status)</th>
                                <th className="p-4 font-semibold text-gray-600 dark:text-slate-300">Tugash muddati</th>
                                <th className="p-4 font-semibold text-gray-600 dark:text-slate-300">AI Kreditlar</th>
                                <th className="p-4 font-semibold text-gray-600 dark:text-slate-300">Harakatlar</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-slate-800/50">
                            {subscriptions.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="py-8 text-center text-slate-500 dark:text-slate-400">
                                        Hech qanday foydalanuvchi topilmadi.
                                    </td>
                                </tr>
                            ) : subscriptions.map((sub) => (
                                <tr key={sub.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="py-4 px-6 text-sm text-slate-900 dark:text-slate-300 font-medium">
                                        {sub.email}
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${
                                            sub.tier === 'premium'
                                                ? 'bg-amber-500/10 text-amber-500 border-amber-500/20'
                                                : sub.tier === 'pro' 
                                                ? 'bg-fuchsia-500/10 text-fuchsia-500 border-fuchsia-500/20' 
                                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                                        }`}>
                                            {sub.tier.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        {sub.tier !== 'free' ? (
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium text-slate-900 dark:text-white">
                                                    {sub.valid_until ? new Date(sub.valid_until).toLocaleDateString('uz-UZ') : 'Noma\'lum'}
                                                </span>
                                            </div>
                                        ) : (
                                            <span className="text-sm text-slate-400">Muddatsiz</span>
                                        )}
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 w-8">
                                                {sub.ai_credits}
                                            </span>
                                            <button 
                                                onClick={() => addCredits(sub.id, sub.ai_credits)}
                                                className="text-xs text-indigo-500 hover:text-indigo-400 bg-indigo-500/10 hover:bg-indigo-500/20 px-2 py-1 rounded-md transition-colors font-bold"
                                                title="Yana 3 ta qo'shish"
                                            >
                                                +3
                                            </button>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => setUserTier(sub.id, 'pro', 1)}
                                                    className="text-xs py-1 px-2.5 h-auto text-indigo-500 border-indigo-500/30 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 font-semibold"
                                                >
                                                    +1 Oy (Pro)
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => setUserTier(sub.id, 'premium', 1)}
                                                    className="text-xs py-1 px-2.5 h-auto text-fuchsia-500 border-fuchsia-500/30 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/40 font-semibold"
                                                >
                                                    +1 Oy (Prem)
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    onClick={() => setUserTier(sub.id, 'premium', 6)}
                                                    className="text-xs py-1 px-2.5 h-auto bg-gradient-to-r from-rose-500 to-amber-600 text-white font-bold border-none shadow-sm hover:scale-105 transition-transform"
                                                >
                                                    👑 +6 Oy (VIP $50)
                                                </Button>
                                            </div>

                                            <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                                                <button
                                                    onClick={() => setMessageModalUser({ id: sub.id, email: sub.email })}
                                                    className="text-xs font-bold text-rose-500 hover:text-rose-400 flex items-center gap-1 bg-rose-500/10 hover:bg-rose-500/20 px-2.5 py-1 rounded-md transition-colors"
                                                >
                                                    <MessageSquare size={13} />
                                                    <span>💬 Xabar Yuborish</span>
                                                </button>
                                                <button
                                                    onClick={() => setUserTier(sub.id, 'free', 0)}
                                                    className="text-[11px] text-slate-400 hover:text-rose-500 transition-colors font-medium"
                                                >
                                                    Free ga qaytarish
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Admin Message Dispatch Modal */}
            {messageModalUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
                    <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 max-w-lg w-full shadow-2xl relative space-y-5">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                            <div className="flex items-center gap-2">
                                <MessageSquare className="w-5 h-5 text-rose-500" />
                                <h3 className="text-lg font-bold text-white">Foydalanuvchiga Xabar Yuborish</h3>
                            </div>
                            <button
                                onClick={() => setMessageModalUser(null)}
                                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="text-xs text-rose-400 font-semibold bg-rose-500/10 p-3 rounded-xl border border-rose-500/20">
                            Qabul qiluvchi: <b>{messageModalUser.email}</b>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <label className="text-xs font-bold text-slate-400 block mb-1">Xabar Sarlavhasi</label>
                                <input
                                    type="text"
                                    value={msgTitle}
                                    onChange={(e) => setMsgTitle(e.target.value)}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:ring-2 focus:ring-rose-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-400 block mb-1">Xabar Matni</label>
                                <textarea
                                    rows={4}
                                    value={msgContent}
                                    onChange={(e) => setMsgContent(e.target.value)}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:ring-2 focus:ring-rose-500 outline-none"
                                />
                            </div>

                            {/* Preset Buttons */}
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Tayyor Shablonlar:</label>
                                <div className="flex flex-wrap gap-1.5">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setMsgTitle('🎁 Maxsus Taklif!');
                                            setMsgContent('Xush kelibsiz! Sizga 3 kunlik bepul Pro tarif taqdim etildi. IELTS & JLPT AI qurollarini bepul sinab ko\'ring! 🚀');
                                        }}
                                        className="text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-700"
                                    >
                                        🎁 3 Kun Bepul Pro
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setMsgTitle('⚡ Obuna Bildirishnomasi');
                                            setMsgContent('Sizning VIP obunangiz faollashtirildi! Cheksiz AI imkoniyatlaridan bahramand bo\'ling.');
                                        }}
                                        className="text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-700"
                                    >
                                        ⚡ VIP Obuna Aktivlashdi
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-3 pt-2">
                            <Button
                                variant="outline"
                                onClick={() => setMessageModalUser(null)}
                                className="border-slate-800 text-slate-400 hover:bg-slate-800"
                            >
                                Bekor Qilish
                            </Button>
                            <Button
                                onClick={handleSendInAppMessage}
                                disabled={sendingMsg}
                                className="bg-rose-600 hover:bg-rose-500 text-white font-bold gap-2 px-6"
                            >
                                {sendingMsg ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                                <span>{sendingMsg ? 'Yuborilmoqda...' : 'Yuborish 🚀'}</span>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboardPage;
