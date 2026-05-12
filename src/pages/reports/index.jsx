import React from 'react';
import OEEReport from './OEEReport';
import ProdVsPlan from './ProdVsPlan';
import DowntimePareto from './DowntimePareto';
import QualityTrend from './QualityTrend';
import ShiftComparison from './ShiftComparison';
import PlantComparison from './PlantComparison';

export default function Reports({ sub, navigate }) {
  switch (sub) {
    case 'prod-plan':      return <ProdVsPlan />;
    case 'downtime':       return <DowntimePareto />;
    case 'quality-trend':  return <QualityTrend />;
    case 'shift-compare':  return <ShiftComparison />;
    case 'plant-compare':  return <PlantComparison />;
    default:               return <OEEReport />;
  }
}
