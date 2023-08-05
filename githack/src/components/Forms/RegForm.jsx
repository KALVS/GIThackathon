import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
// import Button from "@mui/material/Button";
import { Form, Button } from 'react-bootstrap';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
// import { auth } from "../firebase";
import * as Yup from 'yup';
import FormModal from './Modal';

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

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
            'https://images.unsplash.com/photo-1615986201152-7686a4867f30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80'
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        console.log('signin');
        // Proceed to set the display name
        //  setDisplayName(user, userName);
        navigate('/getstarted');
        console.log(user);
        console.log('navigate to user Home');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      password: '',
      email: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().max(10, 'Must be 20 characters or less').required('Required')
    }),

    onSubmit: (values, { resetForm }) => {
      setShow(true);
      console.log(values);
      alert(JSON.stringify(values, null, 2));
      // setTimeout(() => {
      //   setShow(false);
      // }, 400);

      resetForm({ values: '' });
    }
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

        <Form.Group className="mb-5" controlId="formBasicPassword">
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

      {/* {show && <FormModal show={show} setshow={setShow} />} */}
    </>
  );
};

export default SignupForm;
