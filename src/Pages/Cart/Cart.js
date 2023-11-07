import CartProducts from "./CartProducts/CartProducts";
import classes from "./Cart.module.css";

function Cart() {
  return (
    <div className={classes["cart"]}>
      <CartProducts />
    </div>
  );
}

export default Cart;
