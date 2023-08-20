import React from "react";
import classes from "./About.module.css";
import Container from 'react-bootstrap/Container';
import IVM from "../../assets/IVM.png";
import {Row,Col} from 'react-bootstrap';
import MAN from "../../assets/MAN.png";
import PROFORCE from "../../assets/PROFORCE.png";
function AboutUs() {
  return (
    <>
  <Container>
             <div className={classes['intro-container']}>
             <h2 className="fs-2">Who we are</h2>
             </div>
              <p>We’re an organization dedicated to making it easy to recycle, get trash off the streets, and create jobs.</p>
              <div className={classes['intro-container']}>
             <h2 className="fs-2">Our Mission</h2>
             </div>
            <p>To clean neighborhoods and uplift communities by making recycling easy and accessible for all.</p>
 
            <Row >
            <div className={classes['intro-container']}>
             <h2 className="fs-2" >Our affiliates</h2>
             </div>  
           <div className="d-flex" s>
           <Col>
            <img src={IVM} alt="" />
            </Col>
           <Col>
            <img src={MAN} alt="" />
           </Col>
        <Col>
         <img src={PROFORCE} alt="" />
         </Col>
         </div>
        </Row>  
    </Container>    
      
    </>
  );
}


export default AboutUs;