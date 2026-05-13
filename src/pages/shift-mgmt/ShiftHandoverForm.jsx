import React, { useState } from 'react';
import { MI, KpiCard, SectionLabel, FormField, DataTable, Badge } from '../../components/ui';

export default function ShiftHandoverForm() {
  const [form, setForm] = useState({
    shift: 'A', date: '2026-03-23', outgoing: '', incoming: '',
    production: '', quality: '', machines: '', safety: '', pending: '',
  });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const HISTORY = [
    { id: 'HO-501', shift: 'C to A', date: '23 Mar 06:00', outgoing: 'Arun S', incoming: 'Murugan R', issues: 2, ack: 'Yes', status: 'Complete' },
    { id: 'HO-500', shift: 'B to C', date: '22 Mar 22:00', outgoing: 'Senthil M', incoming: 'Arun S', issues: 3, ack: 'Yes', status: 'Complete' },
    { id: 'HO-499', shift: 'A to B', date: '22 Mar 14:00', outgoing: 'Murugan R', incoming: 'Senthil M', issues: 1, ack: 'Yes', status: 'Complete' },
    { id: 'HO-498', shift: 'C to A', date: '22 Mar 06:00', outgoing: 'Arun S', incoming: 'Murugan R', issues: 0, ack: 'Yes', status: 'Complete' },
    { id: 'HO-497', shift: 'B to C', date: '21 Mar 22:00', outgoing: 'Senthil M', incoming: 'Arun S', issues: 4, ack: 'Yes', status: 'Complete' },
    { id: 'HO-496', shift: 'A to B', date: '21 Mar 14:00', outgoing: 'Murugan R', incoming: 'Senthil M', issues: 2, ack: 'Pending', status: 'Pending' },
  ];

  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Shift Handover Form</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Standardized handover documentation between shifts</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Pending Ack" value="1" sub="awaiting incoming sign-off" icon="pending" iconType="w" />
        <KpiCard label="Handovers Today" value="2" sub="completed transfers" icon="swap_horiz" iconType="up" />
        <KpiCard label="Carried Over" value="6" sub="issues forwarded" icon="forward" iconType="w" />
        <KpiCard label="Compliance" value="98%" sub="handover completion rate" icon="verified" iconType="up" />
      </div>

      <div className="card" style={{ padding: 20, marginBottom: 20 }}>
        <SectionLabel icon="swap_horiz">New Handover</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 14 }}>
          <FormField label="Outgoing Shift">
            <select className="form-select" value={form.shift} onChange={e => set('shift', e.target.value)}>
              <option value="A">Shift A</option><option value="B">Shift B</option><option value="C">Shift C</option>
            </select>
          </FormField>
          <FormField label="Date">
            <input className="form-input" type="date" value={form.date} onChange={e => set('date', e.target.value)} />
          </FormField>
          <FormField label="Outgoing Supervisor">
            <select className="form-select" value={form.outgoing} onChange={e => set('outgoing', e.target.value)}>
              <option value="">-- Select --</option><option>Murugan R</option><option>Senthil M</option><option>Arun S</option>
            </select>
          </FormField>
          <FormField label="Incoming Supervisor">
            <select className="form-select" value={form.incoming} onChange={e => set('incoming', e.target.value)}>
              <option value="">-- Select --</option><option>Murugan R</option><option>Senthil M</option><option>Arun S</option>
            </select>
          </FormField>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <FormField label="Production Status"><textarea className="form-input" rows={2} placeholder="Output summary, WO progress, deviations..." value={form.production} onChange={e => set('production', e.target.value)} style={{ resize: 'vertical' }} /></FormField>
          <FormField label="Quality Issues"><textarea className="form-input" rows={2} placeholder="Rejections, NCRs, holds..." value={form.quality} onChange={e => set('quality', e.target.value)} style={{ resize: 'vertical' }} /></FormField>
          <FormField label="Machine Issues"><textarea className="form-input" rows={2} placeholder="Breakdowns, repairs, alerts..." value={form.machines} onChange={e => set('machines', e.target.value)} style={{ resize: 'vertical' }} /></FormField>
          <FormField label="Safety"><textarea className="form-input" rows={2} placeholder="Incidents, near-misses, observations..." value={form.safety} onChange={e => set('safety', e.target.value)} style={{ resize: 'vertical' }} /></FormField>
          <FormField label="Pending Actions"><textarea className="form-input" rows={2} placeholder="Actions for incoming shift..." value={form.pending} onChange={e => set('pending', e.target.value)} style={{ resize: 'vertical' }} /></FormField>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 16 }}>
          <button className="btn">Save Draft</button>
          <button className="btn btn-primary"><MI size={16}>send</MI> Submit Handover</button>
        </div>
      </div>

      <SectionLabel icon="history">Handover History ({HISTORY.length})</SectionLabel>
      <DataTable
        headers={['ID', 'Shift', 'Date/Time', 'Outgoing', 'Incoming', 'Open Issues', 'Acknowledged', 'Status']}
        rows={HISTORY.map(h => [
          { v: h.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          h.shift, h.date, h.outgoing, h.incoming,
          { v: h.issues, style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600, color: h.issues > 2 ? 'var(--amber)' : 'var(--text)' } },
          { v: h.ack, style: { color: h.ack === 'Yes' ? 'var(--green)' : 'var(--amber)', fontWeight: 600 } },
          <Badge label={h.status} color={h.status === 'Complete' ? 'green' : 'amber'} />,
        ])}
      />
    </>
  );
}
