import { NavLink } from "react-router-dom";
import { useContext } from "react";

import ShopContext from "../../Context/ShopContext";

import classes from "./Navbar.module.css";

import logo from "../imgs/logo_predator.png";

import { FaShoppingCart, FaSkiing, FaSnowboarding } from "react-icons/fa";
import { GiSnowboard, GiClothes } from "react-icons/gi";

function Navbar() {
  const { getTotalCartItems, scrollTop, setVisibleProducts } =
    useContext(ShopContext);

  const reset = function () {
    scrollTop();
    setVisibleProducts(10);
  };

  return (
    <div className={classes.navbar}>
      <div className={classes["navbar-logo--wrapper"]}>
        <NavLink to="/" onClick={reset}>
          <img src={logo} className={classes.logo} alt="SnowyPredator's logo" />
          <p>SnowyPredator</p>
        </NavLink>
      </div>
      <ul className={classes["nav-menu"]}>
        <li className={classes["nav-menu--items"]}>
          <NavLink to="/snowboard" onClick={reset}>
            <FaSnowboarding className={classes.icon} />
            Snowboard
          </NavLink>
        </li>
        <li className={classes["nav-menu--items"]}>
          <NavLink to="/skiing" onClick={reset}>
            <FaSkiing className={classes.icon} />
            Skiing
          </NavLink>
        </li>
        <li className={classes["nav-menu--items"]}>
          <NavLink to="/accessories" onClick={reset}>
            <GiSnowboard className={classes.icon} />
            Accessories
          </NavLink>
        </li>
        <li className={classes["nav-menu--items"]}>
          <NavLink to="/clothes" onClick={reset}>
            <GiClothes className={classes.icon} />
            Clothes
          </NavLink>
        </li>
      </ul>
      <div className={classes["nav-login--btn"]}>
        <NavLink to="/login" onClick={reset}>
          <button className={classes.btn} />
        </NavLink>
        <NavLink to="/cart" onClick={reset}>
          <FaShoppingCart className={classes["icon--cart"]} />
        </NavLink>
        <div className={classes["cart--counter"]}>{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
