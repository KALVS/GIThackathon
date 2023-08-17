import React from "react";
import classes from "./HomeHero.module.css";
import planetImage from "../../assets/Planet Earth and the sign of recycling.svg";
import { Button } from "react-bootstrap";
function HomeHero() {
  return (
    <div className={classes["homehero-container"]}>
      <div className={classes["text-wrapper"]}>
        <h1 className=" h1 display-5 fw-bold mb-4 ">Make a difference for your community.</h1>
        <p>Recycle with GreenTribe, your tribe.</p>
        <Button variant="success" className="px-5 py-3">
          Get Started Today
        </Button>
      </div>{" "}
      <div>
        <img src={planetImage} alt="" />
      </div>
    </div>
  );
}

export default HomeHero;
