import { renderHook, act } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { useTelegramWebApp } from '../useTelegramWebApp';

describe('useTelegramWebApp Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    delete (window as any).Telegram;
  });

  it('returns default fallback state when not running in Telegram', () => {
    const { result } = renderHook(() => useTelegramWebApp());

    expect(result.current.isTwa).toBe(false);
    expect(result.current.user).toBeNull();
    expect(result.current.webApp).toBeNull();
    expect(result.current.initData).toBe('');
  });

  it('detects Telegram WebApp environment and extracts user and theme', () => {
    const mockReady = vi.fn();
    const mockExpand = vi.fn();
    const mockOnEvent = vi.fn();
    const mockOffEvent = vi.fn();
    const mockImpact = vi.fn();

    (window as any).Telegram = {
      WebApp: {
        initData: 'query_id=AA&user=%7B%22id%22%3A12345%2C%22first_name%22%3A%22Farhod%22%7D',
        initDataUnsafe: {
          user: {
            id: 12345,
            first_name: 'Farhod',
            username: 'farhod_dev',
          },
        },
        colorScheme: 'dark',
        themeParams: {
          bg_color: '#18222d',
          text_color: '#ffffff',
        },
        ready: mockReady,
        expand: mockExpand,
        onEvent: mockOnEvent,
        offEvent: mockOffEvent,
        HapticFeedback: {
          impactOccurred: mockImpact,
          notificationOccurred: vi.fn(),
          selectionChanged: vi.fn(),
        },
      },
    };

    const { result } = renderHook(() => useTelegramWebApp());

    expect(result.current.isTwa).toBe(true);
    expect(result.current.user?.id).toBe(12345);
    expect(result.current.user?.first_name).toBe('Farhod');
    expect(mockReady).toHaveBeenCalled();
    expect(mockExpand).toHaveBeenCalled();

    act(() => {
      result.current.haptics.impact('heavy');
    });

    expect(mockImpact).toHaveBeenCalledWith('heavy');
  });
});
