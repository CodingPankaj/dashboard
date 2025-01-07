import { OrderSummary } from "../components/dashboardComponents/OrderSummary";
import { RecentOrders } from "../components/dashboardComponents/RecentOrders";
import { RevenueCard } from "../components/dashboardComponents/RevenueCard";
import { TopSellingProducts } from "../components/dashboardComponents/TopSellingProducts";
import { TotalOrders } from "../components/dashboardComponents/TotalOrders";
import { TotalProducts } from "../components/dashboardComponents/TotalProducts";
import { TotalSales } from "../components/dashboardComponents/TotalSales";
import { TotalVisitors } from "../components/dashboardComponents/TotalVisitors";
import { MainSection } from "../components/MainSection";

export const Dashboard = () => {
  return (
    <MainSection>
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
    </MainSection>
  );
};
