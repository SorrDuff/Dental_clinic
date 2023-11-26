import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLine } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const FooterSection = () => {
  return (
    <footer className="py-3 footer-section" style={{ backgroundColor: '#4a473e', color: '#fff' }}>
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
              <li>จัดฟัน    ฟันคุด ฟันฝัง</li>
              <li>รักษาราก   รากฟันเทียม</li>
              <li>ครอบฟัน    วิเนียร์</li>
              <li>ขูดหินปูน  อุดฟัน ถอนฟัน</li>
             
            </ul>
          </Col>
          <Col md={4} sm={12}>
            <h4>ช่องทางการติดต่อ</h4>
            <p><FontAwesomeIcon icon={faFacebook} /> DOCTORYANYONG</p>
            <p><FontAwesomeIcon icon={faPhone} /> 044-255945</p>
            <p><FontAwesomeIcon icon={faLine} /> @478xtkb</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterSection;
