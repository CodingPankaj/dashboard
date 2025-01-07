import { BiEditAlt } from "react-icons/bi";
import { IoEye } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export const OrderTable = ({ data }) => {
  return (
    <div className="scrollbar w-full overflow-x-auto bg-bg-primary-color">
      <table className="min-w-full table-fixed">
        <thead>
          <tr className="text-left text-sm font-semibold text-text-primary-color">
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Payment Status</th>
            <th className="px-4 py-2">Order Status</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <RecentOrdersList item={item} key={index} />
          ))}
        </tbody>
      </table>
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
    if (paymentStatus.toLowerCase() === "paid") return "34, 197, 94";
    if (paymentStatus.toLowerCase() === "unpaid") return "250, 117, 22";
    if (paymentStatus.toLowerCase() === "failed") return "239, 68, 68";
    if (paymentStatus.toLowerCase() === "refunded") return "20, 184, 166";
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
        <div
          className="w-fit rounded px-2 py-1 text-center text-xs"
          style={{
            backgroundColor: `rgba(${statusColor},0.10)`,
            color: `rgb(${statusColor})`,
          }}
        >
          {paymentStatus}
        </div>
      </td>
      <td className="px-4 py-2">
        <div
          className="w-fit rounded px-2 py-1 text-center text-xs"
          style={{
            backgroundColor: `rgba(${statusColor},0.10)`,
            color: `rgb(${statusColor})`,
          }}
        >
          order Status
        </div>
      </td>
      <td className="px-4 py-2">
        <div className="flex gap-[10px]">
          <button className="rounded bg-cyan-500/10 p-1 text-sm text-cyan-500 hover:bg-cyan-500 hover:text-white">
            <IoEye />
          </button>
          <button className="rounded bg-accent-color/10 p-1 text-sm text-accent-color hover:bg-accent-color hover:text-white">
            <BiEditAlt />
          </button>
          <button className="rounded bg-red-500/10 p-1 text-sm text-red-500 hover:bg-red-500 hover:text-white">
            <RiDeleteBin6Line />
          </button>
        </div>
      </td>
    </tr>
  );
};
