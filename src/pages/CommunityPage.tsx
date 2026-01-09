import { ArrowRight, Loader2, Plus, Trophy, Users, Video, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { supabase } from '../lib/supabase';

interface CommunityUser {
    id: string;
    full_name: string;
    level: number;
    total_xp: number;
    avatar_url: string;
    isMe?: boolean;
}

interface StudyRoom {
    id: string;
    room_id: string;
    name: string;
    description: string;
    creator_id: string;
    is_active: boolean;
    created_at: string;
}

const ROOMS = [
    { id: 'library', name: 'Jimjit Kutubxona 📚', desc: 'Qat\'iy sukunat, chuqur diqqat.' },
    { id: 'lofi', name: 'Lofi Zali 🎧', desc: 'Tinch ohanglar va o\'qish muhiti.' },
    { id: 'group-a', name: 'Guruhli O\'qish A 🗣', desc: 'Muhokama qilish mumkin.' },
];

const CommunityPage: React.FC = () => {
    // const { settings } = useStudyData();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'leaderboard' | 'rooms' | 'chat'>('leaderboard');
    const [leaderboard, setLeaderboard] = useState<CommunityUser[]>([]);
    const [loading, setLoading] = useState(false);

    // Chat & Presence State
    const [onlineCount, setOnlineCount] = useState(1);
    const [messages, setMessages] = useState<any[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [chatError, setChatError] = useState<string | null>(null);

    // Custom Rooms State
    const [customRooms, setCustomRooms] = useState<StudyRoom[]>([]);
    const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);
    const [newRoomName, setNewRoomName] = useState('');
    const [newRoomDesc, setNewRoomDesc] = useState('');
    const [createRoomLoading, setCreateRoomLoading] = useState(false);

    useEffect(() => {
        if (activeTab === 'leaderboard') fetchLeaderboard();
        if (activeTab === 'chat') fetchMessages();
        if (activeTab === 'rooms') fetchCustomRooms();
    }, [activeTab]);

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

    // Real-time Chat
    useEffect(() => {
        const chatChannel = supabase.channel('global-chat')
            .on(
                'postgres_changes',
                { event: 'INSERT', schema: 'public', table: 'messages' },
                async (payload) => {
                    // Fetch profile for the new message
                    const { data: profile } = await supabase
                        .from('profiles')
                        .select('full_name, avatar_url')
                        .eq('id', payload.new.user_id)
                        .single();

                    const newMsg = {
                        ...payload.new,
                        profiles: profile
                    };
                    setMessages(prev => [newMsg, ...prev]);
                }
            )
            .subscribe();

        return () => { supabase.removeChannel(chatChannel); };
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

        // Dummy Data for Motivation
        if (users.length < 3) {
            const dummyUsers = [
                { id: 'd1', full_name: 'Alex Johnson', level: 42, total_xp: 45000, avatar_url: '', isMe: false },
                { id: 'd2', full_name: 'Sarah Kim', level: 38, total_xp: 38500, avatar_url: '', isMe: false },
                { id: 'd3', full_name: 'Mike Chen', level: 35, total_xp: 32000, avatar_url: '', isMe: false }
            ];

            // Filter out existing real users from dummy slots if any collision (unlikely)
            // But main goal is to fill top spots.
            // If real user has low XP, they should be below dummy users? 
            // The user wants "Top 3 ko'rsatib turing". If I just add them, they will be top.

            const combined = [...users, ...dummyUsers];
            // Sort again
            combined.sort((a, b) => b.total_xp - a.total_xp);
            users = combined.slice(0, 50);
        }

        setLeaderboard(users);
        setLoading(false);
    };

    const fetchMessages = async () => {
        const { data, error } = await supabase
            .from('messages')
            .select('*, profiles(full_name, avatar_url)')
            .order('created_at', { ascending: false })
            .limit(50);

        if (error) {
            console.error(error);
            setChatError("Chat hozircha ishlamayapti (Jadval yaratilmagan bo'lishi mumkin).");
        } else {
            setMessages(data || []);
            setChatError(null);
        }
    };

    const fetchCustomRooms = async () => {
        const { data, error } = await supabase
            .from('study_rooms')
            .select('*')
            .eq('is_active', true)
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching custom rooms:', error);
        } else {
            setCustomRooms(data || []);
        }
    };

    const handleCreateRoom = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newRoomName.trim()) return;

        setCreateRoomLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            alert('Xona yaratish uchun tizimga kiring');
            setCreateRoomLoading(false);
            return;
        }

        // Generate unique room ID
        const roomId = `custom_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        const { error } = await supabase
            .from('study_rooms')
            .insert({
                room_id: roomId,
                name: newRoomName,
                description: newRoomDesc || 'Maxsus o\'quv xonasi',
                creator_id: user.id
            });

        if (error) {
            console.error('Error creating room:', error);
            alert('Xona yaratishda xatolik yuz berdi');
        } else {
            setNewRoomName('');
            setNewRoomDesc('');
            setShowCreateRoomModal(false);
            fetchCustomRooms();
        }
        setCreateRoomLoading(false);
    };

    // Real-time subscription for custom rooms
    useEffect(() => {
        const roomsChannel = supabase.channel('custom-rooms')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'study_rooms' },
                () => {
                    fetchCustomRooms();
                }
            )
            .subscribe();

        return () => { supabase.removeChannel(roomsChannel); };
    }, []);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { error } = await supabase
            .from('messages')
            .insert({ user_id: user.id, content: newMessage });

        if (error) {
            alert("Xabar yuborishda xatolik");
        } else {
            setNewMessage('');
        }
    };

    return (
        <div>
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

            {activeTab === 'leaderboard' && (
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
                            <div className="p-8 text-center text-gray-500 flex justify-center"><Loader2 className="animate-spin" /></div>
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
            )}

            {activeTab === 'chat' && (
                <div className="bg-white dark:bg-[#1f2937] rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden max-w-2xl h-[600px] flex flex-col">
                    <div className="p-4 border-b border-gray-100 dark:border-gray-700 bg-indigo-50 dark:bg-indigo-900/20">
                        <h3 className="font-bold text-indigo-700 dark:text-indigo-300">Umumiy Chat</h3>
                        <p className="text-xs text-indigo-500 dark:text-indigo-400">Hurmat saqlang va faol bo'ling.</p>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col-reverse">
                        {chatError ? (
                            <div className="text-center text-red-500 bg-red-50 p-4 rounded-xl">{chatError}</div>
                        ) : messages.length === 0 ? (
                            <div className="text-center text-gray-400 py-10">Hali xabarlar yo'q. Birinchi bo'lib yozing!</div>
                        ) : (
                            messages.map(msg => (
                                <div key={msg.id} className="flex gap-3">
                                    <img
                                        src={msg.profiles?.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${msg.profiles?.full_name || 'User'}`}
                                        className="w-8 h-8 rounded-full bg-gray-200"
                                    />
                                    <div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-sm font-bold text-gray-900 dark:text-white">{msg.profiles?.full_name || 'Foydalanuvchi'}</span>
                                            <span className="text-xs text-gray-500">{new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg rounded-tl-none mt-1 inline-block">
                                            {msg.content}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100 dark:border-gray-700 flex gap-2">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Xabar yozing..."
                            className="flex-1 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <Button type="submit" disabled={!!chatError}>Yuborish</Button>
                    </form>
                </div>
            )}

            {activeTab === 'rooms' && (
                <>
                    {/* Create Room Modal */}
                    {showCreateRoomModal && (
                        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in">
                                <button
                                    onClick={() => setShowCreateRoomModal(false)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                                >
                                    <X size={24} />
                                </button>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Yangi Xona Yaratish</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">O'z o'quv xonangizni yarating va do'stlaringizni taklif qiling.</p>

                                <form onSubmit={handleCreateRoom} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Xona Nomi *</label>
                                        <input
                                            type="text"
                                            value={newRoomName}
                                            onChange={(e) => setNewRoomName(e.target.value)}
                                            placeholder="Masalan: Matematika Guruhi"
                                            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tavsif (ixtiyoriy)</label>
                                        <textarea
                                            value={newRoomDesc}
                                            onChange={(e) => setNewRoomDesc(e.target.value)}
                                            placeholder="Xona haqida qisqacha ma'lumot..."
                                            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                                            rows={3}
                                        />
                                    </div>
                                    <div className="flex gap-3 pt-2">
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            onClick={() => setShowCreateRoomModal(false)}
                                            className="flex-1"
                                        >
                                            Bekor qilish
                                        </Button>
                                        <Button
                                            type="submit"
                                            disabled={createRoomLoading}
                                            className="flex-1"
                                        >
                                            {createRoomLoading ? <Loader2 className="animate-spin" size={18} /> : 'Yaratish'}
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Create Room Button */}
                    <div className="mb-6">
                        <Button
                            onClick={() => setShowCreateRoomModal(true)}
                            className="flex items-center gap-2"
                        >
                            <Plus size={20} /> Yangi Xona Yaratish
                        </Button>
                    </div>

                    {/* Rooms Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Default Rooms */}
                        {ROOMS.map(room => (
                            <div key={room.id} className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        <Video size={24} />
                                    </div>
                                    <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">Asosiy</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{room.name}</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{room.desc}</p>
                                <Button className="w-full" onClick={() => navigate(`/room/${room.id}`)}>
                                    Xonaga Kirish <ArrowRight size={18} className="ml-2" />
                                </Button>
                            </div>
                        ))}

                        {/* Custom Rooms */}
                        {customRooms.map(room => (
                            <div key={room.id} className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                        <Video size={24} />
                                    </div>
                                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">Maxsus</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{room.name}</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{room.description}</p>
                                <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => navigate(`/room/${room.room_id}`)}>
                                    Xonaga Kirish <ArrowRight size={18} className="ml-2" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default CommunityPage;
