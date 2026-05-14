import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const PLAN_DATA = [
  { wo: 'WO-2526-10001', product: 'PA-450 Hub Assembly', plant: 'Coimbatore', planQty: 48, actualQty: 42, planStart: '17 Mar', planEnd: '28 Mar', actStart: '17 Mar', actEnd: '--', var: -12.5, status: 'In Progress' },
  { wo: 'WO-2526-10002', product: 'HC-250 Hydraulic Cyl Body', plant: 'Pune', planQty: 24, actualQty: 18, planStart: '18 Mar', planEnd: '30 Mar', actStart: '18 Mar', actEnd: '--', var: -25.0, status: 'Behind' },
  { wo: 'WO-2526-10003', product: 'BR-75 Aerospace Bracket', plant: 'Jamshedpur', planQty: 120, actualQty: 115, planStart: '15 Mar', planEnd: '25 Mar', actStart: '15 Mar', actEnd: '--', var: -4.2, status: 'On Track' },
  { wo: 'WO-2526-10004', product: 'PA-625 Hub Assembly', plant: 'Hosur', planQty: 16, actualQty: 16, planStart: '10 Mar', planEnd: '22 Mar', actStart: '10 Mar', actEnd: '22 Mar', var: 0.0, status: 'Completed' },
  { wo: 'WO-2526-10005', product: 'VSD-200 Controller', plant: 'Ahmedabad', planQty: 200, actualQty: 0, planStart: '20 Mar', planEnd: '05 Apr', actStart: '--', actEnd: '--', var: -100.0, status: 'Not Started' },
  { wo: 'WO-2526-10006', product: 'HC-500 Hydraulic Cyl Body', plant: 'Coimbatore', planQty: 8, actualQty: 6, planStart: '12 Mar', planEnd: '20 Mar', actStart: '12 Mar', actEnd: '--', var: -25.0, status: 'Behind' },
  { wo: 'WO-2526-10007', product: 'BR-150 Aerospace Bracket', plant: 'Hosur', planQty: 80, actualQty: 74, planStart: '14 Mar', planEnd: '24 Mar', actStart: '14 Mar', actEnd: '--', var: -7.5, status: 'In Progress' },
  { wo: 'WO-2526-10008', product: 'PA-880 Hub Assembly', plant: 'Pune', planQty: 12, actualQty: 12, planStart: '16 Mar', planEnd: '28 Mar', actStart: '16 Mar', actEnd: '--', var: 0.0, status: 'On Track' },
];

const STATUS_COLOR = { 'On Track': 'green', 'In Progress': 'accent', Behind: 'red', Completed: 'green', 'Not Started': 'gray' };

export default function PlanVsActual() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Plan vs Actual</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Work order planned vs actual progress tracking across all plants</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Plan Achievement" value="82%" sub="quantity completion" icon="compare" iconType="w" change="-4% vs target" changeType="dn" />
        <KpiCard label="On Track" value="3" sub="of 8 work orders" icon="check_circle" iconType="up" />
        <KpiCard label="Behind Schedule" value="2" sub="need attention" icon="warning" iconType="dn" />
        <KpiCard label="Completed" value="1" sub="orders finished" icon="task_alt" iconType="up" />
      </div>

      <SectionLabel icon="compare">Work Order Progress ({PLAN_DATA.length})</SectionLabel>
      <DataTable
        headers={['WO #', 'Product', 'Plant', 'Plan Qty', 'Actual', 'Plan Start', 'Plan End', 'Act Start', 'Act End', 'Variance', 'Status']}
        rows={PLAN_DATA.map(p => [
          { v: p.wo, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          p.product,
          p.plant,
          { v: p.planQty, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: p.actualQty, style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600 } },
          p.planStart, p.planEnd, p.actStart, p.actEnd,
          { v: `${p.var > 0 ? '+' : ''}${p.var.toFixed(1)}%`, style: { fontFamily: 'var(--m)', fontWeight: 600, textAlign: 'right', color: p.var < -10 ? 'var(--red)' : p.var < 0 ? 'var(--amber)' : 'var(--green)' } },
          <Badge label={p.status} color={STATUS_COLOR[p.status]} />,
        ])}
      />
    </>
  );
}
