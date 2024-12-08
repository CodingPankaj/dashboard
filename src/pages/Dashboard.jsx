import { OrderCard } from "../dashboardComponents/OrderCard";

export const Dashboard = () => {
  return (
    <section className="px-3 py-6 md:px-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </section>
  );
};
