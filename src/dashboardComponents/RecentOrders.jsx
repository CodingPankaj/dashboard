import { Link } from "react-router-dom";
import { DashboardCardTop } from "../components/DashboardCardTop";
import recentOrders from "../api/recentOrders.json";

export const RecentOrders = () => {
  return (
    <div className="flex items-start justify-between gap-1 rounded bg-bg-primary-color shadow-md">
      <div className="flex w-full flex-col gap-1 text-text-secondary-color">
        <DashboardCardTop cardName="Recent Orders"></DashboardCardTop>
        <div className="w-full overflow-x-scroll bg-bg-primary-color lg:overflow-hidden">
          <table className="min-w-full table-fixed">
            <thead>
              <tr className="text-left text-sm font-semibold text-text-primary-color">
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Customer</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((item, index) => (
                <RecentOrdersList item={item} key={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const RecentOrdersList = ({
  item: {
    orderID,
    customerName,
    customerEmail,
    orderDate,
    totalAmount,
    paymentStatus,
    profilePic,
  },
}) => {
  const paymentStatusColor = () => {
    if (paymentStatus.toLowerCase() === "paid") return "green";
    if (paymentStatus.toLowerCase() === "pending") return "orange";
    if (paymentStatus.toLowerCase() === "unpaid") return "red";
  };

  const statusColor = paymentStatusColor();

  return (
    <tr className="border-t border-border-color">
      <td className="px-4 py-2">
        <Link className="text-xs text-accent-color">{orderID}</Link>
      </td>
      <td className="px-4 py-2">
        <div className="flex items-center gap-4">
          <figure className="size-10">
            <img src={profilePic} className="w-full rounded object-cover" />
          </figure>
          <div>
            <h5 className="text-sm font-semibold text-text-primary-color">
              {customerName}
            </h5>
            <p className="text-xs font-medium text-text-secondary-color">
              {customerEmail}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-2">
        <span className="text-right text-xs font-medium text-text-secondary-color">
          {orderDate}
        </span>
      </td>
      <td className="px-4 py-2">
        <span className="text-right text-xs font-bold text-text-primary-color">
          {totalAmount}
        </span>
      </td>
      <td className="px-4 py-2">
        <span
          className={`rounded bg-${statusColor}-500/10 px-2 py-1 text-right text-xs text-${statusColor}-500`}
        >
          {paymentStatus}
        </span>
      </td>
    </tr>
  );
};
