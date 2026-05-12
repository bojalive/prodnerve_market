import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const TOOLS = [
  { machine: 'CNC-A01', pos: 'T01', type: 'Carbide Insert CNMG 120408', life: 82, parts: 164, max: 200, vendor: 'Sandvik', status: 'OK' },
  { machine: 'CNC-A01', pos: 'T03', type: 'HSS Drill 10.2mm', life: 45, parts: 90, max: 200, vendor: 'Dormer', status: 'OK' },
  { machine: 'CNC-A01', pos: 'T07', type: 'Boring Bar S20S-SCLCR09', life: 91, parts: 182, max: 200, vendor: 'Kyocera', status: 'Due' },
  { machine: 'CNC-A02', pos: 'T01', type: 'Carbide Insert WNMG 080408', life: 68, parts: 136, max: 200, vendor: 'Sandvik', status: 'OK' },
  { machine: 'CNC-A02', pos: 'T04', type: 'Thread Mill M10x1.5', life: 55, parts: 110, max: 200, vendor: 'Emuge', status: 'OK' },
  { machine: 'CNC-A02', pos: 'T09', type: 'Face Mill 63mm 5-flute', life: 94, parts: 188, max: 200, vendor: 'Iscar', status: 'Due' },
  { machine: 'CNC-A03', pos: 'T01', type: 'Carbide Insert DNMG 150608', life: 12, parts: 24, max: 200, vendor: 'Mitsubishi', status: 'New' },
  { machine: 'CNC-A03', pos: 'T02', type: 'Centre Drill A2.5', life: 76, parts: 152, max: 200, vendor: 'Dormer', status: 'OK' },
  { machine: 'VMC-B01', pos: 'T01', type: 'End Mill 12mm 4-flute', life: 88, parts: 176, max: 200, vendor: 'Kennametal', status: 'Due' },
  { machine: 'VMC-B01', pos: 'T05', type: 'Ball Nose 6mm R3', life: 34, parts: 68, max: 200, vendor: 'OSG', status: 'OK' },
  { machine: 'VMC-B02', pos: 'T01', type: 'Carbide Insert APMT 1604', life: 62, parts: 124, max: 200, vendor: 'Tungaloy', status: 'OK' },
  { machine: 'VMC-B02', pos: 'T08', type: 'Reamer 18H7', life: 97, parts: 194, max: 200, vendor: 'Guhring', status: 'Due' },
];

const STATUS_COLOR = { OK: 'green', Due: 'amber', New: 'accent', Broken: 'red' };

export default function ToolLifeTracker() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Tool Life Tracker</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Monitor cutting tool usage and remaining life across all CNC machines</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Active Tools" value="486" sub="across all machines" icon="hardware" />
        <KpiCard label="Due for Change" value="18" sub="life > 85%" icon="warning" iconType="dn" change="+4 vs yesterday" changeType="dn" />
        <KpiCard label="Avg Life Used" value="64%" sub="fleet average" icon="data_usage" iconType="up" />
        <KpiCard label="Breakages (MTD)" value="2" sub="unplanned failures" icon="broken_image" iconType="dn" change="-1 vs last month" changeType="up" />
      </div>

      <SectionLabel icon="hardware">Tool Inventory ({TOOLS.length})</SectionLabel>
      <DataTable
        headers={['Machine', 'Position', 'Tool Type', 'Life %', 'Parts Made', 'Max Life', 'Vendor', 'Status']}
        rows={TOOLS.map(t => [
          { v: t.machine, style: { fontWeight: 600, fontFamily: 'var(--m)' } },
          { v: t.pos, style: { fontFamily: 'var(--m)' } },
          t.type,
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 60, height: 6, background: 'var(--border)', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ width: `${t.life}%`, height: '100%', background: t.life > 85 ? 'var(--red)' : t.life > 60 ? 'var(--amber)' : 'var(--green)', borderRadius: 3 }} />
            </div>
            <span style={{ fontFamily: 'var(--m)', fontSize: '.72rem', fontWeight: 600 }}>{t.life}%</span>
          </div>,
          { v: t.parts, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: t.max, style: { fontFamily: 'var(--m)', textAlign: 'right', color: 'var(--text-mute)' } },
          t.vendor,
          <Badge label={t.status} color={STATUS_COLOR[t.status]} />,
        ])}
      />
    </>
  );
}
