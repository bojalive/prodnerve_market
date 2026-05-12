import React from 'react';
import { MI, KpiCard, SectionLabel } from '../../components/ui';

const EQUIPMENT = [
  { id: 'CNC-A01', name: 'Mori Seiki NL-2500', area: 'CNC Bay 1', lastPM: '20 Mar', nextPM: '27 Mar', health: 92, status: 'Operational' },
  { id: 'CNC-A02', name: 'Mazak QTN-200', area: 'CNC Bay 1', lastPM: '18 Mar', nextPM: '25 Mar', health: 88, status: 'Operational' },
  { id: 'CNC-A03', name: 'Haas ST-30', area: 'CNC Bay 1', lastPM: '19 Mar', nextPM: '26 Mar', health: 94, status: 'Operational' },
  { id: 'CNC-A04', name: 'Doosan Lynx 220', area: 'CNC Bay 2', lastPM: '21 Mar', nextPM: '28 Mar', health: 86, status: 'Operational' },
  { id: 'CNC-A05', name: 'DMG MORI CLX 350', area: 'CNC Bay 2', lastPM: '17 Mar', nextPM: '24 Mar', health: 90, status: 'Operational' },
  { id: 'CNC-A06', name: 'Okuma LB3000', area: 'CNC Bay 2', lastPM: '15 Mar', nextPM: '22 Mar', health: 45, status: 'Under Repair' },
  { id: 'VMC-B01', name: 'Mazak VCN-530C', area: 'VMC Bay', lastPM: '20 Mar', nextPM: '27 Mar', health: 91, status: 'Operational' },
  { id: 'VMC-B02', name: 'BFW BMV-45', area: 'VMC Bay', lastPM: '18 Mar', nextPM: '25 Mar', health: 84, status: 'Operational' },
  { id: 'VMC-B03', name: 'Makino a51nx', area: 'VMC Bay', lastPM: '16 Mar', nextPM: '23 Mar', health: 78, status: 'PM Due' },
  { id: 'VMC-B04', name: 'Haas VF-3', area: 'VMC Bay', lastPM: '19 Mar', nextPM: '26 Mar', health: 87, status: 'Operational' },
  { id: 'GRD-C01', name: 'Studer S33', area: 'Grinding', lastPM: '22 Mar', nextPM: '29 Mar', health: 95, status: 'Operational' },
  { id: 'GRD-C02', name: 'Jones & Shipman', area: 'Grinding', lastPM: '20 Mar', nextPM: '27 Mar', health: 82, status: 'Operational' },
  { id: 'GRD-C03', name: 'Toyoda GE4i', area: 'Grinding', lastPM: '21 Mar', nextPM: '28 Mar', health: 89, status: 'Operational' },
  { id: 'GRD-C04', name: 'Micromatic GCU-250', area: 'Grinding', lastPM: '14 Mar', nextPM: '21 Mar', health: 35, status: 'Under Repair' },
  { id: 'ASM-D01', name: 'Assembly Station 1', area: 'Assembly', lastPM: '22 Mar', nextPM: '29 Mar', health: 96, status: 'Operational' },
  { id: 'ASM-D02', name: 'Assembly Station 2', area: 'Assembly', lastPM: '22 Mar', nextPM: '29 Mar', health: 93, status: 'Operational' },
  { id: 'ASM-D03', name: 'Assembly Station 3', area: 'Assembly', lastPM: '20 Mar', nextPM: '27 Mar', health: 80, status: 'Operational' },
  { id: 'TST-E01', name: 'Test Bench 1', area: 'Testing', lastPM: '21 Mar', nextPM: '28 Mar', health: 91, status: 'Operational' },
  { id: 'TST-E02', name: 'Test Bench 2', area: 'Testing', lastPM: '18 Mar', nextPM: '25 Mar', health: 30, status: 'Under Repair' },
  { id: 'PNT-F01', name: 'Paint Booth A', area: 'Paint Shop', lastPM: '22 Mar', nextPM: '29 Mar', health: 88, status: 'Operational' },
];

const STATUS_CFG = {
  Operational: { color: 'var(--green)', bg: 'var(--green10, rgba(5,150,105,.08))', icon: 'check_circle' },
  'Under Repair': { color: 'var(--red)', bg: 'var(--red10, rgba(220,38,38,.08))', icon: 'build' },
  'PM Due': { color: 'var(--amber)', bg: 'var(--amber10, rgba(245,158,11,.08))', icon: 'event_busy' },
};

export default function EquipmentBoard() {
  const operational = EQUIPMENT.filter(e => e.status === 'Operational').length;
  const repair = EQUIPMENT.filter(e => e.status === 'Under Repair').length;

  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Equipment Board</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Equipment health dashboard with PM status and maintenance indicators</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Operational" value={String(operational)} sub="machines running" icon="check_circle" iconType="up" />
        <KpiCard label="Under Repair" value={String(repair)} sub="breakdown/maintenance" icon="build" iconType="dn" />
        <KpiCard label="PM Due" value="1" sub="overdue for PM" icon="event_busy" iconType="dn" />
        <KpiCard label="Avg Health" value="81%" sub="fleet health score" icon="monitor_heart" iconType="up" />
      </div>

      <SectionLabel icon="dashboard">Equipment Status ({EQUIPMENT.length})</SectionLabel>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
        {EQUIPMENT.map(e => {
          const cfg = STATUS_CFG[e.status] || STATUS_CFG.Operational;
          const healthColor = e.health >= 80 ? 'var(--green)' : e.health >= 60 ? 'var(--amber)' : 'var(--red)';
          return (
            <div key={e.id} className="card" style={{ padding: 14, borderLeft: `3px solid ${cfg.color}`, background: cfg.bg }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <span style={{ fontWeight: 700, fontFamily: 'var(--m)', fontSize: '.8rem' }}>{e.id}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '.68rem', fontWeight: 600, color: cfg.color }}>
                  <MI size={14}>{cfg.icon}</MI>{e.status}
                </span>
              </div>
              <div style={{ fontSize: '.72rem', color: 'var(--text-dim)', marginBottom: 2 }}>{e.name}</div>
              <div style={{ fontSize: '.68rem', color: 'var(--text-mute)', marginBottom: 8 }}>{e.area}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.66rem', color: 'var(--text-mute)', marginBottom: 4 }}>
                <span>Last PM: {e.lastPM}</span>
                <span>Next: {e.nextPM}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ flex: 1, height: 6, background: 'var(--border)', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ width: `${e.health}%`, height: '100%', background: healthColor, borderRadius: 3 }} />
                </div>
                <span style={{ fontFamily: 'var(--m)', fontSize: '.68rem', fontWeight: 600, color: healthColor }}>{e.health}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
