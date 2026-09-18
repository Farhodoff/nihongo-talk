import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AdminFlashcardManager } from '../AdminFlashcardManager';
import { GlobalFlashcardOverrideService } from '../../../services/GlobalFlashcardOverrideService';

const mockToast = vi.fn();
vi.mock('../../../hooks/use-toast', () => ({
  toast: (args: any) => mockToast(args),
}));

vi.mock('../../../context/StudyPlannerContext', () => ({
  useStudyData: () => ({
    user: { id: 'admin-1', email: 'fsoyilov@gmail.com' },
    flashcards: [
      {
        id: 'fc-1',
        front: '車',
        back: 'Mashina',
        phonetic: 'くるま',
        example: '車を運転します。',
      },
    ],
    updateFlashcard: vi.fn().mockResolvedValue(true),
    deleteFlashcard: vi.fn().mockResolvedValue(true),
    createFlashcard: vi.fn().mockResolvedValue(true),
    subjects: [{ id: 's1', name: 'JLPT N5' }],
  }),
}));

vi.mock('../../../lib/supabase', () => ({
  supabase: {
    auth: {
      getSession: vi.fn().mockResolvedValue({
        data: { session: { access_token: 'fake-admin-token' } },
      }),
    },
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        order: vi.fn(() => Promise.resolve({ data: [], error: null })),
      })),
      upsert: vi.fn().mockResolvedValue({ error: null }),
      delete: vi.fn(() => ({
        eq: vi.fn().mockResolvedValue({ error: null }),
      })),
    })),
  },
}));

describe('AdminFlashcardManager Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    GlobalFlashcardOverrideService.clearPendingQueue();
  });

  it('renders modal when isOpen is true and displays header and tabs', () => {
    render(<AdminFlashcardManager isOpen={true} onClose={vi.fn()} />);

    expect(screen.getByText(/ADMIN FLASHCARD HUB/i)).toBeInTheDocument();
    expect(screen.getByText(/Global So'zlar & Tuzatishlar/i)).toBeInTheDocument();
  });

  it('displays JSON sync and add buttons on the overrides tab', async () => {
    await GlobalFlashcardOverrideService.saveGlobalOverride(
      {
        word: '猫',
        front: '猫',
        back: 'Mushuk',
        phonetic: 'ねこ',
      },
      'fsoyilov@gmail.com',
    );

    render(<AdminFlashcardManager isOpen={true} onClose={vi.fn()} />);

    expect(screen.getByText(/JSON Fayllarni Yangilash/i)).toBeInTheDocument();
    expect(screen.getByText(/Yangi So'z \/ Tuzatish Qo'shish/i)).toBeInTheDocument();
    expect(screen.getByText('猫')).toBeInTheDocument();
  });

  it('triggers JSON sync API call when clicking JSON Fayllarni Yangilash', async () => {
    await GlobalFlashcardOverrideService.saveGlobalOverride(
      {
        word: '犬',
        front: '犬',
        back: 'It',
        phonetic: 'いぬ',
      },
      'fsoyilov@gmail.com',
    );

    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    );

    render(<AdminFlashcardManager isOpen={true} onClose={vi.fn()} />);

    const syncBtn = screen.getByText(/JSON Fayllarni Yangilash/i);
    fireEvent.click(syncBtn);

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledWith(
        '/api/admin/update-deck-card',
        expect.objectContaining({
          method: 'POST',
        }),
      );
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({
          title: '✅ JSON Fayllar Yangilandi',
        }),
      );
    });
  });
});
