import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const BENCHES = [
  { bench: 'TB-01', name: 'Performance Test Bench A', capacity: '250 HP', currentUnit: 'EG-4022-WIS', product: 'PA-450', wo: 'WO-2526-10001', startTime: '23 Mar 10:30', estEnd: '23 Mar 16:30', status: 'In Test' },
  { bench: 'TB-02', name: 'Performance Test Bench B', capacity: '100 HP', currentUnit: 'TS-1055-PNE', product: 'BR-75', wo: 'WO-2526-10003', startTime: '23 Mar 11:00', estEnd: '23 Mar 15:00', status: 'In Test' },
  { bench: 'TB-03', name: 'Noise & Vibration Chamber', capacity: '500 HP', currentUnit: 'AB-3018-HSR', product: 'HC-500', wo: 'WO-2526-10006', startTime: '23 Mar 09:00', estEnd: '23 Mar 13:00', status: 'In Test' },
  { bench: 'TB-04', name: 'Endurance Test Bench', capacity: '200 HP', currentUnit: '--', product: '--', wo: '--', startTime: '--', estEnd: '--', status: 'Available' },
  { bench: 'TB-05', name: 'Safety Valve Test Rig', capacity: '50 bar', currentUnit: 'EG-4023-WIS', product: 'PA-450', wo: 'WO-2526-10001', startTime: '23 Mar 13:00', estEnd: '23 Mar 14:30', status: 'In Test' },
  { bench: 'TB-06', name: 'Hydrostatic Test Bench', capacity: '100 bar', currentUnit: '--', product: '--', wo: '--', startTime: '--', estEnd: '--', status: 'Maintenance' },
];

const STATUS_COLOR = { 'In Test': 'green', Available: 'accent', Maintenance: 'red', Queue: 'amber' };

export default function TestBenchAlloc() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Test Bench Allocation</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Current test bench utilization, queue, and scheduling</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Total Benches" value="6" sub="test facilities" icon="table_restaurant" />
        <KpiCard label="In Use" value="4" sub="currently testing" icon="science" iconType="up" />
        <KpiCard label="Queue Depth" value="8" sub="units waiting" icon="queue" iconType="w" change="+2 vs yesterday" changeType="dn" />
        <KpiCard label="Avg Test Duration" value="4.5 hrs" sub="per unit" icon="schedule" />
      </div>

      <SectionLabel icon="table_restaurant">Bench Status ({BENCHES.length})</SectionLabel>
      <DataTable
        headers={['Bench ID', 'Name', 'Capacity', 'Current Unit', 'Product', 'Work Order', 'Start', 'Est. End', 'Status']}
        rows={BENCHES.map(b => [
          { v: b.bench, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: b.name, style: { fontWeight: 600 } },
          { v: b.capacity, style: { fontFamily: 'var(--m)' } },
          { v: b.currentUnit, style: { fontFamily: 'var(--m)' } },
          b.product,
          { v: b.wo, style: { fontFamily: 'var(--m)' } },
          b.startTime,
          b.estEnd,
          <Badge label={b.status} color={STATUS_COLOR[b.status]} />,
        ])}
      />
    </>
  );
}
