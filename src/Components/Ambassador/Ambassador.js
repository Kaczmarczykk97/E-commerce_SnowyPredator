import { useState } from "react";

import classes from "./Ambassador.module.css";

import { TfiArrowCircleRight } from "react-icons/tfi";

import quotesMark from "../imgs/quotes_mark.png";
import ambassador from "../imgs/ambassador.png";

function Ambassador() {
  const [visibilityViewMore, setVisibilityViewMore] = useState(false);

  function viewMoreHandler() {
    setVisibilityViewMore((e) => !e);
  }

  return (
    <div className={classes["ambassador-container"]}>
      <div className={classes["ambassador-nav"]}>
        <h2>OUR AMBASSADOR - KAMIL STOCH</h2>
        <button onClick={viewMoreHandler}>
          View More
          <TfiArrowCircleRight className={classes["ambassador-nav--icon"]} />
        </button>
      </div>
      <hr />
      <div className={classes["text-container"]}>
        <div className={classes["text-container--left"]}>
          <div className={classes["text-container--left-1"]}>
            <img src={quotesMark} alt="quotes" />
            <p>
              "As a professional ski jumper, I always seek top-quality equipment
              that meets my expectations. The winter sports equipment store
              consistently delivers gear that helps me achieve the best results.
              Their range includes the latest models of skis, helmets, boots,
              and other essential accessories. Working with them is a pure
              pleasure - I can always rely on expert advice and prompt
              delivery."
            </p>
            <h3>
              Piotr Żyła <span>- Olympic Ski Jumping Champion</span>
            </h3>
          </div>
          <div className={classes["text-container--left-2"]}>
            <p>
              "I am impressed by the professionalism of the winter sports
              equipment store. As a former ski jumper, I value high-quality
              gear, and this store always meets my expectations. The wide
              selection and availability of the latest technologies ensure that
              I am using the best equipment on the market. Collaborating with
              them guarantees satisfaction and safety on the slopes for me."
            </p>
            <h3>
              Adam Małysz <span>- Legendary Polish Ski Jumper</span>
            </h3>
            <img src={quotesMark} alt="quotes" />
          </div>
        </div>
        <div className={classes["text-container--right"]}>
          {visibilityViewMore && (
            <div className={classes["viewMore-container"]}>
              <img src={ambassador} alt="Kamil Stoch" />
              <h3>
                Kamil Stoch <span>- Two-Time Olympic Ski Jumping Champion</span>
              </h3>
              <p>
                "As a professional ski jumper, collaborating with SnowyPredator
                is an honor for me. The store not only offers top-quality winter
                sports equipment but also emphasizes an individual approach to
                customers. As a brand ambassador, I feel that my suggestions and
                requirements are always taken into account. This collaboration
                brings benefits not only for me as an athlete but also for all
                winter sports enthusiasts who can enjoy excellent equipment
                available at SnowyPredator."
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Ambassador;
