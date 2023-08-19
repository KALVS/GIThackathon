import React from "react";
import classes from "./Investor.module.css";
import { Button } from "react-bootstrap";
function InvesHero() {
  return (
    <div className={classes["investor-container"]}>
      <div className={classes["investor-overlay"]}>
        <div className={classes["text-wrapper"]}>
          <h1 className="display-3 fw-bolder mb-3">
            Invest in Sustainability
            <br /> for a Brighter Future!
          </h1>
          <p className="fw-bold fs-3 mb-3">
            {" "}
            Partner with GreenTribe, Sparking Positive
            <br /> Change for Your Customers
          </p>
          <Button className="bg-success py-2 px-5">Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default InvesHero;
