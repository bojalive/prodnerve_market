import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const INSPECTION_DATA = [
  { serial: 'EG-4022-CBE', wo: 'WO-2526-10001', product: 'PA-450', dftSpec: '60-80 \u00b5m', dftActual: 72, adhesion: '5B (Best)', gloss: 82, color: 'RAL 5015 (Pass)', visual: 'No defects', inspector: 'R. Hansen', date: '23 Mar 2026', result: 'Pass' },
  { serial: 'EG-4023-CBE', wo: 'WO-2526-10001', product: 'PA-450', dftSpec: '60-80 \u00b5m', dftActual: 68, adhesion: '5B (Best)', gloss: 80, color: 'RAL 5015 (Pass)', visual: 'No defects', inspector: 'R. Hansen', date: '23 Mar 2026', result: 'Pass' },
  { serial: 'TS-1055-PNE', wo: 'WO-2526-10003', product: 'BR-75', dftSpec: '50-70 \u00b5m', dftActual: 58, adhesion: '4B (Good)', gloss: 75, color: 'RAL 7035 (Pass)', visual: 'No defects', inspector: 'D. Vignesh', date: '23 Mar 2026', result: 'Pass' },
  { serial: 'AB-3018-HSR', wo: 'WO-2526-10006', product: 'HC-500', dftSpec: '60-80 \u00b5m', dftActual: 82, adhesion: '5B (Best)', gloss: 78, color: 'RAL 5015 (Pass)', visual: 'Minor orange peel', inspector: 'R. Hansen', date: '23 Mar 2026', result: 'Pass' },
  { serial: 'TS-1056-PNE', wo: 'WO-2526-10003', product: 'BR-75', dftSpec: '50-70 \u00b5m', dftActual: 45, adhesion: '3B (Fair)', gloss: 65, color: 'RAL 7035 (Pass)', visual: 'Thin spot on base', inspector: 'D. Vignesh', date: '22 Mar 2026', result: 'Fail' },
  { serial: 'EG-4021-CBE', wo: 'WO-2526-10001', product: 'PA-450', dftSpec: '60-80 \u00b5m', dftActual: 74, adhesion: '5B (Best)', gloss: 84, color: 'RAL 5015 (Pass)', visual: 'No defects', inspector: 'R. Hansen', date: '22 Mar 2026', result: 'Pass' },
  { serial: 'VSD-6014-JMP', wo: 'WO-2526-10005', product: 'VSD-200', dftSpec: '40-60 \u00b5m', dftActual: 52, adhesion: '5B (Best)', gloss: 88, color: 'RAL 7016 (Pass)', visual: 'No defects', inspector: 'D. Vignesh', date: '22 Mar 2026', result: 'Pass' },
  { serial: 'DS-2089-AMD', wo: 'WO-2526-10008', product: 'DS-10', dftSpec: '60-80 \u00b5m', dftActual: 70, adhesion: '4B (Good)', gloss: 76, color: 'RAL 5015 (Pass)', visual: 'No defects', inspector: 'R. Hansen', date: '21 Mar 2026', result: 'Pass' },
];

const RESULT_COLOR = { Pass: 'green', Fail: 'red' };

export default function CoatingInspection() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Coating QC Inspection</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>DFT measurement, adhesion test, gloss check, and visual inspection results</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Inspected Today" value="16" sub="units checked" icon="verified" iconType="up" />
        <KpiCard label="Pass Rate" value="94%" sub="first-time pass" icon="check_circle" iconType="up" change="+2% WoW" changeType="up" />
        <KpiCard label="Avg DFT" value="67 \u00b5m" sub="dry film thickness" icon="straighten" />
        <KpiCard label="Avg Gloss" value="78 GU" sub="at 60\u00b0 angle" icon="wb_sunny" />
        <KpiCard label="Failures" value="1" sub="re-coat required" icon="cancel" iconType="dn" />
      </div>

      <SectionLabel icon="verified">Coating Inspection Results ({INSPECTION_DATA.length})</SectionLabel>
      <DataTable
        headers={['Serial', 'WO #', 'Product', 'DFT Spec', 'DFT Actual (\u00b5m)', 'Adhesion', 'Gloss (GU)', 'Color Match', 'Visual', 'Inspector', 'Date', 'Result']}
        rows={INSPECTION_DATA.map(c => [
          { v: c.serial, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: c.wo, style: { fontFamily: 'var(--m)' } },
          c.product,
          { v: c.dftSpec, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          { v: c.dftActual, style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600, color: c.result === 'Fail' ? 'var(--red)' : 'var(--text)' } },
          c.adhesion,
          { v: c.gloss, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          c.color,
          { v: c.visual, style: { fontSize: '.73rem', color: c.visual !== 'No defects' ? 'var(--amber)' : 'var(--text-mute)' } },
          c.inspector,
          c.date,
          <Badge label={c.result} color={RESULT_COLOR[c.result]} />,
        ])}
      />
    </>
  );
}
