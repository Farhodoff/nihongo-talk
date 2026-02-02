import React, { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { Button } from '../ui/Button';
import Skeleton from '../ui/Skeleton';

interface CommunityUser {
    id: string;
    full_name: string;
    level: number;
    total_xp: number;
    avatar_url: string;
    isMe?: boolean;
}

const LeaderboardWidget: React.FC = () => {
    const [leaderboard, setLeaderboard] = useState<CommunityUser[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchLeaderboard();
    }, []);

    const fetchLeaderboard = async () => {
        setLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        const { data } = await supabase
            .from('profiles')
            .select('id, full_name, level, total_xp, avatar_url')
            .order('total_xp', { ascending: false })
            .limit(50);

        let users = [];
        if (data && data.length > 0) {
            users = data.map((u: any) => ({ ...u, isMe: user?.id === u.id }));
        }

        setLeaderboard(users);
        setLoading(false);
    };

    return (
        <div className="bg-white dark:bg-[#1f2937] rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden max-w-2xl">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-yellow-400 to-orange-500 text-white flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-bold flex items-center gap-2"><Trophy /> Global Reyting</h3>
                    <p className="opacity-90 text-sm">Bu haftaning eng yaxshi talabalari</p>
                </div>
                <Button variant="secondary" onClick={fetchLeaderboard} className="bg-white/20 text-white hover:bg-white/30 border-none h-8 text-xs">Yangilash</Button>
            </div>
            <div>
                {loading ? (
                    <div className="space-y-4 p-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center">
                                <Skeleton width={24} height={24} className="mr-4" />
                                <Skeleton circle width={48} height={48} className="mr-4" />
                                <div className="flex-1 space-y-2">
                                    <div className="flex justify-between">
                                        <Skeleton width="40%" height={20} />
                                        <Skeleton width="20%" height={16} />
                                    </div>
                                    <Skeleton width="100%" height={8} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    leaderboard.map((user, index) => (
                        <div
                            key={user.id}
                            className={`flex items-center p-4 border-b border-gray-50 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${user.isMe ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''}`}
                        >
                            <div className="w-8 text-center font-bold text-gray-400 text-lg mr-4">
                                {index + 1}
                            </div>
                            <img
                                src={user.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.full_name}`}
                                alt="Avatar"
                                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 mr-4 border border-gray-200"
                            />
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className={`font-bold ${user.isMe ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-900 dark:text-white'}`}>
                                        {user.full_name || 'Noma\'lum'} {user.isMe && '(Siz)'}
                                    </h4>
                                    <span className="text-sm font-medium text-gray-500">Daraja {user.level}</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                                    <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${(user.total_xp / 20000) * 100}%` }}></div>
                                </div>
                                <div className="text-xs text-gray-400 mt-1">{user.total_xp.toLocaleString()} XP</div>
                            </div>
                        </div>
                    ))
                )}
                {!loading && leaderboard.length === 0 && <div className="p-8 text-center text-gray-400">Foydalanuvchilar topilmadi. Birinchi bo'ling!</div>}
            </div>
        </div>
    );
};

export default LeaderboardWidget;
