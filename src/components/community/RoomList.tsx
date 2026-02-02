import React, { useEffect, useState } from 'react';
import { ArrowRight, Loader2, Plus, Video, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Button } from '../ui/Button';

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
    const [customRooms, setCustomRooms] = useState<StudyRoom[]>([]);
    const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);
    const [newRoomName, setNewRoomName] = useState('');
    const [newRoomDesc, setNewRoomDesc] = useState('');
    const [createRoomLoading, setCreateRoomLoading] = useState(false);

    useEffect(() => {
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

    return (
        <div>
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
        </div>
    );
};

export default RoomList;
