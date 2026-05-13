import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const TRACE_DATA = [
  { serial: 'IC-4022-PCL', component: 'Male Rotor', partNo: 'IC24-PCB-M', batch: 'HT-4482', supplier: 'In-house CNC', wo: 'WO-2526-10001', date: '23 Mar 2026', station: 'Stn 3', status: 'Installed' },
  { serial: 'IC-4022-PCL', component: 'Female Rotor', partNo: 'EG22-ROT-F', batch: 'HT-4483', supplier: 'In-house CNC', wo: 'WO-2526-10001', date: '23 Mar 2026', station: 'Stn 3', status: 'Installed' },
  { serial: 'IC-4022-PCL', component: 'Housing Body', partNo: 'EG22-HSG-01', batch: 'CST-2289', supplier: 'Samam Castings', wo: 'WO-2526-10001', date: '23 Mar 2026', station: 'Stn 5', status: 'Installed' },
  { serial: 'IC-4022-PCL', component: 'SKF 6210-2Z Bearing', partNo: 'BRG-6210-2Z', batch: 'BRG-7741', supplier: 'SKF India', wo: 'WO-2526-10001', date: '23 Mar 2026', station: 'Stn 6', status: 'Installed' },
  { serial: 'IC-4022-PCL', component: 'Shaft Seal Kit', partNo: 'EG22-SEAL-01', batch: 'SK-1128', supplier: 'Freudenberg India', wo: 'WO-2526-10001', date: '23 Mar 2026', station: 'Stn 4', status: 'Installed' },
  { serial: 'AB-3018-HSR', component: 'Scroll Element', partNo: 'AB30-SCR-01', batch: 'HT-4490', supplier: 'In-house CNC', wo: 'WO-2526-10006', date: '23 Mar 2026', station: 'Stn 7', status: 'Installed' },
  { serial: 'AB-3018-HSR', component: 'Motor Assembly', partNo: 'AB30-MOT-01', batch: 'MOT-8842', supplier: 'Siemens India', wo: 'WO-2526-10006', date: '23 Mar 2026', station: 'Stn 8', status: 'Installed' },
  { serial: 'TS-1055-PNE', component: 'Piston Kit', partNo: 'TS5-PST-01', batch: 'PK-3321', supplier: 'In-house CNC', wo: 'WO-2526-10003', date: '22 Mar 2026', station: 'Stn 11', status: 'Installed' },
  { serial: 'TS-1055-PNE', component: 'Connecting Rod', partNo: 'TS5-CON-01', batch: 'CR-2204', supplier: 'Bharat Forge', wo: 'WO-2526-10003', date: '22 Mar 2026', station: 'Stn 11', status: 'Installed' },
  { serial: 'VSD-6014-JMP', component: 'VFD Controller', partNo: 'VSD200-VFD', batch: 'VFD-0548', supplier: 'ABB India', wo: 'WO-2526-10005', date: '22 Mar 2026', station: 'Stn 10', status: 'Installed' },
];

export default function Traceability() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Component Traceability</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Full component-to-serial traceability for every assembled unit</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Units Traced" value="42" sub="today's assemblies" icon="qr_code_2" iconType="up" />
        <KpiCard label="Components Logged" value="186" sub="individual parts" icon="inventory_2" />
        <KpiCard label="Unique Suppliers" value="14" sub="component sources" icon="factory" />
        <KpiCard label="Traceability Score" value="100%" sub="all parts linked" icon="check_circle" iconType="up" />
      </div>

      <SectionLabel icon="account_tree">Component Trace Log ({TRACE_DATA.length})</SectionLabel>
      <DataTable
        headers={['Unit Serial', 'Component', 'Part No', 'Batch/Lot #', 'Supplier', 'Work Order', 'Date', 'Station', 'Status']}
        rows={TRACE_DATA.map(t => [
          { v: t.serial, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          t.component,
          { v: t.partNo, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          { v: t.batch, style: { fontFamily: 'var(--m)' } },
          t.supplier,
          { v: t.wo, style: { fontFamily: 'var(--m)' } },
          t.date,
          t.station,
          <Badge label={t.status} color="green" />,
        ])}
      />
    </>
  );
}
