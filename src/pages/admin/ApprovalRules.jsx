import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const RULES = [
  { id: 'AR-001', module: 'Production Orders', action: 'Work Order Release', condition: 'All WOs', level1: 'Supervisor', level2: 'Production Mgr', level3: '--', sla: '4 hrs', escalation: 'Plant Head', status: 'Active' },
  { id: 'AR-002', module: 'Quality', action: 'NCR Disposition', condition: 'All NCRs', level1: 'Quality Inspector', level2: 'Quality Mgr', level3: '--', sla: '8 hrs', escalation: 'Plant Head', status: 'Active' },
  { id: 'AR-003', module: 'Quality', action: 'CAPA Closure', condition: 'All CAPAs', level1: 'Quality Mgr', level2: 'Plant Head', level3: '--', sla: '24 hrs', escalation: 'VP Quality', status: 'Active' },
  { id: 'AR-004', module: 'Maintenance', action: 'Spare Request > INR 25K', condition: 'Cost > 25,000', level1: 'Maint Mgr', level2: 'Plant Head', level3: 'Finance', sla: '12 hrs', escalation: 'VP Operations', status: 'Active' },
  { id: 'AR-005', module: 'Maintenance', action: 'Spare Request <= INR 25K', condition: 'Cost <= 25,000', level1: 'Maint Mgr', level2: '--', level3: '--', sla: '4 hrs', escalation: 'Plant Head', status: 'Active' },
  { id: 'AR-006', module: 'Material', action: 'Material Issue (Excess)', condition: 'Qty > BOM + 10%', level1: 'Supervisor', level2: 'Production Mgr', level3: '--', sla: '2 hrs', escalation: 'Plant Head', status: 'Active' },
  { id: 'AR-007', module: 'Shift Mgmt', action: 'Overtime Approval', condition: '> 2 hrs OT', level1: 'Supervisor', level2: 'Production Mgr', level3: '--', sla: '4 hrs', escalation: 'HR Manager', status: 'Active' },
  { id: 'AR-008', module: 'Production Orders', action: 'Order Dispatch', condition: 'All dispatches', level1: 'QC Sign-off', level2: 'Production Mgr', level3: 'Logistics', sla: '8 hrs', escalation: 'Plant Head', status: 'Active' },
  { id: 'AR-009', module: 'Welding', action: 'NDT Reject Re-Weld', condition: 'NDT failure', level1: 'Welding Lead', level2: 'Quality Mgr', level3: '--', sla: '4 hrs', escalation: 'Plant Head', status: 'Active' },
  { id: 'AR-010', module: 'Testing', action: 'Test Certificate Issue', condition: 'All certificates', level1: 'Test Engineer', level2: 'Quality Mgr', level3: '--', sla: '12 hrs', escalation: 'Plant Head', status: 'Active' },
];

export default function ApprovalRules() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Approval Rules</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Configure multi-level approval workflows, SLAs, and escalation paths</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Active Rules" value="10" sub="approval workflows" icon="rule" />
        <KpiCard label="Modules Covered" value="6" sub="with approval gates" icon="apps" />
        <KpiCard label="Avg SLA" value="7.6 hrs" sub="approval turnaround" icon="schedule" />
        <KpiCard label="Pending Approvals" value="8" sub="across all modules" icon="pending_actions" iconType="w" />
      </div>

      <SectionLabel icon="rule">Approval Rules ({RULES.length})</SectionLabel>
      <DataTable
        headers={['Rule ID', 'Module', 'Action', 'Condition', 'Level 1', 'Level 2', 'Level 3', 'SLA', 'Escalation', 'Status']}
        rows={RULES.map(r => [
          { v: r.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: r.module, style: { fontWeight: 600 } },
          r.action,
          { v: r.condition, style: { fontSize: '.73rem', color: 'var(--text-dim)' } },
          r.level1,
          { v: r.level2, style: { color: r.level2 === '--' ? 'var(--text-mute)' : 'var(--text)' } },
          { v: r.level3, style: { color: r.level3 === '--' ? 'var(--text-mute)' : 'var(--text)' } },
          { v: r.sla, style: { fontFamily: 'var(--m)', fontWeight: 600 } },
          r.escalation,
          <Badge label={r.status} color="green" />,
        ])}
      />
    </>
  );
}
