import React from 'react';
import { MI } from '../ui';

export function PortalLayout({ portal, subPages, activeSub, navigate, children }) {
  if (!portal) return null;

  return (
    <div>
      {/* Portal header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 18,
      }}>
        <div style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: `${portal.color}18`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <MI size={22} style={{ color: portal.color }}>{portal.icon}</MI>
        </div>
        <div>
          <h1 style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'var(--text)',
            lineHeight: 1.2,
          }}>{portal.name}</h1>
          <p style={{
            fontSize: '.72rem',
            color: 'var(--text-mute)',
          }}>{portal.desc}</p>
        </div>
      </div>

      {/* Sub-page tabs */}
      {subPages && subPages.length > 0 && (
        <div style={{
          display: 'flex',
          gap: 2,
          marginBottom: 20,
          borderBottom: '1px solid var(--border)',
          overflowX: 'auto',
          paddingBottom: 0,
        }}>
          {subPages.map((sub) => {
            const isActive = activeSub === sub.id;
            return (
              <button
                key={sub.id}
                onClick={() => navigate(`${portal.path}/${sub.id}`)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                  padding: '8px 14px',
                  border: 'none',
                  borderBottom: isActive ? `2px solid ${portal.color}` : '2px solid transparent',
                  borderRadius: 0,
                  cursor: 'pointer',
                  fontSize: '.74rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? portal.color : 'var(--text-dim)',
                  background: 'transparent',
                  whiteSpace: 'nowrap',
                  transition: 'all .15s ease',
                }}
              >
                <MI size={15} style={{ color: isActive ? portal.color : 'var(--text-mute)' }}>
                  {sub.icon}
                </MI>
                {sub.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Content area */}
      <div style={{ animation: 'fadeUp .3s ease' }}>
        {children}
      </div>
    </div>
  );
}
