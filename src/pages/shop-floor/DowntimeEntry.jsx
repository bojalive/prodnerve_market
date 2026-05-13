import React, { useState } from 'react';
import { MI, KpiCard, SectionLabel, DataTable, FormField, Badge } from '../../components/ui';

const DOWNTIME_EVENTS = [
  { id: 'DT-5001', machine: 'CNC-A06', start: '23 Mar 08:20', end: '23 Mar 10:45', dur: '2h 25m', l1: 'Equipment', l2: 'Spindle', l3: 'Bearing failure', wo: 'WO-2526-10003', operator: 'Senthil M', status: 'Closed' },
  { id: 'DT-5002', machine: 'TST-E02', start: '23 Mar 09:10', end: '--', dur: '5h 12m+', l1: 'Equipment', l2: 'Hydraulic', l3: 'Pump leak', wo: 'WO-2526-10004', operator: 'Suresh P', status: 'Open' },
  { id: 'DT-5003', machine: 'CNC-A04', start: '23 Mar 11:00', end: '23 Mar 12:15', dur: '1h 15m', l1: 'Changeover', l2: 'Tool', l3: 'New program load', wo: 'WO-2526-10012', operator: 'Murugan R', status: 'Closed' },
  { id: 'DT-5004', machine: 'GRD-C03', start: '23 Mar 07:30', end: '23 Mar 08:45', dur: '1h 15m', l1: 'Changeover', l2: 'Fixture', l3: 'Fixture swap', wo: 'WO-2526-10008', operator: 'Karthik V', status: 'Closed' },
  { id: 'DT-5005', machine: 'VMC-B03', start: '23 Mar 06:00', end: '--', dur: '8h 22m+', l1: 'No Order', l2: 'Planning', l3: 'Awaiting WO release', wo: '--', operator: '--', status: 'Open' },
  { id: 'DT-5006', machine: 'ASM-D03', start: '23 Mar 10:30', end: '--', dur: '3h 52m+', l1: 'Material', l2: 'Shortage', l3: 'Waiting for castings', wo: 'WO-2526-10011', operator: 'Arun S', status: 'Open' },
  { id: 'DT-5007', machine: 'CNC-A01', start: '23 Mar 06:15', end: '23 Mar 06:45', dur: '0h 30m', l1: 'Quality', l2: 'Inspection', l3: 'First article check', wo: 'WO-2526-10001', operator: 'Murugan R', status: 'Closed' },
  { id: 'DT-5008', machine: 'PNT-F01', start: '23 Mar 13:00', end: '23 Mar 13:40', dur: '0h 40m', l1: 'Equipment', l2: 'Spray Gun', l3: 'Nozzle clog', wo: 'WO-2526-10007', operator: 'Dinesh N', status: 'Closed' },
];

const STATUS_COLOR = { Open: 'red', Closed: 'green' };

export default function DowntimeEntry() {
  const [form, setForm] = useState({ machine: '', start: '', end: '', l1: '', l2: '', l3: '' });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Downtime Entry</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Log and track machine downtime events with 3-level reason classification</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Total DT Today" value="34.2 hrs" sub="across all machines" icon="timer_off" iconType="dn" />
        <KpiCard label="Equipment" value="34%" sub="of total downtime" icon="build" iconType="dn" change="11.6 hrs" changeType="dn" />
        <KpiCard label="Changeover" value="24%" sub="of total downtime" icon="swap_horiz" iconType="w" change="8.2 hrs" changeType="w" />
        <KpiCard label="Open Events" value="3" sub="still running" icon="error" iconType="dn" />
        <KpiCard label="MTTR" value="1.8 hrs" sub="mean time to repair" icon="schedule" change="-0.4h vs avg" changeType="up" />
      </div>

      <div className="card" style={{ padding: 20, marginBottom: 20 }}>
        <SectionLabel icon="timer_off">Record Downtime</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
          <FormField label="Machine">
            <select className="form-select" value={form.machine} onChange={e => set('machine', e.target.value)}>
              <option value="">-- Select --</option>
              <option>CNC-A01</option><option>CNC-A02</option><option>CNC-A03</option>
              <option>VMC-B01</option><option>VMC-B02</option><option>GRD-C01</option>
              <option>TST-E01</option><option>PNT-F01</option>
            </select>
          </FormField>
          <FormField label="Start Time">
            <input className="form-input" type="datetime-local" value={form.start} onChange={e => set('start', e.target.value)} />
          </FormField>
          <FormField label="End Time">
            <input className="form-input" type="datetime-local" value={form.end} onChange={e => set('end', e.target.value)} />
          </FormField>
          <FormField label="Level 1 (Category)">
            <select className="form-select" value={form.l1} onChange={e => set('l1', e.target.value)}>
              <option value="">-- Select --</option>
              <option>Equipment</option><option>Changeover</option><option>Material</option>
              <option>Quality</option><option>No Order</option><option>Operator</option>
            </select>
          </FormField>
          <FormField label="Level 2 (Sub-category)">
            <select className="form-select" value={form.l2} onChange={e => set('l2', e.target.value)}>
              <option value="">-- Select --</option>
              <option>Spindle</option><option>Hydraulic</option><option>Electrical</option>
              <option>Tool</option><option>Fixture</option><option>Shortage</option>
              <option>Inspection</option><option>Planning</option>
            </select>
          </FormField>
          <FormField label="Level 3 (Detail)">
            <input className="form-input" placeholder="Specific reason" value={form.l3} onChange={e => set('l3', e.target.value)} />
          </FormField>
        </div>
        <div style={{ marginTop: 14 }}>
          <button className="btn btn-primary"><MI size={16}>save</MI> Log Downtime</button>
        </div>
      </div>

      <SectionLabel icon="list_alt">Today's Downtime Events ({DOWNTIME_EVENTS.length})</SectionLabel>
      <DataTable
        headers={['DT #', 'Machine', 'Start', 'End', 'Duration', 'Category', 'Sub-Cat', 'Detail', 'WO #', 'Operator', 'Status']}
        rows={DOWNTIME_EVENTS.map(r => [
          { v: r.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: r.machine, style: { fontFamily: 'var(--m)' } },
          r.start,
          r.end,
          { v: r.dur, style: { fontFamily: 'var(--m)', fontWeight: 600 } },
          { v: r.l1, style: { fontWeight: 600 } },
          r.l2,
          r.l3,
          { v: r.wo, style: { fontFamily: 'var(--m)' } },
          r.operator,
          <Badge label={r.status} color={STATUS_COLOR[r.status]} />,
        ])}
      />
    </>
  );
}
