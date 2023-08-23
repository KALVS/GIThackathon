import React from "react";
import classes from "./Account.module.css";
import Form from "react-bootstrap/Form";
import LanguageIcon from "@mui/icons-material/Language";
import { LocalPhone } from "@mui/icons-material";
import { EmailSharp } from "@mui/icons-material";
import Footer from "../../components/Home/Footer";
import { Button } from "react-bootstrap";
import { UserAuth } from "../../auth/AuthContext";
import MyMap from "../../components/Home/MapComponents/Map";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";


function IndividualAccount() {
  const { currentUser } = UserAuth();
  return (
    <div className={`p-5 ${classes["individual-account-page"]}`}>
       <div className={`p-3 rounded-1 ${classes["individual-account-head"]} text-white`}>
       <div className="d-flex justify-content-between align-items-center">
        <div>
            <h2>Welcome, {currentUser.displayName || "IntRec"}</h2>
            <p>Join our Naija friends to build a better community!</p>
            <div className="d-flex align-items-center">
              <FacebookIcon fontSize="small" className="social-icon" />
              <TwitterIcon fontSize="small" className="social-icon" />
              <InstagramIcon fontSize="small" className="social-icon" />
            </div>
        </div>
        <img src="assets/Recyclable packaging.png" alt="Badge" className="badge-image" />
    </div>
</div>
      <div className={`py-4 border-top-3 border-success my-3`}>
        <h2>Saved Recycling Centers</h2>
        <div className="mt-3 bg-white rounded-2 p-3 shadow-sm">
          <h3>
            {currentUser.displayName || "IntRec"} <LanguageIcon />
          </h3>
          <p>
            123 Address street <LocalPhone />{" "}
          </p>
          <p>
            {currentUser.email || "example.gmail.com"} <EmailSharp />
          </p>
          <h4>Services</h4>
          <div className="row row-cols-2 my-4">
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Drop OFF</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Pick Up</label>
            </div>
          </div>
          <Button className="bg-white text-black border-2 border-success">Schedule</Button>
        </div>
      </div>

      <div className="p-5 bg-white shadow-lg text-center my-3">
        <h2 className="mb-3">Find a Recycling Center</h2>
        <p>
          Our Recycling Centers offer drop-off, pickup, processing, and/or resale
          <br /> services to make the sales easy. Use our map to find and pair with centers!
        </p>
        <Form className="mb-5">
          <p className="fw-medium">Search by postal code or province</p>
          <div className="d-flex gap-2 align-items-center justify-content-center">
            <Form.Control placeholder="First name" className="w-75" />
            <Button className="bg-success"> Search</Button>
            <p>
              Or <span className="text-success text-center fw-bolder">Search Later.</span>
            </p>
          </div>
        </Form>
        <MyMap />
      </div>
      <Footer />
    </div>
  );
}

export default IndividualAccount;
