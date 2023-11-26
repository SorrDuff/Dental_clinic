import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PricingSection.css';


const PricingSection = () => {
  const services = [
    { description: 'Lorem ipsum', price: '59,000 บาท' },
    { description: 'Lorem ipsum', price: '59,000 บาท' },
    { description: 'Lorem ipsum', price: '59,000 บาท' },
    { description: 'Lorem ipsum', price: '59,000 บาท' },
    { description: 'Lorem ipsum', price: '59,000 บาท' },
    
  ];

  return (
    <Container className="my-5 ">
      <Row>
        <Col xs={12} className="text-center">
          <h2>อัตราค่าบริการ</h2>
        </Col>
      </Row>
      <Row className="mt-3  bg-cream py-3">
        <Col className="">
          <h3>ทันตกรรมจัดฟัน</h3>
        </Col>
      </Row>
      {services.map((service, index) => (
       <Row key={index} className="justify-content-between align-items-center my-2 px-3">
       <Col xs={6} sm={6} md={4} lg={3} className="service-description">{service.description}</Col>
       <Col xs={6} sm={6} md={4} lg={3} className="text-md-right service-price">{service.price}</Col>
     </Row>
      ))}
    </Container>
  );
};

export default PricingSection;

