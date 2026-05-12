import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const OVEN_DATA = [
  { batch: 'OV-2026-0412', wo: 'WO-2526-10004', product: 'PA-625', qty: 8, setTemp: 180, zone1: 178, zone2: 181, zone3: 179, bakeDur: '25 min', actualDur: '26 min', startTime: '23 Mar 09:00', endTime: '23 Mar 09:26', operator: 'D. Vignesh', status: 'Pass' },
  { batch: 'OV-2026-0413', wo: 'WO-2526-10007', product: 'BR-150', qty: 20, setTemp: 180, zone1: 180, zone2: 182, zone3: 178, bakeDur: '25 min', actualDur: '25 min', startTime: '23 Mar 10:00', endTime: '23 Mar 10:25', operator: 'D. Vignesh', status: 'Pass' },
  { batch: 'OV-2026-0414', wo: 'WO-2526-10001', product: 'PA-450', qty: 12, setTemp: 180, zone1: 176, zone2: 184, zone3: 180, bakeDur: '25 min', actualDur: '27 min', startTime: '23 Mar 11:00', endTime: '23 Mar 11:27', operator: 'R. Hansen', status: 'Pass' },
  { batch: 'OV-2026-0415', wo: 'WO-2526-10006', product: 'HC-500', qty: 4, setTemp: 160, zone1: 158, zone2: 162, zone3: 161, bakeDur: '20 min', actualDur: '20 min', startTime: '23 Mar 12:00', endTime: '23 Mar 12:20', operator: 'R. Hansen', status: 'Pass' },
  { batch: 'OV-2026-0416', wo: 'WO-2526-10011', product: 'HC-100', qty: 10, setTemp: 160, zone1: 155, zone2: 168, zone3: 159, bakeDur: '20 min', actualDur: '22 min', startTime: '23 Mar 13:00', endTime: '23 Mar 13:22', operator: 'D. Vignesh', status: 'Warn' },
  { batch: 'OV-2026-0411', wo: 'WO-2526-10003', product: 'BR-75', qty: 30, setTemp: 180, zone1: 179, zone2: 180, zone3: 181, bakeDur: '25 min', actualDur: '25 min', startTime: '22 Mar 14:00', endTime: '22 Mar 14:25', operator: 'D. Vignesh', status: 'Pass' },
  { batch: 'OV-2026-0410', wo: 'WO-2526-10008', product: 'PA-880', qty: 6, setTemp: 180, zone1: 182, zone2: 179, zone3: 180, bakeDur: '25 min', actualDur: '26 min', startTime: '22 Mar 11:00', endTime: '22 Mar 11:26', operator: 'R. Hansen', status: 'Pass' },
  { batch: 'OV-2026-0409', wo: 'WO-2526-10002', product: 'HC-250', qty: 8, setTemp: 160, zone1: 161, zone2: 159, zone3: 160, bakeDur: '20 min', actualDur: '20 min', startTime: '22 Mar 09:00', endTime: '22 Mar 09:20', operator: 'D. Vignesh', status: 'Pass' },
];

const STATUS_COLOR = { Pass: 'green', Warn: 'amber', Fail: 'red' };

export default function OvenChart() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Oven / Baking Chart</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Paint baking oven temperature profile, zone monitoring, and cycle time tracking</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Batches Today" value="5" sub="oven cycles completed" icon="thermostat" iconType="up" />
        <KpiCard label="Temp Compliance" value="96%" sub="within \u00b15\u00b0C tolerance" icon="check_circle" iconType="up" />
        <KpiCard label="Avg Cycle" value="24.2 min" sub="bake duration" icon="schedule" />
        <KpiCard label="Oven Utilization" value="82%" sub="of available capacity" icon="speed" iconType="up" />
      </div>

      <SectionLabel icon="thermostat">Oven Batch Log ({OVEN_DATA.length})</SectionLabel>
      <DataTable
        headers={['Batch #', 'WO #', 'Product', 'Qty', 'Set Temp (\u00b0C)', 'Zone 1', 'Zone 2', 'Zone 3', 'Spec Duration', 'Actual', 'Start', 'End', 'Operator', 'Status']}
        rows={OVEN_DATA.map(o => [
          { v: o.batch, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: o.wo, style: { fontFamily: 'var(--m)' } },
          o.product,
          { v: o.qty, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: o.setTemp, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: o.zone1, style: { fontFamily: 'var(--m)', textAlign: 'right', color: Math.abs(o.zone1 - o.setTemp) > 5 ? 'var(--red)' : 'var(--text)' } },
          { v: o.zone2, style: { fontFamily: 'var(--m)', textAlign: 'right', color: Math.abs(o.zone2 - o.setTemp) > 5 ? 'var(--red)' : 'var(--text)' } },
          { v: o.zone3, style: { fontFamily: 'var(--m)', textAlign: 'right', color: Math.abs(o.zone3 - o.setTemp) > 5 ? 'var(--red)' : 'var(--text)' } },
          { v: o.bakeDur, style: { fontFamily: 'var(--m)' } },
          { v: o.actualDur, style: { fontFamily: 'var(--m)', fontWeight: 600 } },
          o.startTime,
          o.endTime,
          o.operator,
          <Badge label={o.status} color={STATUS_COLOR[o.status]} />,
        ])}
      />
    </>
  );
}
