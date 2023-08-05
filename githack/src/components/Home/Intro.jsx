import React from "react";
import Icon173Bin from "../../ui/Bin";
import IconLocateFixed from "../../ui/Locate";
import IconSchedule from "../../ui/Schedule";
import classes from "./HomeHero.module.css";
const whatWeDoData = [
  {
    icon: <Icon173Bin />,
    description: "We give you binds in return for recycling.",
    id: "bin",
  },
  {
    icon: <IconSchedule />,
    description: "No more waiting and hoping, schedule a pick up today",
    id: "schedule",
  },
  {
    icon: <IconLocateFixed />,
    description:
      "No more guessing where to take what. We will help yolocate the right recycling center",
    id: "location",
  },
];
function Intro() {
  return (
    <div className={classes["intro-container"]}>
      <h2>What we do</h2>
      <p className="mb-5">We make it easy to keep your neighborhood clean.</p>
      <ul>
        {whatWeDoData.map((list) => (
          <li key={list.idd}>
            {list.icon}
            <p className="text-center">{list.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Intro;
