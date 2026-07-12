import React, { useEffect, useState } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { supabase } from '../lib/supabase';
import { Shield, Users, Key, Loader2, Save, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

interface UserSubscription {
    id: string;
    email: string;
    tier: 'free' | 'pro' | 'premium';
    ai_credits: number;
    last_reset_date: string;
    created_at: string;
}

const AdminDashboardPage: React.FC = () => {
    const { user } = useStudyData();
    const navigate = useNavigate();
    const [subscriptions, setSubscriptions] = useState<UserSubscription[]>([]);
    const [loading, setLoading] = useState(true);
    const [apiKey, setApiKey] = useState('');
    const [savingKey, setSavingKey] = useState(false);
    const [keySaved, setKeySaved] = useState(false);

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
        // Faqat admin bo'lsa ma'lumotlarni tortamiz
        if (user?.email === 'fsoyilov@gmail.com') {
            fetchAdminData();
        } else {
            setLoading(false);
        }
    }, [user]);

    // O'chib-yonish (miltillash) ni oldini olish uchun
    if (loading && !user) {
        return (
            <div className="flex items-center justify-center h-[70vh]">
                <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
            </div>
        );
    }

    // Xavfsizlik: Faqat Admin kira oladi. Boshqalar uchun 404 ko'rsatamiz
    if (user?.email !== 'fsoyilov@gmail.com') {
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
            alert("Kalitni saqlashda xatolik yuz berdi. DB qoidalarini tekshiring.");
        } finally {
            setSavingKey(false);
        }
    };

    const setUserTier = async (userId: string, newTier: 'free' | 'pro' | 'premium') => {
        try {
            const { error } = await supabase
                .from('user_subscriptions')
                .update({ tier: newTier })
                .eq('id', userId);

            if (error) throw error;
            
            // Mahalliy holatni yangilash
            setSubscriptions(subs => 
                subs.map(s => s.id === userId ? { ...s, tier: newTier } : s)
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
            
            // Mahalliy holatni yangilash
            setSubscriptions(subs => 
                subs.map(s => s.id === userId ? { ...s, ai_credits: newCredits } : s)
            );
        } catch (error) {
            console.error('Error adding credits:', error);
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
                    <p className="text-slate-500">Tizim va foydalanuvchilar obunasini boshqarish</p>
                </div>
            </div>

            {/* API Key Management */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                    <Key className="w-5 h-5 text-indigo-500" />
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Umumiy AI Kaliti</h2>
                </div>
                <p className="text-sm text-slate-500 mb-4">
                    Ushbu kalit "Pro" tarifidagi foydalanuvchilar va kunlik limitidan foydalanayotgan "Free" foydalanuvchilar uchun ishlatiladi.
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
                <div className="mt-4 flex items-center gap-2 text-xs text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-500/10 p-3 rounded-lg border border-amber-200 dark:border-amber-500/20">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Eslatma: Bu kalit ma'lumotlar bazasida saqlanadi. RLS orqali faqat ro'yxatdan o'tganlarga beriladi.</span>
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
                                <th className="p-4 font-semibold text-gray-600 dark:text-slate-300">AI Kreditlar</th>
                                <th className="p-4 font-semibold text-gray-600 dark:text-slate-300">Harakatlar</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-slate-800/50">
                            {subscriptions.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="py-8 text-center text-slate-500 dark:text-slate-400">
                                        Hech qanday foydalanuvchi topilmadi. SQL triggerlarni tekshiring.
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
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 w-8">
                                                {sub.ai_credits}
                                            </span>
                                            <button 
                                                onClick={() => addCredits(sub.id, sub.ai_credits)}
                                                className="text-xs text-indigo-500 hover:text-indigo-400 bg-indigo-500/10 hover:bg-indigo-500/20 px-2 py-1 rounded-md transition-colors"
                                                title="Yana 3 ta qo'shish"
                                            >
                                                +3
                                            </button>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-2">
                                            <select
                                                value={sub.tier}
                                                onChange={(e) => setUserTier(sub.id, e.target.value as any)}
                                                className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-1.5 text-sm outline-none text-slate-900 dark:text-white"
                                            >
                                                <option value="free">Bepul (Free)</option>
                                                <option value="pro">Pro</option>
                                                <option value="premium">Premium</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;
