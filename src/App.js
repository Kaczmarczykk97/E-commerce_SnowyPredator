import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import Category from "./Pages/Category/Category";
import Login from "./Pages/Login/Login";
import Contact from "./Pages/Contact/Contact";
import Product from "./Pages/Product/Product";
import Terms from "./Pages/Terms/Terms";
import About from "./Pages/About/About";

import "./App.css";

import RootLayout from "./Root";

import snowboarding_banner from "./Components/imgs/Snowboarding_banner.jpg";
import skiing_banner from "./Components/imgs/Skiing_banner.jpg";
import accessories_banner from "./Components/imgs/Accessories_banner.jpg";
import clothes_banner from "./Components/imgs/Clothes_banner.jpg";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Shop /> },
        { path: "/cart", element: <Cart /> },
        { path: "/login", element: <Login /> },
        { path: "/contact", element: <Contact /> },
        { path: "/terms", element: <Terms /> },
        { path: "/about", element: <About /> },
        {
          path: "/snowboard",
          element: (
            <Category banner={snowboarding_banner} category="snowboard" />
          ),
        },
        {
          path: "/skiing",
          element: <Category banner={skiing_banner} category="skiing" />,
        },
        {
          path: "/accessories",
          element: (
            <Category banner={accessories_banner} category="accessories" />
          ),
        },
        {
          path: "/clothes",
          element: <Category banner={clothes_banner} category="clothes" />,
        },
        {
          path: "/product",
          element: <Product />,
          children: [{ path: ":product_ID", element: <Product /> }],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
