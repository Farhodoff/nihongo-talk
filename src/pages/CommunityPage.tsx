import { Trophy, Users, MessageSquare } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { LeaderboardPage } from './LeaderboardPage';
import CommunityChat from '../components/community/CommunityChat';
import RoomList from '../components/community/RoomList';

const CommunityPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialTab = (searchParams.get('tab') as 'leaderboard' | 'rooms' | 'chat') || 'leaderboard';
    const [activeTab, setActiveTab] = useState<'leaderboard' | 'rooms' | 'chat'>(initialTab);
    const [onlineCount, setOnlineCount] = useState(1);

    // Sync tab to search params
    const handleTabChange = (tab: 'leaderboard' | 'rooms' | 'chat') => {
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
        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">Hamjamiyat & Jamoa</h2>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">Ulaning, bellashing va birga o'rganing.</p>
                </div>
                <div className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-4 py-2 rounded-2xl text-xs font-extrabold flex items-center shadow-sm self-start sm:self-auto">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                    {onlineCount} Real-vaqtda Onlayn
                </div>
            </div>

            <div className="flex gap-2 p-1.5 bg-muted border border-border rounded-2xl w-fit text-xs font-bold">
                <button
                    onClick={() => handleTabChange('leaderboard')}
                    className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${activeTab === 'leaderboard' ? 'bg-background shadow-md text-amber-500 font-black' : 'text-muted-foreground hover:text-foreground'}`}
                >
                    <Trophy size={16} /> 🏆 Reyting & Leaderboard
                </button>
                <button
                    onClick={() => handleTabChange('rooms')}
                    className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${activeTab === 'rooms' ? 'bg-background shadow-md text-indigo-600 dark:text-indigo-400 font-black' : 'text-muted-foreground hover:text-foreground'}`}
                >
                    <Users size={16} /> 🎧 O'quv Xonalari
                </button>
                <button
                    onClick={() => handleTabChange('chat')}
                    className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${activeTab === 'chat' ? 'bg-background shadow-md text-purple-600 dark:text-purple-400 font-black' : 'text-muted-foreground hover:text-foreground'}`}
                >
                    <MessageSquare size={16} /> 💬 Umumiy Chat
                </button>
            </div>

            {activeTab === 'leaderboard' && <LeaderboardPage />}
            {activeTab === 'chat' && <CommunityChat />}
            {activeTab === 'rooms' && <RoomList />}
        </div>
    );
};

export default CommunityPage;
