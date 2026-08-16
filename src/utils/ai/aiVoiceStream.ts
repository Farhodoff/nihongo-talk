/**
 * Low-Latency Voice Streaming Audio Pipeline.
 * Splits incoming AI response text into sentence chunks and queues TTS playback
 * so speech begins immediately as the first sentence arrives instead of waiting
 * for the full AI generation to complete.
 */

export class VoiceStreamQueue {
    private queue: string[] = [];
    private isPlaying: boolean = false;
    private currentUtterance: SpeechSynthesisUtterance | null = null;
    private lang: string = 'en-US';
    private rate: number = 1.0;
    private onStartSpeaking?: () => void;
    private onFinishedSpeaking?: () => void;

    constructor(
        lang: string = 'en-US',
        rate: number = 1.0,
        onStartSpeaking?: () => void,
        onFinishedSpeaking?: () => void
    ) {
        this.lang = lang;
        this.rate = rate;
        this.onStartSpeaking = onStartSpeaking;
        this.onFinishedSpeaking = onFinishedSpeaking;
    }

    /**
     * Splits full text into natural sentence chunks (. ! ? \n)
     */
    public static splitIntoSentences(text: string): string[] {
        if (!text) return [];
        // Split by punctuation while keeping sentences intact
        const raw = text.match(/[^.!?\n]+[.!?\n]+/g) || [text];
        return raw.map(s => s.trim()).filter(s => s.length > 0);
    }

    /**
     * Enqueue a sentence to be spoken sequentially
     */
    public enqueue(sentence: string): void {
        const clean = sentence.trim();
        if (!clean) return;

        this.queue.push(clean);
        if (!this.isPlaying) {
            this.playNext();
        }
    }

    public getCurrentUtterance(): SpeechSynthesisUtterance | null {
        return this.currentUtterance;
    }

    /**
     * Clear the voice queue and stop current speech immediately
     */
    public stop(): void {
        this.queue = [];
        this.isPlaying = false;
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
        this.currentUtterance = null;
        this.onFinishedSpeaking?.();
    }

    private playNext(): void {
        if (this.queue.length === 0) {
            this.isPlaying = false;
            this.onFinishedSpeaking?.();
            return;
        }

        if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
            this.isPlaying = false;
            return;
        }

        const nextText = this.queue.shift()!;
        this.isPlaying = true;
        this.onStartSpeaking?.();

        const utterance = new SpeechSynthesisUtterance(nextText);
        utterance.lang = this.lang;
        utterance.rate = this.rate;

        utterance.onend = () => {
            this.playNext();
        };

        utterance.onerror = (e) => {
            console.warn('[VoiceStreamQueue] Utterance error:', e);
            this.playNext();
        };

        this.currentUtterance = utterance;
        window.speechSynthesis.speak(utterance);
    }
}
