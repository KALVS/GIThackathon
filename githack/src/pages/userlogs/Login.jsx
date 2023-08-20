import React from "react";
import classes from "./UserLogs.module.css";
import SignupForm from "../../components/Forms/RegForm";
import { motion } from "framer-motion";
import LogForm from "../../components/Forms/LogForm";
function Login() {
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
              Continue our
              <br /> Journey towards
              <br />a cleaner , <br />
              greener <br /> tomorrow!
            </h1>
            <p>Go green with GreenTribe</p>
          </center>
        </div>
      </div>
      <div className={classes["register-form-container"]}>
        <center>
          <h1>GreenTrybe</h1>
          <p>Log In</p>
        </center>
        <LogForm />
      </div>
    </motion.div>
  );
}

export default Login;
