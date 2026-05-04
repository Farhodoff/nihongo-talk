import { JitsiMeeting } from '@jitsi/react-sdk';
import { ArrowLeft, VideoOff } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { supabase } from '../lib/supabase';

const StudyRoomPage: React.FC = () => {
    const { roomId } = useParams<{ roomId: string }>();
    const navigate = useNavigate();
    const [userProfile, setUserProfile] = useState<{ name: string, email: string } | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                // Fetch full name from profile
                const { data: profile } = await supabase.from('profiles').select('full_name').eq('id', user.id).single();
                setUserProfile({
                    name: profile?.full_name || user.email?.split('@')[0] || 'Student',
                    email: user.email || ''
                });
            } else {
                setUserProfile({ name: 'Guest Student', email: '' });
            }
        };
        fetchUser();
    }, []);

    // Unique room name to avoid collisions on public Jitsi
    const jitsiRoomName = `StudyPlannerApp_Public_${roomId}`;

    if (!userProfile) return <div className="h-screen bg-gray-900 flex items-center justify-center text-white">Yuklanmoqda...</div>;

    return (
        <div className="min-h-screen flex flex-col bg-gray-900 p-4 md:p-8 max-w-7xl mx-auto">
            <header className="flex justify-between items-center p-4 bg-[#1f2937] text-white shadow-md z-10 rounded-t-2xl">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate('/community')} className="hover:bg-gray-700 p-2 rounded-full transition-colors">
                        <ArrowLeft size={24} />
                    </button>
                    <div>
                        <h1 className="font-bold text-lg">O'quv Xonasi: {roomId}</h1>
                        <p className="text-xs text-gray-400">Jitsi Meet (To'liq Integratsiya)</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => navigate('/community')} className="bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white border-none">
                        <VideoOff size={18} className="mr-2" /> Xonadan Chiqish
                    </Button>
                </div>
            </header>

            <div className="flex-1 w-full bg-black relative">
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
                            'fodeviceselection', 'hangup', 'profile', 'chat', 'recording',
                            'livestreaming', 'etherpad', 'sharedvideo', 'settings', 'raisehand',
                            'videoquality', 'filmstrip', 'invite', 'feedback', 'stats', 'shortcuts',
                            'tileview', 'videobackgroundblur', 'download', 'help', 'mute-everyone',
                            'security'
                        ],
                    }}
                    userInfo={{
                        displayName: userProfile.name,
                        email: userProfile.email
                    }}
                    onApiReady={() => {
                        // here you can attach custom event listeners to the Jitsi Meet External API
                        // e.g. externalApi.addEventListener('videoConferenceJoined', handleVideoConferenceJoined);
                    }}
                    getIFrameRef={(iframeRef) => { iframeRef.style.height = '100%'; }}
                />
            </div>
        </div>
    );
};

export default StudyRoomPage;
