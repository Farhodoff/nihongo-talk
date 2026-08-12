/**
 * Web Speech API Text-to-Speech Pronunciation Helper for Flashcards and AI Coach
 */

export function speakJapaneseText(text: string): void {
    speakText(text, 'ja-JP');
}

export function speakText(text: string, accent: string = 'en-US'): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        console.warn('Speech synthesis is not supported in this browser.');
        return;
    }

    // Cancel ongoing speech
    window.speechSynthesis.cancel();

    // 1. Strip Uzbek translation e.g. "[Xush kelibsiz!]" -> ""
    let cleanText = text.replace(/\[.*?\]/g, '').trim();

    // 2. Strip Romaji annotation in parentheses e.g. "(Irasshaimase!)" -> "" if Japanese characters exist
    const hasJapaneseChars = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uffef\u4e00-\u9faf]/.test(cleanText);
    if (hasJapaneseChars) {
        cleanText = cleanText.replace(/\(.*?\)/g, '').replace(/（.*?）/g, '').trim();
    }

    const textToSpeak = cleanText || text;

    // Auto-detect Japanese characters if accent wasn't explicitly set to Japanese
    const targetLang = (hasJapaneseChars && accent !== 'ja-JP') ? 'ja-JP' : accent;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = targetLang;
    utterance.rate = targetLang.startsWith('ja') ? 0.90 : 0.85; // Natural clear pace
    utterance.pitch = 1.0;

    // Pick best available voice if possible
    const voices = window.speechSynthesis.getVoices();
    if (voices && voices.length > 0) {
        let matchedVoice = voices.find(v => 
            (v.lang === targetLang || v.lang.startsWith('ja')) &&
            (v.name.includes('Google') || v.name.includes('Kyoko') || v.name.includes('Otoya') || v.name.includes('Haruka') || v.name.includes('Hattori'))
        );

        if (!matchedVoice) {
            matchedVoice = voices.find(v => v.lang === targetLang || v.lang.startsWith(targetLang.split('-')[0]));
        }

        if (matchedVoice) {
            utterance.voice = matchedVoice;
        }
    }

    window.speechSynthesis.speak(utterance);
}
