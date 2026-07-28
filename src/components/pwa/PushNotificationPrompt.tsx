import React, { useState, useEffect } from 'react';
import { Bell, X, Sparkles } from 'lucide-react';
import { PushNotificationService } from '../../services/PushNotificationService';

export const PushNotificationPrompt: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isGranted, setIsGranted] = useState(false);

    useEffect(() => {
        if (!PushNotificationService.isSupported()) return;

        const perm = PushNotificationService.getPermission();
        if (perm === 'granted') {
            setIsGranted(true);
            setIsVisible(false);
        } else if (perm === 'default') {
            const hasDismissed = localStorage.getItem('study_planner_push_prompt_dismissed');
            if (!hasDismissed) {
                setIsVisible(true);
            }
        }
    }, []);

    const handleEnablePermission = async () => {
        const perm = await PushNotificationService.requestPermission();
        if (perm === 'granted') {
            setIsGranted(true);
            setIsVisible(false);
            PushNotificationService.sendTestNotification();
        } else {
            setIsVisible(false);
        }
    };

    const handleDismiss = () => {
        localStorage.setItem('study_planner_push_prompt_dismissed', 'true');
        setIsVisible(false);
    };

    if (!isVisible || isGranted) return null;

    return (
        <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-40 animate-in slide-in-from-bottom-5 duration-300">
            <div className="bg-card border border-primary/30 p-5 rounded-3xl shadow-2xl backdrop-blur-xl flex flex-col space-y-3 relative overflow-hidden">
                <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-primary/10 text-primary rounded-2xl">
                            <Bell size={22} className="animate-bounce" />
                        </div>
                        <div>
                            <h4 className="text-sm font-extrabold text-foreground flex items-center gap-1.5">
                                Bildirishnomalarni Yoqasizmi? 🔔
                            </h4>
                            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                                Dars jadvalingiz, imtihonlar hamda kunlik zanjir (Streak) eslatmalarini qurilmangizda oling!
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleDismiss}
                        className="p-1 text-muted-foreground hover:text-foreground rounded-lg transition-colors"
                    >
                        <X size={16} />
                    </button>
                </div>

                <div className="flex items-center justify-end gap-2 pt-1">
                    <button
                        onClick={handleDismiss}
                        className="px-3.5 py-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Keyinroq
                    </button>
                    <button
                        onClick={handleEnablePermission}
                        className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5"
                    >
                        <Sparkles size={14} />
                        <span>Ruxsat Berish 🚀</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
