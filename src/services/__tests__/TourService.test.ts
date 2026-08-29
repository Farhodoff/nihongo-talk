import { describe, it, expect } from 'vitest';
import { TourService } from '../TourService';

describe('TourService', () => {
    it('always returns true for isTourCompleted so tours are permanently disabled', async () => {
        expect(await TourService.isTourCompleted('')).toBe(true);
        expect(await TourService.isTourCompleted('user-123')).toBe(true);
        expect(await TourService.isTourCompleted(undefined)).toBe(true);
    });

    it('completeTour and resetTour execute safely as no-ops', async () => {
        await expect(TourService.completeTour('user-123')).resolves.not.toThrow();
        await expect(TourService.resetTour('user-123')).resolves.not.toThrow();
    });
});
