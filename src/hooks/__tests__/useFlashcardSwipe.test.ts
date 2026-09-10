import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useFlashcardSwipe } from '../useFlashcardSwipe';

describe('useFlashcardSwipe Hook', () => {
  it('calls onFlip on a tap / click with minimal movement', () => {
    const onFlip = vi.fn();
    const onSwipeLeft = vi.fn();
    const onSwipeRight = vi.fn();

    const { result } = renderHook(() =>
      useFlashcardSwipe({
        isFlipped: false,
        onFlip,
        onSwipeLeft,
        onSwipeRight,
      }),
    );

    act(() => {
      result.current.handlers.onTouchStart({
        touches: [{ clientX: 100, clientY: 100 }],
        target: document.createElement('div'),
      } as any);
    });

    expect(result.current.isDragging).toBe(true);

    act(() => {
      result.current.handlers.onTouchEnd();
    });

    expect(result.current.isDragging).toBe(false);
    expect(onFlip).toHaveBeenCalledTimes(1);
    expect(onSwipeLeft).not.toHaveBeenCalled();
    expect(onSwipeRight).not.toHaveBeenCalled();
  });

  it('calls onSwipeLeft when swiped left past threshold on flipped card', () => {
    const onFlip = vi.fn();
    const onSwipeLeft = vi.fn();
    const onSwipeRight = vi.fn();
    const onHapticThreshold = vi.fn();

    const { result } = renderHook(() =>
      useFlashcardSwipe({
        isFlipped: true,
        onFlip,
        onSwipeLeft,
        onSwipeRight,
        threshold: 75,
        onHapticThreshold,
      }),
    );

    act(() => {
      result.current.handlers.onTouchStart({
        touches: [{ clientX: 200, clientY: 100 }],
        target: document.createElement('div'),
      } as any);
    });

    act(() => {
      result.current.handlers.onTouchMove({
        touches: [{ clientX: 110, clientY: 100 }], // deltaX = -90 (past -75 threshold)
      } as any);
    });

    expect(result.current.isPastThreshold).toBe(true);
    expect(result.current.swipeDirection).toBe('left');
    expect(onHapticThreshold).toHaveBeenCalledTimes(1);

    act(() => {
      result.current.handlers.onTouchEnd();
    });

    expect(onSwipeLeft).toHaveBeenCalledTimes(1);
    expect(onSwipeRight).not.toHaveBeenCalled();
    expect(onFlip).not.toHaveBeenCalled();
  });

  it('calls onSwipeRight when swiped right past threshold on flipped card', () => {
    const onFlip = vi.fn();
    const onSwipeLeft = vi.fn();
    const onSwipeRight = vi.fn();

    const { result } = renderHook(() =>
      useFlashcardSwipe({
        isFlipped: true,
        onFlip,
        onSwipeLeft,
        onSwipeRight,
        threshold: 75,
      }),
    );

    act(() => {
      result.current.handlers.onTouchStart({
        touches: [{ clientX: 100, clientY: 100 }],
        target: document.createElement('div'),
      } as any);
    });

    act(() => {
      result.current.handlers.onTouchMove({
        touches: [{ clientX: 190, clientY: 100 }], // deltaX = +90
      } as any);
    });

    expect(result.current.isPastThreshold).toBe(true);
    expect(result.current.swipeDirection).toBe('right');

    act(() => {
      result.current.handlers.onTouchEnd();
    });

    expect(onSwipeRight).toHaveBeenCalledTimes(1);
    expect(onSwipeLeft).not.toHaveBeenCalled();
  });

  it('flips card when swiped on unflipped card to reveal answer', () => {
    const onFlip = vi.fn();
    const onSwipeLeft = vi.fn();
    const onSwipeRight = vi.fn();

    const { result } = renderHook(() =>
      useFlashcardSwipe({
        isFlipped: false,
        onFlip,
        onSwipeLeft,
        onSwipeRight,
        threshold: 75,
      }),
    );

    act(() => {
      result.current.handlers.onTouchStart({
        touches: [{ clientX: 100, clientY: 100 }],
        target: document.createElement('div'),
      } as any);
    });

    act(() => {
      result.current.handlers.onTouchMove({
        touches: [{ clientX: 190, clientY: 100 }],
      } as any);
    });

    act(() => {
      result.current.handlers.onTouchEnd();
    });

    expect(onFlip).toHaveBeenCalledTimes(1);
    expect(onSwipeLeft).not.toHaveBeenCalled();
    expect(onSwipeRight).not.toHaveBeenCalled();
  });

  it('ignores swipe start when target is inside a button', () => {
    const onFlip = vi.fn();
    const { result } = renderHook(() =>
      useFlashcardSwipe({
        isFlipped: false,
        onFlip,
      }),
    );

    const button = document.createElement('button');
    act(() => {
      result.current.handlers.onTouchStart({
        touches: [{ clientX: 100, clientY: 100 }],
        target: button,
      } as any);
    });

    expect(result.current.isDragging).toBe(false);
  });
});
