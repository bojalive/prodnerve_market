import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const ATTENDANCE = [
  { empId: 'EMP-1042', name: 'M. Kannan', dept: 'CNC Bay 1', shift: 'A', inTime: '05:55', outTime: '14:05', hours: 8.2, ot: 0, status: 'Present' },
  { empId: 'EMP-1055', name: 'R. Hansen', dept: 'CNC Bay 1', shift: 'A', inTime: '06:02', outTime: '14:00', hours: 8.0, ot: 0, status: 'Present' },
  { empId: 'EMP-1063', name: 'V. Rajan', dept: 'Grinding', shift: 'A', inTime: '05:50', outTime: '16:10', hours: 10.3, ot: 2.3, status: 'Present' },
  { empId: 'EMP-1078', name: 'K. Devi', dept: 'Assembly', shift: 'A', inTime: '06:10', outTime: '14:00', hours: 7.8, ot: 0, status: 'Late' },
  { empId: 'EMP-1091', name: 'S. Mason', dept: 'CNC Bay 1', shift: 'B', inTime: '14:00', outTime: '22:02', hours: 8.0, ot: 0, status: 'Present' },
  { empId: 'EMP-1104', name: 'P. Kelly', dept: 'VMC Bay', shift: 'A', inTime: '05:58', outTime: '14:00', hours: 8.0, ot: 0, status: 'Present' },
  { empId: 'EMP-1117', name: 'A. Babu', dept: 'Welding', shift: 'A', inTime: '--', outTime: '--', hours: 0, ot: 0, status: 'Absent' },
  { empId: 'EMP-1129', name: 'T. Greg', dept: 'Assembly', shift: 'B', inTime: '13:55', outTime: '22:00', hours: 8.1, ot: 0, status: 'Present' },
  { empId: 'EMP-1135', name: 'N. Stan', dept: 'Testing', shift: 'A', inTime: '06:00', outTime: '17:30', hours: 11.5, ot: 3.5, status: 'Present' },
  { empId: 'EMP-1148', name: 'D. Vignesh', dept: 'Paint Shop', shift: 'A', inTime: '06:05', outTime: '14:00', hours: 7.9, ot: 0, status: 'Present' },
  { empId: 'EMP-1152', name: 'R. Karthik', dept: 'CNC Bay 2', shift: 'A', inTime: '05:52', outTime: '14:00', hours: 8.1, ot: 0, status: 'Present' },
  { empId: 'EMP-1165', name: 'M. Patrick', dept: 'Grinding', shift: 'B', inTime: '14:02', outTime: '22:00', hours: 8.0, ot: 0, status: 'Present' },
  { empId: 'EMP-1178', name: 'S. Ryan', dept: 'VMC Bay', shift: 'B', inTime: '14:00', outTime: '22:05', hours: 8.1, ot: 0, status: 'Present' },
  { empId: 'EMP-1191', name: 'K. Vijay', dept: 'Assembly', shift: 'A', inTime: '--', outTime: '--', hours: 0, ot: 0, status: 'Leave' },
  { empId: 'EMP-1204', name: 'G. Anand', dept: 'CNC Bay 2', shift: 'B', inTime: '14:00', outTime: '22:00', hours: 8.0, ot: 0, status: 'Present' },
  { empId: 'EMP-1218', name: 'P. Dhanush', dept: 'Maintenance', shift: 'A', inTime: '05:48', outTime: '18:00', hours: 12.2, ot: 4.2, status: 'Present' },
  { empId: 'EMP-1225', name: 'R. Balaji', dept: 'CNC Bay 1', shift: 'C', inTime: '22:00', outTime: '06:00', hours: 8.0, ot: 0, status: 'Present' },
  { empId: 'EMP-1238', name: 'M. Arun', dept: 'Grinding', shift: 'C', inTime: '22:05', outTime: '06:00', hours: 7.9, ot: 0, status: 'Late' },
  { empId: 'EMP-1244', name: 'S. Dinesh', dept: 'Maintenance', shift: 'B', inTime: '14:00', outTime: '22:00', hours: 8.0, ot: 0, status: 'Present' },
  { empId: 'EMP-1257', name: 'K. Mohan', dept: 'Testing', shift: 'B', inTime: '14:00', outTime: '22:00', hours: 8.0, ot: 0, status: 'Present' },
];

const STATUS_COLOR = { Present: 'green', Late: 'amber', Absent: 'red', Leave: 'gray' };

export default function AttendanceTracker() {
  const present = ATTENDANCE.filter(a => a.status === 'Present' || a.status === 'Late').length;
  const absent = ATTENDANCE.filter(a => a.status === 'Absent').length;
  const leave = ATTENDANCE.filter(a => a.status === 'Leave').length;

  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Attendance Tracker</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Daily attendance, punctuality, and overtime tracking -- 23 Mar 2026</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Present" value={String(present)} sub="on duty" icon="how_to_reg" iconType="up" />
        <KpiCard label="Absent" value={String(absent)} sub="unplanned" icon="person_off" iconType="dn" />
        <KpiCard label="On Leave" value={String(leave)} sub="planned leave" icon="event_busy" />
        <KpiCard label="Late Arrivals" value="2" sub="> 5 min late" icon="schedule" iconType="w" />
        <KpiCard label="OT Hours" value="10.0" sub="total overtime today" icon="more_time" />
      </div>

      <SectionLabel icon="how_to_reg">Attendance Log ({ATTENDANCE.length})</SectionLabel>
      <DataTable
        headers={['Emp #', 'Name', 'Department', 'Shift', 'In Time', 'Out Time', 'Hours', 'OT (hrs)', 'Status']}
        rows={ATTENDANCE.map(a => [
          { v: a.empId, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: a.name, style: { fontWeight: 600 } },
          a.dept,
          { v: `Shift ${a.shift}`, style: { fontWeight: 600 } },
          { v: a.inTime, style: { fontFamily: 'var(--m)' } },
          { v: a.outTime, style: { fontFamily: 'var(--m)' } },
          { v: a.hours.toFixed(1), style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: a.ot > 0 ? a.ot.toFixed(1) : '--', style: { fontFamily: 'var(--m)', textAlign: 'right', color: a.ot > 0 ? 'var(--amber)' : 'var(--text-mute)' } },
          <Badge label={a.status} color={STATUS_COLOR[a.status]} />,
        ])}
      />
    </>
  );
}
