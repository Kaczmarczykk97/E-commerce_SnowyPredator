import { Link } from "react-router-dom";

import classes from "./Item.module.css";

function Item(props) {
  return (
    <div className={classes.item}>
      <Link to={`/product/${props.id}`}>
        <img src={props.img} alt="item" />
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
