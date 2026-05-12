import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const WELD_PASSES = [
  { wo: 'WO-2526-10001', joint: 'Body to End Cover', pass: 'Root', process: 'GTAW', current: 110, voltage: 11.5, speed: 80, heatInput: 0.95, filler: 'ER70S-6 \u00d81.6', gas: 'Ar 99.99%', welder: 'M. Kannan', status: 'OK' },
  { wo: 'WO-2526-10001', joint: 'Body to End Cover', pass: 'Fill 1', process: 'GTAW', current: 140, voltage: 12.8, speed: 95, heatInput: 1.13, filler: 'ER70S-6 \u00d82.4', gas: 'Ar 99.99%', welder: 'M. Kannan', status: 'OK' },
  { wo: 'WO-2526-10001', joint: 'Body to End Cover', pass: 'Fill 2', process: 'GMAW', current: 180, voltage: 24.5, speed: 120, heatInput: 2.21, filler: 'ER70S-6 \u00d81.2', gas: 'Ar+CO2 80/20', welder: 'R. Hansen', status: 'OK' },
  { wo: 'WO-2526-10001', joint: 'Body to End Cover', pass: 'Cap', process: 'GMAW', current: 200, voltage: 25.0, speed: 130, heatInput: 2.31, filler: 'ER70S-6 \u00d81.2', gas: 'Ar+CO2 80/20', welder: 'R. Hansen', status: 'OK' },
  { wo: 'WO-2526-10006', joint: 'Suction Header', pass: 'Root', process: 'GTAW', current: 90, voltage: 10.5, speed: 70, heatInput: 0.81, filler: 'ER308L \u00d81.6', gas: 'Ar 99.99%', welder: 'A. Babu', status: 'OK' },
  { wo: 'WO-2526-10006', joint: 'Suction Header', pass: 'Fill/Cap', process: 'GTAW', current: 120, voltage: 12.0, speed: 85, heatInput: 1.02, filler: 'ER308L \u00d82.4', gas: 'Ar 99.99%', welder: 'A. Babu', status: 'OK' },
  { wo: 'WO-2526-10003', joint: 'Cyl to Crankcase', pass: 'Root', process: 'SMAW', current: 100, voltage: 22.0, speed: 90, heatInput: 1.47, filler: 'ENiFe-CI \u00d83.2', gas: '--', welder: 'V. Rajan', status: 'Warn' },
  { wo: 'WO-2526-10008', joint: 'Tank Shell Seam', pass: 'Root', process: 'SAW', current: 450, voltage: 30.0, speed: 350, heatInput: 2.31, filler: 'EM12K \u00d83.2', gas: 'F7A2 Flux', welder: 'N. Senthil', status: 'OK' },
];

const STATUS_COLOR = { OK: 'green', Warn: 'amber', Fail: 'red' };

export default function WeldParams() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Weld Parameters</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Actual welding parameters recorded per pass -- current, voltage, travel speed, heat input</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Welds Logged" value="34" sub="passes recorded today" icon="local_fire_department" iconType="up" />
        <KpiCard label="Within Spec" value="97%" sub="parameter compliance" icon="check_circle" iconType="up" />
        <KpiCard label="Heat Input Alerts" value="1" sub="exceeding WPS limit" icon="thermostat" iconType="dn" />
        <KpiCard label="Avg Heat Input" value="1.53 kJ/mm" sub="across all passes" icon="speed" />
      </div>

      <SectionLabel icon="settings_input_component">Weld Pass Log ({WELD_PASSES.length})</SectionLabel>
      <DataTable
        headers={['WO #', 'Joint', 'Pass', 'Process', 'Current (A)', 'Voltage (V)', 'Speed (mm/min)', 'Heat Input (kJ/mm)', 'Filler', 'Gas/Flux', 'Welder', 'Status']}
        rows={WELD_PASSES.map(w => [
          { v: w.wo, style: { fontFamily: 'var(--m)' } },
          { v: w.joint, style: { fontWeight: 600 } },
          { v: w.pass, style: { fontWeight: 600 } },
          { v: w.process, style: { fontWeight: 600 } },
          { v: w.current, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: w.voltage.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: w.speed, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: w.heatInput.toFixed(2), style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600 } },
          { v: w.filler, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          { v: w.gas, style: { fontSize: '.73rem' } },
          w.welder,
          <Badge label={w.status} color={STATUS_COLOR[w.status]} />,
        ])}
      />
    </>
  );
}
