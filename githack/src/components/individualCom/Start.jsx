import React from "react";
import RaisedHands from "../../assets/unsplash_UygW_kIv2A4.png";
import Spare from "../../assets/unsplash_lvWw_G8tKsk.png";
import classes from "./IndIntro.module.css";
import { Button } from "react-bootstrap";
function Start() {
  return (
    <>
      <div className={classes["indinto-container"]}>
        <h2>Jumpstart your GreenTribe Journey</h2>
        <p className="mb-5">
          Gather recyclables, engage friends, and calculate your progress. Join the Green Tribe,
          <br /> enjoy cleaner surroundings, and inspire others. Together, we thrive for a greener future!
        </p>
        <Button variant="success" className="px-5 py-3 w-75">
          Sign Up
        </Button>
      </div>

      <div className={classes["starts-wrapper"]}>
        <div>
          <img src={RaisedHands} alt="" className="mb-3" />
          <h3 className="fs-5">Help the Community</h3>
          <p>
            Imagine cleaner streets, oceans, and air. By collecting recyclables regularly, you can make this happen.
            Whenever you need to, you can schedule pickups or drop off more recyclables. Tell others about it, too!
            Share your progress and see how your friends are doing on social media. The more people helping, the better
            our community will be!
          </p>
        </div>
        <div>
          <img src={Spare} alt="" className="mb-3" />
          <h3 className="fs-5">Make Spare Cash</h3>
          <p>
            Collecting recyclables doesnt just make our world cleaner it can also put some extra coins in your pocket!
            After youve gathered up your recyclables youve got choices. Instead of paying any fees, you can actually
            drop off your recyclables and, potentially earn cash rewards. While you’re doing your part for the
            environment, you can also do your part for your finances.
          </p>
        </div>
      </div>
    </>
  );
}

export default Start;
