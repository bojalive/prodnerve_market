import React, { useState } from 'react';
import { MI, KpiCard, SectionLabel, DataTable, FormField, Badge } from '../../components/ui';

const PARTS = ['PA-450 Rotor', 'PA-625 Stator', 'PA-880 Housing', 'AB-50 Cylinder', 'VSD-75 End Cover'];
const DIMENSIONS = ['Bore ID \u00d872.000', 'OD \u00d8119.950', 'Face Runout 0.015', 'Groove Width 3.200', 'Thread Depth M8x12'];

const MOCK_ROUNDS = [
  { round: 6, time: '14:30', readings: [72.012, 72.008, 72.015, 72.010, 72.006], xbar: 72.0102, r: 0.009, cpk: 1.51, status: 'In Control' },
  { round: 5, time: '12:00', readings: [72.018, 72.005, 72.011, 72.022, 72.009], xbar: 72.0130, r: 0.017, cpk: 1.38, status: 'In Control' },
  { round: 4, time: '09:30', readings: [71.998, 72.003, 72.010, 72.001, 72.007], xbar: 72.0038, r: 0.012, cpk: 1.44, status: 'In Control' },
  { round: 3, time: '07:00', readings: [72.021, 72.025, 72.019, 72.023, 72.020], xbar: 72.0216, r: 0.006, cpk: 1.12, status: 'Warning' },
  { round: 2, time: '04:30', readings: [72.006, 72.009, 72.012, 72.005, 72.011], xbar: 72.0086, r: 0.007, cpk: 1.56, status: 'In Control' },
  { round: 1, time: '02:00', readings: [72.014, 72.010, 72.008, 72.016, 72.011], xbar: 72.0118, r: 0.008, cpk: 1.48, status: 'In Control' },
];

export default function PatrolInspection() {
  const [part, setPart] = useState(PARTS[0]);
  const [dim, setDim] = useState(DIMENSIONS[0]);
  const [samples, setSamples] = useState(['', '', '', '', '']);

  const updateSample = (i, v) => {
    const next = [...samples];
    next[i] = v;
    setSamples(next);
  };

  return (
    <div>
      <SectionLabel icon="monitoring">Patrol Inspection / SPC Data Entry</SectionLabel>

      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginBottom: 20 }}>
        <KpiCard label="Avg Cpk" value="1.42" sub="Across all monitored dims" icon="analytics" iconType="up" change="+0.08 vs last week" changeType="up" />
        <KpiCard label="In-Control" value="94%" sub="156 / 166 dimensions" icon="check_circle" iconType="up" />
        <KpiCard label="Active Alerts" value="3" sub="2 Warning, 1 Out of Control" icon="warning" iconType="w" change="1 new today" changeType="w" />
      </div>

      {/* Selection */}
      <div className="card" style={{ padding: 18, marginBottom: 18 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
          <FormField label="Select Part">
            <select className="form-select" value={part} onChange={e => setPart(e.target.value)}>
              {PARTS.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </FormField>
          <FormField label="Select Dimension">
            <select className="form-select" value={dim} onChange={e => setDim(e.target.value)}>
              {DIMENSIONS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </FormField>
        </div>

        <div style={{ marginTop: 14, padding: 12, background: 'var(--surface2)', borderRadius: 8, fontSize: '.76rem', color: 'var(--text-dim)' }}>
          <strong>Control Limits:</strong> UCL = 72.025 &nbsp;|&nbsp; CL = 72.000 &nbsp;|&nbsp; LCL = 71.975 &nbsp;|&nbsp; USL = 72.025 &nbsp;|&nbsp; LSL = 71.975
        </div>
      </div>

      {/* Sample entry */}
      <div className="card" style={{ padding: 18, marginBottom: 18 }}>
        <div style={{ fontSize: '.82rem', fontWeight: 700, marginBottom: 12 }}>New Patrol Round \u2014 5 Readings</div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'flex-end' }}>
          {samples.map((s, i) => (
            <FormField key={i} label={`Reading ${i + 1}`}>
              <input
                className="form-input"
                style={{ width: 110, fontFamily: 'var(--m)', fontSize: '.8rem' }}
                placeholder="72.000"
                value={s}
                onChange={e => updateSample(i, e.target.value)}
              />
            </FormField>
          ))}
          <button className="btn btn-primary" style={{ marginBottom: 14 }}>
            <MI size={16}>add_circle</MI> Record Round
          </button>
        </div>
      </div>

      {/* Recent readings */}
      <DataTable
        title="Recent Patrol Rounds"
        headers={['Round #', 'Time', 'Readings', 'X\u0305', 'R', 'Cpk', 'Status']}
        rows={MOCK_ROUNDS.map(r => [
          <span style={{ fontWeight: 700 }}>#{r.round}</span>,
          r.time,
          <span style={{ fontFamily: 'var(--m)', fontSize: '.72rem' }}>{r.readings.map(v => v.toFixed(3)).join(', ')}</span>,
          <span style={{ fontFamily: 'var(--m)', fontWeight: 600 }}>{r.xbar.toFixed(4)}</span>,
          <span style={{ fontFamily: 'var(--m)' }}>{r.r.toFixed(3)}</span>,
          <span style={{ fontFamily: 'var(--m)', fontWeight: 700, color: r.cpk >= 1.33 ? 'var(--green)' : r.cpk >= 1.0 ? 'var(--amber)' : 'var(--red)' }}>{r.cpk.toFixed(2)}</span>,
          <Badge label={r.status} color={r.status === 'In Control' ? 'green' : r.status === 'Warning' ? 'amber' : 'red'} />,
        ])}
      />
    </div>
  );
}
