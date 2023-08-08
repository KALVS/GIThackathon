import React from "react";
import classes from "./ThreeSteps.module.css";
import TwoArrows from "../../../ui/RotatingArrows";
import OneIcon from "../../../ui/threesteps/one";
import TwoIcon from "../../../ui/threesteps/two";
import ThreeIcon from "../../../ui/threesteps/three";

function ThreeSteps() {
  return (<>
      <div className={"my-5 mx-5"}>
        <div className={classes["container"]}>
          <h2 className="mb-5">How does this work? Hint: It{"'"}s simple!</h2>
          <div className="row row-cols-1 row-cols-lg-2 text-center mb-4">
            <div className="col-lg-2 d-flex align-items-center justify-content-center">
              <TwoArrows />
            </div>
            <div className="col-lg-10">
              <p>
                Lorem ipsum dolor sit amet. 33 veniam eius est impedit modi id molestiae dolore ex expedita cumque ut
                doloribus
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={"my-5 mx-5"}>
        <div className={classes["container"]}>
          <h2 className="mb-5">3 easy steps</h2>
          <div className={classes["cardContainer"]}>
            <div className={classes["card"]}>
              <div className={classes["cardIcon"]}>
                <OneIcon />
              </div>
              <div className={classes["graphic"]}></div>
              <p className={classes["header"]}>Step 1: Trade recycling for bin</p>
              <p className={classes["caption"]}>
                Lorem ipsum dolor sit amet. 33 veniam eius est impedit modi id molestiae dolore ex expedita cumque ut
                doloribus
              </p>
            </div>
            <div className={classes["card"]}>
              <div className={classes["cardIcon"]}>
                <TwoIcon />
              </div>
              <div className={classes["graphic"]}></div>
              <p className={classes["header"]}>Step 2: Create account</p>
              <p className={classes["caption"]}>
                Lorem ipsum dolor sit amet. 33 veniam eius est impedit modi id molestiae dolore ex expedita cumque ut
                doloribus
              </p>
            </div>
            <div className={classes["card"]}>
              <div className={classes["cardIcon"]}>
                <ThreeIcon />
              </div>
              <div className={classes["graphic"]}></div>
              <p className={classes["header"]}>Step 3: Schedule pickups</p>
              <p className={classes["caption"]}>
                Lorem ipsum dolor sit amet. 33 veniam eius est impedit modi id molestiae dolore ex expedita cumque ut
                doloribus
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}  

export default ThreeSteps