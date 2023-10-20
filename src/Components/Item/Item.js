import classes from "./Item.module.css";

function Item(props) {
  return (
    <div className={classes.item}>
      <img src={props.img} alt="item" />
      <p>{props.name}</p>
      <div className={classes["item-prices"]}>
        <div className={classes["item-price--new"]}>{props.new_price} €</div>
        <div className={classes["item-price--old"]}>{props.old_price} €</div>
      </div>
    </div>
  );
}

export default Item;
