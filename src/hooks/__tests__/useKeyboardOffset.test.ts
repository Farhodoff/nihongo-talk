import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { useKeyboardOffset } from '../useKeyboardOffset';

describe('useKeyboardOffset', () => {
  let listeners: Record<string, () => void> = {};
  let mockVisualViewport: any;

  beforeEach(() => {
    listeners = {};
    mockVisualViewport = {
      height: 800,
      addEventListener: vi.fn((event: string, callback: () => void) => {
        listeners[event] = callback;
      }),
      removeEventListener: vi.fn((event: string) => {
        delete listeners[event];
      }),
    };

    Object.defineProperty(window, 'innerHeight', {
      value: 800,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(window, 'visualViewport', {
      value: mockVisualViewport,
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    document.documentElement.style.removeProperty('--keyboard-offset');
  });

  it('initializes with keyboard closed and 0 height', () => {
    const { result } = renderHook(() => useKeyboardOffset());
    expect(result.current.isKeyboardOpen).toBe(false);
    expect(result.current.keyboardHeight).toBe(0);
  });

  it('detects keyboard opening when visualViewport height shrinks', () => {
    const { result } = renderHook(() => useKeyboardOffset());

    // Simulate virtual keyboard opening (screen 800px, viewport shrinks to 500px)
    mockVisualViewport.height = 500;
    act(() => {
      listeners['resize']?.();
    });

    expect(result.current.isKeyboardOpen).toBe(true);
    expect(result.current.keyboardHeight).toBe(300);
    expect(document.documentElement.style.getPropertyValue('--keyboard-offset')).toBe('300px');
  });

  it('detects keyboard closing when visualViewport returns to full height', () => {
    const { result } = renderHook(() => useKeyboardOffset());

    // Open keyboard
    mockVisualViewport.height = 500;
    act(() => {
      listeners['resize']?.();
    });
    expect(result.current.isKeyboardOpen).toBe(true);

    // Close keyboard
    mockVisualViewport.height = 800;
    act(() => {
      listeners['resize']?.();
    });

    expect(result.current.isKeyboardOpen).toBe(false);
    expect(result.current.keyboardHeight).toBe(0);
    expect(document.documentElement.style.getPropertyValue('--keyboard-offset')).toBe('0px');
  });

  it('cleans up event listeners and custom properties on unmount', () => {
    const { unmount } = renderHook(() => useKeyboardOffset());

    // Set a property
    mockVisualViewport.height = 500;
    act(() => {
      listeners['resize']?.();
    });
    expect(document.documentElement.style.getPropertyValue('--keyboard-offset')).toBe('300px');

    unmount();
    expect(mockVisualViewport.removeEventListener).toHaveBeenCalledWith(
      'resize',
      expect.any(Function),
    );
    expect(mockVisualViewport.removeEventListener).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
    );
    expect(document.documentElement.style.getPropertyValue('--keyboard-offset')).toBe('');
  });
});
