import React, { useState } from 'react';
import { KpiCard, SectionLabel, DataTable, FormField, Badge } from '../../components/ui';

const PARAM_LOG = [
  { machine: 'CNC-A01', time: '23 Mar 14:00', spindleTemp: 42, coolantConc: 8.2, pressure: 6.4, vibration: 1.8, operator: 'Suresh K', status: 'OK' },
  { machine: 'CNC-A01', time: '23 Mar 10:00', spindleTemp: 40, coolantConc: 8.4, pressure: 6.5, vibration: 1.6, operator: 'Suresh K', status: 'OK' },
  { machine: 'CNC-A02', time: '23 Mar 14:00', spindleTemp: 45, coolantConc: 7.8, pressure: 6.2, vibration: 2.4, operator: 'Saravanan T', status: 'Warn' },
  { machine: 'CNC-A02', time: '23 Mar 10:00', spindleTemp: 43, coolantConc: 8.0, pressure: 6.3, vibration: 2.1, operator: 'Saravanan T', status: 'OK' },
  { machine: 'CNC-A03', time: '23 Mar 14:00', spindleTemp: 38, coolantConc: 8.6, pressure: 6.6, vibration: 1.2, operator: 'Karthik V', status: 'OK' },
  { machine: 'VMC-B01', time: '23 Mar 14:00', spindleTemp: 44, coolantConc: 7.5, pressure: 6.1, vibration: 2.0, operator: 'Karthik V', status: 'OK' },
  { machine: 'VMC-B02', time: '23 Mar 14:00', spindleTemp: 48, coolantConc: 7.2, pressure: 5.8, vibration: 2.8, operator: 'Vijay R', status: 'Warn' },
  { machine: 'GRD-C01', time: '23 Mar 14:00', spindleTemp: 36, coolantConc: 9.0, pressure: 6.8, vibration: 0.8, operator: 'Dinesh N', status: 'OK' },
];

const STATUS_COLOR = { OK: 'green', Warn: 'amber', Alert: 'red' };

export default function MachineParams() {
  const [form, setForm] = useState({ machine: '', spindleTemp: '', coolantConc: '', pressure: '', vibration: '' });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Machine Parameters</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Log and monitor spindle temperature, coolant, pressure, and vibration readings</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Avg Spindle Temp" value="42\u00b0C" sub="limit: 55\u00b0C" icon="thermostat" iconType="up" />
        <KpiCard label="Coolant Conc." value="8.1%" sub="spec: 6-10%" icon="water_drop" />
        <KpiCard label="Air Pressure" value="6.3 bar" sub="spec: 5.5-7.0 bar" icon="compress" />
        <KpiCard label="Max Vibration" value="2.8 mm/s" sub="limit: 4.0 mm/s" icon="vibration" iconType="w" />
      </div>

      <div className="card" style={{ padding: 20, marginBottom: 20 }}>
        <SectionLabel icon="settings">Log Machine Parameters</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
          <FormField label="Machine">
            <select className="form-select" value={form.machine} onChange={e => set('machine', e.target.value)}>
              <option value="">-- Select --</option>
              <option>CNC-A01</option><option>CNC-A02</option><option>CNC-A03</option>
              <option>VMC-B01</option><option>VMC-B02</option><option>GRD-C01</option>
            </select>
          </FormField>
          <FormField label="Spindle Temp (\u00b0C)">
            <input className="form-input" type="number" placeholder="42" value={form.spindleTemp} onChange={e => set('spindleTemp', e.target.value)} />
          </FormField>
          <FormField label="Coolant Conc. (%)">
            <input className="form-input" type="number" step="0.1" placeholder="8.0" value={form.coolantConc} onChange={e => set('coolantConc', e.target.value)} />
          </FormField>
          <FormField label="Air Pressure (bar)">
            <input className="form-input" type="number" step="0.1" placeholder="6.5" value={form.pressure} onChange={e => set('pressure', e.target.value)} />
          </FormField>
          <FormField label="Vibration (mm/s)">
            <input className="form-input" type="number" step="0.1" placeholder="1.5" value={form.vibration} onChange={e => set('vibration', e.target.value)} />
          </FormField>
        </div>
        <div style={{ marginTop: 14 }}>
          <button className="btn btn-primary">Save Reading</button>
        </div>
      </div>

      <SectionLabel icon="list_alt">Parameter Log ({PARAM_LOG.length})</SectionLabel>
      <DataTable
        headers={['Machine', 'Time', 'Spindle Temp (\u00b0C)', 'Coolant (%)', 'Pressure (bar)', 'Vibration (mm/s)', 'Operator', 'Status']}
        rows={PARAM_LOG.map(p => [
          { v: p.machine, style: { fontWeight: 600, fontFamily: 'var(--m)' } },
          p.time,
          { v: p.spindleTemp, style: { fontFamily: 'var(--m)', textAlign: 'right', color: p.spindleTemp > 45 ? 'var(--red)' : 'var(--text)' } },
          { v: p.coolantConc.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: p.pressure.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: p.vibration.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right', color: p.vibration > 2.5 ? 'var(--amber)' : 'var(--text)' } },
          p.operator,
          <Badge label={p.status} color={STATUS_COLOR[p.status]} />,
        ])}
      />
    </>
  );
}
