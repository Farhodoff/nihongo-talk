import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TasksPage from '../TasksPage';

// Mock Supabase at module level
vi.mock('../../lib/supabase', () => ({
    supabase: {
        auth: {
            getUser: vi.fn(() => Promise.resolve({ data: { user: null }, error: null })),
        },
        from: vi.fn(() => ({
            select: vi.fn(() => ({
                eq: vi.fn(() => Promise.resolve({ data: [], error: null })),
            })),
        })),
    },
}));

// Simple wrapper for routing
function TestWrapper({ children }: { children: React.ReactNode }) {
    return <BrowserRouter>{children}</BrowserRouter>;
}

describe('TasksPage', () => {
    it('should render without crashing', () => {
        render(
            <TestWrapper>
                <TasksPage />
            </TestWrapper>
        );

        // Just verify the page renders
        expect(document.body).toBeTruthy();
    });

    it('should have tasks heading', () => {
        render(
            <TestWrapper>
                <TasksPage />
            </TestWrapper>
        );

        // Check for page title/heading
        const heading = screen.queryByRole('heading');
        expect(heading).toBeTruthy();
    });
});
