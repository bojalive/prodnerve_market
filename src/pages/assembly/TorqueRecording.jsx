import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const TORQUE_DATA = [
  { stn: 3, fastener: 'Housing Bolt M10x1.5 (Pos 1)', spec: '45 \u00b1 3 Nm', actual: 46.2, tool: 'TW-A01', serial: 'EG-4022-WIS', operator: 'Kannan V', time: '23 Mar 14:12', result: 'Pass' },
  { stn: 3, fastener: 'Housing Bolt M10x1.5 (Pos 2)', spec: '45 \u00b1 3 Nm', actual: 44.8, tool: 'TW-A01', serial: 'EG-4022-WIS', operator: 'Kannan V', time: '23 Mar 14:13', result: 'Pass' },
  { stn: 3, fastener: 'Housing Bolt M10x1.5 (Pos 3)', spec: '45 \u00b1 3 Nm', actual: 43.1, tool: 'TW-A01', serial: 'EG-4022-WIS', operator: 'Kannan V', time: '23 Mar 14:14', result: 'Pass' },
  { stn: 5, fastener: 'End Cover M8x1.25 (Pos 1)', spec: '25 \u00b1 2 Nm', actual: 27.4, tool: 'TW-B02', serial: 'EG-4022-WIS', operator: 'Durai N', time: '23 Mar 13:45', result: 'Fail' },
  { stn: 5, fastener: 'End Cover M8x1.25 (Pos 2)', spec: '25 \u00b1 2 Nm', actual: 24.8, tool: 'TW-B02', serial: 'EG-4022-WIS', operator: 'Durai N', time: '23 Mar 13:46', result: 'Pass' },
  { stn: 6, fastener: 'Bearing Retainer M6x1.0', spec: '12 \u00b1 1.5 Nm', actual: 11.8, tool: 'TW-C03', serial: 'AB-3018-HSR', operator: 'Annamalai S', time: '23 Mar 13:20', result: 'Pass' },
  { stn: 7, fastener: 'Coupling Bolt M12x1.75', spec: '65 \u00b1 5 Nm', actual: 64.2, tool: 'TW-D04', serial: 'AB-3018-HSR', operator: 'Marcus R', time: '23 Mar 12:55', result: 'Pass' },
  { stn: 11, fastener: 'Base Plate M10x1.5', spec: '45 \u00b1 3 Nm', actual: 44.5, tool: 'TW-A01', serial: 'TS-1055-PNE', operator: 'Rajan P', time: '23 Mar 12:30', result: 'Pass' },
];

const RESULT_COLOR = { Pass: 'green', Fail: 'red' };

export default function TorqueRecording() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Torque Recording</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Critical fastener torque verification records with spec vs actual values</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Readings Today" value="124" sub="torque verifications" icon="rotate_right" iconType="up" />
        <KpiCard label="Pass Rate" value="98.4%" sub="within specification" icon="check_circle" iconType="up" change="+0.6% WoW" changeType="up" />
        <KpiCard label="Failures" value="2" sub="out of spec" icon="cancel" iconType="dn" />
        <KpiCard label="Tools Calibrated" value="8/8" sub="all wrenches current" icon="verified" iconType="up" />
      </div>

      <SectionLabel icon="rotate_right">Torque Records ({TORQUE_DATA.length})</SectionLabel>
      <DataTable
        headers={['Stn', 'Fastener Description', 'Spec', 'Actual (Nm)', 'Tool ID', 'Unit Serial', 'Operator', 'Time', 'Result']}
        rows={TORQUE_DATA.map(t => [
          { v: t.stn, style: { fontFamily: 'var(--m)', fontWeight: 600, textAlign: 'center' } },
          t.fastener,
          { v: t.spec, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          { v: t.actual.toFixed(1), style: { fontFamily: 'var(--m)', fontWeight: 600, textAlign: 'right', color: t.result === 'Fail' ? 'var(--red)' : 'var(--text)' } },
          { v: t.tool, style: { fontFamily: 'var(--m)' } },
          { v: t.serial, style: { fontFamily: 'var(--m)' } },
          t.operator,
          t.time,
          <Badge label={t.result} color={RESULT_COLOR[t.result]} />,
        ])}
      />
    </>
  );
}
