import { Trophy, Users, MessageSquare } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../context/LanguageContext';
import { LeaderboardPage } from './LeaderboardPage';
import CommunityChat from '../components/community/CommunityChat';
import RoomList from '../components/community/RoomList';

type Tab = 'leaderboard' | 'rooms' | 'chat';

const CommunityPage: React.FC = () => {
    const { t, language } = useLanguage();
    const [searchParams, setSearchParams] = useSearchParams();
    const initialTab = (searchParams.get('tab') as Tab) || 'leaderboard';
    const [activeTab, setActiveTab] = useState<Tab>(initialTab);
    const [onlineCount, setOnlineCount] = useState(1);

    const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
        { id: 'leaderboard', label: t('community.leaderboard'), icon: <Trophy size={15} /> },
        { id: 'rooms', label: t('community.studyRooms'), icon: <Users size={15} /> },
        { id: 'chat', label: t('community.chat'), icon: <MessageSquare size={15} /> },
    ];

    const handleTabChange = (tab: Tab) => {
        setActiveTab(tab);
        setSearchParams({ tab });
    };

    // Real-time Presence via Supabase WebSockets
    useEffect(() => {
        const room = supabase.channel('online-users');
        room
            .on('presence', { event: 'sync' }, () => {
                const newState = room.presenceState();
                setOnlineCount(Math.max(1, Object.keys(newState).length));
            })
            .subscribe(async (status) => {
                if (status === 'SUBSCRIBED') {
                    const { data: { user } } = await supabase.auth.getUser();
                    if (user) await room.track({ user_id: user.id });
                }
            });

        return () => { supabase.removeChannel(room); };
    }, []);

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">{t('community.title')}</h2>
                    <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                        {language === 'ja' ? '仲間と繋がり、競い合い、共に学びましょう' : "Ulaning, bellashing va birga o'rganing"}
                    </p>
                </div>
                <div className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-xl text-[11px] font-bold flex items-center shadow-sm shrink-0">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-1.5 animate-pulse"></span>
                    {language === 'ja' ? `${onlineCount} 人オンライン` : `${onlineCount} onlayn`}
                </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 p-1 bg-muted border border-border rounded-xl w-fit">
                {TABS.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                            activeTab === tab.id
                                ? 'bg-background shadow-sm text-foreground'
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'leaderboard' && <LeaderboardPage />}
            {activeTab === 'chat' && <CommunityChat />}
            {activeTab === 'rooms' && <RoomList />}
        </div>
    );
};

export default CommunityPage;
