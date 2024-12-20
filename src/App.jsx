import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { AppLayout } from "./common/AppLayout";
import { Products } from "./pages/Products";
import { MainContextProvider } from "./context/MainContext";
import { Orders } from "./pages/Orders";
import { Customers } from "./pages/Customers";
import { Payments } from "./pages/Payments";
import { Reports } from "./pages/Reports";
import { Settings } from "./pages/Settings";
import { Categories } from "./pages/Categories";
import { Analytics } from "./pages/Analytics";
import { Notifications } from "./pages/Notifications";
import { HelpCenter } from "./pages/HelpCenter";

const allRoutes = createBrowserRouter([
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
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/help-center",
        element: <HelpCenter />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <MainContextProvider>
        <RouterProvider router={allRoutes} />
      </MainContextProvider>
    </>
  );
}

export default App;
