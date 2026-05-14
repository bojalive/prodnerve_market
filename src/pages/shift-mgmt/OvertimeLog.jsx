import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const OT_ENTRIES = [
  { id: 'OT-3001', empId: 'EMP-1063', name: 'V. Rajan', dept: 'Grinding', shift: 'A', date: '23 Mar', hours: 2.3, reason: 'Urgent WO-2526-10001 completion', approvedBy: 'Murugan R', rate: '1.5x', amount: '1,035', status: 'Approved' },
  { id: 'OT-3002', empId: 'EMP-1135', name: 'N. Stan', dept: 'Testing', shift: 'A', date: '23 Mar', hours: 3.5, reason: 'Performance test EG-4022-WIS', approvedBy: 'Senthil M', rate: '1.5x', amount: '1,575', status: 'Approved' },
  { id: 'OT-3003', empId: 'EMP-1218', name: 'P. Dhanush', dept: 'Maintenance', shift: 'A', date: '23 Mar', hours: 4.2, reason: 'CNC-A06 spindle bearing repair', approvedBy: 'Greg T', rate: '2.0x', amount: '2,520', status: 'Approved' },
  { id: 'OT-3004', empId: 'EMP-1042', name: 'M. Kannan', dept: 'CNC Bay 1', shift: 'A', date: '22 Mar', hours: 2.0, reason: 'Setup for new program O3001', approvedBy: 'Murugan R', rate: '1.5x', amount: '900', status: 'Approved' },
  { id: 'OT-3005', empId: 'EMP-1078', name: 'K. Devi', dept: 'Assembly', shift: 'A', date: '22 Mar', hours: 3.0, reason: 'Assembly backlog clearance', approvedBy: 'Senthil M', rate: '1.5x', amount: '1,350', status: 'Approved' },
  { id: 'OT-3006', empId: 'EMP-1152', name: 'R. Karl', dept: 'CNC Bay 2', shift: 'A', date: '22 Mar', hours: 1.5, reason: 'Urgent part for maintenance', approvedBy: 'Murugan R', rate: '1.5x', amount: '675', status: 'Approved' },
  { id: 'OT-3007', empId: 'EMP-1129', name: 'T. Greg', dept: 'Assembly', shift: 'B', date: '21 Mar', hours: 2.5, reason: 'HC-500 assembly completion', approvedBy: 'Annamalai S', rate: '1.5x', amount: '1,125', status: 'Approved' },
  { id: 'OT-3008', empId: 'EMP-1055', name: 'R. Hansen', dept: 'CNC Bay 1', shift: 'A', date: '21 Mar', hours: 4.0, reason: 'Saturday production shift', approvedBy: 'Murugan R', rate: '2.0x', amount: '2,400', status: 'Pending' },
  { id: 'OT-3009', empId: 'EMP-1165', name: 'M. Patrick', dept: 'Grinding', shift: 'B', date: '21 Mar', hours: 2.0, reason: 'Grinding backlog', approvedBy: 'Annamalai S', rate: '1.5x', amount: '900', status: 'Approved' },
  { id: 'OT-3010', empId: 'EMP-1244', name: 'S. Dinesh', dept: 'Maintenance', shift: 'B', date: '20 Mar', hours: 3.0, reason: 'GRD-C04 motor rewind support', approvedBy: 'Greg T', rate: '1.5x', amount: '1,350', status: 'Approved' },
];

const STATUS_COLOR = { Approved: 'green', Pending: 'amber', Rejected: 'red' };

export default function OvertimeLog() {
  const totalHours = OT_ENTRIES.reduce((s, e) => s + e.hours, 0);

  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Overtime Log</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Track, approve, and cost overtime hours across departments</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="OT This Week" value={`${totalHours.toFixed(1)} hrs`} sub="total overtime" icon="more_time" change="+12% vs budget" changeType="dn" />
        <KpiCard label="MTD OT Cost" value="INR 1.24L" sub="overtime wages" icon="currency_rupee" change="+8% vs last month" changeType="dn" />
        <KpiCard label="Pending Approval" value="1" sub="awaiting sign-off" icon="pending" iconType="w" />
        <KpiCard label="Top Dept" value="Maintenance" sub="highest OT this week" icon="engineering" />
      </div>

      <SectionLabel icon="more_time">Overtime Entries ({OT_ENTRIES.length})</SectionLabel>
      <DataTable
        headers={['OT #', 'Emp #', 'Name', 'Department', 'Shift', 'Date', 'Hours', 'Reason', 'Approved By', 'Rate', 'Amount (INR)', 'Status']}
        rows={OT_ENTRIES.map(o => [
          { v: o.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: o.empId, style: { fontFamily: 'var(--m)' } },
          { v: o.name, style: { fontWeight: 600 } },
          o.dept,
          { v: `Shift ${o.shift}`, style: { fontWeight: 600 } },
          o.date,
          { v: o.hours.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right', fontWeight: 600 } },
          o.reason,
          o.approvedBy,
          { v: o.rate, style: { fontFamily: 'var(--m)' } },
          { v: o.amount, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          <Badge label={o.status} color={STATUS_COLOR[o.status]} />,
        ])}
      />
    </>
  );
}
