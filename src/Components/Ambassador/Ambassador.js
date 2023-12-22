import classes from "./Ambasador.module.css";

import { TfiArrowCircleRight } from "react-icons/tfi";

import quotesMark from "../imgs/quotes_mark.png";

function Ambassador() {
  return (
    <div className={classes["ambassador-container"]}>
      <div className={classes["ambassador-nav"]}>
        <h2>OUR AMBASSADOR - KAMIL STOCH</h2>
        <button>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur minima autem esse exercitationem, assumenda, possimus
              voluptate itaque temporibus eos nulla numquam, labore odit
              eveniet! Iusto dolores deleniti maiores debitis nemo!
            </p>
            <h3>Kamil Stoch</h3>
            <p>Tekst</p>
          </div>
          <div className={classes["text-container--left-2"]}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur minima autem esse exercitationem, assumenda, possimus
              voluptate itaque temporibus eos nulla numquam, labore odit
              eveniet! Iusto dolores deleniti maiores debitis nemo!
            </p>
            <h3>Kamil Stoch</h3>
            <p>Tekst</p>
            <img src={quotesMark} alt="quotes" />
          </div>
        </div>
        <div className={classes["text-container--right"]}></div>
      </div>
    </div>
  );
}

export default Ambassador;
