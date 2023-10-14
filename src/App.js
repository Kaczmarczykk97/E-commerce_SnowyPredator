import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import Category from "./Pages/Category/Category";
import Login from "./Pages/Login/Login";
import Product from "./Pages/Product/Product";

import "./App.css";
import RootLayout from "./Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Shop /> },
        { path: "/cart", element: <Cart /> },
        { path: "/login", element: <Login /> },
        { path: "/snowboard", element: <Category category="snowboard" /> },
        { path: "/skiing", element: <Category category="skiing" /> },
        { path: "/accessories", element: <Category category="accessories" /> },
        { path: "/clothes", element: <Category category="clothes" /> },
        {
          path: "/product",
          element: <Product />,
          children: [{ path: ":productId", element: <Product /> }],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
