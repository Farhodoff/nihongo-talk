import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '../../lib/supabase';
import { Send, Loader2, ChevronDown, Smile, MoreHorizontal, Clock } from 'lucide-react';
import { format, isToday, isYesterday } from 'date-fns';
import { User } from '@supabase/supabase-js';
import { useLanguage } from '../../context/LanguageContext';

interface ChatMessage {
    id: string;
    content: string;
    created_at: string;
    user_id: string;
    profiles?: {
        full_name: string | null;
        avatar_url: string | null;
    } | null;
}

const CHAT_CACHE_KEY = 'nihon_talk_chat_messages_cache';

const CommunityChat: React.FC = () => {
    const { language } = useLanguage();
    const [messages, setMessages] = useState<ChatMessage[]>(() => {
        try {
            const saved = localStorage.getItem(CHAT_CACHE_KEY);
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });
    const [newMessage, setNewMessage] = useState('');
    const [chatError, setChatError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(() => {
        try {
            const saved = localStorage.getItem(CHAT_CACHE_KEY);
            return !(saved && JSON.parse(saved).length > 0);
        } catch {
            return true;
        }
    });
    const [isSending, setIsSending] = useState(false);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [typingUsers, setTypingUsers] = useState<string[]>([]);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const typingChannelRef = useRef<any>(null);

    const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
        messagesEndRef.current?.scrollIntoView({ behavior });
    };

    useEffect(() => {
        if (!isLoading && messages.length > 0) {
            scrollToBottom('auto');
        }
    }, [isLoading]);

    useEffect(() => {
        // Only scroll if user is already near bottom or it's their own message
        const lastMessage = messages[messages.length - 1];
        if (lastMessage?.user_id === currentUser?.id) {
            scrollToBottom('smooth');
        }
    }, [messages.length, currentUser?.id]);

    useEffect(() => {
        let chatChannel: any = null;
        let typingChannel: any = null;

        const setupChat = async () => {
            try {
                const { data } = await supabase.auth.getSession();
                if (data?.session?.user) {
                    setCurrentUser(data.session.user);
                } else {
                    const { data: userData } = await supabase.auth.getUser();
                    if (userData?.user) setCurrentUser(userData.user);
                }
            } catch (e) {
                // ignore
            }

            await fetchMessages();
            setIsLoading(false);

            // Subscribe to typing indicators via broadcast
            typingChannel = supabase.channel('typing-indicator')
                .on('broadcast', { event: 'typing' }, ({ payload }) => {
                    if (payload.user_id !== currentUser?.id) {
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

            typingChannelRef.current = typingChannel;

            chatChannel = supabase.channel('global-chat')
                .on(
                    'postgres_changes',
                    { event: 'INSERT', schema: 'public', table: 'messages' },
                    async (payload) => {
                        const { data: profile } = await supabase
                            .from('profiles')
                            .select('full_name, avatar_url')
                            .eq('id', payload.new.user_id)
                            .single();

                        const newMsg: ChatMessage = {
                            id: payload.new.id,
                            content: payload.new.content,
                            created_at: payload.new.created_at,
                            user_id: payload.new.user_id,
                            profiles: profile
                        };
                        setMessages(prev => [...prev, newMsg]);
                    }
                )
                .subscribe();
        };

        setupChat();

        return () => {
            if (chatChannel) supabase.removeChannel(chatChannel);
            if (typingChannel) supabase.removeChannel(typingChannel);
            typingChannelRef.current = null;
        };
    }, []);

    const fetchMessages = async () => {
        const { data, error } = await supabase
            .from('messages')
            .select(`
                id,
                content,
                created_at,
                user_id,
                profiles:user_id (
                    full_name,
                    avatar_url
                )
            `)
            .order('created_at', { ascending: true })
            .limit(100);

        if (error) {
            console.error("Fetch error:", error);
            setChatError("Chat xizmati vaqtincha mavjud emas.");
        } else {
            interface DBMessage {
                id: string;
                content: string;
                created_at: string;
                user_id: string;
                profiles: {
                    full_name: string | null;
                    avatar_url: string | null;
                } | {
                    full_name: string | null;
                    avatar_url: string | null;
                }[] | null;
            }

            const mapped: ChatMessage[] = (data as unknown as DBMessage[] || []).map((msg) => ({
                id: msg.id,
                content: msg.content,
                created_at: msg.created_at,
                user_id: msg.user_id,
                profiles: Array.isArray(msg.profiles) 
                    ? msg.profiles[0] 
                    : msg.profiles || null
            }));
            setMessages(mapped);
            try {
                localStorage.setItem(CHAT_CACHE_KEY, JSON.stringify(mapped));
            } catch (e) {
                // ignore
            }
        }
    };

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        const isNearBottom = target.scrollHeight - target.scrollTop - target.clientHeight < 100;
        setShowScrollButton(!isNearBottom);
    };

    const handleJumpToBottom = () => {
        scrollToBottom('smooth');
    };

    const handleTyping = () => {
        if (!currentUser || !typingChannelRef.current) return;

        try {
            typingChannelRef.current.send({
                type: 'broadcast',
                event: 'typing',
                payload: { 
                    user_id: currentUser.id, 
                    full_name: currentUser.user_metadata?.full_name || 'Talaba',
                    isTyping: true 
                }
            });
        } catch (e) {
            // Ignore channel send errors
        }

        if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

        typingTimeoutRef.current = setTimeout(() => {
            try {
                typingChannelRef.current?.send({
                    type: 'broadcast',
                    event: 'typing',
                    payload: { isTyping: false }
                });
            } catch (e) {
                // Ignore channel send errors
            }
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
            // Scroll will be handled by useEffect on messages update
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
        type GroupItem = 
            | { type: 'date'; content: string }
            | (ChatMessage & { type: 'message'; isSameUser: boolean; isOwn: boolean });

        const groups: GroupItem[] = [];

        messages.forEach((msg, i) => {
            const msgDate = formatMessageDate(msg.created_at);
            const prevMsg = i > 0 ? messages[i - 1] : null;
            const isNewDay = !prevMsg || formatMessageDate(prevMsg.created_at) !== msgDate;
            const isSameUser = !!(prevMsg && prevMsg.user_id === msg.user_id && !isNewDay);

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

        return groups.map((item, index) => {
            if (item.type === 'date') {
                return (
                    <div key={`date-${index}`} className="flex justify-center my-8">
                        <span className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-1.5 rounded-full border border-gray-100 dark:border-gray-700 shadow-sm">
                            {item.content}
                        </span>
                    </div>
                );
            }

            return (
                <div 
                    key={item.id} 
                    className={`flex gap-3 ${item.isOwn ? 'flex-row-reverse' : 'flex-row'} ${item.isSameUser ? 'mt-1' : 'mt-6'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                >
                    {!item.isOwn && (
                        <div className="w-10 flex-shrink-0">
                            {!item.isSameUser && (
                                <img
                                    src={item.profiles?.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${item.profiles?.full_name || 'User'}`}
                                    className="w-10 h-10 rounded-2xl bg-gray-100 object-cover border-2 border-white dark:border-gray-800 shadow-md transform hover:scale-110 transition-transform cursor-pointer"
                                    alt="Avatar" aria-label="Foydalanuvchi avatari"
                                />
                            )}
                        </div>
                    )}
                    
                    <div className={`max-w-[80%] flex flex-col ${item.isOwn ? 'items-end' : 'items-start'}`}>
                        {!item.isOwn && !item.isSameUser && (
                            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1.5 ml-1">
                                {item.profiles?.full_name || 'Foydalanuvchi'}
                            </span>
                        )}
                        
                        <div className="group relative flex items-center gap-2">
                            {item.isOwn && (
                                <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                                    <MoreHorizontal size={14} />
                                </button>
                            )}
                            
                            <div className={`
                                px-5 py-3 shadow-sm text-[15px] leading-relaxed transition-all
                                ${item.isOwn 
                                    ? 'bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-[1.25rem] rounded-tr-none shadow-indigo-200 dark:shadow-none' 
                                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-[1.25rem] rounded-tl-none'}
                                ${item.isSameUser ? (item.isOwn ? 'rounded-tr-[1.25rem]' : 'rounded-tl-[1.25rem]') : ''}
                                hover:shadow-md
                            `}>
                                {item.content}
                            </div>

                            {!item.isOwn && (
                                <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-gray-400 hover:text-indigo-500">
                                    <Smile size={16} />
                                </button>
                            )}
                        </div>
                        
                        {!item.isSameUser && (
                            <span className="text-[10px] font-medium text-gray-400 mt-1.5 px-2 flex items-center gap-1">
                                <Clock size={10} />
                                {new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        )}
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="bg-[#f8fafc] dark:bg-[#0f172a] rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden max-w-2xl h-[750px] flex flex-col mx-auto relative group">
            {/* Header */}
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl z-20">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-500/20 rotate-3">
                            <Send size={24} className="-rotate-12" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                                {language === 'ja' ? 'みんなの チャット' : (language === 'en' ? 'Community Chat' : 'Umumiy Chat')}
                            </h3>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    <span className="text-xs text-green-600 dark:text-green-400 font-bold uppercase tracking-wider">
                                        {language === 'ja' ? 'オンライン' : 'Online'}
                                    </span>
                                </div>
                                <span className="w-1 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
                                <span className="text-xs text-gray-500 font-medium">
                                    {language === 'ja' ? 'アクティブな なかまたち' : 'Faol Hamjamiyat'}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex -space-x-3 hover:-space-x-1 transition-all duration-300">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-2xl border-4 border-white dark:border-gray-900 bg-gray-200 dark:bg-gray-700 overflow-hidden shadow-sm transition-transform hover:z-10 hover:scale-110">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`} alt="Avatar" aria-label="Foydalanuvchi avatari" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Messages Area with subtle background */}
            <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto px-6 py-4 flex flex-col custom-scrollbar relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px]"
            >
                {isLoading ? (
                    <div className="h-full flex flex-col items-center justify-center space-y-4">
                        <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-3xl shadow-xl flex items-center justify-center">
                            <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
                        </div>
                        <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest animate-pulse">Xabarlar kelmoqda</p>
                    </div>
                ) : chatError ? (
                    <div className="text-center p-8 bg-red-50 dark:bg-red-900/10 rounded-[2rem] m-6 border border-red-100 dark:border-red-900/20 text-red-600 dark:text-red-400">
                        <h4 className="font-bold mb-1">Xatolik yuz berdi</h4>
                        <p className="text-sm opacity-80">{chatError}</p>
                    </div>
                ) : (
                    <div className="space-y-1">
                        {renderMessages()}
                        <div ref={messagesEndRef} />
                    </div>
                )}

                {/* Typing Indicator Overlay */}
                {typingUsers.length > 0 && (
                    <div className="sticky bottom-0 left-0 z-20 animate-in fade-in slide-in-from-bottom-4 duration-500 mb-2">
                        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-gray-100 dark:border-gray-700 inline-flex items-center gap-3 shadow-lg shadow-black/5">
                            <div className="flex gap-1.5">
                                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-duration:0.8s]"></span>
                                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.2s]"></span>
                                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.4s]"></span>
                            </div>
                            <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                                {typingUsers.length === 1 ? `${typingUsers[0]} yozmoqda...` : `${typingUsers.length} kishi yozmoqda...`}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Jump to Bottom Button */}
            {showScrollButton && (
                <button 
                    onClick={handleJumpToBottom}
                    className="absolute bottom-32 right-8 bg-indigo-600 text-white p-3 rounded-2xl shadow-2xl shadow-indigo-600/30 hover:scale-110 active:scale-95 transition-all z-30 animate-in fade-in zoom-in"
                >
                    <ChevronDown size={24} />
                </button>
            )}

            {/* Input Area */}
            <div className="p-6 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
                <form onSubmit={handleSendMessage} className="relative flex items-end gap-3">
                    <div className="flex-1 relative group">
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
                            placeholder={language === 'ja' ? 'メッセージを にゅうりょく...' : (language === 'en' ? 'Type a message...' : "Xabar yozing...")}
                            disabled={isSending || !!chatError}
                            className="w-full pl-6 pr-14 py-4 rounded-[1.5rem] border-2 border-gray-50 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 focus:bg-white dark:focus:bg-gray-800 transition-all disabled:opacity-50 resize-none max-h-40 min-h-[60px] text-[15px] shadow-inner"
                            rows={1}
                        />
                        <button 
                            type="button"
                            className="absolute right-4 bottom-4 text-gray-400 hover:text-indigo-500 transition-colors p-1"
                        >
                            <Smile size={24} />
                        </button>
                    </div>
                    <button 
                        type="submit" 
                        disabled={!newMessage.trim() || isSending || !!chatError}
                        aria-label="Xabarni yuborish"
                        className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white w-[60px] h-[60px] rounded-[1.5rem] transition-all shadow-xl shadow-indigo-600/20 active:scale-90 flex items-center justify-center shrink-0"
                    >
                        {isSending ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send size={24} />}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CommunityChat;
