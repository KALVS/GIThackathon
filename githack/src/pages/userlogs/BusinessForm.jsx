import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function BusinessForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="px-5">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label className="fw-medium">Company Name</Form.Label>
          <Form.Control required type="text" placeholder="Company Name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label className="fw-medium">Website</Form.Label>
          <Form.Control required type="text" placeholder="Website" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustomUsername">
          <Form.Label className="fw-medium">Address line</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control type="text" placeholder="Address Line" aria-describedby="inputGroupPrepend" required />
            <Form.Control.Feedback type="invalid">Please add an Address</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label className="fw-medium">Phone Number</Form.Label>
          <Form.Control required type="text" placeholder="Phone Number" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustomAddressLine">
          <Form.Label className="fw-medium">Address line 2</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control type="text" placeholder="Address Line" aria-describedby="inputGroupPrepend" required />
            <Form.Control.Feedback type="invalid">Please add an Address</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} controlId="validationCustom04">
          <Form.Label className="fw-medium">Whatsapp</Form.Label>
          <Form.Control required type="text" placeholder="Whatsapp" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label className="fw-medium">City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label className="fw-medium">Support Email</Form.Label>
          <Form.Control type="email" placeholder="email" required />
          <Form.Control.Feedback type="invalid">Please provide a valid Email.</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label className="fw-medium">Province</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label className="fw-medium">Postal Code</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Button type="submit" className="m-auto bg-success p-3 w-75">
        Save
      </Button>
    </Form>
  );
}

export default BusinessForm;
