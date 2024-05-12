import { useEffect, useState } from 'react';

export default function useDarkSide(): [string, (theme: string) => void, boolean] {
  const [theme, setTheme] = useState<string>(() => localStorage.theme || 'dark');
  const [loading, setLoading] = useState<boolean>(true);
  const colorTheme: string = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme !== theme) {
      setTheme(savedTheme);
    } else {
      setLoading(false);
    }

    const root: HTMLElement = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // save theme to local storage
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme, loading];
}
