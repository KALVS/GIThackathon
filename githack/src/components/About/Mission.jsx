import React from "react";
import EarthIcon from "../../ui/earth";
import classes from "./AboutHero.module.css";

function OurMission() {
  return (
    <>
      <div className={"my-5 mx-5"}>
        <div className={classes["container"]}>
          <h2 className="mb-5">Our Mission</h2>
          <div className="row row-cols-1 row-cols-lg-2 ">
            <div className="col-lg-2 ">
              <EarthIcon />
            </div>
            <div className="col-lg-10">
              <p>
                Lorem ipsum dolor sit amet. 33 veniam eius est impedit modi ids molestiae dolore ex expedita cumque ut doloribus
              </p>
            </div>
          </div>
        </div>
      </div>  
      
    </>
  );
}


export default OurMission;