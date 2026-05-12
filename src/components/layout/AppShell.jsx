import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export function AppShell({ portal, subPage, portals, navigate, user, theme, onThemeToggle, onLogout, children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar
        portals={portals}
        activePortal={portal?.id || null}
        navigate={navigate}
        user={user}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <div
        className="dept-main"
        style={{
          flex: 1,
          marginLeft: 260,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          transition: 'margin-left .25s ease',
        }}
      >
        <Header
          portal={portal}
          subPage={subPage}
          onMobileToggle={() => setMobileOpen(!mobileOpen)}
          onThemeToggle={onThemeToggle}
          theme={theme}
          user={user}
          onLogout={onLogout}
        />

        <main style={{
          flex: 1,
          padding: 20,
          overflowY: 'auto',
        }}>
          {children}
        </main>
      </div>
    </div>
  );
}
