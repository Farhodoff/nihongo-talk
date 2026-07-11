import React from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { requestNotificationPermission } from '../utils/notifications';
import PreferencesSection from '../components/settings/PreferencesSection';
import DataManagementSection from '../components/settings/DataManagementSection';
import AccountSection from '../components/settings/AccountSection';
import TelegramSection from '../components/settings/TelegramSection';
import GoogleCalendarSection from '../components/settings/GoogleCalendarSection';
import AIProviderSection from '../components/settings/AIProviderSection';
import DailyGoalSection from '../components/settings/DailyGoalSection';

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

    const handleClearData = async () => {
        await refreshData();
    };

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Sozlamalar</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-1">Tajribangizni moslashtiring</p>
            </div>

            <div className="space-y-6 max-w-2xl">
                <PreferencesSection
                    settings={settings}
                    onToggleTheme={toggleTheme}
                    onToggleNotifications={toggleNotifications}
                />

                {/* AI Models */}
                <AIProviderSection />

                {/* Daily Goal Section */}
                <DailyGoalSection />

                {/* Telegram Integration Section */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <TelegramSection />
                </div>

                {/* Google Calendar Integration */}
                <GoogleCalendarSection />

                <DataManagementSection onClearData={handleClearData} />

                <AccountSection />
            </div>
        </div>
    );
};

export default SettingsPage;
