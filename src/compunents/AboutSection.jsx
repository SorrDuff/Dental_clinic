import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './AboutSection.css'; // ตรวจสอบว่าได้นำเข้า CSS ไว้ที่ด้านบนของไฟล์

const AboutSection = () => {
  return (
    <Container className="about-section my-5 text-center">
      <Row>
        <Col xs={12}>
          <h2 className="about-title">ABOUT US</h2>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col lg={6} className="mb-3 mb-lg-0">
          <Image src="https://notebookspec.com/web/wp-content/uploads/2015/01/kindsoffacebookprofilephotoswearesickofseeing1_1420801169.jpg" alt="About Us" roundedCircle fluid />
        </Col>
        <Col lg={6}>
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Dolor nullam commodo condimentum nisi commodo adipiscing a. Eu massa eros lectus integer felis vel. Tellus felis ut volutpat lacus. Dictum libero luctus vitae massa integer. Vitae aliquet pellentesque augue nunc.</p>
          <Button variant="outline-dark">LOAD MORE</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
