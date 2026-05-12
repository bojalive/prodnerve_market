import React from 'react';
import WorkOrderList from './WorkOrderList';
import WorkOrderCreate from './WorkOrderCreate';
import WorkOrderDetail from './WorkOrderDetail';
import ProductionSchedule from './ProductionSchedule';
import PlanVsActual from './PlanVsActual';
import OrderDispatch from './OrderDispatch';

export default function ProductionOrders({ sub, navigate }) {
  switch (sub) {
    case 'create':       return <WorkOrderCreate navigate={navigate} />;
    case 'detail':       return <WorkOrderDetail navigate={navigate} />;
    case 'schedule':     return <ProductionSchedule />;
    case 'plan-actual':  return <PlanVsActual />;
    case 'dispatch':     return <OrderDispatch />;
    default:             return <WorkOrderList navigate={navigate} />;
  }
}
