import { useState, useRef, useEffect, useCallback } from 'react';

export interface UseStudyRoomProps {
    roomId?: string;
}

export const useStudyRoom = (_props?: UseStudyRoomProps) => {
    const [audioEnabled, setAudioEnabled] = useState(true);
    const [videoEnabled, setVideoEnabled] = useState(true);
    const [isScreenSharing, setIsScreenSharing] = useState(false);
    const [joinedCall, setJoinedCall] = useState(false);
    const [localStream, setLocalStream] = useState<MediaStream | null>(null);

    const localStreamRef = useRef<MediaStream | null>(null);
    const screenStreamRef = useRef<MediaStream | null>(null);

    const toggleAudio = useCallback(() => {
        if (localStreamRef.current) {
            const audioTracks = localStreamRef.current.getAudioTracks();
            audioTracks.forEach(track => {
                track.enabled = !track.enabled;
            });
            setAudioEnabled(prev => !prev);
        }
    }, []);

    const toggleVideo = useCallback(() => {
        if (localStreamRef.current) {
            const videoTracks = localStreamRef.current.getVideoTracks();
            videoTracks.forEach(track => {
                track.enabled = !track.enabled;
            });
            setVideoEnabled(prev => !prev);
        }
    }, []);

    const cleanupMedia = useCallback(() => {
        if (localStreamRef.current) {
            localStreamRef.current.getTracks().forEach(t => t.stop());
            localStreamRef.current = null;
        }
        if (screenStreamRef.current) {
            screenStreamRef.current.getTracks().forEach(t => t.stop());
            screenStreamRef.current = null;
        }
        setLocalStream(null);
        setJoinedCall(false);
        setIsScreenSharing(false);
    }, []);

    useEffect(() => {
        return () => {
            cleanupMedia();
        };
    }, [cleanupMedia]);

    return {
        audioEnabled,
        videoEnabled,
        isScreenSharing,
        joinedCall,
        localStream,
        setLocalStream,
        setJoinedCall,
        setIsScreenSharing,
        toggleAudio,
        toggleVideo,
        cleanupMedia
    };
};
