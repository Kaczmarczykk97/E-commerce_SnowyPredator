import { NavLink } from "react-router-dom";

import classes from "./Footer.module.css";

import logo from "../imgs/logo_predator.png";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  return (
    <footer>
      <div className={classes["footer-container"]}>
        <div className={classes["footer-img"]}>
          <img src={logo} alt="footer logo" />
          <p>SnowyPredator</p>
        </div>
        <ul className={classes["footer-links"]}>
          <li className={classes["footer-link"]}>
            <NavLink>About</NavLink>
          </li>
          <li className={classes["footer-link"]}>
            <NavLink>Contact</NavLink>
          </li>
          <li className={classes["footer-link"]}>
            <NavLink>Products</NavLink>
          </li>
          <li className={classes["footer-link"]}>
            <NavLink>Shops</NavLink>
          </li>
          <li className={classes["footer-link"]}>
            <NavLink>Terms</NavLink>
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
