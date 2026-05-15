import React, { useState } from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const PM_CHECKLIST = [
  { id: 1, machine: 'CNC-A01', task: 'Check spindle run-out', freq: 'Weekly', spec: '\u2264 0.005 mm', actual: '0.003 mm', tech: 'Ganesh T', status: 'Done' },
  { id: 2, machine: 'CNC-A01', task: 'Clean chip conveyor', freq: 'Daily', spec: 'No blockage', actual: 'Clear', tech: 'Ganesh T', status: 'Done' },
  { id: 3, machine: 'CNC-A01', task: 'Check coolant concentration', freq: 'Daily', spec: '6-10%', actual: '8.2%', tech: 'Ganesh T', status: 'Done' },
  { id: 4, machine: 'CNC-A02', task: 'Lubricate guideway rails', freq: 'Weekly', spec: 'Per lube chart', actual: 'Done', tech: 'Praveen D', status: 'Done' },
  { id: 5, machine: 'CNC-A02', task: 'Check hydraulic oil level', freq: 'Daily', spec: 'Between marks', actual: 'OK', tech: 'Praveen D', status: 'Done' },
  { id: 6, machine: 'CNC-A02', task: 'Inspect chuck jaws', freq: 'Weekly', spec: 'No wear marks', actual: 'Minor wear noted', tech: 'Praveen D', status: 'Flag' },
  { id: 7, machine: 'VMC-B01', task: 'Clean ATC magazine', freq: 'Weekly', spec: 'All pockets clean', actual: 'Clean', tech: 'Marcus R', status: 'Done' },
  { id: 8, machine: 'VMC-B01', task: 'Check axis backlash', freq: 'Monthly', spec: '\u2264 0.010 mm', actual: '0.008 mm', tech: 'Marcus R', status: 'Done' },
  { id: 9, machine: 'GRD-C01', task: 'Dress grinding wheel', freq: 'Daily', spec: 'Per schedule', actual: 'Done', tech: 'Ganesh T', status: 'Done' },
  { id: 10, machine: 'GRD-C01', task: 'Check wheel balance', freq: 'Weekly', spec: '\u2264 0.5 \u00b5m', actual: '0.3 \u00b5m', tech: 'Ganesh T', status: 'Done' },
  { id: 11, machine: 'ASM-D01', task: 'Inspect pneumatic fittings', freq: 'Weekly', spec: 'No leaks', actual: 'OK', tech: 'Praveen D', status: 'Done' },
  { id: 12, machine: 'ASM-D01', task: 'Calibrate torque wrench', freq: 'Monthly', spec: '\u00b12% accuracy', actual: 'Calibrated', tech: 'Praveen D', status: 'Done' },
  { id: 13, machine: 'TST-E01', task: 'Check pressure gauge accuracy', freq: 'Weekly', spec: '\u00b10.5% FS', actual: 'Within spec', tech: 'Marcus R', status: 'Done' },
  { id: 14, machine: 'PNT-F01', task: 'Clean spray booth filters', freq: 'Daily', spec: 'Replace if clogged', actual: 'Replaced', tech: 'Marcus R', status: 'Done' },
  { id: 15, machine: 'PNT-F01', task: 'Check oven temperature uniformity', freq: 'Weekly', spec: '\u00b15\u00b0C of setpoint', actual: '+3\u00b0C', tech: 'Marcus R', status: 'Done' },
];

const STATUS_COLOR = { Done: 'green', Pending: 'amber', Flag: 'red', Skipped: 'gray' };

export default function PMExecution() {
  const [checks] = useState(PM_CHECKLIST);
  const done = checks.filter(c => c.status === 'Done').length;
  const flagged = checks.filter(c => c.status === 'Flag').length;

  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>PM Execution</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Preventive maintenance checklist execution and compliance tracking</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="PM Compliance" value="93%" sub="tasks completed on time" icon="event_available" iconType="up" change="+2% vs last week" changeType="up" />
        <KpiCard label="Completed" value={`${done}/${checks.length}`} sub="tasks done today" icon="check_circle" iconType="up" />
        <KpiCard label="Flagged Issues" value={String(flagged)} sub="needs attention" icon="flag" iconType="dn" />
        <KpiCard label="Overdue PMs" value="4" sub="across all machines" icon="event_busy" iconType="dn" change="-2 vs last week" changeType="up" />
      </div>

      <SectionLabel icon="event_available">PM Checklist ({checks.length})</SectionLabel>
      <DataTable
        headers={['#', 'Machine', 'Task', 'Frequency', 'Specification', 'Actual / Observation', 'Technician', 'Status']}
        rows={checks.map(c => [
          { v: c.id, style: { fontFamily: 'var(--m)', textAlign: 'center' } },
          { v: c.machine, style: { fontWeight: 600, fontFamily: 'var(--m)' } },
          { v: c.task, style: { fontWeight: 600 } },
          c.freq,
          { v: c.spec, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          { v: c.actual, style: { fontFamily: 'var(--m)', fontSize: '.73rem', color: c.status === 'Flag' ? 'var(--red)' : 'var(--text)' } },
          c.tech,
          <Badge label={c.status} color={STATUS_COLOR[c.status]} />,
        ])}
      />
    </>
  );
}
