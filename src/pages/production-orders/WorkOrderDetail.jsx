import React from 'react';
import { MI, KpiCard, SectionLabel, DataTable, Badge, StatusDot } from '../../components/ui';

const WO = {
  wo: 'WO-2526-10001', product: 'EG-22 Screw Compressor', customer: 'Tata Motors Ltd',
  plant: 'Coimbatore', status: 'In Progress', priority: 'High',
  orderQty: 48, completed: 38, rejected: 2, yield: 95.0,
};

const OPERATIONS = [
  { seq: 10, name: 'Raw Material Cutting', wc: 'WC-CUT-01', machine: 'CNC Plasma P-400', status: 'Completed', good: 48, reject: 0 },
  { seq: 20, name: 'CNC Turning', wc: 'WC-TRN-02', machine: 'Mazak QT-250', status: 'Completed', good: 47, reject: 1 },
  { seq: 30, name: 'CNC Milling', wc: 'WC-MIL-01', machine: 'DMG MORI CMX-600', status: 'Completed', good: 46, reject: 1 },
  { seq: 40, name: 'Welding & Fabrication', wc: 'WC-WLD-03', machine: 'Fronius TPS 400i', status: 'In Progress', good: 38, reject: 0 },
  { seq: 50, name: 'Surface Treatment', wc: 'WC-SRF-01', machine: 'Shot Blast SB-200', status: 'Pending', good: 0, reject: 0 },
  { seq: 60, name: 'Assembly', wc: 'WC-ASM-02', machine: 'Assembly Line A2', status: 'Pending', good: 0, reject: 0 },
  { seq: 70, name: 'Testing & QC', wc: 'WC-TST-01', machine: 'Test Bench TB-100', status: 'Pending', good: 0, reject: 0 },
  { seq: 80, name: 'Painting', wc: 'WC-PNT-01', machine: 'Powder Coat PC-300', status: 'Pending', good: 0, reject: 0 },
];

const MATERIALS = [
  { code: 'RM-CS-1045', desc: 'Carbon Steel Bar 1045 (Dia 80mm)', required: 960, issued: 960, uom: 'Kg', batch: 'BT-2526-4421' },
  { code: 'RM-AL-6061', desc: 'Aluminium Alloy 6061 Sheet', required: 240, issued: 240, uom: 'Kg', batch: 'BT-2526-4398' },
  { code: 'CP-BRG-SKF', desc: 'SKF 6205-2RS Bearing', required: 96, issued: 80, uom: 'Nos', batch: 'BT-2526-4510' },
  { code: 'CP-SEAL-VT', desc: 'Viton O-Ring Seal Kit', required: 48, issued: 48, uom: 'Sets', batch: 'BT-2526-4455' },
  { code: 'CP-MTR-SIM', desc: 'Siemens 22kW Motor', required: 48, issued: 42, uom: 'Nos', batch: 'BT-2526-4501' },
  { code: 'PM-PNT-RAL', desc: 'RAL 5015 Powder Coat Paint', required: 120, issued: 0, uom: 'Kg', batch: '--' },
];

const TIMELINE = [
  { ts: '23 Mar 2026 09:15', action: 'Op 40 started', user: 'Rajesh K (Supervisor)', icon: 'play_circle' },
  { ts: '22 Mar 2026 17:30', action: 'Op 30 completed -- 46 good, 1 rejected (dimensional)', user: 'Vijay M (Operator)', icon: 'check_circle' },
  { ts: '21 Mar 2026 14:00', action: 'Additional material issued -- SKF bearings x 80', user: 'Stores - Anand P', icon: 'inventory' },
  { ts: '20 Mar 2026 08:00', action: 'Op 20 completed -- 47 good, 1 rejected (surface defect)', user: 'Karthik R (Operator)', icon: 'check_circle' },
  { ts: '18 Mar 2026 16:45', action: 'WO released to shop floor', user: 'Senthil N (Planner)', icon: 'send' },
  { ts: '17 Mar 2026 10:30', action: 'Work Order created', user: 'Priya S (Planning)', icon: 'note_add' },
];

const opStatusColor = (s) => {
  if (s === 'Completed') return 'green';
  if (s === 'In Progress') return 'amber';
  return 'gray';
};

