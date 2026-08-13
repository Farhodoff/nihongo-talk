import { ArrowLeft, VideoOff, Users, PenTool, Loader2, Mic, MicOff, Video, Monitor, MonitorOff, Minimize2 } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Editor } from 'tldraw';
const RoomWhiteboard = React.lazy(() => import('../components/study-room/RoomWhiteboard'));
import { Button } from '../components/ui/Button';
import { supabase } from '../lib/supabase';
import { LocalTour, LocalTourStep } from '../components/LocalTour';

const ROOM_TOUR_STEPS: LocalTourStep[] = [
    {
        title: "Kamera va Mikrofon 🎤",
        content: "Dars xonasiga kirganingizdan so'ng, kamera va mikrofonni shu yerdan yoqib/o'chirishingiz mumkin.",
        target: "[data-tour=\"room-media-controls\"]",
        placement: "top"
    },
    {
        title: "Ekranni ulashish 💻",
        content: "Agar do'stlaringizga o'z ekraningizni ko'rsatmoqchi bo'lsangiz, shu tugmani bosing.",
        target: "[data-tour=\"room-screen-share\"]",
        placement: "top"
    },
    {
        title: "Birgalikda chizish 🖍️",
        content: "Bu yerdan Oq Doska (Whiteboard) bo'limiga o'tib, hamma birgalikda yozishi va chizishi mumkin bo'lgan taxtani ochasiz.",
        target: "[data-tour=\"room-whiteboard-tab\"]",
        placement: "bottom"
    }
];

interface UserProfile {
    id: string;
    name: string;
    email: string;
}

