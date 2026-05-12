import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const WORK_ORDERS = [
  { id: 'MWO-9001', type: 'Corrective', machine: 'TST-E02', desc: 'Replace hydraulic pump seal', priority: 'Critical', assigned: 'Patrick D', created: '23 Mar 09:15', due: '23 Mar 18:00', estCost: '12,400', status: 'In Progress' },
  { id: 'MWO-9002', type: 'Preventive', machine: 'CNC-A01', desc: 'Quarterly spindle bearing inspection', priority: 'High', assigned: 'Ganesh T', created: '23 Mar 06:00', due: '24 Mar 14:00', estCost: '8,500', status: 'Open' },
  { id: 'MWO-9003', type: 'Corrective', machine: 'CNC-A02', desc: 'Replace ATC pneumatic cylinder', priority: 'High', assigned: 'Marcus R', created: '22 Mar 16:50', due: '23 Mar 12:00', estCost: '18,200', status: 'Completed' },
  { id: 'MWO-9004', type: 'Preventive', machine: 'GRD-C01', desc: 'Annual coolant system overhaul', priority: 'Medium', assigned: 'Ganesh T', created: '22 Mar 08:00', due: '25 Mar 18:00', estCost: '22,600', status: 'Open' },
  { id: 'MWO-9005', type: 'Improvement', machine: 'ASM-D01', desc: 'Install torque monitoring sensor', priority: 'Medium', assigned: 'Patrick D', created: '21 Mar 10:00', due: '28 Mar 18:00', estCost: '45,000', status: 'Open' },
  { id: 'MWO-9006', type: 'Corrective', machine: 'PNT-F01', desc: 'Replace spray gun nozzle assembly', priority: 'Low', assigned: 'Marcus R', created: '23 Mar 13:05', due: '24 Mar 10:00', estCost: '3,200', status: 'Completed' },
  { id: 'MWO-9007', type: 'Preventive', machine: 'VMC-B01', desc: 'Ball screw lubrication and check', priority: 'Medium', assigned: 'Ganesh T', created: '20 Mar 08:00', due: '23 Mar 18:00', estCost: '6,800', status: 'Completed' },
  { id: 'MWO-9008', type: 'Corrective', machine: 'GRD-C04', desc: 'Rewind coolant pump motor', priority: 'High', assigned: 'External Vendor', created: '22 Mar 14:35', due: '26 Mar 12:00', estCost: '15,400', status: 'In Progress' },
  { id: 'MWO-9009', type: 'Preventive', machine: 'CNC-A03', desc: 'Chuck jaw replacement', priority: 'Medium', assigned: 'Patrick D', created: '19 Mar 08:00', due: '22 Mar 18:00', estCost: '9,200', status: 'Completed' },
  { id: 'MWO-9010', type: 'Improvement', machine: 'TST-E01', desc: 'Upgrade data acquisition system', priority: 'Low', assigned: 'Marcus R', created: '18 Mar 10:00', due: '31 Mar 18:00', estCost: '1,25,000', status: 'Open' },
  { id: 'MWO-9011', type: 'Corrective', machine: 'CNC-A06', desc: 'Spindle bearing replacement', priority: 'Critical', assigned: 'Ganesh T', created: '23 Mar 08:25', due: '23 Mar 12:00', estCost: '28,600', status: 'Completed' },
  { id: 'MWO-9012', type: 'Preventive', machine: 'VMC-B02', desc: 'Servo drive parameter backup', priority: 'Low', assigned: 'Patrick D', created: '20 Mar 14:00', due: '24 Mar 18:00', estCost: '0', status: 'Open' },
];

const STATUS_COLOR = { Open: 'accent', 'In Progress': 'amber', Completed: 'green', Overdue: 'red' };
const PRIORITY_COLOR = { Critical: 'red', High: 'amber', Medium: 'accent', Low: 'gray' };
const TYPE_COLOR = { Corrective: 'red', Preventive: 'green', Improvement: 'accent' };

export default function MaintWorkOrder() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Maintenance Work Orders</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Track corrective, preventive, and improvement maintenance work orders</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Open WOs" value="6" sub="awaiting completion" icon="assignment" iconType="w" />
        <KpiCard label="In Progress" value="2" sub="being worked on" icon="engineering" iconType="up" />
        <KpiCard label="Completed (MTD)" value="28" sub="work orders closed" icon="check_circle" iconType="up" change="+4 vs last month" changeType="up" />
        <KpiCard label="Overdue" value="1" sub="past due date" icon="event_busy" iconType="dn" />
        <KpiCard label="Avg Closure" value="2.4 days" sub="from creation to close" icon="schedule" change="-0.6d vs avg" changeType="up" />
      </div>

      <SectionLabel icon="assignment">Work Orders ({WORK_ORDERS.length})</SectionLabel>
      <DataTable
        headers={['WO #', 'Type', 'Machine', 'Description', 'Priority', 'Assigned', 'Created', 'Due', 'Est. Cost (INR)', 'Status']}
        rows={WORK_ORDERS.map(w => [
          { v: w.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          <Badge label={w.type} color={TYPE_COLOR[w.type]} />,
          { v: w.machine, style: { fontFamily: 'var(--m)', fontWeight: 600 } },
          w.desc,
          <Badge label={w.priority} color={PRIORITY_COLOR[w.priority]} />,
          w.assigned,
          w.created,
          w.due,
          { v: w.estCost, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          <Badge label={w.status} color={STATUS_COLOR[w.status]} />,
        ])}
      />
    </>
  );
}
