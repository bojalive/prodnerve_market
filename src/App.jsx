import React, { lazy, Suspense } from 'react';
import { useTheme } from './hooks/useTheme';
import { useRouter } from './hooks/useRouter';
import { AuthProvider, useAuthContext } from './contexts/AuthContext';
import { PORTALS, ACTIVE_PORTALS, PORTAL_SUBS } from './data/portals';
import { AppShell } from './components/layout/AppShell';
import { PortalLayout } from './components/layout/PortalLayout';
import { LoginPage } from './components/auth/LoginPage';
import Dashboard from './pages/Dashboard';
import { MI } from './components/ui';

// Import all portal index pages
import ProductionOrders from './pages/production-orders/index';
import ShopFloor from './pages/shop-floor/index';
import QualityPortal from './pages/quality/index';
import CNCMachining from './pages/cnc-machining/index';
import AssemblyPortal from './pages/assembly/index';
import PaintCoating from './pages/paint-coating/index';
import WeldingPortal from './pages/welding/index';
import TestingPortal from './pages/testing/index';
import MaintenancePortal from './pages/maintenance/index';
import MaterialWIP from './pages/material-wip/index';
import ShiftMgmt from './pages/shift-mgmt/index';
import ReportsPortal from './pages/reports/index';
import AdminPortal from './pages/admin/index';

// Map of portal id -> component
const PORTAL_PAGES = {
  'production-orders': ProductionOrders,
  'shop-floor': ShopFloor,
  'quality': QualityPortal,
  'cnc-machining': CNCMachining,
  'assembly': AssemblyPortal,
  'paint-coating': PaintCoating,
  'welding': WeldingPortal,
  'testing': TestingPortal,
  'maintenance': MaintenancePortal,
  'material-wip': MaterialWIP,
  'shift-mgmt': ShiftMgmt,
  'reports': ReportsPortal,
  'admin': AdminPortal,
};

// Placeholder for portals without index files yet
function PortalPlaceholder({ portal, sub }) {
  return (
    <div className="card" style={{
      padding: 40,
      textAlign: 'center',
      animation: 'fadeUp .3s ease',
    }}>
      <div style={{
        width: 56,
        height: 56,
        borderRadius: 14,
        background: `${portal.color}14`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14,
      }}>
        <MI size={28} style={{ color: portal.color }}>{portal.icon}</MI>
      </div>
      <h2 style={{
        fontSize: '1rem',
        fontWeight: 700,
        color: 'var(--text)',
        marginBottom: 6,
      }}>{portal.name}</h2>
      <p style={{
        fontSize: '.78rem',
        color: 'var(--text-mute)',
        marginBottom: 4,
      }}>{portal.desc}</p>
      {sub && (
        <p style={{
          fontSize: '.72rem',
          color: 'var(--text-dim)',
          marginTop: 8,
        }}>
          Sub-page: <strong>{sub}</strong>
        </p>
      )}
      <p style={{
        fontSize: '.7rem',
        color: 'var(--text-mute)',
        marginTop: 12,
        fontStyle: 'italic',
      }}>Module under development</p>
    </div>
  );
}

function AppInner() {
  const [theme, toggleTheme] = useTheme();
  const { portal: portalId, page, entityId, navigate } = useRouter();
  const { user, login, logout, loading } = useAuthContext();

  // Show loading while checking auth
  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg)',
      }}>
        <MI size={24} style={{ color: 'var(--accent)', animation: 'pulse 1s infinite' }}>hourglass_empty</MI>
      </div>
    );
  }

  // Not logged in -> Login page
  if (!user) {
    return <LoginPage onLogin={login} />;
  }

  // Resolve current portal object
  const currentPortal = portalId ? PORTALS.find(p => p.path === portalId || p.id === portalId) : null;
  const subPages = currentPortal ? (PORTAL_SUBS[currentPortal.id] || []) : [];
  const activeSub = page || (currentPortal?.defaultSub) || (subPages[0]?.id) || null;

  // Find active sub-page label for breadcrumb
  const activeSubObj = subPages.find(s => s.id === activeSub);
  const subPageLabel = activeSubObj?.label || null;

  // Render portal content
  const renderPortalContent = () => {
    if (!currentPortal) return null;

    const PortalPage = PORTAL_PAGES[currentPortal.id];
    if (PortalPage) {
      // Each portal index receives { sub, page, navigate, entityId }
      return <PortalPage sub={activeSub} page={activeSub} navigate={navigate} entityId={entityId} />;
    }

    return <PortalPlaceholder portal={currentPortal} sub={activeSub} />;
  };

  return (
    <AppShell
      portal={currentPortal}
      subPage={subPageLabel}
      portals={ACTIVE_PORTALS}
      navigate={navigate}
      user={user}
      theme={theme}
      onThemeToggle={toggleTheme}
      onLogout={logout}
    >
      {!currentPortal ? (
        // Dashboard view
        <Dashboard portals={ACTIVE_PORTALS} navigate={navigate} user={user} />
      ) : (
        // Portal view with sub-page layout
        <PortalLayout
          portal={currentPortal}
          subPages={subPages}
          activeSub={activeSub}
          navigate={navigate}
        >
          {renderPortalContent()}
        </PortalLayout>
      )}
    </AppShell>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  );
}
