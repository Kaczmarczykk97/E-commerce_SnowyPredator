import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import ShopContext from "./Context/ShopContext";
import all_products_data from "./Components/imgs/all_products/all_products_data";

const root = ReactDOM.createRoot(document.getElementById("root"));

const getDefaultCart = () => {
  let cart = {};

  all_products_data.forEach((_, i) => {
    cart[i] = 0;
  });

  return cart;
};

function Main() {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  function addToCart(prodId) {
    setCartItems((prev) => ({ ...prev, [prodId]: prev[prodId] + 1 }));
  }

  function removeFromCart(prodId) {
    setCartItems((prev) => ({ ...prev, [prodId]: prev[prodId] - 1 }));
  }

  const contextValue = {
    all_products_data,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      <App />
    </ShopContext.Provider>
  );
}

root.render(<Main />);

reportWebVitals();
