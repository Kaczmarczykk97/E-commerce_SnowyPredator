import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import classes from "./Offers.module.css";

import ex_product from "../imgs/product_exclusive.png";

function Offers() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="zoom-in-down" className={classes.offers}>
      <div className={classes["offer-left"]}>
        <h2>Exclusive</h2>
        <h2>Offers For You</h2>
        <p>Only on best sellers products</p>
        <button>Check Now</button>
      </div>
      <div className={classes["offer-right"]}>
        <img src={ex_product} alt="exclusive offer" />
      </div>
    </div>
  );
}

export default Offers;
