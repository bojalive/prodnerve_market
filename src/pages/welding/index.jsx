import React from 'react';
import WelderQualification from './WelderQualification';
import WPSCompliance from './WPSCompliance';
import JointPrep from './JointPrep';
import WeldParams from './WeldParams';
import NDTResults from './NDTResults';

export default function Welding({ sub, navigate }) {
  switch (sub) {
    case 'wps':         return <WPSCompliance />;
    case 'joint-prep':  return <JointPrep />;
    case 'weld-params': return <WeldParams />;
    case 'ndt':         return <NDTResults />;
    default:            return <WelderQualification />;
  }
}
