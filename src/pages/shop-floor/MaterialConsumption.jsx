import React, { useState } from 'react';
import { MI, KpiCard, SectionLabel, DataTable, FormField, Badge } from '../../components/ui';

const CONSUMPTION = [
  { id: 'MC-7001', wo: 'WO-2526-10001', material: 'EN8 Round Bar 65mm', bomQty: 96, actual: 98, var: '+2.1%', operator: 'Suresh K', date: '23 Mar 2026', status: 'OK' },
  { id: 'MC-7002', wo: 'WO-2526-10003', material: 'CI Casting Body 5HP', bomQty: 120, actual: 120, var: '0.0%', operator: 'Saravanan T', date: '23 Mar 2026', status: 'OK' },
  { id: 'MC-7003', wo: 'WO-2526-10006', material: 'SS304 Rotor Blank', bomQty: 16, actual: 18, var: '+12.5%', operator: 'Karthik V', date: '23 Mar 2026', status: 'High' },
  { id: 'MC-7004', wo: 'WO-2526-10008', material: 'Copper Winding Wire 1.2mm', bomQty: 24, actual: 25, var: '+4.2%', operator: 'Vijay R', date: '23 Mar 2026', status: 'OK' },
  { id: 'MC-7005', wo: 'WO-2526-10004', material: 'Gasket Set GT-C300', bomQty: 16, actual: 16, var: '0.0%', operator: 'Dinesh N', date: '22 Mar 2026', status: 'OK' },
  { id: 'MC-7006', wo: 'WO-2526-10011', material: 'Aluminium Die Cast Cover', bomQty: 36, actual: 38, var: '+5.6%', operator: 'Anand M', date: '22 Mar 2026', status: 'Warn' },
];

const STATUS_COLOR = { OK: 'green', Warn: 'amber', High: 'red' };

export default function MaterialConsumption() {
  const [form, setForm] = useState({ wo: '', material: '', bomQty: '', actual: '', remarks: '' });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Material Consumption</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Track actual vs BOM material usage per work order</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Issues Today" value="24" sub="material transactions" icon="inventory" iconType="up" change="+6 vs yesterday" changeType="up" />
        <KpiCard label="Returns" value="6" sub="excess material returned" icon="assignment_return" iconType="w" />
        <KpiCard label="BOM Variance" value="2.1%" sub="avg qty deviation" icon="difference" iconType="w" change="-0.3% WoW" changeType="up" />
        <KpiCard label="Value Consumed" value="INR 14.8L" sub="today's consumption" icon="currency_rupee" iconType="up" />
      </div>

      <div className="card" style={{ padding: 20, marginBottom: 20 }}>
        <SectionLabel icon="inventory">Log Material Consumption</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
          <FormField label="Work Order">
            <select className="form-select" value={form.wo} onChange={e => set('wo', e.target.value)}>
              <option value="">-- Select --</option>
              <option>WO-2526-10001 (GT-C200)</option>
              <option>WO-2526-10003 (GT-RF400)</option>
              <option>WO-2526-10006 (GT-SF200)</option>
              <option>WO-2526-10008 (GT-DF500)</option>
            </select>
          </FormField>
          <FormField label="Material">
            <input className="form-input" placeholder="Material description" value={form.material} onChange={e => set('material', e.target.value)} />
          </FormField>
          <FormField label="BOM Qty">
            <input className="form-input" type="number" placeholder="0" value={form.bomQty} onChange={e => set('bomQty', e.target.value)} />
          </FormField>
          <FormField label="Actual Qty">
            <input className="form-input" type="number" placeholder="0" value={form.actual} onChange={e => set('actual', e.target.value)} />
          </FormField>
          <FormField label="Remarks">
            <input className="form-input" placeholder="Optional" value={form.remarks} onChange={e => set('remarks', e.target.value)} />
          </FormField>
        </div>
        <div style={{ marginTop: 14 }}>
          <button className="btn btn-primary"><MI size={16}>save</MI> Record Consumption</button>
        </div>
      </div>

      <SectionLabel icon="list_alt">Consumption Log ({CONSUMPTION.length})</SectionLabel>
      <DataTable
        headers={['ID', 'WO #', 'Material', 'BOM Qty', 'Actual Qty', 'Variance', 'Operator', 'Date', 'Status']}
        rows={CONSUMPTION.map(r => [
          { v: r.id, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: r.wo, style: { fontFamily: 'var(--m)' } },
          r.material,
          { v: r.bomQty, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: r.actual, style: { fontFamily: 'var(--m)', textAlign: 'right' } },
          { v: r.var, style: { fontFamily: 'var(--m)', fontWeight: 600, color: r.var === '0.0%' ? 'var(--green)' : 'var(--amber)' } },
          r.operator,
          r.date,
          <Badge label={r.status} color={STATUS_COLOR[r.status]} />,
        ])}
      />
    </>
  );
}
