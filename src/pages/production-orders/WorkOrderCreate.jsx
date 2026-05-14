import React, { useState } from 'react';
import { MI, FormField, SectionLabel } from '../../components/ui';

const PRODUCTS = [
  'PA-225 Hub Assembly', 'PA-450 Hub Assembly', 'PA-625 Hub Assembly', 'PA-880 Hub Assembly',
  'HC-100 Hydraulic Cyl Body', 'HC-250 Hydraulic Cyl Body', 'HC-500 Hydraulic Cyl Body',
  'BR-75 Aerospace Bracket', 'BR-150 Aerospace Bracket', 'BR-300 Aerospace Bracket',
  'VSD-100 Controller', 'VSD-200 Controller',
];
const PLANTS = ['Coimbatore', 'Hosur', 'Pune', 'Ahmedabad', 'Jamshedpur'];
const ROUTINGS = ['RT-CNC-STD (CNC Mill Standard)', 'RT-CNC-HVY (CNC Mill Heavy Duty)', 'RT-TRN-STD (CNC Turning Standard)', 'RT-GRD-STD (Grinding Standard)', 'RT-FIN-INS (Finishing & Inspection)'];
const UOMS = ['Nos', 'Sets', 'Kits'];
const PRIORITIES = ['Low', 'Medium', 'High', 'Critical'];

export default function WorkOrderCreate({ navigate }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    product: '', qty: '', uom: 'Nos', orderType: 'Customer',
    customer: '', plant: '', routing: '', startDate: '', endDate: '',
    priority: 'Medium',
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const stepIndicator = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 24 }}>
      {[1, 2, 3].map((s, i) => (
        <React.Fragment key={s}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '.75rem', fontWeight: 700,
            background: step >= s ? 'var(--accent)' : 'var(--surface2)',
            color: step >= s ? '#fff' : 'var(--text-mute)',
            transition: 'all .2s',
          }}>{s}</div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
            <span style={{ fontSize: '.68rem', fontWeight: 600, color: step >= s ? 'var(--text)' : 'var(--text-mute)' }}>
              {s === 1 ? 'Product Info' : s === 2 ? 'Planning' : 'Review'}
            </span>
          </div>
          {i < 2 && <div style={{ width: 40, height: 2, background: step > s ? 'var(--accent)' : 'var(--border)', margin: '0 8px', transition: 'background .2s' }} />}
        </React.Fragment>
      ))}
    </div>
  );

  const step1 = (
    <>
      <SectionLabel icon="inventory_2">Product Selection</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <FormField label="Product">
          <select className="form-select" value={form.product} onChange={e => set('product', e.target.value)}>
            <option value="">Select product...</option>
            {PRODUCTS.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </FormField>
        <FormField label="Order Quantity">
          <input className="form-input" type="number" placeholder="Enter quantity" value={form.qty} onChange={e => set('qty', e.target.value)} />
        </FormField>
        <FormField label="Unit of Measure">
          <select className="form-select" value={form.uom} onChange={e => set('uom', e.target.value)}>
            {UOMS.map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </FormField>
        <FormField label="Order Type">
          <select className="form-select" value={form.orderType} onChange={e => set('orderType', e.target.value)}>
            <option value="Customer">Customer Order</option>
            <option value="Internal">Internal / Stock</option>
          </select>
        </FormField>
        {form.orderType === 'Customer' && (
          <FormField label="Customer Name">
            <input className="form-input" placeholder="Enter customer name" value={form.customer} onChange={e => set('customer', e.target.value)} />
          </FormField>
        )}
      </div>
    </>
  );

  const step2 = (
    <>
      <SectionLabel icon="factory">Planning Details</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <FormField label="Plant">
          <select className="form-select" value={form.plant} onChange={e => set('plant', e.target.value)}>
            <option value="">Select plant...</option>
            {PLANTS.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </FormField>
        <FormField label="Routing">
          <select className="form-select" value={form.routing} onChange={e => set('routing', e.target.value)}>
            <option value="">Select routing...</option>
            {ROUTINGS.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </FormField>
        <FormField label="Planned Start Date">
          <input className="form-input" type="date" value={form.startDate} onChange={e => set('startDate', e.target.value)} />
        </FormField>
        <FormField label="Planned End Date">
          <input className="form-input" type="date" value={form.endDate} onChange={e => set('endDate', e.target.value)} />
        </FormField>
        <FormField label="Priority">
          <select className="form-select" value={form.priority} onChange={e => set('priority', e.target.value)}>
            {PRIORITIES.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </FormField>
      </div>
    </>
  );

  const step3 = (
    <>
      <SectionLabel icon="fact_check">Review & Submit</SectionLabel>
      <div className="card" style={{ padding: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {[
            ['Product', form.product || '--'],
            ['Quantity', form.qty ? `${form.qty} ${form.uom}` : '--'],
            ['Order Type', form.orderType],
            ['Customer', form.orderType === 'Customer' ? (form.customer || '--') : 'N/A (Internal)'],
            ['Plant', form.plant || '--'],
            ['Routing', form.routing || '--'],
            ['Planned Start', form.startDate || '--'],
            ['Planned End', form.endDate || '--'],
            ['Priority', form.priority],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontSize: '.66rem', fontWeight: 600, color: 'var(--text-mute)', textTransform: 'uppercase', letterSpacing: .5 }}>{k}</span>
              <span style={{ fontSize: '.84rem', fontWeight: 600 }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
        <div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Create Work Order</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>New production order -- Step {step} of 3</p>
        </div>
        <button className="btn btn-secondary" onClick={() => navigate && navigate('production-orders', 'list')} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <MI size={16}>arrow_back</MI>Back to List
        </button>
      </div>

      <div className="card" style={{ padding: 24 }}>
        {stepIndicator}
        {step === 1 && step1}
        {step === 2 && step2}
        {step === 3 && step3}

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
          <button className="btn btn-secondary" disabled={step === 1} onClick={() => setStep(s => s - 1)} style={{ opacity: step === 1 ? .4 : 1 }}>
            <MI size={16}>chevron_left</MI>Previous
          </button>
          {step < 3 ? (
            <button className="btn btn-primary" onClick={() => setStep(s => s + 1)}>
              Next<MI size={16}>chevron_right</MI>
            </button>
          ) : (
            <button className="btn btn-primary" onClick={() => alert('Work Order submitted successfully!')}>
              <MI size={16}>check</MI>Submit Work Order
            </button>
          )}
        </div>
      </div>
    </>
  );
}
