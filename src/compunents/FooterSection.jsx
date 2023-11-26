import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLine } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const FooterSection = () => {
  return (
    <footer className="footer-section" style={{ backgroundColor: '#4a473e', color: '#fff' }}>
      <Container>
        <Row>
          <Col md={4} sm={12}>
            <h4>YANYONG DENTAL CLINIC</h4>
            <p>
              31 ซอยรามคำแหง 81 แขวงสะพานสูง เขตสะพานสูง กรุงเทพมหานคร 10240
            </p>
          </Col>
          <Col md={4} sm={12}>
            <h4>บริการของเรา</h4>
            <ul className="list-unstyled">
              <li>จัดฟัน</li>
              <li>ทำฟัน</li>
              <li>ถอนฟัน</li>
              <li>ทำความสะอาดฟัน</li>
              <li>รักษารากฟัน</li>
              <li>เคลือบฟัน</li>
            </ul>
          </Col>
          <Col md={4} sm={12}>
            <h4>ติดต่อทางสังคม</h4>
            <p><FontAwesomeIcon icon={faFacebook} /> Facebook DOCTORYANYONG</p>
            <p><FontAwesomeIcon icon={faPhone} /> Call 044-255945</p>
            <p><FontAwesomeIcon icon={faLine} /> Line @478xtkb</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterSection;
