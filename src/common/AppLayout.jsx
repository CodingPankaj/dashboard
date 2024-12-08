import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { Overlay } from "../components/Overlay";

export const AppLayout = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-[auto_1fr]">
        <SideBar />
        <div>
          <Header />
          <Outlet />
        </div>
      </section>
      <Overlay />
    </>
  );
};