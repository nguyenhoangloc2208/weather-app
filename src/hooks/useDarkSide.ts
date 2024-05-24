import { useEffect, useState } from 'react';

export function useDarkSide(): [string, (theme: string) => void, boolean] {
  const [theme, setTheme] = useState<string>(() => localStorage.getItem('theme') || 'light');
  const [loading, setLoading] = useState<boolean>(true);
  const colorTheme: string = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root: HTMLElement = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    setLoading(false);
  }, [theme, colorTheme]);

  const mutateTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return [colorTheme, mutateTheme, loading];
}
