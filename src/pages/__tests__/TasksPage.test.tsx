import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '../../utils/test-utils';
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
    it('should render task page title and task creation form', async () => {
        await act(async () => {
            render(<TasksPage />);
        });

        expect(screen.getByRole('heading', { level: 2, name: /Kunlik Vazifalar/i })).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Yangi vazifa qo'shish.../i)).toBeInTheDocument();
    });

    it('should render view mode selection buttons', async () => {
        await act(async () => {
            render(<TasksPage />);
        });

        expect(screen.getByRole('button', { name: /Ro'yxat/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Doska/i })).toBeInTheDocument();
    });
});

