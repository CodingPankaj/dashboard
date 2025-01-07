import { DashboardCardTop } from "../DashboardCardTop";
import recentOrders from "../../api/recentOrders.json";
import { MainCardContainer } from "../MainCardCointainer";
import { OrderTable } from "../OrderTable";

export const RecentOrders = () => {
  const displaData = recentOrders.slice(0, 7);
  return (
    <MainCardContainer>
      <DashboardCardTop cardName="Recent Orders" />
      <OrderTable data={displaData} />
    </MainCardContainer>
  );
};
