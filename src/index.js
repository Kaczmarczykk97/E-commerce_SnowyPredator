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

  // function getTotal() {
  //   let total = 0;
  //   for (const item in cartItems) {
  //     if (cartItems[item] > 0) {
  //       let itemInfo = all_products_data.find((prod) => {
  //         return prod.id === Number(item);
  //       });
  //       total += itemInfo.new_price * cartItems[item];
  //     }
  //     return total;
  //   }
  // }

  function getTotal() {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let item_data = all_products_data.find((prod) => {
          return prod.id === Number(item);
        });
        total += item_data.new_price * cartItems[item];
      }
    }
    return total;
  }

  function getTotalCartItems() {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  }

  const contextValue = {
    all_products_data,
    cartItems,
    addToCart,
    removeFromCart,
    getTotal,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      <App />
    </ShopContext.Provider>
  );
}

root.render(<Main />);

reportWebVitals();
