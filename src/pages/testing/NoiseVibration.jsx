import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const NV_DATA = [
  { serial: 'AB-3018-HSR', point: 'Drive End Bearing', noiseSpec: '\u2264 72 dB(A)', noiseAct: 68.4, vibSpec: '\u2264 2.5 mm/s', vibAct: 1.8, vibFreq: '1X, 2X', status: 'Pass' },
  { serial: 'AB-3018-HSR', point: 'Non-Drive End Bearing', noiseSpec: '\u2264 72 dB(A)', noiseAct: 66.2, vibSpec: '\u2264 2.5 mm/s', vibAct: 1.4, vibFreq: '1X', status: 'Pass' },
  { serial: 'AB-3018-HSR', point: 'Component Housing', noiseSpec: '\u2264 75 dB(A)', noiseAct: 71.8, vibSpec: '\u2264 3.5 mm/s', vibAct: 2.2, vibFreq: '1X, BPF', status: 'Pass' },
  { serial: 'AB-3018-HSR', point: 'Discharge Side', noiseSpec: '\u2264 78 dB(A)', noiseAct: 76.5, vibSpec: '\u2264 4.0 mm/s', vibAct: 3.8, vibFreq: '1X, 2X, BPF', status: 'Warn' },
  { serial: 'EG-4022-WIS', point: 'Drive End Bearing', noiseSpec: '\u2264 72 dB(A)', noiseAct: 69.8, vibSpec: '\u2264 2.5 mm/s', vibAct: 2.0, vibFreq: '1X', status: 'Pass' },
  { serial: 'EG-4022-WIS', point: 'Non-Drive End Bearing', noiseSpec: '\u2264 72 dB(A)', noiseAct: 67.5, vibSpec: '\u2264 2.5 mm/s', vibAct: 1.6, vibFreq: '1X', status: 'Pass' },
  { serial: 'EG-4022-WIS', point: 'Component Housing', noiseSpec: '\u2264 75 dB(A)', noiseAct: 73.2, vibSpec: '\u2264 3.5 mm/s', vibAct: 2.8, vibFreq: '1X, BPF', status: 'Pass' },
  { serial: 'EG-4022-WIS', point: 'Discharge Side', noiseSpec: '\u2264 78 dB(A)', noiseAct: 74.1, vibSpec: '\u2264 4.0 mm/s', vibAct: 3.2, vibFreq: '1X, 2X', status: 'Pass' },
];

const STATUS_COLOR = { Pass: 'green', Warn: 'amber', Fail: 'red' };

export default function NoiseVibration() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Noise & Vibration</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Sound level and vibration measurements at critical points per ISO 2151 / ISO 10816</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Units Measured" value="4" sub="today's NV tests" icon="graphic_eq" iconType="up" />
        <KpiCard label="All Points Pass" value="3" sub="of 4 units" icon="check_circle" iconType="up" />
        <KpiCard label="Avg Noise" value="71.2 dB(A)" sub="at 1m distance" icon="volume_up" />
        <KpiCard label="Max Vibration" value="3.8 mm/s" sub="limit: 4.0 mm/s" icon="vibration" iconType="w" />
      </div>

      <SectionLabel icon="graphic_eq">Measurement Points ({NV_DATA.length})</SectionLabel>
      <DataTable
        headers={['Serial', 'Measurement Point', 'Noise Spec', 'Noise Actual dB(A)', 'Vibration Spec', 'Vibration Actual (mm/s)', 'Freq Components', 'Status']}
        rows={NV_DATA.map(n => [
          { v: n.serial, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: n.point, style: { fontWeight: 600 } },
          { v: n.noiseSpec, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          { v: n.noiseAct.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600 } },
          { v: n.vibSpec, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          { v: n.vibAct.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600, color: n.vibAct > 3.5 ? 'var(--amber)' : 'var(--text)' } },
          { v: n.vibFreq, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          <Badge label={n.status} color={STATUS_COLOR[n.status]} />,
        ])}
      />
    </>
  );
}
