import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const PLANTS = [
  { code: 'CBE', name: 'Coimbatore', address: 'Mettupalayam Road Industrial Estate, Coimbatore, TN', area: '45,000 sq ft', lines: 8, headcount: 79, products: 'AQ-C, AQ-S Series', gst: '33AABXX1234X1Z5', established: '2008', status: 'Active' },
  { code: 'HSR', name: 'Hosur', address: 'KIADB Industrial Area, Hosur, TN', area: '32,000 sq ft', lines: 6, headcount: 64, products: 'EG, TS Series', gst: '33AABXX1234X2Z4', established: '2012', status: 'Active' },
  { code: 'PNE', name: 'Pune', address: 'Chakan MIDC, Pune, MH', area: '28,000 sq ft', lines: 5, headcount: 52, products: 'AB, EG Series', gst: '27AABXX1234X3Z3', established: '2015', status: 'Active' },
  { code: 'AMD', name: 'Ahmedabad', address: 'Sanand GIDC, Ahmedabad, GJ', area: '20,000 sq ft', lines: 4, headcount: 45, products: 'VSD, DS Series', gst: '24AABXX1234X4Z2', established: '2018', status: 'Active' },
  { code: 'JMP', name: 'Jamshedpur', address: 'Adityapur Industrial Area, Jamshedpur, JH', area: '35,000 sq ft', lines: 6, headcount: 58, products: 'TS, VSD Series', gst: '20AABXX1234X5Z1', established: '2010', status: 'Active' },
];

export default function PlantSetup() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Plant Setup</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Manufacturing plant configuration and basic details</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Total Plants" value="5" sub="manufacturing locations" icon="factory" />
        <KpiCard label="Total Area" value="1,60,000 sq ft" sub="combined floor area" icon="square_foot" />
        <KpiCard label="Production Lines" value="29" sub="across all plants" icon="precision_manufacturing" />
        <KpiCard label="Total Headcount" value="298" sub="all plants combined" icon="people" />
      </div>

      <SectionLabel icon="factory">Plant Registry ({PLANTS.length})</SectionLabel>
      <DataTable
        headers={['Code', 'Plant Name', 'Address', 'Area', 'Lines', 'HC', 'Products', 'GST No', 'Est.', 'Status']}
        rows={PLANTS.map(p => [
          { v: p.code, style: { fontWeight: 700, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: p.name, style: { fontWeight: 600 } },
          { v: p.address, style: { fontSize: '.73rem' } },
          { v: p.area, style: { fontFamily: 'var(--m)' } },
          { v: p.lines, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: p.headcount, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          p.products,
          { v: p.gst, style: { fontFamily: 'var(--m)', fontSize: '.68rem' } },
          p.established,
          <Badge label={p.status} color="green" />,
        ])}
      />
    </>
  );
}
