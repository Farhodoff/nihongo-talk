import React, { useEffect, useState } from 'react';
import { Sparkles, Bell, CheckCircle2, X } from 'lucide-react';
import { Button } from './ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import { UserNotificationItem, UserNotificationService } from '../services/UserNotificationService';
import { isUuid } from '../utils/uuid';

export const InAppNotificationModal: React.FC = () => {
    const { user } = useStudyData();
    const [unreadNotifs, setUnreadNotifs] = useState<UserNotificationItem[]>([]);
    const [currentNotifIndex, setCurrentNotifIndex] = useState(0);

    const activeNotif = unreadNotifs[currentNotifIndex];

    useEffect(() => {
        if (!user || !user.id || !isUuid(user.id)) return;

        // 1. Check and trigger welcome message for new user
        UserNotificationService.checkAndSendWelcomeMessage(user.id);

        // 2. Fetch unread notifications
        const fetchNotifs = async () => {
            const list = await UserNotificationService.getUnreadNotifications(user.id);
            setUnreadNotifs(list);
        };

        fetchNotifs();

        // 3. Listen to instant custom event in current window
        const handleCustomEvent = () => {
            fetchNotifs();
        };

        // 4. Listen to cross-tab storage changes
        const handleStorageEvent = (e: StorageEvent) => {
            if (e.key === 'study_planner_local_notifications') {
                fetchNotifs();
            }
        };

        window.addEventListener('study_planner_new_notification', handleCustomEvent);
        window.addEventListener('storage', handleStorageEvent);
        const interval = setInterval(fetchNotifs, 30000); // Check every 30 seconds (avoids aggressive polling & offline errors)

        return () => {
            window.removeEventListener('study_planner_new_notification', handleCustomEvent);
            window.removeEventListener('storage', handleStorageEvent);
            clearInterval(interval);
        };
    }, [user]);

    if (!activeNotif) return null;

    const handleDismiss = async () => {
        if (!user) return;
        await UserNotificationService.markAsRead(activeNotif.id, user.id);
        
        // Advance to next notification if available
        if (currentNotifIndex + 1 < unreadNotifs.length) {
            setCurrentNotifIndex(prev => prev + 1);
        } else {
            setUnreadNotifs([]);
            setCurrentNotifIndex(0);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative space-y-6 animate-in zoom-in-95 duration-200">
                <button
                    onClick={handleDismiss}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Icon & Title */}
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-rose-500/20 text-rose-400 rounded-2xl border border-rose-500/30">
                        {activeNotif.type === 'welcome' ? <Sparkles className="w-6 h-6 animate-pulse" /> : <Bell className="w-6 h-6 animate-bounce" />}
                    </div>
                    <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-400">
                            {activeNotif.type === 'welcome' ? 'Yangi Bildirishnoma' : activeNotif.type === 'promo' ? '🎁 Maxsus Aksiyalar' : '💬 Admin Bildirishnomasi'}
                        </span>
                        <h2 className="text-xl font-bold text-white leading-tight">
                            {activeNotif.title}
                        </h2>
                    </div>
                </div>

                {/* Message Body */}
                <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-2xl text-slate-200 text-sm leading-relaxed whitespace-pre-line font-medium max-h-60 overflow-y-auto">
                    {activeNotif.message}
                </div>

                {/* Action Button */}
                <div className="pt-2">
                    <Button
                        onClick={handleDismiss}
                        className="w-full py-4 text-sm font-bold bg-rose-600 hover:bg-rose-500 text-white rounded-2xl shadow-lg shadow-rose-600/30 transition-all flex items-center justify-center gap-2"
                    >
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Tushunarli / Rahmat 🚀</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default InAppNotificationModal;
