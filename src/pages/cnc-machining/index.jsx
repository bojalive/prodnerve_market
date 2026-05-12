import React from 'react';
import ToolLifeTracker from './ToolLifeTracker';
import ProgramMgmt from './ProgramMgmt';
import OffsetMgmt from './OffsetMgmt';
import CycleTimeTracker from './CycleTimeTracker';
import MachineParams from './MachineParams';

export default function CNCMachining({ sub, navigate }) {
  switch (sub) {
    case 'programs':   return <ProgramMgmt />;
    case 'offsets':    return <OffsetMgmt />;
    case 'cycle-time': return <CycleTimeTracker />;
    case 'params':     return <MachineParams />;
    default:           return <ToolLifeTracker />;
  }
}
