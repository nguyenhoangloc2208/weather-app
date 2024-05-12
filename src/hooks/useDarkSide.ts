import { useEffect, useState } from 'react';

export default function useDarkSide(): [string, (theme: string) => void, boolean] {
  const [theme, setTheme] = useState<string>(() => localStorage.theme || 'light');
  const [loading, setLoading] = useState<boolean>(true);
  const [initialized, setInitialized] = useState<boolean>(false);
  const colorTheme: string = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root: HTMLElement = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // save theme to local storage
    localStorage.setItem('theme', theme);

    // Khi hiệu ứng phụ này kết thúc, đánh dấu đã khởi tạo hook.
    setInitialized(true);
  }, [theme, colorTheme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme !== theme) {
      setTheme(savedTheme);
    } else {
      setLoading(false);
    }
  }, []);

  return [colorTheme, setTheme, loading && !initialized];
}