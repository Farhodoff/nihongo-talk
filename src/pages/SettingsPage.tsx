import React, { useState } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { requestNotificationPermission } from '../utils/notifications';
import PreferencesSection from '../components/settings/PreferencesSection';
import DataManagementSection from '../components/settings/DataManagementSection';
import AccountSection from '../components/settings/AccountSection';
import TelegramSection from '../components/settings/TelegramSection';
import GoogleCalendarSection from '../components/settings/GoogleCalendarSection';
import AIProviderSection from '../components/settings/AIProviderSection';
import DailyGoalSection from '../components/settings/DailyGoalSection';
import SubscriptionSection from '../components/settings/SubscriptionSection';
import { User, Sparkles, Sliders, Database, Shield } from 'lucide-react';
import { isAdminEmail } from '../utils/admin';
import { toast } from '../hooks/use-toast';

import AdminDashboardPage from './AdminDashboardPage';

const SettingsPage: React.FC = () => {
    const { settings, updateSettings, refreshData, user } = useStudyData();
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'Profil', icon: User },
        { id: 'ai', label: 'AI & Integratsiya', icon: Sparkles },
        { id: 'preferences', label: 'Moslashtirish', icon: Sliders },
        { id: 'data', label: "Ma'lumotlar", icon: Database },
    ];

    // Admin bo'lsa Admin tab qo'shamiz
    if (isAdminEmail(user?.email)) {
        tabs.push({ id: 'admin', label: 'Admin Panel', icon: Shield });
    }

    const toggleTheme = () => {
        const newTheme = settings.theme === 'dark' ? 'light' : 'dark';
        updateSettings({ theme: newTheme });
        toast({ title: newTheme === 'dark' ? '🌙 Tungi rejim yoqildi' : '☀️ Kunduzgi rejim yoqildi', description: 'Mavzu muvaffaqiyatli o\'zgartirildi.' });
    };

    const toggleNotifications = async () => {
        if (!settings.notificationsEnabled) {
            const granted = await requestNotificationPermission();
            if (granted) {
                updateSettings({ notificationsEnabled: true });
                toast({ title: '🔔 Bildirishnomalar yoqildi', description: 'Siz endi xabarnomalar olasiz.' });
            } else {
                toast({ variant: 'destructive', title: '❌ Ruxsat rad etildi', description: 'Iltimos, brauzer sozlamalarida bildirishnomalarni yoqing.' });
            }
        } else {
            updateSettings({ notificationsEnabled: false });
            toast({ title: '🔕 Bildirishnomalar o\'chirildi' });
        }
    };

    const handleClearData = async () => {
        await refreshData();
    };

    return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto min-h-screen">
            {/* Header / Profile Header */}
            <div className="mb-8 p-6 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200/80 dark:border-slate-800/80 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                    <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-indigo-500/25">
                            {user?.email?.charAt(0).toUpperCase() || 'U'}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] text-white">✓</div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">Sozlamalar</h2>
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">PREMIUM VIP</span>
                        </div>
                        <p className="text-sm font-medium text-gray-500 dark:text-slate-400 mt-1">{user?.email}</p>
                    </div>
                </div>
            </div>

            {/* Desktop Tabs / Mobile Scrollable Tabs */}
            <div className="flex overflow-x-auto scrollbar-hide space-x-2 bg-gray-100/80 dark:bg-slate-900/80 p-2 rounded-2xl border border-gray-200/80 dark:border-slate-800/80 mb-8">
                {tabs.map(tab => {
                    const isActive = activeTab === tab.id;
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2.5 px-5 py-3 text-sm font-bold transition-all duration-200 whitespace-nowrap rounded-xl ${
                                isActive 
                                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-md shadow-slate-900/5 dark:shadow-slate-950/40 scale-[1.02]' 
                                    : 'text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-white/40 dark:hover:bg-slate-800/40'
                            }`}
                        >
                            <Icon size={18} className={isActive ? 'text-indigo-500 dark:text-indigo-400 animate-pulse' : ''} />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Tab Content */}
            <div className="space-y-6 animate-in fade-in duration-300">
                {activeTab === 'profile' && (
                    <div className="space-y-6">
                        <SubscriptionSection />
                        <AccountSection />
                    </div>
                )}

                {activeTab === 'ai' && (
                    <div className="space-y-6">
                        <AIProviderSection />
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                            <TelegramSection />
                        </div>
                        <GoogleCalendarSection />
                    </div>
                )}

                {activeTab === 'preferences' && (
                    <div className="space-y-6">
                        <PreferencesSection
                            settings={settings}
                            onToggleTheme={toggleTheme}
                            onToggleNotifications={toggleNotifications}
                        />
                        <DailyGoalSection />
                    </div>
                )}

                {activeTab === 'data' && (
                    <div className="space-y-6">
                        <DataManagementSection onClearData={handleClearData} />
                    </div>
                )}

                {activeTab === 'admin' && isAdminEmail(user?.email) && (
                    <div className="space-y-6 pt-2">
                        <AdminDashboardPage />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SettingsPage;
