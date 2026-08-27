import { useState, useCallback, useRef, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Flashcard } from '../types';
import { FlashcardService, setLocalFlashcardCache } from '../services/FlashcardService';
import { calculateReview, Grade } from '../utils/srs';
import { MasteryEngine } from '../services/MasteryEngine';
import { LearningSignalService } from '../services/LearningSignalService';

const getAuthUserId = async (): Promise<string> => {
    try {
        if (typeof supabase?.auth?.getSession === 'function') {
            const { data } = await supabase.auth.getSession();
            if (data?.session?.user?.id) return data.session.user.id;
            return 'local_user';
        }
        if (typeof supabase?.auth?.getUser === 'function') {
            const { data } = await supabase.auth.getUser();
            if (data?.user?.id) return data.user.id;
        }
    } catch {}
    return 'local_user';
};

export const useFlashcards = (onCardReviewed?: (amount: number) => Promise<void>) => {
    const onCardReviewedRef = useRef(onCardReviewed);
    useEffect(() => {
        onCardReviewedRef.current = onCardReviewed;
    }, [onCardReviewed]);

    const [flashcards, setFlashcards] = useState<Flashcard[]>(() => {
        try {
            const userKey = 'study_planner_flashcards_cache_99a2f2c1-3fa0-477e-b73c-2ca6537d1721';
            const rawUser = localStorage.getItem(userKey);
            if (rawUser) {
                const parsed = JSON.parse(rawUser);
                if (Array.isArray(parsed) && parsed.length > 0) return parsed;
            }
            const rawGeneric = localStorage.getItem('study_planner_flashcards_cache_guest');
            if (rawGeneric) {
                const parsed = JSON.parse(rawGeneric);
                if (Array.isArray(parsed) && parsed.length > 0) return parsed;
            }
        } catch {}
        return [];
    });

    const addFlashcard = useCallback(async (cardData: Partial<Flashcard>) => {
        const activeUserId = await getAuthUserId();

        const newCard = await FlashcardService.addFlashcard(activeUserId, cardData);
        if (newCard) {
            setFlashcards(prev => {
                if (prev.some(c => c.id === newCard.id)) return prev;
                const updated = [...prev, newCard];
                setLocalFlashcardCache(activeUserId, updated);
                return updated;
            });
        }
        return newCard;
    }, []);

    const addFlashcardsBatch = useCallback(async (cardsData: Partial<Flashcard>[]) => {
        const activeUserId = await getAuthUserId();

        // 1. Deduplicate incoming cards by front text
        const uniqueIncoming = cardsData.filter((card, idx, self) =>
            card.front && idx === self.findIndex(c => c.front?.trim().toLowerCase() === card.front?.trim().toLowerCase())
        );

        // 2. Deduplicate against already existing flashcards in state/cache
        const existingFronts = new Set(flashcards.map(c => c.front.trim().toLowerCase()));
        const trulyNewCards = uniqueIncoming.filter(c => c.front && !existingFronts.has(c.front.trim().toLowerCase()));

        if (trulyNewCards.length === 0) {
            return [];
        }

        let fallbackSubjectId: string | null = null;
        if (activeUserId !== 'local_user') {
            const { data: subjectsData } = await supabase.from('subjects').select('id, name').eq('user_id', activeUserId).limit(1);
            fallbackSubjectId = subjectsData && subjectsData.length > 0 ? subjectsData[0].id : null;
        }

        const normalizedCards = trulyNewCards.map(c => ({
            ...c,
            subjectId: c.subjectId || fallbackSubjectId || undefined
        }));

        const newCards = await FlashcardService.addFlashcardsBatch(activeUserId, normalizedCards);
        if (newCards.length > 0) {
            setFlashcards(prev => {
                const existingIds = new Set(prev.map(c => c.id));
                const filteredNew = newCards.filter(c => !existingIds.has(c.id));
                const updated = [...prev, ...filteredNew];
                setLocalFlashcardCache(activeUserId, updated);
                return updated;
            });
        }
        return newCards;
    }, [flashcards]);

    const updateFlashcard = useCallback(async (id: string, updates: Partial<Flashcard>) => {
        setFlashcards(prev => {
            const updated = prev.map(c => c.id === id ? { ...c, ...updates } : c);
            getAuthUserId().then((userId) => {
                setLocalFlashcardCache(userId, updated);
            });
            return updated;
        });
        try {
            await FlashcardService.updateFlashcard(id, updates);
        } catch (error) {
            console.error("Failed to update flashcard:", error);
        }
    }, []);

    const deleteFlashcard = useCallback(async (id: string, permanent = false) => {
        setFlashcards(prev => {
            const updated = prev.filter(c => c.id !== id);
            getAuthUserId().then((userId) => {
                setLocalFlashcardCache(userId, updated);
            });
            return updated;
        });
        try {
            await FlashcardService.deleteFlashcard(id, permanent);
        } catch (error) {
            console.error("Failed to delete flashcard:", error);
        }
    }, []);

    const restoreFlashcard = useCallback(async (id: string) => {
        try {
            await FlashcardService.restoreFlashcard(id);
            const userId = await getAuthUserId();
            if (userId !== 'local_user') {
                const updatedCards = await FlashcardService.fetchFlashcards(userId);
                setFlashcards(updatedCards);
            }
        } catch (error) {
            console.error("Failed to restore flashcard:", error);
        }
    }, []);

    const reviewFlashcard = useCallback(async (id: string, rating: number, card?: Flashcard) => {
        setFlashcards(prev => {
            const targetCard = card || prev.find(c => c.id === id);
            const reviewResult = calculateReview(
                rating as Grade,
                targetCard?.interval || 0,
                targetCard?.repetitions || 0,
                targetCard?.easeFactor || 2.5
            );

            const updates: Partial<Flashcard> = {
                easeFactor: reviewResult.easeFactor,
                interval: reviewResult.interval,
                repetitions: reviewResult.repetitions,
                nextReviewDate: reviewResult.nextReviewDate,
            };

            // Detect card language dynamically
            const isJa = /[\u3040-\u30ff\u4e00-\u9faf]/.test((targetCard?.front || '') + (targetCard?.back || ''));
            const language = isJa ? 'ja' : 'en';

            // Detect Kanji vs Vocabulary for Japanese
            let skill: import('../types/mastery').MasterySkill = 'vocabulary';
            if (isJa) {
                const frontText = targetCard?.front || '';
                const hasKanji = /[\u4e00-\u9faf]/.test(frontText);
                if (hasKanji && (frontText.trim().length <= 2 || targetCard?.subjectId?.includes('kanji') || (targetCard as any)?.skill === 'kanji' || targetCard?.back?.includes('KUN') || targetCard?.back?.includes('ON') || targetCard?.back?.includes('Onyomi'))) {
                    skill = 'kanji';
                }
            }

            const updatedCards = prev.map(c => c.id === id ? { ...c, ...updates } : c);

            getAuthUserId().then((activeUserId) => {
                // Update local cache synchronously with latest updatedCards
                setLocalFlashcardCache(activeUserId, updatedCards);

                // Record evidence in MasteryEngine
                const score = rating === 3 ? 100 : rating === 2 ? 80 : rating === 1 ? 60 : 0;
                MasteryEngine.recordEvent(activeUserId, language, {
                    id: `srs_ev_${id}_${Date.now()}_${rating}`,
                    activityType: 'srs_review',
                    skill,
                    score,
                    accuracy: score,
                    attempts: 1,
                    timestamp: new Date().toISOString(),
                    details: `Flashcard review: ${targetCard?.front || ''}`,
                    source: 'srs'
                });

                // Record signal if incorrect (Again rating)
                if (rating === 0) {
                    LearningSignalService.recordSignal({
                        id: 'sig_' + Math.random().toString(36).substring(2, 11) + Date.now().toString(36),
                        type: 'incorrect_answer',
                        language,
                        lessonId: 'srs_review',
                        userId: activeUserId,
                        timestamp: new Date().toISOString(),
                        stepId: 'srs',
                        questionId: id,
                        prompt: targetCard?.front || '',
                        userAnswer: 'again',
                        expectedAnswer: targetCard?.back || '',
                        attemptCount: 1,
                        skill
                    }).catch(() => {});
                }
            }).catch(() => {});

            FlashcardService.updateFlashcard(id, updates).catch(e => {
                console.error("Failed to review flashcard:", e);
            });

            if (onCardReviewedRef.current) {
                onCardReviewedRef.current(rating * 2);
            }

            return updatedCards;
        });
    }, []);

    const importFlashcards = useCallback(async (subjectId: string, cards: { front: string; back: string; example?: string }[]) => {
        const userId = await getAuthUserId();
        if (userId === 'local_user') return false;

        const importedCards = await FlashcardService.importFlashcards(userId, subjectId, cards);
        if (importedCards && importedCards.length > 0) {
            setFlashcards(prev => {
                const existingIds = new Set(prev.map(c => c.id));
                const filteredNew = importedCards.filter(c => !existingIds.has(c.id));
                return [...prev, ...filteredNew];
            });
            return true;
        }
        return false;
    }, []);

    const setFlashcardsState = useCallback((value: React.SetStateAction<Flashcard[]>) => {
        setFlashcards(value);
    }, []);

    return {
        flashcards,
        setFlashcards: setFlashcardsState,
        addFlashcard,
        addFlashcardsBatch,
        updateFlashcard,
        deleteFlashcard,
        restoreFlashcard,
        reviewFlashcard,
        importFlashcards
    };
};
