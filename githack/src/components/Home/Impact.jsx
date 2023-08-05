import React from "react";
import IconHomeAssistant from "../../ui/HomeAss";
import IconDollar from "../../ui/Dollar";
import IconPeopleArrows from "../../ui/People";
import { Button } from "react-bootstrap";
import classes from "./HomeHero.module.css";

function Impact() {
  return (
    <div className="my-5 mx-5">
      <h2 className="mb-5">Community Impact</h2>
      <div className={classes["impact-container"]}>
        <div className={classes["impact-wrapper"]}>
          <IconHomeAssistant />
          <h3 className="mt-3">Easier recycling</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            tenetur eveniet temporibus facilis!
          </p>
        </div>
        <div className={classes["impact-wrapper"]}>
          <IconDollar />
          <h3 className="mt-3">Easier recycling</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            tenetur eveniet temporibus facilis!
          </p>
        </div>
        <div className={classes["impact-wrapper"]}>
          <IconPeopleArrows />
          <h3 className="mt-3">Easier recycling</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            tenetur eveniet temporibus facilis!
          </p>
        </div>
      </div>
      <p className="text-center">
        You can make a difference for your community.
      </p>
      <Button className="text-center w-100 py-3" variant="success">
        Sign Up
      </Button>
    </div>
  );
}

export default Impact;
