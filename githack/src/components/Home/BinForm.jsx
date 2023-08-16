import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";


function BinForm() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    zipcode: yup.string().required(),
    amount: yup.string().required(),
    recycleType: yup.string().required(),
    preferences: yup.string().required(),
  });

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{

          zipcode: "",
          amount: "",
          recycleType: "Select Type",
          preferences: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik01">
                <Form.Label>Zipcode</Form.Label>
                <Form.Control
                  type="number"
                  name="zipcode"
                  value={values.zipcode}
                  onChange={handleChange}
                  isValid={touched.zipcode && !errors.zipcode}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationFormik01">
                <Form.Label>Zipcode</Form.Label>
                
              <Form.Check
              type="radio"
                required
                name="terms"
                label="Open Now"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik0"
              />
                              
                              <Form.Check
              type="radio"
                required
                name="terms"
                label="Accepts bulk donations"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik0"
              />
                            {/* <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik0"
              /> */}
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>


              <Form.Group className="mb-3" md="6">
            </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="6" controlId="validationFormik02">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="dropdown"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3 mt-3 ml-1" >
              <Form.Group md="6">

              <Form.Label>Recycling Type</Form.Label>
              <Form.Select
                aria-label="Default select example"
                id="recycle"
                as={Col}
                
                >
                <option>Open this select menu</option>
                <option value="Plastics: bottles, containers">Plastics: bottles, containers</option>
                <option value="Electronics: computers, tv's">Electronics: computers, tv's</option>
                <option value="Paper and Cardboard">Paper and Cardboard</option>
                <option value="Glass: bottles, containers">
                  Glass: bottles, containers
                </option>
              </Form.Select>
                </Form.Group>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik0"
              />
            </Form.Group>
            <center>
              <p>No internet? No problem!</p>
              <h2>Call 1-800-111-1111</h2>
              <p>We will help you locate your nearest drop off center.</p>
            </center>
            <Button type="submit">Show Location</Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default BinForm;
