import Item from "../Item/Item";

import classes from "./NewProducts.module.css";

import new_products_data from "../imgs/new_products/new_products_data";

function NewProducts() {
  return (
    <div className={classes["new-products"]}>
      <h2>New Products</h2>
      <hr />
      <div className={classes["new-product"]}>
        {new_products_data.map((product, i) => {
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

export default NewProducts;
