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
            <div className="p-5 border-b border-gray-100 dark:border-gray-700">
                <span className="font-bold text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-4">ILOVA MAVZUSI (THEME)</span>
                
                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() => { if (settings.theme !== 'light') onToggleTheme(); }}
                        className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 ${
                            settings.theme === 'light'
                                ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 font-bold shadow-md scale-[1.02]'
                                : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-500 hover:border-gray-300'
                        }`}
                    >
                        <div className="p-3 rounded-xl bg-amber-100 text-amber-600">
                            <Sun size={24} />
                        </div>
                        <div className="text-center">
                            <div className="text-sm font-bold">Kunduzgi Rejim</div>
                            <div className="text-[11px] text-gray-400 mt-0.5">Yorug' va tiniq mavzu</div>
                        </div>
                    </button>

                    <button
                        onClick={() => { if (settings.theme !== 'dark') onToggleTheme(); }}
                        className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 ${
                            settings.theme === 'dark'
                                ? 'border-indigo-500 bg-indigo-950/40 text-indigo-300 font-bold shadow-md scale-[1.02]'
                                : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-500 hover:border-gray-300'
                        }`}
                    >
                        <div className="p-3 rounded-xl bg-indigo-900 text-indigo-300">
                            <Moon size={24} />
                        </div>
                        <div className="text-center">
                            <div className="text-sm font-bold">Tungi Rejim</div>
                            <div className="text-[11px] text-gray-400 mt-0.5">Ko'zga qulay to'q mavzu</div>
                        </div>
                    </button>
                </div>
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
