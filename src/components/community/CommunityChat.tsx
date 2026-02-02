import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Button } from '../ui/Button';

const CommunityChat: React.FC = () => {
    const [messages, setMessages] = useState<any[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [chatError, setChatError] = useState<string | null>(null);

    // Real-time Chat
    useEffect(() => {
        fetchMessages();

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
                                alt="User Avatar"
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
    );
};

export default CommunityChat;
