import React, { useState, useEffect } from 'react';
import { UserNotificationService } from '../services/UserNotificationService';
import { Megaphone, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Announcement {
    id: string;
    title: string;
    message: string;
    tag?: string;
    created_at: string;
}

export const GlobalAnnouncementBanner: React.FC = () => {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [dismissedIds, setDismissedIds] = useState<string[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const dismissedRaw = localStorage.getItem('study_planner_dismissed_announcements');
        if (dismissedRaw) {
            try { setDismissedIds(JSON.parse(dismissedRaw)); } catch (e) {}
        }

        UserNotificationService.getActiveBroadcastAnnouncements().then(list => {
            setAnnouncements(list || []);
        });
    }, []);

    const handleDismiss = (id: string) => {
        const updated = [...dismissedIds, id];
        setDismissedIds(updated);
        localStorage.setItem('study_planner_dismissed_announcements', JSON.stringify(updated));
    };

    const activeAnnouncement = announcements.find(a => !dismissedIds.includes(a.id));

    if (!activeAnnouncement) return null;

    return (
        <div className="bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-600 text-white px-4 py-2.5 shadow-md relative z-40 animate-in slide-in-from-top duration-500">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs font-bold">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="p-1 bg-white/20 rounded-lg shrink-0 animate-bounce">
                        <Megaphone size={14} />
                    </span>
                    <span className="px-2 py-0.5 bg-black/20 rounded text-[10px] uppercase font-black tracking-wider shrink-0">
                        {activeAnnouncement.tag || "E'lon"}
                    </span>
                    <p className="truncate font-extrabold text-white">
                        <span className="font-black text-amber-200 mr-1.5">{activeAnnouncement.title}:</span>
                        {activeAnnouncement.message}
                    </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                    <button
                        onClick={() => navigate('/decks')}
                        className="hidden sm:flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-white font-extrabold transition-all"
                    >
                        Ko'rish <ArrowRight size={12} />
                    </button>
                    <button
                        onClick={() => handleDismiss(activeAnnouncement.id)}
                        className="p-1 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
                        title="Yopish"
                    >
                        <X size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};
