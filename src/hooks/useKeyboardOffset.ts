import { useEffect, useState } from 'react';

export interface KeyboardOffsetInfo {
  isKeyboardOpen: boolean;
  keyboardHeight: number;
}

/**
 * Hook to track mobile virtual keyboard presence and height using the Visual Viewport API.
 * Sets the CSS variable `--keyboard-offset` on :root for responsive layout adjustment.
 */
export function useKeyboardOffset(): KeyboardOffsetInfo {
  const [keyboardInfo, setKeyboardInfo] = useState<KeyboardOffsetInfo>({
    isKeyboardOpen: false,
    keyboardHeight: 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.visualViewport) {
      return;
    }

    const vv = window.visualViewport;

    const handleResize = () => {
      // Threshold of 100px prevents false positives from browser address bar collapsing/expanding
      const offset = Math.max(0, window.innerHeight - vv.height);
      const isOpen = offset > 100;
      const height = isOpen ? offset : 0;

      setKeyboardInfo({
        isKeyboardOpen: isOpen,
        keyboardHeight: height,
      });

      document.documentElement.style.setProperty('--keyboard-offset', `${height}px`);
    };

    vv.addEventListener('resize', handleResize);
    vv.addEventListener('scroll', handleResize);

    return () => {
      vv.removeEventListener('resize', handleResize);
      vv.removeEventListener('scroll', handleResize);
      document.documentElement.style.removeProperty('--keyboard-offset');
    };
  }, []);

  return keyboardInfo;
}
