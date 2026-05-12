import React from 'react';
import { KpiCard, SectionLabel, DataTable } from '../../components/ui';

const QUALITY_DATA = [
  { week: 'Wk 5 (3-8 Feb)', fpy: 93.8, dppm: 1240, ncrs: 4, rejects: 18, rework: 12, costOfQuality: '2.8L', scrap: '1.2L' },
  { week: 'Wk 6 (10-15 Feb)', fpy: 94.2, dppm: 1180, ncrs: 3, rejects: 16, rework: 10, costOfQuality: '2.5L', scrap: '1.0L' },
  { week: 'Wk 7 (17-22 Feb)', fpy: 93.5, dppm: 1320, ncrs: 5, rejects: 20, rework: 14, costOfQuality: '3.1L', scrap: '1.4L' },
  { week: 'Wk 8 (24 Feb-1 Mar)', fpy: 94.8, dppm: 1050, ncrs: 2, rejects: 14, rework: 8, costOfQuality: '2.2L', scrap: '0.9L' },
  { week: 'Wk 9 (3-8 Mar)', fpy: 95.1, dppm: 980, ncrs: 2, rejects: 12, rework: 6, costOfQuality: '1.9L', scrap: '0.8L' },
  { week: 'Wk 10 (10-15 Mar)', fpy: 94.6, dppm: 1100, ncrs: 3, rejects: 15, rework: 9, costOfQuality: '2.4L', scrap: '1.1L' },
  { week: 'Wk 11 (17-22 Mar)', fpy: 95.2, dppm: 960, ncrs: 2, rejects: 11, rework: 5, costOfQuality: '1.8L', scrap: '0.7L' },
  { week: 'Wk 12 (23-28 Mar)', fpy: 94.8, dppm: 1040, ncrs: 3, rejects: 14, rework: 8, costOfQuality: '2.1L', scrap: '0.9L' },
];

export default function QualityTrend() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Quality Trend</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>8-week quality metrics trend -- FPY, DPPM, NCRs, and cost of quality</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Current FPY" value="94.8%" sub="first pass yield" icon="speed" iconType="up" change="+0.2% WoW" changeType="up" />
        <KpiCard label="DPPM" value="1,040" sub="defects per million" icon="bug_report" change="-8% WoW" changeType="up" />
        <KpiCard label="Active NCRs" value="3" sub="this week" icon="report" iconType="w" />
        <KpiCard label="Cost of Quality" value="INR 2.1L" sub="this week" icon="currency_rupee" change="-16% WoW" changeType="up" />
        <KpiCard label="Scrap Value" value="INR 0.9L" sub="this week" icon="delete_sweep" iconType="dn" />
      </div>

      <SectionLabel icon="show_chart">Weekly Quality Trend ({QUALITY_DATA.length})</SectionLabel>
      <DataTable
        headers={['Week', 'FPY %', 'DPPM', 'NCRs', 'Rejects', 'Rework', 'Cost of Quality (INR)', 'Scrap Value (INR)']}
        rows={QUALITY_DATA.map(q => [
          { v: q.week, style: { fontWeight: 600, fontSize: '.74rem' } },
          { v: q.fpy.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600, color: q.fpy >= 95 ? 'var(--green)' : q.fpy >= 94 ? 'var(--amber)' : 'var(--red)' } },
          { v: q.dppm.toLocaleString(), style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: q.ncrs, style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600, color: q.ncrs > 3 ? 'var(--red)' : 'var(--text)' } },
          { v: q.rejects, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: q.rework, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: q.costOfQuality, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: q.scrap, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
        ])}
      />
    </>
  );
}
