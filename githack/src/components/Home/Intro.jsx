import React from "react";
import IconLocateFixed from "../../ui/Locate";
import IconSchedule from "../../ui/Schedule";
import classes from "./HomeHero.module.css";
import IconRecycle from "../../ui/Recycle";
const whatWeDoData = [
  {
    icon: <IconRecycle />,
    description: "Bring us your recycling, and we will trade your recycling for a bin.",
    id: "bin",
  },
  {
    icon: <IconSchedule />,
    description: "Now you can schedule a pick up any day. No more waiting, hoping for a recycling pick up",
    id: "schedule",
  },
  {
    icon: <IconLocateFixed />,
    description: "We ll make it easy for you to find the right recycling center.",
    id: "location",
  },
];
function Intro() {
  return (
    <div className={"my-5 px-5"}>
      <div className={classes["intro-container"]}>
        <h2 className="fs-4">What we do</h2>
        <p className="mb-5 fw-medium">
          When you recycle with us, you can trade your recyclables for a recycling bin, which our partners will empty
          upon your request. No more waiting around and hoping for a pickup just schedule it today!
        </p>
        <ul className={classes["listItems"]}>
          <h2 className="fs-4 mb-3">Keeping your neighborhood clean has never been easier!</h2>
          {whatWeDoData.map((list) => (
            <li key={list.id} className="fw-medium">
              <div className={classes["icon-wrapper"]}>{list.icon}</div>
              <p>{list.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Intro;
