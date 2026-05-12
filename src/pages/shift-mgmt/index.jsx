import React from 'react';
import ShiftSchedule from './ShiftSchedule';
import ManpowerAlloc from './ManpowerAlloc';
import ShiftHandoverForm from './ShiftHandoverForm';
import AttendanceTracker from './AttendanceTracker';
import OvertimeLog from './OvertimeLog';

export default function ShiftMgmt({ sub, navigate }) {
  switch (sub) {
    case 'allocation': return <ManpowerAlloc />;
    case 'handover':   return <ShiftHandoverForm />;
    case 'attendance': return <AttendanceTracker />;
    case 'overtime':   return <OvertimeLog />;
    default:           return <ShiftSchedule />;
  }
}
