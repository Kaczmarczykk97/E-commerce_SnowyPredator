import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import ShopContext from "./Context/ShopContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShopContext.Provider>
      <App />
    </ShopContext.Provider>
  </React.StrictMode>
);

reportWebVitals();
