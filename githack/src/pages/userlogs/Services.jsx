import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
function Services() {
  return (
    <div className="p-5">
      <h1 className="text-center">What services do you offer</h1>
      <p className="text-center mb-5">
        {" "}
        Recycling centers have the option to offer varied services and match with other
        <br /> recycling centers where they’re lacking{" "}
      </p>

      <Form className="fw-medium">
        <Row className="mb-4">
          <Form.Group as={Col}>
            <Form.Check // prettier-ignore
              type="checkbox"
              id="first-checkbox"
              label="Drop Off"
            />{" "}
            <p>
              Provide customers an accessible solution for recycling. At your center, they can trade recyclables for
              recycling bins or cash, championing sustainability effortlessly
            </p>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Check // prettier-ignore
              type="checkbox"
              id="first-checkbox"
              label="Pick Up"
            />{" "}
            <p>
              With a fleet of vehicles and skilled manpower, your team collects recyclables at customers' requests,
              ensuring a hassle-free process from collection to payment
            </p>
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col}>
            <Form.Check // prettier-ignore
              type="checkbox"
              id="first-checkbox"
              label="Processing"
            />{" "}
            <p>
              Give recyclables a purposeful transformation. Your center excels in processing materials, breathing new
              life into them, and reducing waste, aligning with your commitment to environmental responsibility
            </p>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Check // prettier-ignore
              type="checkbox"
              id="first-checkbox"
              label="Resale"
            />{" "}
            <p>
              Connect with interested vendors to extend the life cycle of materials. Your recycled products find new
              markets, generating revenue while contributing to a greener economy
            </p>
          </Form.Group>
        </Row>
      </Form>
      <div className="d-flex gap-5">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15854.902635574226!2d3.3892903999999997!3d6.556276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1692437267333!5m2!1sen!2sng"
            width="500"
            height="600"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Form>
          <h2>What areas do you serve? </h2>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Postal Code or Province</Form.Label>
            <Form.Control type="text" placeholder="postal" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Radius</Form.Label>
            <Form.Control type="text" placeholder="1001" />
          </Form.Group>
          <Button className="bg-white text-black fw-medium border border-2 border-success rounded-1 mb-3 w-100">
            Search this Area
          </Button>
          <Button className="bg-success text-white rounded-1 w-100">Save Selected Area</Button>
        </Form>
      </div>
    </div>
  );
}

export default Services;
