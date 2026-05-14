import React, { useState } from 'react';
import { MI, KpiCard, SectionLabel, DataTable, Badge, FormField, Modal } from '../../components/ui';

const WIP_STAGES = [
  { stage: 'Raw Store', units: 340, value: '28.4L', avgAge: 1.2, status: 'Normal' },
  { stage: 'CNC Machining', units: 186, value: '42.8L', avgAge: 2.8, status: 'Normal' },
  { stage: 'Grinding', units: 94, value: '26.1L', avgAge: 3.1, status: 'Attention' },
  { stage: 'Assembly', units: 128, value: '58.6L', avgAge: 4.5, status: 'Normal' },
  { stage: 'Paint / Coating', units: 72, value: '34.2L', avgAge: 1.8, status: 'Normal' },
  { stage: 'Testing', units: 56, value: '28.9L', avgAge: 5.6, status: 'Attention' },
  { stage: 'Packing / Dispatch', units: 44, value: '12.0L', avgAge: 1.4, status: 'Normal' },
];

const MOVEMENTS = [
  { id: 'WM-10001', wo: 'WO-2526-10001', from: 'CNC Machining', to: 'Grinding', qty: 24, bin: 'BIN-A042', qc: 'Passed', movedBy: 'Shankar M', time: '23 Mar 14:22' },
  { id: 'WM-10002', wo: 'WO-2526-10003', from: 'Raw Store', to: 'CNC Machining', qty: 60, bin: 'BIN-B018', qc: 'Passed', movedBy: 'Karthikeyan V', time: '23 Mar 13:45' },
  { id: 'WM-10003', wo: 'WO-2526-10006', from: 'Assembly', to: 'Testing', qty: 4, bin: 'BIN-C007', qc: 'Conditional', movedBy: 'Sathish P', time: '23 Mar 12:30' },
  { id: 'WM-10004', wo: 'WO-2526-10008', from: 'Grinding', to: 'Assembly', qty: 6, bin: 'BIN-A055', qc: 'Passed', movedBy: 'Deepak N', time: '23 Mar 11:18' },
  { id: 'WM-10005', wo: 'WO-2526-10011', from: 'Testing', to: 'Packing / Dispatch', qty: 12, bin: 'BIN-D003', qc: 'Passed', movedBy: 'Shankar M', time: '23 Mar 10:05' },
  { id: 'WM-10006', wo: 'WO-2526-10002', from: 'CNC Machining', to: 'Grinding', qty: 8, bin: 'BIN-A061', qc: 'Passed', movedBy: 'Karthikeyan V', time: '23 Mar 09:40' },
  { id: 'WM-10007', wo: 'WO-2526-10007', from: 'Paint / Coating', to: 'Testing', qty: 20, bin: 'BIN-C012', qc: 'Passed', movedBy: 'Sathish P', time: '23 Mar 08:50' },
  { id: 'WM-10008', wo: 'WO-2526-10004', from: 'Assembly', to: 'Paint / Coating', qty: 8, bin: 'BIN-B024', qc: 'Conditional', movedBy: 'Deepak N', time: '22 Mar 16:15' },
];

const QC_COLOR = { Passed: 'green', Conditional: 'amber' };
const STAGE_COLOR = { Normal: 'green', Attention: 'amber' };

export default function WIPMovement() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
        <div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>WIP Movement</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Inter-station work-in-progress tracking</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowForm(true)} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <MI size={16}>swap_horiz</MI>Record Movement
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Total WIP Value" value="INR 2.3 Cr" sub="across all stages" icon="account_balance" iconType="up" />
        <KpiCard label="Avg WIP Age" value="4.2 days" sub="target < 5 days" icon="schedule" iconType="w" change="+0.3d WoW" changeType="w" />
        <KpiCard label="Quality Hold" value="18 units" sub="pending disposition" icon="block" iconType="dn" change="+4 vs last wk" changeType="dn" />
        <KpiCard label="Movements Today" value="34" sub="inter-station transfers" icon="sync_alt" iconType="up" />
      </div>

      <SectionLabel icon="layers">Current WIP by Stage</SectionLabel>
      <DataTable
        headers={['Stage', 'Units', 'Value (INR)', 'Avg Age (days)', 'Status']}
        rows={WIP_STAGES.map(s => [
          { v: s.stage, style: { fontWeight: 600 } },
          { v: s.units, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: s.value, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: s.avgAge.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          <Badge label={s.status} color={STAGE_COLOR[s.status]} />,
        ])}
      />

      <div style={{ marginTop: 22 }}>
        <SectionLabel icon="swap_horiz">Recent Movements</SectionLabel>
        <DataTable
          headers={['ID', 'WO #', 'From', 'To', 'Qty', 'Container/Bin', 'QC Status', 'Moved By', 'Time']}
          rows={MOVEMENTS.map(m => [
            { v: m.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
            { v: m.wo, style: { fontFamily: 'var(--m)' } },
            m.from,
            m.to,
            { v: m.qty, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
            { v: m.bin, style: { fontFamily: 'var(--m)' } },
            <Badge label={m.qc} color={QC_COLOR[m.qc]} />,
            m.movedBy,
            m.time,
          ])}
        />
      </div>

      <Modal open={showForm} onClose={() => setShowForm(false)} title="Record WIP Movement" width={580}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <FormField label="Work Order #"><input className="input" placeholder="WO-2526-XXXXX" /></FormField>
          <FormField label="Quantity"><input className="input" type="number" placeholder="0" /></FormField>
          <FormField label="From Work Center">
            <select className="input"><option>Raw Store</option><option>CNC Machining</option><option>Grinding</option><option>Assembly</option><option>Paint / Coating</option><option>Testing</option><option>Packing / Dispatch</option></select>
          </FormField>
          <FormField label="To Work Center">
            <select className="input"><option>CNC Machining</option><option>Grinding</option><option>Assembly</option><option>Paint / Coating</option><option>Testing</option><option>Packing / Dispatch</option></select>
          </FormField>
          <FormField label="Container / Bin #"><input className="input" placeholder="BIN-XXXX" /></FormField>
          <FormField label="QC Status">
            <select className="input"><option>Passed</option><option>Conditional</option></select>
          </FormField>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 18 }}>
          <button className="btn" onClick={() => setShowForm(false)}>Cancel</button>
          <button className="btn btn-primary" onClick={() => setShowForm(false)}>Record Movement</button>
        </div>
      </Modal>
    </>
  );
}
