import { useState, useRef, useCallback, useEffect } from 'react';

export interface UseVoiceRecorderReturn {
    isRecording: boolean;
    recordedBlob: Blob | null;
    recordedUrl: string | null;
    durationSeconds: number;
    isPlaying: boolean;
    audioProgress: number;
    startRecording: () => Promise<void>;
    stopRecording: () => Promise<Blob | null>;
    playRecorded: () => void;
    pauseRecorded: () => void;
    clearRecording: () => void;
}

export const useVoiceRecorder = (): UseVoiceRecorderReturn => {
    const [isRecording, setIsRecording] = useState(false);
    const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
    const [recordedUrl, setRecordedUrl] = useState<string | null>(null);
    const [durationSeconds, setDurationSeconds] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioProgress, setAudioProgress] = useState(0);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

    const clearRecording = useCallback(() => {
        if (recordedUrl) {
            URL.revokeObjectURL(recordedUrl);
        }
        setRecordedBlob(null);
        setRecordedUrl(null);
        setDurationSeconds(0);
        setIsPlaying(false);
        setAudioProgress(0);
        if (audioPlayerRef.current) {
            audioPlayerRef.current.pause();
            audioPlayerRef.current = null;
        }
    }, [recordedUrl]);

    const startRecording = useCallback(async () => {
        clearRecording();
        audioChunksRef.current = [];

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream, {
                mimeType: MediaRecorder.isTypeSupported('audio/webm')
                    ? 'audio/webm'
                    : MediaRecorder.isTypeSupported('audio/mp4')
                    ? 'audio/mp4'
                    : ''
            });

            mediaRecorderRef.current = mediaRecorder;

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(audioChunksRef.current, { type: mediaRecorder.mimeType || 'audio/webm' });
                const url = URL.createObjectURL(blob);
                setRecordedBlob(blob);
                setRecordedUrl(url);

                // Stop all tracks to release mic
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorder.start(200);
            setIsRecording(true);
            setDurationSeconds(0);

            timerRef.current = setInterval(() => {
                setDurationSeconds(prev => prev + 1);
            }, 1000);
        } catch (err) {
            console.error('Failed to start voice recorder:', err);
        }
    }, [clearRecording]);

    const stopRecording = useCallback((): Promise<Blob | null> => {
        return new Promise((resolve) => {
            const recorder = mediaRecorderRef.current;
            if (recorder && recorder.state !== 'inactive') {
                recorder.onstop = () => {
                    const blob = new Blob(audioChunksRef.current, { type: recorder.mimeType || 'audio/webm' });
                    const url = URL.createObjectURL(blob);
                    setRecordedBlob(blob);
                    setRecordedUrl(url);

                    if (recorder.stream) {
                        recorder.stream.getTracks().forEach(track => track.stop());
                    }
                    resolve(blob);
                };
                recorder.stop();
            } else {
                resolve(recordedBlob);
            }
            setIsRecording(false);
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        });
    }, [recordedBlob]);

    const playRecorded = useCallback(() => {
        if (!recordedUrl) return;

        if (audioPlayerRef.current) {
            audioPlayerRef.current.play();
            setIsPlaying(true);
            return;
        }

        const audio = new Audio(recordedUrl);
        audioPlayerRef.current = audio;

        audio.ontimeupdate = () => {
            if (audio.duration) {
                setAudioProgress((audio.currentTime / audio.duration) * 100);
            }
        };

        audio.onended = () => {
            setIsPlaying(false);
            setAudioProgress(0);
        };

        audio.play().catch(err => console.error('Audio play error:', err));
        setIsPlaying(true);
    }, [recordedUrl]);

    const pauseRecorded = useCallback(() => {
        if (audioPlayerRef.current) {
            audioPlayerRef.current.pause();
            setIsPlaying(false);
        }
    }, []);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
            if (audioPlayerRef.current) {
                audioPlayerRef.current.pause();
            }
            if (recordedUrl) {
                URL.revokeObjectURL(recordedUrl);
            }
        };
    }, [recordedUrl]);

    return {
        isRecording,
        recordedBlob,
        recordedUrl,
        durationSeconds,
        isPlaying,
        audioProgress,
        startRecording,
        stopRecording,
        playRecorded,
        pauseRecorded,
        clearRecording
    };
};
