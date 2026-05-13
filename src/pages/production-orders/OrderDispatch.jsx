import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const DISPATCH_DATA = [
  { id: 'DSP-2001', wo: 'WO-2526-10004', product: 'PA-625 Hub Assembly', customer: 'Larsen & Toubro', qty: 16, plant: 'Hosur', invoiceNo: 'INV-2026-4821', invoiceAmt: 'INR 99.2L', vehicle: 'TN 04 AB 1234', dispatchDate: '22 Mar 2026', status: 'Dispatched' },
  { id: 'DSP-2002', wo: 'WO-2526-10010', product: 'BR-300 Aerospace Bracket', customer: 'Bharat Forge', qty: 60, plant: 'Jamshedpur', invoiceNo: 'INV-2026-4822', invoiceAmt: 'INR 40.8L', vehicle: 'JH 01 CD 5678', dispatchDate: '21 Mar 2026', status: 'Dispatched' },
  { id: 'DSP-2003', wo: 'WO-2526-10001', product: 'PA-450 Hub Assembly', customer: 'Siemens India Limited', qty: 48, plant: 'Coimbatore', invoiceNo: '--', invoiceAmt: 'INR 2.33 Cr', vehicle: '--', dispatchDate: '--', status: 'QC Pending' },
  { id: 'DSP-2004', wo: 'WO-2526-10003', product: 'BR-75 Aerospace Bracket', customer: 'Crompton Greaves', qty: 120, plant: 'Jamshedpur', invoiceNo: '--', invoiceAmt: 'INR 50.4L', vehicle: '--', dispatchDate: '--', status: 'QC Pending' },
  { id: 'DSP-2005', wo: 'WO-2526-10006', product: 'HC-500 Hydraulic Cyl Body', customer: 'Larsen & Toubro Limited', qty: 8, plant: 'Coimbatore', invoiceNo: '--', invoiceAmt: 'INR 75.2L', vehicle: '--', dispatchDate: '--', status: 'Packing' },
  { id: 'DSP-2006', wo: 'WO-2526-10008', product: 'PA-880 Hub Assembly', customer: 'Bharat Heavy Electricals', qty: 12, plant: 'Pune', invoiceNo: '--', invoiceAmt: 'INR 1.01 Cr', vehicle: '--', dispatchDate: '--', status: 'In Production' },
  { id: 'DSP-2007', wo: 'WO-2526-10009', product: 'VSD-100 Controller', customer: 'Internal', qty: 350, plant: 'Ahmedabad', invoiceNo: '--', invoiceAmt: '--', vehicle: '--', dispatchDate: '--', status: 'Not Started' },
  { id: 'DSP-2008', wo: 'WO-2526-10011', product: 'HC-100 Hydraulic Cyl Body', customer: 'Cipla Ltd', qty: 36, plant: 'Coimbatore', invoiceNo: '--', invoiceAmt: 'INR 62.4L', vehicle: '--', dispatchDate: '--', status: 'In Production' },
];

const STATUS_COLOR = { Dispatched: 'green', 'QC Pending': 'amber', Packing: 'accent', 'In Production': 'gray', 'Not Started': 'gray' };

export default function OrderDispatch() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Order Dispatch</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Dispatch scheduling, invoicing, and logistics tracking</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Dispatched MTD" value="8" sub="orders shipped" icon="local_shipping" iconType="up" change="+2 vs last month" changeType="up" />
        <KpiCard label="Ready for Dispatch" value="2" sub="QC pending" icon="pending" iconType="w" />
        <KpiCard label="Dispatch Value MTD" value="INR 4.2 Cr" sub="invoice total" icon="currency_rupee" iconType="up" change="+18% MoM" changeType="up" />
        <KpiCard label="On-Time Delivery" value="92%" sub="against committed date" icon="event_available" iconType="up" />
      </div>

      <SectionLabel icon="local_shipping">Dispatch Queue ({DISPATCH_DATA.length})</SectionLabel>
      <DataTable
        headers={['Dispatch #', 'WO #', 'Product', 'Customer', 'Qty', 'Plant', 'Invoice #', 'Invoice Amt', 'Vehicle', 'Dispatch Date', 'Status']}
        rows={DISPATCH_DATA.map(d => [
          { v: d.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: d.wo, style: { fontFamily: 'var(--m)' } },
          d.product,
          d.customer,
          { v: d.qty, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          d.plant,
          { v: d.invoiceNo, style: { fontFamily: 'var(--m)' } },
          { v: d.invoiceAmt, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: d.vehicle, style: { fontFamily: 'var(--m)' } },
          d.dispatchDate,
          <Badge label={d.status} color={STATUS_COLOR[d.status]} />,
        ])}
      />
    </>
  );
}
