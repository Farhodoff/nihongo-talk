import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '../../lib/supabase';
import { Send, Loader2, ChevronDown, Smile, MoreHorizontal } from 'lucide-react';
import { format, isToday, isYesterday } from 'date-fns';

const CommunityChat: React.FC = () => {
    const [messages, setMessages] = useState<any[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [chatError, setChatError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSending, setIsSending] = useState(false);
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [typingUsers, setTypingUsers] = useState<string[]>([]);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const typingTimeoutRef = useRef<any>(null);

    useEffect(() => {
        const setupChat = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setCurrentUser(user);
            await fetchMessages();
            setIsLoading(false);

            // Subscribe to typing indicators via broadcast
            const typingChannel = supabase.channel('typing-indicator')
                .on('broadcast', { event: 'typing' }, ({ payload }) => {
                    if (payload.user_id !== user?.id) {
                        setTypingUsers(prev => {
                            if (payload.isTyping) {
                                return prev.includes(payload.full_name) ? prev : [...prev, payload.full_name];
                            } else {
                                return prev.filter(name => name !== payload.full_name);
                            }
                        });
                    }
                })
                .subscribe();

            const chatChannel = supabase.channel('global-chat')
                .on(
                    'postgres_changes',
                    { event: 'INSERT', schema: 'public', table: 'messages' },
                    async (payload) => {
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

            return () => {
                supabase.removeChannel(chatChannel);
                supabase.removeChannel(typingChannel);
            };
        };

        setupChat();
    }, []);

    const fetchMessages = async () => {
        const { data, error } = await supabase
            .from('messages')
            .select('*, profiles(full_name, avatar_url)')
            .order('created_at', { ascending: false })
            .limit(100);

        if (error) {
            setChatError("Chat xizmati vaqtincha mavjud emas.");
        } else {
            setMessages(data || []);
        }
    };

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        setShowScrollButton(target.scrollTop < -200);
    };

    const scrollToBottom = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = 0;
        }
    };

    const handleTyping = () => {
        if (!currentUser) return;

        supabase.channel('typing-indicator').send({
            type: 'broadcast',
            event: 'typing',
            payload: { 
                user_id: currentUser.id, 
                full_name: currentUser.user_metadata?.full_name || 'Talaba',
                isTyping: true 
            }
        });

        if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

        typingTimeoutRef.current = setTimeout(() => {
            supabase.channel('typing-indicator').send({
                type: 'broadcast',
                event: 'typing',
                payload: { isTyping: false }
            });
        }, 2000);
    };

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim() || isSending) return;

        setIsSending(true);
        const { error } = await supabase
            .from('messages')
            .insert({ user_id: currentUser?.id, content: newMessage.trim() });

        if (!error) {
            setNewMessage('');
            scrollToBottom();
        }
        setIsSending(false);
    };

    const formatMessageDate = (date: string) => {
        const d = new Date(date);
        if (isToday(d)) return 'Bugun';
        if (isYesterday(d)) return 'Kecha';
        return format(d, 'd-MMMM');
    };

    const renderMessages = () => {
        const groups: any[] = [];
        const reversedMessages = [...messages].reverse();

        reversedMessages.forEach((msg, i) => {
            const msgDate = formatMessageDate(msg.created_at);
            const prevMsg = i > 0 ? reversedMessages[i - 1] : null;
            const isNewDay = !prevMsg || formatMessageDate(prevMsg.created_at) !== msgDate;
            const isSameUser = prevMsg && prevMsg.user_id === msg.user_id && !isNewDay;

            if (isNewDay) {
                groups.push({ type: 'date', content: msgDate });
            }

            groups.push({
                type: 'message',
                ...msg,
                isSameUser,
                isOwn: msg.user_id === currentUser?.id
            });
        });

        return groups.reverse().map((item, index) => {
            if (item.type === 'date') {
                return (
                    <div key={`date-${index}`} className="flex justify-center my-6">
                        <span className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">
                            {item.content}
                        </span>
                    </div>
                );
            }

            return (
                <div 
                    key={item.id} 
                    className={`flex gap-3 ${item.isOwn ? 'flex-row-reverse' : 'flex-row'} ${item.isSameUser ? 'mt-1' : 'mt-4'}`}
                >
                    {!item.isOwn && (
                        <div className="w-9 flex-shrink-0">
                            {!item.isSameUser && (
                                <img
                                    src={item.profiles?.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${item.profiles?.full_name || 'User'}`}
                                    className="w-9 h-9 rounded-full bg-gray-200 object-cover border-2 border-white dark:border-gray-800 shadow-sm"
                                    alt=""
                                />
                            )}
                        </div>
                    )}
                    
                    <div className={`max-w-[75%] flex flex-col ${item.isOwn ? 'items-end' : 'items-start'}`}>
                        {!item.isOwn && !item.isSameUser && (
                            <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 mb-1 ml-1">
                                {item.profiles?.full_name || 'Foydalanuvchi'}
                            </span>
                        )}
                        
                        <div className="group relative flex items-center gap-2">
                            {item.isOwn && (
                                <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-gray-400 hover:text-gray-600">
                                    <MoreHorizontal size={14} />
                                </button>
                            )}
                            
                            <div className={`
                                px-4 py-2.5 shadow-sm text-sm transition-all
                                ${item.isOwn 
                                    ? 'bg-indigo-600 text-white rounded-2xl rounded-tr-none' 
                                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-2xl rounded-tl-none'}
                                ${item.isSameUser ? (item.isOwn ? 'rounded-tr-2xl' : 'rounded-tl-2xl') : ''}
                            `}>
                                {item.content}
                            </div>

                            {!item.isOwn && (
                                <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-gray-400 hover:text-gray-600">
                                    <Smile size={14} />
                                </button>
                            )}
                        </div>
                        
                        {!item.isSameUser && (
                            <span className="text-[10px] text-gray-400 mt-1 px-1">
                                {new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        )}
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="bg-[#f9fafb] dark:bg-[#0f172a] rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden max-w-2xl h-[700px] flex flex-col mx-auto relative group">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 z-10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                            <Send size={20} className="rotate-[-10deg]" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white">Umumiy Chat</h3>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-[11px] text-gray-500 font-medium">Faol Hamjamiyat</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 bg-gray-200 dark:bg-gray-700 overflow-hidden shadow-sm">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Messages Area */}
            <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto px-6 py-4 flex flex-col-reverse custom-scrollbar relative"
            >
                {/* Typing Indicator Overlay */}
                {typingUsers.length > 0 && (
                    <div className="absolute bottom-2 left-6 z-10 animate-in fade-in slide-in-from-bottom-2">
                        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 flex items-center gap-2 shadow-sm">
                            <div className="flex gap-1">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"></span>
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                            </div>
                            <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400">
                                {typingUsers.length === 1 ? `${typingUsers[0]} yozmoqda...` : `${typingUsers.length} kishi yozmoqda...`}
                            </span>
                        </div>
                    </div>
                )}

                {isLoading ? (
                    <div className="h-full flex flex-col items-center justify-center space-y-3">
                        <div className="relative">
                            <div className="w-12 h-12 border-4 border-indigo-100 dark:border-indigo-900/30 rounded-full"></div>
                            <div className="w-12 h-12 border-4 border-t-indigo-600 rounded-full animate-spin absolute top-0 left-0"></div>
                        </div>
                        <p className="text-sm font-medium text-gray-500">Xabarlar kelmoqda...</p>
                    </div>
                ) : chatError ? (
                    <div className="text-center p-8 bg-red-50 dark:bg-red-900/10 rounded-3xl m-4 border border-red-100 dark:border-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium">
                        {chatError}
                    </div>
                ) : (
                    <>
                        {renderMessages()}
                    </>
                )}
            </div>

            {/* Jump to Bottom Button */}
            {showScrollButton && (
                <button 
                    onClick={scrollToBottom}
                    className="absolute bottom-24 right-6 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 p-2.5 rounded-full shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-110 transition-all z-20 animate-in fade-in zoom-in"
                >
                    <ChevronDown size={20} />
                </button>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
                <form onSubmit={handleSendMessage} className="relative flex items-end gap-2">
                    <div className="flex-1 relative">
                        <textarea
                            value={newMessage}
                            onChange={(e) => {
                                setNewMessage(e.target.value);
                                handleTyping();
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSendMessage(e);
                                }
                            }}
                            placeholder="Hamjamiyatga nimadir deng..."
                            disabled={isSending || !!chatError}
                            className="w-full pl-5 pr-12 py-3.5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all disabled:opacity-50 resize-none max-h-32 min-h-[52px] text-sm"
                            rows={1}
                        />
                        <button 
                            type="button"
                            className="absolute right-3 bottom-3 text-gray-400 hover:text-indigo-500 transition-colors"
                        >
                            <Smile size={22} />
                        </button>
                    </div>
                    <button 
                        type="submit" 
                        disabled={!newMessage.trim() || isSending || !!chatError}
                        className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white p-3.5 rounded-2xl transition-all shadow-lg shadow-indigo-600/20 active:scale-95 flex items-center justify-center min-w-[52px] h-[52px]"
                    >
                        {isSending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send size={20} />}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CommunityChat;
