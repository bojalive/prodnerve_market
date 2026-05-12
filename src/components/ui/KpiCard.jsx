import React from 'react';
import { MI } from './MI';

export function KpiCard({ label, value, sub, change, changeType, icon, iconType }) {
  const colors = { up: 'var(--green)', dn: 'var(--red)', w: 'var(--amber)' };
  const bgs = { up: 'var(--green10)', dn: 'var(--red10)', w: 'var(--amber10)' };
  const arrows = { up: 'north', dn: 'south', w: 'north' };
  const ct = iconType || changeType;
  return (
    <div className="card" style={{ padding: 16, position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
        <span style={{ fontSize: '.7rem', fontWeight: 500, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: .5 }}>{label}</span>
        <div style={{
          width: 30, height: 30, borderRadius: 6,
          background: bgs[ct] || 'var(--accent10)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <MI size={16} style={{ color: colors[ct] || 'var(--accent)' }}>{icon}</MI>
        </div>
      </div>
      <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: -.8, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '.7rem', color: 'var(--text-mute)', marginTop: 3 }}>{sub}</div>
      {change && (
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 2, marginTop: 8,
          fontSize: '.66rem', fontWeight: 600, padding: '2px 7px', borderRadius: 10,
          background: bgs[changeType], color: colors[changeType],
        }}>
          <MI size={12}>{arrows[changeType]}</MI>{change}
        </div>
      )}
    </div>
  );
}
