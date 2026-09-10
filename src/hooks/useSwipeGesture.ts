import { useRef, useCallback, useEffect } from 'react';

export interface SwipeCallbacks {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  /** Called during active swipe with normalized delta (-1 to 1) */
  onSwiping?: (deltaX: number, deltaY: number) => void;
  /** Called when swipe ends without reaching threshold */
  onSwipeCancel?: () => void;
}

export interface SwipeConfig {
  /** Minimum horizontal distance in px to trigger a swipe (default: 50) */
  threshold?: number;
  /** Minimum velocity in px/ms to trigger a swipe even below threshold (default: 0.3) */
  velocityThreshold?: number;
  /** Maximum allowed ratio of vertical/horizontal movement to count as horizontal swipe (default: 0.75) */
  directionLock?: number;
  /** Prevent default touchmove to stop scrolling during horizontal swipe (default: true) */
  preventScrollOnSwipe?: boolean;
  /** Whether the gesture is enabled (default: true) */
  enabled?: boolean;
}

interface TouchState {
  startX: number;
  startY: number;
  startTime: number;
  isTracking: boolean;
  isHorizontalLocked: boolean;
}

/**
 * Zero-dependency swipe gesture hook for mobile flashcard interactions.
 * Tracks touch events and calls callbacks when swipe thresholds are met.
 *
 * Usage:
 * ```tsx
 * const swipeRef = useSwipeGesture({
 *   onSwipeLeft: () => console.log('swiped left'),
 *   onSwipeRight: () => console.log('swiped right'),
 *   onSwiping: (dx) => setTranslateX(dx * 200),
 * }, { threshold: 60 });
 *
 * return <div ref={swipeRef}>...</div>;
 * ```
 */
export function useSwipeGesture(callbacks: SwipeCallbacks, config: SwipeConfig = {}) {
  const {
    threshold = 50,
    velocityThreshold = 0.3,
    directionLock = 0.75,
    preventScrollOnSwipe = true,
    enabled = true,
  } = config;

  const elementRef = useRef<HTMLDivElement | null>(null);
  const touchStateRef = useRef<TouchState>({
    startX: 0,
    startY: 0,
    startTime: 0,
    isTracking: false,
    isHorizontalLocked: false,
  });

  // Keep callbacks in refs so we don't need them as effect dependencies
  const callbacksRef = useRef(callbacks);
  callbacksRef.current = callbacks;

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (!enabled) return;
      const touch = e.touches[0];
      if (!touch) return;

      touchStateRef.current = {
        startX: touch.clientX,
        startY: touch.clientY,
        startTime: Date.now(),
        isTracking: true,
        isHorizontalLocked: false,
      };
    },
    [enabled],
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      const state = touchStateRef.current;
      if (!enabled || !state.isTracking) return;

      const touch = e.touches[0];
      if (!touch) return;

      const deltaX = touch.clientX - state.startX;
      const deltaY = touch.clientY - state.startY;
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      // After 10px of movement, decide if this is a horizontal or vertical gesture
      if (!state.isHorizontalLocked && absDeltaX + absDeltaY > 10) {
        if (absDeltaX > absDeltaY * directionLock) {
          state.isHorizontalLocked = true;
        } else {
          // Vertical dominant — stop tracking, let browser scroll
          state.isTracking = false;
          callbacksRef.current.onSwipeCancel?.();
          return;
        }
      }

      if (state.isHorizontalLocked && preventScrollOnSwipe) {
        e.preventDefault();
      }

      // Normalize delta: clamp to [-1, 1] based on threshold * 2
      const maxDrag = threshold * 3;
      const normalizedX = Math.max(-1, Math.min(1, deltaX / maxDrag));
      const normalizedY = Math.max(-1, Math.min(1, deltaY / maxDrag));
      callbacksRef.current.onSwiping?.(normalizedX, normalizedY);
    },
    [enabled, threshold, directionLock, preventScrollOnSwipe],
  );

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      const state = touchStateRef.current;
      if (!enabled || !state.isTracking) return;

      state.isTracking = false;

      const touch = e.changedTouches[0];
      if (!touch) {
        callbacksRef.current.onSwipeCancel?.();
        return;
      }

      const deltaX = touch.clientX - state.startX;
      const deltaY = touch.clientY - state.startY;
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);
      const elapsed = Date.now() - state.startTime;
      const velocity = elapsed > 0 ? absDeltaX / elapsed : 0;

      // Check if swipe meets threshold OR velocity requirement
      const isSwipe = absDeltaX >= threshold || velocity >= velocityThreshold;
      const isHorizontal = absDeltaX > absDeltaY * directionLock;

      if (isSwipe && isHorizontal) {
        if (deltaX < 0) {
          callbacksRef.current.onSwipeLeft?.();
        } else {
          callbacksRef.current.onSwipeRight?.();
        }
      } else if (absDeltaY >= threshold && !isHorizontal) {
        if (deltaY < 0) {
          callbacksRef.current.onSwipeUp?.();
        } else {
          callbacksRef.current.onSwipeDown?.();
        }
      } else {
        callbacksRef.current.onSwipeCancel?.();
      }
    },
    [enabled, threshold, velocityThreshold, directionLock],
  );

  useEffect(() => {
    const el = elementRef.current;
    if (!el || !enabled) return;

    // Use non-passive for touchmove so we can preventDefault horizontal scrolling
    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchmove', handleTouchMove, { passive: false });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });
    el.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    return () => {
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchmove', handleTouchMove);
      el.removeEventListener('touchend', handleTouchEnd);
      el.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [enabled, handleTouchStart, handleTouchMove, handleTouchEnd]);

  return elementRef;
}
