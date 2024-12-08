import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { AppLayout } from "./common/AppLayout";
import { Products } from "./pages/Products";
import { MainContextProvider } from "./context/MainContext";

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
