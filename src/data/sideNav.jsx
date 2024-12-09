import {
  MdOutlineAttachMoney,
  MdOutlineCategory,
  MdOutlineExitToApp,
  MdOutlineHelp,
  MdOutlineHome,
  MdOutlineNotifications,
  MdOutlinePeople,
  MdOutlineReport,
  MdOutlineSettings,
  MdOutlineShoppingCart,
  MdOutlineStore,
  MdOutlineTrendingUp,
} from "react-icons/md";

export const sideNav = [
  {
    icon: <MdOutlineHome />,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: <MdOutlineStore />,
    label: "Products",
    path: "/products",
    children: [
      {
        label: "Sales",
        path: "/products",
      },
      {
        label: "CRM",
        path: "/",
      },
      {
        label: "Nice",
        path: "/nice",
      },
      {
        label: "Nice",
        path: "/nice",
      },
    ],
  },
  {
    icon: <MdOutlineShoppingCart />,
    label: "Orders",
    path: "/orders",
  },
  {
    icon: <MdOutlinePeople />,
    label: "Customers",
    path: "/customers",
  },
  {
    icon: <MdOutlineAttachMoney />,
    label: "Payments",
    path: "/payments",
  },
  {
    icon: <MdOutlineReport />,
    label: "Reports",
    path: "/reports",
  },
  {
    icon: <MdOutlineSettings />,
    label: "Settings",
    path: "/settings",
  },
  {
    icon: <MdOutlineCategory />,
    label: "Categories",
    path: "/categories",
  },
  {
    icon: <MdOutlineTrendingUp />,
    label: "Analytics",
    path: "/analytics",
  },
  {
    icon: <MdOutlineNotifications />,
    label: "Notifications",
    path: "/notifications",
  },
  {
    icon: <MdOutlineHelp />,
    label: "Help Center",
    path: "/help-center",
  },
  {
    icon: <MdOutlineExitToApp />,
    label: "Logout",
    path: "/logout",
  },
];
