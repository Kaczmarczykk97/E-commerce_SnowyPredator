import classes from "./Contact.module.css";
import contactImg from "../../Components/imgs/logo_predator.png";
import { MdMail } from "react-icons/md";
import { FaPhone, FaFacebookF, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className={classes["contact-wrapper"]}>
      <div className={classes["contact-container--text"]}>
        <h2>Contact with Us</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          corrupti architecto, molestiae illo maxime, veritatis nulla beatae
          atque rerum, velit optio deleniti nobis officiis. Saepe ipsum incidunt
          quaerat dolorem odio.
        </p>
        <div className={classes["socials"]}>
          <div className={classes["social--icon"]}>
            <MdMail className={classes["icon"]} />
            SnowyPredator@gmail.com
          </div>
          <div className={classes["social--icon"]}>
            <FaPhone className={classes["icon"]} />
            +48 123 456 789
          </div>
          <div className={classes["social--icon"]}>
            <FaFacebookF className={classes["icon"]} />
            Facebook
          </div>
          <div className={classes["social--icon"]}>
            <FaInstagram className={classes["icon"]} />
            Instagram
          </div>
        </div>
      </div>
      <div className={classes["contact-container--img"]}>
        <img src={contactImg} alt="snowboarding logo" />
      </div>
    </div>
  );
}

export default Contact;
