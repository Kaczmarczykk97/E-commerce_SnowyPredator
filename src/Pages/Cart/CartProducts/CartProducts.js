import { useContext } from "react";

import ShopContext from "../../../Context/ShopContext";

import classes from "./CartProducts.module.css";
import { ImBin2 } from "react-icons/im";

function CartProducts() {
  const { all_products_data, cartItems, removeFromCart, getTotal } =
    useContext(ShopContext);
  return (
    <div className={classes["cartProducts"]}>
      <div className={classes["cartProducts_labels"]}>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products_data.map((prod, i) => {
        if (cartItems[prod.id] > 0) {
          return (
            <div key={i}>
              <div
                className={`${classes["cartProducts_container"]} ${classes["cartProducts_labels"]}`}
              >
                <img
                  src={prod.img}
                  className={classes["productIcon"]}
                  alt="product icon"
                />
                <p>{prod.name}</p>
                <p>{prod.new_price}</p>
                <button className={classes["quantity"]}>
                  {cartItems[prod.id]}
                </button>
                <p>{prod.new_price * cartItems[prod.id]}</p>
                <ImBin2
                  className={classes["icon_remove"]}
                  onClick={() => {
                    removeFromCart(prod.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className={classes["totalPrice_container"]}>
        <div className={classes["totalPrice"]}>
          <h2>Totals</h2>
          <div>
            <div className={classes["totalPrice_item"]}>
              <p>Subtotal</p>
              <p>{getTotal()} €</p>
            </div>
            <hr />
            <div className={classes["totalPrice_item"]}>
              <p>Shipping</p>
              <p>15 €</p>
            </div>
            <hr />
            <div className={classes["totalPrice_item"]}>
              <h2>Total</h2>
              <h2>{getTotal() + 15} €</h2>
            </div>
          </div>
          <button>Next</button>
        </div>
        <div className={classes["promoCode"]}>
          <p>Promo code:</p>
          <div className={classes["promoCode_inputBox"]}>
            <input type="text" placeholder="Enter your code here" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
