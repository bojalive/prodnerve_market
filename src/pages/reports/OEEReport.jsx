import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const OEE_DATA = [
  { machine: 'CNC-A01', avail: 88.5, perf: 92.4, qual: 98.2, oee: 80.3, planned: 480, runtime: 425, parts: 18, reject: 0, status: 'Good' },
  { machine: 'CNC-A02', avail: 82.1, perf: 84.6, qual: 94.8, oee: 65.8, planned: 480, runtime: 394, parts: 42, reject: 2, status: 'Fair' },
  { machine: 'CNC-A03', avail: 90.2, perf: 88.0, qual: 97.5, oee: 77.4, planned: 480, runtime: 433, parts: 8, reject: 0, status: 'Good' },
  { machine: 'CNC-A05', avail: 78.4, perf: 82.2, qual: 96.1, oee: 61.9, planned: 480, runtime: 376, parts: 12, reject: 0, status: 'Fair' },
  { machine: 'VMC-B01', avail: 86.8, perf: 90.5, qual: 97.8, oee: 76.8, planned: 480, runtime: 417, parts: 30, reject: 1, status: 'Good' },
  { machine: 'VMC-B02', avail: 80.2, perf: 78.4, qual: 93.2, oee: 58.6, planned: 480, runtime: 385, parts: 6, reject: 0, status: 'Poor' },
  { machine: 'GRD-C01', avail: 88.0, perf: 86.5, qual: 98.5, oee: 74.9, planned: 480, runtime: 422, parts: 14, reject: 0, status: 'Good' },
  { machine: 'GRD-C02', avail: 84.5, perf: 82.0, qual: 96.8, oee: 67.0, planned: 480, runtime: 406, parts: 30, reject: 1, status: 'Fair' },
  { machine: 'ASM-D01', avail: 92.0, perf: 88.2, qual: 95.4, oee: 77.4, planned: 480, runtime: 442, parts: 22, reject: 1, status: 'Good' },
  { machine: 'ASM-D02', avail: 86.5, perf: 84.0, qual: 96.2, oee: 69.9, planned: 480, runtime: 415, parts: 18, reject: 0, status: 'Fair' },
  { machine: 'TST-E01', avail: 75.0, perf: 92.0, qual: 100, oee: 69.0, planned: 480, runtime: 360, parts: 6, reject: 0, status: 'Fair' },
  { machine: 'PNT-F01', avail: 82.4, perf: 86.8, qual: 97.2, oee: 69.5, planned: 480, runtime: 396, parts: 20, reject: 0, status: 'Fair' },
];

const STATUS_COLOR = { Good: 'green', Fair: 'amber', Poor: 'red' };

export default function OEEReport() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>OEE Report</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Overall Equipment Effectiveness -- 23 Mar 2026 -- Coimbatore Plant</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Plant OEE" value="68.4%" sub="target: 75%" icon="speed" iconType="w" change="-1.2% WoW" changeType="dn" />
        <KpiCard label="Availability" value="84.2%" sub="planned vs actual runtime" icon="schedule" iconType="up" />
        <KpiCard label="Performance" value="86.8%" sub="actual vs ideal speed" icon="bolt" />
        <KpiCard label="Quality" value="93.6%" sub="good parts ratio" icon="verified" iconType="up" change="+0.4% WoW" changeType="up" />
      </div>

      <SectionLabel icon="speed">Machine-wise OEE ({OEE_DATA.length})</SectionLabel>
      <DataTable
        headers={['Machine', 'Availability %', 'Performance %', 'Quality %', 'OEE %', 'Planned (min)', 'Runtime (min)', 'Parts', 'Rejects', 'Status']}
        rows={OEE_DATA.map(o => [
          { v: o.machine, style: { fontWeight: 600, fontFamily: 'var(--m)' } },
          { v: o.avail.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: o.perf.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: o.qual.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: o.oee.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 700, color: o.oee >= 75 ? 'var(--green)' : o.oee >= 65 ? 'var(--amber)' : 'var(--red)' } },
          { v: o.planned, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: o.runtime, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: o.parts, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: o.reject, style: { fontFamily: 'var(--m)', textAlign: 'right', color: o.reject > 0 ? 'var(--red)' : 'var(--text-mute)' } },
          <Badge label={o.status} color={STATUS_COLOR[o.status]} />,
        ])}
      />
    </>
  );
}
