import React from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import MyMap from "../../components/Home/MapComponents/Map";
import { useNavigate } from "react-router-dom";

function ThirdHouseHoldFlow() {
  const navigate = useNavigate();
  return (
    <div className="p-5">
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
      <div className="text-end text-xxl-end mb-5">
        <Button className="bg-success" onClick={navigate("/myaccount")}>
          Take me to my Account
        </Button>
      </div>
      <div>
        <MyMap />
      </div>
    </div>
  );
}

export default ThirdHouseHoldFlow;
