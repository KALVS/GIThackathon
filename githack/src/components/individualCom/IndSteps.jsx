import React from "react";
import Package from "../../assets/package.png";
import HandShake from "../../assets/handshake.png";
import RecyCleBag from "../../assets/Recyclable packaging.png";
import classes from "./IndIntro.module.css";
function IndSteps() {
  return (
    <div className={classes["ind-steps-wrapper"]}>
      <div className={classes["section1"]}>
        <img src={Package} alt="" />
        <ul>
          <h2>Collect your recyclables.</h2>
          <li> Save cleaned bottles and container</li>
          <li>Get family and friends to help</li>
          <li>Check if you have enough with our value calculation tool</li>
          <li> It’ll take no time at all to get started improving our community!</li>
        </ul>
      </div>
      <div className={classes["ind-steps-wrapper-middle"]}>
        <img src={HandShake} alt="" />
        <ul>
          <h2>Trade them in for a bin</h2>
          <li> Find a recycling center with our center map</li>
          <li>You can now schedule pickup for a small fee·</li>
          <li>Or continue to manage your own drop off and get paid if you drop off enough</li>
        </ul>
      </div>

      <div className={classes["section3"]}>
        <img src={RecyCleBag} alt="" />
        <ul>
          <h2>Recycle with our Tribe!</h2>
          <li>Recycle what you can, often</li>
          <li>Enjoy cleaner streets, oceans, and air</li>
          <li>Share your progress with friends</li>
          <li> Watch our community thrive!</li>
        </ul>
      </div>
    </div>
  );
}

export default IndSteps;
