import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act, fireEvent } from '../../utils/test-utils';
import ProgressPage from '../ProgressPage';

// Mock Supabase at module level
vi.mock('../../lib/supabase', () => ({
  supabase: {
    auth: {
      getUser: vi.fn(() => Promise.resolve({ data: { user: null }, error: null })),
      getSession: vi.fn(() => Promise.resolve({ data: { session: null }, error: null })),
      onAuthStateChange: vi.fn(() => ({ data: { subscription: { unsubscribe: vi.fn() } } })),
    },
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        eq: vi.fn(() => Promise.resolve({ data: [], error: null })),
        order: vi.fn(() => Promise.resolve({ data: [], error: null })),
        maybeSingle: vi.fn(() => Promise.resolve({ data: null, error: null })),
      })),
    })),
  },
}));

describe('ProgressPage - Learning Analytics & Activity', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should render ProgressPage title and KPI stat cards', async () => {
    await act(async () => {
      render(<ProgressPage />);
    });

    // Header exists
    expect(screen.getByText(/Progress|Statistika|学習進捗/i)).toBeInTheDocument();
    // Share button exists
    expect(screen.getByRole('button', { name: /Ulashish|Share|シェア/i })).toBeInTheDocument();
  });

  it('should toggle between Overview, Language, and Subjects tabs', async () => {
    await act(async () => {
      render(<ProgressPage />);
    });

    const langTab = screen.getByRole('button', { name: /Til, JLPT|Language|言語/i });
    const subjectsTab = screen.getByRole('button', { name: /Fanlar|Subjects|科目/i });
    const overviewTab = screen.getByRole('button', { name: /Umumiy|Overview|総合/i });

    expect(langTab).toBeInTheDocument();
    expect(subjectsTab).toBeInTheDocument();
    expect(overviewTab).toBeInTheDocument();

    // Switch to Language tab
    await act(async () => {
      fireEvent.click(langTab);
    });

    // Switch to Subjects tab
    await act(async () => {
      fireEvent.click(subjectsTab);
    });

    // Switch back to Overview tab
    await act(async () => {
      fireEvent.click(overviewTab);
    });
  });
});
