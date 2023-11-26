import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLine } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} className="text-center mb-4">
          <h2>CONTACT</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="contact-methods">
          <div className="contact-method mb-3">
            <FontAwesomeIcon icon={faFacebook} size="2x" className='me-2' />
            <span>DOCTORYANYONG</span>
          </div>
          <div className="contact-method mb-3">
            <FontAwesomeIcon icon={faPhone} size="2x" className='me-2' />
            <span>044-255945</span>
          </div>
          <div className="contact-method mb-3">
            <FontAwesomeIcon icon={faLine} size="2x" className='me-2' />
            <span>@478xtkb</span>
          </div>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>ลงทะเบียนรับข่าวสาร</Form.Label>
              <Form.Control type="email" placeholder="กรอกอีเมลของท่าน" />
            </Form.Group>
            <Button variant="outline-dark">ติดตาม</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
