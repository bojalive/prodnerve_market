import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const NDT_DATA = [
  { id: 'NDT-6001', wo: 'WO-2526-10001', joint: 'Body to End Cover', method: 'RT (Radiography)', standard: 'ASME V Art.2', acceptance: 'ASME VIII Div.1', indication: 'None', inspector: 'M. Kannan', certLevel: 'RT Level II', date: '23 Mar 2026', result: 'Accept' },
  { id: 'NDT-6002', wo: 'WO-2526-10001', joint: 'Discharge Flange', method: 'UT (Ultrasonic)', standard: 'ASME V Art.4', acceptance: 'ASME VIII Div.1', indication: 'None', inspector: 'R. Kannan', certLevel: 'UT Level II', date: '23 Mar 2026', result: 'Accept' },
  { id: 'NDT-6003', wo: 'WO-2526-10006', joint: 'Suction Header', method: 'PT (Dye Penetrant)', standard: 'ASME V Art.6', acceptance: 'ASME VIII Div.1', indication: 'Linear 2mm', inspector: 'V. Rajan', certLevel: 'PT Level II', date: '23 Mar 2026', result: 'Reject' },
  { id: 'NDT-6004', wo: 'WO-2526-10003', joint: 'Cyl to Crankcase', method: 'MT (Magnetic Particle)', standard: 'ASME V Art.7', acceptance: 'ASME VIII Div.1', indication: 'None', inspector: 'K. Devi', certLevel: 'MT Level II', date: '23 Mar 2026', result: 'Accept' },
  { id: 'NDT-6005', wo: 'WO-2526-10008', joint: 'Tank Shell Seam', method: 'RT (Radiography)', standard: 'ASME V Art.2', acceptance: 'ASME VIII Div.1', indication: 'Porosity (scattered)', inspector: 'M. Kannan', certLevel: 'RT Level II', date: '22 Mar 2026', result: 'Accept' },
  { id: 'NDT-6006', wo: 'WO-2526-10004', joint: 'Motor Mount', method: 'UT (Ultrasonic)', standard: 'ASME V Art.4', acceptance: 'ASME VIII Div.1', indication: 'None', inspector: 'R. Kannan', certLevel: 'UT Level II', date: '22 Mar 2026', result: 'Accept' },
  { id: 'NDT-6007', wo: 'WO-2526-10007', joint: 'Suction Flange', method: 'PT (Dye Penetrant)', standard: 'ASME V Art.6', acceptance: 'ASME VIII Div.1', indication: 'None', inspector: 'V. Rajan', certLevel: 'PT Level II', date: '22 Mar 2026', result: 'Accept' },
  { id: 'NDT-6008', wo: 'WO-2526-10011', joint: 'Housing Weld', method: 'VT (Visual)', standard: 'AWS D1.1', acceptance: 'Per drawing', indication: 'Undercut 0.3mm', inspector: 'S. Mahesh', certLevel: 'VT Level II', date: '22 Mar 2026', result: 'Accept' },
];

const RESULT_COLOR = { Accept: 'green', Reject: 'red', 'Re-test': 'amber' };

export default function NDTResults() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>NDT Results</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Non-destructive testing results -- radiography, ultrasonic, dye penetrant, magnetic particle</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Tests Today" value="14" sub="NDT examinations" icon="search" iconType="up" />
        <KpiCard label="Accept Rate" value="93%" sub="meeting acceptance criteria" icon="check_circle" iconType="up" />
        <KpiCard label="Rejections" value="1" sub="repair and re-test" icon="cancel" iconType="dn" />
        <KpiCard label="RT Coverage" value="100%" sub="all pressure joints RT'd" icon="verified" iconType="up" />
      </div>

      <SectionLabel icon="search">NDT Examination Results ({NDT_DATA.length})</SectionLabel>
      <DataTable
        headers={['NDT #', 'WO #', 'Joint', 'Method', 'Standard', 'Acceptance', 'Indication', 'Inspector', 'Level', 'Date', 'Result']}
        rows={NDT_DATA.map(n => [
          { v: n.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: n.wo, style: { fontFamily: 'var(--m)' } },
          { v: n.joint, style: { fontWeight: 600 } },
          { v: n.method, style: { fontWeight: 600 } },
          { v: n.standard, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          { v: n.acceptance, style: { fontSize: '.73rem' } },
          { v: n.indication, style: { color: n.indication !== 'None' ? 'var(--amber)' : 'var(--text-mute)' } },
          n.inspector,
          { v: n.certLevel, style: { fontSize: '.73rem' } },
          n.date,
          <Badge label={n.result} color={RESULT_COLOR[n.result]} />,
        ])}
      />
    </>
  );
}
