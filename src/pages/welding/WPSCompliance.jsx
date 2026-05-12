import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const WPS_RECORDS = [
  { wpsNo: 'WPS-EG22-001', joint: 'Body to End Cover', process: 'GTAW', baseMetal: 'EN8 / EN8', filler: 'ER70S-6', thickness: '8-12 mm', pqr: 'PQR-4481', rev: 'R2', status: 'Active' },
  { wpsNo: 'WPS-EG22-002', joint: 'Discharge Flange', process: 'GMAW', baseMetal: 'SA 516 Gr 70', filler: 'ER70S-6', thickness: '10-16 mm', pqr: 'PQR-4482', rev: 'R1', status: 'Active' },
  { wpsNo: 'WPS-AB30-001', joint: 'Suction Header', process: 'GTAW', baseMetal: 'SS 304 / SS 304', filler: 'ER308L', thickness: '3-6 mm', pqr: 'PQR-4483', rev: 'R3', status: 'Active' },
  { wpsNo: 'WPS-TS5-001', joint: 'Cylinder to Crankcase', process: 'SMAW', baseMetal: 'CI Grade 25 / EN8', filler: 'ENiFe-CI', thickness: '6-10 mm', pqr: 'PQR-4484', rev: 'R1', status: 'Active' },
  { wpsNo: 'WPS-DS10-001', joint: 'Tank Shell Seam', process: 'SAW', baseMetal: 'SA 516 Gr 60', filler: 'EM12K + F7A2', thickness: '12-20 mm', pqr: 'PQR-4485', rev: 'R2', status: 'Active' },
  { wpsNo: 'WPS-EG55-001', joint: 'Motor Mount Bracket', process: 'FCAW', baseMetal: 'IS 2062 E250', filler: 'E71T-1', thickness: '6-10 mm', pqr: 'PQR-4486', rev: 'R1', status: 'Under Review' },
];

const STATUS_COLOR = { Active: 'green', 'Under Review': 'amber', Expired: 'red' };

export default function WPSCompliance() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>WPS Compliance</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Welding Procedure Specifications and PQR linkage per ASME Section IX</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Active WPS" value="24" sub="approved procedures" icon="fact_check" iconType="up" />
        <KpiCard label="Under Review" value="2" sub="pending approval" icon="rate_review" iconType="w" />
        <KpiCard label="PQR Records" value="28" sub="supporting qualifications" icon="description" />
        <KpiCard label="Compliance" value="100%" sub="all welds per WPS" icon="verified" iconType="up" />
      </div>

      <SectionLabel icon="fact_check">WPS Registry ({WPS_RECORDS.length})</SectionLabel>
      <DataTable
        headers={['WPS No', 'Joint Description', 'Process', 'Base Metal', 'Filler Metal', 'Thickness', 'PQR Ref', 'Rev', 'Status']}
        rows={WPS_RECORDS.map(w => [
          { v: w.wpsNo, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: w.joint, style: { fontWeight: 600 } },
          { v: w.process, style: { fontWeight: 600 } },
          w.baseMetal,
          { v: w.filler, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          { v: w.thickness, style: { fontFamily: 'var(--m)' } },
          { v: w.pqr, style: { fontFamily: 'var(--m)' } },
          { v: w.rev, style: { fontFamily: 'var(--m)', fontWeight: 600 } },
          <Badge label={w.status} color={STATUS_COLOR[w.status]} />,
        ])}
      />
    </>
  );
}
