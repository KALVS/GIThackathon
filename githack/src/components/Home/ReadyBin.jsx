import React from "react";
import BinForm from "./BinForm";
import binImage from "../../assets/purple with yellow truck.png";
import binSvg from "../../assets/purple with yellow truck.svg";

function ReadyBin() {
  return (
    <div className="my-5 px-5">
      <h2 className="h2 mb-2 fs-3" style={{ color: "#347347" }}>
        Ready to get your first bin? Find your drop off location.
      </h2>
      <div className="d-flex gap-5 align-items-center my-5">
        <img src={binSvg} alt="" />
        <p className="mb-4 fw-medium fs-4">
          Enter information below to find the right drop off location for your needs
        </p>
      </div>
      <BinForm />
    </div>
  );
}

export default ReadyBin;
