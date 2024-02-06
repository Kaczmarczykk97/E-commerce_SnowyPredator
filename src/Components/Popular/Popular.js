import classes from "./Popular.module.css";
import popular_products_data from "../imgs/popular_products/popular_products_data";

import Item from "../Item/Item";

function Popular(props) {
  return (
    <div className={classes.popular}>
      <h2>Popular products</h2>
      <hr />
      <div className={classes["popular-item"]}>
        {popular_products_data.map((product, i) => {
          return (
            <Item
              key={i}
              id={product.id}
              img={product.img}
              name={product.name}
              new_price={product.new_price}
              old_price={product.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
