import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const TeamSection = () => {
  const teamMembers = [
    { name: 'Lorem ipsum', role: 'Role description', image: 'https://notebookspec.com/web/wp-content/uploads/2015/01/kindsoffacebookprofilephotoswearesickofseeing1_1420801169.jpg' },
    { name: 'Lorem ipsum', role: 'Role description', image: 'https://notebookspec.com/web/wp-content/uploads/2015/01/kindsoffacebookprofilephotoswearesickofseeing1_1420801169.jpg' },
  ];

  return (
    <Container className="my-5 text-center">
      <h2 className="mb-4">ทีมงานของเรา</h2>
      <Row>
        {teamMembers.map((member, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={6} className="mb-4 d-flex align-items-center justify-content-center">
            <div>
              <Image src={member.image} alt={member.name} roundedCircle fluid className="mb-3" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TeamSection;
