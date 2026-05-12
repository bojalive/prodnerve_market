import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const PLANT_DATA = [
  { kpi: 'OEE %', coimbatore: 68.4, hosur: 72.1, pune: 65.8, ahmedabad: 70.2, jamshedpur: 67.5, target: 75, uom: '%' },
  { kpi: 'Plan Achievement %', coimbatore: 86, hosur: 91, pune: 82, ahmedabad: 88, jamshedpur: 84, target: 92, uom: '%' },
  { kpi: 'FPY %', coimbatore: 94.8, hosur: 95.6, pune: 93.2, ahmedabad: 94.2, jamshedpur: 93.8, target: 95, uom: '%' },
  { kpi: 'DPPM', coimbatore: 1040, hosur: 880, pune: 1360, ahmedabad: 1160, jamshedpur: 1240, target: 1000, uom: '' },
  { kpi: 'Downtime hrs/week', coimbatore: 34.2, hosur: 28.6, pune: 42.4, ahmedabad: 31.8, jamshedpur: 38.2, target: 25, uom: 'hrs' },
  { kpi: 'MTTR (hrs)', coimbatore: 2.3, hosur: 1.8, pune: 3.1, ahmedabad: 2.0, jamshedpur: 2.6, target: 2.0, uom: 'hrs' },
  { kpi: 'PM Compliance %', coimbatore: 93, hosur: 96, pune: 88, ahmedabad: 91, jamshedpur: 90, target: 95, uom: '%' },
  { kpi: 'Safety Incidents MTD', coimbatore: 1, hosur: 0, pune: 2, ahmedabad: 0, jamshedpur: 1, target: 0, uom: '' },
  { kpi: 'Headcount', coimbatore: 79, hosur: 64, pune: 52, ahmedabad: 45, jamshedpur: 58, target: 0, uom: '' },
  { kpi: 'Revenue MTD (Cr)', coimbatore: 8.4, hosur: 6.2, pune: 4.8, ahmedabad: 3.6, jamshedpur: 5.4, target: 0, uom: 'Cr' },
];

export default function PlantComparison() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Plant Comparison</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Cross-plant KPI comparison -- March 2026</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Best OEE" value="Hosur" sub="72.1%" icon="emoji_events" iconType="up" />
        <KpiCard label="Best FPY" value="Hosur" sub="95.6%" icon="verified" iconType="up" />
        <KpiCard label="Lowest DT" value="Hosur" sub="28.6 hrs/wk" icon="timer_off" iconType="up" />
        <KpiCard label="Total Revenue" value="INR 28.4 Cr" sub="MTD all plants" icon="currency_rupee" iconType="up" />
        <KpiCard label="Total HC" value="298" sub="across 5 plants" icon="people" />
      </div>

      <SectionLabel icon="factory">Plant KPI Matrix ({PLANT_DATA.length} KPIs x 5 plants)</SectionLabel>
      <DataTable
        headers={['KPI', 'Coimbatore', 'Hosur', 'Pune', 'Ahmedabad', 'Jamshedpur', 'Target']}
        rows={PLANT_DATA.map(p => {
          const vals = [p.coimbatore, p.hosur, p.pune, p.ahmedabad, p.jamshedpur];
          const isLowerBetter = p.kpi.includes('Downtime') || p.kpi.includes('DPPM') || p.kpi.includes('MTTR') || p.kpi.includes('Safety');
          const best = isLowerBetter ? Math.min(...vals) : Math.max(...vals);
          return [
            { v: p.kpi, style: { fontWeight: 600 } },
            ...vals.map(v => ({
              v: typeof v === 'number' ? (Number.isInteger(v) ? v.toLocaleString() : v.toFixed(1)) : v,
              style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: v === best ? 700 : 400, color: v === best ? 'var(--green)' : 'var(--text)' },
            })),
            { v: p.target > 0 ? (Number.isInteger(p.target) ? p.target.toLocaleString() : p.target.toFixed(1)) : '--', style: { fontFamily: 'var(--m)', textAlign: 'right', color: 'var(--text-mute)' } },
          ];
        })}
      />
    </>
  );
}
