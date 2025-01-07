import recentOrders from "../api/recentOrders.json";
import { DashboardCardTop } from "../components/DashboardCardTop";
import { MainCardContainer } from "../components/MainCardCointainer";
import { OrderTable } from "../components/OrderTable";
import { useEffect, useState } from "react";
import { MainSection } from "../components/MainSection";
import { SelectBoxOptions } from "../components/SelectBoxOptions";
import { SelectBox } from "../components/SelectBox";
import { useLocation } from "react-router-dom";

export const Orders = () => {
  const [orderData, setOrderData] = useState(recentOrders);
  const [paymentFIlterData, setPaymentFilterData] = useState(orderData);

  const orderPageLocation = useLocation()
    .pathname.split("/")
    .pop()
    .toLocaleLowerCase();

  const renderData = (location) => {
    if (location === "all") {
      setOrderData(recentOrders);
    } else {
      setOrderData(
        recentOrders.filter(
          (item) => item.orderStatus.toLowerCase() === location,
        ),
      );
    }
  };

  useEffect(() => {
    setPaymentFilterData(orderData);
  }, [orderData]);

  useEffect(() => {
    renderData(orderPageLocation);
  }, [orderPageLocation]);

  const handlePaymentStatusChange = (status) => {
    if (status === "all") {
      setPaymentFilterData(orderData);
    } else {
      setPaymentFilterData(
        orderData.filter((item) => item.paymentStatus.toLowerCase() === status),
      );
    }
  };

  return (
    <MainSection>
      <MainCardContainer>
        <DashboardCardTop cardName="Orders">
          <div className="flex flex-wrap gap-4">
            <SelectBox
              onChange={(e) => handlePaymentStatusChange(e.target.value)}
              name="payment-status"
            >
              <SelectBoxOptions value="all" label="All Payments" />
              <SelectBoxOptions value="paid" label="Paid" />
              <SelectBoxOptions value="unpaid" label="UnPaid" />
              <SelectBoxOptions value="failed" label="Failed" />
              <SelectBoxOptions value="refunded" label="Refunded" />
            </SelectBox>
          </div>
        </DashboardCardTop>
        <OrderTable data={paymentFIlterData} />
      </MainCardContainer>
    </MainSection>
  );
};
