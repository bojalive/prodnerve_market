import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const CYCLE_DATA = [
  { machine: 'CNC-A01', program: 'O1001', part: 'PA-450 Rotor OP10', stdCT: '8m 42s', actCT: '8m 55s', var: '+2.5%', parts: 18, uptime: 94, status: 'OK' },
  { machine: 'CNC-A01', program: 'O1002', part: 'PA-450 Rotor OP20', stdCT: '6m 18s', actCT: '6m 22s', var: '+1.1%', parts: 16, uptime: 92, status: 'OK' },
  { machine: 'CNC-A02', program: 'O2001', part: 'BR-75 Body OP10', stdCT: '4m 55s', actCT: '5m 18s', var: '+7.8%', parts: 42, uptime: 88, status: 'Warn' },
  { machine: 'CNC-A03', program: 'O3001', part: 'HC-500 Stator OP10', stdCT: '12m 05s', actCT: '12m 10s', var: '+0.7%', parts: 8, uptime: 96, status: 'OK' },
  { machine: 'CNC-A05', program: 'O4001', part: 'PA-880 Shaft OP10', stdCT: '9m 48s', actCT: '10m 32s', var: '+7.5%', parts: 12, uptime: 85, status: 'Warn' },
  { machine: 'VMC-B01', program: 'O2002', part: 'BR-75 Body OP20', stdCT: '7m 30s', actCT: '7m 35s', var: '+1.1%', parts: 24, uptime: 91, status: 'OK' },
  { machine: 'VMC-B01', program: 'O3002', part: 'PA-625 Housing OP10', stdCT: '14m 22s', actCT: '14m 28s', var: '+0.7%', parts: 6, uptime: 93, status: 'OK' },
  { machine: 'VMC-B02', program: 'O3002', part: 'PA-625 Housing OP20', stdCT: '11m 15s', actCT: '12m 08s', var: '+7.9%', parts: 6, uptime: 82, status: 'Warn' },
  { machine: 'GRD-C01', program: 'G1001', part: 'PA-450 Rotor Grind', stdCT: '5m 20s', actCT: '5m 25s', var: '+1.6%', parts: 14, uptime: 90, status: 'OK' },
  { machine: 'GRD-C02', program: 'G2001', part: 'BR-75 Body Grind', stdCT: '3m 45s', actCT: '3m 52s', var: '+3.1%', parts: 30, uptime: 89, status: 'OK' },
];

const STATUS_COLOR = { OK: 'green', Warn: 'amber', Alert: 'red' };

export default function CycleTimeTracker() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Cycle Time Tracker</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Compare standard vs actual cycle times across all CNC and grinding machines</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Avg CT Variance" value="+3.4%" sub="std vs actual" icon="av_timer" iconType="w" change="+0.8% WoW" changeType="dn" />
        <KpiCard label="On Standard" value="7" sub="of 10 programs" icon="check_circle" iconType="up" />
        <KpiCard label="Over 5%" value="3" sub="exceeding tolerance" icon="warning" iconType="dn" />
        <KpiCard label="Best Performer" value="CNC-A03" sub="+0.7% variance" icon="emoji_events" iconType="up" />
        <KpiCard label="Parts Today" value="176" sub="total output" icon="inventory_2" iconType="up" change="+8% vs yesterday" changeType="up" />
      </div>

      <SectionLabel icon="av_timer">Cycle Time Comparison ({CYCLE_DATA.length})</SectionLabel>
      <DataTable
        headers={['Machine', 'Program', 'Part / Operation', 'Std CT', 'Actual CT', 'Variance', 'Parts Today', 'Uptime %', 'Status']}
        rows={CYCLE_DATA.map(c => [
          { v: c.machine, style: { fontWeight: 600, fontFamily: 'var(--m)' } },
          { v: c.program, style: { fontFamily: 'var(--m)' } },
          c.part,
          { v: c.stdCT, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: c.actCT, style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600 } },
          { v: c.var, style: { fontFamily: 'var(--m)', fontWeight: 600, color: parseFloat(c.var) > 5 ? 'var(--red)' : parseFloat(c.var) > 3 ? 'var(--amber)' : 'var(--green)' } },
          { v: c.parts, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: c.uptime + '%', style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          <Badge label={c.status} color={STATUS_COLOR[c.status]} />,
        ])}
      />
    </>
  );
}
