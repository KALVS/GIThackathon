import React from "react";
import classes from "./UserLogs.module.css";
import SignupForm from "../../components/Forms/RegForm";
import { motion } from "framer-motion";
function Register() {
  const routeVariants = {
    initial: {
      y: "100vh",
    },
    final: {
      y: "0vh",
      transition: {
        type: "spring",
        mass: 0.4,
      },
    },
  };
  return (
    <motion.div
      className={`${classes["register-container"]}`}
      variants={routeVariants}
      initial="initial"
      animate="final">
      <div className={classes["register-hero-box-wrapper"]}>
        <div className={classes["register-overlay"]}>
          <center>
            <h1>
              Let's make our
              <br /> neighborhoods
              <br /> cleaner and <br />
              greener together!
            </h1>
            <p>Go green with GreenTribe</p>
          </center>
        </div>
      </div>
      <div className={classes["register-form-container"]}>
        <center>
          <h1>GreenTrybe</h1>
          <p>Create an account.</p>
        </center>
        <SignupForm />
      </div>
    </motion.div>
  );
}

export default Register;
