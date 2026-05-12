import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const PROD_DATA = [
  { product: 'EG-22 Screw Compressor', plant: 'Coimbatore', planned: 48, actual: 42, var: -12.5, mtdPlan: 180, mtdActual: 164, status: 'Behind' },
  { product: 'AB-15 Oil-Free Compressor', plant: 'Pune', planned: 24, actual: 18, var: -25.0, mtdPlan: 96, mtdActual: 78, status: 'Behind' },
  { product: 'TS-5 Piston Compressor', plant: 'Jamshedpur', planned: 120, actual: 115, var: -4.2, mtdPlan: 480, mtdActual: 462, status: 'On Track' },
  { product: 'EG-37 Screw Compressor', plant: 'Hosur', planned: 16, actual: 16, var: 0.0, mtdPlan: 64, mtdActual: 64, status: 'On Track' },
  { product: 'VSD-200 Controller', plant: 'Ahmedabad', planned: 200, actual: 195, var: -2.5, mtdPlan: 800, mtdActual: 788, status: 'On Track' },
  { product: 'AB-30 Oil-Free Compressor', plant: 'Coimbatore', planned: 8, actual: 6, var: -25.0, mtdPlan: 32, mtdActual: 28, status: 'Behind' },
  { product: 'TS-10 Piston Compressor', plant: 'Hosur', planned: 80, actual: 74, var: -7.5, mtdPlan: 320, mtdActual: 298, status: 'Behind' },
  { product: 'EG-55 Screw Compressor', plant: 'Pune', planned: 12, actual: 12, var: 0.0, mtdPlan: 48, mtdActual: 48, status: 'On Track' },
];

const STATUS_COLOR = { 'On Track': 'green', Behind: 'red' };

export default function ProdVsPlan() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Production vs Plan</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Week 12 -- planned vs actual production across all products and plants</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Plan Achievement" value="86%" sub="weekly target" icon="compare" iconType="w" change="-4% vs last week" changeType="dn" />
        <KpiCard label="On Track" value="4" sub="of 8 products" icon="check_circle" iconType="up" />
        <KpiCard label="Behind" value="4" sub="products below target" icon="warning" iconType="dn" />
        <KpiCard label="MTD Achievement" value="91%" sub="month-to-date" icon="calendar_month" />
      </div>

      <SectionLabel icon="compare">Product-wise Plan vs Actual ({PROD_DATA.length})</SectionLabel>
      <DataTable
        headers={['Product', 'Plant', 'Weekly Plan', 'Weekly Actual', 'Variance %', 'MTD Plan', 'MTD Actual', 'Status']}
        rows={PROD_DATA.map(p => [
          { v: p.product, style: { fontWeight: 600 } },
          p.plant,
          { v: p.planned, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: p.actual, style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600 } },
          { v: `${p.var > 0 ? '+' : ''}${p.var.toFixed(1)}%`, style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600, color: p.var < -10 ? 'var(--red)' : p.var < 0 ? 'var(--amber)' : 'var(--green)' } },
          { v: p.mtdPlan, style: { fontFamily: 'var(--m)', textAlign: 'right', color: 'var(--text-mute)' } },
          { v: p.mtdActual, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          <Badge label={p.status} color={STATUS_COLOR[p.status]} />,
        ])}
      />
    </>
  );
}
