import React, { useEffect, useState } from 'react';
import { ArrowRight, Loader2, Plus, Video, X, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

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

const RoomList: React.FC = () => {
    const navigate = useNavigate();
    const [currentUserId, setCurrentUserId] = useState<string | null>(null);
    const [customRooms, setCustomRooms] = useState<StudyRoom[]>([]);
    const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);
    const [newRoomName, setNewRoomName] = useState('');
    const [newRoomDesc, setNewRoomDesc] = useState('');
    const [createRoomLoading, setCreateRoomLoading] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                setCurrentUserId(user.id);
            }
        };
        fetchUser();
        fetchCustomRooms();
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
 
    const handleDeleteRoom = async (id: string) => {
        const confirmDelete = window.confirm("Haqiqatan ham bu xonani o'chirmoqchimisiz?");
        if (!confirmDelete) return;
 
        const { error } = await supabase
            .from('study_rooms')
            .update({ is_active: false })
            .eq('id', id);
 
        if (error) {
            console.error('Error deleting room:', error);
            alert("Xonani o'chirishda xatolik yuz berdi");
        } else {
            fetchCustomRooms();
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Create Room Modal */}
            {showCreateRoomModal && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-md" onClick={() => setShowCreateRoomModal(false)}></div>
                    <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-2xl max-w-md w-full p-8 relative z-10 border border-gray-100 dark:border-gray-700 animate-in fade-in zoom-in duration-300">
                        <button
                            onClick={() => setShowCreateRoomModal(false)}
                            className="absolute top-6 right-6 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 transition-colors"
                        >
                            <X size={24} />
                        </button>
                        
                        <div className="mb-8">
                            <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                                <Plus size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Yangi Xona Yaratish</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">O'z o'quv xonangizni yarating va boshqalarni taklif qiling.</p>
                        </div>

                        <form onSubmit={handleCreateRoom} className="space-y-5">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Xona Nomi</label>
                                <input
                                    type="text"
                                    value={newRoomName}
                                    onChange={(e) => setNewRoomName(e.target.value)}
                                    placeholder="Masalan: IELTS Tayyorlov Guruhi"
                                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-50 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all shadow-inner"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Tavsif (ixtiyoriy)</label>
                                <textarea
                                    value={newRoomDesc}
                                    onChange={(e) => setNewRoomDesc(e.target.value)}
                                    placeholder="Xona maqsadi va qoidalari haqida..."
                                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-50 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 resize-none transition-all shadow-inner"
                                    rows={3}
                                />
                            </div>
                            <div className="flex gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowCreateRoomModal(false)}
                                    className="flex-1 px-6 py-4 rounded-2xl font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                    Bekor qilish
                                </button>
                                <button
                                    type="submit"
                                    disabled={createRoomLoading}
                                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-600/20 active:scale-95 flex items-center justify-center"
                                >
                                    {createRoomLoading ? <Loader2 className="animate-spin" size={24} /> : 'Yaratish'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Header / Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-indigo-600">
                        <Video size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">O'quv Xonalari</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Jonli muloqot va hamkorlikda o'qish xonalari</p>
                    </div>
                </div>
                <button
                    onClick={() => setShowCreateRoomModal(true)}
                    className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 px-6 py-3 rounded-2xl font-bold shadow-sm border border-gray-100 dark:border-gray-700 transition-all active:scale-95"
                >
                    <Plus size={20} /> Xona Yaratish
                </button>
            </div>

            {/* Rooms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Default Rooms */}
                {ROOMS.map(room => (
                    <div key={room.id} className="group bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                                <Video size={32} />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-3 py-1 rounded-full">Asosiy</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">{room.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-[15px] leading-relaxed mb-8 h-12 overflow-hidden">{room.desc}</p>
                        <button 
                            className="w-full bg-gray-900 dark:bg-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-white font-bold py-4 rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 group/btn" 
                            onClick={() => navigate(`/room/${room.id}`)}
                        >
                            Kirish <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                ))}

                {/* Custom Rooms */}
                {customRooms.map(room => (
                    <div key={room.id} className="group bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                                <Video size={32} />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold uppercase tracking-widest bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full">Maxsus</span>
                                {currentUserId === room.creator_id && (
                                    <button
                                        onClick={() => handleDeleteRoom(room.id)}
                                        className="p-1.5 bg-red-50 hover:bg-red-100 dark:bg-red-500/10 dark:hover:bg-red-500/20 text-red-600 dark:text-red-400 rounded-lg transition-colors"
                                        title="Xonani o'chirish"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                )}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight truncate">{room.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-[15px] leading-relaxed mb-8 h-12 overflow-hidden">{room.description}</p>
                        <button 
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 group/btn" 
                            onClick={() => navigate(`/room/${room.room_id}`)}
                        >
                            Kirish <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomList;
