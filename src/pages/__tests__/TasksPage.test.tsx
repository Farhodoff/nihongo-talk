import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../utils/test-utils';
import TasksPage from '../TasksPage';

// Mock Supabase at module level
vi.mock('../../lib/supabase', () => ({
    supabase: {
        auth: {
            getUser: vi.fn(() => Promise.resolve({ data: { user: null }, error: null })),
        },
        from: vi.fn(() => ({
            select: vi.fn(() => ({
                eq: vi.fn(() => ({
                    maybeSingle: vi.fn(() => Promise.resolve({ data: null, error: null })),
                    select: vi.fn(() => Promise.resolve({ data: [], error: null })),
                })),
                maybeSingle: vi.fn(() => Promise.resolve({ data: null, error: null })),
            })),
        })),
    },
}));

describe('TasksPage', () => {
    it('should render without crashing', async () => {
        render(<TasksPage />);

        // Just verify the page renders
        expect(document.body).toBeTruthy();
    });

    it('should have tasks heading', async () => {
        render(<TasksPage />);

        // Check for page title/heading
        const heading = screen.queryByText(/Kunlik Vazifalar/i);
        expect(heading).toBeTruthy();
    });
});
