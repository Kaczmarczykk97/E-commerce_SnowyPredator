import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import logos from "../imgs/sponsors_logo/logos";

import classes from "./Sponsors.module.css";

function Sponsors() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={classes["sponsors-container"]}>
      <h2 data-aos="fade-left">Our Partners</h2>
      <hr />
      <div data-aos="fade-right" className={classes["logos-container"]}>
        {logos.map((sponsor, i) => {
          return (
            <div className={classes["logo-wrapper"]} key={i}>
              <img src={sponsor.logo} alt="sponsors logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sponsors;
