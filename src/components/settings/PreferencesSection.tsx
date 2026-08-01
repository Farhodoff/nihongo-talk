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
        <div className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl rounded-[2.5rem] border border-gray-200/80 dark:border-slate-800/80 shadow-2xl overflow-hidden p-6 md:p-8 space-y-8 animate-in fade-in slide-in-from-bottom-3 duration-300">
            {/* Theme Selector Section */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <span className="font-extrabold text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400">ILOVA MAVZUSI (THEME)</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-0.5">Displeyni Moslashtiring</h3>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50">
                        {settings.theme === 'dark' ? '🌙 Tungi Rejim Faol' : '☀️ Kunduzgi Rejim Faol'}
                    </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Light Mode Card */}
                    <button
                        type="button"
                        onClick={() => { if (settings.theme !== 'light') onToggleTheme(); }}
                        className={`group relative p-6 rounded-3xl border-2 transition-all duration-300 flex flex-col items-center justify-center text-center gap-4 ${
                            settings.theme === 'light'
                                ? 'border-amber-500 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent text-amber-900 dark:text-amber-300 font-bold shadow-xl shadow-amber-500/10 scale-[1.02]'
                                : 'border-gray-200/80 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/40 text-gray-500 hover:border-amber-400/50 hover:bg-amber-50/30 dark:hover:bg-slate-800/60'
                        }`}
                    >
                        <div className={`p-4 rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                            settings.theme === 'light' ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' : 'bg-amber-100 dark:bg-slate-800 text-amber-600'
                        }`}>
                            <Sun size={28} />
                        </div>
                        <div>
                            <div className="text-base font-bold text-gray-900 dark:text-white">Kunduzgi Rejim</div>
                            <div className="text-xs text-gray-500 dark:text-slate-400 mt-1 font-normal">Yorug', ravshan va tiniq ish stoli</div>
                        </div>
                        {settings.theme === 'light' && (
                            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-amber-500 animate-pulse"></div>
                        )}
                    </button>

                    {/* Dark Mode Card */}
                    <button
                        type="button"
                        onClick={() => { if (settings.theme !== 'dark') onToggleTheme(); }}
                        className={`group relative p-6 rounded-3xl border-2 transition-all duration-300 flex flex-col items-center justify-center text-center gap-4 ${
                            settings.theme === 'dark'
                                ? 'border-indigo-500 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent text-indigo-300 font-bold shadow-xl shadow-indigo-500/10 scale-[1.02]'
                                : 'border-gray-200/80 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/40 text-gray-500 hover:border-indigo-400/50 hover:bg-indigo-50/30 dark:hover:bg-slate-800/60'
                        }`}
                    >
                        <div className={`p-4 rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                            settings.theme === 'dark' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'bg-indigo-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400'
                        }`}>
                            <Moon size={28} />
                        </div>
                        <div>
                            <div className="text-base font-bold text-gray-900 dark:text-white">Tungi Rejim</div>
                            <div className="text-xs text-gray-500 dark:text-slate-400 mt-1 font-normal">Ko'zga ziyon yetkazmaydigan to'q mavzu</div>
                        </div>
                        {settings.theme === 'dark' && (
                            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-indigo-500 animate-pulse"></div>
                        )}
                    </button>
                </div>
            </div>

            {/* Notifications & Tour Controls */}
            <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-slate-800/80">
                <span className="font-extrabold text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block mb-2">BILDIRISHNOMALAR VA YO'RIQNOMA</span>

                <div className="p-5 rounded-2xl bg-gray-50/80 dark:bg-slate-900/60 border border-gray-200/60 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:bg-gray-100/60 dark:hover:bg-slate-800/50">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-2xl">
                            <Bell size={22} />
                        </div>
                        <div>
                            <span className="font-bold text-base text-gray-900 dark:text-white block">Bildirishnomalar (Push)</span>
                            <span className="text-xs text-gray-500 dark:text-slate-400">Dars va Streak eslatmalarini qurilmada doimiy olish</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                        {settings.notificationsEnabled && (
                            <button
                                type="button"
                                onClick={() => {
                                    const success = PushNotificationService.sendTestNotification();
                                    if (!success) {
                                        PushNotificationService.requestPermission();
                                    }
                                }}
                                className="px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/20 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95"
                            >
                                Sinov Bildirishnomasi 🔔
                            </button>
                        )}
                        <button
                            type="button"
                            onClick={onToggleNotifications}
                            className={`w-14 h-7 rounded-full transition-colors relative shadow-inner ${settings.notificationsEnabled ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-slate-700'}`}
                        >
                            <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform shadow-md ${settings.notificationsEnabled ? 'left-8' : 'left-1'}`} />
                        </button>
                    </div>
                </div>

                <div className="p-5 rounded-2xl bg-gray-50/80 dark:bg-slate-900/60 border border-gray-200/60 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:bg-gray-100/60 dark:hover:bg-slate-800/50">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-2xl">
                            <HelpCircle size={22} />
                        </div>
                        <div>
                            <span className="font-bold text-base text-gray-900 dark:text-white block">Tizim bo'yicha yo'riqnoma</span>
                            <span className="text-xs text-gray-500 dark:text-slate-400">Tizimdan qanday foydalanishni qayta o'rganish bo'yicha tur</span>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => {
                            localStorage.removeItem('onboarding_completed');
                            window.dispatchEvent(new Event('restart-onboarding-tour'));
                        }}
                        className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl text-xs font-bold transition-all active:scale-95 shadow-md shadow-indigo-500/20"
                    >
                        Boshlash
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PreferencesSection;
