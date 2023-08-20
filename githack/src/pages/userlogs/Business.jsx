import React from "react";
import BusinessForm from "./BusinessForm";

function Business() {
  return (
    <div className="p-5 ">
      <h1 className="text-center">Business Information</h1>
      <p className="text-center mb-5">
        Please enter the business information for the recycling center you would like to <br />
        register. Edits can be made and additional addresses can be added later
      </p>
      <center>
        <BusinessForm />
      </center>
    </div>
  );
}

export default Business;
