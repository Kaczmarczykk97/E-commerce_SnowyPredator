import { useState } from "react";

import classes from "./ProductDescription.module.css";

function ProductDescription() {
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            suscipit mi. Nunc nec justo ac ipsum ullamcorper tempor quis quis
            felis. Duis eget leo vitae sapien ultricies semper ut a libero.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            suscipit mi. Nunc nec justo ac ipsum ullamcorper tempor quis quis
            felis. Duis eget leo vitae sapien ultricies semper ut a libero.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            suscipit mi. Nunc nec justo ac ipsum ullamcorper tempor quis quis
            felis. Duis eget leo vitae sapien ultricies semper ut a libero.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            suscipit mi. Nunc nec justo ac ipsum ullamcorper tempor quis quis
            felis. Duis eget leo vitae sapien ultricies semper ut a libero.
          </p>
        </div>
        <div
          className={`${classes["tab_content"]} ${classes["tab_content--2"]} ${
            activeTab === "2" ? classes["tab_content--active"] : ""
          }`}
        >
          <div>
            <p className={classes["parameter"]}>Parameter_1:</p>
            <p>XXX</p>
          </div>
          <div>
            <p className={classes["parameter"]}>Parameter_2:</p>
            <p>XXX</p>
          </div>
          <div>
            <p className={classes["parameter"]}>Parameter_3:</p>
            <p>XXX</p>
          </div>
          <div>
            <p className={classes["parameter"]}>Parameter_4:</p>
            <p>XXX</p>
          </div>

          <div>
            <p className={classes["parameter"]}>Parameter_5:</p>
            <p>XXX</p>
          </div>
          <div>
            <p className={classes["parameter"]}>Parameter_6:</p>
            <p>XXX</p>
          </div>
          <div>
            <p className={classes["parameter"]}>Parameter_7:</p>
            <p>XXX</p>
          </div>
          <div>
            <p className={classes["parameter"]}>Parameter_8:</p>
            <p>XXX</p>
          </div>
        </div>
        <div
          className={`${classes["tab_content"]} ${classes["tab_content--3"]} ${
            activeTab === "3" ? classes["tab_content--active"] : ""
          }`}
        >
          <p>Reviews</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
