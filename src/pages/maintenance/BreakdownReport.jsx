import React, { useState } from 'react';
import { MI, KpiCard, SectionLabel, DataTable, FormField, Badge } from '../../components/ui';

const BREAKDOWNS = [
  { id: 'BD-8001', machine: 'CNC-A06', area: 'CNC Bay 2', fault: 'Spindle bearing seizure', severity: 'Critical', reportedBy: 'Scott M', reportTime: '23 Mar 08:20', techAssigned: 'Greg T', mttr: '2h 25m', rootCause: 'Bearing end of life', status: 'Closed' },
  { id: 'BD-8002', machine: 'TST-E02', area: 'Testing', fault: 'Hydraulic pump leak', severity: 'Major', reportedBy: 'Steve P', reportTime: '23 Mar 09:10', techAssigned: 'Patrick D', mttr: '--', rootCause: 'Seal degradation', status: 'Open' },
  { id: 'BD-8003', machine: 'PNT-F01', area: 'Paint Shop', fault: 'Spray gun nozzle clog', severity: 'Minor', reportedBy: 'Dan N', reportTime: '23 Mar 13:00', techAssigned: 'Marcus R', mttr: '0h 40m', rootCause: 'Paint viscosity issue', status: 'Closed' },
  { id: 'BD-8004', machine: 'GRD-C04', area: 'Grinding', fault: 'Coolant pump failure', severity: 'Major', reportedBy: 'Karl V', reportTime: '22 Mar 14:30', techAssigned: 'Greg T', mttr: '3h 15m', rootCause: 'Motor winding burn', status: 'Closed' },
  { id: 'BD-8005', machine: 'ASM-D03', area: 'Assembly', fault: 'Conveyor belt slipping', severity: 'Minor', reportedBy: 'Andrew S', reportTime: '22 Mar 10:15', techAssigned: 'Patrick D', mttr: '1h 10m', rootCause: 'Belt tension low', status: 'Closed' },
  { id: 'BD-8006', machine: 'CNC-A02', area: 'CNC Bay 1', fault: 'ATC arm malfunction', severity: 'Major', reportedBy: 'Scott M', reportTime: '21 Mar 16:45', techAssigned: 'Marcus R', mttr: '4h 20m', rootCause: 'Pneumatic cylinder wear', status: 'Closed' },
];

const STATUS_COLOR = { Open: 'red', Closed: 'green', 'In Progress': 'amber' };
const SEVERITY_COLOR = { Critical: 'red', Major: 'amber', Minor: 'gray' };

export default function BreakdownReport() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
        <div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Breakdown Report</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Report and track machine breakdowns with root cause analysis</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <MI size={16}>add</MI>Report Breakdown
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Open Breakdowns" value="1" sub="awaiting repair" icon="report_problem" iconType="dn" />
        <KpiCard label="MTTR" value="2.3 hrs" sub="mean time to repair" icon="schedule" change="-0.5h vs avg" changeType="up" />
        <KpiCard label="MTBF" value="186 hrs" sub="mean time between failures" icon="timeline" iconType="up" />
        <KpiCard label="MTD Breakdowns" value="14" sub="total this month" icon="error" change="-4 vs last month" changeType="up" />
        <KpiCard label="Repeat Failures" value="2" sub="same machine/fault" icon="replay" iconType="dn" />
      </div>

      {showForm && (
        <div className="card" style={{ padding: 20, marginBottom: 20 }}>
          <SectionLabel icon="report_problem">New Breakdown Report</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
            <FormField label="Machine"><select className="form-select"><option value="">-- Select --</option><option>CNC-A01</option><option>CNC-A02</option><option>VMC-B01</option><option>GRD-C01</option><option>TST-E01</option></select></FormField>
            <FormField label="Fault Description"><input className="form-input" placeholder="Describe the fault" /></FormField>
            <FormField label="Severity"><select className="form-select"><option>Minor</option><option>Major</option><option>Critical</option></select></FormField>
            <FormField label="Reported By"><input className="form-input" placeholder="Your name" /></FormField>
          </div>
          <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
            <button className="btn btn-primary">Submit Report</button>
            <button className="btn" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      <SectionLabel icon="list_alt">Breakdown History ({BREAKDOWNS.length})</SectionLabel>
      <DataTable
        headers={['BD #', 'Machine', 'Area', 'Fault', 'Severity', 'Reported By', 'Report Time', 'Technician', 'MTTR', 'Root Cause', 'Status']}
        rows={BREAKDOWNS.map(b => [
          { v: b.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: b.machine, style: { fontFamily: 'var(--m)', fontWeight: 600 } },
          b.area,
          b.fault,
          <Badge label={b.severity} color={SEVERITY_COLOR[b.severity]} />,
          b.reportedBy,
          b.reportTime,
          b.techAssigned,
          { v: b.mttr, style: { fontFamily: 'var(--m)', fontWeight: 600 } },
          b.rootCause,
          <Badge label={b.status} color={STATUS_COLOR[b.status]} />,
        ])}
      />
    </>
  );
}
