import classes from "./Crew.module.css";

import about_crew from "../imgs/crew/crew";

// function Crew() {
//   return (
//     <div className={classes["crew-container"]}>
//       <h2>Get Know Our Team</h2>
//       <hr />
//       <div className={classes["crew-wrapper"]}>
//         <div className={classes["team-member--container"]}>
//           <div className={classes["container-left"]}>
//             <img src={crew_member} alt="team member" />
//           </div>
//           <div className={classes["container-right"]}>
//             <div>
//               <h3>#SNOWBOARDING</h3>
//               <h3>#HOCKEY</h3>
//             </div>
//             <p>
//               Hi, I'm Paweł Nowak, a passionate specialist in snowboarding and
//               hockey gear. With a background as a former hockey player, I bring
//               extensive knowledge to help you make the most of your experience
//               on the snow or ice. I prioritize quality and functionality,
//               ensuring you have the best equipment for optimal performance.
//               Let's ride and play hard!
//             </p>
//             <h3>Paweł Nowak</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Crew() {
  return (
    <div className={classes["crew-container"]}>
      <h2>Get To Know Our Crew</h2>
      <hr />
      <div className={classes["crew-wrapper"]}>
        {about_crew.map((member, i) => {
          return (
            <div
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
                  {member.hobby.map((h) => (
                    <h3>{h}</h3>
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
