import React from "react";
import IconHomeAssistant from "../../ui/HomeAss";
import easierRec from "../../assets/pexels-anna-shvets-3746333 1.png";
import moreJobs from "../../assets/1200x771 1.png";
import kid from "../../assets/oyemike-princewill-4BvH27qTJ58-unsplash 1.png";
import { Button } from "react-bootstrap";
import classes from "./Intro.module.css";
const myImpact = [
  {
    title: "Easier recycling",
    img: easierRec,
    description: "No more wondering who is going to pick up all your recyclables.",
    id: "easy rec",
  },
  {
    title: "Easier recycling",
    img: moreJobs,
    description: "No more wondering who is going to pick up all your recyclables.",
    id: "nojob",
  },
  {
    title: "Easier recycling",
    img: kid,
    description: "No more wondering who is going to pick up all your recyclables.",
    id: "cleaner",
  },
];
function Impact() {
  return (
    <div className={"my-5"}>
      <div className={classes["impactContainer"]}>
        <h2 className="mb-5 fs-3">Community Impact</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 text-center mb-4">
          {myImpact.map((impact) => (
            <div key={impact.id}>
              <div className={classes["image-container"]}>
                <img src={impact.img} alt="Your Image" className={classes["round-image"]} />
              </div>
              <h2 className="fs-4 mb-3">{impact.title}</h2>
              <p className="w-50 text-center m-auto">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Impact;
