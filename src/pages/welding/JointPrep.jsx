import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const FIT_UP_DATA = [
  { id: 'JP-3001', wo: 'WO-2526-10001', joint: 'Body to End Cover', wps: 'WPS-EG22-001', rootGap: 2.0, rootFace: 1.5, bevelAngle: 30, misalign: 0.4, clean: 'Pass', inspector: 'M. Kannan', date: '23 Mar 2026', status: 'Approved' },
  { id: 'JP-3002', wo: 'WO-2526-10001', joint: 'Discharge Flange', wps: 'WPS-EG22-002', rootGap: 2.5, rootFace: 1.8, bevelAngle: 35, misalign: 0.6, clean: 'Pass', inspector: 'R. Hansen', date: '23 Mar 2026', status: 'Approved' },
  { id: 'JP-3003', wo: 'WO-2526-10006', joint: 'Suction Header', wps: 'WPS-AB30-001', rootGap: 1.5, rootFace: 1.0, bevelAngle: 30, misalign: 0.3, clean: 'Pass', inspector: 'V. Rajan', date: '23 Mar 2026', status: 'Approved' },
  { id: 'JP-3004', wo: 'WO-2526-10003', joint: 'Cylinder to Crankcase', wps: 'WPS-TS5-001', rootGap: 2.0, rootFace: 2.0, bevelAngle: 0, misalign: 0.8, clean: 'Pass', inspector: 'K. Devi', date: '23 Mar 2026', status: 'Approved' },
  { id: 'JP-3005', wo: 'WO-2526-10008', joint: 'Tank Shell Seam', wps: 'WPS-DS10-001', rootGap: 3.0, rootFace: 2.0, bevelAngle: 30, misalign: 1.2, clean: 'Fail', inspector: 'S. Mason', date: '22 Mar 2026', status: 'Rejected' },
  { id: 'JP-3006', wo: 'WO-2526-10004', joint: 'Motor Mount Bracket', wps: 'WPS-EG55-001', rootGap: 2.0, rootFace: 1.5, bevelAngle: 45, misalign: 0.5, clean: 'Pass', inspector: 'P. Kelly', date: '22 Mar 2026', status: 'Approved' },
  { id: 'JP-3007', wo: 'WO-2526-10007', joint: 'Suction Flange', wps: 'WPS-EG22-002', rootGap: 2.5, rootFace: 1.8, bevelAngle: 35, misalign: 0.4, clean: 'Pass', inspector: 'A. Babu', date: '22 Mar 2026', status: 'Approved' },
  { id: 'JP-3008', wo: 'WO-2526-10011', joint: 'Housing Weld Joint', wps: 'WPS-AB30-001', rootGap: 1.5, rootFace: 1.0, bevelAngle: 30, misalign: 0.2, clean: 'Pass', inspector: 'T. Ganesh', date: '22 Mar 2026', status: 'Approved' },
];

const STATUS_COLOR = { Approved: 'green', Rejected: 'red', Pending: 'amber' };

export default function JointPrep() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Joint Preparation & Fit-Up</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Pre-weld joint preparation inspection -- root gap, bevel angle, alignment, cleanliness</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Inspections Today" value="12" sub="fit-up checks" icon="square_foot" iconType="up" />
        <KpiCard label="Approval Rate" value="92%" sub="first-time approval" icon="check_circle" iconType="up" />
        <KpiCard label="Rejected" value="1" sub="re-prep required" icon="cancel" iconType="dn" />
        <KpiCard label="Avg Misalignment" value="0.5 mm" sub="limit: 1.5 mm" icon="straighten" />
      </div>

      <SectionLabel icon="square_foot">Fit-Up Inspections ({FIT_UP_DATA.length})</SectionLabel>
      <DataTable
        headers={['ID', 'WO #', 'Joint', 'WPS Ref', 'Root Gap (mm)', 'Root Face (mm)', 'Bevel (\u00b0)', 'Misalign (mm)', 'Clean', 'Inspector', 'Date', 'Status']}
        rows={FIT_UP_DATA.map(j => [
          { v: j.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: j.wo, style: { fontFamily: 'var(--m)' } },
          { v: j.joint, style: { fontWeight: 600 } },
          { v: j.wps, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          { v: j.rootGap.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: j.rootFace.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: j.bevelAngle, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: j.misalign.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right', color: j.misalign > 1.0 ? 'var(--red)' : 'var(--text)' } },
          <Badge label={j.clean} color={j.clean === 'Pass' ? 'green' : 'red'} />,
          j.inspector,
          j.date,
          <Badge label={j.status} color={STATUS_COLOR[j.status]} />,
        ])}
      />
    </>
  );
}
