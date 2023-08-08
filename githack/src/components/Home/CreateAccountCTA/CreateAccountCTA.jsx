import React from "react";
import classes from "./CreateAccountCTA.module.css";
import Recycle from "../../../ui/CreateAccountCTA/Recycle";
import Calendar from "../../../ui/CreateAccountCTA/Calendar";

function CreateAccountCTA() {
  return (
    <div className={"my-5 mx-5"}>
        <div className={classes["container"]}>
        <h2 className="mb-5">Create an Account</h2>
            <div className={classes["cardContainer"]}>
                <div className={classes["card"]}>
                    <p className={classes['p']}>Track your progress</p>
                    <div className={classes['icon']}>
                    <Recycle />

                    </div>
                </div>
                <div className={classes["card"]}>
                <p className={classes['p']}>Schedule pickup</p>
                    <div className={classes['icon']}>

                    <Calendar />
                    </div>
                </div>
                <div className={classes["card"]}>
                    <strong className={classes['strong']}>
                        Creating an account is simple. All you need is a phone number and a bin.
                    </strong>
                </div>
            </div>
        </div>
        <p className={classes['CTAcaption']}>Make a difference in your community</p>
        <button className={classes["CTAbutton"]}>Sign up</button>
    </div>
  );
}

export default CreateAccountCTA;
