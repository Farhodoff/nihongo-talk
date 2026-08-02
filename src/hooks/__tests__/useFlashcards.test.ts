import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useFlashcards } from '../useFlashcards';
import { FlashcardService } from '../../services/FlashcardService';

vi.mock('../../lib/supabase', () => ({
    supabase: {
        auth: {
            getUser: vi.fn().mockResolvedValue({ data: { user: { id: 'test_user_id' } } })
        }
    }
}));

vi.mock('../../services/FlashcardService', () => ({
    FlashcardService: {
        updateFlashcard: vi.fn().mockResolvedValue(undefined),
        addFlashcard: vi.fn(),
        addFlashcardsBatch: vi.fn(),
        deleteFlashcard: vi.fn(),
        restoreFlashcard: vi.fn(),
        fetchFlashcards: vi.fn(),
        importFlashcards: vi.fn(),
    },
    setLocalFlashcardCache: vi.fn(),
    getLocalFlashcardCache: vi.fn().mockReturnValue([]),
}));

describe('useFlashcards SRS calculation and persistence', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('passes calculateReview SM-2 results (easeFactor, interval, repetitions, nextReviewDate) to updateFlashcard', async () => {
        const { result } = renderHook(() => useFlashcards());
        const card = {
            id: 'card-1',
            subjectId: 'subj-1',
            front: 'Front',
            back: 'Back',
            nextReviewDate: new Date().toISOString(),
            easeFactor: 2.5,
            interval: 1,
            repetitions: 1,
        };

        act(() => {
            result.current.setFlashcards([card as any]);
        });

        await act(async () => {
            await result.current.reviewFlashcard('card-1', 2, card as any); // GOOD rating
        });

        expect(FlashcardService.updateFlashcard).toHaveBeenCalledWith(
            'card-1',
            expect.objectContaining({
                easeFactor: expect.any(Number),
                interval: expect.any(Number),
                repetitions: expect.any(Number),
                nextReviewDate: expect.any(String)
            })
        );

        const updates = vi.mocked(FlashcardService.updateFlashcard).mock.calls[0][1];
        expect(updates.easeFactor).toBeDefined();
        expect(updates.interval).toBeGreaterThan(0);
        expect(updates.repetitions).toBe(2);
        expect(new Date(updates.nextReviewDate!).getTime()).toBeGreaterThan(Date.now());
    });
});
