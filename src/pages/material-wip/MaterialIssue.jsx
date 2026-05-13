import React, { useState } from 'react';
import { MI, KpiCard, SectionLabel, DataTable, Badge, FormField, Modal } from '../../components/ui';

const RECENT_ISSUES = [
  { id: 'MI-2526-10001', wo: 'WO-2526-10001', material: 'EN8 Round Bar 65mm', batch: 'HT-4482', qtyReq: 96, qtyIssued: 96, uom: 'Nos', store: 'RM-A1-03', issuedBy: 'Karthik V', receivedBy: 'Saravanan T', date: '23 Mar 2026', status: 'Issued' },
  { id: 'MI-2526-10002', wo: 'WO-2526-10003', material: 'CI Casting Body 5HP', batch: 'CST-2289', qtyReq: 120, qtyIssued: 120, uom: 'Nos', store: 'RM-B2-07', issuedBy: 'Patrick R', receivedBy: 'Karthik V', date: '23 Mar 2026', status: 'Issued' },
  { id: 'MI-2526-10003', wo: 'WO-2526-10006', material: 'SS304 Rotor Blank', batch: 'HT-4490', qtyReq: 16, qtyIssued: 16, uom: 'Nos', store: 'RM-A2-01', issuedBy: 'Anand M', receivedBy: 'Ramesh S', date: '23 Mar 2026', status: 'Issued' },
  { id: 'MI-2526-10004', wo: 'WO-2526-10002', material: 'Copper Winding Wire 1.2mm', batch: 'CW-1187', qtyReq: 48, qtyIssued: 45, uom: 'Kg', store: 'RM-C1-02', issuedBy: 'Karthik V', receivedBy: 'Dinesh N', date: '22 Mar 2026', status: 'Partial' },
  { id: 'MI-2526-10005', wo: 'WO-2526-10008', material: 'SKF 6210-2Z Bearing', batch: 'BRG-7741', qtyReq: 24, qtyIssued: 24, uom: 'Nos', store: 'RM-D1-05', issuedBy: 'Patrick R', receivedBy: 'Saravanan T', date: '22 Mar 2026', status: 'Issued' },
  { id: 'MI-2526-10006', wo: 'WO-2526-10004', material: 'Gasket Set PA-625', batch: 'GS-0923', qtyReq: 32, qtyIssued: 32, uom: 'Sets', store: 'RM-A3-09', issuedBy: 'Anand M', receivedBy: 'Karthik V', date: '22 Mar 2026', status: 'Issued' },
  { id: 'MI-2526-10007', wo: 'WO-2526-10011', material: 'Aluminium Die Cast Cover', batch: 'ADC-3310', qtyReq: 72, qtyIssued: 60, uom: 'Nos', store: 'RM-B1-04', issuedBy: 'Karthik V', receivedBy: 'Ramesh S', date: '21 Mar 2026', status: 'Partial' },
  { id: 'MI-2526-10008', wo: 'WO-2526-10007', material: 'Epoxy Paint RAL 5015', batch: 'EP-2207', qtyReq: 80, qtyIssued: 80, uom: 'Ltr', store: 'RM-E1-01', issuedBy: 'Patrick R', receivedBy: 'Dinesh N', date: '21 Mar 2026', status: 'Issued' },
];

const STATUS_COLOR = { Issued: 'green', Partial: 'amber', Pending: 'red' };

export default function MaterialIssue() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
        <div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Material Issue</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Issue raw materials to production work orders</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowForm(true)} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <MI size={16}>add</MI>New Issue
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Issues Today" value="24" sub="material transactions" icon="inventory_2" iconType="up" change="+6 vs yesterday" changeType="up" />
        <KpiCard label="Pending Returns" value="6" sub="items to return" icon="assignment_return" iconType="w" />
        <KpiCard label="BOM Variance" value="2.1%" sub="avg qty deviation" icon="difference" iconType="w" change="-0.3% WoW" changeType="up" />
        <KpiCard label="Value Issued" value="INR 18.4L" sub="today's issues" icon="currency_rupee" iconType="up" change="+12% vs avg" changeType="up" />
      </div>

      <SectionLabel icon="list_alt">Recent Issues ({RECENT_ISSUES.length})</SectionLabel>
      <DataTable
        headers={['Issue #', 'WO #', 'Material', 'Batch/Heat #', 'Qty Req', 'Qty Issued', 'UOM', 'Store', 'Issued By', 'Received By', 'Date', 'Status']}
        rows={RECENT_ISSUES.map(r => [
          { v: r.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: r.wo, style: { fontFamily: 'var(--m)' } },
          r.material,
          { v: r.batch, style: { fontFamily: 'var(--m)' } },
          { v: r.qtyReq, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: r.qtyIssued, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          r.uom,
          { v: r.store, style: { fontFamily: 'var(--m)' } },
          r.issuedBy,
          r.receivedBy,
          r.date,
          <Badge label={r.status} color={STATUS_COLOR[r.status]} />,
        ])}
      />

      <Modal open={showForm} onClose={() => setShowForm(false)} title="Issue Material to Production" width={640}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <FormField label="Work Order #"><input className="input" placeholder="WO-2526-XXXXX" /></FormField>
          <FormField label="Material Code"><input className="input" placeholder="e.g. EN8-RB-65" /></FormField>
          <FormField label="Description" hint="Auto-fills from material code"><input className="input" disabled placeholder="(auto-fill)" /></FormField>
          <FormField label="Batch / Heat #"><input className="input" placeholder="HT-XXXX" /></FormField>
          <FormField label="Qty Required (BOM)"><input className="input" type="number" placeholder="0" /></FormField>
          <FormField label="Qty Issuing"><input className="input" type="number" placeholder="0" /></FormField>
          <FormField label="UOM">
            <select className="input"><option>Nos</option><option>Kg</option><option>Ltr</option><option>Mtr</option><option>Sets</option></select>
          </FormField>
          <FormField label="Store Location"><input className="input" placeholder="RM-XX-XX" /></FormField>
          <FormField label="Issued By">
            <select className="input"><option>Karthik V</option><option>Patrick R</option><option>Anand M</option></select>
          </FormField>
          <FormField label="Received By">
            <select className="input"><option>Saravanan T</option><option>Karthik V</option><option>Ramesh S</option><option>Dinesh N</option></select>
          </FormField>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 18 }}>
          <button className="btn" onClick={() => setShowForm(false)}>Cancel</button>
          <button className="btn btn-primary" onClick={() => setShowForm(false)}>Issue Material</button>
        </div>
      </Modal>
    </>
  );
}
