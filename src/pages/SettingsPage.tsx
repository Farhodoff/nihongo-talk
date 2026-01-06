import { Bell, Key, Moon, Sun, Trash } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import { supabase } from '../lib/supabase';
import { requestNotificationPermission } from '../utils/notifications';

const PasswordChangeSection = () => {
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleUpdate = async () => {
        if (password.length < 6) return alert("Parol kamida 6 belgidan iborat bo'lishi kerak.");
        setLoading(true);
        const { error } = await supabase.auth.updateUser({ password: password });
        if (error) alert("Xatolik: " + error.message);
        else {
            alert("Parol muvaffaqiyatli yangilandi!");
            setPassword('');
        }
        setLoading(false);
    };

    return (
        <div className="p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-1">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                    <Key size={20} />
                </div>
                <span className="font-medium text-gray-900 dark:text-white">Parolni O'zgartirish</span>
            </div>
            <div className="flex gap-2">
                <input
                    type="password"
                    placeholder="Yangi parol..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Button onClick={handleUpdate} disabled={loading}>{loading ? 'Saqlanmoqda...' : 'Saqlash'}</Button>
            </div>
        </div>
    );
};

const SettingsPage: React.FC = () => {
    const { settings, updateSettings, refreshData } = useStudyData();

    const toggleTheme = () => {
        updateSettings({ theme: settings.theme === 'dark' ? 'light' : 'dark' });
    };

    const toggleNotifications = async () => {
        if (!settings.notificationsEnabled) {
            const granted = await requestNotificationPermission();
            if (granted) {
                updateSettings({ notificationsEnabled: true });
            } else {
                alert('Bildirishnoma ruxsati rad etildi. Iltimos, brauzer sozlamalarida yoqing.');
            }
        } else {
            updateSettings({ notificationsEnabled: false });
        }
    };

    const handleClear = async () => {
        if (window.confirm("Ishonchingiz komilmi? Bu barcha ma'lumotlarni o'chirib yuboradi.")) {
            await refreshData(); // This clears it based on Context logic
        }
    };

    return (
        <div>
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Sozlamalar</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-1">Tajribangizni moslashtiring</p>
            </div>

            <div className="space-y-6 max-w-2xl">
                {/* Preferences */}
                <div className="bg-white dark:bg-[#1f2937] rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <div className="p-4 border-b border-gray-100 dark:border-gray-700 font-medium text-gray-500 dark:text-gray-400 text-sm">
                        AFZALLIKLAR
                    </div>

                    <div className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-lg">
                                {settings.theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                            </div>
                            <span className="font-medium text-gray-900 dark:text-white">Tungi Rejim</span>
                        </div>
                        <button
                            onClick={toggleTheme}
                            className={`w-12 h-6 rounded-full transition-colors relative ${settings.theme === 'dark' ? 'bg-indigo-500' : 'bg-gray-300'}`}
                        >
                            <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${settings.theme === 'dark' ? 'left-7' : 'left-1'}`} />
                        </button>
                    </div>

                    <div className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg">
                                <Bell size={20} />
                            </div>
                            <span className="font-medium text-gray-900 dark:text-white">Bildirishnomalar</span>
                        </div>
                        <button
                            onClick={toggleNotifications}
                            className={`w-12 h-6 rounded-full transition-colors relative ${settings.notificationsEnabled ? 'bg-indigo-500' : 'bg-gray-300'}`}
                        >
                            <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${settings.notificationsEnabled ? 'left-7' : 'left-1'}`} />
                        </button>
                    </div>
                </div>

                {/* Data */}
                <div className="bg-white dark:bg-[#1f2937] rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <div className="p-4 border-b border-gray-100 dark:border-gray-700 font-medium text-gray-500 dark:text-gray-400 text-sm">
                        MA'LUMOTLARNI BOSHQARISH
                    </div>

                    <div className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg">
                                <Trash size={20} />
                            </div>
                            <span className="font-medium text-red-600">Barcha ma'lumotlarni tozalash</span>
                        </div>
                        <Button variant="danger" onClick={handleClear} className="px-3 py-1 text-sm">
                            Tozalash
                        </Button>
                    </div>
                </div>

                {/* Account Settings */}
                <div className="bg-white dark:bg-[#1f2937] rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <div className="p-4 border-b border-gray-100 dark:border-gray-700 font-medium text-gray-500 dark:text-gray-400 text-sm">
                        HISOB SOZLAMALARI
                    </div>

                    {/* Google API Key */}
                    <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Google Gemini API Key
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="password"
                                placeholder="AI ishlatish uchun shaxsiy kalit..."
                                className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                defaultValue={settings.googleApiKey || ''}
                                id="apiKeyInput"
                            />
                            <Button
                                onClick={() => {
                                    const input = document.getElementById('apiKeyInput') as HTMLInputElement;
                                    if (input) {
                                        updateSettings({ googleApiKey: input.value });
                                        alert("API Kalit Saqlandi! ✅");
                                    }
                                }}
                            >
                                Saqlash
                            </Button>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                            Shaxsiy API kalitingiz bo'lsa, AI funksiyalari (Fleshkarta, Reja) shaxsiy hisobingizdan foydalanadi va limitga tushmaydi.
                            <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-indigo-500 ml-1 hover:underline">Kalit olish.</a>
                        </p>
                    </div>

                    {/* Password Change */}
                    <PasswordChangeSection />

                    <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                        <Button
                            variant="danger"
                            onClick={async () => {
                                if (confirm('Tizimdan chiqishni xohlaysizmi?')) {
                                    await supabase.auth.signOut();
                                    // App.tsx listener will handle redirection
                                }
                            }}
                            className="w-full"
                        >
                            <span className="flex items-center justify-center gap-2">
                                🚪 Tizimdan Chiqish
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
