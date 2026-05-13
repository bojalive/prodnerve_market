import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const GENEALOGY_DATA = [
  { serial: 'EG-4022-WIS', product: 'AQ-C200', component: 'Male Rotor', partNo: 'EG22-ROT-M', batch: 'HT-4482', heatNo: 'EN8-2026-442', supplier: 'In-house CNC', mtc: 'MTC-4482', incomingQC: 'Pass', date: '18 Mar 2026' },
  { serial: 'EG-4022-WIS', product: 'AQ-C200', component: 'Female Rotor', partNo: 'EG22-ROT-F', batch: 'HT-4483', heatNo: 'EN8-2026-443', supplier: 'In-house CNC', mtc: 'MTC-4483', incomingQC: 'Pass', date: '18 Mar 2026' },
  { serial: 'EG-4022-WIS', product: 'AQ-C200', component: 'Housing Body', partNo: 'EG22-HSG-01', batch: 'CST-2289', heatNo: 'FG260-2026-89', supplier: 'Samam Castings', mtc: 'MTC-2289', incomingQC: 'Pass', date: '15 Mar 2026' },
  { serial: 'EG-4022-WIS', product: 'AQ-C200', component: 'SKF 6210-2Z Bearing', partNo: 'BRG-6210-2Z', batch: 'BRG-7741', heatNo: '--', supplier: 'SKF India', mtc: '--', incomingQC: 'Pass', date: '12 Mar 2026' },
  { serial: 'EG-4022-WIS', product: 'AQ-C200', component: 'Shaft Seal Kit', partNo: 'EG22-SEAL-01', batch: 'SK-1128', heatNo: '--', supplier: 'Freudenberg India', mtc: '--', incomingQC: 'Pass', date: '14 Mar 2026' },
  { serial: 'AB-3018-HSR', product: 'AQ-OW400', component: 'Scroll Element', partNo: 'AB30-SCR-01', batch: 'HT-4490', heatNo: 'SS304-2026-90', supplier: 'In-house CNC', mtc: 'MTC-4490', incomingQC: 'Pass', date: '16 Mar 2026' },
  { serial: 'AB-3018-HSR', product: 'AQ-OW400', component: 'Motor Assembly', partNo: 'AB30-MOT-01', batch: 'MOT-8842', heatNo: '--', supplier: 'Siemens India', mtc: '--', incomingQC: 'Pass', date: '10 Mar 2026' },
  { serial: 'TS-1055-PNE', product: 'AQ-JT75', component: 'Piston Kit', partNo: 'TS5-PST-01', batch: 'PK-3321', heatNo: 'EN8-2026-321', supplier: 'In-house CNC', mtc: 'MTC-3321', incomingQC: 'Pass', date: '14 Mar 2026' },
  { serial: 'TS-1055-PNE', product: 'AQ-JT75', component: 'Connecting Rod', partNo: 'TS5-CON-01', batch: 'CR-2204', heatNo: 'EN24-2026-04', supplier: 'L&T Infrastructure', mtc: 'MTC-2204', incomingQC: 'Pass', date: '12 Mar 2026' },
  { serial: 'VSD-6014-JMP', product: 'VSD-200', component: 'VFD Controller', partNo: 'VSD200-VFD', batch: 'VFD-0548', heatNo: '--', supplier: 'ABB India', mtc: '--', incomingQC: 'Pass', date: '11 Mar 2026' },
];

export default function BatchGenealogy() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Batch Genealogy</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Full material-to-product traceability -- batch numbers, heat numbers, MTCs, and supplier chain</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Units Traced" value="42" sub="with full genealogy" icon="account_tree" iconType="up" />
        <KpiCard label="Unique Batches" value="86" sub="material batches" icon="inventory_2" />
        <KpiCard label="Suppliers" value="14" sub="with active batches" icon="factory" />
        <KpiCard label="MTC Coverage" value="100%" sub="all castings/forgings" icon="description" iconType="up" />
      </div>

      <SectionLabel icon="account_tree">Genealogy Trace ({GENEALOGY_DATA.length})</SectionLabel>
      <DataTable
        headers={['Unit Serial', 'Product', 'Component', 'Part No', 'Batch/Lot', 'Heat No', 'Supplier', 'MTC Ref', 'Incoming QC', 'Date']}
        rows={GENEALOGY_DATA.map(g => [
          { v: g.serial, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          g.product,
          g.component,
          { v: g.partNo, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          { v: g.batch, style: { fontFamily: 'var(--m)' } },
          { v: g.heatNo, style: { fontFamily: 'var(--m)', color: g.heatNo === '--' ? 'var(--text-mute)' : 'var(--text)' } },
          g.supplier,
          { v: g.mtc, style: { fontFamily: 'var(--m)', color: g.mtc === '--' ? 'var(--text-mute)' : 'var(--text)' } },
          <Badge label={g.incomingQC} color="green" />,
          g.date,
        ])}
      />
    </>
  );
}
