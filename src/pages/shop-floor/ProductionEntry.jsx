import React, { useState } from 'react';
import { MI, KpiCard, SectionLabel, DataTable, FormField, Badge } from '../../components/ui';

const RECENT_ENTRIES = [
  { id: 'PE-40001', machine: 'CNC-A01', wo: 'WO-2526-10001', product: 'IC-2024', good: 18, reject: 1, rework: 0, shift: 'A', operator: 'Karthik V', time: '23 Mar 14:30' },
  { id: 'PE-40002', machine: 'CNC-A02', wo: 'WO-2526-10003', product: 'BR-75', good: 42, reject: 2, rework: 1, shift: 'A', operator: 'Saravanan T', time: '23 Mar 14:15' },
  { id: 'PE-40003', machine: 'VMC-B01', wo: 'WO-2526-10004', product: 'PA-625', good: 6, reject: 0, rework: 0, shift: 'A', operator: 'Karthik V', time: '23 Mar 13:45' },
  { id: 'PE-40004', machine: 'GRD-C01', wo: 'WO-2526-10001', product: 'IC-2024', good: 14, reject: 0, rework: 1, shift: 'A', operator: 'Ramesh S', time: '23 Mar 12:30' },
  { id: 'PE-40005', machine: 'CNC-A05', wo: 'WO-2526-10007', product: 'BR-150', good: 28, reject: 1, rework: 0, shift: 'A', operator: 'Dinesh N', time: '23 Mar 11:20' },
  { id: 'PE-40006', machine: 'VMC-B02', wo: 'WO-2526-10006', product: 'HC-500', good: 4, reject: 0, rework: 0, shift: 'B', operator: 'Anand M', time: '22 Mar 22:45' },
];

export default function ProductionEntry() {
  const [form, setForm] = useState({ machine: '', wo: '', good: '', reject: '', rework: '', remarks: '' });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Production Entry</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Log production output -- good, reject, rework counts per machine</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Today's Output" value="486" sub="good units" icon="inventory_2" iconType="up" change="+12% vs yesterday" changeType="up" />
        <KpiCard label="Rejection" value="14" sub="units rejected" icon="cancel" iconType="dn" change="-3 vs yesterday" changeType="up" />
        <KpiCard label="Rework" value="8" sub="units for rework" icon="autorenew" iconType="w" />
        <KpiCard label="First Pass Yield" value="94.8%" sub="target > 95%" icon="speed" change="-0.2% WoW" changeType="dn" />
      </div>

      <div className="card" style={{ padding: 20, marginBottom: 20 }}>
        <SectionLabel icon="edit_note">New Production Entry</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
          <FormField label="Machine">
            <select className="form-select" value={form.machine} onChange={e => set('machine', e.target.value)}>
              <option value="">-- Select --</option>
              <option>CNC-A01 (Mori Seiki NL-2500)</option>
              <option>CNC-A02 (Mazak QTN-200)</option>
              <option>CNC-A03 (Haas ST-30)</option>
              <option>VMC-B01 (Mazak VCN-530C)</option>
              <option>VMC-B02 (BFW BMV-45)</option>
              <option>GRD-C01 (Studer S33)</option>
            </select>
          </FormField>
          <FormField label="Work Order">
            <select className="form-select" value={form.wo} onChange={e => set('wo', e.target.value)}>
              <option value="">-- Select --</option>
              <option>WO-2526-10001 (IC-2024)</option>
              <option>WO-2526-10003 (BR-75)</option>
              <option>WO-2526-10004 (PA-625)</option>
              <option>WO-2526-10006 (HC-500)</option>
              <option>WO-2526-10007 (BR-150)</option>
              <option>WO-2526-10008 (PA-880)</option>
            </select>
          </FormField>
          <FormField label="Good Qty">
            <input className="form-input" type="number" placeholder="0" value={form.good} onChange={e => set('good', e.target.value)} />
          </FormField>
          <FormField label="Reject Qty">
            <input className="form-input" type="number" placeholder="0" value={form.reject} onChange={e => set('reject', e.target.value)} />
          </FormField>
          <FormField label="Rework Qty">
            <input className="form-input" type="number" placeholder="0" value={form.rework} onChange={e => set('rework', e.target.value)} />
          </FormField>
          <FormField label="Remarks">
            <input className="form-input" placeholder="Optional notes" value={form.remarks} onChange={e => set('remarks', e.target.value)} />
          </FormField>
        </div>
        <div style={{ marginTop: 14 }}>
          <button className="btn btn-primary"><MI size={16}>save</MI> Save Entry</button>
        </div>
      </div>

      <SectionLabel icon="list_alt">Recent Entries ({RECENT_ENTRIES.length})</SectionLabel>
      <DataTable
        headers={['Entry #', 'Machine', 'WO #', 'Product', 'Good', 'Reject', 'Rework', 'Shift', 'Operator', 'Time']}
        rows={RECENT_ENTRIES.map(r => [
          { v: r.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: r.machine, style: { fontFamily: 'var(--m)' } },
          { v: r.wo, style: { fontFamily: 'var(--m)' } },
          r.product,
          { v: r.good, style: { fontFamily: 'var(--m)', textAlign: 'right', color: 'var(--green)', fontWeight: 600 } },
          { v: r.reject, style: { fontFamily: 'var(--m)', textAlign: 'right', color: r.reject > 0 ? 'var(--red)' : 'var(--text-mute)', fontWeight: 600 } },
          { v: r.rework, style: { fontFamily: 'var(--m)', textAlign: 'right', color: r.rework > 0 ? 'var(--amber)' : 'var(--text-mute)' } },
          <Badge label={`Shift ${r.shift}`} color="accent" />,
          r.operator,
          r.time,
        ])}
      />
    </>
  );
}
