import React, { useState } from 'react';
import { MI, KpiCard, SectionLabel, FormField, DataTable, Badge } from '../../components/ui';

export default function ShiftHandover() {
  const [form, setForm] = useState({
    shift: 'A', date: '2026-03-23', supervisor: '',
    prodSummary: '', qualityNotes: '', machineIssues: '', safetyNotes: '', pendingActions: '',
  });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const RECENT_HANDOVERS = [
    { id: 'SH-3001', shift: 'C to A', date: '23 Mar 06:00', supervisor: 'Karthik V', prodStatus: 'On Track', openIssues: 2, safety: 'OK', status: 'Acknowledged' },
    { id: 'SH-3002', shift: 'B to C', date: '22 Mar 22:00', supervisor: 'Anand M', prodStatus: 'Delayed', openIssues: 4, safety: 'OK', status: 'Acknowledged' },
    { id: 'SH-3003', shift: 'A to B', date: '22 Mar 14:00', supervisor: 'Saravanan T', prodStatus: 'On Track', openIssues: 1, safety: 'OK', status: 'Acknowledged' },
    { id: 'SH-3004', shift: 'C to A', date: '22 Mar 06:00', supervisor: 'Karthik V', prodStatus: 'On Track', openIssues: 3, safety: 'Near Miss', status: 'Acknowledged' },
    { id: 'SH-3005', shift: 'B to C', date: '21 Mar 22:00', supervisor: 'Anand M', prodStatus: 'On Track', openIssues: 0, safety: 'OK', status: 'Pending' },
    { id: 'SH-3006', shift: 'A to B', date: '21 Mar 14:00', supervisor: 'Saravanan T', prodStatus: 'Delayed', openIssues: 5, safety: 'OK', status: 'Acknowledged' },
  ];

  const STATUS_COLOR = { Acknowledged: 'green', Pending: 'amber' };
  const PROD_COLOR = { 'On Track': 'green', Delayed: 'red' };

  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Shift Handover</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Structured handover notes between shifts covering production, quality, machines, and safety</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Pending Handovers" value="1" sub="awaiting acknowledgement" icon="pending" iconType="w" />
        <KpiCard label="Open Issues" value="6" sub="carried forward" icon="warning" iconType="dn" change="+2 vs yesterday" changeType="dn" />
        <KpiCard label="Safety Incidents" value="0" sub="this shift" icon="health_and_safety" iconType="up" />
        <KpiCard label="Avg Handover Time" value="12 min" sub="documentation time" icon="schedule" />
      </div>

      <div className="card" style={{ padding: 20, marginBottom: 20 }}>
        <SectionLabel icon="swap_horiz">New Shift Handover</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginBottom: 16 }}>
          <FormField label="Outgoing Shift">
            <select className="form-select" value={form.shift} onChange={e => set('shift', e.target.value)}>
              <option value="A">Shift A (06:00-14:00)</option>
              <option value="B">Shift B (14:00-22:00)</option>
              <option value="C">Shift C (22:00-06:00)</option>
            </select>
          </FormField>
          <FormField label="Date">
            <input className="form-input" type="date" value={form.date} onChange={e => set('date', e.target.value)} />
          </FormField>
          <FormField label="Supervisor">
            <select className="form-select" value={form.supervisor} onChange={e => set('supervisor', e.target.value)}>
              <option value="">-- Select --</option>
              <option>Karthik V</option><option>Saravanan T</option><option>Anand M</option>
              <option>Karthik V</option><option>Ramesh S</option>
            </select>
          </FormField>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <FormField label="Production Summary" hint="Output achieved, WOs in progress, deviations">
            <textarea className="form-input" rows={3} placeholder="Shift A output: 486 units against target of 520. WO-2526-10001 at 82% completion. WO-2526-10003 delayed by 30 min due to tool change." value={form.prodSummary} onChange={e => set('prodSummary', e.target.value)} style={{ resize: 'vertical' }} />
          </FormField>
          <FormField label="Quality Issues" hint="Rejections, NCRs raised, inspection holds">
            <textarea className="form-input" rows={2} placeholder="14 rejections (CNC-A02: 2 bore OD out of spec). NCR-2026-0089 raised for IC-2024 batch." value={form.qualityNotes} onChange={e => set('qualityNotes', e.target.value)} style={{ resize: 'vertical' }} />
          </FormField>
          <FormField label="Machine Issues" hint="Breakdowns, repairs pending, critical alerts">
            <textarea className="form-input" rows={2} placeholder="CNC-A06: Spindle bearing replaced, back online. TST-E02: Hydraulic pump leak, maintenance in progress." value={form.machineIssues} onChange={e => set('machineIssues', e.target.value)} style={{ resize: 'vertical' }} />
          </FormField>
          <FormField label="Safety Notes" hint="Incidents, near-misses, safety observations">
            <textarea className="form-input" rows={2} placeholder="No safety incidents. Forklift traffic warning near Assembly bay." value={form.safetyNotes} onChange={e => set('safetyNotes', e.target.value)} style={{ resize: 'vertical' }} />
          </FormField>
          <FormField label="Pending Actions" hint="Actions for next shift to follow up">
            <textarea className="form-input" rows={2} placeholder="1. Follow up TST-E02 repair with maintenance. 2. Release WO-2526-10012 material from store." value={form.pendingActions} onChange={e => set('pendingActions', e.target.value)} style={{ resize: 'vertical' }} />
          </FormField>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 18 }}>
          <button className="btn">Save Draft</button>
          <button className="btn btn-primary"><MI size={16}>send</MI> Submit Handover</button>
        </div>
      </div>

      <SectionLabel icon="history">Recent Handovers ({RECENT_HANDOVERS.length})</SectionLabel>
      <DataTable
        headers={['ID', 'Shift', 'Date/Time', 'Supervisor', 'Production', 'Open Issues', 'Safety', 'Status']}
        rows={RECENT_HANDOVERS.map(r => [
          { v: r.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          r.shift,
          r.date,
          r.supervisor,
          <Badge label={r.prodStatus} color={PROD_COLOR[r.prodStatus]} />,
          { v: r.openIssues, style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600, color: r.openIssues > 2 ? 'var(--red)' : 'var(--text)' } },
          { v: r.safety, style: { color: r.safety === 'OK' ? 'var(--green)' : 'var(--amber)', fontWeight: 600 } },
          <Badge label={r.status} color={STATUS_COLOR[r.status]} />,
        ])}
      />
    </>
  );
}
