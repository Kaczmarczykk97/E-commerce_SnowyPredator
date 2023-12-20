import logos from "../imgs/sponsors_logo/logos";

import classes from "./Sponsors.module.css";

function Sponsors() {
  return (
    <div className={classes["sponsors-container"]}>
      <h2>Our Partners</h2>
      <hr />
      <div className={classes["logos-container"]}>
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
