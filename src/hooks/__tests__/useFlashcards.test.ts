import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useFlashcards } from '../useFlashcards';
import { FlashcardService } from '../../services/FlashcardService';
import { safeLocalStorage } from '../../utils/storage/safeLocalStorage';

vi.mock('../../lib/supabase', () => ({
    supabase: {
        auth: {
            getUser: vi.fn().mockResolvedValue({ data: { user: null } }),
            getSession: vi.fn().mockResolvedValue({ data: { session: null } })
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

vi.mock('../../utils/storage/safeLocalStorage', () => ({
    safeLocalStorage: {
        getJSON: vi.fn().mockReturnValue(null),
        setJSON: vi.fn().mockReturnValue(true),
        getItem: vi.fn().mockReturnValue(null),
        setItem: vi.fn().mockReturnValue(true),
        removeItem: vi.fn()
    }
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

describe('useFlashcards BUG #4 regression - Cache isolation', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(safeLocalStorage.getJSON).mockReturnValue(null);
        vi.mocked(FlashcardService.fetchFlashcards).mockResolvedValue([]);
        vi.mocked(FlashcardService.addFlashcard).mockResolvedValue(null);
        vi.mocked(FlashcardService.addFlashcardsBatch).mockResolvedValue([]);
    });

    it('does NOT use hardcoded Superadmin UUID for cache key', () => {
        const { result } = renderHook(() => useFlashcards());
        
        expect(result.current.flashcards).toEqual([]);
        expect(safeLocalStorage.getJSON).toHaveBeenCalledWith('study_planner_user_cache', null);
        expect(safeLocalStorage.getJSON).not.toHaveBeenCalledWith(
            expect.stringContaining('99a2f2c1-3fa0-477e-b73c-2ca6537d1721')
        );
    });

    it('uses dynamic user-based cache key from cached user', async () => {
        vi.mocked(safeLocalStorage.getJSON).mockReturnValue({ id: 'user-123-uuid' });
        vi.mocked(FlashcardService.fetchFlashcards).mockResolvedValue([]);

        renderHook(() => useFlashcards());

        await waitFor(() => {
            expect(safeLocalStorage.getJSON).toHaveBeenCalledWith('study_planner_user_cache', null);
        });

        expect(FlashcardService.fetchFlashcards).not.toHaveBeenCalled();
    });

    it('falls back to guest cache when no user is cached', async () => {
        vi.mocked(safeLocalStorage.getJSON).mockReturnValue(null);

        renderHook(() => useFlashcards());

        await waitFor(() => {
            expect(safeLocalStorage.getJSON).toHaveBeenCalledWith('study_planner_user_cache', null);
        });
    });

    it('handles null/undefined cached user gracefully', async () => {
        vi.mocked(safeLocalStorage.getJSON).mockReturnValue(null);

        renderHook(() => useFlashcards());

        await waitFor(() => {
            expect(safeLocalStorage.getJSON).toHaveBeenCalledWith('study_planner_user_cache', null);
        });
    });
});
