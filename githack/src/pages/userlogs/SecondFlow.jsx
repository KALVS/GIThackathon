import React, { useState } from "react";
import questionImg from "../../assets/Woman leaning on a question mark (1).svg";
import classes from "./Flow.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SecondFlow() {
  const navigate = useNavigate();

  const [houseHold, setHouseHold] = useState(true);
  const HouseHoldFlowHandler = function () {
    console.log("individual");
    setHouseHold(true);
    navigate("/householdflow3");
  };
  const investorFlowHandler = function () {
    console.log("investor");
    setHouseHold(false);
    navigate("/investorflow3");
  };
  return (
    <div className={classes["second-flow-container"]}>
      <img src={questionImg} alt="" />
      <div>
        <h1>What kind of recycler are you?</h1>
        <p>
          We offer individual and enterprise recycling solutions.
          <br /> Which do you need to sign up for today?
        </p>
        <div className="d-flex flex-column gap-2">
          <Button onClick={HouseHoldFlowHandler} className="bg-white text-dark border border-2 border-success">
            Solo or Household
          </Button>
          <Button onClick={investorFlowHandler} className="bg-white text-dark border border-2 border-success">
            Investor
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SecondFlow;
