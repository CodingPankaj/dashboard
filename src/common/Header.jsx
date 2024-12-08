import { MdNotificationsNone, MdOutlineMenu } from "react-icons/md";
import { DarkMode } from "../components/DarkMode";
import { MainContext } from "../context/MainContext";
import { useContext } from "react";

export const Header = () => {
  return (
    <header className="w-full border-b border-border-color bg-bg-primary-color px-3 py-3 md:px-5 md:py-4">
      <div className="flex w-full items-center justify-between gap-5">
        <SidebarToggleButton />
        <MobileMenuToggleButton />
        <div className="flex items-center gap-3">
          <DarkMode />
          <MdNotificationsNone className="text-2xl text-text-secondary-color" />
          <figure className="h-8 w-8 rounded-full">
            <img
              src="images/dp.jpg"
              alt="profile"
              className="h-full w-full rounded-full"
            />
          </figure>
        </div>
      </div>
    </header>
  );
};

const SidebarToggleButton = () => {
  const { toggleSidebar } = useContext(MainContext);

  return (
    <button
      onClick={toggleSidebar}
      className="hidden text-3xl text-text-secondary-color md:block"
    >
      <MdOutlineMenu />
    </button>
  );
};

const MobileMenuToggleButton = () => {
  const { toggleMobileMenu } = useContext(MainContext);

  return (
    <button
      onClick={toggleMobileMenu}
      className="text-3xl text-text-secondary-color md:hidden"
    >
      <MdOutlineMenu />
    </button>
  );
};
