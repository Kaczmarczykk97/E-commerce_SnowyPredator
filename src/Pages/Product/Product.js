import { useContext } from "react";
import { useParams } from "react-router-dom";

import ShopContext from "../../Context/ShopContext";
import ProductPath from "./ProductPath/ProductPath";
import ProductDisplay from "./ProductDisplay/ProductDisplay";

import classes from "./Product.module.css";
import ProductDescription from "./ProductDescription/ProductDescription";

function Product() {
  const ctx = useContext(ShopContext);
  const { product_ID } = useParams();
  const product_data = ctx.find((prod) => prod.id === Number(product_ID));
  return (
    <div className={classes["product"]}>
      <ProductPath product_data={product_data} />
      <ProductDisplay product_data={product_data} />
      <ProductDescription />
    </div>
  );
}

export default Product;
