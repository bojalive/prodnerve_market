import React from 'react';
import { MI } from './MI';

export function SectionLabel({ icon, children }) {
  return (
    <div style={{
      fontSize: '.86rem', fontWeight: 700, letterSpacing: -.2,
      marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6,
    }}>
      <MI size={18} style={{ color: 'var(--accent)' }}>{icon}</MI>
      {children}
    </div>
  );
}
