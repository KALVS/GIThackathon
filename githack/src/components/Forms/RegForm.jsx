import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";
import * as Yup from "yup";
import GoogleButton from "react-google-button";

// import FormModal from "./Modal";

const SignupForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const provider = new GoogleAuthProvider();
  auth.languageCode = "it";

  const createUserHandler = function (email, password, displayname) {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsLoading(false);
        updateProfile(auth.currentUser, {
          displayName: displayname,
          photoURL:
            "https://images.unsplash.com/photo-1615986201152-7686a4867f30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80",
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        console.log("signin");
        // Proceed to set the display name
        //  setDisplayName(user, userName);
        console.log(user);
        navigate("/getstarted");
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

  const signInWithGoogleHandler = function () {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navigate("/getstarted");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
      createUserHandler(values.email, values.password, values.firstName);
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
      <center className="mb-3">
        <p>Or</p>

        <GoogleButton onClick={signInWithGoogleHandler} />
      </center>

      {/* {show && <FormModal show={show} setshow={setShow} />} */}
    </>
  );
};

export default SignupForm;
