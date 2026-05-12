import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const SCHEDULE = [
  { dept: 'CNC Bay 1', mon: ['A','B','C'], tue: ['A','B','C'], wed: ['A','B','C'], thu: ['A','B','C'], fri: ['A','B','C'], sat: ['A','B','--'], sun: ['--','--','--'], headcount: 12 },
  { dept: 'CNC Bay 2', mon: ['A','B','C'], tue: ['A','B','C'], wed: ['A','B','C'], thu: ['A','B','C'], fri: ['A','B','C'], sat: ['A','--','--'], sun: ['--','--','--'], headcount: 9 },
  { dept: 'VMC Bay', mon: ['A','B','C'], tue: ['A','B','C'], wed: ['A','B','C'], thu: ['A','B','C'], fri: ['A','B','--'], sat: ['A','--','--'], sun: ['--','--','--'], headcount: 8 },
  { dept: 'Grinding', mon: ['A','B','C'], tue: ['A','B','C'], wed: ['A','B','C'], thu: ['A','B','C'], fri: ['A','B','C'], sat: ['A','B','--'], sun: ['--','--','--'], headcount: 8 },
  { dept: 'Assembly', mon: ['A','B','--'], tue: ['A','B','--'], wed: ['A','B','--'], thu: ['A','B','--'], fri: ['A','B','--'], sat: ['A','--','--'], sun: ['--','--','--'], headcount: 18 },
  { dept: 'Paint Shop', mon: ['A','B','--'], tue: ['A','B','--'], wed: ['A','B','--'], thu: ['A','B','--'], fri: ['A','B','--'], sat: ['--','--','--'], sun: ['--','--','--'], headcount: 6 },
  { dept: 'Testing', mon: ['A','B','--'], tue: ['A','B','--'], wed: ['A','B','--'], thu: ['A','B','--'], fri: ['A','B','--'], sat: ['A','--','--'], sun: ['--','--','--'], headcount: 8 },
  { dept: 'Maintenance', mon: ['A','B','C'], tue: ['A','B','C'], wed: ['A','B','C'], thu: ['A','B','C'], fri: ['A','B','C'], sat: ['A','B','--'], sun: ['A','--','--'], headcount: 10 },
];

function ShiftCell(shifts) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {shifts.map((s, i) => (
        <span key={i} style={{
          display: 'inline-block', width: 20, height: 20, borderRadius: 4,
          background: s === 'A' ? 'var(--green10, rgba(5,150,105,.15))' : s === 'B' ? 'var(--amber10, rgba(245,158,11,.15))' : s === 'C' ? 'var(--accent10, rgba(8,145,178,.15))' : 'var(--bg-alt, rgba(100,100,100,.06))',
          color: s === 'A' ? 'var(--green)' : s === 'B' ? 'var(--amber)' : s === 'C' ? 'var(--accent)' : 'var(--text-mute)',
          fontSize: '.64rem', fontWeight: 700, fontFamily: 'var(--m)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>{s}</span>
      ))}
    </div>
  );
}

export default function ShiftSchedule() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Shift Schedule</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Week 12 -- 23 Mar to 29 Mar 2026 -- Coimbatore Plant</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Total Headcount" value="79" sub="across all departments" icon="people" />
        <KpiCard label="3-Shift Depts" value="4" sub="24/7 operation" icon="schedule" />
        <KpiCard label="Overtime Planned" value="124 hrs" sub="this week" icon="more_time" change="+18 hrs vs budget" changeType="dn" />
        <KpiCard label="Coverage" value="96%" sub="all shifts filled" icon="event_available" iconType="up" />
      </div>

      <div style={{ display: 'flex', gap: 12, marginBottom: 14, fontSize: '.68rem' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 14, height: 14, borderRadius: 3, background: 'var(--green10, rgba(5,150,105,.15))', color: 'var(--green)', fontSize: '.6rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>A</span> Shift A (06:00-14:00)</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 14, height: 14, borderRadius: 3, background: 'var(--amber10, rgba(245,158,11,.15))', color: 'var(--amber)', fontSize: '.6rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>B</span> Shift B (14:00-22:00)</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 14, height: 14, borderRadius: 3, background: 'var(--accent10, rgba(8,145,178,.15))', color: 'var(--accent)', fontSize: '.6rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>C</span> Shift C (22:00-06:00)</span>
      </div>

      <SectionLabel icon="calendar_month">Weekly Schedule ({SCHEDULE.length} departments)</SectionLabel>
      <DataTable
        headers={['Department', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Headcount']}
        rows={SCHEDULE.map(s => [
          { v: s.dept, style: { fontWeight: 600 } },
          ShiftCell(s.mon),
          ShiftCell(s.tue),
          ShiftCell(s.wed),
          ShiftCell(s.thu),
          ShiftCell(s.fri),
          ShiftCell(s.sat),
          ShiftCell(s.sun),
          { v: s.headcount, style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600 } },
        ])}
      />
    </>
  );
}
