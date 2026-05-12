import React from 'react';
import { KpiCard, SectionLabel, DataTable, Badge } from '../../components/ui';

const CERTIFICATES = [
  { certNo: 'TC-2026-04881', serial: 'EG-4022-WIS', product: 'GT-C200 Comber', customer: 'Trident Limited', tests: 'Perf + NV + SV', wo: 'WO-2526-10001', issuedBy: 'Kavitha S', date: '23 Mar 2026', status: 'Issued' },
  { certNo: 'TC-2026-04882', serial: 'AB-3018-HSR', product: 'GT-SF200 Speed Frame', customer: 'Vardhman Textiles', tests: 'Perf + NV + SV', wo: 'WO-2526-10006', issuedBy: 'Kavitha S', date: '23 Mar 2026', status: 'Draft' },
  { certNo: 'TC-2026-04879', serial: 'TS-1056-PNE', product: 'GT-RF400 Ring Frame', customer: 'Raymond Limited', tests: 'Perf + SV', wo: 'WO-2526-10003', issuedBy: 'Rajesh P', date: '22 Mar 2026', status: 'Issued' },
  { certNo: 'TC-2026-04878', serial: 'EG-4021-WIS', product: 'GT-C200 Comber', customer: 'Trident Limited', tests: 'Perf + NV + SV', wo: 'WO-2526-10001', issuedBy: 'Kavitha S', date: '22 Mar 2026', status: 'Issued' },
  { certNo: 'TC-2026-04875', serial: 'DS-2089-AMD', product: 'FT-100 Filter Housing', customer: 'Aditya Birla Group', tests: 'Perf + SV + Dew Point', wo: 'WO-2526-10008', issuedBy: 'Rajesh P', date: '21 Mar 2026', status: 'Issued' },
  { certNo: 'TC-2026-04873', serial: 'VSD-6014-JMP', product: 'VSD-200 Controller', customer: 'Internal', tests: 'Functional + EMC', wo: 'WO-2526-10005', issuedBy: 'Senthil K', date: '21 Mar 2026', status: 'Issued' },
];

const STATUS_COLOR = { Issued: 'green', Draft: 'amber', Void: 'red' };

export default function TestCertificate() {
  return (
    <>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: -.5 }}>Test Certificates</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginTop: 3 }}>Generate and manage test certificates for dispatched units</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 18 }}>
        <KpiCard label="Certs Issued (MTD)" value="142" sub="test certificates" icon="workspace_premium" iconType="up" />
        <KpiCard label="Pending" value="3" sub="awaiting sign-off" icon="pending" iconType="w" />
        <KpiCard label="Draft" value="1" sub="in preparation" icon="edit_note" />
        <KpiCard label="Avg Turnaround" value="1.2 days" sub="test to cert issued" icon="schedule" change="-0.3d vs avg" changeType="up" />
      </div>

      {/* Certificate preview card */}
      <div className="card" style={{ padding: 20, marginBottom: 20, border: '2px solid var(--border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 4 }}>Certificate Preview: TC-2026-04881</h3>
            <p style={{ fontSize: '.76rem', color: 'var(--text-dim)' }}>EG-4022-WIS -- GT-C200 Comber -- Trident Limited</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn">Print</button>
            <button className="btn btn-primary">Download PDF</button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, fontSize: '.76rem' }}>
          <div><span style={{ color: 'var(--text-mute)', fontSize: '.68rem', textTransform: 'uppercase', fontWeight: 600 }}>Performance</span><br /><strong style={{ color: 'var(--green)' }}>All 5 load points PASS</strong></div>
          <div><span style={{ color: 'var(--text-mute)', fontSize: '.68rem', textTransform: 'uppercase', fontWeight: 600 }}>Noise & Vibration</span><br /><strong style={{ color: 'var(--green)' }}>All 4 points PASS</strong></div>
          <div><span style={{ color: 'var(--text-mute)', fontSize: '.68rem', textTransform: 'uppercase', fontWeight: 600 }}>Safety Valve</span><br /><strong style={{ color: 'var(--green)' }}>2/2 valves PASS</strong></div>
        </div>
      </div>

      <SectionLabel icon="workspace_premium">Recent Certificates ({CERTIFICATES.length})</SectionLabel>
      <DataTable
        headers={['Cert No', 'Serial', 'Product', 'Customer', 'Tests Included', 'Work Order', 'Issued By', 'Date', 'Status']}
        rows={CERTIFICATES.map(c => [
          { v: c.certNo, style: { fontWeight: 600, fontFamily: 'var(--m)', color: 'var(--accent)' } },
          { v: c.serial, style: { fontFamily: 'var(--m)' } },
          c.product,
          c.customer,
          { v: c.tests, style: { fontSize: '.73rem' } },
          { v: c.wo, style: { fontFamily: 'var(--m)' } },
          c.issuedBy,
          c.date,
          <Badge label={c.status} color={STATUS_COLOR[c.status]} />,
        ])}
      />
    </>
  );
}
