import { useContext } from "react";

import classes from "./ScrollToTopArrow.module.css";
import { FaArrowAltCircleUp } from "react-icons/fa";

import ShopContext from "../../Context/ShopContext";

function ScrollToTopArrow() {
  const { scrollTop } = useContext(ShopContext);

  const reset = function () {
    scrollTop();
  };

  return (
    <div className={classes["arr-container"]} onClick={reset}>
      <FaArrowAltCircleUp className={classes["arr-icon"]} />
    </div>
  );
}

export default ScrollToTopArrow;
