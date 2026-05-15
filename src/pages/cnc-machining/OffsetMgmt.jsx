import React, { useState } from 'react';
import { KpiCard, SectionLabel, DataTable, FormField, Badge } from '../../components/ui';

const OFFSETS = [
  { machine: 'CNC-A01', tool: 'T01', type: 'Wear', axis: 'X', nominal: 0.000, current: -0.012, limit: 0.050, updatedBy: 'Suresh K', time: '23 Mar 14:10', status: 'OK' },
  { machine: 'CNC-A01', tool: 'T03', type: 'Wear', axis: 'Z', nominal: 0.000, current: -0.024, limit: 0.050, updatedBy: 'Suresh K', time: '23 Mar 14:10', status: 'OK' },
  { machine: 'CNC-A01', tool: 'T07', type: 'Geometry', axis: 'X', nominal: -42.580, current: -42.592, limit: 0.030, updatedBy: 'Suresh K', time: '23 Mar 11:30', status: 'Warn' },
  { machine: 'CNC-A02', tool: 'T01', type: 'Wear', axis: 'X', nominal: 0.000, current: -0.008, limit: 0.050, updatedBy: 'Saravanan T', time: '23 Mar 13:45', status: 'OK' },
  { machine: 'CNC-A02', tool: 'T04', type: 'Geometry', axis: 'Z', nominal: -88.140, current: -88.148, limit: 0.020, updatedBy: 'Saravanan T', time: '23 Mar 10:20', status: 'OK' },
  { machine: 'CNC-A02', tool: 'T09', type: 'Wear', axis: 'Z', nominal: 0.000, current: -0.038, limit: 0.050, updatedBy: 'Saravanan T', time: '23 Mar 09:00', status: 'Warn' },
  { machine: 'VMC-B01', tool: 'T01', type: 'Wear', axis: 'X', nominal: 0.000, current: -0.015, limit: 0.040, updatedBy: 'Karthik V', time: '23 Mar 12:15', status: 'OK' },
  { machine: 'VMC-B01', tool: 'T05', type: 'Length', axis: 'Z', nominal: -152.340, current: -152.352, limit: 0.030, updatedBy: 'Karthik V', time: '23 Mar 08:45', status: 'OK' },
  { machine: 'VMC-B02', tool: 'T01', type: 'Wear', axis: 'X', nominal: 0.000, current: -0.042, limit: 0.050, updatedBy: 'Vijay R', time: '23 Mar 11:00', status: 'Warn' },
  { machine: 'VMC-B02', tool: 'T08', type: 'Geometry', axis: 'Z', nominal: -76.220, current: -76.225, limit: 0.015, updatedBy: 'Vijay R', time: '23 Mar 08:30', status: 'OK' },
];

const STATUS_COLOR = { OK: 'green', Warn: 'amber', Limit: 'red' };

export default function OffsetMgmt() {
  const [form, setForm] = useState({ machine: '', tool: '', axis: '', value: '' });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Tool Offset Management</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Track and log wear offsets, geometry offsets, and tool length compensations</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Offsets Logged" value="86" sub="today's updates" icon="tune" iconType="up" />
        <KpiCard label="Approaching Limit" value="3" sub="offsets > 75% of limit" icon="warning" iconType="dn" />
        <KpiCard label="Avg Wear Offset" value="0.018 mm" sub="across active tools" icon="straighten" />
        <KpiCard label="Offset Corrections" value="12" sub="adjustments made today" icon="edit" />
      </div>

      <div className="card" style={{ padding: 20, marginBottom: 20 }}>
        <SectionLabel icon="tune">Update Offset</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
          <FormField label="Machine">
            <select className="form-select" value={form.machine} onChange={e => set('machine', e.target.value)}>
              <option value="">-- Select --</option>
              <option>CNC-A01</option><option>CNC-A02</option><option>CNC-A03</option>
              <option>VMC-B01</option><option>VMC-B02</option>
            </select>
          </FormField>
          <FormField label="Tool Position">
            <input className="form-input" placeholder="T01" value={form.tool} onChange={e => set('tool', e.target.value)} />
          </FormField>
          <FormField label="Axis">
            <select className="form-select" value={form.axis} onChange={e => set('axis', e.target.value)}>
              <option value="">-- Select --</option>
              <option>X</option><option>Y</option><option>Z</option>
            </select>
          </FormField>
          <FormField label="Offset Value (mm)">
            <input className="form-input" type="number" step="0.001" placeholder="0.000" value={form.value} onChange={e => set('value', e.target.value)} />
          </FormField>
        </div>
        <div style={{ marginTop: 14 }}>
          <button className="btn btn-primary">Update Offset</button>
        </div>
      </div>

      <SectionLabel icon="list_alt">Current Offsets ({OFFSETS.length})</SectionLabel>
      <DataTable
        headers={['Machine', 'Tool', 'Type', 'Axis', 'Nominal', 'Current', 'Limit', 'Updated By', 'Time', 'Status']}
        rows={OFFSETS.map(o => [
          { v: o.machine, style: { fontWeight: 600, fontFamily: 'var(--m)' } },
          { v: o.tool, style: { fontFamily: 'var(--m)' } },
          o.type,
          { v: o.axis, style: { fontFamily: 'var(--m)', fontWeight: 600 } },
          { v: o.nominal.toFixed(3), style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: o.current.toFixed(3), style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600 } },
          { v: '\u00b1' + o.limit.toFixed(3), style: { fontFamily: 'var(--m)', textAlign: 'right', color: 'var(--text-mute)' } },
          o.updatedBy,
          o.time,
          <Badge label={o.status} color={STATUS_COLOR[o.status]} />,
        ])}
      />
    </>
  );
}
