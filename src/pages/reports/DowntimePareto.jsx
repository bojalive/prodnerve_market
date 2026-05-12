import React from 'react';
import { KpiCard, SectionLabel, DataTable } from '../../components/ui';

const PARETO_DATA = [
  { rank: 1, reason: 'Spindle / Bearing Failure', category: 'Equipment', hours: 28.4, pct: 18.6, cumPct: 18.6, events: 8, avgDur: '3h 33m' },
  { rank: 2, reason: 'Tool Change / Setup', category: 'Changeover', hours: 24.2, pct: 15.9, cumPct: 34.5, events: 32, avgDur: '0h 45m' },
  { rank: 3, reason: 'Material Shortage', category: 'Material', hours: 22.8, pct: 14.9, cumPct: 49.4, events: 12, avgDur: '1h 54m' },
  { rank: 4, reason: 'Hydraulic System Fault', category: 'Equipment', hours: 18.6, pct: 12.2, cumPct: 61.6, events: 5, avgDur: '3h 43m' },
  { rank: 5, reason: 'No Order / Planning Gap', category: 'Planning', hours: 16.4, pct: 10.7, cumPct: 72.3, events: 6, avgDur: '2h 44m' },
  { rank: 6, reason: 'Quality Hold / Inspection', category: 'Quality', hours: 12.2, pct: 8.0, cumPct: 80.3, events: 14, avgDur: '0h 52m' },
  { rank: 7, reason: 'Electrical / PLC Fault', category: 'Equipment', hours: 10.8, pct: 7.1, cumPct: 87.4, events: 4, avgDur: '2h 42m' },
  { rank: 8, reason: 'Fixture Change', category: 'Changeover', hours: 8.4, pct: 5.5, cumPct: 92.9, events: 18, avgDur: '0h 28m' },
  { rank: 9, reason: 'Operator Unavailable', category: 'Manpower', hours: 6.2, pct: 4.1, cumPct: 97.0, events: 8, avgDur: '0h 47m' },
  { rank: 10, reason: 'Other / Miscellaneous', category: 'Other', hours: 4.6, pct: 3.0, cumPct: 100.0, events: 6, avgDur: '0h 46m' },
];

export default function DowntimePareto() {
  const totalHours = PARETO_DATA.reduce((s, d) => s + d.hours, 0);

  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Downtime Pareto</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Week 12 -- top downtime reasons ranked by total hours lost</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Total Downtime" value={`${totalHours.toFixed(1)} hrs`} sub="this week" icon="timer_off" iconType="dn" change="+8% vs last week" changeType="dn" />
        <KpiCard label="Top 3 = 49.4%" value="75.4 hrs" sub="of total downtime" icon="bar_chart" iconType="dn" />
        <KpiCard label="Total Events" value="113" sub="downtime occurrences" icon="event" />
        <KpiCard label="Avg Duration" value="1h 21m" sub="per event" icon="schedule" change="-12 min vs avg" changeType="up" />
      </div>

      <SectionLabel icon="bar_chart">Pareto Analysis ({PARETO_DATA.length})</SectionLabel>
      <DataTable
        headers={['Rank', 'Reason', 'Category', 'Hours', '% of Total', 'Cumulative %', 'Events', 'Avg Duration']}
        rows={PARETO_DATA.map(d => [
          { v: d.rank, style: { fontFamily: 'var(--m)', fontWeight: 700, textAlign: 'center' } },
          { v: d.reason, style: { fontWeight: 600 } },
          d.category,
          { v: d.hours.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600 } },
          { v: d.pct.toFixed(1) + '%', style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 50, height: 6, background: 'var(--border)', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ width: `${d.cumPct}%`, height: '100%', background: d.cumPct <= 80 ? 'var(--red)' : 'var(--amber)', borderRadius: 3 }} />
            </div>
            <span style={{ fontFamily: 'var(--m)', fontSize: '.72rem' }}>{d.cumPct.toFixed(1)}%</span>
          </div>,
          { v: d.events, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: d.avgDur, style: { fontFamily: 'var(--m)' } },
        ])}
      />
    </>
  );
}
