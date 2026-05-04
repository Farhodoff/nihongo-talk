import { Trophy, Users } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import LeaderboardWidget from '../components/community/LeaderboardWidget';
import CommunityChat from '../components/community/CommunityChat';
import RoomList from '../components/community/RoomList';

const CommunityPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'leaderboard' | 'rooms' | 'chat'>('leaderboard');
    const [onlineCount, setOnlineCount] = useState(1);

    // Real-time Presence
    useEffect(() => {
        const room = supabase.channel('online-users');
        room
            .on('presence', { event: 'sync' }, () => {
                const newState = room.presenceState();
                setOnlineCount(Object.keys(newState).length);
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
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
            <div className="mb-8 flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Hamjamiyat</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Ulaning, bellashing va birga o'rganing.</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full font-medium flex items-center shadow-sm">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    {onlineCount} Onlayn
                </div>
            </div>

            <div className="flex gap-4 mb-8 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-fit">
                <button
                    onClick={() => setActiveTab('leaderboard')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activeTab === 'leaderboard' ? 'bg-white dark:bg-gray-700 shadow text-indigo-600 dark:text-white' : 'text-gray-500'}`}
                >
                    <Trophy size={18} /> Reyting
                </button>
                <button
                    onClick={() => setActiveTab('rooms')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activeTab === 'rooms' ? 'bg-white dark:bg-gray-700 shadow text-indigo-600 dark:text-white' : 'text-gray-500'}`}
                >
                    <Users size={18} /> Xonalar
                </button>
                <button
                    onClick={() => setActiveTab('chat')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activeTab === 'chat' ? 'bg-white dark:bg-gray-700 shadow text-indigo-600 dark:text-white' : 'text-gray-500'}`}
                >
                    <Users size={18} /> Umumiy Chat
                </button>
            </div>

            {activeTab === 'leaderboard' && <LeaderboardWidget />}
            {activeTab === 'chat' && <CommunityChat />}
            {activeTab === 'rooms' && <RoomList />}
        </div>
    );
};

export default CommunityPage;
