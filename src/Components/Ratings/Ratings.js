import classes from "./Ratings.module.css";

import testimonials from "../imgs/testimonials/testimonials";

function Ratings() {
  return (
    <div className={classes["rating-container"]}>
      <h2>Explore How Cusomers Rate Our Store</h2>
      <hr />
      <div className={classes["rating-wrapper"]}>
        {testimonials.map((testimonial, i) => {
          return (
            <div className={classes["rate"]} key={i}>
              <div
                className={classes["container-img"]}
                style={{
                  backgroundImage: `url(${testimonial.img})`,
                }}
              />
              <p>"{testimonial.text}."</p>
              <h3>{testimonial.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Ratings;
