import React from 'react';
import { KpiCard, SectionLabel, DataTable } from '../../components/ui';

const SHIFT_DATA = [
  { metric: 'Output (units)', shiftA: 186, shiftB: 164, shiftC: 138, best: 'A' },
  { metric: 'OEE %', shiftA: 72.4, shiftB: 68.1, shiftC: 62.8, best: 'A' },
  { metric: 'FPY %', shiftA: 95.2, shiftB: 94.1, shiftC: 93.8, best: 'A' },
  { metric: 'Downtime (hrs)', shiftA: 8.4, shiftB: 12.2, shiftC: 14.8, best: 'A' },
  { metric: 'Reject Count', shiftA: 4, shiftB: 6, shiftC: 8, best: 'A' },
  { metric: 'Material Variance %', shiftA: 1.8, shiftB: 2.4, shiftC: 3.1, best: 'A' },
  { metric: 'Safety Incidents', shiftA: 0, shiftB: 0, shiftC: 1, best: 'A/B' },
  { metric: 'Overtime (hrs)', shiftA: 10.2, shiftB: 6.8, shiftC: 4.0, best: 'C' },
];

export default function ShiftComparison() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Shift Comparison</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Week 12 -- performance comparison across 3 shifts -- Shawano Plant</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Best Shift" value="Shift A" sub="highest output & OEE" icon="emoji_events" iconType="up" />
        <KpiCard label="Output Gap" value="48 units" sub="A vs C difference" icon="difference" iconType="w" />
        <KpiCard label="OEE Spread" value="9.6%" sub="best vs worst" icon="speed" change="Target: < 5%" changeType="dn" />
        <KpiCard label="Total Output" value="488" sub="all 3 shifts combined" icon="inventory_2" />
      </div>

      <SectionLabel icon="difference">Shift Performance Matrix ({SHIFT_DATA.length} metrics)</SectionLabel>
      <DataTable
        headers={['Metric', 'Shift A (06-14)', 'Shift B (14-22)', 'Shift C (22-06)', 'Best']}
        rows={SHIFT_DATA.map(s => {
          const vals = [s.shiftA, s.shiftB, s.shiftC];
          const isDTOrReject = s.metric.includes('Downtime') || s.metric.includes('Reject') || s.metric.includes('Variance') || s.metric.includes('Safety') || s.metric.includes('Overtime');
          return [
            { v: s.metric, style: { fontWeight: 600 } },
            ...vals.map((v, i) => {
              const isBest = isDTOrReject ? v === Math.min(...vals) : v === Math.max(...vals);
              return { v: typeof v === 'number' ? (Number.isInteger(v) ? v : v.toFixed(1)) : v, style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: isBest ? 700 : 400, color: isBest ? 'var(--green)' : 'var(--text)' } };
            }),
            { v: s.best, style: { fontWeight: 700, color: 'var(--accent)', textAlign: 'center' } },
          ];
        })}
      />
    </>
  );
}
