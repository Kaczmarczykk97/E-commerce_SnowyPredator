import { useContext, useState, useEffect } from "react";
import classes from "./ProductDisplay.module.css";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import ShopContext from "../../../Context/ShopContext";

const clothesSize = ["S", "M", "L", "XL"];
const equipmentsSize = ["150", "155", "160", "165"];

function ProductDisplay(props) {
  const [rating, setRating] = useState([]);
  useEffect(() => {
    setRating(generateRating());
  }, []);
  const { product_data } = props;

  const { addToCart } = useContext(ShopContext);

  function generateRating() {
    const rating = [];
    let end = false;

    for (let i = 1; i <= 5; i++) {
      const random = Math.random();

      if (random <= 0.85 && !end) {
        rating.push(<BsStarFill className={classes["icon_star"]} id="1" />);
      } else if (random > 0.85 && !end) {
        rating.push(<BsStarHalf className={classes["icon_star"]} id="2" />);
        end = true;
      } else {
        rating.push(<BsStar className={classes["icon_star"]} id="3" />);
      }
    }
    return rating;
  }

  return (
    <div className={classes["product_display"]}>
      <div className={classes["product_img-container"]}>
        <div className={classes["product_img-container--main_img"]}>
          <img src={product_data.img} alt="product" />
        </div>
        <div className={classes["product_img-container--side_imgs"]}>
          <img src={product_data.img} alt="product" />
          <img src={product_data.img} alt="product" />
          <img src={product_data.img} alt="product" />
        </div>
      </div>
      <div className={classes["product_info-container"]}>
        <h2>{product_data.name}</h2>
        <div className={classes["rating_stars"]}>
          {rating.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
          <p className={classes["rating_amount"]}>
            ({product_data.reviews_amount ? product_data.reviews_amount : 0})
          </p>
        </div>
        <div className={classes["product_price"]}>
          <div className={classes["product_price--new"]}>
            {product_data.new_price} €
          </div>
          <div className={classes["product_price--old"]}>
            {product_data.old_price} €
          </div>
        </div>
        <div className={classes["product_description"]}>
          {product_data.description_short}
        </div>
        <div className={classes["product_select_size"]}>
          <h3>Size:</h3>
          <div className={classes["product-size"]}>
            {product_data.category === "accessories" ||
            product_data.category === "clothes"
              ? clothesSize.map((size, i) => <div key={i}>{size}</div>)
              : equipmentsSize.map((size, i) => <div key={i}>{size}</div>)}
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product_data.id);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDisplay;
