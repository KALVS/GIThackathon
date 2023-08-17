import React from "react";
import classes from "./IndIntro.module.css";
function IndIntro() {
  return (
    <div className={classes["indinto-container"]}>
      <h1 className="mb-3">Joining our Tribe is easy!</h1>
      <p>
        Keeping your neighborhood clean has never been easier! When you recycle with us, you
        <br /> can trade your recyclables for a recycling bin, which our partners will empty upon your <br />
        request. No more waiting around and hoping for a pickup - just schedule it today!
      </p>
    </div>
  );
}

export default IndIntro;
