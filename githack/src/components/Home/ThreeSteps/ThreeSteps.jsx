import React from "react";
import classes from "./ThreeSteps.module.css";
import TwoArrows from "../../../ui/RotatingArrows";

function ThreeSteps() {
  return (
    <>
      <div className={"my-5 mx-5"}>
        <div className={classes["container"]}>
          <h2 className="mb-5">How does this work? Hint: It{"'"}s simple!</h2>
          <div className="row row-cols-1 row-cols-lg-2 text-center mb-4">
            <div className="col-lg-2 d-flex align-items-center justify-content-center">
              <TwoArrows />
            </div>
            <div className="col-lg-10">
              <p>
                Lorem ipsum dolor sit amet. 33 veniam eius est impedit modi id
                molestiae dolore ex expedita cumque ut doloribus
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={"my-5 mx-5"}>
        <div className={classes["container"]}>
          <h2 className="mb-5">3 easy steps</h2>
        </div>
      </div>
    </>
  );
}

export default ThreeSteps;
