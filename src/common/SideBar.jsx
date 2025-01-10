import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { GiShoppingBag } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { SidebarMenu } from "../components/sidebar/SidebarMenu";

export const SideBar = () => {
  const { isSidebarExpanded, isMobileMenuOpen, toggleMobileMenu } =
    useContext(MainContext);
  return (
    <div
      className={`h-screen w-[220px] ${isSidebarExpanded ? "md:max-w-[220px]" : "md:max-w-[65px]"} group fixed top-0 bg-bg-primary-color pb-4 transition-[max-width,left] duration-500 hover:max-w-[220px] md:sticky ${isMobileMenuOpen ? "left-0" : "-left-[220px]"} z-30 grid grid-rows-[auto_1fr] border-r border-border-color`}
    >
      <div className="mb-8 flex h-[57px] w-full items-center gap-3 overflow-hidden border-b border-border-color px-4 text-text-primary-color md:h-[65px]">
        <div className="w-[35px]">
          <GiShoppingBag className="text-[35px] text-accent-color" />
        </div>
        <h3 className="mt-2 text-xl font-bold uppercase">Logo</h3>
        <button
          onClick={toggleMobileMenu}
          className="ml-auto justify-self-end text-2xl text-text-secondary-color md:hidden"
        >
          <IoCloseSharp />
        </button>
      </div>
      <SidebarMenu />
    </div>
  );
};
