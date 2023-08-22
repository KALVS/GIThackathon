import React from "react";
import classes from "./About.module.css";
import Container from 'react-bootstrap/Container';
import {Row,Col} from 'react-bootstrap';
import calendar from "../../assets/calendar.png";

function future() {
    return (
      <>
    <Container>
               <div className={classes['intro-container']}>
               <h2 className="fs-2">Request future recycling pick-ups</h2>
               </div>
               <p className="fs-3">Create an account to manage your bin pickup. No more waiting!</p> 
               
        <div class="row my-4">
             <div class="col-4">
              <img src={calendar} alt="" style={{ margin:'20px',width: '80%', height: 'auto' }} /></div>

             <div class="col-8">
            <p className="fs-3" style={{ margin:'100px' ,width: '70%', height: 'auto' }}>With your first bin and an account you can request pick ups and even schedule future pick ups! </p>
            </div>
        </div>

        <div className={classes["signUpWrapper"]}>
        <button>Individual Sign up</button>
        <button>Investor Sign up</button>
        </div>
        </Container> 
  </>
    );
};

export default future;
