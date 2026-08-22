import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { useStudyData } from '../context/StudyPlannerContext';
import { isAdminEmail } from '../utils/admin';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';
import { isAIKeyConfigured } from '../utils/ai';

export interface UserSubscription {
    tier: 'free' | 'pro' | 'premium';
    ai_credits: number;
    last_reset_date: string;
    trial_start_date?: string;
    valid_until?: string | null;
}

export const useSubscription = () => {
    const { user } = useStudyData();
    const storageKey = `study_planner_sub_${user?.id || 'guest'}`;

    // Cache-first initialization to prevent UI reload flicker
    const [subscription, setSubscription] = useState<UserSubscription | null>(() => {
        const cached = safeLocalStorage.getJSON<UserSubscription | null>(storageKey, null);
        if (cached) {
            // Check if cached subscription has expired
            if (cached.valid_until && new Date(cached.valid_until) < new Date()) {
                return { ...cached, tier: 'free' };
            }
            return cached;
        }
        return null;
    });

    const adminApiKey: string | null = null;
    const [loading, setLoading] = useState(true);

    const parseAndApplySubscription = useCallback((data: any): UserSubscription => {
        const isExpired = data.valid_until && new Date(data.valid_until) < new Date();
        const effectiveTier = isExpired ? 'free' : (data.tier || 'free');

        const sub: UserSubscription = {
            tier: effectiveTier,
            ai_credits: typeof data.ai_credits === 'number' ? data.ai_credits : 5,
            last_reset_date: data.last_reset_date || new Date().toISOString(),
            trial_start_date: data.trial_start_date || new Date().toISOString(),
            valid_until: data.valid_until || null
        };

        setSubscription(sub);
        if (user?.id) {
            safeLocalStorage.setJSON(`study_planner_sub_${user.id}`, sub);
        }
        return sub;
    }, [user?.id]);

    const fetchSubscription = useCallback(async () => {
        if (!user || !user.id || user.id === 'undefined' || user.id === 'null') {
            setLoading(false);
            return;
        }

        try {
            // 1. Fetch persistent subscription from DB
            const { data: subData, error: subError } = await supabase
                .from('user_subscriptions')
                .select('*')
                .eq('id', user.id)
                .maybeSingle();

            if (!subError && subData) {
                parseAndApplySubscription(subData);
            } else if (!subError && !subData) {
                // If user row is missing in DB, self-seed a default free record
                const defaultSub = {
                    id: user.id,
                    tier: 'free',
                    ai_credits: 5,
                    last_reset_date: new Date().toISOString(),
                    trial_start_date: new Date().toISOString()
                };
                await supabase.from('user_subscriptions').insert(defaultSub);
                parseAndApplySubscription(defaultSub);
            }

            // Cleanup any stale local admin API key
            try {
                localStorage.removeItem('study_planner_admin_api_key');
            } catch {}
        } catch (error) {
            console.warn("Subscription fetch warning:", error);
        } finally {
            setLoading(false);
        }
    }, [user, parseAndApplySubscription]);

    // Initial Fetch & Realtime Postgres Channel Subscription
    useEffect(() => {
        fetchSubscription();

        if (!user?.id || user.id === 'undefined') return;

        // Listen for live updates when an admin modifies user_subscriptions in Realtime
        const channel = supabase
            .channel(`user_sub_${user.id}`)
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: 'user_subscriptions',
                    filter: `id=eq.${user.id}`
                },
                (payload: any) => {
                    if (payload.new) {
                        parseAndApplySubscription(payload.new);
                    }
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [user?.id, fetchSubscription, parseAndApplySubscription]);

    const decrementCredit = async () => {
        if (!user || !subscription) return;
        if (subscription.tier === 'premium') return; // Unlimited for premium

        const newCredits = Math.max(0, subscription.ai_credits - 1);
        const updated = { ...subscription, ai_credits: newCredits };
        setSubscription(updated);
        safeLocalStorage.setJSON(storageKey, updated);

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

    // Super Admin is always granted full Unlimited VIP Premium access
    const effectiveSubscription: UserSubscription | null = isUserAdmin 
        ? {
            tier: 'premium' as const,
            ai_credits: 9999,
            last_reset_date: subscription?.last_reset_date || new Date().toISOString(),
            trial_start_date: subscription?.trial_start_date || new Date().toISOString(),
            valid_until: null
          }
        : subscription;

    const currentTier = isUserAdmin ? 'premium' : (subscription?.tier || 'free');
    const isPro = isUserAdmin || currentTier === 'pro' || currentTier === 'premium';
    const isPremium = isUserAdmin || currentTier === 'premium';
    const isPaid = isPro || isPremium;
    const isPaidUser = isPaid || isAIKeyConfigured();

    return {
        subscription: effectiveSubscription,
        tier: currentTier,
        adminApiKey,
        loading,
        decrementCredit,
        refreshSubscription: fetchSubscription,
        isPro,
        isPremium,
        isPaid,
        isPaidUser,
        hasCredits: isUserAdmin || (subscription?.ai_credits || 0) > 0,
        isAdmin: isUserAdmin
    };
};
