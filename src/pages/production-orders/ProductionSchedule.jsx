import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge, StatusDot } from '../../components/ui';

const SCHEDULE = [
  { job: 'JOB-4081', product: 'PA-450 Hub Assembly', qty: 48, machine: 'CNC Line A1', mon: [8, 8], tue: [8, 7], wed: [8, 8], thu: [8, 6], fri: [8, 0], sat: [8, 0] },
  { job: 'JOB-4082', product: 'HC-250 Hydraulic Cyl Body', qty: 24, machine: 'Assembly B2', mon: [4, 4], tue: [4, 3], wed: [4, 4], thu: [4, 4], fri: [4, 0], sat: [4, 0] },
  { job: 'JOB-4083', product: 'BR-75 Aerospace Bracket', qty: 120, machine: 'Press Line C1', mon: [20, 20], tue: [20, 18], wed: [20, 20], thu: [20, 19], fri: [20, 0], sat: [20, 0] },
  { job: 'JOB-4084', product: 'PA-625 Hub Assembly', qty: 16, machine: 'CNC Line A2', mon: [3, 3], tue: [3, 2], wed: [3, 3], thu: [3, 3], fri: [2, 0], sat: [2, 0] },
  { job: 'JOB-4085', product: 'VSD-200 Controller', qty: 200, machine: 'SMT Line D1', mon: [35, 35], tue: [35, 32], wed: [35, 34], thu: [35, 30], fri: [30, 0], sat: [30, 0] },
  { job: 'JOB-4086', product: 'HC-500 Hydraulic Cyl Body', qty: 8, machine: 'Clean Room E1', mon: [2, 2], tue: [2, 1], wed: [2, 2], thu: [2, 0], fri: [0, 0], sat: [0, 0] },
  { job: 'JOB-4087', product: 'BR-150 Aerospace Bracket', qty: 80, machine: 'Press Line C2', mon: [14, 14], tue: [14, 12], wed: [14, 14], thu: [14, 13], fri: [12, 0], sat: [12, 0] },
  { job: 'JOB-4088', product: 'PA-880 Hub Assembly', qty: 12, machine: 'CNC Line A3', mon: [2, 2], tue: [2, 2], wed: [2, 2], thu: [2, 1], fri: [2, 0], sat: [2, 0] },
  { job: 'JOB-4089', product: 'VSD-100 Controller', qty: 350, machine: 'SMT Line D2', mon: [60, 58], tue: [60, 55], wed: [60, 60], thu: [60, 52], fri: [55, 0], sat: [55, 0] },
  { job: 'JOB-4090', product: 'BR-300 Aerospace Bracket', qty: 60, machine: 'Press Line C3', mon: [10, 10], tue: [10, 9], wed: [10, 10], thu: [10, 10], fri: [10, 0], sat: [10, 0] },
];

function DayCell([planned, actual]) {
  if (planned === 0 && actual === 0) return <span style={{ color: 'var(--text-mute)', fontSize: '.72rem' }}>--</span>;
  const pct = planned > 0 ? actual / planned : 0;
  const color = actual === 0 ? 'var(--text-mute)' : pct >= 0.95 ? 'var(--green)' : pct >= 0.8 ? 'var(--amber)' : 'var(--red)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
      <span style={{ fontSize: '.72rem', fontFamily: 'var(--m)', fontWeight: 600, color }}>{actual}</span>
      <span style={{ fontSize: '.58rem', color: 'var(--text-mute)' }}>/{planned}</span>
    </div>
  );
}

export default function ProductionSchedule() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Production Schedule</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Week 12 -- 23 Mar to 28 Mar 2026 -- All plants</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Schedule Adherence" value="84%" sub="target: 92%" change="-3.1% WoW" changeType="dn" icon="event_available" />
        <KpiCard label="Jobs This Week" value="28" sub="across 5 plants" icon="assignment" />
        <KpiCard label="At Risk" value="5" sub="may miss due date" change="+2 vs last week" changeType="dn" icon="report_problem" />
        <KpiCard label="Machines Loaded" value="42" sub="of 45 total machines" change="93% utilization" changeType="up" icon="precision_manufacturing" />
      </div>

      <SectionLabel icon="calendar_month">Weekly Schedule -- Planned vs Actual</SectionLabel>
      <DataTable
        title="Production Schedule -- Week 12"
        action={
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: '.66rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: 2, background: 'var(--green)', display: 'inline-block' }} /> On Track</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: 2, background: 'var(--amber)', display: 'inline-block' }} /> Minor Delay</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: 2, background: 'var(--red)', display: 'inline-block' }} /> Behind</span>
          </div>
        }
        headers={['Job #', 'Product', 'Qty', 'Machine', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
        rows={SCHEDULE.map(s => [
          { v: s.job, style: { fontWeight: 600, fontFamily: 'var(--m)' } },
          s.product,
          { v: s.qty, style: { fontFamily: 'var(--m)' } },
          { v: s.machine, style: { fontSize: '.74rem' } },
          DayCell(s.mon),
          DayCell(s.tue),
          DayCell(s.wed),
          DayCell(s.thu),
          DayCell(s.fri),
          DayCell(s.sat),
        ])}
      />
    </>
  );
}
