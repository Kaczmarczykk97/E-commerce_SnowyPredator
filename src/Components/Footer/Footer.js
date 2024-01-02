import { useContext } from "react";
import { NavLink } from "react-router-dom";

import ShopContext from "../../Context/ShopContext";

import classes from "./Footer.module.css";

import logo from "../imgs/logo_predator.png";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  const { scrollTop, setVisibleProducts } = useContext(ShopContext);

  const reset = function () {
    scrollTop();
    setVisibleProducts(10);
  };

  return (
    <footer>
      <div className={classes["footer-container"]}>
        <div className={classes["footer-img"]}>
          <img src={logo} alt="footer logo" />
          <p>SnowyPredator</p>
        </div>
        <ul className={classes["footer-links"]}>
          <li className={classes["footer-link"]}>
            <NavLink to="/about" onClick={reset}>
              About
            </NavLink>
          </li>
          <li className={classes["footer-link"]}>
            <NavLink to="/contact" onClick={reset}>
              Contact
            </NavLink>
          </li>
          <li className={classes["footer-link"]}>
            <NavLink to="/snowboard" onClick={reset}>
              Snowboardig
            </NavLink>
          </li>
          <li className={classes["footer-link"]}>
            <NavLink to="/skiing" onClick={reset}>
              Skiing
            </NavLink>
          </li>
          <li className={classes["footer-link"]}>
            <NavLink to="/accessories" onClick={reset}>
              Accessories
            </NavLink>
          </li>
          <li className={classes["footer-link"]}>
            <NavLink to="/clothes" onClick={reset}>
              Clothes
            </NavLink>
          </li>
          <li className={classes["footer-link"]}>
            <NavLink to="/terms" onClick={reset}>
              Terms
            </NavLink>
          </li>
        </ul>
        <div className={classes["footer-socials"]}>
          <FaFacebookF className={classes["social-icon"]} />
          <FaInstagram className={classes["social-icon"]} />
          <RiTwitterXFill className={classes["social-icon"]} />
        </div>
      </div>
      <div className={classes["footer-copyright"]}>
        <hr />
        <p>© 2023 Kamil Kaczmarczyk. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
