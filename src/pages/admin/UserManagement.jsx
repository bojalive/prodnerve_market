import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const USERS = [
  { id: 'USR-001', name: 'Rajesh Kelly', email: 'rajesh.k@company.com', role: 'Super Admin', plant: 'All', dept: 'IT', lastLogin: '23 Mar 14:22', status: 'Active' },
  { id: 'USR-002', name: 'Scott Menon', email: 'suresh.m@company.com', role: 'Plant Head', plant: 'Coimbatore', dept: 'Operations', lastLogin: '23 Mar 13:45', status: 'Active' },
  { id: 'USR-003', name: 'Priya Sharma', email: 'priya.s@company.com', role: 'Plant Head', plant: 'Hosur', dept: 'Operations', lastLogin: '23 Mar 12:30', status: 'Active' },
  { id: 'USR-004', name: 'Karl Venkatesh', email: 'karthik.v@company.com', role: 'Production Mgr', plant: 'Coimbatore', dept: 'Production', lastLogin: '23 Mar 14:10', status: 'Active' },
  { id: 'USR-005', name: 'Anand Subramanian', email: 'anand.s@company.com', role: 'Quality Mgr', plant: 'Coimbatore', dept: 'Quality', lastLogin: '23 Mar 11:20', status: 'Active' },
  { id: 'USR-006', name: 'Dan Nair', email: 'deepak.n@company.com', role: 'Maintenance Mgr', plant: 'Pune', dept: 'Maintenance', lastLogin: '22 Mar 16:45', status: 'Active' },
  { id: 'USR-007', name: 'Suresh Krishnan', email: 'ravi.k@company.com', role: 'Supervisor', plant: 'Coimbatore', dept: 'CNC', lastLogin: '23 Mar 14:00', status: 'Active' },
  { id: 'USR-008', name: 'Meena Iyer', email: 'meena.i@company.com', role: 'Planner', plant: 'Hosur', dept: 'Planning', lastLogin: '23 Mar 09:30', status: 'Active' },
  { id: 'USR-009', name: 'Ganesh Thiagarajan', email: 'ganesh.t@company.com', role: 'Supervisor', plant: 'Coimbatore', dept: 'Maintenance', lastLogin: '23 Mar 13:00', status: 'Active' },
  { id: 'USR-010', name: 'Vijay Prakash', email: 'vijay.p@company.com', role: 'Operator', plant: 'Coimbatore', dept: 'Assembly', lastLogin: '23 Mar 06:05', status: 'Active' },
  { id: 'USR-011', name: 'Lakshmi Devi', email: 'lakshmi.d@company.com', role: 'Quality Inspector', plant: 'Pune', dept: 'Quality', lastLogin: '22 Mar 14:20', status: 'Active' },
  { id: 'USR-012', name: 'Mohan Raj', email: 'mohan.r@company.com', role: 'Store Keeper', plant: 'Ahmedabad', dept: 'Stores', lastLogin: '23 Mar 10:15', status: 'Active' },
  { id: 'USR-013', name: 'Sam Raman', email: 'sundar.r@company.com', role: 'HR Manager', plant: 'All', dept: 'HR', lastLogin: '23 Mar 08:45', status: 'Active' },
  { id: 'USR-014', name: 'Arun Prasad', email: 'arun.p@company.com', role: 'Test Engineer', plant: 'Jamshedpur', dept: 'Testing', lastLogin: '21 Mar 15:30', status: 'Inactive' },
  { id: 'USR-015', name: 'Senthil Mahesh', email: 'senthil.m@company.com', role: 'Plant Head', plant: 'Ahmedabad', dept: 'Operations', lastLogin: '23 Mar 11:00', status: 'Active' },
];

const STATUS_COLOR = { Active: 'green', Inactive: 'gray', Locked: 'red' };
const ROLE_COLOR = { 'Super Admin': 'red', 'Plant Head': 'accent', 'Production Mgr': 'green', 'Quality Mgr': 'green', 'Maintenance Mgr': 'green', Supervisor: 'amber', Planner: 'amber', Operator: 'gray', 'Quality Inspector': 'amber', 'Store Keeper': 'gray', 'HR Manager': 'accent', 'Test Engineer': 'amber' };

export default function UserManagement() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>User Management</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Manage user accounts, roles, and access across all plants</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Total Users" value="148" sub="across all plants" icon="people" />
        <KpiCard label="Active" value="142" sub="currently active" icon="check_circle" iconType="up" />
        <KpiCard label="Inactive" value="6" sub="disabled accounts" icon="person_off" />
        <KpiCard label="Last 24h Logins" value="86" sub="unique users" icon="login" iconType="up" />
      </div>

      <SectionLabel icon="people">Users ({USERS.length})</SectionLabel>
      <DataTable
        headers={['User ID', 'Name', 'Email', 'Role', 'Plant', 'Department', 'Last Login', 'Status']}
        rows={USERS.map(u => [
          { v: u.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: u.name, style: { fontWeight: 600 } },
          { v: u.email, style: { fontSize: '.73rem', color: 'var(--text-dim)' } },
          <Badge label={u.role} color={ROLE_COLOR[u.role] || 'gray'} />,
          u.plant,
          u.dept,
          u.lastLogin,
          <Badge label={u.status} color={STATUS_COLOR[u.status]} />,
        ])}
      />
    </>
  );
}
