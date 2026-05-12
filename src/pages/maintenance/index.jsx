import React from 'react';
import BreakdownReport from './BreakdownReport';
import PMExecution from './PMExecution';
import MaintWorkOrder from './MaintWorkOrder';
import EquipmentBoard from './EquipmentBoard';
import SpareRequest from './SpareRequest';

export default function Maintenance({ sub, navigate }) {
  switch (sub) {
    case 'pm':          return <PMExecution />;
    case 'work-orders': return <MaintWorkOrder />;
    case 'equipment':   return <EquipmentBoard />;
    case 'spares':      return <SpareRequest />;
    default:            return <BreakdownReport />;
  }
}
