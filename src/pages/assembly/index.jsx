import React from 'react';
import StationOutput from './StationOutput';
import TorqueRecording from './TorqueRecording';
import Traceability from './Traceability';
import TestAtStation from './TestAtStation';
import AndonBoard from './AndonBoard';

export default function Assembly({ sub, navigate }) {
  switch (sub) {
    case 'torque':       return <TorqueRecording />;
    case 'traceability': return <Traceability />;
    case 'test-station': return <TestAtStation />;
    case 'andon':        return <AndonBoard />;
    default:             return <StationOutput />;
  }
}
