import { useContext, useState } from "react";
import { SubMenu } from "./SubMenu";
import { MainContext } from "../context/MainContext";
import { MdOutlineChevronRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const MenuItems = ({ item: { icon, label, path, children } }) => {
  const { toggleMobileMenu, isSidebarExpanded } = useContext(MainContext);

  const handleMenuClickInMobile = () => {
    if (window.innerWidth <= 768) {
      toggleMobileMenu();
    }
  };

  const [sideMenu, setSideMenu] = useState(false);

  return (
    <li className="w-full">
      <NavLink
        onClick={
          children ? () => setSideMenu(!sideMenu) : handleMenuClickInMobile
        }
        to={path}
        className={({ isActive }) =>
          `flex items-center gap-3 text-nowrap text-2xl text-text-primary-color ${isActive ? "bg-accent-color text-white" : "bg-transparent"} w-full overflow-hidden rounded px-1 py-1 transition-all duration-300 hover:bg-accent-color`
        }
      >
        <span className="flex items-center justify-center rounded p-1">
          {icon}
        </span>
        <span className="leading-0 flex w-full grow items-center justify-between gap-2 pr-2 text-lg">
          {label}
          <MdOutlineChevronRight
            className={`text-sm ${sideMenu ? "rotate-90" : ""}`}
          />
        </span>
      </NavLink>
      <div
        className={` ${isSidebarExpanded ? "grid" : "hidden"} ${sideMenu ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-all duration-300 group-hover:grid`}
      >
        <div className="row-span-2 overflow-hidden">
          <ul className="mt-4 flex flex-col">
            {children &&
              children.map((item, index) => (
                <SubMenu
                  key={index}
                  item={item}
                  handleMenuClickInMobile={handleMenuClickInMobile}
                />
              ))}
          </ul>
        </div>
      </div>
    </li>
  );
};
