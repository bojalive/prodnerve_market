import React from 'react';
import UserManagement from './UserManagement';
import PlantSetup from './PlantSetup';
import MasterData from './MasterData';
import ApprovalRules from './ApprovalRules';
import ReasonCodes from './ReasonCodes';

export default function Admin({ sub, navigate }) {
  switch (sub) {
    case 'plants':         return <PlantSetup />;
    case 'master':         return <MasterData />;
    case 'approval-rules': return <ApprovalRules />;
    case 'reason-codes':   return <ReasonCodes />;
    default:               return <UserManagement />;
  }
}
