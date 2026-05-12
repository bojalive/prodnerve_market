import { useState, useEffect, useCallback } from 'react';

const MOCK_USER = {
  id: 1,
  name: import.meta.env.VITE_DEFAULT_USER_NAME || 'Demo User',
  email: import.meta.env.VITE_DEFAULT_USER_EMAIL || 'demo@example.com',
  role: 'super_admin',
  plant: import.meta.env.VITE_PLANT_CITY || 'Plant A',
};

const STORAGE_KEY = 'pn_auth';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch {}
    setLoading(false);
  }, []);

  const login = useCallback((email, password) => {
    // Mock auth: accept any credentials, return mock user
    const u = { ...MOCK_USER, email };
    setUser(u);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(u)); } catch {}
    return u;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }, []);

  return {
    user,
    login,
    logout,
    loading,
  };
}
