/**
 * Web Speech API Text-to-Speech Pronunciation Helper for Flashcards and AI Coach
 */

import { cleanJapaneseTTS } from './ai/aiCoach';

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

    const hasJapaneseChars = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uffef\u4e00-\u9faf]/.test(text) || accent === 'ja-JP';
    const textToSpeak = hasJapaneseChars ? cleanJapaneseTTS(text) : text.replace(/[*_#`~]/g, '').trim();

    if (!textToSpeak) return;

    // Auto-detect Japanese characters if accent wasn't explicitly set to Japanese
    const targetLang = hasJapaneseChars ? 'ja-JP' : accent;

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
