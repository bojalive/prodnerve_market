import React, { useState } from 'react';
import { KpiCard, SectionLabel, DataTable, FormField, Badge } from '../../components/ui';

const MOCK_RECORDS = [
  { wo: 'WO-2026-0451', serial: 'EG-4022-WIS', method: 'Shot Blast', grade: 'SA 2.5', profile: 52, clean: 'Pass', date: '23-Mar-2026 08:15', operator: 'M. Kannan' },
  { wo: 'WO-2026-0449', serial: 'AB-3018-HSR', method: 'Chemical', grade: 'St 3', profile: 44, clean: 'Pass', date: '23-Mar-2026 08:40', operator: 'R. Kannan' },
  { wo: 'WO-2026-0448', serial: 'TS-1055-PNE', method: 'Shot Blast', grade: 'SA 2.5', profile: 50, clean: 'Pass', date: '23-Mar-2026 09:10', operator: 'V. Rajan' },
  { wo: 'WO-2026-0447', serial: 'DS-2089-AMD', method: 'Manual', grade: 'St 2', profile: 38, clean: 'Fail', date: '23-Mar-2026 09:35', operator: 'K. Devi' },
  { wo: 'WO-2026-0446', serial: 'VSD-6014-JMP', method: 'Shot Blast', grade: 'SA 3', profile: 55, clean: 'Pass', date: '23-Mar-2026 10:00', operator: 'M. Kannan' },
  { wo: 'WO-2026-0445', serial: 'EG-4023-WIS', method: 'Chemical', grade: 'St 3', profile: 46, clean: 'Pass', date: '23-Mar-2026 10:20', operator: 'R. Kannan' },
  { wo: 'WO-2026-0444', serial: 'AB-3019-HSR', method: 'Shot Blast', grade: 'SA 2.5', profile: 49, clean: 'Pass', date: '23-Mar-2026 10:45', operator: 'S. Mahesh' },
  { wo: 'WO-2026-0443', serial: 'TS-1056-PNE', method: 'Shot Blast', grade: 'SA 2.5', profile: 51, clean: 'Pass', date: '23-Mar-2026 11:05', operator: 'V. Rajan' },
];

const METHODS = ['', 'Shot Blast', 'Chemical', 'Manual'];
const GRADES = ['', 'SA 2.5', 'SA 3', 'St 2', 'St 3'];

export default function SurfacePrep() {
  const [form, setForm] = useState({ wo: '', serial: '', method: '', grade: '', profile: '', clean: '' });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 14 }}>
        <KpiCard label="Units Prepped Today" value="28" sub="Target: 30" icon="handyman" change="+3 vs yesterday" changeType="up" />
        <KpiCard label="Pass Rate" value="96%" sub="27 of 28 passed" icon="check_circle" change="+2%" changeType="up" />
        <KpiCard label="Avg Profile" value="48 \u00b5m" sub="Spec: 40\u201360 \u00b5m" icon="straighten" iconType="up" />
      </div>

      {/* Form */}
      <div className="card" style={{ padding: 20 }}>
        <SectionLabel icon="cleaning_services">New Surface Preparation Record</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 14 }}>
          <FormField label="Work Order #">
            <input className="form-input" placeholder="WO-2026-XXXX" value={form.wo} onChange={e => set('wo', e.target.value)} />
          </FormField>
          <FormField label="Unit Serial">
            <input className="form-input" placeholder="EG-4022-WIS" value={form.serial} onChange={e => set('serial', e.target.value)} />
          </FormField>
          <FormField label="Prep Method">
            <select className="form-select" value={form.method} onChange={e => set('method', e.target.value)}>
              {METHODS.map(m => <option key={m} value={m}>{m || '-- Select --'}</option>)}
            </select>
          </FormField>
          <FormField label="Blast Grade">
            <select className="form-select" value={form.grade} onChange={e => set('grade', e.target.value)}>
              {GRADES.map(g => <option key={g} value={g}>{g || '-- Select --'}</option>)}
            </select>
          </FormField>
          <FormField label="Surface Profile (\u00b5m)">
            <input className="form-input" type="number" placeholder="48" value={form.profile} onChange={e => set('profile', e.target.value)} />
          </FormField>
          <FormField label="Cleanliness Check">
            <select className="form-select" value={form.clean} onChange={e => set('clean', e.target.value)}>
              <option value="">-- Select --</option>
              <option value="Pass">Pass</option>
              <option value="Fail">Fail</option>
            </select>
          </FormField>
        </div>
        <div style={{ marginTop: 14 }}>
          <button className="btn btn-primary">Save Record</button>
        </div>
      </div>

      {/* Table */}
      <DataTable
        title="Recent Preparation Records"
        headers={['WO #', 'Unit Serial', 'Method', 'Grade', 'Profile (\u00b5m)', 'Cleanliness', 'Date/Time', 'Operator']}
        rows={MOCK_RECORDS.map(r => [
          r.wo,
          r.serial,
          r.method,
          r.grade,
          r.profile,
          <Badge label={r.clean} color={r.clean === 'Pass' ? 'green' : 'red'} />,
          r.date,
          r.operator,
        ])}
      />
    </div>
  );
}
