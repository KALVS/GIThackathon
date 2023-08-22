import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";
import classes from "./About.module.css";
function Faq() {
  return (
    <div className={classes["faq-container"]}>
      <h1 className="mb-5">FAQ’s</h1>
      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How many bins can I get?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What if no one comes when I request a pick up?</Accordion.Header>
          <Accordion.Body>Please call +234-40-1111-00000 and we will assist you.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Can I get a broken bin replaced?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <center>
        <h2 className="mb-5">Make a difference in your community.</h2>
        <div className="d-flex gap-3 justify-content-center ">
          <Button className="bg-success p-3 fw-medium text-white">Individual Sign Up</Button>
          <Button className="bg-success p-3 fw-medium text-white">Individual Sign Up</Button>
        </div>
      </center>
    </div>
  );
}

export default Faq;
