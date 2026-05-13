import React from 'react';
import { MI, KpiCard } from '../components/ui';

export default function Dashboard({ portals, navigate, user }) {
  const _mode = import.meta.env.VITE_APP_MODE || 'nervecenter';
  const _kpiMap = {
    qsuite: [
      { label: 'Open NCRs', value: '18', sub: 'Pending disposition', icon: 'report', change: '3 critical', changeType: 'w' },
      { label: 'CAPA Overdue', value: '5', sub: 'Past target date', icon: 'task_alt', change: '-2 this week', changeType: 'up' },
      { label: 'Calibration Due', value: '7', sub: 'Instruments pending', icon: 'straighten', change: '2 overdue', changeType: 'dn' },
      { label: 'Test Certificates', value: '1,248', sub: 'Issued this month', icon: 'workspace_premium', change: '+8.4% vs last month', changeType: 'up' },
    ],
    psuite: [
      { label: 'Active Work Orders', value: '84', sub: 'Across all lines', icon: 'assignment', change: '+12 this week', changeType: 'up' },
      { label: "Today's Output", value: '3,842', sub: 'Units produced', icon: 'output', change: '+6.2% vs target', changeType: 'up' },
      { label: 'OEE', value: '68.4%', sub: 'Plant average', icon: 'speed', change: '-2.1% vs last week', changeType: 'dn' },
      { label: 'Downtime', value: '4.2h', sub: 'Unplanned today', icon: 'timer_off', change: '-18 min vs yesterday', changeType: 'up' },
    ],
    nervecenter: [
      { label: 'Active Work Orders', value: '84', sub: 'Across all lines', icon: 'assignment', change: '+12 this week', changeType: 'up' },
      { label: "Today's Output", value: '3,842', sub: 'Units produced', icon: 'output', change: '+6.2% vs target', changeType: 'up' },
      { label: 'OEE', value: '68.4%', sub: 'Plant average', icon: 'speed', change: '-2.1% vs last week', changeType: 'dn' },
      { label: 'Open NCRs', value: '18', sub: 'Pending disposition', icon: 'report', change: '3 critical', changeType: 'w' },
    ],
  };
  const kpis = _kpiMap[_mode] || _kpiMap.nervecenter;

  return (
    <div style={{ animation: 'fadeUp .4s ease' }}>
      {/* Welcome header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{
          fontSize: '1.4rem',
          fontWeight: 800,
          color: 'var(--text)',
          letterSpacing: -.5,
          marginBottom: 4,
        }}>{import.meta.env.VITE_SUITE_TITLE || `Production Nerve Center`}</h1>
        <p style={{
          fontSize: '.8rem',
          color: 'var(--text-mute)',
        }}>Welcome back, {user?.name?.split(' ')[0] || 'User'}</p>
      </div>

      {/* KPI Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: 14,
        marginBottom: 28,
      }}>
        {kpis.map((kpi, i) => (
          <KpiCard key={i} {...kpi} />
        ))}
      </div>

      {/* Portal tiles section label */}
      <div style={{
        fontSize: '.7rem',
        fontWeight: 600,
        color: 'var(--text-mute)',
        textTransform: 'uppercase',
        letterSpacing: .8,
        marginBottom: 12,
      }}>
        Portal Access
      </div>

      {/* Portal tiles grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 12,
      }}>
        {portals.map((portal) => (
          <div
            key={portal.id}
            className="card"
            onClick={() => navigate(portal.path)}
            style={{
              padding: 16,
              cursor: 'pointer',
              borderLeft: `3px solid ${portal.color}`,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
              transition: 'all .2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = `var(--shadow), 0 4px 12px ${portal.color}15`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow)';
            }}
          >
            <div style={{
              width: 38,
              height: 38,
              borderRadius: 9,
              background: `${portal.color}14`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <MI size={20} style={{ color: portal.color }}>{portal.icon}</MI>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '.82rem',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: 3,
              }}>{portal.name}</div>
              <div style={{
                fontSize: '.7rem',
                color: 'var(--text-mute)',
                lineHeight: 1.4,
              }}>{portal.desc}</div>
            </div>
            <MI size={16} style={{ color: 'var(--text-mute)', marginTop: 2 }}>chevron_right</MI>
          </div>
        ))}
      </div>
    </div>
  );
}
