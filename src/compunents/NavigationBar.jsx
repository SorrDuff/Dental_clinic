// NavigationBar.jsx
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavigationBar.css'; // ตรวจสอบให้แน่ใจว่าไฟล์ CSS นี้เชื่อมโยงอย่างถูกต้อง

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top" expanded={expanded}>
      <Navbar.Brand href="#home">YANYONG DENTAL CLINIC</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#services" onClick={() => setExpanded(false)}>บริการ</Nav.Link>
          <Nav.Link href="#pricing" onClick={() => setExpanded(false)}>ราคาและบริการ</Nav.Link>
          <Nav.Link href="#about-us" onClick={() => setExpanded(false)}>ABOUT US</Nav.Link>
          <Nav.Link href="#contact" onClick={() => setExpanded(false)}>CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
