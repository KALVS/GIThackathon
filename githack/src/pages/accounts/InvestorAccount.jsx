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

function InvestorAccount() {
  const { currentUser } = UserAuth();
  return (
    <div className={`p-5 ${classes["investor-account-page"]}`}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        {currentUser.photoURL && <img src={currentUser.photoURL} alt="" />}

        <h1>Your Recycling Centers</h1>
        <Button className="bg-white text-black border-2 border-success">Add New</Button>
      </div>
      <div className={`p-3 rounded-1 ${classes["investor-account-head"]} text-white `}>
        <div className="d-flex justify-content-between align-items-center">
          <h2>{currentUser.displayName || "IntRec"}</h2>
          <Button className="bg-white text-black border-2 border-success">Edit</Button>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <ul className="list-unstyled">
            {" "}
            <h3>Location</h3>
            <li>
              {" "}
              <address>123 Address street lane lane</address>
            </li>
            <li>province place 00090</li>
          </ul>
          <ul className="list-unstyled">
            <h3>Contact Information</h3>
            <li>www.website.com</li>
            <li>999.9999.9999</li>
            <li>{currentUser.email || "email.website.com"}</li>
          </ul>

          <div className="row row-cols-3 gap-2">
            <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={`Drop Off`}
                  />
                </div>
              ))}
            </Form>
            <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={`Processing`}
                  />
                </div>
              ))}
            </Form>
            <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={`Pick Up`}
                  />
                </div>
              ))}
            </Form>
            <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={`Resale`}
                  />
                </div>
              ))}
            </Form>
          </div>
        </div>
      </div>

      <div className={`py-4 border-top-3 border-success my-3`}>
        <h2>Paired Recycling Centers</h2>
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
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Processing</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Resale</label>
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

export default InvestorAccount;
