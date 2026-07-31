/**
 * Web Speech API Text-to-Speech Pronunciation Helper for Flashcards
 */

export function speakText(text: string, accent: string = 'en-US'): void {
    if (!('speechSynthesis' in window)) {
        console.warn('Speech synthesis is not supported in this browser.');
        return;
    }

    // Cancel ongoing speech
    window.speechSynthesis.cancel();

    // Strip bracket furigana readings e.g. "漢字[かんじ]" -> "漢字" for speech synthesis
    const cleanText = text.replace(/\[.*?\]/g, '').trim();
    const textToSpeak = cleanText || text;

    // Auto-detect Japanese characters if accent wasn't explicitly set to Japanese
    const hasJapaneseChars = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uffef\u4e00-\u9faf]/.test(textToSpeak);
    const targetLang = (hasJapaneseChars && accent !== 'ja-JP') ? 'ja-JP' : accent;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = targetLang;
    utterance.rate = 0.85; // Slightly slower for clear pronunciation learning

    // Pick best available voice if possible
    const voices = window.speechSynthesis.getVoices();
    const matchedVoice = voices.find(v => v.lang === targetLang || v.lang.startsWith(targetLang.split('-')[0]));
    if (matchedVoice) {
        utterance.voice = matchedVoice;
    }

    window.speechSynthesis.speak(utterance);
}
