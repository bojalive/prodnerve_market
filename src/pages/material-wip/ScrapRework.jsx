import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const SCRAP_REWORK = [
  { id: 'SR-2001', wo: 'WO-2526-10001', product: 'GT-C200', part: 'Rotor Blank', type: 'Scrap', qty: 2, reason: 'Bore OD out of spec', cost: '8,400', stage: 'CNC Machining', operator: 'Suresh K', date: '23 Mar 2026', status: 'Disposed' },
  { id: 'SR-2002', wo: 'WO-2526-10003', product: 'GT-RF400', part: 'Body Casting', type: 'Rework', qty: 4, reason: 'Surface finish Ra 1.2 (spec 0.8)', cost: '2,400', stage: 'Grinding', operator: 'Karthik V', date: '23 Mar 2026', status: 'In Rework' },
  { id: 'SR-2003', wo: 'WO-2526-10006', product: 'GT-SF200', part: 'Housing Assembly', type: 'Scrap', qty: 1, reason: 'Leak test failure, unrepairable', cost: '18,600', stage: 'Assembly', operator: 'Dinesh N', date: '22 Mar 2026', status: 'Disposed' },
  { id: 'SR-2004', wo: 'WO-2526-10007', product: 'GT-RF450', part: 'Piston Pin', type: 'Rework', qty: 6, reason: 'Thread gauge failure M8', cost: '1,800', stage: 'CNC Machining', operator: 'Saravanan T', date: '22 Mar 2026', status: 'Completed' },
  { id: 'SR-2005', wo: 'WO-2526-10004', product: 'GT-C300', part: 'Discharge Flange', type: 'Rework', qty: 2, reason: 'Paint peeling', cost: '1,200', stage: 'Paint / Coating', operator: 'D. Vignesh', date: '21 Mar 2026', status: 'Completed' },
  { id: 'SR-2006', wo: 'WO-2526-10008', product: 'GT-DF500', part: 'Weld Joint', type: 'Rework', qty: 1, reason: 'Weld undercut 0.6mm', cost: '3,400', stage: 'Welding', operator: 'V. Rajan', date: '20 Mar 2026', status: 'Completed' },
  { id: 'SR-2007', wo: 'WO-2526-10002', product: 'GT-LF700', part: 'Scroll Element', type: 'Scrap', qty: 1, reason: 'Crack detected during NDT', cost: '12,200', stage: 'Testing', operator: 'Kavitha S', date: '19 Mar 2026', status: 'Disposed' },
  { id: 'SR-2008', wo: 'WO-2526-10011', product: 'GT-LF600', part: 'Bearing Housing', type: 'Rework', qty: 1, reason: 'Bearing noise after assembly', cost: '2,800', stage: 'Assembly', operator: 'Anand M', date: '18 Mar 2026', status: 'Completed' },
];

const STATUS_COLOR = { 'In Rework': 'amber', Completed: 'green', Disposed: 'red' };
const TYPE_COLOR = { Scrap: 'red', Rework: 'amber' };

export default function ScrapRework() {
  const scrapCost = SCRAP_REWORK.filter(s => s.type === 'Scrap').reduce((sum, s) => sum + parseInt(s.cost.replace(',', '')), 0);
  const reworkCost = SCRAP_REWORK.filter(s => s.type === 'Rework').reduce((sum, s) => sum + parseInt(s.cost.replace(',', '')), 0);

  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Scrap & Rework</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Track scrap disposals and rework operations with cost impact analysis</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Scrap (MTD)" value="8 units" sub="disposed material" icon="delete_sweep" iconType="dn" />
        <KpiCard label="Scrap Cost" value={`INR ${(scrapCost / 1000).toFixed(1)}K`} sub="material loss" icon="currency_rupee" iconType="dn" />
        <KpiCard label="Rework (MTD)" value="14 units" sub="repaired/reworked" icon="autorenew" iconType="w" />
        <KpiCard label="Rework Cost" value={`INR ${(reworkCost / 1000).toFixed(1)}K`} sub="labor + material" icon="currency_rupee" iconType="w" />
        <KpiCard label="Scrap Rate" value="1.2%" sub="of total production" icon="speed" change="-0.3% vs avg" changeType="up" />
      </div>

      <SectionLabel icon="delete_sweep">Scrap & Rework Log ({SCRAP_REWORK.length})</SectionLabel>
      <DataTable
        headers={['ID', 'WO #', 'Product', 'Part', 'Type', 'Qty', 'Reason', 'Cost (INR)', 'Stage', 'Operator', 'Date', 'Status']}
        rows={SCRAP_REWORK.map(s => [
          { v: s.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: s.wo, style: { fontFamily: 'var(--m)' } },
          s.product,
          s.part,
          <Badge label={s.type} color={TYPE_COLOR[s.type]} />,
          { v: s.qty, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          s.reason,
          { v: s.cost, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          s.stage,
          s.operator,
          s.date,
          <Badge label={s.status} color={STATUS_COLOR[s.status]} />,
        ])}
      />
    </>
  );
}
