/**
 * TourService
 * Permanently disabled onboarding tour system per user request.
 * All tour status checks return true so tours never display.
 */

export class TourService {
    static async isTourCompleted(_userId?: string): Promise<boolean> {
        return true;
    }

    static async completeTour(_userId?: string): Promise<void> {
        // No-op
    }

    static async resetTour(_userId?: string): Promise<void> {
        // No-op
    }
}
