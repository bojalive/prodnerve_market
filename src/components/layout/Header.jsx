import React from 'react';
import { MI } from '../ui';
import { getInitials } from '../../lib/helpers';

export function Header({ portal, subPage, onMobileToggle, onThemeToggle, theme, user, onLogout }) {
  const initials = getInitials(user?.name);

  const breadcrumbs = ['Dashboard'];
  if (portal) breadcrumbs.push(portal.name);
  if (subPage) breadcrumbs.push(subPage);

  return (
    <header style={{
      height: 52,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      background: 'var(--header-blur)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      {/* Left: hamburger + title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button
          className="mob-toggle"
          onClick={onMobileToggle}
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: 32,
            height: 32,
            border: 'none',
            background: 'transparent',
            color: 'var(--text)',
            cursor: 'pointer',
            borderRadius: 6,
          }}
        >
          <MI size={20}>menu</MI>
        </button>
        <span style={{
          fontWeight: 700,
          fontSize: '.88rem',
          color: 'var(--accent)',
          letterSpacing: -.3,
        }}>{import.meta.env.VITE_COMPANY_NAME || `Prod Nerve`}</span>
      </div>

      {/* Center: breadcrumb */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        fontSize: '.74rem',
        color: 'var(--text-mute)',
      }}>
        {breadcrumbs.map((crumb, i) => (
          <React.Fragment key={i}>
            {i > 0 && <MI size={14} style={{ color: 'var(--text-mute)' }}>chevron_right</MI>}
            <span style={{
              color: i === breadcrumbs.length - 1 ? 'var(--text)' : 'var(--text-mute)',
              fontWeight: i === breadcrumbs.length - 1 ? 600 : 400,
            }}>{crumb}</span>
          </React.Fragment>
        ))}
      </div>

      {/* Right: notifications, theme toggle, user avatar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {/* Notification bell */}
        <button
          style={{
            position: 'relative',
            width: 34,
            height: 34,
            border: '1px solid var(--border)',
            borderRadius: 8,
            background: 'var(--surface)',
            color: 'var(--text-dim)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MI size={18}>notifications</MI>
          <span style={{
            position: 'absolute',
            top: -4,
            right: -4,
            width: 16,
            height: 16,
            borderRadius: '50%',
            background: 'var(--red)',
            color: '#fff',
            fontSize: '.56rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>4</span>
        </button>

        {/* Theme toggle */}
        <button
          onClick={onThemeToggle}
          style={{
            width: 34,
            height: 34,
            border: '1px solid var(--border)',
            borderRadius: 8,
            background: 'var(--surface)',
            color: 'var(--text-dim)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MI size={18}>{theme === 'dark' ? 'light_mode' : 'dark_mode'}</MI>
        </button>

        {/* User avatar */}
        <div
          onClick={onLogout}
          title="Click to logout"
          style={{
            width: 34,
            height: 34,
            borderRadius: 8,
            background: 'var(--accent-g)',
            color: '#fff',
            fontSize: '.66rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            letterSpacing: -.2,
          }}
        >
          {initials}
        </div>
      </div>
    </header>
  );
}
