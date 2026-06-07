import { ArrowLeft, VideoOff, Play, Pause, RotateCcw, Clock, Users, PenTool, Sparkles, Loader2, Mic, MicOff, Video, Monitor, MonitorOff, Maximize2, Minimize2 } from 'lucide-react';
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

// StudyRoomPage component handles custom WebRTC peer-to-peer audio/video streaming,
// screen sharing, and the Pomodoro/Whiteboard collaboration synchronization.
const StudyRoomPage: React.FC = () => {
    const { roomId } = useParams<{ roomId: string }>();
    const navigate = useNavigate();
    
    // User Profile
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const clientIdRef = useRef<string>(Math.random().toString(36).substring(2, 9));

    // UI State
    const [activeTab, setActiveTab] = useState<'pomodoro' | 'whiteboard'>('pomodoro');
    const [mobileView, setMobileView] = useState<'video' | 'collab'>('video');
    const [showCollabPanel, setShowCollabPanel] = useState(true);

    // WebRTC & Media States
    const [localStream, setLocalStream] = useState<MediaStream | null>(null);
    const [remoteStreams, setRemoteStreams] = useState<Record<string, MediaStream>>({});
    const [peersInfo, setPeersInfo] = useState<Record<string, string>>({});
    const [audioEnabled, setAudioEnabled] = useState(true);
    const [videoEnabled, setVideoEnabled] = useState(true);
    const [joinedCall, setJoinedCall] = useState(false);
    const [isScreenSharing, setIsScreenSharing] = useState(false);
 
    const pcsRef = useRef<Record<string, RTCPeerConnection>>({});
    const localStreamRef = useRef<MediaStream | null>(null);
    const screenStreamRef = useRef<MediaStream | null>(null);
    const userProfileRef = useRef<UserProfile | null>(null);
 
    // Sync userProfileRef to use inside event listeners/callbacks
    useEffect(() => {
        userProfileRef.current = userProfile;
    }, [userProfile]);

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

    // Fetch local camera & microphone stream
    useEffect(() => {
        const getMedia = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { width: 640, height: 480, frameRate: { ideal: 15 } },
                    audio: true
                });
                setLocalStream(stream);
                localStreamRef.current = stream;
            } catch (e) {
                console.error('Failed to get media devices:', e);
            }
        };
        if (userProfile) {
            getMedia();
        }
        return () => {
            if (localStreamRef.current) {
                localStreamRef.current.getTracks().forEach(t => t.stop());
            }
            if (screenStreamRef.current) {
                screenStreamRef.current.getTracks().forEach(t => t.stop());
            }
        };
    }, [userProfile]);

    // Set up Realtime Sync
    useEffect(() => {
        if (!userProfile || !roomId) return;

        const createPeerConnection = (peerId: string) => {
            if (pcsRef.current[peerId]) return pcsRef.current[peerId];

            console.log(`Creating RTCPeerConnection for peer ${peerId}`);
            const pc = new RTCPeerConnection({
                iceServers: [
                    { urls: 'stun:stun.l.google.com:19302' },
                    { urls: 'stun:stun1.l.google.com:19302' }
                ]
            });

            // Add local tracks
            if (localStreamRef.current) {
                localStreamRef.current.getTracks().forEach(track => {
                    pc.addTrack(track, localStreamRef.current!);
                });
            }

            // ICE candidate handler
            pc.onicecandidate = (event) => {
                if (event.candidate && channelRef.current) {
                    channelRef.current.send({
                        type: 'broadcast',
                        event: 'webrtc_ice_candidate',
                        payload: {
                            senderId: userProfile.id,
                            targetId: peerId,
                            candidate: event.candidate
                        }
                    });
                }
            };

            // Remote stream track handler
            pc.ontrack = (event) => {
                console.log(`Received track from ${peerId}:`, event.streams[0]);
                setRemoteStreams(prev => ({
                    ...prev,
                    [peerId]: event.streams[0]
                }));
            };

            // State change logger
            pc.onconnectionstatechange = () => {
                console.log(`Connection state with ${peerId}: ${pc.connectionState}`);
                if (pc.connectionState === 'disconnected' || pc.connectionState === 'failed' || pc.connectionState === 'closed') {
                    cleanupPeerConnection(peerId);
                }
            };

            pcsRef.current[peerId] = pc;
            return pc;
        };

        const cleanupPeerConnection = (peerId: string) => {
            const pc = pcsRef.current[peerId];
            if (pc) {
                console.log(`Cleaning peer connection for ${peerId}`);
                try {
                    pc.close();
                } catch (e) {
                    // Ignore connection close errors
                }
                delete pcsRef.current[peerId];
            }
            setRemoteStreams(prev => {
                const copy = { ...prev };
                delete copy[peerId];
                return copy;
            });
        };

        const initiateCall = async (peerId: string) => {
            const pc = createPeerConnection(peerId);
            try {
                const offer = await pc.createOffer();
                await pc.setLocalDescription(offer);
                
                channelRef.current?.send({
                    type: 'broadcast',
                    event: 'webrtc_offer',
                    payload: {
                        senderId: userProfile.id,
                        targetId: peerId,
                        offer
                    }
                });
            } catch (e) {
                console.error(`Error creating offer for ${peerId}:`, e);
            }
        };

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

                const peerIds = Object.keys(state).filter(id => id !== userProfile.id);

                const newPeersInfo: Record<string, string> = {};
                Object.entries(state).forEach(([id, presences]) => {
                    if (id !== userProfile.id) {
                        const pres = presences[0] as { name?: string };
                        newPeersInfo[id] = pres?.name || 'Talaba';
                    }
                });
                setPeersInfo(newPeersInfo);

                // If not joined the video call, do not establish WebRTC connections
                if (!joinedCall) {
                    Object.keys(pcsRef.current).forEach(peerId => {
                        cleanupPeerConnection(peerId);
                    });
                    return;
                }
 
                Object.keys(pcsRef.current).forEach(peerId => {
                    if (!peerIds.includes(peerId)) {
                        cleanupPeerConnection(peerId);
                    }
                });

                peerIds.forEach(peerId => {
                    if (!pcsRef.current[peerId]) {
                        createPeerConnection(peerId);
                        if (userProfile.id < peerId) {
                            initiateCall(peerId);
                        }
                    }
                });
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
                const data = payload as { senderId: string; timeLeft: number; isRunning: boolean; mode: 'focus' | 'short_break' | 'long_break' };
                if (data.senderId !== clientIdRef.current) {
                    setTimeLeft(data.timeLeft);
                    setIsRunning(data.isRunning);
                    setPomodoroMode(data.mode);
                }
            })
            .on('broadcast', { event: 'request_state' }, ({ payload }) => {
                const data = payload as { requesterId: string };
                if (data.requesterId !== clientIdRef.current) {
                    channel.send({
                        type: 'broadcast',
                        event: 'pomodoro_state_response',
                        payload: {
                            timeLeft,
                            isRunning,
                            mode: pomodoroMode,
                            targetId: data.requesterId
                        }
                    });

                    if (editorRef.current) {
                        try {
                            const snapshot = getSnapshot(editorRef.current.store);
                            channel.send({
                                type: 'broadcast',
                                event: 'whiteboard_state_response',
                                payload: {
                                    snapshot,
                                    targetId: data.requesterId
                                }
                            });
                        } catch (e) {
                            console.error('Error generating whiteboard state response:', e);
                        }
                    }
                }
            })
            .on('broadcast', { event: 'pomodoro_state_response' }, ({ payload }) => {
                const data = payload as { targetId: string; timeLeft: number; isRunning: boolean; mode: 'focus' | 'short_break' | 'long_break' };
                if (data.targetId === clientIdRef.current) {
                    setTimeLeft(data.timeLeft);
                    setIsRunning(data.isRunning);
                    setPomodoroMode(data.mode);
                }
            })
            .on('broadcast', { event: 'whiteboard_state_update' }, ({ payload }) => {
                const data = payload as { senderId: string; snapshot: Parameters<typeof loadSnapshot>[1] };
                if (data.senderId !== clientIdRef.current && editorRef.current) {
                    isApplyingIncomingSnapshot.current = true;
                    try {
                        loadSnapshot(editorRef.current.store, data.snapshot);
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
                const data = payload as { targetId: string; snapshot: Parameters<typeof loadSnapshot>[1] };
                if (data.targetId === clientIdRef.current && editorRef.current) {
                    isApplyingIncomingSnapshot.current = true;
                    try {
                        loadSnapshot(editorRef.current.store, data.snapshot);
                    } catch (e) {
                        console.error('Error loading whiteboard state response:', e);
                    } finally {
                        setTimeout(() => {
                            isApplyingIncomingSnapshot.current = false;
                        }, 100);
                    }
                }
            })
            .on('broadcast', { event: 'webrtc_offer' }, async ({ payload }) => {
                if (!joinedCall) return;
                const data = payload as { senderId: string; targetId: string; offer: RTCSessionDescriptionInit };
                if (data.targetId === userProfileRef.current?.id) {
                    console.log(`Received WebRTC offer from ${data.senderId}`);
                    const pc = createPeerConnection(data.senderId);
                    try {
                        await pc.setRemoteDescription(new RTCSessionDescription(data.offer));
                        const answer = await pc.createAnswer();
                        await pc.setLocalDescription(answer);
                        
                        channelRef.current?.send({
                            type: 'broadcast',
                            event: 'webrtc_answer',
                            payload: {
                                senderId: userProfileRef.current?.id,
                                targetId: data.senderId,
                                answer
                            }
                        });
                    } catch (e) {
                        console.error('Failed to handle offer:', e);
                    }
                }
            })
            .on('broadcast', { event: 'webrtc_answer' }, async ({ payload }) => {
                if (!joinedCall) return;
                const data = payload as { senderId: string; targetId: string; answer: RTCSessionDescriptionInit };
                if (data.targetId === userProfileRef.current?.id) {
                    console.log(`Received WebRTC answer from ${data.senderId}`);
                    const pc = pcsRef.current[data.senderId];
                    if (pc) {
                        try {
                            await pc.setRemoteDescription(new RTCSessionDescription(data.answer));
                        } catch (e) {
                            console.error('Failed to handle answer:', e);
                        }
                    }
                }
            })
            .on('broadcast', { event: 'webrtc_ice_candidate' }, async ({ payload }) => {
                if (!joinedCall) return;
                const data = payload as { senderId: string; targetId: string; candidate: RTCIceCandidateInit };
                if (data.targetId === userProfileRef.current?.id) {
                    const pc = pcsRef.current[data.senderId];
                    if (pc) {
                        try {
                            await pc.addIceCandidate(new RTCIceCandidate(data.candidate));
                        } catch (e) {
                            console.error('Failed to add ICE candidate:', e);
                        }
                    }
                }
            });

        // Subscribe to channel
        channel.subscribe(async (status) => {
            if (status === 'SUBSCRIBED') {
                await channel.track({
                    user_id: userProfile.id,
                    name: userProfile.name,
                    joined_at: new Date().toISOString()
                });

                channel.send({
                    type: 'broadcast',
                    event: 'request_state',
                    payload: { requesterId: clientIdRef.current }
                });
            }
        });

        const currentPcs = pcsRef.current;
        return () => {
            supabase.removeChannel(channel);
            Object.keys(currentPcs).forEach(peerId => {
                cleanupPeerConnection(peerId);
            });
        };
    }, [userProfile, roomId, timeLeft, isRunning, pomodoroMode, joinedCall]);

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

    // Media Controllers
    const toggleAudio = () => {
        if (localStream) {
            const audioTrack = localStream.getAudioTracks()[0];
            if (audioTrack) {
                audioTrack.enabled = !audioTrack.enabled;
                setAudioEnabled(audioTrack.enabled);
            }
        }
    };

    const toggleVideo = () => {
        if (isScreenSharing && screenStreamRef.current) {
            const screenTrack = screenStreamRef.current.getVideoTracks()[0];
            if (screenTrack) {
                screenTrack.enabled = !screenTrack.enabled;
                setVideoEnabled(screenTrack.enabled);
            }
        } else if (localStream) {
            const videoTrack = localStream.getVideoTracks()[0];
            if (videoTrack) {
                videoTrack.enabled = !videoTrack.enabled;
                setVideoEnabled(videoTrack.enabled);
            }
        }
    };
 
    // Screen Sharing Controllers
    const startScreenShare = async () => {
        try {
            const screenStream = await navigator.mediaDevices.getDisplayMedia({
                video: {
                    displaySurface: "monitor"
                },
                selfBrowserSurface: "exclude"
            } as unknown as DisplayMediaStreamOptions);
            screenStreamRef.current = screenStream;
            setIsScreenSharing(true);
 
            const screenTrack = screenStream.getVideoTracks()[0];
 
            // Replace track in all peer connections
            Object.values(pcsRef.current).forEach(pc => {
                const senders = pc.getSenders();
                const videoSender = senders.find(sender => sender.track?.kind === 'video');
                if (videoSender) {
                    videoSender.replaceTrack(screenTrack);
                }
            });
 
            // Create a new stream combining camera audio and screen video for local preview
            const localAudioTrack = localStreamRef.current?.getAudioTracks()[0];
            const combinedStream = new MediaStream();
            if (localAudioTrack) {
                combinedStream.addTrack(localAudioTrack);
            }
            combinedStream.addTrack(screenTrack);
            setLocalStream(combinedStream);
 
            screenTrack.onended = () => {
                stopScreenShare();
            };
        } catch (e) {
            console.error('Failed to share screen:', e);
        }
    };
 
    const stopScreenShare = () => {
        if (screenStreamRef.current) {
            screenStreamRef.current.getTracks().forEach(track => track.stop());
            screenStreamRef.current = null;
        }
        setIsScreenSharing(false);
 
        // Restore camera video track
        const cameraVideoTrack = localStreamRef.current?.getVideoTracks()[0];
        
        // Replace track in all peer connections back to camera
        Object.values(pcsRef.current).forEach(pc => {
            const senders = pc.getSenders();
            const videoSender = senders.find(sender => sender.track?.kind === 'video');
            if (videoSender && cameraVideoTrack) {
                videoSender.replaceTrack(cameraVideoTrack);
            }
        });
 
        // Restore local stream preview to original camera stream
        if (localStreamRef.current) {
            setLocalStream(localStreamRef.current);
        }
    };

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
                    {/* Desktop Fullscreen/Panel Toggle Button */}
                    <button
                        onClick={() => setShowCollabPanel(!showCollabPanel)}
                        className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-semibold transition-all active:scale-95 shadow-sm"
                        title={showCollabPanel ? "Hamkorlik panelini yashirish" : "Hamkorlik panelini ko'rsatish"}
                    >
                        {showCollabPanel ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                        <span>{showCollabPanel ? "Katta ekran" : "Hamkorlik paneli"}</span>
                    </button>

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
                {/* Left Side: Custom WebRTC Video Grid */}
                <div className={`flex-1 bg-[#0f172a] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative flex flex-col p-4 space-y-4 ${mobileView === 'video' ? 'block' : 'hidden md:block'}`}>
                    
                    {!joinedCall ? (
                        /* Pre-join / Preview Screen */
                        <div className="flex-1 flex flex-col items-center justify-center relative p-4">
                            {/* Preview Video Box */}
                            <div className="w-full max-w-md aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 relative flex items-center justify-center shadow-2xl transition-all duration-305 animate-in fade-in zoom-in-95 duration-500">
                                {videoEnabled && localStream ? (
                                    <video
                                        ref={(ref) => { if (ref) ref.srcObject = localStream; }}
                                        autoPlay
                                        playsInline
                                        muted
                                        className="w-full h-full object-cover rounded-2xl transform -scale-x-100 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center text-slate-505 transition-all duration-300">
                                        <div className="p-4 bg-slate-850 rounded-full mb-2">
                                            <VideoOff size={32} />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Kamera o'chiq</span>
                                    </div>
                                )}
                                <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md text-xs font-semibold rounded-lg text-white flex items-center gap-1.5 border border-white/10 shadow-lg">
                                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
                                    Kamera ko'rinishi (Preview)
                                </div>
                            </div>
 
                            {/* Join Action Details */}
                            <div className="w-full max-w-md bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 mt-6 text-center space-y-4 shadow-xl transition-all duration-300 hover:border-slate-850">
                                <h3 className="text-lg font-bold text-white tracking-tight">Dars Xonasi Tayyor</h3>
                                <p className="text-sm text-slate-400">Guruhdoshlaringiz bilan real-vaqt rejimida video muloqot va hamkorlikni boshlash uchun qo'shiling.</p>
                                
                                <button
                                    onClick={() => setJoinedCall(true)}
                                    className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 active:scale-[0.98] transition-all duration-200"
                                >
                                    <Video size={18} /> Darsni boshlash
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* Videos Grid (Active Call) */
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr min-h-0 overflow-y-auto p-1">
                            {/* Local Video */}
                            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800/80 hover:border-slate-700/80 relative flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-slate-950/50 hover:shadow-xl animate-in fade-in zoom-in-95 duration-550">
                                {videoEnabled && localStream ? (
                                    <video
                                        ref={(ref) => { if (ref) ref.srcObject = localStream; }}
                                        autoPlay
                                        playsInline
                                        muted
                                        className={`w-full h-full rounded-2xl transition-all duration-500 ${isScreenSharing ? 'object-contain bg-slate-950' : 'object-cover transform -scale-x-100'}`}
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center text-slate-500 animate-in fade-in duration-300">
                                        <div className="p-4 bg-slate-800/60 rounded-full mb-2">
                                            <VideoOff size={32} />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-wider">Kamera o'chiq</span>
                                    </div>
                                )}
                                <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md text-xs font-semibold rounded-lg text-white flex items-center gap-1.5 border border-white/10 shadow-md">
                                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                                    Men ({userProfile.name}) {isScreenSharing && "(Ekran ulashilmoqda)"}
                                </div>
                            </div>
 
                            {/* Remote Videos */}
                            {Object.entries(remoteStreams).map(([peerId, stream]) => {
                                const peerName = peersInfo[peerId] || 'Talaba';
                                return (
                                    <div key={peerId} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800/80 hover:border-slate-700/80 relative flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-slate-950/50 hover:shadow-xl animate-in fade-in zoom-in-95 duration-550">
                                        <video
                                            ref={(ref) => { if (ref) ref.srcObject = stream; }}
                                            autoPlay
                                            playsInline
                                            className="w-full h-full object-cover rounded-2xl transition-all duration-500"
                                        />
                                        <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md text-xs font-semibold rounded-lg text-white flex items-center gap-1.5 border border-white/10 shadow-md">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                            {peerName}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
 
                    {/* Media Controls Toolbar */}
                    <div className="flex justify-center items-center gap-4 py-2 border-t border-slate-800/60">
                        <button
                            onClick={toggleAudio}
                            className={`p-3.5 rounded-xl border transition-all active:scale-95 flex items-center justify-center ${
                                audioEnabled 
                                    ? 'bg-slate-850 hover:bg-slate-800 border-slate-750 text-slate-200' 
                                    : 'bg-red-500/10 hover:bg-red-500/20 border-red-500/30 text-red-400'
                            }`}
                            title={audioEnabled ? 'Mikrofonni o\'chirish' : 'Mikrofonni yoqish'}
                        >
                            {audioEnabled ? <Mic size={20} /> : <MicOff size={20} />}
                        </button>
                        <button
                            onClick={toggleVideo}
                            className={`p-3.5 rounded-xl border transition-all active:scale-95 flex items-center justify-center ${
                                videoEnabled 
                                    ? 'bg-slate-850 hover:bg-slate-800 border-slate-750 text-slate-200' 
                                    : 'bg-red-500/10 hover:bg-red-500/20 border-red-500/30 text-red-400'
                            }`}
                            title={videoEnabled ? 'Kamerani o\'chirish' : 'Kamerani yoqish'}
                        >
                            {videoEnabled ? <Video size={20} /> : <VideoOff size={20} />}
                        </button>
 
                        {joinedCall && (
                            <>
                                <button
                                    onClick={isScreenSharing ? stopScreenShare : startScreenShare}
                                    className={`p-3.5 rounded-xl border transition-all active:scale-95 flex items-center justify-center ${
                                        isScreenSharing 
                                            ? 'bg-green-500/10 hover:bg-green-500/20 border-green-500/30 text-green-400' 
                                            : 'bg-slate-850 hover:bg-slate-800 border-slate-750 text-slate-200'
                                    }`}
                                    title={isScreenSharing ? 'Ekranni ulashishni to\'xtatish' : 'Ekranni ulashish'}
                                >
                                    {isScreenSharing ? <MonitorOff size={20} /> : <Monitor size={20} />}
                                </button>
 
                                <Button
                                    variant="secondary"
                                    onClick={() => {
                                        stopScreenShare();
                                        setJoinedCall(false);
                                    }}
                                    className="bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white border-none rounded-xl py-3 px-4 font-bold text-xs"
                                >
                                    Tark etish
                                </Button>
                            </>
                        )}
                    </div>
                </div>

                {/* Right Side: Collaboration Panel (Pomodoro / Whiteboard) */}
                <div className={`w-full md:w-[420px] lg:w-[460px] bg-[#1e293b] border border-slate-700/50 rounded-3xl shadow-2xl flex flex-col overflow-hidden ${
                    !showCollabPanel ? 'hidden' : (mobileView === 'collab' ? 'block' : 'hidden md:flex')
                }`}>
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
