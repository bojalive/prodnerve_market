import React from 'react';
import { MI, KpiCard, SectionLabel, StatusDot } from '../../components/ui';

const MACHINES = [
  { id: 'CNC-A01', name: 'Mori Seiki NL-2500', area: 'CNC Bay 1', status: 'Running', wo: 'WO-2526-10001', product: 'EG-22', progress: 82 },
  { id: 'CNC-A02', name: 'Mazak QTN-200', area: 'CNC Bay 1', status: 'Running', wo: 'WO-2526-10003', product: 'TS-5', progress: 64 },
  { id: 'CNC-A03', name: 'Haas ST-30', area: 'CNC Bay 1', status: 'Running', wo: 'WO-2526-10008', product: 'EG-55', progress: 41 },
  { id: 'CNC-A04', name: 'Doosan Lynx 220', area: 'CNC Bay 2', status: 'Setup', wo: 'WO-2526-10012', product: 'EG-15', progress: 0 },
  { id: 'CNC-A05', name: 'DMG MORI CLX 350', area: 'CNC Bay 2', status: 'Running', wo: 'WO-2526-10007', product: 'TS-10', progress: 55 },
  { id: 'CNC-A06', name: 'Okuma LB3000', area: 'CNC Bay 2', status: 'Down', wo: '--', product: '--', progress: 0 },
  { id: 'VMC-B01', name: 'Mazak VCN-530C', area: 'VMC Bay', status: 'Running', wo: 'WO-2526-10004', product: 'EG-37', progress: 91 },
  { id: 'VMC-B02', name: 'BFW BMV-45', area: 'VMC Bay', status: 'Running', wo: 'WO-2526-10006', product: 'AB-30', progress: 73 },
  { id: 'VMC-B03', name: 'Makino a51nx', area: 'VMC Bay', status: 'Idle', wo: '--', product: '--', progress: 0 },
  { id: 'VMC-B04', name: 'Haas VF-3', area: 'VMC Bay', status: 'Running', wo: 'WO-2526-10011', product: 'AB-7', progress: 28 },
  { id: 'GRD-C01', name: 'Studer S33', area: 'Grinding', status: 'Running', wo: 'WO-2526-10001', product: 'EG-22', progress: 60 },
  { id: 'GRD-C02', name: 'Jones & Shipman', area: 'Grinding', status: 'Running', wo: 'WO-2526-10003', product: 'TS-5', progress: 45 },
  { id: 'GRD-C03', name: 'Toyoda GE4i', area: 'Grinding', status: 'Setup', wo: 'WO-2526-10008', product: 'EG-55', progress: 0 },
  { id: 'GRD-C04', name: 'Micromatic GCU-250', area: 'Grinding', status: 'Idle', wo: '--', product: '--', progress: 0 },
  { id: 'ASM-D01', name: 'Assembly Station 1', area: 'Assembly', status: 'Running', wo: 'WO-2526-10004', product: 'EG-37', progress: 78 },
  { id: 'ASM-D02', name: 'Assembly Station 2', area: 'Assembly', status: 'Running', wo: 'WO-2526-10006', product: 'AB-30', progress: 56 },
  { id: 'ASM-D03', name: 'Assembly Station 3', area: 'Assembly', status: 'Idle', wo: '--', product: '--', progress: 0 },
  { id: 'TST-E01', name: 'Test Bench 1', area: 'Testing', status: 'Running', wo: 'WO-2526-10004', product: 'EG-37', progress: 34 },
  { id: 'TST-E02', name: 'Test Bench 2', area: 'Testing', status: 'Down', wo: '--', product: '--', progress: 0 },
  { id: 'PNT-F01', name: 'Paint Booth A', area: 'Paint Shop', status: 'Running', wo: 'WO-2526-10007', product: 'TS-10', progress: 68 },
];

const STATUS_CONFIG = {
  Running: { color: 'var(--green)', bg: 'var(--green10, rgba(5,150,105,.08))', icon: 'play_circle' },
  Down:    { color: 'var(--red)', bg: 'var(--red10, rgba(220,38,38,.08))', icon: 'error' },
  Idle:    { color: 'var(--text-mute)', bg: 'var(--bg-alt, rgba(100,100,100,.06))', icon: 'pause_circle' },
  Setup:   { color: 'var(--amber)', bg: 'var(--amber10, rgba(245,158,11,.08))', icon: 'build' },
};

export default function MachineStatusBoard() {
  const counts = { Running: 0, Down: 0, Idle: 0, Setup: 0 };
  MACHINES.forEach(m => counts[m.status]++);

  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Machine Status Board</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Real-time status of all production equipment -- Coimbatore Plant</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Running" value={String(counts.Running)} sub="machines producing" icon="play_circle" iconType="up" />
        <KpiCard label="Down" value={String(counts.Down)} sub="breakdown / repair" icon="error" iconType="dn" />
        <KpiCard label="Idle" value={String(counts.Idle)} sub="no job assigned" icon="pause_circle" iconType="w" />
        <KpiCard label="Setup" value={String(counts.Setup)} sub="changeover in progress" icon="build" iconType="w" />
      </div>

      <SectionLabel icon="grid_view">All Machines ({MACHINES.length})</SectionLabel>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
        {MACHINES.map(m => {
          const cfg = STATUS_CONFIG[m.status];
          return (
            <div key={m.id} className="card" style={{
              padding: 14, borderLeft: `3px solid ${cfg.color}`,
              background: cfg.bg, transition: 'box-shadow .15s',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <span style={{ fontWeight: 700, fontFamily: 'var(--m)', fontSize: '.8rem' }}>{m.id}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '.68rem', fontWeight: 600, color: cfg.color }}>
                  <MI size={14}>{cfg.icon}</MI>{m.status}
                </span>
              </div>
              <div style={{ fontSize: '.72rem', color: 'var(--text-dim)', marginBottom: 4 }}>{m.name}</div>
              <div style={{ fontSize: '.68rem', color: 'var(--text-mute)', marginBottom: 6 }}>{m.area}</div>
              {m.status === 'Running' && (
                <>
                  <div style={{ fontSize: '.68rem', color: 'var(--text-dim)', marginBottom: 4 }}>
                    <strong>{m.wo}</strong> -- {m.product}
                  </div>
                  <div style={{ background: 'var(--border)', borderRadius: 4, height: 6, overflow: 'hidden' }}>
                    <div style={{ width: `${m.progress}%`, height: '100%', background: cfg.color, borderRadius: 4, transition: 'width .3s' }} />
                  </div>
                  <div style={{ fontSize: '.62rem', color: 'var(--text-mute)', marginTop: 2, textAlign: 'right' }}>{m.progress}%</div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
