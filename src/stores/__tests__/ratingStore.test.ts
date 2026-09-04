import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useRatingModalStore } from '../useRatingModalStore';
import { safeLocalStorage } from '../../utils/storage/safeLocalStorage';

describe('useRatingModalStore', () => {
  beforeEach(() => {
    safeLocalStorage.clear();
    useRatingModalStore.setState({ isOpen: false, isSubmitting: false });
    vi.restoreAllMocks();
  });

  it('initializes with isOpen false', () => {
    expect(useRatingModalStore.getState().isOpen).toBe(false);
  });

  it('openModal opens the modal', () => {
    useRatingModalStore.getState().openModal();
    expect(useRatingModalStore.getState().isOpen).toBe(true);
  });

  it('closeModal closes the modal and records dismissed timestamp', () => {
    useRatingModalStore.getState().openModal();
    expect(useRatingModalStore.getState().isOpen).toBe(true);

    useRatingModalStore.getState().closeModal();
    expect(useRatingModalStore.getState().isOpen).toBe(false);
    expect(safeLocalStorage.getItem('app_rating_dismissed_at')).toBeTruthy();
  });

  it('submits review successfully and saves submitted_at in storage', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: 'Baho qabul qilindi' }),
    });

    const result = await useRatingModalStore.getState().submitReview({
      rating: 5,
      comment: 'Super ilova!',
    });

    expect(result.success).toBe(true);
    expect(safeLocalStorage.getItem('app_rating_submitted_at')).toBeTruthy();
  });

  it('handles submission error gracefully', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Baho noto‘g‘ri' }),
    });

    const result = await useRatingModalStore.getState().submitReview({
      rating: 0,
    });

    expect(result.success).toBe(false);
    expect(result.error).toBe('Baho noto‘g‘ri');
  });
});
