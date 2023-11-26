import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './ServicesSection.css'

const ServicesSection = () => {
  // Replace these with the actual paths to your images
  const images = [
    { src: 'https://notebookspec.com/web/wp-content/uploads/2015/01/kindsoffacebookprofilephotoswearesickofseeing1_1420801169.jpg', alt: 'Description of first image' },
    { src: 'https://notebookspec.com/web/wp-content/uploads/2015/01/kindsoffacebookprofilephotoswearesickofseeing1_1420801169.jpg', alt: 'Description of second image' },
    { src: 'https://notebookspec.com/web/wp-content/uploads/2015/01/kindsoffacebookprofilephotoswearesickofseeing1_1420801169.jpg', alt: 'Description of third image' },
    { src: 'https://notebookspec.com/web/wp-content/uploads/2015/01/kindsoffacebookprofilephotoswearesickofseeing1_1420801169.jpg', alt: 'Description of fourth image' },
    { src: 'https://notebookspec.com/web/wp-content/uploads/2015/01/kindsoffacebookprofilephotoswearesickofseeing1_1420801169.jpg', alt: 'Description of fifth image' },
    { src: 'https://notebookspec.com/web/wp-content/uploads/2015/01/kindsoffacebookprofilephotoswearesickofseeing1_1420801169.jpg', alt: 'Description of sixth image' },
    { src: 'https://notebookspec.com/web/wp-content/uploads/2015/01/kindsoffacebookprofilephotoswearesickofseeing1_1420801169.jpg', alt: 'Description of sixth image' },
  ];

  const topRowImages = images.slice(0, 4);
  const bottomRowImages = images.slice(4);

  return (
    <Container>
      <Row className="text-center">
        <Col>
        <h2 className="my-5">บริการของ YANYONG DENTAL CLINIC</h2>
        </Col>
      </Row>
      <Row>
        {images.slice(0, 4).map((img, index) => (
          <Col key={index} xs={6} md={3} className="mb-4">
            <Image src={img.src} alt={img.alt} thumbnail fluid />
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center">
        {images.slice(4).map((img, index) => (
          <Col key={index} xs={6} md={4} className="mb-4">
            <Image src={img.src} alt={img.alt} thumbnail fluid />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesSection;