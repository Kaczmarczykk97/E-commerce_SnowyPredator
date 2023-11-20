import { NavLink } from "react-router-dom";
import { useContext } from "react";

import ShopContext from "../../Context/ShopContext";

import classes from "./Navbar.module.css";

import logo from "../imgs/logo_predator.png";

import { FaShoppingCart, FaSkiing, FaSnowboarding } from "react-icons/fa";
import { GiSnowboard, GiClothes } from "react-icons/gi";

function Navbar() {
  const { getTotalCartItems, scrollTop } = useContext(ShopContext);

  return (
    <div className={classes.navbar}>
      <div className={classes["navbar-logo--wrapper"]}>
        <NavLink to="/" onClick={scrollTop}>
          <img src={logo} className={classes.logo} alt="SnowyPredator's logo" />
          <p>SnowyPredator</p>
        </NavLink>
      </div>
      <ul className={classes["nav-menu"]}>
        <li className={classes["nav-menu--items"]}>
          <NavLink to="/snowboard" onClick={scrollTop}>
            <FaSnowboarding className={classes.icon} />
            Snowboard
          </NavLink>
        </li>
        <li className={classes["nav-menu--items"]}>
          <NavLink to="/skiing" onClick={scrollTop}>
            <FaSkiing className={classes.icon} />
            Skiing
          </NavLink>
        </li>
        <li className={classes["nav-menu--items"]}>
          <NavLink to="/accessories" onClick={scrollTop}>
            <GiSnowboard className={classes.icon} />
            Accessories
          </NavLink>
        </li>
        <li className={classes["nav-menu--items"]}>
          <NavLink to="/clothes" onClick={scrollTop}>
            <GiClothes className={classes.icon} />
            Clothes
          </NavLink>
        </li>
      </ul>
      <div className={classes["nav-login--btn"]}>
        <NavLink to="/login" onClick={scrollTop}>
          <button className={classes.btn} />
        </NavLink>
        <NavLink to="/cart" onClick={scrollTop}>
          <FaShoppingCart className={classes["icon--cart"]} />
        </NavLink>
        <div className={classes["cart--counter"]}>{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
