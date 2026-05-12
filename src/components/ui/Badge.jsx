import React from 'react';

const BADGE_STYLES = {
  approved:    { bg: 'var(--green10)', color: 'var(--green)' },
  active:      { bg: 'var(--green10)', color: 'var(--green)' },
  completed:   { bg: 'var(--green10)', color: 'var(--green)' },
  passed:      { bg: 'var(--green10)', color: 'var(--green)' },
  pending:     { bg: 'var(--amber10)', color: 'var(--amber)' },
  in_progress: { bg: 'var(--amber10)', color: 'var(--amber)' },
  review:      { bg: 'var(--amber10)', color: 'var(--amber)' },
  hold:        { bg: 'var(--amber10)', color: 'var(--amber)' },
  rejected:    { bg: 'var(--red10)',   color: 'var(--red)' },
  failed:      { bg: 'var(--red10)',   color: 'var(--red)' },
  overdue:     { bg: 'var(--red10)',   color: 'var(--red)' },
  draft:       { bg: 'var(--accent10)', color: 'var(--text-mute)' },
  closed:      { bg: 'var(--accent10)', color: 'var(--text-mute)' },
  cancelled:   { bg: 'var(--accent10)', color: 'var(--text-mute)' },
};

export function Badge({ status, label }) {
  const st = BADGE_STYLES[status] || { bg: 'var(--accent10)', color: 'var(--text-dim)' };
  const displayText = label || (status || '').replace(/_/g, ' ');
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '2px 8px', fontSize: '.66rem', fontWeight: 600,
      borderRadius: 10, textTransform: 'capitalize', letterSpacing: .3,
      background: st.bg, color: st.color,
    }}>
      {displayText}
    </span>
  );
}
