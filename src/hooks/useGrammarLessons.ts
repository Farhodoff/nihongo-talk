import { useState, useEffect, useCallback } from 'react';
import { GrammarService } from '../services/GrammarService';
import { IeltsGrammarTopic } from '../data/ielts/ielts_grammar_data';

export const useGrammarLessons = (language: string = 'en') => {
    const [topics, setTopics] = useState<IeltsGrammarTopic[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const loadLessons = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const list = await GrammarService.fetchLessons(language);
            setTopics(list);
        } catch (err: any) {
            console.error('Error in useGrammarLessons hook:', err);
            setError(err?.message || "Grammatika darslarini yuklashda xatolik yuz berdi.");
        } finally {
            setIsLoading(false);
        }
    }, [language]);

    useEffect(() => {
        loadLessons();
    }, [loadLessons]);

    return {
        topics,
        isLoading,
        error,
        refetch: loadLessons
    };
};