// StudyRoomPage component handles custom WebRTC peer-to-peer audio/video streaming,
// screen sharing, and the Whiteboard collaboration synchronization.
const StudyRoomPage: React.FC = () => {
    const { roomId } = useParams<{ roomId: string }>();
    const navigate = useNavigate();
    
    // User Profile
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const clientIdRef = useRef<string>(Math.random().toString(36).substring(2, 9));

    // UI State
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

    // Refs for closure access in channel event listeners without triggering re-renders
    const pomodoroStateRef = useRef({ timeLeft, isRunning, mode: pomodoroMode });
    useEffect(() => {
        pomodoroStateRef.current = { timeLeft, isRunning, mode: pomodoroMode };
    }, [timeLeft, isRunning, pomodoroMode]);

    const joinedCallRef = useRef(joinedCall);
    useEffect(() => {
        joinedCallRef.current = joinedCall;
    }, [joinedCall]);

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

        let channel: ReturnType<typeof supabase.channel> | null = null;
        let isComponentMounted = true;

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

        const setupChannel = async () => {
            const { data: room } = await supabase.from('study_rooms').select('created_at, creator_id').eq('id', roomId).single();
            
            let channelName = `study-room-${roomId}`;
            if (room) {
                const secret = btoa(`${room.created_at}-${room.creator_id}`).substring(0, 16).replace(/=/g, '');
                channelName = `study-room-${roomId}-${secret}`;
            }

            if (!isComponentMounted) return;

            channel = supabase.channel(channelName, {
                config: {
                    presence: {
                        key: userProfile.id,
                    },
                },
            });
            channelRef.current = channel;

        // Presence & Peer Tracking
        const bindChannelEvents = (ch: ReturnType<typeof supabase.channel>) => {
            ch.on('presence', { event: 'sync' }, () => {
                const state = ch.presenceState();
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
                if (!joinedCallRef.current) {
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
        ch.on('broadcast', { event: 'pomodoro_state_update' }, ({ payload }) => {
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
                    ch.send({
                        type: 'broadcast',
                        event: 'pomodoro_state_response',
                        payload: {
                            timeLeft: pomodoroStateRef.current.timeLeft,
                            isRunning: pomodoroStateRef.current.isRunning,
                            mode: pomodoroStateRef.current.mode,
                            targetId: data.requesterId
                        }
                    });

                    if (editorRef.current) {
                        try {
                            import('tldraw').then(({ getSnapshot }) => {
                                const snapshot = getSnapshot(editorRef.current!.store);
                                ch.send({
                                    type: 'broadcast',
                                    event: 'whiteboard_state_response',
                                    payload: {
                                        snapshot,
                                        targetId: data.requesterId
                                    }
                                });
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
                const data = payload as { senderId: string; changes: any };
                if (data.senderId !== clientIdRef.current && editorRef.current) {
                    try {
                        editorRef.current.store.mergeRemoteChanges(() => {
                            const { added, updated, removed } = data.changes;
                            if (added) {
                                editorRef.current!.store.put(Object.values(added));
                            }
                            if (updated) {
                                const toPut = [];
                                for (const val of Object.values(updated) as any[]) {
                                    if (Array.isArray(val) && val.length === 2) {
                                        toPut.push(val[1]);
                                    }
                                }
                                editorRef.current!.store.put(toPut);
                            }
                            if (removed) {
                                editorRef.current!.store.remove(Object.keys(removed) as any);
                            }
                        });
                    } catch (e) {
                        console.error('Error loading whiteboard changes:', e);
                    }
                }
            })
            .on('broadcast', { event: 'whiteboard_state_response' }, ({ payload }) => {
                const data = payload as { targetId: string; snapshot: any };
                if (data.targetId === clientIdRef.current && editorRef.current) {
                    try {
                        import('tldraw').then(({ loadSnapshot }) => {
                            loadSnapshot(editorRef.current!.store, data.snapshot);
                        });
                    } catch (e) {
                        console.error('Error loading whiteboard state response:', e);
                    }
                }
            })
            .on('broadcast', { event: 'webrtc_offer' }, async ({ payload }) => {
                if (!joinedCallRef.current) return;
                const data = payload as { senderId: string; targetId: string; offer: RTCSessionDescriptionInit };
                if (data.targetId === userProfileRef.current?.id) {
                    console.log(`Received WebRTC offer from ${data.senderId}`);
                    const pc = createPeerConnection(data.senderId);
                    try {
                        await pc.setRemoteDescription(new RTCSessionDescription(data.offer));
                        const answer = await pc.createAnswer();
                        await pc.setLocalDescription(answer);
                        
                        ch.send({
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
                if (!joinedCallRef.current) return;
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
                if (!joinedCallRef.current) return;
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
            ch.subscribe(async (status) => {
                if (status === 'SUBSCRIBED') {
                    await ch.track({
                        user_id: userProfile.id,
                        name: userProfile.name,
                        joined_at: new Date().toISOString()
                    });

                    ch.send({
                        type: 'broadcast',
                        event: 'request_state',
                        payload: { requesterId: clientIdRef.current }
                    });
                }
            });
        };

        bindChannelEvents(channel);
    };

        setupChannel().catch(e => console.error("Error setting up channel:", e));

        const currentPcs = pcsRef.current;
        return () => {
            isComponentMounted = false;
            if (channel) {
                supabase.removeChannel(channel);
            }
            Object.keys(currentPcs).forEach(peerId => {
                cleanupPeerConnection(peerId);
            });
        };
    }, [userProfile, roomId]); // Removed timeLeft, isRunning, pomodoroMode, joinedCall to prevent continuous channel recreation

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

    // Whiteboard Mount Handler
    const handleWhiteboardMount = (editor: Editor) => {
        editorRef.current = editor;

        const cleanup = editor.store.listen((entry: any) => {
            if (entry.source !== 'user') return;

            try {
                channelRef.current?.send({
                    type: 'broadcast',
                    event: 'whiteboard_state_update',
                    payload: { changes: entry.changes, senderId: clientIdRef.current }
                });
            } catch (e) {
                console.error('Error broadcasting whiteboard changes:', e);
            }
        }, { source: 'user', scope: 'document' });

        // Request state again after whiteboard is mounted to get current drawings
        channelRef.current?.send({
            type: 'broadcast',
            event: 'request_state',
            payload: { requesterId: clientIdRef.current }
        });

        return cleanup;
    };

    return (
        <div className="h-full bg-[#0f172a] text-gray-100 flex flex-col font-sans p-4 md:p-6 pb-[76px] md:pb-6">
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
                    {/* Desktop Whiteboard Panel Toggle Button */}
                    <button
                        onClick={() => setShowCollabPanel(!showCollabPanel)}
                        className={`hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-sm border ${
                            showCollabPanel
                                ? 'bg-indigo-600/20 text-indigo-300 border-indigo-500/40'
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                        }`}
                        title={showCollabPanel ? "Oq doskani yashirish" : "Oq doskani ko'rsatish"}
                    >
                        <PenTool size={16} />
                        <span>{showCollabPanel ? "Oq doskani yashirish" : "Oq doska (Whiteboard)"}</span>
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
                            Oq doska
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
                    <div className="flex justify-center items-center gap-4 py-2 border-t border-slate-800/60" data-tour="room-media-controls">
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
                                    data-tour="room-screen-share"
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

                {/* Right Side: Collapsible Whiteboard Sidebar Panel */}
                {showCollabPanel ? (
                    <div className="w-full md:w-[460px] lg:w-[540px] bg-[#1e293b] border border-slate-700/50 rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 relative animate-in fade-in slide-in-from-right-4">
                        {/* Panel Header */}
                        <div className="flex items-center justify-between bg-slate-900/80 px-5 py-4 border-b border-slate-800">
                            <div className="flex items-center gap-2 text-white font-bold text-sm tracking-tight" data-tour="room-whiteboard-tab">
                                <PenTool size={18} className="text-indigo-400" />
                                <span>Oq Doska (Whiteboard)</span>
                            </div>
                            <button
                                onClick={() => setShowCollabPanel(false)}
                                className="p-1.5 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white transition-colors"
                                title="Yashirish"
                            >
                                <Minimize2 size={18} />
                            </button>
                        </div>

                        {/* Whiteboard Content Area */}
                        <div className="flex-1 flex flex-col p-4 min-h-[380px] bg-white rounded-b-3xl overflow-hidden touch-none relative">
                            <React.Suspense fallback={<div className="flex items-center justify-center h-full text-slate-500 font-bold text-xs">Oq doska yuklanmoqda...</div>}>
                                <RoomWhiteboard
                                    onMount={handleWhiteboardMount}
                                />
                            </React.Suspense>
                        </div>
                    </div>
                ) : (
                    /* Floating Re-open Button when panel is collapsed */
                    <button
                        onClick={() => setShowCollabPanel(true)}
                        className="hidden md:flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-4 py-3 rounded-2xl font-bold text-xs shadow-xl shadow-indigo-600/30 border border-indigo-400/30 transition-all hover:scale-105 active:scale-95 self-start"
                        title="Oq Doskani Ochish"
                    >
                        <PenTool size={18} />
                        <span>Oq Doska (Whiteboard)</span>
                    </button>
                )}
            </div>
            
            <LocalTour steps={ROOM_TOUR_STEPS} tourKey="study_room_tour_completed" />
        </div>
    );
};

export default StudyRoomPage;
