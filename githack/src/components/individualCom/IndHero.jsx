import React from "react";
import RecMachine from "../../assets/recycling machine.png";
import classes from "../Home/HomeHero.module.css";
import { Button } from "react-bootstrap";
function IndHero() {
  return (
    <div className={classes["homehero-container"]}>
      <div className={classes["text-wrapper"]}>
        <h1 className=" h1 display-5 fw-bold mb-4 ">
          Let's make our
          <br /> neighborhoods cleaner
          <br /> and greener together!
        </h1>
        <p>Recycle with GreenTribe, your tribe.</p>
        <Button variant="success" className="px-5 py-3">
          Sign Up
        </Button>
      </div>{" "}
      <div>
        <img src={RecMachine} alt="" />
      </div>
    </div>
  );
}

export default IndHero;