export default function WorkOrderDetail({ navigate }) {
  return (
    <>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5, fontFamily: 'var(--m)' }}>{WO.wo}</h2>
            <Badge label={WO.status} color="green" />
            <span style={{ fontSize: '.72rem', fontWeight: 600, color: 'var(--red)', background: 'var(--red10)', padding: '2px 8px', borderRadius: 10 }}>{WO.priority}</span>
          </div>
          <p style={{ color: 'var(--text-dim)', fontSize: '.78rem' }}>{WO.product} -- {WO.customer} -- {WO.plant}</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-secondary" onClick={() => navigate && navigate('production-orders', 'list')}>
            <MI size={16}>arrow_back</MI>Back
          </button>
          <button className="btn btn-primary">
            <MI size={16}>print</MI>Print
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Order Quantity" value={WO.orderQty.toString()} sub="units ordered" icon="shopping_cart" />
        <KpiCard label="Completed" value={WO.completed.toString()} sub={`${Math.round(WO.completed / WO.orderQty * 100)}% of order`} change={`${WO.orderQty - WO.completed} remaining`} changeType="w" icon="check_circle" />
        <KpiCard label="Rejected" value={WO.rejected.toString()} sub="units rejected" icon="cancel" iconType="dn" />
        <KpiCard label="Yield" value={`${WO.yield}%`} sub="first pass yield" change="+0.5% vs avg" changeType="up" icon="verified" />
      </div>

      {/* Operations */}
      <SectionLabel icon="account_tree">Operations</SectionLabel>
      <DataTable
        title="Operation Progress"
        headers={['Op Seq', 'Operation', 'Work Center', 'Machine', 'Status', 'Good Qty', 'Reject Qty']}
        rows={OPERATIONS.map(op => [
          { v: op.seq, style: { fontWeight: 600, fontFamily: 'var(--m)' } },
          op.name,
          { v: op.wc, style: { fontFamily: 'var(--m)', fontSize: '.74rem' } },
          op.machine,
          <Badge label={op.status} color={opStatusColor(op.status)} />,
          { v: op.good, style: { fontFamily: 'var(--m)', color: op.good > 0 ? 'var(--green)' : 'var(--text-mute)' } },
          { v: op.reject, style: { fontFamily: 'var(--m)', color: op.reject > 0 ? 'var(--red)' : 'var(--text-mute)' } },
        ])}
      />

      <div style={{ height: 18 }} />

      {/* Material Consumption */}
      <SectionLabel icon="inventory_2">Material Consumption</SectionLabel>
      <DataTable
        title="BOM Materials"
        headers={['Material Code', 'Description', 'Required', 'Issued', 'UOM', 'Batch / Heat #']}
        rows={MATERIALS.map(m => [
          { v: m.code, style: { fontWeight: 600, fontFamily: 'var(--m)' } },
          m.desc,
          { v: m.required, style: { fontFamily: 'var(--m)' } },
          { v: m.issued, style: { fontFamily: 'var(--m)', color: m.issued < m.required ? 'var(--amber)' : 'var(--green)', fontWeight: 600 } },
          m.uom,
          { v: m.batch, style: { fontFamily: 'var(--m)', fontSize: '.74rem' } },
        ])}
      />

      <div style={{ height: 18 }} />

      {/* Timeline */}
      <SectionLabel icon="timeline">Audit Trail</SectionLabel>
      <div className="card" style={{ padding: 20 }}>
        {TIMELINE.map((t, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, paddingBottom: i < TIMELINE.length - 1 ? 16 : 0, marginBottom: i < TIMELINE.length - 1 ? 16 : 0, borderBottom: i < TIMELINE.length - 1 ? '1px solid var(--border)' : 'none' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--accent10)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <MI size={16} style={{ color: 'var(--accent)' }}>{t.icon}</MI>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '.82rem', fontWeight: 600 }}>{t.action}</div>
              <div style={{ fontSize: '.7rem', color: 'var(--text-mute)', marginTop: 2 }}>{t.user} -- {t.ts}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: 18 }} />

      {/* Approval buttons */}
      <div className="card" style={{ padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '.82rem', fontWeight: 600 }}>Pending Actions</span>
          <span style={{ fontSize: '.72rem', color: 'var(--text-mute)', marginLeft: 8 }}>QC clearance required for Op 40</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-danger"><MI size={16}>block</MI>Reject</button>
          <button className="btn btn-primary"><MI size={16}>check</MI>Approve</button>
        </div>
      </div>
    </>
  );
}
