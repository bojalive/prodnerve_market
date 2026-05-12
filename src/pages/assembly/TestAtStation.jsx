import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const TEST_RESULTS = [
  { serial: 'EG-4022-WIS', test: 'Rotation Check', spec: 'Free rotation, no binding', actual: 'Smooth', station: 'Stn 3', tester: 'Karthik V', time: '23 Mar 14:20', result: 'Pass' },
  { serial: 'EG-4022-WIS', test: 'Leak Test (Low Pressure)', spec: '\u2264 0.5 cc/min @ 3 bar', actual: '0.2 cc/min', station: 'Stn 5', tester: 'Dinesh N', time: '23 Mar 13:50', result: 'Pass' },
  { serial: 'EG-4022-WIS', test: 'Electrical Continuity', spec: 'Resistance < 0.5\u03A9', actual: '0.3\u03A9', station: 'Stn 4', tester: 'Vijay R', time: '23 Mar 13:30', result: 'Pass' },
  { serial: 'AB-3018-HSR', test: 'Scroll Clearance', spec: '0.05-0.08 mm', actual: '0.06 mm', station: 'Stn 7', tester: 'Manoj R', time: '23 Mar 13:10', result: 'Pass' },
  { serial: 'AB-3018-HSR', test: 'Oil Circuit Flow', spec: '\u2265 2 L/min @ 2 bar', actual: '2.4 L/min', station: 'Stn 8', tester: 'Ganesh T', time: '23 Mar 12:40', result: 'Pass' },
  { serial: 'TS-1055-PNE', test: 'Compression Check', spec: '\u2265 6.5 bar', actual: '6.2 bar', station: 'Stn 12', tester: 'Kavitha S', time: '23 Mar 12:15', result: 'Fail' },
  { serial: 'TS-1055-PNE', test: 'Piston Ring Gap', spec: '0.25-0.45 mm', actual: '0.32 mm', station: 'Stn 11', tester: 'Rajesh P', time: '23 Mar 11:50', result: 'Pass' },
  { serial: 'VSD-6014-JMP', test: 'VFD Output Check', spec: '380-420V, 50Hz', actual: '400V/50Hz', station: 'Stn 10', tester: 'Senthil K', time: '23 Mar 11:30', result: 'Pass' },
];

const RESULT_COLOR = { Pass: 'green', Fail: 'red' };

export default function TestAtStation() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Test at Station</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>In-line tests performed during assembly at various stations</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Tests Today" value="86" sub="in-line verifications" icon="labs" iconType="up" />
        <KpiCard label="Pass Rate" value="97.7%" sub="84 of 86 passed" icon="check_circle" iconType="up" change="+0.8% WoW" changeType="up" />
        <KpiCard label="Failures" value="2" sub="held for disposition" icon="cancel" iconType="dn" />
        <KpiCard label="Avg Test Time" value="3.2 min" sub="per test point" icon="schedule" />
      </div>

      <SectionLabel icon="labs">Test Results ({TEST_RESULTS.length})</SectionLabel>
      <DataTable
        headers={['Unit Serial', 'Test', 'Specification', 'Actual', 'Station', 'Tester', 'Time', 'Result']}
        rows={TEST_RESULTS.map(t => [
          { v: t.serial, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: t.test, style: { fontWeight: 600 } },
          { v: t.spec, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          { v: t.actual, style: { fontFamily: 'var(--m)', fontWeight: 600, color: t.result === 'Fail' ? 'var(--red)' : 'var(--text)' } },
          t.station,
          t.tester,
          t.time,
          <Badge label={t.result} color={RESULT_COLOR[t.result]} />,
        ])}
      />
    </>
  );
}
