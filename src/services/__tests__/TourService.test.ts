import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TourService } from '../TourService';
import { supabase } from '../../lib/supabase';
import { safeLocalStorage } from '../../utils/storage/safeLocalStorage';

vi.mock('../../lib/supabase', () => ({
    supabase: {
        from: vi.fn()
    }
}));

describe('TourService', () => {
    const mockUserId = 'user-123-uuid';

    beforeEach(() => {
        vi.clearAllMocks();
        safeLocalStorage.clear();
    });

    it('returns true if userId is empty', async () => {
        const result = await TourService.isTourCompleted('');
        expect(result).toBe(true);
    });

    it('returns true when database profile has tour_completed = true', async () => {
        const mockMaybeSingle = vi.fn().mockResolvedValue({
            data: { tour_completed: true },
            error: null
        });
        const mockEq = vi.fn().mockReturnValue({ maybeSingle: mockMaybeSingle });
        const mockSelect = vi.fn().mockReturnValue({ eq: mockEq });
        vi.mocked(supabase.from).mockReturnValue({ select: mockSelect } as any);

        const result = await TourService.isTourCompleted(mockUserId);
        expect(result).toBe(true);
        expect(supabase.from).toHaveBeenCalledWith('profiles');
        expect(mockSelect).toHaveBeenCalledWith('tour_completed');
        expect(mockEq).toHaveBeenCalledWith('id', mockUserId);
        expect(safeLocalStorage.getItem(`study_planner_tour_completed_${mockUserId}`)).toBe('true');
    });

    it('returns false when database profile has tour_completed = false', async () => {
        const mockMaybeSingle = vi.fn().mockResolvedValue({
            data: { tour_completed: false },
            error: null
        });
        const mockEq = vi.fn().mockReturnValue({ maybeSingle: mockMaybeSingle });
        const mockSelect = vi.fn().mockReturnValue({ eq: mockEq });
        vi.mocked(supabase.from).mockReturnValue({ select: mockSelect } as any);

        const result = await TourService.isTourCompleted(mockUserId);
        expect(result).toBe(false);
        expect(safeLocalStorage.getItem(`study_planner_tour_completed_${mockUserId}`)).toBe('false');
    });

    it('handles database error by falling back to cache or default true without crashing', async () => {
        const mockMaybeSingle = vi.fn().mockResolvedValue({
            data: null,
            error: { message: 'Database connection timeout' }
        });
        const mockEq = vi.fn().mockReturnValue({ maybeSingle: mockMaybeSingle });
        const mockSelect = vi.fn().mockReturnValue({ eq: mockEq });
        vi.mocked(supabase.from).mockReturnValue({ select: mockSelect } as any);

        // Without cache -> returns true to prevent disruption
        const result = await TourService.isTourCompleted(mockUserId);
        expect(result).toBe(true);

        // With cached false -> returns cached false
        safeLocalStorage.setItem(`study_planner_tour_completed_${mockUserId}`, 'false');
        const cachedResult = await TourService.isTourCompleted(mockUserId);
        expect(cachedResult).toBe(false);
    });

    it('completeTour updates Supabase profiles and local cache', async () => {
        const mockEq = vi.fn().mockResolvedValue({ error: null });
        const mockUpdate = vi.fn().mockReturnValue({ eq: mockEq });
        vi.mocked(supabase.from).mockReturnValue({ update: mockUpdate } as any);

        await TourService.completeTour(mockUserId);

        expect(supabase.from).toHaveBeenCalledWith('profiles');
        expect(mockUpdate).toHaveBeenCalledWith(
            expect.objectContaining({
                tour_completed: true,
                updated_at: expect.any(String)
            })
        );
        expect(mockEq).toHaveBeenCalledWith('id', mockUserId);
        expect(safeLocalStorage.getItem(`study_planner_tour_completed_${mockUserId}`)).toBe('true');
        expect(safeLocalStorage.getItem('onboarding_completed')).toBe('true');
    });

    it('resetTour updates Supabase profiles and clears local cache', async () => {
        safeLocalStorage.setItem(`study_planner_tour_completed_${mockUserId}`, 'true');
        safeLocalStorage.setItem('onboarding_completed', 'true');

        const mockEq = vi.fn().mockResolvedValue({ error: null });
        const mockUpdate = vi.fn().mockReturnValue({ eq: mockEq });
        vi.mocked(supabase.from).mockReturnValue({ update: mockUpdate } as any);

        await TourService.resetTour(mockUserId);

        expect(supabase.from).toHaveBeenCalledWith('profiles');
        expect(mockUpdate).toHaveBeenCalledWith(
            expect.objectContaining({
                tour_completed: false,
                updated_at: expect.any(String)
            })
        );
        expect(mockEq).toHaveBeenCalledWith('id', mockUserId);
        expect(safeLocalStorage.getItem(`study_planner_tour_completed_${mockUserId}`)).toBeNull();
        expect(safeLocalStorage.getItem('onboarding_completed')).toBeNull();
    });
});
