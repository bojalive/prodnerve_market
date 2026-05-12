import React, { useState } from 'react';
import { KpiCard, SectionLabel, DataTable, FormField, Badge } from '../../components/ui';

const ACTIVE_BATCHES = [
  { code: 'EP-220', color: 'RAL 7035', batch: 'PB-2026-0112', viscSpec: '80\u201390s', viscActual: '84s', thinner: 12, mixTime: '15 min', potLife: 8, remaining: '5.2 hrs', status: 'Active' },
  { code: 'PU-400', color: 'RAL 5015', batch: 'PB-2026-0113', viscSpec: '60\u201370s', viscActual: '65s', thinner: 15, mixTime: '10 min', potLife: 4, remaining: '2.8 hrs', status: 'Active' },
  { code: 'EP-220', color: 'RAL 7016', batch: 'PB-2026-0114', viscSpec: '80\u201390s', viscActual: '87s', thinner: 10, mixTime: '15 min', potLife: 8, remaining: '6.5 hrs', status: 'Active' },
  { code: 'ZRP-100', color: 'RAL 7040', batch: 'PB-2026-0115', viscSpec: '40\u201350s', viscActual: '44s', thinner: 8, mixTime: '20 min', potLife: 6, remaining: '0.3 hrs', status: 'Expiring' },
];

const PAINT_CODES = ['', 'EP-220', 'PU-400', 'ZRP-100', 'EP-310', 'PU-500'];

export default function PaintBatch() {
  const [form, setForm] = useState({ code: '', color: '', batch: '', viscSpec: '', viscActual: '', thinner: '', mixTime: '', potLife: '' });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 14 }}>
        <KpiCard label="Active Batches" value="4" sub="2 Epoxy, 1 PU, 1 ZRP" icon="science" iconType="up" />
        <KpiCard label="Expired Today" value="1" sub="PB-2026-0108" icon="timer_off" changeType="dn" change="Disposed" />
        <KpiCard label="Avg Viscosity Compliance" value="94%" sub="Ford Cup #4 method" icon="speed" change="+1%" changeType="up" />
      </div>

      {/* Form */}
      <div className="card" style={{ padding: 20 }}>
        <SectionLabel icon="science">New Paint Batch</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 14 }}>
          <FormField label="Paint Code">
            <select className="form-select" value={form.code} onChange={e => set('code', e.target.value)}>
              {PAINT_CODES.map(c => <option key={c} value={c}>{c || '-- Select --'}</option>)}
            </select>
          </FormField>
          <FormField label="Color (RAL Code)">
            <input className="form-input" placeholder="RAL 7035" value={form.color} onChange={e => set('color', e.target.value)} />
          </FormField>
          <FormField label="Batch #">
            <input className="form-input" placeholder="PB-2026-XXXX" value={form.batch} onChange={e => set('batch', e.target.value)} />
          </FormField>
          <FormField label="Viscosity Spec (s)">
            <input className="form-input" placeholder="80\u201390" value={form.viscSpec} onChange={e => set('viscSpec', e.target.value)} />
          </FormField>
          <FormField label="Viscosity Actual (Ford Cup s)">
            <input className="form-input" type="number" placeholder="84" value={form.viscActual} onChange={e => set('viscActual', e.target.value)} />
          </FormField>
          <FormField label="Thinner Ratio %">
            <input className="form-input" type="number" placeholder="12" value={form.thinner} onChange={e => set('thinner', e.target.value)} />
          </FormField>
          <FormField label="Mix Time">
            <input className="form-input" placeholder="15 min" value={form.mixTime} onChange={e => set('mixTime', e.target.value)} />
          </FormField>
          <FormField label="Pot Life (hrs)">
            <input className="form-input" type="number" placeholder="8" value={form.potLife} onChange={e => set('potLife', e.target.value)} />
          </FormField>
        </div>
        <div style={{ marginTop: 14 }}>
          <button className="btn btn-primary">Create Batch</button>
        </div>
      </div>

      {/* Active Batches Table */}
      <DataTable
        title="Active Batches"
        headers={['Paint Code', 'Color', 'Batch #', 'Visc. Spec', 'Visc. Actual', 'Thinner %', 'Mix Time', 'Pot Life', 'Remaining', 'Status']}
        rows={ACTIVE_BATCHES.map(b => [
          b.code,
          b.color,
          b.batch,
          b.viscSpec,
          b.viscActual,
          b.thinner + '%',
          b.mixTime,
          b.potLife + ' hrs',
          { v: b.remaining, style: { color: parseFloat(b.remaining) < 1 ? 'var(--red)' : 'var(--text)', fontWeight: parseFloat(b.remaining) < 1 ? 700 : 400 } },
          <Badge label={b.status} color={b.status === 'Active' ? 'green' : 'amber'} />,
        ])}
      />
    </div>
  );
}
