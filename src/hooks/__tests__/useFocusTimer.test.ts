import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useFocusTimer } from '../useFocusTimer';

describe('useFocusTimer', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        localStorage.clear();
    });

    afterEach(() => {
        vi.useRealTimers();
        localStorage.clear();
    });

    it('should initialize with default 25 minutes in focus mode', () => {
        const { result } = renderHook(() => useFocusTimer(false));

        expect(result.current.focusState.mode).toBe('focus');
        expect(result.current.focusState.timeLeft).toBe(25 * 60);
        expect(result.current.focusState.isActive).toBe(false);
    });

    it('should start timer', () => {
        const { result } = renderHook(() => useFocusTimer(false));

        act(() => {
            result.current.startTimer();
        });

        expect(result.current.focusState.isActive).toBe(true);
    });

    it('should decrease time when active', () => {
        const { result } = renderHook(() => useFocusTimer(false));

        act(() => {
            result.current.startTimer();
        });

        act(() => {
            vi.advanceTimersByTime(1000);
        });

        expect(result.current.focusState.timeLeft).toBe(25 * 60 - 1);
    });

    it('should pause timer', () => {
        const { result } = renderHook(() => useFocusTimer(false));

        act(() => {
            result.current.startTimer();
        });

        act(() => {
            vi.advanceTimersByTime(5000);
        });

        act(() => {
            result.current.pauseTimer();
        });

        expect(result.current.focusState.isActive).toBe(false);
        expect(result.current.focusState.timeLeft).toBe(25 * 60 - 5);

        // Ensure time doesn't change after pause
        act(() => {
            vi.advanceTimersByTime(5000);
        });
        expect(result.current.focusState.timeLeft).toBe(25 * 60 - 5);
    });

    it('should reset timer', () => {
        const { result } = renderHook(() => useFocusTimer(false));

        act(() => {
            result.current.startTimer();
        });

        act(() => {
            vi.advanceTimersByTime(5000);
        });

        act(() => {
            result.current.resetTimer();
        });

        expect(result.current.focusState.isActive).toBe(false);
        expect(result.current.focusState.timeLeft).toBe(25 * 60);
    });

    it('should switch mode', () => {
        const { result } = renderHook(() => useFocusTimer(false));

        act(() => {
            result.current.switchMode('short_break');
        });

        expect(result.current.focusState.mode).toBe('short_break');
        expect(result.current.focusState.timeLeft).toBe(5 * 60);
        expect(result.current.focusState.isActive).toBe(false);
    });

    it('should complete session when time reaches 0', () => {
        const { result } = renderHook(() => useFocusTimer(false));

        act(() => {
            result.current.startTimer();
        });

        act(() => {
            // Advance full duration 25 mins
            vi.advanceTimersByTime(25 * 60 * 1000);
        });

        act(() => {
            // One more tick to trigger the completion logic strictly
            vi.advanceTimersByTime(1000);
        });

        expect(result.current.focusState.timeLeft).toBe(0);
        expect(result.current.focusState.isActive).toBe(false);
        expect(result.current.focusState.isSessionCompleted).toBe(true);
    });
});
