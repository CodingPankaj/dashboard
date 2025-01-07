import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../common/AppLayout";
import { Dashboard } from "../pages/Dashboard";
import { Products } from "../pages/Products";
import { Orders } from "../pages/Orders";
import { Customers } from "../pages/Customers";
import { Payments } from "../pages/Payments";
import { Reports } from "../pages/Reports";
import { Settings } from "../pages/Settings";
import { Error } from "../pages/Error";

export const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/orders",
        element: <Orders />,
        children: [
          { path: "all", element: <Orders /> },
          { path: "pending", element: <Orders /> },
          { path: "processing", element: <Orders /> },
          { path: "shipped", element: <Orders /> },
          { path: "delivered", element: <Orders /> },
          { path: "cancelled", element: <Orders /> },
          { path: "returned", element: <Orders /> },
        ],
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/payments",
        element: <Payments />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
