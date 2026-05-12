import React from 'react';
import MachineStatusBoard from './MachineStatusBoard';
import ProductionEntry from './ProductionEntry';
import DowntimeEntry from './DowntimeEntry';
import MaterialConsumption from './MaterialConsumption';
import ShiftHandover from './ShiftHandover';

export default function ShopFloor({ sub, navigate }) {
  switch (sub) {
    case 'production-entry': return <ProductionEntry />;
    case 'downtime':         return <DowntimeEntry />;
    case 'material':         return <MaterialConsumption />;
    case 'handover':         return <ShiftHandover />;
    default:                 return <MachineStatusBoard />;
  }
}
