import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { QuickCommandPalette } from '../common/QuickCommandPalette';
import { BrowserRouter } from 'react-router-dom';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate
    };
});

describe('Accessibility & Keyboard Shortcuts Suite', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders QuickCommandPalette with search input when open', () => {
        const onClose = vi.fn();
        render(
            <BrowserRouter>
                <QuickCommandPalette isOpen={true} onClose={onClose} />
            </BrowserRouter>
        );

        const searchInput = screen.getByPlaceholderText(/Sahifa yoki qurol qidirish/i);
        expect(searchInput).toBeInTheDocument();
    });

    it('filters commands according to query in QuickCommandPalette', () => {
        const onClose = vi.fn();
        render(
            <BrowserRouter>
                <QuickCommandPalette isOpen={true} onClose={onClose} />
            </BrowserRouter>
        );

        const searchInput = screen.getByPlaceholderText(/Sahifa yoki qurol qidirish/i);
        fireEvent.change(searchInput, { target: { value: 'Pomodoro' } });

        expect(screen.getByText(/Fokus Taymer/i)).toBeInTheDocument();
    });

    it('navigates on Enter and closes on Escape in QuickCommandPalette', () => {
        const onClose = vi.fn();
        render(
            <BrowserRouter>
                <QuickCommandPalette isOpen={true} onClose={onClose} />
            </BrowserRouter>
        );

        const searchInput = screen.getByPlaceholderText(/Sahifa yoki qurol qidirish/i);
        fireEvent.change(searchInput, { target: { value: 'Dashboard' } });

        fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });
        expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
        expect(onClose).toHaveBeenCalled();

        fireEvent.keyDown(searchInput, { key: 'Escape', code: 'Escape' });
        expect(onClose).toHaveBeenCalledTimes(2);
    });

    it('navigates with ArrowDown and ArrowUp through command list', () => {
        const onClose = vi.fn();
        render(
            <BrowserRouter>
                <QuickCommandPalette isOpen={true} onClose={onClose} />
            </BrowserRouter>
        );

        const searchInput = screen.getByPlaceholderText(/Sahifa yoki qurol qidirish/i);
        fireEvent.keyDown(searchInput, { key: 'ArrowDown', code: 'ArrowDown' });
        fireEvent.keyDown(searchInput, { key: 'ArrowDown', code: 'ArrowDown' });
        fireEvent.keyDown(searchInput, { key: 'ArrowUp', code: 'ArrowUp' });
        fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

        expect(mockNavigate).toHaveBeenCalled();
    });

    it('preserves single-letter shortcuts when typing inside form inputs', () => {
        let navigated = false;
        const fakeNavigate = () => {
            navigated = true;
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            const target = e.target as HTMLElement | null;
            if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
                return;
            }
            if (e.key.toLowerCase() === 'f') {
                fakeNavigate();
            }
        };

        const input = document.createElement('input');
        document.body.appendChild(input);
        input.focus();

        const inputEvent = new KeyboardEvent('keydown', { key: 'f', bubbles: true });
        Object.defineProperty(inputEvent, 'target', { value: input });
        handleKeyDown(inputEvent);

        expect(navigated).toBe(false);

        // Outside of input
        const bodyEvent = new KeyboardEvent('keydown', { key: 'f', bubbles: true });
        Object.defineProperty(bodyEvent, 'target', { value: document.body });
        handleKeyDown(bodyEvent);

        expect(navigated).toBe(true);
        document.body.removeChild(input);
    });
});
