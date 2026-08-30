import React, { useState } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { useLanguage } from '../context/LanguageContext';
import { requestNotificationPermission } from '../utils/notifications';
import PreferencesSection from '../components/settings/PreferencesSection';
import AccountSection from '../components/settings/AccountSection';
import { 
    User, Sliders, Shield, 
    Flame, Award, Clock, Sparkles, Mail
} from 'lucide-react';
import { isAdminEmail, isSuperAdmin } from '../utils/admin';
import { toast } from '../hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

import AdminDashboardPage from './AdminDashboardPage';

const SettingsPage: React.FC = () => {
    const { settings, updateSettings, user, getRank } = useStudyData();
    const { language } = useLanguage();
    const [activeTab, setActiveTab] = useState('profile');

    const displayEmail = user?.email || '';
    const isCurrentSuperAdmin = Boolean(displayEmail && isSuperAdmin(displayEmail));
    const isCurrentAdmin = Boolean(displayEmail && isAdminEmail(displayEmail, (user as any)?.role));

    const tabs = [
        { id: 'profile', label: language === 'ja' ? 'プロフィール・アカウント' : 'Profil & Hisob', icon: User },
        { id: 'preferences', label: language === 'ja' ? '学習設定・システム' : "O'quv Yo'nalishi & Tizim", icon: Sliders },
    ];

    // Admin bo'lsa Admin tab qo'shamiz
    if (isCurrentAdmin) {
        tabs.push({ id: 'admin', label: language === 'ja' ? '管理者パネル' : 'Admin Panel', icon: Shield });
    }

    const toggleNotifications = async () => {
        if (!settings.notificationsEnabled) {
            const granted = await requestNotificationPermission();
            if (granted) {
                updateSettings({ notificationsEnabled: true });
                toast({ title: language === 'ja' ? '🔔 通知が有効になりました' : '🔔 Bildirishnomalar yoqildi' });
            } else {
                toast({ variant: 'destructive', title: language === 'ja' ? '❌ 許可が拒否されました' : '❌ Ruxsat rad etildi' });
            }
        } else {
            updateSettings({ notificationsEnabled: false });
            toast({ title: language === 'ja' ? '🔕 通知が無効になりました' : "🔕 Bildirishnomalar o'chirildi" });
        }
    };

    const rankTitle = getRank ? getRank(settings.level || 1) : 'Bilimdon';
    const userName = user?.user_metadata?.full_name || (displayEmail ? displayEmail.split('@')[0] : (language === 'ja' ? '学習者' : 'Talaba'));

    return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto min-h-screen space-y-8 pb-28 md:pb-12 animate-in fade-in duration-300">
            {/* Hero Profile Banner — Sumi-e & Hanko Aesthetic */}
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 md:p-8 shadow-xs">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    {/* Left: Avatar & Identity */}
                    <div className="flex items-center gap-5">
                        <div className="relative shrink-0">
                            {/* Neutral Sumi Avatar */}
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-muted/90 text-foreground flex items-center justify-center text-2xl md:text-3xl font-display font-black shadow-xs border border-border ring-1 ring-border/50">
                                {userName.charAt(0).toUpperCase()}
                            </div>
                            <div className="absolute -bottom-1.5 -right-1.5 px-2 py-0.5 rounded-full bg-card border border-border text-[10px] font-bold text-muted-foreground shadow-xs">
                                Lvl {settings.level || 1}
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2.5 flex-wrap">
                                <h1 className="text-2xl md:text-3xl font-display font-black text-foreground tracking-tight">
                                    {userName}
                                </h1>
                                {isCurrentSuperAdmin ? (
                                    <span className="badge-gold font-black">
                                        👑 SUPER ADMIN
                                    </span>
                                ) : isCurrentAdmin ? (
                                    <span className="badge-hanko font-black">
                                        🛡️ ADMIN
                                    </span>
                                ) : (
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                                        {language === 'ja' ? '🎓 学習者' : "🎓 O'QUVCHI"}
                                    </span>
                                )}
                            </div>
                            <p className="text-xs md:text-sm text-muted-foreground font-medium flex items-center gap-1.5">
                                <Mail size={14} className="text-muted-foreground shrink-0" />
                                <span className="font-semibold text-foreground/90">{displayEmail}</span>
                            </p>
                        </div>
                    </div>

                    {/* Right: 4 Standout Quick Stats (Visual Hierarchy with Bold Numbers + Light Captions) */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                        <div className="p-3.5 rounded-2xl bg-muted/30 border border-border backdrop-blur-xs text-center transition-all hover:border-amber-500/30">
                            <div className="flex items-center justify-center gap-1 text-[#C9A961] mb-1">
                                <Flame size={15} />
                                <span className="text-[11px] font-bold uppercase tracking-wider">{language === 'ja' ? '連続日数' : 'Streak'}</span>
                            </div>
                            <div className="text-xl md:text-2xl font-black text-foreground tabular-nums tracking-tight">
                                {settings.currentStreak || 0}
                            </div>
                            <div className="text-[11px] font-medium text-muted-foreground mt-0.5">
                                {language === 'ja' ? '日連続' : 'kun ketma-ket'}
                            </div>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-muted/30 border border-border backdrop-blur-xs text-center transition-all hover:border-border">
                            <div className="flex items-center justify-center gap-1 text-[#C9A961] mb-1">
                                <Award size={15} />
                                <span className="text-[11px] font-bold uppercase tracking-wider">{language === 'ja' ? 'ランク' : 'Daraja'}</span>
                            </div>
                            <div className="text-xl md:text-2xl font-black text-foreground tabular-nums tracking-tight">
                                {settings.level || 1}
                            </div>
                            <div className="text-[11px] font-medium text-muted-foreground mt-0.5 truncate max-w-[90px] mx-auto">
                                {rankTitle}
                            </div>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-muted/30 border border-border backdrop-blur-xs text-center transition-all hover:border-border">
                            <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                                <Clock size={15} />
                                <span className="text-[11px] font-bold uppercase tracking-wider">{language === 'ja' ? '目標時間' : 'Maqsad'}</span>
                            </div>
                            <div className="text-xl md:text-2xl font-black text-foreground tabular-nums tracking-tight">
                                {Math.floor((settings.dailyStudyGoalMinutes || 240) / 60)}
                            </div>
                            <div className="text-[11px] font-medium text-muted-foreground mt-0.5">
                                {language === 'ja' ? '時間/日' : 'soat/kun'}
                            </div>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-muted/30 border border-border backdrop-blur-xs text-center transition-all hover:border-emerald-500/30">
                            <div className="flex items-center justify-center gap-1 text-emerald-500 mb-1">
                                <Sparkles size={15} />
                                <span className="text-[11px] font-bold uppercase tracking-wider">{language === 'ja' ? 'AIクレジット' : 'AI Kredit'}</span>
                            </div>
                            <div className="text-base md:text-lg font-black text-emerald-600 dark:text-emerald-400 tracking-tight pt-1">
                                {language === 'ja' ? '無制限' : 'Cheksiz'}
                            </div>
                            <div className="text-[11px] font-medium text-muted-foreground mt-0.5">
                                {language === 'ja' ? '完全無料' : 'Har doim bepul'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs (Horizontal Scrollable Pills) */}
            <div className="flex overflow-x-auto scrollbar-hide gap-1.5 p-1.5 bg-card/90 backdrop-blur-md rounded-2xl border border-border sticky top-0 z-20 shadow-xs">
                {tabs.map(tab => {
                    const isActive = activeTab === tab.id;
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold transition-all duration-200 whitespace-nowrap rounded-xl select-none ${
                                isActive 
                                    ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/20 scale-[1.02]' 
                                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/70'
                            }`}
                        >
                            <Icon size={15} />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Tab Contents with Framer Motion Animation */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className="mt-6"
                >
                    {activeTab === 'profile' && (
                        <AccountSection />
                    )}

                    {activeTab === 'preferences' && (
                        <PreferencesSection
                            settings={settings}
                            onToggleNotifications={toggleNotifications}
                        />
                    )}

                    {activeTab === 'admin' && (
                        <AdminDashboardPage />
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default SettingsPage;
