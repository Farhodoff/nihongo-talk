import { Bell, GraduationCap, Plus, Trash2, ArrowRightLeft } from 'lucide-react';
import { PushNotificationService } from '../../services/PushNotificationService';
import { useStudyData } from '../../context/StudyPlannerContext';
import { toast } from '../../hooks/use-toast';
import { isSuperAdmin } from '../../utils/admin';
import { useLanguage } from '../../context/LanguageContext';
import { UzbekistanFlag, JapanFlag } from '../common/FlagIcons';
import AIProviderSection from './AIProviderSection';

interface Settings {
  theme: 'light' | 'dark' | 'system';
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
  onToggleNotifications,
}) => {
  const { language, setLanguage } = useLanguage();
  const {
    user,
    primaryLanguage,
    enabledLanguages,
    targetLevel,
    targetGoal,
    setPrimaryFocus,
    addSecondaryLanguage,
    removeSecondaryLanguage,
  } = useStudyData();

  const isSuper = isSuperAdmin(user?.email);

  return (
    <div className="space-y-8 rounded-2xl border border-border bg-card p-6 duration-200 animate-in fade-in md:p-8">
      {/* AI Provider & Engine Status (Super Admin Only) */}
      {isSuper && <AIProviderSection />}

      {/* Dedicated Learning Focus & Languages Manager */}
      <div id="learning-focus" className="space-y-6">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
              <GraduationCap size={20} className="text-muted-foreground" />
              O'quv Yo'nalishi & Tillari (Learning Focus)
            </h3>
            <p className="mt-0.5 text-xs text-muted-foreground">
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
                toast({
                  title: nextLang === 'ja' ? "🇯🇵 Yapon tili qo'shildi" : "🇬🇧 Ingliz tili qo'shildi",
                });
              }}
              className="inline-flex items-center gap-1.5 self-start rounded-xl border border-border bg-muted/80 px-3.5 py-2 text-xs font-bold text-foreground transition-all hover:bg-muted"
            >
              <Plus size={15} />
              <span>
                {primaryLanguage === 'en'
                  ? "+ 🇯🇵 Yapon tilini qo'shish"
                  : "+ 🇬🇧 Ingliz tilini qo'shish"}
              </span>
            </button>
          )}
        </div>

        {/* Primary & Additional Languages List */}
        <div className="space-y-4">
          {/* 1. PRIMARY LANGUAGE CARD */}
          <div className="rounded-2xl border border-l-4 border-border border-l-primary bg-card/60 p-5 transition-all">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-border bg-background/90 p-2.5 text-4xl shadow-xs">
                  {primaryLanguage === 'ja' ? '🇯🇵' : '🇬🇧'}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-black text-foreground">
                      {primaryLanguage === 'ja' ? 'Yapon Tili (JLPT)' : 'Ingliz Tili (IELTS)'}
                    </span>
                    <span className="badge-gold text-[10px] font-bold">★ ASOSIY FOKUS</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Maqsad: <strong className="text-foreground">{targetLevel}</strong> •{' '}
                    {targetGoal}
                  </div>
                </div>
              </div>

              {/* Level Quick Select */}
              <div className="flex items-center gap-2 self-start sm:self-center">
                <span className="text-xs font-bold text-muted-foreground">Daraja:</span>
                <select
                  value={targetLevel}
                  onChange={(e) => setPrimaryFocus(primaryLanguage, e.target.value, targetGoal)}
                  className="outline-hidden rounded-xl border border-border bg-background px-3 py-1.5 text-xs font-bold text-foreground focus:ring-2 focus:ring-primary"
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
          {isSuper &&
            enabledLanguages
              .filter((l) => l !== primaryLanguage)
              .map((secLang) => (
                <div
                  key={secLang}
                  className="flex flex-col justify-between gap-4 rounded-2xl border border-border bg-background/60 p-5 transition-all hover:bg-muted/40 sm:flex-row sm:items-center"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl border border-border bg-muted/60 p-2 text-3xl">
                      {secLang === 'ja' ? '🇯🇵' : '🇬🇧'}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-foreground">
                          {secLang === 'ja' ? 'Yapon Tili (JLPT)' : 'Ingliz Tili (IELTS)'}
                        </span>
                        <span className="rounded-full border border-border bg-muted px-2 py-0.5 text-[10px] font-bold uppercase text-muted-foreground">
                          Qo'shimcha (Additional)
                        </span>
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        O'rganish ma'lumotlari saqlangan
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={async () => {
                        await setPrimaryFocus(secLang);
                        toast({
                          title:
                            secLang === 'ja'
                              ? "🇯🇵 Yapon tili asosiy fokusga o'tkazildi"
                              : "🇬🇧 Ingliz tili asosiy fokusga o'tkazildi",
                        });
                      }}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-1.5 text-xs font-black text-primary-foreground shadow-sm transition-all hover:scale-[1.02] active:scale-95"
                    >
                      <ArrowRightLeft size={14} />
                      <span>Asosiy Qilish</span>
                    </button>

                    <button
                      type="button"
                      onClick={async () => {
                        if (
                          window.confirm(
                            secLang === 'ja'
                              ? "Yapon tilini qo'shimcha ro'yxatdan olib tashlamoqchimisiz?"
                              : "Ingliz tilini qo'shimcha ro'yxatdan olib tashlamoqchimisiz?",
                          )
                        ) {
                          await removeSecondaryLanguage(secLang);
                          toast({ title: "Til ro'yxatdan olib tashlandi" });
                        }
                      }}
                      className="rounded-xl border border-transparent p-2 text-muted-foreground transition-colors hover:border-rose-500/20 hover:bg-rose-500/10 hover:text-rose-400"
                      title="Qo'shimcha ro'yxatdan o'chirish"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>

      {/* App Interface Language & Notifications */}
      <div className="space-y-4 border-t border-border pt-6">
        <h4 className="text-sm font-semibold text-foreground">Tizim & Interfeys Tili</h4>

        {/* Interface Language Switcher Card */}
        <div className="flex flex-col justify-between gap-4 rounded-xl border border-border bg-background/50 p-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2.5 text-lg text-primary">🌐</div>
            <div>
              <span className="block text-sm font-semibold text-foreground">
                {language === 'uz' ? 'Ilova Interfeys Tili' : 'アプリの表示言語'}
              </span>
              <span className="text-xs text-muted-foreground">
                {language === 'uz'
                  ? 'Menyu va tugmalar tilini tanlang'
                  : 'メニューとボタンの言語を選択'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setLanguage('uz');
                toast({ title: "O'zbek tili tanlandi" });
              }}
              className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-bold transition-all ${
                language === 'uz'
                  ? 'border-primary bg-primary text-primary-foreground shadow-xs'
                  : 'border-border bg-card text-muted-foreground hover:bg-muted'
              }`}
            >
              <UzbekistanFlag className="h-2.5 w-4" />
              <span>O'zbekcha</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setLanguage('ja');
                toast({ title: '日本語が選択されました' });
              }}
              className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-bold transition-all ${
                language === 'ja'
                  ? 'border-primary bg-primary text-primary-foreground shadow-xs'
                  : 'border-border bg-card text-muted-foreground hover:bg-muted'
              }`}
            >
              <JapanFlag className="h-2.5 w-4" />
              <span>日本語</span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background/50 p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-orange-500/10 p-2.5 text-orange-500">
              <Bell size={20} />
            </div>
            <div>
              <span className="block text-sm font-semibold text-foreground">
                Brauzer Bildirishnomalari
              </span>
              <span className="text-xs text-muted-foreground">
                Dars va Streak eslatmalarini qurilmada olish
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {settings.notificationsEnabled && (
              <button
                onClick={async () => {
                  const ok = await PushNotificationService.sendTestNotification();
                  if (ok) {
                    toast({ title: '🔔 Sinov bildirishnomasi yuborildi!' });
                  } else {
                    toast({ title: "Xatolik yoki ruxsat yo'q", variant: 'destructive' });
                  }
                }}
                className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted"
              >
                Sinab ko'rish
              </button>
            )}
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={settings.notificationsEnabled}
                onChange={onToggleNotifications}
                className="peer sr-only"
              />
              <div className="peer h-6 w-11 rounded-full bg-muted after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferencesSection;
