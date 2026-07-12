import React from 'react';
import { Button } from '../ui/Button';
// import PasswordChangeSection from './PasswordChangeSection';
import { supabase } from '../../lib/supabase';

import { useStudyData } from '../../context/StudyPlannerContext';
import { useSubscription } from '../../hooks/useSubscription';
import { Mail, Zap, Star } from 'lucide-react';

interface AccountSectionProps {}

const AccountSection: React.FC<AccountSectionProps> = () => {
    const { user } = useStudyData();
    const { subscription } = useSubscription();

    const handleLogout = async () => {
        if (confirm('Tizimdan chiqishni xohlaysizmi?')) {
            try {
                await supabase.auth.signOut();
            } catch (e) {
                console.error("Sign out error", e);
            } finally {
                // Ensure local state is wiped even if server sign out fails
                localStorage.clear();
                window.location.href = '/';
            }
        }
    };

    return (
        <div className="bg-white dark:bg-[#1f2937] rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-100 dark:border-gray-700 font-medium text-gray-500 dark:text-gray-400 text-sm">
                HISOB SOZLAMALARI
            </div>

            <div className="p-6 space-y-6">
                {user && (
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Pochta manzili</p>
                            <p className="font-medium text-gray-900 dark:text-white">{user.email}</p>
                        </div>
                    </div>
                )}

                {subscription && (
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-gray-700 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Joriy Tarif</span>
                            {subscription.tier === 'pro' ? (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white shadow-sm">
                                    <Star size={12} className="fill-white" /> PRO TARIF
                                </span>
                            ) : (
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                                    BEPUL SINOV (TRIAL)
                                </span>
                            )}
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">AI Kreditlar</span>
                            <div className="flex items-center gap-2">
                                <Zap size={16} className={subscription.tier === 'pro' ? "text-fuchsia-500" : "text-yellow-500"} />
                                <span className="font-bold text-gray-900 dark:text-white">
                                    {subscription.tier === 'pro' ? 'Cheksiz' : `${subscription.ai_credits} ta`}
                                </span>
                            </div>
                        </div>

                        {subscription.tier !== 'pro' && (
                            <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Sinov muddati holati</span>
                                    {(() => {
                                        if (!subscription.trial_start_date) return <span className="text-sm font-medium text-gray-900 dark:text-white">Aniqlanmadi</span>;
                                        const daysPassed = (new Date().getTime() - new Date(subscription.trial_start_date).getTime()) / (1000 * 3600 * 24);
                                        const daysLeft = Math.max(0, 7 - Math.floor(daysPassed));
                                        
                                        if (daysLeft > 0) {
                                            return <span className="text-sm font-bold text-green-600 dark:text-green-400">{daysLeft} kun qoldi</span>;
                                        } else {
                                            return <span className="text-sm font-bold text-red-600 dark:text-red-400">Tugagan</span>;
                                        }
                                    })()}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <Button
                    variant="destructive"
                    onClick={handleLogout}
                    className="w-full"
                >
                    <span className="flex items-center justify-center gap-2">
                        🚪 Tizimdan Chiqish
                    </span>
                </Button>
            </div>
        </div>
    );
};

export default AccountSection;
