import React from 'react';
import { Bell, Moon, Sun, HelpCircle, Globe } from 'lucide-react';
import { PushNotificationService } from '../../services/PushNotificationService';
import { useLanguage } from '../../context/LanguageContext';

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
    const { language, setLanguage, t } = useLanguage();

    return (
        <div className="bg-card rounded-2xl border border-border p-6 md:p-8 space-y-8 animate-in fade-in duration-200">
            {/* Language Selector Section */}
            <div>
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                            <Globe size={20} className="text-primary" />
                            {t('settings.appLanguage')}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{t('settings.selectLanguage')}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Uzbek Language Card */}
                    <button
                        type="button"
                        onClick={() => setLanguage('uz')}
                        className={`p-5 rounded-xl border text-left transition-all duration-200 flex items-center gap-4 ${
                            language === 'uz'
                                ? 'border-primary bg-primary/5 text-foreground font-semibold shadow-sm'
                                : 'border-border bg-background/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                    >
                        <div className="text-3xl shrink-0">🇺🇿</div>
                        <div>
                            <div className="text-sm font-bold text-foreground">O'zbekcha</div>
                            <div className="text-xs text-muted-foreground">O'zbek tili (Uzbek)</div>
                        </div>
                    </button>

                    {/* English Language Card */}
                    <button
                        type="button"
                        onClick={() => setLanguage('en')}
                        className={`p-5 rounded-xl border text-left transition-all duration-200 flex items-center gap-4 ${
                            language === 'en'
                                ? 'border-primary bg-primary/5 text-foreground font-semibold shadow-sm'
                                : 'border-border bg-background/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                    >
                        <div className="text-3xl shrink-0">🇬🇧</div>
                        <div>
                            <div className="text-sm font-bold text-foreground">English</div>
                            <div className="text-xs text-muted-foreground">English Language</div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Theme Selector Section */}
            <div className="pt-6 border-t border-border">
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h3 className="text-lg font-bold text-foreground">Display & Mavzu</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">Ilovaning ko'rinish va rang rejimini tanlang</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Light Mode Card */}
                    <button
                        type="button"
                        onClick={() => { if (settings.theme !== 'light') onToggleTheme(); }}
                        className={`p-5 rounded-xl border text-left transition-all duration-200 flex items-center gap-4 ${
                            settings.theme === 'light'
                                ? 'border-primary bg-primary/5 text-foreground font-semibold shadow-sm'
                                : 'border-border bg-background/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                    >
                        <div className={`p-3 rounded-lg ${
                            settings.theme === 'light' ? 'bg-amber-500 text-white' : 'bg-muted text-muted-foreground'
                        }`}>
                            <Sun size={22} />
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-foreground">Kunduzgi Rejim</div>
                            <div className="text-xs text-muted-foreground">Yorug' va tinch ko'rinish</div>
                        </div>
                    </button>

                    {/* Dark Mode Card */}
                    <button
                        type="button"
                        onClick={() => { if (settings.theme !== 'dark') onToggleTheme(); }}
                        className={`p-5 rounded-xl border text-left transition-all duration-200 flex items-center gap-4 ${
                            settings.theme === 'dark'
                                ? 'border-primary bg-primary/5 text-foreground font-semibold shadow-sm'
                                : 'border-border bg-background/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                    >
                        <div className={`p-3 rounded-lg ${
                            settings.theme === 'dark' ? 'bg-indigo-600 text-white' : 'bg-muted text-muted-foreground'
                        }`}>
                            <Moon size={22} />
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-foreground">Tungi Rejim</div>
                            <div className="text-xs text-muted-foreground">Qorong'i va qulay ko'rinish</div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Notifications & Tour Controls */}
            <div className="space-y-4 pt-6 border-t border-border">
                <h4 className="text-sm font-semibold text-foreground">Tizim & Bildirishnomalar</h4>

                <div className="p-4 rounded-xl border border-border bg-background/50 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-orange-500/10 text-orange-500 rounded-lg">
                            <Bell size={20} />
                        </div>
                        <div>
                            <span className="font-semibold text-sm text-foreground block">Bildirishnomalar</span>
                            <span className="text-xs text-muted-foreground">Dars va Streak eslatmalarini qurilmada olish</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        {settings.notificationsEnabled && (
                            <button
                                onClick={async () => {
                                    const ok = await PushNotificationService.sendTestNotification();
                                    if (ok) {
                                        alert("Sinov bildirishnomasi yuborildi!");
                                    } else {
                                        alert("Bildirishnoma yuborishda xatolik yoki ruxsat yo'q.");
                                    }
                                }}
                                className="text-xs px-3 py-1.5 rounded-lg border border-border hover:bg-muted text-muted-foreground transition-colors"
                            >
                                Sinab ko'rish
                            </button>
                        )}
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={settings.notificationsEnabled}
                                onChange={onToggleNotifications}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>
                </div>

                <div className="p-4 rounded-xl border border-border bg-background/50 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-indigo-500/10 text-indigo-500 rounded-lg">
                            <HelpCircle size={20} />
                        </div>
                        <div>
                            <span className="font-semibold text-sm text-foreground block">Tizim bo'yicha yo'riqnoma</span>
                            <span className="text-xs text-muted-foreground">Qanday foydalanishni qayta ko'rish</span>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            localStorage.removeItem('study_planner_tour_completed');
                            window.location.reload();
                        }}
                        className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                        Boshlash
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PreferencesSection;
