import classes from "./Header.module.css";

import headerIcon from "../imgs/header_icon.png";
import snowboard from "../imgs/header_1.png";
import predatorText from "../imgs/predator_text.png";

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.textContainer}>
        <img
          src={snowboard}
          alt="new model of snowboard"
          className={classes["img-new-product"]}
        />

        <div className={classes["textContainer--heading"]}>
          <h2 className={classes["heading--h2"]}>New</h2>
          <div className={classes["textContainer--heading-icon-wrapper"]}>
            <h2 className={classes["heading--h2"]}>collection</h2>
            <img src={headerIcon} alt="occasion icon" />
          </div>
          <div className={classes.span}>#Snowboard</div>
        </div>

        <p className={classes["text--1"]}>
          New snowboarding equipment delivery
        </p>
        <p className={classes["text--2"]}>
          The new Nitro board model from Nitro Snow's collection is now
          available in store
        </p>

        <button className={classes["header--btn"]}>
          Start to be
          <img
            className={classes["btn--img"]}
            src={predatorText}
            alt="text img"
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
