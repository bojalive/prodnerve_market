import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const STATIONS = [
  { stn: 1, name: 'Sub-Assembly A', product: 'IC-2024', target: 4, actual: 4, takt: 100, operator: 'Karthik V', status: 'On Track' },
  { stn: 2, name: 'Sub-Assembly B', product: 'IC-2024', target: 4, actual: 4, takt: 100, operator: 'Saravanan T', status: 'On Track' },
  { stn: 3, name: 'Rotor Install', product: 'IC-2024', target: 4, actual: 3, takt: 88, operator: 'Karthik V', status: 'Behind' },
  { stn: 4, name: 'Stator Winding', product: 'IC-2024', target: 4, actual: 4, takt: 96, operator: 'Ramesh S', status: 'On Track' },
  { stn: 5, name: 'Housing Fit', product: 'IC-2024', target: 4, actual: 3, takt: 78, operator: 'Dinesh N', status: 'Bottleneck' },
  { stn: 6, name: 'Bearing Press', product: 'IC-2024', target: 4, actual: 4, takt: 95, operator: 'Anand M', status: 'On Track' },
  { stn: 7, name: 'Shaft Coupling', product: 'HC-500', target: 2, actual: 2, takt: 100, operator: 'Marcus R', status: 'On Track' },
  { stn: 8, name: 'Oil System', product: 'HC-500', target: 2, actual: 2, takt: 98, operator: 'Greg T', status: 'On Track' },
  { stn: 9, name: 'Cooling Circuit', product: 'HC-500', target: 2, actual: 1, takt: 82, operator: 'Patrick D', status: 'Behind' },
  { stn: 10, name: 'Electrical Panel', product: 'VSD-200', target: 8, actual: 8, takt: 100, operator: 'Stan K', status: 'On Track' },
  { stn: 11, name: 'Final Assembly', product: 'BR-75', target: 6, actual: 6, takt: 94, operator: 'Rajesh P', status: 'On Track' },
  { stn: 12, name: 'Pre-Test Check', product: 'BR-75', target: 6, actual: 5, takt: 90, operator: 'Kavitha S', status: 'Behind' },
];

const STATUS_COLOR = { 'On Track': 'green', Behind: 'amber', Bottleneck: 'red' };

export default function StationOutput() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Station Output</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Real-time assembly station performance and takt adherence</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Total Output" value="42" sub="units completed today" icon="inventory_2" iconType="up" change="+4 vs yesterday" changeType="up" />
        <KpiCard label="Takt Adherence" value="92%" sub="avg across stations" icon="speed" iconType="up" change="+1.2% WoW" changeType="up" />
        <KpiCard label="Bottleneck" value="Stn 5" sub="Housing Fit -- 78% takt" icon="warning" iconType="dn" />
        <KpiCard label="Line Balance" value="88%" sub="efficiency ratio" icon="balance" />
      </div>

      <SectionLabel icon="view_timeline">Station Performance ({STATIONS.length})</SectionLabel>
      <DataTable
        headers={['Stn #', 'Station Name', 'Product', 'Target', 'Actual', 'Takt %', 'Operator', 'Status']}
        rows={STATIONS.map(s => [
          { v: s.stn, style: { fontWeight: 700, fontFamily: 'var(--m)', textAlign: 'center' } },
          { v: s.name, style: { fontWeight: 600 } },
          s.product,
          { v: s.target, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: s.actual, style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600 } },
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 50, height: 6, background: 'var(--border)', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ width: `${s.takt}%`, height: '100%', background: s.takt >= 95 ? 'var(--green)' : s.takt >= 85 ? 'var(--amber)' : 'var(--red)', borderRadius: 3 }} />
            </div>
            <span style={{ fontFamily: 'var(--m)', fontSize: '.72rem', fontWeight: 600 }}>{s.takt}%</span>
          </div>,
          s.operator,
          <Badge label={s.status} color={STATUS_COLOR[s.status]} />,
        ])}
      />
    </>
  );
}
