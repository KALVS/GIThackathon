import React from "react";
import BinForm from "./BinForm";

function ReadyBin() {
  return (
    <div className="m-5">
      <h2>Ready to get your first bin? Find your drop off location.</h2>
      <p>
        Enter information below to find the right drop off location for your
        needs
      </p>
      <BinForm />
    </div>
  );
}

export default ReadyBin;
