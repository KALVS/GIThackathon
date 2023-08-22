import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './ContactForm.module.css';
import Container from 'react-bootstrap/Container';
import Phone from "../../ui/Phone";
import {Row,Col} from 'react-bootstrap';

function CallUs() {
    return(
     <Container className="mt-5">
      <Row>
            <Col>
            <div className={classes['call-container']}>
             <h2 className="fs-1">Need to reach us off the web?</h2>
             </div>
              <p >Whatsapp</p>
              <p >+234-40-1111-00000</p>
              <p>Or visit your nearest recycling center for a brochure!</p>
            
            </Col>
            <Col>
            <div className="icon">
               <Phone/>            
               </div>
            
            </Col>

      </Row>
    </Container>
    );

};
export default CallUs;