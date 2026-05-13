import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const PERF_DATA = [
  { serial: 'IC-4022-PCL', load: '25%', pressure: 2.1, flow: 1.42, power: 4.8, efficiency: 88.2, temp: 72, vibration: 1.2, result: 'Pass' },
  { serial: 'IC-4022-PCL', load: '50%', pressure: 4.2, flow: 2.84, power: 9.2, efficiency: 91.4, temp: 78, vibration: 1.4, result: 'Pass' },
  { serial: 'IC-4022-PCL', load: '75%', pressure: 6.3, flow: 4.18, power: 13.8, efficiency: 92.8, temp: 84, vibration: 1.8, result: 'Pass' },
  { serial: 'IC-4022-PCL', load: '100%', pressure: 8.0, flow: 5.60, power: 18.5, efficiency: 93.1, temp: 92, vibration: 2.1, result: 'Pass' },
  { serial: 'IC-4022-PCL', load: '110% (Overload)', pressure: 8.8, flow: 6.10, power: 20.8, efficiency: 91.6, temp: 98, vibration: 2.6, result: 'Pass' },
  { serial: 'TS-1055-PNE', load: '25%', pressure: 1.8, flow: 0.42, power: 1.2, efficiency: 82.4, temp: 65, vibration: 1.8, result: 'Pass' },
  { serial: 'TS-1055-PNE', load: '50%', pressure: 3.5, flow: 0.84, power: 2.3, efficiency: 85.6, temp: 72, vibration: 2.0, result: 'Pass' },
  { serial: 'TS-1055-PNE', load: '75%', pressure: 5.2, flow: 1.22, power: 3.4, efficiency: 86.2, temp: 80, vibration: 2.4, result: 'Pass' },
  { serial: 'TS-1055-PNE', load: '100%', pressure: 7.0, flow: 1.62, power: 4.6, efficiency: 87.0, temp: 88, vibration: 3.2, result: 'Warn' },
  { serial: 'TS-1055-PNE', load: '110% (Overload)', pressure: 7.7, flow: 1.78, power: 5.2, efficiency: 84.8, temp: 95, vibration: 3.8, result: 'Warn' },
];

const RESULT_COLOR = { Pass: 'green', Warn: 'amber', Fail: 'red' };

export default function PerformanceTest() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Performance Test</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Multi-point load testing -- pressure, flow, power, efficiency at each load step</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Units Tested" value="6" sub="today's completions" icon="speed" iconType="up" />
        <KpiCard label="All Points Pass" value="4" sub="of 6 units" icon="check_circle" iconType="up" />
        <KpiCard label="Warnings" value="2" sub="marginal results" icon="warning" iconType="w" />
        <KpiCard label="Avg Efficiency" value="89.2%" sub="at rated load" icon="bolt" />
        <KpiCard label="Avg Test Time" value="5.2 hrs" sub="per unit" icon="schedule" />
      </div>

      <SectionLabel icon="speed">Performance Test Results ({PERF_DATA.length})</SectionLabel>
      <DataTable
        headers={['Serial', 'Load Point', 'Pressure (bar)', 'Flow (m\u00b3/min)', 'Power (kW)', 'Efficiency (%)', 'Temp (\u00b0C)', 'Vibration (mm/s)', 'Result']}
        rows={PERF_DATA.map(p => [
          { v: p.serial, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: p.load, style: { fontWeight: 600 } },
          { v: p.pressure.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: p.flow.toFixed(2), style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: p.power.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: p.efficiency.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600 } },
          { v: p.temp, style: { fontFamily: 'var(--m)', textAlign: 'right', color: p.temp > 95 ? 'var(--red)' : p.temp > 90 ? 'var(--amber)' : 'var(--text)' } },
          { v: p.vibration.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right', color: p.vibration > 3.0 ? 'var(--amber)' : 'var(--text)' } },
          <Badge label={p.result} color={RESULT_COLOR[p.result]} />,
        ])}
      />
    </>
  );
}
