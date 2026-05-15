import React, { useState } from 'react';
import { MI, KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const STATUS_COLORS = {
  Created: 'accent', Released: 'amber', 'In Progress': 'green', Completed: 'green', Closed: 'gray',
};

const WORK_ORDERS = [
  { wo: 'WO-2526-10001', product: 'GT-C200 Comber', customer: 'Trident Limited', qty: 48, plant: 'Coimbatore', start: '17 Mar 2026', end: '28 Mar 2026', priority: 'High', status: 'In Progress' },
  { wo: 'WO-2526-10002', product: 'GT-LF700 Lap Former', customer: 'Sun Pharma', qty: 24, plant: 'Pune', start: '18 Mar 2026', end: '30 Mar 2026', priority: 'Critical', status: 'Released' },
  { wo: 'WO-2526-10003', product: 'GT-RF400 Ring Frame', customer: 'Kohler Co', qty: 120, plant: 'Jamshedpur', start: '15 Mar 2026', end: '25 Mar 2026', priority: 'Medium', status: 'In Progress' },
  { wo: 'WO-2526-10004', product: 'GT-C300 Comber', customer: 'Larsen & Toubro', qty: 16, plant: 'Hosur', start: '10 Mar 2026', end: '22 Mar 2026', priority: 'High', status: 'Completed' },
  { wo: 'WO-2526-10005', product: 'VSD-200 Controller', customer: 'Internal', qty: 200, plant: 'Ahmedabad', start: '20 Mar 2026', end: '05 Apr 2026', priority: 'Low', status: 'Created' },
  { wo: 'WO-2526-10006', product: 'GT-SF200 Speed Frame', customer: 'Vardhman Textiles', qty: 8, plant: 'Coimbatore', start: '12 Mar 2026', end: '20 Mar 2026', priority: 'Critical', status: 'In Progress' },
  { wo: 'WO-2526-10007', product: 'GT-RF450 Ring Frame', customer: 'Arvind Mills', qty: 80, plant: 'Hosur', start: '14 Mar 2026', end: '24 Mar 2026', priority: 'Medium', status: 'Released' },
  { wo: 'WO-2526-10008', product: 'GT-DF500 Draw Frame', customer: 'Honeywell Inc', qty: 12, plant: 'Pune', start: '16 Mar 2026', end: '28 Mar 2026', priority: 'High', status: 'In Progress' },
  { wo: 'WO-2526-10009', product: 'VSD-100 Controller', customer: 'Internal', qty: 350, plant: 'Ahmedabad', start: '19 Mar 2026', end: '02 Apr 2026', priority: 'Medium', status: 'Created' },
  { wo: 'WO-2526-10010', product: 'GT-OE300 Open-End Spinner', customer: 'Bharat Forge', qty: 60, plant: 'Jamshedpur', start: '11 Mar 2026', end: '21 Mar 2026', priority: 'High', status: 'Closed' },
  { wo: 'WO-2526-10011', product: 'GT-LF600 Lap Former', customer: 'Cipla Ltd', qty: 36, plant: 'Coimbatore', start: '13 Mar 2026', end: '26 Mar 2026', priority: 'Medium', status: 'In Progress' },
  { wo: 'WO-2526-10012', product: 'GT-C100 Comber', customer: 'Alok Industries & Alok Industries', qty: 64, plant: 'Hosur', start: '21 Mar 2026', end: '04 Apr 2026', priority: 'Low', status: 'Created' },
];

export default function WorkOrderList({ navigate }) {
  const [filter, setFilter] = useState('All');
  const statuses = ['All', 'Created', 'Released', 'In Progress', 'Completed', 'Closed'];
  const filtered = filter === 'All' ? WORK_ORDERS : WORK_ORDERS.filter(w => w.status === filter);

  const priorityStyle = (p) => {
    if (p === 'Critical') return { color: 'var(--red)', fontWeight: 700 };
    if (p === 'High') return { color: 'var(--red)', fontWeight: 600 };
    if (p === 'Medium') return { color: 'var(--text)' };
    return { color: 'var(--text-mute)' };
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
        <div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Production Orders</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>All plants -- Coimbatore, Hosur, Pune, Ahmedabad, Jamshedpur</p>
        </div>
        <button className="btn btn-primary" onClick={() => navigate && navigate('production-orders', 'create')} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <MI size={16}>add</MI>New Work Order
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Total Active WOs" value="84" sub="across 5 plants" icon="assignment" iconType="up" />
        <KpiCard label="This Week Target" value="4,200" sub="units planned" icon="target" />
        <KpiCard label="Completion Rate" value="88%" sub="on-time completion" change="+2.1% WoW" changeType="up" icon="check_circle" />
        <KpiCard label="Past Due" value="12" sub="orders behind schedule" change="+3 vs last week" changeType="dn" icon="event_busy" />
      </div>

      {/* Status filter pills */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
        {statuses.map(s => (
          <button key={s} onClick={() => setFilter(s)} style={{
            padding: '5px 14px', fontSize: '.72rem', fontWeight: 600, borderRadius: 20,
            border: '1px solid ' + (filter === s ? 'var(--accent)' : 'var(--border)'),
            background: filter === s ? 'var(--accent10)' : 'transparent',
            color: filter === s ? 'var(--accent)' : 'var(--text-dim)',
            cursor: 'pointer', transition: 'all .15s',
          }}>{s}</button>
        ))}
      </div>

      <SectionLabel icon="list_alt">Work Orders ({filtered.length})</SectionLabel>
      <DataTable
        headers={['WO #', 'Product', 'Customer', 'Qty', 'Plant', 'Planned Start', 'Planned End', 'Priority', 'Status']}
        rows={filtered.map(w => [
          { v: w.wo, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)', cursor: 'pointer' } },
          w.product,
          w.customer,
          { v: w.qty.toLocaleString(), style: { fontFamily: 'var(--m)' } },
          w.plant,
          w.start,
          w.end,
          { v: w.priority, style: priorityStyle(w.priority) },
          <Badge label={w.status} color={STATUS_COLORS[w.status]} />,
        ])}
      />
    </>
  );
}
