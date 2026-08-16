import { useState, useEffect, useCallback } from 'react';
import { ChatMessage, chatWithAI } from '../utils/ai';
import { safeStorage } from '../utils/safeStorage';
import { Subject } from '../types';

export interface UseAIAssistantProps {
    subjects: Subject[];
    notes: any[];
    awardXP: (amount: number, reason: string) => void;
}

export const useAIAssistant = ({
    subjects,
    notes,
    awardXP
}: UseAIAssistantProps) => {
    const CHAT_STORAGE_KEY = 'study_planner_ai_chat_history';

    const defaultWelcome: ChatMessage = {
        role: 'model',
        text: "Salom! Men sizning AI yordamchingizman. Qaysi fan bo'yicha savollaringiz bor yoki qanday yordam bera olaman?"
    };

    const [messages, setMessages] = useState<ChatMessage[]>(() => {
        const saved = safeStorage.getItem<ChatMessage[]>(CHAT_STORAGE_KEY);
        if (Array.isArray(saved) && saved.length > 0) return saved;
        return [defaultWelcome];
    });

    const [inputValue, setInputValue] = useState('');
    const [isChatLoading, setIsChatLoading] = useState(false);
    const [selectedSubjectId, setSelectedSubjectId] = useState<string>('');

    // Save messages
    useEffect(() => {
        safeStorage.setItem(CHAT_STORAGE_KEY, messages.slice(-50));
    }, [messages]);

    const handleSendMessage = useCallback(async () => {
        if (!inputValue.trim() || isChatLoading) return;
        const userMsg = inputValue.trim();
        setInputValue('');

        const newHistory: ChatMessage[] = [...messages, { role: 'user', text: userMsg }];
        setMessages(newHistory);
        setIsChatLoading(true);

        const currentSubject = subjects.find(s => s.id === selectedSubjectId);
        const relatedNotes = notes.filter(n => n.subject_id === selectedSubjectId);

        try {
            const reply = await chatWithAI(
                userMsg,
                messages,
                currentSubject?.name || '',
                relatedNotes.map(n => n.content).join('\n\n')
            );
            setMessages(prev => [...prev, { role: 'model', text: reply }]);
            awardXP(5, "AI bilan muloqot");
        } catch (err) {
            console.error("AI Chat error:", err);
            setMessages(prev => [...prev, {
                role: 'model',
                text: "Kechirasiz, javob olishda xatolik yuz berdi. Iltimos qayta urinib ko'ring."
            }]);
        } finally {
            setIsChatLoading(false);
        }
    }, [inputValue, isChatLoading, messages, selectedSubjectId, subjects, notes, awardXP]);

    const clearChat = useCallback(() => {
        setMessages([defaultWelcome]);
        safeStorage.removeItem(CHAT_STORAGE_KEY);
    }, [defaultWelcome]);

    return {
        messages,
        setMessages,
        inputValue,
        setInputValue,
        isChatLoading,
        selectedSubjectId,
        setSelectedSubjectId,
        handleSendMessage,
        clearChat
    };
};
