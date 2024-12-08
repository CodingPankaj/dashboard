import { createContext, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <MainContext.Provider
      value={{
        isSidebarExpanded,
        toggleSidebar,
        isMobileMenuOpen,
        toggleMobileMenu,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
