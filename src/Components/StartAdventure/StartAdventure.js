import classes from "./StartAdventure.module.css";

import { FaTruck, FaMedal, FaCoins } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";

function StartAdventure() {
  return (
    <div className={classes["startAdventure-container"]}>
      <div className={classes["textContainer-left"]}>
        <h2>Why Start With Us?</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit autem, minus modi saepe, quae enim quasi nihil adipisci
          sapiente tenetur explicabo voluptates dignissimos fugiat alias.
        </p>
        <ul>
          <li>
            <RiUserStarFill className={classes["icon"]} />
            10 years experience
          </li>
          <li>
            <FaMedal className={classes["icon"]} />
            Top-notch quality
          </li>
          <li>
            <MdOutlineDesignServices className={classes["icon"]} />
            Modern design
          </li>
          <li>
            <FaCoins className={classes["icon"]} />
            Unbeatable winter gear deals
          </li>
          <li>
            <FaTruck className={classes["icon"]} />
            Delivering before the first snowfall
          </li>
        </ul>
      </div>
      <div className={classes["imgContainer-right"]} />
    </div>
  );
}

export default StartAdventure;
