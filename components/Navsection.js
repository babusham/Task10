import React from 'react';
import { Link } from 'react-scroll';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';

const NavSection = () => {
  const navLinkStyle = {
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '20px',
  };
  return (
    <Container>
      <Nav className="justify-content-around" activeKey="/home">
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="chennai"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Chennai
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="kodaikanal"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Kodaikanal
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="madurai"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Madurai
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="kumbakonam"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Kumbakonam
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="theni"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Theni
          </Link>
        </Nav.Item>
      </Nav>
      <Nav className="justify-content-around" activeKey="/home">
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="rameshwaram"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Rameshwaram
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="ooty"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Ooty
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="kanyakumari"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Kanyakumari
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="yercaud"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Yercaud
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="hogenakkal"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Hogenakkal
          </Link>
        </Nav.Item>
      </Nav>
      <br />
    </Container>
  );
};

export default NavSection;