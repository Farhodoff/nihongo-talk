import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useStudyData } from '../context/StudyPlannerContext';

export interface UserSubscription {
    tier: 'free' | 'pro';
    ai_credits: number;
    last_reset_date: string;
}

export const useSubscription = () => {
    const { user } = useStudyData();
    const [subscription, setSubscription] = useState<UserSubscription | null>(null);
    const [adminApiKey, setAdminApiKey] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
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
                        last_reset_date: subData.last_reset_date
                    });
                }

                // AI kalitni o'qish (faqat auth o'tganlarga beriladi, RLS orqali)
                const { data: appSettings, error: keyError } = await supabase
                    .from('app_settings')
                    .select('gemini_api_key')
                    .eq('id', 1)
                    .single();

                if (!keyError && appSettings) {
                    setAdminApiKey(appSettings.gemini_api_key);
                }

                // AI kalitlarni va obunani localStorage ga saqlash (ai.ts tezkor o'qishi uchun)
                if (subData && appSettings) {
                    localStorage.setItem('study_planner_subscription', JSON.stringify({
                        tier: subData.tier,
                        ai_credits: subData.ai_credits,
                        adminApiKey: appSettings.gemini_api_key
                    }));
                }
            } catch (err) {
                console.error("Subscription fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchSubscription();

        // Subscription o'zgarishlarini tinglash (real-time)
        const channel = supabase
            .channel('public:user_subscriptions')
            .on('postgres_changes', { 
                event: 'UPDATE', 
                schema: 'public', 
                table: 'user_subscriptions',
                filter: `id=eq.${user.id}`
            }, (payload) => {
                setSubscription(prev => {
                    if (!prev) return prev;
                    const updated = {
                        ...prev,
                        tier: payload.new.tier,
                        ai_credits: payload.new.ai_credits,
                        last_reset_date: payload.new.last_reset_date
                    };
                    
                    // LocalStorage ni ham yangilash
                    const stored = localStorage.getItem('study_planner_subscription');
                    if (stored) {
                        const parsed = JSON.parse(stored);
                        localStorage.setItem('study_planner_subscription', JSON.stringify({
                            ...parsed,
                            ...updated
                        }));
                    }
                    
                    return updated;
                });
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [user]);

    // AI so'rovidan keyin kreditni 1 taga kamaytirish
    const decrementCredit = async () => {
        if (!user || !subscription || subscription.ai_credits <= 0) return;
        
        try {
            const newCredits = subscription.ai_credits - 1;
            
            // Mahalliy yangilash (tezlik uchun)
            setSubscription(prev => prev ? { ...prev, ai_credits: newCredits } : null);

            // Serverni yangilash
            await supabase
                .from('user_subscriptions')
                .update({ ai_credits: newCredits })
                .eq('id', user.id);
                
        } catch (error) {
            console.error("Error decrementing credit:", error);
        }
    };

    return {
        subscription,
        adminApiKey,
        loading,
        decrementCredit,
        isPro: subscription?.tier === 'pro',
        hasCredits: (subscription?.ai_credits || 0) > 0
    };
};
