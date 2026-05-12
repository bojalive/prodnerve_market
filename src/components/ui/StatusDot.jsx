import React from 'react';

export function StatusDot({ status }) {
  const c = status === 'good' ? 'var(--green)' : status === 'warning' ? 'var(--amber)' : 'var(--red)';
  return (
    <span style={{
      width: 8, height: 8, borderRadius: '50%', background: c,
      display: 'inline-block', boxShadow: `0 0 6px ${c}`,
    }} />
  );
}
