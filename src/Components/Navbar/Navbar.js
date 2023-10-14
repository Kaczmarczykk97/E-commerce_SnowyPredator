import { NavLink } from "react-router-dom";

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
          <NavLink to="/snowboard">
            <FaSnowboarding className={classes.icon} />
            Snowboard
          </NavLink>
        </li>
        <li className={classes["nav-menu--items"]}>
          <NavLink to="/skiing">
            <FaSkiing className={classes.icon} />
            Skiing
          </NavLink>
        </li>
        <li className={classes["nav-menu--items"]}>
          <NavLink to="/accessories">
            <GiSnowboard className={classes.icon} />
            Accessories
          </NavLink>
        </li>
        <li className={classes["nav-menu--items"]}>
          <NavLink to="/clothes">
            <GiClothes className={classes.icon} />
            Clothes
          </NavLink>
        </li>
      </ul>
      <div className={classes["nav-login--btn"]}>
        <NavLink to="/login">
          <button className={classes.btn}>
            <p>Login</p>
          </button>
        </NavLink>
        <NavLink to="/cart">
          <FaShoppingCart className={classes["icon--cart"]} />
        </NavLink>
        <div className={classes["cart--counter"]}>0</div>
      </div>
    </div>
  );
}

export default Navbar;
