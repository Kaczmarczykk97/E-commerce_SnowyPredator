import { NavLink } from "react-router-dom";
import { useContext } from "react";

import ShopContext from "../../Context/ShopContext";

import classes from "./Navbar.module.css";

import logo from "../imgs/logo-predator.png";

import { FaShoppingCart, FaSkiing, FaSnowboarding } from "react-icons/fa";
import { GiSnowboard, GiClothes } from "react-icons/gi";

function Navbar() {
  const { getTotalCartItems } = useContext(ShopContext);
  console.log(getTotalCartItems);
  return (
    <div className={classes.navbar}>
      <div className={classes["navbar-logo--wrapper"]}>
        <NavLink to="/">
          <img src={logo} className={classes.logo} alt="SnowyPredator's logo" />
          <p>SnowyPredator</p>
        </NavLink>
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
        <div className={classes["cart--counter"]}>{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
