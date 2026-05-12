import React, { useEffect } from 'react';
import { MI } from './MI';

const TYPE_CONFIG = {
  success: { icon: 'check_circle', color: 'var(--green)', bg: 'var(--green10)' },
  error:   { icon: 'error',        color: 'var(--red)',   bg: 'var(--red10)' },
  warning: { icon: 'warning',      color: 'var(--amber)', bg: 'var(--amber10)' },
  info:    { icon: 'info',         color: 'var(--accent)', bg: 'var(--accent10)' },
};

export function Toast({ message, type = 'info', visible, onClose, duration = 3500 }) {
  useEffect(() => {
    if (visible && onClose) {
      const t = setTimeout(onClose, duration);
      return () => clearTimeout(t);
    }
  }, [visible, onClose, duration]);

  if (!visible) return null;

  const cfg = TYPE_CONFIG[type] || TYPE_CONFIG.info;

  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 2000,
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '12px 18px',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 10,
      boxShadow: '0 8px 30px rgba(0,0,0,0.18)',
      animation: 'fadeUp .25s ease',
      maxWidth: 380,
    }}>
      <div style={{
        width: 28, height: 28, borderRadius: 6,
        background: cfg.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <MI size={16} style={{ color: cfg.color }}>{cfg.icon}</MI>
      </div>
      <span style={{ fontSize: '.8rem', color: 'var(--text)', flex: 1 }}>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            color: 'var(--text-mute)', padding: 2, display: 'flex',
          }}
        >
          <MI size={14}>close</MI>
        </button>
      )}
    </div>
  );
}
