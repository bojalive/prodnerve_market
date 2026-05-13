import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const INVENTORY_DATA = [
  { code: 'EN8-RB-65', desc: 'EN8 Round Bar 65mm', category: 'Raw Material', uom: 'Nos', onHand: 240, allocated: 192, available: 48, reorder: 100, value: 'INR 4.8L', location: 'RM-A1-03', status: 'OK' },
  { code: 'SS304-BLK', desc: 'SS304 Rotor Blank', category: 'Raw Material', uom: 'Nos', onHand: 42, allocated: 32, available: 10, reorder: 20, value: 'INR 6.3L', location: 'RM-A2-01', status: 'OK' },
  { code: 'CI-CST-5HP', desc: 'CI Casting Body 5HP', category: 'Castings', uom: 'Nos', onHand: 86, allocated: 120, available: -34, reorder: 60, value: 'INR 3.4L', location: 'RM-B2-07', status: 'Shortage' },
  { code: 'CW-1.2MM', desc: 'Copper Winding Wire 1.2mm', category: 'Raw Material', uom: 'Kg', onHand: 180, allocated: 96, available: 84, reorder: 50, value: 'INR 1.6L', location: 'RM-C1-02', status: 'OK' },
  { code: 'BRG-6210', desc: 'SKF 6210-2Z Bearing', category: 'Bought Out', uom: 'Nos', onHand: 68, allocated: 48, available: 20, reorder: 30, value: 'INR 2.0L', location: 'RM-D1-05', status: 'OK' },
  { code: 'GS-EG37', desc: 'Gasket Set AQ-C300', category: 'Bought Out', uom: 'Sets', onHand: 24, allocated: 32, available: -8, reorder: 20, value: 'INR 0.4L', location: 'RM-A3-09', status: 'Shortage' },
  { code: 'ADC-COVER', desc: 'Aluminium Die Cast Cover', category: 'Castings', uom: 'Nos', onHand: 142, allocated: 72, available: 70, reorder: 50, value: 'INR 5.7L', location: 'RM-B1-04', status: 'OK' },
  { code: 'EP-RAL5015', desc: 'Epoxy Paint RAL 5015', category: 'Consumables', uom: 'Ltr', onHand: 220, allocated: 80, available: 140, reorder: 100, value: 'INR 1.1L', location: 'RM-E1-01', status: 'OK' },
  { code: 'SL-EG22', desc: 'Shaft Seal Kit AQ-C200', category: 'Bought Out', uom: 'Sets', onHand: 18, allocated: 48, available: -30, reorder: 40, value: 'INR 0.5L', location: 'RM-A3-12', status: 'Shortage' },
  { code: 'VFD-ABB', desc: 'ABB VFD 200kW Module', category: 'Bought Out', uom: 'Nos', onHand: 12, allocated: 8, available: 4, reorder: 10, value: 'INR 14.4L', location: 'RM-D2-01', status: 'Low' },
];

const STATUS_COLOR = { OK: 'green', Low: 'amber', Shortage: 'red' };

export default function InventoryStatus() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Inventory Status</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Current stock levels, allocated quantities, and shortage alerts</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Total SKUs" value="486" sub="active materials" icon="warehouse" />
        <KpiCard label="Stock Value" value="INR 1.8 Cr" sub="total inventory" icon="currency_rupee" />
        <KpiCard label="Shortages" value="3" sub="items below zero avail" icon="error" iconType="dn" change="+1 vs yesterday" changeType="dn" />
        <KpiCard label="Low Stock" value="12" sub="below reorder point" icon="warning" iconType="w" />
        <KpiCard label="Turnover" value="8.4x" sub="annual inventory turns" icon="sync" iconType="up" />
      </div>

      <SectionLabel icon="warehouse">Stock Status ({INVENTORY_DATA.length})</SectionLabel>
      <DataTable
        headers={['Code', 'Description', 'Category', 'UOM', 'On Hand', 'Allocated', 'Available', 'Reorder Pt', 'Value (INR)', 'Location', 'Status']}
        rows={INVENTORY_DATA.map(i => [
          { v: i.code, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: i.desc, style: { fontWeight: 600 } },
          i.category,
          i.uom,
          { v: i.onHand, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: i.allocated, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: i.available, style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600, color: i.available < 0 ? 'var(--red)' : i.available <= i.reorder ? 'var(--amber)' : 'var(--green)' } },
          { v: i.reorder, style: { fontFamily: 'var(--m)', textAlign: 'right', color: 'var(--text-mute)' } },
          { v: i.value, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: i.location, style: { fontFamily: 'var(--m)' } },
          <Badge label={i.status} color={STATUS_COLOR[i.status]} />,
        ])}
      />
    </>
  );
}
