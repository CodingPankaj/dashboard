import { OrderSummary } from "../dashboardComponents/OrderSummary";
import { RecentOrders } from "../dashboardComponents/RecentOrders";
import { RevenueCard } from "../dashboardComponents/RevenueCard";
import { TopSellingProducts } from "../dashboardComponents/TopSellingProducts";
import { TotalOrders } from "../dashboardComponents/TotalOrders";
import { TotalProducts } from "../dashboardComponents/TotalProducts";
import { TotalSales } from "../dashboardComponents/TotalSales";
import { TotalVisitors } from "../dashboardComponents/TotalVisitors";

export const Dashboard = () => {
  return (
    <section className="flex flex-col gap-5 px-3 py-6 md:px-5">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <TotalOrders />
        <TotalSales />
        <TotalVisitors />
        <TotalProducts />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <RevenueCard />
        <TopSellingProducts />
      </div>
      <div className="md grid grid-cols-1 gap-5 lg:grid-cols-2">
        <OrderSummary />
        <RecentOrders />
      </div>
    </section>
  );
};
