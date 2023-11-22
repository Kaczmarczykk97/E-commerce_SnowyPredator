import { useState } from "react";

import classes from "./ProductDescription.module.css";
import { BsStarFill } from "react-icons/bs";
import userImg from "../../../Components/imgs/user.png";

function ProductDescription(props) {
  const { product_data } = props;

  const [activeTab, setActiveTab] = useState("1");

  const activeTabHandler = function (e) {
    const current_tab = e.target.getAttribute("data-tab");
    setActiveTab(current_tab);
  };

  return (
    <div className={classes["product_description"]}>
      <div className={classes["options_tab--container"]}>
        <div
          className={`${classes["options_tab--option"]} ${
            activeTab === "1" ? classes["active"] : ""
          }`}
          data-tab="1"
          onClick={activeTabHandler}
        >
          Description
        </div>
        <div
          className={`${classes["options_tab--option"]} ${
            activeTab === "2" ? classes["active"] : ""
          }`}
          data-tab="2"
          onClick={activeTabHandler}
        >
          Parameters
        </div>
        <div
          className={`${classes["options_tab--option"]} ${
            activeTab === "3" ? classes["active"] : ""
          }`}
          data-tab="3"
          onClick={activeTabHandler}
        >
          Reviews
        </div>
      </div>
      <div className={classes["product_description--text_container"]}>
        <div
          className={`${classes["tab_content"]} ${classes["tab_content--1"]} ${
            activeTab === "1" ? classes["tab_content--active"] : ""
          }`}
        >
          <p>{product_data.description_long}</p>
        </div>
        <div
          className={`${classes["tab_content"]} ${classes["tab_content--2"]} ${
            activeTab === "2" ? classes["tab_content--active"] : ""
          }`}
        >
          {product_data.parameters.map((parameter, i) => {
            return (
              <div key={`parameter_${i}`}>
                <p className={classes["parameter"]}>{parameter.parameter}:</p>
                <p>{parameter.value}</p>
              </div>
            );
          })}
        </div>
        <div
          className={`${classes["tab_content"]} ${classes["tab_content--3"]} ${
            activeTab === "3" ? classes["tab_content--active"] : ""
          }`}
        >
          {product_data.review.map((rev, i) => {
            return (
              <div className={classes["review"]} key={`review_${i}`}>
                <div className={classes["img_container"]}>
                  <img src={userImg} alt="anon" />
                </div>
                <div className={classes["stars_column"]}>
                  <p>"{rev.text}"</p>
                  <div className={classes["stars_container"]}>
                    {Array.from({ length: rev.rating }, (value, index) => (
                      <BsStarFill key={index} className={classes["star"]} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
