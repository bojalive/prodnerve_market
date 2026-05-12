import React from 'react';
import SurfacePrep from './SurfacePrep';
import PaintBatch from './PaintBatch';
import ApplicationParams from './ApplicationParams';
import OvenChart from './OvenChart';
import CoatingInspection from './CoatingInspection';

export default function PaintCoating({ sub, navigate }) {
  switch (sub) {
    case 'paint-batch':       return <PaintBatch />;
    case 'application':       return <ApplicationParams />;
    case 'oven':              return <OvenChart />;
    case 'coating-inspect':   return <CoatingInspection />;
    default:                  return <SurfacePrep />;
  }
}
