import classes from "./Footer.module.css";

import logo from "../imgs/logo-predator.png";

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
          <li className={classes["footer-link"]}>About</li>
          <li className={classes["footer-link"]}>Contact</li>
          <li className={classes["footer-link"]}>Products</li>
          <li className={classes["footer-link"]}>Shops</li>
          <li className={classes["footer-link"]}>Terms</li>
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
