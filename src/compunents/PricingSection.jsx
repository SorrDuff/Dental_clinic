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
    <Container fluid className="my-5 px-0">
      <Row>
        <Col xs={12} className="text-center">
          <h2>อัตราค่าบริการ</h2>
        </Col>
      </Row>
      <Row className="justify-content-start bg-cream py-3">
        <Col lg={12} className="ps-4">
          <h3>ทันตกรรมจัดฟัน</h3>
        </Col>
      </Row>
      {services.map((service, index) => (
        <Row key={index} className="justify-content-between align-items-center my-2 px-3">
        <Col xs={12} sm={8} className="service-description">{service.description}</Col>
        <Col xs={12} sm={4} className="service-price text-sm-end">{service.price}</Col>
      </Row>
      ))}
    </Container>
  );
};

export default PricingSection;

