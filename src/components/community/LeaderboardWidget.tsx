import React, { useEffect, useState } from 'react';
import { Trophy, Medal, Star, RefreshCw } from 'lucide-react';
import { supabase } from '../../lib/supabase';
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
        try {
            const { data: { user } } = await supabase.auth.getUser();
            const { data } = await supabase
                .from('profiles')
                .select('id, full_name, level, total_xp, avatar_url')
                .order('total_xp', { ascending: false })
                .limit(50);

            let dbUsers: CommunityUser[] = [];
            if (data && data.length > 0) {
                dbUsers = data.map(u => ({
                    id: u.id,
                    full_name: u.full_name || 'Talaba',
                    level: u.level || 1,
                    total_xp: u.total_xp || 0,
                    avatar_url: u.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${u.full_name || u.id}`,
                    isMe: user?.id === u.id
                }));
            }

            const defaultMembers: CommunityUser[] = [
                { id: 'comm_user_1', full_name: 'Azizbek Rahimov', level: 5, total_xp: 12450, avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Azizbek' },
                { id: 'comm_user_2', full_name: 'Shohruh Oblakulov', level: 4, total_xp: 9800, avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shohruh' },
                { id: 'comm_user_3', full_name: 'Shahina Norqulova', level: 4, total_xp: 8650, avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shahina' },
                { id: 'comm_user_4', full_name: 'Murodjon Olimjonov', level: 3, total_xp: 6400, avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Murodjon' },
                { id: 'comm_user_5', full_name: 'Dilshodbek Usmonov', level: 3, total_xp: 5200, avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dilshodbek' },
                { id: 'comm_user_6', full_name: 'Sardor Soyilov', level: 2, total_xp: 3900, avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sardor' }
            ];

            const dbUserIds = new Set(dbUsers.map(u => u.id));
            const missingDefault = defaultMembers.filter(m => !dbUserIds.has(m.id));
            const merged = [...dbUsers, ...missingDefault].sort((a, b) => b.total_xp - a.total_xp);

            setLeaderboard(merged);
        } catch (err) {
            console.error('Leaderboard error:', err);
        } finally {
            setLoading(false);
        }
    };

    const getRankIcon = (index: number) => {
        switch (index) {
            case 0: return <Trophy className="text-yellow-500" size={24} />;
            case 1: return <Medal className="text-gray-400" size={24} />;
            case 2: return <Medal className="text-amber-600" size={24} />;
            default: return <span className="text-gray-400 font-bold text-lg">{index + 1}</span>;
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-[2rem] shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700 overflow-hidden max-w-2xl w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="p-8 bg-gradient-to-br from-indigo-600 to-purple-700 text-white relative overflow-hidden">
                <div className="relative z-10 flex justify-between items-center">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <Star className="text-yellow-300 fill-yellow-300" size={20} />
                            <h3 className="text-2xl font-bold tracking-tight">Global Reyting</h3>
                        </div>
                        <p className="text-indigo-100 text-sm font-medium">Bu haftaning eng faol bilimdonlari</p>
                    </div>
                    <button 
                        onClick={fetchLeaderboard} 
                        className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-colors backdrop-blur-md border border-white/10 group"
                        disabled={loading}
                    >
                        <RefreshCw size={20} className={loading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'} />
                    </button>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
            </div>

            <div className="divide-y divide-gray-50 dark:divide-gray-700/50">
                {loading ? (
                    <div className="space-y-6 p-8">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center gap-4">
                                <Skeleton width={32} height={32} className="rounded-lg" />
                                <Skeleton circle width={56} height={56} />
                                <div className="flex-1 space-y-3">
                                    <div className="flex justify-between">
                                        <Skeleton width="50%" height={24} />
                                        <Skeleton width="20%" height={20} />
                                    </div>
                                    <Skeleton width="100%" height={8} className="rounded-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    leaderboard.map((user, index) => (
                        <div
                            key={user.id}
                            className={`group flex items-center p-5 md:p-6 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700/30 ${user.isMe ? 'bg-indigo-50/50 dark:bg-indigo-500/5 border-l-4 border-l-indigo-500' : ''}`}
                        >
                            <div className="w-12 flex justify-center items-center shrink-0">
                                {getRankIcon(index)}
                            </div>
                            
                            <div className="relative shrink-0 mx-4">
                                <img 
                                    src={user.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.full_name}`}
                                    alt="Avatar"
                                    aria-label="Avatar"
                                    className={`w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-700 object-cover border-2 shadow-sm ${index === 0 ? 'border-yellow-400' : 'border-white dark:border-gray-600'}`}
                                />
                                {index === 0 && (
                                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-white rounded-full p-1 shadow-lg">
                                        <Star size={12} fill="currentColor" />
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-1.5 gap-2">
                                    <h4 className={`font-bold truncate text-lg ${user.isMe ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-900 dark:text-white'}`}>
                                        {user.full_name || 'Talaba'} {user.isMe && <span className="text-xs font-medium px-2 py-0.5 bg-indigo-100 dark:bg-indigo-500/20 rounded-full ml-1 uppercase tracking-wider">Siz</span>}
                                    </h4>
                                    <span className="text-xs font-bold text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-lg shrink-0">Lvl {user.level}</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 overflow-hidden mb-1.5">
                                    <div 
                                        className={`h-full rounded-full transition-all duration-1000 ${index === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-indigo-500'}`}
                                        style={{ width: `${Math.min((user.total_xp / 10000) * 100, 100)}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-indigo-600/80 dark:text-indigo-400/80">{user.total_xp.toLocaleString()} XP</span>
                                    {index < 3 && <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Master</span>}
                                </div>
                            </div>
                        </div>
                    ))
                )}
                {!loading && leaderboard.length === 0 && (
                    <div className="p-16 text-center">
                        <div className="w-20 h-20 bg-gray-50 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                            <RefreshCw size={40} />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Ma'lumotlar topilmadi</h3>
                        <p className="text-gray-500 text-sm">Reytingni ko'rish uchun biroz kuting yoki yangilang.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LeaderboardWidget;
