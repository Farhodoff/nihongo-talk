import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { supabase } from '../../lib/supabase';
import { useStudyData } from '../../context/StudyPlannerContext';
import { 
    Mail, User as UserIcon, Shield, KeyRound, 
    LogOut, RotateCcw, Check, Edit3, Target, Award, Crown
} from 'lucide-react';
import { toast } from '../../hooks/use-toast';
import { isAdminEmail, isSuperAdmin } from '../../utils/admin';

import { PersonalizedOnboardingModal } from '../onboarding/PersonalizedOnboardingModal';
import { LearningTrackStorage } from '../../utils/storage/LearningTrackStorage';


const AccountSection: React.FC = () => {
    const { user, settings, resetXP, getRank, primaryLanguage } = useStudyData();

    const displayEmail = user?.email || '';
    const isCurrentSuperAdmin = Boolean(displayEmail && isSuperAdmin(displayEmail));
    const isCurrentAdmin = Boolean(displayEmail && isAdminEmail(displayEmail, (user as any)?.role));

    const [isEditingName, setIsEditingName] = useState(false);
    const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
    const [fullName, setFullName] = useState<string>(
        user?.user_metadata?.full_name || localStorage.getItem('study_planner_user_name') || ''
    );
    const [targetGoal, setTargetGoal] = useState<string>(
        LearningTrackStorage.getTargetGoal(primaryLanguage)
    );
    const [isSavingName, setIsSavingName] = useState(false);

    const handleSaveName = async () => {
        setIsSavingName(true);
        try {
            localStorage.setItem('study_planner_user_name', fullName);
            LearningTrackStorage.setTargetGoal(primaryLanguage, targetGoal);
            
            if (user) {
                await supabase.auth.updateUser({
                    data: { full_name: fullName, target_goal: targetGoal }
                });
            }
            setIsEditingName(false);
            toast({ title: "✅ Profil ma'lumotlari muvaffaqiyatli saqlandi!" });
        } catch (e) {
            console.error(e);
            toast({ title: "Xatolik yuz berdi", variant: "destructive" });
        } finally {
            setIsSavingName(false);
        }
    };

    const handlePasswordReset = async () => {
        if (!user?.email) return;
        if (confirm(`${user.email} manziliga parolni tiklash havolasi yuborilsinmi?`)) {
            try {
                const { error } = await supabase.auth.resetPasswordForEmail(user.email, {
                    redirectTo: `${window.location.origin}/settings`
                });
                if (error) throw error;
                toast({ title: "📧 Parolni tiklash havolasi pochtangizga yuborildi!" });
            } catch (e: any) {
                toast({ title: e?.message || "Xatolik yuz berdi", variant: "destructive" });
            }
        }
    };

    const handleLogout = async () => {
        if (confirm('Tizimdan chiqishni tasdiqlaysizmi?')) {
            try {
                await supabase.auth.signOut();
            } catch (e) {
                console.error("Sign out error", e);
            } finally {
                localStorage.clear();
                window.location.href = '/';
            }
        }
    };

    const handleResetXP = async () => {
        if (confirm("Diqqat! XP ballaringizni va darajangizni 0 ga qaytarishni tasdiqlaysizmi?")) {
            await resetXP();
            toast({ title: "🔄 XP ballaringiz 0 ga va darajangiz 1-levelga o'zgartirildi!" });
        }
    };

    const rankTitle = getRank ? getRank(settings.level || 1) : 'Bilimdon';

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            {/* User Profile Card */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-xs">
                <div className="p-4 border-b border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <UserIcon size={16} className="text-primary" />
                        <span className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground">
                            SHAXSIY MA'LUMOTLAR
                        </span>
                    </div>
                    {!isEditingName ? (
                        <button
                            onClick={() => setIsEditingName(true)}
                            className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors px-2.5 py-1 rounded-lg hover:bg-primary/10"
                        >
                            <Edit3 size={13} />
                            Tahrirlash
                        </button>
                    ) : (
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleSaveName}
                                disabled={isSavingName}
                                className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 px-2.5 py-1 rounded-lg transition-colors"
                            >
                                <Check size={13} />
                                Saqlash
                            </button>
                            <button
                                onClick={() => setIsEditingName(false)}
                                className="text-xs text-muted-foreground hover:text-foreground px-2 py-1"
                            >
                                Bekor
                            </button>
                        </div>
                    )}
                </div>

                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name / Display Name */}
                        <div>
                            <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                                Ism / Taxallus
                            </label>
                            {isEditingName ? (
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="Ismingizni kiriting"
                                    className="w-full px-4 py-2.5 rounded-xl border border-primary/50 bg-background text-foreground font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                            ) : (
                                <div className="px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-foreground font-bold text-sm">
                                    {fullName || user?.email?.split('@')[0] || "O'quvchi"}
                                </div>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                                Elektron Pochta (Gmail)
                            </label>
                            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-foreground text-sm font-medium">
                                <Mail size={16} className="text-primary shrink-0" />
                                <span className="font-bold truncate text-foreground">{displayEmail}</span>
                                {isCurrentSuperAdmin ? (
                                    <span className="ml-auto text-[10px] font-black px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-500 border border-rose-500/30 shadow-xs flex items-center gap-1">
                                        <Crown size={12} className="text-rose-500" />
                                        SUPER ADMIN
                                    </span>
                                ) : isCurrentAdmin ? (
                                    <span className="ml-auto text-[10px] font-black px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/30 shadow-xs">
                                        🛡️ ADMIN
                                    </span>
                                ) : (
                                    <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                        Tasdiqlangan
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Target Exam / Goal */}
                        <div className="md:col-span-2">
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                    Asosiy Maqsad & Imtihon
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setIsOnboardingOpen(true)}
                                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                                >
                                    <Target size={13} />
                                    Yo'nalishni Qayta Sozlash (Onboarding)
                                </button>
                            </div>
                            {isEditingName ? (
                                <input
                                    type="text"
                                    value={targetGoal}
                                    onChange={(e) => setTargetGoal(e.target.value)}
                                    placeholder="Masalan: JLPT N2, Yapon Tili, IT & Dasturlash"
                                    className="w-full px-4 py-2.5 rounded-xl border border-primary/50 bg-background text-foreground font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                            ) : (
                                <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-foreground text-sm font-semibold">
                                    <div className="flex items-center gap-3">
                                        <Target size={16} className="text-primary shrink-0" />
                                        <span>{targetGoal}</span>
                                    </div>
                                    <button
                                        onClick={() => setIsOnboardingOpen(true)}
                                        className="text-xs text-primary font-bold hover:bg-primary/10 px-2.5 py-1 rounded-lg transition-colors"
                                    >
                                        O'zgartirish ➔
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <PersonalizedOnboardingModal
                isOpen={isOnboardingOpen}
                onClose={() => {
                    setIsOnboardingOpen(false);
                    setTargetGoal(LearningTrackStorage.getTargetGoal(primaryLanguage));
                }}
            />

            {/* Gamification Level & Rank Summary */}
            <div className="bg-gradient-to-br from-primary/5 via-card to-card rounded-2xl border border-primary/20 p-6 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                            <Award size={20} />
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-foreground">
                                Daraja {settings.level || 1} — {rankTitle}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                                Jami to'plangan XP: <strong className="text-primary">{settings.totalXp || 0} XP</strong>
                            </p>
                        </div>
                    </div>
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        🔥 {settings.currentStreak || 0} Kunlik Streak
                    </span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-muted-foreground font-semibold">
                        <span>Keyingi darajagacha progress</span>
                        <span>{((settings.totalXp || 0) % 500)} / 500 XP</span>
                    </div>
                    <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden p-0.5 border border-border">
                        <div 
                            className="h-full bg-gradient-to-r from-primary via-indigo-500 to-primary rounded-full transition-all duration-500"
                            style={{ width: `${Math.min(100, Math.max(5, (((settings.totalXp || 0) % 500) / 500) * 100))}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Security & Account Management */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-xs">
                <div className="p-4 border-b border-border flex items-center gap-2">
                    <Shield size={16} className="text-primary" />
                    <span className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground">
                        XAVFSIZLIK VA BOSHQARUV
                    </span>
                </div>

                <div className="p-6 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-muted/40 border border-border">
                        <div className="flex items-center gap-3">
                            <KeyRound size={18} className="text-muted-foreground" />
                            <div>
                                <h5 className="text-sm font-bold text-foreground">Parolni Yangilash</h5>
                                <p className="text-xs text-muted-foreground">Pochtaga xavfsiz havola yuborish orqali yangilang</p>
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handlePasswordReset}
                            className="text-xs font-semibold shrink-0"
                        >
                            Havola Yuborish
                        </Button>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                        <div className="flex items-center gap-3">
                            <RotateCcw size={18} className="text-amber-600 dark:text-amber-400" />
                            <div>
                                <h5 className="text-sm font-bold text-foreground">XP & Darajani Qayta Boshlash</h5>
                                <p className="text-xs text-muted-foreground">Barcha o'yin ballarini 0 ga qaytarish (o'quv materiallari saqlanadi)</p>
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleResetXP}
                            className="text-xs font-bold text-amber-600 dark:text-amber-400 border-amber-500/30 hover:bg-amber-500/10 shrink-0"
                        >
                            Qayta Boshlash
                        </Button>
                    </div>
                </div>

                <div className="p-4 border-t border-border bg-muted/20 flex justify-end">
                    <Button
                        variant="destructive"
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-xs font-bold px-5"
                    >
                        <LogOut size={15} />
                        Tizimdan Chiqish
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AccountSection;
