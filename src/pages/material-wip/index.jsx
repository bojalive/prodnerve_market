import React from 'react';
import MaterialIssue from './MaterialIssue';
import WIPMovement from './WIPMovement';
import ScrapRework from './ScrapRework';
import BatchGenealogy from './BatchGenealogy';
import InventoryStatus from './InventoryStatus';

export default function MaterialWIP({ sub, navigate }) {
  switch (sub) {
    case 'wip-movement':  return <WIPMovement />;
    case 'scrap-rework':  return <ScrapRework />;
    case 'genealogy':     return <BatchGenealogy />;
    case 'inventory':     return <InventoryStatus />;
    default:              return <MaterialIssue navigate={navigate} />;
  }
}
