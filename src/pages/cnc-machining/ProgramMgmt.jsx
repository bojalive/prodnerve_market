import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const PROGRAMS = [
  { id: 'O1001', name: 'EG22-ROTOR-OP10', machine: 'CNC-A01', part: 'GT-C200 Rotor', rev: 'C3', author: 'Ryan T', verified: '18 Mar 2026', cycleTime: '8m 42s', status: 'Active' },
  { id: 'O1002', name: 'EG22-ROTOR-OP20', machine: 'CNC-A01', part: 'GT-C200 Rotor', rev: 'C3', author: 'Ryan T', verified: '18 Mar 2026', cycleTime: '6m 18s', status: 'Active' },
  { id: 'O2001', name: 'TS5-BODY-OP10', machine: 'CNC-A02', part: 'GT-RF400 Body', rev: 'B2', author: 'Ganesh S', verified: '12 Mar 2026', cycleTime: '4m 55s', status: 'Active' },
  { id: 'O2002', name: 'TS5-BODY-OP20', machine: 'VMC-B01', part: 'GT-RF400 Body', rev: 'B2', author: 'Ganesh S', verified: '12 Mar 2026', cycleTime: '7m 30s', status: 'Active' },
  { id: 'O3001', name: 'AB30-STATOR-OP10', machine: 'CNC-A03', part: 'GT-SF200 Stator', rev: 'A1', author: 'Pradeep M', verified: '20 Mar 2026', cycleTime: '12m 05s', status: 'Under Review' },
  { id: 'O3002', name: 'EG37-HOUSING-OP10', machine: 'VMC-B02', part: 'GT-C300 Housing', rev: 'D1', author: 'Ryan T', verified: '15 Mar 2026', cycleTime: '14m 22s', status: 'Active' },
  { id: 'O4001', name: 'EG55-SHAFT-OP10', machine: 'CNC-A05', part: 'GT-DF500 Shaft', rev: 'B1', author: 'Ganesh S', verified: '10 Mar 2026', cycleTime: '9m 48s', status: 'Active' },
  { id: 'O4002', name: 'VSD200-BRACKET', machine: 'VMC-B01', part: 'VSD-200 Bracket', rev: 'A2', author: 'Pradeep M', verified: '08 Mar 2026', cycleTime: '3m 15s', status: 'Obsolete' },
];

const STATUS_COLOR = { Active: 'green', 'Under Review': 'amber', Obsolete: 'gray' };

export default function ProgramMgmt() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>CNC Program Management</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Part program library, version control, and verification status</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Total Programs" value="142" sub="in program library" icon="code" />
        <KpiCard label="Active" value="128" sub="in production use" icon="check_circle" iconType="up" />
        <KpiCard label="Under Review" value="8" sub="pending verification" icon="rate_review" iconType="w" />
        <KpiCard label="Updated (MTD)" value="14" sub="programs revised" icon="update" iconType="up" change="+6 vs last month" changeType="up" />
      </div>

      <SectionLabel icon="code">Program Library ({PROGRAMS.length})</SectionLabel>
      <DataTable
        headers={['Program #', 'Name', 'Machine', 'Part', 'Revision', 'Author', 'Verified Date', 'Cycle Time', 'Status']}
        rows={PROGRAMS.map(p => [
          { v: p.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: p.name, style: { fontFamily: 'var(--m)', fontSize: '.74rem' } },
          { v: p.machine, style: { fontFamily: 'var(--m)' } },
          p.part,
          { v: p.rev, style: { fontFamily: 'var(--m)', fontWeight: 600 } },
          p.author,
          p.verified,
          { v: p.cycleTime, style: { fontFamily: 'var(--m)' } },
          <Badge label={p.status} color={STATUS_COLOR[p.status]} />,
        ])}
      />
    </>
  );
}
