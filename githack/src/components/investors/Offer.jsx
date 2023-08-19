import React from "react";
import { Button } from "react-bootstrap";
import classes from "./Investor.module.css";
function Offer() {
  return (
    <center className={classes["offer-wrapper"]}>
      <h2 className="mb-3">GreenTribe Offers Countless Benefits for Your Company</h2>
      <p className="fw-medium mb-5">
        Partner with us to drive environmental change, while ensuring robust returns on investment. From drop-off
        <br /> points to streamlined pickups and recycling centers, our network offers versatile avenues for profit.
        Join a<br />
        responsible tribe that enhances communities while enhancing your brand reputation
      </p>
      <Button className="w-50 bg-success p-2">Sign Up</Button>
    </center>
  );
}

export default Offer;
