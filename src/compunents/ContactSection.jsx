import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLine } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h2>CONTACT</h2>
          <div className="contact-methods">
            <div className="contact-method">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              <span>Facebook DOCTORYANYONG</span>
            </div>
            <div className="contact-method">
              <FontAwesomeIcon icon={faPhone} size="2x" />
              <span>Call 044-255945</span>
            </div>
            <div className="contact-method">
              <FontAwesomeIcon icon={faLine} size="2x" />
              <span>Line @478xtkb</span>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>สอบถาม/นัดหมายทางอีเมล</Form.Label>
              <Form.Control type="email" placeholder="กรอกอีเมลของท่าน" />
            </Form.Group>
            <Button variant="primary" type="submit">
              ส่งข้อความ
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
