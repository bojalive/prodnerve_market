import React, { useState } from 'react';
import { MI, KpiCard, SectionLabel, DataTable, FormField, Badge } from '../../components/ui';

const MOCK_CHARS = [
  { sr: 1, char: 'Bore ID',       spec: '72.000 mm', usl: '72.025', lsl: '71.975', gauge: 'Bore Gauge BG-012',     actual: '72.008' },
  { sr: 2, char: 'OD (Rotor)',    spec: '119.950 mm', usl: '119.975', lsl: '119.925', gauge: 'Micrometer MM-045',   actual: '119.948' },
  { sr: 3, char: 'Flatness',      spec: '0.010 mm',  usl: '0.010', lsl: '0.000', gauge: 'CMM CM-003',              actual: '0.007' },
  { sr: 4, char: 'Surface Finish (Ra)', spec: '0.8 \u00b5m', usl: '0.8', lsl: '0.2', gauge: 'Profilometer PF-008',  actual: '0.6' },
  { sr: 5, char: 'Runout',        spec: '0.015 mm',  usl: '0.015', lsl: '0.000', gauge: 'Dial Indicator DI-021',   actual: '0.012' },
  { sr: 6, char: 'Thread Depth (M8)', spec: '12.0 mm', usl: '12.5', lsl: '11.5', gauge: 'Thread Gauge TG-006',    actual: '12.1' },
  { sr: 7, char: 'Perpendicularity', spec: '0.020 mm', usl: '0.020', lsl: '0.000', gauge: 'CMM CM-003',           actual: '0.018' },
  { sr: 8, char: 'Groove Width',  spec: '3.200 mm',  usl: '3.225', lsl: '3.175', gauge: 'Digital Caliper DC-034',  actual: '3.210' },
];

export default function FAInspection() {
  const [form, setForm] = useState({
    wo: 'WO-2526-0347', part: 'EG-22-ROTOR-A', op: 'OP-30 Finish Turning',
    machine: 'CNC-TURN-04', inspector: 'Arun Balaji',
  });
  const [chars, setChars] = useState(MOCK_CHARS);
  const [remarks, setRemarks] = useState('');

  const updateActual = (idx, val) => {
    const next = [...chars];
    next[idx] = { ...next[idx], actual: val };
    setChars(next);
  };

  const getResult = (row) => {
    const v = parseFloat(row.actual);
    if (isNaN(v)) return { text: '--', color: 'gray' };
    const hi = parseFloat(row.usl);
    const lo = parseFloat(row.lsl);
    return v >= lo && v <= hi
      ? { text: 'Pass', color: 'green' }
      : { text: 'Fail', color: 'red' };
  };

  const allPass = chars.every(c => getResult(c).text === 'Pass');
  const overall = chars.some(c => getResult(c).text === '--') ? 'Pending' : allPass ? 'PASS' : 'FAIL';

  return (
    <div>
      <SectionLabel icon="first_page">First Article Inspection (FAI)</SectionLabel>

      {/* Header form */}
      <div className="card" style={{ padding: 18, marginBottom: 18 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
          <FormField label="Work Order #">
            <input className="form-input" value={form.wo} onChange={e => setForm({ ...form, wo: e.target.value })} />
          </FormField>
          <FormField label="Part #">
            <input className="form-input" value={form.part} onChange={e => setForm({ ...form, part: e.target.value })} />
          </FormField>
          <FormField label="Operation">
            <input className="form-input" value={form.op} onChange={e => setForm({ ...form, op: e.target.value })} />
          </FormField>
          <FormField label="Machine">
            <input className="form-input" value={form.machine} onChange={e => setForm({ ...form, machine: e.target.value })} />
          </FormField>
          <FormField label="Inspector">
            <input className="form-input" value={form.inspector} onChange={e => setForm({ ...form, inspector: e.target.value })} />
          </FormField>
        </div>
      </div>

      {/* Measurement table */}
      <DataTable
        title="Measurement Results \u2014 Compressor Rotor EG-22"
        headers={['Sr#', 'Characteristic', 'Spec', 'USL', 'LSL', 'Gauge', 'Actual Value', 'Result']}
        rows={chars.map((c, i) => {
          const res = getResult(c);
          return [
            c.sr,
            <span style={{ fontWeight: 600 }}>{c.char}</span>,
            <span style={{ fontFamily: 'var(--m)', fontSize: '.75rem' }}>{c.spec}</span>,
            <span style={{ fontFamily: 'var(--m)', fontSize: '.75rem' }}>{c.usl}</span>,
            <span style={{ fontFamily: 'var(--m)', fontSize: '.75rem' }}>{c.lsl}</span>,
            <span style={{ fontSize: '.73rem', color: 'var(--text-dim)' }}>{c.gauge}</span>,
            <input
              className="form-input"
              style={{ width: 100, padding: '5px 8px', fontSize: '.78rem', fontFamily: 'var(--m)' }}
              value={c.actual}
              onChange={e => updateActual(i, e.target.value)}
            />,
            <Badge label={res.text} color={res.color} />,
          ];
        })}
      />

      {/* Overall result & submit */}
      <div className="card" style={{ padding: 18, marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: '.78rem', fontWeight: 600, color: 'var(--text-dim)' }}>Overall Result:</span>
          <Badge label={overall} color={overall === 'PASS' ? 'green' : overall === 'FAIL' ? 'red' : 'amber'} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1, minWidth: 200 }}>
          <input
            className="form-input"
            placeholder="Remarks..."
            value={remarks}
            onChange={e => setRemarks(e.target.value)}
            style={{ flex: 1 }}
          />
          <button className="btn btn-primary">
            <MI size={16}>send</MI> Submit FAI
          </button>
        </div>
      </div>
    </div>
  );
}
