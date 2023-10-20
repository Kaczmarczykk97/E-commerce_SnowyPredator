import classes from "./Offers.module.css";

import ex_product from "../imgs/product_exclusive.png";

function Offers() {
  return (
    <div className={classes.offers}>
      <div className={classes["offer-left"]}>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
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
