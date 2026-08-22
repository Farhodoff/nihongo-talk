import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useStudyData } from '../context/StudyPlannerContext';
import { isAdminEmail } from '../utils/admin';

export interface UserSubscription {
    tier: 'free' | 'pro' | 'premium';
    ai_credits: number;
    last_reset_date: string;
    trial_start_date?: string;
}

export const useSubscription = () => {
    const { user } = useStudyData();
    const [subscription, setSubscription] = useState<UserSubscription | null>(null);
    // SECURITY (P0): the shared admin Gemini key is never fetched to the client
    // anymore. Kept in the return surface as always-null for existing consumers.
    const adminApiKey: string | null = null;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user || !user.id || user.id === 'undefined' || user.id === 'null') {
            setLoading(false);
            return;
        }

        const fetchSubscription = async () => {
            try {
                // Obunani o'qish
                const { data: subData, error: subError } = await supabase
                    .from('user_subscriptions')
                    .select('*')
                    .eq('id', user.id)
                    .single();

                if (!subError && subData) {
                    setSubscription({
                        tier: subData.tier,
                        ai_credits: subData.ai_credits,
                        last_reset_date: subData.last_reset_date,
                        trial_start_date: subData.trial_start_date
                    });
                }

                // SECURITY (P0): the shared Gemini key is no longer shipped to
                // clients. It must stay server-side in app_settings only.
                // Purge any copy left in this browser by older versions.
                try {
                    localStorage.removeItem('study_planner_admin_api_key');
                } catch {}
            } catch (error) {
                console.error("Subscription fetch error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSubscription();
    }, [user]);

    const decrementCredit = async () => {
        if (!user || !subscription) return;
        if (subscription.tier === 'premium') return; // Unlimited

        const newCredits = Math.max(0, subscription.ai_credits - 1);
        setSubscription(prev => prev ? { ...prev, ai_credits: newCredits } : null);

        try {
            await supabase
                .from('user_subscriptions')
                .update({ ai_credits: newCredits })
                .eq('id', user.id);
                
        } catch (error) {
            console.error("Error decrementing credit:", error);
        }
    };

    const displayEmail = user?.email || (typeof window !== 'undefined' ? localStorage.getItem('study_planner_user_email') || 'fsoyilov@gmail.com' : 'fsoyilov@gmail.com');
    const isUserAdmin = isAdminEmail(displayEmail);

    // Super Admin uchun obunani doim "premium" qilib ko'rsatish
    const effectiveSubscription: UserSubscription | null = isUserAdmin 
        ? {
            tier: 'premium' as const,
            ai_credits: 9999,
            last_reset_date: subscription?.last_reset_date || new Date().toISOString(),
            trial_start_date: subscription?.trial_start_date || new Date().toISOString()
          }
        : subscription;

    const upgradeTier = async (newTier: 'pro' | 'premium') => {
        const credits = newTier === 'premium' ? 9999 : 500;
        setSubscription(prev => ({
            tier: newTier,
            ai_credits: credits,
            last_reset_date: new Date().toISOString(),
            trial_start_date: prev?.trial_start_date || new Date().toISOString()
        }));

        if (user) {
            try {
                await supabase
                    .from('user_subscriptions')
                    .upsert({
                        id: user.id,
                        tier: newTier,
                        ai_credits: credits,
                        last_reset_date: new Date().toISOString()
                    });
            } catch (err) {
                console.warn('Subscription upsert error:', err);
            }
        }
    };

    return {
        subscription: effectiveSubscription,
        adminApiKey,
        loading,
        decrementCredit,
        upgradeTier,
        isPro: isUserAdmin || subscription?.tier === 'pro' || subscription?.tier === 'premium',
        hasCredits: isUserAdmin || (subscription?.ai_credits || 0) > 0,
        isAdmin: isUserAdmin
    };
};
