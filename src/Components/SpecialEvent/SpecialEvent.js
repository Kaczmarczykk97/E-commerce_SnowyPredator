import classes from "./SpecialEvent.module.css";
import { RxDoubleArrowRight } from "react-icons/rx";
import special_event_offer from "../imgs/special_event_offer.png";

function SpecialEvent() {
  return (
    <div className={classes["specialEvent-container"]}>
      <h2>SnowyPredator Winter Sports Festival</h2>
      <hr />
      <div className={classes["specialEvent-wrapper"]}>
        <div className={classes["specialEvent-wrapper--left"]} />
        <div className={classes["specialEvent-wrapper--right"]}>
          <img src={special_event_offer} alt="offer mark" />

          <h4>Freestyle Competitions:</h4>
          <div>
            <RxDoubleArrowRight className={classes["icon"]} />
            <p>Jump and trick contests on a specially prepared slope.</p>
          </div>
          <div>
            <RxDoubleArrowRight className={classes["icon"]} />
            <p>
              Prizes for winners, as well as categories for the most creative
              tricks.
            </p>
          </div>
          <h4>Skiing and Snowboarding Lessons:</h4>
          <div>
            <RxDoubleArrowRight className={classes["icon"]} />
            <p>Free skiing and snowboarding lessons for beginners.</p>
          </div>
          <div>
            <RxDoubleArrowRight className={classes["icon"]} />
            <p>
              Experienced instructors helping newcomers gain confidence on the
              slopes.
            </p>
          </div>
          <h4>Autograph Sessions and Star Meetings:</h4>
          <div>
            <RxDoubleArrowRight className={classes["icon"]} />
            <p>
              Chance to meet and get autographs from well-known winter sports
              athletes.
            </p>
          </div>
          <div>
            <RxDoubleArrowRight className={classes["icon"]} />
            <p>
              Q&A sessions where participants can ask questions to their idols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialEvent;
