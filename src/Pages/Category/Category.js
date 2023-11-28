import { useContext, useState } from "react";

import ShopContext from "../../Context/ShopContext";

import Item from "../../Components/Item/Item";

import classes from "./Category.module.css";

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";

function Category(props) {
  const { all_products_data, visibleProducts, setVisibleProducts } =
    useContext(ShopContext);
  const [sortedProducts, setSortedProducts] = useState(all_products_data);
  const [sortOrder, setSortOrder] = useState("asc");

  const amount = all_products_data.filter((prod) => {
    return prod.category === props.category;
  }).length;

  const handleSortByPrice = () => {
    const sorted = [...sortedProducts].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.new_price - b.new_price;
      } else {
        return b.new_price - a.new_price;
      }
    });

    setSortedProducts(sorted);
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const handleLoadMoreProducts = () => {
    const newVisibleProducts = Math.min(visibleProducts + 10, amount);

    setVisibleProducts(newVisibleProducts);
  };

  return (
    <div className={classes["category"]}>
      <img src={props.banner} alt="banner" className={classes["banner"]} />
      <div className={classes["category-indexSort"]}>
        <p>
          <span>Showing 1-{visibleProducts} results</span> of {amount} products
        </p>
        <div className={classes["category-sort"]} onClick={handleSortByPrice}>
          Sort by Price
          {sortOrder === "asc" ? (
            <IoMdArrowDropdown className={classes["icon"]} />
          ) : (
            <IoMdArrowDropup className={classes["icon"]} />
          )}
        </div>
      </div>

      <div className={classes["category-products"]}>
        {sortedProducts
          .filter((prod) => props.category === prod.category)
          .slice(0, visibleProducts)
          .map((prod, i) => (
            <Item
              key={i}
              id={prod.id}
              img={prod.img}
              name={prod.name}
              new_price={prod.new_price}
              old_price={prod.old_price}
            />
          ))}
      </div>
      {visibleProducts < amount && (
        <div
          className={classes["category-more"]}
          onClick={handleLoadMoreProducts}
        >
          More products <AiOutlineArrowRight className={classes["icon"]} />
        </div>
      )}
    </div>
  );
}

export default Category;
