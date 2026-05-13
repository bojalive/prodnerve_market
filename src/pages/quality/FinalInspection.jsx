import React, { useState } from 'react';
import { MI, KpiCard, SectionLabel, DataTable, FormField, Badge } from '../../components/ui';

const CHECKLIST = [
  { item: 'Critical Bore Dimensions', spec: '\u00d872.000 \u00b10.025 mm', method: 'Bore Gauge', result: 'Pass' },
  { item: 'OD Dimensions (all)', spec: 'Per drawing rev C', method: 'Micrometer', result: 'Pass' },
  { item: 'Surface Finish (Ra)', spec: '\u2264 0.8 \u00b5m', method: 'Profilometer', result: 'Pass' },
  { item: 'Thread Quality (M8, M10)', spec: 'Go/No-Go check', method: 'Thread Gauge', result: 'Pass' },
  { item: 'Visual \u2014 Burrs & Scratches', spec: 'No visible defects', method: 'Visual 100%', result: 'Pass' },
  { item: 'Visual \u2014 Paint / Coating', spec: 'Uniform, no peeling', method: 'Visual + DFT', result: 'Pass' },
  { item: 'Functional \u2014 Rotor Balance', spec: '\u2264 2.0 g\u00b7mm', method: 'Balance Machine', result: 'Pass' },
  { item: 'Fitment \u2014 Housing Assembly', spec: 'No interference', method: 'Trial Fit', result: 'Pass' },
  { item: 'Leak Test', spec: '\u2264 0.5 cc/min @ 8 bar', method: 'Helium Leak', result: 'Fail' },
  { item: 'Noise Level', spec: '\u2264 72 dB(A) @ 1m', method: 'Sound Meter', result: 'Pass' },
  { item: 'Torque Verification', spec: 'Per torque chart', method: 'Torque Wrench', result: 'Pass' },
  { item: 'Packaging & Labelling', spec: 'Per SOP-PKG-07', method: 'Checklist', result: 'Pass' },
];

const RESULTS = ['Pass', 'Fail'];

export default function FinalInspection() {
  const [woInfo] = useState({ wo: 'WO-2526-0412', part: 'AQ-C200', qty: 6, line: 'Assembly Line 2' });
  const [checks, setChecks] = useState(CHECKLIST);
  const [disposition, setDisposition] = useState('Accept');
  const [remarks, setRemarks] = useState({});

  const updateResult = (idx, val) => {
    const next = [...checks];
    next[idx] = { ...next[idx], result: val };
    setChecks(next);
  };

  const passed = checks.filter(c => c.result === 'Pass').length;
  const failed = checks.filter(c => c.result === 'Fail').length;

  return (
    <div>
      <SectionLabel icon="checklist">Final Inspection Checklist</SectionLabel>

      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14, marginBottom: 20 }}>
        <KpiCard label="Inspected Today" value="42" sub="Units completed" icon="fact_check" />
        <KpiCard label="Passed" value="40" sub="Cleared for dispatch" icon="check_circle" iconType="up" />
        <KpiCard label="Failed" value="2" sub="Held for review" icon="cancel" iconType="dn" />
        <KpiCard label="FPY" value="95.2%" sub="First Pass Yield" icon="speed" iconType="up" change="+1.1% vs last week" changeType="up" />
      </div>

      {/* WO header */}
      <div className="card" style={{ padding: 16, marginBottom: 16, display: 'flex', gap: 24, flexWrap: 'wrap', fontSize: '.8rem' }}>
        <div><span style={{ color: 'var(--text-mute)', fontSize: '.68rem', textTransform: 'uppercase', fontWeight: 600 }}>Work Order</span><br /><strong>{woInfo.wo}</strong></div>
        <div><span style={{ color: 'var(--text-mute)', fontSize: '.68rem', textTransform: 'uppercase', fontWeight: 600 }}>Product</span><br /><strong>{woInfo.part}</strong></div>
        <div><span style={{ color: 'var(--text-mute)', fontSize: '.68rem', textTransform: 'uppercase', fontWeight: 600 }}>Quantity</span><br /><strong>{woInfo.qty} units</strong></div>
        <div><span style={{ color: 'var(--text-mute)', fontSize: '.68rem', textTransform: 'uppercase', fontWeight: 600 }}>Line</span><br /><strong>{woInfo.line}</strong></div>
      </div>

      {/* Checklist table */}
      <DataTable
        title="Inspection Checklist"
        headers={['#', 'Check Item', 'Specification', 'Method', 'Result', 'Remarks']}
        rows={checks.map((c, i) => [
          i + 1,
          <span style={{ fontWeight: 600 }}>{c.item}</span>,
          <span style={{ fontFamily: 'var(--m)', fontSize: '.73rem' }}>{c.spec}</span>,
          c.method,
          <select
            className="form-select"
            value={c.result}
            onChange={e => updateResult(i, e.target.value)}
            style={{
              padding: '4px 24px 4px 8px', fontSize: '.74rem', fontWeight: 600,
              color: c.result === 'Pass' ? 'var(--green)' : 'var(--red)',
              background: c.result === 'Pass' ? 'var(--green10)' : 'var(--red10)',
              borderColor: 'transparent', borderRadius: 6,
            }}
          >
            {RESULTS.map(r => <option key={r} value={r}>{r}</option>)}
          </select>,
          <input
            className="form-input"
            style={{ width: 140, padding: '4px 8px', fontSize: '.73rem' }}
            placeholder="..."
            value={remarks[i] || ''}
            onChange={e => setRemarks({ ...remarks, [i]: e.target.value })}
          />,
        ])}
      />

      {/* Disposition */}
      <div className="card" style={{ padding: 18, marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontSize: '.78rem', fontWeight: 600, color: 'var(--text-dim)' }}>Passed: {passed} / Failed: {failed}</span>
          <FormField label="Disposition">
            <select className="form-select" value={disposition} onChange={e => setDisposition(e.target.value)}
              style={{ padding: '6px 28px 6px 10px', fontSize: '.78rem' }}>
              <option value="Accept">Accept</option>
              <option value="Reject">Reject</option>
              <option value="Conditional">Conditional Accept</option>
            </select>
          </FormField>
        </div>
        <button className="btn btn-primary">
          <MI size={16}>send</MI> Submit Inspection
        </button>
      </div>
    </div>
  );
}
