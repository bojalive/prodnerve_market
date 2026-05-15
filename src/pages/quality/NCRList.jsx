import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const NCR_DATA = [
  { id: 'NCR-2026-0089', wo: 'WO-2526-10001', product: 'GT-C200', defect: 'Bore OD out of spec (+0.04mm)', qty: 2, plant: 'Coimbatore', stage: 'CNC Machining', detectedBy: 'QC-Anand M', date: '23 Mar 2026', severity: 'Major', disposition: 'Rework', status: 'Open' },
  { id: 'NCR-2026-0088', wo: 'WO-2526-10003', product: 'GT-RF400', defect: 'Surface finish Ra 1.2\u00b5m (spec \u2264 0.8)', qty: 4, plant: 'Jamshedpur', stage: 'Grinding', detectedBy: 'QC-Lauren D', date: '22 Mar 2026', severity: 'Minor', disposition: 'Rework', status: 'In Progress' },
  { id: 'NCR-2026-0087', wo: 'WO-2526-10006', product: 'GT-SF200', defect: 'Leak test failure (0.8 cc/min @ 8 bar)', qty: 1, plant: 'Coimbatore', stage: 'Assembly', detectedBy: 'QC-Anand M', date: '22 Mar 2026', severity: 'Critical', disposition: 'Reject', status: 'Open' },
  { id: 'NCR-2026-0086', wo: 'WO-2526-10007', product: 'GT-RF450', defect: 'Thread Go/No-Go failure M8', qty: 6, plant: 'Hosur', stage: 'CNC Machining', detectedBy: 'QC-Patricia S', date: '21 Mar 2026', severity: 'Minor', disposition: 'Rework', status: 'Closed' },
  { id: 'NCR-2026-0085', wo: 'WO-2526-10004', product: 'GT-C300', defect: 'Paint peeling on discharge flange', qty: 2, plant: 'Hosur', stage: 'Paint / Coating', detectedBy: 'QC-Patricia S', date: '20 Mar 2026', severity: 'Minor', disposition: 'Rework', status: 'Closed' },
  { id: 'NCR-2026-0084', wo: 'WO-2526-10002', product: 'GT-LF700', defect: 'Vibration 4.2 mm/s (limit 4.0)', qty: 1, plant: 'Pune', stage: 'Testing', detectedBy: 'QC-Dinesh N', date: '19 Mar 2026', severity: 'Major', disposition: 'Conditional Accept', status: 'Closed' },
  { id: 'NCR-2026-0083', wo: 'WO-2526-10008', product: 'GT-DF500', defect: 'Weld undercut 0.6mm (limit 0.3mm)', qty: 1, plant: 'Pune', stage: 'Welding', detectedBy: 'QC-Dinesh N', date: '18 Mar 2026', severity: 'Major', disposition: 'Repair & Re-NDT', status: 'Closed' },
  { id: 'NCR-2026-0082', wo: 'WO-2526-10011', product: 'GT-LF600', defect: 'Bearing noise at 3000 RPM', qty: 1, plant: 'Coimbatore', stage: 'Assembly', detectedBy: 'QC-Anand M', date: '17 Mar 2026', severity: 'Minor', disposition: 'Replace & Retest', status: 'Closed' },
];

const STATUS_COLOR = { Open: 'red', 'In Progress': 'amber', Closed: 'green' };
const SEVERITY_COLOR = { Critical: 'red', Major: 'amber', Minor: 'gray' };

export default function NCRList() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>NCR & Disposition</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Non-conformance reports, root cause analysis, and disposition tracking</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Open NCRs" value="2" sub="awaiting resolution" icon="report" iconType="dn" />
        <KpiCard label="In Progress" value="1" sub="being worked on" icon="engineering" iconType="w" />
        <KpiCard label="Closed (MTD)" value="12" sub="resolved this month" icon="check_circle" iconType="up" />
        <KpiCard label="Avg Closure" value="3.2 days" sub="time to resolve" icon="schedule" change="-0.8d vs avg" changeType="up" />
        <KpiCard label="Cost Impact" value="INR 1.8L" sub="MTD NCR cost" icon="currency_rupee" iconType="dn" />
      </div>

      <SectionLabel icon="report">NCR Register ({NCR_DATA.length})</SectionLabel>
      <DataTable
        headers={['NCR #', 'WO #', 'Product', 'Defect Description', 'Qty', 'Plant', 'Stage', 'Detected By', 'Date', 'Severity', 'Disposition', 'Status']}
        rows={NCR_DATA.map(n => [
          { v: n.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: n.wo, style: { fontFamily: 'var(--m)' } },
          n.product,
          n.defect,
          { v: n.qty, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          n.plant,
          n.stage,
          n.detectedBy,
          n.date,
          <Badge label={n.severity} color={SEVERITY_COLOR[n.severity]} />,
          { v: n.disposition, style: { fontSize: '.73rem', fontWeight: 600 } },
          <Badge label={n.status} color={STATUS_COLOR[n.status]} />,
        ])}
      />
    </>
  );
}
