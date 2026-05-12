import React from 'react';
import TestBenchAlloc from './TestBenchAlloc';
import PerformanceTest from './PerformanceTest';
import NoiseVibration from './NoiseVibration';
import SafetyValve from './SafetyValve';
import TestCertificate from './TestCertificate';

export default function Testing({ sub, navigate }) {
  switch (sub) {
    case 'performance': return <PerformanceTest />;
    case 'noise-vib':   return <NoiseVibration />;
    case 'safety-valve': return <SafetyValve />;
    case 'certificate': return <TestCertificate />;
    default:            return <TestBenchAlloc />;
  }
}
