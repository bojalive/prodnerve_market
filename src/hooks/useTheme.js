import { useState, useEffect, useCallback } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('pn_theme') || 'light'; } catch { return 'light'; }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('pn_theme', theme); } catch {}
  }, [theme]);

  const toggle = useCallback(() => setTheme(t => t === 'light' ? 'dark' : 'light'), []);

  return [theme, toggle];
}
