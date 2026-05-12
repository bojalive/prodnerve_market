import React from 'react';
import { KpiCard, SectionLabel, DataTable } from '../../components/ui';

const REASON_CODES = [
  { l1: 'Equipment', l2: 'Spindle', l3: 'Bearing failure', code: 'EQ-SP-01', module: 'Downtime', active: true },
  { l1: 'Equipment', l2: 'Spindle', l3: 'Motor overheat', code: 'EQ-SP-02', module: 'Downtime', active: true },
  { l1: 'Equipment', l2: 'Spindle', l3: 'Run-out excess', code: 'EQ-SP-03', module: 'Downtime', active: true },
  { l1: 'Equipment', l2: 'Hydraulic', l3: 'Pump failure', code: 'EQ-HY-01', module: 'Downtime', active: true },
  { l1: 'Equipment', l2: 'Hydraulic', l3: 'Seal leak', code: 'EQ-HY-02', module: 'Downtime', active: true },
  { l1: 'Equipment', l2: 'Hydraulic', l3: 'Oil contamination', code: 'EQ-HY-03', module: 'Downtime', active: true },
  { l1: 'Equipment', l2: 'Electrical', l3: 'PLC fault', code: 'EQ-EL-01', module: 'Downtime', active: true },
  { l1: 'Equipment', l2: 'Electrical', l3: 'Servo drive error', code: 'EQ-EL-02', module: 'Downtime', active: true },
  { l1: 'Equipment', l2: 'Electrical', l3: 'Sensor malfunction', code: 'EQ-EL-03', module: 'Downtime', active: true },
  { l1: 'Changeover', l2: 'Tool', l3: 'New program setup', code: 'CO-TL-01', module: 'Downtime', active: true },
  { l1: 'Changeover', l2: 'Tool', l3: 'Tool replacement', code: 'CO-TL-02', module: 'Downtime', active: true },
  { l1: 'Changeover', l2: 'Fixture', l3: 'Fixture change', code: 'CO-FX-01', module: 'Downtime', active: true },
  { l1: 'Changeover', l2: 'Fixture', l3: 'Fixture alignment', code: 'CO-FX-02', module: 'Downtime', active: true },
  { l1: 'Material', l2: 'Shortage', l3: 'Raw material unavailable', code: 'MT-SH-01', module: 'Downtime', active: true },
  { l1: 'Material', l2: 'Shortage', l3: 'WIP not received', code: 'MT-SH-02', module: 'Downtime', active: true },
  { l1: 'Material', l2: 'Quality', l3: 'Incoming material reject', code: 'MT-QL-01', module: 'Downtime', active: true },
  { l1: 'Quality', l2: 'Inspection', l3: 'First article inspection', code: 'QL-IN-01', module: 'Downtime', active: true },
  { l1: 'Quality', l2: 'Inspection', l3: 'Patrol inspection hold', code: 'QL-IN-02', module: 'Downtime', active: true },
  { l1: 'Quality', l2: 'Defect', l3: 'Dimensional out of spec', code: 'QL-DF-01', module: 'Rejection', active: true },
  { l1: 'Quality', l2: 'Defect', l3: 'Surface finish defect', code: 'QL-DF-02', module: 'Rejection', active: true },
  { l1: 'Quality', l2: 'Defect', l3: 'Visual / cosmetic defect', code: 'QL-DF-03', module: 'Rejection', active: true },
  { l1: 'Quality', l2: 'Defect', l3: 'Functional failure', code: 'QL-DF-04', module: 'Rejection', active: true },
  { l1: 'No Order', l2: 'Planning', l3: 'Awaiting WO release', code: 'NO-PL-01', module: 'Downtime', active: true },
  { l1: 'No Order', l2: 'Planning', l3: 'Schedule gap', code: 'NO-PL-02', module: 'Downtime', active: true },
  { l1: 'Manpower', l2: 'Absence', l3: 'Operator absent', code: 'MP-AB-01', module: 'Downtime', active: true },
  { l1: 'Manpower', l2: 'Absence', l3: 'No relief available', code: 'MP-AB-02', module: 'Downtime', active: true },
  { l1: 'Manpower', l2: 'Training', l3: 'Training / induction', code: 'MP-TR-01', module: 'Downtime', active: true },
  { l1: 'Safety', l2: 'Incident', l3: 'Accident / injury', code: 'SF-IN-01', module: 'Safety', active: true },
  { l1: 'Safety', l2: 'Incident', l3: 'Near miss', code: 'SF-IN-02', module: 'Safety', active: true },
  { l1: 'Safety', l2: 'Hazard', l3: 'Unsafe condition', code: 'SF-HZ-01', module: 'Safety', active: true },
];

export default function ReasonCodes() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Reason Codes</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>3-level hierarchical reason code library for downtime, rejection, and safety events</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Total Codes" value={String(REASON_CODES.length)} sub="reason codes defined" icon="account_tree" />
        <KpiCard label="Level 1 Categories" value="7" sub="top-level categories" icon="folder" />
        <KpiCard label="Level 2 Sub-cats" value="16" sub="sub-categories" icon="folder_open" />
        <KpiCard label="Modules Using" value="3" sub="Downtime, Rejection, Safety" icon="apps" />
      </div>

      <SectionLabel icon="account_tree">Reason Code Hierarchy ({REASON_CODES.length})</SectionLabel>
      <DataTable
        headers={['Code', 'Level 1 (Category)', 'Level 2 (Sub-category)', 'Level 3 (Detail)', 'Module', 'Active']}
        rows={REASON_CODES.map((r, i) => {
          const prevL1 = i > 0 ? REASON_CODES[i - 1].l1 : '';
          const prevL2 = i > 0 ? REASON_CODES[i - 1].l2 : '';
          return [
            { v: r.code, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
            { v: r.l1 !== prevL1 ? r.l1 : '', style: { fontWeight: r.l1 !== prevL1 ? 700 : 400, color: r.l1 !== prevL1 ? 'var(--text)' : 'transparent' } },
            { v: (r.l1 !== prevL1 || r.l2 !== prevL2) ? r.l2 : '', style: { fontWeight: (r.l1 !== prevL1 || r.l2 !== prevL2) ? 600 : 400, paddingLeft: 8, color: (r.l1 !== prevL1 || r.l2 !== prevL2) ? 'var(--text-dim)' : 'transparent' } },
            { v: r.l3, style: { paddingLeft: 16, fontSize: '.76rem' } },
            { v: r.module, style: { fontSize: '.73rem' } },
            { v: r.active ? 'Yes' : 'No', style: { color: r.active ? 'var(--green)' : 'var(--text-mute)', fontWeight: 600 } },
          ];
        })}
      />
    </>
  );
}
