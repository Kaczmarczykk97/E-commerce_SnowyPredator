import { Link } from "react-router-dom";

import classes from "./ProductPath.module.css";

function ProductPath(props) {
  const { product_data } = props;
  return (
    <div className={classes["product_path"]}>
      <Link to={"/"}>Home</Link> /
      <Link to={`/${product_data.category}`}>{product_data.category}</Link> /
      {product_data.name}
    </div>
  );
}

export default ProductPath;
