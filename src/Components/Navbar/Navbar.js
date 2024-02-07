import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import ShopContext from "../../Context/ShopContext";

import classes from "./Navbar.module.css";

import logo from "../imgs/logo_predator.png";

import { FaShoppingCart, FaSkiing, FaSnowboarding } from "react-icons/fa";
import { GiSnowboard, GiClothes } from "react-icons/gi";
import { MdMenu, MdClose } from "react-icons/md";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openedMobileMenu, setOpenedMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(true);
  };

  const closeMobileMenuHandler = () => {
    setMobileMenu(false);
  };

  const openHamburgerMenu = () => {
    setOpenedMobileMenu(true);
  };

  const closeHamburgerMenu = () => {
    setOpenedMobileMenu(false);
  };

  useEffect(() => {
    if (window.innerWidth < 650) {
      mobileMenuHandler();
      openHamburgerMenu();
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 650) {
        closeMobileMenuHandler();
        closeHamburgerMenu();
      }

      if (window.innerWidth < 650) {
        mobileMenuHandler();
        openHamburgerMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { getTotalCartItems, scrollTop, setVisibleProducts } =
    useContext(ShopContext);

  const reset = function () {
    scrollTop();
    setVisibleProducts(10);
  };

  return (
    <nav className={`${mobileMenu ? classes.activeMobile : classes.navbar}`}>
      {mobileMenu && openedMobileMenu && (
        <MdMenu
          className={classes.mobileMenuIcon}
          onClick={closeHamburgerMenu}
        />
      )}
      {!openedMobileMenu && mobileMenu && (
        <MdClose
          className={classes.mobileMenuIcon}
          onClick={openHamburgerMenu}
        />
      )}
      <div className={classes["navbar-logo--wrapper"]}>
        <NavLink to="/" onClick={reset}>
          <img src={logo} className={classes.logo} alt="SnowyPredator's logo" />
          {<p>SnowyPredator</p>}
        </NavLink>
      </div>

      {!openedMobileMenu && (
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
      )}

      {!openedMobileMenu && (
        <div className={classes["nav-login--btn"]}>
          <NavLink to="/login" onClick={reset}>
            <button className={classes.btn} />
          </NavLink>
          <NavLink to="/cart" onClick={reset}>
            <FaShoppingCart className={classes["icon--cart"]} />
          </NavLink>
          <div className={classes["cart--counter"]}>{getTotalCartItems()}</div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
