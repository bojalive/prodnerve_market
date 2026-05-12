import React, { useState } from 'react';
import { MI, KpiCard, SectionLabel, DataTable, FormField, Badge } from '../../components/ui';

const SPARE_REQUESTS = [
  { id: 'SR-4001', part: 'Spindle Bearing 7210-BEP', partNo: 'SKF-7210-BEP', machine: 'CNC-A06', qty: 2, estCost: '14,200', requester: 'Greg T', reqDate: '23 Mar 2026', need: 'Urgent', vendor: 'SKF India', status: 'Approved' },
  { id: 'SR-4002', part: 'Hydraulic Pump Seal Kit', partNo: 'HPS-TST-E02', machine: 'TST-E02', qty: 1, estCost: '3,800', requester: 'Patrick D', reqDate: '23 Mar 2026', need: 'Urgent', vendor: 'Parker Hannifin', status: 'Ordered' },
  { id: 'SR-4003', part: 'Pneumatic Cylinder 50x100', partNo: 'SMC-CQ2B50-100', machine: 'CNC-A02', qty: 1, estCost: '8,400', requester: 'Marcus R', reqDate: '22 Mar 2026', need: 'Normal', vendor: 'SMC India', status: 'Received' },
  { id: 'SR-4004', part: 'Spray Gun Nozzle 1.4mm', partNo: 'SGN-SATA-1.4', machine: 'PNT-F01', qty: 3, estCost: '2,100', requester: 'Marcus R', reqDate: '22 Mar 2026', need: 'Normal', vendor: 'SATA India', status: 'Received' },
  { id: 'SR-4005', part: 'Coolant Pump Motor 1HP', partNo: 'CPM-1HP-415V', machine: 'GRD-C04', qty: 1, estCost: '12,800', requester: 'Greg T', reqDate: '22 Mar 2026', need: 'Urgent', vendor: 'Crompton Greaves', status: 'Ordered' },
  { id: 'SR-4006', part: 'Guideway Wiper Set', partNo: 'GW-MAZAK-QTN', machine: 'CNC-A02', qty: 1, estCost: '4,600', requester: 'Patrick D', reqDate: '21 Mar 2026', need: 'Normal', vendor: 'Mazak India', status: 'Pending' },
  { id: 'SR-4007', part: 'Torque Sensor 50Nm', partNo: 'TS-HBM-T22-50', machine: 'ASM-D01', qty: 1, estCost: '42,000', requester: 'Patrick D', reqDate: '21 Mar 2026', need: 'Normal', vendor: 'HBM India', status: 'Pending' },
  { id: 'SR-4008', part: 'Conveyor Belt 3m', partNo: 'CB-EPP-3000', machine: 'ASM-D03', qty: 1, estCost: '6,200', requester: 'Patrick D', reqDate: '20 Mar 2026', need: 'Normal', vendor: 'Fenner India', status: 'Approved' },
];

const STATUS_COLOR = { Pending: 'amber', Approved: 'accent', Ordered: 'green', Received: 'green', Rejected: 'red' };
const NEED_COLOR = { Urgent: 'red', Normal: 'accent' };

export default function SpareRequest() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
        <div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Spare Parts Requests</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Request, approve, and track spare part procurement</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <MI size={16}>add</MI>New Request
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Open Requests" value="4" sub="pending/approved" icon="settings" iconType="w" />
        <KpiCard label="On Order" value="2" sub="placed with vendor" icon="local_shipping" iconType="up" />
        <KpiCard label="MTD Spend" value="INR 94.1K" sub="spare parts cost" icon="currency_rupee" change="+8% vs budget" changeType="dn" />
        <KpiCard label="Avg Lead Time" value="3.2 days" sub="order to receipt" icon="schedule" change="-0.8d vs avg" changeType="up" />
      </div>

      {showForm && (
        <div className="card" style={{ padding: 20, marginBottom: 20 }}>
          <SectionLabel icon="settings">New Spare Request</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
            <FormField label="Part Description"><input className="form-input" placeholder="e.g. Spindle Bearing" /></FormField>
            <FormField label="Part Number"><input className="form-input" placeholder="e.g. SKF-7210-BEP" /></FormField>
            <FormField label="For Machine"><select className="form-select"><option value="">-- Select --</option><option>CNC-A01</option><option>CNC-A02</option><option>VMC-B01</option><option>GRD-C01</option><option>TST-E01</option></select></FormField>
            <FormField label="Quantity"><input className="form-input" type="number" placeholder="1" /></FormField>
            <FormField label="Urgency"><select className="form-select"><option>Normal</option><option>Urgent</option></select></FormField>
            <FormField label="Est. Cost (INR)"><input className="form-input" type="number" placeholder="0" /></FormField>
          </div>
          <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
            <button className="btn btn-primary">Submit Request</button>
            <button className="btn" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      <SectionLabel icon="list_alt">Spare Requests ({SPARE_REQUESTS.length})</SectionLabel>
      <DataTable
        headers={['SR #', 'Part Description', 'Part No', 'Machine', 'Qty', 'Est. Cost (INR)', 'Requester', 'Date', 'Need', 'Vendor', 'Status']}
        rows={SPARE_REQUESTS.map(s => [
          { v: s.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: s.part, style: { fontWeight: 600 } },
          { v: s.partNo, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          { v: s.machine, style: { fontFamily: 'var(--m)' } },
          { v: s.qty, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: s.estCost, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          s.requester,
          s.reqDate,
          <Badge label={s.need} color={NEED_COLOR[s.need]} />,
          s.vendor,
          <Badge label={s.status} color={STATUS_COLOR[s.status]} />,
        ])}
      />
    </>
  );
}
