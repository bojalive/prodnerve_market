import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const CAPA_DATA = [
  { id: 'CAPA-2026-041', source: 'NCR-2026-0087', type: 'Corrective', problem: 'Recurring leak test failures on HC-500 series', rootCause: 'Seal groove depth variation from casting', action: 'Add 100% groove depth measurement at incoming', owner: 'Anand M', due: '30 Mar 2026', plant: 'Coimbatore', status: 'Open' },
  { id: 'CAPA-2026-040', source: 'NCR-2026-0083', type: 'Corrective', problem: 'Weld undercut on PA-880 pressure joints', rootCause: 'Welder using incorrect travel speed', action: 'Re-train welders on WPS-EG55-001; add visual aid', owner: 'Dinesh N', due: '28 Mar 2026', plant: 'Pune', status: 'In Progress' },
  { id: 'CAPA-2026-039', source: 'Audit-2026-Q1', type: 'Preventive', problem: 'Calibration records not always linked to inspection', rootCause: 'Manual record keeping gaps', action: 'Implement gauge ID scan at inspection stations', owner: 'Patricia S', due: '15 Apr 2026', plant: 'Hosur', status: 'Open' },
  { id: 'CAPA-2026-038', source: 'NCR-2026-0078', type: 'Corrective', problem: 'Surface finish rejection rate increase on BR-75', rootCause: 'Grinding wheel dressing interval too long', action: 'Reduce dressing interval from 50 to 30 parts', owner: 'Lauren D', due: '20 Mar 2026', plant: 'Jamshedpur', status: 'Verified' },
  { id: 'CAPA-2026-037', source: 'Customer-RCL', type: 'Corrective', problem: 'Field return: IC-2024 oil carryover above spec', rootCause: 'Separator element incorrect torque', action: 'Add torque verification step in assembly SOP', owner: 'Anand M', due: '18 Mar 2026', plant: 'Coimbatore', status: 'Closed' },
  { id: 'CAPA-2026-036', source: 'NCR-2026-0072', type: 'Preventive', problem: 'Tool breakage events increasing on CNC-A02', rootCause: 'Tool life tracking not automated', action: 'Deploy tool life counter integration with MES', owner: 'Karthik V', due: '31 Mar 2026', plant: 'Coimbatore', status: 'In Progress' },
  { id: 'CAPA-2026-035', source: 'Audit-2025-Q4', type: 'Preventive', problem: 'PM schedule deviation > 10% on grinding machines', rootCause: 'Production priority overriding PM schedule', action: 'Establish PM lockout windows in scheduler', owner: 'Greg T', due: '10 Mar 2026', plant: 'Coimbatore', status: 'Closed' },
  { id: 'CAPA-2026-034', source: 'NCR-2026-0065', type: 'Corrective', problem: 'Thread gauge failure on BR-150 batch', rootCause: 'Worn thread gauge not caught in calibration cycle', action: 'Reduce gauge calibration interval from 6 to 3 months', owner: 'Patricia S', due: '05 Mar 2026', plant: 'Hosur', status: 'Verified' },
];

const STATUS_COLOR = { Open: 'red', 'In Progress': 'amber', Verified: 'accent', Closed: 'green' };
const TYPE_COLOR = { Corrective: 'red', Preventive: 'accent' };

export default function CAPATracker() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>CAPA Tracker</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Corrective and preventive actions -- root cause, actions, verification</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Open CAPAs" value="2" sub="awaiting action" icon="task_alt" iconType="dn" />
        <KpiCard label="In Progress" value="2" sub="actions being implemented" icon="engineering" iconType="w" />
        <KpiCard label="Overdue" value="0" sub="past due date" icon="event_busy" iconType="up" />
        <KpiCard label="Effectiveness" value="88%" sub="verified effective" icon="verified" iconType="up" />
        <KpiCard label="Avg Closure" value="18 days" sub="CAPA cycle time" icon="schedule" change="-4d vs avg" changeType="up" />
      </div>

      <SectionLabel icon="task_alt">CAPA Register ({CAPA_DATA.length})</SectionLabel>
      <DataTable
        headers={['CAPA #', 'Source', 'Type', 'Problem Statement', 'Root Cause', 'Action', 'Owner', 'Due Date', 'Plant', 'Status']}
        rows={CAPA_DATA.map(c => [
          { v: c.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: c.source, style: { fontFamily: 'var(--m)', fontSize: '.73rem' } },
          <Badge label={c.type} color={TYPE_COLOR[c.type]} />,
          { v: c.problem, style: { fontSize: '.74rem' } },
          { v: c.rootCause, style: { fontSize: '.73rem', color: 'var(--text-dim)' } },
          { v: c.action, style: { fontSize: '.73rem' } },
          c.owner,
          c.due,
          c.plant,
          <Badge label={c.status} color={STATUS_COLOR[c.status]} />,
        ])}
      />
    </>
  );
}
