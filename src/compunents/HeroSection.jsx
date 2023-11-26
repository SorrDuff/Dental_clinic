import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './HeroSection.css'; 

const HeroSection = () => {
  const heroImageSrc = 'https://notebookspec.com/web/wp-content/uploads/2015/01/kindsoffacebookprofilephotoswearesickofseeing1_1420801169.jpg';
  const backgroundPatternSrc = 'https://png.pngtree.com/thumb_back/fh260/background/20210924/pngtree-soft-texture-abstract-style-cream-background-image_904545.png';

  return (
    <Container fluid style={{ backgroundImage: `url(${backgroundPatternSrc})`, padding: '40px 30px', marginTop: '60px' }}>
      <Row >
        <Col xs={12} md={7} className="text-center text-md-left">
          <h2>YANYONG </h2>
          <h1>DENTAL CLINIC </h1>
          <h4>Lorem ipsum dolor sit amet </h4>
          <h4>consectetur.</h4>
          <Button className="load-more-button mx-auto">LOAD MORE</Button>
        </Col>
        <Col xs={12} md={5} className="my-3 my-md-0">
          <Image src={heroImageSrc} alt="Dentist at work" className="img-fluid hero-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
