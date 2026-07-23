/**
 * Web Speech API Text-to-Speech Pronunciation Helper for Flashcards
 */

export function speakText(text: string, accent: 'en-GB' | 'en-US' = 'en-US'): void {
    if (!('speechSynthesis' in window)) {
        console.warn('Speech synthesis is not supported in this browser.');
        return;
    }

    // Cancel ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = accent;
    utterance.rate = 0.9; // Slightly slower for clear pronunciation learning

    // Pick best available voice if possible
    const voices = window.speechSynthesis.getVoices();
    const matchedVoice = voices.find(v => v.lang === accent || v.lang.startsWith(accent.split('-')[0]));
    if (matchedVoice) {
        utterance.voice = matchedVoice;
    }

    window.speechSynthesis.speak(utterance);
}
