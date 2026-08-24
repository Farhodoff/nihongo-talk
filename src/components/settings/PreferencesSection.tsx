import { Bell, HelpCircle, GraduationCap, Plus, Trash2, ArrowRightLeft } from 'lucide-react';
import { PushNotificationService } from '../../services/PushNotificationService';
import { useStudyData } from '../../context/StudyPlannerContext';
import { toast } from '../../hooks/use-toast';
import { isSuperAdmin } from '../../utils/admin';
import AIProviderSection from './AIProviderSection';

interface Settings {
    theme: 'light' | 'dark';
    notificationsEnabled: boolean;
    showFurigana?: boolean;
    showRomaji?: boolean;
}

interface PreferencesSectionProps {
    settings: Settings;
    onToggleNotifications: () => void;
}

const PreferencesSection: React.FC<PreferencesSectionProps> = ({
    settings,
    onToggleNotifications
}) => {
    const { 
        user,
        primaryLanguage, 
        enabledLanguages, 
        targetLevel, 
        targetGoal, 
        setPrimaryFocus, 
        addSecondaryLanguage, 
        removeSecondaryLanguage 
    } = useStudyData();

    const isSuper = isSuperAdmin(user?.email);

    return (
        <div className="bg-card rounded-2xl border border-border p-6 md:p-8 space-y-8 animate-in fade-in duration-200">
            {/* AI Provider & Engine Status */}
            <AIProviderSection />

            {/* Dedicated Learning Focus & Languages Manager */}
            <div id="learning-focus" className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                            <GraduationCap size={20} className="text-primary" />
                            O'quv Yo'nalishi & Tillari (Learning Focus)
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">
                            Asosiy til menyu, o'quv rejalari va tavsiyalarni boshqaradi.
                        </p>
                    </div>
                    
                    {/* Add Secondary Language Action (Super Admin Only) */}
                    {isSuper && enabledLanguages.length < 2 && (
                        <button
                            type="button"
                            onClick={async () => {
                                const nextLang = primaryLanguage === 'en' ? 'ja' : 'en';
                                await addSecondaryLanguage(nextLang);
                                toast({ title: nextLang === 'ja' ? "🇯🇵 Yapon tili qo'shildi" : "🇬🇧 Ingliz tili qo'shildi" });
                            }}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 text-xs font-black transition-all self-start"
                        >
                            <Plus size={15} />
                            <span>{primaryLanguage === 'en' ? "+ 🇯🇵 Yapon tilini qo'shish" : "+ 🇬🇧 Ingliz tilini qo'shish"}</span>
                        </button>
                    )}
                </div>

                {/* Primary & Additional Languages List */}
                <div className="space-y-4">
                    {/* 1. PRIMARY LANGUAGE CARD */}
                    <div className={`p-5 rounded-2xl border-2 transition-all ${
                        primaryLanguage === 'ja'
                            ? 'border-rose-500/80 bg-rose-950/20 shadow-lg shadow-rose-950/20'
                            : 'border-indigo-500/80 bg-indigo-950/20 shadow-lg shadow-indigo-950/20'
                    }`}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="text-4xl p-2.5 rounded-2xl bg-background/80 border border-border shadow-xs">
                                    {primaryLanguage === 'ja' ? '🇯🇵' : '🇬🇧'}
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-base font-black text-foreground">
                                            {primaryLanguage === 'ja' ? 'Yapon Tili (JLPT)' : 'Ingliz Tili (IELTS)'}
                                        </span>
                                        <span className={`text-[10px] uppercase font-black px-2.5 py-0.5 rounded-full border ${
                                            primaryLanguage === 'ja'
                                                ? 'bg-rose-500 text-white border-rose-400'
                                                : 'bg-indigo-600 text-white border-indigo-400'
                                        }`}>
                                            ★ ASOSIY FOKUS (PRIMARY)
                                        </span>
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Maqsad: <strong className="text-foreground">{targetLevel}</strong> • {targetGoal}
                                    </div>
                                </div>
                            </div>

                            {/* Level Quick Select */}
                            <div className="flex items-center gap-2 self-start sm:self-center">
                                <span className="text-xs font-bold text-muted-foreground">Daraja:</span>
                                <select
                                    value={targetLevel}
                                    onChange={(e) => setPrimaryFocus(primaryLanguage, e.target.value, targetGoal)}
                                    className="px-3 py-1.5 rounded-xl bg-background border border-border text-xs font-bold text-foreground focus:ring-2 focus:ring-primary outline-hidden"
                                >
                                    {primaryLanguage === 'ja' ? (
                                        <>
                                            <option value="N5">JLPT N5 (Boshlang'ich)</option>
                                            <option value="N4">JLPT N4</option>
                                            <option value="N3">JLPT N3 (O'rta)</option>
                                            <option value="N2">JLPT N2 (Biznes)</option>
                                            <option value="N1">JLPT N1 (Yuqori)</option>
                                        </>
                                    ) : (
                                        <>
                                            <option value="A2">Beginner (A2)</option>
                                            <option value="B1">Intermediate (B1)</option>
                                            <option value="B2">Upper-Int / IELTS 6.5 (B2)</option>
                                            <option value="C1">Advanced / IELTS 7.5+ (C1)</option>
                                            <option value="C2">Mastery / IELTS 8.5+ (C2)</option>
                                        </>
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* 2. ADDITIONAL (SECONDARY) LANGUAGES (Super Admin Only) */}
                    {isSuper && enabledLanguages.filter(l => l !== primaryLanguage).map(secLang => (
                        <div 
                            key={secLang}
                            className="p-5 rounded-2xl border border-border bg-background/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:bg-muted/40"
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-3xl p-2 rounded-2xl bg-muted/60 border border-border">
                                    {secLang === 'ja' ? '🇯🇵' : '🇬🇧'}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-bold text-foreground">
                                            {secLang === 'ja' ? 'Yapon Tili (JLPT)' : 'Ingliz Tili (IELTS)'}
                                        </span>
                                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">
                                            Qo'shimcha (Additional)
                                        </span>
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-0.5">
                                        O'rganish ma'lumotlari saqlangan
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={async () => {
                                        await setPrimaryFocus(secLang);
                                        toast({ title: secLang === 'ja' ? "🇯🇵 Yapon tili asosiy fokusga o'tkazildi" : "🇬🇧 Ingliz tili asosiy fokusga o'tkazildi" });
                                    }}
                                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary text-primary-foreground font-black text-xs shadow-sm hover:scale-[1.02] active:scale-95 transition-all"
                                >
                                    <ArrowRightLeft size={14} />
                                    <span>Asosiy Qilish</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={async () => {
                                        if (window.confirm(secLang === 'ja' ? "Yapon tilini qo'shimcha ro'yxatdan olib tashlamoqchimisiz?" : "Ingliz tilini qo'shimcha ro'yxatdan olib tashlamoqchimisiz?")) {
                                            await removeSecondaryLanguage(secLang);
                                            toast({ title: "Til ro'yxatdan olib tashlandi" });
                                        }
                                    }}
                                    className="p-2 rounded-xl text-muted-foreground hover:text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-colors"
                                    title="Qo'shimcha ro'yxatdan o'chirish"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
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
                            <span className="font-semibold text-sm text-foreground block">Brauzer Bildirishnomalari</span>
                            <span className="text-xs text-muted-foreground">Dars va Streak eslatmalarini qurilmada olish</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        {settings.notificationsEnabled && (
                            <button
                                onClick={async () => {
                                    const ok = await PushNotificationService.sendTestNotification();
                                    if (ok) {
                                        toast({ title: "🔔 Sinov bildirishnomasi yuborildi!" });
                                    } else {
                                        toast({ title: "Xatolik yoki ruxsat yo'q", variant: "destructive" });
                                    }
                                }}
                                className="text-xs px-3 py-1.5 rounded-lg border border-border hover:bg-muted text-muted-foreground transition-colors font-medium"
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
                            <span className="font-semibold text-sm text-foreground block">Tizim bo'yicha yo'riqnoma (Tour)</span>
                            <span className="text-xs text-muted-foreground">Barcha bo'limlar bo'yicha interaktiv sayohatni qayta ko'rish</span>
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
