import { Bell, Moon, Sun } from 'lucide-react';

interface Settings {
    theme: 'light' | 'dark';
    notificationsEnabled: boolean;
}

interface PreferencesSectionProps {
    settings: Settings;
    onToggleTheme: () => void;
    onToggleNotifications: () => void;
}

const PreferencesSection: React.FC<PreferencesSectionProps> = ({
    settings,
    onToggleTheme,
    onToggleNotifications
}) => {
    return (
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
                    onClick={onToggleTheme}
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
                    onClick={onToggleNotifications}
                    className={`w-12 h-6 rounded-full transition-colors relative ${settings.notificationsEnabled ? 'bg-indigo-500' : 'bg-gray-300'}`}
                >
                    <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${settings.notificationsEnabled ? 'left-7' : 'left-1'}`} />
                </button>
            </div>
        </div>
    );
};

export default PreferencesSection;
