import { useContext } from "react";

import ShopContext from "../../Context/ShopContext";

import Item from "../../Components/Item/Item";

import classes from "./Category.module.css";

import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";

function Category(props) {
  const { all_products_data } = useContext(ShopContext);
  const amount = all_products_data.filter((prod) => {
    return prod.category === props.category;
  }).length;

  return (
    <div className={classes["category"]}>
      <img src={props.banner} alt="banner" className={classes["banner"]} />
      <div className={classes["category-indexSort"]}>
        <p>
          <span>Showing 1-10 results</span> of {amount} products
        </p>
        <div className={classes["category-sort"]}>
          Sort by <IoMdArrowDropdown className={classes["icon"]} />
        </div>
      </div>
      <div className={classes["category-products"]}>
        {all_products_data.map((prod, i) => {
          if (props.category === prod.category) {
            return (
              <Item
                key={i}
                id={prod.id}
                img={prod.img}
                name={prod.name}
                new_price={prod.new_price}
                old_price={prod.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className={classes["category-more"]}>
        More products <AiOutlineArrowRight className={classes["icon"]} />
      </div>
    </div>
  );
}

export default Category;
