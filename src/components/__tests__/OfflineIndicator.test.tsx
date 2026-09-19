import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import OfflineIndicator from '../OfflineIndicator';
import { OfflineSyncManager } from '../../services/OfflineSyncManager';

vi.mock('../../hooks/use-toast', () => ({
  toast: vi.fn(),
}));

vi.mock('../../services/OfflineSyncManager', () => ({
  OfflineSyncManager: {
    getOverallPendingCount: vi.fn(),
    syncAllPending: vi.fn(),
  },
}));

describe('OfflineIndicator Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders nothing when online and 0 pending items', async () => {
    Object.defineProperty(navigator, 'onLine', { value: true, configurable: true });
    vi.mocked(OfflineSyncManager.getOverallPendingCount).mockResolvedValue(0);

    const { container } = render(<OfflineIndicator />);

    await waitFor(() => {
      expect(container.firstChild).toBeNull();
    });
  });

  it('renders pending sync banner when online with pending items', async () => {
    Object.defineProperty(navigator, 'onLine', { value: true, configurable: true });
    vi.mocked(OfflineSyncManager.getOverallPendingCount).mockResolvedValue(5);
    vi.mocked(OfflineSyncManager.syncAllPending).mockResolvedValue({
      syncedCards: 5,
      syncedExams: 0,
      syncedSpeaking: 0,
      syncedGamification: 0,
      totalSynced: 5,
      totalFailed: 0,
    });

    render(<OfflineIndicator />);

    expect(await screen.findByText("5 ta o'zgarish sinxronlanishni kutmoqda")).toBeInTheDocument();

    const syncBtn = screen.getByRole('button', { name: 'Sinxronlash' });
    fireEvent.click(syncBtn);

    await waitFor(() => {
      expect(OfflineSyncManager.syncAllPending).toHaveBeenCalled();
    });
  });

  it('renders offline warning when browser is offline', async () => {
    Object.defineProperty(navigator, 'onLine', { value: false, configurable: true });
    vi.mocked(OfflineSyncManager.getOverallPendingCount).mockResolvedValue(2);

    render(<OfflineIndicator />);

    expect(await screen.findByText(/Oflayn rejim/i)).toBeInTheDocument();
    expect(screen.getByText("2 ta o'zgarish kutmoqda")).toBeInTheDocument();
  });
});
