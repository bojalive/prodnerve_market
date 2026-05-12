import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const VALVE_TESTS = [
  { serial: 'EG-4022-WIS', valve: 'SV-01 (Primary)', setSP: 8.5, actSP: 8.4, reseatP: 7.8, leakTest: 'Pass', certStd: 'ASME VIII', tester: 'Kelly S', date: '23 Mar 2026', result: 'Pass' },
  { serial: 'EG-4022-WIS', valve: 'SV-02 (Thermal)', setSP: 10.0, actSP: 9.8, reseatP: 9.2, leakTest: 'Pass', certStd: 'ASME VIII', tester: 'Kelly S', date: '23 Mar 2026', result: 'Pass' },
  { serial: 'EG-4023-WIS', valve: 'SV-01 (Primary)', setSP: 8.5, actSP: 8.6, reseatP: 7.9, leakTest: 'Pass', certStd: 'ASME VIII', tester: 'Kelly S', date: '23 Mar 2026', result: 'Pass' },
  { serial: 'AB-3018-HSR', valve: 'SV-01 (Primary)', setSP: 10.5, actSP: 10.3, reseatP: 9.6, leakTest: 'Pass', certStd: 'ASME VIII', tester: 'Ryan P', date: '23 Mar 2026', result: 'Pass' },
  { serial: 'AB-3018-HSR', valve: 'SV-02 (Separator)', setSP: 7.0, actSP: 7.2, reseatP: 6.5, leakTest: 'Pass', certStd: 'ASME VIII', tester: 'Ryan P', date: '23 Mar 2026', result: 'Pass' },
  { serial: 'TS-1055-PNE', valve: 'SV-01 (Primary)', setSP: 7.0, actSP: 7.4, reseatP: 6.4, leakTest: 'Fail', certStd: 'IS 2825', tester: 'Kelly S', date: '22 Mar 2026', result: 'Fail' },
  { serial: 'TS-1056-PNE', valve: 'SV-01 (Primary)', setSP: 7.0, actSP: 7.0, reseatP: 6.5, leakTest: 'Pass', certStd: 'IS 2825', tester: 'Kelly S', date: '22 Mar 2026', result: 'Pass' },
  { serial: 'DS-2089-AMD', valve: 'SV-01 (Primary)', setSP: 12.0, actSP: 11.8, reseatP: 11.0, leakTest: 'Pass', certStd: 'ASME VIII', tester: 'Ryan P', date: '22 Mar 2026', result: 'Pass' },
];

const RESULT_COLOR = { Pass: 'green', Fail: 'red' };

export default function SafetyValve() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Safety Valve Testing</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Pressure relief valve set pressure, reseat, and leak testing per ASME / IS standards</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Valves Tested" value="18" sub="this week" icon="security" iconType="up" />
        <KpiCard label="Pass Rate" value="94%" sub="first-time pass" icon="check_circle" iconType="up" />
        <KpiCard label="Failures" value="1" sub="valve replacement needed" icon="cancel" iconType="dn" />
        <KpiCard label="Avg Set Deviation" value="\u00b10.2 bar" sub="from nominal set point" icon="straighten" />
      </div>

      <SectionLabel icon="security">Safety Valve Test Results ({VALVE_TESTS.length})</SectionLabel>
      <DataTable
        headers={['Unit Serial', 'Valve', 'Set Point (bar)', 'Actual Pop (bar)', 'Reseat (bar)', 'Leak Test', 'Standard', 'Tester', 'Date', 'Result']}
        rows={VALVE_TESTS.map(v => [
          { v: v.serial, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: v.valve, style: { fontWeight: 600 } },
          { v: v.setSP.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: v.actSP.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600 } },
          { v: v.reseatP.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          <Badge label={v.leakTest} color={v.leakTest === 'Pass' ? 'green' : 'red'} />,
          { v: v.certStd, style: { fontSize: '.73rem' } },
          v.tester,
          v.date,
          <Badge label={v.result} color={RESULT_COLOR[v.result]} />,
        ])}
      />
    </>
  );
}
