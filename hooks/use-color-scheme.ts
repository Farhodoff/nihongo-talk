import { useEffect, useState } from 'react';

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  useEffect(() => {
    const matcher = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = ({ matches }: MediaQueryListEvent) => {
      setColorScheme(matches ? 'dark' : 'light');
    };
    matcher.addEventListener('change', onChange);
    return () => matcher.removeEventListener('change', onChange);
  }, []);

  return colorScheme;
}
