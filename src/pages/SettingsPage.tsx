import React, { useState } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { useSubscription } from '../hooks/useSubscription';
import { requestNotificationPermission } from '../utils/notifications';
import PreferencesSection from '../components/settings/PreferencesSection';
import AccountSection from '../components/settings/AccountSection';
import { 
    User, Sliders, Shield, 
    Flame, Award, Clock, Sparkles
} from 'lucide-react';
import { isAdminEmail } from '../utils/admin';
import { toast } from '../hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

import AdminDashboardPage from './AdminDashboardPage';

const SettingsPage: React.FC = () => {
    const { settings, updateSettings, user, getRank } = useStudyData();
    const { subscription } = useSubscription();
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'Profil & Hisob', icon: User },
        { id: 'preferences', label: 'Interfeys & Til', icon: Sliders },
    ];

    // Admin bo'lsa Admin tab qo'shamiz
    if (isAdminEmail(user?.email)) {
        tabs.push({ id: 'admin', label: 'Admin Panel', icon: Shield });
    }

    const toggleNotifications = async () => {
        if (!settings.notificationsEnabled) {
            const granted = await requestNotificationPermission();
            if (granted) {
                updateSettings({ notificationsEnabled: true });
                toast({ title: '🔔 Bildirishnomalar yoqildi' });
            } else {
                toast({ variant: 'destructive', title: '❌ Ruxsat rad etildi' });
            }
        } else {
            updateSettings({ notificationsEnabled: false });
            toast({ title: '🔕 Bildirishnomalar o\'chirildi' });
        }
    };

    const rankTitle = getRank ? getRank(settings.level || 1) : 'Bilimdon';
    const userName = user?.user_metadata?.full_name || localStorage.getItem('study_planner_user_name') || user?.email?.split('@')[0] || "O'quvchi";

    return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto min-h-screen space-y-6 pb-28 md:pb-12 animate-in fade-in duration-300">
            {/* Hero Profile Banner */}
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-card p-6 md:p-8 shadow-xs">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    {/* Left: Avatar & Identity */}
                    <div className="flex items-center gap-5">
                        <div className="relative">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-tr from-primary to-indigo-600 text-white flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shadow-primary/25 border-2 border-background">
                                {userName.charAt(0).toUpperCase()}
                            </div>
                            <div className="absolute -bottom-1.5 -right-1.5 px-2 py-0.5 rounded-full bg-background border border-border text-[10px] font-black text-primary shadow-xs">
                                Lvl {settings.level || 1}
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 flex-wrap">
                                <h1 className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
                                    {userName}
                                </h1>
                                {subscription?.tier === 'premium' ? (
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs">
                                        PREMIUM VIP
                                    </span>
                                ) : subscription?.tier === 'pro' ? (
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white shadow-xs">
                                        PRO A'ZO
                                    </span>
                                ) : (
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-muted text-muted-foreground border border-border">
                                        TRIAL / FREE
                                    </span>
                                )}
                            </div>
                            <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                                {user?.email || "Mahalliy Foydalanuvchi"}
                            </p>
                        </div>
                    </div>

                    {/* Right: 4 Quick Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        <div className="p-3 rounded-2xl bg-background/80 border border-border backdrop-blur-xs text-center">
                            <div className="flex items-center justify-center gap-1 text-orange-500 mb-0.5">
                                <Flame size={15} />
                                <span className="text-xs font-bold uppercase tracking-wider">Streak</span>
                            </div>
                            <span className="text-base font-black text-foreground tabular-nums">
                                {settings.currentStreak || 0} <span className="text-[11px] font-medium text-muted-foreground">kun</span>
                            </span>
                        </div>

                        <div className="p-3 rounded-2xl bg-background/80 border border-border backdrop-blur-xs text-center">
                            <div className="flex items-center justify-center gap-1 text-primary mb-0.5">
                                <Award size={15} />
                                <span className="text-xs font-bold uppercase tracking-wider">Daraja</span>
                            </div>
                            <span className="text-base font-black text-foreground tabular-nums">
                                {settings.level || 1} <span className="text-[11px] font-medium text-muted-foreground">{rankTitle}</span>
                            </span>
                        </div>

                        <div className="p-3 rounded-2xl bg-background/80 border border-border backdrop-blur-xs text-center">
                            <div className="flex items-center justify-center gap-1 text-indigo-500 mb-0.5">
                                <Clock size={15} />
                                <span className="text-xs font-bold uppercase tracking-wider">Maqsad</span>
                            </div>
                            <span className="text-base font-black text-foreground tabular-nums">
                                {Math.floor((settings.dailyStudyGoalMinutes || 240) / 60)} <span className="text-[11px] font-medium text-muted-foreground">s/kun</span>
                            </span>
                        </div>

                        <div className="p-3 rounded-2xl bg-background/80 border border-border backdrop-blur-xs text-center">
                            <div className="flex items-center justify-center gap-1 text-emerald-500 mb-0.5">
                                <Sparkles size={15} />
                                <span className="text-xs font-bold uppercase tracking-wider">AI Kredit</span>
                            </div>
                            <span className="text-base font-black text-foreground tabular-nums">
                                {(subscription?.tier === 'pro' || subscription?.tier === 'premium') ? 'Cheksiz' : `${subscription?.ai_credits || 0} ta`}
                            </span>
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
                            onUpdateSettings={updateSettings}
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
