import { DashboardCardTop } from "../components/DashboardCardTop";
import { OrderSummaryCancelled } from "./OrderSummaryCancelled";
import { OrderSummaryDelivered } from "./OrderSummaryDelivered";
import { OrderSummaryPending } from "./OrderSummaryPending";
import { OrderSummaryPieChart } from "./OrderSummaryPieChart";
import { OrderSummaryReturned } from "./OrderSummaryReturned";

export const OrderSummary = () => {
  return (
    <div className="flex items-start justify-between gap-1 rounded bg-bg-primary-color shadow-md">
      <div className="flex w-full flex-col gap-1 text-text-secondary-color">
        <DashboardCardTop cardName="Order Summary" />
        <OrderSummaryPieChart />
        <div className="p-3">
          <ul className="flex flex-col gap-4">
            <OrderSummaryDelivered />
            <OrderSummaryPending />
            <OrderSummaryCancelled />
            <OrderSummaryReturned />
          </ul>
        </div>
      </div>
    </div>
  );
};
