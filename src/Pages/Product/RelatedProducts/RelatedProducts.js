import { useContext } from "react";

import ShopContext from "../../../Context/ShopContext";
import Item from "../../../Components/Item/Item";

import classes from "./RelatedProducts.module.css";

function RelatedProducts({ product_data }) {
  const ctx = useContext(ShopContext);

  const relatedProductsArr = ctx.filter(
    (prod) => prod.category === product_data.category
  );

  const randomRelatedProducts = [];

  function getRandomRelatedProducts() {
    while (randomRelatedProducts.length < 4) {
      const randomNumber = Math.floor(
        Math.random() * relatedProductsArr.length
      );
      const randomProduct = relatedProductsArr[randomNumber];

      if (!randomRelatedProducts.includes(randomProduct)) {
        randomRelatedProducts.push(randomProduct);
      }
    }
  }

  getRandomRelatedProducts();

  return (
    <div className={classes["related_products"]}>
      <h2>Related Products</h2>
      <div className={classes["related_products--container"]}>
        {randomRelatedProducts.map((product, i) => (
          <Item
            key={i}
            id={product.id}
            img={product.img}
            name={product.name}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
