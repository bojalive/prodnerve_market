import React from 'react';
import { MI } from '../ui';
import { getInitials } from '../../lib/helpers';

export function Sidebar({ portals, activePortal, navigate, user, mobileOpen, onClose }) {
  const initials = getInitials(user?.name);

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
            zIndex: 199,
          }}
        />
      )}

      <aside
        className={`dept-sidebar${mobileOpen ? ' open' : ''}`}
        style={{
          width: 260,
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 200,
          background: 'var(--surface)',
          borderRight: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform .25s ease',
          overflowY: 'auto',
        }}
      >
        {/* Logo area */}
        <div style={{
          padding: '16px 18px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 9,
            background: 'var(--accent-g)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span style={{
              fontSize: '.82rem',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: -1,
            }}>{import.meta.env.VITE_COMPANY_SHORT || `PN`}</span>
          </div>
          <div>
            <div style={{
              fontSize: '.82rem',
              fontWeight: 700,
              color: 'var(--text)',
              lineHeight: 1.2,
            }}>{import.meta.env.VITE_COMPANY_NAME || `Prod Nerve`}</div>
            <div style={{
              fontSize: '.62rem',
              color: 'var(--text-mute)',
              letterSpacing: .3,
            }}>Manufacturing Control</div>
          </div>
        </div>

        {/* Dashboard link */}
        <div style={{ padding: '10px 12px 4px' }}>
          <button
            onClick={() => { navigate(''); onClose?.(); }}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 10px',
              border: 'none',
              borderRadius: 7,
              cursor: 'pointer',
              fontSize: '.76rem',
              fontWeight: 600,
              color: !activePortal ? 'var(--accent)' : 'var(--text-dim)',
              background: !activePortal ? 'var(--accent10)' : 'transparent',
              transition: 'all .15s ease',
            }}
          >
            <MI size={18}>dashboard</MI>
            Dashboard
          </button>
        </div>

        {/* Section label */}
        <div style={{
          padding: '12px 18px 4px',
          fontSize: '.62rem',
          fontWeight: 600,
          color: 'var(--text-mute)',
          textTransform: 'uppercase',
          letterSpacing: .8,
        }}>
          Portals
        </div>

        {/* Portal links */}
        <nav style={{ flex: 1, padding: '0 12px 12px', overflowY: 'auto' }}>
          {portals.map((p) => {
            const isActive = activePortal === p.id;
            return (
              <button
                key={p.id}
                onClick={() => { navigate(p.path); onClose?.(); }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '7px 10px',
                  margin: '1px 0',
                  border: 'none',
                  borderRadius: 7,
                  cursor: 'pointer',
                  fontSize: '.74rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? p.color : 'var(--text-dim)',
                  background: isActive ? `${p.color}12` : 'transparent',
                  textAlign: 'left',
                  transition: 'all .15s ease',
                }}
              >
                <MI size={17} style={{ color: isActive ? p.color : 'var(--text-mute)' }}>
                  {p.icon}
                </MI>
                {p.name}
              </button>
            );
          })}
        </nav>

        {/* User info at bottom */}
        <div style={{
          padding: '12px 18px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}>
          <div style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: 'var(--accent-g)',
            color: '#fff',
            fontSize: '.62rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            {initials}
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div style={{
              fontSize: '.74rem',
              fontWeight: 600,
              color: 'var(--text)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>{user?.name || 'User'}</div>
            <div style={{
              fontSize: '.62rem',
              color: 'var(--text-mute)',
            }}>{user?.role?.replace(/_/g, ' ') || 'Viewer'}</div>
          </div>
        </div>
      </aside>
    </>
  );
}
