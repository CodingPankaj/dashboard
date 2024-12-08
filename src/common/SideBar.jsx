import { MdOutlineChevronRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { sideNav } from "../data/sideNav";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { GiShoppingBag } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export const SideBar = () => {
  const { isSidebarExpanded, isMobileMenuOpen, toggleMobileMenu } =
    useContext(MainContext);
  return (
    <div
      className={`h-screen w-[220px] ${isSidebarExpanded ? "md:max-w-[220px]" : "md:max-w-[56px]"} group fixed top-0 bg-bg-primary-color pb-4 transition-[max-width_position] duration-500 hover:max-w-[220px] md:static ${isMobileMenuOpen ? "left-0" : "-left-[220px]"} z-20 border-r border-border-color`}
    >
      <div className="mb-8 flex h-[57px] w-full items-center gap-2 overflow-hidden border-b border-border-color px-3 text-text-primary-color md:h-[65px]">
        <div className="w-[35px]">
          <GiShoppingBag className="text-[35px]" />
        </div>
        <h3 className="mt-2 text-xl font-bold uppercase">Logo</h3>
        <button
          onClick={toggleMobileMenu}
          className="ml-auto justify-self-end text-2xl text-text-secondary-color md:hidden"
        >
          <IoCloseSharp />
        </button>
      </div>
      <nav className="px-3">
        <ul className="flex flex-col items-start gap-4 overflow-hidden">
          {sideNav.map((item, index) => (
            <MenuItems item={item} key={index} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

const MenuItems = ({ item: { icon, label, path } }) => {
  const { toggleMobileMenu } = useContext(MainContext);

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      toggleMobileMenu();
    }
  };

  return (
    <li className="w-full">
      <NavLink
        onClick={handleClick}
        to={path}
        className={({ isActive }) =>
          `flex items-center gap-3 text-nowrap text-2xl text-text-primary-color ${isActive ? "bg-accent-color text-white" : "bg-transparent"} w-full overflow-hidden rounded`
        }
      >
        <span className="flex items-center justify-center rounded p-1">
          {icon}
        </span>
        <span className="leading-0 flex w-full grow items-center justify-between gap-2 pr-2 text-lg">
          {label}
          <MdOutlineChevronRight className="text-sm" />
        </span>
      </NavLink>
    </li>
  );
};
