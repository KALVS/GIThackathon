import React from "react";
import classes from "./AboutHero.module.css";
import { Button } from "react-bootstrap";
function AboutPage() {
  return (
    <div className={classes["homehero-container"]}>
      {" "}
      <div className={classes["homehero-overlay"]}>
        <div className={classes["text-wrapper"]}>
          <h1 className=" h1 display-3 fw-bold">
            Make a difference for your community.
          </h1>
          <Button variant="success" className="px-5 py-3">
            Get Started Today
          </Button>
        </div>
      </div>{" "}
    </div>
  );
}

export default AboutPage;