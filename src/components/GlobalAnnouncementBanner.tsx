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
      try {
        setDismissedIds(JSON.parse(dismissedRaw));
      } catch (e) {}
    }

    UserNotificationService.getActiveBroadcastAnnouncements().then((list) => {
      setAnnouncements(list || []);
    });
  }, []);

  const handleDismiss = (id: string) => {
    const updated = [...dismissedIds, id];
    setDismissedIds(updated);
    localStorage.setItem('study_planner_dismissed_announcements', JSON.stringify(updated));
  };

  const activeAnnouncement = announcements.find((a) => !dismissedIds.includes(a.id));

  if (!activeAnnouncement) return null;

  return (
    <div className="relative z-40 bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-600 px-3 py-1.5 text-white shadow-sm duration-300 animate-in slide-in-from-top sm:px-4 sm:py-2.5">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2.5 text-xs font-bold sm:gap-4">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span className="shrink-0 rounded-lg bg-white/20 p-1">
            <Megaphone size={13} className="sm:h-3.5 sm:w-3.5" />
          </span>
          <span className="shrink-0 rounded bg-black/20 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider sm:text-[10px]">
            {activeAnnouncement.tag || "E'lon"}
          </span>
          <p className="truncate text-[11px] font-bold text-white sm:text-xs">
            <span className="mr-1 font-black text-amber-200">{activeAnnouncement.title}:</span>
            {activeAnnouncement.message}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            onClick={() => navigate('/flashcards')}
            className="hidden items-center gap-1 rounded-lg bg-white/20 px-3 py-1 text-xs font-extrabold text-white transition-all hover:bg-white/30 sm:flex"
          >
            Ko'rish <ArrowRight size={12} />
          </button>
          <button
            onClick={() => handleDismiss(activeAnnouncement.id)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-white/80 transition-all hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            title="Yopish"
            aria-label="E'lonni yopish"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
