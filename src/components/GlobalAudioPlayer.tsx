import { useEffect, useRef } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';

const SOUNDS = [
    { id: 'none', label: 'Silent', url: '' },
    { id: 'lofi', label: 'Lofi Music', url: '/lofi-music.mp3' },
    { id: 'rain', label: 'Heavy Rain', url: 'https://actions.google.com/sounds/v1/weather/rain_heavy.ogg' },
    { id: 'forest', label: 'Forest', url: 'https://actions.google.com/sounds/v1/ambiences/forest_morning.ogg' },
    { id: 'cafe', label: 'Cafe', url: 'https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg' },
];

const GlobalAudioPlayer = () => {
    const { focusState } = useStudyData();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (!audioRef.current) return;

        const soundUrl = SOUNDS.find(s => s.id === focusState.bgSound)?.url;
        if (soundUrl && focusState.isActive && !focusState.isMuted) {
            if (audioRef.current.src !== soundUrl) {
                audioRef.current.src = soundUrl;
            }
            // Silent fail if browser blocks autoplay
            audioRef.current.play().catch(() => { });
        } else {
            audioRef.current.pause();
        }
    }, [focusState.bgSound, focusState.isActive, focusState.isMuted]);

    return <audio ref={audioRef} loop />;
};

export default GlobalAudioPlayer;
