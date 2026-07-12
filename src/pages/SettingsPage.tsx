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
    if (user?.email === 'fsoyilov@gmail.com') {
        tabs.push({ id: 'admin', label: 'Admin Panel', icon: Shield });
    }

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

    const handleClearData = async () => {
        await refreshData();
    };

    return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto min-h-screen">
            {/* Header / Profile Header */}
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {user?.email?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Sozlamalar</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">{user?.email}</p>
                    </div>
                </div>
            </div>

            {/* Desktop Tabs / Mobile Scrollable Tabs */}
            <div className="flex overflow-x-auto scrollbar-hide space-x-1 border-b border-gray-200 dark:border-gray-700 mb-8 pb-1">
                {tabs.map(tab => {
                    const isActive = activeTab === tab.id;
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap border-b-2 rounded-t-lg ${
                                isActive 
                                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/20' 
                                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`}
                        >
                            <Icon size={18} className={isActive ? 'text-indigo-500' : ''} />
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

                {activeTab === 'admin' && user?.email === 'fsoyilov@gmail.com' && (
                    <div className="space-y-6">
                        {/* Biz to'g'ridan-to'g'ri AdminDashboardPage ni ko'rsatishimiz yoki unga o'tish tugmasini qo'yishimiz mumkin */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                            <Shield className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Admin Boshqaruv Paneli</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6">
                                Foydalanuvchilar, tariflar va ilova sozlamalarini boshqarish paneli.
                            </p>
                            <button 
                                onClick={() => window.location.href = '/admin'}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                            >
                                Admin Paneliga O'tish
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SettingsPage;
