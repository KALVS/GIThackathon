import React from "react";
import BinForm from "./BinForm";

function ReadyBin() {
  return (
    <div className="my-5">
      <h2 className="h2 mb-2">Ready to get your first bin? Find your drop off location.</h2>
      <p className="mb-4">Enter information below to find the right drop off location for your needs</p>
      <BinForm />
    </div>
  );
}

export default ReadyBin;
