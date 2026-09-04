import { useState, useEffect, useCallback, useMemo } from 'react';
import type { TelegramWebApp, TelegramWebAppUser } from '../types/telegram-webapp';

export interface UseTelegramWebAppReturn {
  isTwa: boolean;
  webApp: TelegramWebApp | null;
  user: TelegramWebAppUser | null;
  initData: string;
  colorScheme: 'dark' | 'light';
  themeParams: Record<string, string | undefined>;
  haptics: {
    impact: (style?: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void;
    notification: (type: 'error' | 'success' | 'warning') => void;
    selection: () => void;
  };
  closeApp: () => void;
  openTelegramLink: (url: string) => void;
}

export function useTelegramWebApp(): UseTelegramWebAppReturn {
  const [webApp, setWebApp] = useState<TelegramWebApp | null>(null);
  const [isTwa, setIsTwa] = useState(false);
  const [colorScheme, setColorScheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const tg = typeof window !== 'undefined' ? window.Telegram?.WebApp : undefined;

    if (tg && (tg.initData || window.location.search.includes('twa=true'))) {
      setWebApp(tg);
      setIsTwa(true);

      // Tell Telegram the web app is ready and expanded
      try {
        tg.ready();
        tg.expand();
      } catch (err) {
        console.warn('Telegram WebApp expand/ready warning:', err);
      }

      // Sync color scheme
      const scheme = tg.colorScheme === 'light' ? 'light' : 'dark';
      setColorScheme(scheme);
      if (scheme === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }

      // Listen to theme change
      const handleThemeChange = () => {
        if (tg.colorScheme) {
          setColorScheme(tg.colorScheme);
          if (tg.colorScheme === 'light') {
            document.documentElement.classList.remove('dark');
          } else {
            document.documentElement.classList.add('dark');
          }
        }
      };

      try {
        tg.onEvent('themeChanged', handleThemeChange);
      } catch {}

      return () => {
        try {
          tg.offEvent('themeChanged', handleThemeChange);
        } catch {}
      };
    } else {
      // Check query param simulation (e.g. for development or testing)
      if (typeof window !== 'undefined' && window.location.search.includes('twa=true')) {
        setIsTwa(true);
      }
    }
  }, []);

  const user = useMemo<TelegramWebAppUser | null>(() => {
    if (webApp?.initDataUnsafe?.user) {
      return webApp.initDataUnsafe.user;
    }
    return null;
  }, [webApp]);

  const initData = webApp?.initData || '';

  const haptics = useMemo(
    () => ({
      impact: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft' = 'medium') => {
        try {
          if (webApp?.HapticFeedback) {
            webApp.HapticFeedback.impactOccurred(style);
          } else if ('vibrate' in navigator) {
            navigator.vibrate(20);
          }
        } catch {}
      },
      notification: (type: 'error' | 'success' | 'warning') => {
        try {
          if (webApp?.HapticFeedback) {
            webApp.HapticFeedback.notificationOccurred(type);
          } else if ('vibrate' in navigator) {
            navigator.vibrate(type === 'error' ? [30, 50, 30] : [20, 20]);
          }
        } catch {}
      },
      selection: () => {
        try {
          if (webApp?.HapticFeedback) {
            webApp.HapticFeedback.selectionChanged();
          } else if ('vibrate' in navigator) {
            navigator.vibrate(10);
          }
        } catch {}
      },
    }),
    [webApp],
  );

  const closeApp = useCallback(() => {
    if (webApp) {
      webApp.close();
    }
  }, [webApp]);

  const openTelegramLink = useCallback(
    (url: string) => {
      if (webApp?.openTelegramLink) {
        webApp.openTelegramLink(url);
      } else {
        window.open(url, '_blank');
      }
    },
    [webApp],
  );

  return {
    isTwa,
    webApp,
    user,
    initData,
    colorScheme,
    themeParams: (webApp?.themeParams as Record<string, string>) || {},
    haptics,
    closeApp,
    openTelegramLink,
  };
}
