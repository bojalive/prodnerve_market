import React from 'react';
import { MI } from '../../components/ui';
import FAInspection from './FAInspection';
import PatrolInspection from './PatrolInspection';
import FinalInspection from './FinalInspection';
import NCRList from './NCRList';
import CAPATracker from './CAPATracker';
import CalibrationMgmt from './CalibrationMgmt';

const TABS = [
  { key: 'final',       label: 'Final Inspection',   icon: 'checklist' },
  { key: 'fai',         label: 'FAI',                 icon: 'first_page' },
  { key: 'patrol',      label: 'Patrol / SPC',        icon: 'monitoring' },
  { key: 'ncr',         label: 'NCR List',            icon: 'report_problem' },
  { key: 'capa',        label: 'CAPA Tracker',        icon: 'task_alt' },
  { key: 'calibration', label: 'Calibration',         icon: 'straighten' },
];

const PAGES = {
  fai:         FAInspection,
  patrol:      PatrolInspection,
  final:       FinalInspection,
  ncr:         NCRList,
  capa:        CAPATracker,
  calibration: CalibrationMgmt,
};

export default function QualityPortal({ page, navigate }) {
  const active = page && PAGES[page] ? page : 'final';
  const Page = PAGES[active];

  return (
    <div>
      {/* Tab bar */}
      <div style={{
        display: 'flex', gap: 2, flexWrap: 'wrap', marginBottom: 20,
        borderBottom: '1px solid var(--border)', paddingBottom: 0,
      }}>
        {TABS.map(t => (
          <button
            key={t.key}
            onClick={() => navigate('quality/' + t.key)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '9px 16px', fontSize: '.76rem', fontWeight: 600,
              fontFamily: 'var(--f)', cursor: 'pointer',
              background: active === t.key ? 'var(--accent10)' : 'transparent',
              color: active === t.key ? 'var(--accent)' : 'var(--text-dim)',
              border: 'none', borderBottom: active === t.key ? '2px solid var(--accent)' : '2px solid transparent',
              transition: 'all .15s',
            }}
          >
            <MI size={16}>{t.icon}</MI>
            {t.label}
          </button>
        ))}
      </div>
      <Page />
    </div>
  );
}
