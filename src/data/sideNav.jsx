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
        label: "All Products",
        path: "/products/all",
      },
      {
        label: "Sales",
        path: "/products/sales",
      },
      {
        label: "CRM",
        path: "/products/crm",
      },
      {
        label: "Inventory",
        path: "/products/inventory",
      },
      {
        label: "Add Product",
        path: "/products/add",
      },
    ],
  },
  {
    icon: <MdOutlineShoppingCart />,
    label: "Orders",
    path: "/orders",
    children: [
      {
        label: "All Orders",
        path: "/orders/all",
      },
      {
        label: "Pending Orders",
        path: "/orders/pending",
      },
      {
        label: "Completed Orders",
        path: "/orders/completed",
      },
      {
        label: "Cancelled Orders",
        path: "/orders/cancelled",
      },
    ],
  },
  {
    icon: <MdOutlinePeople />,
    label: "Customers",
    path: "/customers",
    children: [
      {
        label: "All Customers",
        path: "/customers/all",
      },
      {
        label: "VIP Customers",
        path: "/customers/vip",
      },
      {
        label: "Customer Groups",
        path: "/customers/groups",
      },
    ],
  },
  {
    icon: <MdOutlineAttachMoney />,
    label: "Payments",
    path: "/payments",
    children: [
      {
        label: "All Payments",
        path: "/payments/all",
      },
      {
        label: "Pending Payments",
        path: "/payments/pending",
      },
      {
        label: "Completed Payments",
        path: "/payments/completed",
      },
    ],
  },
  {
    icon: <MdOutlineReport />,
    label: "Reports",
    path: "/reports",
    children: [
      {
        label: "Sales Report",
        path: "/reports/sales",
      },
      {
        label: "Order Report",
        path: "/reports/orders",
      },
      {
        label: "Customer Report",
        path: "/reports/customers",
      },
      {
        label: "Payment Report",
        path: "/reports/payments",
      },
    ],
  },
  {
    icon: <MdOutlineSettings />,
    label: "Settings",
    path: "/settings",
    children: [
      {
        label: "General Settings",
        path: "/settings/general",
      },
      {
        label: "Store Settings",
        path: "/settings/store",
      },
      {
        label: "Payment Settings",
        path: "/settings/payment",
      },
      {
        label: "User Roles & Permissions",
        path: "/settings/roles",
      },
    ],
  },
  {
    icon: <MdOutlineCategory />,
    label: "Categories",
    path: "/categories",
    children: [
      {
        label: "All Categories",
        path: "/categories/all",
      },
      {
        label: "Add New Category",
        path: "/categories/add",
      },
      {
        label: "Category Management",
        path: "/categories/manage",
      },
    ],
  },
  {
    icon: <MdOutlineTrendingUp />,
    label: "Analytics",
    path: "/analytics",
    children: [
      {
        label: "Sales Analytics",
        path: "/analytics/sales",
      },
      {
        label: "Product Analytics",
        path: "/analytics/products",
      },
      {
        label: "Customer Analytics",
        path: "/analytics/customers",
      },
    ],
  },
  {
    icon: <MdOutlineNotifications />,
    label: "Notifications",
    path: "/notifications",
    children: [
      {
        label: "All Notifications",
        path: "/notifications/all",
      },
      {
        label: "Unread Notifications",
        path: "/notifications/unread",
      },
      {
        label: "Settings",
        path: "/notifications/settings",
      },
    ],
  },
  {
    icon: <MdOutlineHelp />,
    label: "Help Center",
    path: "/help-center",
    children: [
      {
        label: "FAQ",
        path: "/help-center/faq",
      },
      {
        label: "Contact Support",
        path: "/help-center/contact",
      },
      {
        label: "Documentation",
        path: "/help-center/docs",
      },
    ],
  },
  {
    icon: <MdOutlineExitToApp />,
    label: "Logout",
    path: "/logout",
  },
];
