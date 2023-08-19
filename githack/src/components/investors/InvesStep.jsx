import React from "react";
import { Card, Button } from "react-bootstrap";
import DropOff from "../../assets/unsplash_CkZF0-etxU8.png";
import Schedule from "../../assets/unsplash_CkZF0-etxU8 (1).png";
import Process from "../../assets/unsplash_BtI8xiaVjBg.png";
import classes from "./Investor.module.css";
import LookScout from "../../assets/Company Logos.svg";
import Cisco from "../../assets/Company Logos (1).svg";
import Paypal from "../../assets/Company Logos (2).svg";
import Amazon from "../../assets/Company Logos (3).svg";

function InvesStep() {
  return (
    <>
      <div className={classes["invesSteps-container"]}>
        <div className="row justify-content-between ">
          <Card style={{ width: "18rem" }} className="shadow">
            <Card.Img variant="top" src={DropOff} />
            <Card.Body>
              <Card.Title className="fs-4 text-center">Become a Drop-off Point</Card.Title>
              <Card.Text className="text-center fw-medium">
                By partnering with us as a drop-off point, your recycling company can play a pivotal role within your
                community. You'll attract environmentally conscious customers thus boosting foot traffic and engagement.
                Joining our network enhances your company's reputation as a responsible community contributor
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
            <Card.Img variant="top" src={Schedule} />
            <Card.Body>
              <Card.Title className="fs-4 text-center">Streamline Your Scheduled Pickups</Card.Title>
              <Card.Text className="text-center fw-medium">
                Our platform offers recycling companies a streamlined solution for scheduled pickups. Efficient route
                optimization and clear communication mean reduced operational costs and improved customer satisfaction.
                By integrating with us, your company can manage pickups seamlessly, ensuring a reliable service for your
                clientele.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Process} />
            <Card.Body>
              <Card.Title className="fs-4 text-center">Process and Resell</Card.Title>
              <Card.Text className="text-center fw-medium">
                Partnering with us opens new avenues for processing and reselling recyclables. Access to a diverse range
                of materials collected by households and businesses enables your recycling company to optimize its
                material stream. This leads to increased efficiency and profitability as you contribute to a circular
                economy
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <center className="my-5">
        <h2 className="mb-3">
          Invest for Impactful Change: Join GreenTribe in
          <br /> Building a Sustainable Tomorrow
        </h2>
        <p className="fw-medium">
          Elevate your recycling company's impact as a drop-off hub, attracting eco-conscious
          <br /> customers for enhanced engagement. Partner with us to maximize profits through
          <br /> streamlined operations and material optimization within a circular economy.
        </p>
        <Button className="w-50 p-3 bg-success">Sign Up</Button>
      </center>

      <center className={classes["partner-wrapper"]}>
        <h2 className="display-3 mb-5 fw-bolder">
          There’s already <span className="text-warning">14 partner</span> <br />
          making a change near you!
        </h2>
        <div className={classes["partner-icon-wrapper"]}>
          <img src={LookScout} alt="" />
          <img src={Cisco} alt="" />
          <img src={Paypal} alt="" />
          <img src={Amazon} alt="" />
        </div>
      </center>
    </>
  );
}

export default InvesStep;
