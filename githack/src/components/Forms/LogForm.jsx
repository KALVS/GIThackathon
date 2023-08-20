import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import * as Yup from "yup";

// import FormModal from "./Modal";

const LogForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const signInHandler = function (email, password) {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsLoading(false);
        console.log(user);
        navigate("/flow2");
        console.log("navigate to user Home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
      signInHandler(values.email, values.password);
      // setTimeout(() => {
      //   setShow(false);
      // }, 400);

      resetForm({ values: "" });
    },
  });
  return (
    <>
      <Form onSubmit={formik.handleSubmit} className="mx-3">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="John Doe"
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-danger fw-bold">{formik.errors.firstName}</div>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="example@gmail.com"
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-danger fw-bold">{formik.errors.email}</div>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-danger fw-bold">{formik.errors.password}</div>
          ) : null}
        </Form.Group>

        <Button type="submit" variant="success" className="w-100 text-center">
          Get Started
        </Button>
      </Form>

      <center>
        <p>
          Don't have an account yet?
          <Link style={{ color: "#36DAC" }} to="/signup">
            SIgn Up
          </Link>
        </p>
      </center>
    </>
  );
};

export default LogForm;
