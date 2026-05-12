import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const ALLOCATIONS = [
  { empId: 'EMP-1042', name: 'M. Kannan', skill: 'CNC Operator', grade: 'A', machine: 'CNC-A01', dept: 'CNC Bay 1', shift: 'A', from: '23 Mar', to: '28 Mar', status: 'Active' },
  { empId: 'EMP-1055', name: 'R. Hansen', skill: 'CNC Operator', grade: 'B', machine: 'CNC-A02', dept: 'CNC Bay 1', shift: 'A', from: '23 Mar', to: '28 Mar', status: 'Active' },
  { empId: 'EMP-1063', name: 'V. Rajan', skill: 'Grinder Operator', grade: 'A', machine: 'GRD-C01', dept: 'Grinding', shift: 'A', from: '23 Mar', to: '28 Mar', status: 'Active' },
  { empId: 'EMP-1078', name: 'K. Devi', skill: 'Assembly Fitter', grade: 'B', machine: 'ASM-D01', dept: 'Assembly', shift: 'A', from: '23 Mar', to: '28 Mar', status: 'Active' },
  { empId: 'EMP-1091', name: 'S. Mason', skill: 'CNC Operator', grade: 'A', machine: 'CNC-A03', dept: 'CNC Bay 1', shift: 'B', from: '23 Mar', to: '28 Mar', status: 'Active' },
  { empId: 'EMP-1104', name: 'P. Kelly', skill: 'VMC Operator', grade: 'B', machine: 'VMC-B01', dept: 'VMC Bay', shift: 'A', from: '23 Mar', to: '28 Mar', status: 'Active' },
  { empId: 'EMP-1117', name: 'A. Babu', skill: 'Welder', grade: 'A', machine: 'WLD-01', dept: 'Welding', shift: 'A', from: '23 Mar', to: '28 Mar', status: 'Active' },
  { empId: 'EMP-1129', name: 'T. Greg', skill: 'Assembly Fitter', grade: 'A', machine: 'ASM-D02', dept: 'Assembly', shift: 'B', from: '23 Mar', to: '28 Mar', status: 'Active' },
  { empId: 'EMP-1135', name: 'N. Stan', skill: 'Test Engineer', grade: 'A', machine: 'TST-E01', dept: 'Testing', shift: 'A', from: '23 Mar', to: '28 Mar', status: 'Active' },
  { empId: 'EMP-1148', name: 'D. Vignesh', skill: 'Paint Operator', grade: 'B', machine: 'PNT-F01', dept: 'Paint Shop', shift: 'A', from: '23 Mar', to: '28 Mar', status: 'Active' },
  { empId: 'EMP-1152', name: 'R. Karl', skill: 'CNC Operator', grade: 'B', machine: 'CNC-A05', dept: 'CNC Bay 2', shift: 'A', from: '23 Mar', to: '28 Mar', status: 'Active' },
  { empId: 'EMP-1165', name: 'M. Patrick', skill: 'Grinder Operator', grade: 'B', machine: 'GRD-C02', dept: 'Grinding', shift: 'B', from: '23 Mar', to: '28 Mar', status: 'Active' },
  { empId: 'EMP-1178', name: 'S. Ryan', skill: 'VMC Operator', grade: 'A', machine: 'VMC-B02', dept: 'VMC Bay', shift: 'B', from: '23 Mar', to: '28 Mar', status: 'Active' },
  { empId: 'EMP-1191', name: 'K. Vijay', skill: 'Assembly Fitter', grade: 'B', machine: 'ASM-D03', dept: 'Assembly', shift: 'A', from: '23 Mar', to: '25 Mar', status: 'Leave' },
  { empId: 'EMP-1204', name: 'G. Anand', skill: 'CNC Operator', grade: 'A', machine: 'CNC-A04', dept: 'CNC Bay 2', shift: 'B', from: '23 Mar', to: '28 Mar', status: 'Active' },
];

const STATUS_COLOR = { Active: 'green', Leave: 'amber', Unassigned: 'gray' };

export default function ManpowerAlloc() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Manpower Allocation</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Machine-operator assignments for the current week</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Allocated" value="74" sub="operators assigned" icon="people" iconType="up" />
        <KpiCard label="On Leave" value="5" sub="this week" icon="event_busy" iconType="w" />
        <KpiCard label="Multi-Skill" value="18" sub="can operate 2+ machines" icon="workspace_premium" />
        <KpiCard label="Utilization" value="94%" sub="operator utilization" icon="speed" iconType="up" />
      </div>

      <SectionLabel icon="people">Operator Assignments ({ALLOCATIONS.length})</SectionLabel>
      <DataTable
        headers={['Emp #', 'Name', 'Skill', 'Grade', 'Machine', 'Department', 'Shift', 'From', 'To', 'Status']}
        rows={ALLOCATIONS.map(a => [
          { v: a.empId, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: a.name, style: { fontWeight: 600 } },
          a.skill,
          { v: a.grade, style: { fontFamily: 'var(--m)', fontWeight: 600 } },
          { v: a.machine, style: { fontFamily: 'var(--m)' } },
          a.dept,
          { v: `Shift ${a.shift}`, style: { fontWeight: 600 } },
          a.from,
          a.to,
          <Badge label={a.status} color={STATUS_COLOR[a.status]} />,
        ])}
      />
    </>
  );
}
