

/* eslint-disable react/prop-types */
import ecoelektLogo from "../../assets/logo/ecoelekt.logo.svg";
import { Link } from "react-router-dom";
import Button from "../button/button.jsx";
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Header({ home, link1, link2, calculate, butonlink, name }) {
    return (
      <Navbar expand="lg" className="header">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand as={Link} to="/">
            <img id="header-logo" src={ecoelektLogo} alt="ecoelekt-logo" className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
          <Navbar.Collapse id="basic-navbar-nav" className="Navbar" > {/* Removi justify-content-end */}
            <Nav className="header-links text-center mx-auto"> {/* Adicionei mx-auto */}
              <Nav.Link as={Link} to={link1}>{home}</Nav.Link>
              <Nav.Link as={Link} to={link2}>{calculate}</Nav.Link>
            </Nav>
            <Button className='no-underline' link={butonlink} name={name} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }