import recentOrders from "../api/recentOrders.json";
import { DashboardCardTop } from "../components/DashboardCardTop";
import { MainCardContainer } from "../components/MainCardCointainer";
import { OrderTable } from "../components/OrderTable";
import { useEffect, useState } from "react";
import { MainSection } from "../components/MainSection";
import { SelectBoxOptions } from "../components/SelectBoxOptions";
import { SelectBox } from "../components/SelectBox";

export const Orders = () => {
  const [paymentStatus, setPayemntStatus] = useState(recentOrders);
  const [filterPaymentStatus, setFilterPaymentStatus] = useState("ALL");

  const filterPayments = () => {
    if (filterPaymentStatus === "all") {
      setPayemntStatus(recentOrders);
    }
    if (filterPaymentStatus === "paid") {
      setPayemntStatus(
        recentOrders.filter(
          (item) => item.paymentStatus.toLowerCase() === "paid",
        ),
      );
    }
    if (filterPaymentStatus === "unpaid") {
      setPayemntStatus(
        recentOrders.filter(
          (item) => item.paymentStatus.toLowerCase() === "unpaid",
        ),
      );
    }
    if (filterPaymentStatus === "failed") {
      setPayemntStatus(
        recentOrders.filter(
          (item) => item.paymentStatus.toLowerCase() === "failed",
        ),
      );
    }
    if (filterPaymentStatus === "refunded") {
      setPayemntStatus(
        recentOrders.filter(
          (item) => item.paymentStatus.toLowerCase() === "refunded",
        ),
      );
    }
  };

  useEffect(() => {
    filterPayments();
  }, [filterPaymentStatus]);

  return (
    <MainSection>
      <p className="text-gray-500">hello</p>
      <MainCardContainer>
        <DashboardCardTop cardName="All Orders">
          <SelectBox onChange={(e) => setFilterPaymentStatus(e.target.value)}>
            <SelectBoxOptions value="all" label="All" />
            <SelectBoxOptions value="paid" label="Paid" />
            <SelectBoxOptions value="unpaid" label="UnPaid" />
            <SelectBoxOptions value="failed" label="Failed" />
            <SelectBoxOptions value="refunded" label="Refunded" />
          </SelectBox>
        </DashboardCardTop>
        <OrderTable data={paymentStatus} />
      </MainCardContainer>
    </MainSection>
  );
};
