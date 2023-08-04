import React from "react";
import classes from "./UserLogs.module.css";
import SignupForm from "../../components/Forms/RegForm";
function Register() {
  return (
    <div className={`${classes["register-container"]}`}>
      <div className={classes["register-hero-box-wrapper"]}>
        <div className={classes["register-overlay"]}>
          <center>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
              tempore voluptatem deleniti, reprehenderit ducimus quis, esse
              minima vitae facere culpa ad quaerat! Corporis tenetur aliquid
              soluta, odio nihil doloribus similique.
            </p>
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
    </div>
  );
}

export default Register;
