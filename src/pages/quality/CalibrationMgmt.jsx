import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const CALIBRATION_DATA = [
  { gaugeId: 'CAL-001', name: 'Digital Micrometer 0-25mm', make: 'Mitutoyo', range: '0-25 mm', resolution: '0.001 mm', location: 'CNC Bay 1', lastCal: '15 Jan 2026', nextCal: '15 Apr 2026', certNo: 'NABL-4801', lab: 'Bangalore Metrology', status: 'Valid' },
  { gaugeId: 'CAL-002', name: 'Digital Micrometer 25-50mm', make: 'Mitutoyo', range: '25-50 mm', resolution: '0.001 mm', location: 'CNC Bay 1', lastCal: '15 Jan 2026', nextCal: '15 Apr 2026', certNo: 'NABL-4802', lab: 'Bangalore Metrology', status: 'Valid' },
  { gaugeId: 'CAL-003', name: 'Bore Gauge 50-100mm', make: 'Mitutoyo', range: '50-100 mm', resolution: '0.001 mm', location: 'CNC Bay 2', lastCal: '20 Dec 2025', nextCal: '20 Mar 2026', certNo: 'NABL-4768', lab: 'Bangalore Metrology', status: 'Due' },
  { gaugeId: 'CAL-004', name: 'Digital Vernier 0-300mm', make: 'Mitutoyo', range: '0-300 mm', resolution: '0.01 mm', location: 'Assembly', lastCal: '10 Feb 2026', nextCal: '10 May 2026', certNo: 'NABL-4812', lab: 'Chennai Calibration', status: 'Valid' },
  { gaugeId: 'CAL-005', name: 'Torque Wrench 10-50 Nm', make: 'Norbar', range: '10-50 Nm', resolution: '0.5 Nm', location: 'Assembly Stn 3', lastCal: '01 Mar 2026', nextCal: '01 Jun 2026', certNo: 'NABL-4834', lab: 'Chennai Calibration', status: 'Valid' },
  { gaugeId: 'CAL-006', name: 'Torque Wrench 20-100 Nm', make: 'Norbar', range: '20-100 Nm', resolution: '1.0 Nm', location: 'Assembly Stn 5', lastCal: '01 Mar 2026', nextCal: '01 Jun 2026', certNo: 'NABL-4835', lab: 'Chennai Calibration', status: 'Valid' },
  { gaugeId: 'CAL-007', name: 'Surface Roughness Tester', make: 'Mitutoyo SJ-210', range: 'Ra 0.01-100 \u00b5m', resolution: '0.01 \u00b5m', location: 'Grinding', lastCal: '28 Feb 2026', nextCal: '28 May 2026', certNo: 'NABL-4828', lab: 'Bangalore Metrology', status: 'Valid' },
  { gaugeId: 'CAL-008', name: 'Pressure Gauge 0-16 bar', make: 'Wika', range: '0-16 bar', resolution: '0.1 bar', location: 'Testing TB-01', lastCal: '05 Nov 2025', nextCal: '05 Feb 2026', certNo: 'NABL-4722', lab: 'Pune Instruments', status: 'Overdue' },
  { gaugeId: 'CAL-009', name: 'Sound Level Meter', make: 'Bruel & Kjaer', range: '20-140 dB', resolution: '0.1 dB', location: 'Testing NV', lastCal: '15 Feb 2026', nextCal: '15 May 2026', certNo: 'NABL-4818', lab: 'Bangalore Metrology', status: 'Valid' },
  { gaugeId: 'CAL-010', name: 'Thread Gauge Go/No-Go M8', make: 'HPCL', range: 'M8x1.25', resolution: '--', location: 'CNC Bay 1', lastCal: '10 Jan 2026', nextCal: '10 Apr 2026', certNo: 'NABL-4798', lab: 'Chennai Calibration', status: 'Valid' },
];

const STATUS_COLOR = { Valid: 'green', Due: 'amber', Overdue: 'red' };

export default function CalibrationMgmt() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Calibration Management</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Gauge and instrument calibration schedule, certificates, and compliance</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Total Gauges" value="186" sub="calibrated instruments" icon="straighten" />
        <KpiCard label="Valid" value="178" sub="within calibration" icon="check_circle" iconType="up" />
        <KpiCard label="Due This Month" value="6" sub="calibration due" icon="event_busy" iconType="w" />
        <KpiCard label="Overdue" value="2" sub="past due date" icon="error" iconType="dn" />
        <KpiCard label="NABL Labs" value="3" sub="accredited calibration labs" icon="science" />
      </div>

      <SectionLabel icon="straighten">Calibration Register ({CALIBRATION_DATA.length})</SectionLabel>
      <DataTable
        headers={['Gauge ID', 'Instrument', 'Make', 'Range', 'Resolution', 'Location', 'Last Cal', 'Next Cal', 'Cert No', 'Lab', 'Status']}
        rows={CALIBRATION_DATA.map(c => [
          { v: c.gaugeId, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: c.name, style: { fontWeight: 600 } },
          c.make,
          { v: c.range, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          { v: c.resolution, style: { fontFamily: 'var(--m)' } },
          c.location,
          c.lastCal,
          c.nextCal,
          { v: c.certNo, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          c.lab,
          <Badge label={c.status} color={STATUS_COLOR[c.status]} />,
        ])}
      />
    </>
  );
}
