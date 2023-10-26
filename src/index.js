import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import ShopContext from "./Context/ShopContext";
import all_products_data from "./Components/imgs/all_products/all_products_data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopContext.Provider value={all_products_data}>
    <App />
  </ShopContext.Provider>
);

reportWebVitals();
