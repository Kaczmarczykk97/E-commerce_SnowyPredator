import classes from "./About.module.css";

import salesman from "../../Components/imgs/about_salesman.png";

import { RxDoubleArrowRight } from "react-icons/rx";
import { TbTargetArrow } from "react-icons/tb";
import {
  AiFillTool,
  AiFillSignal,
  AiFillWechat,
  AiFillStar,
  AiFillTrophy,
  AiFillThunderbolt,
  AiFillRocket,
} from "react-icons/ai";

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
        <h3>About SnowyPredator</h3>
        <hr />
        <div className={classes["about-tab--wrapper"]}>
          <div className={classes["about-tab--col"]}>
            <div className={classes["tab-col--top"]}>
              <div className={classes["tab-col--top-img"]}>
                <AiFillTool className={classes["icon"]} />
              </div>
              <p>Support:</p>
            </div>
            <div className={classes["tab-col--down"]}>
              <ul>
                <li>
                  <RxDoubleArrowRight className={classes["arr"]} /> Fast and
                  friendly online support 24/7
                </li>
                <li>
                  <RxDoubleArrowRight className={classes["arr"]} /> Secure and
                  easy returns
                </li>
                <li>
                  <RxDoubleArrowRight className={classes["arr"]} /> Satisfaction
                  guarantee for every customer
                </li>
                <li>
                  <RxDoubleArrowRight className={classes["arr"]} /> Dedicated
                  phone assistance
                </li>
              </ul>
            </div>
          </div>
          <div className={classes["about-tab--col"]}>
            <div className={classes["tab-col--top"]}>
              <div className={classes["tab-col--top-img"]}>
                <TbTargetArrow className={classes["icon"]} />
              </div>
              <p>Quality:</p>
            </div>
            <div className={classes["tab-col--down"]}>
              <ul>
                <li>
                  <RxDoubleArrowRight className={classes["arr"]} /> High-quality
                  products from renowned brands
                </li>
                <li>
                  <RxDoubleArrowRight className={classes["arr"]} /> Thorough
                  testing of equipment before introducing it to the offer
                </li>
                <li>
                  <RxDoubleArrowRight className={classes["arr"]} /> Innovative
                  solutions for demanding winter sports enthusiasts
                </li>
              </ul>
            </div>
          </div>
          <div className={classes["about-tab--col"]}>
            <div className={classes["tab-col--top"]}>
              <div className={classes["tab-col--top-img"]}>
                <AiFillSignal className={classes["icon"]} />
              </div>
              <p>Experience:</p>
            </div>
            <div className={classes["tab-col--down"]}>
              <ul>
                <li>
                  <RxDoubleArrowRight className={classes["arr"]} /> Over 10
                  years of experience in the winter sports industry
                </li>
                <li>
                  <RxDoubleArrowRight className={classes["arr"]} /> Trusted
                  reviews from experts and satisfied customers
                </li>
                <li>
                  <RxDoubleArrowRight className={classes["arr"]} /> Active
                  collaboration with professional athletes
                </li>
                <li>
                  <RxDoubleArrowRight className={classes["arr"]} /> Unique
                  atmosphere and passion in every product
                </li>
              </ul>
            </div>
          </div>
          <div className={classes["about-tab--col"]}>
            <div className={classes["tab-col--top"]}>
              <div className={classes["tab-col--top-img"]}>
                <AiFillWechat className={classes["icon"]} />
              </div>
              <p>Community:</p>
            </div>
            <div className={classes["tab-col--down"]}>
              <ul>
                <li>
                  <RxDoubleArrowRight className={classes["arr"]} /> Active
                  involvement in the sports community
                </li>
                <li>
                  <RxDoubleArrowRight className={classes["arr"]} /> Organization
                  of events and contests for our customers
                </li>
                <li>
                  <RxDoubleArrowRight className={classes["arr"]} /> Partner
                  programs supporting local initiatives
                </li>
                <li>
                  <RxDoubleArrowRight className={classes["arr"]} /> Inspiring
                  stories and advice from our community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["aboutSalesman-container"]}>
        <div className={classes["aboutSalesman-container--col"]}>
          <div className={classes["cell"]}>
            <div className={classes["icon-container"]}>
              <AiFillTrophy className={classes["icon"]} />
            </div>
            <h3>Best Winter Gear Store 2023</h3>
            <p>
              We've won the award for the Best Winter Gear Store in 2023,
              recognizing our commitment to providing top-quality gear and
              customer service.
            </p>
          </div>
          <div className={classes["cell"]}>
            <div className={classes["icon-container"]}>
              <AiFillStar className={classes["icon"]} />
            </div>
            <h3>TEXT</h3>
            <p>Tekst</p>
          </div>
        </div>
        <div className={classes["aboutSalesman-container--col"]}>
          <img src={salesman} alt="salesman" />
        </div>
        <div className={classes["aboutSalesman-container--col"]}>
          <div className={classes["cell"]}>
            <div className={classes["icon-container"]}>
              <AiFillRocket className={classes["icon"]} />
            </div>
            <h3>Store's Evolution</h3>
            <p>
              Our store evolves with innovation, introducing groundbreaking
              products and collaborating with winter sports professionals to
              ensure unforgettable shopping experiences.
            </p>
          </div>
          <div className={classes["cell"]}>
            <div className={classes["icon-container"]}>
              <AiFillThunderbolt className={classes["icon"]} />
            </div>
            <h3>Community</h3>
            <p>
              Explore the SnowyPredator community, where passion unites us all!
              We're thrilled to announce that our store has gathered 20,000 fans
              on Facebook, 300,000 on Instagram, and 50,000 on Twitter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
