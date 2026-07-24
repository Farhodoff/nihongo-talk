export class AudioVAD {
    private audioCtx: AudioContext | null = null;
    private analyser: AnalyserNode | null = null;
    private microphone: MediaStreamAudioSourceNode | null = null;
    private stream: MediaStream | null = null;
    private animFrameId: number | null = null;
    private silenceTimer: any = null;
    private isSpeaking: boolean = false;

    private onSpeechStart?: () => void;
    private onSpeechEnd?: () => void;
    private onVolumeChange?: (volume: number) => void;

    private silenceDurationMs = 3000;

    constructor(options?: {
        onSpeechStart?: () => void;
        onSpeechEnd?: () => void;
        onVolumeChange?: (volume: number) => void;
        silenceDurationMs?: number;
    }) {
        if (options) {
            this.onSpeechStart = options.onSpeechStart;
            this.onSpeechEnd = options.onSpeechEnd;
            this.onVolumeChange = options.onVolumeChange;
            if (options.silenceDurationMs) this.silenceDurationMs = options.silenceDurationMs;
        }
    }

    async start(): Promise<boolean> {
        try {
            this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            this.audioCtx = new AudioContextClass();
            this.analyser = this.audioCtx.createAnalyser();
            this.analyser.fftSize = 512;
            this.analyser.smoothingTimeConstant = 0.8;

            this.microphone = this.audioCtx.createMediaStreamSource(this.stream);
            this.microphone.connect(this.analyser);

            this.monitor();
            return true;
        } catch (err) {
            console.error("VAD initialization failed:", err);
            return false;
        }
    }

    private monitor = () => {
        if (!this.analyser) return;

        const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
        this.analyser.getByteFrequencyData(dataArray);

        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i];
        }
        const average = sum / dataArray.length;
        const normalizedVolume = Math.min(1, average / 128); // 0.0 to 1.0

        if (this.onVolumeChange) {
            this.onVolumeChange(normalizedVolume);
        }

        // Voice Threshold check
        if (normalizedVolume > 0.12) {
            if (!this.isSpeaking) {
                this.isSpeaking = true;
                if (this.onSpeechStart) this.onSpeechStart();
            }

            if (this.silenceTimer) {
                clearTimeout(this.silenceTimer);
                this.silenceTimer = null;
            }
        } else if (this.isSpeaking && !this.silenceTimer) {
            this.silenceTimer = setTimeout(() => {
                this.isSpeaking = false;
                if (this.onSpeechEnd) this.onSpeechEnd();
                this.silenceTimer = null;
            }, this.silenceDurationMs);
        }

        this.animFrameId = requestAnimationFrame(this.monitor);
    };

    stop() {
        if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
        if (this.silenceTimer) clearTimeout(this.silenceTimer);
        if (this.microphone) this.microphone.disconnect();
        if (this.audioCtx) this.audioCtx.close();
        if (this.stream) this.stream.getTracks().forEach(t => t.stop());

        this.audioCtx = null;
        this.analyser = null;
        this.microphone = null;
        this.stream = null;
        this.isSpeaking = false;
    }
}
