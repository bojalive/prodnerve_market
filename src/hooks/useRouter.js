import { useState, useEffect, useCallback } from 'react';

export function useRouter() {
  const [hash, setHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handler = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const parts = hash.replace('#/', '').split('/').filter(Boolean);

  const navigate = useCallback((path) => {
    window.location.hash = '#/' + path;
  }, []);

  return {
    portal: parts[0] || null,     // e.g. 'production-orders'
    page: parts[1] || null,       // e.g. 'new' or 'list'
    entityId: parts[2] || null,   // e.g. '42'
    navigate,
  };
}
