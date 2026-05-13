import React, { useState } from 'react';
import { KpiCard, SectionLabel, DataTable, FormField, Badge } from '../../components/ui';

const MOCK_LOG = [
  { serial: 'IC-4022-PCL', batch: 'PB-2026-0112', coats: 2, pressure: 4.5, fan: 25, distance: 20, flash: 10, result: 'OK' },
  { serial: 'AB-3018-HSR', batch: 'PB-2026-0113', coats: 2, pressure: 4.0, fan: 22, distance: 18, flash: 8, result: 'OK' },
  { serial: 'TS-1055-PNE', batch: 'PB-2026-0112', coats: 3, pressure: 4.5, fan: 25, distance: 20, flash: 10, result: 'Rework' },
  { serial: 'DS-2089-AMD', batch: 'PB-2026-0114', coats: 2, pressure: 5.0, fan: 28, distance: 22, flash: 12, result: 'OK' },
  { serial: 'VSD-6014-JMP', batch: 'PB-2026-0115', coats: 2, pressure: 4.5, fan: 25, distance: 20, flash: 10, result: 'OK' },
  { serial: 'IC-4023-PCL', batch: 'PB-2026-0112', coats: 2, pressure: 4.2, fan: 24, distance: 19, flash: 10, result: 'OK' },
  { serial: 'AB-3019-HSR', batch: 'PB-2026-0113', coats: 3, pressure: 4.0, fan: 22, distance: 18, flash: 8, result: 'Rework' },
  { serial: 'TS-1056-PNE', batch: 'PB-2026-0114', coats: 2, pressure: 4.8, fan: 26, distance: 21, flash: 11, result: 'OK' },
];

export default function ApplicationParams() {
  const [form, setForm] = useState({ serial: '', batch: '', coats: '', pressure: '', fan: '', distance: '', flash: '' });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 14 }}>
        <KpiCard label="Units Painted" value="24" sub="Target: 26" icon="format_paint" change="+5 vs yesterday" changeType="up" />
        <KpiCard label="Avg Coats" value="2.1" sub="Spec: 2\u20133 coats" icon="layers" iconType="up" />
        <KpiCard label="Rework" value="2" sub="8.3% rework rate" icon="replay" changeType="dn" change="+1 vs yesterday" />
      </div>

      {/* Form */}
      <div className="card" style={{ padding: 20 }}>
        <SectionLabel icon="spray">Spray Application Entry</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 14 }}>
          <FormField label="Unit Serial">
            <input className="form-input" placeholder="IC-4022-PCL" value={form.serial} onChange={e => set('serial', e.target.value)} />
          </FormField>
          <FormField label="Paint Batch">
            <input className="form-input" placeholder="PB-2026-0112" value={form.batch} onChange={e => set('batch', e.target.value)} />
          </FormField>
          <FormField label="No. of Coats">
            <input className="form-input" type="number" placeholder="2" value={form.coats} onChange={e => set('coats', e.target.value)} />
          </FormField>
          <FormField label="Spray Pressure (bar)">
            <input className="form-input" type="number" step="0.1" placeholder="4.5" value={form.pressure} onChange={e => set('pressure', e.target.value)} />
          </FormField>
          <FormField label="Fan Width (cm)">
            <input className="form-input" type="number" placeholder="25" value={form.fan} onChange={e => set('fan', e.target.value)} />
          </FormField>
          <FormField label="Distance (cm)">
            <input className="form-input" type="number" placeholder="20" value={form.distance} onChange={e => set('distance', e.target.value)} />
          </FormField>
          <FormField label="Flash-off Time (min)">
            <input className="form-input" type="number" placeholder="10" value={form.flash} onChange={e => set('flash', e.target.value)} />
          </FormField>
        </div>
        <div style={{ marginTop: 14 }}>
          <button className="btn btn-primary">Log Application</button>
        </div>
      </div>

      {/* Table */}
      <DataTable
        title="Today's Application Log"
        headers={['Unit Serial', 'Paint Batch', 'Coats', 'Pressure (bar)', 'Fan (cm)', 'Distance (cm)', 'Flash-off (min)', 'Result']}
        rows={MOCK_LOG.map(r => [
          r.serial,
          r.batch,
          r.coats,
          r.pressure,
          r.fan,
          r.distance,
          r.flash,
          <Badge label={r.result} color={r.result === 'OK' ? 'green' : 'amber'} />,
        ])}
      />
    </div>
  );
}
