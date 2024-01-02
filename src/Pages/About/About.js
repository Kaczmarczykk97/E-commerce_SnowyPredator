import classes from "./About.module.css";
import { RxDoubleArrowRight } from "react-icons/rx";
import { TbTargetArrow } from "react-icons/tb";

function About() {
  return (
    <div className={classes["about-container"]}>
      <div className={classes["about-header"]}>
        <h2>Forget winter monotony, embark on an adventure with us!</h2>
        <h3>
          In our store, winter transforms from a season of chilly days to a time
          of exciting snow-filled adventures.
        </h3>
        <button>Check Our YT</button>
      </div>
      <div className={classes["about-tab"]}>
        <h3>TEXT</h3>
        <hr />
        <div className={classes["about-tab--wrapper"]}>
          <div className={classes["about-tab--col"]}>
            <div className={classes["tab-col--top"]}>
              <div className={classes["tab-col--top-img"]}>
                <TbTargetArrow className={classes["icon"]} />
              </div>
              <p>SUPPORT</p>
            </div>
            <div className={classes["tab-col--down"]}>
              <ul>
                <li>
                  <RxDoubleArrowRight /> text
                </li>
                <li>
                  <RxDoubleArrowRight /> text
                </li>
                <li>
                  <RxDoubleArrowRight /> text
                </li>
                <li>
                  <RxDoubleArrowRight /> text
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
