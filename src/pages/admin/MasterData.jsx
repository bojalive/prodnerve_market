import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const PRODUCTS = [
  { code: 'EG-22', name: 'Screw Compressor 22kW', series: 'EG', type: 'Oil-Injected Screw', pressure: '7.5-13 bar', flow: '3.2-5.6 m\u00b3/min', weight: '420 kg', bom: 186, price: 'INR 4,85,000', status: 'Active' },
  { code: 'EG-37', name: 'Screw Compressor 37kW', series: 'EG', type: 'Oil-Injected Screw', pressure: '7.5-13 bar', flow: '5.8-8.4 m\u00b3/min', weight: '580 kg', bom: 204, price: 'INR 6,20,000', status: 'Active' },
  { code: 'EG-55', name: 'Screw Compressor 55kW', series: 'EG', type: 'Oil-Injected Screw', pressure: '7.5-13 bar', flow: '8.2-11.8 m\u00b3/min', weight: '720 kg', bom: 228, price: 'INR 8,45,000', status: 'Active' },
  { code: 'AB-15', name: 'Oil-Free Compressor 15kW', series: 'AB', type: 'Oil-Free Scroll', pressure: '8-10 bar', flow: '1.4-2.2 m\u00b3/min', weight: '280 kg', bom: 142, price: 'INR 6,80,000', status: 'Active' },
  { code: 'AB-30', name: 'Oil-Free Compressor 30kW', series: 'AB', type: 'Oil-Free Scroll', pressure: '8-10 bar', flow: '2.8-4.2 m\u00b3/min', weight: '380 kg', bom: 168, price: 'INR 9,40,000', status: 'Active' },
  { code: 'TS-5', name: 'Piston Compressor 5HP', series: 'TS', type: 'Reciprocating Piston', pressure: '8-12 bar', flow: '0.4-0.8 m\u00b3/min', weight: '85 kg', bom: 78, price: 'INR 42,000', status: 'Active' },
  { code: 'TS-10', name: 'Piston Compressor 10HP', series: 'TS', type: 'Reciprocating Piston', pressure: '8-12 bar', flow: '0.8-1.6 m\u00b3/min', weight: '140 kg', bom: 94, price: 'INR 68,000', status: 'Active' },
  { code: 'VSD-200', name: 'Variable Speed Controller', series: 'VSD', type: 'VFD Controller', pressure: '--', flow: '--', weight: '12 kg', bom: 48, price: 'INR 1,85,000', status: 'Active' },
];

export default function MasterData() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Master Data</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Product master, BOM configuration, and pricing data</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Product Lines" value="5" sub="EG/AB/TS/DS/VSD" icon="category" />
        <KpiCard label="Active Products" value="22" sub="in production" icon="inventory_2" iconType="up" />
        <KpiCard label="Total BOMs" value="22" sub="bill of materials" icon="account_tree" />
        <KpiCard label="Avg BOM Items" value="148" sub="components per product" icon="list" />
      </div>

      <SectionLabel icon="category">Product Master ({PRODUCTS.length})</SectionLabel>
      <DataTable
        headers={['Code', 'Product Name', 'Series', 'Type', 'Pressure', 'Flow', 'Weight', 'BOM Items', 'List Price', 'Status']}
        rows={PRODUCTS.map(p => [
          { v: p.code, style: { fontWeight: 700, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: p.name, style: { fontWeight: 600 } },
          { v: p.series, style: { fontWeight: 600 } },
          p.type,
          { v: p.pressure, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          { v: p.flow, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          { v: p.weight, style: { fontFamily: 'var(--m)' } },
          { v: p.bom, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: p.price, style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600 } },
          <Badge label={p.status} color="green" />,
        ])}
      />
    </>
  );
}
