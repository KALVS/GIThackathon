import React from "react";
import classes from "./HomeHero.module.css";
import { Button } from "react-bootstrap";
function HomeHero() {
  return (
    <div className={classes["homehero-container"]}>
      {" "}
      <div className={classes["homehero-overlay"]}>
        <div className={classes["text-wrapper"]}>
          <h1>Make a difference for your community.</h1>
          <Button variant="success" className="px-5 py-3">
            Get Started Today
          </Button>
        </div>
      </div>{" "}
    </div>
  );
}

export default HomeHero;
