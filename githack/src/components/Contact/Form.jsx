import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import classes from './ContactForm.module.css';

const ContactForm = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select an option');
  const [message, setMessage] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <Container className="mt-5">
      <div className={classes['intro-container']}>
        <h2 className="fs-1">Get in touch</h2>
      </div>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="name">
              <Form.Label>Your name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                className={`${classes['custom-input']}`}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className={`${classes['custom-email']}`}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="helpOptions">
              <Form.Label>How can we help you?</Form.Label>
              <div className={classes['custom-select']}>
                <input
                  type="text"
                  placeholder={selectedOption}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
                {isDropdownOpen && (
                  <div className={classes['select-options']}>
                    <div
                      className={classes['option']}
                      onClick={() => handleOptionSelect('General Inquiry')}
                    >
                      Report bins: Lost/Stolen
                    </div>
                    {/* Other options */}
                  </div>
                )}
              </div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                className={`${classes['custom-email']}`}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="messageBox">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Hi! I have a question about..."
                className={`${classes['custom-message']}`}
                value={message}
                onChange={handleMessageChange}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ContactForm;




