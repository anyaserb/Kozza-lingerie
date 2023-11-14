import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import RootLayout2 from "./pages/RootLayout2";
import MainPage from "./pages/MainPage";
import Catalog from "./pages/Catalog";
import Product, { productLoader } from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, //елемент, який буде огортати всі сторінки
    children: [
      {
        path: "",
        element: <RootLayout2 />,
        children: [
          {
            path: "",
            element: <MainPage />,
            loader: productLoader
          },
          {
            path: "catalog",
            element: <Catalog />,
            loader: productLoader
          },
          {
            path: "product",
            element: <Product />,
            loader: productLoader
          }
        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
