import React from 'react';
import { MI, KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const ANDON_CALLS = [
  { id: 'AND-201', station: 'Stn 5', type: 'Quality', desc: 'Bore dimension out of spec on housing', calledBy: 'Dinesh N', time: '23 Mar 14:05', response: '4 min', responder: 'QC - Saravanan T', status: 'Active' },
  { id: 'AND-202', station: 'Stn 9', type: 'Material', desc: 'Cooling hose kit not available', calledBy: 'Praveen D', time: '23 Mar 13:40', response: '6 min', responder: 'Store - Suresh K', status: 'Active' },
  { id: 'AND-203', station: 'Stn 3', type: 'Equipment', desc: 'Torque wrench TW-A01 needs recalibration', calledBy: 'Karthik V', time: '23 Mar 13:15', response: '3 min', responder: 'Maint - Vijay R', status: 'Active' },
  { id: 'AND-204', station: 'Stn 12', type: 'Quality', desc: 'Compression test failure on TS-1055', calledBy: 'Kelly S', time: '23 Mar 12:10', response: '5 min', responder: 'QC - Anand M', status: 'Active' },
  { id: 'AND-205', station: 'Stn 1', type: 'Safety', desc: 'Oil spill near workstation', calledBy: 'Suresh K', time: '23 Mar 11:30', response: '2 min', responder: 'Safety - Ganesh T', status: 'Resolved' },
  { id: 'AND-206', station: 'Stn 7', type: 'Equipment', desc: 'Pneumatic driver intermittent', calledBy: 'Marcus R', time: '23 Mar 10:45', response: '8 min', responder: 'Maint - Dinesh N', status: 'Resolved' },
  { id: 'AND-207', station: 'Stn 4', type: 'Material', desc: 'Wrong seal kit delivered', calledBy: 'Vijay R', time: '23 Mar 09:20', response: '4 min', responder: 'Store - Suresh K', status: 'Resolved' },
  { id: 'AND-208', station: 'Stn 10', type: 'Technical', desc: 'VFD parameter setup assistance needed', calledBy: 'Stan K', time: '23 Mar 08:50', response: '3 min', responder: 'Eng - Ryan T', status: 'Resolved' },
];

const STATUS_COLOR = { Active: 'red', Resolved: 'green' };
const TYPE_COLOR = { Quality: 'red', Material: 'amber', Equipment: 'amber', Safety: 'red', Technical: 'accent' };

export default function AndonBoard() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Andon Board</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Real-time assembly line alerts and escalation tracking</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Avg Response" value="4.2 min" sub="time to first response" icon="schedule" iconType="w" change="-0.8 min vs avg" changeType="up" />
        <KpiCard label="Total Calls" value="14" sub="today's andon calls" icon="notifications_active" />
        <KpiCard label="Active Now" value="4" sub="unresolved calls" icon="error" iconType="dn" />
        <KpiCard label="Resolution Rate" value="71%" sub="10 of 14 resolved" icon="task_alt" iconType="up" />
      </div>

      <SectionLabel icon="notifications_active">Andon Calls ({ANDON_CALLS.length})</SectionLabel>
      <DataTable
        headers={['Call #', 'Station', 'Type', 'Description', 'Called By', 'Time', 'Response', 'Responder', 'Status']}
        rows={ANDON_CALLS.map(a => [
          { v: a.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: a.station, style: { fontWeight: 600 } },
          <Badge label={a.type} color={TYPE_COLOR[a.type]} />,
          a.desc,
          a.calledBy,
          a.time,
          { v: a.response, style: { fontFamily: 'var(--m)', fontWeight: 600 } },
          a.responder,
          <Badge label={a.status} color={STATUS_COLOR[a.status]} />,
        ])}
      />
    </>
  );
}
