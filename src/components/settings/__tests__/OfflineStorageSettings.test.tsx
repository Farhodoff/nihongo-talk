import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { OfflineStorageSettings } from '../OfflineStorageSettings';
import { OfflineSyncManager } from '../../../services/OfflineSyncManager';
import { toast } from '../../../hooks/use-toast';

vi.mock('../../../context/StudyPlannerContext', () => ({
  useStudyData: () => ({
    user: { id: 'test-user-123' },
  }),
}));

vi.mock('../../../hooks/use-toast', () => ({
  toast: vi.fn(),
}));

vi.mock('../../../services/OfflineSyncManager', () => ({
  OfflineSyncManager: {
    getDiagnostics: vi.fn().mockResolvedValue({
      isOnline: true,
      pendingFlashcards: 2,
      pendingExams: 1,
      pendingSpeaking: 0,
      pendingGamification: 0,
      totalPending: 3,
      cachedFlashcardsCount: 150,
      lastSyncTimestamp: Date.now(),
    }),
    syncAllPending: vi.fn().mockResolvedValue({
      syncedCards: 2,
      syncedExams: 1,
      syncedSpeaking: 0,
      syncedGamification: 0,
      totalSynced: 3,
      totalFailed: 0,
    }),
  },
}));

describe('OfflineStorageSettings Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders offline storage metrics and diagnostics correctly', async () => {
    render(<OfflineStorageSettings />);

    await waitFor(() => {
      expect(screen.getByText('Oflayn Rejim & Kesh Boshqaruvi')).toBeInTheDocument();
      expect(screen.getByText('Tarmoq Ulangan')).toBeInTheDocument();
      expect(screen.getByText('150')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
    });
  });

  it('triggers manual sync and displays success toast', async () => {
    render(<OfflineStorageSettings />);

    const syncBtn = await screen.findByRole('button', { name: /Hozir Sinxronlash/i });
    fireEvent.click(syncBtn);

    await waitFor(() => {
      expect(OfflineSyncManager.syncAllPending).toHaveBeenCalled();
      expect(toast).toHaveBeenCalledWith(
        expect.objectContaining({
          title: expect.stringContaining('Barcha maʼlumotlar sinxronlandi'),
        }),
      );
    });
  });
});
