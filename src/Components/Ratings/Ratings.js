import classes from "./Ratings.module.css";
import customer from "../imgs/customer_1.jpg";

function Ratings() {
  return (
    <div className={classes["rating-container"]}>
      <h2>Explore How Cusomers Rate Our Store</h2>
      <hr />
      <div className={classes["rating-wrapper"]}>
        <div className={classes["rate"]}>
          <img src={customer} alt="customer" />
          <p>
            <span>"</span>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Inventore explicabo quibusdam vel iusto quae expedita cum
            incidunt praesentium odit maiores accusantium amet rem veritatis
            architecto necessitatibus animi obcaecati, eos perspiciatis?
            <span>"</span>
          </p>
          <h3>
            <span>Text</span> designer
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Ratings;
