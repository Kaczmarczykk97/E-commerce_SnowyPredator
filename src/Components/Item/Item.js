import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./Item.module.css";
import ShopContext from "../../Context/ShopContext";

function Item(props) {
  const { scrollTop } = useContext(ShopContext);

  return (
    <div className={classes.item}>
      <Link to={`/product/${props.id}`}>
        <img src={props.img} alt="item" onClick={scrollTop} />
      </Link>
      <p>{props.name}</p>
      <div className={classes["item-prices"]}>
        <div className={classes["item-price--new"]}>{props.new_price} €</div>
        <div className={classes["item-price--old"]}>{props.old_price} €</div>
      </div>
    </div>
  );
}

export default Item;
