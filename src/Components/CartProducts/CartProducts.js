import { useContext } from "react";

import ShopContext from "../../Context/ShopContext";

import classes from "./CartProducts.module.css";
import { ImBin2 } from "react-icons/im";

function CartProducts() {
  const { all_products_data, cartItems, removeFromCart } =
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
              <div className={classes["cartProducts_container"]}>
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
      })}
    </div>
  );
}

export default CartProducts;
