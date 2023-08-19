import React from "react";
import classes from "./Investor.module.css";
import Handshake from "../../assets/Handshake.svg";
import Bribery from "../../assets/Bribery.svg";
import Meeting from "../../assets/Female Meeting.svg";

function InvesMap() {
  return (
    <div className="p-5">
      <center>
        <h2>Harness the Power of Our Map and Connection Tools</h2>
        <p className="fw-medium">
          Discover simplicity in recycling and business expansion. Our user-friendly map empowers <br />
          efficient recycling practices, boosting your profits effortlessly
        </p>

        <div className={classes["partner-step-container"]}>
          <div>
            <div className={classes["partner-step-wrapper"]}>
              <span className="rounded">
                {" "}
                <img src={Handshake} alt="" />
              </span>
              <div className="text-start">
                <h3>Use Recycling Partners for Sales Opportunities</h3>
                <p>
                  No need for comprehensive services. Offer pickups? Collaborate with processing centers. Prefer
                  processing? Partner with pickup and sales hubs. Maximize sales opportunities for you and partners!
                </p>
              </div>
            </div>
            <div className={classes["partner-step-wrapper"]}>
              <span className="rounded">
                {" "}
                <img src={Meeting} alt="" />
              </span>
              <div className="text-start">
                <h3>Enhanced Interaction and Reliable Pickups</h3>
                <p>
                  Invite customers to seek vital recycling services, while also receiving real-time alerts about their
                  pickup needs. Our approach saves resources, maintains reliability, and minimizes uncertainty in
                  scheduling
                </p>
              </div>
            </div>
            <div className={classes["partner-step-wrapper"]}>
              <span className="rounded">
                {" "}
                <img src={Bribery} alt="" />
              </span>
              <div className="text-start">
                <h3>Strategic Expansion Planning</h3>
                <p>
                  Utilize our map to identify underserved regions, guiding your company's expansion efforts to areas
                  with high demand and growth potential
                </p>
              </div>
            </div>
          </div>

          <div className="h-100 w-100 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15854.902635574226!2d3.3892903999999997!3d6.556276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1692437267333!5m2!1sen!2sng"
              width="500"
              height="600"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </center>
    </div>
  );
}

export default InvesMap;
