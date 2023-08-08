import React from "react";
import cardImage from "../../assets/pexels-cottonbro-studio-6591434.jpg";
import classes from "./HomeHero.module.css";

function Steps() {
  return (
    <div className="">
      <div className={classes["step-wrapper"]}>
        <div style={{ width: "18rem" }} className="position-relative card">
          <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-success p-4 fw-bold fs-5">
            1<span className="visually-hidden">Step</span>
          </span>
          <img
            src={cardImage}
            className="card-img-top"
            alt="..."
            style={{ height: "150px", objectFit: "cover", width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">Trade recycling for bin</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div style={{ width: "18rem" }} className="position-relative card">
          <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-success p-4 fw-bold fs-5">
            2<span className="visually-hidden">Step</span>
          </span>
          <img
            src={cardImage}
            className="card-img-top"
            alt="..."
            style={{ height: "150px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">Trade recycling for bin</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div style={{ width: "18rem" }} className="position-relative card">
          <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-success p-4 fw-bold fs-5">
            3<span className="visually-hidden">Step</span>
          </span>
          <img
            src={cardImage}
            className="card-img-top"
            alt="..."
            style={{ height: "150px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">Trade recycling for bin</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
