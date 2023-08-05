import React from "react";
import IconHomeAssistant from "../../ui/HomeAss";
import IconDollar from "../../ui/Dollar";
import IconPeopleArrows from "../../ui/People";
import { Button } from "react-bootstrap";
import classes from "./Intro.module.css";

function Impact() {
  return (
    <div className={"my-5 mx-5"}>
      <div className={classes["impactContainer"]}>
        <h2 className="mb-5">Community Impact</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 text-center mb-4">
          <div className={classes["impactWrapper"]}>
            <IconHomeAssistant />
            <h3 className="mt-3">Easier recycling</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              tenetur eveniet temporibus facilis!
            </p>
          </div>
          <div className={classes["impactWrapper"]}>
            <IconDollar />
            <h3 className="mt-3">More jobs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              tenetur eveniet temporibus facilis!
            </p>
          </div>
          <div className={classes["impactWrapper"]}>
            <IconPeopleArrows />
            <h3 className="mt-3">Cleaner communitys</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              tenetur eveniet temporibus facilis!
            </p>
          </div>
        </div>
        <p className="text-center">
          You can make a difference for your community.
        </p>
        <span className={classes["signUpContainer"]}>
          <Button
            className={"text-center py-3" && classes["signUpButton"]}
            variant="success"
          >
            Sign Up
          </Button>
        </span>
      </div>
    </div>
  );
}

export default Impact;
