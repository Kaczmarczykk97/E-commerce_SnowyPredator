import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import classes from "./Crew.module.css";

import about_crew from "../imgs/crew/crew";

function Crew() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={classes["crew-container"]}>
      <h2 data-aos="fade-right">Get To Know Our Crew</h2>
      <hr />
      <div className={classes["crew-wrapper"]}>
        {about_crew.map((member, i) => {
          return (
            <div
              data-aos="fade-up"
              key={i}
              className={`${classes["team-member--container"]} ${
                i % 2 !== 0 ? classes["odd-index"] : ""
              }`}
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.3)), url(${member.background})`,
              }}
            >
              <div className={classes["container-left"]}>
                <img src={member.team_member_img} alt="team member" />
              </div>
              <div className={classes["container-right"]}>
                <div>
                  {member.hobby.map((h, i) => (
                    <h3 key={i}>{h}</h3>
                  ))}
                </div>
                <p>{member.about}</p>
                <h3>{member.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Crew;
