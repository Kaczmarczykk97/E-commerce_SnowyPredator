import classes from "./Header.module.css";

import headerIcon from "../imgs/header-icon.png";
import snowboard from "../imgs/header_6.png";

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.textContainer}>
        <img
          src={snowboard}
          alt="new model of snowboard"
          className={classes["img-new-product"]}
        />

        <div className={classes["textContainer--icon-wrapper"]}>
          <h2 className={classes["heading--h2"]}>Check our new collection</h2>
          <img src={headerIcon} alt="occasion icon" />
        </div>
        <p className={classes["text--1"]}>
          New snowboarding equipment delivery
        </p>
        <p className={classes["text--2"]}>
          The new Nitro board model from Nitro Snow's collection is now
          available in store
        </p>

        {/* <button className={classes["header--btn"]}>
          Check new collections
        </button> */}
      </div>
    </div>
  );
}

export default Header;
