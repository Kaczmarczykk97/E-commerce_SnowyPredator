import { useContext } from "react";

import classes from "./Category.module.css";

function Category(props) {
  const { allProductsData } = useContext();

  return (
    <div className={classes["category"]}>
      <h1>CATEGORY</h1>
    </div>
  );
}

export default Category;
