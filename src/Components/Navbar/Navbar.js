import classes from "./Navbar.module.css";

import logo from "../imgs/logo-predator.png";

import { FaShoppingCart, FaSkiing, FaSnowboarding } from "react-icons/fa";
import { GiSnowboard, GiClothes } from "react-icons/gi";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes["navbar-logo--wrapper"]}>
        <img src={logo} className={classes.logo} alt="SnowyPredator's logo" />
        <p>SnowyPredator</p>
      </div>
      <ul className={classes["nav-menu"]}>
        <li className={classes["nav-menu--items"]}>
          <FaSnowboarding className={classes.icon} />
          Snowboard
        </li>
        <li className={classes["nav-menu--items"]}>
          <FaSkiing className={classes.icon} />
          Skiing
        </li>
        <li className={classes["nav-menu--items"]}>
          <GiSnowboard className={classes.icon} />
          Accessories
        </li>
        <li className={classes["nav-menu--items"]}>
          <GiClothes className={classes.icon} />
          Clothes
        </li>
      </ul>
      <div className={classes["nav-login--btn"]}>
        <button className={classes.btn}>
          <p>Login</p>
        </button>
        <FaShoppingCart className={classes["icon--cart"]} />
        <div className={classes["cart--counter"]}>0</div>
      </div>
    </div>
  );
}

export default Navbar;
