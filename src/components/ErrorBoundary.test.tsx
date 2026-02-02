import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ErrorBoundary from './ErrorBoundary';

// Component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
    if (shouldThrow) {
        throw new Error('Test error');
    }
    return <div>No error</div>;
};

describe('ErrorBoundary Component', () => {
    // Suppress console.error for these tests
    const originalError = console.error;
    beforeEach(() => {
        console.error = vi.fn();
    });

    afterEach(() => {
        console.error = originalError;
    });

    it('should render children when there is no error', () => {
        render(
            <ErrorBoundary>
                <div>Test content</div>
            </ErrorBoundary>
        );
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('should catch errors and display error UI', () => {
        render(
            <ErrorBoundary>
                <ThrowError shouldThrow={true} />
            </ErrorBoundary>
        );
        expect(screen.getByRole('heading', { name: /Xatolik yuz berdi/i })).toBeInTheDocument();
    });

    it('should display error message in error state', () => {
        render(
            <ErrorBoundary>
                <ThrowError shouldThrow={true} />
            </ErrorBoundary>
        );
        expect(screen.getByText(/Kechirasiz, kutilmagan xatolik yuz berdi/i)).toBeInTheDocument();
    });

    it('should display reload button in error state', () => {
        render(
            <ErrorBoundary>
                <ThrowError shouldThrow={true} />
            </ErrorBoundary>
        );
        const reloadButton = screen.getByRole('button', { name: /Sahifani yangilash/i });
        expect(reloadButton).toBeInTheDocument();
    });

    it('should display technical details section', () => {
        render(
            <ErrorBoundary>
                <ThrowError shouldThrow={true} />
            </ErrorBoundary>
        );
        expect(screen.getByText(/Texnik ma'lumotlar/i)).toBeInTheDocument();
    });

    it('should display the error message in details', () => {
        render(
            <ErrorBoundary>
                <ThrowError shouldThrow={true} />
            </ErrorBoundary>
        );
        expect(screen.getByText(/Error: Test error/i)).toBeInTheDocument();
    });

    it('should log error to console', () => {
        const consoleErrorSpy = vi.spyOn(console, 'error');
        render(
            <ErrorBoundary>
                <ThrowError shouldThrow={true} />
            </ErrorBoundary>
        );
        expect(consoleErrorSpy).toHaveBeenCalled();
    });

    it('should reload page when reload button is clicked', () => {
        // Mock window.location.reload
        const reloadMock = vi.fn();
        Object.defineProperty(window, 'location', {
            value: { reload: reloadMock },
            writable: true
        });

        render(
            <ErrorBoundary>
                <ThrowError shouldThrow={true} />
            </ErrorBoundary>
        );

        const reloadButton = screen.getByRole('button', { name: /Sahifani yangilash/i });
        reloadButton.click();
        expect(reloadMock).toHaveBeenCalled();
    });
});
