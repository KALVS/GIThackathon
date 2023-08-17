import React from "react";
import classes from "./ThreeSteps.module.css";

import TwoArrows from "../../../ui/RotatingArrows";

import IconRecycle from "../../../ui/Recycle";
import IconLocateFixed from "../../../ui/Locate";
import IconHomeAssistant from "../../../ui/HomeAss";

function ThreeSteps() {
  return (
    <>
      <div className={"my-5 px-5"}>
        <div className={classes["container"]}>
          <h2 className="mb-5 fs-4">How does this work? Hint: It{"'"}s simple!</h2>
          <div className="row row-cols-1 row-cols-lg-2  mb-4">
            <div className="col-lg-2 d-flex align-items-center justify-content-center bg-success-subtle p-3">
              <TwoArrows />
            </div>
            <div className="col-lg-10">
              <p className="fw-medium">Bring us your recycling, and we will trade your recycling for a bin.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center text-center px-5 gap-3">
        <div className={classes["step-wrapper"]}>
          <h4 className="mb-3 fs-5">Step 1</h4>
          <div className={classes["icon-wrapper"]}>
            <IconLocateFixed />
          </div>
          <p className="my-3"> Find a recycling center near you.</p>
        </div>

        <div className={classes["step-wrapper"]}>
          <h4 className="mb-3 fs-5">Step 2</h4>
          <div className={classes["icon-wrapper"]}>
            <IconRecycle />
          </div>
          <p className="my-3">Trade in a bag of recycling for a free bin.</p>
        </div>

        <div className={classes["step-wrapper"]}>
          <h4 className="mb-3 fs-5">Step 3</h4>
          <div className={classes["icon-wrapper"]}>
            <IconHomeAssistant />
          </div>
          <p className="my-3"> Make a free account to schedule pickup.</p>
        </div>
      </div>

      <div className={classes["signUpWrapper"]}>
        <button>Individual Sign up</button>
        <button>Investor Sign up</button>
      </div>
    </>
  );
}

export default ThreeSteps;
