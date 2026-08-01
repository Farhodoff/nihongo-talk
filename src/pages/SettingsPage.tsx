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
        toast({ title: newTheme === 'dark' ? '🌙 Tungi rejim yoqildi' : '☀️ Kunduzgi rejim yoqildi' });
    };

    const toggleNotifications = async () => {
        if (!settings.notificationsEnabled) {
            const granted = await requestNotificationPermission();
            if (granted) {
                updateSettings({ notificationsEnabled: true });
                toast({ title: '🔔 Bildirishnomalar yoqildi' });
            } else {
                toast({ variant: 'destructive', title: '❌ Ruxsat rad etildi' });
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
        <div className="p-4 md:p-8 max-w-5xl mx-auto min-h-screen space-y-6">
            {/* Header / Profile Summary */}
            <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl font-bold border border-primary/20">
                        {user?.email?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">Sozlamalar</h1>
                        <p className="text-xs text-muted-foreground">{user?.email}</p>
                    </div>
                </div>
            </div>

            {/* Desktop Tabs / Mobile Scrollable Tabs */}
            <div className="flex overflow-x-auto scrollbar-hide gap-2 p-1.5 bg-card rounded-xl border border-border">
                {tabs.map(tab => {
                    const isActive = activeTab === tab.id;
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold transition-all duration-150 whitespace-nowrap rounded-lg ${
                                isActive 
                                    ? 'bg-primary text-primary-foreground shadow-sm' 
                                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            }`}
                        >
                            <Icon size={16} />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Tab Contents */}
            <div className="mt-6">
                {activeTab === 'profile' && (
                    <div className="space-y-6">
                        <AccountSection />
                        <DailyGoalSection />
                        <SubscriptionSection />
                    </div>
                )}

                {activeTab === 'ai' && (
                    <div className="space-y-6">
                        <AIProviderSection />
                        <TelegramSection />
                        <GoogleCalendarSection />
                    </div>
                )}

                {activeTab === 'preferences' && (
                    <PreferencesSection
                        settings={settings}
                        onToggleTheme={toggleTheme}
                        onToggleNotifications={toggleNotifications}
                    />
                )}

                {activeTab === 'data' && (
                    <DataManagementSection onClearData={handleClearData} />
                )}

                {activeTab === 'admin' && (
                    <AdminDashboardPage />
                )}
            </div>
        </div>
    );
};

export default SettingsPage;
