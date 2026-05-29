import { JitsiMeeting } from '@jitsi/react-sdk';
import { ArrowLeft, VideoOff, Play, Pause, RotateCcw, Clock, Users, PenTool, Sparkles, Loader2 } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Tldraw, getSnapshot, loadSnapshot, Editor } from 'tldraw';
import 'tldraw/tldraw.css';
import { Button } from '../components/ui/Button';
import { supabase } from '../lib/supabase';

interface UserProfile {
    id: string;
    name: string;
    email: string;
}

const StudyRoomPage: React.FC = () => {
    const { roomId } = useParams<{ roomId: string }>();
    const navigate = useNavigate();
    
    // User Profile
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const clientIdRef = useRef<string>(Math.random().toString(36).substring(2, 9));

    // UI State
    const [activeTab, setActiveTab] = useState<'pomodoro' | 'whiteboard'>('pomodoro');
    const [mobileView, setMobileView] = useState<'video' | 'collab'>('video');

    // Realtime channel
    const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null);

    // Sinxron Pomodoro State
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [pomodoroMode, setPomodoroMode] = useState<'focus' | 'short_break' | 'long_break'>('focus');
    const [connectedPeers, setConnectedPeers] = useState<number>(1);

    // Whiteboard Ref & States
    const editorRef = useRef<Editor | null>(null);
    const isApplyingIncomingSnapshot = useRef(false);
    const whiteboardSyncTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Fetch user profile on mount
    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { data: profile } = await supabase.from('profiles').select('full_name').eq('id', user.id).single();
                setUserProfile({
                    id: user.id,
                    name: profile?.full_name || user.email?.split('@')[0] || 'Talaba',
                    email: user.email || ''
                });
            } else {
                setUserProfile({
                    id: `guest-${clientIdRef.current}`,
                    name: 'Mehmon Talaba',
                    email: ''
                });
            }
        };
        fetchUser();
    }, []);

    // Set up Realtime Sync
    useEffect(() => {
        if (!userProfile || !roomId) return;

        const channel = supabase.channel(`study-room-${roomId}`, {
            config: {
                presence: {
                    key: userProfile.id,
                },
            },
        });
        channelRef.current = channel;

        // Presence & Peer Tracking
        channel
            .on('presence', { event: 'sync' }, () => {
                const state = channel.presenceState();
                setConnectedPeers(Object.keys(state).length);
            })
            .on('presence', { event: 'join' }, ({ newPresences }) => {
                console.log('Joined peers:', newPresences);
            })
            .on('presence', { event: 'leave' }, ({ leftPresences }) => {
                console.log('Left peers:', leftPresences);
            });

        // Broadcast Message Handlers
        channel
            .on('broadcast', { event: 'pomodoro_state_update' }, ({ payload }) => {
                if (payload.senderId !== clientIdRef.current) {
                    setTimeLeft(payload.timeLeft);
                    setIsRunning(payload.isRunning);
                    setPomodoroMode(payload.mode);
                }
            })
            .on('broadcast', { event: 'request_state' }, ({ payload }) => {
                // Older clients answer state requests
                if (payload.requesterId !== clientIdRef.current) {
                    // Send Pomodoro state
                    channel.send({
                        type: 'broadcast',
                        event: 'pomodoro_state_response',
                        payload: {
                            timeLeft,
                            isRunning,
                            mode: pomodoroMode,
                            targetId: payload.requesterId
                        }
                    });

                    // Send Whiteboard state if active
                    if (editorRef.current) {
                        try {
                            const snapshot = getSnapshot(editorRef.current.store);
                            channel.send({
                                type: 'broadcast',
                                event: 'whiteboard_state_response',
                                payload: {
                                    snapshot,
                                    targetId: payload.requesterId
                                }
                            });
                        } catch (e) {
                            console.error('Error generating whiteboard state response:', e);
                        }
                    }
                }
            })
            .on('broadcast', { event: 'pomodoro_state_response' }, ({ payload }) => {
                if (payload.targetId === clientIdRef.current) {
                    setTimeLeft(payload.timeLeft);
                    setIsRunning(payload.isRunning);
                    setPomodoroMode(payload.mode);
                }
            })
            .on('broadcast', { event: 'whiteboard_state_update' }, ({ payload }) => {
                if (payload.senderId !== clientIdRef.current && editorRef.current) {
                    isApplyingIncomingSnapshot.current = true;
                    try {
                        loadSnapshot(editorRef.current.store, payload.snapshot);
                    } catch (e) {
                        console.error('Error loading whiteboard broadcast:', e);
                    } finally {
                        setTimeout(() => {
                            isApplyingIncomingSnapshot.current = false;
                        }, 100);
                    }
                }
            })
            .on('broadcast', { event: 'whiteboard_state_response' }, ({ payload }) => {
                if (payload.targetId === clientIdRef.current && editorRef.current) {
                    isApplyingIncomingSnapshot.current = true;
                    try {
                        loadSnapshot(editorRef.current.store, payload.snapshot);
                    } catch (e) {
                        console.error('Error loading whiteboard state response:', e);
                    } finally {
                        setTimeout(() => {
                            isApplyingIncomingSnapshot.current = false;
                        }, 100);
                    }
                }
            });

        // Subscribe to channel
        channel.subscribe(async (status) => {
            if (status === 'SUBSCRIBED') {
                // Register presence
                await channel.track({
                    user_id: userProfile.id,
                    name: userProfile.name,
                    joined_at: new Date().toISOString()
                });

                // Request initial state from other users in the room
                channel.send({
                    type: 'broadcast',
                    event: 'request_state',
                    payload: { requesterId: clientIdRef.current }
                });
            }
        });

        return () => {
            supabase.removeChannel(channel);
        };
    }, [userProfile, roomId, timeLeft, isRunning, pomodoroMode]);

    // Local Pomodoro Ticking
    useEffect(() => {
        let intervalId: ReturnType<typeof setInterval> | null = null;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        setIsRunning(false);
                        try {
                            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-500.wav');
                            audio.play();
                        } catch (e) {
                            console.log('Audio blocked', e);
                        }
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [isRunning]);

    // Handle Jitsi Conference Details
    const jitsiRoomName = `StudyPlannerApp_Public_${roomId}`;

    if (!userProfile) {
        return (
            <div className="h-screen bg-[#0f172a] flex flex-col items-center justify-center text-white">
                <Loader2 className="w-10 h-10 text-indigo-500 animate-spin mb-4" />
                <p className="font-bold text-gray-400 uppercase tracking-widest animate-pulse">Yuklanmoqda...</p>
            </div>
        );
    }

    // Pomodoro Controllers
    const handleStart = () => {
        setIsRunning(true);
        channelRef.current?.send({
            type: 'broadcast',
            event: 'pomodoro_state_update',
            payload: { timeLeft, isRunning: true, mode: pomodoroMode, senderId: clientIdRef.current }
        });
    };

    const handlePause = () => {
        setIsRunning(false);
        channelRef.current?.send({
            type: 'broadcast',
            event: 'pomodoro_state_update',
            payload: { timeLeft, isRunning: false, mode: pomodoroMode, senderId: clientIdRef.current }
        });
    };

    const handleReset = (newTime: number = 25 * 60) => {
        setIsRunning(false);
        setTimeLeft(newTime);
        channelRef.current?.send({
            type: 'broadcast',
            event: 'pomodoro_state_update',
            payload: { timeLeft: newTime, isRunning: false, mode: pomodoroMode, senderId: clientIdRef.current }
        });
    };

    const handleModeChange = (newMode: 'focus' | 'short_break' | 'long_break', durationMinutes: number) => {
        const seconds = durationMinutes * 60;
        setPomodoroMode(newMode);
        setIsRunning(false);
        setTimeLeft(seconds);
        channelRef.current?.send({
            type: 'broadcast',
            event: 'pomodoro_state_update',
            payload: { timeLeft: seconds, isRunning: false, mode: newMode, senderId: clientIdRef.current }
        });
    };

    // Whiteboard Mount Handler
    const handleWhiteboardMount = (editor: Editor) => {
        editorRef.current = editor;

        const cleanup = editor.store.listen(() => {
            if (isApplyingIncomingSnapshot.current) return;

            if (whiteboardSyncTimeoutRef.current) clearTimeout(whiteboardSyncTimeoutRef.current);
            whiteboardSyncTimeoutRef.current = setTimeout(() => {
                if (!editorRef.current || isApplyingIncomingSnapshot.current) return;

                try {
                    const snapshot = getSnapshot(editorRef.current.store);
                    channelRef.current?.send({
                        type: 'broadcast',
                        event: 'whiteboard_state_update',
                        payload: { snapshot, senderId: clientIdRef.current }
                    });
                } catch (e) {
                    console.error('Error broadcasting whiteboard snapshot:', e);
                }
            }, 1000);
        });

        // Request state again after whiteboard is mounted to get current drawings
        channelRef.current?.send({
            type: 'broadcast',
            event: 'request_state',
            payload: { requesterId: clientIdRef.current }
        });

        return cleanup;
    };

    // Format Pomodoro Time Display
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // SVG Circular Progress Calculations
    const radius = 85;
    const circumference = 2 * Math.PI * radius;
    const maxTime = pomodoroMode === 'focus' ? 25 * 60 : pomodoroMode === 'short_break' ? 5 * 60 : 15 * 60;
    const strokeDashoffset = circumference - ((maxTime - timeLeft) / maxTime) * circumference;

    return (
        <div className="min-h-screen bg-[#0f172a] text-gray-100 flex flex-col font-sans p-4 md:p-6">
            {/* Header */}
            <header className="flex justify-between items-center p-4 bg-[#1e293b] border border-slate-700/50 shadow-xl rounded-2xl mb-6">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate('/community')} className="hover:bg-slate-700 p-2 rounded-xl transition-colors">
                        <ArrowLeft size={24} className="text-gray-300" />
                    </button>
                    <div>
                        <h1 className="font-bold text-lg md:text-xl text-white tracking-tight">Xona: {roomId}</h1>
                        <div className="flex items-center gap-2 mt-0.5">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                            <p className="text-xs text-green-400 font-medium">Sinxron Faoliyat</p>
                            <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
                            <span className="text-xs text-slate-400 flex items-center gap-1">
                                <Users size={12} /> {connectedPeers} ta talaba
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    {/* Mobile Switch View Button */}
                    <div className="flex md:hidden bg-slate-800 p-1 rounded-xl border border-slate-750">
                        <button
                            onClick={() => setMobileView('video')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${mobileView === 'video' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400'}`}
                        >
                            Video
                        </button>
                        <button
                            onClick={() => setMobileView('collab')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${mobileView === 'collab' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400'}`}
                        >
                            Hamkorlik
                        </button>
                    </div>

                    <Button variant="secondary" onClick={() => navigate('/community')} className="bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white border-none rounded-xl">
                        <VideoOff size={18} className="mr-2" /> Chiqish
                    </Button>
                </div>
            </header>

            {/* Split Screen Layout */}
            <div className="flex-1 flex flex-col md:flex-row gap-6 min-h-[500px]">
                {/* Left Side: Jitsi Conference */}
                <div className={`flex-1 bg-black rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative ${mobileView === 'video' ? 'block' : 'hidden md:block'}`}>
                    <JitsiMeeting
                        domain="meet.jit.si"
                        roomName={jitsiRoomName}
                        configOverwrite={{
                            startWithAudioMuted: true,
                            disableThirdPartyRequests: true,
                            prejoinPageEnabled: false
                        }}
                        interfaceConfigOverwrite={{
                            TOOLBAR_BUTTONS: [
                                'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
                                'fodeviceselection', 'hangup', 'profile', 'chat', 'settings', 'raisehand',
                                'videoquality', 'filmstrip', 'tileview', 'videobackgroundblur', 'help'
                            ],
                        }}
                        userInfo={{
                            displayName: userProfile.name,
                            email: userProfile.email
                        }}
                        onApiReady={() => {}}
                        getIFrameRef={(iframeRef) => { 
                            iframeRef.style.height = '100%'; 
                            iframeRef.style.width = '100%'; 
                        }}
                    />
                </div>

                {/* Right Side: Collaboration Panel (Pomodoro / Whiteboard) */}
                <div className={`w-full md:w-[420px] lg:w-[460px] bg-[#1e293b] border border-slate-700/50 rounded-3xl shadow-2xl flex flex-col overflow-hidden ${mobileView === 'collab' ? 'block' : 'hidden md:flex'}`}>
                    {/* Right Panel Tabs */}
                    <div className="flex bg-slate-900/60 p-2 border-b border-slate-800">
                        <button
                            onClick={() => setActiveTab('pomodoro')}
                            className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                                activeTab === 'pomodoro' 
                                    ? 'bg-indigo-600 text-white shadow-md' 
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                            }`}
                        >
                            <Clock size={16} /> Pomodoro
                        </button>
                        <button
                            onClick={() => setActiveTab('whiteboard')}
                            className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                                activeTab === 'whiteboard' 
                                    ? 'bg-indigo-600 text-white shadow-md' 
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                            }`}
                        >
                            <PenTool size={16} /> Whiteboard
                        </button>
                    </div>

                    {/* Tab Contents */}
                    <div className="flex-1 flex flex-col p-6 min-h-0 overflow-y-auto">
                        {activeTab === 'pomodoro' ? (
                            /* POMODORO CONTENT */
                            <div className="flex-1 flex flex-col items-center justify-center py-6 space-y-8 animate-in fade-in duration-300">
                                {/* Mode selection */}
                                <div className="flex bg-slate-900/80 p-1 rounded-2xl border border-slate-800 w-full max-w-sm">
                                    <button
                                        onClick={() => handleModeChange('focus', 25)}
                                        className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${pomodoroMode === 'focus' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-300'}`}
                                    >
                                        Fokus (25)
                                    </button>
                                    <button
                                        onClick={() => handleModeChange('short_break', 5)}
                                        className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${pomodoroMode === 'short_break' ? 'bg-green-600 text-white' : 'text-slate-400 hover:text-slate-300'}`}
                                    >
                                        Tanaffus (5)
                                    </button>
                                    <button
                                        onClick={() => handleModeChange('long_break', 15)}
                                        className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${pomodoroMode === 'long_break' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-300'}`}
                                    >
                                        Uzoq (15)
                                    </button>
                                </div>

                                {/* Circular Timer Display */}
                                <div className="relative w-56 h-56 flex items-center justify-center">
                                    <svg className="w-full h-full transform -rotate-90">
                                        {/* Background Circle */}
                                        <circle
                                            cx="112"
                                            cy="112"
                                            r={radius}
                                            className="stroke-slate-800 fill-none"
                                            strokeWidth="8"
                                        />
                                        {/* Progress Circle */}
                                        <circle
                                            cx="112"
                                            cy="112"
                                            r={radius}
                                            className={`fill-none transition-all duration-1000 ${
                                                pomodoroMode === 'focus' 
                                                    ? 'stroke-indigo-500' 
                                                    : pomodoroMode === 'short_break' 
                                                        ? 'stroke-green-500' 
                                                        : 'stroke-cyan-500'
                                            }`}
                                            strokeWidth="8"
                                            strokeDasharray={circumference}
                                            strokeDashoffset={strokeDashoffset}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    
                                    {/* Text display */}
                                    <div className="absolute flex flex-col items-center justify-center">
                                        <span className="text-4xl font-black font-mono tracking-tight text-white">
                                            {formatTime(timeLeft)}
                                        </span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1 flex items-center gap-1">
                                            <Sparkles size={10} className="text-indigo-400" />
                                            {pomodoroMode === 'focus' ? 'Fokus rejim' : 'Tanaffus'}
                                        </span>
                                    </div>
                                </div>

                                {/* Controls */}
                                <div className="flex items-center gap-6">
                                    <button
                                        onClick={() => handleReset(pomodoroMode === 'focus' ? 25 * 60 : pomodoroMode === 'short_break' ? 5 * 60 : 15 * 60)}
                                        className="p-4 bg-slate-850 hover:bg-slate-800 hover:text-white text-slate-400 rounded-2xl border border-slate-700/60 transition-all active:scale-90"
                                        title="Qayta boshlash"
                                    >
                                        <RotateCcw size={22} />
                                    </button>
                                    
                                    {isRunning ? (
                                        <button
                                            onClick={handlePause}
                                            className="p-6 bg-red-600 hover:bg-red-700 text-white rounded-[2rem] shadow-lg shadow-red-650/20 transition-all active:scale-95 flex items-center justify-center"
                                        >
                                            <Pause size={30} fill="currentColor" />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleStart}
                                            className={`p-6 text-white rounded-[2rem] shadow-lg transition-all active:scale-95 flex items-center justify-center ${
                                                pomodoroMode === 'focus' 
                                                    ? 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20' 
                                                    : 'bg-green-600 hover:bg-green-700 shadow-green-600/20'
                                            }`}
                                        >
                                            <Play size={30} fill="currentColor" className="ml-1" />
                                        </button>
                                    )}

                                    <div className="w-14" /> {/* Spacer to align reset button */}
                                </div>
                            </div>
                        ) : (
                            /* WHITEBOARD CONTENT */
                            <div className="flex-1 flex flex-col h-full min-h-[300px] border border-slate-800 rounded-2xl overflow-hidden bg-white touch-none animate-in fade-in duration-300 relative">
                                <Tldraw
                                    onMount={handleWhiteboardMount}
                                    licenseKey="tldraw-2026-04-19/WyJGVDdNS09TcCIsWyIqIl0sMTYsIjIwMjYtMDQtMTkiXQ.BW86tQhO9nXNyQ6IIZJl3oracKtUetYw7risI1lZbitBjGYo0BbmD/dQqi/IbESV8TetvGWCXXtUmaPV1itm6A"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyRoomPage;
