import { Bell, Moon, Sun, HelpCircle } from 'lucide-react';
import { PushNotificationService } from '../../services/PushNotificationService';

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
                    <div className="flex flex-col">
                        <span className="font-medium text-gray-900 dark:text-white">Bildirishnomalar</span>
                        <span className="text-[10px] text-gray-400 dark:text-gray-500">Dars va Streak eslatmalarini qurilmada olish</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {settings.notificationsEnabled && (
                        <button
                            onClick={() => {
                                const success = PushNotificationService.sendTestNotification();
                                if (!success) {
                                    PushNotificationService.requestPermission();
                                }
                            }}
                            className="px-3 py-1.5 bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/20 rounded-xl text-xs font-bold transition-all"
                        >
                            Sinov Bildirishnomasi 🔔
                        </button>
                    )}
                    <button
                        onClick={onToggleNotifications}
                        className={`w-12 h-6 rounded-full transition-colors relative ${settings.notificationsEnabled ? 'bg-indigo-500' : 'bg-gray-300'}`}
                    >
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${settings.notificationsEnabled ? 'left-7' : 'left-1'}`} />
                    </button>
                </div>
            </div>

            <div className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg">
                        <HelpCircle size={20} />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-medium text-gray-900 dark:text-white">Tizim bo'yicha yo'riqnoma</span>
                        <span className="text-[10px] text-gray-400 dark:text-gray-500">Tizimdan qanday foydalanishni qayta o'rganish</span>
                    </div>
                </div>
                <button
                    onClick={() => {
                        localStorage.removeItem('onboarding_completed');
                        window.dispatchEvent(new Event('restart-onboarding-tour'));
                    }}
                    className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all active:scale-95 shadow-sm shadow-indigo-600/10"
                >
                    Boshlash
                </button>
            </div>
        </div>
    );
};

export default PreferencesSection;
