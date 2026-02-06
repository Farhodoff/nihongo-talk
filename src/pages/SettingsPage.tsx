import { useStudyData } from '../context/StudyPlannerContext';
import { requestNotificationPermission } from '../utils/notifications';
import PreferencesSection from '../components/settings/PreferencesSection';
import DataManagementSection from '../components/settings/DataManagementSection';
import AccountSection from '../components/settings/AccountSection';
import TelegramSection from '../components/settings/TelegramSection';

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

    const handleSaveApiKey = async (key: string) => {
        await updateSettings({ googleApiKey: key });
    };

    return (
        <div>
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

                {/* Telegram Integration Section */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <TelegramSection />
                </div>

                <DataManagementSection onClearData={handleClearData} />

                <AccountSection
                    apiKey={settings.googleApiKey || ''}
                    onSaveApiKey={handleSaveApiKey}
                />
            </div>
        </div>
    );
};

export default SettingsPage;
