import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const WELDERS = [
  { id: 'WQ-001', name: 'M. Kannan', empId: 'EMP-1042', process: 'GTAW', position: '1G, 2G, 3G', material: 'CS / SS', certNo: 'ASME-IX-4481', issueDate: '15 Jun 2025', expiry: '14 Jun 2027', status: 'Valid' },
  { id: 'WQ-002', name: 'R. Selvam', empId: 'EMP-1055', process: 'GMAW', position: '1G, 2G', material: 'CS', certNo: 'ASME-IX-4482', issueDate: '20 Aug 2025', expiry: '19 Aug 2027', status: 'Valid' },
  { id: 'WQ-003', name: 'V. Rajan', empId: 'EMP-1063', process: 'SMAW', position: '1G, 2G, 3G, 4G', material: 'CS / SS / Alloy', certNo: 'ASME-IX-4483', issueDate: '01 Mar 2024', expiry: '28 Feb 2026', status: 'Expiring' },
  { id: 'WQ-004', name: 'K. Devi', empId: 'EMP-1078', process: 'GTAW', position: '1G, 2G', material: 'SS', certNo: 'ASME-IX-4484', issueDate: '10 Jan 2026', expiry: '09 Jan 2028', status: 'Valid' },
  { id: 'WQ-005', name: 'S. Murugan', empId: 'EMP-1091', process: 'SMAW', position: '1G, 2G, 3G', material: 'CS', certNo: 'ASME-IX-4485', issueDate: '05 Nov 2025', expiry: '04 Nov 2027', status: 'Valid' },
  { id: 'WQ-006', name: 'P. Kumar', empId: 'EMP-1104', process: 'FCAW', position: '1G, 2G', material: 'CS', certNo: 'ASME-IX-4486', issueDate: '18 Sep 2024', expiry: '17 Sep 2026', status: 'Valid' },
  { id: 'WQ-007', name: 'A. Babu', empId: 'EMP-1117', process: 'GTAW', position: '1G, 2G, 5G, 6G', material: 'SS / Alloy', certNo: 'ASME-IX-4487', issueDate: '22 Jul 2025', expiry: '21 Jul 2027', status: 'Valid' },
  { id: 'WQ-008', name: 'T. Ganesh', empId: 'EMP-1129', process: 'GMAW', position: '1G, 2G, 3G', material: 'CS / SS', certNo: 'ASME-IX-4488', issueDate: '12 Feb 2024', expiry: '11 Feb 2026', status: 'Expired' },
  { id: 'WQ-009', name: 'N. Senthil', empId: 'EMP-1135', process: 'SAW', position: '1G', material: 'CS', certNo: 'ASME-IX-4489', issueDate: '30 Dec 2025', expiry: '29 Dec 2027', status: 'Valid' },
  { id: 'WQ-010', name: 'D. Vignesh', empId: 'EMP-1148', process: 'SMAW', position: '1G, 2G', material: 'CS', certNo: 'ASME-IX-4490', issueDate: '08 Apr 2025', expiry: '07 Apr 2027', status: 'Valid' },
];

const STATUS_COLOR = { Valid: 'green', Expiring: 'amber', Expired: 'red' };

export default function WelderQualification() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Welder Qualification</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>ASME Section IX welder certifications, processes, and positions qualified</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Qualified Welders" value="42" sub="across all plants" icon="card_membership" />
        <KpiCard label="Expiring (30d)" value="3" sub="renewal needed" icon="event_busy" iconType="dn" change="+1 vs last month" changeType="dn" />
        <KpiCard label="Expired" value="1" sub="cannot weld" icon="cancel" iconType="dn" />
        <KpiCard label="Processes Covered" value="5" sub="GTAW/GMAW/SMAW/FCAW/SAW" icon="local_fire_department" />
      </div>

      <SectionLabel icon="card_membership">Welder Certifications ({WELDERS.length})</SectionLabel>
      <DataTable
        headers={['ID', 'Welder Name', 'Emp #', 'Process', 'Positions', 'Material', 'Cert No', 'Issued', 'Expiry', 'Status']}
        rows={WELDERS.map(w => [
          { v: w.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: w.name, style: { fontWeight: 600 } },
          { v: w.empId, style: { fontFamily: 'var(--m)' } },
          { v: w.process, style: { fontWeight: 600 } },
          { v: w.position, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          w.material,
          { v: w.certNo, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          w.issueDate,
          w.expiry,
          <Badge label={w.status} color={STATUS_COLOR[w.status]} />,
        ])}
      />
    </>
  );
}
