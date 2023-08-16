import React from "react";
import EarthIcon from "../../ui/earth";
import classes from "./AboutHero.module.css";

function AboutUs() {


  return (
    <>
     <div className={"my-5 mx-5"}>
  <div className={classes["intro-container"]}>
    <h2>What we do</h2>
    <div style={{ display: "flex", alignItems: "center" }}>
      <EarthIcon />
      <p style={{ alignSelf: "center", marginLeft: "10px" }}>We make it easy to keep your neighborhood clean.</p>
    </div>
  </div>
  <div className={classes["intro-container"]}>
    <h2>Our Mission</h2>
    <div style={{ display: "flex", alignItems: "center" }}>
      <EarthIcon />
      <p style={{ alignSelf: "center", marginLeft: "10px" }}>We make it easy to keep your neighborhood clean.</p>
    </div>
  </div>
</div>

      
    </>
  );
}


export default AboutUs;